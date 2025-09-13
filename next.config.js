/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nlitedu.com",
        port: "",
      },
    ],
  },

  // Base path and asset prefix for GitHub Pages
  // basePath: "/nexgen-tech",
  // assetPrefix: "/nexgen-tech",
  basePath: "",
  assetPrefix: "",

  // Use output export for static generation
  // output: "export", // Tells Next.js to generate a static export
};

module.exports = nextConfig;
