const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = 'afef963f7249cafd7fba59938cb354d0f0e5cb389268059c0c1c7d856e4c4ac76926009a6c6056e1d02782d74a181b9723e5c395eb90ab65e6287409b73a43d719e3995627cf9798d335668960f24742ee81c8f57602b6b5da5b0f66ffc29dc5b8810f6b08bfe6ee173ef283f452ec34c691dcae54bde8ca215e12df318fde7b';

async function deleteAll(contentType) {
    console.log(`Cleaning ${contentType}...`);
    const response = await fetch(`${STRAPI_URL}/api/${contentType}?status=draft&status=published`, {
        headers: { Authorization: `Bearer ${API_TOKEN}` }
    });
    const data = await response.json();

    if (!data.data) return;

    for (const item of data.data) {
        await fetch(`${STRAPI_URL}/api/${contentType}/${item.documentId}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${API_TOKEN}` }
        });
    }
    console.log(`✅ Cleaned ${contentType}`);
}

async function main() {
    await deleteAll('services');
    await deleteAll('portfolio-items');
    await deleteAll('hero-slides');
}

main();
