import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
   serverComponentsExternalPackages: ['mongoose'], // Add mongoose to the list
  },
  images: {
    domains: ['occ-0-3933-116.nflxso.net'], // Add your image domains here
  },
};

export default nextConfig;
