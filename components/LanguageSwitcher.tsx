'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, type Locale } from '@/lib/i18n/config'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
    const pathname = usePathname()
    const router = useRouter()

    const handleLanguageChange = (newLang: Locale) => {
        const segments = pathname.split('/')
        segments[1] = newLang
        const newPath = segments.join('/')
        router.push(newPath)
    }

    return (
        <div className="flex items-center gap-2">
            {locales.map((locale) => (
                <button
                    key={locale}
                    onClick={() => handleLanguageChange(locale)}
                    className={cn(
                        'px-3 py-1 rounded-md text-sm font-medium transition-all',
                        currentLang === locale
                            ? 'bg-brand-emerald text-white'
                            : 'text-gray-400 hover:text-white hover:bg-white/10'
                    )}
                >
                    {locale.toUpperCase()}
                </button>
            ))}
        </div>
    )
}
