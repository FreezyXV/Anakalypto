# File backend des illustrations

## Périmètre

Objectif de lancement : environ **1 000 leçons publiées**. État du 12 novembre 2026 : **948 publiées, 965 schémas éditoriaux dans ces 948 leçons, 241 leçons avec un dessin spécifique**, dont 50 dessins ajoutés dans le dernier lot. Les brouillons restent exclus de la file ; aucun n’est créé, publié ou supprimé pour une illustration.

Une validation visuelle ne certifie pas à nouveau l’ensemble du contenu éditorial. Les dates de vérification des articles ne sont pas mises à jour par ce travail.

## Présence et qualité sont indépendantes

Table PostgreSQL/Prisma `ArticleIllustration`, une ligne unique par article, créée automatiquement à sa publication. Deux suivis coexistent :

| Champ                                                   | Signification                                                                                              |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `visualRefs`                                            | Références des dessins SVG, ateliers ou illustrations importées associés                                   |
| `status`                                                | Qualité du dessin spécifique : `WAITING_FOR_ILLUSTRATION`, `REVIEW_REQUIRED`, `READY`, `NEEDS_IMPROVEMENT` |
| `inlineSchemaCount`                                     | Nombre de blocs `schema` dans le texte                                                                     |
| `inlineStatus`                                          | Même vocabulaire de qualité, pour les schémas éditoriaux uniquement                                        |
| `inlineEvidence`, `inlineReviewedContentHash`           | Preuve de revue et empreinte du texte correspondant                                                        |
| `claimedBy`, `claimedAt`, `claimContentHash`, `version` | Réservation atomique, base de travail et contrôle de concurrence                                           |

L’API, les listes CLI et l’export calculent aussi `hasVisual`, `hasDrawing`, `hasInlineSchema`. **`hasVisual=true` si un schéma éditorial ou un dessin existe.** `WAITING_FOR_ILLUSTRATION` signifie ici « en attente de dessin spécifique » : ce n’est pas synonyme de leçon sans aucun visuel.

Au dernier export : 948 schémas éditoriaux validés, 50 nouveaux dessins validés, 191 dessins conservés avec correspondance au texte à revérifier, 707 leçons sans dessin spécifique, **zéro leçon publiée sans aucun visuel**. Les 707 ne constituent donc pas une demande automatique de produire 707 images.

Conserver tout bon visuel existant. Avant un ajout, lire `show`, examiner le schéma présent et ne créer qu’un complément pédagogique utile. Une modification du texte, résumé, titre ou chemin conserve les références mais rouvre les validations ; une réservation fondée sur l’ancien texte ne peut plus être terminée. Les articles redevenus brouillons conservent leur historique et disparaissent des files actives.

## Lire la file sans nouvel audit

Après installation des migrations et du code :

- `GET /api/illustrations?status=ALL&limit=100` : métadonnées des publiés non réservés, avec les trois indicateurs de présence et les deux statuts.
- `GET /api/illustrations` : attente de dessin spécifique ; lire les indicateurs avant d’agir.
- `status=READY`, `status=REVIEW_REQUIRED`, `status=NEEDS_IMPROVEMENT` : filtre sur le dessin spécifique.
- Pagination : transmettre `nextCursor` dans `after`, encodé comme paramètre d’URL. Les compteurs couvrent tous les publiés, y compris les réservés.

L’API est en lecture seule, sans responsables, secrets ou textes de brouillons. La réservation et la validation utilisent la CLI serveur. PostgreSQL est la file active ; les CSV/JSON sont des photographies et un manifeste de reprise, pas une seconde file de réservation.

```sh
# Fournir explicitement ILLUSTRATION_DATABASE_URL à l’environnement choisi.
# Ces commandes ne chargent pas .env.local et n’utilisent pas DATABASE_URL par défaut.
npm run illustrations:work -- summary
npm run illustrations:work -- list --status ALL --limit 1000
npm run illustrations:work -- show --path /categorie/sujet
npm run illustrations:work -- claim --path /categorie/sujet --owner Codex
```

Une seule réservation peut réussir pour une leçon. Elle reste active jusqu’à sa libération explicite ; il n’y a pas d’expiration silencieuse qui permettrait à deux agents de travailler en même temps.

## Terminer ou rouvrir une revue

Après lecture, correction si nécessaire et vraie recette mobile/ordinateur :

```sh
# Valider le schéma éditorial ; ne modifie pas le statut du dessin et garde la réservation.
npm run illustrations:work -- complete-inline --path /categorie/sujet --owner Codex --evidence docs/qa/mon-lot/README.md
# Valider le dessin associé ; termine et libère la réservation.
npm run illustrations:work -- complete --path /categorie/sujet --owner Codex --evidence docs/qa/mon-lot/README.md
# Si seule la revue éditoriale était nécessaire, ou si le travail est interrompu :
npm run illustrations:work -- release --path /categorie/sujet --owner Codex
# Rendu éditorial partagé modifié : rouvrir les associations concernées.
npm run illustrations:work -- review-inline --path /categorie/sujet --note 'Rendu partagé modifié, recette nécessaire.'
# Dessin modifié ou défaut confirmé :
npm run illustrations:work -- review --path /categorie/sujet --defect --note 'Décrire le défaut observé.'
```

`complete-inline` exige un schéma présent, une réservation du même agent, le texte inchangé et une preuve Markdown non vide dans `docs/qa/`. `complete` exige en plus un dessin réellement associé dans le registre ; il enregistre son empreinte et sa date. Une compilation seule n’autorise pas READY.

Un trigger sur Article ne peut pas détecter une modification de code : l’agent qui change un composant partagé doit rouvrir les associations concernées avec `review` ou `review-inline`. Une modification de catégorie invalide aussi les empreintes de chemin.

## Installation et reprise

Appliquer les migrations du dépôt sur **l’environnement explicitement choisi**, avant de mettre l’API en service. Les ajouts de cette livraison sont :

- `20261111120000_illustration_workflow` : file, réservations et invalidation des dessins ;
- `20261112010000_inline_visual_presence` : compteur et validation des schémas du texte ;
- `20261112020000_inline_category_review` : invalidation des schémas lors d’un changement de chemin de catégorie.

```sh
# DATABASE_URL et DIRECT_URL doivent explicitement viser la base choisie pour Prisma.
npx prisma migrate deploy
# ILLUSTRATION_DATABASE_URL doit viser la même base pour la file.
npm run illustrations:work -- bootstrap
npm run illustrations:work -- summary
```

La migration renseigne la présence des schémas pour les articles déjà suivis ; le trigger gère ensuite publications et modifications. `bootstrap` reprend les associations du petit manifeste versionné `src/lib/illustration-workflow/baseline.json`, avec les hashes de texte et de moteur. Il ne relit pas le corpus et ne remplace pas une réservation ou une décision ultérieure. Un texte ou un moteur différent reste à vérifier. Les lignes déjà traitées ne sont pas forcées à READY par un nouvel import.

L’import habituel appelle aussi `bootstrap`, mais **aucun seed n’est nécessaire pour installer le suivi**. Un seed importe les contenus dans la base cible : ne pas le confondre avec une simple lecture de la file. `.env.local` du dépôt peut viser la production.

Toutes les migrations et recettes de cette livraison ont été exécutées sur PostgreSQL local jetable. Commit et push transportent le code et le manifeste ; ils ne prouvent pas qu’une migration a été appliquée en production. Aucune activation de production n’est effectuée ici.

## Sauvegarder les décisions

```sh
npm run illustrations:work -- export
```

L’export ne valide rien à la place d’une recette et n’écrit pas en base. Il vérifie références, hashes et existence des preuves pour les lignes READY, puis enregistre le manifeste et les listes `ILLUSTRATION_STATUS`, `VISUAL_INVENTORY`, `VISUAL_BACKLOG`. Les décisions sur schémas éditoriaux sont conservées dans `inlineReviews` du manifeste. Ne pas laisser les seules preuves dans une base temporaire.

## Contrôles isolés

- `npx vitest run --config vitest.lesson-visuals.config.ts` : règles, rendu, mécanismes et corpus, sans base.
- `npx vitest run --config vitest.illustration-workflow.config.ts`, avec URL explicite vers `anakalypto_preview` sur `127.0.0.1` : protections SQL, réservations, invalidation, publication, pagination et reprise. Seules les fixtures aléatoires de ces tests sont supprimées.
- Ne pas lancer la suite globale pour cette mission : sa préparation réinitialise une base.

Les preuves de ce lot sont [la revue des 965 schémas](../qa/inline-schemas/README.md) et [les 50 nouveaux dessins](../qa/lesson-visuals-batch50/README.md).
