'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Truck, MapPin, Package, BarChart3, ArrowRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'

interface LogisticsViewProps {
    lang: Locale
    content: any
}

export function LogisticsView({ lang, content: t }: LogisticsViewProps) {
    const isRTL = lang === 'ar'
    const iconMap: Record<string, any> = { MapPin, Package, Truck, BarChart3 }

    return (
        <div className={`min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 ${isRTL ? 'rtl' : 'ltr'}`}>
            {/* Hero */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-amber-500/10" />
                <div className="relative container mx-auto px-4 text-center">
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
            </section>

            {/* Challenge */}
            <section className="py-16 bg-slate-900/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{t.challenge.title}</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {t.challenge.items.map((item: string, i: number) => (
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
                        {t.solutions.map((solution: any, i: number) => {
                            const Icon = iconMap[solution.icon] || Package
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="w-7 h-7 text-orange-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                                    <p className="text-gray-400 mb-6">{solution.description}</p>
                                    <ul className="space-y-2">
                                        {solution.features.map((f: string, j: number) => (
                                            <li key={j} className="flex items-center gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-slate-900/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.benefits.title}</h2>
                    <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {t.benefits.items.map((benefit: any, i: number) => (
                            <div key={i} className="text-center">
                                <div className="text-5xl font-bold text-orange-400 mb-3">{benefit.metric}</div>
                                <p className="text-gray-400">{benefit.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
