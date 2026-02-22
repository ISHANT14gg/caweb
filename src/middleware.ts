// @ts-ignore
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
    const cspHeader = `
        default-src 'self';
        script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval';
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data: https://images.unsplash.com;
        font-src 'self' data:;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        frame-src 'self' https://www.google.com/;
        connect-src 'self' https://*.supabase.co wss://*.supabase.co ws://localhost:* http://localhost:*;
    `
    const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim()

    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('x-nonce', nonce)
    requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)

    const res = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })

    res.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)
    res.headers.set('X-Content-Type-Options', 'nosniff')
    res.headers.set('X-Frame-Options', 'DENY')

    // Bypassing middleware if Supabase env vars are missing (prevents 500 error on public pages)
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.warn("Middleware: Missing Supabase Environment Variables. Bypassing auth checks.")
        // Block protected routes if env vars aren't set
        if (req.nextUrl.pathname.startsWith('/portal') || (req.nextUrl.pathname.startsWith('/admin') && req.nextUrl.pathname !== '/admin/login')) {
            return NextResponse.redirect(new URL('/sign-in', req.url))
        }
        return res
    }

    try {
        const supabase = createMiddlewareClient({ req, res })
        const { data: { session } } = await supabase.auth.getSession()

        // Protect routes
        if (req.nextUrl.pathname.startsWith('/portal') && !session) {
            return NextResponse.redirect(new URL('/sign-in', req.url))
        }

        if (req.nextUrl.pathname.startsWith('/admin')) {
            if (!session) {
                return NextResponse.redirect(new URL('/admin/login', req.url))
            }
            // Check admin role from database using Supabase client to avoid Prisma Edge runtime issues
            const { data: user } = await supabase
                .from('User')
                .select('role')
                .eq('id', session.user.id)
                .single()

            if (user?.role !== 'ADMIN') {
                // Redirect to portal if not admin
                return NextResponse.redirect(new URL('/portal', req.url))
            }
        }
    } catch (e) {
        console.error("Middleware error:", e)
        // Fallback for protected routes
        if (req.nextUrl.pathname.startsWith('/portal') || (req.nextUrl.pathname.startsWith('/admin') && req.nextUrl.pathname !== '/admin/login')) {
            return NextResponse.redirect(new URL('/sign-in', req.url))
        }
    }

    return res
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
