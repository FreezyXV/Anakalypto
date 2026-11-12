# Activation du contenu et du suivi des illustrations

Correction du 12 novembre 2026, à partir de `8192a9ccbf88c0f76c51cbc34454af0cc323fc49`.

## Problèmes constatés

- CI : la suite PostgreSQL isolée des illustrations était lancée dans la suite générale, dont la préparation réinitialise une autre base. Son garde-fou refusait correctement cette cible.
- Production : les trois migrations des illustrations n'étaient pas appliquées ; `/api/illustrations` échouait avec Prisma P2021, table `ArticleIllustration` absente.
- Contenus : la production comptait 896 publications de l'ancien corpus, avec les anciens textes. Le corpus versionné en contient 948.

## Correction

La suite générale exclut le fichier de tests des illustrations. Un second job CI dispose de sa propre base `anakalypto_preview` sur `127.0.0.1`, applique les migrations, importe les publications, reprend le manifeste et exécute les 13 tests spécifiques. Aucun garde-fou de base n'est affaibli.

`content:sync-published` exige une connexion explicite, présente un plan sans écriture par défaut et ne supprime aucune entité. L'option `--apply` importe seulement les publications du corpus et archive leurs anciens textes dans `Revision`. Les données des articles hors sélection sont comparées par empreinte avant et après. Une divergence de publications bloque l'import par défaut.

Les 60 anciennes publications absentes du corpus complet sont conservées en brouillons via l'option explicite `--archive-retired`. Elles correspondent au nettoyage éditorial documenté dans [QUALITY_CLEANUP_2026-11-11.md](../../QUALITY_CLEANUP_2026-11-11.md) et [QUALITY_ENRICHMENT_2026-11-11.md](../../QUALITY_ENRICHMENT_2026-11-11.md). Aucun article n'est supprimé.

## Sauvegarde et essai Neon

Projet existant Anakalypto, base PostgreSQL 18. Aucun identifiant de connexion ni secret n'est enregistré dans ce rapport.

- Production : `br-dark-firefly-za86qde3`.
- Sauvegarde avant écriture : `backup-before-visual-sync-2026-11-12`, branche `br-jolly-smoke-zatet407`, sans compute.
- Copie d'essai : `verify-visual-sync-2026-11-12`, branche `br-silent-unit-zapd59pm`, issue du même état de production que la sauvegarde.

Ordre d'installation pour cette première activation : synchronisation des contenus, migrations additives, puis reprise du manifeste des illustrations. Cet ordre initialise les validations avec les empreintes du texte actuel. Les anciennes décisions de revue ne sont pas forcées par un contournement du contrôle de version.

## Vérifications locales

- 162 tests généraux sur `anakalypto_test`, base locale jetable.
- 13 tests spécifiques sur une seconde base locale `anakalypto_preview`.
- Formatage, lint, types et build de production : réussis.
- [Vérification complète locale](local-verification.json) : 948 textes, sources et quiz conformes au corpus ; 965 schémas éditoriaux ; 241 associations de dessins ; empreinte du moteur conforme.

Les journaux d'essai et de production complètent ce rapport après chaque étape réussie. `content:verify-published` est en lecture seule : il compare le catalogue, les textes, sources, quiz, chemins, compteurs de schémas, empreintes de validation et références des dessins.

Les 191 dessins déjà conservés restent à revérifier ; leur présence ne constitue pas une nouvelle validation qualitative. Aucun test utilisateur ni nouvelle revue visuelle de l'ensemble des dessins n'est inclus dans cette activation technique.

## Résultat de l'activation en production

L'import et les migrations ont réussi ; le contrôle complet en lecture seule est passé le **12 novembre 2026 à 09:57:51 UTC**.

- 948 leçons publiées conformes au corpus, sources et quiz compris.
- 965 schémas éditoriaux dans 948 leçons, avec leurs 948 validations reprises.
- 241 associations de dessins : 50 READY, 191 REVIEW_REQUIRED conservés ; 707 leçons sans dessin spécifique mais avec schéma éditorial ; zéro leçon sans aucun visuel.
- Zéro leçon publiée sans indicateur, zéro réservation active.
- 915 anciens textes conservés dans `Revision`, 33 publications du corpus ajoutées à la base et 79 publications du corpus auparavant en brouillon activées.
- 60 anciennes publications retirées du corpus archivées en brouillons ; aucun article, catégorie ou tag supprimé.
- 11 540 articles hors sélection intacts : empreinte identique avant/après et identique à celle de la copie d'essai.

Preuves : [plan](production-plan.log), [import](production-sync.log), [migrations](production-migrations.log), [reprise](production-bootstrap.log), [vérification intégrale](production-verification.log). Les [60 décisions de retrait](retired-editorial-decisions.log) ont chacune été retrouvées dans les rapports éditoriaux de Claude. La copie d'essai est suspendue ; la sauvegarde sans compute est conservée.

La CI de la première version du correctif a réussi avec les deux jobs : [run 43195538090](https://github.com/FreezyXV/Anakalypto/actions/runs/43195538090). Le redéploiement du site suit la fusion du correctif. Le script `scripts/check-public-illustrations.mjs`, avec l'URL HTTPS explicite du site, vérifie les dix pages de l'API (948 références uniques) et la présence de schémas dans le HTML public de trois articles après déploiement.
