/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'sidebar.jabarprov.go.id',
      },
    ],
  },
};

module.exports = nextConfig
