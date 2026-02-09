const fs = require('fs');
const path = require('path');

// Service pages that need fixing
const servicePaths = [
    'app/[lang]/services/automation/page.tsx',
    'app/[lang]/services/branding/page.tsx',
    'app/[lang]/services/digital-engineering/page.tsx',
    'app/[lang]/services/google-maps-seo/page.tsx',
    'app/[lang]/services/growth-content/page.tsx',
];

const iconReplacements = [
    ['icon: Workflow,', "icon: 'Workflow',"],
    ['icon: Link2,', "icon: 'Link2',"],
    ['icon: Bot,', "icon: 'Bot',"],
    ['icon: GitBranch,', "icon: 'GitBranch',"],
    ['icon: Repeat,', "icon: 'Repeat',"],
    ['icon: Zap,', "icon: 'Zap',"],
    ['icon: Code,', "icon: 'Code',"],
    ['icon: Database,', "icon: 'Database',"],
    ['icon: Cloud,', "icon: 'Cloud',"],
    ['icon: Shield,', "icon: 'Shield',"],
    ['icon: Smartphone,', "icon: 'Smartphone',"],
    ['icon: Palette,', "icon: 'Palette',"],
    ['icon: Pen,', "icon: 'Pen',"],
    ['icon: Sparkles,', "icon: 'Sparkles',"],
    ['icon: Target,', "icon: 'Target',"],
    ['icon: TrendingUp,', "icon: 'TrendingUp',"],
    ['icon: MapPin,', "icon: 'MapPin',"],
    ['icon: Search,', "icon: 'Search',"],
    ['icon: BarChart,', "icon: 'BarChart',"],
    ['icon: MessageSquare,', "icon: 'MessageSquare',"],
    ['icon: Clock,', "icon: 'Clock',"],
];

servicePaths.forEach(filePath => {
    console.log(`Processing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');

    iconReplacements.forEach(([search, replace]) => {
        content = content.replaceAll(search, replace);
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${filePath}`);
});

console.log('All service pages fixed!');
