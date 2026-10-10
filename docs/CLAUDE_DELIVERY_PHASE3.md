# Livraison Claude Code, phase 3 — 10 octobre 2026

Mission : `docs/collaboration/CLAUDE_CODE_PHASE3_PROMPT.md`.

Il n'y a eu aucune modification de `src/`, `tests/`, `prisma/`, `content/discovery/`, des
configurations, des dépendances, de `README.md` ni des documents de Codex. Il n'y a eu aucun
import, `seed` réel, migration, commit, push ni déploiement, et aucune ressource externe créée.
Le serveur de Codex (port 3001) n'a été ni arrêté ni doublé. Les rapports et CSV des phases 1 et
2 sont conservés tels quels.

## Fichiers

**Articles**, trois des quinze articles audités :

| Fichier                            | Article     | Modification                                              |
| ---------------------------------- | ----------- | --------------------------------------------------------- |
| `content/domaine-energie.md`       | électricité | Longueur du réseau RTE d'après le rapport de gestion 2024 |
| `content/domaine-environnement.md` | verre       | Limite précise du taux Citeo                              |
| `content/domaine-alimentation.md`  | levain      | Source INRAE ajoutée                                      |

**Créés :**

- `docs/CLAUDE_INTEGRATION_RECHECK_PHASE3.csv` ;
- `docs/EDITORIAL_REVIEW_PHASE3.md` ;
- `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE3.csv` ;
- `docs/USER_TEST_RUNBOOK.md` ;
- `docs/CLAUDE_DELIVERY_PHASE3.md` ;
- `docs/qa/claude-phase3/` : 25 planches de captures, soit 15 à 390 px, 5 à 320 px et 5 à
  430 px.

**Actualisés :**

- `docs/VISUAL_REVIEW_GRID.md`, réécrit sur la version regardée ;
- `docs/RELEASE_READINESS.md` : cinq niveaux d'état, défauts actuels seulement, séquence,
  rotation du mot de passe ;
- `docs/USER_TEST_PROTOCOL.md` : réponses attendues prudentes, interactions actuelles, remise à
  zéro ;
- `docs/USER_TEST_RESULTS_TEMPLATE.csv` : colonnes `type_seance` et `version_decouverte`
  ajoutées. Il reste vide.

## Contrôles réellement exécutés et résultats

| Contrôle                                                                                                  | Résultat                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run seed:check`, avant et après les corrections, script lu au préalable                              | « Corpus valide », aucune écriture                                                                                                                                                                                         |
| `node_modules/.bin/vitest run --config vitest.discovery.config.ts`, configuration lue au préalable        | 32 tests sur 32 réussis                                                                                                                                                                                                    |
| Parcours scriptés des 15 découvertes sur le port 3001, contexte de test vierge, à 390 × 844 et 1280 × 900 | 30 parcours : manipulation dans tous ses états, mauvaise réponse bloquante puis bonne réponse aux deux défis, écran final, lien « Approfondir » (200), lien retour dans l'article, révision express. Aucune erreur console |
| Clavier                                                                                                   | Espace sur les interrupteurs, flèche droite sur les curseurs, Entrée sur les réponses : fonctionnent dans les 30 parcours                                                                                                  |
| Noms accessibles                                                                                          | Relevés pour chaque commande (`aria-label` des interrupteurs, `label` des curseurs avec l'étape en cours)                                                                                                                  |
| Vues denses à 320 et 430 px : photosynthèse, réseau, pilote, papier, fresque                              | Parcours complets réussis ; débordement à 320 px, venu de l'en-tête du site (P3-06)                                                                                                                                        |
| Mesures dans les SVG                                                                                      | Aucune superposition texte sur texte, aucun texte hors cadre. Taille rendue : 14 unités donnent 9,5 px à 320, 12,2 px à 390, 13,8 px à 430 et 25,7 px à 1280 px                                                            |
| Article servi par la base, phrase repère de la version corrigée                                           | Absente des 15 articles servis : correction non importée, comme attendu                                                                                                                                                    |
| Prettier, sur mes seuls fichiers `docs/` modifiés ou créés                                                | Mis en forme, puis vérifiés : réussi                                                                                                                                                                                       |

## Captures consultées

Les **25 planches** de `docs/qa/claude-phase3/` ont été regardées à l'œil, une par une :

- les 15 découvertes à 390 px, avec tous les états, vues de défi, scènes et révisions ;
- les 5 vues denses à 320 et 430 px.

Le détail par sujet est dans `docs/VISUAL_REVIEW_GRID.md`.

Non regardé à l'œil :

- les captures à 1280 px, contrôlées seulement par les mesures ;
- les animations en mouvement ;
- la visibilité du focus clavier ;
- la lecture par un lecteur d'écran réel.

## Résultat de la reprise des 20 demandes de phase 2

Sur 20 demandes : 14 confirmées, 4 partiellement résolues, 2 sans action justifiée. Détail et
preuves dans `docs/CLAUDE_INTEGRATION_RECHECK_PHASE3.csv`.

Partiellement résolues :

- fresque, résumé et objectif ;
- réseau, résumé ;
- cyclone, libellé sous l'œil ;
- taille des textes.

## Demandes à Codex

`docs/CLAUDE_INTEGRATION_REQUESTS_PHASE3.csv` contient neuf demandes. Par ordre d'importance :

1. **P3-03 cyclone** et **P3-04 pilote automatique** : deux contresens possibles dans le dessin.
   « Air humide qui monte » est placé sous l'air qui descend dans l'œil ; la croix de l'état
   désengagé coupe les capteurs au lieu de la commande des gouvernes.
2. **P3-01 fresque** : résumé et objectif encore formulés en « séchage ».
3. **P3-05 tailles de texte rendues**, **P3-06 débordement de l'en-tête à 320 px**, sur tout le
   site.
4. **Mineures** :
   - P3-02 : résumé du réseau ;
   - P3-07 : flèches du turbo ;
   - P3-08 : libellé prématuré de la fresque ;
   - P3-09 : textes posés sur des traits.

## Limites éditoriales et décisions restantes

- **Taux Citeo** : année des données et définition toujours indéterminées. La limite est écrite
  dans l'article.
- **Origine des microbes du levain** : non enseignée, faute de preuve.
- **Phrases générales des articles** : non revérifiées une à une. `lastVerified` est inchangé
  partout.

**Décisions du propriétaire**, détaillées dans `docs/RELEASE_READINESS.md`, section 6 :

- l'environnement de préproduction ;
- l'accès des participants ;
- l'ordre entre essais et publication ;
- la date de mise en ligne ;
- le moment de la rotation du mot de passe, dont la procédure est décrite sans aucun secret.
