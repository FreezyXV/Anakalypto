import path from "node:path";
import { config as loadEnv } from "dotenv";

// Charge avant tout import applicatif: le singleton Prisma lit DATABASE_URL au chargement
// du module. TEST_DATABASE_URL prime pour eviter tout risque d'ecriture dans la base de
// developpement, les tests d'integration vidant les tables.
loadEnv({ path: path.resolve(process.cwd(), ".env.test"), override: false, quiet: true });

const url = process.env["TEST_DATABASE_URL"] ?? process.env["DATABASE_URL"];
if (!url) {
  throw new Error("TEST_DATABASE_URL ou DATABASE_URL doit pointer vers une base de test.");
}
process.env["DATABASE_URL"] = url;
process.env["DIRECT_URL"] = url;
