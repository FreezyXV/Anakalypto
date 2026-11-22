# Inventaire des illustrations

Photographie de la file backend exportée le 2026-11-22. L’export lit les états des leçons publiées. L’objectif porte sur un catalogue d’environ 1 000 leçons.

| État                                       | Nombre |
| ------------------------------------------ | -----: |
| Leçons publiées                            |    948 |
| Leçons avec schéma éditorial               |    948 |
| Nombre de schémas éditoriaux               |    965 |
| Leçons avec dessin ou atelier              |    648 |
| Sans aucun visuel                          |      0 |
| Illustration incluse et vérifiée           |    648 |
| En attente de dessin spécifique            |    300 |
| À vérifier                                 |      0 |
| À améliorer, défaut enregistré             |      0 |
| Réservées, sous-ensemble non additionnable |      0 |

| Domaine                            | Publiées | Prêtes | À améliorer | À vérifier | Sans dessin |
| ---------------------------------- | -------: | -----: | ----------: | ---------: | ----------: |
| aeronautique                       |       37 |     37 |           0 |          0 |           0 |
| alimentation-et-nutrition          |       92 |     40 |           0 |          0 |          52 |
| arts-et-culture                    |       43 |     43 |           0 |          0 |           0 |
| automobile                         |       90 |     66 |           0 |          0 |          24 |
| communication-et-medias            |       45 |     32 |           0 |          0 |          13 |
| corps-humain-et-sante              |       65 |     17 |           0 |          0 |          48 |
| droit-et-justice                   |       44 |      0 |           0 |          0 |          44 |
| energie                            |       60 |     53 |           0 |          0 |           7 |
| environnement-et-climat            |       40 |     33 |           0 |          0 |           7 |
| espace-et-astronomie               |       37 |     37 |           0 |          0 |           0 |
| geographie-et-territoires          |       37 |     33 |           0 |          0 |           4 |
| industries                         |       41 |     37 |           0 |          0 |           4 |
| intelligence-artificielle          |       23 |     23 |           0 |          0 |           0 |
| micro-informatique-et-informatique |       43 |     33 |           0 |          0 |          10 |
| sciences-du-vivant-appliquees      |       46 |     18 |           0 |          0 |          28 |
| sciences-fondamentales             |       67 |     57 |           0 |          0 |          10 |
| sciences-humaines-et-sociales      |       58 |     34 |           0 |          0 |          24 |
| sport-et-sciences-du-mouvement     |       36 |     16 |           0 |          0 |          20 |
| technologies-et-ingenierie         |       44 |     39 |           0 |          0 |           5 |

[Références complètes](VISUAL_INVENTORY.csv) · [Travail restant](VISUAL_BACKLOG.csv) · [États backend JSON](ILLUSTRATION_STATUS.json) · [Guide des agents](ILLUSTRATION_BACKEND.md).

Le backend est la file active. Les colonnes quality et workflow décrivent le dessin spécifique, indépendamment de inline_status. has_illustration inclut les schémas éditoriaux : ne pas interpréter une attente de dessin comme une absence de tout visuel. Ces exports sont des photographies ; lire la file puis réserver une leçon avant de travailler. Les champs source des CSV indiquent désormais l’identifiant backend de l’article. Les JSON de revue et réservation de l’ancien mode fichier conservent seulement l’historique initial. La présence d’une illustration ne remplace pas sa recette et READY ne vaut pas validation éditoriale de tout l’article.
