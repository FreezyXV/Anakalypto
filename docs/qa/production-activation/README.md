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
