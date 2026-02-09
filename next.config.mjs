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
    // Simplified config for build verification
}

export default nextConfig
