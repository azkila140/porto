import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { Locale } from '@/lib/i18n/config'
import Link from 'next/link'
import {
    LayoutDashboard,
    Layers,
    Palette,
    Users,
    LogOut,
    Settings,
    FileImage,
    MousePointerClick
} from 'lucide-react'

export default async function AdminLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect(`/${params.lang}/login?redirect=/${params.lang}/admin`)
    }

    // Check if user is admin
    const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

    if (!profile || profile.role !== 'admin') {
        // Not an admin, redirect to portal
        redirect(`/${params.lang}/portal`)
    }

    const navItems = {
        ar: [
            { href: `/${params.lang}/admin`, icon: LayoutDashboard, label: 'نظرة عامة' },
            { href: `/${params.lang}/admin/hero`, icon: Layers, label: 'الواجهة الرئيسية' },
            { href: `/${params.lang}/admin/services`, icon: Palette, label: 'الخدمات' },
            { href: `/${params.lang}/admin/leads`, icon: Users, label: 'الطلبات' },
            { href: `/${params.lang}/admin/settings`, icon: Settings, label: 'الإعدادات' },
        ],
        fr: [
            { href: `/${params.lang}/admin`, icon: LayoutDashboard, label: 'Aperçu' },
            { href: `/${params.lang}/admin/hero`, icon: Layers, label: 'Hero Section' },
            { href: `/${params.lang}/admin/services`, icon: Palette, label: 'Services' },
            { href: `/${params.lang}/admin/leads`, icon: Users, label: 'Leads' },
            { href: `/${params.lang}/admin/settings`, icon: Settings, label: 'Paramètres' },
        ],
        en: [
            { href: `/${params.lang}/admin`, icon: LayoutDashboard, label: 'Overview' },
            { href: `/${params.lang}/admin/hero`, icon: Layers, label: 'Hero Section' },
            { href: `/${params.lang}/admin/services`, icon: Palette, label: 'Services' },
            { href: `/${params.lang}/admin/leads`, icon: Users, label: 'Leads' },
            { href: `/${params.lang}/admin/settings`, icon: Settings, label: 'Settings' },
        ],
    }

    const currentNav = navItems[params.lang]

    return (
        <div className="min-h-screen bg-slate-950 text-white" dir={params.lang === 'ar' ? 'rtl' : 'ltr'}>
            {/* Admin Header */}
            <header className="bg-slate-900/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
                <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={`/${params.lang}`} className="text-xl font-bold bg-gradient-to-r from-[#C5A059] to-[#8B7355] bg-clip-text text-transparent">
                            Nexus Logic <span className="text-xs text-gray-500 font-mono ml-2 uppercase tracking-widest">Admin</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:block text-right">
                            <p className="text-xs text-gray-500 uppercase tracking-tighter">Connected as</p>
                            <p className="text-sm font-medium text-gray-200">{user.email}</p>
                        </div>
                        <form action="/auth/signout" method="post">
                            <button
                                type="submit"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all border border-red-500/20"
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="text-sm font-semibold">{params.lang === 'ar' ? 'خروج' : 'Logout'}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Admin Sidebar */}
                <aside className="w-64 bg-slate-900/30 border-r border-white/10 min-h-[calc(100vh-73px)] p-6 hidden lg:block">
                    <nav className="space-y-1">
                        {currentNav.map((item) => {
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-[#C5A059] transition-all group"
                                >
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-8 bg-slate-950/50">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
