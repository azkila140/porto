import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin/',
                    '/api/',
                    '/dashboard/',
                    '/portal/',
                    '/login',
                    '/ar/admin/',
                    '/en/admin/',
                    '/fr/admin/',
                ],
            },
        ],
        sitemap: 'https://nexuslogic.online/sitemap.xml',
    }
}
