// Strapi API Configuration and Utilities

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

interface FetchOptions {
    method?: string
    headers?: Record<string, string>
    body?: string
    cache?: RequestCache
    next?: { revalidate?: number }
}

/**
 * Fetch data from Strapi API
 */
export async function fetchAPI(
    path: string,
    options: FetchOptions = {},
    locale?: string
) {
    const defaultHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
    }

    if (STRAPI_API_TOKEN) {
        defaultHeaders.Authorization = `Bearer ${STRAPI_API_TOKEN}`
    }

    const url = new URL(path, `${STRAPI_URL}/api`)

    if (locale) {
        url.searchParams.append('locale', locale)
    }

    const mergedOptions: RequestInit = {
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
        ...options,
    }

    try {
        const response = await fetch(url.toString(), mergedOptions)

        if (!response.ok) {
            throw new Error(`Strapi API error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Strapi API fetch error:', error)
        throw error
    }
}

/**
 * Get all services for a specific locale
 */
export async function getServices(locale: string) {
    try {
        const data = await fetchAPI(
            '/services?sort=order:asc&populate=*',
            { next: { revalidate: 60 } },
            locale
        )
        return data.data
    } catch (error) {
        console.error('Error fetching services:', error)
        return []
    }
}

/**
 * Get all portfolio items for a specific locale
 */
export async function getPortfolioItems(locale: string) {
    try {
        const data = await fetchAPI(
            '/portfolio-items?filters[featured][$eq]=true&sort=order:asc&populate=*',
            { next: { revalidate: 60 } },
            locale
        )
        return data.data
    } catch (error) {
        console.error('Error fetching portfolio items:', error)
        return []
    }
}

/**
 * Get all active hero slides for a specific locale
 */
export async function getHeroSlides(locale: string) {
    try {
        const data = await fetchAPI(
            '/hero-slides?filters[active][$eq]=true&sort=order:asc&populate=*',
            { next: { revalidate: 60 } },
            locale
        )
        return data.data
    } catch (error) {
        console.error('Error fetching hero slides:', error)
        return []
    }
}

/**
 * Transform Strapi service data to component format
 */
export function transformService(service: any) {
    return {
        icon: service.attributes.icon,
        title: service.attributes.title,
        description: service.attributes.description,
        gradient: service.attributes.gradient,
        imageUrl: service.attributes.imageUrl,
    }
}

/**
 * Transform Strapi portfolio item to component format
 */
export function transformPortfolioItem(item: any) {
    const imageUrl = item.attributes.image?.data?.attributes?.url

    return {
        id: item.id,
        title: item.attributes.title,
        description: item.attributes.description,
        category: item.attributes.category,
        image: imageUrl ? `${STRAPI_URL}${imageUrl}` : item.attributes.imageUrl,
        gradient: item.attributes.gradient,
    }
}

/**
 * Transform Strapi hero slide to component format
 */
export function transformHeroSlide(slide: any) {
    return {
        id: slide.id,
        title: slide.attributes.title,
        subtitle: slide.attributes.subtitle,
        description: slide.attributes.description,
        cta: slide.attributes.cta,
        link: slide.attributes.link,
        icon: slide.attributes.icon,
        gradient: slide.attributes.gradient,
        imageUrl: slide.attributes.imageUrl,
    }
}
