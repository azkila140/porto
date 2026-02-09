export const siteConfig = {
    name: 'Nexus Logic',
    tagline: {
        ar: 'شريك التحول الرقمي - نبني النظام البيئي الرقمي لأعمالك',
        en: 'Digital Transformation Partner - Building Your Digital Ecosystem',
        fr: 'Partenaire de Transformation Numérique'
    },
    description: {
        ar: 'نحن شريكك الاستراتيجي للتحول الرقمي في الأسواق العربية: السعودية، الإمارات، المغرب وقطر. نقدم حلول Enterprise شاملة: من التأسيس والهوية إلى الأتمتة الذكية والنمو المستدام',
        en: 'Your Strategic Digital Transformation Partner in KSA, UAE, Morocco & Qatar. Enterprise-grade solutions from Brand Identity to Intelligent Automation and Sustainable Growth',
        fr: 'Votre partenaire stratégique pour la transformation numérique au Maroc et dans le Golfe'
    },
    domain: 'nexuslogic.online',
    url: 'https://nexuslogic.online',
    ogImage: '/logo.png',

    // Strategic Keywords for MENA Markets
    keywords: {
        primary: [
            // Strategic Positioning
            'Digital Transformation Partner KSA',
            'Digital Ecosystem UAE',
            'شريك التحول الرقمي السعودية',
            'نظام بيئي رقمي متكامل',

            // Enterprise & B2B
            'Enterprise Web Development',
            'Business Automation KSA',
            'ROI-driven Digital Solutions',
            'حلول رقمية متكاملة للشركات',

            // Technical Excellence
            'Next.js 16 Agency Middle East',
            'Custom Software Development KSA',
            'Legacy System Integration',

            // Compliance & Enterprise
            'ZATCA E-invoicing الفوترة الإلكترونية',
            'Odoo Customization KSA',
            'SAP Integration UAE',
            'ERP Implementation Morocco',

            // Service-specific
            'GEO Services Riyadh',
            'Marketing Automation Qatar',
            'CRM Integration MENA',
        ],
        secondary: [
            'وكالة تحول رقمي شاملة',
            'شريك تقني لتطوير الأعمال',
            'خدمات تسويق وبرمجة في مكان واحد',
            'تصميم هوية تجارية كاملة',
            'أتمتة العمليات في الشركة',
        ]
    },

    // Target Markets
    areaServed: [
        'Saudi Arabia',
        'United Arab Emirates',
        'Morocco',
        'Qatar',
        'KSA',
        'UAE',
        'السعودية',
        'الإمارات',
        'المغرب',
        'قطر'
    ],

    links: {
        twitter: 'https://twitter.com/nexuslogic',
        github: 'https://github.com/nexuslogic',
        linkedin: 'https://linkedin.com/company/nexuslogic',
    },

    adminEmail: process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'contact@nexuslogic.online',
}

export type SiteConfig = typeof siteConfig
