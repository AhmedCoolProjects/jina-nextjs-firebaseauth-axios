/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["live.staticflickr.com", "farm8.staticflickr.com"],
  },
};

module.exports = nextConfig;
