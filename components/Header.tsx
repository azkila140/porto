'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n/config'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import { useSlider } from '@/lib/contexts/SliderContext'

interface HeaderProps {
    lang: Locale
}

const translations = {
    ar: {
        home: 'الرئيسية',
        services: 'الخدمات',
        solutions: 'الحلول',
        portfolio: 'أعمالنا',
        about: 'من نحن',
        contact: 'تواصل معنا',
        cta: 'ابدأ مشروعك',
    },
    fr: {
        home: 'Accueil',
        services: 'Services',
        solutions: 'Solutions',
        portfolio: 'Portfolio',
        about: 'À Propos',
        contact: 'Contact',
        cta: 'Démarrer',
    },
    en: {
        home: 'Home',
        services: 'Services',
        solutions: 'Solutions',
        portfolio: 'Portfolio',
        about: 'About',
        contact: 'Contact',
        cta: 'Start Project',
    },
}

export default function Header({ lang }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const t = translations[lang]
    const { currentGradient } = useSlider()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: `/${lang}`, label: t.home },
        { href: `/${lang}/services`, label: t.services },
        { href: `/${lang}/solutions`, label: t.solutions },
        { href: `/${lang}/work`, label: t.portfolio },
        { href: `/${lang}/about`, label: t.about },
        { href: `/${lang}/contact`, label: t.contact },
    ]

    const languages = [
        { code: 'ar' as Locale, label: 'العربية' },
        { code: 'fr' as Locale, label: 'Français' },
        { code: 'en' as Locale, label: 'English' },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            {/* Dynamic Gradient Background */}
            <div
                className={`absolute inset-0 bg-gradient-to-r ${currentGradient} transition-all duration-1000 ${isScrolled ? 'opacity-90' : 'opacity-70'
                    }`}
            />
            <div className="absolute inset-0 backdrop-blur-xl border-b border-white/10" />

            <div className="relative container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href={`/${lang}`} className="flex items-center gap-2 group">
                        <motion.div
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-emerald to-cyan-500 flex items-center justify-center"
                        >
                            <Sparkles className="w-6 h-6 text-white" />
                        </motion.div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-brand-emerald bg-clip-text text-transparent">
                            Nexus Logic
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative group"
                                >
                                    <span
                                        className={`text-sm font-medium transition-colors ${isActive ? 'text-brand-emerald' : 'text-gray-300 hover:text-white'
                                            }`}
                                    >
                                        {link.label}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-emerald to-cyan-500"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Right Section */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Language Switcher */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                <span className="text-sm text-gray-300">
                                    {languages.find((l) => l.code === lang)?.label}
                                </span>
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            </button>

                            {/* Dropdown */}
                            <div className="absolute top-full right-0 mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                                    {languages.map((language) => (
                                        <Link
                                            key={language.code}
                                            href={pathname.replace(`/${lang}`, `/${language.code}`)}
                                            className={`block px-4 py-3 text-sm transition-colors ${language.code === lang
                                                ? 'bg-brand-emerald/20 text-brand-emerald'
                                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                                }`}
                                        >
                                            {language.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href={`/${lang}/contact`}
                            className="relative group px-6 py-2.5 rounded-lg bg-gradient-to-r from-brand-emerald to-cyan-500 text-white font-semibold overflow-hidden"
                        >
                            <span className="relative z-10">{t.cta}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-brand-emerald opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl"
                    >
                        <div className="container mx-auto px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block py-3 px-4 rounded-lg transition-all ${pathname === link.href
                                        ? 'bg-brand-emerald/20 text-brand-emerald'
                                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="pt-4 border-t border-white/10 space-y-3">
                                {languages.map((language) => (
                                    <Link
                                        key={language.code}
                                        href={pathname.replace(`/${lang}`, `/${language.code}`)}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block py-2 px-4 rounded-lg text-sm ${language.code === lang
                                            ? 'bg-brand-emerald/20 text-brand-emerald'
                                            : 'text-gray-300 hover:bg-white/5'
                                            }`}
                                    >
                                        {language.label}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href={`/${lang}/contact`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full py-3 text-center rounded-lg bg-gradient-to-r from-brand-emerald to-cyan-500 text-white font-semibold"
                            >
                                {t.cta}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
