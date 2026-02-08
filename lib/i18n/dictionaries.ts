import 'server-only'
import type { Locale } from './config'

// Dictionary type - we'll add more as we build
export type Dictionary = {
    nav: {
        home: string
        services: string
        solutions: string
        work: string
        contact: string
        portal: string
    }
    hero: {
        title: string
        subtitle: string
        cta: string
    }
    common: {
        learnMore: string
        getStarted: string
        contactUs: string
    }
}

// Dictionary imports
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    ar: () => import('./dictionaries/ar.json').then((module) => module.default),
    fr: () => import('./dictionaries/fr.json').then((module) => module.default),
    en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    return dictionaries[locale]()
}
