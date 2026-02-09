import ServicesEditor from '@/components/admin/ServicesEditor'
import type { Locale } from '@/lib/i18n/config'

export default async function AdminServicesPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    return (
        <div className="space-y-8">
            <ServicesEditor lang={lang as 'ar' | 'fr' | 'en'} />
        </div>
    )
}
