import { execFileSync } from "node:child_process";
import path from "node:path";
import { config as loadEnv } from "dotenv";

/**
 * Applique les migrations a la base de test avant la suite. Les tests d'integration
 * supposent un schema a jour, y compris la configuration de recherche francaise.
 */
export default function setup(): void {
  loadEnv({ path: path.resolve(process.cwd(), ".env.test"), override: false, quiet: true });
  const url = process.env["TEST_DATABASE_URL"] ?? process.env["DATABASE_URL"];
  if (!url) {
    throw new Error("TEST_DATABASE_URL ou DATABASE_URL doit pointer vers une base de test.");
  }

  execFileSync("npx", ["prisma", "migrate", "deploy"], {
    stdio: "inherit",
    env: { ...process.env, DATABASE_URL: url, DIRECT_URL: url },
  });
}
