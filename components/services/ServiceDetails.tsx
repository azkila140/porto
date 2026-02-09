'use client'

import { motion } from 'framer-motion'

interface ServiceDetailsProps {
    title: string
    paragraphs: string[]
    lang: 'ar' | 'fr' | 'en'
}

export default function ServiceDetails({ title, paragraphs, lang }: ServiceDetailsProps) {
    const isRtl = lang === 'ar'

    return (
        <section className="py-20 bg-white dark:bg-brand-dark/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`${isRtl ? 'text-right' : 'text-left'}`}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white border-b-2 border-brand-gold/30 pb-4 inline-block">
                            {title}
                        </h2>
                        <div className="space-y-6">
                            {paragraphs.map((p, index) => (
                                <p
                                    key={index}
                                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                                >
                                    {p}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
