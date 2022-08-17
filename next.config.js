/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        images: {
            allowFutureImage: true,
        },
    },
};
