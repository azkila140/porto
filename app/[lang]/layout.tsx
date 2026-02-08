import { Tajawal } from 'next/font/google'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'
import { isRTL, locales } from '@/lib/i18n/config'
import { siteConfig } from '@/lib/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SliderProvider } from '@/lib/contexts/SliderContext'
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
        default: `${siteConfig.name} - Full-Stack Marketing Agency`,
    },
    description: siteConfig.description,
    keywords: ['digital agency', 'web development', 'marketing', 'branding', 'automation', 'SEO', 'growth hacking', 'Tunisia', 'full-stack agency'],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
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
            'en': '/en',
            'ar': '/ar',
            'fr': '/fr',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US', // Default, will be overridden by generateMetadata if needed
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: `${siteConfig.name} - Full-Stack Marketing Agency`,
        description: siteConfig.description,
        images: [
            {
                url: `${siteConfig.url}/og-image.png`,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - Digital Marketing & Development Agency`,
                type: 'image/png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.name} - Full-Stack Marketing Agency`,
        description: siteConfig.description,
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

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    const direction = isRTL(params.lang) ? 'rtl' : 'ltr'

    return (
        <html lang={params.lang} dir={direction} className={tajawal.variable}>
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
                <SliderProvider>
                    <Header lang={params.lang} />
                    <main className="pt-20">
                        {children}
                    </main>
                    <Footer lang={params.lang} />
                </SliderProvider>
            </body>
        </html>
    )
}
