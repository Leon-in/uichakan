/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'siweihaiyang-1327461466.cos.ap-guangzhou.myqcloud.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

