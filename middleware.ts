import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createServerClient } from '@supabase/ssr'

// Supported locales
const locales = ['ar', 'fr', 'en']
const defaultLocale = 'ar'

// Get locale from pathname
function getLocale(pathname: string): string | undefined {
    const segments = pathname.split('/')
    const potentialLocale = segments[1]
    return locales.includes(potentialLocale) ? potentialLocale : undefined
}

// Check if path is protected (requires auth)
function isProtectedPath(pathname: string): boolean {
    const protectedPaths = ['/portal', '/admin']
    const pathWithoutLocale = pathname.replace(/^\/(ar|fr|en)/, '')
    return protectedPaths.some(path => pathWithoutLocale.startsWith(path))
}

export async function middleware(request: NextRequest) {
    const { pathname, hostname } = request.nextUrl

    // 1. Redirect www to non-www (Fast Exit)
    if (hostname.startsWith('www.')) {
        const newUrl = new URL(request.url)
        newUrl.hostname = hostname.replace('www.', '')
        return NextResponse.redirect(newUrl, 301)
    }

    // 2. Check if pathname already has a locale (Fast Exit for redirection)
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (!pathnameHasLocale) {
        request.nextUrl.pathname = `/${defaultLocale}${pathname}`
        return NextResponse.redirect(request.nextUrl)
    }

    // 3. Update Supabase session (Expensive)
    let response = await updateSession(request)

    // Check if this is a protected route
    if (isProtectedPath(pathname)) {
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    get(name: string) {
                        return request.cookies.get(name)?.value
                    },
                    set() { },
                    remove() { },
                },
            }
        )

        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            // Redirect to login page, preserving the locale
            const locale = getLocale(pathname) || defaultLocale
            const loginUrl = new URL(`/${locale}/login`, request.url)
            loginUrl.searchParams.set('redirect', pathname)
            return NextResponse.redirect(loginUrl)
        }
    }

    return response
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, api, static files)
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
    ],
}
