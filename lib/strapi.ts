const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export async function fetchStrapi<T>(
    path: string,
    urlParamsObject: Record<string, string | number | boolean | undefined> = {},
    options: RequestInit = {}
): Promise<StrapiResponse<T>> {
    const mergedOptions = {
        headers: {
            'Content-Type': 'application/json',
            ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
        },
        ...options,
    };

    const queryString = new URLSearchParams(
        Object.entries(urlParamsObject)
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => [key, String(value)])
    ).toString();

    const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
        console.error(`Strapi error: ${response.statusText} at ${requestUrl}`);
        throw new Error(`An error occurred while fetching data from Strapi`);
    }

    return response.json();
}

export async function getServices(locale: string = 'en') {
    return fetchStrapi<any[]>('/services', { locale, sort: 'order:asc' });
}

export async function getPortfolioItems(locale: string = 'en') {
    return fetchStrapi<any[]>('/portfolio-items', { locale, sort: 'order:asc', 'filters[featured]': true });
}

export async function getHeroSlides(locale: string = 'en') {
    return fetchStrapi<any[]>('/hero-slides', { locale, sort: 'order:asc', 'filters[active]': true });
}
