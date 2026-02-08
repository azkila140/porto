import { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'
import { industries } from '@/lib/data/solutions'
import { siteConfig } from '@/lib/config'

const domain = siteConfig.url

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/about',
        '/services',
        '/work',
        '/contact',
        '/services/digital-engineering',
        '/services/automation',
        '/services/branding',
        '/services/google-maps-seo',
        '/services/growth-content',
    ]

    const sitemap: MetadataRoute.Sitemap = []

    // Add routes for each locale
    locales.forEach((lang) => {
        routes.forEach((route) => {
            sitemap.push({
                url: `${domain}/${lang}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: route === '' ? 1 : 0.8,
            })
        })

        // Add industry solutions
        industries.forEach((industry) => {
            sitemap.push({
                url: `${domain}/${lang}/solutions/${industry}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            })
        })
    })

    return sitemap
}
