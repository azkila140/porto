'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Rocket, Award, Globe, ArrowRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'

interface AboutPageProps {
    params: { lang: Locale }
}

const content = {
    ar: {
        title: 'من نحن',
        subtitle: 'نبتكر للمستقبل',
        description: 'نحن شركة تقنية رائدة نسعى لتمكين الشركات من خلال حلول رقمية مبتكرة واستراتيجيات نمو ذكية.',
        stats: [
            { label: 'عام من الخبرة', value: '+15', icon: Award },
            { label: 'مشروع ناجح', value: '+20', icon: Rocket },
            { label: 'عميل سعيد', value: '+50', icon: Users },
            { label: 'دولة', value: '8', icon: Globe },
        ],
        leadership: {
            title: 'القيادة',
            ceo: {
                name: 'المهدي نور الدين',
                role: 'المدير التنفيذي ومؤسس الشركة',
                bio: 'مع أكثر من 15 عاماً من الخبرة في تطوير Full Stack وإدارة البنية التحتية لتكنولوجيا المعلومات، يقود المهدي Nexus Logic برؤية واضحة لتقديم حلول رقمية عالية الأداء. صمم ونشر أكثر من 20 تطبيق ويب مخصص باستخدام MERN stack و Next.js، مع التركيز بشدة على تحسين التحويل والسرعة.',
                expertise: [
                    'تطوير تطبيقات الويب الكاملة',
                    'إدارة البنية التحتية السحابية',
                    'هندسة الأداء',
                    'استراتيجيات تحسين محركات البحث والتحويل'
                ]
            }
        },
        story: {
            title: 'قصتنا',
            text: 'تأسست Nexus Logic برؤية واضحة: سد الفجوة بين التكنولوجيا المعقدة واحتياجات الأعمال العملية. بدأنا كفريق صغير من المطورين والمصممين الشغوفين، ونمونا لنصبح شريكاً استراتيجياً للعديد من المؤسسات في الشرق الأوسط وأوروبا.',
        },
        values: {
            title: 'قيمنا',
            items: [
                { title: 'الابتكار', desc: 'نسعى دائماً لتقديم حلول إبداعية خارج الصندوق' },
                { title: 'الجودة', desc: 'لا نتنازل عن أعلى معايير الجودة في كل سطر كود' },
                { title: 'الشفافية', desc: 'نؤمن بالتواصل المفتوح والصادق مع عملائنا' },
                { title: 'الشغف', desc: 'نحب ما نعمل، وهذا ينعكس في نتائجنا' },
            ]
        },
        cta: {
            title: 'انضم إلينا في رحلة النجاح',
            btn: 'تواصل معنا'
        }
    },
    fr: {
        title: 'À Propos',
        subtitle: 'Innover pour le futur',
        description: 'Nous sommes une entreprise technologique leader dédiée à l\'autonomisation des entreprises grâce à des solutions numériques innovantes.',
        stats: [
            { label: 'Années d\'expérience', value: '+15', icon: Award },
            { label: 'Projets réussis', value: '+20', icon: Rocket },
            { label: 'Clients satisfaits', value: '+50', icon: Users },
            { label: 'Pays', value: '8', icon: Globe },
        ],
        leadership: {
            title: 'Leadership',
            ceo: {
                name: 'El Mehdi Noreddine',
                role: 'PDG et Fondateur',
                bio: 'Avec plus de 15 ans d\'expérience en développement Full Stack et en gestion d\'infrastructure IT, El Mehdi dirige Nexus Logic avec une vision claire de fournir des solutions numériques haute performance. Il a conçu et déployé plus de 20 applications web sur mesure utilisant MERN stack et Next.js, avec un fort accent sur l\'optimisation des conversions et la vitesse.',
                expertise: [
                    'Développement d\'applications web complètes',
                    'Gestion d\'infrastructure cloud',
                    'Architecture de performance',
                    'Stratégies SEO et d\'optimisation des conversions'
                ]
            }
        },
        story: {
            title: 'Notre Histoire',
            text: 'Nexus Logic a été fondée avec une vision claire : combler le fossé entre la technologie complexe et les besoins pratiques des entreprises. Nous avons commencé comme une petite équipe de développeurs passionnés et nous sommes devenus un partenaire stratégique pour de nombreuses organisations.',
        },
        values: {
            title: 'Nos Valeurs',
            items: [
                { title: 'Innovation', desc: 'Nous cherchons toujours des solutions créatives' },
                { title: 'Qualité', desc: 'Nous ne faisons aucun compromis sur les standards' },
                { title: 'Transparence', desc: 'Nous croyons en une communication ouverte' },
                { title: 'Passion', desc: 'Nous aimons ce que nous faisons' },
            ]
        },
        cta: {
            title: 'Rejoignez-nous vers le succès',
            btn: 'Contactez-nous'
        }
    },
    en: {
        title: 'About Us',
        subtitle: 'Innovating for the Future',
        description: 'We are a leading tech company dedicated to empowering businesses through innovative digital solutions and smart growth strategies.',
        stats: [
            { label: 'Years Experience', value: '+15', icon: Award },
            { label: 'Successful Projects', value: '+20', icon: Rocket },
            { label: 'Happy Clients', value: '+50', icon: Users },
            { label: 'Countries', value: '8', icon: Globe },
        ],
        leadership: {
            title: 'Leadership',
            ceo: {
                name: 'El Mehdi Noreddine',
                role: 'CEO & Founder',
                bio: 'With over 15 years of experience in Full Stack development and IT infrastructure management, El Mehdi leads Nexus Logic with a clear vision to deliver high-performance digital solutions. He designed and deployed 20+ custom web applications using MERN stack and Next.js, focusing heavily on conversion optimization and speed.',
                expertise: [
                    'Full Stack Web Application Development',
                    'Cloud Infrastructure Management',
                    'Performance Engineering',
                    'SEO & Conversion Optimization Strategies'
                ]
            }
        },
        story: {
            title: 'Our Story',
            text: 'Nexus Logic was founded with a clear vision: to bridge the gap between complex technology and practical business needs. We started as a small team of passionate developers and grew to become a strategic partner for many organizations across the Middle East and Europe.',
        },
        values: {
            title: 'Our Values',
            items: [
                { title: 'Innovation', desc: 'We always seek creative out-of-the-box solutions' },
                { title: 'Quality', desc: 'We never compromise on the highest standards' },
                { title: 'Transparency', desc: 'We believe in open and honest communication' },
                { title: 'Passion', desc: 'We love what we do, and it shows in our results' },
            ]
        },
        cta: {
            title: 'Join us on the journey to success',
            btn: 'Contact Us'
        }
    },
}

export default function AboutPage({ params }: AboutPageProps) {
    const { lang } = params
    const t = content[lang] || content.en

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald/5 to-transparent" />
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-brand-emerald/10 text-brand-emerald text-sm font-medium mb-6"
                    >
                        {t.subtitle}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                    >
                        {t.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
                    >
                        {t.description}
                    </motion.p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-white/10 pt-12">
                        {t.stats.map((stat, index) => {
                            const Icon = stat.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 mx-auto bg-white/5 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-brand-emerald" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">{t.story.title}</h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                {t.story.text}
                            </p>
                            <div className="h-1 w-20 bg-brand-emerald rounded-full" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-emerald/20 to-blue-500/20 border border-white/10"
                        >
                            {/* Placeholder for About Image - could use a real image later */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                <Rocket className="w-32 h-32" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">{t.leadership.title}</h2>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-[#C5A059]/10 to-white/5 border border-[#C5A059]/20"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#C5A059]/20">
                                        <Image
                                            src="/images/team/ceo-profile.jpg"
                                            alt={t.leadership.ceo.name}
                                            width={128}
                                            height={128}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">{t.leadership.ceo.name}</h3>
                                    <p className="text-[#C5A059] font-semibold mb-4">{t.leadership.ceo.role}</p>
                                    <p className="text-gray-300 leading-relaxed mb-6">{t.leadership.ceo.bio}</p>
                                    <div>
                                        <h4 className="text-white font-semibold mb-3">
                                            {lang === 'ar' ? 'مجالات الخبرة:' : lang === 'fr' ? 'Expertise:' : 'Expertise:'}
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {t.leadership.ceo.expertise.map((item: string, index: number) => (
                                                <li key={index} className="flex items-center gap-2 text-gray-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">{t.values.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.values.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-emerald/50 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="p-12 rounded-3xl bg-gradient-to-br from-brand-emerald/20 to-blue-500/20 border border-brand-emerald/20">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            {t.cta.title}
                        </h2>
                        <a
                            href={`/${lang}/contact`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-emerald text-white rounded-lg font-bold hover:bg-emerald-600 transition-colors"
                        >
                            {t.cta.btn}
                            <ArrowRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
