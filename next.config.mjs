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
    },
    // output: 'export',
};

export default nextConfig;
