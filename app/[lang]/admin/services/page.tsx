import ServicesEditor from '@/components/admin/ServicesEditor'
import type { Locale } from '@/lib/i18n/config'

export default function AdminServicesPage({ params }: { params: { lang: Locale } }) {
    return (
        <div className="space-y-8">
            <ServicesEditor lang={params.lang as 'ar' | 'fr' | 'en'} />
        </div>
    )
}
