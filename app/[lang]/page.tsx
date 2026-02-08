import type { Locale } from '@/lib/i18n/config'
import HeroSlider from '@/components/sections/HeroSlider'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { ShowcaseSlider } from '@/components/sections/ShowcaseSlider'
import { LeadForm } from '@/components/LeadForm'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const titles = {
        ar: 'Nexus Logic - الوكالة المتكاملة للتسويق والحلول الرقمية',
        fr: 'Nexus Logic - Agence de Marketing et Solutions Digitales',
        en: 'Nexus Logic - Full-Stack Marketing & Digital Agency'
    }
    const descriptions = {
        ar: 'حوّل أفكارك إلى حلول رقمية متكاملة. تطوير ويب، أتمتة، هوية بصرية، وتسويق للنمو.',
        fr: 'Transformez vos idées en solutions numériques. Développement Web, Automatisation, Branding et Marketing de Croissance.',
        en: 'Transform your ideas into integrated digital solutions. Web Development, Automation, Branding, and Growth Marketing.'
    }

    return {
        title: titles[params.lang],
        description: descriptions[params.lang],
    }
}

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
