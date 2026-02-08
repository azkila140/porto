export async function uploadToCloudinary(file: File) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'nexus_logic_uploads') // You'll need to create this unsigned preset in Cloudinary

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        )

        if (!response.ok) {
            throw new Error('Upload failed')
        }

        const data = await response.json()
        return data.secure_url
    } catch (error) {
        console.error('Cloudinary upload error:', error)
        throw error
    }
}
