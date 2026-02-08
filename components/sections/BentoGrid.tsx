'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Locale } from '@/lib/i18n/config'
import {
    Code2,
    Workflow,
    Palette,
    MapPin,
    TrendingUp
} from 'lucide-react'

interface BentoGridProps {
    lang: Locale
}

const services = {
    ar: [
        {
            icon: Code2,
            title: 'الهندسة الرقمية',
            description: 'تطوير مواقع وتطبيقات متقدمة بأحدث التقنيات',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Workflow,
            title: 'الأتمتة الذكية',
            description: 'أتمتة العمليات وتكاملات n8n المتقدمة',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: Palette,
            title: 'الهوية البصرية',
            description: 'تصميم علامات تجارية مميزة ومؤثرة',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            icon: MapPin,
            title: 'خرائط جوجل',
            description: 'تحسين الظهور المحلي وإدارة Google Business',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            icon: TrendingUp,
            title: 'النمو والتسويق',
            description: 'استراتيجيات تسويقية شاملة لتنمية أعمالك',
            gradient: 'from-yellow-500 to-orange-500',
        },
    ],
    fr: [
        {
            icon: Code2,
            title: 'Ingénierie Digitale',
            description: 'Développement de sites et applications avec les dernières technologies',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Workflow,
            title: 'Automatisation Intelligente',
            description: 'Automatisation des processus et intégrations n8n avancées',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: Palette,
            title: 'Identité Visuelle',
            description: 'Conception de marques distinctives et impactantes',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            icon: MapPin,
            title: 'Google Maps',
            description: 'Optimisation locale et gestion Google Business',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            icon: TrendingUp,
            title: 'Croissance & Marketing',
            description: 'Stratégies marketing complètes pour développer votre entreprise',
            gradient: 'from-yellow-500 to-orange-500',
        },
    ],
    en: [
        {
            icon: Code2,
            title: 'Digital Engineering',
            description: 'Advanced web and app development with cutting-edge tech',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Workflow,
            title: 'Smart Automation',
            description: 'Process automation and advanced n8n integrations',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: Palette,
            title: 'Brand Identity',
            description: 'Distinctive and impactful brand design',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            icon: MapPin,
            title: 'Google Maps',
            description: 'Local SEO optimization and Google Business management',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            icon: TrendingUp,
            title: 'Growth & Marketing',
            description: 'Comprehensive marketing strategies to grow your business',
            gradient: 'from-yellow-500 to-orange-500',
        },
    ],
}

export function BentoGrid({ lang }: BentoGridProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const items = services[lang]

    return (
        <section ref={ref} className="py-24 px-4 bg-slate-900">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        {lang === 'ar' ? 'خدماتنا المتكاملة' : lang === 'fr' ? 'Nos Services Intégrés' : 'Our Integrated Services'}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {lang === 'ar' ? '5 ركائز لتحويل رقمي شامل' : lang === 'fr' ? '5 piliers pour une transformation digitale complète' : '5 Pillars for Complete Digital Transformation'}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${index === 0 ? 'lg:col-span-2' : ''
                                    } ${index === items.length - 1 ? 'lg:col-span-3 md:col-span-2' : ''
                                    } bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden`}
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-4`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
