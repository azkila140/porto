import { LeadNotification } from '@/components/emails/LeadNotification';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { siteConfig } from '@/lib/config';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, service, budget, message } = body;

        const { data, error } = await resend.emails.send({
            from: `Nexus Logic <noreply@${siteConfig.domain}>`,
            to: [siteConfig.adminEmail],
            subject: `New Project Lead: ${name}`,
            react: LeadNotification({ name, email, phone, service, budget, message }),
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
