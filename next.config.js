/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128],
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '**.cloudinary.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '**.supabase.co',
                pathname: '/**',
            },
        ],
    },
    compiler: {
        // Remove console logs in production
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Use modern JavaScript output
    swcMinify: true,
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
        },
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },
}

module.exports = nextConfig
