/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "api.microlink.io", // Microlink Image Preview
        ],
      },
      output: "export",  // <=== enables static exports
      reactStrictMode: true,
};

export default nextConfig;
