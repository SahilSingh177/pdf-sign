require("dotenv").config({ path: "../../.env" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  transpilePackages: [
    "@insurahub/prisma",
    "@insurahub/lib",
    "@insurahub/ui",
    "@insurahub/pdf",
    "@insurahub/features",
    "@insurahub/signing",
    "react-signature-canvas",
  ],
};

module.exports = nextConfig;
