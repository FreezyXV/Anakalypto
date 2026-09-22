# Journal des operations

Journal informatif des operations significatives menees sur l'infrastructure d'Anakalypto :
creation de ressources, migrations, imports de contenu, deploiements. Horodatage en UTC.

| Date (UTC)       | Operation                              | Commande                                                                                             | Cible                               | Resultat                                                                                                                                                                                                                                                                                                                           |
| ---------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-09-22 13:05 | Installation du plugin de design       | `npm install -g ui-ux-pro-max-cli` puis `uipro init --ai claude`                                     | Poste de travail, `.claude/skills/` | Succes. 8 skills installees.                                                                                                                                                                                                                                                                                                       |
| 2026-09-22 13:07 | Initialisation du projet               | `npx create-next-app@16.3.5` (reference) puis configuration manuelle                                 | Depot local                         | Succes. Next.js 16.3.5, React 19.2.8, Tailwind 4.3.3, Prisma 7.10.0.                                                                                                                                                                                                                                                               |
| 2026-09-22 13:12 | Base de developpement locale           | `createdb anakalypto_dev`, `createdb anakalypto_test`                                                | PostgreSQL 16.13 local              | Succes. Roles et bases crees.                                                                                                                                                                                                                                                                                                      |
| 2026-09-22 13:13 | Migration initiale                     | `npx prisma migrate dev --name init`                                                                 | `anakalypto_dev`                    | Succes. 7 tables, 1 enumeration.                                                                                                                                                                                                                                                                                                   |
| 2026-09-22 13:15 | Migration recherche francaise          | `npx prisma migrate dev` (migration SQL manuelle `add_french_search`)                                | `anakalypto_dev`                    | Succes. Extensions `unaccent` et `pg_trgm`, configuration `fr`, colonne `searchVector`, trigger et index GIN.                                                                                                                                                                                                                      |
| 2026-09-22 13:19 | Validation du corpus                   | `npx tsx prisma/seed.ts --dry-run`                                                                   | `content/`                          | 4 anomalies detectees, aucune ecriture. Voir la section « Corrections de contenu » ci-dessous.                                                                                                                                                                                                                                     |
| 2026-09-22 13:20 | Import du corpus (developpement)       | `npx tsx prisma/seed.ts`                                                                             | `anakalypto_dev`                    | Succes. 196 categories, 118 articles, 448 etiquettes, 177 sources, 77 liens.                                                                                                                                                                                                                                                       |
| 2026-09-22 13:21 | Controle d'idempotence                 | `npx tsx prisma/seed.ts` (seconde execution)                                                         | `anakalypto_dev`                    | Succes. 0 creation, 0 mise a jour, 314 blocs inchanges, aucun doublon.                                                                                                                                                                                                                                                             |
| 2026-09-22 13:24 | Suite de tests                         | `npm test`                                                                                           | `anakalypto_test`                   | Succes. 49 tests, 4 fichiers.                                                                                                                                                                                                                                                                                                      |
| 2026-09-22 13:30 | Migration normalisation du titre       | `npx prisma migrate dev` (migration `normalize_search_title`)                                        | `anakalypto_dev`                    | Succes. Colonne `searchTitle` et index trigramme.                                                                                                                                                                                                                                                                                  |
| 2026-09-22 13:36 | Build de production                    | `npm run build`                                                                                      | Local                               | Succes. 321 pages, dont 314 generees statiquement.                                                                                                                                                                                                                                                                                 |
| 2026-09-22 13:44 | Verification du rendu                  | Serveur local et Chromium                                                                            | http://localhost:3000               | Succes. Pages, recherche, 404, sitemap et robots conformes. Pas de defilement horizontal a 375 px.                                                                                                                                                                                                                                 |
| 2026-09-22 13:52 | Acces Neon                             | `neon projects list`                                                                                 | console.neon.tech                   | Echec. Aucun jeton dans l'environnement, et hote refuse par la politique reseau de la session (403 au CONNECT du proxy).                                                                                                                                                                                                           |
| 2026-09-22 13:52 | Acces Vercel                           | `vercel whoami`                                                                                      | api.vercel.com                      | Echec. CLI non authentifiee (Logged out), et hote refuse par la politique reseau de la session (403 au CONNECT du proxy).                                                                                                                                                                                                          |
| 2026-09-22 14:05 | Audit d'accessibilite                  | axe-core 4.13 (WCAG 2.1 A et AA) sur Chromium                                                        | 7 pages, themes clair et sombre     | 1 violation `link-in-text-block` relevee puis corrigee. Controle final : aucune violation.                                                                                                                                                                                                                                         |
| 2026-09-22 18:10 | Correction du repli d'URL de migration | `npm run setup:db` avec `DIRECT_URL` vide                                                            | Base locale vierge                  | Defaut reproduit puis corrige. Une `DIRECT_URL` declaree mais vide faisait echouer les migrations (`Connection url is empty`) au lieu de retomber sur `DATABASE_URL`.                                                                                                                                                              |
| 2026-09-22 18:40 | Test d'acces a la base Neon            | TCP 5432 et HTTPS 443 vers `ep-icy-poetry-zaw0widg-pooler.c-2.eu-west-2.aws.neon.tech`               | Neon, projet bitter-recipe-44728859 | Echec. Port 5432 bloque en sortie ; le port 443 accepte la connexion TCP mais le proxy refuse l'hote (403 au CONNECT). L'hote ne resout qu'en IPv6 par defaut, or le conteneur n'a pas d'IPv6 ; l'adresse IPv4 existe (3.10.149.215) mais le port reste bloque.                                                                    |
| 2026-09-22 18:45 | Chemin de deploiement autonome         | `npm run build:with-db` sur une base vierge, puis rejoue                                             | Base locale                         | Succes. Migrations, 196 categories et 118 articles importes, 321 pages generees. Seconde execution : 0 creation, 0 doublon.                                                                                                                                                                                                        |
| 2026-09-22 19:05 | Poste de travail, Node 22              | `nvm use v22.22.3` puis `npm install`                                                                | Depot local                         | Succes apres correction. Node 23.9 (version par defaut du poste) est refuse par Prisma 7, qui exige 20.19+, 22.12+ ou 24+. Node 22.22.3 retenu, meme branche que l'integration continue.                                                                                                                                           |
| 2026-09-22 19:12 | Etat des migrations en production      | `npx prisma migrate status`                                                                          | Neon, branche `production`          | Base joignable et vide. 3 migrations en attente.                                                                                                                                                                                                                                                                                   |
| 2026-09-22 19:14 | Migrations et import en production     | `npm run setup:db`                                                                                   | Neon, branche `production`          | Succes. 3 migrations appliquees, 196 categories, 118 articles, 448 etiquettes, 177 sources, 77 liens.                                                                                                                                                                                                                              |
| 2026-09-22 19:16 | Controle d'idempotence de l'import     | `npm run seed` (seconde execution)                                                                   | Neon, branche `production`          | Succes. 0 creation, 0 mise a jour, 196 categories et 118 articles inchanges.                                                                                                                                                                                                                                                       |
| 2026-09-22 19:18 | Qualite avant deploiement              | `npm run format:check`, `npm run lint`, `npm run typecheck`                                          | Depot local                         | Succes, aucun ecart. `npm test` non joue localement faute de PostgreSQL sur le poste : la CI le couvre avec un service `postgres:16`.                                                                                                                                                                                              |
| 2026-09-22 19:19 | Cadre du projet Vercel                 | `framework` passe de `null` a `nextjs`, `ssoProtection` desactive                                    | Vercel, projet `anakalypto`         | Succes. Le projet avait ete importe sans preset de framework, et l'authentification Vercel rendait l'URL de production inaccessible au public.                                                                                                                                                                                     |
| 2026-09-22 19:19 | Variable NEXT_PUBLIC_SITE_URL          | Creation pour l'environnement `production`                                                           | Vercel, projet `anakalypto`         | Succes. Fixee ensuite sur `https://anakalypto.vercel.app`, alias court attribue au premier deploiement reussi.                                                                                                                                                                                                                     |
| 2026-09-22 19:20 | Deploiement de production              | Deploiement depuis `main`, commit `2baf2b1`                                                          | Vercel, `anakalypto.vercel.app`     | Succes en 1 min 30. Etat `READY`. Le deploiement precedent avait echoue sur `P2021 The table public.Category does not exist` : base non migree, et non variable absente.                                                                                                                                                           |
| 2026-09-22 19:22 | Verification du site en ligne          | Requetes HTTP sur l'accueil, un article, la recherche, le sitemap, robots.txt et une URL inexistante | `https://anakalypto.vercel.app`     | Succes. Accueil : 196 categories, 118 articles, 177 sources. Article James Webb : sommaire, sources, date de verification. `?q=electricite` : 7 resultats malgre l'absence d'accents. `?q=telescpoe` : 1 resultat par repli trigramme. Sitemap : 317 URL. `robots.txt` interdit `/recherche`. URL inexistante : 404 personnalisee. |

## Mise en production

Le jalon 7 est realise. Le site est en ligne sur `https://anakalypto.vercel.app`, servi depuis
la branche `main` du depot `FreezyXV/Anakalypto`, avec deploiement automatique a chaque `push`.

Le blocage decrit precedemment - aucun identifiant Vercel ou Neon, et une politique reseau
refusant `console.neon.tech` et `api.vercel.com` - tenait a la session d'automatisation
distante, pas au projet. Depuis un poste dote des acces, les deux hotes repondent et la chaine
complete a pu etre executee : migrations, import du corpus, deploiement, verification.

Chemin retenu pour la base : le chemin B du README, preparation explicite depuis le poste. La
commande de build du projet Vercel reste `npm run build`. Le script `build:with-db` existe et
reste disponible, mais n'est pas active : la base est preparee une fois, deliberement, et non
a chaque deploiement.

Reste a faire, hors de portee d'une session d'automatisation :

- **Rotation du mot de passe Neon.** Le mot de passe du role `neondb_owner` a circule dans une
  conversation. Il doit etre regenere depuis la console Neon (Connect, Reset password), puis
  reporte dans `DATABASE_URL` et `DIRECT_URL` sur Vercel et dans `.env.local`, avant un
  redeploiement de controle. L'operation demande la console Neon, qui n'expose pas d'API
  accessible ici.

## Premier deploiement Vercel

Deux tentatives ont echoue avant la mise en ligne, pour des raisons differentes.

**Premiere tentative**, depuis l'interface Vercel :

```
Error: Failed to collect configuration for /sitemap.xml
  [cause]: Error: DATABASE_URL est absente.
```

Aucune variable d'environnement n'etait declaree sur le projet, et l'import partait de la
branche `claude/install-frontend-design-skill-09qipb`, branche par defaut du depot a ce
moment-la.

**Seconde tentative**, projet reimporte depuis `main` avec `DATABASE_URL` et `DIRECT_URL`
declarees :

```
Invalid `prisma.category.findMany()` invocation:
The table `public.Category` does not exist in the current database.  (P2021)
```

La connexion Neon fonctionnait donc depuis Vercel ; c'est la base qui n'avait jamais ete
migree. Le correctif est l'etape 5 du README, appliquee depuis le poste de travail.

Aucune des deux causes ne tient au code. La section « Erreurs frequentes au premier
deploiement » du README les recense toutes les deux.

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
