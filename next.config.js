/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fonts.googleapis.com'],
    unoptimized: true
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Landing-Bili' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Landing-Bili/' : '',
  trailingSlash: true,
  // Ensure CSS is properly handled
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });
    return config;
  },
}

module.exports = nextConfig 