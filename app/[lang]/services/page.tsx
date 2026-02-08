import type { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

export default async function ServicesPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang)

    const services = {
        ar: [
            {
                title: 'الهندسة الرقمية',
                description: 'تطوير مواقع وتطبيقات ويب متقدمة باستخدام أحدث التقنيات مثل Next.js و React',
                features: ['تطوير مواقع متجاوبة', 'تطبيقات ويب تقدمية (PWA)', 'تطبيقات موبايل', 'أنظمة إدارة محتوى'],
                icon: '💻',
            },
            {
                title: 'الأتمتة الذكية',
                description: 'أتمتة العمليات التجارية وتكاملات n8n لتحسين الكفاءة وتوفير الوقت',
                features: ['تكاملات API', 'أتمتة سير العمل', 'روبوتات الدردشة', 'معالجة البيانات'],
                icon: '⚙️',
            },
            {
                title: 'الهوية البصرية',
                description: 'تصميم علامات تجارية مميزة تعكس قيم عملك وتجذب جمهورك المستهدف',
                features: ['تصميم الشعارات', 'دليل الهوية البصرية', 'تصميم المطبوعات', 'تصميم واجهات المستخدم'],
                icon: '🎨',
            },
            {
                title: 'خرائط جوجل',
                description: 'تحسين ظهورك المحلي وإدارة احترافية لحساب Google Business الخاص بك',
                features: ['تحسين محركات البحث المحلية', 'إدارة المراجعات', 'تحسين الملف التجاري', 'تتبع الأداء'],
                icon: '📍',
            },
            {
                title: 'النمو والتسويق',
                description: 'استراتيجيات تسويقية شاملة لتنمية أعمالك وزيادة وصولك الرقمي',
                features: ['التسويق عبر وسائل التواصل', 'إعلانات جوجل', 'تحسين محركات البحث', 'تسويق المحتوى'],
                icon: '📈',
            },
        ],
        fr: [
            {
                title: 'Ingénierie Digitale',
                description: 'Développement de sites et applications web avancés avec les dernières technologies comme Next.js et React',
                features: ['Sites web responsifs', 'Applications web progressives (PWA)', 'Applications mobiles', 'Systèmes de gestion de contenu'],
                icon: '💻',
            },
            {
                title: 'Automatisation Intelligente',
                description: 'Automatisation des processus métier et intégrations n8n pour améliorer l\'efficacité et gagner du temps',
                features: ['Intégrations API', 'Automatisation des workflows', 'Chatbots', 'Traitement des données'],
                icon: '⚙️',
            },
            {
                title: 'Identité Visuelle',
                description: 'Conception de marques distinctives qui reflètent vos valeurs et attirent votre public cible',
                features: ['Conception de logos', 'Guide d\'identité visuelle', 'Design d\'impression', 'Design d\'interface utilisateur'],
                icon: '🎨',
            },
            {
                title: 'Google Maps',
                description: 'Optimisation de votre visibilité locale et gestion professionnelle de votre compte Google Business',
                features: ['SEO local', 'Gestion des avis', 'Optimisation du profil', 'Suivi des performances'],
                icon: '📍',
            },
            {
                title: 'Croissance & Marketing',
                description: 'Stratégies marketing complètes pour développer votre entreprise et augmenter votre portée digitale',
                features: ['Marketing sur les réseaux sociaux', 'Publicités Google', 'Optimisation SEO', 'Marketing de contenu'],
                icon: '📈',
            },
        ],
        en: [
            {
                title: 'Digital Engineering',
                description: 'Advanced website and web application development using the latest technologies like Next.js and React',
                features: ['Responsive websites', 'Progressive Web Apps (PWA)', 'Mobile applications', 'Content management systems'],
                icon: '💻',
            },
            {
                title: 'Smart Automation',
                description: 'Business process automation and n8n integrations to improve efficiency and save time',
                features: ['API integrations', 'Workflow automation', 'Chatbots', 'Data processing'],
                icon: '⚙️',
            },
            {
                title: 'Brand Identity',
                description: 'Distinctive brand design that reflects your values and attracts your target audience',
                features: ['Logo design', 'Visual identity guide', 'Print design', 'User interface design'],
                icon: '🎨',
            },
            {
                title: 'Google Maps',
                description: 'Optimize your local visibility and professional management of your Google Business account',
                features: ['Local SEO', 'Review management', 'Profile optimization', 'Performance tracking'],
                icon: '📍',
            },
            {
                title: 'Growth & Marketing',
                description: 'Comprehensive marketing strategies to grow your business and increase your digital reach',
                features: ['Social media marketing', 'Google Ads', 'SEO optimization', 'Content marketing'],
                icon: '📈',
            },
        ],
    }

    const currentServices = services[params.lang]

    return (
        <main className="min-h-screen bg-brand-dark">
            {/* Header */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {params.lang === 'ar' ? 'خدماتنا' : params.lang === 'fr' ? 'Nos Services' : 'Our Services'}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            {params.lang === 'ar'
                                ? 'حلول متكاملة لتحويل أعمالك رقمياً'
                                : params.lang === 'fr'
                                    ? 'Solutions complètes pour transformer votre entreprise numériquement'
                                    : 'Complete solutions to digitally transform your business'}
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentServices.map((service, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="text-6xl mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                                <p className="text-gray-400 mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                                            <span className="text-brand-emerald mt-1">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
