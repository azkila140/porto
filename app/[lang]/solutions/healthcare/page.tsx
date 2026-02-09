import type { Metadata } from 'next'
import { getHealthcareSolutionSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas'
import { siteConfig } from '@/lib/config'
import { HealthcareView } from '@/components/solutions/HealthcareView'
import { Heart, Calendar, FileText, TrendingDown } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'

interface HealthcareSolutionProps {
    params: Promise<{
        lang: Locale
    }>
}

export async function generateMetadata({ params }: HealthcareSolutionProps): Promise<Metadata> {
    const { lang } = await params
    const titles = {
        ar: 'النظام البيئي الرقمي للمنشآت الصحية | نيكسس لوجيك',
        en: 'Digital Ecosystem for Healthcare Facilities | Nexus Logic',
        fr: 'Écosystème Numérique pour Établissements de Santé'
    }
    return {
        title: titles[lang],
        description: 'نظام متكامل لإدارة العيادات والمستشفيات - تحسين تجربة المريض وكفاءة العمليات.',
        alternates: {
            canonical: `${siteConfig.url}/${lang}/solutions/healthcare`,
        }
    }
}

export default async function HealthcareSolutionPage({ params }: HealthcareSolutionProps) {
    const { lang } = await params

    // Content by language
    const content = {
        ar: {
            title: 'النظام البيئي الرقمي للمنشآت الصحية',
            subtitle: 'نظام متكامل لإدارة العيادات والمستشفيات - تحسين تجربة المريض وكفاءة العمليات',
            challenge: {
                title: 'تحديات القطاع الصحي',
                items: [
                    'أوقات انتظار طويلة وإدارة حجوزات معقدة',
                    'نسبة عالية من عدم حضور المرضى للمواعيد (No-show)',
                    'صعوبة تتبع السجلات الطبية بكفاءة',
                    'ضعف التواصل بين المريض والمنشأة الصحية'
                ]
            },
            solutions: [
                {
                    icon: 'Heart',
                    title: 'نظام إدارة العيادات الذكي',
                    description: 'منصة شاملة لإدارة العيادات والمستشفيات مع لوحة تحكم متقدمة',
                    features: ['إدارة المرضى', 'تنظيم المواعيد', 'الفواتير الذكية', 'التقارير التحليلية']
                },
                {
                    icon: 'Calendar',
                    title: 'أتمتة الحجوزات',
                    description: 'نظام حجز أونلاين مع تذكيرات تلقائية لتقليل نسبة الغياب',
                    features: ['حجز أونلاين 24/7', 'رسائل تذكير', 'تكامل واتساب', 'إدارة قوائم الانتظار']
                },
                {
                    icon: 'FileText',
                    title: 'السجلات الطبية الإلكترونية EMR',
                    description: 'نظام متوافق وآمن للسجلات الطبية الإلكترونية',
                    features: ['سجلات محمية', 'وصول سريع', 'تكامل الأنظمة', 'نسخ احتياطي تلقائي']
                },
                {
                    icon: 'TrendingDown',
                    title: 'تقليل نسبة الغياب',
                    description: 'استراتيجيات ذكية لتقليل No-show وزيادة الإيرادات',
                    features: ['تذكير متعدد القنوات', 'إعادة جدولة سهلة', 'تحليل أنماط الغياب', 'نظام عقوبات مرن']
                },
            ],
            faq: [
                { q: 'هل النظام متوافق مع معايير حماية بيانات المرضى؟', a: 'نعم، جميع أنظمتنا متوافقة تماماً مع معايير HIPAA وGDPR.' },
                { q: 'كيف يمكن تقليل نسبة عدم حضور المرضى؟', a: 'من خلال رسائل تذكير متعددة (SMS، واتساب، بريد إلكتروني) قبل الموعد.' }
            ],
            cta: {
                title: 'جاهز لتحديث منشأتك الصحية رقمياً؟',
                desc: 'احجز عرضاً توضيحياً مجانياً واكتشف كيف نحسن كفاءة عملياتك',
                button: 'احجز عرضاً توضيحياً'
            }
        },
        en: {
            title: 'Digital Ecosystem for Healthcare Facilities',
            subtitle: 'Comprehensive clinic and hospital management - Improving patient experience and operational efficiency',
            challenge: {
                title: 'Healthcare Sector Challenges',
                items: [
                    'Long wait times and complex appointment management',
                    'High no-show rates for patient appointments',
                    'Difficulty tracking medical records efficiently',
                    'Poor communication between patients and facility'
                ]
            },
            solutions: [
                {
                    icon: 'Heart',
                    title: 'Smart Clinic Management System',
                    description: 'Comprehensive platform for clinic and hospital management with advanced dashboard',
                    features: ['Patient management', 'Appointment scheduling', 'Smart billing', 'Analytics reports']
                },
                {
                    icon: 'Calendar',
                    title: 'Appointment Automation',
                    description: 'Online booking system with automatic reminders to reduce no-shows',
                    features: ['24/7 online booking', 'Reminder messages', 'WhatsApp integration', 'Waiting list management']
                },
                {
                    icon: 'FileText',
                    title: 'Electronic Medical Records EMR',
                    description: 'Compliant and secure electronic medical records system',
                    features: ['Protected records', 'Quick access', 'System integration', 'Auto backup']
                },
                {
                    icon: 'TrendingDown',
                    title: 'No-show Reduction',
                    description: 'Smart strategies to reduce no-shows and increase revenue',
                    features: ['Multi-channel reminders', 'Easy rescheduling', 'Absence pattern analysis', 'Flexible penalty system']
                },
            ],
            faq: [
                { q: 'Is the system compliant with patient data protection standards?', a: 'Yes, all our systems are fully compliant with HIPAA and GDPR standards.' },
                { q: 'How can we reduce patient no-show rates?', a: 'Through multiple reminders (SMS, WhatsApp, email) 48 and 24 hours before the appointment.' }
            ],
            cta: {
                title: 'Ready to Digitally Upgrade Your Healthcare Facility?',
                desc: 'Book a free demo and discover how we improve your operational efficiency',
                button: 'Book a Demo'
            }
        },
        fr: {
            title: 'Écosystème Numérique pour Établissements de Santé',
            subtitle: 'Gestion complète des cliniques et hôpitaux - Amélioration de l\'expérience patient',
            challenge: {
                title: 'Défis du Secteur de la Santé',
                items: [
                    'Longs temps d\'attente et gestion complexe des rendez-vous',
                    'Taux élevé d\'absence aux rendez-vous',
                    'Difficulté de suivi efficace des dossiers médicaux',
                    'Communication faible entre patient et établissement'
                ]
            },
            solutions: [
                {
                    icon: 'Heart',
                    title: 'Système de Gestion Intelligente',
                    description: 'Plateforme complète pour la gestion des cliniques et hôpitaux',
                    features: ['Gestion patients', 'Planification RDV', 'Facturation intelligente', 'Rapports analytiques']
                },
                {
                    icon: 'Calendar',
                    title: 'Automatisation des Rendez-vous',
                    description: 'Système de réservation en ligne avec rappels automatiques',
                    features: ['Réservation 24/7', 'Rappels messages', 'Intégration WhatsApp', 'Gestion liste d\'attente']
                },
                {
                    icon: 'FileText',
                    title: 'Dossiers Médicaux Électroniques',
                    description: 'Système conforme et sécurisé pour les dossiers médicaux',
                    features: ['Dossiers protégés', 'Accès rapide', 'Intégration système', 'Sauvegarde auto']
                },
                {
                    icon: 'TrendingDown',
                    title: 'Réduction Absentéisme',
                    description: 'Stratégies intelligentes pour réduire les absences',
                    features: ['Rappels multi-canaux', 'Reprogrammation facile', 'Analyse patterns', 'Système pénalités']
                },
            ],
            faq: [
                { q: 'Le système est-il conforme aux normes de protection des données?', a: 'Oui, tous nos systèmes sont conformes aux normes HIPAA et GDPR.' },
                { q: 'Comment réduire le taux d\'absence des patients?', a: 'Via des rappels multiples (SMS, WhatsApp, email) 48h et 24h avant le RDV.' }
            ],
            cta: {
                title: 'Prêt à Moderniser Votre Établissement?',
                desc: 'Réservez une démo gratuite et découvrez comment nous améliorons votre efficacité',
                button: 'Réserver une Démo'
            }
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getHealthcareSolutionSchema()) }} />
            <HealthcareView lang={lang} content={content[lang]} />
        </>
    )
}
