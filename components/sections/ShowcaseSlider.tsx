'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import type { Locale } from '@/lib/i18n/config'

interface ShowcaseItem {
    id: number
    title: string
    description: string
    category: string
    image: string
    gradient: string
}

interface ShowcaseSliderProps {
    lang: Locale
}

const showcaseItems = {
    ar: [
        {
            id: 1,
            title: 'منصة طبية متكاملة',
            description: 'نظام حجز وإدارة عيادات مع تكامل كامل مع الدفع الإلكتروني',
            category: 'قطاع طبي',
            image: 'https://images.unsplash.com/photo-1576091160550-217359f47f8a?w=800&q=80',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            title: 'تطبيق عقاري فاخر',
            description: 'منصة عرض وبيع العقارات الفاخرة مع جولات افتراضية 360',
            category: 'عقارات',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 3,
            title: 'نظام مطاعم ذكي',
            description: 'إدارة متكاملة للطلبات والحجوزات مع قائمة رقمية تفاعلية',
            category: 'مطاعم وفنادق',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7ed9d42339?w=800&q=80',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            id: 4,
            title: 'متجر إلكتروني متقدم',
            description: 'منصة تجارة إلكترونية مع نظام دفع آمن وإدارة مخزون ذكية',
            category: 'تجارة إلكترونية',
            image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
            gradient: 'from-green-500 to-emerald-500',
        },
    ],
    fr: [
        {
            id: 1,
            title: 'Plateforme Médicale Complète',
            description: 'Système de réservation et gestion de cliniques avec paiement intégré',
            category: 'Secteur Médical',
            image: 'https://images.unsplash.com/photo-1576091160550-217359f47f8a?w=800&q=80',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            title: 'Application Immobilière de Luxe',
            description: 'Plateforme de vente immobilière haut de gamme avec visites virtuelles 360',
            category: 'Immobilier',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 3,
            title: 'Système Restaurant Intelligent',
            description: 'Gestion complète des commandes et réservations avec menu digital interactif',
            category: 'Hôtellerie-Restauration',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7ed9d42339?w=800&q=80',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            id: 4,
            title: 'E-commerce Avancé',
            description: 'Plateforme e-commerce avec paiement sécurisé et gestion intelligente du stock',
            category: 'E-commerce',
            image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
            gradient: 'from-green-500 to-emerald-500',
        },
    ],
    en: [
        {
            id: 1,
            title: 'Complete Medical Platform',
            description: 'Clinic booking and management system with integrated payment gateway',
            category: 'Medical Sector',
            image: 'https://images.unsplash.com/photo-1576091160550-217359f47f8a?w=800&q=80',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            title: 'Luxury Real Estate App',
            description: 'Premium property showcase platform with 360° virtual tours',
            category: 'Real Estate',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 3,
            title: 'Smart Restaurant System',
            description: 'Complete order and reservation management with interactive digital menu',
            category: 'Hospitality',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7ed9d42339?w=800&q=80',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            id: 4,
            title: 'Advanced E-commerce',
            description: 'E-commerce platform with secure payment and smart inventory management',
            category: 'E-commerce',
            image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
            gradient: 'from-green-500 to-emerald-500',
        },
    ],
}

export function ShowcaseSlider({ lang }: ShowcaseSliderProps) {
    const items = showcaseItems[lang]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    // Auto-advance slider
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1)
            setCurrentIndex((prev) => (prev + 1) % items.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [items.length])

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        setCurrentIndex((prev) => {
            const next = prev + newDirection
            if (next < 0) return items.length - 1
            if (next >= items.length) return 0
            return next
        })
    }

    const currentItem = items[currentIndex]

    return (
        <section className="py-24 px-4 bg-brand-dark overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        {lang === 'ar' ? 'أعمالنا المميزة' : lang === 'fr' ? 'Nos Projets Phares' : 'Our Featured Work'}
                    </h2>
                    <p className="text-xl text-gray-400">
                        {lang === 'ar' ? 'مشاريع نفخر بإنجازها' : lang === 'fr' ? 'Projets dont nous sommes fiers' : 'Projects We\'re Proud Of'}
                    </p>
                </motion.div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Main Slide */}
                    <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x)

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1)
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1)
                                    }
                                }}
                                className="absolute inset-0"
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${currentItem.gradient} opacity-20`} />

                                {/* Content */}
                                <div className="relative h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
                                    {/* Text Content */}
                                    <div className="flex-1 z-10 mb-8 md:mb-0">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                                        >
                                            <span className="text-sm font-medium text-white">{currentItem.category}</span>
                                        </motion.div>

                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-3xl md:text-5xl font-bold mb-4 text-white"
                                        >
                                            {currentItem.title}
                                        </motion.h3>

                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-lg md:text-xl text-gray-300 max-w-xl"
                                        >
                                            {currentItem.description}
                                        </motion.p>
                                    </div>

                                    {/* Optimization for Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex-1 w-full flex items-center justify-center relative min-h-[300px]"
                                    >
                                        <Image
                                            src={currentItem.image}
                                            alt={currentItem.title}
                                            fill
                                            className="object-cover rounded-xl border-2 border-white/20"
                                            priority
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1)
                                    setCurrentIndex(index)
                                }}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'w-8 bg-brand-emerald'
                                    : 'w-2 bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
