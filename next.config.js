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
  async redirects() {
    return [
      {
        source: '/',
        destination: '/canvas-based',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
