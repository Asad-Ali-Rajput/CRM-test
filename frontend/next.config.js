/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
      // Add more redirect objects if needed
    ];
  },
};

module.exports = nextConfig;
