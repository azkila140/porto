/**
 * Custom Cloudinary Image Loader for Next.js
 * 
 * This loader automatically routes all images through Cloudinary for:
 * - Automatic format conversion (WebP/AVIF)
 * - Quality optimization
 * - CDN delivery
 * - Responsive image generation
 */

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dd2hhzhkq';

export default function cloudinaryLoader({ src, width, quality }) {
    // If it's a relative path (local image), use default Next.js handling
    if (src.startsWith('/')) {
        return src;
    }

    // If already a Cloudinary URL, return as-is
    if (src.includes('cloudinary.com')) {
        return src;
    }

    // For Unsplash images, use their native optimization API
    if (src.includes('images.unsplash.com')) {
        const url = new URL(src);
        url.searchParams.set('w', width.toString());
        url.searchParams.set('q', (quality || 75).toString());
        url.searchParams.set('auto', 'format');
        return url.toString();
    }

    // For other absolute URLs, proxy through Cloudinary (if configured)
    const params = [
        'f_auto',              // Auto format (WebP/AVIF based on browser)
        'c_limit',             // Don't upscale beyond original
        'w_' + width,          // Width
        'q_' + (quality || 75) // Quality (default 75%)
    ];

    const paramsString = params.join(',');

    // Encode the source URL for Cloudinary fetch
    const encodedSrc = encodeURIComponent(src);

    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/fetch/${paramsString}/${encodedSrc}`;
}
