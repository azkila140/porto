import { Tajawal } from 'next/font/google'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { isRTL, locales } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SliderProvider } from '@/lib/contexts/SliderContext'
import { GoogleTagManager } from '@next/third-parties/google'
import '@/app/globals.css'

const tajawal = Tajawal({
    weight: ['200', '300', '400', '500', '700', '800', '900'],
    subsets: ['arabic', 'latin'],
    variable: '--font-tajawal',
    display: 'swap',
})

export async function generateStaticParams() {
    return locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
    title: {
        template: `%s | ${siteConfig.name}`,
        default: `Nexus Logic - Digital Transformation Partner | شريك التحول الرقمي`,
    },
    description: 'Strategic Digital Ecosystem Partner for MENA: KSA, UAE, Morocco & Qatar. Enterprise solutions: Brand Identity, Custom Architecture, Intelligent Automation, Growth Acceleration. بناء النظام البيئي الرقمي للمؤسسات في الأسواق العربية.',
    keywords: [
        // Strategic Core
        'Digital Transformation Partner KSA',
        'Digital Ecosystem UAE',
        'شريك التحول الرقمي السعودية',
        'نظام بيئي رقمي متكامل',

        // Enterprise & ROI
        'Enterprise Web Development',
        'Business Automation Middle East',
        'ROI-driven Solutions',
        'حلول رقمية متكاملة للشركات',

        // Technology Stack
        'Next.js 16 Agency MENA',
        'Custom Software Development KSA',
        'System Integration Morocco',

        // Compliance & Enterprise
        'ZATCA E-invoicing',
        'الفوترة الإلكترونية',
        'Odoo Customization KSA',
        'SAP Integration UAE',
        'ERP Implementation Qatar',

        // Service Pillars
        'GEO Services Riyadh',
        'Marketing Automation MENA',
        'CRM Integration',
        'تصميم هوية تجارية كاملة',
        'أتمتة العمليات في الشركة',
        'وكالة تحول رقمي شاملة',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL('https://nexuslogic.online'),
    icons: {
        icon: [
            { url: '/favicon.jpg', type: 'image/jpeg' },
        ],
        apple: [
            { url: '/favicon.jpg', type: 'image/jpeg', sizes: '180x180' },
        ],
    },
    alternates: {
        canonical: siteConfig.url,
        languages: {
            'ar-SA': '/ar', // Primary market: Arabic Saudi
            'en-US': '/en',
            'fr-FR': '/fr', // Strategic for Morocco
        },
    },
    openGraph: {
        type: 'website',
        locale: 'ar_SA', // Arabic Saudi as primary for MENA markets
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: 'Nexus Logic | شريك التحول الرقمي في السعودية، الإمارات، المغرب وقطر',
        description: 'نبني النظام البيئي الرقمي لمؤسستك في الأسواق العربية. حلول Enterprise شاملة من التأسيس إلى الأتمتة الذكية والنمو المستدام.',
        images: [
            {
                url: '/og-image.png', // Relative path is automatically resolved by metadataBase
                width: 1200,
                height: 630,
                alt: 'Nexus Logic - Digital Transformation Partner',
                type: 'image/png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nexus Logic | Digital Transformation Partner MENA',
        description: 'Enterprise Digital Ecosystem Solutions for KSA, UAE, Morocco & Qatar. From Brand Identity to Intelligent Automation.',
        images: ['/og-image.png'],
        creator: '@nexuslogic',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const direction = isRTL(lang) ? 'rtl' : 'ltr'

    return (
        <html lang={lang} dir={direction} className={tajawal.variable}>
            <head>
                <link rel="preconnect" href="https://res.cloudinary.com" />
                <link rel="preconnect" href="https://images.unsplash.com" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#10b981" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            'name': siteConfig.name,
                            'url': siteConfig.url,
                            'logo': `${siteConfig.url}/logo.png`,
                            'description': siteConfig.description,
                            'address': {
                                '@type': 'PostalAddress',
                                'addressCountry': 'TN'
                            },
                            'contactPoint': {
                                '@type': 'ContactPoint',
                                'contactType': 'customer service',
                                'email': 'contact@nexuslogic.online',
                                'telephone': '+212708080440',
                                'availableLanguage': ['en', 'ar', 'fr']
                            }
                        })
                    }}
                />
            </head>
            <body className="min-h-screen bg-brand-dark font-sans antialiased">
                <GoogleTagManager gtmId="GTM-55WCVMFN" />
                <SliderProvider>
                    <Header lang={lang} />
                    <main className="pt-20">
                        {children}
                    </main>
                    <Footer lang={lang} />
                </SliderProvider>
            </body>
        </html>
    )
}
