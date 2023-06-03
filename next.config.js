/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '_static',
  basePath: '/NunutteDev',
  assetPrefix: '/NunutteDev/',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
