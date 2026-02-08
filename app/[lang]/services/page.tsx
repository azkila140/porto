'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code, Zap, Palette, MapPin, TrendingUp, ArrowRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'

interface ServicesPageProps {
    params: { lang: Locale }
}

const content = {
    ar: {
        title: 'خدماتنا',
        subtitle: 'حلول رقمية متكاملة لتحويل أعمالك',
        description: 'نقدم مجموعة شاملة من الخدمات التقنية والإبداعية لمساعدة مشروعك على النمو والنجاح في العالم الرقمي',
        cta: 'تواصل معنا',
        learnMore: 'اعرف المزيد',
        services: [
            {
                title: 'الهندسة الرقمية',
                description: 'تطوير مواقع وتطبيقات ويب متقدمة باستخدام أحدث التقنيات',
                icon: Code,
                link: '/services/digital-engineering',
                color: 'text-blue-500',
                bg: 'bg-blue-500/10',
                border: 'hover:border-blue-500/50'
            },
            {
                title: 'الأتمتة والتكامل',
                description: 'أتمتة العمليات وربط الأنظمة لتحسين الكفاءة',
                icon: Zap,
                link: '/services/automation',
                color: 'text-purple-500',
                bg: 'bg-purple-500/10',
                border: 'hover:border-purple-500/50'
            },
            {
                title: 'الهوية والتصميم',
                description: 'تصميم هويات بصرية مميزة وعلامات تجارية قوية',
                icon: Palette,
                link: '/services/branding',
                color: 'text-orange-500',
                bg: 'bg-orange-500/10',
                border: 'hover:border-orange-500/50'
            },
            {
                title: 'خرائط جوجل والسيو',
                description: 'تحسين الظهور المحلي وتصدر نتائج البحث',
                icon: MapPin,
                link: '/services/google-maps-seo',
                color: 'text-green-500',
                bg: 'bg-green-500/10',
                border: 'hover:border-green-500/50'
            },
            {
                title: 'النمو والمحتوى',
                description: 'استراتيجيات نمو وتسويق بالمحتوى لزيادة المبيعات',
                icon: TrendingUp,
                link: '/services/growth-content',
                color: 'text-indigo-500',
                bg: 'bg-indigo-500/10',
                border: 'hover:border-indigo-500/50'
            }
        ]
    },
    fr: {
        title: 'Nos Services',
        subtitle: 'Solutions numériques complètes',
        description: 'Nous offrons une gamme complète de services techniques et créatifs pour aider votre entreprise à croître',
        cta: 'Contactez-nous',
        learnMore: 'En savoir plus',
        services: [
            {
                title: 'Ingénierie Digitale',
                description: 'Développement web et mobile avancé avec les dernières technologies',
                icon: Code,
                link: '/services/digital-engineering',
                color: 'text-blue-500',
                bg: 'bg-blue-500/10',
                border: 'hover:border-blue-500/50'
            },
            {
                title: 'Automatisation',
                description: 'Automatisation des processus et intégration de systèmes',
                icon: Zap,
                link: '/services/automation',
                color: 'text-purple-500',
                bg: 'bg-purple-500/10',
                border: 'hover:border-purple-500/50'
            },
            {
                title: 'Branding & Design',
                description: 'Conception d\'identités visuelles distinctives et marques fortes',
                icon: Palette,
                link: '/services/branding',
                color: 'text-orange-500',
                bg: 'bg-orange-500/10',
                border: 'hover:border-orange-500/50'
            },
            {
                title: 'Google Maps & SEO',
                description: 'Optimisation de la visibilité locale et des résultats de recherche',
                icon: MapPin,
                link: '/services/google-maps-seo',
                color: 'text-green-500',
                bg: 'bg-green-500/10',
                border: 'hover:border-green-500/50'
            },
            {
                title: 'Croissance & Contenu',
                description: 'Stratégies de croissance et marketing de contenu',
                icon: TrendingUp,
                link: '/services/growth-content',
                color: 'text-indigo-500',
                bg: 'bg-indigo-500/10',
                border: 'hover:border-indigo-500/50'
            }
        ]
    },
    en: {
        title: 'Our Services',
        subtitle: 'Comprehensive Digital Solutions',
        description: 'We offer a full range of technical and creative services to help your business grow and succeed digitally',
        cta: 'Contact Us',
        learnMore: 'Learn more',
        services: [
            {
                title: 'Digital Engineering',
                description: 'Advanced web and mobile development using latest technologies',
                icon: Code,
                link: '/services/digital-engineering',
                color: 'text-blue-500',
                bg: 'bg-blue-500/10',
                border: 'hover:border-blue-500/50'
            },
            {
                title: 'Automation',
                description: 'Process automation and system integration for efficiency',
                icon: Zap,
                link: '/services/automation',
                color: 'text-purple-500',
                bg: 'bg-purple-500/10',
                border: 'hover:border-purple-500/50'
            },
            {
                title: 'Branding & Design',
                description: 'Distinctive visual identity design and strong branding',
                icon: Palette,
                link: '/services/branding',
                color: 'text-orange-500',
                bg: 'bg-orange-500/10',
                border: 'hover:border-orange-500/50'
            },
            {
                title: 'Google Maps & SEO',
                description: 'Local visibility optimization and search rankings',
                icon: MapPin,
                link: '/services/google-maps-seo',
                color: 'text-green-500',
                bg: 'bg-green-500/10',
                border: 'hover:border-green-500/50'
            },
            {
                title: 'Growth & Content',
                description: 'Growth strategies and content marketing for sales',
                icon: TrendingUp,
                link: '/services/growth-content',
                color: 'text-indigo-500',
                bg: 'bg-indigo-500/10',
                border: 'hover:border-indigo-500/50'
            }
        ]
    }
}

export default function ServicesPage({ params }: ServicesPageProps) {
    const { lang } = params
    const t = content[lang]

    return (
        <main className="min-h-screen bg-slate-950 pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            {t.title}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                            {t.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-10 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <Link href={`/${lang}${service.link}`} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className={`group h-full p-8 rounded-2xl bg-slate-900 border border-white/5 ${service.border} transition-all duration-300 relative overflow-hidden`}
                                    >
                                        <div className={`absolute inset-0 ${service.bg} opacity-0 group-hover:opacity-10 transition-opacity`} />

                                        <div className={`w-12 h-12 rounded-lg ${service.bg} flex items-center justify-center mb-6`}>
                                            <Icon className={`w-6 h-6 ${service.color}`} />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-emerald transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-400 mb-6 line-clamp-2">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                                            {t.learnMore}
                                            <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                                        </div>
                                    </motion.div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}
