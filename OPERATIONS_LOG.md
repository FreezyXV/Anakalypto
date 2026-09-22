# Journal des operations

Journal informatif des operations significatives menees sur l'infrastructure d'Anakalypto :
creation de ressources, migrations, imports de contenu, deploiements. Horodatage en UTC.

| Date (UTC)       | Operation                        | Commande                                                              | Cible                               | Resultat                                                                                                                  |
| ---------------- | -------------------------------- | --------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 2026-09-22 13:05 | Installation du plugin de design | `npm install -g ui-ux-pro-max-cli` puis `uipro init --ai claude`      | Poste de travail, `.claude/skills/` | Succes. 8 skills installees.                                                                                              |
| 2026-09-22 13:07 | Initialisation du projet         | `npx create-next-app@16.3.5` (reference) puis configuration manuelle  | Depot local                         | Succes. Next.js 16.3.5, React 19.2.8, Tailwind 4.3.3, Prisma 7.10.0.                                                      |
| 2026-09-22 13:12 | Base de developpement locale     | `createdb anakalypto_dev`, `createdb anakalypto_test`                 | PostgreSQL 16.13 local              | Succes. Roles et bases crees.                                                                                             |
| 2026-09-22 13:13 | Migration initiale               | `npx prisma migrate dev --name init`                                  | `anakalypto_dev`                    | Succes. 7 tables, 1 enumeration.                                                                                          |
| 2026-09-22 13:15 | Migration recherche francaise    | `npx prisma migrate dev` (migration SQL manuelle `add_french_search`) | `anakalypto_dev`                    | Succes. Extensions `unaccent` et `pg_trgm`, configuration `fr`, colonne `searchVector`, trigger et index GIN.             |
| 2026-09-22 13:19 | Validation du corpus             | `npx tsx prisma/seed.ts --dry-run`                                    | `content/`                          | 4 anomalies detectees, aucune ecriture. Voir la section « Corrections de contenu » ci-dessous.                            |
| 2026-09-22 13:20 | Import du corpus (developpement) | `npx tsx prisma/seed.ts`                                              | `anakalypto_dev`                    | Succes. 196 categories, 118 articles, 448 etiquettes, 177 sources, 77 liens.                                              |
| 2026-09-22 13:21 | Controle d'idempotence           | `npx tsx prisma/seed.ts` (seconde execution)                          | `anakalypto_dev`                    | Succes. 0 creation, 0 mise a jour, 314 blocs inchanges, aucun doublon.                                                    |
| 2026-09-22 13:24 | Suite de tests                   | `npm test`                                                            | `anakalypto_test`                   | Succes. 49 tests, 4 fichiers.                                                                                             |
| 2026-09-22 13:30 | Migration normalisation du titre | `npx prisma migrate dev` (migration `normalize_search_title`)         | `anakalypto_dev`                    | Succes. Colonne `searchTitle` et index trigramme.                                                                         |
| 2026-09-22 13:36 | Build de production              | `npm run build`                                                       | Local                               | Succes. 321 pages, dont 314 generees statiquement.                                                                        |
| 2026-09-22 13:44 | Verification du rendu            | Serveur local et Chromium                                             | http://localhost:3000               | Succes. Pages, recherche, 404, sitemap et robots conformes. Pas de defilement horizontal a 375 px.                        |
| 2026-09-22 13:52 | Acces Neon                       | `neon projects list`                                                  | console.neon.tech                   | Echec. Aucun jeton dans l'environnement, et hote refuse par la politique reseau de la session (403 au CONNECT du proxy).  |
| 2026-09-22 13:52 | Acces Vercel                     | `vercel whoami`                                                       | api.vercel.com                      | Echec. CLI non authentifiee (Logged out), et hote refuse par la politique reseau de la session (403 au CONNECT du proxy). |

## Operations non realisees

Le jalon 7 (deploiement) n'a pas pu etre execute depuis la session d'automatisation, pour deux
raisons independantes et verifiees :

1. **Aucun identifiant.** Ni `VERCEL_TOKEN`, ni `NEON_API_KEY`, ni aucune variable equivalente
   n'etait presente dans l'environnement. `vercel whoami` repond « Logged out », et
   `neon login` comme `vercel login` sont des flux interactifs qui ouvrent un navigateur.
2. **Reseau sortant restreint.** La politique reseau de cette session n'autorise qu'une liste
   d'hotes (registre npm, GitHub, API Anthropic, polices Google). Les appels vers
   `console.neon.tech` et `api.vercel.com` recoivent un 403 au CONNECT du proxy sortant.

Restent donc a realiser par une personne disposant des acces, en suivant la procedure pas a
pas du README : provisionnement Neon, liaison du projet Vercel au depot GitHub, declaration
des variables d'environnement, `prisma migrate deploy` sur la base de production, seed de
production et deploiement.

Tout ce qui ne dependait pas de ces acces a ete realise et verifie localement : schema,
migrations, recherche francaise, import du corpus, pages, SEO, accessibilite, tests et build
de production.

## Corrections de contenu

Anomalies relevees par la validation du corpus livre, et traitement retenu.

1. **`content/articles-batch-2.md` — etiquette `1948` lue comme un nombre.** En YAML,
   `tags: [droit, DUDH, ONU, 1948]` produit un entier, refuse par le schema. Traitement :
   le schema accepte desormais une etiquette numerique et la convertit en chaine, plutot
   que d'imposer des guillemets aux redacteurs. Le corpus n'a pas ete modifie.
2. **Deux references d'articles lies introuvables.** Consequence directe du point 1 :
   l'article `declaration-universelle-droits-homme-1948` etant rejete, les deux articles qui
   le citaient signalaient une reference morte. Resolu par le point 1.
3. **`content/categories.md` — categorie « Chimie industrielle ».** Le chemin
   `industries/industrie-lourde/chimie` se terminait par `chimie`, alors que le slug de la
   categorie est `chimie-industrielle` et que le slug `chimie` est deja porte par
   `sciences-fondamentales/chimie`. Le chemin a ete corrige en
   `industries/industrie-lourde/chimie-industrielle`, dans `categories.md` et dans
   l'article de `articles-batch-6.md` qui s'y rattachait.

## Ecarts par rapport a la specification initiale

1. **URLs de connexion Prisma.** La specification place `url = env("DATABASE_URL")` dans le
   bloc `datasource` du schema. Prisma 7 refuse cette forme et impose de declarer les URLs
   dans `prisma.config.ts`. Le projet suit donc l'API de la version epinglee : le schema ne
   porte que le `provider`, `prisma.config.ts` fournit l'URL de migration (`DIRECT_URL` si
   elle existe, sinon `DATABASE_URL`) et l'application fournit l'URL d'execution via
   l'adaptateur `@prisma/adapter-pg`, exactement comme decrit dans la specification.
2. **Profondeur des routes.** La specification decrit des routes
   `[category]/[subcategory]/[article]`. Le corpus livre comporte trois niveaux de categories
   et rattache ses 118 articles au troisieme, ce que ces routes ne peuvent pas exprimer. Le projet utilise une
   route unique qui resout un chemin de profondeur quelconque vers une categorie ou un
   article. Les URLs restent lisibles et identiques a ce que la specification decrit pour
   les deux premiers niveaux.
3. **Composant FigurePlaceholder.** La specification demande un composant React pour les
   emplacements d'illustration. Les 118 emplacements du corpus sont tous poses dans le corps
   des articles, converti en HTML par la chaine Markdown : un composant React ne pourrait pas
   les servir sans decouper le corps rendu. Le cadre neutre legende est donc produit par
   `src/lib/markdown.ts`, et sa mise en forme vit dans la classe `figure-placeholder` de
   `globals.css`. Le resultat visuel et l'emplacement prevu pour le texte alternatif sont
   ceux decrits par la specification.
