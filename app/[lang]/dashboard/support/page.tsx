'use client'

import { useState } from 'react'
import type { Locale } from '@/lib/i18n/config'
import { MessageSquare, Plus, AlertCircle, CheckCircle2, Clock, X } from 'lucide-react'

export default function SupportPage({ params }: { params: { lang: Locale } }) {
    const [showNewTicket, setShowNewTicket] = useState(false)
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')

    const content = {
        ar: {
            title: 'الدعم الفني',
            subtitle: 'تواصل مع فريق الدعم',
            newTicket: 'تذكرة جديدة',
            empty: 'لا توجد تذاكر دعم',
            emptyDesc: 'يمكنك إنشاء تذكرة دعم جديدة للحصول على المساعدة',
            form: {
                subject: 'الموضوع',
                description: 'الوصف',
                priority: 'الأولوية',
                priorities: {
                    low: 'منخفضة',
                    medium: 'متوسطة',
                    high: 'عالية',
                },
                submit: 'إرسال',
                cancel: 'إلغاء',
            },
            status: {
                open: 'مفتوح',
                'in-progress': 'قيد المعالجة',
                resolved: 'تم الحل',
                closed: 'مغلق',
            },
        },
        fr: {
            title: 'Support Technique',
            subtitle: 'Contactez notre équipe de support',
            newTicket: 'Nouveau ticket',
            empty: 'Aucun ticket de support',
            emptyDesc: 'Vous pouvez créer un nouveau ticket pour obtenir de l\'aide',
            form: {
                subject: 'Sujet',
                description: 'Description',
                priority: 'Priorité',
                priorities: {
                    low: 'Basse',
                    medium: 'Moyenne',
                    high: 'Haute',
                },
                submit: 'Envoyer',
                cancel: 'Annuler',
            },
            status: {
                open: 'Ouvert',
                'in-progress': 'En cours',
                resolved: 'Résolu',
                closed: 'Fermé',
            },
        },
        en: {
            title: 'Technical Support',
            subtitle: 'Contact our support team',
            newTicket: 'New Ticket',
            empty: 'No support tickets',
            emptyDesc: 'You can create a new support ticket to get help',
            form: {
                subject: 'Subject',
                description: 'Description',
                priority: 'Priority',
                priorities: {
                    low: 'Low',
                    medium: 'Medium',
                    high: 'High',
                },
                submit: 'Submit',
                cancel: 'Cancel',
            },
            status: {
                open: 'Open',
                'in-progress': 'In Progress',
                resolved: 'Resolved',
                closed: 'Closed',
            },
        },
    }

    const dict = content[params.lang]

    // Demo tickets
    const tickets = []

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement ticket creation with Supabase
        console.log({ subject, description, priority })
        setShowNewTicket(false)
        setSubject('')
        setDescription('')
        setPriority('medium')
    }

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high':
                return 'bg-red-500/20 text-red-400 border-red-500/30'
            case 'medium':
                return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
            case 'low':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{dict.title}</h1>
                    <p className="text-gray-400">{dict.subtitle}</p>
                </div>
                <button
                    onClick={() => setShowNewTicket(true)}
                    className="px-4 py-2 bg-brand-emerald hover:bg-emerald-600 rounded-lg font-semibold text-white transition-colors flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    {dict.newTicket}
                </button>
            </div>

            {/* New Ticket Form Modal */}
            {showNewTicket && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 max-w-lg w-full">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-white">{dict.newTicket}</h3>
                            <button
                                onClick={() => setShowNewTicket(false)}
                                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    {dict.form.subject}
                                </label>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-emerald"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    {dict.form.description}
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-emerald resize-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    {dict.form.priority}
                                </label>
                                <select
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value as any)}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-emerald"
                                >
                                    <option value="low">{dict.form.priorities.low}</option>
                                    <option value="medium">{dict.form.priorities.medium}</option>
                                    <option value="high">{dict.form.priorities.high}</option>
                                </select>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-brand-emerald hover:bg-emerald-600 rounded-lg font-semibold text-white transition-colors"
                                >
                                    {dict.form.submit}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowNewTicket(false)}
                                    className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg font-semibold text-gray-300 transition-colors"
                                >
                                    {dict.form.cancel}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Tickets List */}
            {tickets.length === 0 ? (
                <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{dict.empty}</h3>
                    <p className="text-gray-400">{dict.emptyDesc}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {/* Tickets will be displayed here */}
                </div>
            )}
        </div>
    )
}
