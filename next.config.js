/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "example.com",
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user'
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
