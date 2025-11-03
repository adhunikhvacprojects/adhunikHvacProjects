/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",  
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';",
          },
        ],
      },
      {
        source: "/:path*\\.pdf",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },

  // ✅ Image Optimization Configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**", // Corrected for Next.js image domain pattern
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Corrected pattern
      },
    ],
    formats: ["image/avif", "image/webp"], // Recommended for performance
    dangerouslyAllowSVG: false, // security best practice
  },

  eslint: {
    ignoreDuringBuilds: true, // keeps build clean for deployments
  },

  // ✅ Optional: add React strict mode & compression for production
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;