import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@poco.love/components"],
  skipTrailingSlashRedirect: true,
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: "/drop-twitch/:path*",
        destination: "https://eeenbnb.github.io/drop-twitch/:path*",
      },
    ];
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
