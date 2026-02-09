'use client'

import { motion } from 'framer-motion'
import type { Locale } from '@/lib/i18n/config'

const content = {
    ar: {
        title: 'نيكسس لوجيك: شريكك الاستراتيجي للتحول الرقمي',
        paragraphs: [
            'تعد نيكسس لوجيك (Nexus Logic) الوكالة المتكاملة الرائدة في تقديم الحلول الرقمية المبتكرة والخدمات التسويقية عالية الأداء في منطقة الشرق الأوسط وشمال أفريقيا. نحن نتخصص في تحويل الرؤى الطموحة إلى واقع ملموس من خلال هندسة البرمجيات المتقدمة، وتصميم الهوية البصرية الفريدة، وأتمتة العمليات التجارية الذكية.',
            'كوكالة "Full-Stack Agency"، نقدم منهجية شاملة تبدأ من فهم عميق لأهداف عملك وصولاً إلى التنفيذ التقني الدقيق. تشمل خدماتنا تطوير تطبيقات الويب المعقدة باستخدام Next.js، وتحسين محركات البحث المحلي (SEO) عبر خرائط جوجل، وبناء أنظمة الأتمتة التي ترفع الكفاءة التشغيلية بنسبة تصل إلى 40%، مما يضمن لك ميزة تنافسية حقيقية في سوق الرياض، دبي، والدار البيضاء.',
            'نحن نؤمن بأن التحول الرقمي ليس مجرد تقنية، بل هو رحلة نمو مستدام. لذا حرصنا في نيكسس لوجيك على دمج أحدث تقنيات الذكاء الاصطناعي مع استراتيجيات التسويق القائمة على البيانات، مما يسمح لعملائنا في السعودية والإمارات والمغرب بالتوسع بسرعة وأمان. انضم إلينا اليوم لنبني معاً النظام البيئي الرقمي لمستقبل منظمتك.'
        ]
    },
    fr: {
        title: 'Nexus Logic : Votre Partenaire de Transformation Numérique',
        paragraphs: [
            'Nexus Logic est une agence digitale et de marketing full-stack de premier plan, dédiée à l\'innovation et à l\'excellence opérationnelle sur les marchés du Moyen-Orient et d\'Afrique du Nord. Nous transformons vos visions ambitieuses en solutions concrètes grâce à l\'ingénierie logicielle avancée, au branding stratégique et à l\'automatisation intelligente des processus.',
            'En tant qu\'agence intégrée, nous proposons une approche holistique pour numériser votre entreprise. De la conception d\'identités visuelles percutantes au développement de plateformes web robustes sous Next.js, notre équipe d\'experts optimise chaque aspect de votre présence en ligne. Nos solutions de SEO technique et de gestion de visibilité sur Google Maps garantissent que votre marque domine les recherches locales à Casablanca, Dubaï et Riyad.',
            'La mission de Nexus Logic est de bâtir des écosystèmes numériques durables. En combinant l\'IA avec des analyses de données précises, nous aidons les entreprises à automatiser leurs flux de travail et à accélérer leur croissance. Découvrez comment nos services de conseil en transformation numérique peuvent propulser votre organisation vers de nouveaux sommets de performance.'
        ]
    },
    en: {
        title: 'Nexus Logic: Your Strategic Digital Transformation Partner',
        paragraphs: [
            'Nexus Logic is a premier full-stack digital agency specializing in high-performance digital solutions and marketing strategies for the MENA region. We transform ambitious visions into reality through cutting-edge software engineering, distinctive brand identity design, and intelligent business process automation.',
            'As an integrated digital agency, we provide a 360-degree approach to business digitalization. Our services range from complex web application development using Next.js to advanced Local SEO and Google Maps optimization. We focus on building automation logic that increases operational efficiency by up to 40%, ensuring a competitive edge for businesses in Riyadh, Dubai, and Casablanca.',
            'At Nexus Logic, we believe digital transformation is a journey of sustainable growth. By merging AI-driven technologies with data-led marketing, we empower our clients across KSA, UAE, and Morocco to scale rapidly and securely. Partner with us today to build the digital ecosystem of your organization\'s future.'
        ]
    }
}

export function SEOIntroduction({ lang }: { lang: Locale }) {
    const t = content[lang] || content.en

    return (
        <section className="py-16 bg-brand-dark/50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 border-l-4 border-brand-emerald pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
                        {t.title}
                    </h2>

                    <div className="space-y-6">
                        {t.paragraphs.map((p, i) => (
                            <p key={i} className="text-gray-300 text-lg leading-relaxed">
                                {p}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
