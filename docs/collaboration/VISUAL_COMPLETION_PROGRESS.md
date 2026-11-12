# Illustration complète du catalogue — suivi de travail

## Demande active

Continuer jusqu’à ce que toutes les leçons visibles dans l’application disposent d’un visuel de qualité représentatif de leur sujet. Préserver les dessins déjà réussis. Le périmètre de départ est le catalogue de **896 articles publiés** ; les brouillons ne sont pas comptés comme des leçons déjà visibles. Aucun déploiement ou import en production n’est inclus implicitement.

## État structurel actuel

Le suivi quotidien est désormais la [file backend persistante](ILLUSTRATION_BACKEND.md), limitée aux leçons publiées, avec un objectif de lancement d’environ 1 000 leçons. Claude crée les sujets ; Codex réalise et vérifie leurs illustrations. Les CSV sont des exports, pas une seconde file de réservation.

Photographie des références : [inventaire](VISUAL_INVENTORY.csv) et [synthèse](VISUAL_INVENTORY_SUMMARY.md).

**200 articles distincts ont un dessin spécifique ; 696 restent à concevoir.** Cela correspond à 153 nouveaux dessins pour 181 chemins d’articles, auxquels s’ajoutent les vingt anciens ateliers (un article a un ancien atelier et un complément nouveau).

Cet état n’est pas une affirmation que tous les sous-sujets d’un article sont illustrés. Une association est décidée après lecture de la leçon et de son objectif, jamais par simple correspondance automatique de mots-clés.

## Séries réalisées

| Série                                       | Dessins | Articles associés | Recette                                                                                                                                                                                                                       |
| ------------------------------------------- | ------: | ----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Extension initiale du 7 novembre            |      24 |                44 | [Rapport](LESSON_VISUAL_EXTENSION_2026-11-07.md)                                                                                                                                                                              |
| Arts, mesures et informatique               |      12 |                12 | [Rapport](LESSON_VISUAL_EXTENSION_2026-11-08.md)                                                                                                                                                                              |
| Astronomie : marées, étoiles et observation |      12 |                16 | [Preuves](../qa/lesson-visuals-astronomy/README.md) ; 69 tests isolés réussis, ESLint du périmètre réussi ; compilation réussie (1 244 pages), 36 états fonctionnels sous `next start` local sans erreur ou alerte de console |

| Instruments et observation du ciel | 9 | 9 | [Preuves](../qa/lesson-visuals-observation/README.md) ; 70 tests isolés réussis ; recette mobile passée, compilation réussie (1 244 pages), 27 états sous `next start` local sans alerte de console |

| Contextes et exploration spatiale | 8 | 8 | [Preuves](../qa/lesson-visuals-space-context/README.md) ; 71 tests isolés, compilation réussie (1 244 pages), 24 états compilés sans alerte |

**Domaine entièrement couvert structurellement : Espace et astronomie, 40 articles publiés (38 nouveaux schémas associés et 2 anciens conservés).** Cela ne certifie pas une illustration de chaque sous-partie ou de chaque chiffre de ces articles.

| Aéronautique : écoulements, propulsion et instruments | 14 | 16 | [Preuves](../qa/lesson-visuals-aeronautics/README.md) ; 73 tests isolés, compilation réussie (1 244 pages), 42 états compilés sans alerte |

| Navigation et sécurité aérienne | 9 | 10 | [Preuves](../qa/lesson-visuals-flight-systems/README.md) ; 75 tests isolés, compilation locale réussie (1 244 pages), 27 états compilés sans alerte |

| Propulsions, carburants et écopage | 8 | 9 | [Preuves](../qa/lesson-visuals-aircraft-propulsion/README.md) ; 75 tests isolés, compilation locale réussie (1 244 pages), 24 états compilés sans alerte |

**Deuxième domaine entièrement couvert structurellement : Aéronautique, 42 articles publiés (41 nouvelles associations et 1 atelier conservé).**

| Apprentissage et modèles d’IA | 10 | 10 | [Preuves](../qa/lesson-visuals-learning/README.md) ; 80 tests isolés, compilation locale réussie (1 244 pages), 30 états compilés sans erreur |

| Usages des modèles, accessibilité et robotique | 8 | 8 | [Preuves](../qa/lesson-visuals-ai-usage/README.md) ; 82 tests isolés, compilation locale réussie, 24 états compilés sans erreur |

| Biais, travail et cadre juridique de l’IA | 5 | 5 | [Preuves](../qa/lesson-visuals-ai-context/README.md) ; 82 tests isolés, compilation locale réussie, 15 états compilés sans erreur |

**Troisième domaine entièrement couvert structurellement : Intelligence artificielle, 23 articles publiés, avec 23 schémas spécifiques.**

## Suite active

Poursuivre les autres domaines, en commençant par les communications et médias. Les 23 leçons publiées de l’intelligence artificielle ont été traitées. Les 42 leçons d’aéronautique ont maintenant une association spécifique. La consigne active est de continuer jusqu’à couverture de tout le catalogue, sans considérer une simple livraison de lot comme une fin de mission. Pour chaque série : lecture des articles, sources primaires, choix d’une représentation, contrôle scientifique des traits et légendes, manipulation à 320 px, lecture des rendus sur ordinateur et tests sans base. Les graphiques doivent distinguer données réelles datées et exemples fictifs.

Les fichiers de suivi des preuves restent distincts des documents de Claude. Les contenus éditoriaux, dates de vérification et secrets restent inchangés. La base de travail est locale et isolée ; aucune commande de seed ou de test global destructif n’est utilisée.

## Mise à jour du 11 novembre 2026

Les cinq illustrations radio/TV sont terminées et vérifiées : radiodiffusion, ondes courtes, galène, TSF/Morse et télévision couleur. Quinze états testés dans la version compilée, à côté des contrôles mobiles et de la relecture visuelle. [Rapport et captures](../qa/lesson-visuals-radio/README.md).

Le backend dispose de statuts, preuves et réservations atomiques. Une publication rejoint automatiquement la file ; un texte modifié fait repasser le visuel en revue. Aucun brouillon n’entre dans le travail d’illustration. Les données de production n’ont pas été modifiées ; la migration et l’initialisation sont testées uniquement dans la base locale isolée.

## Lot énergie — 29 illustrations supplémentaires

29 dessins spécifiques associés à 29 leçons publiées : bâtiments et chaleur, conversion mécanique, électrochimie, réseaux et stockage, nucléaire, bilans énergétiques. 87 états vérifiés sur téléphone et dans la version compilée. Les 124 dessins antérieurs, dans leurs 372 états, conservent exactement leur balisage. [Rapport, références et captures](../qa/lesson-visuals-energy29/README.md).

Les 29 validations ont été enregistrées dans le backend local puis exportées avec les 171 précédentes. Total : 200 prêtes, 696 en attente, aucune réservation résiduelle. Aucun audit global relancé pour ce lot, aucun sujet créé, aucun déploiement ni import en production.
