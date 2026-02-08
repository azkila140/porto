'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { submitLead, type LeadFormData } from '@/lib/actions/leads'
import { cn } from '@/lib/utils'
import type { Locale } from '@/lib/i18n/config'

interface LeadFormProps {
    lang: Locale
}

const translations = {
    ar: {
        title: 'ابدأ مشروعك معنا',
        name: 'الاسم الكامل',
        whatsapp: 'رقم الواتساب',
        industry: 'المجال',
        service: 'الخدمة المطلوبة',
        budget: 'الميزانية',
        submit: 'إرسال الطلب',
        submitting: 'جاري الإرسال...',
        success: 'تم إرسال طلبك بنجاح!',
        error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
        industries: {
            medical: 'طبي',
            real_estate: 'عقارات',
            horeca: 'مطاعم وفنادق',
            retail: 'تجارة تجزئة',
            services: 'خدمات',
            education: 'تعليم',
            automotive: 'سيارات',
            finance: 'مالية',
            construction: 'إنشاءات',
            technology: 'تكنولوجيا',
            manufacturing: 'تصنيع',
            logistics: 'لوجستيات',
            other: 'أخرى',
        },
        services: {
            engineering: 'هندسة رقمية',
            automation: 'أتمتة',
            branding: 'هوية بصرية',
            maps: 'خرائط جوجل',
            growth: 'نمو وتسويق',
            all: 'جميع الخدمات',
        },
        budgets: {
            small: 'أقل من $5,000',
            medium: '$5,000 - $20,000',
            large: '$20,000 - $50,000',
            enterprise: 'أكثر من $50,000',
        },
    },
    fr: {
        title: 'Démarrez Votre Projet',
        name: 'Nom Complet',
        whatsapp: 'Numéro WhatsApp',
        industry: 'Secteur',
        service: 'Service Souhaité',
        budget: 'Budget',
        submit: 'Envoyer la Demande',
        submitting: 'Envoi en cours...',
        success: 'Demande envoyée avec succès!',
        error: 'Une erreur s\'est produite. Veuillez réessayer.',
        industries: {
            medical: 'Médical',
            real_estate: 'Immobilier',
            horeca: 'Hôtellerie-Restauration',
            retail: 'Commerce de Détail',
            services: 'Services',
            education: 'Éducation',
            automotive: 'Automobile',
            finance: 'Finance',
            construction: 'Construction',
            technology: 'Technologie',
            manufacturing: 'Fabrication',
            logistics: 'Logistique',
            other: 'Autre',
        },
        services: {
            engineering: 'Ingénierie Digitale',
            automation: 'Automatisation',
            branding: 'Identité Visuelle',
            maps: 'Google Maps',
            growth: 'Croissance & Marketing',
            all: 'Tous les Services',
        },
        budgets: {
            small: 'Moins de $5,000',
            medium: '$5,000 - $20,000',
            large: '$20,000 - $50,000',
            enterprise: 'Plus de $50,000',
        },
    },
    en: {
        title: 'Start Your Project',
        name: 'Full Name',
        whatsapp: 'WhatsApp Number',
        industry: 'Industry',
        service: 'Desired Service',
        budget: 'Budget',
        submit: 'Submit Request',
        submitting: 'Submitting...',
        success: 'Request submitted successfully!',
        error: 'An error occurred. Please try again.',
        industries: {
            medical: 'Medical',
            real_estate: 'Real Estate',
            horeca: 'Hotels & Restaurants',
            retail: 'Retail',
            services: 'Services',
            education: 'Education',
            automotive: 'Automotive',
            finance: 'Finance',
            construction: 'Construction',
            technology: 'Technology',
            manufacturing: 'Manufacturing',
            logistics: 'Logistics',
            other: 'Other',
        },
        services: {
            engineering: 'Digital Engineering',
            automation: 'Automation',
            branding: 'Brand Identity',
            maps: 'Google Maps',
            growth: 'Growth & Marketing',
            all: 'All Services',
        },
        budgets: {
            small: 'Under $5,000',
            medium: '$5,000 - $20,000',
            large: '$20,000 - $50,000',
            enterprise: 'Over $50,000',
        },
    },
}

export function LeadForm({ lang }: LeadFormProps) {
    const t = translations[lang]
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setMessage(null)

        const formData = new FormData(e.currentTarget)
        const data: LeadFormData = {
            name: formData.get('name') as string,
            whatsapp: formData.get('whatsapp') as string,
            industry: formData.get('industry') as any,
            service: formData.get('service') as any,
            budget: formData.get('budget') as any,
        }

        const result = await submitLead(data)

        if (result.success) {
            setMessage({ type: 'success', text: t.success })
                ; (e.target as HTMLFormElement).reset()
        } else {
            setMessage({ type: 'error', text: t.error })
        }

        setIsSubmitting(false)
    }

    return (
        <section className="py-24 px-4 bg-brand-dark">
            <div className="container mx-auto max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        {t.title}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                                {t.name}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
                            />
                        </div>

                        {/* WhatsApp */}
                        <div>
                            <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-gray-300">
                                {t.whatsapp}
                            </label>
                            <input
                                type="tel"
                                id="whatsapp"
                                name="whatsapp"
                                required
                                placeholder="+212 708 080 440"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
                            />
                        </div>

                        {/* Industry */}
                        <div>
                            <label htmlFor="industry" className="block text-sm font-medium mb-2 text-gray-300">
                                {t.industry}
                            </label>
                            <select
                                id="industry"
                                name="industry"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
                            >
                                {Object.entries(t.industries).map(([key, value]) => (
                                    <option key={key} value={key} className="bg-slate-900">
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Service */}
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-300">
                                {t.service}
                            </label>
                            <select
                                id="service"
                                name="service"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
                            >
                                {Object.entries(t.services).map(([key, value]) => (
                                    <option key={key} value={key} className="bg-slate-900">
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Budget */}
                        <div>
                            <label htmlFor="budget" className="block text-sm font-medium mb-2 text-gray-300">
                                {t.budget}
                            </label>
                            <select
                                id="budget"
                                name="budget"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
                            >
                                {Object.entries(t.budgets).map(([key, value]) => (
                                    <option key={key} value={key} className="bg-slate-900">
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                'w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all',
                                isSubmitting
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-brand-emerald hover:bg-emerald-600 hover:scale-105'
                            )}
                        >
                            {isSubmitting ? t.submitting : t.submit}
                        </button>

                        {/* Message */}
                        {message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn(
                                    'p-4 rounded-lg text-center',
                                    message.type === 'success' ? 'bg-brand-emerald/20 text-brand-emerald' : 'bg-red-500/20 text-red-400'
                                )}
                            >
                                {message.text}
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
