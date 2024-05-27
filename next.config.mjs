/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
