import { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

type ServiceMetadata = {
    ar: {
        title: string
        description: string
    }
    en: {
        title: string
        description: string
    }
    fr: {
        title: string
        description: string
    }
}

// Service-specific metadata optimized for SEO
export const serviceMetadata: Record<string, ServiceMetadata> = {
    branding: {
        ar: {
            title: 'تصميم الهوية التجارية والشعار الاحترافي',
            description: 'تصميم هوية بصرية كاملة وشعار احترافي | نيكسس لوجيك. خدمات برندينغ متكاملة: تصميم لوجو، دليل هوية، تغليف منتجات. احصل على عرض سعر'
        },
        en: {
            title: 'Brand Identity & Professional Logo Design',
            description: 'Complete visual identity design & professional logo | Nexus Logic. Branding services in Riyadh/Dubai: Logo, brand guidelines, packaging. Get a quote'
        },
        fr: {
            title: 'Design d\'Identité de Marque & Logo Professionnel',
            description: 'Design d\'identité visuelle complète | Nexus Logic. Services de branding à Riyadh/Dubai : Logo, charte graphique, packaging. Devis gratuit'
        }
    },
    'google-maps-seo': {
        ar: {
            title: 'توثيق موقع في خرائط جوجل - مسك كلمات جوجل',
            description: 'توثيق موقع في خرائط جوجل | نيكسس لوجيك. خدمات مسك كلمات جوجل وتحسين ظهور النشاط التجاري. احصل على استشارة مجانية الآن'
        },
        en: {
            title: 'Google Maps Verification & Local SEO Services',
            description: 'Google Maps verification & local SEO | Nexus Logic. Optimize your business presence in KSA/UAE. Free consultation available'
        },
        fr: {
            title: 'Vérification Google Maps & SEO Local',
            description: 'Vérification Google Maps & SEO local | Nexus Logic. Optimisez votre présence locale. Consultation gratuite'
        }
    },
    'digital-engineering': {
        ar: {
            title: 'تصميم متجر إلكتروني خاص وبرمجة تطبيقات',
            description: 'تصميم متجر إلكتروني خاص وبرمجة تطبيقات | نيكسس لوجيك. حلول Next.js، SaaS، ERP. شركة برمجة في الرياض. احصل على تطوير احترافي'
        },
        en: {
            title: 'Custom E-commerce & App Development Services',
            description: 'Custom e-commerce & app development | Nexus Logic. Next.js, SaaS, ERP solutions in KSA/UAE. Professional development services. Get a quote'
        },
        fr: {
            title: 'Développement E-commerce & Applications Sur Mesure',
            description: 'Développement e-commerce & applications sur mesure | Nexus Logic. Solutions Next.js, SaaS, ERP. Devis gratuit'
        }
    },
    automation: {
        ar: {
            title: 'ربط المتجر بالواتساب وأتمتة خدمة العملاء',
            description: 'ربط المتجر بالواتساب وأتمتة خدمة العملاء | نيكسس لوجيك. خدمات n8n، API Integration، أتمتة العمليات التجارية. وفر 70% من التكاليف'
        },
        en: {
            title: 'WhatsApp Business Automation & Workflow Services',
            description: 'WhatsApp Business automation & workflow services | Nexus Logic. n8n, API integration, business automation in KSA. Save 70% on operational costs'
        },
        fr: {
            title: 'Automatisation WhatsApp Business & Workflows',
            description: 'Automatisation WhatsApp Business & workflows | Nexus Logic. Services n8n, intégration API. Réduisez vos coûts de 70%'
        }
    },
    'growth-content': {
        ar: {
            title: 'إعلانات تيك توك وإنتاج فيديو ريلز إعلاني',
            description: 'إعلانات تيك توك وإنتاج فيديو ريلز إعلاني | نيكسس لوجيك. خدمات UGC، تسويق أداء، محتوى فيروسي. زد مبيعاتك الآن'
        },
        en: {
            title: 'TikTok Ads & Viral Video Production Services',
            description: 'TikTok ads & viral video production | Nexus Logic. UGC content, performance marketing agency in KSA/UAE. Boost your sales now'
        },
        fr: {
            title: 'Publicités TikTok & Production Vidéo Virale',
            description: 'Publicités TikTok & production vidéo | Nexus Logic. Contenu UGC, marketing de performance. Boostez vos ventes'
        }
    }
}

/**
 * Generate SEO-optimized metadata for service pages
 * @param serviceName - The service identifier (e.g., 'branding', 'automation')
 * @param lang - Language code ('ar' | 'en' | 'fr')
 * @param ogImage - Optional custom OG image path
 * @returns Complete Metadata object for Next.js
 */
export function generateServiceMetadata(
    serviceName: keyof typeof serviceMetadata,
    lang: 'ar' | 'en' | 'fr',
    ogImage?: string
): Metadata {
    const service = serviceMetadata[serviceName]
    const metadata = service[lang]

    const serviceSlug = serviceName
    const url = `${siteConfig.url}/${lang}/services/${serviceSlug}`
    const defaultOgImage = ogImage || `${siteConfig.url}/og-${serviceSlug}.jpg`

    const localeMap = {
        ar: 'ar_SA',
        en: 'en_US',
        fr: 'fr_FR'
    }

    return {
        title: metadata.title,
        description: metadata.description,
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            url,
            siteName: siteConfig.name,
            images: [{
                url: defaultOgImage,
                width: 1200,
                height: 630,
                alt: metadata.title
            }],
            locale: localeMap[lang],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: metadata.title,
            description: metadata.description,
            images: [defaultOgImage],
        },
        alternates: {
            canonical: url,
            languages: {
                'ar': `${siteConfig.url}/ar/services/${serviceSlug}`,
                'en': `${siteConfig.url}/en/services/${serviceSlug}`,
                'fr': `${siteConfig.url}/fr/services/${serviceSlug}`,
            }
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
    }
}

/**
 * Get keywords for a specific service from the site config
 * @param serviceName - The service identifier
 * @returns Array of relevant keywords
 */
export function getServiceKeywords(serviceName: keyof typeof serviceMetadata): string[] {
    const keywordMap: Record<keyof typeof serviceMetadata, string[]> = {
        branding: [
            'تصميم هوية بصرية كاملة',
            'تصميم شعار شركة احترافي',
            'Branding Agency Riyadh',
            'Branding Agency Dubai',
            'Corporate identity design KSA',
        ],
        'google-maps-seo': [
            'توثيق موقع في خرائط جوجل',
            'مسك كلمات جوجل',
            'Google Business Profile management',
            'Local SEO services KSA',
            'تحسين ظهور النشاط التجاري',
        ],
        'digital-engineering': [
            'تصميم متجر إلكتروني خاص',
            'برمجة تطبيق توصيل طلبات',
            'شركات برمجة في الرياض',
            'Next.js development agency',
            'Custom e-commerce development',
        ],
        automation: [
            'ربط المتجر بالواتساب',
            'WhatsApp Business API automation',
            'أتمتة خدمة العملاء',
            'n8n workflow services',
            'Business Automation KSA',
        ],
        'growth-content': [
            'إعلانات تيك توك للمتاجر',
            'إنتاج فيديو ريلز إعلاني',
            'UGC content creation',
            'Performance marketing agency KSA',
            'TikTok ads agency UAE',
        ],
    }

    return keywordMap[serviceName] || []
}
