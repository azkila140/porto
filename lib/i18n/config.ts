// i18n configuration and types
export const locales = ['ar', 'fr', 'en'] as const
export const defaultLocale = 'ar' as const

export type Locale = (typeof locales)[number]

// RTL languages
export const rtlLocales: Locale[] = ['ar']

export function isRTL(locale: Locale): boolean {
    return rtlLocales.includes(locale)
}
