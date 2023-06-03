/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '_static',
  basePath: '/Nunutte',
  assetPrefix: '/Nunutte/',
  images: {
    unoptimized: true,
    path: '/Nunutte/_next/image',
  }

}

module.exports = nextConfig
