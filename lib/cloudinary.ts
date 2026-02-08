import { CldImage, CldUploadWidget } from 'next-cloudinary'

export { CldImage, CldUploadWidget }

/**
 * Cloudinary Image Wrapper
 * 
 * Usage:
 * <CldImage
 *   src="sample"
 *   width={800}
 *   height={600}
 *   alt="Description"
 * />
 */

/**
 * Get Cloudinary URL for a public ID
 */
export function getCloudinaryUrl(publicId: string, options?: {
    width?: number
    height?: number
    quality?: string
    format?: string
}) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    const { width, height, quality = 'auto', format = 'auto' } = options || {}

    let transformations = `q_${quality},f_${format}`
    if (width) transformations += `,w_${width}`
    if (height) transformations += `,h_${height}`

    return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`
}
