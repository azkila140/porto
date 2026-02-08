const cloudinary = require('cloudinary').v2
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dd2hhzhkq',
    api_key: process.env.CLOUDINARY_API_KEY || '336617392348436',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'vgKvqDD9C5611S5hjWZFf3LWmGY'
})

// AI-generated images from the project
const aiImages = [
    // Service Images
    { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', name: 'service-digital-engineering', folder: 'nexus-logic/services' },
    { url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80', name: 'service-automation', folder: 'nexus-logic/services' },
    { url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', name: 'service-branding', folder: 'nexus-logic/services' },
    { url: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80', name: 'service-google-maps', folder: 'nexus-logic/services' },
    { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', name: 'service-growth-marketing', folder: 'nexus-logic/services' },
    { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', name: 'service-innovation', folder: 'nexus-logic/services' },

    // Portfolio Images
    { url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80', name: 'portfolio-medical-platform', folder: 'nexus-logic/portfolio' },
    { url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80', name: 'portfolio-real-estate', folder: 'nexus-logic/portfolio' },
    { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80', name: 'portfolio-restaurant', folder: 'nexus-logic/portfolio' },
    { url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80', name: 'portfolio-ecommerce', folder: 'nexus-logic/portfolio' },

    // Hero Images
    { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80', name: 'hero-digital-engineering', folder: 'nexus-logic/hero' },
    { url: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1920&q=80', name: 'hero-automation', folder: 'nexus-logic/hero' },
    { url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80', name: 'hero-branding', folder: 'nexus-logic/hero' },
    { url: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1920&q=80', name: 'hero-google-maps', folder: 'nexus-logic/hero' },
    { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80', name: 'hero-growth', folder: 'nexus-logic/hero' }
]

async function uploadToCloudinary(imageUrl, publicId, folder) {
    try {
        console.log(`⬆️  Uploading ${publicId}...`)

        const result = await cloudinary.uploader.upload(imageUrl, {
            public_id: publicId,
            folder: folder,
            resource_type: 'image',
            overwrite: true,
            quality: 'auto',
            fetch_format: 'auto'
        })

        console.log(`✅ Uploaded: ${result.secure_url}`)
        return result
    } catch (error) {
        console.error(`❌ Failed to upload ${publicId}:`, error.message)
        return null
    }
}

async function uploadAllImages() {
    console.log('🚀 Starting image upload to Cloudinary...\n')
    console.log(`📦 Total images to upload: ${aiImages.length}\n`)

    const results = []

    for (const image of aiImages) {
        const result = await uploadToCloudinary(image.url, image.name, image.folder)
        if (result) {
            results.push({
                name: image.name,
                url: result.secure_url,
                publicId: result.public_id,
                folder: image.folder
            })
        }
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500))
    }

    console.log('\n' + '='.repeat(60))
    console.log('✅ Upload Complete!\n')
    console.log(`📊 Successfully uploaded: ${results.length}/${aiImages.length}\n`)

    // Generate a summary file
    const summary = {
        uploadedAt: new Date().toISOString(),
        totalUploaded: results.length,
        totalFailed: aiImages.length - results.length,
        images: results
    }

    fs.writeFileSync('cloudinary-upload-summary.json', JSON.stringify(summary, null, 2))
    console.log('📄 Summary saved to: cloudinary-upload-summary.json\n')

    // Print organized URLs
    console.log('🖼️  Uploaded Images by Category:\n')

    const services = results.filter(r => r.folder.includes('services'))
    const portfolio = results.filter(r => r.folder.includes('portfolio'))
    const hero = results.filter(r => r.folder.includes('hero'))

    if (services.length > 0) {
        console.log('📌 Services:')
        services.forEach(img => console.log(`   - ${img.name}: ${img.url}`))
        console.log()
    }

    if (portfolio.length > 0) {
        console.log('📌 Portfolio:')
        portfolio.forEach(img => console.log(`   - ${img.name}: ${img.url}`))
        console.log()
    }

    if (hero.length > 0) {
        console.log('📌 Hero Slides:')
        hero.forEach(img => console.log(`   - ${img.name}: ${img.url}`))
        console.log()
    }

    console.log('🎉 All images are now stored on Cloudinary!')
    console.log('💡 You can view them in your dashboard: https://console.cloudinary.com')
}

// Run the upload
uploadAllImages().catch(console.error)
