'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Locale } from '@/lib/i18n/config'
import { ExternalLink, Github } from 'lucide-react'

interface WorkPageProps {
    params: { lang: Locale }
}

const projects = {
    ar: [
        {
            id: 1,
            title: 'منصة طبية متكاملة',
            category: 'قطاع طبي',
            description: 'نظام حجز وإدارة عيادات مع تكامل كامل مع الدفع الإلكتروني وإدارة المواعيد',
            tags: ['Next.js', 'Supabase', 'Stripe', 'TypeScript'],
            gradient: 'from-blue-500 to-cyan-500',
            year: '2024',
        },
        {
            id: 2,
            title: 'تطبيق عقاري فاخر',
            category: 'عقارات',
            description: 'منصة عرض وبيع العقارات الفاخرة مع جولات افتراضية 360 درجة',
            tags: ['React', 'Three.js', 'Node.js', 'MongoDB'],
            gradient: 'from-purple-500 to-pink-500',
            year: '2024',
        },
        {
            id: 3,
            title: 'نظام مطاعم ذكي',
            category: 'مطاعم وفنادق',
            description: 'إدارة متكاملة للطلبات والحجوزات مع قائمة رقمية تفاعلية',
            tags: ['Vue.js', 'Firebase', 'PWA'],
            gradient: 'from-orange-500 to-red-500',
            year: '2023',
        },
        {
            id: 4,
            title: 'متجر إلكتروني متقدم',
            category: 'تجارة إلكترونية',
            description: 'منصة تجارة إلكترونية مع نظام دفع آمن وإدارة مخزون ذكية',
            tags: ['Next.js', 'Shopify', 'Tailwind'],
            gradient: 'from-green-500 to-emerald-500',
            year: '2023',
        },
        {
            id: 5,
            title: 'منصة تعليمية',
            category: 'تعليم',
            description: 'نظام إدارة تعليمي مع فصول افتراضية وتتبع تقدم الطلاب',
            tags: ['React', 'WebRTC', 'PostgreSQL'],
            gradient: 'from-indigo-500 to-purple-500',
            year: '2023',
        },
        {
            id: 6,
            title: 'تطبيق لوجستي',
            category: 'لوجستيات',
            description: 'نظام تتبع الشحنات وإدارة الأسطول مع خرائط تفاعلية',
            tags: ['Flutter', 'Google Maps', 'Firebase'],
            gradient: 'from-yellow-500 to-orange-500',
            year: '2024',
        },
    ],
    fr: [
        {
            id: 1,
            title: 'Plateforme Médicale Complète',
            category: 'Secteur Médical',
            description: 'Système de réservation et gestion de cliniques avec paiement intégré',
            tags: ['Next.js', 'Supabase', 'Stripe', 'TypeScript'],
            gradient: 'from-blue-500 to-cyan-500',
            year: '2024',
        },
        {
            id: 2,
            title: 'Application Immobilière de Luxe',
            category: 'Immobilier',
            description: 'Plateforme de vente immobilière avec visites virtuelles 360°',
            tags: ['React', 'Three.js', 'Node.js', 'MongoDB'],
            gradient: 'from-purple-500 to-pink-500',
            year: '2024',
        },
        {
            id: 3,
            title: 'Système Restaurant Intelligent',
            category: 'Hôtellerie-Restauration',
            description: 'Gestion complète des commandes avec menu digital interactif',
            tags: ['Vue.js', 'Firebase', 'PWA'],
            gradient: 'from-orange-500 to-red-500',
            year: '2023',
        },
        {
            id: 4,
            title: 'E-commerce Avancé',
            category: 'E-commerce',
            description: 'Plateforme e-commerce avec paiement sécurisé et gestion du stock',
            tags: ['Next.js', 'Shopify', 'Tailwind'],
            gradient: 'from-green-500 to-emerald-500',
            year: '2023',
        },
        {
            id: 5,
            title: 'Plateforme Éducative',
            category: 'Éducation',
            description: 'Système de gestion éducatif avec classes virtuelles',
            tags: ['React', 'WebRTC', 'PostgreSQL'],
            gradient: 'from-indigo-500 to-purple-500',
            year: '2023',
        },
        {
            id: 6,
            title: 'Application Logistique',
            category: 'Logistique',
            description: 'Système de suivi des expéditions avec cartes interactives',
            tags: ['Flutter', 'Google Maps', 'Firebase'],
            gradient: 'from-yellow-500 to-orange-500',
            year: '2024',
        },
    ],
    en: [
        {
            id: 1,
            title: 'Complete Medical Platform',
            category: 'Medical Sector',
            description: 'Clinic booking and management system with integrated payment',
            tags: ['Next.js', 'Supabase', 'Stripe', 'TypeScript'],
            gradient: 'from-blue-500 to-cyan-500',
            year: '2024',
        },
        {
            id: 2,
            title: 'Luxury Real Estate App',
            category: 'Real Estate',
            description: 'Premium property platform with 360° virtual tours',
            tags: ['React', 'Three.js', 'Node.js', 'MongoDB'],
            gradient: 'from-purple-500 to-pink-500',
            year: '2024',
        },
        {
            id: 3,
            title: 'Smart Restaurant System',
            category: 'Hospitality',
            description: 'Complete order management with interactive digital menu',
            tags: ['Vue.js', 'Firebase', 'PWA'],
            gradient: 'from-orange-500 to-red-500',
            year: '2023',
        },
        {
            id: 4,
            title: 'Advanced E-commerce',
            category: 'E-commerce',
            description: 'E-commerce platform with secure payment and inventory',
            tags: ['Next.js', 'Shopify', 'Tailwind'],
            gradient: 'from-green-500 to-emerald-500',
            year: '2023',
        },
        {
            id: 5,
            title: 'Educational Platform',
            category: 'Education',
            description: 'Learning management system with virtual classrooms',
            tags: ['React', 'WebRTC', 'PostgreSQL'],
            gradient: 'from-indigo-500 to-purple-500',
            year: '2023',
        },
        {
            id: 6,
            title: 'Logistics Application',
            category: 'Logistics',
            description: 'Shipment tracking system with interactive maps',
            tags: ['Flutter', 'Google Maps', 'Firebase'],
            gradient: 'from-yellow-500 to-orange-500',
            year: '2024',
        },
    ],
}

export default function WorkPage({ params }: WorkPageProps) {
    const [filter, setFilter] = useState<string>('all')
    const currentProjects = projects[params.lang]

    const categories = {
        ar: ['الكل', 'قطاع طبي', 'عقارات', 'مطاعم وفنادق', 'تجارة إلكترونية', 'تعليم', 'لوجستيات'],
        fr: ['Tous', 'Secteur Médical', 'Immobilier', 'Hôtellerie-Restauration', 'E-commerce', 'Éducation', 'Logistique'],
        en: ['All', 'Medical Sector', 'Real Estate', 'Hospitality', 'E-commerce', 'Education', 'Logistics'],
    }

    const filteredProjects = filter === 'all' || filter === categories[params.lang][0]
        ? currentProjects
        : currentProjects.filter(p => p.category === filter)

    return (
        <main className="min-h-screen bg-brand-dark">
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {params.lang === 'ar' ? 'أعمالنا' : params.lang === 'fr' ? 'Nos Projets' : 'Our Work'}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            {params.lang === 'ar'
                                ? 'مشاريع نفخر بإنجازها عبر مختلف الصناعات'
                                : params.lang === 'fr'
                                    ? 'Projets dont nous sommes fiers dans divers secteurs'
                                    : 'Projects we\'re proud of across various industries'}
                        </p>
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {categories[params.lang].map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setFilter(index === 0 ? 'all' : category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${(filter === 'all' && index === 0) || filter === category
                                        ? 'bg-brand-emerald text-white'
                                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-emerald/50 transition-all duration-300"
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative p-6">
                                    {/* Year Badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                                        {project.year}
                                    </div>

                                    {/* Category */}
                                    <div className="mb-3">
                                        <span className="text-sm text-brand-emerald font-medium">{project.category}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-emerald transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        <button className="flex items-center gap-2 px-4 py-2 bg-brand-emerald/20 hover:bg-brand-emerald/30 rounded-lg text-sm font-medium text-brand-emerald transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                            {params.lang === 'ar' ? 'عرض المشروع' : params.lang === 'fr' ? 'Voir le projet' : 'View Project'}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
