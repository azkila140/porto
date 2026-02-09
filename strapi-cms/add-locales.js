const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '.tmp', 'data.db');
const db = new Database(dbPath);

try {
    const locales = db.prepare('SELECT code FROM i18n_locale').all();
    console.log('Current locales:', locales.map(l => l.code).join(', '));

    const codesToAdd = [
        { name: 'Arabic (ar)', code: 'ar' },
        { name: 'French (fr)', code: 'fr' }
    ];

    for (const locale of codesToAdd) {
        if (!locales.find(l => l.code === locale.code)) {
            console.log(`Adding locale: ${locale.name}...`);
            db.prepare('INSERT INTO i18n_locale (name, code, created_at, updated_at) VALUES (?, ?, ?, ?)').run(
                locale.name,
                locale.code,
                new Date().toISOString(),
                new Date().toISOString()
            );
            console.log(`✅ Added ${locale.code}`);
        } else {
            console.log(`Locale ${locale.code} already exists.`);
        }
    }
} catch (err) {
    console.error('Error modifying database:', err.message);
} finally {
    db.close();
}
