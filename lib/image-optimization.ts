/**
 * Cloudinary Image Optimization Utility
 * 
 * This module provides utilities to proxy and optimize images through Cloudinary.
 * Cloudinary will automatically:
 * - Convert to WebP/AVIF based on browser support
 * - Optimize quality
 * - Resize and crop as needed
 * - Serve from CDN
 */

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo';

/**
 * Converts any image URL to a Cloudinary-optimized URL
 * @param imageUrl - Original image URL (Unsplash, etc.)
 * @param options - Cloudinary transformation options
 * @returns Optimized Cloudinary URL
 */
export function cloudinaryLoader({
    src,
    width,
    quality = 75
}: {
    src: string;
    width: number;
    quality?: number;
}): string {
    // If already a Cloudinary URL, return as-is
    if (src.includes('cloudinary.com')) {
        return src;
    }

    // Encode the original URL for Cloudinary fetch
    const encodedSrc = encodeURIComponent(src);

    // Build Cloudinary transformations
    const transformations = [
        `f_auto`,           // Auto format (WebP/AVIF)
        `q_${quality}`,     // Quality
        `w_${width}`,       // Width
        `c_limit`,          // Don't upscale
    ].join(',');

    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/fetch/${transformations}/${encodedSrc}`;
}

/**
 * Optimizes Unsplash URLs with Cloudinary transformations
 * @param unsplashUrl - Unsplash photo URL  
 * @param width - Target width
 * @param quality - Image quality (default: 75)
 * @returns Cloudinary-optimized URL
 */
export function optimizeUnsplashImage(
    unsplashUrl: string,
    width: number = 1200,
    quality: number = 75
): string {
    return cloudinaryLoader({ src: unsplashUrl, width, quality });
}

/**
 * Example usage in components:
 * 
 * import { optimizeUnsplashImage } from '@/lib/image-optimization'
 * 
 * <Image
 *   src={optimizeUnsplashImage(image, 800)}
 *   alt="..."
 *   fill
 * />
 */
