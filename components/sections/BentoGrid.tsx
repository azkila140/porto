'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import type { Locale } from '@/lib/i18n/config'
import {
    Code2,
    Workflow,
    Palette,
    MapPin,
    TrendingUp,
    Sparkles
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
            imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        },
        {
            icon: Workflow,
            title: 'الأتمتة الذكية',
            description: 'أتمتة العمليات وتكاملات n8n المتقدمة',
            gradient: 'from-purple-500 to-pink-500',
            imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
        },
        {
            icon: Palette,
            title: 'الهوية البصرية',
            description: 'تصميم علامات تجارية مميزة ومؤثرة',
            gradient: 'from-orange-500 to-red-500',
            imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        },
        {
            icon: MapPin,
            title: 'خرائط جوجل',
            description: 'تحسين الظهور المحلي وإدارة Google Business',
            gradient: 'from-green-500 to-emerald-500',
            imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80',
        },
        {
            icon: TrendingUp,
            title: 'النمو والتسويق',
            description: 'استراتيجيات تسويقية شاملة لتنمية أعمالك',
            gradient: 'from-indigo-500 to-purple-500',
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        },
        {
            icon: Sparkles,
            title: 'الابتكار الرقمي',
            description: 'حلول مبتكرة تتطلع إلى المستقبل',
            gradient: 'from-yellow-500 to-orange-500',
            imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        },
    ],
    fr: [
        {
            icon: Code2,
            title: 'Ingénierie Digitale',
            description: 'Développement de sites et applications avec les dernières technologies',
            gradient: 'from-blue-500 to-cyan-500',
            imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        },
        {
            icon: Workflow,
            title: 'Automatisation Intelligente',
            description: 'Automatisation des processus et intégrations n8n avancées',
            gradient: 'from-purple-500 to-pink-500',
            imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
        },
        {
            icon: Palette,
            title: 'Identité Visuelle',
            description: 'Conception de marques distinctives et impactantes',
            gradient: 'from-orange-500 to-red-500',
            imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        },
        {
            icon: MapPin,
            title: 'Google Maps',
            description: 'Optimisation locale et gestion Google Business',
            gradient: 'from-green-500 to-emerald-500',
            imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80',
        },
        {
            icon: TrendingUp,
            title: 'Croissance & Marketing',
            description: 'Stratégies marketing complètes pour développer votre entreprise',
            gradient: 'from-indigo-500 to-purple-500',
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        },
        {
            icon: Sparkles,
            title: 'Innovation Digitale',
            description: 'Solutions innovantes tournées vers l\'avenir',
            gradient: 'from-yellow-500 to-orange-500',
            imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        },
    ],
    en: [
        {
            icon: Code2,
            title: 'Digital Engineering',
            description: 'Advanced web and app development with cutting-edge tech',
            gradient: 'from-blue-500 to-cyan-500',
            imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        },
        {
            icon: Workflow,
            title: 'Smart Automation',
            description: 'Process automation and advanced n8n integrations',
            gradient: 'from-purple-500 to-pink-500',
            imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
        },
        {
            icon: Palette,
            title: 'Brand Identity',
            description: 'Distinctive and impactful brand design',
            gradient: 'from-orange-500 to-red-500',
            imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        },
        {
            icon: MapPin,
            title: 'Google Maps',
            description: 'Local SEO optimization and Google Business management',
            gradient: 'from-green-500 to-emerald-500',
            imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80',
        },
        {
            icon: TrendingUp,
            title: 'Growth & Marketing',
            description: 'Comprehensive marketing strategies to grow your business',
            gradient: 'from-indigo-500 to-purple-500',
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        },
        {
            icon: Sparkles,
            title: 'Digital Innovation',
            description: 'Forward-thinking innovative solutions for the future',
            gradient: 'from-yellow-500 to-orange-500',
            imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        },
    ],
}

export function BentoGrid({ lang }: BentoGridProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const items = services[lang]

    return (
        <section ref={ref} className="py-24 px-4 bg-slate-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(197, 160, 89, 0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block mb-4 px-4 py-2 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5"
                    >
                        <span className="text-[#C5A059] font-semibold text-sm">
                            {lang === 'ar' ? '✦ خدماتنا المتميزة ✦' : lang === 'fr' ? '✦ Nos Services Premium ✦' : '✦ Premium Services ✦'}
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-[#C5A059] bg-clip-text text-transparent">
                        {lang === 'ar' ? 'خدماتنا المتكاملة' : lang === 'fr' ? 'Nos Services Intégrés' : 'Our Integrated Services'}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {lang === 'ar' ? '6 ركائز لتحويل رقمي شامل' : lang === 'fr' ? '6 piliers pour une transformation digitale complète' : '6 Pillars for Complete Digital Transformation'}
                    </p>
                </motion.div>

                {/* 6 Equal Premium Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.7, type: 'spring', stiffness: 100 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 hover:border-[#C5A059]/40 transition-all duration-500 overflow-hidden"
                            >
                                {/* Background Image Layer */}
                                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </motion.div>
                                    {/* Dark Overlay for Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-950/90" />
                                </div>

                                {/* Luxury Gold Glow on Hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 via-transparent to-transparent" />
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                                </div>

                                {/* Animated Golden Particles */}
                                <div className="absolute top-4 right-4 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059] to-transparent rounded-full blur-xl animate-pulse" />
                                </div>

                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon with Premium Gold Ring */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.8 }}
                                        className="relative inline-flex mb-6"
                                    >
                                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                                            <Icon className="w-8 h-8 text-white relative z-10" />
                                        </div>
                                        {/* Golden Ring */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059] via-yellow-500 to-[#C5A059] rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse -z-10 blur-sm" />
                                    </motion.div>

                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#C5A059] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </div>

                                {/* Bottom Gold Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
