import { NextRequest, NextResponse } from 'next/server'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const API_TOKEN = process.env.STRAPI_API_TOKEN

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const lang = searchParams.get('lang') || 'en'

    try {
        const response = await fetch(
            `${STRAPI_URL}/api/hero-slides?locale=${lang}&filters[active][$eq]=true&sort=order:asc&populate=*`,
            {
                headers: {
                    'Authorization': `Bearer ${API_TOKEN}`
                },
                cache: 'no-store'
            }
        )

        if (!response.ok) {
            throw new Error('Failed to fetch from Strapi')
        }

        const data = await response.json()

        // Transform Strapi response
        const heroSlides = data.data.map((item: any) => ({
            id: item.id,
            title: item.attributes.title,
            subtitle: item.attributes.subtitle,
            description: item.attributes.description,
            cta: item.attributes.cta,
            link: item.attributes.link,
            icon: item.attributes.icon,
            gradient: item.attributes.gradient,
            imageUrl: item.attributes.imageUrl
        }))

        return NextResponse.json(heroSlides)
    } catch (error) {
        console.error('Error fetching hero slides:', error)
        return NextResponse.json([], { status: 500 })
    }
}
