import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
                search: '',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: '/about',
                destination: '/',
            },
        ];
    },
};

// module.exports = {
//     async redirect() {
//         return [
//             {
//                 source: '/home',
//                 destination: '/',
//                 permanent: true,
//             },
//         ];
//     },
// };

export default nextConfig;
