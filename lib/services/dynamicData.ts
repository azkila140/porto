import { unstable_cache } from 'next/cache'
import { getServices as fetchServices, getHeroSlides as fetchHeroSlides, getPortfolioItems as fetchPortfolio } from '@/lib/strapi'
import type { Locale } from '@/lib/i18n/config'

/**
 * Fetch hero slides with caching for a specific locale
 */
export const getCachedHeroSlides = (lang: Locale = 'en') => unstable_cache(
    async () => {
        try {
            const data = await fetchHeroSlides(lang);
            return data.data || [];
        } catch (error) {
            console.error('Error fetching hero slides from Strapi:', error);
            return [];
        }
    },
    [`hero-slides-${lang}`],
    {
        revalidate: 3600, // 1 hour
        tags: ['dynamic-data', 'hero-slides', `hero-slides-${lang}`]
    }
)();

/**
 * Fetch services with caching for a specific locale
 */
export const getCachedServices = (lang: Locale = 'en') => unstable_cache(
    async () => {
        try {
            const data = await fetchServices(lang);
            return data.data || [];
        } catch (error) {
            console.error('Error fetching services from Strapi:', error);
            return [];
        }
    },
    [`services-${lang}`],
    {
        revalidate: 3600, // 1 hour
        tags: ['dynamic-data', 'services', `services-${lang}`]
    }
)();

/**
 * Fetch portfolio items with caching for a specific locale
 */
export const getCachedPortfolio = (lang: Locale = 'en') => unstable_cache(
    async () => {
        try {
            const data = await fetchPortfolio(lang);
            return data.data || [];
        } catch (error) {
            console.error('Error fetching portfolio from Strapi:', error);
            return [];
        }
    },
    [`portfolio-${lang}`],
    {
        revalidate: 3600, // 1 hour
        tags: ['dynamic-data', 'portfolio', `portfolio-${lang}`]
    }
)();
