# Inventaire des illustrations

Photographie du backend local exportée le 2026-11-19, sans audit du corpus. Aucun changement en production. Objectif : environ 1 000 leçons ; brouillons exclus.

| État                                       | Nombre |
| ------------------------------------------ | -----: |
| Leçons publiées                            |    948 |
| Leçons avec schéma éditorial               |    948 |
| Nombre de schémas éditoriaux               |    965 |
| Leçons avec dessin ou atelier              |    433 |
| Sans aucun visuel                          |      0 |
| Illustration incluse et vérifiée           |    433 |
| En attente de dessin spécifique            |    515 |
| À vérifier                                 |      0 |
| À améliorer, défaut enregistré             |      0 |
| Réservées, sous-ensemble non additionnable |      0 |

| Domaine                            | Publiées | Prêtes | À améliorer | À vérifier | Sans dessin |
| ---------------------------------- | -------: | -----: | ----------: | ---------: | ----------: |
| aeronautique                       |       37 |     37 |           0 |          0 |           0 |
| alimentation-et-nutrition          |       92 |     18 |           0 |          0 |          74 |
| arts-et-culture                    |       43 |     24 |           0 |          0 |          19 |
| automobile                         |       90 |     25 |           0 |          0 |          65 |
| communication-et-medias            |       45 |     16 |           0 |          0 |          29 |
| corps-humain-et-sante              |       65 |     17 |           0 |          0 |          48 |
| droit-et-justice                   |       44 |      0 |           0 |          0 |          44 |
| energie                            |       60 |     46 |           0 |          0 |          14 |
| environnement-et-climat            |       40 |     27 |           0 |          0 |          13 |
| espace-et-astronomie               |       37 |     37 |           0 |          0 |           0 |
| geographie-et-territoires          |       37 |     17 |           0 |          0 |          20 |
| industries                         |       41 |     22 |           0 |          0 |          19 |
| intelligence-artificielle          |       23 |     23 |           0 |          0 |           0 |
| micro-informatique-et-informatique |       43 |     19 |           0 |          0 |          24 |
| sciences-du-vivant-appliquees      |       46 |     15 |           0 |          0 |          31 |
| sciences-fondamentales             |       67 |     52 |           0 |          0 |          15 |
| sciences-humaines-et-sociales      |       58 |      2 |           0 |          0 |          56 |
| sport-et-sciences-du-mouvement     |       36 |      5 |           0 |          0 |          31 |
| technologies-et-ingenierie         |       44 |     31 |           0 |          0 |          13 |

[Références complètes](VISUAL_INVENTORY.csv) · [Travail restant](VISUAL_BACKLOG.csv) · [États backend JSON](ILLUSTRATION_STATUS.json) · [Guide des agents](ILLUSTRATION_BACKEND.md).

Le backend est la file active. Les colonnes quality et workflow décrivent le dessin spécifique, indépendamment de inline_status. has_illustration inclut les schémas éditoriaux : ne pas interpréter une attente de dessin comme une absence de tout visuel. Ces exports sont des photographies ; lire la file puis réserver une leçon avant de travailler. Les champs source des CSV indiquent désormais l’identifiant backend de l’article. Les JSON de revue et réservation de l’ancien mode fichier conservent seulement l’historique initial. La présence d’une illustration ne remplace pas sa recette et READY ne vaut pas validation éditoriale de tout l’article.
