'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Code, Zap, Palette, MapPin, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useSlider } from '@/lib/contexts/SliderContext'

interface Slide {
    id: number
    title: { ar: string; fr: string; en: string }
    subtitle: { ar: string; fr: string; en: string }
    description: { ar: string; fr: string; en: string }
    cta: { ar: string; fr: string; en: string }
    link: string
    icon: any
    gradient: string
    imageUrl: string
}

const iconMap: Record<string, any> = {
    Code, Zap, Palette, MapPin, TrendingUp
}

const fallbackSlides: Slide[] = [
    {
        id: 1,
        title: { ar: 'الهندسة الرقمية', fr: 'Ingénierie Numérique', en: 'Digital Engineering' },
        subtitle: { ar: 'نبني أنظمة ويب وتطبيقات متطورة', fr: 'Systèmes web et applications avancées', en: 'Advanced web systems and applications' },
        description: { ar: 'تطوير مواقع وتطبيقات مخصصة بتقنيات حديثة لتحويل أعمالك رقمياً', fr: 'Développement sur mesure avec technologies modernes pour digitaliser votre entreprise', en: 'Custom development with modern tech to digitalize your business' },
        cta: { ar: 'استكشف الحلول', fr: 'Découvrir', en: 'Explore Solutions' },
        link: '/services/digital-engineering',
        icon: Code,
        gradient: 'from-blue-600 to-cyan-500',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80'
    },
    {
        id: 2,
        title: { ar: 'الأتمتة والربط', fr: 'Automatisation', en: 'Automation & Integration' },
        subtitle: { ar: 'نربط أنظمتك ونؤتمت عملياتك', fr: 'Connectez vos systèmes et automatisez', en: 'Connect systems and automate processes' },
        description: { ar: 'حلول n8n، ربط APIs، شات بوت ذكي، وأتمتة سير العمل', fr: 'Solutions n8n, APIs, chatbots intelligents et workflows', en: 'n8n solutions, APIs, smart chatbots and workflows' },
        cta: { ar: 'اكتشف المزيد', fr: 'En savoir plus', en: 'Learn More' },
        link: '/services/automation',
        icon: Zap,
        gradient: 'from-purple-600 to-pink-500',
        imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1920&q=80'
    },
    {
        id: 3,
        title: { ar: 'الهوية والتصميم', fr: 'Branding & Design', en: 'Branding & Design' },
        subtitle: { ar: 'نصمم هويتك البصرية الاحترافية', fr: 'Identité visuelle professionnelle', en: 'Professional visual identity' },
        description: { ar: 'شعارات، هوية بصرية، تصاميم الافتتاح، وكل ما تحتاجه لعلامتك التجارية', fr: 'Logos, identité visuelle, designs de lancement et plus', en: 'Logos, visual identity, launch designs and more' },
        cta: { ar: 'شاهد أعمالنا', fr: 'Voir portfolio', en: 'View Portfolio' },
        link: '/services/branding',
        icon: Palette,
        gradient: 'from-orange-600 to-red-500',
        imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80'
    },
    {
        id: 4,
        title: { ar: 'خرائط جوجل والسيو', fr: 'Google Maps & SEO', en: 'Google Maps & SEO' },
        subtitle: { ar: 'اظهر في نتائج البحث المحلية', fr: 'Apparaissez dans les recherches locales', en: 'Appear in local search results' },
        description: { ar: 'توثيق خرائط جوجل، تحسين السيو المحلي، والرقمنة الكاملة', fr: 'Certification Google Maps, SEO local et digitalisation', en: 'Google Maps verification, local SEO and digitalization' },
        cta: { ar: 'ابدأ الآن', fr: 'Commencer', en: 'Get Started' },
        link: '/services/google-maps-seo',
        icon: MapPin,
        gradient: 'from-green-600 to-emerald-500',
        imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1920&q=80'
    },
    {
        id: 5,
        title: { ar: 'النمو والمحتوى', fr: 'Croissance & Contenu', en: 'Growth & Content' },
        subtitle: { ar: 'نساعدك على النمو والانتشار', fr: 'Croissance et visibilité', en: 'Growth and visibility' },
        description: { ar: 'إنتاج فيديو، إدارة حملات، سيو تقني، وتسويق محتوى', fr: 'Production vidéo, campagnes, SEO technique et marketing', en: 'Video production, campaigns, technical SEO and marketing' },
        cta: { ar: 'تواصل معنا', fr: 'Contactez-nous', en: 'Contact Us' },
        link: '/services/growth-content',
        icon: TrendingUp,
        gradient: 'from-indigo-600 to-blue-500',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80'
    }
]

interface HeroSliderProps {
    lang: 'ar' | 'fr' | 'en'
    initialSlides?: any[]
}

export default function HeroSlider({ lang, initialSlides = [] }: HeroSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(0)
    const [transformedSlides, setTransformedSlides] = useState<Slide[]>([])
    const { setCurrentGradient } = useSlider()

    useEffect(() => {
        if (initialSlides && initialSlides.length > 0) {
            const transformed = initialSlides.map((d: any) => ({
                id: d.id,
                title: { ar: d.title_ar, fr: d.title_fr, en: d.title_en },
                subtitle: { ar: d.subtitle_ar, fr: d.subtitle_fr, en: d.subtitle_en },
                description: { ar: d.description_ar, fr: d.description_fr, en: d.description_en },
                cta: { ar: d.cta_ar, fr: d.cta_fr, en: d.cta_en },
                link: d.link,
                icon: iconMap[d.icon_name] || Zap,
                gradient: d.gradient_class,
                imageUrl: d.image_url
            }))
            setTransformedSlides(transformed)
        }
    }, [initialSlides])

    const activeSlides = transformedSlides.length > 0 ? transformedSlides : fallbackSlides

    useEffect(() => {
        if (activeSlides.length > 0) {
            setCurrentGradient(activeSlides[currentSlide].gradient)
        }
    }, [currentSlide, activeSlides, setCurrentGradient])

    useEffect(() => {
        if (activeSlides.length === 0) return
        const timer = setInterval(() => {
            setDirection(1)
            setCurrentSlide((prev) => (prev + 1) % activeSlides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [activeSlides.length])

    const goToSlide = (index: number) => {
        if (activeSlides.length === 0) return
        setDirection(index > currentSlide ? 1 : -1)
        setCurrentSlide(index)
    }

    const nextSlide = () => {
        if (activeSlides.length === 0) return
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % activeSlides.length)
    }

    const prevSlide = () => {
        if (activeSlides.length === 0) return
        setDirection(-1)
        setCurrentSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length)
    }

    if (activeSlides.length === 0) return null

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
                                alt={slide.title[lang]}
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
                                background: currentSlide === 0
                                    ? 'linear-gradient(135deg, rgba(30, 58, 138, 0.7) 0%, rgba(30, 64, 175, 0.7) 25%, rgba(59, 130, 246, 0.6) 50%, rgba(96, 165, 250, 0.5) 100%)'
                                    : currentSlide === 1
                                        ? 'linear-gradient(135deg, rgba(88, 28, 135, 0.7) 0%, rgba(126, 34, 206, 0.7) 25%, rgba(168, 85, 247, 0.6) 50%, rgba(192, 132, 252, 0.5) 100%)'
                                        : currentSlide === 2
                                            ? 'linear-gradient(135deg, rgba(154, 52, 18, 0.7) 0%, rgba(234, 88, 12, 0.7) 25%, rgba(249, 115, 22, 0.6) 50%, rgba(251, 146, 60, 0.5) 100%)'
                                            : currentSlide === 3
                                                ? 'linear-gradient(135deg, rgba(6, 95, 70, 0.7) 0%, rgba(5, 150, 105, 0.7) 25%, rgba(16, 185, 129, 0.6) 50%, rgba(52, 211, 153, 0.5) 100%)'
                                                : 'linear-gradient(135deg, rgba(67, 56, 202, 0.7) 0%, rgba(79, 70, 229, 0.7) 25%, rgba(99, 102, 241, 0.6) 50%, rgba(129, 140, 248, 0.5) 100%)'
                            }}
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
                                background: currentSlide === 0
                                    ? 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)'
                                    : currentSlide === 1
                                        ? 'radial-gradient(circle, rgba(192, 132, 252, 0.3) 0%, transparent 70%)'
                                        : currentSlide === 2
                                            ? 'radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)'
                                            : currentSlide === 3
                                                ? 'radial-gradient(circle, rgba(52, 211, 153, 0.3) 0%, transparent 70%)'
                                                : 'radial-gradient(circle, rgba(129, 140, 248, 0.3) 0%, transparent 70%)',
                                filter: 'blur(50px)'
                            }}
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
                                {slide.title[lang]}
                            </motion.h1>

                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                                className="text-2xl md:text-3xl mb-6 font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                            >
                                {slide.subtitle[lang]}
                            </motion.p>

                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed"
                            >
                                {slide.description[lang]}
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
                                    <span className="relative z-10">{slide.cta[lang]}</span>
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
