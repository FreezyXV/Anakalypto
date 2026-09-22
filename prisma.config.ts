import path from "node:path";
import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";

// Prisma 7 ne charge plus automatiquement les fichiers .env: on aligne ici l'ordre de
// priorite de Next.js (.env.local prime sur .env) pour que la CLI et l'application
// pointent toujours vers la meme base.
for (const file of [".env.local", ".env"]) {
  loadEnv({ path: path.resolve(process.cwd(), file), override: false, quiet: true });
}

/**
 * Lit une variable d'environnement en traitant une valeur vide comme absente.
 *
 * Une variable declaree mais laissee vide est courante sur les plateformes d'hebergement,
 * ou un champ non rempli est transmis comme chaine vide. L'operateur `??` ne retomberait
 * pas dessus, et la CLI echouerait sur un « Connection url is empty » peu parlant.
 */
function readEnv(name: string): string | undefined {
  const value = process.env[name];
  return value !== undefined && value.trim().length > 0 ? value : undefined;
}

// La CLI (migrate, studio, introspection) utilise une connexion directe quand elle est
// disponible: les poolers (Neon, PgBouncer) ne supportent pas les verrous consultatifs
// dont Prisma Migrate a besoin. L'application, elle, garde l'URL poolee.
const migrationUrl = readEnv("DIRECT_URL") ?? readEnv("DATABASE_URL");

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: migrationUrl ?? "",
  },
});
