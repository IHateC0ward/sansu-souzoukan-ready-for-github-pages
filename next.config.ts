import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sansu-souzoukan-ready-for-github-pages",
  assetPrefix: "/sansu-souzoukan-ready-for-github-pages/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
