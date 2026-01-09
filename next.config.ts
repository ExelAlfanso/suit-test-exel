import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "suitmedia.static-assets.id",
      },
    ],
  },
};

export default nextConfig;
