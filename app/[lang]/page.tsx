import type { Locale } from '@/lib/i18n/config'
import HeroSlider from '@/components/sections/HeroSlider'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { ShowcaseSlider } from '@/components/sections/ShowcaseSlider'
import { LeadForm } from '@/components/LeadForm'
import { SEOIntroduction } from '@/components/sections/SEOIntroduction'
import type { Metadata } from 'next'
import { getCachedHeroSlides, getCachedServices, getCachedPortfolio } from '@/lib/services/dynamicData'

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params
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
    const keywords = {
        ar: 'تطوير ويب, تسويق رقمي, هوية بصرية, أتمتة, SEO, تونس, وكالة تسويق',
        fr: 'développement web, marketing digital, branding, automatisation, SEO, Tunisie, agence digitale',
        en: 'web development, digital marketing, branding, automation, SEO, growth hacking, Tunisia, digital agency'
    }

    const baseUrl = 'https://nexuslogic.online'

    return {
        title: titles[lang],
        description: descriptions[lang],
        keywords: keywords[lang],
        alternates: {
            canonical: `${baseUrl}/${lang}`,
            languages: {
                en: `${baseUrl}/en`,
                ar: `${baseUrl}/ar`,
                fr: `${baseUrl}/fr`,
            },
        },
        openGraph: {
            title: titles[lang],
            description: descriptions[lang],
            url: `${baseUrl}/${lang}`,
            siteName: 'Nexus Logic',
            locale: lang === 'ar' ? 'ar_TN' : lang === 'fr' ? 'fr_FR' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: titles[lang],
            description: descriptions[lang],
        },
    }
}

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    // Fetch data on the server with caching
    const [heroSlides, services, portfolio] = await Promise.all([
        getCachedHeroSlides(lang),
        getCachedServices(lang),
        getCachedPortfolio(lang)
    ])

    return (
        <main className="min-h-screen">
            <HeroSlider lang={lang} initialSlides={heroSlides} />
            <SEOIntroduction lang={lang} />
            <BentoGrid lang={lang} initialServices={services} />
            <ShowcaseSlider lang={lang} initialItems={portfolio} />
            <LeadForm lang={lang} />
        </main>
    )
}
