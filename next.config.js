const withPlugins = require('next-compose-plugins');

const nextConfig = {
    distDir: './.next',
    trailingSlash: true,
    future: {
      webpack5: true,
    },
    env:{
      FRONT_PORT: process.env.NEXT_PUBLIC_FRONT_PORT,
    },
    webpack: (config) => {
      return config;
    },
    //async redirects() {
    //  return [
    //    {
    //      source: '/',
    //      destination: '/example/',
    //      permanent: false,
    //    }
    //  ]
    //}
}

module.exports = withPlugins([], nextConfig);
