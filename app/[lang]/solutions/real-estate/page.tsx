import type { Metadata } from 'next'
import { getRealEstateSolutionSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { Building2, MapPin, Users, TrendingUp, Video, Search, Smartphone, BarChart3, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

type Locale = 'ar' | 'en' | 'fr'

interface RealEstateSolutionProps {
    params: {
        lang: Locale
    }
}

// SEO Metadata - Strategic Keywords for Real Estate
export async function generateMetadata({ params }: RealEstateSolutionProps): Promise<Metadata> {
    const { lang } = params

    const titles = {
        ar: 'حلول النظام البيئي الرقمي للعقارات الفاخرة | نيكسس لوجيك',
        en: 'Digital Ecosystem Solutions for Luxury Real Estate | Nexus Logic',
        fr: 'Solutions d\'Écosystème Numérique pour l\'Immobilier de Luxe'
    }

    const descriptions = {
        ar: 'نظام CRM متكامل للعقارات، جولات افتراضية تفاعلية، أتمتة توليد العملاء المحتملين، وتحسين محركات البحث العقاري. حلول شاملة للعقارات الفاخرة في السعودية والإمارات.',
        en: 'Integrated Real Estate CRM, Interactive Virtual Tours, Lead Generation Automation, and Real Estate SEO. Comprehensive solutions for luxury properties in KSA, UAE, Morocco & Qatar.',
        fr: 'CRM immobilier intégré, visites virtuelles interactives, automatisation de génération de leads et SEO immobilier pour le Maroc et le Golfe.'
    }

    return {
        title: titles[lang],
        description: descriptions[lang],
        keywords: [
            'Real estate SEO strategies',
            'Virtual Tours',
            'جولات افتراضية',
            'Lead generation for real estate',
            'CRM للعقارات',
            'Luxury apartments marketing Dubai',
            'Real estate digital transformation KSA',
            'تسويق العقارات الفاخرة',
            'نظام إدارة عقارات',
            'Property management system',
        ],
        alternates: {
            canonical: `${siteConfig.url}/${lang}/solutions/real-estate`,
            languages: {
                'ar-SA': '/ar/solutions/real-estate',
                'en-US': '/en/solutions/real-estate',
                'fr-FR': '/fr/solutions/real-estate',
            }
        },
        openGraph: {
            title: titles[lang],
            description: descriptions[lang],
            url: `${siteConfig.url}/${lang}/solutions/real-estate`,
            type: 'website',
            locale: lang === 'ar' ? 'ar_SA' : lang === 'fr' ? 'fr_FR' : 'en_US',
        }
    }
}

export default function RealEstateSolutionPage({ params }: RealEstateSolutionProps) {
    const { lang } = params

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
            },
            process: {
                title: 'كيف نعمل معك',
                steps: [
                    {
                        number: '01',
                        title: 'التحليل والتخطيط',
                        description: 'نحلل احتياجاتك الحالية ونضع خطة تحول رقمي مخصصة'
                    },
                    {
                        number: '02',
                        title: 'التنفيذ والتكامل',
                        description: 'نبني الحلول ونربطها مع أنظمتك الحالية'
                    },
                    {
                        number: '03',
                        title: 'التدريب والإطلاق',
                        description: 'ندرب فريقك ونطلق الحلول مع دعم مستمر'
                    }
                ]
            },
            faq: {
                title: 'الأسئلة الشائعة',
                items: [
                    {
                        q: 'ما تكلفة نظام CRM للعقارات؟',
                        a: 'تبدأ التكلفة من 15,000 ريال سعودي للنظام الأساسي، مع إمكانية التخصيص حسب حجم مشاريعك. نقدم خطط دفع مرنة وعائد استثمار مضمون خلال 6 أشهر.'
                    },
                    {
                        q: 'هل الجولات الافتراضية متوافقة مع الموبايل؟',
                        a: 'نعم، جميع الجولات الافتراضية التي ننتجها متوافقة 100% مع الهواتف الذكية والأجهزة اللوحية، مع تجربة مستخدم سلسة على جميع المتصفحات.'
                    },
                    {
                        q: 'كم من الوقت يستغرق تحسين الظهور في Google؟',
                        a: 'عادة نبدأ برؤية نتائج واضحة خلال 2-3 أشهر للكلمات المفتاحية المحلية، و4-6 أشهر للكلمات الأكثر تنافسية. نقدم تقارير شهرية مفصلة.'
                    }
                ]
            },
            cta: {
                title: 'جاهز لتحويل أعمالك العقارية رقمياً؟',
                description: 'احجز استشارة مجانية مع خبرائنا لمناقشة احتياجاتك',
                button: 'تواصل معنا'
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
            },
            process: {
                title: 'How We Work With You',
                steps: [
                    {
                        number: '01',
                        title: 'Analysis & Planning',
                        description: 'We analyze your current needs and create a custom digital transformation plan'
                    },
                    {
                        number: '02',
                        title: 'Implementation & Integration',
                        description: 'We build solutions and integrate them with your existing systems'
                    },
                    {
                        number: '03',
                        title: 'Training & Launch',
                        description: 'We train your team and launch with ongoing support'
                    }
                ]
            },
            faq: {
                title: 'Frequently Asked Questions',
                items: [
                    {
                        q: 'What is the cost of a Real Estate CRM system?',
                        a: 'Pricing starts from 15,000 SAR for the basic system, with customization options based on your project size. We offer flexible payment plans and guaranteed ROI within 6 months.'
                    },
                    {
                        q: 'Are virtual tours mobile-compatible?',
                        a: 'Yes, all virtual tours we produce are 100% compatible with smartphones and tablets, with a smooth user experience across all browsers.'
                    },
                    {
                        q: 'How long does it take to improve Google visibility?',
                        a: 'We typically see clear results within 2-3 months for local keywords, and 4-6 months for more competitive terms. We provide detailed monthly reports.'
                    }
                ]
            },
            cta: {
                title: 'Ready to Transform Your Real Estate Business Digitally?',
                description: 'Book a free consultation with our experts to discuss your needs',
                button: 'Contact Us'
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
            },
            process: {
                title: 'Comment Nous Travaillons',
                steps: [
                    {
                        number: '01',
                        title: 'Analyse & Planification',
                        description: 'Nous analysons vos besoins et créons un plan de transformation numérique personnalisé'
                    },
                    {
                        number: '02',
                        title: 'Implémentation & Intégration',
                        description: 'Nous construisons les solutions et les intégrons avec vos systèmes existants'
                    },
                    {
                        number: '03',
                        title: 'Formation & Lancement',
                        description: 'Nous formons votre équipe et lançons avec un support continu'
                    }
                ]
            },
            faq: {
                title: 'Questions Fréquentes',
                items: [
                    {
                        q: 'Quel est le coût d\'un système CRM immobilier?',
                        a: 'Les prix commencent à partir de 15 000 SAR pour le système de base, avec des options de personnalisation selon la taille de votre projet.'
                    },
                    {
                        q: 'Les visites virtuelles sont-elles compatibles mobile?',
                        a: 'Oui, toutes les visites virtuelles que nous produisons sont 100% compatibles avec les smartphones et tablettes.'
                    },
                    {
                        q: 'Combien de temps pour améliorer la visibilité Google?',
                        a: 'Nous voyons généralement des résultats clairs dans les 2-3 mois pour les mots-clés locaux, et 4-6 mois pour les termes plus compétitifs.'
                    }
                ]
            },
            cta: {
                title: 'Prêt à Transformer Votre Entreprise Immobilière?',
                description: 'Réservez une consultation gratuite avec nos experts',
                button: 'Nous Contacter'
            }
        }
    }

    const t = content[lang]
    const isRTL = lang === 'ar'

    // Icon mapping
    const iconMap: Record<string, any> = {
        Users, Video, TrendingUp, Search
    }

    // JSON-LD Schemas
    const realEstateSchema = getRealEstateSolutionSchema()
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: lang === 'ar' ? 'الرئيسية' : 'Home', url: `${siteConfig.url}/${lang}` },
        { name: lang === 'ar' ? 'الحلول' : 'Solutions', url: `${siteConfig.url}/${lang}/solutions` },
        { name: lang === 'ar' ? 'العقارات' : 'Real Estate', url: `${siteConfig.url}/${lang}/solutions/real-estate` },
    ])
    const faqSchema = getFAQSchema(t.faq.items.map(item => ({ question: item.q, answer: item.a })))

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className={`min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 ${isRTL ? 'rtl' : 'ltr'}`}>
                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald/10 via-transparent to-cyan-500/10" />

                    <div className="relative container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-emerald to-cyan-400 bg-clip-text text-transparent">
                                    {t.hero.title}
                                </h1>
                                <p className="text-xl text-gray-300 mb-8">
                                    {t.hero.subtitle}
                                </p>
                                <Link
                                    href={`/${lang}/contact`}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-brand-emerald hover:bg-brand-emerald/90 text-white rounded-lg font-semibold transition-all"
                                >
                                    {t.hero.cta}
                                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Challenge Section - GEO Optimized */}
                <section className="py-16 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                            {t.challenge.title}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {t.challenge.items.map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-6 bg-slate-800/50 rounded-lg border border-white/10">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                                        ✕
                                    </div>
                                    <p className="text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-16 text-white">
                            {t.solutions.title}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {t.solutions.items.map((solution, idx) => {
                                const Icon = iconMap[solution.icon]
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 hover:border-brand-emerald/50 transition-all group"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-brand-emerald/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <Icon className="w-7 h-7 text-brand-emerald" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                                        <p className="text-gray-400 mb-6">{solution.description}</p>
                                        <ul className="space-y-2">
                                            {solution.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">
                            {t.process.title}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {t.process.steps.map((step, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-6xl font-bold text-brand-emerald/20 mb-4">{step.number}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section - GEO Optimized */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-white">
                            {t.faq.title}
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-6">
                            {t.faq.items.map((faq, idx) => (
                                <div key={idx} className="p-6 bg-slate-800/50 rounded-lg border border-white/10">
                                    <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-brand-emerald/10 to-cyan-500/10">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            {t.cta.title}
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            {t.cta.description}
                        </p>
                        <Link
                            href={`/${lang}/contact`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-emerald hover:bg-brand-emerald/90 text-white rounded-lg font-semibold text-lg transition-all"
                        >
                            {t.cta.button}
                            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}
