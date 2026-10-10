# Audit éditorial ciblé — 10 octobre 2026

Quinze articles publiés ont été relus : les trois articles liés aux pilotes Découvrir, puis douze
articles dont le mécanisme forme une chaîne réelle ou une chaîne causale simplifiable, et qui
servent chacun de base à une nouvelle découverte.

Chaque fiche sépare trois niveaux :

- **Vérifié** : affirmation retrouvée dans une source consultée directement le 10 octobre 2026.
  Le lien mène à la page lue.
- **Interprétation** : choix de simplification ou de formulation fait par la rédaction, et non
  une citation de la source.
- **À vérifier** : affirmation présente dans l'article, plausible, mais qui ne repose aujourd'hui
  que sur Wikipédia ou sur une source non relue. Elle n'a pas été supprimée quand elle ne sert
  pas l'objectif ; elle est signalée.

Règles appliquées. Deux éditions de Wikipédia ne comptent pas comme deux confirmations. Une page
d'accueil institutionnelle n'est pas citée comme référence, sauf quand le chiffre utilisé y figure.
Une URL présente dans l'article ne vaut pas preuve de la phrase : chaque correction a été
confrontée au passage lu. Le champ `lastVerified` n'a été modifié pour aucun article : les
corrections portent sur des passages précis, pas sur une revérification complète de chaque
affirmation.

Corrections : slugs, chemins, statuts et références croisées sont conservés. Les ouvertures
`## En bref`, les fermetures `## À retenir` et les quiz en base 1 sont conservés. Toutes les
corrections passent `node --import tsx prisma/seed.ts --dry-run`.

## Synthèse

| #   | Article                               | Problème principal                                                                                   | Correction                           |
| --- | ------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 1   | Tension, courant et résistance        | Définition fausse de la tension ; circuit fermé absent                                               | Corrigé                              |
| 2   | Turbocompresseur                      | « Sans prendre de force au moteur » contredit la source ; distracteur de quiz présent dans l'article | Corrigé                              |
| 3   | Savon                                 | Date et peuple de l'histoire non étayés ; quiz anecdotique ; températures non sourcées               | Corrigé                              |
| 4   | Photosynthèse                         | Conforme                                                                                             | Sources primaires ajoutées           |
| 5   | Cyclone tropical                      | Seuils de profondeur et de latitude plus précis que les sources                                      | Corrigé                              |
| 6   | Levain                                | « Plus de 50 espèces » laissait croire à un seul levain                                              | Corrigé                              |
| 7   | Recyclage du verre                    | Taux français non vérifiable directement                                                             | Remplacé par le taux européen sourcé |
| 8   | Électricité de la centrale à la prise | « Les générateurs tournent à la même fréquence » ; aucun ordre de grandeur français                  | Corrigé, chiffres ajoutés            |
| 9   | Wi-Fi                                 | Conforme sur le mécanisme ; historique non revérifié                                                 | Source réglementaire ajoutée         |
| 10  | Pilote automatique                    | Conforme                                                                                             | Source FAA ajoutée                   |
| 11  | Papier                                | Faute dans une question du quiz                                                                      | Corrigé, chiffre de sortie ajouté    |
| 12  | Formation d'un sol                    | Estimation unique tirée de Wikipédia                                                                 | Ordre de grandeur FAO ajouté         |
| 13  | Fresque                               | Conforme                                                                                             | Source muséale ajoutée               |
| 14  | Téléphone fixe                        | « Impulsions électriques » inexact                                                                   | Corrigé d'après le brevet de 1876    |
| 15  | Moteur à quatre temps                 | Conforme                                                                                             | Source NASA ajoutée                  |

---

## 1. Tension, courant et résistance

Fichier : [`content/domaine-sciences-fondamentales.md`](../content/domaine-sciences-fondamentales.md) (bloc `tension-courant-resistance`, ligne 3004). Pilote : `allumer-une-lampe`.

- **Objectif** : distinguer tension, courant et résistance, et comprendre qu'un courant ne circule
  que dans un circuit fermé.
- **Prérequis** : notion de pile et d'ampoule ; l'idée qu'un fil conduit.
- **Sources d'origine** : SparkFun (tutoriel de vulgarisation) et Britannica. Correctes pour la loi
  d'Ohm, mais aucune ne traitait le circuit fermé que le pilote enseigne.
- **Vérifié** :
  - la tension est une différence de potentiel, pas une « différence de charge » ([OpenStax, College Physics 2e, 20.2](https://openstax.org/books/college-physics-2e/pages/20-2-ohms-law-resistance-and-simple-circuits)) ;
  - I = V/R et 1 Ω = 1 V/A (même page) ;
  - un circuit exige un chemin fermé d'une borne à l'autre, et le sens conventionnel du courant va
    de la borne + à la borne − ([OpenStax, University Physics 2, 9.1](https://openstax.org/books/university-physics-volume-2/pages/9-1-electrical-current)).
- **Problèmes relevés** : la définition « différence de charge électrique » était fausse dans le
  corps et dans la bonne réponse du quiz. Le circuit fermé, objet du pilote, n'apparaissait nulle
  part. La tension était présentée comme une « force », ce qui est une image et non une définition.
- **Corrections** : définition de la tension réécrite (corps, quiz, À retenir) ; nouvelle section
  « Un chemin fermé » ; point d'À retenir sur le circuit fermé à la place de l'analogie hydraulique,
  qui reste dans le corps. Deux sources OpenStax ajoutées.
- **Interprétation** : « crée un champ électrique dans les fils » suit OpenStax ; l'analogie des
  tuyaux reste présentée comme une image.
- **À vérifier** : la date de 1827 pour la loi d'Ohm (OpenStax ne donne que les dates de vie
  d'Ohm, 1787–1854) ; Britannica n'a pas pu être relue (accès refusé aux robots).
- **Distracteurs** : corrects et plausibles.
- **Potentiel visuel** : élevé ; déjà exploité par le pilote `circuit`.

## 2. Comment un turbocompresseur rend-il un moteur plus puissant ?

Fichier : [`content/domaine-automobile.md`](../content/domaine-automobile.md) (ligne 15879). Pilote : `le-turbo`.

- **Objectif** : comprendre que les gaz d'échappement entraînent une turbine reliée au compresseur,
  qui fait entrer plus d'air dans le moteur.
- **Prérequis** : un moteur brûle un mélange d'air et de carburant.
- **Vérifié** ([Garrett Motion, How a turbo works — Basic](https://www.garrettmotion.com/knowledge-center-category/oem/basic/)) :
  - la turbine récupère l'énergie des gaz pour entraîner le compresseur ;
  - un air plus dense permet plus de carburant, donc plus de puissance ;
  - l'intercooler refroidit l'air comprimé pour augmenter sa densité ;
  - la vanne de décharge contourne la turbine pour limiter la pression ;
  - la turbine crée une contre-pression à l'échappement.
- **Problèmes relevés** :
  - « sans prendre de force au moteur » contredit la contre-pression décrite par Garrett ;
  - « jusqu'à 250 000 tours par minute » ne figure dans aucune source relue ;
  - la question 4 portait sur une date, et l'un de ses distracteurs, 1962, est aussi une date
    citée dans l'article : un enfant attentif pouvait hésiter pour une mauvaise raison.
- **Corrections** : formulation de la récupération d'énergie nuancée, contre-pression mentionnée,
  vitesse chiffrée retirée, question 4 remplacée par une question sur la vanne de décharge. Source
  Garrett ajoutée.
- **À vérifier** : brevet d'Alfred Büchi de novembre 1905 et premières voitures turbo de série de
  1962 (Wikipédia seulement) ; le lag n'est pas décrit par la page Garrett relue.
- **Potentiel visuel** : élevé ; pilote `turbo` existant.

## 3. Comment fabrique-t-on du savon avec de l'huile ?

Fichier : [`content/domaine-sciences-fondamentales.md`](../content/domaine-sciences-fondamentales.md) (ligne 7740). Pilote : `savon-et-graisse`.

- **Objectif** : comprendre la saponification et le rôle des deux bouts de la molécule de savon.
- **Prérequis** : l'huile et l'eau ne se mélangent pas.
- **Vérifié** ([OpenStax, Organic Chemistry, 27.2 Soap](https://openstax.org/books/organic-chemistry/pages/27-2-soap)) :
  - le savon est un mélange de sels de sodium ou de potassium d'acides gras ;
  - la réaction d'une graisse avec la soude donne du savon et du glycérol ;
  - la tête ionique est hydrophile, la queue est hydrophobe ;
  - les micelles enferment la graisse, têtes tournées vers l'eau ;
  - à Babylone, vers 2800 avant notre ère, on faisait bouillir des graisses avec des cendres ;
  - des papyrus médicaux égyptiens d'environ 1550 avant notre ère décrivent un savon.
- **Problèmes relevés** :
  - « Les Sumériens… tablettes d'environ 2 500 ans avant notre ère » n'est confirmé par aucune
    source relue ; la référence primaire consultée parle de Babylone vers 2800 ;
  - les températures « 80 à 100 °C, plusieurs jours » et « 40 à 50 °C » n'ont pas de source ;
  - la question 4 portait sur un peuple et une date, avec des distracteurs absurdes (Vikings,
    Aztèques).
- **Corrections** : paragraphe historique réécrit d'après OpenStax ; températures retirées ;
  question 4 remplacée par une question sur les micelles, avec des distracteurs qui reprennent
  des idées fausses courantes (la graisse « détruite » ou « brûlée ») ; un point d'À retenir
  remplacé. Source OpenStax ajoutée.
- **À vérifier** : la date de 1823 pour Michel-Eugène Chevreul ; savons de Marseille et d'Alep
  fabriqués en chaudron.
- **Potentiel visuel** : élevé ; pilote `soap` existant.

## 4. Comment une feuille fabrique-t-elle du sucre avec de la lumière ?

Fichier : [`content/domaine-sciences-fondamentales.md`](../content/domaine-sciences-fondamentales.md) (ligne 5409). Découverte : `feuille-et-lumiere`.

- **Objectif** : comprendre que la lumière fournit l'énergie qui casse l'eau, libère l'oxygène et
  permet la fabrication du sucre.
- **Prérequis** : une plante a besoin d'eau, d'air et de lumière.
- **Vérifié** ([OpenStax, Concepts of Biology 5.2](https://openstax.org/books/concepts-biology/pages/5-2-the-light-dependent-reactions-of-photosynthesis) et [5.3](https://openstax.org/books/concepts-biology/pages/5-3-the-calvin-cycle)) :
  - les réactions lumineuses ont lieu dans les thylakoïdes ;
  - l'eau est cassée et l'oxygène libéré ;
  - ATP et NADPH sont produits ;
  - la chlorophylle a absorbe le bleu et le rouge et réfléchit le vert ;
  - le cycle de Calvin a lieu dans le stroma, avec la RuBisCO ;
  - l'équation globale est 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂.
- **Problèmes relevés** : aucun sur le fond. Les sources étaient uniquement encyclopédiques.
- **Corrections** : deux sources OpenStax ajoutées.
- **Interprétation** : « piles chargées » pour ATP et NADPH est une image de vulgarisation.
- **À vérifier** : l'entrée du CO₂ par les stomates et le stockage en amidon ne figurent pas dans
  les deux pages relues (faits classiques).
- **Distracteurs** : la confusion entre l'oxygène issu de l'eau et celui issu du CO₂ est bien ciblée.

## 5. Comment un cyclone tropical naît-il au-dessus d'une mer chaude ?

Fichier : [`content/domaine-geographie.md`](../content/domaine-geographie.md) (ligne 4382). Découverte : `naissance-d-un-cyclone`.

- **Objectif** : comprendre que l'énergie du cyclone vient de la chaleur libérée par la
  condensation de la vapeur d'une mer chaude.
- **Vérifié** :
  - mer d'au moins 80 °F, environ 27 °C ([NOAA, Hurricanes](https://www.noaa.gov/education/resource-collections/weather-atmosphere/hurricanes)) ;
  - eau chaude sur environ 150 pieds, soit environ 46 m ([NOAA AOML, FAQ](https://www.aoml.noaa.gov/hrd-faq/)) ;
  - la chaleur latente de condensation est la source d'énergie (AOML) ;
  - le cyclone se forme à plusieurs centaines de milles de l'équateur, à cause de la force de
    Coriolis (NOAA, AOML) ;
  - l'œil est un ciel calme de 5 à 120 milles de diamètre ; le mur de l'œil porte les vents les
    plus forts (AOML) ;
  - seuil de l'ouragan : 74 mph (NOAA), soit 119 km/h ;
  - le cyclone faiblit à terre, coupé de l'air chaud et humide de la mer (AOML).
- **Problèmes relevés** :
  - « au moins 60 mètres » (Wikipédia) est plus précis et plus profond que la source primaire ;
  - « rarement à moins de 10 degrés » ne figure dans aucune source primaire relue.
- **Corrections** : profondeur ramenée à « une cinquantaine de mètres », latitude formulée en
  « plusieurs centaines de kilomètres » ; explication du quiz ajustée ; deux sources NOAA ajoutées.
- **Interprétation** : 26,5 °C (Wikipédia, Météo-France) et 27 °C (NOAA) sont présentés comme le
  même ordre de grandeur.
- **À vérifier** : « 15 à 20 °C de plus » au cœur de la tempête (Wikipédia seulement) ; échelle de
  Saffir-Simpson.

## 6. Comment le levain fait-il gonfler la pâte à pain ?

Fichier : [`content/domaine-alimentation.md`](../content/domaine-alimentation.md) (ligne 15467). Découverte : `le-pain-qui-gonfle`.

- **Objectif** : comprendre que les levures produisent le gaz et les bactéries les acides.
- **Vérifié** ([Espace des sciences, Sciences Ouest n° 338](https://www.espace-sciences.org/sciences-ouest/338/dossier/le-monde-des-pains-au-levain), dossier appuyé sur les travaux de l'Inra) :
  - le levain contient des bactéries et des levures ;
  - les bactéries y sont dix à cent fois plus nombreuses que les levures ;
  - les bactéries font les fermentations lactique et acétique ;
  - les levures font la fermentation alcoolique, avec dégagement de CO₂ ;
  - Lactobacillus sanfranciscensis est présente dans la majorité des levains français.
- **Problèmes relevés** : « Les scientifiques y ont compté plus de 50 espèces de lactobacilles et
  une vingtaine d'espèces de levures » additionnait les espèces trouvées dans l'ensemble des
  levains étudiés, comme si un seul bocal les contenait toutes.
- **Corrections** : phrase remplacée par les deux faits sourcés ci-dessus ; source ajoutée.
- **À vérifier** : rôle du gluten ; pain au levain de 3700 avant notre ère trouvé en Suisse
  (Wikipédia en anglais seulement).

## 7. Comment une bouteille en verre usagée redevient-elle une bouteille neuve ?

Fichier : [`content/domaine-environnement.md`](../content/domaine-environnement.md) (ligne 6283). Découverte : `la-bouteille-qui-revient`.

- **Objectif** : comprendre que le verre d'emballage se refond en verre neuf, à condition d'en
  retirer les intrus.
- **Vérifié** :
  - les contaminants (céramiques, pierres, métaux) causent des inclusions, des perturbations de
    fusion et usent les fours ([TNO, Beerkens et al., 2011](https://repository.tno.nl/islandora/object/uuid:e2aab36a-2fa0-4cff-b085-f34d992aed79)) ;
  - passer de 65 à 75 % de calcin fait baisser la consommation de 3,95 à 3,8 MJ/kg (même étude) ;
  - en 2024, 82,2 % des emballages en verre de l'Union européenne ont été collectés pour le
    recyclage ([Close the Glass Loop](https://closetheglassloop.eu/)).
- **Problèmes relevés** : « En 2024, la France a recyclé 87 % » provenait de Wikipédia en anglais.
  La source primaire française (Citeo) n'était pas joignable, et une autre source citant Citeo
  donne 86 % pour 2023.
- **Corrections** : chiffre remplacé par le taux européen sourcé et l'objectif de 90 % en 2030
  (corps et À retenir) ; source ajoutée.
- **Interprétation** : l'article garde « 2 à 3 % d'énergie en moins par 10 % de calcin » ;
  l'étude TNO mesure environ 3,8 % sur un four efficace. Le même ordre de grandeur est conservé.
- **À vérifier** : taux français de recyclage du verre auprès de Citeo ; « 315 kg de CO₂ évités
  par tonne » et « vers 1 500 °C » (sources secondaires).

## 8. Comment l'électricité voyage-t-elle de la centrale jusqu'à votre prise ?

Fichier : [`content/domaine-energie.md`](../content/domaine-energie.md) (ligne 9265). Découverte : `le-voyage-de-l-electricite`.

- **Objectif** : comprendre que la tension est élevée pour le transport puis abaissée par étapes.
- **Vérifié** :
  - une tension élevée rend le transport à longue distance plus efficace ; les transformateurs
    élèvent puis abaissent la tension ([EIA](https://www.eia.gov/energyexplained/electricity/delivery-to-consumers.php)) ;
  - réseau de transport de 63 000 à 400 000 volts, 100 000 km de lignes dont un quart à
    400 000 volts ([Sénat, rapport 2008-2009](https://www.senat.fr/rap/r08-307/r08-3071.html), chiffre daté de 2009) ;
  - distribution HTA de 15 à 30 kV, puis BT de 230 ou 400 V ([Connaissance des Énergies](https://www.connaissancedesenergies.org/fiche-pedagogique/enedis-gestionnaire-du-reseau-de-distribution-delectricite-en-france)).
- **Problèmes relevés** : « Tous les générateurs tournent à la même fréquence » confond la vitesse
  de rotation d'un alternateur, qui dépend de sa construction, avec la fréquence du courant
  produit. L'article n'avait aucun ordre de grandeur français.
- **Corrections** : formulation corrigée (« produisent un courant à la même fréquence ») ;
  paragraphe sur les tensions françaises ajouté, avec la date du chiffre de longueur ; deux
  sources ajoutées.
- **À vérifier** : la règle N-1 ; une longueur de réseau plus récente auprès de RTE (une page RTE
  consultée renvoyait une erreur 404).

## 9. Comment le Wi-Fi fait-il voyager des données à travers l'air ?

Fichier : [`content/domaine-informatique.md`](../content/domaine-informatique.md) (ligne 8199). Découverte : `les-donnees-dans-l-air`.

- **Objectif** : comprendre que le Wi-Fi transporte les données dans des ondes radio.
- **Vérifié** :
  - en France, le Wi-Fi est autorisé dans les bandes 5150-5350 et 5470-5725 MHz
    ([Arcep, décision 2022-1960](https://www.arcep.fr/uploads/tx_gsavis/22-1960.pdf)) ;
  - le Wi-Fi repose sur la norme IEEE 802.11, et le signal faiblit avec la distance
    ([Cisco, What is Wi-Fi](https://www.cisco.com/c/en/us/products/wireless/what-is-wifi.html)).
- **Problèmes relevés** : aucun sur le mécanisme.
- **Corrections** : source réglementaire ajoutée.
- **À vérifier** : dates des versions 802.11 (1997, 1999, 2003), record de 382 km en 2011,
  création de la Wi-Fi Alliance en 1999 (Wikipédia seulement). Les débits du Wi-Fi 6 étaient
  déjà formulés prudemment (« plusieurs gigabits »).

## 10. Comment le pilote automatique tient-il un avion sur sa route ?

Fichier : [`content/domaine-aeronautique.md`](../content/domaine-aeronautique.md) (ligne 8976). Découverte : `le-pilote-qui-corrige`.

- **Objectif** : comprendre la boucle mesurer, comparer, corriger, et le rôle des pilotes.
- **Vérifié** ([FAA, Advanced Avionics Handbook, chapitre 4](https://www.faasafety.gov/files/events/EA/EA03/2019/EA0392003/aah_ch04.pdf)) :
  - le directeur de vol calcule à partir des données air, du cap et de la navigation ;
  - des servomoteurs, « muscles » du système, actionnent les gouvernes ;
  - le pilote fixe les objectifs (cap, altitude, vitesse) et doit être prêt à reprendre la main.
- **Corrections** : source FAA ajoutée ; aucun passage à corriger.
- **À vérifier** : Sperry vers 1912 et 1914, traversée du C-54 en 1947, décollage automatique
  d'Airbus en 2019 (Wikipédia seulement).

## 11. Comment le bois devient-il une feuille de papier ?

Fichier : [`content/domaine-industries.md`](../content/domaine-industries.md) (ligne 11180). Découverte : `de-la-pate-a-la-feuille`.

- **Objectif** : comprendre que la feuille se forme quand on retire l'eau d'une suspension de
  fibres.
- **Vérifié** ([Techniques de l'Ingénieur, Paper processes, résumé public](https://techniques-ingenieur.fr/en/resources/article/ti452/paper-processes-j6902/v1)) :
  - formation et égouttage, d'abord par gravité puis sous vide ;
  - pressage, puis séchage thermique ;
  - en sortie de machine, la feuille contient 4 à 9 % d'humidité et part en bobine.
- **Problèmes relevés** : faute dans la question 4 (« Qui est attribuée… ») ; aucune source
  primaire.
- **Corrections** : question réécrite (« À qui attribue-t-on… ») ; phrase sur l'humidité en sortie
  ajoutée ; source ajoutée.
- **À vérifier** : le procédé kraft, le blanchiment sans chlore et Cai Lun (Wikipédia seulement).
- **Distracteurs** : la question sur Cai Lun propose Gutenberg et Léonard de Vinci, faciles à
  éliminer. Elle n'a pas été modifiée faute de source primaire sur l'histoire ; à revoir.

## 12. Comment une roche se transforme-t-elle peu à peu en sol ?

Fichier : [`content/domaine-sciences-du-vivant.md`](../content/domaine-sciences-du-vivant.md) (ligne 4016). Découverte : `naissance-d-un-sol`.

- **Objectif** : comprendre qu'un sol naît lentement de l'altération d'une roche, avec les êtres
  vivants.
- **Vérifié** :
  - le sol résulte de l'action du climat, du relief et des organismes sur la roche-mère, au fil du
    temps ([FAO, Soils portal](https://www.fao.org/soils-portal/about/all-definitions/en/)) ;
  - la FAO estime qu'il faut environ mille ans pour quelques centimètres de sol fertile
    ([ONU Info, 2022](https://news.un.org/en/story/2022/07/1123462)).
- **Problèmes relevés** : la seule durée chiffrée (0,017 à 0,036 mm par an) venait de Wikipédia.
- **Corrections** : ordre de grandeur de la FAO ajouté, à côté de l'estimation existante, qui reste
  cohérente ; deux sources ajoutées.
- **À vérifier** : exemple du feldspath transformé en argile ; Dokoutchaïev au XIXᵉ siècle (les
  cinq facteurs sont confirmés par la FAO, pas l'attribution).

## 13. Comment une fresque reste-t-elle accrochée au mur pendant des siècles ?

Fichier : [`content/domaine-arts.md`](../content/domaine-arts.md) (ligne 6715). Découverte : `la-couleur-dans-le-mur`.

- **Objectif** : comprendre que la chaux, en séchant, emprisonne les pigments.
- **Vérifié** :
  - la fresque est peinte à l'eau sur un enduit humide, et la peinture devient partie intégrante de
    l'enduit ([Tate, Fresco](https://www.tate.org.uk/art/art-terms/f/fresco)) ;
  - la chaux éteinte réagit avec le CO₂ de l'air et redevient du carbonate de calcium
    ([ASBP Lime Group, Building with Lime, juillet 2026](https://asbp.org.uk/wp-content/uploads/2026/07/ASBP-Lime-Group-Briefing-Paper-Building-with-Lime.pdf)).
- **Corrections** : source Tate ajoutée à l'article. La source ASBP n'est citée que dans la
  découverte.
- **À vérifier** : la taille d'une giornata (1 à 4 m²), la Crète vers 1700 avant notre ère, les
  dates de la chapelle Sixtine (Wikipédia seulement).

## 14. Comment le téléphone fixe transportait-il la voix par un fil ?

Fichier : [`content/domaine-communication.md`](../content/domaine-communication.md) (ligne 10946). Découverte : `la-voix-dans-le-fil`.

- **Objectif** : comprendre que la voix devient un courant qui varie comme elle, puis redevient
  un son.
- **Vérifié** ([brevet US 174 465 d'A. G. Bell, via Google Patents](https://patents.google.com/patent/US174465A/en)) :
  - demande déposée le 14 février 1876, brevet publié le 7 mars 1876 ;
  - Bell décrit des « ondulations électriques semblables aux vibrations de l'air » produites par
    la voix ;
  - le courant ondulatoire fait reproduire le son au récepteur.
- **Problèmes relevés** : « impulsions électriques » (corps, quiz, À retenir) décrit plutôt le
  télégraphe ; le téléphone transmet un courant qui varie de façon continue.
- **Corrections** : formulation remplacée à quatre endroits ; brevet ajouté aux sources.
- **À vérifier** : Strowger vers 1891, central de Nice en 1913, Paris en 1928, un abonné pour
  183 habitants en 1912, la loi de 2002 sur Meucci (Wikipédia seulement).
- **Distracteurs** : la question sur Strowger reprend une anecdote, à garder pour l'article
  mais pas pour la découverte.

## 15. Comment un moteur à quatre temps transforme-t-il l'essence en mouvement ?

Fichier : [`content/domaine-automobile.md`](../content/domaine-automobile.md) (ligne 7443). Découverte : `les-quatre-temps`.

- **Objectif** : comprendre que seul le temps de combustion-détente pousse le piston.
- **Vérifié** ([NASA Glenn, Four Stroke Internal Combustion Engine](https://www.grc.nasa.gov/www/k-12/airplane/engopt.html)) :
  - admission, compression avec soupapes fermées, combustion qui pousse le piston, échappement ;
  - la bielle et le vilebrequin transforment le mouvement linéaire en rotation ;
  - les gaz chauds fournissent du travail pendant le temps moteur ;
  - le vilebrequin fait deux tours par tour d'arbre à cames, donc deux tours par cycle.
- **Corrections** : source NASA ajoutée ; aucun passage à corriger.
- **À vérifier** : Beau de Rochas en 1862, Otto en 1876, auto-allumage du diesel (Wikipédia
  seulement ; la page NASA décrit le moteur des frères Wright).

---

## Points transverses

- Les fiches publiées le 9 octobre reposent souvent sur deux éditions de Wikipédia. L'ajout d'au
  moins une source primaire par article est la priorité de la prochaine relecture.
- Les questions de quiz sur des dates sont les plus fragiles : distracteurs absurdes ou présents
  ailleurs dans l'article. Préférer des questions de mécanisme.
- Plusieurs pages institutionnelles refusent la lecture automatique (Britannica, Smithsonian,
  Légifrance, CAMEO du MFA Boston). Elles n'ont pas été citées comme « vérifiées ».
