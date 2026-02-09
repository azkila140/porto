import type { Metadata } from 'next'
import { getLogisticsSolutionSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas'
import { siteConfig } from '@/lib/config'
import { LogisticsView } from '@/components/solutions/LogisticsView'
import { Truck, MapPin, Package, BarChart3 } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'

interface LogisticsSolutionProps {
    params: Promise<{
        lang: Locale
    }>
}

export async function generateMetadata({ params }: LogisticsSolutionProps): Promise<Metadata> {
    const { lang } = await params
    const titles = {
        ar: 'النظام البيئي الرقمي للوجستيات والنقل | نيكسس لوجيك',
        en: 'Digital Ecosystem for Logistics & Transportation | Nexus Logic',
        fr: 'Écosystème Numérique pour la Logistique'
    }
    return {
        title: titles[lang],
        description: 'من إدارة سلسلة التوريد إلى التتبع اللحظي - حلول ذكية لتحسين الكفاءة وتقليل التكاليف.',
        alternates: {
            canonical: `${siteConfig.url}/${lang}/solutions/logistics`,
        }
    }
}

export default async function LogisticsSolutionPage({ params }: LogisticsSolutionProps) {
    const { lang } = await params

    // Content by language
    const content = {
        ar: {
            title: 'النظام البيئي الرقمي للوجستيات والنقل',
            subtitle: 'من إدارة سلسلة التوريد إلى التتبع اللحظي - حلول ذكية لتحسين الكفاءة وتقليل التكاليف',
            challenge: {
                title: 'تحديات قطاع اللوجستيات',
                items: [
                    'صعوبة تتبع الشحنات في الوقت الفعلي',
                    'ارتفاع تكاليف التوصيل وخاصة الميل الأخير',
                    'إدارة معقدة للمخازن والمستودعات',
                    'ضعف التنسيق بين المرسل والمستلم والناقل'
                ]
            },
            solutions: [
                {
                    icon: 'MapPin',
                    title: 'التتبع اللحظي للشحنات',
                    description: 'نظام GPS متقدم لتتبع الشحنات والمركبات في الوقت الفعلي',
                    features: ['تتبع GPS دقيق', 'إشعارات فورية', 'تطبيق موبايل', 'تقارير مفصلة']
                },
                {
                    icon: 'Package',
                    title: 'نظام إدارة المستودعات WMS',
                    description: 'حلول متكاملة لإدارة المخزون والمستودعات بكفاءة عالية',
                    features: ['إدارة المخزون', 'باركود ذكي', 'حركة المواد', 'تحسين المساحة']
                },
                {
                    icon: 'Truck',
                    title: 'تحسين التوصيل (Last-Mile)',
                    description: 'خوارزميات ذكية لتخطيط المسارات وتقليل تكاليف التوصيل',
                    features: ['تخطيط المسارات', 'توزيع الحمولة', 'تقليل الوقود', 'زيادة الإنتاجية']
                },
                {
                    icon: 'BarChart3',
                    title: 'إدارة سلسلة التوريد',
                    description: 'منصة شاملة لإدارة جميع عمليات سلسلة التوريد',
                    features: ['تخطيط الطلب', 'إدارة الموردين', 'تحليل الأداء', 'تقليل الهدر']
                },
            ],
            benefits: {
                title: 'الفوائد المباشرة',
                items: [
                    { metric: '40%', label: 'تخفيض تكاليف التشغيل' },
                    { metric: '60%', label: 'تحسين وقت التسليم' },
                    { metric: '95%', label: 'دقة تتبع الشحنات' },
                    { metric: '30%', label: 'تقليل هدر المخزون' }
                ]
            },
            faq: [
                { q: 'كيف يعمل نظام التتبع اللحظي؟', a: 'نستخدم أجهزة GPS متقدمة متصلة بمنصتنا السحابية.' },
                { q: 'هل يمكن التكامل مع أنظمة ERP الحالية؟', a: 'نعم، نوفر تكامل سلس مع جميع أنظمة ERP الرئيسية.' }
            ],
            cta: {
                title: 'جاهز لتحسين عمليات اللوجستيات؟',
                desc: 'احجز عرضاً توضيحياً واكتشف كيف نخفض تكاليفك ونحسن كفاءتك',
                button: 'احجز عرضاً مجانياً'
            }
        },
        en: {
            title: 'Digital Ecosystem for Logistics & Transportation',
            subtitle: 'From Supply Chain Management to Real-Time Tracking - Smart solutions to improve efficiency and reduce costs',
            challenge: {
                title: 'Logistics Sector Challenges',
                items: [
                    'Difficulty tracking shipments in real-time',
                    'High delivery costs, especially last-mile',
                    'Complex warehouse and inventory management',
                    'Poor coordination between sender, receiver, and carrier'
                ]
            },
            solutions: [
                {
                    icon: 'MapPin',
                    title: 'Real-Time Shipment Tracking',
                    description: 'Advanced GPS system for real-time tracking of shipments and vehicles',
                    features: ['Precise GPS tracking', 'Instant notifications', 'Mobile app', 'Detailed reports']
                },
                {
                    icon: 'Package',
                    title: 'Warehouse Management System WMS',
                    description: 'Integrated solutions for efficient inventory and warehouse management',
                    features: ['Inventory management', 'Smart barcode', 'Material movement', 'Space optimization']
                },
                {
                    icon: 'Truck',
                    title: 'Last-Mile Delivery Optimization',
                    description: 'Smart algorithms for route planning and delivery cost reduction',
                    features: ['Route planning', 'Load distribution', 'Fuel reduction', 'Productivity increase']
                },
                {
                    icon: 'BarChart3',
                    title: 'Supply Chain Management',
                    description: 'Comprehensive platform for managing all supply chain operations',
                    features: ['Demand planning', 'Supplier management', 'Performance analysis', 'Waste reduction']
                },
            ],
            benefits: {
                title: 'Direct Benefits',
                items: [
                    { metric: '40%', label: 'Operating Cost Reduction' },
                    { metric: '60%', label: 'Delivery Time Improvement' },
                    { metric: '95%', label: 'Shipment Tracking Accuracy' },
                    { metric: '30%', label: 'Inventory Waste Reduction' }
                ]
            },
            faq: [
                { q: 'How does real-time tracking work?', a: 'We use advanced GPS devices connected to our cloud platform.' },
                { q: 'Can it integrate with existing ERP systems?', a: 'Yes, we provide seamless integration with all major ERP systems.' }
            ],
            cta: {
                title: 'Ready to Optimize Your Logistics Operations?',
                desc: 'Book a demo and discover how we reduce your costs and improve efficiency',
                button: 'Book Free Demo'
            }
        },
        fr: {
            title: 'Écosystème Numérique pour la Logistique',
            subtitle: 'De la gestion de la chaîne d\'approvisionnement au suivi en temps réel',
            challenge: {
                title: 'Défis du Secteur Logistique',
                items: [
                    'Difficulté de suivi des expéditions en temps réel',
                    'Coûts de livraison élevés, surtout dernier kilomètre',
                    'Gestion complexe des entrepôts et stocks',
                    'Mauvaise coordination entre expéditeur, destinataire et transporteur'
                ]
            },
            solutions: [
                {
                    icon: 'MapPin',
                    title: 'Suivi Temps Réel',
                    description: 'Système GPS avancé pour suivi en temps réel',
                    features: ['Suivi GPS précis', 'Notifications instantanées', 'App mobile', 'Rapports détaillés']
                },
                {
                    icon: 'Package',
                    title: 'Système Gestion Entrepôt WMS',
                    description: 'Solutions intégrées pour gestion efficace des stocks',
                    features: ['Gestion stock', 'Code-barres intelligent', 'Mouvement matériel', 'Optimisation espace']
                },
                {
                    icon: 'Truck',
                    title: 'Optimisation Dernier Kilomètre',
                    description: 'Algorithmes intelligents pour planification routes',
                    features: ['Planification itinéraire', 'Distribution charge', 'Réduction carburant', 'Productivité']
                },
                {
                    icon: 'BarChart3',
                    title: 'Gestion Chaîne Approvisionnement',
                    description: 'Plateforme complète pour toutes les opérations',
                    features: ['Planification demande', 'Gestion fournisseurs', 'Analyse performance', 'Réduction gaspillage']
                },
            ],
            benefits: {
                title: 'Bénéfices Directs',
                items: [
                    { metric: '40%', label: 'Réduction Coûts' },
                    { metric: '60%', label: 'Amélioration Livraison' },
                    { metric: '95%', label: 'Précision Suivi' },
                    { metric: '30%', label: 'Réduction Gaspillage' }
                ]
            },
            faq: [
                { q: 'Comment fonctionne le suivi en temps réel?', a: 'Nous utilisons des appareils GPS connectés à notre plateforme cloud.' },
                { q: 'Intégration avec ERP existants?', a: 'Oui, intégration transparente avec tous les principaux systèmes ERP.' }
            ],
            cta: {
                title: 'Prêt à Optimiser Vos Opérations?',
                desc: 'Réservez une démo et découvrez comment nous réduisons vos coûts',
                button: 'Réserver Démo'
            }
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLogisticsSolutionSchema()) }} />
            <LogisticsView lang={lang} content={content[lang]} />
        </>
    )
}
