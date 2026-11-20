# Inventaire des illustrations

Photographie de la file backend exportée le 2026-11-20. L’export lit les états des leçons publiées. L’objectif porte sur un catalogue d’environ 1 000 leçons.

| État                                       | Nombre |
| ------------------------------------------ | -----: |
| Leçons publiées                            |    948 |
| Leçons avec schéma éditorial               |    948 |
| Nombre de schémas éditoriaux               |    965 |
| Leçons avec dessin ou atelier              |    548 |
| Sans aucun visuel                          |      0 |
| Illustration incluse et vérifiée           |    548 |
| En attente de dessin spécifique            |    400 |
| À vérifier                                 |      0 |
| À améliorer, défaut enregistré             |      0 |
| Réservées, sous-ensemble non additionnable |      0 |

| Domaine                            | Publiées | Prêtes | À améliorer | À vérifier | Sans dessin |
| ---------------------------------- | -------: | -----: | ----------: | ---------: | ----------: |
| aeronautique                       |       37 |     37 |           0 |          0 |           0 |
| alimentation-et-nutrition          |       92 |     30 |           0 |          0 |          62 |
| arts-et-culture                    |       43 |     40 |           0 |          0 |           3 |
| automobile                         |       90 |     48 |           0 |          0 |          42 |
| communication-et-medias            |       45 |     25 |           0 |          0 |          20 |
| corps-humain-et-sante              |       65 |     17 |           0 |          0 |          48 |
| droit-et-justice                   |       44 |      0 |           0 |          0 |          44 |
| energie                            |       60 |     50 |           0 |          0 |          10 |
| environnement-et-climat            |       40 |     31 |           0 |          0 |           9 |
| espace-et-astronomie               |       37 |     37 |           0 |          0 |           0 |
| geographie-et-territoires          |       37 |     23 |           0 |          0 |          14 |
| industries                         |       41 |     32 |           0 |          0 |           9 |
| intelligence-artificielle          |       23 |     23 |           0 |          0 |           0 |
| micro-informatique-et-informatique |       43 |     26 |           0 |          0 |          17 |
| sciences-du-vivant-appliquees      |       46 |     18 |           0 |          0 |          28 |
| sciences-fondamentales             |       67 |     54 |           0 |          0 |          13 |
| sciences-humaines-et-sociales      |       58 |     14 |           0 |          0 |          44 |
| sport-et-sciences-du-mouvement     |       36 |      6 |           0 |          0 |          30 |
| technologies-et-ingenierie         |       44 |     37 |           0 |          0 |           7 |

[Références complètes](VISUAL_INVENTORY.csv) · [Travail restant](VISUAL_BACKLOG.csv) · [États backend JSON](ILLUSTRATION_STATUS.json) · [Guide des agents](ILLUSTRATION_BACKEND.md).

Le backend est la file active. Les colonnes quality et workflow décrivent le dessin spécifique, indépendamment de inline_status. has_illustration inclut les schémas éditoriaux : ne pas interpréter une attente de dessin comme une absence de tout visuel. Ces exports sont des photographies ; lire la file puis réserver une leçon avant de travailler. Les champs source des CSV indiquent désormais l’identifiant backend de l’article. Les JSON de revue et réservation de l’ancien mode fichier conservent seulement l’historique initial. La présence d’une illustration ne remplace pas sa recette et READY ne vaut pas validation éditoriale de tout l’article.
