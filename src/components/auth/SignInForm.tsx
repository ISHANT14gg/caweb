'use client'

import { useState } from 'react'
import { signIn } from '@/actions/auth'
import { motion } from 'framer-motion'
import { Loader2, Mail, Lock } from 'lucide-react'
import Link from 'next/link'

export default function SignInForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(formData: FormData) {
        setIsLoading(true)
        setError(null)

        // signIn action handles redirect on success, returns error on failure
        const res = await signIn(formData)

        // Note: If signIn redirects, this code might not run, which is fine.
        // However, if we are using useActionState or getting a return value from a server action that redirects, 
        // it usually throws a NEXT_REDIRECT error which Next.js handles.
        // If it returns an object, it means error.
        if (res?.error) {
            setError(res.error)
            setIsLoading(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-gray-400">Sign in to your dashboard</p>
            </div>

            <form action={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <input name="email" type="email" required className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white placeholder-gray-500 transition-all" placeholder="name@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-gray-300">Password</label>
                        <Link href="/forgot-password" className="text-xs text-gold hover:text-white transition-colors">Forgot password?</Link>
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <input name="password" type="password" required className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white placeholder-gray-500 transition-all" placeholder="••••••••" />
                    </div>
                </div>

                {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                        {error}
                    </div>
                )}

                <button disabled={isLoading} className="w-full py-4 bg-gradient-to-r from-gold to-gold-muted text-navy-deep font-bold rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoading ? <Loader2 className="animate-spin mx-auto" /> : 'Sign In'}
                </button>
            </form>

            <div className="mt-6 text-center text-gray-400 text-sm">
                Don't have an account? <Link href="/sign-up" className="text-gold hover:text-white transition-colors">Sign up</Link>
            </div>
        </motion.div>
    )
}
