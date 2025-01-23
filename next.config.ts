import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  output: "standalone", // For containerized deployment
  distDir: ".next", // Build output directory
  cleanDistDir: true, // Clean before build
};

export default nextConfig;
