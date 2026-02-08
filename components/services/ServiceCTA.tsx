'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail, MessageCircle, Send } from 'lucide-react'

interface ServiceCTAProps {
    title: string
    description: string
    lang: 'ar' | 'fr' | 'en'
}

const translations = {
    ar: {
        contactForm: 'نموذج التواصل',
        whatsapp: 'واتساب',
        email: 'البريد الإلكتروني',
        or: 'أو'
    },
    fr: {
        contactForm: 'Formulaire',
        whatsapp: 'WhatsApp',
        email: 'Email',
        or: 'ou'
    },
    en: {
        contactForm: 'Contact Form',
        whatsapp: 'WhatsApp',
        email: 'Email',
        or: 'or'
    }
}

export default function ServiceCTA({ title, description, lang }: ServiceCTAProps) {
    const t = translations[lang]

    return (
        <section className="py-20 bg-gradient-to-br from-brand-emerald via-cyan-600 to-blue-600 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

            <div className="relative container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">{description}</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Contact Form */}
                        <Link
                            href={`/${lang}/contact`}
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
                        >
                            <Send className="w-5 h-5" />
                            {t.contactForm}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <span className="text-white/60 font-medium">{t.or}</span>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-2xl hover:scale-105"
                        >
                            <MessageCircle className="w-5 h-5" />
                            {t.whatsapp}
                        </a>

                        <span className="text-white/60 font-medium">{t.or}</span>

                        {/* Email */}
                        <a
                            href="mailto:hello@nexuslogic.com"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-2xl hover:scale-105"
                        >
                            <Mail className="w-5 h-5" />
                            {t.email}
                        </a>
                    </div>

                    <p className="mt-8 text-white/70 text-sm">
                        {lang === 'ar' && 'نرد خلال 24 ساعة'}
                        {lang === 'fr' && 'Réponse sous 24h'}
                        {lang === 'en' && 'We respond within 24 hours'}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
