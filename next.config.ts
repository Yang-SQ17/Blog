import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudflare-imgbed-9pz.pages.dev",
        pathname: "/file/**",
      },
      {
        protocol: "https",
        hostname: "a68b43cc.cloudflare-imgbed-9pz.pages.dev",
        pathname: "/file/**",
      },
      {
        protocol: "https",
        hostname: "p3.music.126.net",
      },
      {
        protocol: "https",
        hostname: "p4.music.126.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pub-ed0181b929824b8c883e4f75e0148bf0.r2.dev",
      },
    ],
    qualities: [75, 80, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048],
  },
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
