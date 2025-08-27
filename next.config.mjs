import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */

const nextConfig = {

      images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },

      {
        protocol: 'https',
        hostname: '**', 
        pathname: '**',
      },
      
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },

};

export default withFlowbiteReact(nextConfig);