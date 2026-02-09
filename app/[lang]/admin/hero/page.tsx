import HeroSectionEditor from '@/components/admin/HeroSectionEditor'
import type { Locale } from '@/lib/i18n/config'

export default async function AdminHeroPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    return (
        <div className="space-y-8">
            <HeroSectionEditor lang={lang as 'ar' | 'fr' | 'en'} />
        </div>
    )
}
