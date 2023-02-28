/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    GRAPHQL_API: process.env.GRAPHQL_API,
  },
  images: {
    remotePatterns: [
      {
        hostname: "rickandmortyapi.com",
      }
    ]
  }
}

module.exports = nextConfig


