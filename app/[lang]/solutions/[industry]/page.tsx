import type { Locale } from '@/lib/i18n/config'
import { notFound } from 'next/navigation'
import {
    Stethoscope,
    Building2,
    UtensilsCrossed,
    ShoppingCart,
    GraduationCap,
    Car,
    Landmark,
    Hammer,
    Cpu,
    Factory,
    Truck,
    Briefcase,
    Sparkles
} from 'lucide-react'

// Industry data structure
const industries = [
    'medical',
    'real-estate',
    'horeca',
    'retail',
    'education',
    'automotive',
    'finance',
    'construction',
    'technology',
    'manufacturing',
    'logistics',
    'services',
    'other'
] as const

type Industry = typeof industries[number]

const industryIcons: Record<Industry, any> = {
    medical: Stethoscope,
    'real-estate': Building2,
    horeca: UtensilsCrossed,
    retail: ShoppingCart,
    education: GraduationCap,
    automotive: Car,
    finance: Landmark,
    construction: Hammer,
    technology: Cpu,
    manufacturing: Factory,
    logistics: Truck,
    services: Briefcase,
    other: Sparkles,
}

const industryContent = {
    ar: {
        medical: {
            title: 'الحلول الطبية',
            subtitle: 'تحويل رقمي شامل للقطاع الصحي',
            description: 'نقدم حلولاً تقنية متكاملة للعيادات والمستشفيات والمراكز الطبية',
            features: [
                'نظام حجز المواعيد الذكي',
                'إدارة السجلات الطبية الإلكترونية',
                'منصة الاستشارات عن بُعد',
                'تكامل مع أنظمة الدفع الإلكتروني',
                'تطبيقات موبايل للمرضى والأطباء',
            ],
            benefits: [
                'تحسين تجربة المرضى',
                'تقليل أوقات الانتظار',
                'زيادة الكفاءة التشغيلية',
                'تحسين إدارة البيانات',
            ],
        },
        'real-estate': {
            title: 'الحلول العقارية',
            subtitle: 'منصات عقارية متطورة',
            description: 'نبني منصات عقارية حديثة لعرض وإدارة العقارات',
            features: [
                'عرض عقارات بتقنية 360 درجة',
                'نظام إدارة العقارات (PMS)',
                'جولات افتراضية تفاعلية',
                'تكامل مع خرائط جوجل',
                'نظام CRM للعملاء',
            ],
            benefits: [
                'زيادة المبيعات',
                'تحسين تجربة العملاء',
                'إدارة فعالة للعقارات',
                'وصول أوسع للسوق',
            ],
        },
        horeca: {
            title: 'حلول المطاعم والفنادق',
            subtitle: 'تحويل رقمي لقطاع الضيافة',
            description: 'أنظمة متكاملة لإدارة المطاعم والفنادق',
            features: [
                'قوائم رقمية تفاعلية',
                'نظام إدارة الطلبات (POS)',
                'حجز الطاولات والغرف',
                'إدارة المخزون',
                'تطبيقات التوصيل',
            ],
            benefits: [
                'تحسين خدمة العملاء',
                'زيادة الإيرادات',
                'تقليل الهدر',
                'إدارة أفضل للموارد',
            ],
        },
        // Add more industries...
    },
    fr: {
        medical: {
            title: 'Solutions Médicales',
            subtitle: 'Transformation digitale complète du secteur de la santé',
            description: 'Solutions technologiques intégrées pour cliniques, hôpitaux et centres médicaux',
            features: [
                'Système de réservation intelligent',
                'Gestion des dossiers médicaux électroniques',
                'Plateforme de téléconsultation',
                'Intégration paiement en ligne',
                'Applications mobiles patients/médecins',
            ],
            benefits: [
                'Amélioration de l\'expérience patient',
                'Réduction des temps d\'attente',
                'Efficacité opérationnelle accrue',
                'Meilleure gestion des données',
            ],
        },
        // Add more industries...
    },
    en: {
        medical: {
            title: 'Medical Solutions',
            subtitle: 'Complete digital transformation for healthcare',
            description: 'Integrated tech solutions for clinics, hospitals, and medical centers',
            features: [
                'Smart appointment booking system',
                'Electronic medical records management',
                'Telemedicine platform',
                'Payment gateway integration',
                'Mobile apps for patients and doctors',
            ],
            benefits: [
                'Enhanced patient experience',
                'Reduced waiting times',
                'Increased operational efficiency',
                'Improved data management',
            ],
        },
        // Add more industries...
    },
}

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

    if (!industries.includes(industry as Industry)) {
        notFound()
    }

    const content = industryContent[lang]?.[industry as Industry] || industryContent.en.medical
    const Icon = industryIcons[industry as Industry]

    return (
        <main className="min-h-screen bg-brand-dark">
            {/* Hero Section */}
            <section className="py-24 px-4 bg-gradient-to-b from-brand-dark to-slate-900">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-brand-emerald/20 rounded-full border border-brand-emerald/30">
                                <Icon className="w-5 h-5 text-brand-emerald" />
                                <span className="text-brand-emerald font-medium">{content.subtitle}</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                {content.title}
                            </h1>

                            <p className="text-xl text-gray-400 mb-8">
                                {content.description}
                            </p>

                            <button className="px-8 py-4 bg-brand-emerald rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-all">
                                {lang === 'ar' ? 'ابدأ مشروعك' : lang === 'fr' ? 'Démarrer votre projet' : 'Start Your Project'}
                            </button>
                        </div>

                        <div className="flex-1 flex items-center justify-center">
                            <div className="w-full max-w-md h-96 rounded-2xl bg-gradient-to-br from-brand-emerald/20 to-blue-500/20 border border-brand-emerald/30 flex items-center justify-center">
                                <Icon className="w-32 h-32 text-brand-emerald/40" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-4xl font-bold mb-12 text-center text-white">
                        {lang === 'ar' ? 'المميزات الرئيسية' : lang === 'fr' ? 'Fonctionnalités Principales' : 'Key Features'}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-emerald/50 transition-all"
                            >
                                <div className="w-12 h-12 rounded-lg bg-brand-emerald/20 flex items-center justify-center mb-4">
                                    <span className="text-2xl">✓</span>
                                </div>
                                <p className="text-lg text-white">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-4 bg-slate-900">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-4xl font-bold mb-12 text-center text-white">
                        {lang === 'ar' ? 'الفوائد' : lang === 'fr' ? 'Avantages' : 'Benefits'}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-gradient-to-br from-brand-emerald/10 to-blue-500/10 border border-brand-emerald/20 text-center"
                            >
                                <p className="text-lg font-semibold text-white">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
