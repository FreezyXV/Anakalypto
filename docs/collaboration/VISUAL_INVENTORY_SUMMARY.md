# Inventaire des illustrations

Photographie du backend local exportée le 2026-11-12, sans audit du corpus. Aucun changement en production. Objectif : environ 1 000 leçons ; brouillons exclus.

| État                                       | Nombre |
| ------------------------------------------ | -----: |
| Leçons publiées                            |    948 |
| Leçons avec schéma éditorial               |    948 |
| Nombre de schémas éditoriaux               |    965 |
| Leçons avec dessin ou atelier              |    253 |
| Sans aucun visuel                          |      0 |
| Illustration incluse et vérifiée           |    253 |
| En attente de dessin spécifique            |    695 |
| À vérifier                                 |      0 |
| À améliorer, défaut enregistré             |      0 |
| Réservées, sous-ensemble non additionnable |      0 |

| Domaine                            | Publiées | Prêtes | À améliorer | À vérifier | Sans dessin |
| ---------------------------------- | -------: | -----: | ----------: | ---------: | ----------: |
| aeronautique                       |       37 |     37 |           0 |          0 |           0 |
| alimentation-et-nutrition          |       92 |      3 |           0 |          0 |          89 |
| arts-et-culture                    |       43 |      6 |           0 |          0 |          37 |
| automobile                         |       90 |      3 |           0 |          0 |          87 |
| communication-et-medias            |       45 |      8 |           0 |          0 |          37 |
| corps-humain-et-sante              |       65 |     16 |           0 |          0 |          49 |
| droit-et-justice                   |       44 |      0 |           0 |          0 |          44 |
| energie                            |       60 |     37 |           0 |          0 |          23 |
| environnement-et-climat            |       40 |     14 |           0 |          0 |          26 |
| espace-et-astronomie               |       37 |     37 |           0 |          0 |           0 |
| geographie-et-territoires          |       37 |      1 |           0 |          0 |          36 |
| industries                         |       41 |     10 |           0 |          0 |          31 |
| intelligence-artificielle          |       23 |     23 |           0 |          0 |           0 |
| micro-informatique-et-informatique |       43 |      6 |           0 |          0 |          37 |
| sciences-du-vivant-appliquees      |       46 |     11 |           0 |          0 |          35 |
| sciences-fondamentales             |       67 |     25 |           0 |          0 |          42 |
| sciences-humaines-et-sociales      |       58 |      1 |           0 |          0 |          57 |
| sport-et-sciences-du-mouvement     |       36 |      0 |           0 |          0 |          36 |
| technologies-et-ingenierie         |       44 |     15 |           0 |          0 |          29 |

[Références complètes](VISUAL_INVENTORY.csv) · [Travail restant](VISUAL_BACKLOG.csv) · [États backend JSON](ILLUSTRATION_STATUS.json) · [Guide des agents](ILLUSTRATION_BACKEND.md).

Le backend est la file active. Les colonnes quality et workflow décrivent le dessin spécifique, indépendamment de inline_status. has_illustration inclut les schémas éditoriaux : ne pas interpréter une attente de dessin comme une absence de tout visuel. Ces exports sont des photographies ; lire la file puis réserver une leçon avant de travailler. Les champs source des CSV indiquent désormais l’identifiant backend de l’article. Les JSON de revue et réservation de l’ancien mode fichier conservent seulement l’historique initial. La présence d’une illustration ne remplace pas sa recette et READY ne vaut pas validation éditoriale de tout l’article.
