// import 'server-only'
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
        backToHome: string
        previousPage: string
        tryAgain: string
    }
    error: {
        title: string
        description: string
    }
    notFound: {
        title: string
        description: string
        lost: string
    }
}

// Dictionary imports
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    ar: () => import('./dictionaries/ar.json').then((module) => module.default as unknown as Dictionary),
    fr: () => import('./dictionaries/fr.json').then((module) => module.default as unknown as Dictionary),
    en: () => import('./dictionaries/en.json').then((module) => module.default as unknown as Dictionary),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    return dictionaries[locale]()
}
