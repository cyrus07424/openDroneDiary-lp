import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'export' to allow API routes to work
  // When deploying as static, you can set this back to 'export' 
  // and use the client-side integration only
};

export default nextConfig;
