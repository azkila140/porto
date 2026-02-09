import type { Metadata } from 'next'
import { generateServiceMetadata } from '@/lib/seo/service-metadata'

export async function generateMetadata({ params }: { params: Promise<{ lang: 'ar' | 'en' | 'fr' }> }) {
    const { lang } = await params
    return generateServiceMetadata('automation', lang)
}

export default function AutomationLayout({
    children }: { children: React.ReactNode }) {
    return children
}
