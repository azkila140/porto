import { Suspense } from 'react'
import type { Locale } from '@/lib/i18n/config'
import LoginForm from './LoginForm'

interface LoginPageProps {
    params: { lang: Locale }
}

export default function LoginPage({ params }: LoginPageProps) {
    return (
        <Suspense fallback={<div className="min-h-screen bg-brand-dark flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
            <LoginForm params={params} />
        </Suspense>
    )
}
