/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ['m.media-amazon.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'm.media-amazon.com',
    //     port: '',
    //     pathname: '/images/M',
    //   },
    // ],
  },
};
