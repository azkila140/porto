'use client'

import { getEnterpriseSolutionSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { Building2, Database, Shield, Zap, FileCheck, Settings, Cloud, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

type Locale = 'ar' | 'en' | 'fr'

interface EnterpriseSolutionProps {
    params: {
        lang: Locale
    }
}

export default function EnterpriseSolutionPage({ params }: EnterpriseSolutionProps) {
    const { lang } = params

    // Content by language
    const content = {
        ar: {
            title: 'حلول التحول الرقمي للمؤسسات الكبرى',
            subtitle: 'أنظمة ERP متكاملة - من Odoo إلى SAP مع الامتثال الكامل لمتطلبات ZATCA',
            challenge: {
                title: 'تحديات المؤسسات الكبرى',
                items: [
                    'أنظمة قديمة معزولة لا تتواصل مع بعضها',
                    'صعوبة الامتثال لمتطلبات الفوترة الإلكترونية ZATCA',
                    'تكاليف تنفيذ ERP المرتفعة وعدم وضوح ROI',
                    'فقدان السيادة على البيانات مع الحلول السحابية الأجنبية'
                ]
            },
            solutions: [
                {
                    icon: Building2,
                    title: 'تخصيص وتنفيذ Odoo',
                    description: 'حلول Odoo مخصصة بالكامل لاحتياجات السوق السعودي والإماراتي',
                    features: ['نماذج عمل محلية', 'تقارير مالية متوافقة', 'دعم كامل AR/EN', 'تكامل مع البنوك المحلية']
                },
                {
                    icon: Shield,
                    title: 'الفوترة الإلكترونية ZATCA',
                    description: 'امتثال 100% لمتطلبات هيئة الزكاة والضريبة والجمارك',
                    features: ['توليد فواتير متوافقة', 'ختم تشفير', 'ربط API مباشر', 'أرشفة آمنة']
                },
                {
                    icon: Database,
                    title: 'تكامل الأنظمة القديمة',
                    description: 'ربط الأنظمة القديمة (Legacy) مع الحلول الحديثة دون إعادة بناء',
                    features: ['APIs مخصصة', 'مزامنة بيانات', 'حفظ الاستثمارات', 'Migration تدريجي']
                },
                {
                    icon: Zap,
                    title: 'تكامل SAP',
                    description: 'شريك معتمد لتنفيذ وتخصيص حلول SAP للمؤسسات',
                    features: ['SAP B1 / ECC', 'تخصيص ABAP', 'تكامل Fiori', 'دعم فني محلي']
                },
            ],
            compliance: {
                title: 'الامتثال والأمان',
                items: [
                    { icon: Shield, label: 'متوافق 100% مع ZATCA' },
                    { icon: Cloud, label: 'السيادة على البيانات' },
                    { icon: FileCheck, label: 'معايير ISO 27001' },
                    { icon: Settings, label: 'حوكمة كاملة' }
                ]
            },
            pricing: {
                title: 'تكلفة تنفيذ ERP - شفافية كاملة',
                tiers: [
                    {
                        name: 'Odoo أساسي',
                        price: '80,000',
                        currency: 'ريال',
                        features: ['5-10 مستخدمين', 'المحاسبة + المبيعات', 'ZATCA متوافق', 'تدريب 3 أيام']
                    },
                    {
                        name: 'Odoo متقدم',
                        price: '200,000',
                        currency: 'ريال',
                        features: ['مستخدمين غير محدود', 'جميع الوحدات', 'تخصيص كامل', 'دعم سنة']
                    },
                    {
                        name: 'SAP للمؤسسات',
                        price: 'حسب الطلب',
                        currency: '',
                        features: ['SAP B1 / ECC', 'تكامل شامل', 'ABAP تطوير', 'دعم مخصص']
                    }
                ]
            },
            process: [
                { num: '01', title: 'تحليل متطلبات الأعمال', desc: 'نحلل عملياتك الحالية ونحدد متطلبات ERP الدقيقة' },
                { num: '02', title: 'التصميم والتخصيص', desc: 'نصمم الحل ونخصصه ليناسب workflow المؤسسة' },
                { num: '03', title: 'التنفيذ التدريجي', desc: 'نطلق الوحدات تدريجياً لتقليل المخاطر' },
                { num: '04', title: 'التدريب والدعم', desc: 'تدريب شامل مع دعم فني محلي 24/7' }
            ],
            faq: [
                {
                    q: 'ما الفرق بين Odoo وSAP وأيهما أنسب لنا؟',
                    a: 'Odoo مناسب للشركات الصغيرة والمتوسطة (5-200 موظف) بتكلفة أقل ومرونة أعلى. SAP للمؤسسات الكبرى (+200 موظف) التي تحتاج قابلية توسع ضخمة. نساعدك في الاختيار بناءً على حجمك وميزانيتك.'
                },
                {
                    q: 'هل الحل متوافق مع متطلبات ZATCA للفوترة الإلكترونية؟',
                    a: 'نعم 100%. جميع حلولنا معتمدة من ZATCA ومتوافقة تماماً مع المرحلة الأولى والثانية من الفوترة الإلكترونية، مع توليد الفواتير المختومة تشفيرياً وإرسالها تلقائياً.'
                },
                {
                    q: 'كم يستغرق تنفيذ نظام ERP كامل؟',
                    a: 'يعتمد على حجم المؤسسة: Odoo أساسي (2-3 أشهر)، Odoo متقدم (4-6 أشهر)، SAP (6-12 شهر). نتبع منهجية Agile مع إطلاق تدريجي لتسريع الفائدة.'
                },
                {
                    q: 'هل يمكن الاستمرار في استخدام أنظمتنا القديمة؟',
                    a: 'نعم، نوفر تكامل سلس مع الأنظمة القديمة (Legacy Integration) عبر APIs مخصصة، مما يسمح لك بالاستفادة من استثماراتك السابقة والانتقال التدريجي.'
                }
            ],
            cta: {
                title: 'جاهز لتحديث أنظمة مؤسستك؟',
                desc: 'احجز استشارة مجانية مع خبراء ERP لمناقشة احتياجاتك',
                button: 'احجز استشارة ERP'
            }
        },
        en: {
            title: 'Enterprise Digital Transformation Solutions',
            subtitle: 'Integrated ERP Systems - From Odoo to SAP with Full ZATCA Compliance',
            challenge: {
                title: 'Enterprise Challenges',
                items: [
                    'Isolated legacy systems that don\'t communicate',
                    'Difficulty complying with ZATCA e-invoicing requirements',
                    'High ERP implementation costs and unclear ROI',
                    'Loss of data sovereignty with foreign cloud solutions'
                ]
            },
            solutions: [
                {
                    icon: Building2,
                    title: 'Odoo Customization & Implementation',
                    description: 'Fully customized Odoo solutions for KSA and UAE market needs',
                    features: ['Local workflows', 'Compliant financial reports', 'Full AR/EN support', 'Local bank integration']
                },
                {
                    icon: Shield,
                    title: 'ZATCA E-invoicing',
                    description: '100% compliance with Zakat, Tax and Customs Authority requirements',
                    features: ['Compliant invoice generation', 'Cryptographic stamping', 'Direct API integration', 'Secure archiving']
                },
                {
                    icon: Database,
                    title: 'Legacy System Integration',
                    description: 'Connect old systems with modern solutions without rebuilding',
                    features: ['Custom APIs', 'Data synchronization', 'Preserve investments', 'Gradual migration']
                },
                {
                    icon: Zap,
                    title: 'SAP Integration',
                    description: 'Certified partner for SAP implementation and customization',
                    features: ['SAP B1 / ECC', 'ABAP customization', 'Fiori integration', 'Local technical support']
                },
            ],
            compliance: {
                title: 'Compliance & Security',
                items: [
                    { icon: Shield, label: '100% ZATCA Compliant' },
                    { icon: Cloud, label: 'Data Sovereignty' },
                    { icon: FileCheck, label: 'ISO 27001 Standards' },
                    { icon: Settings, label: 'Full Governance' }
                ]
            },
            pricing: {
                title: 'ERP Implementation Cost - Full Transparency',
                tiers: [
                    {
                        name: 'Basic Odoo',
                        price: '80,000',
                        currency: 'SAR',
                        features: ['5-10 users', 'Accounting + Sales', 'ZATCA compliant', '3-day training']
                    },
                    {
                        name: 'Advanced Odoo',
                        price: '200,000',
                        currency: 'SAR',
                        features: ['Unlimited users', 'All modules', 'Full customization', '1-year support']
                    },
                    {
                        name: 'Enterprise SAP',
                        price: 'Custom Quote',
                        currency: '',
                        features: ['SAP B1 / ECC', 'Full integration', 'ABAP development', 'Dedicated support']
                    }
                ]
            },
            process: [
                { num: '01', title: 'Business Requirements Analysis', desc: 'Analyze current operations and define precise ERP requirements' },
                { num: '02', title: 'Design & Customization', desc: 'Design and customize the solution to fit your workflow' },
                { num: '03', title: 'Phased Implementation', desc: 'Launch modules gradually to minimize risks' },
                { num: '04', title: 'Training & Support', desc: 'Comprehensive training with 24/7 local technical support' }
            ],
            faq: [
                {
                    q: 'What\'s the difference between Odoo and SAP, and which suits us?',
                    a: 'Odoo is suitable for SMEs (5-200 employees) with lower cost and higher flexibility. SAP is for large enterprises (200+ employees) needing massive scalability. We help you choose based on your size and budget.'
                },
                {
                    q: 'Is the solution compliant with ZATCA e-invoicing requirements?',
                    a: 'Yes, 100%. All our solutions are ZATCA-certified and fully compliant with Phase 1 and 2 of e-invoicing, with cryptographically stamped invoice generation and automatic submission.'
                },
                {
                    q: 'How long does full ERP implementation take?',
                    a: 'Depends on organization size: Basic Odoo (2-3 months), Advanced Odoo (4-6 months), SAP (6-12 months). We follow Agile methodology with gradual rollout for faster benefits.'
                },
                {
                    q: 'Can we continue using our legacy systems?',
                    a: 'Yes, we provide seamless legacy integration via custom APIs, allowing you to leverage previous investments and migrate gradually.'
                }
            ],
            cta: {
                title: 'Ready to Modernize Your Enterprise Systems?',
                desc: 'Book a free consultation with ERP experts to discuss your needs',
                button: 'Book ERP Consultation'
            }
        },
        fr: {
            title: 'Solutions de Transformation Numérique d\'Entreprise',
            subtitle: 'Systèmes ERP Intégrés - D\'Odoo à SAP avec Conformité ZATCA',
            challenge: {
                title: 'Défis des Entreprises',
                items: [
                    'Systèmes isolés qui ne communiquent pas',
                    'Difficulté de conformité aux exigences ZATCA',
                    'Coûts élevés d\'implémentation ERP et ROI incertain',
                    'Perte de souveraineté des données avec solutions cloud étrangères'
                ]
            },
            solutions: [
                {
                    icon: Building2,
                    title: 'Personnalisation Odoo',
                    description: 'Solutions Odoo entièrement personnalisées pour le marché marocain et du Golfe',
                    features: ['Workflows locaux', 'Rapports conformes', 'Support AR/FR', 'Intégration banques']
                },
                {
                    icon: Shield,
                    title: 'Facturation Électronique ZATCA',
                    description: '100% conforme aux exigences de l\'autorité fiscale',
                    features: ['Génération factures', 'Cachet cryptographique', 'API directe', 'Archivage sécurisé']
                },
                {
                    icon: Database,
                    title: 'Intégration Systèmes Legacy',
                    description: 'Connecter anciens systèmes avec solutions modernes',
                    features: ['APIs personnalisées', 'Synchronisation', 'Préserver investissements', 'Migration graduelle']
                },
                {
                    icon: Zap,
                    title: 'Intégration SAP',
                    description: 'Partenaire certifié pour implémentation SAP',
                    features: ['SAP B1 / ECC', 'Personnalisation ABAP', 'Intégration Fiori', 'Support local']
                },
            ],
            compliance: {
                title: 'Conformité & Sécurité',
                items: [
                    { icon: Shield, label: '100% Conforme ZATCA' },
                    { icon: Cloud, label: 'Souveraineté Données' },
                    { icon: FileCheck, label: 'Normes ISO 27001' },
                    { icon: Settings, label: 'Gouvernance Complète' }
                ]
            },
            pricing: {
                title: 'Coût Implémentation ERP - Transparence Totale',
                tiers: [
                    {
                        name: 'Odoo Base',
                        price: '80 000',
                        currency: 'SAR',
                        features: ['5-10 utilisateurs', 'Compta + Ventes', 'Conforme ZATCA', 'Formation 3 jours']
                    },
                    {
                        name: 'Odoo Avancé',
                        price: '200 000',
                        currency: 'SAR',
                        features: ['Utilisateurs illimités', 'Tous modules', 'Personnalisation', 'Support 1 an']
                    },
                    {
                        name: 'SAP Entreprise',
                        price: 'Sur Devis',
                        currency: '',
                        features: ['SAP B1 / ECC', 'Intégration complète', 'Développement ABAP', 'Support dédié']
                    }
                ]
            },
            process: [
                { num: '01', title: 'Analyse Besoins', desc: 'Analyser opérations et définir besoins ERP précis' },
                { num: '02', title: 'Conception', desc: 'Concevoir et personnaliser la solution' },
                { num: '03', title: 'Implémentation Progressive', desc: 'Lancer modules progressivement' },
                { num: '04', title: 'Formation & Support', desc: 'Formation complète avec support 24/7' }
            ],
            faq: [
                {
                    q: 'Différence entre Odoo et SAP?',
                    a: 'Odoo pour PME (5-200 employés) avec coût réduit. SAP pour grandes entreprises (200+) nécessitant scalabilité massive.'
                },
                {
                    q: 'Solution conforme ZATCA?',
                    a: 'Oui 100%. Toutes nos solutions sont certifiées ZATCA et conformes aux Phases 1 et 2 de la facturation électronique.'
                },
                {
                    q: 'Durée d\'implémentation ERP?',
                    a: 'Dépend de la taille: Odoo Base (2-3 mois), Odoo Avancé (4-6 mois), SAP (6-12 mois).'
                },
                {
                    q: 'Continuer avec systèmes existants?',
                    a: 'Oui, intégration transparente via APIs personnalisées pour préserver investissements antérieurs.'
                }
            ],
            cta: {
                title: 'Prêt à Moderniser Vos Systèmes?',
                desc: 'Réservez consultation gratuite avec experts ERP',
                button: 'Réserver Consultation'
            }
        }
    }

    const t = content[lang]
    const isRTL = lang === 'ar'

    // JSON-LD Schemas
    const enterpriseSchema = getEnterpriseSolutionSchema()
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: lang === 'ar' ? 'الرئيسية' : 'Home', url: `${siteConfig.url}/${lang}` },
        { name: lang === 'ar' ? 'الحلول' : 'Solutions', url: `${siteConfig.url}/${lang}/solutions` },
        { name: lang === 'ar' ? 'المؤسسات' : 'Enterprise', url: `${siteConfig.url}/${lang}/solutions/enterprise` },
    ])
    const faqSchema = getFAQSchema(t.faq.map(item => ({ question: item.q, answer: item.a })))

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enterpriseSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className={`min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 ${isRTL ? 'rtl' : 'ltr'}`}>
                {/* Hero */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-indigo-500/10" />
                    <div className="relative container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                    {t.title}
                                </h1>
                                <p className="text-xl text-gray-300 mb-8">{t.subtitle}</p>
                                <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all">
                                    {t.cta.button}
                                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Challenge */}
                <section className="py-16 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{t.challenge.title}</h2>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {t.challenge.items.map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-slate-800/50 rounded-lg border border-white/10">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">✕</div>
                                    <p className="text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-16 text-white">حلولنا للمؤسسات | Enterprise Solutions</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {t.solutions.map((solution, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <solution.icon className="w-7 h-7 text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                                    <p className="text-gray-400 mb-6">{solution.description}</p>
                                    <ul className="space-y-2">
                                        {solution.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance */}
                <section className="py-16 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.compliance.title}</h2>
                        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {t.compliance.items.map((item, i) => {
                                const Icon = item.icon
                                return (
                                    <div key={i} className="text-center">
                                        <div className="w-16 h-16 mx-auto rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                                            <Icon className="w-8 h-8 text-purple-400" />
                                        </div>
                                        <p className="text-gray-300 font-semibold">{item.label}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Pricing - GEO Optimized */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-16 text-white">{t.pricing.title}</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {t.pricing.tiers.map((tier, i) => (
                                <div key={i} className="p-8 bg-slate-800/50 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all">
                                    <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-purple-400">{tier.price}</span>
                                        {tier.currency && <span className="text-gray-400 text-lg ml-2">{tier.currency}</span>}
                                    </div>
                                    <ul className="space-y-3">
                                        {tier.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-16 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">منهجية التنفيذ | Implementation</h2>
                        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {t.process.map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-5xl font-bold text-purple-500/20 mb-4">{step.num}</div>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-sm">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-white">الأسئلة الشائعة | FAQ</h2>
                        <div className="max-w-3xl mx-auto space-y-6">
                            {t.faq.map((faq, i) => (
                                <div key={i} className="p-6 bg-slate-800/50 rounded-lg border border-white/10">
                                    <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">{t.cta.title}</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t.cta.desc}</p>
                        <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-all">
                            {t.cta.button}
                            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}
