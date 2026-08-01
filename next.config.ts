import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages
    ? {
        basePath: "/sansu-souzoukan-ready-for-github-pages",
        assetPrefix: "/sansu-souzoukan-ready-for-github-pages/",
      }
    : {}),
};

export default nextConfig;
