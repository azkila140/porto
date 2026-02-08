import { getDictionary } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/i18n/config'
import { Hero } from '@/components/sections/Hero'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { ShowcaseSlider } from '@/components/sections/ShowcaseSlider'
import { LeadForm } from '@/components/LeadForm'

export default async function HomePage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang)

    return (
        <main className="min-h-screen">
            <Hero dict={dict} lang={params.lang} />
            <BentoGrid lang={params.lang} />
            <ShowcaseSlider lang={params.lang} />
            <LeadForm lang={params.lang} />
        </main>
    )
}
