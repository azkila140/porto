import { createClient } from '@/lib/supabase/server'
import type { Locale } from '@/lib/i18n/config'
import { BarChart3, FolderKanban, FileText, Clock } from 'lucide-react'

export default async function DashboardPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const content = {
        ar: {
            welcome: 'مرحباً',
            subtitle: 'نظرة عامة على حسابك',
            stats: {
                projects: 'المشاريع النشطة',
                invoices: 'الفواتير المعلقة',
                tickets: 'تذاكر الدعم',
            },
            quickActions: 'إجراءات سريعة',
            viewProjects: 'عرض المشاريع',
            viewInvoices: 'عرض الفواتير',
            contactSupport: 'تواصل مع الدعم',
        },
        fr: {
            welcome: 'Bienvenue',
            subtitle: 'Aperçu de votre compte',
            stats: {
                projects: 'Projets actifs',
                invoices: 'Factures en attente',
                tickets: 'Tickets de support',
            },
            quickActions: 'Actions rapides',
            viewProjects: 'Voir les projets',
            viewInvoices: 'Voir les factures',
            contactSupport: 'Contacter le support',
        },
        en: {
            welcome: 'Welcome',
            subtitle: 'Account overview',
            stats: {
                projects: 'Active Projects',
                invoices: 'Pending Invoices',
                tickets: 'Support Tickets',
            },
            quickActions: 'Quick Actions',
            viewProjects: 'View Projects',
            viewInvoices: 'View Invoices',
            contactSupport: 'Contact Support',
        },
    }

    const dict = content[lang]

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                    {dict.welcome}, {user?.email?.split('@')[0]}!
                </h1>
                <p className="text-gray-400">{dict.subtitle}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <div className="flex items-center justify-between mb-4">
                        <FolderKanban className="w-8 h-8 text-blue-400" />
                        <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <p className="text-gray-300">{dict.stats.projects}</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                    <div className="flex items-center justify-between mb-4">
                        <FileText className="w-8 h-8 text-orange-400" />
                        <span className="text-3xl font-bold text-white">1</span>
                    </div>
                    <p className="text-gray-300">{dict.stats.invoices}</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                    <div className="flex items-center justify-between mb-4">
                        <Clock className="w-8 h-8 text-green-400" />
                        <span className="text-3xl font-bold text-white">0</span>
                    </div>
                    <p className="text-gray-300">{dict.stats.tickets}</p>
                </div>
            </div>

            {/* Quick Actions */}
            <div>
                <h2 className="text-xl font-bold text-white mb-4">{dict.quickActions}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a
                        href={`/${lang}/portal/projects`}
                        className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
                    >
                        <p className="text-white font-medium">{dict.viewProjects}</p>
                    </a>
                    <a
                        href={`/${lang}/portal/invoices`}
                        className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
                    >
                        <p className="text-white font-medium">{dict.viewInvoices}</p>
                    </a>
                    <a
                        href={`/${lang}/portal/support`}
                        className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
                    >
                        <p className="text-white font-medium">{dict.contactSupport}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
