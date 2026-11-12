# Vingt-neuf illustrations sur l’énergie — 11 novembre 2026

29 nouveaux dessins spécifiques, associés à 29 leçons déjà publiées et réservées par Codex dans le backend avant leur création. Trois vues par dessin, soit **87 états**. Aucun nouveau sujet, texte d’article ou date lastVerified modifié.

## Vérifications

- Lecture des 29 leçons concernées ; références primaires ou techniques ci-dessous. Schémas pédagogiques originaux et chiffres fictifs explicitement signalés, sans statistiques nationales inventées.
- Relecture visuelle des 29 planches à 1280 px, qui présentent les trois états ; puis corrections des trajets et légendes. Les planches de première revue précèdent certaines retouches finales ; les captures `*-compiled.jpg` et `*-320.jpg` montrent les versions finales des articles.
- À 320 px : les 29 captures finales ont été relues. Les 87 états ont été manipulés au clavier (Espace et Entrée) et mesurés : une seule figure visible, bon dessin et bonne légende, aucun débordement horizontal ni texte hors cadre. Taille minimale mesurée : **12,55 px**.
- À 1280 px : contrôle des 87 cadres et absence de collision entre légendes dans la galerie de revue. Les données finales sont dans `desktop-bounds.json`.
- Compilation Next.js réussie sur une copie isolée avec PostgreSQL local, galerie de recette retirée avant compilation. Sous `next start`, les 87 états des vrais articles ont été rejoués et vérifiés, sans erreur ou avertissement de console. Mesures dans `compiled-checks.json`, contrôles mobiles dans `mobile-checks.json`.
- **103 tests isolés réussis**, dont six sur les exemples quantitatifs et une comparaison de conservation des anciens dessins : les **124 dessins antérieurs, dans leurs 372 états, produisent exactement le même balisage** qu’avant ce lot. Cela ne remplace pas un nouveau test avec des lecteurs réels.

Le nouveau cadre 360 × 230 garde les légendes à leur taille normale et dégage le bas des dessins. Les anciens cadres 360 × 210 sont conservés. Aucune animation n’est ajoutée : les vues sont produites côté serveur et les contrôles changent d’état.

## Choix vérifiés et corrections

- Pile de Volta : pas de court-circuit graphique entre le fil et la borne haute ; polarités lisibles et trajet extérieur des électrons.
- Batterie au plomb : sens électronique inversé à la recharge, bornes conservées, réactions représentées qualitativement.
- Électrolyse PEM / pile PEM : protons à travers la membrane, électrons dans le circuit extérieur ; polarités et fonctions distinctes. Aucune recette d’eau salée.
- Batteries à flux : chaque liquide possède son aller et son retour ; sens des pompes cohérent ; agrandissement des réservoirs distinct de celui de l’empilement.
- Moulins : rotation de la meule supérieure indiquée dans son plan ; meule inférieure fixe ; eau du moulin par-dessus sur le côté chargé de la roue.
- Air comprimé : échange thermique visible avant la détente, variante adiabatique explicitée.
- Fission : boucles primaire et vapeur séparées. Fusion D–T : conservation des protons et neutrons, neutron libre hors du plasma chargé.
- Isolation : les transferts réduits traversent encore la paroi. Masse thermique, isolation et lame de gaz ne sont pas confondues.
- Bilans : 100 = 65 + 7 + 28 unités fictives ; éclairage à 60/10/30 Wh et rebond calculé ; même énergie totale après décalage d’un usage ; MW et MWh distingués.

## Références des 29 leçons

| Référence stable | Leçon                                                                                  | Dessin          |
| ---------------- | -------------------------------------------------------------------------------------- | --------------- |
| LEC-F788D203EF2D | L'efficacité énergétique et l'effet rebond                                             | `rebound`       |
| LEC-78AC0B04F9E0 | Le raffinage du pétrole                                                                | `refinery`      |
| LEC-8D0218E442E0 | Les déchets radioactifs                                                                | `nuclearwaste`  |
| LEC-EC8F673B8447 | La fusion nucléaire                                                                    | `fusion`        |
| LEC-33076CB397C1 | Le solaire thermique et les centrales à concentration                                  | `csp`           |
| LEC-669C05672517 | Le mix électrique et l'intermittence                                                   | `duckcurve`     |
| LEC-92C12B180D54 | Énergie primaire et énergie finale                                                     | `energychain`   |
| LEC-46232B9F5B8F | Le moulin à eau                                                                        | `watermill`     |
| LEC-9E305D047C46 | La batterie au plomb                                                                   | `leadacid`      |
| LEC-6BFC0D567E90 | L'électrolyse de l'eau                                                                 | `electrolyser`  |
| LEC-CC56946C1DF5 | Isoler un bâtiment                                                                     | `insulation`    |
| LEC-9CB76F443212 | Comment une LED fabrique-t-elle de la lumière sans chauffer de filament ?              | `led`           |
| LEC-A122B9AAE1DA | La cogénération                                                                        | `cogeneration`  |
| LEC-056F72B602DA | Le bois de chauffage                                                                   | `firewood`      |
| LEC-BA1CDF1AB463 | Comment un double vitrage garde-t-il la chaleur dans la maison ?                       | `glazing`       |
| LEC-FA6DCA20A885 | Pourquoi une maison aux murs épais de pierre ou de terre reste-t-elle fraîche en été ? | `thermalmass`   |
| LEC-042806B5CF04 | Pourquoi un appareil en veille consomme-t-il encore de l'électricité ?                 | `standby`       |
| LEC-487BA9F097CC | Comment transforme-t-on du bois en charbon de bois ?                                   | `pyrolysis`     |
| LEC-469A6E5B1A1E | Comment un moulin à vent transformait-il le vent en farine ?                           | `windmill`      |
| LEC-B46AD3C66DCC | Comment un four solaire peut-il cuire des aliments sans feu ?                          | `solaroven`     |
| LEC-1848677BEF9D | Comment Volta a-t-il inventé la première pile électrique ?                             | `voltapile`     |
| LEC-E9F434B833FE | Comment une pile à hydrogène produit-elle de l'électricité sans rien brûler ?          | `fuelcell`      |
| LEC-36A2133DEAF9 | Pourquoi un pays entier peut-il se retrouver d'un coup sans électricité ?              | `gridcascade`   |
| LEC-98CFDA35E5AE | Comment un atome qui se casse peut-il allumer une ampoule ?                            | `fission`       |
| LEC-558CE11FB232 | Comment un réseau électrique intelligent adapte-t-il la consommation à la production ? | `demandshift`   |
| LEC-45AAB7D8BE0C | Peut-on produire de l'électricité et des cultures sur le même champ ?                  | `agrivoltaic`   |
| LEC-E3DFB0303D33 | Comment stocker de l'électricité dans de l'air comprimé ?                              | `compressedair` |
| LEC-52F84AC36AC8 | Comment une méga-batterie aide-t-elle à stabiliser le réseau électrique ?              | `gridbattery`   |
| LEC-33078A068CEF | Comment une batterie peut-elle stocker de l'énergie dans des réservoirs de liquide ?   | `flowbattery`   |

Les chemins exacts et le fichier éditorial de départ sont conservés dans [selection.json](selection.json). Le statut actif est désormais dans le backend ; les anciens fichiers de réservation de l’audit ne sont pas une deuxième file.

## Références techniques utilisées

Les pages et extraits pédagogiques pertinents ont servi aux mécanismes représentés ; ce n’est pas une vérification intégrale de tous les faits historiques ou chiffres des articles. Aucun dessin n’est une copie d’une figure de ces sources.

- `rebound` : [AIE — Efficiency should always be the first answer](https://www.iea.org/commentaries/efficiency-should-always-be-the-first-answer).
- `refinery` : [EIA — Crude oil distillation](https://www.eia.gov/todayinenergy/detail.php?id=6970).
- `nuclearwaste` : [Andra — Classification et modes de gestion, PNGMDR](https://www.andra.fr/sites/default/files/2017-12/PNGMDR-2010-2012-synthese.pdf).
- `fusion` : [DOE — Deuterium-Tritium Fusion Fuel](https://www.energy.gov/science/doe-explainsdeuterium-tritium-fusion-fuel).
- `csp` : [DOE — Concentrating Solar-Thermal Power Basics](https://www.energy.gov/cmei/systems/concentrating-solar-thermal-power-basics).
- `duckcurve` : [DOE — Confronting the Duck Curve](https://www.energy.gov/cmei/solar/articles/confronting-duck-curve-how-address-over-generation-solar-energy).
- `energychain` : [SDES — Méthodologie du bilan énergétique, mars 2026](https://www.statistiques.developpement-durable.gouv.fr/media/9074/download?inline=).
- `watermill` : [Acorn Bank Watermill Trust — The mill machinery](https://acornbankwatermill.org.uk/mill_working.html).
- `leadacid` : [MIT OpenCourseWare — Batteries and Energy Storage, cours 11](https://ocw.mit.edu/courses/2-60j-fundamentals-of-advanced-energy-conversion-spring-2020/ed4b85c28d16b5cc2dd0d2635a5723f4_MIT2_60s20_lec11.pdf).
- `electrolyser` : [DOE — Hydrogen Production: Electrolysis](https://www.energy.gov/cmei/fuels/hydrogen-production-electrolysis).
- `insulation` : [DOE — Building America, Energy Renovations: Insulation](https://www.energy.gov/sites/prod/files/2013/11/f5/insulation_guide.pdf).
- `led` : [DOE — LED Basics](https://www.energy.gov/cmei/ssl/led-basics).
- `cogeneration` : [EPA — What Is CHP?](https://www.epa.gov/chp/what-chp).
- `firewood` : [EPA — Burn Wise: dry, seasoned wood](https://www.epa.gov/sites/default/files/2016-11/documents/kit_3_health_and_safety_tips.pdf).
- `glazing` : [DOE — Window Types and Technologies](https://www.energy.gov/energysaver/window-types-and-technologies).
- `thermalmass` : [Building Performance NZ — Using thermal mass](https://www.building.govt.nz/getting-started/smarter-homes-guides/design/using-thermal-mass-for-heating-and-cooling).
- `standby` : [Lawrence Berkeley National Laboratory — Standby Power](https://standby.lbl.gov/).
- `pyrolysis` : [FAO — Wood carbonisation and the products it yields](https://www.fao.org/4/X5555E/x5555e03.htm).
- `windmill` : [Acorn Bank Watermill Trust — Engrenages et paire de meules](https://acornbankwatermill.org.uk/mill_working.html).
- `solaroven` : [NASA — Make Sun S’mores](https://www.nasa.gov/stem-content/make-sun-smores/).
- `voltapile` : [Smithsonian — Battery: Voltaic Pile](https://americanhistory.si.edu/pt/collections/object/nmah_703289).
- `fuelcell` : [DOE — Fuel Cell Animation, text version](https://www.energy.gov/cmei/fuels/fuel-cell-animation-text-version).
- `gridcascade` : [ENTSO-E — Expert panel, 28 April 2025 blackout](https://www.entsoe.eu/publications/blackout/28-april-2025-iberian-blackout/).
- `fission` : [DOE — Fission and Fusion: What is the Difference?](https://www.energy.gov/ne/articles/fission-and-fusion-what-difference).
- `demandshift` : [RTE — Mécanisme d’ajustement et effacement](https://analysesetdonnees.rte-france.com/marches/equilibrage).
- `agrivoltaic` : [DOE — Farmer’s Guide to Going Solar](https://www.energy.gov/cmei/systems/farmers-guide-going-solar).
- `compressedair` : [DOE — Compressed Air Energy Storage, SI 2030](https://www.energy.gov/sites/default/files/2023-09/8_Technology%20Strategy%20Assessment%20-%208%20Compressed%20Air%20Energy%20Storage%20_508.pdf).
- `gridbattery` : [DOE — Battery Energy Storage Systems, FEMP 2025](https://www.energy.gov/sites/default/files/2025-08/femp_summer_camp_t2_s3_slides.pdf).
- `flowbattery` : [IEA Energy Storage — Technology: Flow Battery, 2024](https://iea-es.org/wp-content/uploads/public/FactSheet_Electrochemical_Flow-Battery.pdf).

## Limites et points à transmettre à Claude

Pas de test auprès de participants ni de lecteur d’écran réel. Pas de modification ou de vérification du déploiement de production. READY atteste la recette du visuel, pas la validation éditoriale intégrale de la leçon.

Des points éditoriaux directement observés sont listés dans [EDITORIAL_NOTES.md](EDITORIAL_NOTES.md), notamment une proposition d’expérience à l’eau salée dans l’article sur l’électrolyse. Ils n’ont pas été repris dans les dessins ; les textes restent à traiter par Claude.

## Enregistrement et sauvegarde du suivi

Les 29 leçons ont été passées à READY par les commandes `complete`, avec ce rapport et les références détectées dans le code. Les réservations ont été libérées. L’export du backend a sauvegardé les 200 associations prêtes, dont les 171 antérieures, dans le manifeste de reprise et les CSV/JSON de suivi. Le corpus n’a pas été réaudité. Compteurs locaux après export : 896 publiées, 200 prêtes, 696 attentes, zéro réserve en cours.

En complément des 103 tests isolés, les 11 tests PostgreSQL dédiés sont réussis. TypeScript et ESLint du périmètre passent. Le suivi ne remplace pas la décision d’installer la livraison et sa migration en production.

Dernière retouche de lisibilité : la légende « Pompes + cellules » a été éloignée des lignes de retour de liquide. La seule leçon concernée a été rouverte puis réservée dans le backend pendant cette correction. Après nouvelle compilation, les trois états ont été rejoués à 320 et 1280 px ; dégagement minimal mesuré entre la légende et les tuyaux : 5,18 unités SVG. Les captures mobiles et compilées de cette leçon ont été remplacées ; détails dans `flowbattery-final-checks.json`.
