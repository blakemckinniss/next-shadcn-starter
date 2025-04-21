import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {}, // Enable Turbopack with default settings
  },
};

export default nextConfig;
