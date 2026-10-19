import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: produces an `out/` folder that can be hosted anywhere
  // (Vercel, GitHub Pages, Netlify, Cloudflare Pages).
  output: "export",
  trailingSlash: true,
  images: {
    // Required for `output: "export"`. Images are pre-sized at build/copy time.
    unoptimized: true,
  },
};

export default nextConfig;
