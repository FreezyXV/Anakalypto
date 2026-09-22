/**
 * Resout l'URL de la base de test, et refuse toute base qui n'en est manifestement pas une.
 *
 * Les tests d'integration executent TRUNCATE entre les cas. Une erreur de configuration
 * -- un fichier .env.test absent, ou un DATABASE_URL exporte dans le shell -- suffirait
 * sinon a vider la base de developpement. Le garde-fou impose que le nom de la base
 * contienne "test", faute de quoi la suite s'arrete avant la premiere ecriture.
 */
export function resolveTestDatabaseUrl(): string {
  const url = process.env["TEST_DATABASE_URL"] ?? process.env["DATABASE_URL"];

  if (!url) {
    throw new Error(
      "Aucune base de test configuree. Renseignez TEST_DATABASE_URL, dans l'environnement " +
        "ou dans un fichier .env.test.",
    );
  }

  const databaseName = databaseNameOf(url);
  if (!databaseName || !/test/i.test(databaseName)) {
    throw new Error(
      `Refus d'utiliser la base "${databaseName ?? url}" pour les tests: son nom ne contient ` +
        `pas "test". Les tests d'integration vident les tables. Renseignez TEST_DATABASE_URL ` +
        `avec une base dediee.`,
    );
  }

  return url;
}

/** Extrait le nom de la base d'une URL de connexion PostgreSQL. */
function databaseNameOf(url: string): string | null {
  try {
    const name = new URL(url).pathname.replace(/^\//, "");
    return name.length > 0 ? name : null;
  } catch {
    return null;
  }
}
