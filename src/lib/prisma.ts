import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL est absente. Renseignez-la dans .env.local en developpement ou dans les " +
      "variables d'environnement de la plateforme d'hebergement en production.",
  );
}

// Un seul client par processus. En developpement, Next.js recharge les modules a chaque
// modification: sans ce cache global, chaque rechargement ouvrirait un nouveau pool et
// epuiserait les connexions de la base serverless.
export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
