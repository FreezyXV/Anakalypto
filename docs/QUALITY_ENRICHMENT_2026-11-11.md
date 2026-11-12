# Enrichissement des leçons — 2026-11-11 et 12

Branche `claude/enrichissement-lecons`. Aucune écriture en base ni déploiement.

## Bilan

| Indicateur                                       | Avant | Après |
| ------------------------------------------------ | ----- | ----- |
| Leçons publiées                                  | 917   | 948   |
| Leçons avec 4 questions de quiz                  | 392   | 948   |
| Leçons citant au moins une source hors Wikipédia | 613   | 896   |
| Leçons sourcées uniquement par Wikipédia         | 304   | 52    |
| Leçons avec 3 sources ou plus                    | 434   | 509   |
| Longueur minimale (mots)                         | 261   | 320   |
| Longueur médiane (mots)                          | 399   | 424   |

## Ce qui a été fait

- **Quiz** : 937 questions ajoutées sur 525 leçons, tirées du texte de chaque leçon. Toutes les leçons publiées ont 4 questions.
- **Réécriture** : les 43 leçons dépubliées sont réécrites (500 à 700 mots, au moins 2 sources hors Wikipédia, 4 questions) et republiées.
- **Enrichissement** : les 38 leçons de moins de 320 mots sont étendues.
- **Sources** : 366 sources institutionnelles, scientifiques ou encyclopédiques ajoutées à 277 leçons, plus 26 reportées depuis les doublons fusionnés.
- **Vérification** : les 42 leçons signalées par leurs rédacteurs ont été confrontées à leurs sources ; 25 corrigées, 17 confirmées.
- **Doublons porteurs d'un visuel** : 12 leçons fusionnées ; 3 visuels ou parcours re-pointés vers la leçon conservée, 9 entrées en double retirées de `src/lib/lesson-visuals`.

## Limites à connaître

- Pour les leçons existantes, les sources ajoutées ont été choisies sur le titre et l'adresse des résultats de recherche. Elles portent sur le sujet de la leçon, mais le texte n'a pas été confronté ligne à ligne à ces sources.
- Les leçons réécrites, enrichies ou vérifiées s'appuient sur des pages réellement ouvertes, sauf réserve ci-dessous.
- Sources écartées à l'assemblage : sites de marque ou marchands, médias, supports de cours en ligne hors universités.

## Doublons fusionnés (12)

| Leçon supprimée                                                     | Leçon conservée                                                        |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Produire de l'électricité avec un aimant                            | Comment une dynamo de vélo fabrique-t-elle de l'électricité ?          |
| Se repérer grâce aux étoiles                                        | L'étoile Polaire et l'orientation sans boussole                        |
| Les marées et l'effet de la Lune sur les océans                     | Comment la Lune fait-elle monter et descendre la mer ?                 |
| Pourquoi la mer monte-t-elle et descend-elle deux fois par jour ?   | Comment la Lune fait-elle monter et descendre la mer ?                 |
| Le levier, la poulie et la roue, la mécanique de base               | Le levier, la poulie et le plan incliné                                |
| Les ailettes au bout des ailes                                      | Les winglets, petits ailerons contre la traînée                        |
| Comment un arc en pierre tient-il debout grâce à son propre poids ? | L'arc et la voûte                                                      |
| Comment on met un objet en orbite                                   | Comment une fusée fait-elle pour rester en orbite autour de la Terre ? |
| Le turboréacteur à double flux, principe de fonctionnement          | Comment fonctionne un réacteur d'avion                                 |
| L'avion à hydrogène                                                 | Les concepts d'avion à hydrogène d'Airbus                              |
| Pourquoi une aile porte                                             | Pourquoi un avion vole, portance et écoulement de l'air                |
| Comment le contrôle aérien gère des milliers de vols                | Comment on range les avions dans le ciel                               |

Trois paires signalées dans le premier rapport sont conservées car leurs angles diffèrent : fibre optique (physique et réseaux d'accès), chimies de batteries automobiles, concepts d'avion à hydrogène d'Airbus.

## Réserves restantes après vérification (35)

- `comment-les-pales-d-un-helicoptere-creent-la-portance` : Texte FAA illisible ; autorotation et rotor à vitesse constante en stationnaire non revérifiés.
- `que-rejette-un-avion-a-hydrogene-et-ou-loge-t-on-le-carburant` : Emplacement des réservoirs dans l'avion et rejet d'hydrogène en aéroport non vérifiés sur les pages ouvertes.
- `les-concepts-d-avion-a-hydrogene-d-airbus` : Report de l'objectif 2035 évoqué par la presse, non confirmé par les pages consultées ; aucune nouvelle date.
- `suspension-confort-tenue-de-route` : Aucun ordre de grandeur chiffré sourcé sur la suspension.
- `chimies-batteries-lithium-ion-automobile` : Prévision de 15 à 40 % de LFP en 2030 datée de 2020, non confirmée par des sources récentes.
- `recyclage-batteries-vehicules-electriques` : Page lue via un résumé ; attribution des taux 2036 (26, 12, 15 %) à cobalt, lithium, nickel déduite de l'ordre.
- `voitures-connectees-cybersecurite` : Dates d'application de R155 et R156 non vérifiées, donc omises.
- `materiaux-automobile-acier-aluminium-composites` : Valeurs de masse et gains d'allègement datent de 2019 ; aucune source plus récente consultée.
- `augmentation-poids-voitures` : Lien chiffré masse-émissions et causes de sécurité ou d'équipement non confirmés ; chiffres bruxellois non extrapolables à la France.
- `bruit-routier-sante-et-pneus` : Étude danoise de 2015 sur quatre voitures seulement ; année de référence des chiffres suisses non précisée.
- `controle-technique-securite-pollution` : Le rapport inverse deux libellés entre résumé et tableau ; le tableau a été retenu.
- `histoire-innovations-automobiles` : Airbag (Britannica) non rouvert ; explication du limiteur d'effort issue de la connaissance générale.
- `distribution-variable-turbocompresseur` : Gains chiffrés de la distribution variable non vérifiables (article payant) ; la leçon n'en donne pas.
- `vehicules-utilitaires-transport-marchandises` : Parc et autonomie datent de 2018 ; les modèles récents ont une autonomie supérieure, non chiffrée ici.
- `rappels-automobiles-securite` : Équivalent européen de la procédure non consulté ; le texte se limite à la procédure suisse.
- `duree-vie-voiture-kilometrage-entretien` : Lien trajets courts et usure du moteur : mécanisme général, non chiffré, sans source dédiée.
- `eco-conduite-consommation-securite` : Page Bison Futé non datée ; page ADEME inaccessible, non consultée.
- `voiture-espace-urbain-stationnement` : Le document de 2019 ne précise pas l'année de mesure de ses chiffres.
- `chauffage-climatisation-consommation-automobile` : Test portant sur des modèles 2017-2018 ; chiffres non extrapolables aux voitures récentes. Pas de chiffre sur la climatisation thermique.
- `ergonomie-fatigue-conduite` : Conseils de réglage du siège issus de pratiques courantes, sans source consultée.
- `securite-pietons-cyclistes-automobile` : Données américaines de 1994-1998 : ordre de grandeur seulement, pas des valeurs pour les voitures actuelles.
- `zones-faibles-emissions-automobile` : Évolution du cadre légal des ZFE depuis janvier 2025 non vérifiée.
- `matieres-premieres-automobile-lithium-cobalt-nickel` : Parts du premier raffineur de lithium et de cobalt non chiffrées par l'AIE ; page EUR-Lex non relue.
- `location-longue-duree-propriete-automobile` : Chiffres de Que Choisir (2005) valables pour la LOA ; ceux de la LLD ne sont pas détaillés gratuitement.
- `comment-les-journalistes-verifient-ils-une-information-avant-de-la-publier` : Questions qui, quand, où et images satellites non confirmées par le Handbook ; médias français non revérifiés.
- `pourquoi-un-bebe-a-t-il-plus-d-os-qu-un-adulte` : Chiffres 300 et 206 os et fontanelles non retrouvés sur les pages ouvertes.
- `d-ou-vient-l-electricite-que-l-on-consomme-en-france` : Production solaire 2025 en TWh non confirmée ; chiffre retiré.
- `comment-plato-va-t-il-chercher-des-planetes-comme-la-terre` : Date exacte de lancement : l'ESA indique avril 2027, le DLR donne à la fois fin 2026 et mars 2027.
- `a-quoi-sert-le-telescope-spatial-roman-pour-chasser-les-exoplanetes` : Le mécanisme détaillé de la microlentille (durées, répétition) n'est pas décrit sur les pages NASA consultées.
- `pourquoi-les-outre-mer-donnent-ils-a-la-france-un-territoire-si-disperse` : Rang exact de la ZEE seule et rôle de Wallis-et-Futuna non vérifiés sur la page consultée.
- `la-fabrication-du-verre-procede-de-base` : Une source donne 2000 av. J.-C. pour la canne à souffler ; seule la date de Britannica est retenue.
- `comment-fabrique-t-on-un-panneau-solaire-en-silicium` : Parts chinoises par étape non lues chez l'AIE ; cadre aluminium, boîte de jonction, montage en série non confirmés.
- `les-fosses-oceaniques-et-la-zone-hadale` : Superficie divergente entre NOAA (moitié de l'Australie) et WHOI (taille de l'Australie) ; pression exacte non confirmée.
- `les-records-de-1968-a-mexico-et-l-altitude` : Part exacte de l'altitude et du vent non chiffrée ; vent relevé lors du saut non précisé par les sources.
- `que-peuvent-faire-les-robots-sur-un-chantier-et-pourquoi-n-y-remplacent-ils-pas-les-ouvriers` : Baromètre BuiltWorlds non vérifié ; les sources restent des articles commerciaux.

## Reste à faire

1. 52 leçons ne citent encore que Wikipédia : aucune source recevable trouvée en une recherche (détail dans `docs/QUALITY_BACKLOG.csv`).
2. Lever les réserves ci-dessus (pages payantes ou inaccessibles).
3. Relecture humaine par sondage et test utilisateur (`docs/USER_TEST_PROTOCOL.md`).
