import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/tools/buythedip",
        destination:
          "https://moonie-tool-buythedip-production-875a.up.railway.app/",
      },
      {
        source: "/tools/buythedip/:path*",
        destination:
          "https://moonie-tool-buythedip-production-875a.up.railway.app/:path*",
      },
    ];
  },
};

export default nextConfig;
