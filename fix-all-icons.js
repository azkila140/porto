// Fix all service pages icon serialization
const fs = require('fs');

const servicePages = [
    'app/[lang]/services/branding/page.tsx',
    'app/[lang]/services/digital-engineering/page.tsx',
    'app/[lang]/services/google-maps-seo/page.tsx',
    'app/[lang]/services/growth-content/page.tsx',
];

const iconNames = [
    'Workflow', 'Link2', 'Bot', 'GitBranch', 'Repeat', 'Zap',
    'Code', 'Database', 'Cloud', 'Shield', 'Smartphone',
    'Palette', 'Pen', 'Sparkles', 'Target', 'TrendingUp',
    'MapPin', 'Search', 'BarChart', 'MessageSquare', 'Clock'
];

servicePages.forEach(filePath => {
    console.log(`Fixing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace each icon reference with quoted string
    iconNames.forEach(iconName => {
        const regex = new RegExp(`icon: ${iconName},`, 'g');
        content = content.replace(regex, `icon: '${iconName}',`);
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${filePath}`);
});

console.log('All service pages fixed!');
