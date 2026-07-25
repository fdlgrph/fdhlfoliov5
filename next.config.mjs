/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.termai.cc",
      },
    ],
  },
};

export default nextConfig;
