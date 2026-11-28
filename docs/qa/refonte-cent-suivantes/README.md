# Refonte de 100 illustrations de leçons

Les planches suivent la référence visuelle « Après ». Les dessins expliquent chaque état avec des objets reconnaissables, des coupes et des légendes courtes. Cette livraison porte sur 100 leçons publiées déjà illustrées, à partir de l’inventaire des dessins à reprendre.

| Domaine                             | Leçons et planches | Captures mobiles                                                                                             |
| ----------------------------------- | -----------------: | ------------------------------------------------------------------------------------------------------------ |
| Automobile                          |                 28 | [1](captures/automobile-320-1.jpg) · [2](captures/automobile-320-2.jpg) · [3](captures/automobile-320-3.jpg) |
| Communication et médias             |                 29 | [1](captures/medias-320-1.jpg) · [2](captures/medias-320-2.jpg) · [3](captures/medias-320-3.jpg)             |
| Environnement et lecture du terrain |                 16 | [1](captures/environnement-320-1.jpg) · [2](captures/environnement-320-2.jpg)                                |
| Sport et sciences du mouvement      |                 22 | [1](captures/sport-320-1.jpg) · [2](captures/sport-320-2.jpg)                                                |
| Arts et patrimoine                  |                  5 | [1](captures/arts-320-1.jpg)                                                                                 |
| Total                               |                100 |                                                                                                              |

La coupe de l’habitacle différencie la ceinture du coussin gonflable. Le dessin du récepteur à cristal relie l’antenne, l’accord, le détecteur et l’écouteur. La planche sur l’océan distingue l’absorption du CO₂, la baisse du pH et la disponibilité du carbonate pour les coquilles. [NHTSA](https://www.nhtsa.gov/vehicle-safety/automated-vehicle-safety) · [NOAA Ocean Acidification Program](https://oceanacidification.noaa.gov/What-is-ocean-acidification/)

Les vues sur la naissance du basket distinguent le panier suspendu du cercle à fond ouvert. Les vues de basket en fauteuil illustrent la limite de deux poussées consécutives quand le ballon est tenu. La planche de rugby montre la direction du geste de passe. [Springfield College](https://springfield.edu/about/birthplace-of-basketball) · [Règles IWBF](https://www.iwbf.org/our-sport/rules) · [Règle 11 de World Rugby](https://passport.world.rugby/laws-of-the-game/laws-by-number/11-knock-forward-or-throw-forward)

## Vérification

Les 306 états des 100 leçons ont été activés au toucher sur un écran de 320 px, puis au clic et au clavier sur un écran de 1 280 px, soit 612 activations dans Chromium. Les mesures consignent les légendes, le cadrage, le débordement et les renvois SVG. Les onze grilles mobiles permettent de relire les dessins et de comparer leurs états.

La comparaison avec le commit de départ confirme que les 306 états ciblés évoluent et que les 2 129 autres vues du registre ont le même rendu. Les tests isolés et la validation du corpus en mode simulation ont réussi. Les validations de dessin sont archivées indépendamment des schémas éditoriaux.

[Captures mobile et ordinateur](index-captures.json) · [Mesures par leçon](mesures.json) · [Comparaison du registre](preservation.json) · [Empreintes](rendus.json) · [Reçus backend](backend-receipts.json)

L’[inventaire par référence](../refonte-visuelle-apres/inventaire.csv) compte désormais 379 leçons redessinées, 269 conservées et 200 à reprendre.
