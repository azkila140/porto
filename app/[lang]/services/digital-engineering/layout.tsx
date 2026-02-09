import type { Metadata } from 'next'
import { serviceMetadata } from '@/lib/seo/service-metadata'

type Props = {
    params: { lang: 'ar' | 'en' | 'fr' }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return serviceMetadata.architecture(params.lang)
}

export default function DigitalEngineeringLayout({ children }: { children: React.ReactNode }) {
    return children
}
