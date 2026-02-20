'use client'

import { useState } from 'react'
import { signUp } from '@/actions/auth'
import { motion } from 'framer-motion'
import { Loader2, Mail, Lock, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SignUpForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    async function handleSubmit(formData: FormData) {
        setIsLoading(true)
        setError(null)

        // Simple client-side password validation
        const password = formData.get('password') as string
        if (password.length < 8) {
            setError("Password must be at least 8 characters")
            setIsLoading(false)
            return
        }

        const res = await signUp(formData)

        if (res.error) {
            setError(res.error)
            setIsLoading(false)
        } else {
            setSuccess(true)
            setIsLoading(false)
        }
    }

    if (success) {
        return (
            <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-lg border border-gold/30 rounded-2xl shadow-2xl text-center">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Check your inbox</h2>
                <p className="text-gray-300 mb-6">
                    We've sent a verification link to your email address. Please click it to verify your account.
                </p>
                <Link href="/sign-in" className="text-gold hover:text-white font-medium transition-colors">
                    Return to Sign In
                </Link>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                <p className="text-gray-400">Join us for premium financial services</p>
            </div>

            <form action={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">First Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                            <input name="firstName" required className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white placeholder-gray-500 transition-all" placeholder="John" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Last Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                            <input name="lastName" required className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white placeholder-gray-500 transition-all" placeholder="Doe" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <input name="email" type="email" required className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white placeholder-gray-500 transition-all" placeholder="name@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <input name="password" type="password" required className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white placeholder-gray-500 transition-all" placeholder="••••••••" />
                    </div>
                    <p className="text-xs text-gray-500">Must be at least 8 characters with uppercase, number & symbol.</p>
                </div>

                {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                        {error}
                    </div>
                )}

                <button disabled={isLoading} className="w-full py-4 bg-gradient-to-r from-gold to-gold-muted text-navy-deep font-bold rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoading ? <Loader2 className="animate-spin mx-auto" /> : 'Sign Up'}
                </button>
            </form>

            <div className="mt-6 text-center text-gray-400 text-sm">
                Already have an account? <Link href="/sign-in" className="text-gold hover:text-white transition-colors">Sign in</Link>
            </div>
        </motion.div>
    )
}
