# Trente illustrations scientifiques · 12 novembre 2026

**30 leçons publiées, 90 vues commentées originales**, réservées dans PostgreSQL avant création. Ces leçons avaient déjà un schéma éditorial validé, mais aucun dessin spécifique, atelier ou illustration importée associé. Aucun nouveau sujet, article, quiz ou brouillon n’a été créé ou modifié. Les références, chemins exacts et empreintes du texte sont dans [lessons.csv](lessons.csv).

## Recette effectuée

Toutes les 90 vues ont été relues par œil sur ordinateur à 1280 px et sur téléphone à 320 px. Les douze planches ci-dessous assemblent des captures natives des SVG, sans agrandissement ; les cinq lignes correspondent aux cinq sujets de la planche, les trois colonnes aux trois vues. Sur mobile, le SVG mesure 251 px et le texte au minimum **12,55 px**.

Les mesures finales vérifient les vrais identifiants de chaque page et chaque vue : aucune légende coupée, aucune intersection de boîtes de texte au seuil documenté de 3 px, aucune sortie du cadre ; marge horizontale minimale vérifiée de 4 px. Les sens des flèches, structures et recouvrements de formes ont également été examinés visuellement, pas seulement mesurés. Détails : [layout.json](layout.json).

Les trente vraies pages d’articles ont été ouvertes à chaque largeur sur une base de test explicite. Les trois commandes ont été essayées au clavier à 320 px, au clic à 1280 px : 180 activations, bonne vue affichée et état sélectionné, aucun débordement horizontal, aucune erreur console observée. Les trente textes de test ont les mêmes empreintes que les réservations de production. Détails : [interactions.json](interactions.json).

| Planche | Sujets                                                          | Ordinateur                     | Mobile                       |
| ------- | --------------------------------------------------------------- | ------------------------------ | ---------------------------- |
| 0       | Cellule, réseau alimentaire, sélection, antibiorésistance, ABO  | [1280 px](captures/1280-0.jpg) | [320 px](captures/320-0.jpg) |
| 1       | pH, eau, redox, tableau périodique, carbone                     | [1280 px](captures/1280-1.jpg) | [320 px](captures/320-1.jpg) |
| 2       | Combustion, équilibre, Maillard, Ératosthène, projections       | [1280 px](captures/1280-2.jpg) | [320 px](captures/320-2.jpg) |
| 3       | π, moyenne/médiane/mode, grands nombres, poids lunaire, laser   | [1280 px](captures/1280-3.jpg) | [320 px](captures/320-3.jpg) |
| 4       | Chaleur, réfrigérateur, source chaude, courants, barrage        | [1280 px](captures/1280-4.jpg) | [320 px](captures/320-4.jpg) |
| 5       | Mémoire de forme, inox, graphène, composites, capsules de béton | [1280 px](captures/1280-5.jpg) | [320 px](captures/320-5.jpg) |

## Contrôles pédagogiques particuliers

- La variation précède la sélection. Les individus ne changent pas volontairement de couleur ; les descendants représentés sont compatibles avec les survivants de l’exemple.
- ABO décrit les marques A et B et un exemple d’héritage, sans règle de transfusion ; O ne signifie pas absence de toute molécule de surface.
- Le pH neutre est précisé à 25 °C. Le rapport 10 entre pH 3 et 4 est illustré par dix points contre un, sans équivalence entre pH et danger.
- L’angle H–O–H de l’eau est calculé à 104,5°. Traits covalents et pointillés intermoléculaires sont distingués. Les modèles carbonés conservent leurs nombres d’atomes.
- La combustion complète choisie conserve exactement 1 C, 4 H et 4 O dans chaque vue. Ce n’est pas un modèle de combustion de tout combustible.
- Équilibre chimique signifie vitesses opposées égales, sans imposer des quantités égales.
- La géométrie d’Ératosthène explicite l’angle agrandi et l’incertitude de l’unité historique. Les indicatrices cartographiques sont calculées : Mercator grossit localement avec la latitude ; la projection équivalente garde leur surface.
- Le tour déroulé vaut π diamètres ; moyenne, médiane et mode partagent exactement la même série 2, 3, 3, 4, 38. Les lancers ont une seule séquence reproductible avec fluctuations, sans compensation obligatoire des écarts.
- Masse en kg et poids en N sont distincts. Le laser montre le pompage, une désexcitation et une sortie partiellement transmissive ; il ne crée pas d’énergie.
- Le cycle frigorifique distingue ses quatre fonctions et montre Q sortie = Q entrée + travail. Les blocs thermiques sont un exemple isolé à capacités égales, pas une règle de moyenne universelle.
- La source chaude n’exige pas de magma. Le courant océanique est une coupe conceptuelle qui mentionne aussi vents et mélange ; le barrage-voûte change explicitement en vue de dessus avec sa convexité vers la retenue.
- Le réseau hexagonal du graphène a au plus trois voisins par atome. Les couches et fibres restent dans leurs surfaces, sans dépasser les légendes. Passivation et cicatrisation ne promettent pas une réparation ou une résistance universelle.

La recette a fait corriger des légendes trop longues, le remplissage implicite de l’axe des probabilités, l’angle de l’eau et des marges de graphe. Les modèles restent volontairement simplifiés : ni protocole médical, ni dimensionnement, ni résultat d’essai sur un matériau réel. Chaque leçon expose ses limites et sa source.

## Sources associées

Les références ci-dessous sont versionnées avec les dessins ; les textes de leçon et leurs dates `lastVerified` sont conservés. Il ne s’agit pas d’une nouvelle vérification éditoriale intégrale des articles.

- **LEC-BD8A6750BAD9 · cellmap** : [OpenStax — Prokaryotic Cells](https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells).
- **LEC-482C9F4AF9C4 · foodweb** : [OpenStax — Energy Flow through Ecosystems](https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems).
- **LEC-E2A4777A8BF4 · selectionbeetles** : [OpenStax — Understanding Evolution](https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution).
- **LEC-F0D12CD1F3FF · resistantpopulation** : [CDC — About Antimicrobial Resistance](https://www.cdc.gov/antimicrobial-resistance/about/index.html).
- **LEC-B94BE1EE513E · abomarkers** : [NHS Blood Donation — Blood types](https://www.blood.co.uk/why-give-blood/blood-types/).
- **LEC-E44D72BC4A9B · phscale** : [OpenStax — pH and pOH](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh).
- **LEC-A4D8F80D11BF · waterbonds** : [OpenStax — Water](https://openstax.org/books/biology-2e/pages/2-2-water).
- **LEC-76FF959256D0 · redoxpair** : [OpenStax — Classifying Chemical Reactions](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions).
- **LEC-0D7569645001 · periodicmap** : [OpenStax — The Periodic Table](https://openstax.org/books/chemistry-2e/pages/2-5-the-periodic-table).
- **LEC-543DEF1CB011 · carbonbonds** : [OpenStax — Hydrocarbons](https://openstax.org/books/chemistry-2e/pages/20-1-hydrocarbons).
- **LEC-5DE3CD051512 · methaneflame** : [OpenStax — Writing and Balancing Chemical Equations](https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations).
- **LEC-F7DF87BA0740 · dynamicbalance** : [OpenStax — Chemical Equilibria](https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria).
- **LEC-5062405EAFEF · maillardfood** : [ACS / C&EN — Maillard Reaction](https://cen.acs.org/articles/89/i47/Maillard-Reaction.html).
- **LEC-AFE4313B5782 · eratosthenes** : [OpenStax — Ancient Astronomy](https://openstax.org/books/astronomy-2e/pages/2-2-ancient-astronomy).
- **LEC-4203FE13E7A0 · mapprojection** : [USGS — How are different map projections used?](https://www.usgs.gov/faqs/how-are-different-map-projections-used).
- **LEC-1D656117C160 · circlepi** : [OpenStax — Geometry Applications: Circles](https://openstax.org/books/prealgebra-2e/pages/9-5-solve-geometry-applications-circles-and-irregular-figures).
- **LEC-8CDB7A95BC49 · meanmedian** : [OpenStax — Measures of the Center of the Data](https://openstax.org/books/introductory-statistics-2e/pages/2-5-measures-of-the-center-of-the-data).
- **LEC-DAAE11792655 · samplingmeans** : [OpenStax — Mean or Expected Value](https://openstax.org/books/introductory-statistics-2e/pages/4-2-mean-or-expected-value-and-standard-deviation).
- **LEC-FB0B988C368B · moonweight** : [NASA — Moon Facts](https://science.nasa.gov/moon/facts/).
- **LEC-8D76CA37764E · laserbeam** : [OpenStax — Lasers](https://openstax.org/books/university-physics-volume-3/pages/8-6-lasers).
- **LEC-0152D71DF33E · thermalcontact** : [OpenStax — Heat Transfer and Calorimetry](https://openstax.org/books/university-physics-volume-2/pages/1-4-heat-transfer-specific-heat-and-calorimetry).
- **LEC-A7AABE875D4A · fridgecycle** : [OpenStax — Refrigerators and Heat Pumps](https://openstax.org/books/university-physics-volume-2/pages/4-3-refrigerators-and-heat-pumps).
- **LEC-2B67D7914614 · hotspring** : [National Park Service — Monitoring Geothermal Systems](https://www.nps.gov/articles/geothermal-systems-and-monitoring-hydrothermal-features.htm).
- **LEC-E12CAA472289 · oceancirculation** : [NOAA — Thermohaline Circulation](https://oceanservice.noaa.gov/education/tutorial_currents/05conveyor1.html).
- **LEC-DEBC0D00C3F9 · gravitydam** : [Bureau of Reclamation — Glossary: arch and gravity dams](https://www.usbr.gov/library/glossary/).
- **LEC-373E3AC8FBD6 · memoryalloy** : [NASA Glenn — Shape Memory Alloys, p. 24](https://ntrs.nasa.gov/api/citations/20120016705/downloads/20120016705.pdf).
- **LEC-2B6531B276A3 · passivelayer** : [worldstainless — Corrosion properties](https://worldstainless.org/about-stainless/properties/corrosion-properties/).
- **LEC-D9CA5BC87357 · graphenelattice** : [Académie royale des sciences de Suède — Graphene, Nobel 2010](https://www.nobelprize.org/uploads/2018/06/popular-physicsprize2010-1.pdf).
- **LEC-8D3BB215585C · compositeply** : [NASA Spinoff — Composite Materials](https://spinoff.nasa.gov/node/9821).
- **LEC-9BC1AA9FE6E6 · healingcapsule** : [Al-Tabbaa et al. — Microcapsule-based self-healing concrete](https://www.repository.cam.ac.uk/items/9a2535a5-abd7-4fc7-a1cc-b8b098c863ce).

[source-http-checks.json](source-http-checks.json) conserve la vérification HTTP des liens. Les 28 autres liens répondent ; l’USGS refuse le client HTTP automatisé mais la page a été lue via le lecteur web, et le téléchargement direct du PDF NASA a dépassé le délai local de 18 s, alors que le lecteur web a fourni le document et sa page sur les alliages à mémoire de forme. Les vecteurs sont originaux, les figures des publications ne sont pas copiées.

## Conservation et limites de la recette

[before-render-hashes.json](before-render-hashes.json) fige les 215 dessins livrés au commit `acdf2bc945e6c6687cac95a48d0aadc16f92f44d`. Leurs trois vues restent identiques octet par octet ; les tests de conservation antérieurs et les 20 ateliers restent actifs. Les nouveaux composants renvoient `null` pour tous les identifiants précédents.

132 tests isolés sans base couvrent notamment ces sorties, les chemins uniques publiés, les bilans d’atomes, l’angle moléculaire, le graphe hexagonal, les propriétés locales des projections et les données statistiques. Aucun test local susceptible de réinitialiser une base n’est lancé. La route temporaire de recette est supprimée avant compilation.

Pas de test avec participants ni lecteur d’écran réel. Les commandes natives, descriptions et annonces existantes sont conservées. Les trois vues sont des états commentés, sans animation ni sauvegarde de progression.

Après recette et vérification des empreintes inchangées, seules les trente réservations de ce lot peuvent passer à READY avec ce rapport comme preuve. Le suivi des schémas éditoriaux reste distinct et inchangé. L’export backend est régénéré après clôture.

## Livraison technique

- Lint, typage, format, diff et 132 tests isolés sans base réussis.
- Corpus validé à blanc : 299 catégories, 12 486 articles dans les fichiers, sans import ni écriture. Ce total inclut des brouillons et ne définit pas le périmètre illustré.
- Build Next.js réussi sur la base de test explicite : 1 296 pages générées. La route de recette et les scripts de réservation temporaires ont été retirés.
- Empreintes des trente textes recontrôlées avant clôture en production. Les références, empreintes et preuves enregistrées sont dans [backend-receipts.json](backend-receipts.json). Aucun texte n’a été importé ni modifié.
- Export après clôture : **948 leçons publiées suivies**, 965 schémas éditoriaux dans 948 leçons validées, **283 associations de dessins READY**, **665 en attente de dessin spécifique**, zéro leçon sans visuel, zéro revue ou défaut en attente, zéro réservation active. Les fichiers de Claude sont conservés en dehors de ce lot.
