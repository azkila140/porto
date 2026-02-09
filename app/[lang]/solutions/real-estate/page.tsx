import type { Metadata } from 'next'
import { getRealEstateSolutionSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas'
import { siteConfig } from '@/lib/config'
import { RealEstateView } from '@/components/solutions/RealEstateView'
import type { Locale } from '@/lib/i18n/config'

interface RealEstateSolutionProps {
    params: Promise<{
        lang: Locale
    }>
}

export async function generateMetadata({ params }: RealEstateSolutionProps): Promise<Metadata> {
    const { lang } = await params

    const titles = {
        ar: 'حلول النظام البيئي الرقمي للعقارات الفاخرة | نيكسس لوجيك',
        en: 'Digital Ecosystem Solutions for Luxury Real Estate | Nexus Logic',
        fr: 'Solutions d\'Écosystème Numérique pour l\'Immobilier de Luxe'
    }

    const descriptions = {
        ar: 'نظام CRM متكامل للعقارات، جولات افتراضية تفاعلية، أتمتة توليد العملاء المحتملين، وتحسين محركات البحث العقاري.',
        en: 'Integrated Real Estate CRM, Interactive Virtual Tours, Lead Generation Automation, and Real Estate SEO.',
        fr: 'CRM immobilier intégré, visites virtuelles interactives, automatisation de génération de leads et SEO immobilier.'
    }

    return {
        title: titles[lang],
        description: descriptions[lang],
        alternates: {
            canonical: `${siteConfig.url}/${lang}/solutions/real-estate`,
        },
        openGraph: {
            title: titles[lang],
            description: descriptions[lang],
            url: `${siteConfig.url}/${lang}/solutions/real-estate`,
            type: 'website',
        }
    }
}

export default async function RealEstateSolutionPage({ params }: RealEstateSolutionProps) {
    const { lang } = await params

    // Content by language
    const content = {
        ar: {
            hero: {
                title: 'حلول النظام البيئي الرقمي للعقارات الفاخرة',
                subtitle: 'من إدارة العملاء إلى الجولات الافتراضية - نبني منظومة رقمية متكاملة لمشاريعك العقارية',
                cta: 'احجز استشارة مجانية'
            },
            challenge: {
                title: 'التحديات التي تواجه قطاع العقارات',
                items: [
                    'صعوبة تتبع العملاء المحتملين وإدارتهم بكفاءة',
                    'تكلفة التسويق التقليدي المرتفعة مع عائد استثمار منخفض',
                    'عدم القدرة على عرض العقارات عن بُعد بطريقة فعالة',
                    'ضعف الظهور في نتائج البحث العقاري على Google'
                ]
            },
            solutions: {
                title: 'حلولنا المتكاملة',
                items: [
                    {
                        icon: 'Users',
                        title: 'نظام CRM للعقارات',
                        description: 'إدارة ذكية للعملاء المحتملين من أول استفسار حتى إتمام البيع مع أتمتة المتابعة',
                        features: ['تتبع رحلة العميل', 'أتمتة الرسائل', 'تحليلات متقدمة']
                    },
                    {
                        icon: 'Video',
                        title: 'جولات افتراضية 360°',
                        description: 'عرض العقارات بتقنية الواقع الافتراضي التفاعلي لجذب المشترين الدوليين',
                        features: ['جولات تفاعلية', 'متوافق مع الموبايل', 'تكامل مع الموقع']
                    },
                    {
                        icon: 'TrendingUp',
                        title: 'أتمتة توليد العملاء',
                        description: 'نظام ذكي لجذب وتحويل الزوار إلى عملاء محتملين مؤهلين',
                        features: ['نماذج ذكية', 'تكامل واتساب', 'تسجيل تلقائي']
                    },
                    {
                        icon: 'Search',
                        title: 'تحسين محركات البحث العقاري',
                        description: 'استراتيجيات SEO متخصصة لقطاع العقارات للظهور في أولى النتائج',
                        features: ['كلمات مفتاحية محلية', 'محتوى احترافي', 'Google My Business']
                    },
                ]
            }
        },
        en: {
            hero: {
                title: 'Digital Ecosystem Solutions for Luxury Real Estate',
                subtitle: 'From CRM to Virtual Tours - Building Your Complete Digital Infrastructure',
                cta: 'Book Free Consultation'
            },
            challenge: {
                title: 'Challenges Facing Real Estate Sector',
                items: [
                    'Difficulty tracking and managing leads efficiently',
                    'High traditional marketing costs with low ROI',
                    'Inability to showcase properties remotely effectively',
                    'Poor visibility in Google real estate searches'
                ]
            },
            solutions: {
                title: 'Our Integrated Solutions',
                items: [
                    {
                        icon: 'Users',
                        title: 'Real Estate CRM System',
                        description: 'Smart lead management from first inquiry to sale completion with automated follow-ups',
                        features: ['Customer journey tracking', 'Message automation', 'Advanced analytics']
                    },
                    {
                        icon: 'Video',
                        title: 'Virtual Tours 360°',
                        description: 'Showcase properties with interactive VR technology to attract international buyers',
                        features: ['Interactive tours', 'Mobile compatible', 'Website integration']
                    },
                    {
                        icon: 'TrendingUp',
                        title: 'Lead Generation Automation',
                        description: 'Intelligent system to attract and convert visitors into qualified leads',
                        features: ['Smart forms', 'WhatsApp integration', 'Auto-registration']
                    },
                    {
                        icon: 'Search',
                        title: 'Real Estate SEO',
                        description: 'Specialized SEO strategies for real estate to rank first in searches',
                        features: ['Local keywords', 'Professional content', 'Google My Business']
                    },
                ]
            }
        },
        fr: {
            hero: {
                title: 'Solutions d\'Écosystème Numérique pour l\'Immobilier de Luxe',
                subtitle: 'Du CRM aux Visites Virtuelles - Construction de Votre Infrastructure Numérique Complète',
                cta: 'Réserver une Consultation Gratuite'
            },
            challenge: {
                title: 'Défis du Secteur Immobilier',
                items: [
                    'Difficulté de suivi et gestion efficace des prospects',
                    'Coûts marketing traditionnels élevés avec faible ROI',
                    'Incapacité de présenter les propriétés à distance efficacement',
                    'Faible visibilité dans les recherches immobilières Google'
                ]
            },
            solutions: {
                title: 'Nos Solutions Intégrées',
                items: [
                    {
                        icon: 'Users',
                        title: 'Système CRM Immobilier',
                        description: 'Gestion intelligente des prospects de la première demande jusqu\'à la vente',
                        features: ['Suivi parcours client', 'Automation messages', 'Analyses avancées']
                    },
                    {
                        icon: 'Video',
                        title: 'Visites Virtuelles 360°',
                        description: 'Présentez vos biens avec la technologie VR interactive pour attirer les acheteurs internationaux',
                        features: ['Tours interactifs', 'Compatible mobile', 'Intégration site web']
                    },
                    {
                        icon: 'TrendingUp',
                        title: 'Automatisation Génération de Leads',
                        description: 'Système intelligent pour attirer et convertir les visiteurs en prospects qualifiés',
                        features: ['Formulaires intelligents', 'Intégration WhatsApp', 'Auto-enregistrement']
                    },
                    {
                        icon: 'Search',
                        title: 'SEO Immobilier',
                        description: 'Stratégies SEO spécialisées pour l\'immobilier',
                        features: ['Mots-clés locaux', 'Contenu professionnel', 'Google My Business']
                    },
                ]
            }
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getRealEstateSolutionSchema()) }} />
            <RealEstateView lang={lang} content={content[lang]} />
        </>
    )
}
