'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, MapPin, Users, TrendingUp, Video, Search, ArrowRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'

interface RealEstateViewProps {
    lang: Locale
    content: any
}

export function RealEstateView({ lang, content: t }: RealEstateViewProps) {
    const isRTL = lang === 'ar'
    const iconMap: Record<string, any> = { Users, Video, TrendingUp, Search }

    return (
        <div className={`min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 ${isRTL ? 'rtl' : 'ltr'}`}>
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald/10 via-transparent to-cyan-500/10" />
                <div className="relative container mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-emerald to-cyan-400 bg-clip-text text-transparent">
                            {t.hero.title}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">{t.hero.subtitle}</p>
                        <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-brand-emerald hover:bg-brand-emerald/90 text-white rounded-lg font-semibold transition-all">
                            {t.hero.cta}
                            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="py-16 bg-slate-900/50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">{t.challenge.title}</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {t.challenge.items.map((item: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-lg border border-white/10 text-left rtl:text-right">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">✕</div>
                                <p className="text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">{t.solutions.title}</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {t.solutions.items.map((solution: any, idx: number) => {
                            const Icon = iconMap[solution.icon]
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 hover:border-brand-emerald/50 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-brand-emerald/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="w-7 h-7 text-brand-emerald" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                                    <p className="text-gray-400 mb-6">{solution.description}</p>
                                    <ul className="space-y-2">
                                        {solution.features.map((feature: string, i: number) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
