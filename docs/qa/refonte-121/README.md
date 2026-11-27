# Refonte de 121 leçons

Les nouvelles planches sont des dessins SVG réalisés dans le code. Les coupes isolent les pièces qui expliquent chaque état. Les matières, les filets et les renvois servent à lire le mécanisme. Les installations sont représentées de façon illustrative.

| Série                     | Leçons | Dessins distincts | Planches mobiles                                                                                             |
| ------------------------- | -----: | ----------------: | ------------------------------------------------------------------------------------------------------------ |
| Automobile                |     32 |                32 | [1](captures/automobile-320-1.jpg) · [2](captures/automobile-320-2.jpg) · [3](captures/automobile-320-3.jpg) |
| Énergie                   |     30 |                28 | [1](captures/energie-320-1.jpg) · [2](captures/energie-320-2.jpg) · [3](captures/energie-320-3.jpg)          |
| Industries                |     24 |                24 | [1](captures/industries-320-1.jpg) · [2](captures/industries-320-2.jpg)                                      |
| Construction et robotique |     17 |                17 | [1](captures/structures-320-1.jpg) · [2](captures/structures-320-2.jpg)                                      |
| Milieux et matériaux      |     18 |                17 | [1](captures/milieux-320-1.jpg) · [2](captures/milieux-320-2.jpg)                                            |
| Total                     |    121 |               118 |                                                                                                              |

Les trois dessins partagés concernent l’éolien, l’hydroélectricité et les nappes. Chaque leçon conserve sa propre référence et sa preuve de recette. [Index des captures mobile et ordinateur](index-captures.json) · [Inventaire par référence](../refonte-visuelle-apres/inventaire.csv)

## Vérification

Les 366 vues associées aux 121 leçons ont été activées dans Chromium à 320 et 1 280 px, soit 732 vérifications par toucher, clic ou touche Entrée. Les vérifications couvrent le panneau affiché, les légendes, le cadrage, le débordement horizontal et les renvois SVG. La revue des planches mobiles a porté sur tous les états des 118 dessins. Les modèles du piston à vapeur et des volumes d’eau du pompage-turbinage restent couverts par leurs tests de géométrie et de conservation.

La comparaison avant et après confirme que les 357 vues distinctes ciblées changent et que les 2 078 autres vues du registre produisent le même rendu. Les 148 tests isolés et la validation du corpus ont réussi.

[Mesures par leçon](mesures.json) · [Comparaison du registre](preservation.json) · [Empreintes des rendus](rendus.json) · [Reçus backend](backend-receipts.json)

L’inventaire recense 179 leçons redessinées, 269 dont les illustrations ont été conservées et 400 à reprendre.
