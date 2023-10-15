/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "landingfoliocom.imgix.net" },
    ],
  },
}

module.exports = nextConfig
