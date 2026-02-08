import { headers } from 'next/headers'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}

// Generate JSON-LD structured data for the organization
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Nexus Logic',
        'url': 'https://porto-two-blue.vercel.app',
        'logo': 'https://porto-two-blue.vercel.app/logo.png',
        'description': 'Full-stack digital marketing and development agency specializing in web development, branding, automation, and growth strategies.',
        'address': {
            '@type': 'PostalAddress',
            'addressCountry': 'TN',
            'addressLocality': 'Tunis',
        },
        'contactPoint': {
            '@type': 'ContactPoint',
            'contactType': 'customer service',
            'email': 'contact@nexuslogic.com',
            'availableLanguage': ['en', 'ar', 'fr']
        },
        'sameAs': [
            'https://facebook.com/nexuslogic',
            'https://twitter.com/nexuslogic',
            'https://linkedin.com/company/nexuslogic',
            'https://instagram.com/nexuslogic'
        ],
        'areaServed': {
            '@type': 'GeoCircle',
            'geoMidpoint': {
                '@type': 'GeoCoordinates',
                'latitude': '36.8065',
                'longitude': '10.1815'
            },
            'geoRadius': 'Global'
        },
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Digital Services',
            'itemListElement': [
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Digital Engineering',
                        'description': 'Custom web and mobile application development'
                    }
                },
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Marketing Automation',
                        'description': 'Workflow automation and system integration'
                    }
                },
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Branding',
                        'description': 'Brand identity and visual design'
                    }
                }
            ]
        }
    }
}
