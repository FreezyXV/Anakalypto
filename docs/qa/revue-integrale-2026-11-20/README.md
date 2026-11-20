# Revue des illustrations des leçons publiées

La file PostgreSQL a fourni les références des **433 leçons illustrées**. Le registre compte **395 dessins SVG distincts**, parfois utilisés sur plusieurs leçons, et **20 ateliers**. La revue visuelle a porté sur les 1 185 états des dessins et les 103 rendus distincts des activités échantillonnés parmi les étapes, variantes, couvertures et positions de curseur. Aucun fichier image importé ne figure dans l’inventaire. Les 965 schémas éditoriaux du texte ont une [revue dédiée](../inline-schemas/README.md).

Chaque planche a été relue dans l’ordre des états. Les critères étaient la justesse du mécanisme représenté, la cohérence entre le dessin et sa légende, et la capacité à reconnaître les pièces ou à suivre une transition à la taille d’un téléphone. L’[index de revue](review-index.json) donne le résultat pour chaque visuel et les références des leçons associées. Les corrections s’appuient sur le style de planche technique retenu pour Anakalypto.

| Leçon                                    | Correction                                                                                                            |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Éclipses                                 | Ombre centrale et pénombre distinctes. La première vue montre l’ombre qui passe à côté de la Terre.                   |
| Air et eau dans l’ISS                    | Dioxygène et dihydrogène sont reliés à leur propre sortie. Le dioxygène rejoint la cabine.                            |
| Diffusion d’image                        | Le bloc du modèle, sa flèche et la légende disposent d’espaces distincts.                                             |
| Satellites en orbite basse               | La zone de recouvrement et le changement de liaison apparaissent d’une vue à l’autre.                                 |
| Vanne EGR                                | Le trajet direct et la vanne fermée portent une légende cohérente.                                                    |
| Formation d’ammoniac                     | Les deux molécules formées portent le nom du produit. La légende distingue N et H.                                    |
| Conditions et boucles                    | « Oui » entre dans l’incrément et revient au test. « Non » conduit directement à la fin.                              |
| Démarrage de l’ordinateur                | Une flèche montre le noyau chargé en mémoire, puis une autre son exécution par le processeur.                         |
| Impression de béton                      | Un vide sépare réellement les deux pans imprimés. Le nez de la buse suit la couche en cours.                          |
| Forge                                    | Une enclume, un marteau et les trois profils de la même pièce montrent la déformation à l’état solide.                |
| Crawl                                    | La silhouette en coupe permet de suivre le bras immergé et celui qui revient par l’air.                               |
| Arc-en-ciel                              | Le trajet calculé est conservé. Un agrandissement signalé sépare les sorties rouge et violette.                       |
| Isolation sismique                       | Une position de référence commune rend lisible le déplacement du sol et le cisaillement des appuis.                   |
| Ateliers du levier et de la flottabilité | Les mesures décimales s’affichent avec la virgule française. Le libellé accessible du levier suit la même convention. |

Les mécanismes ont été rapprochés des sources suivantes. [Géométrie des éclipses, NASA](https://science.nasa.gov/eclipses/geometry/), [systèmes de vie à bord de l’ISS, NASA](https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/), [dispersion et arc-en-ciel, NOAA](https://www.nesdis.noaa.gov/about/k-12-education/optical-phenomena/what-causes-rainbow), [transfert entre satellites, ESA](https://resilience.esa.int/archives/projects/handingover), [extrusion du béton, NIST](https://www.nist.gov/publications/3d-printing-using-concrete-extrusion-roadmap-research), [forge, Forging Industry Association](https://www.forging.org/fia/content/about/What_is_Forging.aspx?hkey=19c58afa-fd8f-40e3-bfec-65634f86c609) et [isolation sismique, FEMA](https://www.fema.gov/sites/default/files/documents/fema_nehrp_design-examples-training-materials_volume-1.pdf).

## Recette des retouches

Les 39 vues des 13 leçons ont été activées sur leur page d’origine à **320 px** et **1 280 px**. Entrée et la souris ont donné 78 activations confirmées. La [mesure des pages](interactions.json) donne une seule vue visible par état, zéro débordement horizontal, zéro légende coupée, zéro chevauchement de texte supérieur à 3 px et une taille minimale de 12,55 px à 320 px. Les captures sont réunies sur deux planches par largeur, [mobile 1](planche-320-1.jpg), [mobile 2](planche-320-2.jpg), [ordinateur 1](planche-1280-1.jpg) et [ordinateur 2](planche-1280-2.jpg).

Dans les deux [ateliers](ateliers-320.jpg), le curseur a été actionné au clavier et le mode de comparaison a été ouvert aux deux largeurs. Le [relevé des essais](workshops.json) confirme les valeurs, les décimales et l’absence de débordement ou d’erreur de console. La recette n’a pas utilisé de participants ni de lecteur d’écran réel.

La [comparaison des rendus](preservation.json) confirme que les 382 autres dessins et 18 autres ateliers sont identiques dans le même environnement JavaScript. Les [empreintes des retouches](reviewed-render-hashes.json) complètent les tests historiques. Les [reçus de la file](backend-receipts.json) relient chacune des quinze validations à cette recette.
