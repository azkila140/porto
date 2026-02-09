'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Zap, Palette, MapPin, TrendingUp, LucideIcon } from 'lucide-react'

// Icon mapping for client-side rendering
const iconMap: Record<string, LucideIcon> = {
    Code,
    Zap,
    Palette,
    MapPin,
    TrendingUp,
}

interface ServicesClientProps {
    lang: string
    dict: any
}

export default function ServicesClient({ lang, dict }: ServicesClientProps) {
    return (
        <div className="min-h-screen bg-slate-950">
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
                            {dict.title}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                            {dict.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-10 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dict.services.map((service: any, index: number) => {
                            const Icon = iconMap[service.icon] || Code
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-emerald/50 transition-all duration-300"
                                >
                                    <div className="mb-6 inline-block p-4 rounded-xl bg-brand-emerald/10 text-brand-emerald group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-emerald transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 line-clamp-3">
                                        {service.description}
                                    </p>
                                    <Link
                                        href={`/${lang}/services/${service.id}`}
                                        className="inline-flex items-center gap-2 text-brand-emerald font-semibold group/link"
                                    >
                                        {lang === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
