/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
};

module.exports = nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
