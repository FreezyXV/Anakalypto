# Préparation de la mise en ligne — état au 10 octobre 2026, 19 h 30

Ce document prépare une mise en ligne relisible du format Découvrir et des articles corrigés. Il
ne décrit aucune action de publication déjà faite. Pendant les phases 1 à 3, il n'y a eu ni
import, ni migration, ni commit, ni push, ni déploiement. Aucun secret ne figure ici.

## 1. Où en est-on ? Cinq niveaux à ne pas confondre

| Niveau                                     | État                                                                                                                                                                                                                                         | Preuve                                                                                                                                                                                |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Articles dans les fichiers Markdown**    | Quinze articles corrigés en trois phases, dans douze fichiers `content/domaine-*.md`. Le corpus est valide                                                                                                                                   | `docs/EDITORIAL_REVIEW.md`, `_PHASE2.md`, `_PHASE3.md` ; `npm run seed:check` réussi le 10/10 à 19 h 15, puis après les corrections de la phase 3                                     |
| **Articles servis depuis la base**         | **Anciennes versions** : aucune correction n'est importée. Les liens Découvrir → article → Découvrir fonctionnent                                                                                                                            | Recette du 10/10 sur le serveur de Codex (port 3001) : phrases repères des versions corrigées absentes des 15 pages servies (`EDITORIAL_REVIEW_PHASE3.md`, « État réellement servi ») |
| **Vérifications techniques**               | 32 tests isolés du format Découvrir réussis. Codex rapporte aussi TypeScript, lint et une compilation `npm run build -- --webpack` réussis                                                                                                   | Codex : `docs/collaboration/VISUAL_DELIVERY.md`. Claude : `vitest.discovery.config.ts`, 32 sur 32, le 10/10 à 19 h 15                                                                 |
| **Recette indépendante (Claude, phase 3)** | Quinze parcours à 390 et 1280 px, vues denses à 320 et 430 px, planches regardées. 14 demandes de phase 2 confirmées, 4 partiellement résolues, 2 sans action justifiée. Neuf défauts restants ou nouveaux, dont deux à corriger sur le sens | `docs/VISUAL_REVIEW_GRID.md`, `docs/CLAUDE_INTEGRATION_RECHECK_PHASE3.csv`, `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE3.csv`, captures dans `docs/qa/claude-phase3/`                     |
| **Essais utilisateurs**                    | **Aucun**. Le protocole et le déroulé sont prêts ; la grille de résultats est vide                                                                                                                                                           | `docs/USER_TEST_PROTOCOL.md`, `docs/USER_TEST_RUNBOOK.md`, `docs/USER_TEST_RESULTS_TEMPLATE.csv`                                                                                      |

### Défauts ouverts, au 10/10 à 19 h 30

Le détail est dans `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE3.csv`. Les demandes de la phase 2 déjà
intégrées par Codex ne sont plus des défauts actuels ; leur suivi est dans
`CLAUDE_INTEGRATION_RECHECK_PHASE3.csv`.

| Id                         | Découverte                             | Sévérité | Résumé                                                                                    |
| -------------------------- | -------------------------------------- | -------- | ----------------------------------------------------------------------------------------- |
| P3-01                      | Fresque                                | moyenne  | Le résumé et l'objectif parlent encore de « séchage »                                     |
| P3-03                      | Cyclone                                | moyenne  | « Air humide qui monte » placé sous l'air qui descend dans l'œil                          |
| P3-04                      | Pilote automatique                     | moyenne  | Croix de l'état désengagé placée au mauvais endroit                                       |
| P3-05                      | Tous les dessins                       | moyenne  | Textes de 9,5 px à 320 px ; turbo et piston plus petits à 390 px                          |
| P3-06                      | Tout le site                           | moyenne  | Débordement horizontal de 9 px à 320 px, causé par le bouton de thème de l'en-tête        |
| P3-02, P3-07, P3-08, P3-09 | Réseau, turbo, fresque, moteur et pain | basse    | Résumé « Fais voyager », flèches du turbo, libellé prématuré, textes posés sur des traits |

### Limites éditoriales restantes

- **Verre** : le taux Citeo de 88 % est une « estimation décembre 2025 » dont l'année exacte des
  données et le mode de calcul ne sont pas précisés. La limite est écrite dans l'article.
- **Électricité** : la plage de tensions de RTE s'appuie encore sur une source de 2009 ; la
  longueur du réseau est désormais celle du rapport 2024.
- **Phrases générales non revérifiées une à une** : analogies, savons durs ou mous, lag du turbo.
  Aucun `lastVerified` n'a été changé.

## 2. Conditions de validation

### Format Découvrir

1. Les quinze JSON passent le schéma et les tests isolés. Fait le 10/10 ; à refaire après
   chaque changement.
2. Les défauts de sévérité moyenne P3-01 à P3-06 sont corrigés, ou leur maintien est décidé et
   justifié par le propriétaire.
3. La grille `VISUAL_REVIEW_GRID.md` est repassée sur la version finale. Il suffit de relancer
   les parcours et de regarder les planches des sujets modifiés.
4. Une session exploratoire, au minimum la séance pilote du `USER_TEST_RUNBOOK.md`, a eu lieu si
   le propriétaire veut publier après les essais.

### Sources des articles

1. Chaque affirmation retenue dans les quinze articles a une source lue directement, ou une
   limite écrite dans le texte. C'est le cas au 10/10, sauf pour les phrases générales listées
   plus haut.
2. `npm run seed:check` réussit.

## 3. Ce que font réellement les commandes

Lecture des scripts de `package.json`, de `prisma/seed.ts`, de `prisma.config.ts`, de
`scripts/illustrations.mjs`, de `vitest.discovery.config.ts` et de la CI.

| Commande                                                           | Effet réel                                                                                                                                                                                                                      | Écrit en base ?   |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `npm run seed:check`                                               | `tsx prisma/seed.ts --dry-run` : lit `content/`, valide le corpus, s'arrête sans connexion à la base                                                                                                                            | Non               |
| `node_modules/.bin/vitest run --config vitest.discovery.config.ts` | Tests du format Découvrir uniquement (`tests/discovery.test.ts`), sans chargement d'environnement                                                                                                                               | Non               |
| `npm run typecheck`, `npm run lint`, `npm run format:check`        | Vérifications statiques                                                                                                                                                                                                         | Non               |
| `npm test`                                                         | Toute la suite, dont les tests d'intégration : migre la base de test (`.env.test`) et la vide entre les cas                                                                                                                     | Oui, base de test |
| `npm run seed`                                                     | Importe le corpus dans la base désignée par `DATABASE_URL`. Crée et met à jour, puis **supprime** les articles absents des fichiers, les catégories vides et les étiquettes orphelines                                          | **Oui**           |
| `npm run setup:db`                                                 | `prisma migrate deploy` (connexion `DIRECT_URL`, sinon `DATABASE_URL`), puis l'import                                                                                                                                           | **Oui**           |
| `npm run build:with-db`                                            | Migrations, import, puis compilation. Non utilisé par Vercel                                                                                                                                                                    | **Oui**           |
| `npm run build`                                                    | Régénère le manifeste d'illustrations, puis `prisma generate` et `next build`. La compilation **lit** la base pour générer les pages d'articles. Codex a compilé avec `-- --webpack`, Turbopack échouant dans son environnement | Lecture seule     |
| `npm run dev`                                                      | Régénère le manifeste, puis lance le serveur de développement. Un seul serveur par dossier avec Next 16                                                                                                                         | Lecture seule     |

**Point d'attention.** `prisma/seed.ts` et `prisma.config.ts` chargent `.env.local`, puis `.env`,
**sans écraser** une variable déjà définie. Sur ce poste, `.env.local` désigne la **production**.
Pour viser une autre base sans modifier de fichier, définir les variables dans la commande :

```sh
DATABASE_URL="<url-de-la-base-cible>" DIRECT_URL="<url-directe-de-la-base-cible>" npm run setup:db
```

## 4. Séquence proposée

Ce qui ne dépend d'aucune décision peut avancer tout de suite.

| Étape                                                                                                  | Qui                                | Dépend de                               |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------- | --------------------------------------- |
| A. Corriger P3-01 à P3-06, puis repasser la recette sur les sujets modifiés                            | Codex, puis Claude                 | Rien                                    |
| B. Séance pilote d'essai : 1 ou 2 personnes, déroulé seulement                                         | Propriétaire                       | **Décision 2** (accès des participants) |
| C. Commit du travail : moteur, tests, `content/discovery/`, articles, documents ; CI verte             | Propriétaire, ou Codex sur demande | Rien, sinon la relecture du diff        |
| D. Préproduction : base distincte, `setup:db` en nommant la base, site servi sur cette base, contrôles | Propriétaire                       | **Décision 1** (environnement)          |
| E. Session d'essais complète                                                                           | Propriétaire                       | Décision 2, et éventuellement D         |
| F. Production : import, push sur `main`, redéploiement, contrôles                                      | Propriétaire                       | **Décisions 3 et 4**                    |

### Étape D en détail

1. Créer une base distincte de la production, par exemple une branche Neon à partir de
   `production`.
2. Lancer `DATABASE_URL=… DIRECT_URL=… npm run setup:db`. Dans le résumé, le nombre de
   suppressions doit être **nul ou expliqué**, puisque les corrections ne changent aucun slug.
3. Servir le site sur cette base : déploiement de prévisualisation Vercel avec une
   `DATABASE_URL` propre à l'environnement Preview, ou serveur local s'il n'y en a pas déjà un
   dans le dossier.
4. Contrôler :
   - les quinze pages Expanded : présence des phrases repères de `EDITORIAL_REVIEW_PHASE3.md`,
     sources, quiz ;
   - les liens dans les deux sens ;
   - le catalogue ;
   - la révision express ;
   - 390 et 320 px.

### Étape F en détail

1. Importer en production : même commande, sur la base de production. La compilation lit la
   base, il faut donc importer **avant** de déployer.
2. Pousser sur `main` : Vercel déploie automatiquement.
3. Les pages sont régénérées au plus toutes les heures (`revalidate = 3600`) : redéployer après
   l'import pour tout voir tout de suite.
4. Refaire les contrôles de l'étape D sur le site public.

## 5. Rotation du mot de passe de la base de production

Le mot de passe a circulé dans une conversation en septembre. La rotation est à faire par le
propriétaire, avec son accès à la console Neon. Ce document ne contient ni ne demande aucun
mot de passe.

**Consommateurs à mettre à jour**, recensés dans le dépôt et la documentation :

1. **Vercel**, projet `anakalypto` : variables `DATABASE_URL` (connexion avec pooler) et
   `DIRECT_URL` (connexion directe), pour l'environnement Production, et Preview si elles y
   sont définies.
2. **Ce poste** : `.env.local`, avec les mêmes deux variables, utilisé par `dev`, `build`,
   `seed` et `setup:db`.
3. **Ce poste** : `.env.test`, si la base de test utilise le même rôle sur la même instance
   Neon.
4. **Tout serveur de développement déjà lancé**, par exemple celui de Codex sur le port 3001 :
   à redémarrer pour qu'il relise `.env.local`.
5. La CI GitHub n'est **pas** concernée : elle utilise sa propre base PostgreSQL éphémère.

**Procédure proposée :**

1. Dans la console Neon, projet de production, réinitialiser le mot de passe du rôle utilisé
   par l'application, ou créer un rôle dédié à l'application.
2. Mettre à jour les variables Vercel (point 1), puis redéployer la production pour que les
   fonctions utilisent la nouvelle valeur.
3. Mettre à jour `.env.local` et, si besoin, `.env.test`, sans les commiter : ils sont ignorés
   par Git.
4. Vérifier :
   - que le site public sert les articles ;
   - qu'en local, une commande en lecture seule se connecte, par exemple
     `npx prisma migrate status` avec la bonne variable.
5. L'ancien mot de passe est invalidé par la réinitialisation. Aucune trace ne doit en rester
   dans un document ou un message.

## 6. Décisions du propriétaire

1. **Environnement de préproduction** : branche Neon, base séparée ou base locale.
2. **Accès des participants aux essais** : préproduction, prévisualisation Vercel ou serveur
   local accessible sur le réseau.
3. **Ordre** : essais avant ou après la mise en ligne, et sort des défauts ouverts.
4. **Date de mise en ligne**, et publication des quinze découvertes d'un coup ou par lots.
5. **Moment de la rotation du mot de passe**, de préférence avant la mise en ligne.
