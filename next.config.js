/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['www.isold-realestate.com','res.cloudinary.com','ucarecdn.com','www.rizkproperties.net'],
  },
  
}

module.exports = nextConfig
