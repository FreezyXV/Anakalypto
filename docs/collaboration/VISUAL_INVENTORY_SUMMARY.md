# Inventaire des illustrations

Photographie de la file backend exportée le 2026-11-23. L’export lit les états des leçons publiées. L’objectif porte sur un catalogue d’environ 1 000 leçons.

| État                                       | Nombre |
| ------------------------------------------ | -----: |
| Leçons publiées                            |    948 |
| Leçons avec schéma éditorial               |    948 |
| Nombre de schémas éditoriaux               |    965 |
| Leçons avec dessin ou atelier              |    748 |
| Sans aucun visuel                          |      0 |
| Illustration incluse et vérifiée           |    748 |
| En attente de dessin spécifique            |    200 |
| À vérifier                                 |      0 |
| À améliorer, défaut enregistré             |      0 |
| Réservées, sous-ensemble non additionnable |      0 |

| Domaine                            | Publiées | Prêtes | À améliorer | À vérifier | Sans dessin |
| ---------------------------------- | -------: | -----: | ----------: | ---------: | ----------: |
| aeronautique                       |       37 |     37 |           0 |          0 |           0 |
| alimentation-et-nutrition          |       92 |     53 |           0 |          0 |          39 |
| arts-et-culture                    |       43 |     43 |           0 |          0 |           0 |
| automobile                         |       90 |     83 |           0 |          0 |           7 |
| communication-et-medias            |       45 |     40 |           0 |          0 |           5 |
| corps-humain-et-sante              |       65 |     23 |           0 |          0 |          42 |
| droit-et-justice                   |       44 |      7 |           0 |          0 |          37 |
| energie                            |       60 |     60 |           0 |          0 |           0 |
| environnement-et-climat            |       40 |     38 |           0 |          0 |           2 |
| espace-et-astronomie               |       37 |     37 |           0 |          0 |           0 |
| geographie-et-territoires          |       37 |     36 |           0 |          0 |           1 |
| industries                         |       41 |     37 |           0 |          0 |           4 |
| intelligence-artificielle          |       23 |     23 |           0 |          0 |           0 |
| micro-informatique-et-informatique |       43 |     37 |           0 |          0 |           6 |
| sciences-du-vivant-appliquees      |       46 |     24 |           0 |          0 |          22 |
| sciences-fondamentales             |       67 |     64 |           0 |          0 |           3 |
| sciences-humaines-et-sociales      |       58 |     36 |           0 |          0 |          22 |
| sport-et-sciences-du-mouvement     |       36 |     29 |           0 |          0 |           7 |
| technologies-et-ingenierie         |       44 |     41 |           0 |          0 |           3 |

[Références complètes](VISUAL_INVENTORY.csv) · [Travail restant](VISUAL_BACKLOG.csv) · [États backend JSON](ILLUSTRATION_STATUS.json) · [Guide des agents](ILLUSTRATION_BACKEND.md).

Le backend est la file active. Les colonnes quality et workflow décrivent le dessin spécifique, indépendamment de inline_status. has_illustration inclut les schémas éditoriaux : ne pas interpréter une attente de dessin comme une absence de tout visuel. Ces exports sont des photographies ; lire la file puis réserver une leçon avant de travailler. Les champs source des CSV indiquent désormais l’identifiant backend de l’article. Les JSON de revue et réservation de l’ancien mode fichier conservent seulement l’historique initial. La présence d’une illustration ne remplace pas sa recette et READY ne vaut pas validation éditoriale de tout l’article.
