import type { Metadata } from 'next'

import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import ProcessTimeline from '@/components/services/ProcessTimeline'
import CaseStudies from '@/components/services/CaseStudies'
import ServiceCTA from '@/components/services/ServiceCTA'
import ServiceDetails from '@/components/services/ServiceDetails'
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas'
import { siteConfig } from '@/lib/config'

const content = {
    ar: {
        hero: {
            title: 'تصميم الهوية التجارية والعلب الاحترافية',
            subtitle: 'نبني صرح هويتك البصرية',
            description: 'نحن لا نصمم مجرد شعارات، بل نصمم قصصاً بصرية متكاملة تبدأ من الهوية وتصل إلى تغليف المنتجات لتمنح علامتك التجارية القوة والتميز الذي تستحقه.',
            ctaText: 'احصل على عرض سعر',
            ctaLink: '/ar/contact'
        },
        details: {
            title: 'فن بناء العلامات التجارية العابرة للحدود',
            paragraphs: [
                'الهوية التجارية هي البصمة التي تتركه شركتك في أذهان العملاء منذ اللحظة الأولى. في نيكسس لوجيك، نؤمن أن التصميم الاحترافي هو استثمار استراتيجي وليس مجرد تكلفة جمالية. نقوم بدراسة سيكولوجية الألوان وتحليلات السوق لضمان أن كل عنصر بصري نقوم بإنتاجه يعزز من قيمة علامتك التجارية ويجذب الفئة المستهدفة بدقة.',
                'تتميز خدماتنا بالشمولية، حيث نرافقك من فكرة الشعار (Logo Concept) إلى تصميم دليل الهوية الكامل (Brand Guidelines) الذي يشمل كل تفصيل من الخطوط إلى أساليب التصوير. كما نتخصص في تصميم العلب والتغليف (Packaging) الذي يحول منتجك إلى تحفة فنية تبرز بقوة على رفوف المتاجر وتنافس العلامات العالمية.',
                'سواء كنت تبحث عن هوية كلاسيكية راقية أو معاصرة وجريئة، فريقنا من المصممين الخبراء يمتلك الأدوات والرؤية لتحويل رؤيتك إلى واقع ملموس. نحن نضمن تناسق هويتك عبر جميع المنصات، من المطبوعات الورقية والقرطاسية إلى الوجود الرقمي على السوشيال ميديا، مما يخلق تجربة متكاملة وموثوقة لعملائك.'
            ]
        },
        features: {
            title: 'خدمات التصميم',
            subtitle: 'حلول تصميم شاملة لبناء هوية بصرية قوية ومميزة',
            items: [
                {
                    icon: 'Sparkles',
                    title: 'تصميم الشعار',
                    description: 'شعارات احترافية فريدة تعكس قيم علامتك التجارية وتبقى في ذاكرة العملاء'
                },
                {
                    icon: 'Palette',
                    title: 'الهوية البصرية',
                    description: 'دليل هوية كامل يشمل الألوان، الخطوط، والأنماط لاستخدام متسق عبر جميع المنصات'
                },
                {
                    icon: 'FileText',
                    title: 'القرطاسية',
                    description: 'بطاقات عمل، أوراق رسمية، أظرف، وجميع مستلزمات القرطاسية بتصميم احترافي'
                },
                {
                    icon: 'Image',
                    title: 'تصاميم السوشيال ميديا',
                    description: 'قوالب منشورات، قصص، وأغلفة لجميع منصات التواصل الاجتماعي'
                },
                {
                    icon: 'Package',
                    title: 'تصميم التغليف',
                    description: 'تصاميم تغليف جذابة للمنتجات تبرز على الرفوف وتجذب العملاء'
                },
                {
                    icon: 'Printer',
                    title: 'مواد الافتتاح',
                    description: 'بروشورات، لافتات، رول أب، وجميع المواد المطبوعة لافتتاح مشروعك'
                }
            ]
        },
        process: {
            title: 'عملية التصميم',
            steps: [
                {
                    number: 1,
                    title: 'البحث والإلهام',
                    description: 'ندرس مجالك ومنافسيك وجمهورك المستهدف لفهم ما يميزك ونجمع الإلهام',
                    duration: '3-5 أيام'
                },
                {
                    number: 2,
                    title: 'المفاهيم الأولية',
                    description: 'نقدم 3-5 مفاهيم تصميم مختلفة للشعار والهوية للاختيار من بينها',
                    duration: '1 أسبوع'
                },
                {
                    number: 3,
                    title: 'التطوير والتنقيح',
                    description: 'نطور المفهوم المختار مع جولتين من التعديلات حسب ملاحظاتك',
                    duration: '1-2 أسابيع'
                },
                {
                    number: 4,
                    title: 'التسليم النهائي',
                    description: 'نسلم جميع الملفات بصيغ متعددة مع دليل استخدام الهوية البصرية',
                    duration: '3-5 أيام'
                }
            ]
        },
        caseStudies: {
            title: 'مشاريع تصميم ناجحة',
            items: [
                {
                    title: 'هوية مطعم فاخر',
                    client: 'مطعم La Maison',
                    challenge: 'مطعم جديد يحتاج هوية بصرية راقية تعكس الطابع الفرنسي الفاخر',
                    solution: 'صممنا شعار أنيق، قائمة طعام فاخرة، وجميع مواد الافتتاح بأسلوب كلاسيكي عصري',
                    results: [
                        'هوية بصرية متميزة تجذب الفئة المستهدفة',
                        'زيادة 180% في الحجوزات خلال الشهر الأول',
                        'تغطية إعلامية واسعة بفضل التصميم المميز'
                    ],
                    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
                    tags: ['Logo', 'Identity', 'Print']
                },
                {
                    title: 'علامة تجارية للأزياء',
                    client: 'Noor Fashion',
                    challenge: 'علامة أزياء ناشئة تحتاج هوية عصرية تنافس العلامات العالمية',
                    solution: 'هوية بصرية كاملة مع تصميم تغليف فاخر وقوالب سوشيال ميديا متسقة',
                    results: [
                        'نمو المتابعين على Instagram بنسبة 300%',
                        'التعرف على العلامة التجارية ارتفع بنسبة 85%',
                        'طلبات شراكة من 5 متاجر كبرى'
                    ],
                    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
                    tags: ['Branding', 'Packaging', 'Social Media']
                }
            ]
        },
        faq: [
            {
                q: 'كم تكلفة تصميم الهوية التجارية الكاملة؟',
                a: 'تبدأ الأسعار من 5,000 ريال للشعار الأساسي، 12,000 ريال للباقة الاحترافية (دليل 30 صفحة + قوالب)، و25,000 ريال للباقة الشاملة التي تشمل دليل 50+ صفحة ومنيو/كتالوج.'
            },
            {
                q: 'كم يستغرق تصميم الهوية التجارية؟',
                a: 'عادة 3-4 أسابيع من البداية حتى التسليم النهائي. الباقة الأساسية (شعار فقط) تستغرق أسبوع واحد، بينما الباقة الشاملة تحتاج 4-6 أسابيع.'
            }
        ],
        cta: {
            title: 'جاهز لبناء هويتك البصرية؟',
            description: 'احصل على استشارة تصميم مجانية ومفاهيم أولية لشعارك'
        }
    },
    fr: {
        hero: {
            title: 'Branding & Design',
            subtitle: 'Votre Marque',
            description: 'Nous créons votre identité visuelle professionnelle du logo à tous les supports marketing pour laisser une impression mémorable',
            ctaText: 'Obtenir un Devis',
            ctaLink: '/fr/contact'
        },
        features: {
            title: 'Services de Design',
            subtitle: 'Solutions de design complètes pour construire une identité visuelle forte et distinctive',
            items: [
                {
                    icon: 'Sparkles',
                    title: 'Design de Logo',
                    description: 'Logos professionnels uniques reflétant les valeurs de votre marque et restant dans la mémoire des clients'
                },
                {
                    icon: 'Palette',
                    title: 'Identité Visuelle',
                    description: 'Guide d\'identité complet incluant couleurs, polices et motifs pour une utilisation cohérente sur toutes les plateformes'
                },
                {
                    icon: 'FileText',
                    title: 'Papeterie',
                    description: 'Cartes de visite, papier à en-tête, enveloppes et tous les supports de papeterie avec design professionnel'
                },
                {
                    icon: 'Image',
                    title: 'Designs Réseaux Sociaux',
                    description: 'Templates de posts, stories et couvertures pour toutes les plateformes de médias sociaux'
                },
                {
                    icon: 'Package',
                    title: 'Design d\'Emballage',
                    description: 'Designs d\'emballage attractifs pour produits qui se démarquent sur les étagères et attirent les clients'
                },
                {
                    icon: 'Printer',
                    title: 'Supports de Lancement',
                    description: 'Brochures, bannières, roll-ups et tous les supports imprimés pour le lancement de votre projet'
                }
            ]
        },
        process: {
            title: 'Processus de Design',
            steps: [
                {
                    number: 1,
                    title: 'Recherche & Inspiration',
                    description: 'Nous étudions votre secteur, vos concurrents et votre public cible pour comprendre ce qui vous distingue',
                    duration: '3-5 jours'
                },
                {
                    number: 2,
                    title: 'Concepts Initiaux',
                    description: 'Nous présentons 3-5 concepts de design différents pour le logo et l\'identité à choisir',
                    duration: '1 semaine'
                },
                {
                    number: 3,
                    title: 'Développement & Révision',
                    description: 'Nous développons le concept choisi avec deux tours de modifications selon vos commentaires',
                    duration: '1-2 semaines'
                },
                {
                    number: 4,
                    title: 'Livraison Finale',
                    description: 'Nous livrons tous les fichiers en formats multiples avec guide d\'utilisation de l\'identité visuelle',
                    duration: '3-5 jours'
                }
            ]
        },
        caseStudies: {
            title: 'Projets de Design Réussis',
            items: [
                {
                    title: 'Identité Restaurant Luxe',
                    client: 'Restaurant La Maison',
                    challenge: 'Nouveau restaurant nécessitant une identité visuelle élégante reflétant le caractère français luxueux',
                    solution: 'Logo élégant, menu gastronomique et tous les supports de lancement en style classique moderne',
                    results: [
                        'Identité visuelle distinctive attirant le public cible',
                        'Augmentation de 180% des réservations le premier mois',
                        'Large couverture médiatique grâce au design distinctif'
                    ],
                    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
                    tags: ['Logo', 'Identity', 'Print']
                },
                {
                    title: 'Marque de Mode',
                    client: 'Noor Fashion',
                    challenge: 'Marque de mode émergente nécessitant une identité moderne pour concurrencer les marques mondiales',
                    solution: 'Identité visuelle complète avec design d\'emballage luxueux et templates réseaux sociaux cohérents',
                    results: [
                        'Croissance de 300% des followers Instagram',
                        'Reconnaissance de marque augmentée de 85%',
                        'Demandes de partenariat de 5 grands magasins'
                    ],
                    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
                    tags: ['Branding', 'Packaging', 'Social Media']
                }
            ]
        },
        faq: [
            {
                q: 'Combien coûte le design d\'identité de marque complet?',
                a: 'Les prix démarrent à 5 000 SAR pour logo basique, 12 000 SAR pour pack professionnel (guide 30 pages), et 25 000 SAR pour pack complet.'
            }
        ],
        cta: {
            title: 'Prêt à Construire Votre Identité Visuelle?',
            description: 'Obtenez une consultation design gratuite et des concepts initiaux pour votre logo'
        }
    },
    en: {
        hero: {
            title: 'Branding & Design',
            subtitle: 'Your Brand',
            description: 'We create your professional visual identity from logo to all marketing materials to leave a memorable impression',
            ctaText: 'Get a Quote',
            ctaLink: '/en/contact'
        },
        features: {
            title: 'Design Services',
            subtitle: 'Comprehensive design solutions to build a strong and distinctive visual identity',
            items: [
                {
                    icon: 'Sparkles',
                    title: 'Logo Design',
                    description: 'Unique professional logos reflecting your brand values and staying in customers\' memory'
                },
                {
                    icon: 'Palette',
                    title: 'Visual Identity',
                    description: 'Complete identity guide including colors, fonts, and patterns for consistent use across all platforms'
                },
                {
                    icon: 'FileText',
                    title: 'Stationery',
                    description: 'Business cards, letterheads, envelopes, and all stationery supplies with professional design'
                },
                {
                    icon: 'Image',
                    title: 'Social Media Designs',
                    description: 'Post templates, stories, and covers for all social media platforms'
                },
                {
                    icon: 'Package',
                    title: 'Packaging Design',
                    description: 'Attractive packaging designs for products that stand out on shelves and attract customers'
                },
                {
                    icon: 'Printer',
                    title: 'Launch Materials',
                    description: 'Brochures, banners, roll-ups, and all printed materials for your project launch'
                }
            ]
        },
        process: {
            title: 'Design Process',
            steps: [
                {
                    number: 1,
                    title: 'Research & Inspiration',
                    description: 'We study your industry, competitors, and target audience to understand what makes you unique',
                    duration: '3-5 days'
                },
                {
                    number: 2,
                    title: 'Initial Concepts',
                    description: 'We present 3-5 different design concepts for logo and identity to choose from',
                    duration: '1 week'
                },
                {
                    number: 3,
                    title: 'Development & Refinement',
                    description: 'We develop the chosen concept with two rounds of revisions based on your feedback',
                    duration: '1-2 weeks'
                },
                {
                    number: 4,
                    title: 'Final Delivery',
                    description: 'We deliver all files in multiple formats with visual identity usage guide',
                    duration: '3-5 days'
                }
            ]
        },
        caseStudies: {
            title: 'Successful Design Projects',
            items: [
                {
                    title: 'Luxury Restaurant Identity',
                    client: 'La Maison Restaurant',
                    challenge: 'New restaurant needing elegant visual identity reflecting luxurious French character',
                    solution: 'Elegant logo, gourmet menu, and all launch materials in modern classic style',
                    results: [
                        'Distinctive visual identity attracting target audience',
                        '180% increase in reservations first month',
                        'Wide media coverage thanks to distinctive design'
                    ],
                    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
                    tags: ['Logo', 'Identity', 'Print']
                },
                {
                    title: 'Fashion Brand',
                    client: 'Noor Fashion',
                    challenge: 'Emerging fashion brand needing modern identity to compete with global brands',
                    solution: 'Complete visual identity with luxurious packaging design and consistent social media templates',
                    results: [
                        '300% growth in Instagram followers',
                        '85% increase in brand recognition',
                        'Partnership requests from 5 major stores'
                    ],
                    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
                    tags: ['Branding', 'Packaging', 'Social Media']
                }
            ]
        },
        faq: [
            {
                q: 'How much does complete brand identity design cost?',
                a: 'Pricing starts from 5,000 SAR for basic logo, 12,000 SAR for professional package (30-page guidelines + templates), and 25,000 SAR for complete package including 50+ page guidelines and menu/catalog.'
            },
            {
                q: 'How long does brand identity design take?',
                a: 'Typically 3-4 weeks from start to final delivery. Basic package (logo only) takes 1 week, while complete package needs 4-6 weeks.'
            }
        ],
        cta: {
            title: 'Ready to Build Your Visual Identity?',
            description: 'Get a free design consultation and initial concepts for your logo'
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
            canonical: `${siteConfig.url}/${lang}/services/branding`,
        }
    }
}

export default async function BrandingPage({ params }: { params: Promise<{ lang: 'ar' | 'fr' | 'en' }> }) {
    const { lang } = await params
    const t = content[lang]

    // JSON-LD Schemas
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: lang === 'ar' ? 'الرئيسية' : 'Home', url: `${siteConfig.url}/${lang}` },
        { name: lang === 'ar' ? 'الخدمات' : 'Services', url: `${siteConfig.url}/${lang}/services` },
        { name: lang === 'ar' ? 'الهوية التجارية' : 'Branding', url: `${siteConfig.url}/${lang}/services/branding` },
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
                gradient="from-orange-600 to-red-500"
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

            <ServiceCTA
                title={t.cta.title}
                description={t.cta.description}
                lang={lang}
            />
        </main>
    )
}
