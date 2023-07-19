/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'dev.charancha.com'
    ],
    formats: ['image/webp']
  },
  redirects: async () => {
    return [
      {
        source: '/:path((?!warning.html$).*)',
        has: [
          {
            type: 'header',
            key: 'user-agent',
            value: '(.*Trident.*)',
          },
        ],
        permanent: false,
        destination: '/warning.html',
      },
    ]
  },
  webpack: (config) => {

    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  }
}

module.exports = nextConfig;


