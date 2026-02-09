'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { Locale } from '@/lib/i18n/config'
import { motion } from 'framer-motion'
import { Mail, Lock, AlertCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface LoginFormProps {
    lang: Locale
}

const content = {
    ar: {
        title: 'تسجيل الدخول',
        subtitle: 'ادخل إلى بوابة العملاء',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        submit: 'تسجيل الدخول',
        loading: 'جاري التحميل...',
        noAccount: 'ليس لديك حساب؟',
        contactUs: 'تواصل معنا',
        backHome: 'العودة للرئيسية',
        errors: {
            invalid: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
            required: 'جميع الحقول مطلوبة',
            network: 'خطأ في الاتصال. حاول مرة أخرى',
        },
    },
    fr: {
        title: 'Connexion',
        subtitle: 'Accédez à votre portail client',
        email: 'Email',
        password: 'Mot de passe',
        submit: 'Se connecter',
        loading: 'Chargement...',
        noAccount: 'Pas de compte ?',
        contactUs: 'Contactez-nous',
        backHome: 'Retour à l\'accueil',
        errors: {
            invalid: 'Email ou mot de passe incorrect',
            required: 'Tous les champs sont requis',
            network: 'Erreur de connexion. Réessayez',
        },
    },
    en: {
        title: 'Login',
        subtitle: 'Access your client portal',
        email: 'Email',
        password: 'Password',
        submit: 'Sign In',
        loading: 'Loading...',
        noAccount: 'No account?',
        contactUs: 'Contact us',
        backHome: 'Back to home',
        errors: {
            invalid: 'Invalid email or password',
            required: 'All fields are required',
            network: 'Connection error. Try again',
        },
    },
}

export default function LoginForm({ lang }: LoginFormProps) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const dict = (content as any)[lang]

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        if (!email || !password) {
            setError(dict.errors.required)
            setLoading(false)
            return
        }

        try {
            const supabase = createClient()

            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (signInError) {
                setError(dict.errors.invalid)
                setLoading(false)
                return
            }

            if (data.user) {
                const redirectTo = searchParams.get('redirect') || `/${lang}/portal`
                router.push(redirectTo)
                router.refresh()
            }
        } catch (err) {
            setError(dict.errors.network)
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-brand-dark flex items-center justify-center px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
            >
                <div className="text-center mb-8">
                    <Link href={`/${lang}`} className="inline-block">
                        <h1 className="text-3xl font-bold text-white mb-2">Nexus Logic</h1>
                    </Link>
                    <p className="text-gray-400">{dict.subtitle}</p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">{dict.title}</h2>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3"
                        >
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <p className="text-red-400 text-sm">{error}</p>
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                {dict.email}
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-emerald transition-colors"
                                    placeholder="name@example.com"
                                    disabled={loading}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                {dict.password}
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-emerald transition-colors"
                                    placeholder="••••••••"
                                    disabled={loading}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-brand-emerald hover:bg-emerald-600 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-semibold text-white transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    {dict.loading}
                                </>
                            ) : (
                                dict.submit
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center space-y-3">
                        <p className="text-gray-400 text-sm">
                            {dict.noAccount}{' '}
                            <Link href={`/${lang}/contact`} className="text-brand-emerald hover:underline">
                                {dict.contactUs}
                            </Link>
                        </p>
                        <Link
                            href={`/${lang}`}
                            className="text-gray-500 hover:text-gray-300 text-sm inline-block transition-colors"
                        >
                            ← {dict.backHome}
                        </Link>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg"
                >
                    <p className="text-blue-400 text-sm text-center">
                        {lang === 'ar'
                            ? '💡 للتجربة: استخدم بيانات الاعتماد التي تم إنشاؤها في Supabase'
                            : lang === 'fr'
                                ? '💡 Démo: Utilisez les identifiants créés dans Supabase'
                                : '💡 Demo: Use credentials created in Supabase'}
                    </p>
                </motion.div>
            </motion.div>
        </main>
    )
}
