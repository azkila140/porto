import { Code, Zap, Palette, MapPin, TrendingUp } from 'lucide-react'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import type { Locale } from '@/lib/i18n/config'
import ServicesClient from './ServicesClient'

interface ServicesPageProps {
    params: Promise<{ lang: Locale }>
}

const content = {
    ar: {
        title: 'خدماتنا',
        subtitle: 'حلول رقمية متكاملة لتحويل أعمالك',
        description: 'نقدم مجموعة شاملة من الخدمات التقنية والإبداعية لمساعدة مشروعك على النمو والنجاح في العالم الرقمي',
        cta: 'تواصل معنا',
        learnMore: 'اعرف المزيد',
        services: [
            {
                id: 'digital-engineering',
                title: 'الهندسة الرقمية',
                description: 'تطوير مواقع وتطبيقات ويب متقدمة باستخدام أحدث التقنيات',
                icon: 'Code',
            },
            {
                id: 'automation',
                title: 'الأتمتة والتكامل',
                description: 'أتمتة العمليات وربط الأنظمة لتحسين الكفاءة',
                icon: 'Zap',
            },
            {
                id: 'branding',
                title: 'الهوية والتصميم',
                description: 'تصميم هويات بصرية مميزة وعلامات تجارية قوية',
                icon: 'Palette',
            },
            {
                id: 'google-maps-seo',
                title: 'خرائط جوجل والسيو',
                description: 'تحسين الظهور المحلي وتصدر نتائج البحث',
                icon: 'MapPin',
            },
            {
                id: 'growth-content',
                title: 'النمو والمحتوى',
                description: 'استراتيجيات نمو وتسويق بالمحتوى لزيادة المبيعات',
                icon: 'TrendingUp',
            }
        ]
    },
    fr: {
        title: 'Nos Services',
        subtitle: 'Solutions numériques complètes',
        description: 'Nous offrons une gamme complète de services techniques et créatifs pour aider votre entreprise à croître',
        cta: 'Contactez-nous',
        learnMore: 'En savoir plus',
        services: [
            {
                id: 'digital-engineering',
                title: 'Ingénierie Digitale',
                description: 'Développement web et mobile avancé avec les dernières technologies',
                icon: 'Code',
            },
            {
                id: 'automation',
                title: 'Automatisation',
                description: 'Automatisation des processus et intégration de systèmes',
                icon: 'Zap',
            },
            {
                id: 'branding',
                title: 'Branding & Design',
                description: 'Conception d\'identités visuelles distinctives et marques fortes',
                icon: 'Palette',
            },
            {
                id: 'google-maps-seo',
                title: 'Google Maps & SEO',
                description: 'Optimisation de la visibilité locale et des résultats de recherche',
                icon: 'MapPin',
            },
            {
                id: 'growth-content',
                title: 'Croissance & Contenu',
                description: 'Stratégies de croissance et marketing de contenu',
                icon: 'TrendingUp',
            }
        ]
    },
    en: {
        title: 'Our Services',
        subtitle: 'Comprehensive Digital Solutions',
        description: 'We offer a full range of technical and creative services to help your business grow and succeed digitally',
        cta: 'Contact Us',
        learnMore: 'Learn more',
        services: [
            {
                id: 'digital-engineering',
                title: 'Digital Engineering',
                description: 'Advanced web and mobile development using latest technologies',
                icon: 'Code',
            },
            {
                id: 'automation',
                title: 'Automation',
                description: 'Process automation and system integration for efficiency',
                icon: 'Zap',
            },
            {
                id: 'branding',
                title: 'Branding & Design',
                description: 'Distinctive visual identity design and strong branding',
                icon: 'Palette',
            },
            {
                id: 'google-maps-seo',
                title: 'Google Maps & SEO',
                description: 'Local visibility optimization and search rankings',
                icon: 'MapPin',
            },
            {
                id: 'growth-content',
                title: 'Growth & Content',
                description: 'Growth strategies and content marketing for sales',
                icon: 'TrendingUp',
            }
        ]
    }
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
    const { lang } = await params
    const t = (content as any)[lang] || content.en
    return {
        title: `${t.title} | ${siteConfig.name}`,
        description: t.description,
        alternates: {
            canonical: `${siteConfig.url}/${lang}/services`,
        }
    }
}

export default async function ServicesPage({ params }: ServicesPageProps) {
    const { lang } = await params
    const t = (content as any)[lang] || content.en

    // Pass icon names as strings - Client Component will map them to components
    return <ServicesClient lang={lang} dict={t} />
}
