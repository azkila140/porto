'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface Step {
    number: number
    title: string
    description: string
    duration: string
}

interface ProcessTimelineProps {
    steps: Step[]
    title: string
}

export default function ProcessTimeline({ steps, title }: ProcessTimelineProps) {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">{title}</h2>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex gap-8 mb-12 last:mb-0"
                        >
                            {/* Timeline Line */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-brand-emerald to-transparent" />
                            )}

                            {/* Step Number */}
                            <div className="relative flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-brand-emerald to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-brand-emerald/50">
                                    <span className="text-2xl font-bold text-white">{step.number}</span>
                                </div>
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-emerald/20 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-brand-emerald" />
                                </div>
                            </div>

                            {/* Step Content */}
                            <div className="flex-1 pb-12">
                                <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-brand-emerald/50 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                                        <span className="px-4 py-1 bg-brand-emerald/20 text-brand-emerald text-sm font-semibold rounded-full">
                                            {step.duration}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
