# Livraison des visuels Découvrir — 10 octobre 2026

## Résultat

Les quinze découvertes ont chacune un dessin adapté à leur sujet. Onze nouveaux composants SVG originaux remplacent les chaînes de texte des onze scénarios concernés. Les trois pilotes et le piston restent disponibles, ainsi que `flow` pour les futurs contenus qui nécessitent une chaîne ou un cycle.

| Découverte           | Dessin / changement observable                                    | Scène complémentaire                                                       |
| -------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Feuille et lumière   | Feuille, lumière, trajet eau → O₂ distinct du carbone CO₂ → sucre | Placard : apport lumineux interrompu, nuance sur les réserves              |
| Pain au levain       | Pâte plate ou gonflée, bulles, levures et bactéries agrandies     | Rôles dominants : gaz et acides                                            |
| Bouteille recyclée   | Intrus au tri, calcin, four, moulage et retour au conteneur       | Lot non trié bloqué avant broyage/fusion                                   |
| Wi-Fi                | Box, téléphone, arcs radio, émission et réponse                   | Mur et signal reçu plus faible                                             |
| Téléphone analogique | Courbes symboliques de son et de courant, membranes et fil        | Silence : pas de variation liée à la voix, sans prétendre un courant nul   |
| Cyclone              | Coupe, mer, vapeur, condensation, chaleur, convergence et œil     | Terre : perte de l’apport marin, circulation résiduelle                    |
| Machine à papier     | Pâte fibreuse, toile, presses, cylindre chauffé et bobine         | Papier recyclé : retour à la pâte ; défi de formation fixé sur l’égouttage |
| Formation d’un sol   | Roche, fissures, particules minérales, humus et horizons          | Érosion d’un sol nu par la pluie                                           |
| Fresque              | Coupe de mur/enduit, grains de couleur et cristaux                | Retouche sur enduit durci, pigment en surface                              |
| Réseau électrique    | Centrale, transformateurs, pylône et maison                       | Production mise en regard de la consommation                               |
| Pilote automatique   | Consigne séparée, capteurs, comparaison, servomoteurs et avion    | Rafale, mesure et correction ; capteurs disponibles lorsque désengagé      |

Les onze JSON concernés changent de version. Les textes qui demandaient de regarder une étape numérotée d’un ancien `flow` désignent désormais l’objet effectivement dessiné. Les bonnes réponses et le nombre d’étapes ne changent pas.

## Interactions et accessibilité

Les commandes existantes pilotent les dessins. Pour papier, sol, fresque et réseau, cinq boutons permettent aussi de choisir une étape directement ; le curseur affiche le même nom d’étape. Une image fixe peut être choisie pour une explication ou un défi, mais pas pour une manipulation. Les variantes sont limitées au sujet correspondant par le schéma.

Les SVG sont masqués aux lecteurs d’écran : une légende courte et une description dynamique accessible exposent le mécanisme et l’état. La description détaillée est réservée aux technologies d’assistance pour éviter de répéter visuellement le dessin et le retour de manipulation. Les pulsations des arcs Wi-Fi respectent `prefers-reduced-motion`. Les aperçus du catalogue restent statiques. Aucun téléchargement de média ni service tiers n’est nécessaire pour afficher les dessins.

## Fondements et limites

Ce sont des représentations pédagogiques, pas des simulations physiques ni des mesures de temps, puissance, fréquence, pression, humidité ou épaisseur. Les formes de signaux et les tailles de microbes sont symboliques. La formation d’un sol est présentée par étapes qui se chevauchent réellement ; la carbonatation est distinguée d’une simple évaporation d’eau. La chaleur de la mer ne suffit pas, à elle seule, à former un cyclone.

Les dessins reprennent les mécanismes documentés dans les sources des scénarios et l’audit de Claude. Lecture de contrôle sur les sources pertinentes : OpenStax (photosynthèse), brevet de Bell, NOAA, EIA, Cisco, FAO, Espace des sciences, ASBP Lime Group. Tate et Techniques de l’Ingénieur n’ont pas été accessibles à la lecture automatique pendant cette tranche ; cela ne modifie pas le rapport de lecture directe de Claude. Une source primaire supplémentaire, [Valmet, processus papetier, page 4](https://www.valmet.com/globalassets/investors/reports--presentations/roadshows--other-presentations/2018/jyvaskyla-site-visit-presentation-2018-.pdf), a été lue et ajoutée à la découverte du papier.

Le cyclone sépare une coupe verticale (œil dégagé, air descendant, nuages autour) d’un petit symbole de rotation vu du dessus à gauche, dans l’hémisphère nord. Le réseau électrique est une simplification française. Le pilote automatique ne représente pas un système de commande exploitable pour piloter un avion.

## Validation

- 32 tests du format Découvrir : contenus, progression, révision, schéma, sujets couverts, scènes, images fixes et cohérence des états.
- TypeScript, lint et compilation Next de production avec `npm run build -- --webpack` réussis ; quinze routes de découverte et quinze routes de révision générées, 1 234 pages au total. La dernière relance Turbopack échoue dans cet environnement sur l’ouverture de son port de travail ; Webpack permet de vérifier le résultat final. Aucun changement de configuration du compilateur n’a été enregistré.
- Onze parcours complets contrôlés dans le navigateur à 390 × 844 : manipulation, mauvaise réponse bloquante à chacun des deux défis, correction, progression et écran final.
- Aucune légende hors cadre, superposition entre textes ni débordement horizontal dans les vues mesurées des onze manipulations après agrandissement des textes. Les légendes SVG des nouveaux composants utilisent au minimum 14 unités ; les rectangles de texte mesurés à 390 px ont une hauteur minimale de 13 px. Les mentions de modèle très petites ont rejoint les légendes HTML ou les descriptions existantes. Captures relues pour chaque nouveau dessin et plusieurs scènes de transfert.
- Révision express contrôlée sur papier, fresque et téléphone : dessin masqué avant la réponse, puis image et description correspondant au défi.
- Vingt boutons d’étape vérifiés (cinq par sujet séquentiel), ainsi que le retour à l’état désactivé de sept interrupteurs.
- Les quinze aperçus ont été vérifiés à 1280 px : état représentatif, aucune animation active et aucun débordement horizontal.

Une relance a utilisé par erreur la configuration d’intégration globale : la connexion de migration à la base de test a échoué, avant exécution des tests. Les contrôles réussis utilisent explicitement `npx vitest run --config vitest.discovery.config.ts`, sans chargement d’environnement ni connexion à une base. Cet échec ne constitue pas une validation de l’intégration globale.

Les essais ne remplacent pas une observation auprès des deux publics. Les durées et les bénéfices pédagogiques ne sont pas mesurés.

## Suite confiée à Claude

La mission est décrite dans `CLAUDE_CODE_PHASE2_PROMPT.md` : fermer les points éditoriaux ouverts, contrôler les quiz, proposer les corrections de JSON à Codex, préparer les essais réels et la préproduction. Claude garde les articles et ses nouveaux documents ; Codex garde les composants, le contrat et les JSON pendant le travail simultané.

Les corrections d’articles Expanded nécessitent encore un import dans la base choisie. Aucun import, migration, commit, push ou déploiement n’est réalisé dans cette tranche.

Les propositions de la phase 2 de Claude ont été examinées et intégrées dans les JSON et composants concernés. Le détail figure dans `CODEX_CLAUDE_PHASE2_INTEGRATION.md` ; les documents de Claude restent inchangés.

## Correctif après la recette de Claude — phase 3

Les neuf demandes supplémentaires sont intégrées ; voir `CODEX_CLAUDE_PHASE3_INTEGRATION.md` pour les décisions et les vérifications. Cette tranche relève les légendes des quinze dessins à 16 unités SVG et adapte leur espace sous 380 px : le minimum mesuré dans les découvertes à 320 px CSS est désormais de 12,22 px rendus. Cette mesure remplace le précédent constat à 390 px pour apprécier la lisibilité sur petit écran.

L’en-tête ne déborde plus à 320 px. Les résumés fresque/réseau, les flèches du cyclone, l’interruption de commande du pilote, l’état initial de la fresque, les trajets du turbo et les légendes du piston/pain sont corrigés. Les 32 tests isolés, TypeScript, le lint et la compilation Webpack passent. Les contrôles techniques ne remplacent toujours pas les essais avec des participants ni l’import des articles corrigés dans la base choisie.
