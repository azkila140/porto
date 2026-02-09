import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Supported locales
const locales = ['ar', 'fr', 'en'] as const
const defaultLocale = 'ar'

export function middleware(request: NextRequest) {
    const { pathname, hostname } = request.nextUrl

    // 1. Redirect www to non-www
    if (hostname.startsWith('www.')) {
        const newUrl = new URL(request.url)
        newUrl.hostname = hostname.replace('www.', '')
        return NextResponse.redirect(newUrl, 301)
    }

    // 2. Handle locale routing
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (!pathnameHasLocale) {
        request.nextUrl.pathname = `/${defaultLocale}${pathname}`
        return NextResponse.redirect(request.nextUrl)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, api, static files)
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*)*)',
    ],
}
