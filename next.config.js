/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fonts.googleapis.com'],
    unoptimized: true
  },
  output: 'export',
  basePath: '',
  assetPrefix:  '',
}

module.exports = nextConfig 