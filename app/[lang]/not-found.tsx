'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getDictionary, type Dictionary } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/i18n/config'

export default function NotFound() {
    const params = useParams()
    const lang = (params?.lang as Locale) || 'ar'
    const [dict, setDict] = useState<Dictionary | null>(null)

    useEffect(() => {
        getDictionary(lang).then(setDict)
    }, [lang])

    if (!dict) return null

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 bg-brand-dark">
            <div className="text-center max-w-2xl px-4 py-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative">
                        <div className="text-9xl font-black text-white/10 select-none">404</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl font-bold bg-gradient-to-r from-brand-emerald to-cyan-500 bg-clip-text text-transparent">
                                {dict.notFound.lost}
                            </span>
                        </div>
                    </div>
                </motion.div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{dict.notFound.title}</h1>
                <p className="text-gray-400 text-lg mb-8">
                    {dict.notFound.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href={`/${lang}`}
                        className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-brand-emerald text-white font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-brand-emerald/20"
                    >
                        <Home className="w-5 h-5" />
                        {dict.common.backToHome}
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        {dict.common.previousPage}
                    </button>
                </div>
            </div>
        </div>
    )
}
