import type { Metadata } from 'next'
import { serviceMetadata } from '@/lib/seo/service-metadata'

type Props = {
    params: { lang: 'ar' | 'en' | 'fr' }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return serviceMetadata.digitalization(params.lang)
}

export default function GoogleMapsSEOLayout({ children }: { children: React.ReactNode }) {
    return children
}
