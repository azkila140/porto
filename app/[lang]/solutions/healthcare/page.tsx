'use client'

import type { Metadata } from 'next'
import { getHealthcareSolutionSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { Heart, Calendar, FileText, TrendingDown, Smartphone, Clock, Shield, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

type Locale = 'ar' | 'en' | 'fr'

interface HealthcareSolutionProps {
    params: {
        lang: Locale
    }
}

export default function HealthcareSolutionPage({ params }: HealthcareSolutionProps) {
    const { lang } = params

    // Content by language
    const content = {
        ar: {
            title: 'النظام البيئي الرقمي للمنشآت الصحية',
            subtitle: 'نظام متكامل لإدارة العيادات والمستشفيات - تحسين تجربة المريض وكفاءة العمليات',
            challenge: {
                title: 'تحديات القطاع الصحي',
                items: [
                    'أوقات انتظار طويلة وإدارة حجوزات معقدة',
                    'نسبة عالية من عدم حضور المرضى للمواعيد (No-show)',
                    'صعوبة تتبع السجلات الطبية بكفاءة',
                    'ضعف التواصل بين المريض والمنشأة الصحية'
                ]
            },
            solutions: [
                {
                    icon: Heart,
                    title: 'نظام إدارة العيادات الذكي',
                    description: 'منصة شاملة لإدارة العيادات والمستشفيات مع لوحة تحكم متقدمة',
                    features: ['إدارة المرضى', 'تنظيم المواعيد', 'الفواتير الذكية', 'التقارير التحليلية']
                },
                {
                    icon: Calendar,
                    title: 'أتمتة الحجوزات',
                    description: 'نظام حجز أونلاين مع تذكيرات تلقائية لتقليل نسبة الغياب',
                    features: ['حجز أونلاين 24/7', 'رسائل تذكير', 'تكامل واتساب', 'إدارة قوائم الانتظار']
                },
                {
                    icon: FileText,
                    title: 'السجلات الطبية الإلكترونية EMR',
                    description: 'نظام متوافق وآمن للسجلات الطبية الإلكترونية',
                    features: ['سجلات محمية', 'وصول سريع', 'تكامل الأنظمة', 'نسخ احتياطي تلقائي']
                },
                {
                    icon: TrendingDown,
                    title: 'تقليل نسبة الغياب',
                    description: 'استراتيجيات ذكية لتقليل No-show وزيادة الإيرادات',
                    features: ['تذكير متعدد القنوات', 'إعادة جدولة سهلة', 'تحليل أنماط الغياب', 'نظام عقوبات مرن']
                },
            ],
            process: [
                { num: '01', title: 'تحليل احتياجات المنشأة', desc: 'نحلل workflow الحالي ونحدد نقاط التحسين' },
                { num: '02', title: 'تخصيص النظام', desc: 'نبني الحل المناسب مع التكامل مع أنظمتك الحالية' },
                { num: '03', title: 'التدريب والدعم', desc: 'تدريب شامل للفريق مع دعم فني مستمر' }
            ],
            faq: [
                {
                    q: 'هل النظام متوافق مع معايير حماية بيانات المرضى؟',
                    a: 'نعم، جميع أنظمتنا متوافقة تماماً مع معايير HIPAA وGDPR لحماية خصوصية المرضى، مع تشفير متقدم ونسخ احتياطي آمن للبيانات.'
                },
                {
                    q: 'كيف يمكن تقليل نسبة عدم حضور المرضى؟',
                    a: 'من خلال رسائل تذكير متعددة (SMS، واتساب، بريد إلكتروني) قبل الموعد بـ 48 ساعة و24 ساعة، مع نظام إعادة جدولة سهل. عملاؤنا يحققون تخفيض No-show بنسبة 40-60%.'
                },
                {
                    q: 'ما تكلفة نظام إدارة العيادات؟',
                    a: 'تبدأ الأسعار من 20,000 ريال للعيادة الصغيرة، مع خطط مخصصة للمستشفيات. نقدم ROI واضح من الشهر الأول عبر تحسين الكفاءة وتقليل الهدر.'
                }
            ],
            cta: {
                title: 'جاهز لتحديث منشأتك الصحية رقمياً؟',
                desc: 'احجز عرضاً توضيحياً مجانياً واكتشف كيف نحسن كفاءة عملياتك',
                button: 'احجز عرضاً توضيحياً'
            }
        },
        en: {
            title: 'Digital Ecosystem for Healthcare Facilities',
            subtitle: 'Comprehensive clinic and hospital management - Improving patient experience and operational efficiency',
            challenge: {
                title: 'Healthcare Sector Challenges',
                items: [
                    'Long wait times and complex appointment management',
                    'High no-show rates for patient appointments',
                    'Difficulty tracking medical records efficiently',
                    'Poor communication between patients and facility'
                ]
            },
            solutions: [
                {
                    icon: Heart,
                    title: 'Smart Clinic Management System',
                    description: 'Comprehensive platform for clinic and hospital management with advanced dashboard',
                    features: ['Patient management', 'Appointment scheduling', 'Smart billing', 'Analytics reports']
                },
                {
                    icon: Calendar,
                    title: 'Appointment Automation',
                    description: 'Online booking system with automatic reminders to reduce no-shows',
                    features: ['24/7 online booking', 'Reminder messages', 'WhatsApp integration', 'Waiting list management']
                },
                {
                    icon: FileText,
                    title: 'Electronic Medical Records EMR',
                    description: 'Compliant and secure electronic medical records system',
                    features: ['Protected records', 'Quick access', 'System integration', 'Auto backup']
                },
                {
                    icon: TrendingDown,
                    title: 'No-show Reduction',
                    description: 'Smart strategies to reduce no-shows and increase revenue',
                    features: ['Multi-channel reminders', 'Easy rescheduling', 'Absence pattern analysis', 'Flexible penalty system']
                },
            ],
            process: [
                { num: '01', title: 'Facility Needs Analysis', desc: 'Analyze current workflow and identify improvement points' },
                { num: '02', title: 'System Customization', desc: 'Build the right solution with integration to your existing systems' },
                { num: '03', title: 'Training & Support', desc: 'Comprehensive team training with ongoing technical support' }
            ],
            faq: [
                {
                    q: 'Is the system compliant with patient data protection standards?',
                    a: 'Yes, all our systems are fully compliant with HIPAA and GDPR standards for patient privacy protection, with advanced encryption and secure data backup.'
                },
                {
                    q: 'How can we reduce patient no-show rates?',
                    a: 'Through multiple reminders (SMS, WhatsApp, email) 48 and 24 hours before the appointment, with an easy rescheduling system. Our clients achieve 40-60% reduction in no-shows.'
                },
                {
                    q: 'What is the cost of a clinic management system?',
                    a: 'Pricing starts from 20,000 SAR for small clinics, with custom plans for hospitals. We provide clear ROI from month one through improved efficiency and reduced waste.'
                }
            ],
            cta: {
                title: 'Ready to Digitally Upgrade Your Healthcare Facility?',
                desc: 'Book a free demo and discover how we improve your operational efficiency',
                button: 'Book a Demo'
            }
        },
        fr: {
            title: 'Écosystème Numérique pour Établissements de Santé',
            subtitle: 'Gestion complète des cliniques et hôpitaux - Amélioration de l\'expérience patient',
            challenge: {
                title: 'Défis du Secteur de la Santé',
                items: [
                    'Longs temps d\'attente et gestion complexe des rendez-vous',
                    'Taux élevé d\'absence aux rendez-vous',
                    'Difficulté de suivi efficace des dossiers médicaux',
                    'Communication faible entre patient et établissement'
                ]
            },
            solutions: [
                {
                    icon: Heart,
                    title: 'Système de Gestion Intelligente',
                    description: 'Plateforme complète pour la gestion des cliniques et hôpitaux',
                    features: ['Gestion patients', 'Planification RDV', 'Facturation intelligente', 'Rapports analytiques']
                },
                {
                    icon: Calendar,
                    title: 'Automatisation des Rendez-vous',
                    description: 'Système de réservation en ligne avec rappels automatiques',
                    features: ['Réservation 24/7', 'Rappels messages', 'Intégration WhatsApp', 'Gestion liste d\'attente']
                },
                {
                    icon: FileText,
                    title: 'Dossiers Médicaux Électroniques',
                    description: 'Système conforme et sécurisé pour les dossiers médicaux',
                    features: ['Dossiers protégés', 'Accès rapide', 'Intégration système', 'Sauvegarde auto']
                },
                {
                    icon: TrendingDown,
                    title: 'Réduction Absentéisme',
                    description: 'Stratégies intelligentes pour réduire les absences',
                    features: ['Rappels multi-canaux', 'Reprogrammation facile', 'Analyse patterns', 'Système pénalités']
                },
            ],
            process: [
                { num: '01', title: 'Analyse des Besoins', desc: 'Analyser le workflow actuel et identifier les améliorations' },
                { num: '02', title: 'Personnalisation Système', desc: 'Construire la solution adaptée avec intégration' },
                { num: '03', title: 'Formation & Support', desc: 'Formation complète avec support technique continu' }
            ],
            faq: [
                {
                    q: 'Le système est-il conforme aux normes de protection des données?',
                    a: 'Oui, tous nos systèmes sont conformes aux normes HIPAA et GDPR avec cryptage avancé.'
                },
                {
                    q: 'Comment réduire le taux d\'absence des patients?',
                    a: 'Via des rappels multiples (SMS, WhatsApp, email) 48h et 24h avant le RDV. Nos clients réduisent les absences de 40-60%.'
                },
                {
                    q: 'Quel est le coût d\'un système de gestion?',
                    a: 'Les prix démarrent à 20 000 SAR pour les petites cliniques, avec des plans personnalisés pour les hôpitaux.'
                }
            ],
            cta: {
                title: 'Prêt à Moderniser Votre Établissement?',
                desc: 'Réservez une démo gratuite et découvrez comment nous améliorons votre efficacité',
                button: 'Réserver une Démo'
            }
        }
    }

    const t = content[lang]
    const isRTL = lang === 'ar'

    // JSON-LD Schemas
    const healthcareSchema = getHealthcareSolutionSchema()
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: lang === 'ar' ? 'الرئيسية' : 'Home', url: `${siteConfig.url}/${lang}` },
        { name: lang === 'ar' ? 'الحلول' : 'Solutions', url: `${siteConfig.url}/${lang}/solutions` },
        { name: lang === 'ar' ? 'الصحة' : 'Healthcare', url: `${siteConfig.url}/${lang}/solutions/healthcare` },
    ])
    const faqSchema = getFAQSchema(t.faq.map(item => ({ question: item.q, answer: item.a })))

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(healthcareSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className={`min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 ${isRTL ? 'rtl' : 'ltr'}`}>
                {/* Hero */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10" />
                    <div className="relative container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    {t.title}
                                </h1>
                                <p className="text-xl text-gray-300 mb-8">{t.subtitle}</p>
                                <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all">
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
                        <h2 className="text-4xl font-bold text-center mb-16 text-white">حلولنا المتكاملة | Our Integrated Solutions</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {t.solutions.map((solution, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <solution.icon className="w-7 h-7 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                                    <p className="text-gray-400 mb-6">{solution.description}</p>
                                    <ul className="space-y-2">
                                        {solution.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-16 bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">منهجية العمل | Our Methodology</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {t.process.map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-6xl font-bold text-blue-500/20 mb-4">{step.num}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400">{step.desc}</p>
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
                <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">{t.cta.title}</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t.cta.desc}</p>
                        <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all">
                            {t.cta.button}
                            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}
