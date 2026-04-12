/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.1.201", "localhost"],
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
