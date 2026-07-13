import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Verdexo's portfolio imagery is already export-ready. Serving it directly
  // avoids relying on the Cloudflare Images binding during local previews.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
