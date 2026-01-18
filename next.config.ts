import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  output: "export", // Forzar exportación estática (SPA pura sin SSR)
  images: {
    unoptimized: true, // Necesario para export mode
  },
};

export default nextConfig;
