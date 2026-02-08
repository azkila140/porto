import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Supported locales
const locales = ['ar', 'fr', 'en']
const defaultLocale = 'ar'

// Get locale from pathname
function getLocale(pathname: string): string | undefined {
    const segments = pathname.split('/')
    const potentialLocale = segments[1]
    return locales.includes(potentialLocale) ? potentialLocale : undefined
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Check if pathname already has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return NextResponse.next()

    // Redirect to default locale if no locale in pathname
    const locale = defaultLocale
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, api, static files)
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
    ],
}
