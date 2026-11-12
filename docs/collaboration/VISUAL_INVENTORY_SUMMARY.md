# Inventaire des illustrations

Photographie du backend local exportée le 2026-11-12, sans audit du corpus. Aucun changement en production. Objectif : environ 1 000 leçons ; brouillons exclus.

| État                                       | Nombre |
| ------------------------------------------ | -----: |
| Leçons publiées                            |    948 |
| Leçons avec schéma éditorial               |    948 |
| Nombre de schémas éditoriaux               |    965 |
| Leçons avec dessin ou atelier              |    241 |
| Sans aucun visuel                          |      0 |
| Illustration incluse et vérifiée           |     50 |
| En attente de dessin spécifique            |    707 |
| À vérifier                                 |    191 |
| À améliorer, défaut enregistré             |      0 |
| Réservées, sous-ensemble non additionnable |      0 |

| Domaine                            | Publiées | Prêtes | À améliorer | À vérifier | Sans dessin |
| ---------------------------------- | -------: | -----: | ----------: | ---------: | ----------: |
| aeronautique                       |       37 |      0 |           0 |         37 |           0 |
| alimentation-et-nutrition          |       92 |      2 |           0 |          1 |          89 |
| arts-et-culture                    |       43 |      0 |           0 |          6 |          37 |
| automobile                         |       90 |      0 |           0 |          3 |          87 |
| communication-et-medias            |       45 |      0 |           0 |          8 |          37 |
| corps-humain-et-sante              |       65 |      0 |           0 |          4 |          61 |
| droit-et-justice                   |       44 |      0 |           0 |          0 |          44 |
| energie                            |       60 |      0 |           0 |         37 |          23 |
| environnement-et-climat            |       40 |     10 |           0 |          4 |          26 |
| espace-et-astronomie               |       37 |      0 |           0 |         37 |           0 |
| geographie-et-territoires          |       37 |      0 |           0 |          1 |          36 |
| industries                         |       41 |      8 |           0 |          2 |          31 |
| intelligence-artificielle          |       23 |      0 |           0 |         23 |           0 |
| micro-informatique-et-informatique |       43 |      0 |           0 |          6 |          37 |
| sciences-du-vivant-appliquees      |       46 |     10 |           0 |          1 |          35 |
| sciences-fondamentales             |       67 |     10 |           0 |         15 |          42 |
| sciences-humaines-et-sociales      |       58 |      0 |           0 |          1 |          57 |
| sport-et-sciences-du-mouvement     |       36 |      0 |           0 |          0 |          36 |
| technologies-et-ingenierie         |       44 |     10 |           0 |          5 |          29 |

[Références complètes](VISUAL_INVENTORY.csv) · [Travail restant](VISUAL_BACKLOG.csv) · [États backend JSON](ILLUSTRATION_STATUS.json) · [Guide des agents](ILLUSTRATION_BACKEND.md).

Le backend est la file active. Les colonnes quality et workflow décrivent le dessin spécifique, indépendamment de inline_status. has_illustration inclut les schémas éditoriaux : ne pas interpréter une attente de dessin comme une absence de tout visuel. Ces exports sont des photographies ; lire la file puis réserver une leçon avant de travailler. Les champs source des CSV indiquent désormais l’identifiant backend de l’article. Les JSON de revue et réservation de l’ancien mode fichier conservent seulement l’historique initial. La présence d’une illustration ne remplace pas sa recette et READY ne vaut pas validation éditoriale de tout l’article.
