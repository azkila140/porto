'use client'

import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import ProcessTimeline from '@/components/services/ProcessTimeline'
import CaseStudies from '@/components/services/CaseStudies'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Code, Smartphone, Cloud, Database, Zap, Shield } from 'lucide-react'
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas'
import { siteConfig } from '@/lib/config'


const content = {
    ar: {
        hero: {
            title: 'الهندسة الرقمية',
            subtitle: 'تطوير احترافي',
            description: 'نبني مواقع ويب وتطبيقات جوال متطورة بتقنيات حديثة تحول أفكارك إلى منتجات رقمية ناجحة',
            ctaText: 'احصل على عرض سعر',
            ctaLink: '/ar/contact'
        },
        features: {
            title: 'ما نقدمه',
            subtitle: 'حلول تقنية شاملة لتحويل أعمالك رقمياً',
            items: [
                {
                    icon: Code,
                    title: 'تطوير مواقع الويب',
                    description: 'مواقع سريعة ومتجاوبة باستخدام Next.js و React مع تصميم عصري وتجربة مستخدم استثنائية'
                },
                {
                    icon: Smartphone,
                    title: 'تطبيقات الجوال',
                    description: 'تطبيقات iOS و Android أصلية أو متعددة المنصات باستخدام React Native و Flutter'
                },
                {
                    icon: Cloud,
                    title: 'حلول السحابة',
                    description: 'بنية تحتية سحابية قابلة للتطوير على AWS و Google Cloud و Azure'
                },
                {
                    icon: Database,
                    title: 'قواعد البيانات',
                    description: 'تصميم وإدارة قواعد بيانات فعالة باستخدام PostgreSQL و MongoDB و Supabase'
                },
                {
                    icon: Zap,
                    title: 'APIs و Microservices',
                    description: 'بناء واجهات برمجية قوية وخدمات مصغرة بتقنيات Node.js و Python'
                },
                {
                    icon: Shield,
                    title: 'الأمان والحماية',
                    description: 'تطبيق أفضل ممارسات الأمان السيبراني وحماية البيانات'
                }
            ]
        },
        process: {
            title: 'عملية التطوير',
            steps: [
                {
                    number: 1,
                    title: 'الاكتشاف والتخطيط',
                    description: 'نبدأ بفهم احتياجاتك وأهدافك، ثم نضع خطة تفصيلية للمشروع مع تحديد التقنيات والميزانية والجدول الزمني',
                    duration: '1-2 أسابيع'
                },
                {
                    number: 2,
                    title: 'التصميم والنماذج',
                    description: 'نصمم واجهات المستخدم وتجربة المستخدم، ونقدم نماذج تفاعلية للمراجعة والموافقة',
                    duration: '2-3 أسابيع'
                },
                {
                    number: 3,
                    title: 'التطوير والبرمجة',
                    description: 'نبني المنتج باستخدام أحدث التقنيات مع مراجعات دورية وتحديثات مستمرة',
                    duration: '4-8 أسابيع'
                },
                {
                    number: 4,
                    title: 'الاختبار والإطلاق',
                    description: 'اختبار شامل للجودة والأداء والأمان، ثم الإطلاق مع دعم فني كامل',
                    duration: '1-2 أسابيع'
                }
            ]
        },
        caseStudies: {
            title: 'مشاريع ناجحة',
            items: [
                {
                    title: 'منصة التجارة الإلكترونية',
                    client: 'متجر أزياء فاخر',
                    challenge: 'يحتاج العميل إلى منصة تجارة إلكترونية متطورة تدعم اللغة العربية والدفع الإلكتروني المحلي',
                    solution: 'بنينا منصة Next.js كاملة مع Stripe و Supabase، تصميم متجاوب وتجربة مستخدم سلسة',
                    results: [
                        'زيادة 250% في المبيعات خلال 3 أشهر',
                        'تحسين سرعة التحميل بنسبة 80%',
                        'معدل تحويل 4.2% (ضعف المعدل السابق)'
                    ],
                    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
                    tags: ['Next.js', 'E-commerce', 'Stripe']
                },
                {
                    title: 'تطبيق إدارة المطاعم',
                    client: 'سلسلة مطاعم',
                    challenge: 'إدارة الطلبات والمخزون عبر 12 فرع بدون نظام موحد',
                    solution: 'تطبيق React Native مع لوحة تحكم ويب، مزامنة فورية، وتقارير تحليلية',
                    results: [
                        'توفير 15 ساعة عمل أسبوعياً',
                        'تقليل الأخطاء بنسبة 90%',
                        'رؤية فورية للمخزون عبر جميع الفروع'
                    ],
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
                    tags: ['React Native', 'Real-time', 'Analytics']
                }
            ]
        },
        faq: [
            {
                q: 'كم تكلفة تطوير منصة ويب مخصصة بـNext.js؟',
                a: 'تبدأ مشاريع Next.js المخصصة من 80,000 ريال للمنصات البسيطة، 150,000-300,000 ريال للمنصات متوسطة التعقيد (CRM، حجوزات)، و500,000+ ريال للمنصات Enterprise الكاملة.'
            },
            {
                q: 'كم يستغرق تطوير منصة ويب كاملة؟',
                a: 'عادة 8-16 أسبوع حسب التعقيد: أسبوعين للتخطيط والتصميم، 4-8 أسابيع للتطوير، وأسبوعين للاختبار والإطلاق.'
            }
        ],
        cta: {
            title: 'جاهز لبدء مشروعك؟',
            description: 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص'
        }
    },
    fr: {
        hero: {
            title: 'Ingénierie Numérique',
            subtitle: 'Développement Professionnel',
            description: 'Nous créons des sites web et applications mobiles avancés avec des technologies modernes qui transforment vos idées en produits numériques réussis',
            ctaText: 'Obtenir un Devis',
            ctaLink: '/fr/contact'
        },
        features: {
            title: 'Nos Services',
            subtitle: 'Solutions techniques complètes pour digitaliser votre entreprise',
            items: [
                {
                    icon: Code,
                    title: 'Développement Web',
                    description: 'Sites rapides et responsives avec Next.js et React, design moderne et expérience utilisateur exceptionnelle'
                },
                {
                    icon: Smartphone,
                    title: 'Applications Mobiles',
                    description: 'Applications iOS et Android natives ou cross-platform avec React Native et Flutter'
                },
                {
                    icon: Cloud,
                    title: 'Solutions Cloud',
                    description: 'Infrastructure cloud évolutive sur AWS, Google Cloud et Azure'
                },
                {
                    icon: Database,
                    title: 'Bases de Données',
                    description: 'Conception et gestion de bases de données efficaces avec PostgreSQL, MongoDB et Supabase'
                },
                {
                    icon: Zap,
                    title: 'APIs & Microservices',
                    description: 'Construction d\'APIs robustes et microservices avec Node.js et Python'
                },
                {
                    icon: Shield,
                    title: 'Sécurité',
                    description: 'Application des meilleures pratiques de cybersécurité et protection des données'
                }
            ]
        },
        process: {
            title: 'Processus de Développement',
            steps: [
                {
                    number: 1,
                    title: 'Découverte et Planification',
                    description: 'Nous commençons par comprendre vos besoins et objectifs, puis établissons un plan détaillé avec technologies, budget et calendrier',
                    duration: '1-2 semaines'
                },
                {
                    number: 2,
                    title: 'Design et Prototypes',
                    description: 'Conception UI/UX et création de prototypes interactifs pour validation',
                    duration: '2-3 semaines'
                },
                {
                    number: 3,
                    title: 'Développement',
                    description: 'Construction du produit avec les dernières technologies, revues régulières et mises à jour continues',
                    duration: '4-8 semaines'
                },
                {
                    number: 4,
                    title: 'Tests et Lancement',
                    description: 'Tests complets de qualité, performance et sécurité, puis lancement avec support technique complet',
                    duration: '1-2 semaines'
                }
            ]
        },
        caseStudies: {
            title: 'Projets Réussis',
            items: [
                {
                    title: 'Plateforme E-commerce',
                    client: 'Boutique de Mode Luxe',
                    challenge: 'Le client nécessite une plateforme e-commerce avancée supportant l\'arabe et les paiements locaux',
                    solution: 'Plateforme Next.js complète avec Stripe et Supabase, design responsive et UX fluide',
                    results: [
                        'Augmentation de 250% des ventes en 3 mois',
                        'Amélioration de 80% de la vitesse de chargement',
                        'Taux de conversion de 4.2% (double du précédent)'
                    ],
                    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
                    tags: ['Next.js', 'E-commerce', 'Stripe']
                },
                {
                    title: 'App Gestion Restaurant',
                    client: 'Chaîne de Restaurants',
                    challenge: 'Gestion des commandes et stocks sur 12 succursales sans système unifié',
                    solution: 'Application React Native avec dashboard web, synchronisation temps réel et analytics',
                    results: [
                        'Économie de 15 heures de travail par semaine',
                        'Réduction de 90% des erreurs',
                        'Visibilité instantanée des stocks sur toutes les succursales'
                    ],
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
                    tags: ['React Native', 'Real-time', 'Analytics']
                }
            ]
        },
        faq: [{ q: 'Combien coûte plateforme web Next.js personnalisée?', a: 'Projets Next.js: 80 000 SAR (simple), 150 000-300 000 SAR (moyen), 500 000+ SAR (enterprise).' }],
        cta: { title: 'Prêt à Démarrer Votre Projet?', description: 'Contactez-nous aujourd\'hui pour une consultation gratuite et un devis personnalisé' }
    },
    en: {
        hero: {
            title: 'Digital Engineering',
            subtitle: 'Professional Development',
            description: 'We build advanced web and mobile applications with modern technologies that transform your ideas into successful digital products',
            ctaText: 'Get a Quote',
            ctaLink: '/en/contact'
        },
        features: {
            title: 'What We Offer',
            subtitle: 'Comprehensive technical solutions to digitalize your business',
            items: [
                {
                    icon: Code,
                    title: 'Web Development',
                    description: 'Fast and responsive websites using Next.js and React with modern design and exceptional user experience'
                },
                {
                    icon: Smartphone,
                    title: 'Mobile Apps',
                    description: 'Native or cross-platform iOS and Android apps using React Native and Flutter'
                },
                {
                    icon: Cloud,
                    title: 'Cloud Solutions',
                    description: 'Scalable cloud infrastructure on AWS, Google Cloud, and Azure'
                },
                {
                    icon: Database,
                    title: 'Databases',
                    description: 'Efficient database design and management using PostgreSQL, MongoDB, and Supabase'
                },
                {
                    icon: Zap,
                    title: 'APIs & Microservices',
                    description: 'Building robust APIs and microservices with Node.js and Python'
                },
                {
                    icon: Shield,
                    title: 'Security',
                    description: 'Implementing cybersecurity best practices and data protection'
                }
            ]
        },
        process: {
            title: 'Development Process',
            steps: [
                {
                    number: 1,
                    title: 'Discovery & Planning',
                    description: 'We start by understanding your needs and goals, then create a detailed project plan with technologies, budget, and timeline',
                    duration: '1-2 weeks'
                },
                {
                    number: 2,
                    title: 'Design & Prototypes',
                    description: 'UI/UX design and interactive prototypes for review and approval',
                    duration: '2-3 weeks'
                },
                {
                    number: 3,
                    title: 'Development',
                    description: 'Building the product with latest technologies, regular reviews and continuous updates',
                    duration: '4-8 weeks'
                },
                {
                    number: 4,
                    title: 'Testing & Launch',
                    description: 'Comprehensive quality, performance, and security testing, then launch with full technical support',
                    duration: '1-2 weeks'
                }
            ]
        },
        caseStudies: {
            title: 'Success Stories',
            items: [
                {
                    title: 'E-commerce Platform',
                    client: 'Luxury Fashion Store',
                    challenge: 'Client needs advanced e-commerce platform supporting Arabic and local payment methods',
                    solution: 'Complete Next.js platform with Stripe and Supabase, responsive design and smooth UX',
                    results: [
                        '250% increase in sales within 3 months',
                        '80% improvement in loading speed',
                        '4.2% conversion rate (double the previous rate)'
                    ],
                    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
                    tags: ['Next.js', 'E-commerce', 'Stripe']
                },
                {
                    title: 'Restaurant Management App',
                    client: 'Restaurant Chain',
                    challenge: 'Managing orders and inventory across 12 branches without unified system',
                    solution: 'React Native app with web dashboard, real-time sync, and analytics',
                    results: [
                        'Saved 15 hours of work per week',
                        '90% reduction in errors',
                        'Instant inventory visibility across all branches'
                    ],
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
                    tags: ['React Native', 'Real-time', 'Analytics']
                }
            ]
        },
        faq: [
            { q: 'How much does a custom Next.js web platform cost?', a: 'Custom Next.js projects start from 80,000 SAR for simple platforms, 150,000-300,000 SAR for medium complexity (CRM, booking systems), and 500,000+ SAR for full Enterprise platforms.' },
            { q: 'How long does it take to develop a complete web platform?', a: 'Typically 8-16 weeks depending on complexity: 2 weeks for planning and design, 4-8 weeks for development, and 2 weeks for testing and launch.' }
        ],
        cta: { title: 'Ready to Start Your Project?', description: 'Contact us today for a free consultation and custom quote' }
    }
}

export default function DigitalEngineeringPage({ params }: { params: { lang: 'ar' | 'fr' | 'en' } }) {
    const { lang } = params
    const t = content[lang]
    const breadcrumbSchema = getBreadcrumbSchema([{ name: lang === 'ar' ? 'الرئيسية' : 'Home', url: `${siteConfig.url}/${lang}` }, { name: lang === 'ar' ? 'الخدمات' : 'Services', url: `${siteConfig.url}/${lang}/services` }, { name: lang === 'ar' ? 'الهندسة الرقمية' : 'Engineering', url: `${siteConfig.url}/${lang}/services/digital-engineering` }])
    const faqSchema = getFAQSchema(t.faq.map((item: any) => ({ question: item.q, answer: item.a })))
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <ServiceHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                description={t.hero.description}
                gradient="from-blue-600 to-cyan-500"
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
