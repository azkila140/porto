import type { Locale } from '@/lib/i18n/config'
import { industries } from '@/lib/data/solutions'
import SolutionContent from '@/components/solutions/SolutionContent'

interface SolutionPageProps {
    params: { lang: Locale; industry: string }
}

export async function generateStaticParams() {
    const langs: Locale[] = ['ar', 'fr', 'en']
    const params: { lang: Locale; industry: string }[] = []

    langs.forEach(lang => {
        industries.forEach(industry => {
            params.push({ lang, industry })
        })
    })

    return params
}

export default function SolutionPage({ params }: SolutionPageProps) {
    const { lang, industry } = params

    return <SolutionContent lang={lang} industry={industry} />
}
