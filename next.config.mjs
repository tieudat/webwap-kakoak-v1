/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: 'kakoakgames.ringme.vn',
  //       // hostname: '10.226.40.158',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
