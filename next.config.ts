import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.56.1'],
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   allowedDevOrigins: ['192.168.56.1'],
//   webpack: (config) => {
//     config.resolve.alias.canvas = false;
//     return config;
//   },
// };

// export default nextConfig;