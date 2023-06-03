/** @type {import('next').NextConfig} */

const basePath = process.env.BASEPATH
console.log(basePath)
const nextConfig = {
  output: 'export',
  distDir: '_static',
  basePath: basePath ? basePath : '',
  images: {
    unoptimized: true,
    path: `${basePath ? basePath : ''}/_next/image`,
  }
}

module.exports = nextConfig
