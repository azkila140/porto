import HeroSectionEditor from '@/components/admin/HeroSectionEditor'
import type { Locale } from '@/lib/i18n/config'

export default function AdminHeroPage({ params }: { params: { lang: Locale } }) {
    return (
        <div className="space-y-8">
            <HeroSectionEditor lang={params.lang as 'ar' | 'fr' | 'en'} />
        </div>
    )
}
