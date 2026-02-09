'use client'

import { getLogisticsSolutionSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { Truck, MapPin, Package, BarChart3, Clock, TrendingUp, Shield, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

type Locale = 'ar' | 'en' | 'fr'

interface LogisticsSolutionProps {
    params: {
        lang: Locale
    }
}

export default function LogisticsSolutionPage({ params }: LogisticsSolutionProps) {
    const { lang } = params

    // Content by language
    const content = {
        ar: {
            title: 'النظام البيئي الرقمي للوجستيات والنقل',
            subtitle: 'من إدارة سلسلة التوريد إلى التتبع اللحظي - حلول ذكية لتحسين الكفاءة وتقليل التكاليف',
            challenge: {
                title: 'تحديات قطاع اللوجستيات',
                items: [
                    'صعوبة تتبع الشحنات في الوقت الفعلي',
                    'ارتفاع تكاليف التوصيل وخاصة الميل الأخير',
                    'إدارة معقدة للمخازن والمستودعات',
                    'ضعف التنسيق بين المرسل والمستلم والناقل'
                ]
            },
            solutions: [
                {
                    icon: MapPin,
                    title: 'التتبع اللحظي للشحنات',
                    description: 'نظام GPS متقدم لتتبع الشحنات والمركبات في الوقت الفعلي',
                    features: ['تتبع GPS دقيق', 'إشعارات فورية', 'تطبيق موبايل', 'تقارير مفصلة']
                },
                {
                    icon: Package,
                    title: 'نظام إدارة المستودعات WMS',
                    description: 'حلول متكاملة لإدارة المخزون والمستودعات بكفاءة عالية',
                    features: ['إدارة المخزون', 'باركود ذكي', 'حركة المواد', 'تحسين المساحة']
                },
                {
                    icon: Truck,
                    title: 'تحسين التوصيل (Last-Mile)',
                    description: 'خوارزميات ذكية لتخطيط المسارات وتقليل تكاليف التوصيل',
                    features: ['تخطيط المسارات', 'توزيع الحمولة', 'تقليل الوقود', 'زيادة الإنتاجية']
                },
                {
                    icon: BarChart3,
                    title: 'إدارة سلسلة التوريد',
                    description: 'منصة شاملة لإدارة جميع عمليات سلسلة التوريد',
                    features: ['تخطيط الطلب', 'إدارة الموردين', 'تحليل الأداء', 'تقليل الهدر']
                },
            ],
            benefits: {
                title: 'الفوائد المباشرة',
                items: [
                    { metric: '40%', label: 'تخفيض تكاليف التشغيل' },
                    { metric: '60%', label: 'تحسين وقت التسليم' },
                    { metric: '95%', label: 'دقة تتبع الشحنات' },
                    { metric: '30%', label: 'تقليل هدر المخزون' }
                ]
            },
            process: [
                { num: '01', title: 'تحليل العمليات الحالية', desc: 'ندرس workflow اللوجستي ونحدد نقاط الاختناق' },
                { num: '02', title: 'التصميم والتكامل', desc: 'نبني الحل ونربطه مع أنظمة ERP والنقل الحالية' },
                { num: '03', title: 'التنفيذ والمراقبة', desc: 'نطلق النظام مع مراقبة مستمرة للأداء' }
            ],
            faq: [
                {
                    q: 'كيف يعمل نظام التتبع اللحظي؟',
                    a: 'نستخدم أجهزة GPS متقدمة متصلة بمنصتنا السحابية، توفر تحديثات فورية كل 30 ثانية عن موقع الشحنة، مع إشعارات تلقائية للعملاء عبر SMS وواتساب.'
                },
                {
                    q: 'هل يمكن التكامل مع أنظمة ERP الحالية؟',
                    a: 'نعم، نوفر تكامل سلس مع جميع أنظمة ERP الرئيسية (SAP، Oracle، Odoo، Microsoft Dynamics) عبر APIs آمنة، مع مزامنة بيانات فورية ثنائية الاتجاه.'
                },
                {
                    q: 'ما مدى توفير التكاليف المتوقع؟',
                    a: 'عملاؤنا يحققون متوسط توفير 30-40% في تكاليف التشغيل خلال السنة الأولى، من خلال تحسين المسارات، تقليل الوقود، وتحسين استخدام الأصول.'
                }
            ],
            cta: {
                title: 'جاهز لتحسين عمليات اللوجستيات؟',
                desc: 'احجز عرضاً توضيحياً واكتشف كيف نخفض تكاليفك ونحسن كفاءتك',
                button: 'احجز عرضاً مجانياً'
            }
        },
        en: {
            title: 'Digital Ecosystem for Logistics & Transportation',
            subtitle: 'From Supply Chain Management to Real-Time Tracking - Smart solutions to improve efficiency and reduce costs',
            challenge: {
                title: 'Logistics Sector Challenges',
                items: [
                    'Difficulty tracking shipments in real-time',
                    'High delivery costs, especially last-mile',
                    'Complex warehouse and inventory management',
                    'Poor coordination between sender, receiver, and carrier'
                ]
            },
            solutions: [
                {
                    icon: MapPin,
                    title: 'Real-Time Shipment Tracking',
                    description: 'Advanced GPS system for real-time tracking of shipments and vehicles',
                    features: ['Precise GPS tracking', 'Instant notifications', 'Mobile app', 'Detailed reports']
                },
                {
                    icon: Package,
                    title: 'Warehouse Management System WMS',
                    description: 'Integrated solutions for efficient inventory and warehouse management',
                    features: ['Inventory management', 'Smart barcode', 'Material movement', 'Space optimization']
                },
                {
                    icon: Truck,
                    title: 'Last-Mile Delivery Optimization',
                    description: 'Smart algorithms for route planning and delivery cost reduction',
                    features: ['Route planning', 'Load distribution', 'Fuel reduction', 'Productivity increase']
                },
                {
                    icon: BarChart3,
                    title: 'Supply Chain Management',
                    description: 'Comprehensive platform for managing all supply chain operations',
                    features: ['Demand planning', 'Supplier management', 'Performance analysis', 'Waste reduction']
                },
            ],
            benefits: {
                title: 'Direct Benefits',
                items: [
                    { metric: '40%', label: 'Operating Cost Reduction' },
                    { metric: '60%', label: 'Delivery Time Improvement' },
                    { metric: '95%', label: 'Shipment Tracking Accuracy' },
                    { metric: '30%', label: 'Inventory Waste Reduction' }
                ]
            },
            process: [
                { num: '01', title: 'Current Operations Analysis', desc: 'Study logistics workflow and identify bottlenecks' },
                { num: '02', title: 'Design & Integration', desc: 'Build solution and integrate with existing ERP and transport systems' },
                { num: '03', title: 'Implementation & Monitoring', desc: 'Launch system with continuous performance monitoring' }
            ],
            faq: [
                {
                    q: 'How does real-time tracking work?',
                    a: 'We use advanced GPS devices connected to our cloud platform, providing updates every 30 seconds about shipment location, with automatic notifications to customers via SMS and WhatsApp.'
                },
                {
                    q: 'Can it integrate with existing ERP systems?',
                    a: 'Yes, we provide seamless integration with all major ERP systems (SAP, Oracle, Odoo, Microsoft Dynamics) via secure APIs, with instant bidirectional data synchronization.'
                },
                {
                    q: 'What cost savings can we expect?',
                    a: 'Our clients achieve average savings of 30-40% in operating costs within the first year, through route optimization, fuel reduction, and improved asset utilization.'
                }
            ],
            cta: {
                title: 'Ready to Optimize Your Logistics Operations?',
                desc: 'Book a demo and discover how we reduce your costs and improve efficiency',
                button: 'Book Free Demo'
            }
        },
        fr: {
            title: 'Écosystème Numérique pour la Logistique',
            subtitle: 'De la gestion de la chaîne d\'approvisionnement au suivi en temps réel',
            challenge: {
                title: 'Défis du Secteur Logistique',
                items: [
                    'Difficulté de suivi des expéditions en temps réel',
                    'Coûts de livraison élevés, surtout dernier kilomètre',
                    'Gestion complexe des entrepôts et stocks',
                    'Mauvaise coordination entre expéditeur, destinataire et transporteur'
                ]
            },
            solutions: [
                {
                    icon: MapPin,
                    title: 'Suivi Temps Réel',
                    description: 'Système GPS avancé pour suivi en temps réel',
                    features: ['Suivi GPS précis', 'Notifications instantanées', 'App mobile', 'Rapports détaillés']
                },
                {
                    icon: Package,
                    title: 'Système Gestion Entrepôt WMS',
                    description: 'Solutions intégrées pour gestion efficace des stocks',
                    features: ['Gestion stock', 'Code-barres intelligent', 'Mouvement matériel', 'Optimisation espace']
                },
                {
                    icon: Truck,
                    title: 'Optimisation Dernier Kilomètre',
                    description: 'Algorithmes intelligents pour planification routes',
                    features: ['Planification itinéraire', 'Distribution charge', 'Réduction carburant', 'Productivité']
                },
                {
                    icon: BarChart3,
                    title: 'Gestion Chaîne Approvisionnement',
                    description: 'Plateforme complète pour toutes les opérations',
                    features: ['Planification demande', 'Gestion fournisseurs', 'Analyse performance', 'Réduction gaspillage']
                },
            ],
            benefits: {
                title: 'Bénéfices Directs',
                items: [
                    { metric: '40%', label: 'Réduction Coûts' },
                    { metric: '60%', label: 'Amélioration Livraison' },
                    { metric: '95%', label: 'Précision Suivi' },
                    { metric: '30%', label: 'Réduction Gaspillage' }
                ]
            },
            process: [
                { num: '01', title: 'Analyse Opérations', desc: 'Étude du workflow et identification des goulots' },
                { num: '02', title: 'Conception & Intégration', desc: 'Construction et intégration avec systèmes existants' },
                { num: '03', title: 'Mise en Œuvre', desc: 'Lancement avec surveillance continue' }
            ],
            faq: [
                {
                    q: 'Comment fonctionne le suivi en temps réel?',
                    a: 'Nous utilisons des appareils GPS connectés à notre plateforme cloud, avec mises à jour toutes les 30 secondes.'
                },
                {
                    q: 'Intégration avec ERP existants?',
                    a: 'Oui, intégration transparente avec tous les principaux systèmes ERP via APIs sécurisées.'
                },
                {
                    q: 'Économies de coûts attendues?',
                    a: 'Nos clients réalisent des économies moyennes de 30-40% la première année.'
                }
            ],
            cta: {
                title: 'Prêt à Optimiser Vos Opérations?',
                desc: 'Réservez une démo et découvrez comment nous réduisons vos coûts',
                button: 'Réserver Démo'
            }
        }
    }

    const t = content[lang]
    const isRTL = lang === 'ar'

    // JSON-LD Schemas
    const logisticsSchema = getLogisticsSolutionSchema()
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: lang === 'ar' ? 'الرئيسية' : 'Home', url: `${siteConfig.url}/${lang}` },
        { name: lang === 'ar' ? 'الحلول' : 'Solutions', url: `${siteConfig.url}/${lang}/solutions` },
        { name: lang === 'ar' ? 'اللوجستيات' : 'Logistics', url: `${siteConfig.url}/${lang}/solutions/logistics` },
    ])
    const faqSchema = getFAQSchema(t.faq.map(item => ({ question: item.q, answer: item.a })))

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(logisticsSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className={`min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 ${isRTL ? 'rtl' : 'ltr'}`}>
                {/* Hero */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-amber-500/10" />
                    <div className="relative container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-400 to-amber-400 bg-clip-text text-transparent">
                                    {t.title}
                                </h1>
                                <p className="text-xl text-gray-300 mb-8">{t.subtitle}</p>
                                <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all">
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
                        <h2 className="text-4xl font-bold text-center mb-16 text-white">حلولنا المتكاملة | Our Solutions</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {t.solutions.map((solution, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <solution.icon className="w-7 h-7 text-orange-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                                    <p className="text-gray-400 mb-6">{solution.description}</p>
                                    <ul className="space-y-2">
                                        {solution.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-16 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.benefits.title}</h2>
                        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            {t.benefits.items.map((benefit, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-5xl font-bold text-orange-400 mb-3">{benefit.metric}</div>
                                    <p className="text-gray-400">{benefit.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">منهجية العمل | Methodology</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {t.process.map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-6xl font-bold text-orange-500/20 mb-4">{step.num}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-slate-900/50">
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
                <section className="py-20 bg-gradient-to-r from-orange-500/10 to-amber-500/10">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">{t.cta.title}</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t.cta.desc}</p>
                        <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold text-lg transition-all">
                            {t.cta.button}
                            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}
