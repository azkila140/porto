'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, Hospital, Store, Utensils } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'

interface SolutionsPageProps {
    params: { lang: Locale }
}

const content = {
    ar: {
        title: 'حلول مصممة خصيصاً لصناعتك',
        subtitle: 'نقدم حلولاً رقمية متكاملة تلبي احتياجات قطاعات متنوعة',
        industries: [
            {
                slug: 'real-estate',
                name: 'العقارات',
                description: 'منصات عقارية متقدمة لإدارة الممتلكات والمبيعات',
                icon: Building2,
            },
            {
                slug: 'medical',
                name: 'الطب والصحة',
                description: 'حلول صحية ذكية لإدارة العيادات والمستشفيات',
                icon: Hospital,
            },
            {
                slug: 'restaurants',
                name: 'المطاعم',
                description: 'أنظمة إدارة مطاعم شاملة مع الطلبات الإلكترونية',
                icon: Utensils,
            },
            {
                slug: 'retail',
                name: 'التجزئة',
                description: 'منصات تجارة إلكترونية وإدارة المخزون',
                icon: Store,
            },
        ],
        cta: 'استكشف الحلول',
    },
    fr: {
        title: 'Solutions Sur Mesure Pour Votre Industrie',
        subtitle: 'Des solutions numériques complètes adaptées à divers secteurs',
        industries: [
            {
                slug: 'real-estate',
                name: 'Immobilier',
                description: 'Plateformes immobilières avancées pour la gestion et les ventes',
                icon: Building2,
            },
            {
                slug: 'medical',
                name: 'Médical & Santé',
                description: 'Solutions intelligentes pour cliniques et hôpitaux',
                icon: Hospital,
            },
            {
                slug: 'restaurants',
                name: 'Restaurants',
                description: 'Systèmes complets avec commandes en ligne',
                icon: Utensils,
            },
            {
                slug: 'retail',
                name: 'Commerce de Détail',
                description: 'E-commerce et gestion des stocks',
                icon: Store,
            },
        ],
        cta: 'Découvrir',
    },
    en: {
        title: 'Tailored Solutions For Your Industry',
        subtitle: 'Comprehensive digital solutions designed for diverse sectors',
        industries: [
            {
                slug: 'real-estate',
                name: 'Real Estate',
                description: 'Advanced platforms for property management and sales',
                icon: Building2,
            },
            {
                slug: 'medical',
                name: 'Medical & Healthcare',
                description: 'Smart healthcare solutions for clinics and hospitals',
                icon: Hospital,
            },
            {
                slug: 'restaurants',
                name: 'Restaurants',
                description: 'Complete management systems with online ordering',
                icon: Utensils,
            },
            {
                slug: 'retail',
                name: 'Retail',
                description: 'E-commerce platforms and inventory management',
                icon: Store,
            },
        ],
        cta: 'Explore Solutions',
    },
}

export default function SolutionsPage({ params }: SolutionsPageProps) {
    const t = content[params.lang]

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald/10 via-cyan-500/10 to-transparent" />

                <div className="relative container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-emerald to-cyan-400 bg-clip-text text-transparent">
                            {t.title}
                        </h1>
                        <p className="text-xl text-gray-400">
                            {t.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.industries.map((industry, index) => (
                            <motion.div
                                key={industry.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/${params.lang}/solutions/${industry.slug}`}
                                    className="group block h-full"
                                >
                                    <div className="h-full p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm hover:border-brand-emerald/50 transition-all duration-300 flex flex-col">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-emerald/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <industry.icon className="w-7 h-7 text-brand-emerald" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-emerald transition-colors">
                                            {industry.name}
                                        </h3>

                                        <p className="text-gray-400 mb-4 flex-1">
                                            {industry.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-brand-emerald opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-sm font-medium">{t.cta}</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
