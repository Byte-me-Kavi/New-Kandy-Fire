import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external images from YouTube thumbnails used on the Services page
  images: {
    domains: ["img.youtube.com"],
  },
};

export default nextConfig;
