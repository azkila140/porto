import type { Metadata } from 'next'
import { getEnterpriseSolutionSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas'
import { siteConfig } from '@/lib/config'
import { EnterpriseView } from '@/components/solutions/EnterpriseView'
import { Building2, Database, Shield, Zap } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'

interface EnterpriseSolutionProps {
    params: Promise<{
        lang: Locale
    }>
}

export async function generateMetadata({ params }: EnterpriseSolutionProps): Promise<Metadata> {
    const { lang } = await params
    const titles = {
        ar: 'حلول التحول الرقمي للمؤسسات الكبرى | نيكسس لوجيك',
        en: 'Enterprise Digital Transformation Solutions | Nexus Logic',
        fr: 'Solutions de Transformation Numérique d\'Entreprise'
    }
    return {
        title: titles[lang],
        description: 'أنظمة ERP متكاملة - من Odoo إلى SAP مع الامتثال الكامل لمتطلبات ZATCA.',
        alternates: {
            canonical: `${siteConfig.url}/${lang}/solutions/enterprise`,
        }
    }
}

export default async function EnterpriseSolutionPage({ params }: EnterpriseSolutionProps) {
    const { lang } = await params

    // Content by language
    const content = {
        ar: {
            title: 'حلول التحول الرقمي للمؤسسات الكبرى',
            subtitle: 'أنظمة ERP متكاملة - من Odoo إلى SAP مع الامتثال الكامل لمتطلبات ZATCA',
            challenge: {
                title: 'تحديات المؤسسات الكبرى',
                items: [
                    'أنظمة قديمة معزولة لا تتواصل مع بعضها',
                    'صعوبة الامتثال لمتطلبات الفوترة الإلكترونية ZATCA',
                    'تكاليف تنفيذ ERP المرتفعة وعدم وضوح ROI',
                    'فقدان السيادة على البيانات مع الحلول السحابية الأجنبية'
                ]
            },
            solutions: [
                {
                    icon: 'Building2',
                    title: 'تخصيص وتنفيذ Odoo',
                    description: 'حلول Odoo مخصصة بالكامل لاحتياجات السوق السعودي والإماراتي',
                    features: ['نماذج عمل محلية', 'تقارير مالية متوافقة', 'دعم كامل AR/EN', 'تكامل مع البنوك المحلية']
                },
                {
                    icon: 'Shield',
                    title: 'الفوترة الإلكترونية ZATCA',
                    description: 'امتثال 100% لمتطلبات هيئة الزكاة والضريبة والجمارك',
                    features: ['توليد فواتير متوافقة', 'ختم تشفير', 'ربط API مباشر', 'أرشفة آمنة']
                },
                {
                    icon: 'Database',
                    title: 'تكامل الأنظمة القديمة',
                    description: 'ربط الأنظمة القديمة (Legacy) مع الحلول الحديثة دون إعادة بناء',
                    features: ['APIs مخصصة', 'مزامنة بيانات', 'حفظ الاستثمارات', 'Migration تدريجي']
                },
                {
                    icon: 'Zap',
                    title: 'تكامل SAP',
                    description: 'شريك معتمد لتنفيذ وتخصيص حلول SAP للمؤسسات',
                    features: ['SAP B1 / ECC', 'تخصيص ABAP', 'تكامل Fiori', 'دعم فني محلي']
                },
            ],
            faq: [
                { q: 'ما الفرق بين Odoo وSAP؟', a: 'Odoo مناسب للشركات الصغيرة والمتوسطة، SAP للمؤسسات الكبرى.' },
                { q: 'هل الحل متوافق مع متطلبات ZATCA؟', a: 'نعم 100%.' }
            ],
            cta: {
                title: 'جاهز لتحديث أنظمة مؤسستك؟',
                desc: 'احجز استشارة مجانية مع خبراء ERP لمناقشة احتياجاتك',
                button: 'احجز استشارة ERP'
            }
        },
        en: {
            title: 'Enterprise Digital Transformation Solutions',
            subtitle: 'Integrated ERP Systems - From Odoo to SAP with Full ZATCA Compliance',
            challenge: {
                title: 'Enterprise Challenges',
                items: [
                    'Isolated legacy systems that don\'t communicate',
                    'Difficulty complying with ZATCA e-invoicing requirements',
                    'High ERP implementation costs and unclear ROI',
                    'Loss of data sovereignty with foreign cloud solutions'
                ]
            },
            solutions: [
                {
                    icon: 'Building2',
                    title: 'Odoo Customization & Implementation',
                    description: 'Fully customized Odoo solutions for KSA and UAE market needs',
                    features: ['Local workflows', 'Compliant financial reports', 'Full AR/EN support', 'Local bank integration']
                },
                {
                    icon: 'Shield',
                    title: 'ZATCA E-invoicing',
                    description: '100% compliance with Zakat, Tax and Customs Authority requirements',
                    features: ['Compliant invoice generation', 'Cryptographic stamping', 'Direct API integration', 'Secure archiving']
                },
                {
                    icon: 'Database',
                    title: 'Legacy System Integration',
                    description: 'Connect old systems with modern solutions without rebuilding',
                    features: ['Custom APIs', 'Data synchronization', 'Preserve investments', 'Gradual migration']
                },
                {
                    icon: 'Zap',
                    title: 'SAP Integration',
                    description: 'Certified partner for SAP implementation and customization',
                    features: ['SAP B1 / ECC', 'ABAP customization', 'Fiori integration', 'Local technical support']
                },
            ],
            faq: [
                { q: 'What\'s the difference between Odoo and SAP?', a: 'Odoo is for SMEs, SAP is for large enterprises.' },
                { q: 'Is the solution ZATCA compliant?', a: 'Yes, 100%.' }
            ],
            cta: {
                title: 'Ready to Modernize Your Enterprise Systems?',
                desc: 'Book a free consultation with ERP experts to discuss your needs',
                button: 'Book ERP Consultation'
            }
        },
        fr: {
            title: 'Solutions de Transformation Numérique d\'Entreprise',
            subtitle: 'Systèmes ERP Intégrés - D\'Odoo à SAP avec Conformité ZATCA',
            challenge: {
                title: 'Défis des Entreprises',
                items: [
                    'Systèmes isolés qui ne communiquent pas',
                    'Difficulté de conformité aux exigences ZATCA',
                    'Coûts élevés d\'implémentation ERP et ROI incertain',
                    'Perte de souveraineté des données avec solutions cloud étrangères'
                ]
            },
            solutions: [
                {
                    icon: 'Building2',
                    title: 'Personnalisation Odoo',
                    description: 'Solutions Odoo entièrement personnalisées',
                    features: ['Workflows locaux', 'Rapports conformes', 'Support AR/FR', 'Intégration banques']
                },
                {
                    icon: 'Shield',
                    title: 'Facturation Électronique ZATCA',
                    description: '100% conforme aux exigences de l\'autorité fiscale',
                    features: ['Génération factures', 'Cachet cryptographique', 'API directe', 'Archivage sécurisé']
                },
                {
                    icon: 'Database',
                    title: 'Intégration Systèmes Legacy',
                    description: 'Connecter anciens systèmes avec solutions modernes',
                    features: ['APIs personnalisées', 'Synchronisation', 'Préserver investissements', 'Migration graduelle']
                },
                {
                    icon: 'Zap',
                    title: 'Intégration SAP',
                    description: 'Partenaire certifié pour implémentation SAP',
                    features: ['SAP B1 / ECC', 'Personnalisation ABAP', 'Intégration Fiori', 'Support local']
                },
            ],
            faq: [
                { q: 'Différence entre Odoo et SAP?', a: 'Odoo pour PME, SAP pour grandes entreprises.' },
                { q: 'Solution conforme ZATCA?', a: 'Oui 100%.' }
            ],
            cta: {
                title: 'Prêt à Moderniser Vos Systèmes?',
                desc: 'Réservez consultation gratuite avec experts ERP',
                button: 'Réserver Consultation'
            }
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getEnterpriseSolutionSchema()) }} />
            <EnterpriseView lang={lang} content={content[lang]} />
        </>
    )
}
