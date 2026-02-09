'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { servicesData } from '@/lib/data/services'
import type { Locale } from '@/lib/i18n/config'

interface RelatedServicesProps {
    currentServiceId: string
    lang: Locale
}

const titles = {
    ar: 'خدمات أخرى قد تهمك',
    fr: 'Autres Services',
    en: 'Related Services'
}

const ctaText = {
    ar: 'اعرف المزيد',
    fr: 'En savoir plus',
    en: 'Learn more'
}

export default function RelatedServices({ currentServiceId, lang }: RelatedServicesProps) {
    // Filter out current service and take 3 items
    // If not enough items, it will just take what's available
    const relatedServices = (servicesData[lang] || servicesData.en)
        .filter(s => s.id !== currentServiceId)
        .slice(0, 3)

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {titles[lang]}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedServices.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={service.imageUrl}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                                </div>

                                <div className="p-6">
                                    <div className="mb-4 inline-flex p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                        {service.description}
                                    </p>

                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center text-brand-gold font-semibold hover:gap-2 transition-all"
                                    >
                                        {ctaText[lang]}
                                        <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'mr-1 rotate-180' : 'ml-1'}`} />
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
