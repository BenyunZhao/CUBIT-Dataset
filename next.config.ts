import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/CUBIT-Dataset",
  assetPrefix: "/CUBIT-Dataset/",
};

export default nextConfig;
