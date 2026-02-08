import { Tajawal } from 'next/font/google'
import type { Locale } from '@/lib/i18n/config'
import { isRTL, locales } from '@/lib/i18n/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
                <title>Nexus Logic - Full-Stack Marketing Agency</title>
                <meta name="description" content="Transform your ideas into integrated digital solutions" />
            </head>
            <body className="min-h-screen bg-brand-dark font-sans antialiased">
                <Header lang={params.lang} />
                <main className="pt-20">
                    {children}
                </main>
                <Footer lang={params.lang} />
            </body>
        </html>
    )
}
