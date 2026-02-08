import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { Locale } from '@/lib/i18n/config'
import Link from 'next/link'
import { LayoutDashboard, FolderKanban, FileText, MessageSquare, LogOut, Menu } from 'lucide-react'

export default async function DashboardLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect(`/${params.lang}/login`)
    }

    const navItems = {
        ar: [
            { href: `/ar/portal`, icon: LayoutDashboard, label: 'لوحة التحكم' },
            { href: `/ar/portal/projects`, icon: FolderKanban, label: 'المشاريع' },
            { href: `/ar/portal/invoices`, icon: FileText, label: 'الفواتير' },
            { href: `/ar/portal/support`, icon: MessageSquare, label: 'الدعم' },
        ],
        fr: [
            { href: `/fr/portal`, icon: LayoutDashboard, label: 'Tableau de bord' },
            { href: `/fr/portal/projects`, icon: FolderKanban, label: 'Projets' },
            { href: `/fr/portal/invoices`, icon: FileText, label: 'Factures' },
            { href: `/fr/portal/support`, icon: MessageSquare, label: 'Support' },
        ],
        en: [
            { href: `/en/portal`, icon: LayoutDashboard, label: 'Dashboard' },
            { href: `/en/portal/projects`, icon: FolderKanban, label: 'Projects' },
            { href: `/en/portal/invoices`, icon: FileText, label: 'Invoices' },
            { href: `/en/portal/support`, icon: MessageSquare, label: 'Support' },
        ],
    }

    const currentNav = navItems[params.lang]

    return (
        <div className="min-h-screen bg-brand-dark" dir={params.lang === 'ar' ? 'rtl' : 'ltr'}>
            {/* Header */}
            <header className="bg-slate-900 border-b border-white/10 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href={`/${params.lang}`} className="flex items-center gap-2">
                        <h1 className="text-xl font-bold text-white">Nexus Logic</h1>
                    </Link>

                    {/* User Menu */}
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                        <form action="/auth/signout" method="post">
                            <button
                                type="submit"
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                title={params.lang === 'ar' ? 'تسجيل الخروج' : params.lang === 'fr' ? 'Déconnexion' : 'Logout'}
                            >
                                <LogOut className="w-5 h-5 text-gray-400" />
                            </button>
                        </form>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 bg-slate-900 border-r border-white/10 min-h-[calc(100vh-73px)] p-4">
                    <nav className="space-y-2">
                        {currentNav.map((item) => {
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
