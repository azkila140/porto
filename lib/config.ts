export const siteConfig = {
    name: 'Nexus Logic',
    description: 'Full-Stack Marketing & Digital Agency',
    domain: 'nexuslogic.online',
    url: 'https://nexuslogic.online',
    ogImage: 'https://nexuslogic.online/og-image.jpg',
    links: {
        twitter: 'https://twitter.com/nexuslogic',
        github: 'https://github.com/nexuslogic',
    },
    adminEmail: process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'contact@nexuslogic.online',
}

export type SiteConfig = typeof siteConfig
