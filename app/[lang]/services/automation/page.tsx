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
            title: 'أتمتة العمليات التجارية والربط التقني',
            subtitle: 'حلول n8n وذكاء اصطناعي لرفع الإنتاجية',
            description: 'نحن نساعد الشركات على تقليل الهدر الزمني من خلال أتمتة العمليات (Business Automation) وربط الأنظمة المشتتة باستخدام تقنيات n8n والذكاء الاصطناعي الأكثر تطوراً.',
            ctaText: 'احصل على عرض سعر',
            ctaLink: '/ar/contact'
        },
        details: {
            title: 'لماذا تعتبر الأتمتة استثماراً حيوياً لشركتك؟',
            paragraphs: [
                'في عالم الأعمال المتسارع، لم يعد الوقت مجرد مال، بل هو ميزة تنافسية. تتيح لك أتمتة العمليات التجارية تحويل القوى العاملة لديك من تنفيذ مهام روتينية مملة إلى التركيز على الإبداع والاستراتيجية. نحن نستخدم n8n workflow services كأداة قوية للربط بين مئات التطبيقات، مما يضمن تدفق البيانات بسلاسة.',
                'بدءاً من إدارة علاقات العملاء (CRM Integration) وصولاً إلى أنظمة المحاسبة والفوترة، نقوم ببناء "عقل إلكتروني" لشركتك يراقب العمليات وينفذها بدقة 100%. هذا لا يقلل الأخطاء البشرية فحسب، بل يضمن أيضاً استجابة فورية لعملائك، مما يعزز من احترافية علامتك التجارية.',
                'سواء كنت تمتلك متجراً إلكترونياً يحتاج لمزامنة المخزون، أو شركة خدمات تسعى لأتمتة رحلة العميل من الطلب حتى التسليم، فإن حلولنا المخصصة في تكامل الأنظمة توفر لك آلاف ساعات العمل سنوياً. نحن نصمم workflows تعكس دورة عملك الفريدة بالضبط.'
            ]
        },
        features: {
            title: 'خدمات الأتمتة',
            subtitle: 'حلول ذكية لتبسيط عملياتك وزيادة كفاءتك',
            items: [
                {
                    icon: 'Workflow',
                    title: 'سير عمل n8n',
                    description: 'أتمتة المهام المتكررة وربط التطبيقات المختلفة بسيناريوهات ذكية توفر ساعات من العمل اليدوي'
                },
                {
                    icon: 'Link2',
                    title: 'تكامل الأنظمة (APIs)',
                    description: 'دمج الأنظمة المختلفة (CRM، محاسبة، مخزون) لتدفق بيانات سلس وآلي بين جميع منصاتك'
                },
                {
                    icon: 'Bot',
                    title: 'روبوتات الدردشة (Chatbots)',
                    description: 'روبوتات محادثة تعمل بالذكاء الاصطناعي للرد على العملاء 24/7 وأتمتة الدعم الفني'
                },
                {
                    icon: 'GitBranch',
                    title: 'تكامل Webhooks',
                    description: 'ربط فوري بين الأنظمة عبر Webhooks لتحديثات لحظية وإشعارات آلية عند حدوث أي إجراء'
                },
                {
                    icon: 'Repeat',
                    title: 'مزامنة البيانات',
                    description: 'مزامنة تلقائية للبيانات بين المنصات المختلفة لضمان التناسق والدقة في جميع الأوقات'
                },
                {
                    icon: 'Zap',
                    title: 'أتمتة التسويق',
                    description: 'حملات تسويقية آلية، إرسال بريد إلكتروني مجدول، ومتابعة العملاء المحتملين تلقائياً'
                }
            ]
        },
        process: {
            title: 'عملية الأتمتة',
            steps: [
                {
                    number: 1,
                    title: 'تحليل العمليات',
                    description: 'ندرس عملياتك الحالية ونحدد المهام التي يمكن أتمتتها لتوفير أقصى قيمة وتقليل التكلفة',
                    duration: '3-5 أيام'
                },
                {
                    number: 2,
                    title: 'تصميم السيناريوهات',
                    description: 'نصمم سيناريوهات الأتمتة ونحدد نقاط الربط (Integration Points) بين الأنظمة المختلفة',
                    duration: '1 أسبوع'
                },
                {
                    number: 3,
                    title: 'البناء والتكامل',
                    description: 'نبني سير العمل في n8n ونربط جميع الأنظمة مع اختبارات شاملة لضمان الدقة',
                    duration: '2-3 أسابيع'
                },
                {
                    number: 4,
                    title: 'التدريب والتسليم',
                    description: 'ندرب فريقك على استخدام الأنظمة الجديدة ونقدم دعم مستمر لضمان استقرار العمليات',
                    duration: '1 أسبوع'
                }
            ]
        },
        caseStudies: {
            title: 'قصص نجاح الأتمتة',
            items: [
                {
                    title: 'أتمتة إدارة العملاء',
                    client: 'شركة خدمات',
                    challenge: 'إدخال بيانات العملاء يدوياً في 3 أنظمة مختلفة يستغرق 10 ساعات أسبوعياً',
                    solution: 'سير عمل n8n يربط نموذج الويب مع CRM والبريد الإلكتروني وجداول البيانات تلقائياً',
                    results: [
                        'توفير 40 ساعة شهرياً',
                        'تقليل الأخطاء بنسبة 95%',
                        'استجابة فورية للعملاء الجدد'
                    ],
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
                    tags: ['n8n Workflow', 'CRM Integration', 'Business Automation']
                },
                {
                    title: 'شات بوت خدمة العملاء',
                    client: 'متجر إلكتروني',
                    challenge: 'استفسارات العملاء المتكررة تستهلك 60% من وقت فريق الدعم',
                    solution: 'شات بوت ذكي يجيب على الأسئلة الشائعة ويحول الحالات المعقدة للموظفين',
                    results: [
                        'تقليل 70% من استفسارات الدعم',
                        'رضا العملاء ارتفع إلى 92%',
                        'توفير 3 موظفين دعم'
                    ],
                    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
                    tags: ['Chatbot Development', 'AI Support', 'Customer Service']
                }
            ]
        },
        faq: [
            { q: 'كم تكلفة أتمتة العمليات باستخدام n8n؟', a: 'مشاريع الأتمتة البسيطة تبدأ من 15,000 ريال (2-3 workflows)، المتوسطة 35,000-60,000 ريال (5-10 workflows + تكاملات)، والمشاريع المعقدة 100,000+ ريال (chatbot + CRM + ERP integration).' },
            { q: 'كم أوفر من الوقت بعد الأتمتة؟', a: 'عادة توفر الشركات 30-50 ساعة عمل شهرياً بعد أتمتة العمليات الأساسية. ROI يتحقق خلال 3-6 أشهر من التوفير في التكاليف وتقليل الأخطاء.' }
        ],
        cta: { title: 'جاهز لأتمتة عملياتك؟', description: 'احصل على تحليل مجاني لعملياتك واكتشف فرص دمج الأنظمة وتوفير التكاليف' }
    },
    fr: {
        hero: {
            title: 'Automatisation & Intégration',
            subtitle: 'Efficacité et Productivité',
            description: 'Nous connectons vos systèmes et automatisons vos processus avec n8n, APIs et chatbots intelligents pour gagner du temps et augmenter la productivité',
            ctaText: 'Obtenir un Devis',
            ctaLink: '/fr/contact'
        },
        features: {
            title: 'Services d\'Automatisation',
            subtitle: 'Solutions intelligentes pour simplifier vos opérations et augmenter votre efficacité',
            items: [
                {
                    icon: 'Workflow',
                    title: 'Workflows n8n',
                    description: 'Automatisation des tâches répétitives et connexion d\'applications avec des scénarios intelligents qui économisent des heures de travail manuel'
                },
                {
                    icon: 'Link2',
                    title: 'Intégration APIs',
                    description: 'Intégration de systèmes différents (CRM, comptabilité, inventaire) pour un flux de données fluide et automatique'
                },
                {
                    icon: 'Bot',
                    title: 'Chatbot Intelligent',
                    description: 'Robots conversationnels alimentés par l\'IA pour répondre aux clients 24/7 et automatiser le support technique'
                },
                {
                    icon: 'GitBranch',
                    title: 'Intégration Webhooks',
                    description: 'Connexion instantanée entre systèmes via Webhooks pour des mises à jour en temps réel et notifications automatiques'
                },
                {
                    icon: 'Repeat',
                    title: 'Synchronisation Données',
                    description: 'Synchronisation automatique des données entre différentes plateformes pour garantir cohérence et précision'
                },
                {
                    icon: 'Zap',
                    title: 'Automatisation Marketing',
                    description: 'Campagnes marketing automatisées, envoi d\'emails planifiés et suivi des prospects'
                }
            ]
        },
        process: {
            title: 'Processus d\'Automatisation',
            steps: [
                {
                    number: 1,
                    title: 'Analyse des Processus',
                    description: 'Nous étudions vos processus actuels et identifions les tâches à automatiser pour maximiser la valeur',
                    duration: '3-5 jours'
                },
                {
                    number: 2,
                    title: 'Conception Scénarios',
                    description: 'Nous concevons les scénarios d\'automatisation et définissons les points de connexion entre systèmes',
                    duration: '1 semaine'
                },
                {
                    number: 3,
                    title: 'Construction & Intégration',
                    description: 'Nous construisons les workflows dans n8n et connectons tous les systèmes avec tests complets',
                    duration: '2-3 semaines'
                },
                {
                    number: 4,
                    title: 'Formation & Livraison',
                    description: 'Nous formons votre équipe à l\'utilisation des nouveaux systèmes et fournissons un support continu',
                    duration: '1 semaine'
                }
            ]
        },
        caseStudies: {
            title: 'Succès d\'Automatisation',
            items: [
                {
                    title: 'Automatisation Gestion Clients',
                    client: 'Entreprise de Services',
                    challenge: 'Saisie manuelle des données clients dans 3 systèmes différents prend 10 heures par semaine',
                    solution: 'Workflow n8n connectant formulaire web avec CRM, email et feuilles de calcul automatiquement',
                    results: [
                        'Économie de 40 heures par mois',
                        'Réduction de 95% des erreurs',
                        'Réponse instantanée aux nouveaux clients'
                    ],
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
                    tags: ['n8n', 'CRM', 'Automation']
                },
                {
                    title: 'Chatbot Service Client',
                    client: 'Boutique en Ligne',
                    challenge: 'Les demandes clients répétitives consomment 60% du temps de l\'équipe support',
                    solution: 'Chatbot intelligent répondant aux questions fréquentes et transférant les cas complexes aux employés',
                    results: [
                        'Réduction de 70% des demandes support',
                        'Satisfaction client montée à 92%',
                        'Économie de 3 agents support'
                    ],
                    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
                    tags: ['Chatbot', 'AI', 'Support']
                }
            ]
        },
        faq: [{ q: 'Combien coûte automatisation avec n8n?', a: 'Projets: 15 000 SAR (simple), 35 000-60 000 SAR (moyen), 100 000+ SAR (chatbot + CRM/ERP integration).' }],
        cta: { title: 'Prêt à Automatiser Vos Processus?', description: 'Obtenez une analyse gratuite de vos processus et découvrez combien vous pouvez économiser en temps et argent' }
    },
    en: {
        hero: {
            title: 'Automation & Integration',
            subtitle: 'Efficiency and Productivity',
            description: 'We connect your systems and automate your processes using n8n, APIs, and intelligent chatbots to save time and increase productivity',
            ctaText: 'Get a Quote',
            ctaLink: '/en/contact'
        },
        features: {
            title: 'Automation Services',
            subtitle: 'Smart solutions to simplify your operations and increase efficiency',
            items: [
                {
                    icon: 'Workflow',
                    title: 'n8n Workflows',
                    description: 'Automate repetitive tasks and connect different applications with intelligent scenarios that save hours of manual work'
                },
                {
                    icon: 'Link2',
                    title: 'API Integration',
                    description: 'Integrate different systems (CRM, accounting, inventory) for smooth and automatic data flow'
                },
                {
                    icon: 'Bot',
                    title: 'Smart Chatbot',
                    description: 'AI-powered conversational robots to respond to customers 24/7 and automate technical support'
                },
                {
                    icon: 'GitBranch',
                    title: 'Webhook Integration',
                    description: 'Instant connection between systems via Webhooks for real-time updates and automatic notifications'
                },
                {
                    icon: 'Repeat',
                    title: 'Data Synchronization',
                    description: 'Automatic data synchronization between different platforms to ensure consistency and accuracy'
                },
                {
                    icon: 'Zap',
                    title: 'Marketing Automation',
                    description: 'Automated marketing campaigns, scheduled email sending, and lead tracking'
                }
            ]
        },
        process: {
            title: 'Automation Process',
            steps: [
                {
                    number: 1,
                    title: 'Process Analysis',
                    description: 'We study your current processes and identify tasks that can be automated for maximum value',
                    duration: '3-5 days'
                },
                {
                    number: 2,
                    title: 'Scenario Design',
                    description: 'We design automation scenarios and define connection points between different systems',
                    duration: '1 week'
                },
                {
                    number: 3,
                    title: 'Build & Integration',
                    description: 'We build workflows in n8n and connect all systems with comprehensive testing',
                    duration: '2-3 weeks'
                },
                {
                    number: 4,
                    title: 'Training & Delivery',
                    description: 'We train your team on using the new systems and provide ongoing support',
                    duration: '1 week'
                }
            ]
        },
        caseStudies: {
            title: 'Automation Success Stories',
            items: [
                {
                    title: 'Customer Management Automation',
                    client: 'Service Company',
                    challenge: 'Manual customer data entry into 3 different systems takes 10 hours per week',
                    solution: 'n8n workflow connecting web form with CRM, email, and spreadsheets automatically',
                    results: [
                        'Saved 40 hours per month',
                        '95% reduction in errors',
                        'Instant response to new customers'
                    ],
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
                    tags: ['n8n', 'CRM', 'Automation']
                },
                {
                    title: 'Customer Service Chatbot',
                    client: 'Online Store',
                    challenge: 'Repetitive customer inquiries consume 60% of support team time',
                    solution: 'Smart chatbot answering common questions and transferring complex cases to employees',
                    results: [
                        '70% reduction in support requests',
                        'Customer satisfaction rose to 92%',
                        'Saved 3 support agents'
                    ],
                    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
                    tags: ['Chatbot', 'AI', 'Support']
                }
            ]
        },
        faq: [
            { q: 'How much does process automation with n8n cost?', a: 'Simple automation projects start from 15,000 SAR (2-3 workflows), medium 35,000-60,000 SAR (5-10 workflows + integrations), complex 100,000+ SAR (chatbot + CRM + ERP integration).' },
            { q: 'How much time will I save after automation?', a: 'Companies typically save 30-50 hours monthly after automating basic processes. ROI is achieved within 3-6 months from cost savings and error reduction.' }
        ],
        cta: { title: 'Ready to Automate Your Processes?', description: 'Get a free analysis of your processes and discover how much you can save in time and money' }
    }
}

export async function generateMetadata({ params }: { params: Promise<{ lang: 'ar' | 'fr' | 'en' }> }): Promise<Metadata> {
    const { lang } = await params
    const t = content[lang]
    return {
        title: `${t.hero.title} | ${siteConfig.name}`,
        description: t.hero.description,
        alternates: {
            canonical: `${siteConfig.url}/${lang}/services/automation`,
        }
    }
}

export default async function AutomationPage({ params }: { params: Promise<{ lang: 'ar' | 'fr' | 'en' }> }) {
    const { lang } = await params
    const t = content[lang]
    const breadcrumbSchema = getBreadcrumbSchema([{ name: lang === 'ar' ? 'الرئيسية' : 'Home', url: `${siteConfig.url}/${lang}` }, { name: lang === 'ar' ? 'الخدمات' : 'Services', url: `${siteConfig.url}/${lang}/services` }, { name: lang === 'ar' ? 'الأتمتة' : 'Automation', url: `${siteConfig.url}/${lang}/services/automation` }])
    const faqSchema = getFAQSchema(t.faq.map((item: any) => ({ question: item.q, answer: item.a })))
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <ServiceHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                description={t.hero.description}
                gradient="from-purple-600 to-pink-500"
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
