/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'kakoakgames.ringme.vn',
        port: '',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
