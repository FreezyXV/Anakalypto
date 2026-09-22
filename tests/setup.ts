import path from "node:path";
import { config as loadEnv } from "dotenv";

import { resolveTestDatabaseUrl } from "./helpers/testDatabaseUrl";

// Charge avant tout import applicatif: le singleton Prisma lit DATABASE_URL au chargement
// du module.
loadEnv({ path: path.resolve(process.cwd(), ".env.test"), override: false, quiet: true });

const url = resolveTestDatabaseUrl();
process.env["DATABASE_URL"] = url;
process.env["DIRECT_URL"] = url;
