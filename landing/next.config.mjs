/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.vercel.app",
      },
    ],
    // Allow loading of local frame images
    unoptimized: true,
  },
  // Enable experimental features if needed
  experimental: {
    // For better static generation
  },
};

export default nextConfig;
