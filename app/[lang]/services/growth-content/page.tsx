import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import ProcessTimeline from '@/components/services/ProcessTimeline'
import CaseStudies from '@/components/services/CaseStudies'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Video, FileText, TrendingUp, Target, BarChart3, Megaphone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Growth & Content Marketing | Nexus Logic',
    description: 'Video production, content strategy, and growth campaigns',
}

const content = {
    ar: {
        hero: {
            title: 'النمو والمحتوى',
            subtitle: 'تسويق محتوى فعّال',
            description: 'نبني استراتيجيات محتوى شاملة مع إنتاج فيديو احترافي وحملات نمو لزيادة عملائك وإيراداتك',
            ctaText: 'احصل على عرض سعر',
            ctaLink: '/ar/contact'
        },
        features: {
            title: 'خدمات النمو والمحتوى',
            subtitle: 'حلول تسويقية متكاملة لبناء جمهورك وزيادة مبيعاتك',
            items: [
                {
                    icon: Video,
                    title: 'إنتاج الفيديو',
                    description: 'فيديوهات تسويقية احترافية، ريلز، شورتس، وفيديوهات تعريفية تجذب الانتباه وتزيد التفاعل'
                },
                {
                    icon: FileText,
                    title: 'كتابة المحتوى',
                    description: 'محتوى تسويقي مقنع، مقالات SEO، نصوص إعلانية، ومحتوى سوشيال ميديا يحقق نتائج'
                },
                {
                    icon: TrendingUp,
                    title: 'استراتيجية النمو',
                    description: 'خطط نمو مخصصة تجمع بين التسويق الرقمي، المحتوى، والإعلانات لتحقيق أهدافك'
                },
                {
                    icon: Target,
                    title: 'حملات إعلانية',
                    description: 'إدارة حملات Google Ads و Facebook Ads مع استهداف دقيق وتحسين مستمر للعائد'
                },
                {
                    icon: BarChart3,
                    title: 'تحليل وتحسين',
                    description: 'تتبع الأداء، تحليل البيانات، وتحسين الحملات بناءً على النتائج الفعلية'
                },
                {
                    icon: Megaphone,
                    title: 'إدارة السوشيال ميديا',
                    description: 'إدارة كاملة لحساباتك على منصات التواصل مع محتوى يومي وتفاعل مع الجمهور'
                }
            ]
        },
        process: {
            title: 'عملية النمو',
            steps: [
                {
                    number: 1,
                    title: 'التحليل والاستراتيجية',
                    description: 'ندرس وضعك الحالي، جمهورك، ومنافسيك، ثم نضع استراتيجية نمو شاملة',
                    duration: '1 أسبوع'
                },
                {
                    number: 2,
                    title: 'إنتاج المحتوى',
                    description: 'ننتج محتوى عالي الجودة (فيديو، مقالات، تصاميم) حسب الخطة المتفق عليها',
                    duration: 'مستمر'
                },
                {
                    number: 3,
                    title: 'النشر والترويج',
                    description: 'ننشر المحتوى على القنوات المناسبة ونطلق الحملات الإعلانية المستهدفة',
                    duration: 'مستمر'
                },
                {
                    number: 4,
                    title: 'القياس والتحسين',
                    description: 'نتتبع النتائج، نحلل البيانات، ونحسن الاستراتيجية لتحقيق أفضل عائد',
                    duration: 'مستمر'
                }
            ]
        },
        caseStudies: {
            title: 'قصص نمو ملهمة',
            items: [
                {
                    title: 'نمو متجر إلكتروني بنسبة 500%',
                    client: 'متجر أزياء أونلاين',
                    challenge: 'متجر جديد بدون جمهور ومبيعات ضعيفة رغم المنتجات الجيدة',
                    solution: 'استراتيجية محتوى شاملة: 60 فيديو ريلز، حملات إعلانية مستهدفة، وتعاون مع مؤثرين',
                    results: [
                        'نمو المبيعات من 5,000 إلى 30,000 دولار شهرياً',
                        'زيادة المتابعين من 800 إلى 45,000 في 6 أشهر',
                        'عائد على الإعلانات 4.8x (كل دولار يحقق 4.8 دولار)'
                    ],
                    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
                    tags: ['E-commerce', 'Video', 'Ads']
                },
                {
                    title: 'شركة خدمات تضاعف عملائها',
                    client: 'شركة صيانة منازل',
                    challenge: 'الاعتماد على الإحالات فقط بدون تواجد رقمي قوي',
                    solution: 'محتوى تعليمي (50 مقالة SEO + 30 فيديو)، حملات Google Ads، وإدارة سوشيال ميديا',
                    results: [
                        'زيادة العملاء الجدد من 15 إلى 60 شهرياً',
                        'تصدر نتائج البحث لـ 25 كلمة مفتاحية',
                        'توفير 40% من ميزانية التسويق مع نتائج أفضل'
                    ],
                    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
                    tags: ['SEO', 'Content', 'Lead Gen']
                }
            ]
        },
        cta: {
            title: 'جاهز لتنمية أعمالك؟',
            description: 'احصل على استشارة مجانية واستراتيجية نمو مخصصة لمشروعك'
        }
    },
    fr: {
        hero: {
            title: 'Croissance & Contenu',
            subtitle: 'Marketing de Contenu Efficace',
            description: 'Nous construisons des stratégies de contenu complètes avec production vidéo professionnelle et campagnes de croissance pour augmenter vos clients et revenus',
            ctaText: 'Obtenir un Devis',
            ctaLink: '/fr/contact'
        },
        features: {
            title: 'Services Croissance & Contenu',
            subtitle: 'Solutions marketing intégrées pour construire votre audience et augmenter vos ventes',
            items: [
                {
                    icon: Video,
                    title: 'Production Vidéo',
                    description: 'Vidéos marketing professionnelles, reels, shorts et vidéos de présentation qui attirent l\'attention et augmentent l\'engagement'
                },
                {
                    icon: FileText,
                    title: 'Rédaction de Contenu',
                    description: 'Contenu marketing convaincant, articles SEO, textes publicitaires et contenu réseaux sociaux qui génère des résultats'
                },
                {
                    icon: TrendingUp,
                    title: 'Stratégie de Croissance',
                    description: 'Plans de croissance personnalisés combinant marketing digital, contenu et publicités pour atteindre vos objectifs'
                },
                {
                    icon: Target,
                    title: 'Campagnes Publicitaires',
                    description: 'Gestion de campagnes Google Ads et Facebook Ads avec ciblage précis et optimisation continue du retour'
                },
                {
                    icon: BarChart3,
                    title: 'Analyse & Optimisation',
                    description: 'Suivi des performances, analyse des données et optimisation des campagnes basée sur les résultats réels'
                },
                {
                    icon: Megaphone,
                    title: 'Gestion Réseaux Sociaux',
                    description: 'Gestion complète de vos comptes sur les plateformes sociales avec contenu quotidien et interaction avec l\'audience'
                }
            ]
        },
        process: {
            title: 'Processus de Croissance',
            steps: [
                {
                    number: 1,
                    title: 'Analyse & Stratégie',
                    description: 'Nous étudions votre situation actuelle, votre audience et vos concurrents, puis établissons une stratégie de croissance complète',
                    duration: '1 semaine'
                },
                {
                    number: 2,
                    title: 'Production de Contenu',
                    description: 'Nous produisons du contenu de haute qualité (vidéo, articles, designs) selon le plan convenu',
                    duration: 'Continu'
                },
                {
                    number: 3,
                    title: 'Publication & Promotion',
                    description: 'Nous publions le contenu sur les canaux appropriés et lançons les campagnes publicitaires ciblées',
                    duration: 'Continu'
                },
                {
                    number: 4,
                    title: 'Mesure & Amélioration',
                    description: 'Nous suivons les résultats, analysons les données et améliorons la stratégie pour obtenir le meilleur retour',
                    duration: 'Continu'
                }
            ]
        },
        caseStudies: {
            title: 'Histoires de Croissance Inspirantes',
            items: [
                {
                    title: 'Boutique en Ligne Croît de 500%',
                    client: 'Boutique de Mode en Ligne',
                    challenge: 'Nouvelle boutique sans audience et ventes faibles malgré de bons produits',
                    solution: 'Stratégie de contenu complète: 60 vidéos reels, campagnes publicitaires ciblées et collaboration avec influenceurs',
                    results: [
                        'Croissance des ventes de 5,000 à 30,000 dollars mensuels',
                        'Augmentation des followers de 800 à 45,000 en 6 mois',
                        'Retour sur publicités 4.8x (chaque dollar génère 4.8 dollars)'
                    ],
                    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
                    tags: ['E-commerce', 'Video', 'Ads']
                },
                {
                    title: 'Entreprise de Services Double ses Clients',
                    client: 'Entreprise Maintenance Maisons',
                    challenge: 'Dépendance aux références uniquement sans forte présence digitale',
                    solution: 'Contenu éducatif (50 articles SEO + 30 vidéos), campagnes Google Ads et gestion réseaux sociaux',
                    results: [
                        'Augmentation nouveaux clients de 15 à 60 mensuels',
                        'Domination résultats de recherche pour 25 mots-clés',
                        'Économie de 40% du budget marketing avec meilleurs résultats'
                    ],
                    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
                    tags: ['SEO', 'Content', 'Lead Gen']
                }
            ]
        },
        cta: {
            title: 'Prêt à Développer Votre Entreprise?',
            description: 'Obtenez une consultation gratuite et une stratégie de croissance personnalisée pour votre projet'
        }
    },
    en: {
        hero: {
            title: 'Growth & Content Marketing',
            subtitle: 'Effective Content Marketing',
            description: 'We build comprehensive content strategies with professional video production and growth campaigns to increase your customers and revenue',
            ctaText: 'Get a Quote',
            ctaLink: '/en/contact'
        },
        features: {
            title: 'Growth & Content Services',
            subtitle: 'Integrated marketing solutions to build your audience and increase sales',
            items: [
                {
                    icon: Video,
                    title: 'Video Production',
                    description: 'Professional marketing videos, reels, shorts, and explainer videos that grab attention and increase engagement'
                },
                {
                    icon: FileText,
                    title: 'Content Writing',
                    description: 'Compelling marketing content, SEO articles, ad copy, and social media content that delivers results'
                },
                {
                    icon: TrendingUp,
                    title: 'Growth Strategy',
                    description: 'Custom growth plans combining digital marketing, content, and advertising to achieve your goals'
                },
                {
                    icon: Target,
                    title: 'Ad Campaigns',
                    description: 'Google Ads and Facebook Ads campaign management with precise targeting and continuous ROI optimization'
                },
                {
                    icon: BarChart3,
                    title: 'Analytics & Optimization',
                    description: 'Performance tracking, data analysis, and campaign optimization based on actual results'
                },
                {
                    icon: Megaphone,
                    title: 'Social Media Management',
                    description: 'Complete management of your social platform accounts with daily content and audience engagement'
                }
            ]
        },
        process: {
            title: 'Growth Process',
            steps: [
                {
                    number: 1,
                    title: 'Analysis & Strategy',
                    description: 'We study your current situation, audience, and competitors, then create a comprehensive growth strategy',
                    duration: '1 week'
                },
                {
                    number: 2,
                    title: 'Content Production',
                    description: 'We produce high-quality content (video, articles, designs) according to the agreed plan',
                    duration: 'Ongoing'
                },
                {
                    number: 3,
                    title: 'Publishing & Promotion',
                    description: 'We publish content on appropriate channels and launch targeted advertising campaigns',
                    duration: 'Ongoing'
                },
                {
                    number: 4,
                    title: 'Measurement & Improvement',
                    description: 'We track results, analyze data, and improve strategy to achieve the best return',
                    duration: 'Ongoing'
                }
            ]
        },
        caseStudies: {
            title: 'Inspiring Growth Stories',
            items: [
                {
                    title: 'Online Store Grows 500%',
                    client: 'Online Fashion Store',
                    challenge: 'New store with no audience and weak sales despite good products',
                    solution: 'Comprehensive content strategy: 60 reels videos, targeted ad campaigns, and influencer collaborations',
                    results: [
                        'Sales growth from $5,000 to $30,000 monthly',
                        'Followers increased from 800 to 45,000 in 6 months',
                        '4.8x return on ads (every dollar generates $4.8)'
                    ],
                    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
                    tags: ['E-commerce', 'Video', 'Ads']
                },
                {
                    title: 'Service Company Doubles Clients',
                    client: 'Home Maintenance Company',
                    challenge: 'Relying on referrals only without strong digital presence',
                    solution: 'Educational content (50 SEO articles + 30 videos), Google Ads campaigns, and social media management',
                    results: [
                        'New clients increased from 15 to 60 monthly',
                        'Dominating search results for 25 keywords',
                        '40% savings on marketing budget with better results'
                    ],
                    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
                    tags: ['SEO', 'Content', 'Lead Gen']
                }
            ]
        },
        cta: {
            title: 'Ready to Grow Your Business?',
            description: 'Get a free consultation and custom growth strategy for your project'
        }
    }
}

export default function GrowthContentPage({ params }: { params: { lang: 'ar' | 'fr' | 'en' } }) {
    const { lang } = params
    const t = content[lang]

    return (
        <main>
            <ServiceHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                description={t.hero.description}
                gradient="from-indigo-600 to-blue-500"
                ctaText={t.hero.ctaText}
                ctaLink={t.hero.ctaLink}
            />

            <FeatureGrid
                title={t.features.title}
                subtitle={t.features.subtitle}
                features={t.features.items}
            />

            <ProcessTimeline
                title={t.process.title}
                steps={t.process.steps}
            />

            <CaseStudies
                title={t.caseStudies.title}
                studies={t.caseStudies.items}
            />

            <ServiceCTA
                title={t.cta.title}
                description={t.cta.description}
                lang={lang}
            />
        </main>
    )
}
