import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external images from YouTube thumbnails used on the Services page
  // `images.domains` is deprecated — use `images.remotePatterns` instead.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        // allow any pathname (thumbnails may live at different paths)
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
