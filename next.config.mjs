/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ulubznmnvepevknyjlee.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/works-images/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'ulubznmnvepevknyjlee.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/certificates-images/**',
                search: '',
            },
        ],
        // Optimize image loading
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // Enable experimental features for better performance
    experimental: {
        optimizeCss: true,
    },
    // output: 'export',
};

export default nextConfig;