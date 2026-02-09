'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import type { Locale } from '@/lib/i18n/config'
import {
    Code2,
    Workflow,
    Palette,
    MapPin,
    TrendingUp,
    Sparkles,
    Zap
} from 'lucide-react'

interface BentoGridProps {
    lang: Locale
    initialServices?: any[]
}

// Icon mapping for dynamic loading
const iconMap: Record<string, any> = {
    Code2,
    Workflow,
    Palette,
    MapPin,
    TrendingUp,
    Sparkles,
    Zap
}

import { servicesData } from '@/lib/data/services'

export function BentoGrid({ lang, initialServices = [] }: BentoGridProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    // Immediate transformation for SSR
    const services = (initialServices && initialServices.length > 0)
        ? initialServices.map((s: any) => ({
            icon: iconMap[s.icon] || Code2,
            title: s.title,
            description: s.description,
            gradient: s.gradient,
            imageUrl: s.imageUrl
        }))
        : ((servicesData as any)[lang] || servicesData.en)

    return (
        <section ref={ref} className="py-24 px-4 bg-slate-950 relative overflow-hidden">
            {/* Background Pattern ... (rest remains the same) */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(197, 160, 89, 0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        {lang === 'ar' ? 'خدماتنا' : lang === 'fr' ? 'Nos Services' : 'Our Services'}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {lang === 'ar' ? 'حلول رقمية شاملة لنجاحك' : lang === 'fr' ? 'Solutions numériques complètes pour votre succès' : 'Comprehensive digital solutions for your success'}
                    </p>
                </motion.div>

                {/* 6 Equal Premium Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((item: any, index: number) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.7, type: 'spring', stiffness: 100 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 hover:border-[#C5A059]/40 transition-all duration-500 overflow-hidden"
                            >
                                {/* Background Image Layer */}
                                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </motion.div>
                                    {/* Dark Overlay for Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-950/90" />
                                    {/* Image Overlay */}
                                    {item.image && (
                                        <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-10" />
                                            <Image
                                                src={item.image}
                                                alt={item.title[lang]}
                                                width={600}
                                                height={600}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover w-full h-full transform scale-100 group-hover:scale-110 transition-transform duration-700"
                                                quality={75}
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Luxury Gold Glow on Hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent animate-shimmer" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon with Golden Ring */}
                                    <div className="mb-6 relative">
                                        <div className="absolute inset-0 bg-[#C5A059]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#C5A059] to-[#8B7355] p-0.5"
                                        >
                                            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                                                <Icon className="w-8 h-8 text-[#C5A059]" />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#C5A059] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className={`absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r ${item.gradient} opacity-20 skew-x-12 group-hover:left-[100%] transition-all duration-1000`} />
                                </div>

                                {/* Bottom Gold Accent Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
