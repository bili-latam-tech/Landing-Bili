/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fonts.googleapis.com'],
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Landing-Bili' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Landing-Bili/' : '',
}

module.exports = nextConfig 