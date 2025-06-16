import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath : process.env.NODE_ENV === "production" ? "/gordon_personal_page" :"", 
  output: 'export',
};

export default nextConfig;
