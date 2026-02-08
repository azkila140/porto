'use client'

import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    Facebook,
    Sparkles,
    ArrowRight
} from 'lucide-react'

interface FooterProps {
    lang: Locale
}

const translations = {
    ar: {
        tagline: 'نحول أفكارك إلى حلول رقمية متكاملة',
        services: 'الخدمات',
        solutions: 'الحلول',
        company: 'الشركة',
        contact: 'تواصل معنا',
        rights: 'جميع الحقوق محفوظة',
        serviceLinks: {
            'digital-engineering': 'الهندسة الرقمية',
            automation: 'الأتمتة',
            branding: 'الهوية البصرية',
            'google-maps-seo': 'خرائط جوجل',
            'growth-content': 'النمو والتسويق',
        },
        solutionLinks: {
            medical: 'حلول طبية',
            'real-estate': 'حلول عقارية',
            restaurants: 'حلول مطاعم',
            retail: 'حلول تجزئة',
        },
        companyLinks: {
            about: 'من نحن',
            work: 'أعمالنا',
            contact: 'اتصل بنا',
            portal: 'بوابة العملاء',
        },
    },
    fr: {
        tagline: 'Transformons vos idées en solutions digitales intégrées',
        services: 'Services',
        solutions: 'Solutions',
        company: 'Entreprise',
        contact: 'Contact',
        rights: 'Tous droits réservés',
        serviceLinks: {
            'digital-engineering': 'Ingénierie Digitale',
            automation: 'Automatisation',
            branding: 'Identité Visuelle',
            'google-maps-seo': 'Google Maps',
            'growth-content': 'Croissance & Marketing',
        },
        solutionLinks: {
            medical: 'Solutions Médicales',
            'real-estate': 'Solutions Immobilières',
            restaurants: 'Solutions Restaurants',
            retail: 'Solutions Commerce',
        },
        companyLinks: {
            about: 'À Propos',
            work: 'Portfolio',
            contact: 'Contact',
            portal: 'Portail Client',
        },
    },
    en: {
        tagline: 'Transform your ideas into integrated digital solutions',
        services: 'Services',
        solutions: 'Solutions',
        company: 'Company',
        contact: 'Contact Us',
        rights: 'All rights reserved',
        serviceLinks: {
            'digital-engineering': 'Digital Engineering',
            automation: 'Automation',
            branding: 'Brand Identity',
            'google-maps-seo': 'Google Maps',
            'growth-content': 'Growth & Marketing',
        },
        solutionLinks: {
            medical: 'Medical Solutions',
            'real-estate': 'Real Estate Solutions',
            restaurants: 'Restaurant Solutions',
            retail: 'Retail Solutions',
        },
        companyLinks: {
            about: 'About Us',
            work: 'Portfolio',
            contact: 'Contact',
            portal: 'Client Portal',
        },
    },
}

export default function Footer({ lang }: FooterProps) {
    const t = translations[lang]
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-slate-950 border-t border-white/10">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-emerald/5 to-transparent pointer-events-none" />

            <div className="relative container mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href={`/${lang}`} className="flex items-center gap-2 mb-4 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-emerald to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-brand-emerald bg-clip-text text-transparent">
                                Nexus Logic
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                            {t.tagline}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { icon: Linkedin, href: 'https://linkedin.com/company/nexuslogic' },
                                { icon: Twitter, href: 'https://twitter.com/nexuslogic' },
                                { icon: Instagram, href: 'https://instagram.com/nexuslogic' },
                                { icon: Facebook, href: 'https://facebook.com/nexuslogic' },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-emerald/20 hover:border-brand-emerald/50 transition-all group"
                                >
                                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-brand-emerald transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            {t.services}
                            <div className="h-px flex-1 bg-gradient-to-r from-brand-emerald/50 to-transparent" />
                        </h3>
                        <ul className="space-y-3">
                            {Object.entries(t.serviceLinks).map(([key, label]) => (
                                <li key={key}>
                                    <Link
                                        href={`/${lang}/services/${key}`}
                                        className="text-gray-400 hover:text-brand-emerald transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            {t.solutions}
                            <div className="h-px flex-1 bg-gradient-to-r from-brand-emerald/50 to-transparent" />
                        </h3>
                        <ul className="space-y-3">
                            {Object.entries(t.solutionLinks).map(([key, label]) => (
                                <li key={key}>
                                    <Link
                                        href={`/${lang}/solutions/${key}`}
                                        className="text-gray-400 hover:text-brand-emerald transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            {t.company}
                            <div className="h-px flex-1 bg-gradient-to-r from-brand-emerald/50 to-transparent" />
                        </h3>
                        <ul className="space-y-3 mb-6">
                            {Object.entries(t.companyLinks).map(([key, label]) => (
                                <li key={key}>
                                    <Link
                                        href={`/${lang}/${key === 'portal' ? 'portal' : key}`}
                                        className="text-gray-400 hover:text-brand-emerald transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm">
                            <a href="mailto:contact@nexuslogic.online" className="flex items-center gap-2 text-gray-400 hover:text-brand-emerald transition-colors">
                                <Mail className="w-4 h-4" />
                                contact@nexuslogic.online
                            </a>
                            <a href="tel:+212708080440" className="flex items-center gap-2 text-gray-400 hover:text-brand-emerald transition-colors">
                                <Phone className="w-4 h-4" />
                                +212 708 080 440
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>
                            © {currentYear} Nexus Logic. {t.rights}.
                        </p>
                        <div className="flex gap-6">
                            <Link href={`/${lang}/privacy`} className="hover:text-brand-emerald transition-colors">
                                {lang === 'ar' ? 'سياسة الخصوصية' : lang === 'fr' ? 'Confidentialité' : 'Privacy Policy'}
                            </Link>
                            <Link href={`/${lang}/terms`} className="hover:text-brand-emerald transition-colors">
                                {lang === 'ar' ? 'الشروط والأحكام' : lang === 'fr' ? 'Conditions' : 'Terms of Service'}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-emerald/50 to-transparent" />
        </footer>
    )
}
