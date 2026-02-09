import { Suspense } from 'react'
import type { Locale } from '@/lib/i18n/config'
import LoginForm from './LoginForm'

interface LoginPageProps {
    params: Promise<{ lang: Locale }>
}

export default async function LoginPage({ params }: LoginPageProps) {
    const { lang } = await params
    return (
        <Suspense fallback={<div className="min-h-screen bg-brand-dark flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
            <LoginForm lang={lang} />
        </Suspense>
    )
}
