export default ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                baseUrl: env('CDN_URL'),
                s3Options: {
                    accessKeyId: env('AWS_ACCESS_KEY_ID'),
                    secretAccessKey: env('AWS_ACCESS_SECRET'),
                    region: 'auto',
                    params: {
                        ACL: env('AWS_ACL', 'public-read'),
                        signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
                        Bucket: env('AWS_BUCKET'),
                    },
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
        'strapi-blurhash': {
            enabled: true,
            config: {
                regenerateOnUpdate: true
            }
        },
    },
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                article: {
                    field: 'slug',
                    references: 'title',
                },
            },
        },
    },
    "reading-time": {
        enabled: true,
        config: {
            contentTypes: {
                article: {
                    field: 'readingTime',
                    references: 'content',
                },
            },
        },
    },
});