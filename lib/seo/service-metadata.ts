import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

type Locale = 'ar' | 'en' | 'fr'

/**
 * Service Page SEO Metadata Generator
 * Generates comprehensive metadata for all service pillar pages
 */

// Branding & Identity Metadata
export function generateBrandingMetadata(lang: Locale): Metadata {
    const titles = {
        ar: 'تصميم الهوية التجارية والعلب الاحترافية | نيكسس لوجيك',
        en: 'Professional Brand Identity & Packaging Design | Nexus Logic',
        fr: 'Design Identité de Marque et Packaging Professionnel'
    }

    const descriptions = {
        ar: 'نبني هويتك التجارية من الصفر: تصميم شعار احترافي، دليل هوية كامل، قرطاسية، ومواد الافتتاح. خدماتتصميم متكاملة للمحلات الجديدة في السعودية والإمارات والمغرب وقطر.',
        en: 'We build your brand identity from scratch: professional logo design, complete brand guidelines, stationery, and launch materials. Integrated design services for new businesses in KSA, UAE, Morocco & Qatar.',
        fr: 'Nous construisons votre identité de marque de zéro: logo professionnel, directives complètes, papeterie, et supports de lancement pour le Maroc et le Golfe.'
    }

    return {
        title: titles[lang],
        description: descriptions[lang],
        keywords: [
            'تصميم هوية تجارية كاملة',
            'تصميم شعار احترافي',
            'Brand Identity Design KSA',
            'Logo Design Dubai',
            'دليل هوية بصرية',
            'Brand Guidelines',
            'تصميم القرطاسية',
            'Business Stationery Design',
            'مواد افتتاح محل',
            'Launch Materials Design'
        ],
        alternates: {
            canonical: `${siteConfig.url}/${lang}/services/branding`,
            languages: {
                'ar-SA': '/ar/services/branding',
                'en-US': '/en/services/branding',
                'fr-FR': '/fr/services/branding',
            }
        }
    }
}

// Digitalization & Google Maps SEO Metadata
export function generateDigitalizationMetadata(lang: Locale): Metadata {
    const titles = {
        ar: 'خرائط جوجل والرقمنة وحلول السيو المحلي | نيكسس لوجيك',
        en: 'Google Maps and Local SEO Digitalization Solutions | Nexus Logic',
        fr: 'Digitalisation et Solutions SEO Local Google Maps'
    }

    const descriptions = {
        ar: 'نساعدك في إنشاء ملف Google Business Profile احترافي، تحسين الظهور في خرائط جوجل، وإدارة التقييمات. حلول الرقمنة الأساسية للمحلات والعيادات والمطاعم في السعودية والإمارات.',
        en: 'We help create professional Google Business Profile, optimize Google Maps visibility, and manage reviews. Essential digitalization solutions for stores, clinics, and restaurants in KSA, UAE, Morocco & Qatar.',
        fr: 'Nous créons votre profil Google Business, optimisons visibilité Google Maps, et gérons avis pour le Maroc et le Golfe.'
    }

    return {
        title: titles[lang],
        description: descriptions[lang],
        keywords: [
            'إنشاء Google Business Profile',
            'تحسين ظهور محلي',
            'Google Maps Optimization',
            'خرائط جوجل للمحلات',
            'Local SEO KSA',
            'إدارة التقييمات',
            'Review Management',
            'Google My Business السعودية',
            'ظهور في خرائط جوجل',
            'Local Search Optimization'
        ],
        alternates: {
            canonical: `${siteConfig.url}/${lang}/services/google-maps-seo`,
            languages: {
                'ar-SA': '/ar/services/google-maps-seo',
                'en-US': '/en/services/google-maps-seo',
                'ar-FR': '/fr/services/google-maps-seo',
            }
        }
    }
}

// Custom Architecture & Platform Engineering Metadata
export function generateArchitectureMetadata(lang: Locale): Metadata {
    const titles = {
        ar: 'الهندسة الرقمية وتطوير المنصات المخصصة | Next.js 16 | نيكسس لوجيك',
        en: 'Digital Engineering & Custom Platform Development | Next.js 16 | Nexus Logic',
        fr: 'Ingénierie Numérique et Développement de Plateformes | Next.js 16'
    }

    const descriptions = {
        ar: 'نبني منصات ويب مخصصة بالكامل باستخدام Next.js 16، React، وأحدث التقنيات. حلول للمؤسسات التي تحتاج بوابات عملاء، منصات حجز، أو أنظمة مخصصة في السعودية والإمارات.',
        en: 'We build fully custom web platforms using Next.js 16, React, and modern technologies. Solutions for enterprises needing customer portals, booking platforms, or custom systems in KSA, UAE, Morocco & Qatar.',
        fr: 'Nous construisons plateformes web personnalisées avec Next.js 16 pour le Maroc et le Golfe.'
    }

    return {
        title: titles[lang],
        description: descriptions[lang],
        keywords: [
            'Next.js 16 Development KSA',
            'Custom Web Platform',
            'هندسة منصات ويب',
            'Enterprise Web Development',
            'React Development UAE',
            'منصات حجز مخصصة',
            'Custom Booking Platform',
            'بوابات عملاء',
            'Customer Portal Development',
            'منصات ويب للمؤسسات'
        ],
        alternates: {
            canonical: `${siteConfig.url}/${lang}/services/digital-engineering`,
            languages: {
                'ar-SA': '/ar/services/digital-engineering',
                'en-US': '/en/services/digital-engineering',
                'fr-FR': '/fr/services/digital-engineering',
            }
        }
    }
}

// Automation Logic & Intelligent Systems Metadata
export function generateAutomationMetadata(lang: Locale): Metadata {
    const titles = {
        ar: 'الأتمتة الذكية وأتمتة العمليات التجارية n8n | نيكسس لوجيك',
        en: 'Intelligent Automation & Business Process n8n | Nexus Logic',
        fr: 'Automatisation Intelligente et Processus Business n8n'
    }

    const descriptions = {
        ar: 'أتمتة العمليات المتكررة، تكامل أنظمة CRM وERP، أتمتة الفوترة والمحاسبة، و workflows ذكية لتوفير الوقت وتقليل الأخطاء. حلول أتمتة للشركات في السعودية والإمارات.',
        en: 'Automate repetitive processes, integrate CRM and ERP systems, automate invoicing and accounting, and intelligent workflows to save time and reduce errors. Automation solutions for businesses in KSA, UAE, Morocco & Qatar.',
        fr: 'Automatisation processus, intégration CRM/ERP, facturation automatique pour le Maroc et le Golfe.'
    }

    return {
        title: titles[lang],
        description: descriptions[lang],
        keywords: [
            'أتمتة العمليات التجارية',
            'Business Process Automation',
            'تكامل CRM وERP',
            'CRM ERP Integration',
            'أتمتة الفوترة',
            'Invoice Automation',
            'Workflow Automation KSA',
            'أتمتة ذكية',
            'Intelligent Automation UAE',
            'تقليل الأخطاء البشرية'
        ],
        alternates: {
            canonical: `${siteConfig.url}/${lang}/services/automation`,
            languages: {
                'ar-SA': '/ar/services/automation',
                'en-US': '/en/services/automation',
                'fr-FR': '/fr/services/automation',
            }
        }
    }
}

// Growth Studio & Marketing Automation Metadata
export function generateGrowthMetadata(lang: Locale): Metadata {
    const titles = {
        ar: 'استوديو النمو وصناعة المحتوى الإبداعي | نيكسس لوجيك',
        en: 'Growth Studio and Creative Content Marketing | Nexus Logic',
        fr: 'Studio de Croissance et Marketing de Contenu Créatif'
    }

    const descriptions = {
        ar: 'خدمات تسويق متكاملة: إنشاء المحتوى، إدارة السوشيال ميديا، حملات إعلانية، وتحسين محركات البحث (SEO/GEO). استراتيجيات نمو للشركات في السعودية، الإمارات، المغرب وقطر.',
        en: 'Integrated marketing services: content creation, social media management, ad campaigns and search engine optimization (SEO/GEO). Growth strategies for businesses in KSA, UAE, Morocco & Qatar.',
        fr: 'Services marketing intégrés: création contenu, gestion réseaux sociaux, campagnes publicitaires et SEO/GEO pour le Maroc et le Golfe.'
    }

    return {
        title: titles[lang],
        description: descriptions[lang],
        keywords: [
            'خدمات تسويق متكاملة',
            'Integrated Marketing Services',
            'إنشاء محتوى احترافي',
            'Content Creation KSA',
            'إدارة سوشيال ميديا',
            'Social Media Management',
            'GEO Services',
            'تحسين محركات البحث',
            'SEO & Content Marketing',
            'استراتيجيات نمو'
        ],
        alternates: {
            canonical: `${siteConfig.url}/${lang}/services/growth-content`,
            languages: {
                'ar-SA': '/ar/services/growth-content',
                'en-US': '/en/services/growth-content',
                'fr-FR': '/fr/services/growth-content',
            }
        }
    }
}

// Export all metadata generators
export const serviceMetadata = {
    branding: generateBrandingMetadata,
    digitalization: generateDigitalizationMetadata,
    architecture: generateArchitectureMetadata,
    automation: generateAutomationMetadata,
    growth: generateGrowthMetadata,
}
