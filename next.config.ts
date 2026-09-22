import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Le client Prisma genere est un paquet natif cote serveur: il ne doit pas
  // etre embarque dans le bundle client par le compilateur.
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-pg", "pg"],
};

export default nextConfig;
