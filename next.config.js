/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // Base path and asset prefix for GitHub Pages
  basePath: '/nexgen-tech',  // Replace with your GitHub repository name (without the full URL)
  assetPrefix: '/nexgen-tech',  // Same as basePath
};

module.exports = nextConfig;
