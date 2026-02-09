import type { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import Link from 'next/link'

export default async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    const content = {
        ar: {
            title: 'تواصل معنا',
            subtitle: 'نحن هنا لمساعدتك في تحقيق أهدافك الرقمية',
            email: 'البريد الإلكتروني',
            phone: 'الهاتف',
            address: 'العنوان',
            hours: 'ساعات العمل',
            hoursValue: 'الأحد - الخميس: 9:00 - 18:00',
            social: 'تابعنا',
            cta: 'أو املأ نموذج الاتصال',
        },
        fr: {
            title: 'Contactez-nous',
            subtitle: 'Nous sommes là pour vous aider à atteindre vos objectifs numériques',
            email: 'Email',
            phone: 'Téléphone',
            address: 'Adresse',
            hours: 'Heures d\'ouverture',
            hoursValue: 'Dimanche - Jeudi: 9h00 - 18h00',
            social: 'Suivez-nous',
            cta: 'Ou remplissez le formulaire de contact',
        },
        en: {
            title: 'Contact Us',
            subtitle: 'We\'re here to help you achieve your digital goals',
            email: 'Email',
            phone: 'Phone',
            address: 'Address',
            hours: 'Business Hours',
            hoursValue: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
            social: 'Follow Us',
            cta: 'Or fill out the contact form',
        },
    }

    const current = content[lang]

    return (
        <main className="min-h-screen bg-brand-dark">
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {current.title}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            {current.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-2 text-white">{current.email}</h3>
                                <a href="mailto:contact@nexuslogic.online" className="text-brand-emerald hover:underline">
                                    contact@nexuslogic.online
                                </a>
                            </div>

                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-2 text-white">{current.phone}</h3>
                                <a href="tel:+212708080440" className="text-brand-emerald hover:underline">
                                    +212 708 080 440
                                </a>
                            </div>

                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-2 text-white">{current.hours}</h3>
                                <p className="text-gray-300">{current.hoursValue}</p>
                            </div>

                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-4 text-white">{current.social}</h3>
                                <div className="flex gap-4">
                                    <a href="https://facebook.com/nexuslogic" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-emerald transition-colors">
                                        <span className="text-xl">📘</span>
                                    </a>
                                    <a href="https://instagram.com/nexuslogic" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-emerald transition-colors">
                                        <span className="text-xl">📷</span>
                                    </a>
                                    <a href="https://twitter.com/nexuslogic" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-emerald transition-colors">
                                        <span className="text-xl">🐦</span>
                                    </a>
                                    <a href="https://linkedin.com/company/nexuslogic" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-emerald transition-colors">
                                        <span className="text-xl">💼</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CTA to Lead Form */}
                        <div className="flex items-center justify-center">
                            <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-brand-emerald/20 to-blue-500/20 border border-brand-emerald/30">
                                <h3 className="text-3xl font-bold mb-4 text-white">{current.cta}</h3>
                                <p className="text-gray-300 mb-8">
                                    {lang === 'ar'
                                        ? 'انتقل إلى الصفحة الرئيسية لملء نموذج الاتصال'
                                        : lang === 'fr'
                                            ? 'Accédez à la page d\'accueil pour remplir le formulaire de contact'
                                            : 'Go to the homepage to fill out the contact form'}
                                </p>
                                <Link
                                    href={`/${lang}`}
                                    className="inline-block px-8 py-4 bg-brand-emerald rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-all"
                                >
                                    {lang === 'ar' ? 'إلى الصفحة الرئيسية' : lang === 'fr' ? 'Page d\'accueil' : 'Go to Homepage'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
