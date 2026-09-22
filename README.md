# Anakalypto

Encyclopédie web francophone des sciences et des savoirs. Du grec _anakalypto_ : dévoiler.

Le site couvre les sciences fondamentales, le corps humain et la santé, l'alimentation,
l'espace, l'aéronautique, l'automobile, les industries, l'intelligence artificielle,
l'informatique, l'énergie, le climat, l'ingénierie et les sciences humaines. Il s'adresse au
public curieux et aux étudiants francophones. Chaque article est rédigé de manière originale,
cite ses sources et indique la date de leur dernière vérification.

État actuel du corpus : 196 catégories sur trois niveaux, 118 articles publiés, 177 sources
citées.

## Sommaire

- [Pile technique](#pile-technique)
- [Prérequis](#prérequis)
- [Installation locale](#installation-locale)
- [Variables d'environnement](#variables-denvironnement)
- [Commandes](#commandes)
- [Format du fichier de contenu](#format-du-fichier-de-contenu)
- [Architecture](#architecture)
- [Recherche plein texte française](#recherche-plein-texte-française)
- [Déploiement sur Vercel et Neon](#déploiement-sur-vercel-et-neon)
- [Charte de fiabilité et droit d'auteur](#charte-de-fiabilité-et-droit-dauteur)
- [Conventions du dépôt](#conventions-du-dépôt)

## Pile technique

| Élément      | Version | Rôle                                                                     |
| ------------ | ------- | ------------------------------------------------------------------------ |
| Next.js      | 16.3.5  | App Router, React Server Components, Turbopack, SSG et ISR               |
| React        | 19.2.8  | Rendu                                                                    |
| TypeScript   | 5.x     | Mode strict, `noUncheckedIndexedAccess`, `noImplicitOverride`            |
| Prisma ORM   | 7.10.0  | Accès aux données, migrations, client généré dans `src/generated/prisma` |
| PostgreSQL   | 16+     | Base de données ; Neon en production                                     |
| Tailwind CSS | 4.3.3   | Mise en forme, configuration CSS-first via `@theme`                      |
| Vitest       | 3.x     | Tests unitaires et d'intégration                                         |

Prisma est volontairement épinglé sur la branche 7 (`"prisma": "^7"`). La version 8 est encore
en _release candidate_ au moment de la rédaction.

## Prérequis

- Node.js 20.9 ou plus récent (22 recommandé, version utilisée en intégration continue).
- PostgreSQL 16 ou plus récent, avec les extensions `unaccent` et `pg_trgm` disponibles.
  Elles sont fournies par `postgresql-contrib` et activées par la migration.
- npm 10 ou plus récent.

## Installation locale

```bash
git clone https://github.com/FreezyXV/Anakalypto.git
cd Anakalypto
npm install
```

Créer les bases de développement et de test :

```bash
createdb anakalypto_dev
createdb anakalypto_test
```

Créer `.env.local` à partir du modèle et renseigner les chaînes de connexion :

```bash
cp .env.example .env.local
```

Appliquer les migrations, puis importer le corpus :

```bash
npm run prisma:migrate     # crée le schéma et la configuration de recherche française
npm run seed               # importe content/ dans la base
npm run dev                # http://localhost:3000
```

Pour exécuter les tests d'intégration, créer un fichier `.env.test` pointant vers une base
distincte (les tests vident les tables) :

```dotenv
TEST_DATABASE_URL="postgresql://utilisateur:motdepasse@localhost:5432/anakalypto_test"
```

## Variables d'environnement

Aucune valeur réelle n'est versionnée : `.env.local`, `.env.test` et `.env*.local` sont
ignorés par Git. `.env.example` documente les clés attendues.

| Variable               | Obligatoire | Rôle                                                                                                                            |
| ---------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `DATABASE_URL`         | oui         | Connexion utilisée par l'application. En production, la chaîne **poolée** de Neon.                                              |
| `DIRECT_URL`           | recommandée | Connexion **directe**, utilisée par Prisma Migrate et Prisma Studio. Peut valoir la même chose que `DATABASE_URL` en local.     |
| `NEXT_PUBLIC_SITE_URL` | oui         | URL canonique publique, sans barre oblique finale. Alimente les métadonnées, les URL canoniques, `sitemap.xml` et `robots.txt`. |
| `TEST_DATABASE_URL`    | tests       | Base dédiée aux tests d'intégration.                                                                                            |

Pourquoi deux URL : les poolers de connexions (Neon, PgBouncer) ne supportent pas les verrous
consultatifs dont Prisma Migrate a besoin. L'application garde la chaîne poolée, adaptée au
mode serverless ; les migrations passent par la connexion directe. À défaut de `DIRECT_URL`,
`DATABASE_URL` est utilisée pour les deux.

À noter : avec Prisma 7, les URL de connexion ne se déclarent plus dans `prisma/schema.prisma`
mais dans `prisma.config.ts`. Le schéma ne porte que le `provider` ; l'application fournit sa
connexion au client via l'adaptateur `@prisma/adapter-pg`.

## Commandes

| Commande                                  | Effet                                                                                    |
| ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| `npm run dev`                             | Serveur de développement.                                                                |
| `npm run build`                           | Génère le client Prisma puis construit le site (321 pages statiques).                    |
| `npm start`                               | Sert le site construit.                                                                  |
| `npm run lint`                            | ESLint.                                                                                  |
| `npm run format` / `npm run format:check` | Prettier, écriture ou vérification.                                                      |
| `npm run typecheck`                       | `tsc --noEmit`.                                                                          |
| `npm test`                                | Suite Vitest complète (nécessite la base de test).                                       |
| `npm run prisma:migrate`                  | Crée et applique une migration en développement.                                         |
| `npm run prisma:deploy`                   | Applique les migrations existantes (production).                                         |
| `npm run prisma:studio`                   | Explorateur de données Prisma.                                                           |
| `npm run seed`                            | Importe `content/` dans la base pointée par `DATABASE_URL`.                              |
| `npm run seed:check`                      | Valide le corpus sans rien écrire.                                                       |
| `npm run setup:db`                        | Applique les migrations puis importe le corpus, dans cet ordre.                          |
| `npm run build:with-db`                   | Migrations, import du corpus, puis build. Destiné à la commande de build d'un hébergeur. |

Le seed accepte `--content=<répertoire>` pour importer depuis un autre dossier.

## Format du fichier de contenu

Le répertoire `content/` contient un ou plusieurs fichiers Markdown. Chaque fichier concatène
des blocs, chacun introduit par un frontmatter YAML. Les blocs sont séparés par une ligne
`---` isolée.

### Bloc catégorie

```markdown
---
type: category
title: Physique
slug: physique
categoryPath: sciences-fondamentales/physique
level: 1
parentSlug: sciences-fondamentales
summary: >
  Résumé de 150 à 250 mots présentant le domaine.
---
```

### Bloc article

```markdown
---
type: article
title: Le télescope spatial James Webb
slug: telescope-spatial-james-webb
categoryPath: espace-et-astronomie/exploration-spatiale/sondes
summary: >
  Résumé court affiché dans les listes et les métadonnées.
tags: [astronomie, telescope, infrarouge]
relatedArticles: [artemis-ii-retour-vers-la-lune]
sources:
  - title: "James Webb Space Telescope"
    url: "https://science.nasa.gov/mission/webb/"
    publisher: "NASA"
    date: "2026"
lastVerified: 2026-09-21
status: published
---

## Résumé

Corps de l'article en Markdown.
```

### Règles vérifiées à l'import

Le seed valide l'ensemble du corpus avant d'écrire quoi que ce soit. Une seule anomalie
suffit à annuler tout l'import, avec un code de sortie non nul et un rapport localisé
(`fichier:ligne [champ] message`).

- `slug` en minuscules, chiffres et tirets ; unique parmi les catégories, et unique parmi les
  articles.
- `categoryPath` se termine par le slug de la catégorie, et `level` correspond à la
  profondeur du chemin (0 pour le premier niveau).
- `parentSlug` correspond à l'avant-dernier segment du chemin, et la catégorie parente existe.
  Il est vide pour le niveau 0.
- Chaque article se rattache à une catégorie existante.
- Chaque entrée de `relatedArticles` désigne un article existant, sans doublon ni
  auto-référence.
- Chaque source porte un titre et une URL valide.
- `lastVerified` est une date `AAAA-MM-JJ`.
- Un article `published` cite au moins une source. C'est la charte de fiabilité, appliquée
  mécaniquement.
- L'URL d'un article n'entre pas en collision avec celle d'une catégorie.

### Conventions de corps d'article

- Les titres de section commencent au niveau `##` ; le titre de l'article est fourni par le
  frontmatter.
- Un emplacement d'illustration s'écrit
  `[Emplacement image : description, légende et texte alternatif à fournir ultérieurement.]`
  et devient un cadre neutre avec légende.
- Une section `## Articles liés` dans le corps est retirée au rendu : la liste est reconstruite
  à partir de `relatedArticles`, avec de vrais liens.

### Idempotence

Le seed est rejouable. Chaque entité est identifiée par son slug, et seules les différences
réelles donnent lieu à une écriture. Le rapport final distingue les créations, les mises à
jour et les blocs inchangés. Lorsque le corps d'un article change, la version précédente est
archivée dans la table `Revision` avant d'être remplacée.

## Architecture

```
content/                     corpus Markdown
prisma/
  schema.prisma              modèle de données
  migrations/                migrations, dont la recherche française
  seed.ts                    point d'entrée de l'import
src/
  app/
    (routes)/                pages
      page.tsx               accueil
      categories/            index de l'arborescence
      recherche/             recherche
      a-propos/              méthodologie et charte
      [...chemin]/           catégories et articles
    not-found.tsx            404
    robots.ts, sitemap.ts    métadonnées de site
  components/                Breadcrumb, Toc, ArticleCard, SearchBox, ThemeToggle, ...
  lib/
    prisma.ts                client unique par processus
    queries.ts               accès aux données des pages
    markdown.ts              rendu Markdown et table des matières
    search.ts                recherche plein texte et repli trigramme
    seo.ts                   métadonnées, JSON-LD, formats de date
    content/                 lecture, validation Zod et import du corpus
  generated/prisma/          client Prisma généré (non versionné)
tests/                       Vitest
```

### Routage

Une route unique, `src/app/(routes)/[...chemin]/page.tsx`, résout un chemin complet vers une
catégorie ou vers un article.

L'arborescence éditoriale compte trois niveaux de catégories, et les articles se rattachent au
troisième : une URL d'article comporte donc quatre segments
(`/espace-et-astronomie/exploration-spatiale/sondes/telescope-spatial-james-webb`). Une suite
de segments nommés ne peut pas exprimer sans ambiguïté à la fois les catégories de profondeur
variable et les articles. Le chemin est donc résolu d'abord comme catégorie, puis comme
article rattaché à la catégorie formée par les segments précédents. Les URL restent lisibles
et entièrement composées de slugs.

Toutes ces pages sont générées statiquement au build via `generateStaticParams`, et
revalidées toutes les heures (ISR). Seule la page de recherche est rendue à la demande.

## Recherche plein texte française

La migration `add_french_search` met en place :

- les extensions `unaccent` et `pg_trgm` ;
- une configuration de recherche `fr` qui copie la configuration `french` et insère le
  dictionnaire `unaccent` avant la racinisation, de sorte que « electricite » trouve
  « électricité » ;
- une colonne `searchVector` sur `Article`, pondérée titre (A), résumé (B), corps (C), et
  maintenue par un trigger ;
- un index GIN sur ce vecteur.

La migration `normalize_search_title` ajoute une colonne `searchTitle` contenant le titre sans
accent et en minuscules, indexée en trigrammes.

Pourquoi une colonne plutôt qu'un index d'expression : `unaccent()` n'est pas `IMMUTABLE`, ce
qui interdit son usage dans un index calculé ou une colonne générée. Un trigger contourne
cette contrainte sans sacrifier l'indexation.

Le classement utilise `ts_rank_cd`. Lorsque la recherche plein texte rapporte peu de
résultats, un second passage utilise `word_similarity` sur le titre normalisé pour rattraper
les fautes de frappe : « telescpoe » trouve « Le télescope spatial James Webb ». Le seuil
retenu, 0,45, a été mesuré sur le corpus ; les rapprochements fortuits y plafonnent vers 0,27.

## Déploiement sur Vercel et Neon

> **État au 22 septembre 2026.** Les étapes 1 à 3 et 5 à 7 ci-dessous n'ont **pas** pu être
> exécutées depuis la session d'automatisation : aucun jeton Vercel ou Neon n'était présent
> dans l'environnement, et la politique réseau de cette session refuse les connexions vers
> `console.neon.tech` et `api.vercel.com` (réponse 403 au CONNECT du proxy sortant). La
> procédure ci-dessous est donc à exécuter par une personne disposant des accès. Tout ce qui
> ne dépend pas de ces accès a été réalisé et vérifié : schéma, migrations, import du corpus,
> pages, recherche, SEO, tests et build de production.

### 1. Provisionner la base Neon

```bash
npm i -g neon@latest
neon login                                   # ouvre le navigateur
neon projects list
neon link --project-id <identifiant-du-projet> --branch production -y
neon config init
```

Mettre à jour `neon.ts` généré par `neon config init` :

```ts
import { defineConfig } from "@neon/config/v1";

export default defineConfig({});
```

Puis :

```bash
neon deploy
```

Créer une branche Neon distincte pour le développement, afin de ne jamais travailler
directement sur les données de production :

```bash
neon branches create --name dev
```

Récupérer les chaînes de connexion :

```bash
neon connection-string production            # chaîne poolée  -> DATABASE_URL
neon connection-string production --pooled false   # chaîne directe -> DIRECT_URL
```

### 2. Connecter le dépôt à Vercel

```bash
npm i -g vercel@latest
vercel login
vercel link --scope <équipe> --project anakalypto
```

Dans l'interface Vercel, relier le projet au dépôt GitHub `FreezyXV/Anakalypto` et fixer la
branche de production sur `main`. Vercel déclenche alors un déploiement à chaque `push` sur
`main`, et un déploiement de prévisualisation pour chaque autre branche.

### 3. Déclarer les variables d'environnement

```bash
vercel env add DATABASE_URL production
vercel env add DIRECT_URL production
vercel env add NEXT_PUBLIC_SITE_URL production
```

Répéter pour les environnements `preview` et `development` en pointant vers la branche Neon
`dev`. `NEXT_PUBLIC_SITE_URL` doit valoir l'URL publique finale, sans barre oblique finale.

Aucune de ces valeurs ne doit être écrite dans le dépôt.

### 4. Vérifier avant de déployer

```bash
npm run format:check && npm run lint && npm run typecheck && npm test && npm run build
```

Relire le contenu des migrations non encore appliquées avant de les passer en production :

```bash
npx prisma migrate status
```

### 5. Préparer la base de production

Deux chemins, au choix.

#### Chemin A : déploiement autonome, aucune commande locale

Déclarer `build:with-db` comme commande de build du projet d'hébergement (sur Vercel :
Settings, Build and Deployment, Build Command, décocher « Override » puis saisir
`npm run build:with-db`). Chaque déploiement applique alors les migrations, réimporte le
corpus et régénère les pages, dans cet ordre.

Ce chemin traite la base comme un dérivé du dépôt : le corpus vit dans `content/`, versionné,
et la base n'en est que la projection interrogeable. L'import étant idempotent, le rejouer à
chaque déploiement ne crée aucun doublon.

Il impose en revanche de déclarer `DIRECT_URL` avec la chaîne **non poolée** : Prisma Migrate
pose un verrou consultatif, que les poolers en mode transaction ne supportent pas. Sur Neon,
la chaîne directe est la chaîne poolée dont on retire `-pooler` du nom d'hôte.

À éviter si plusieurs déploiements peuvent se construire en parallèle sur la même base, ou si
les environnements de prévisualisation partagent la base de production.

#### Chemin B : préparation explicite, depuis un poste

L'ordre compte : le schéma doit exister et le corpus être importé **avant** le premier
déploiement. La génération statique interroge la base au moment du build ; sur une base vide,
le site se construit sans aucune page d'article.

L'ordre compte : le schéma doit exister et le corpus être importé **avant** le premier
déploiement. La génération statique interroge la base au moment du build ; sur une base vide,
le site se construit sans aucune page d'article.

```bash
DATABASE_URL="<chaîne poolée>" DIRECT_URL="<chaîne directe>" npm run setup:db
```

`setup:db` enchaîne `prisma migrate deploy` puis l'import du corpus. Les deux étapes restent
disponibles séparément (étape 6 pour le seul import) :

```bash
DATABASE_URL="<chaîne poolée>" DIRECT_URL="<chaîne directe>" npm run prisma:deploy
```

`prisma migrate deploy` n'est pas inclus dans le script `build` : chaque déploiement de
prévisualisation le rejouerait, alors que les migrations doivent être appliquées une fois, de
façon délibérée.

### 6. Importer le corpus en production

```bash
DATABASE_URL="<chaîne poolée>" npm run seed:check    # validation seule
DATABASE_URL="<chaîne poolée>" npm run seed          # import
```

Le seed étant idempotent, il peut être rejoué à chaque mise à jour du corpus.

### 7. Déployer et vérifier

```bash
vercel deploy --prod
```

Contrôles après déploiement :

- la page d'accueil affiche le nombre réel d'articles et de catégories ;
- un article se charge, avec son sommaire, ses sources et sa date de vérification ;
- `/recherche?q=electricite` renvoie des résultats, accents ignorés ;
- `/sitemap.xml` liste les pages, et `/robots.txt` interdit `/recherche` ;
- une URL inexistante renvoie bien une 404.

Consigner chaque opération dans `OPERATIONS_LOG.md`.

### Erreurs fréquentes au premier déploiement

| Symptôme dans les journaux de build                         | Cause                                                                                                                                                                                       | Correction                                                                                      |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `DATABASE_URL est absente` pendant « Collecting page data » | Aucune variable d'environnement déclarée sur le projet. La génération statique interroge la base **au moment du build** : la variable est nécessaire au build, pas seulement à l'exécution. | Déclarer `DATABASE_URL` sur le projet, pour l'environnement visé, puis relancer le déploiement. |
| `The table "public.Article" does not exist`                 | Migrations non appliquées à la base de production.                                                                                                                                          | Lancer `npm run setup:db` (étape 5), puis redéployer.                                           |
| Build vert mais site sans article                           | Base migrée, corpus non importé.                                                                                                                                                            | Lancer `npm run seed` (étape 6), puis redéployer pour régénérer les pages statiques.            |
| `Connection url is empty` lors d'une migration              | `DIRECT_URL` déclarée mais laissée vide.                                                                                                                                                    | Renseigner la chaîne directe, ou supprimer la variable : elle retombe alors sur `DATABASE_URL`. |
| Build lancé depuis la mauvaise branche                      | La branche de production du projet ne pointe pas sur `main`.                                                                                                                                | Projet Vercel, Settings, Git, Production Branch : `main`.                                       |

### Portabilité

Le code n'utilise que des fonctionnalités PostgreSQL standard et l'adaptateur `@prisma/adapter-pg`.
Une migration vers un serveur PostgreSQL autogéré, par exemple un Droplet DigitalOcean, ne
demande que de changer `DATABASE_URL` et `DIRECT_URL`, et de s'assurer que `unaccent` et
`pg_trgm` sont installées.

## Charte de fiabilité et droit d'auteur

- **Rédaction originale.** Les articles sont rédigés à partir des sources consultées. Ils ne
  reprennent le texte d'aucune autre encyclopédie.
- **Wikipédia.** La licence CC BY-SA 4.0 n'autorise pas la copie libre : elle impose de
  créditer les auteurs d'origine _et_ de redistribuer toute reprise ou adaptation sous cette
  même licence. Reprendre un paragraphe sans le mentionner constitue une violation de licence.
  Anakalypto n'emprunte pas de texte.
- **Sources vérifiables.** Un article publié sans source est refusé à l'import. Les sources
  privilégiées sont les institutions scientifiques et publiques, les agences spécialisées et
  les publications à comité de lecture.
- **Traçabilité.** Chaque article affiche la date de dernière vérification de ses sources, et
  la version précédente est conservée lors d'une mise à jour.
- **Désaccords scientifiques.** Lorsqu'un sujet est débattu, l'article le signale plutôt que
  de trancher.
- **Portée.** Le site ne fournit ni avis médical, ni conseil juridique, ni recommandation
  financière.

## Conventions du dépôt

- **Aucun emoji**, nulle part : code, commentaires, interface, documentation.
- **Textes visibles en français accentué.** Les commentaires de code et les messages de commit
  restent en ASCII, par choix de portabilité ; l'interface et la documentation utilisent le
  français correct.
- **Internationalisation.** Le site est en français. Les chaînes visibles sont regroupées dans
  les composants et les pages, la langue est déclarée sur `<html lang="fr">` et les URL sont
  des slugs sans préfixe de langue, ce qui permettra d'introduire un segment `/[locale]`
  ultérieurement sans casser les liens existants.
- **Accessibilité.** HTML sémantique, points de repère, lien d'évitement, navigation clavier
  complète, focus visible jamais supprimé, contrastes conformes au niveau AA dans les deux
  thèmes, `prefers-reduced-motion` respecté.
- **Images.** Aucune image pour l'instant. Les emplacements prévus sont marqués dans le corpus
  et rendus par un cadre neutre légendé, prêt à recevoir une illustration et son texte
  alternatif.
