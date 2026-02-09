import { createClient } from '@/lib/supabase/server'
import type { Locale } from '@/lib/i18n/config'
import { Users, LayoutDashboard, CheckCircle, Clock } from 'lucide-react'

export default async function AdminDashboardPage({
    params
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const supabase = await createClient()

    // Fetch some quick stats
    const { count: leadsCount } = await supabase.from('leads').select('*', { count: 'exact', head: true })
    const { count: projectsCount } = await supabase.from('projects').select('*', { count: 'exact', head: true })

    const stats = [
        { label: 'Total Leads', value: leadsCount || 0, icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'Active Projects', value: projectsCount || 0, icon: LayoutDashboard, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { label: 'Completed', value: 0, icon: CheckCircle, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        { label: 'Pending tasks', value: 0, icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    ]

    return (
        <div className="space-y-8">
            <header>
                <h2 className="text-3xl font-bold text-white mb-2">
                    {lang === 'ar' ? 'نظرة عامة' : lang === 'fr' ? 'Tableau de bord' : 'Dashboard Overview'}
                </h2>
                <p className="text-gray-400">Manage your agency content and monitor performance.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl ${stat.bg}`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-400">{stat.label}</p>
                            <p className="text-3xl font-bold text-white">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
                    <div className="space-y-4">
                        <p className="text-gray-500 text-sm">No recent activity to show.</p>
                    </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#C5A059]/20 to-transparent border border-[#C5A059]/20 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-2 italic">Pro Tip</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Use the &quot;Hero Section&quot; editor to update the main slides on your homepage. You can now upload images directly to Cloudinary and see changes instantly.
                    </p>
                </div>
            </div>
        </div>
    )
}
