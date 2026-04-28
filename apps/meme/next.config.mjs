import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@poco.love/components"],
  async rewrites() {
    return [
      {
        source: "/drop-twitch",
        destination: "https://eeenbnb.github.io/drop-twitch/",
      },
    ];
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
