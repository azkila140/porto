'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, RefreshCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getDictionary, type Dictionary } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/i18n/config'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
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
                    <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                        <RefreshCcw className="w-10 h-10" />
                    </div>
                </motion.div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{dict.error.title}</h1>
                <p className="text-gray-400 text-lg mb-8">
                    {dict.error.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-brand-emerald text-white font-bold hover:bg-emerald-600 transition-all"
                    >
                        <RefreshCcw className="w-5 h-5" />
                        {dict.common.tryAgain}
                    </button>
                    <Link
                        href={`/${lang}`}
                        className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
                    >
                        <Home className="w-5 h-5" />
                        {dict.common.backToHome}
                    </Link>
                </div>
            </div>
        </div>
    )
}
