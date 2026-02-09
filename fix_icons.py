import re

# Service pages to fix
pages = [
   'app/[lang]/services/branding/page.tsx',
    'app/[lang]/services/digital-engineering/page.tsx',
    'app/[lang]/services/google-maps-seo/page.tsx',
    'app/[lang]/services/growth-content/page.tsx',
]

# Icon names to fix
icons = ['Sparkles', 'Palette', 'FileText', 'Image', 'Package', 'Printer', 
         'Code', 'Smartphone', 'Cloud', 'Database', 'Zap', 'Shield',
         'MapPin', 'Search', 'Star', 'TrendingUp', 'Users', 'Award',
         'Video', 'Target', 'BarChart3', 'Megaphone']

for page in pages:
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for icon in icons:
        content = re.sub(f'icon: {icon},', f"icon: '{icon}',", content)
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'✓ Fixed {page}')

print('Done!')
