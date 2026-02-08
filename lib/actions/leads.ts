'use server'

import { z } from 'zod'
import { supabase } from '@/lib/supabase/client'

// Lead form validation schema
const leadSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    whatsapp: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid WhatsApp number'),
    industry: z.enum([
        'medical',
        'real_estate',
        'horeca',
        'retail',
        'services',
        'education',
        'automotive',
        'finance',
        'construction',
        'technology',
        'manufacturing',
        'logistics',
        'other'
    ]),
    service: z.enum([
        'engineering',
        'automation',
        'branding',
        'maps',
        'growth',
        'all'
    ]),
    budget: z.enum([
        'small',     // < $5K
        'medium',    // $5K - $20K
        'large',     // $20K - $50K
        'enterprise' // > $50K
    ]),
})

export type LeadFormData = z.infer<typeof leadSchema>

export async function submitLead(data: LeadFormData) {
    try {
        // Validate form data
        const validatedData = leadSchema.parse(data)

        // Insert into Supabase
        const { data: leadData, error: dbError } = await supabase
            .from('leads')
            .insert([
                {
                    name: validatedData.name,
                    whatsapp: validatedData.whatsapp,
                    industry: validatedData.industry,
                    service: validatedData.service,
                    budget: validatedData.budget,
                    status: 'new',
                    created_at: new Date().toISOString(),
                },
            ])
            .select()
            .single()

        if (dbError) {
            console.error('Database error:', dbError)
            return { success: false, error: 'Failed to save lead' }
        }

        // Trigger n8n webhook (optional)
        const webhookUrl = process.env.N8N_WEBHOOK_URL
        if (webhookUrl) {
            try {
                await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        lead: validatedData,
                        timestamp: new Date().toISOString(),
                    }),
                })
            } catch (webhookError) {
                // Log but don't fail the submission
                console.error('Webhook error:', webhookError)
            }
        }

        return { success: true, data: leadData }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                error: 'Validation failed',
                issues: error.issues
            }
        }

        console.error('Unexpected error:', error)
        return { success: false, error: 'An unexpected error occurred' }
    }
}
