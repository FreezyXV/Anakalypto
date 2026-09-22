import { execFileSync } from "node:child_process";
import path from "node:path";
import { config as loadEnv } from "dotenv";

import { resolveTestDatabaseUrl } from "./helpers/testDatabaseUrl";

/**
 * Applique les migrations a la base de test avant la suite. Les tests d'integration
 * supposent un schema a jour, y compris la configuration de recherche francaise.
 */
export default function setup(): void {
  loadEnv({ path: path.resolve(process.cwd(), ".env.test"), override: false, quiet: true });
  const url = resolveTestDatabaseUrl();

  execFileSync("npx", ["prisma", "migrate", "deploy"], {
    stdio: "inherit",
    env: { ...process.env, DATABASE_URL: url, DIRECT_URL: url },
  });
}
