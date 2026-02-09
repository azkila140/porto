import { use } from 'react'
import type { Locale } from '@/lib/i18n/config'

interface PrivacyPageProps {
    params: Promise<{ lang: Locale }>
}

export default function PrivacyPage({ params }: PrivacyPageProps) {
    const { lang } = use(params)
    return (
        <div className="min-h-screen bg-slate-950 py-20 px-4">
            <div className="container mx-auto max-w-4xl text-white">
                <h1 className="text-4xl font-bold mb-8">
                    {lang === 'ar' ? 'سياسة الخصوصية' : lang === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
                </h1>
                <p className="text-gray-400">
                    {lang === 'ar'
                        ? 'سياسة الخصوصية قيد التحديث...'
                        : lang === 'fr'
                            ? 'La politique de confidentialité est en cours de mise à jour...'
                            : 'Privacy policy is being updated...'}
                </p>
            </div>
        </div>
    )
}
