'use server'

// @ts-ignore
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'

export async function signUp(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string

    const cookieStore = await cookies()
    const supabase = createServerActionClient({ cookies: () => cookieStore as any })

    // 1. Supabase Auth
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name: firstName,
                last_name: lastName,
            },
            emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
        },
    })

    if (error) {
        return { error: error.message }
    }

    // 2. Sync to Neon (Prisma)
    if (data.user) {
        try {
            await db.user.create({
                data: {
                    id: data.user.id,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    role: 'CLIENT', // Default role
                }
            })
        } catch (e) {
            console.error("Failed to sync user to DB", e)
            // In a real app, we might want to attempt rollback or queue sync
        }
    }

    return { success: true }
}

export async function signIn(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const cookieStore = await cookies()
    const supabase = createServerActionClient({ cookies: () => cookieStore as any })

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return { error: error.message }
    }

    redirect('/portal')
}

export async function signOut() {
    const cookieStore = await cookies()
    const supabase = createServerActionClient({ cookies: () => cookieStore as any })
    await supabase.auth.signOut()
    redirect('/')
}
