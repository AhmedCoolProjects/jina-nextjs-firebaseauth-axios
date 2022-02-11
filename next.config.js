/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "cdn.coinranking.com"],
  },
};

module.exports = nextConfig;
