import type { NextConfig } from "next";

// Exportación estática para GitHub Pages (byemmanuel.github.io, sin basePath).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
