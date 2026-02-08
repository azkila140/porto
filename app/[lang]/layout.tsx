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
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        siteName: siteConfig.name,
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
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#10b981" />
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
