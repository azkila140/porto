'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Code, Zap, Palette, MapPin, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useSlider } from '@/lib/contexts/SliderContext'

interface Slide {
    id: number
    title: string
    subtitle: string
    description: string
    cta: string
    link: string
    icon: any
    gradient: string
    imageUrl: string
}

const iconMap: Record<string, any> = {
    Code, Zap, Palette, MapPin, TrendingUp, Code2: Code, Workflow: Zap
}

const fallbackSlides: Record<string, Slide[]> = {
    ar: [
        {
            id: 1,
            title: 'الهندسة الرقمية والابتكار',
            subtitle: 'نبني الأنظمة التي تقود المستقبل',
            description: 'نحول أفكارك الطموحة إلى واقع رقمي ملموس من خلال تطوير تطبيقات ويب وتطبيقات برمجية متقدمة تعتمد على أحدث التقنيات العالمية.',
            cta: 'اكتشف خدماتنا',
            link: '/ar/services/digital-engineering',
            icon: Code,
            gradient: 'from-blue-600 to-cyan-500',
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80'
        },
        {
            id: 2,
            title: 'الأتمتة والذكاء الاصطناعي',
            subtitle: 'حرر طاقتك الإبداعية واترك الروتين لنا',
            description: 'نقوم بتوظيف قوة الذكاء الاصطناعي وأدوات الأتمتة المتقدمة (Auto-CRM) لزيادة كفاءة فريقك وتقليل التكاليف التشغيلية.',
            cta: 'ابدأ الأتمتة',
            link: '/ar/services/automation',
            icon: Zap,
            gradient: 'from-purple-600 to-pink-500',
            imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80'
        },
        {
            id: 3,
            title: 'الهوية البصرية والبراندات',
            subtitle: 'تصميم يروي قصة نجاحك الفريدة',
            description: 'نحن لا نصمم شعارات فحسب، بل نبني هويات بصرية متكاملة تترك انطباعاً لا ينسى وتخلق رابطاً عاطفياً قوياً مع جمهورك المستهدف.',
            cta: 'شاهد أعمالنا',
            link: '/ar/services/branding',
            icon: Palette,
            gradient: 'from-orange-500 to-red-600',
            imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&q=80'
        }
    ],
    fr: [
        {
            id: 1,
            title: 'Ingénierie Digitale & Innovation',
            subtitle: 'Bâtir les systèmes du futur',
            description: 'Nous transformons vos idées ambitieuses en réalité numérique grâce au développement d\'applications web et logicielles avancées.',
            cta: 'Découvrir',
            link: '/fr/services/digital-engineering',
            icon: Code,
            gradient: 'from-blue-600 to-cyan-500',
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80'
        },
        {
            id: 2,
            title: 'Automatisation & IA',
            subtitle: 'Libérez votre créativité, automatisez le reste',
            description: 'Optimisez vos processus métier avec l\'intelligence artificielle et des solutions d\'automatisation intelligentes.',
            cta: 'Automatiser',
            link: '/fr/services/automation',
            icon: Zap,
            gradient: 'from-purple-600 to-pink-500',
            imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80'
        },
        {
            id: 3,
            title: 'Identité Visuelle & Branding',
            subtitle: 'Un design qui raconte votre histoire',
            description: 'Nous créons des identités visuelles fortes qui captivent votre audience et renforcent votre présence sur le marché.',
            cta: 'Portfolio',
            link: '/fr/services/branding',
            icon: Palette,
            gradient: 'from-orange-500 to-red-600',
            imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&q=80'
        }
    ],
    en: [
        {
            id: 1,
            title: 'Digital Engineering & Innovation',
            subtitle: 'Building the Systems of Tomorrow',
            description: 'Transforming your ambitious ideas into digital reality through advanced web and software development.',
            cta: 'Explore Services',
            link: '/en/services/digital-engineering',
            icon: Code,
            gradient: 'from-blue-600 to-cyan-500',
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80'
        },
        {
            id: 2,
            title: 'Smart Automation & AI',
            subtitle: 'Free Your Creativity, Automate the Rest',
            description: 'Leverage the power of AI and advanced automation tools to increase efficiency and reduce operational costs.',
            cta: 'Start Automating',
            link: '/en/services/automation',
            icon: Zap,
            gradient: 'from-purple-600 to-pink-500',
            imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80'
        },
        {
            id: 3,
            title: 'Brand Identity & Design',
            subtitle: 'Design that Tells Your Unique Story',
            description: 'We build comprehensive visual identities that leave a lasting impression and create emotional bonds with your audience.',
            cta: 'View Work',
            link: '/en/services/branding',
            icon: Palette,
            gradient: 'from-orange-500 to-red-600',
            imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&q=80'
        }
    ]
}

interface HeroSliderProps {
    lang: 'ar' | 'fr' | 'en'
    initialSlides?: any[]
}

export default function HeroSlider({ lang, initialSlides = [] }: HeroSliderProps) {
    // Immediate transformation for SSR
    const transformedSlides: Slide[] = (initialSlides || []).map((d: any) => ({
        id: d.id,
        title: d.title,
        subtitle: d.subtitle,
        description: d.description,
        cta: d.cta,
        link: d.link,
        icon: iconMap[d.icon] || Zap,
        gradient: d.gradient,
        imageUrl: d.imageUrl
    }))

    const activeSlides = transformedSlides.length > 0 ? transformedSlides : (fallbackSlides[lang] || fallbackSlides.en)

    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(0)
    const { setCurrentGradient } = useSlider()

    useEffect(() => {
        if (activeSlides && activeSlides.length > 0) {
            setCurrentGradient(activeSlides[currentSlide].gradient)
        }
    }, [currentSlide, activeSlides, setCurrentGradient])

    useEffect(() => {
        if (!activeSlides || activeSlides.length === 0) return
        const timer = setInterval(() => {
            setDirection(1)
            setCurrentSlide((prev: number) => (prev + 1) % activeSlides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [activeSlides?.length])

    const goToSlide = (index: number) => {
        if (!activeSlides || activeSlides.length === 0) return
        setDirection(index > currentSlide ? 1 : -1)
        setCurrentSlide(index)
    }

    const nextSlide = () => {
        if (!activeSlides || activeSlides.length === 0) return
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % activeSlides.length)
    }

    const prevSlide = () => {
        if (!activeSlides || activeSlides.length === 0) return
        setDirection(-1)
        setCurrentSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length)
    }

    if (!activeSlides || activeSlides.length === 0) return null

    const slide = activeSlides[currentSlide]
    const Icon = slide.icon

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0"
                >
                    {/* Dynamic Rich Background with Images & Luxury Gold Accents */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Background Image Layer */}
                        <motion.div
                            key={`img-${currentSlide}`}
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={slide.imageUrl}
                                alt={slide.title}
                                width={1920}
                                height={1080}
                                sizes="100vw"
                                className="object-cover w-full h-full"
                                priority={currentSlide === 0}
                                quality={85}
                            />
                        </motion.div>

                        {/* Base Layer - Strong Themed Gradients */}
                        <motion.div
                            key={`bg-${currentSlide}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                            style={{
                                background: `linear-gradient(135deg, ${slide.gradient.split(' ')[0].replace('from-', '')} 0%, ${slide.gradient.split(' ')[1]?.replace('to-', '') || 'rgba(0,0,0,0.5)'} 100%)`
                            } as any}
                        />

                        {/* Geometric Grid Pattern Overlay */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `
                                    linear-gradient(rgba(197, 160, 89, 0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(197, 160, 89, 0.3) 1px, transparent 1px)
                                `,
                                backgroundSize: '50px 50px'
                            }}
                        />

                        {/* Luxury Gold Accent Shapes */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-20 right-20 w-64 h-64"
                            style={{
                                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.4) 0%, rgba(197, 160, 89, 0.1) 50%, transparent 100%)',
                                filter: 'blur(30px)'
                            }}
                        />

                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, -10, 0],
                                opacity: [0.25, 0.45, 0.25]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-32 left-32 w-96 h-96"
                            style={{
                                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.35) 0%, rgba(197, 160, 89, 0.08) 50%, transparent 100%)',
                                filter: 'blur(40px)'
                            }}
                        />

                        {/* Animated Theme Color Orbs */}
                        <motion.div
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                                scale: [1, 1.3, 1],
                                opacity: [0.4, 0.6, 0.4]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-1/3 left-1/4 w-[36rem] h-[36rem]"
                            style={{
                                background: `radial-gradient(circle, ${slide.gradient.split(' ')[0].replace('from-', '')} 0%, transparent 70%)`
                            } as any}
                        />

                        {/* Dark Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-center justify-center px-4">
                        <div className="max-w-5xl mx-auto text-center text-white">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    delay: 0.2,
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20
                                }}
                                className="mb-8 inline-block"
                            >
                                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center shadow-2xl shadow-white/10`}>
                                    <Icon className="w-12 h-12" />
                                </div>
                            </motion.div>

                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                            >
                                {slide.title}
                            </motion.h1>

                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                                className="text-2xl md:text-3xl mb-6 font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                            >
                                {slide.subtitle}
                            </motion.p>

                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed"
                            >
                                {slide.description}
                            </motion.p>

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <Link
                                    href={slide.link}
                                    className="group relative inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 overflow-hidden"
                                >
                                    <span className="relative z-10">{slide.cta}</span>
                                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105 active:scale-95"
                                >
                                    {lang === 'ar' ? 'تواصل معنا' : lang === 'fr' ? 'Contactez-nous' : 'Contact Us'}
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="flex justify-center gap-3 mt-8">
                    {activeSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="h-11 w-11 flex items-center justify-center group"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <span className={`h-2 rounded-full transition-all ${currentSlide === index
                                ? 'w-8 bg-white'
                                : 'w-2 bg-white/30 group-hover:bg-white/50'
                                }`}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
