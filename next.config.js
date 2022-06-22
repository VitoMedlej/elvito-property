/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['res.cloudinary.com','ucarecdn.com','www.rizkproperties.net'],
  },
  async redirects() {
    return [
     
      {
        source: '/auth/error',
        destination: '/account/login',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
