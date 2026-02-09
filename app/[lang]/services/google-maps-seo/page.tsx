import type { Metadata } from 'next'

import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import ProcessTimeline from '@/components/services/ProcessTimeline'
import CaseStudies from '@/components/services/CaseStudies'
import ServiceCTA from '@/components/services/ServiceCTA'
import ServiceDetails from '@/components/services/ServiceDetails'
import RelatedServices from '@/components/services/RelatedServices'
import { MapPin, Search, Star, TrendingUp, Users, Award } from 'lucide-react'
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas'
import { siteConfig } from '@/lib/config'

const content = {
    ar: {
        hero: {
            title: 'توثيق موقع في خرائط جوجل ومسك الكلمات',
            subtitle: 'خدمات تحسين ظهور النشاط التجاري وGoogle Business Profile',
            description: 'نحن نضع مشروعك على الخريطة حرفياً. من خلال توثيق موقع في خرائط جوجل وتحسين ملفك التجاري، نضمن تواصلك مع العملاء ومسك كلمات جوجل في منطقتك.',
            ctaText: 'احصل على عرض سعر',
            ctaLink: '/ar/contact'
        },
        details: {
            title: 'لماذا يعد توثيق خرائط جوجل سر نجاح الأنشطة التجارية؟',
            paragraphs: [
                'في الوقت الحالي، يبدأ أكثر من 80% من العملاء رحلة البحث عن خدمات محلية عبر هواتفهم الذكية. إذا لم تكن تستفيد من خدمة توثيق موقع في خرائط جوجل، فأنت تخسر عملاءك لصالح المنافسين. نحن في نيكسس لوجيك نتخصص في تحسين ظهور النشاط التجاري لضمان تصدرك لعمليات البحث.',
                'السيو المحلي (Local SEO services KSA) لا يقتصر فقط على التوثيق، بل يتعلق بإدارة السمعة الإلكترونية. ملف Google Business Profile المكتمل والمحدث باستمرار يعمل بمثابة "واجهة متجر رقمية". نحن نساعدك على أتمتة طلب التقييمات والرد على الاستفسارات، مما يرفع من تصنيفك.',
                'من خلال دمج استراتيجيات السيو المحلي مع تقنيات GEO، نضمن أن نشاطك التجاري يظهر في التوصيات. نحن نبني "الاستشهادات الرقمية" في الأدلة المحلية، مما يؤكد لجوجل أنك الخيار الأفضل للعميل في منطقته. خدماتنا تشمل أيضاً حل مشاكل إغلاق النشاط التجاري واستعادة الملفات.'
            ]
        },
        features: {
            title: 'خدمات السيو المحلي',
            subtitle: 'حلول متكاملة لتصدر نتائج البحث المحلية وجذب عملاء جدد',
            items: [
                {
                    icon: 'MapPin',
                    title: 'توثيق جوجل مابد',
                    description: 'إنشاء وتوثيق ملف نشاطك التجاري على جوجل مابد بشكل رسمي واحترافي'
                },
                {
                    icon: 'Search',
                    title: 'مسك كلمات جوجل',
                    description: 'تحسين موقعك للظهور في نتائج البحث المحلية "بالقرب مني" ومسك الكلمات المفتاحية'
                },
                {
                    icon: 'Star',
                    title: 'إدارة التقييمات',
                    description: 'استراتيجية للحصول على تقييمات إيجابية والرد على المراجعات بشكل احترافي'
                },
                {
                    icon: 'TrendingUp',
                    title: 'تحليل المنافسين',
                    description: 'دراسة منافسيك المحليين وتطوير استراتيجية للتفوق عليهم في الخرائط'
                },
                {
                    icon: 'Users',
                    title: 'بناء الاستشهادات',
                    description: 'إضافة نشاطك إلى أدلة الأعمال المحلية لتعزيز الثقة لدى محركات البحث'
                },
                {
                    icon: 'Award',
                    title: 'تقارير الأداء',
                    description: 'تقارير شهرية تفصيلية عن الترتيب، الزيارات، والمكالمات من خرائط جوجل'
                }
            ]
        },
        process: {
            title: 'عملية التحسين',
            steps: [
                {
                    number: 1,
                    title: 'التدقيق والتحليل',
                    description: 'نحلل وضعك الحالي على خرائط جوجل، نتائج البحث المحلية، ونقاط القوة والضعف',
                    duration: '3-5 أيام'
                },
                {
                    number: 2,
                    title: 'التوثيق والتحسين',
                    description: 'نوثق الموقع رسمياً، نضيف صور عالية الجودة، ونكمل جميع المعلومات',
                    duration: '1 أسبوع'
                },
                {
                    number: 3,
                    title: 'بناء الاستشهادات',
                    description: 'نضيف نشاطك إلى أدلة محلية ومنصات ذات صلة بمجالك',
                    duration: '2-3 أسابيع'
                },
                {
                    number: 4,
                    title: 'المراقبة والتحسين',
                    description: 'نراقب الأداء، نحسن الكلمات المفتاحية، ونقدم تقارير شهرية',
                    duration: 'مستمر'
                }
            ]
        },
        caseStudies: {
            title: 'نتائج حقيقية',
            items: [
                {
                    title: 'مطعم محلي يتصدر النتائج',
                    client: 'مطعم البيت الشامي',
                    challenge: 'مطعم جديد لا يظهر في نتائج البحث المحلية رغم الموقع الممتاز',
                    solution: 'حسّنا ملف Google Business، أضفنا 100+ صورة احترافية، وبنينا استشهادات محلية',
                    results: [
                        'الظهور في المراكز الثلاثة الأولى لـ 15 كلمة مفتاحية',
                        'زيادة 320% في المكالمات من خرائط جوجل',
                        'نمو 450% في الزيارات إلى الموقع من البحث المحلي'
                    ],
                    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
                    tags: ['Google Maps SEO', 'Local Listing', 'Restaurant Marketing']
                },
                {
                    title: 'عيادة طبية تجذب مرضى جدد',
                    client: 'عيادة الدكتور أحمد',
                    challenge: 'عيادة طبية تواجه منافسة شديدة من 20+ عيادة في نفس المنطقة',
                    solution: 'استراتيجية سيو محلية متكاملة مع تحسين التقييمات وإدارة المحتوى',
                    results: [
                        'تصدر نتائج "طبيب أسنان بالقرب مني"',
                        'زيادة التقييمات من 12 إلى 180 تقييم (4.9 نجوم)',
                        '65 موعد جديد شهرياً من خرائط جوجل'
                    ],
                    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
                    tags: ['Healthcare SEO', 'Patient Reviews', 'Clinic Ranking']
                }
            ]
        },
        faq: [
            {
                q: 'كم تكلفة توثيق موقع في خرائط جوجل؟',
                a: 'التوثيق الأساسي يبدأ من 500 ريال. باقات السيو المحلي الشهرية تبدأ من 3,000 ريال وتشمل: تحسين مستمر، إدارة تقييمات، ومسك كلمات جوجل.'
            },
            {
                q: 'كم يستغرق الظهور في خرائط جوجل؟',
                a: 'بعد التوثيق، تظهر فوراً. لكن تصدر النتائج الأولى (Top 3 Pack) يحتاج 1-3 أشهر من العمل المستمر على تحسين الملف والاستشهادات.'
            }
        ],
        cta: {
            title: 'جاهز للظهور في خرائط جوجل؟',
            description: 'احصل على تدقيق مجاني لملفك واكتشف فرص مسك الكلمات'
        }
    },
    fr: {
        hero: {
            title: 'Google Maps & SEO Local',
            subtitle: 'Visibilité Locale Forte',
            description: 'Nous optimisons votre présence sur Google Maps et les résultats de recherche locaux pour attirer plus de clients dans votre région',
            ctaText: 'Obtenir un Devis',
            ctaLink: '/fr/contact'
        },
        features: {
            title: 'Services SEO Local',
            subtitle: 'Solutions complètes pour dominer les résultats de recherche locaux et attirer de nouveaux clients',
            items: [
                {
                    icon: 'MapPin',
                    title: 'Optimisation Google Business',
                    description: 'Création et optimisation de votre profil d\'entreprise Google avec informations complètes et photos professionnelles'
                },
                {
                    icon: 'Search',
                    title: 'SEO Local',
                    description: 'Optimisation de votre site pour apparaître dans les résultats de recherche locaux "près de moi" et attirer les clients de la région'
                },
                {
                    icon: 'Star',
                    title: 'Gestion des Avis',
                    description: 'Stratégie pour obtenir des avis positifs et répondre aux commentaires de manière professionnelle'
                },
                {
                    icon: 'TrendingUp',
                    title: 'Analyse Concurrentielle',
                    description: 'Étude de vos concurrents locaux et développement d\'une stratégie pour les surpasser dans les résultats'
                },
                {
                    icon: 'Users',
                    title: 'Construction Citations',
                    description: 'Ajout de votre entreprise aux annuaires d\'entreprises locales et plateformes pertinentes'
                },
                {
                    icon: 'Award',
                    title: 'Rapports Performance',
                    description: 'Rapports mensuels détaillés sur le classement, les visites et les appels depuis Google Maps'
                }
            ]
        },
        process: {
            title: 'Processus d\'Optimisation',
            steps: [
                {
                    number: 1,
                    title: 'Audit & Analyse',
                    description: 'Nous analysons votre position actuelle sur Google Maps, résultats de recherche locaux, forces et faiblesses',
                    duration: '3-5 jours'
                },
                {
                    number: 2,
                    title: 'Configuration & Optimisation',
                    description: 'Nous optimisons le profil Google Business, ajoutons des photos haute qualité et complétons toutes les informations',
                    duration: '1 semaine'
                },
                {
                    number: 3,
                    title: 'Construction Citations',
                    description: 'Nous ajoutons votre entreprise à 50+ annuaires locaux et plateformes liées à votre secteur',
                    duration: '2-3 semaines'
                },
                {
                    number: 4,
                    title: 'Surveillance & Amélioration',
                    description: 'Nous surveillons les performances, optimisons selon les données et fournissons des rapports mensuels',
                    duration: 'Continu'
                }
            ]
        },
        caseStudies: {
            title: 'Résultats Réels',
            items: [
                {
                    title: 'Restaurant Local Domine Résultats',
                    client: 'Restaurant Al Bayt Shami',
                    challenge: 'Nouveau restaurant n\'apparaissant pas dans les résultats de recherche locaux malgré excellent emplacement',
                    solution: 'Optimisation profil Google Business, ajout de 100+ photos professionnelles et construction de citations locales',
                    results: [
                        'Apparition dans le top 3 pour 15 mots-clés',
                        'Augmentation de 320% des appels depuis Google Maps',
                        'Croissance de 450% des visites au site depuis la recherche locale'
                    ],
                    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
                    tags: ['Google Maps', 'Local SEO', 'Restaurant']
                },
                {
                    title: 'Clinique Médicale Attire Nouveaux Patients',
                    client: 'Clinique Dr. Ahmed',
                    challenge: 'Clinique médicale face à forte concurrence de 20+ cliniques dans la même zone',
                    solution: 'Stratégie SEO local complète avec optimisation des avis et gestion de contenu',
                    results: [
                        'Domination résultats "dentiste près de moi"',
                        'Augmentation avis de 12 à 180 avis (4.9 étoiles)',
                        '65 nouveaux rendez-vous mensuels depuis Google Maps'
                    ],
                    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
                    tags: ['Healthcare', 'Reviews', 'Rankings']
                }
            ]
        },
        faq: [
            {
                q: 'Combien coûtent les services d\'optimisation Google Maps?',
                a: 'Forfaits SEO local à partir de 3 000 SAR/mois incluant: configuration Google Business, contenu hebdomadaire, gestion avis, rapports mensuels.'
            }
        ],
        cta: {
            title: 'Prêt à Apparaître sur Google Maps?',
            description: 'Obtenez un audit gratuit de votre profil Google Business et découvrez les opportunités d\'amélioration'
        }
    },
    en: {
        hero: {
            title: 'Google Maps & Local SEO',
            subtitle: 'Strong Local Presence',
            description: 'We optimize your presence on Google Maps and local search results to attract more customers in your area',
            ctaText: 'Get a Quote',
            ctaLink: '/en/contact'
        },
        features: {
            title: 'Local SEO Services',
            subtitle: 'Comprehensive solutions to dominate local search results and attract new customers',
            items: [
                {
                    icon: 'MapPin',
                    title: 'Google Business Optimization',
                    description: 'Create and optimize your Google Business profile with complete information and professional photos'
                },
                {
                    icon: 'Search',
                    title: 'Local SEO',
                    description: 'Optimize your website to appear in "near me" local search results and attract area customers'
                },
                {
                    icon: 'Star',
                    title: 'Review Management',
                    description: 'Strategy to get positive reviews and respond to feedback professionally'
                },
                {
                    icon: 'TrendingUp',
                    title: 'Competitor Analysis',
                    description: 'Study your local competitors and develop strategy to outrank them in results'
                },
                {
                    icon: 'Users',
                    title: 'Citation Building',
                    description: 'Add your business to local business directories and relevant platforms'
                },
                {
                    icon: 'Award',
                    title: 'Performance Reports',
                    description: 'Detailed monthly reports on rankings, visits, and calls from Google Maps'
                }
            ]
        },
        process: {
            title: 'Optimization Process',
            steps: [
                {
                    number: 1,
                    title: 'Audit & Analysis',
                    description: 'We analyze your current position on Google Maps, local search results, strengths and weaknesses',
                    duration: '3-5 days'
                },
                {
                    number: 2,
                    title: 'Setup & Optimization',
                    description: 'We optimize Google Business profile, add high-quality photos, and complete all information',
                    duration: '1 week'
                },
                {
                    number: 3,
                    title: 'Citation Building',
                    description: 'We add your business to 50+ local directories and platforms related to your industry',
                    duration: '2-3 weeks'
                },
                {
                    number: 4,
                    title: 'Monitoring & Improvement',
                    description: 'We monitor performance, optimize based on data, and provide monthly reports',
                    duration: 'Ongoing'
                }
            ]
        },
        caseStudies: {
            title: 'Real Results',
            items: [
                {
                    title: 'Local Restaurant Dominates Results',
                    client: 'Al Bayt Shami Restaurant',
                    challenge: 'New restaurant not appearing in local search results despite excellent location',
                    solution: 'Optimized Google Business profile, added 100+ professional photos, and built local citations',
                    results: [
                        'Appearing in top 3 for 15 keywords',
                        '320% increase in calls from Google Maps',
                        '450% growth in site visits from local search'
                    ],
                    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
                    tags: ['Google Maps', 'Local SEO', 'Restaurant']
                },
                {
                    title: 'Medical Clinic Attracts New Patients',
                    client: 'Dr. Ahmed Clinic',
                    challenge: 'Medical clinic facing strong competition from 20+ clinics in same area',
                    solution: 'Comprehensive local SEO strategy with review optimization and content management',
                    results: [
                        'Dominating "dentist near me" results',
                        'Reviews increased from 12 to 180 reviews (4.9 stars)',
                        '65 new monthly appointments from Google Maps'
                    ],
                    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
                    tags: ['Healthcare', 'Reviews', 'Rankings']
                }
            ]
        },
        faq: [
            {
                q: 'How much do Google Maps optimization services cost?',
                a: 'Local SEO packages start from 3,000 SAR monthly including: Google Business setup and optimization, weekly content additions, review management, and monthly performance reports.'
            },
            {
                q: 'How long does it take to appear on Google Maps?',
                a: 'After creating and optimizing your Google Business profile, you typically appear in results within 1-2 weeks. Ranking in top positions requires 2-3 months of continuous optimization and positive reviews.'
            }
        ],
        cta: {
            title: 'Ready to Appear on Google Maps?',
            description: 'Get a free audit of your Google Business profile and discover improvement opportunities'
        }
    }
}

export async function generateMetadata({ params }: { params: Promise<{ lang: 'ar' | 'fr' | 'en' }> }): Promise<Metadata> {
    const { lang } = await params
    const t = content[lang]
    return {
        title: `${t.hero.title} | ${siteConfig.name}`,
        description: t.hero.description,
        alternates: {
            canonical: `${siteConfig.url}/${lang}/services/google-maps-seo`,
        }
    }
}

export default async function GoogleMapsSEOPage({ params }: { params: Promise<{ lang: 'ar' | 'fr' | 'en' }> }) {
    const { lang } = await params
    const t = content[lang]

    // JSON-LD Schemas
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: lang === 'ar' ? 'الرئيسية' : 'Home', url: `${siteConfig.url}/${lang}` },
        { name: lang === 'ar' ? 'الخدمات' : 'Services', url: `${siteConfig.url}/${lang}/services` },
        { name: lang === 'ar' ? 'خرائط جوجل' : 'Google Maps', url: `${siteConfig.url}/${lang}/services/google-maps-seo` },
    ])
    const faqSchema = getFAQSchema(t.faq.map((item: any) => ({ question: item.q, answer: item.a })))

    return (
        <main>
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <ServiceHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                description={t.hero.description}
                gradient="from-green-600 to-emerald-500"
                ctaText={t.hero.ctaText}
                ctaLink={t.hero.ctaLink}
            />

            <ServiceDetails
                title={(t as any).details?.title}
                paragraphs={(t as any).details?.paragraphs || []}
                lang={lang}
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

            <RelatedServices currentServiceId="google-maps-seo" lang={lang} />

            <ServiceCTA
                title={t.cta.title}
                description={t.cta.description}
                lang={lang}
            />
        </main>
    )
}
