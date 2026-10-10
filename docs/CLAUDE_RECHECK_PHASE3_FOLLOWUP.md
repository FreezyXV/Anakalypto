# Contre-recette des corrections de phase 3 — 10 octobre 2026, 21 h 58

Relecture des neuf corrections décrites dans `docs/collaboration/CODEX_CLAUDE_PHASE3_INTEGRATION.md`,
sur le serveur de Codex (port 3001), en lecture seule.

**Parcours rejoués** à 390 et 320 px, avec le même script que la recette de phase 3, pour sept
découvertes : fresque, pilote automatique, turbo, réseau, cyclone, pain et moteur à quatre
temps.

| Demande              | Statut   | Preuve observée                                                                                            |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| P3-01 fresque        | confirmé | Résumé : « … observe comment la chaux réagit avec l'air et fixe les couleurs » ; objectif sans « séchant » |
| P3-02 réseau         | confirmé | Résumé : « Suis le réseau de la centrale à la maison… »                                                    |
| P3-03 cyclone        | confirmé | « Montée » à côté des flèches latérales, « Descente » sous l'œil dégagé                                    |
| P3-04 pilote         | confirmé | Désengagé : la croix est entre servomoteurs et gouvernes ; capteurs → calculateur reste actif              |
| P3-05 textes         | confirmé | Taille rendue minimale : 14 px à 390 px, 12,3 px à 320 px (mesure DOM)                                     |
| P3-06 en-tête        | confirmé | À 320 px, `scrollWidth` vaut 320 sur `/decouvrir`, sur une découverte et sur l'accueil                     |
| P3-07 turbo          | confirmé | Flèches qui traversent les roues, indicateur de rotation, « Roues arrêtées » à 0 %                         |
| P3-08 fresque        | confirmé | Étape 1 sans libellé de pigments                                                                           |
| P3-09 pain et piston | confirmé | « Acides » et « Vilebrequin » sont dégagés de leurs traits                                                 |

**Autres résultats**, sur les 14 parcours : aucune superposition entre textes, aucun texte hors
cadre, aucune erreur console. La révision express et les liens vers l'article et retour
fonctionnent.

**Nouveaux défauts mineurs** apparus avec l'agrandissement des textes : voir
`docs/CLAUDE_INTEGRATION_REQUESTS_PHASE4.csv` (pilote automatique et cyclone, sévérité basse).

**Limite** : une capture de la fresque à l'étape 5 est en partie masquée par l'en-tête collant,
un artefact de capture.

Ces contrôles ne sont pas un essai utilisateur. Les articles corrigés ne sont toujours pas
importés dans la base de production.
