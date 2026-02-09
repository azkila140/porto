const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = 'afef963f7249cafd7fba59938cb354d0f0e5cb389268059c0c1c7d856e4c4ac76926009a6c6056e1d02782d74a181b9723e5c395eb90ab65e6287409b73a43d719e3995627cf9798d335668960f24742ee81c8f57602b6b5da5b0f66ffc29dc5b8810f6b08bfe6ee173ef283f452ec34c691dcae54bde8ca215e12df318fde7b';

const servicesData = [
    {
        order: 1, icon: 'Code2', gradient: 'from-blue-500 to-cyan-500',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        localizations: {
            ar: { title: 'الهندسة الرقمية', description: 'تطوير مواقع وتطبيقات متقدمة بأحدث التقنيات' },
            fr: { title: 'Ingénierie Digitale', description: 'Développement de sites et applications avec les dernières technologies' },
            en: { title: 'Digital Engineering', description: 'Advanced web and app development with cutting-edge tech' }
        }
    },
    {
        order: 2, icon: 'Workflow', gradient: 'from-purple-500 to-pink-500',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
        localizations: {
            ar: { title: 'الأتمتة الذكية', description: 'أتمتة العمليات وتكاملات n8n المتقدمة' },
            fr: { title: 'Automatisation Intelligente', description: 'Automatisation des processus et intégrations n8n avancées' },
            en: { title: 'Smart Automation', description: 'Process automation and advanced n8n integrations' }
        }
    },
    {
        order: 3, icon: 'Palette', gradient: 'from-orange-500 to-red-500',
        imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        localizations: {
            ar: { title: 'الهوية البصرية', description: 'تصميم علامات تجارية مميزة ومؤثرة' },
            fr: { title: 'Identité Visuelle', description: 'Conception de marques distinctives et impactantes' },
            en: { title: 'Brand Identity', description: 'Distinctive and impactful brand design' }
        }
    },
    {
        order: 4, icon: 'MapPin', gradient: 'from-green-500 to-emerald-500',
        imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80',
        localizations: {
            ar: { title: 'خرائط جوجل', description: 'تحسين الظهور المحلي وإدارة Google Business' },
            fr: { title: 'Google Maps', description: 'Optimisation locale et gestion Google Business' },
            en: { title: 'Google Maps', description: 'Local SEO optimization and Google Business management' }
        }
    },
    {
        order: 5, icon: 'TrendingUp', gradient: 'from-indigo-500 to-purple-500',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        localizations: {
            ar: { title: 'النمو والتسويق', description: 'استراتيجيات تسويقية شاملة لتنمية أعمالك' },
            fr: { title: 'Croissance & Marketing', description: 'Stratégies marketing complètes pour développer votre entreprise' },
            en: { title: 'Growth & Marketing', description: 'Comprehensive marketing strategies to grow your business' }
        }
    },
    {
        order: 6, icon: 'Sparkles', gradient: 'from-yellow-500 to-orange-500',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        localizations: {
            ar: { title: 'الابتكار الرقمي', description: 'حلول مبتكرة تتطلع إلى المستقبل' },
            fr: { title: 'Innovation Digitale', description: 'Solutions innovantes tournées vers l\'avenir' },
            en: { title: 'Digital Innovation', description: 'Forward-thinking innovative solutions for the future' }
        }
    }
];

const portfolioData = [
    {
        order: 1, featured: true, gradient: 'from-blue-500 to-cyan-500',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
        localizations: {
            ar: { title: 'منصة طبية متكاملة', description: 'نظام حجز وإدارة عيادات مع تكامل كامل مع الدفع الإلكتروني', category: 'قطاع طبي' },
            fr: { title: 'Plateforme Médicale Complète', description: 'Système de réservation et gestion de cliniques avec paiement intégré', category: 'Secteur Médical' },
            en: { title: 'Complete Medical Platform', description: 'Clinic booking and management system with integrated payment gateway', category: 'Medical Sector' }
        }
    },
    {
        order: 2, featured: true, gradient: 'from-purple-500 to-pink-500',
        imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
        localizations: {
            ar: { title: 'تطبيق عقاري فاخر', description: 'منصة عرض وبيع العقارات الفاخرة مع جولات افتراضية 360', category: 'عقارات' },
            fr: { title: 'Application Immobilière de Luxe', description: 'Plateforme de vente immobilière haut de gamme avec visites virtuelles 360', category: 'Immobilier' },
            en: { title: 'Luxury Real Estate App', description: 'Premium property showcase platform with 360° virtual tours', category: 'Real Estate' }
        }
    },
    {
        order: 3, featured: true, gradient: 'from-orange-500 to-red-500',
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
        localizations: {
            ar: { title: 'نظام مطاعم ذكي', description: 'إدارة متكاملة للطلبات والحجوزات مع قائمة رقمية تفاعلية', category: 'مطاعم وفنادق' },
            fr: { title: 'Système Restaurant Intelligent', description: 'Gestion complète des commandes et réservations avec menu digital interactif', category: 'Hôtellerie-Restauration' },
            en: { title: 'Smart Restaurant System', description: 'Complete order and reservation management with interactive digital menu', category: 'Hospitality' }
        }
    },
    {
        order: 4, featured: true, gradient: 'from-green-500 to-emerald-500',
        imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
        localizations: {
            ar: { title: 'متجر إلكتروني متقدم', description: 'منصة تجارة إلكترونية مع نظام دفع آمن وإدارة مخزون ذكية', category: 'تجارة إلكترونية' },
            fr: { title: 'E-commerce Avancé', description: 'Plateforme e-commerce avec paiement sécurisé et gestion intelligente du stock', category: 'E-commerce' },
            en: { title: 'Advanced E-commerce', description: 'E-commerce platform with secure payment and smart inventory management', category: 'E-commerce' }
        }
    }
];

const heroData = [
    {
        order: 1, active: true, icon: 'Code2', gradient: 'from-blue-600 via-cyan-500 to-blue-600',
        link: '/services#digital-engineering',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
        localizations: {
            ar: { title: 'الهندسة الرقمية', subtitle: 'نصنع التميز الرقمي', description: 'نطور حلولاً تقنية متطورة تتجاوز التوقعات', cta: 'استكشف خدماتنا' },
            fr: { title: 'Ingénierie Digitale', subtitle: 'Créer l\'Excellence Numérique', description: 'Nous développons des solutions technologiques avancées qui dépassent les attentes', cta: 'Découvrir nos services' },
            en: { title: 'Digital Engineering', subtitle: 'Crafting Digital Excellence', description: 'We build cutting-edge solutions that exceed expectations', cta: 'Explore Our Services' }
        }
    },
    {
        order: 2, active: true, icon: 'Workflow', gradient: 'from-purple-600 via-pink-500 to-purple-600',
        link: '/services#automation',
        imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1920&q=80',
        localizations: {
            ar: { title: 'الأتمتة والتكامل', subtitle: 'كفاءة لا محدودة', description: 'نربط أنظمتك بذكاء ونحسن عملياتك بسلاسة', cta: 'تعرف على المزيد' },
            fr: { title: 'Automatisation & Intégration', subtitle: 'Efficacité Sans Limites', description: 'Nous connectons intelligemment vos systèmes et optimisons vos processus en douceur', cta: 'En savoir plus' },
            en: { title: 'Automation & Integration', subtitle: 'Limitless Efficiency', description: 'We connect your systems intelligently and optimize your workflows seamlessly', cta: 'Learn More' }
        }
    },
    {
        order: 3, active: true, icon: 'Palette', gradient: 'from-orange-600 via-red-500 to-orange-600',
        link: '/services#branding',
        imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80',
        localizations: {
            ar: { title: 'الهوية والتصميم', subtitle: 'علامات تترك أثراً', description: 'نصمم هويات بصرية تعكس جوهر علامتك التجارية', cta: 'ابدأ مشروعك' },
            fr: { title: 'Identité & Design', subtitle: 'Marques Qui Laissent Une Trace', description: 'Nous créons des identités visuelles qui reflètent l\'essence de votre marque', cta: 'Démarrez votre projet' },
            en: { title: 'Branding & Design', subtitle: 'Brands That Leave a Mark', description: 'We create visual identities that reflect your brand\'s essence', cta: 'Start Your Project' }
        }
    },
    {
        order: 4, active: true, icon: 'MapPin', gradient: 'from-green-600 via-emerald-500 to-green-600',
        link: '/services#google-maps',
        imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1920&q=80',
        localizations: {
            ar: { title: 'خرائط جوجل وSEO', subtitle: 'واجهة متجرك الرقمي', description: 'نحسن ظهورك المحلي ونجذب عملاء جدد', cta: 'عزز تواجدك' },
            fr: { title: 'Google Maps & SEO', subtitle: 'Vitrine de Votre Boutique Numérique', description: 'Nous optimisons votre visibilité locale et attirons de nouveaux clients', cta: 'Renforcez votre présence' },
            en: { title: 'Google Maps & SEO', subtitle: 'Your Digital Storefront', description: 'We optimize your local presence and attract new customers', cta: 'Boost Your Presence' }
        }
    },
    {
        order: 5, active: true, icon: 'TrendingUp', gradient: 'from-indigo-600 via-purple-500 to-indigo-600',
        link: '/services#growth',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
        localizations: {
            ar: { title: 'النمو والمحتوى', subtitle: 'نمو مستدام ومؤثر', description: 'استراتيجيات تسويقية شاملة تحقق أهدافك', cta: 'ابدأ رحلة النمو' },
            fr: { title: 'Croissance & Contenu', subtitle: 'Croissance Durable et Impactante', description: 'Stratégies marketing complètes qui atteignent vos objectifs', cta: 'Commencez votre croissance' },
            en: { title: 'Growth & Content', subtitle: 'Sustainable, Impactful Growth', description: 'Comprehensive marketing strategies that achieve your goals', cta: 'Start Growing' }
        }
    }
];

async function createEntry(contentType, data) {
    const response = await fetch(`${STRAPI_URL}/api/${contentType}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({ data })
    });
    return response.json();
}

async function createLocalization(contentType, documentId, locale, data) {
    const response = await fetch(`${STRAPI_URL}/api/${contentType}/${documentId}?locale=${locale}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({ data })
    });
    return response.json();
}

async function populate(contentType, items) {
    console.log(`\n🔵 Populating ${contentType}...`);
    for (const item of items) {
        try {
            const { localizations, ...commonFields } = item;

            // Create EN entry
            const enRes = await createEntry(contentType, { ...commonFields, ...localizations.en, locale: 'en' });
            if (enRes.error) throw new Error(`${contentType} EN: ${JSON.stringify(enRes.error)}`);
            const docId = enRes.data.documentId;
            console.log(`✅ Created EN: ${localizations.en.title} [${docId}]`);

            // Create AR
            const arRes = await createLocalization(contentType, docId, 'ar', localizations.ar);
            if (arRes.error) console.error(`❌ AR Error: ${JSON.stringify(arRes.error)}`);
            else console.log(`  ✅ Added AR`);

            // Create FR
            const frRes = await createLocalization(contentType, docId, 'fr', localizations.fr);
            if (frRes.error) console.error(`❌ FR Error: ${JSON.stringify(frRes.error)}`);
            else console.log(`  ✅ Added FR`);

        } catch (err) {
            console.error(`❌ Error with item:`, err.message);
        }
    }
}

async function main() {
    await populate('services', servicesData);
    await populate('portfolio-items', portfolioData);
    await populate('hero-slides', heroData);
    console.log('\n🎉 Finished!');
}

main();
