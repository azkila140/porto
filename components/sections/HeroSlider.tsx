'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Code, Zap, Palette, MapPin, TrendingUp } from 'lucide-react'
import Link from 'next/link'

interface Slide {
    id: number
    title: {
        ar: string
        fr: string
        en: string
    }
    subtitle: {
        ar: string
        fr: string
        en: string
    }
    description: {
        ar: string
        fr: string
        en: string
    }
    cta: {
        ar: string
        fr: string
        en: string
    }
    link: string
    icon: any
    gradient: string
    imageUrl: string
}

const slides: Slide[] = [
    {
        id: 1,
        title: {
            ar: 'الهندسة الرقمية',
            fr: 'Ingénierie Numérique',
            en: 'Digital Engineering'
        },
        subtitle: {
            ar: 'نبني أنظمة ويب وتطبيقات متطورة',
            fr: 'Systèmes web et applications avancées',
            en: 'Advanced web systems and applications'
        },
        description: {
            ar: 'تطوير مواقع وتطبيقات مخصصة بتقنيات حديثة لتحويل أعمالك رقمياً',
            fr: 'Développement sur mesure avec technologies modernes pour digitaliser votre entreprise',
            en: 'Custom development with modern tech to digitalize your business'
        },
        cta: {
            ar: 'استكشف الحلول',
            fr: 'Découvrir',
            en: 'Explore Solutions'
        },
        link: '/services/digital-engineering',
        icon: Code,
        gradient: 'from-blue-600 to-cyan-500',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80'
    },
    {
        id: 2,
        title: {
            ar: 'الأتمتة والربط',
            fr: 'Automatisation',
            en: 'Automation & Integration'
        },
        subtitle: {
            ar: 'نربط أنظمتك ونؤتمت عملياتك',
            fr: 'Connectez vos systèmes et automatisez',
            en: 'Connect systems and automate processes'
        },
        description: {
            ar: 'حلول n8n، ربط APIs، شات بوت ذكي، وأتمتة سير العمل',
            fr: 'Solutions n8n, APIs, chatbots intelligents et workflows',
            en: 'n8n solutions, APIs, smart chatbots and workflows'
        },
        cta: {
            ar: 'اكتشف المزيد',
            fr: 'En savoir plus',
            en: 'Learn More'
        },
        link: '/services/automation',
        icon: Zap,
        gradient: 'from-purple-600 to-pink-500',
        imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1920&q=80'
    },
    {
        id: 3,
        title: {
            ar: 'الهوية والتصميم',
            fr: 'Branding & Design',
            en: 'Branding & Design'
        },
        subtitle: {
            ar: 'نصمم هويتك البصرية الاحترافية',
            fr: 'Identité visuelle professionnelle',
            en: 'Professional visual identity'
        },
        description: {
            ar: 'شعارات، هوية بصرية، تصاميم الافتتاح، وكل ما تحتاجه لعلامتك التجارية',
            fr: 'Logos, identité visuelle, designs de lancement et plus',
            en: 'Logos, visual identity, launch designs and more'
        },
        cta: {
            ar: 'شاهد أعمالنا',
            fr: 'Voir portfolio',
            en: 'View Portfolio'
        },
        link: '/services/branding',
        icon: Palette,
        gradient: 'from-orange-600 to-red-500',
        imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80'
    },
    {
        id: 4,
        title: {
            ar: 'خرائط جوجل والسيو',
            fr: 'Google Maps & SEO',
            en: 'Google Maps & SEO'
        },
        subtitle: {
            ar: 'اظهر في نتائج البحث المحلية',
            fr: 'Apparaissez dans les recherches locales',
            en: 'Appear in local search results'
        },
        description: {
            ar: 'توثيق خرائط جوجل، تحسين السيو المحلي، والرقمنة الكاملة',
            fr: 'Certification Google Maps, SEO local et digitalisation',
            en: 'Google Maps verification, local SEO and digitalization'
        },
        cta: {
            ar: 'ابدأ الآن',
            fr: 'Commencer',
            en: 'Get Started'
        },
        link: '/services/google-maps-seo',
        icon: MapPin,
        gradient: 'from-green-600 to-emerald-500',
        imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1920&q=80'
    },
    {
        id: 5,
        title: {
            ar: 'النمو والمحتوى',
            fr: 'Croissance & Contenu',
            en: 'Growth & Content'
        },
        subtitle: {
            ar: 'نساعدك على النمو والانتشار',
            fr: 'Croissance et visibilité',
            en: 'Growth and visibility'
        },
        description: {
            ar: 'إنتاج فيديو، إدارة حملات، سيو تقني، وتسويق محتوى',
            fr: 'Production vidéo, campagnes, SEO technique et marketing',
            en: 'Video production, campaigns, technical SEO and marketing'
        },
        cta: {
            ar: 'تواصل معنا',
            fr: 'Contactez-nous',
            en: 'Contact Us'
        },
        link: '/services/growth-content',
        icon: TrendingUp,
        gradient: 'from-indigo-600 to-blue-500',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80'
    }
]

interface HeroSliderProps {
    lang: 'ar' | 'fr' | 'en'
}

export default function HeroSlider({ lang }: HeroSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1)
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const goToSlide = (index: number) => {
        setDirection(index > currentSlide ? 1 : -1)
        setCurrentSlide(index)
    }

    const nextSlide = () => {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const slide = slides[currentSlide]
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
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src={slide.imageUrl}
                            alt={slide.title[lang]}
                            className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-80`} />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-center justify-center px-4">
                        <div className="max-w-5xl mx-auto text-center text-white">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring' }}
                                className="mb-8 inline-block"
                            >
                                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}>
                                    <Icon className="w-12 h-12" />
                                </div>
                            </motion.div>

                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-7xl font-bold mb-4"
                            >
                                {slide.title[lang]}
                            </motion.h1>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-2xl md:text-3xl mb-6 font-semibold"
                            >
                                {slide.subtitle[lang]}
                            </motion.p>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90"
                            >
                                {slide.description[lang]}
                            </motion.p>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link
                                    href={slide.link}
                                    className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
                                >
                                    {slide.cta[lang]}
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
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
