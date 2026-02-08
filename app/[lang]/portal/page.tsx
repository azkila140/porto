import { redirect } from 'next/navigation'
import type { Locale } from '@/lib/i18n/config'

interface PortalPageProps {
    params: { lang: Locale }
}

export default function PortalPage({ params }: PortalPageProps) {
    redirect(`/${params.lang}/dashboard`)
}
