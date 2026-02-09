'use client'

import { use } from 'react'
import type { Locale } from '@/lib/i18n/config'

interface TermsPageProps {
    params: Promise<{ lang: Locale }>
}

export default function TermsPage({ params }: TermsPageProps) {
    const { lang } = use(params)
    return (
        <div className="min-h-screen bg-slate-950 py-20 px-4">
            <div className="container mx-auto max-w-4xl text-white">
                <h1 className="text-4xl font-bold mb-8">
                    {lang === 'ar' ? 'الشروط والأحكام' : lang === 'fr' ? 'Conditions Générales' : 'Terms of Service'}
                </h1>
                <p className="text-gray-400">
                    {lang === 'ar'
                        ? 'الشروط والأحكام قيد التحديث...'
                        : lang === 'fr'
                            ? 'Les conditions sont en cours de mise à jour...'
                            : 'Terms are being updated...'}
                </p>
            </div>
        </div>
    )
}
