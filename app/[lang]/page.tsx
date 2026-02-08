import type { Locale } from '@/lib/i18n/config'
import HeroSlider from '@/components/sections/HeroSlider'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { ShowcaseSlider } from '@/components/sections/ShowcaseSlider'
import { LeadForm } from '@/components/LeadForm'

export default async function HomePage({ params }: { params: { lang: Locale } }) {
    return (
        <main className="min-h-screen">
            <HeroSlider lang={params.lang} />
            <BentoGrid lang={params.lang} />
            <ShowcaseSlider lang={params.lang} />
            <LeadForm lang={params.lang} />
        </main>
    )
}
