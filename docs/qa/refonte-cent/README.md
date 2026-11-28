# Refonte des illustrations de 100 leçons

Les planches SVG suivent la référence « Après ». Les coupes, les textures et les pièces reconnaissables servent à expliquer une étape de chaque leçon. Les cartes et les coupes anatomiques signalent leurs limites dans les légendes. Les textes des leçons et leurs schémas éditoriaux conservent leurs validations respectives.

| Domaine                | Leçons | Dessins distincts | Captures mobiles                                                                           |
| ---------------------- | -----: | ----------------: | ------------------------------------------------------------------------------------------ |
| Informatique           |     20 |                19 | [1](captures/informatique-320-1.jpg) · [2](captures/informatique-320-2.jpg)                |
| Espace                 |     12 |                12 | [1](captures/espace-320-1.jpg)                                                             |
| Arts                   |     26 |                26 | [1](captures/arts-320-1.jpg) · [2](captures/arts-320-2.jpg) · [3](captures/arts-320-3.jpg) |
| Géographie             |     22 |                22 | [1](captures/geographie-320-1.jpg) · [2](captures/geographie-320-2.jpg)                    |
| Sciences fondamentales |     20 |                19 | [1](captures/sciences-320-1.jpg) · [2](captures/sciences-320-2.jpg)                        |
| Total                  |    100 |                98 |                                                                                            |

Deux dessins sont partagés par deux leçons chacun, l’un sur les pixels et l’autre sur la tectonique. Chaque leçon conserve sa référence, sa recette et sa validation. Les 98 dessins comportent trois ou quatre états.

Quelques exemples. La planche du télescope Webb distingue les dix-huit segments du miroir des cinq couches du pare-soleil. La presse typographique montre successivement l’encrage, la descente de la platine et le retrait de la feuille. L’expérience des deux fentes montre un impact, une accumulation puis des franges dans une distribution d’impacts synthétiques.

## Recette

Les 303 vues associées aux 100 leçons ont été activées dans Chromium à 320 et 1 280 px, soit 606 activations par toucher, clic ou touche Entrée. Les vérifications couvrent les légendes, le cadrage, le débordement horizontal et les renvois SVG. Les dix grilles mobiles ont été relues, avec une seconde passe pour les planches retouchées.

La comparaison au commit de départ confirme les 297 vues distinctes modifiées et les 2 138 autres vues du registre identiques. Les 148 tests isolés et la validation du corpus en mode simulation ont réussi.

[Captures mobile et ordinateur](index-captures.json) · [Mesures par leçon](mesures.json) · [Comparaison du registre](preservation.json) · [Empreintes des rendus](rendus.json) · [Reçus backend](backend-receipts.json)

L’[inventaire par référence](../refonte-visuelle-apres/inventaire.csv) recense 279 leçons redessinées, 269 dont les illustrations ont été conservées et 300 à reprendre à la fin de ce lot.

La [refonte des 100 leçons suivantes](../refonte-cent-suivantes/README.md) poursuit ce travail.
