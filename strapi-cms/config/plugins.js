module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_CLOUD_NAME', 'dd2hhzhkq'),
                api_key: env('CLOUDINARY_API_KEY', '336617392348436'),
                api_secret: env('CLOUDINARY_API_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
