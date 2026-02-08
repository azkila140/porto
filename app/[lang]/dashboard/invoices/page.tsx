import { createClient } from '@/lib/supabase/server'
import type { Locale } from '@/lib/i18n/config'
import { Download, AlertCircle, CheckCircle2, Clock } from 'lucide-react'

export default async function InvoicesPage({ params }: { params: { lang: Locale } }) {
    const supabase = createClient()

    // Fetch user's invoices
    const { data: invoices } = await supabase
        .from('invoices')
        .select(`
      *,
      projects (
        title
      )
    `)
        .order('created_at', { ascending: false })

    const content = {
        ar: {
            title: 'الفواتير',
            subtitle: 'إدارة فواتيرك والمدفوعات',
            empty: 'لا توجد فواتير',
            emptyDesc: 'ستظهر فواتيرك هنا',
            project: 'المشروع',
            amount: 'المبلغ',
            status: 'الحالة',
            dueDate: 'تاريخ الاستحقاق',
            actions: 'الإجراءات',
            download: 'تحميل',
            statusLabels: {
                paid: 'مدفوع',
                pending: 'معلق',
                overdue: 'متأخر',
            },
        },
        fr: {
            title: 'Factures',
            subtitle: 'Gérez vos factures et paiements',
            empty: 'Aucune facture',
            emptyDesc: 'Vos factures apparaîtront ici',
            project: 'Projet',
            amount: 'Montant',
            status: 'Statut',
            dueDate: 'Date d\'échéance',
            actions: 'Actions',
            download: 'Télécharger',
            statusLabels: {
                paid: 'Payé',
                pending: 'En attente',
                overdue: 'En retard',
            },
        },
        en: {
            title: 'Invoices',
            subtitle: 'Manage your invoices and payments',
            empty: 'No invoices',
            emptyDesc: 'Your invoices will appear here',
            project: 'Project',
            amount: 'Amount',
            status: 'Status',
            dueDate: 'Due Date',
            actions: 'Actions',
            download: 'Download',
            statusLabels: {
                paid: 'Paid',
                pending: 'Pending',
                overdue: 'Overdue',
            },
        },
    }

    const dict = content[params.lang]

    const getStatusBadge = (status: string) => {
        const badges = {
            paid: {
                icon: <CheckCircle2 className="w-4 h-4" />,
                className: 'bg-green-500/20 text-green-400 border-green-500/30',
            },
            pending: {
                icon: <Clock className="w-4 h-4" />,
                className: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
            },
            overdue: {
                icon: <AlertCircle className="w-4 h-4" />,
                className: 'bg-red-500/20 text-red-400 border-red-500/30',
            },
        }

        const badge = badges[status as keyof typeof badges] || badges.pending

        return (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border ${badge.className}`}>
                {badge.icon}
                {dict.statusLabels[status as keyof typeof dict.statusLabels]}
            </span>
        )
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString(params.lang === 'ar' ? 'ar-SA' : params.lang === 'fr' ? 'fr-FR' : 'en-US')
    }

    const formatAmount = (amount: number, currency: string = 'USD') => {
        return new Intl.NumberFormat(params.lang === 'ar' ? 'ar-SA' : params.lang === 'fr' ? 'fr-FR' : 'en-US', {
            style: 'currency',
            currency,
        }).format(amount)
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">{dict.title}</h1>
                <p className="text-gray-400">{dict.subtitle}</p>
            </div>

            {/* Invoices Table */}
            {!invoices || invoices.length === 0 ? (
                <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                        <Download className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{dict.empty}</h3>
                    <p className="text-gray-400">{dict.emptyDesc}</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">{dict.project}</th>
                                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">{dict.amount}</th>
                                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">{dict.status}</th>
                                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">{dict.dueDate}</th>
                                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">{dict.actions}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((invoice: any) => (
                                <tr key={invoice.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-4">
                                        <p className="text-white font-medium">{invoice.projects?.title || 'N/A'}</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <p className="text-white font-semibold">{formatAmount(invoice.amount, invoice.currency)}</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        {getStatusBadge(invoice.status)}
                                    </td>
                                    <td className="py-4 px-4">
                                        <p className="text-gray-300">{formatDate(invoice.due_date)}</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        {invoice.pdf_url && (
                                            <a
                                                href={invoice.pdf_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-emerald/20 hover:bg-brand-emerald/30 rounded-lg text-brand-emerald text-sm font-medium transition-colors"
                                            >
                                                <Download className="w-4 h-4" />
                                                {dict.download}
                                            </a>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
