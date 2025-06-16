import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath : process.env.NODE_ENV === "production" ? "/gordon_personal_page" :"", 
  assetPrefix:  process.env.NODE_ENV === "production" ? "/gordon_personal_page" :"", 
  output: 'export',
  images: {
  unoptimized: true
}

};

export default nextConfig;
