# Quatre illustrations techniques retouchées

Revue ciblée du 20 novembre 2026, à partir des planches des [cinquante dessins du 19 novembre](../illustrations-50-2026-11-19/README.md) et de [six planches du lot précédent](../horizons50/README.md). Les quatre leçons retenues avaient déjà un dessin. Chacune avait un mécanisme absent ou ambigu sur l’image. La file des 515 leçons en attente d’un dessin est restée hors de cette revue.

| Sujet                  | Retouche                                                                                                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pied à coulisse        | Les becs entourent la pièce, puis un agrandissement montre l’alignement du quatrième trait du vernier. La lecture de 12,4 mm est comparée à un intervalle de tolérance fictif.   |
| Zone de déformation    | Dans une même coupe latérale, le longeron relie l’avant à la cellule de sécurité et se replie lors du choc illustré.                                                             |
| Photolithographie      | Les ouvertures du masque sont suivies dans le système optique, sur la résine, puis dans les ouvertures gravées de la couche sous-jacente. L’exemple utilise une résine positive. |
| Fabrication de l’acier | Trois profils distinguent le haut-fourneau, le convertisseur équipé d’une lance à oxygène et le four à arc muni d’électrodes.                                                    |

Les références et motifs de sélection sont dans [subjects.json](subjects.json). Les mécanismes ont été vérifiés auprès de [Mitutoyo](https://www.mitutoyo.com/metrology-insights/mitutoyo-calipers-digital-dial-and-vernier-calipers-precision-measurement-tools-for-manufacturing/), de [l’IIHS](https://www.iihs.org/research-areas/bibliography/ref/1853), d’[ASML](https://www.asml.com/en/company/stories/2021/semiconductor-manufacturing-process-steps) et de [worldsteel](https://worldsteel.org/about-steel/glossary/?glossary_term=68719).

## Recette

Les douze vues ont été activées sur les quatre pages de leçon, à [320 px](planche-320.jpg) avec Entrée et à [1 280 px](planche-1280.jpg) à la souris. La [recette des 24 activations](interactions.json) confirme une vue affichée par état, aucun débordement, aucune légende coupée et aucun chevauchement de légendes supérieur à 3 px. Les textes SVG mesurent au moins 12,55 px à 320 px. Les captures proviennent des pages d’origine sur la base d’essai.

La [comparaison des empreintes](preservation.json) confirme que les 1 173 autres vues des 391 autres dessins du registre sont identiques dans le même environnement. Le test portable continue de contrôler les 345 dessins historiques et utilise l’[empreinte révisée](steel-hashes.json) pour la leçon sur l’acier. Les [reçus du backend](backend-receipts.json) relient les quatre validations à cette recette.
