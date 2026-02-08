'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, TrendingUp } from 'lucide-react'

interface CaseStudy {
    title: string
    client: string
    challenge: string
    solution: string
    results: string[]
    image: string
    tags: string[]
}

interface CaseStudiesProps {
    studies: CaseStudy[]
    title: string
}

export default function CaseStudies({ studies, title }: CaseStudiesProps) {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">{title}</h2>

                <div className="space-y-16">
                    {studies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-emerald/50 transition-all duration-500"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Image */}
                                <div className="relative h-64 md:h-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/20 to-cyan-500/20 mix-blend-overlay z-10" />
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {study.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-brand-emerald/20 text-brand-emerald text-xs font-semibold rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-2">{study.title}</h3>
                                    <p className="text-brand-emerald font-semibold mb-6">{study.client}</p>

                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Challenge</h4>
                                            <p className="text-gray-300">{study.challenge}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Solution</h4>
                                            <p className="text-gray-300">{study.solution}</p>
                                        </div>
                                    </div>

                                    <div className="border-t border-white/10 pt-6">
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4" />
                                            Results
                                        </h4>
                                        <ul className="space-y-2">
                                            {study.results.map((result, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-300">
                                                    <span className="text-brand-emerald mt-1">✓</span>
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
