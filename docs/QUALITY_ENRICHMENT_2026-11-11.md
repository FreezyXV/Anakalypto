# Enrichissement des leçons — 2026-11-11

Branche `claude/enrichissement-lecons`. Corpus uniquement : aucune écriture en base ni déploiement.

## Bilan

| Indicateur                               | Avant | Après |
| ---------------------------------------- | ----- | ----- |
| Leçons publiées                          | 917   | 955   |
| Leçons avec 4 questions de quiz          | 392   | 955   |
| Leçons avec moins de 4 questions         | 525   | 0     |
| Leçons sourcées uniquement par Wikipédia | 304   | 162   |
| Longueur minimale (mots)                 | 261   | 320   |
| Longueur médiane (mots)                  | 399   | 421   |

## Ce qui a été fait

- **Quiz** : 937 questions ajoutées sur 525 leçons. Chaque question est tirée du texte de la leçon, sans recherche extérieure.
- **Réécriture** : 38 des 43 leçons dépubliées sont réécrites (500 à 700 mots, au moins 2 sources hors Wikipédia, 4 questions) et republiées.
- **Enrichissement** : les 38 leçons de moins de 320 mots sont étendues (sections ajoutées, sources et quiz complétés).
- **Sources** : 224 sources institutionnelles, scientifiques ou encyclopédiques ajoutées à 167 leçons.

## Limites à connaître

- Les sources ajoutées aux leçons existantes ont été choisies sur le titre et l'adresse des résultats de recherche (l'outil ne renvoyait pas d'extrait). Elles portent sur le sujet exact de la leçon, mais le texte des leçons n'a pas été confronté ligne à ligne à ces sources.
- Les leçons réécrites ou enrichies s'appuient sur des pages réellement consultées, sauf mention contraire dans les réserves ci-dessous.
- Sources écartées à l'assemblage : sites de marque ou marchands, médias spécialisés, supports de cours en ligne.

## Leçons réécrites non republiées (5)

Texte prêt mais une seule source recevable : elles restent en `planned` jusqu'à ajout d'une seconde source.

- Le système de refroidissement du moteur (`refroidissement-moteur-thermique`)
- Comment fonctionnent les capteurs ADAS (`capteurs-adas-radar-camera-lidar`)
- La voiture à hydrogène et la pile à combustible (`voiture-hydrogene-pile-combustible`)
- Pourquoi les SUV ont changé le marché automobile (`essor-suv-marche-automobile`)
- La réparation et le diagnostic électronique (`diagnostic-electronique-reparation-automobile`)

## Réserves signalées par leçon (42)

- `a-quoi-sert-le-telescope-spatial-roman-pour-chasser-les-exoplanetes` : Mécanisme de la microlentille expliqué de façon générale, sans chiffres, hors page consultée.
- `aerodynamique-automobile-trainee` : La loi en v² et le calcul 100 à 130 km/h sont de la physique de base, non tirés des sources.
- `augmentation-poids-voitures` : Le texte précédent citait sécurité et batteries comme causes ; les sources consultées montrent surtout un effet SUV. Chiffres bruxellois non extrapolables à la France.
- `bruit-routier-sante-et-pneus` : Étude danoise : année non connue, échantillon de quatre voitures ; dates des chiffres OFEV non précisées.
- `chauffage-climatisation-consommation-automobile` : Test AAA de 2019 sur modèles 2017-2018 : à nuancer pour les voitures récentes. Page ADEME inaccessible ; Bison Futé ne chiffre pas la climatisation.
- `chimies-batteries-lithium-ion-automobile` : Chiffres du Nickel Institute datés de 2020 ; projections de parts de marché 2030 non vérifiées dans des sources récentes.
- `comment-fabrique-t-on-un-panneau-solaire-en-silicium` : Page AIE non lisible : seul le titre a servi ; la description de l'assemblage du module vient de connaissances générales.
- `comment-les-journalistes-verifient-ils-une-information-avant-de-la-publier` : Page du Verification Handbook non consultée en texte intégral (accès limité) ; ajouts sans chiffres.
- `comment-les-pales-d-un-helicoptere-creent-la-portance` : Source FAA citée sans lecture du texte (téléchargement échoué) : explications qualitatives sur la dissymétrie de portance à revérifier.
- `comment-plato-va-t-il-chercher-des-planetes-comme-la-terre` : Date de lancement omise : la page DLR indique à la fois fin 2026 et mars 2027.
- `controle-technique-securite-pollution` : Le rapport donne 10,62 % et 10,88 % dans un ordre inversé entre résumé et tableau ; tableau retenu. Taux de défauts critiques : 1,27 % (bilan) contre 1,8 % (première évaluation).
- `cout-total-possession-voiture` : Aucun coût au km en euros n'est donné : la source consultée n'en fournit pas.
- `d-ou-vient-l-electricite-que-l-on-consomme-en-france` : Ancien texte : le solaire à 32,9 TWh n'est pas confirmé par la source RTE consultée, qui donne seulement +8,1 TWh.
- `degager-voies-respiratoires` : Le résumé actuel cite la position latérale de sécurité, absente du texte de la leçon.
- `distribution-variable-turbocompresseur` : Techniques de l'Ingénieur : extrait gratuit seulement, pas de gains chiffrés de la distribution variable. Rôle de l'échangeur : connaissance générale.
- `duree-vie-voiture-kilometrage-entretien` : Lien trajets courts et usure moteur : mécanisme général non chiffré, sans source dédiée.
- `eco-conduite-consommation-securite` : Chiffres Bison Futé issus d'une page non datée ; source ADEME citée via résultat de recherche, page non consultée.
- `ergonomie-fatigue-conduite` : Page ONISR non datée précisément (2019, rapport d'experts 2016). Conseils de réglage de siège issus de pratiques courantes, non d'une source consultée.
- `histoire-innovations-automobiles` : Démarreur électrique et catalyseur : retirés faute de source consultée. URL Britannica ABS et airbag lues directement, non issues d'une recherche. Explication du limiteur d'effort : connaissance générale.
- `huile-moteur-lubrification` : Britannica : seule la définition de la lubrification a été consultée. Le TCS ne donne aucun intervalle de vidange chiffré, donc aucun n'est cité.
- `la-fabrication-du-verre-procede-de-base` : Date de la canne à souffler omise : Britannica dit Ier siècle av. J.-C., la SCF vers 2000 av. J.-C. ; sources discordantes.
- `les-concepts-d-avion-a-hydrogene-d-airbus` : Objectif 2035 repoussé début 2025 selon la presse spécialisée ; résumé et puces retouchés en conséquence. Date de 2025 déduite de l'article, sans nouvelle date annoncée.
- `les-fosses-oceaniques-et-la-zone-hadale` : Superficie divergente : moitié de l'Australie (NOAA), comparable (WHOI). Pression de 1 086 bars issue de Futura, non listé.
- `les-records-de-1968-a-mexico-et-l-altitude` : Part de l'altitude non chiffrée par les sources ; records de 1968 sur 100 m, 200 m et autres omis, non vérifiés.
- `location-longue-duree-propriete-automobile` : Durée et apport de 10-15 % cités par Que Choisir pour la LOA, pas pour la LLD.
- `materiaux-automobile-acier-aluminium-composites` : Valeurs de masse et gains d'allègement issus d'un document de 2019 : à actualiser.
- `matieres-premieres-automobile-lithium-cobalt-nickel` : Part du premier raffineur de lithium et cobalt non chiffrée dans la source lue. Source EUR-Lex citée via recherche, non lue.
- `pourquoi-les-outre-mer-donnent-ils-a-la-france-un-territoire-si-disperse` : 10,9 millions de km² désigne le domaine maritime (ZEE et plateau continental étendu), pas la seule ZEE. Noms des territoires du Pacifique hors source.
- `pourquoi-un-bebe-a-t-il-plus-d-os-qu-un-adulte` : Aucune source ajoutée : les pages trouvées n'ont pas pu être consultées. Ajouts sans chiffres.
- `que-fait-le-foie-l-usine-chimique-du-corps` : Ancien texte : un fragment ne reconstitue pas un organe entier ; le foie retrouve surtout sa masse après une lésion. Formulation corrigée.
- `que-peuvent-faire-les-robots-sur-un-chantier-et-pourquoi-n-y-remplacent-ils-pas-les-ouvriers` : Sources existantes de type blogs commerciaux, peu fiables ; leurs affirmations n'étaient pas chiffrées.
- `que-rejette-un-avion-a-hydrogene-et-ou-loge-t-on-le-carburant` : Titre de la source reconstitué par description (page sans titre affiché).
- `rappels-automobiles-securite` : Procédure décrite d'après un document suisse ; équivalent européen non consulté.
- `recyclage-batteries-vehicules-electriques` : Taux issus de la position du Parlement (juin 2023), pas du texte final du règlement : à vérifier.
- `retrouver-l-heure-avec-le-soleil` : Les causes de l'équation du temps (axe incliné, orbite elliptique) viennent de connaissances générales, pas de la page consultée.
- `securite-pietons-cyclistes-automobile` : Données américaines de 1994-1998 (étude 2011) : ordre de grandeur seulement. Conversions mph vers km/h arrondies. Source Euro NCAP citée via recherche, non lue.
- `suspension-confort-tenue-de-route` : Aucun chiffre sourcé trouvé pour la suspension : leçon sans ordre de grandeur.
- `un-refrigerateur-fabrique-t-il-vraiment-du-froid` : Source unique hors Wikipédia : les pages ADEME consultées n'ont pas pu être lues.
- `vehicules-utilitaires-transport-marchandises` : Le parc de VUL date de 2018 ; l'autonomie citée (150 km) est celle des modèles de l'époque, aujourd'hui dépassée.
- `voiture-espace-urbain-stationnement` : Le document de 2019 donne de nombreux chiffres sans année de mesure ; ils sont cités comme ordres de grandeur.
- `voitures-connectees-cybersecurite` : Dates d'application de R155 et R156 non vérifiées dans les sources : omises.
- `zones-faibles-emissions-automobile` : Chiffres de janvier 2025 (Service-Public, page signalée ancienne) ; le cadre légal des ZFE est débattu et peut avoir changé.

## Reste à faire

1. Sourcer les 162 leçons qui ne citent encore que Wikipédia (détail dans `docs/QUALITY_BACKLOG.csv`).
2. Trouver une seconde source pour les 5 leçons réécrites non republiées.
3. Lever les réserves ci-dessus, en priorité celles qui portent sur un chiffre.
4. Arbitrer les 15 doublons porteurs d'un visuel (voir `docs/QUALITY_CLEANUP_2026-11-11.md`).
