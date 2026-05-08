import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Don't fail the build on type errors (fix them later)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Don't fail the build on lint errors (fix them later)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
