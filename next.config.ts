import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ohotaktiv.ru',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
