"use strict";

// next.config.js
var nextConfig = {
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      poll: 1e3,
      aggregateTimeout: 300
    };
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      fs: false
      // the solution
    };
    return config;
  }
};
module.exports = nextConfig;
