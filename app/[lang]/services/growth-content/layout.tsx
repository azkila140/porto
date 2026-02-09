import type { Metadata } from 'next'
import { generateServiceMetadata } from '@/lib/seo/service-metadata'

type Props = {
    params: { lang: 'ar' | 'en' | 'fr' }
}

export async function generateMetadata({ params }: { params: Promise<{ lang: 'ar' | 'en' | 'fr' }> }) {
    const { lang } = await params
    return generateServiceMetadata('growth-content', lang)
}

export default function GrowthContentLayout({ children }: { children: React.ReactNode }) {
    return children
}
