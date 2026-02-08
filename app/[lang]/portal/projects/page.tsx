import { createClient } from '@/lib/supabase/server'
import type { Locale } from '@/lib/i18n/config'
import { ExternalLink, Clock, CheckCircle2, Pause } from 'lucide-react'

export default async function ProjectsPage({ params }: { params: { lang: Locale } }) {
    const supabase = createClient()

    // Fetch user's projects
    const { data: projects } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

    const content = {
        ar: {
            title: 'مشاريعي',
            subtitle: 'تتبع تقدم مشاريعك',
            empty: 'لا توجد مشاريع حالياً',
            emptyDesc: 'سيتم عرض مشاريعك هنا عند إضافتها',
            status: {
                planning: 'تخطيط',
                'in-progress': 'قيد التنفيذ',
                completed: 'مكتمل',
                'on-hold': 'متوقف مؤقتاً',
            },
            progress: 'التقدم',
            viewDrive: 'عرض الملفات',
        },
        fr: {
            title: 'Mes Projets',
            subtitle: 'Suivez la progression de vos projets',
            empty: 'Aucun projet pour le moment',
            emptyDesc: 'Vos projets apparaîtront ici une fois ajoutés',
            status: {
                planning: 'Planification',
                'in-progress': 'En cours',
                completed: 'Terminé',
                'on-hold': 'En pause',
            },
            progress: 'Progression',
            viewDrive: 'Voir les fichiers',
        },
        en: {
            title: 'My Projects',
            subtitle: 'Track your project progress',
            empty: 'No projects yet',
            emptyDesc: 'Your projects will appear here once added',
            status: {
                planning: 'Planning',
                'in-progress': 'In Progress',
                completed: 'Completed',
                'on-hold': 'On Hold',
            },
            progress: 'Progress',
            viewDrive: 'View Files',
        },
    }

    const dict = content[params.lang]

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <CheckCircle2 className="w-5 h-5 text-green-400" />
            case 'in-progress':
                return <Clock className="w-5 h-5 text-blue-400" />
            case 'on-hold':
                return <Pause className="w-5 h-5 text-orange-400" />
            default:
                return <Clock className="w-5 h-5 text-gray-400" />
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-500/20 text-green-400 border-green-500/30'
            case 'in-progress':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
            case 'on-hold':
                return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">{dict.title}</h1>
                <p className="text-gray-400">{dict.subtitle}</p>
            </div>

            {/* Projects List */}
            {!projects || projects.length === 0 ? (
                <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{dict.empty}</h3>
                    <p className="text-gray-400">{dict.emptyDesc}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {projects.map((project: any) => (
                        <div
                            key={project.id}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-emerald/30 transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>

                                    {/* Status Badge */}
                                    <div className="flex items-center gap-2">
                                        {getStatusIcon(project.status)}
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                                            {dict.status[project.status as keyof typeof dict.status]}
                                        </span>
                                    </div>
                                </div>

                                {/* Drive Link */}
                                {project.drive_link && (
                                    <a
                                        href={project.drive_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-brand-emerald/20 hover:bg-brand-emerald/30 rounded-lg text-brand-emerald font-medium transition-colors flex items-center gap-2"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        {dict.viewDrive}
                                    </a>
                                )}
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-400">{dict.progress}</span>
                                    <span className="text-sm font-medium text-white">{project.progress}%</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-brand-emerald to-green-400 transition-all duration-500"
                                        style={{ width: `${project.progress}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
