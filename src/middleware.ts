// @ts-ignore
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
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
        try {
            const { data: user } = await supabase
                .from('User')
                .select('role')
                .eq('id', session.user.id)
                .single()

            if (user?.role !== 'ADMIN') {
                // Redirect to portal if not admin
                return NextResponse.redirect(new URL('/portal', req.url))
            }
        } catch (e) {
            console.error("Middleware DB check failed", e);
            // Fallback or ignore if DB access fails in Edge
        }
    }

    return res
}
