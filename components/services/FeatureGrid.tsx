'use client'

import { motion } from 'framer-motion'
import {
    Workflow, Link2, Bot, GitBranch, Repeat, Zap,
    Palette, Pen, Sparkles, Target, TrendingUp,
    Code, Database, Cloud, Shield, Smartphone,
    MapPin, Search, BarChart, MessageSquare, Clock,
    LucideIcon
} from 'lucide-react'

// Icon mapping for client-side rendering
const iconMap: Record<string, LucideIcon> = {
    Workflow, Link2, Bot, GitBranch, Repeat, Zap,
    Palette, Pen, Sparkles, Target, TrendingUp,
    Code, Database, Cloud, Shield, Smartphone,
    MapPin, Search, BarChart, MessageSquare, Clock,
}

interface Feature {
    icon: string  // Changed to accept icon name as string
    title: string
    description: string
}

interface FeatureGridProps {
    features: Feature[]
    title: string
    subtitle?: string
}

export default function FeatureGrid({ features, title, subtitle }: FeatureGridProps) {
    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
                    {subtitle && <p className="text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = iconMap[feature.icon] || Workflow  // Map string to component
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-brand-emerald/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-emerald/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                                <div className="relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-brand-emerald to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-emerald transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
