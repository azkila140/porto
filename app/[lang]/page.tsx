import type { Locale } from '@/lib/i18n/config'
import HeroSlider from '@/components/sections/HeroSlider'
import { BentoGrid } from '@/components/sections/BentoGrid'
import { ShowcaseSlider } from '@/components/sections/ShowcaseSlider'
import { LeadForm } from '@/components/LeadForm'
import type { Metadata } from 'next'
import { getCachedHeroSlides, getCachedServices, getCachedPortfolio } from '@/lib/services/dynamicData'

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
    const keywords = {
        ar: 'تطوير ويب, تسويق رقمي, هوية بصرية, أتمتة, SEO, تونس, وكالة تسويق',
        fr: 'développement web, marketing digital, branding, automatisation, SEO, Tunisie, agence digitale',
        en: 'web development, digital marketing, branding, automation, SEO, growth hacking, Tunisia, digital agency'
    }

    const baseUrl = 'https://porto-two-blue.vercel.app'

    return {
        title: titles[params.lang],
        description: descriptions[params.lang],
        keywords: keywords[params.lang],
        alternates: {
            canonical: `${baseUrl}/${params.lang}`,
            languages: {
                en: `${baseUrl}/en`,
                ar: `${baseUrl}/ar`,
                fr: `${baseUrl}/fr`,
            },
        },
        openGraph: {
            title: titles[params.lang],
            description: descriptions[params.lang],
            url: `${baseUrl}/${params.lang}`,
            siteName: 'Nexus Logic',
            locale: params.lang === 'ar' ? 'ar_TN' : params.lang === 'fr' ? 'fr_FR' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: titles[params.lang],
            description: descriptions[params.lang],
        },
    }
}

export default async function HomePage({ params }: { params: { lang: Locale } }) {
    // Fetch data on the server with caching
    const [heroSlides, services, portfolio] = await Promise.all([
        getCachedHeroSlides(params.lang),
        getCachedServices(params.lang),
        getCachedPortfolio(params.lang)
    ])

    return (
        <main className="min-h-screen">
            <HeroSlider lang={params.lang} initialSlides={heroSlides} />
            <BentoGrid lang={params.lang} initialServices={services} />
            <ShowcaseSlider lang={params.lang} initialItems={portfolio} />
            <LeadForm lang={params.lang} />
        </main>
    )
}
