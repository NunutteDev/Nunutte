/** @type {import('next').NextConfig} */

const basePath = process.env.BASEPATH || ''
const nextConfig = {
  output: 'export',
  distDir: '_static',
  basePath: basePath,
  images: {
    unoptimized: true,
    path: `${basePath}/_next/image`,
  }
}

module.exports = nextConfig
