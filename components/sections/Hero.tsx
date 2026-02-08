'use client'

import { motion } from 'framer-motion'
import type { Dictionary } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/i18n/config'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

interface HeroProps {
    dict: Dictionary
    lang: Locale
}

export function Hero({ dict, lang }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-dark via-brand-dark to-slate-900">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-emerald/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />

            {/* Language Switcher */}
            <div className="absolute top-8 right-8 z-20">
                <LanguageSwitcher currentLang={lang} />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-brand-emerald/20 to-blue-500/20 rounded-full border border-brand-emerald/30 backdrop-blur-sm"
                    >
                        <span className="text-brand-emerald font-medium text-sm">
                            Full-Stack Marketing Agency
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
                    >
                        {dict.hero.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
                    >
                        {dict.hero.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="group relative px-8 py-4 bg-brand-emerald rounded-lg font-semibold text-lg overflow-hidden transition-all hover:scale-105">
                            <span className="relative z-10">{dict.hero.cta}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all">
                            {dict.common.learnMore}
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-brand-emerald rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    )
}
