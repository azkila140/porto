/**
 * Reusable JSON-LD Schema Templates for SEO
 * Optimized for Generative Engine Optimization (GEO)
 */

import { siteConfig } from '@/lib/config'

type Locale = 'ar' | 'en' | 'fr'

/**
 * Organization Schema - For Home Page
 */
export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Nexus Logic',
        alternateName: 'نيكسس لوجيك',
        description: 'Strategic Digital Transformation Partner for enterprises in MENA (KSA, UAE, Morocco, Qatar). Building comprehensive digital ecosystems from brand identity to intelligent automation.',
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        image: `${siteConfig.url}/og-image.png`,

        areaServed: [
            {
                '@type': 'Country',
                name: 'Saudi Arabia',
                alternateName: 'المملكة العربية السعودية'
            },
            {
                '@type': 'Country',
                name: 'United Arab Emirates',
                alternateName: 'الإمارات العربية المتحدة'
            },
            {
                '@type': 'Country',
                name: 'Morocco',
                alternateName: 'المغرب'
            },
            {
                '@type': 'Country',
                name: 'Qatar',
                alternateName: 'قطر'
            }
        ],

        founder: {
            '@type': 'Organization',
            name: 'Nexus Logic'
        },

        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: siteConfig.adminEmail,
            availableLanguage: ['Arabic', 'English', 'French']
        },

        sameAs: [
            siteConfig.links.twitter,
            siteConfig.links.linkedin,
        ],

        makesOffer: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Digital Transformation Consulting',
                    description: 'Strategic consulting for digital ecosystem development and business transformation',
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Enterprise Software Development',
                    description: 'Custom software solutions with Next.js 16, Odoo, SAP integration, and legacy system modernization',
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Business Process Automation',
                    description: 'Intelligent automation for workflow optimization, ZATCA compliance, and ROI increase',
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Growth & Marketing Automation',
                    description: 'GEO services, marketing automation, and growth acceleration strategies',
                }
            }
        ],

        knowsAbout: [
            'Digital Transformation',
            'Enterprise Resource Planning',
            'Business Process Automation',
            'ZATCA E-invoicing Compliance',
            'Next.js Development',
            'Odoo Customization',
            'Marketing Automation',
            'GEO (Generative Engine Optimization)',
            'CRM Integration',
            'Legacy System Modernization'
        ],

        slogan: 'Building Your Digital Ecosystem | بناء النظام البيئي الرقمي',
    }
}

/**
 * Service/Product Schema Generator
 * @param name - Service name
 * @param description - Service description
 * @param category - Application category
 * @param features - List of features
 * @param keywords - SEO keywords
 */
export function getServiceSchema(params: {
    name: string
    description: string
    category: 'BusinessApplication' | 'DeveloperApplication' | 'DesignApplication'
    subcategory?: string
    features: string[]
    keywords: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: params.name,
        applicationCategory: params.category,
        applicationSubCategory: params.subcategory,
        description: params.description,

        offers: {
            '@type': 'Offer',
            price: 'Contact for pricing',
            priceCurrency: 'SAR',
            availability: 'https://schema.org/InStock',
            areaServed: siteConfig.areaServed
        },

        featureList: params.features,
        keywords: params.keywords,

        provider: {
            '@type': 'Organization',
            name: 'Nexus Logic',
            url: siteConfig.url
        }
    }
}

/**
 * FAQ Schema Generator
 * @param faqs - Array of question/answer pairs
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    }
}

/**
 * Breadcrumb Schema Generator
 * @param items - Array of breadcrumb items with name and url
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    }
}

/**
 * Sector-Specific Solution Schemas
 */

// Real Estate Solution
export function getRealEstateSolutionSchema() {
    return getServiceSchema({
        name: 'Nexus Logic - Real Estate Digital Ecosystem',
        description: 'Comprehensive digital transformation solutions for luxury real estate: CRM integration, virtual tours, lead generation automation, and SEO strategies tailored for KSA & UAE property markets.',
        category: 'BusinessApplication',
        subcategory: 'Real Estate CRM',
        features: [
            'نظام CRM للعقارات - Real Estate CRM',
            'جولات افتراضية تفاعلية - Interactive Virtual Tours 360°',
            'أتمتة توليد العملاء المحتملين - Lead Generation Automation',
            'تحسين محركات البحث العقاري - Real Estate SEO',
            'تكامل واتساب للتواصل الفوري - WhatsApp Integration',
            'تحليلات الأداء وROI - Performance Analytics'
        ],
        keywords: 'Real estate SEO, Virtual Tours, جولات افتراضية, CRM للعقارات, Luxury apartments marketing Dubai, lead generation real estate, property management KSA'
    })
}

// Healthcare Solution  
export function getHealthcareSolutionSchema() {
    return getServiceSchema({
        name: 'Nexus Logic - Healthcare Digital Ecosystem',
        description: 'Smart clinic management systems: EMR integration, appointment automation, no-show reduction, and patient experience enhancement for healthcare facilities in MENA.',
        category: 'BusinessApplication',
        subcategory: 'Clinic Management System',
        features: [
            'نظام إدارة العيادات الذكي - Smart Clinic Management',
            'السجلات الطبية الإلكترونية EMR - Electronic Medical Records',
            'أتمتة الحجوزات - Appointment Booking Automation',
            'تقليل نسبة الغياب - No-show Reduction',
            'تحسين تجربة المريض - Patient Experience Enhancement',
            'تكامل أنظمة الدفع - Payment Gateway Integration'
        ],
        keywords: 'Clinic management system, نظام إدارة العيادات, EMR, سجلات طبية, appointment automation, patient experience, healthcare KSA'
    })
}

// Logistics Solution
export function getLogisticsSolutionSchema() {
    return getServiceSchema({
        name: 'Nexus Logic - Logistics Digital Ecosystem',
        description: 'Supply chain optimization: Real-time tracking, last-mile delivery, WMS integration, and freight forwarding digitalization for logistics companies.',
        category: 'BusinessApplication',
        subcategory: 'Supply Chain Management',
        features: [
            'إدارة سلسلة التوريد - Supply Chain Management',
            'تتبع لحظي - Real-time Tracking',
            'تحسين التوصيل - Last-mile Delivery Optimization',
            'نظام إدارة المستودعات WMS - Warehouse Management System',
            'أتمتة الشحن - Freight Automation',
            'تحليلات الأداء - Performance Analytics'
        ],
        keywords: 'Supply chain management, تتبع لحظي, last-mile delivery, WMS, freight forwarding, logistics automation KSA'
    })
}

// Enterprise/ERP Solution
export function getEnterpriseSolutionSchema() {
    return getServiceSchema({
        name: 'Nexus Logic - Enterprise Digital Transformation',
        description: 'Enterprise-grade ERP solutions: Odoo customization, SAP integration, ZATCA e-invoicing compliance, and legacy system modernization for large organizations.',
        category: 'BusinessApplication',
        subcategory: 'Enterprise Resource Planning',
        features: [
            'تخصيص Odoo - Odoo Customization KSA',
            'تكامل SAP - SAP Integration',
            'الفوترة الإلكترونية ZATCA - E-invoicing Compliance',
            'تحديث الأنظمة القديمة - Legacy System Modernization',
            'تكامل الأنظمة - System Integration',
            'السيادة على البيانات - Data Sovereignty'
        ],
        keywords: 'Odoo customization KSA, SAP integration UAE, ZATCA e-invoicing, الفوترة الإلكترونية, ERP implementation cost, legacy system integration, enterprise software Qatar'
    })
}
