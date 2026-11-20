import type { LessonDiagramSpec } from "./registry";
export const HORIZONS50_DIAGRAMS = [
  {
    id: "cellhandoff",
    canvasHeight: 230,
    title: "Un appel, plusieurs cellules",
    paths: [
      "/communication-et-medias/telecommunications/reseaux-mobiles/comment-les-antennes-relais-permettent-elles-de-telephoner-en-se-deplacant",
    ],
    steps: [
      {
        label: "Une cellule",
        caption: "Le téléphone échange avec une station de base reliée au réseau de l’opérateur.",
        detail:
          "Le téléphone échange avec une station de base reliée au réseau de l’opérateur. Cellules stylisées, pas des frontières réelles. Le choix dépend des mesures radio et de la charge, pas seulement de la distance.",
      },
      {
        label: "Se déplacer",
        caption:
          "Dans la zone de recouvrement, le réseau prépare le transfert vers une autre station.",
        detail:
          "Dans la zone de recouvrement, le réseau prépare le transfert vers une autre station. Cellules stylisées, pas des frontières réelles. Le choix dépend des mesures radio et de la charge, pas seulement de la distance.",
      },
      {
        label: "Passer le relais",
        caption:
          "La nouvelle station prend en charge la liaison ; les deux stations restent reliées au réseau.",
        detail:
          "La nouvelle station prend en charge la liaison ; les deux stations restent reliées au réseau. Cellules stylisées, pas des frontières réelles. Le choix dépend des mesures radio et de la charge, pas seulement de la distance.",
      },
    ],
    limit:
      "Cellules stylisées, pas des frontières réelles. Le choix dépend des mesures radio et de la charge, pas seulement de la distance.",
    source: {
      title: "OFEV — Fonctionnement de la téléphonie mobile",
      url: "https://www.bafu.admin.ch/fr/telephonie-mobile-comment-cela-fonctionne-t-il",
    },
  },
  {
    id: "radiospectrum",
    canvasHeight: 230,
    title: "Partager le spectre",
    paths: [
      "/communication-et-medias/telecommunications/reseaux-mobiles/spectre-radioelectrique-et-attribution-des-frequences",
    ],
    steps: [
      {
        label: "Une fréquence",
        caption:
          "Une fréquence indique le nombre d’oscillations par seconde ; une émission occupe une bande.",
        detail:
          "Une fréquence indique le nombre d’oscillations par seconde ; une émission occupe une bande. Bandes fictives et non proportionnelles. Une fréquence élevée ne garantit pas à elle seule un débit élevé.",
      },
      {
        label: "Des bandes",
        caption:
          "Deux services peuvent occuper des bandes distinctes afin de limiter les interférences.",
        detail:
          "Deux services peuvent occuper des bandes distinctes afin de limiter les interférences. Bandes fictives et non proportionnelles. Une fréquence élevée ne garantit pas à elle seule un débit élevé.",
      },
      {
        label: "Des règles",
        caption:
          "Des autorisations et des règles techniques organisent le partage du spectre entre usages.",
        detail:
          "Des autorisations et des règles techniques organisent le partage du spectre entre usages. Bandes fictives et non proportionnelles. Une fréquence élevée ne garantit pas à elle seule un débit élevé.",
      },
    ],
    limit:
      "Bandes fictives et non proportionnelles. Une fréquence élevée ne garantit pas à elle seule un débit élevé.",
    source: {
      title: "UIT — Secteur des radiocommunications",
      url: "https://www.itu.int/en/ITU-R/Pages/default.aspx",
    },
  },
  {
    id: "satrelay",
    canvasHeight: 230,
    title: "Un relais au-dessus de la Terre",
    paths: [
      "/communication-et-medias/telecommunications/satellites/comment-un-satellite-de-telecommunication-relaie-t-il-la-television-d-un-continent-a-l-autre",
    ],
    steps: [
      {
        label: "Monter",
        caption:
          "Une station terrienne dirige un signal radio vers le satellite de télécommunication.",
        detail:
          "Une station terrienne dirige un signal radio vers le satellite de télécommunication. Trajets et couverture schématiques ; échelles et fréquences non représentées. Tous les satellites ne sont pas géostationnaires.",
      },
      {
        label: "Relayer",
        caption:
          "Le satellite traite et amplifie le signal reçu avant de le réémettre vers la Terre.",
        detail:
          "Le satellite traite et amplifie le signal reçu avant de le réémettre vers la Terre. Trajets et couverture schématiques ; échelles et fréquences non représentées. Tous les satellites ne sont pas géostationnaires.",
      },
      {
        label: "Diffuser",
        caption:
          "Plusieurs antennes situées dans la zone couverte peuvent recevoir la même émission.",
        detail:
          "Plusieurs antennes situées dans la zone couverte peuvent recevoir la même émission. Trajets et couverture schématiques ; échelles et fréquences non représentées. Tous les satellites ne sont pas géostationnaires.",
      },
    ],
    limit:
      "Trajets et couverture schématiques ; échelles et fréquences non représentées. Tous les satellites ne sont pas géostationnaires.",
    source: {
      title: "ESA — Charge utile de télécommunication",
      url: "https://www.esa.int/Applications/Connectivity_and_Secure_Communications/Hylas/Generic_Flexible_Payload_technology",
    },
  },
  {
    id: "leoconstellation",
    canvasHeight: 230,
    title: "Se relayer en orbite basse",
    paths: [
      "/communication-et-medias/telecommunications/satellites/constellations-satellites-orbite-basse",
    ],
    steps: [
      {
        label: "Un passage",
        caption: "Un satellite en orbite basse se déplace par rapport à une antenne située au sol.",
        detail:
          "Un satellite en orbite basse se déplace par rapport à une antenne située au sol. Quelques satellites symbolisent une constellation. Orbites, inclinaisons et tailles non à l’échelle ; aucune promesse de couverture universelle.",
      },
      {
        label: "Une couverture",
        caption:
          "Chaque satellite ne dessert qu’une partie de la surface terrestre à un instant donné.",
        detail:
          "Chaque satellite ne dessert qu’une partie de la surface terrestre à un instant donné. Quelques satellites symbolisent une constellation. Orbites, inclinaisons et tailles non à l’échelle ; aucune promesse de couverture universelle.",
      },
      {
        label: "Une constellation",
        caption:
          "Plusieurs satellites se succèdent pour maintenir la couverture ; le réseau organise les transferts.",
        detail:
          "Plusieurs satellites se succèdent pour maintenir la couverture ; le réseau organise les transferts. Quelques satellites symbolisent une constellation. Orbites, inclinaisons et tailles non à l’échelle ; aucune promesse de couverture universelle.",
      },
    ],
    limit:
      "Quelques satellites symbolisent une constellation. Orbites, inclinaisons et tailles non à l’échelle ; aucune promesse de couverture universelle.",
    source: {
      title: "UIT — Systèmes de satellites non géostationnaires",
      url: "https://www.itu.int/en/mediacentre/backgrounders/Pages/Non-geostationary-satellite-systems.aspx",
    },
  },
  {
    id: "subseacable",
    canvasHeight: 230,
    title: "La lumière sous l’océan",
    paths: [
      "/micro-informatique-et-informatique/reseaux-et-securite/internet/comment-internet-traverse-t-il-les-oceans",
    ],
    steps: [
      {
        label: "Relier",
        caption: "Deux stations côtières sont reliées par un câble posé sur le fond marin.",
        detail:
          "Deux stations côtières sont reliées par un câble posé sur le fond marin. Coupe très exagérée et trajet fictif. Les signaux et les répéteurs ne sont pas dessinés à leurs dimensions réelles.",
      },
      {
        label: "Transmettre",
        caption:
          "Des signaux lumineux codent les données dans les fibres optiques protégées par le câble.",
        detail:
          "Des signaux lumineux codent les données dans les fibres optiques protégées par le câble. Coupe très exagérée et trajet fictif. Les signaux et les répéteurs ne sont pas dessinés à leurs dimensions réelles.",
      },
      {
        label: "Amplifier",
        caption:
          "Des répéteurs répartis sur la liaison amplifient le signal ; ils reçoivent aussi une alimentation électrique.",
        detail:
          "Des répéteurs répartis sur la liaison amplifient le signal ; ils reçoivent aussi une alimentation électrique. Coupe très exagérée et trajet fictif. Les signaux et les répéteurs ne sont pas dessinés à leurs dimensions réelles.",
      },
    ],
    limit:
      "Coupe très exagérée et trajet fictif. Les signaux et les répéteurs ne sont pas dessinés à leurs dimensions réelles.",
    source: {
      title: "NOAA — Câbles sous-marins",
      url: "https://www.noaa.gov/submarine-cables",
    },
  },
  {
    id: "fuelcellcar",
    canvasHeight: 230,
    title: "Deux chemins dans une pile",
    paths: ["/automobile/motorisations/carburants-alternatifs/voiture-hydrogene-pile-combustible"],
    steps: [
      {
        label: "Séparer",
        caption:
          "À l’anode, l’hydrogène fournit des protons et des électrons sous l’action du catalyseur.",
        detail:
          "À l’anode, l’hydrogène fournit des protons et des électrons sous l’action du catalyseur. Principe d’une pile PEM. Particules symboliques, sans bilan moléculaire figuré ; le bilan carbone dépend aussi de la production d’hydrogène.",
      },
      {
        label: "Faire circuler",
        caption:
          "Les protons traversent la membrane ; les électrons passent par le circuit extérieur qui alimente le moteur.",
        detail:
          "Les protons traversent la membrane ; les électrons passent par le circuit extérieur qui alimente le moteur. Principe d’une pile PEM. Particules symboliques, sans bilan moléculaire figuré ; le bilan carbone dépend aussi de la production d’hydrogène.",
      },
      {
        label: "Former de l’eau",
        caption:
          "À la cathode, oxygène, protons et électrons participent à la formation d’eau et au dégagement de chaleur.",
        detail:
          "À la cathode, oxygène, protons et électrons participent à la formation d’eau et au dégagement de chaleur. Principe d’une pile PEM. Particules symboliques, sans bilan moléculaire figuré ; le bilan carbone dépend aussi de la production d’hydrogène.",
      },
    ],
    limit:
      "Principe d’une pile PEM. Particules symboliques, sans bilan moléculaire figuré ; le bilan carbone dépend aussi de la production d’hydrogène.",
    source: {
      title: "Department of Energy — Composants d’une pile PEM",
      url: "https://www.energy.gov/cmei/fuels/parts-fuel-cell",
    },
  },
  {
    id: "dcfastcharge",
    canvasHeight: 230,
    title: "Où convertir le courant ?",
    paths: [
      "/automobile/motorisations/electrique/pourquoi-une-borne-de-recharge-rapide-charge-t-elle-une-voiture-electrique-bien-plus-vite",
    ],
    steps: [
      {
        label: "Recharge AC",
        caption:
          "En courant alternatif, le chargeur embarqué transforme l’électricité avant de charger la batterie.",
        detail:
          "En courant alternatif, le chargeur embarqué transforme l’électricité avant de charger la batterie. Schéma de principe sans câblage. La recharge DC ne garantit pas une puissance constante ni un temps universel.",
      },
      {
        label: "Recharge DC",
        caption:
          "La borne rapide effectue la conversion ; le courant continu contourne le chargeur embarqué.",
        detail:
          "La borne rapide effectue la conversion ; le courant continu contourne le chargeur embarqué. Schéma de principe sans câblage. La recharge DC ne garantit pas une puissance constante ni un temps universel.",
      },
      {
        label: "La batterie limite",
        caption:
          "Le véhicule ajuste la puissance acceptée selon l’état de charge, la température et ses limites techniques.",
        detail:
          "Le véhicule ajuste la puissance acceptée selon l’état de charge, la température et ses limites techniques. Schéma de principe sans câblage. La recharge DC ne garantit pas une puissance constante ni un temps universel.",
      },
    ],
    limit:
      "Schéma de principe sans câblage. La recharge DC ne garantit pas une puissance constante ni un temps universel.",
    source: {
      title: "AFDC — Recharge des véhicules électriques",
      url: "https://afdc.energy.gov/fuels/electricity-stations",
    },
  },
  {
    id: "injectorjet",
    canvasHeight: 230,
    title: "Du carburant en fines gouttes",
    paths: ["/automobile/motorisations/thermique/alimentation-carburant-injection"],
    steps: [
      {
        label: "Alimenter",
        caption:
          "Le carburant arrive sous pression à l’injecteur ; son aiguille ferme encore le passage.",
        detail:
          "Le carburant arrive sous pression à l’injecteur ; son aiguille ferme encore le passage. Coupe d’injection directe simplifiée, sans valeurs de pression ni consigne d’entretien. Géométrie et gouttes très agrandies.",
      },
      {
        label: "Ouvrir",
        caption:
          "La commande soulève l’aiguille et libère le passage vers les petits orifices de la buse.",
        detail:
          "La commande soulève l’aiguille et libère le passage vers les petits orifices de la buse. Coupe d’injection directe simplifiée, sans valeurs de pression ni consigne d’entretien. Géométrie et gouttes très agrandies.",
      },
      {
        label: "Pulvériser",
        caption:
          "Le carburant se disperse en gouttelettes qui facilitent son mélange avec l’air dans le cylindre.",
        detail:
          "Le carburant se disperse en gouttelettes qui facilitent son mélange avec l’air dans le cylindre. Coupe d’injection directe simplifiée, sans valeurs de pression ni consigne d’entretien. Géométrie et gouttes très agrandies.",
      },
    ],
    limit:
      "Coupe d’injection directe simplifiée, sans valeurs de pression ni consigne d’entretien. Géométrie et gouttes très agrandies.",
    source: {
      title: "Bosch — Injection à rampe commune",
      url: "https://www.bosch-mobility.com/en/solutions/powertrain/diesel/common-rail-system-piezo/",
    },
  },
  {
    id: "egrloop",
    canvasHeight: 230,
    title: "Réutiliser une partie des gaz",
    paths: ["/automobile/motorisations/thermique/vanne-egr-recirculation-gaz-echappement"],
    steps: [
      {
        label: "Sans recirculation",
        caption: "L’air entre dans le moteur et les gaz brûlés sortent par l’échappement.",
        detail:
          "L’air entre dans le moteur et les gaz brûlés sortent par l’échappement. Boucle EGR simplifiée sans turbo ni refroidisseur. Ouverture variable selon le moteur et ses conditions de fonctionnement.",
      },
      {
        label: "Ouvrir la vanne",
        caption:
          "Une partie des gaz d’échappement revient vers l’admission à travers la branche EGR.",
        detail:
          "Une partie des gaz d’échappement revient vers l’admission à travers la branche EGR. Boucle EGR simplifiée sans turbo ni refroidisseur. Ouverture variable selon le moteur et ses conditions de fonctionnement.",
      },
      {
        label: "Diluer l’admission",
        caption:
          "Les gaz recirculés modifient le mélange et limitent la température de combustion, ce qui réduit la formation de NOx.",
        detail:
          "Les gaz recirculés modifient le mélange et limitent la température de combustion, ce qui réduit la formation de NOx. Boucle EGR simplifiée sans turbo ni refroidisseur. Ouverture variable selon le moteur et ses conditions de fonctionnement.",
      },
    ],
    limit:
      "Boucle EGR simplifiée sans turbo ni refroidisseur. Ouverture variable selon le moteur et ses conditions de fonctionnement.",
    source: {
      title: "Jääskeläinen et Khair — Recirculation des gaz",
      url: "https://dieselnet.com/tech/engine_egr.php",
    },
  },
  {
    id: "beltreel",
    canvasHeight: 230,
    title: "Le cliquet de la ceinture",
    paths: [
      "/automobile/securite-et-conduite/securite-passive/comment-une-ceinture-de-securite-se-bloque-t-elle-d-un-coup",
    ],
    steps: [
      {
        label: "Dérouler",
        caption:
          "Quand le mécanisme reste au repos, la roue de l’enrouleur peut tourner et laisser sortir la sangle.",
        detail:
          "Quand le mécanisme reste au repos, la roue de l’enrouleur peut tourner et laisser sortir la sangle. Exemple de capteur sensible au véhicule, pas un modèle universel. Le prétensionneur est un dispositif distinct, non représenté.",
      },
      {
        label: "Détecter",
        caption:
          "Une forte décélération déplace la masse du capteur et pousse le mécanisme de verrouillage.",
        detail:
          "Une forte décélération déplace la masse du capteur et pousse le mécanisme de verrouillage. Exemple de capteur sensible au véhicule, pas un modèle universel. Le prétensionneur est un dispositif distinct, non représenté.",
      },
      {
        label: "Bloquer",
        caption: "Le cliquet s’engage dans la roue dentée et empêche le déroulement de la sangle.",
        detail:
          "Le cliquet s’engage dans la roue dentée et empêche le déroulement de la sangle. Exemple de capteur sensible au véhicule, pas un modèle universel. Le prétensionneur est un dispositif distinct, non représenté.",
      },
    ],
    limit:
      "Exemple de capteur sensible au véhicule, pas un modèle universel. Le prétensionneur est un dispositif distinct, non représenté.",
    source: {
      title: "Brevet US4015796 — Capteur inertiel d’enrouleur",
      url: "https://patents.google.com/patent/US4015796",
    },
  },
  {
    id: "monsoonwind",
    canvasHeight: 230,
    title: "Le vent change avec la saison",
    paths: [
      "/geographie-et-territoires/geographie-physique/climatologie/pourquoi-la-mousson-apporte-t-elle-des-pluies-torrentielles-en-inde-chaque-ete",
    ],
    steps: [
      {
        label: "Contraster",
        caption:
          "En été, le continent se réchauffe davantage que l’océan voisin ; la circulation atmosphérique se modifie.",
        detail:
          "En été, le continent se réchauffe davantage que l’océan voisin ; la circulation atmosphérique se modifie. Coupe conceptuelle d’une mousson. La rotation terrestre, les reliefs et le déplacement des zones de pluie comptent aussi ; pluies hivernales possibles localement.",
      },
      {
        label: "Apporter l’humidité",
        caption: "Le vent d’été transporte de l’air humide depuis l’océan vers le continent.",
        detail:
          "Le vent d’été transporte de l’air humide depuis l’océan vers le continent. Coupe conceptuelle d’une mousson. La rotation terrestre, les reliefs et le déplacement des zones de pluie comptent aussi ; pluies hivernales possibles localement.",
      },
      {
        label: "Changer de saison",
        caption:
          "En hiver, le contraste thermique s’inverse et les vents dominants changent de direction.",
        detail:
          "En hiver, le contraste thermique s’inverse et les vents dominants changent de direction. Coupe conceptuelle d’une mousson. La rotation terrestre, les reliefs et le déplacement des zones de pluie comptent aussi ; pluies hivernales possibles localement.",
      },
    ],
    limit:
      "Coupe conceptuelle d’une mousson. La rotation terrestre, les reliefs et le déplacement des zones de pluie comptent aussi ; pluies hivernales possibles localement.",
    source: {
      title: "UCAR — Mécanismes des moussons",
      url: "https://scied.ucar.edu/learning-zone/storms/monsoons",
    },
  },
  {
    id: "pressureair",
    canvasHeight: 230,
    title: "L’air monte ou descend",
    paths: [
      "/geographie-et-territoires/geographie-physique/climatologie/pourquoi-la-pression-de-l-air-annonce-t-elle-la-pluie-ou-le-beau-temps",
    ],
    steps: [
      {
        label: "Converger",
        caption:
          "Dans une dépression, la circulation près du sol peut converger et être associée à de l’air ascendant.",
        detail:
          "Dans une dépression, la circulation près du sol peut converger et être associée à de l’air ascendant. Coupe simplifiée sans rotation des vents. La pression seule ne suffit pas à prévoir le temps ; brouillards possibles sous anticyclone.",
      },
      {
        label: "Former un nuage",
        caption:
          "L’air qui monte se détend et se refroidit ; s’il devient saturé, des gouttelettes peuvent se former.",
        detail:
          "L’air qui monte se détend et se refroidit ; s’il devient saturé, des gouttelettes peuvent se former. Coupe simplifiée sans rotation des vents. La pression seule ne suffit pas à prévoir le temps ; brouillards possibles sous anticyclone.",
      },
      {
        label: "Descendre",
        caption:
          "Dans un anticyclone, l’air descendant se comprime et se réchauffe, ce qui tend à limiter les nuages.",
        detail:
          "Dans un anticyclone, l’air descendant se comprime et se réchauffe, ce qui tend à limiter les nuages. Coupe simplifiée sans rotation des vents. La pression seule ne suffit pas à prévoir le temps ; brouillards possibles sous anticyclone.",
      },
    ],
    limit:
      "Coupe simplifiée sans rotation des vents. La pression seule ne suffit pas à prévoir le temps ; brouillards possibles sous anticyclone.",
    source: {
      title: "Météo-France — Pression atmosphérique",
      url: "https://meteofrance.com/meteo-a-z/quest-ce-que-la-pression-atmospherique",
    },
  },
  {
    id: "riverdelta",
    canvasHeight: 230,
    title: "Quand le fleuve dépose",
    paths: [
      "/geographie-et-territoires/geographie-physique/hydrographie/comment-un-fleuve-fabrique-t-il-de-nouvelles-terres-a-son-embouchure",
    ],
    steps: [
      {
        label: "Transporter",
        caption:
          "Le fleuve transporte des sédiments arrachés aux sols et aux roches de son bassin.",
        detail:
          "Le fleuve transporte des sédiments arrachés aux sols et aux roches de son bassin. Vue aérienne conceptuelle. Tous les fleuves ne forment pas un delta ; vagues, marées, barrages et niveau marin modifient le bilan.",
      },
      {
        label: "Déposer",
        caption:
          "À l’embouchure, le transport peut diminuer ; une partie des sédiments s’accumule.",
        detail:
          "À l’embouchure, le transport peut diminuer ; une partie des sédiments s’accumule. Vue aérienne conceptuelle. Tous les fleuves ne forment pas un delta ; vagues, marées, barrages et niveau marin modifient le bilan.",
      },
      {
        label: "Se diviser",
        caption:
          "Quand les apports dépassent les pertes, des dépôts se développent et le fleuve peut se diviser en bras.",
        detail:
          "Quand les apports dépassent les pertes, des dépôts se développent et le fleuve peut se diviser en bras. Vue aérienne conceptuelle. Tous les fleuves ne forment pas un delta ; vagues, marées, barrages et niveau marin modifient le bilan.",
      },
    ],
    limit:
      "Vue aérienne conceptuelle. Tous les fleuves ne forment pas un delta ; vagues, marées, barrages et niveau marin modifient le bilan.",
    source: {
      title: "USGS — Bilan sédimentaire des deltas",
      url: "https://pubs.usgs.gov/of/2003/of03-337/rivers-deltas.html",
    },
  },
  {
    id: "terracefield",
    canvasHeight: 230,
    title: "Transformer une pente en marches",
    paths: [
      "/geographie-et-territoires/geographie-physique/reliefs/comment-les-terrasses-permettent-elles-de-cultiver-sur-une-montagne",
    ],
    steps: [
      {
        label: "Ruisseler",
        caption:
          "Sur une pente exposée, l’eau qui ruisselle peut emporter des particules de terre.",
        detail:
          "Sur une pente exposée, l’eau qui ruisselle peut emporter des particules de terre. Coupe de principe, pas un plan de construction. Stabilité, drainage et entretien dépendent du terrain ; toutes les terrasses ne sont pas inondées.",
      },
      {
        label: "Retenir",
        caption:
          "Des terrasses raccourcissent la pente et retiennent le sol derrière des talus ou des murets.",
        detail:
          "Des terrasses raccourcissent la pente et retiennent le sol derrière des talus ou des murets. Coupe de principe, pas un plan de construction. Stabilité, drainage et entretien dépendent du terrain ; toutes les terrasses ne sont pas inondées.",
      },
      {
        label: "Infiltrer",
        caption:
          "Sur les plateformes, l’eau ralentit et peut s’infiltrer ; un drainage adapté reste nécessaire.",
        detail:
          "Sur les plateformes, l’eau ralentit et peut s’infiltrer ; un drainage adapté reste nécessaire. Coupe de principe, pas un plan de construction. Stabilité, drainage et entretien dépendent du terrain ; toutes les terrasses ne sont pas inondées.",
      },
    ],
    limit:
      "Coupe de principe, pas un plan de construction. Stabilité, drainage et entretien dépendent du terrain ; toutes les terrasses ne sont pas inondées.",
    source: {
      title: "UNESCO — Rizières en terrasses",
      url: "https://whc.unesco.org/fr/list/722/",
    },
  },
  {
    id: "canallock",
    canvasHeight: 230,
    title: "Une marche pour le bateau",
    paths: [
      "/geographie-et-territoires/geopolitique/routes-et-detroits/comment-le-canal-de-panama-fait-il-passer-les-navires-d-un-ocean-a-l-autre",
    ],
    steps: [
      {
        label: "Entrer",
        caption: "À niveau égal avec le bassin inférieur, le bateau entre dans le sas de l’écluse.",
        detail:
          "À niveau égal avec le bassin inférieur, le bateau entre dans le sas de l’écluse. Une seule écluse ascendante schématique, pas tout le canal de Panama. L’eau circule par gravité ; les portes s’ouvrent à niveaux égaux.",
      },
      {
        label: "Remplir",
        caption:
          "Portes fermées, une arrivée d’eau depuis le niveau supérieur fait monter le bateau avec la surface.",
        detail:
          "Portes fermées, une arrivée d’eau depuis le niveau supérieur fait monter le bateau avec la surface. Une seule écluse ascendante schématique, pas tout le canal de Panama. L’eau circule par gravité ; les portes s’ouvrent à niveaux égaux.",
      },
      {
        label: "Sortir",
        caption:
          "Quand le sas atteint le niveau supérieur, la porte amont peut s’ouvrir et le bateau avance.",
        detail:
          "Quand le sas atteint le niveau supérieur, la porte amont peut s’ouvrir et le bateau avance. Une seule écluse ascendante schématique, pas tout le canal de Panama. L’eau circule par gravité ; les portes s’ouvrent à niveaux égaux.",
      },
    ],
    limit:
      "Une seule écluse ascendante schématique, pas tout le canal de Panama. L’eau circule par gravité ; les portes s’ouvrent à niveaux égaux.",
    source: {
      title: "Autorité du canal de Panama — Fonctionnement du canal",
      url: "https://pancanal.com/en/design-of-the-locks/",
    },
  },
  {
    id: "ammoniasynthesis",
    canvasHeight: 230,
    title: "Assembler l’ammoniac",
    paths: [
      "/industries/industrie-lourde/chimie-industrielle/comment-fabrique-t-on-des-engrais-avec-l-azote-de-l-air",
    ],
    steps: [
      {
        label: "Les réactifs",
        caption:
          "Une molécule de diazote et trois molécules de dihydrogène apportent les atomes nécessaires.",
        detail:
          "Une molécule de diazote et trois molécules de dihydrogène apportent les atomes nécessaires. Bilan N₂ + 3 H₂ ⇌ 2 NH₃. Symboles moléculaires non à l’échelle ; conversion partielle et conditions industrielles non quantifiées.",
      },
      {
        label: "Transformer",
        caption:
          "La réaction catalysée peut former deux molécules d’ammoniac en conservant les atomes.",
        detail:
          "La réaction catalysée peut former deux molécules d’ammoniac en conservant les atomes. Bilan N₂ + 3 H₂ ⇌ 2 NH₃. Symboles moléculaires non à l’échelle ; conversion partielle et conditions industrielles non quantifiées.",
      },
      {
        label: "Recycler",
        caption:
          "L’ammoniac est séparé ; les gaz qui n’ont pas réagi retournent dans la boucle de synthèse.",
        detail:
          "L’ammoniac est séparé ; les gaz qui n’ont pas réagi retournent dans la boucle de synthèse. Bilan N₂ + 3 H₂ ⇌ 2 NH₃. Symboles moléculaires non à l’échelle ; conversion partielle et conditions industrielles non quantifiées.",
      },
    ],
    limit:
      "Bilan N₂ + 3 H₂ ⇌ 2 NH₃. Symboles moléculaires non à l’échelle ; conversion partielle et conditions industrielles non quantifiées.",
    source: {
      title: "BASF — La synthèse d’ammoniac",
      url: "https://www.basf.com/gb/en/media/science-around-us/fertilizer-out-of-thin-air",
    },
  },
  {
    id: "floatglass",
    canvasHeight: 230,
    title: "Du mélange au verre",
    paths: [
      "/industries/industrie-lourde/chimie-industrielle/la-fabrication-du-verre-procede-de-base",
    ],
    steps: [
      {
        label: "Mélanger",
        caption:
          "Le sable apporte la silice, le fondant facilite la fusion et la chaux stabilise le verre courant.",
        detail:
          "Le sable apporte la silice, le fondant facilite la fusion et la chaux stabilise le verre courant. Exemple de fabrication d’un récipient par soufflage. Pas de recette ni de températures de fabrication.",
      },
      {
        label: "Fondre",
        caption:
          "Au four, le mélange devient une masse fondue ; l’affinage permet notamment d’évacuer des bulles.",
        detail:
          "Au four, le mélange devient une masse fondue ; l’affinage permet notamment d’évacuer des bulles. Exemple de fabrication d’un récipient par soufflage. Pas de recette ni de températures de fabrication.",
      },
      {
        label: "Façonner",
        caption:
          "Une masse de verre est soufflée puis soumise à une recuisson contrôlée pour limiter les contraintes.",
        detail:
          "Une masse de verre est soufflée puis soumise à une recuisson contrôlée pour limiter les contraintes. Exemple de fabrication d’un récipient par soufflage. Pas de recette ni de températures de fabrication.",
      },
    ],
    limit:
      "Exemple de fabrication d’un récipient par soufflage. Pas de recette ni de températures de fabrication.",
    source: {
      title: "Pierlot et coll. — Formulation et traitements du verre",
      url: "https://new.societechimiquedefrance.fr/wp-content/uploads/2019/12/2013-370-janvier-p8-Pierlot_HD.pdf",
    },
  },
  {
    id: "steelroutes",
    canvasHeight: 230,
    title: "Deux voies vers l’acier",
    paths: [
      "/industries/industrie-lourde/siderurgie/comment-fabrique-t-on-de-l-acier-avec-un-haut-fourneau-ou-un-four-electrique",
    ],
    steps: [
      {
        label: "Haut-fourneau",
        caption:
          "Le haut-fourneau transforme le minerai en fonte grâce aux réactions avec les gaz issus du coke.",
        detail:
          "Le haut-fourneau transforme le minerai en fonte grâce aux réactions avec les gaz issus du coke. Deux filières simplifiées ; un haut-fourneau ne produit pas directement l’acier. Le four électrique peut aussi utiliser du fer de réduction directe.",
      },
      {
        label: "Convertisseur à oxygène",
        caption:
          "Le convertisseur à oxygène réduit la teneur en carbone de la fonte pour produire de l’acier.",
        detail:
          "Le convertisseur à oxygène réduit la teneur en carbone de la fonte pour produire de l’acier. Deux filières simplifiées ; un haut-fourneau ne produit pas directement l’acier. Le four électrique peut aussi utiliser du fer de réduction directe.",
      },
      {
        label: "Four à arc électrique",
        caption:
          "Dans une autre filière, un four à arc électrique peut fondre des ferrailles pour produire de l’acier.",
        detail:
          "Dans une autre filière, un four à arc électrique peut fondre des ferrailles pour produire de l’acier. Deux filières simplifiées ; un haut-fourneau ne produit pas directement l’acier. Le four électrique peut aussi utiliser du fer de réduction directe.",
      },
    ],
    limit:
      "Deux filières simplifiées ; un haut-fourneau ne produit pas directement l’acier. Le four électrique peut aussi utiliser du fer de réduction directe.",
    source: {
      title: "World Steel Association — Filières sidérurgiques",
      url: "https://worldsteel.org/about-steel/steelmaking-process/",
    },
  },
  {
    id: "visionreject",
    canvasHeight: 230,
    title: "Voir, mesurer, trier",
    paths: [
      "/industries/industrie-manufacturiere/automatisation/comment-une-camera-repere-t-elle-une-piece-defectueuse-sur-une-chaine-de-production",
    ],
    steps: [
      {
        label: "Éclairer",
        caption:
          "Une caméra et un éclairage adapté acquièrent l’image d’une pièce sur le convoyeur.",
        detail:
          "Une caméra et un éclairage adapté acquièrent l’image d’une pièce sur le convoyeur. Exemple d’un trou manquant. Une caméra ne détecte pas tous les défauts ; éclairage, réglage et validation influencent la fiabilité.",
      },
      {
        label: "Comparer",
        caption:
          "Le logiciel mesure une caractéristique visible et la compare à une référence ou à une tolérance.",
        detail:
          "Le logiciel mesure une caractéristique visible et la compare à une référence ou à une tolérance. Exemple d’un trou manquant. Une caméra ne détecte pas tous les défauts ; éclairage, réglage et validation influencent la fiabilité.",
      },
      {
        label: "Écarter",
        caption:
          "Si le critère choisi échoue, le système peut commander l’éjection de la pièce identifiée.",
        detail:
          "Si le critère choisi échoue, le système peut commander l’éjection de la pièce identifiée. Exemple d’un trou manquant. Une caméra ne détecte pas tous les défauts ; éclairage, réglage et validation influencent la fiabilité.",
      },
    ],
    limit:
      "Exemple d’un trou manquant. Une caméra ne détecte pas tous les défauts ; éclairage, réglage et validation influencent la fiabilité.",
    source: {
      title: "Cognex — Introduction à la vision industrielle",
      url: "https://www.cognex.com/en/tools-and-resources/starter-guides/machine-vision",
    },
  },
  {
    id: "interchangefit",
    canvasHeight: 230,
    title: "Une pièce qui s’ajuste",
    paths: [
      "/industries/industrie-manufacturiere/qualite-et-normalisation/pourquoi-les-pieces-interchangeables-ont-elles-change-la-fabrication-des-objets",
    ],
    steps: [
      {
        label: "Comparer",
        caption:
          "Deux pièces prévues pour la même fonction peuvent avoir des dimensions différentes si elles ne sont pas standardisées.",
        detail:
          "Deux pièces prévues pour la même fonction peuvent avoir des dimensions différentes si elles ne sont pas standardisées. Ajustement schématique. Interchangeable signifie conforme aux dimensions et tolérances requises, pas parfaitement identique à l’échelle microscopique.",
      },
      {
        label: "Contrôler",
        caption: "Une jauge vérifie que la dimension choisie reste dans la plage admissible.",
        detail:
          "Une jauge vérifie que la dimension choisie reste dans la plage admissible. Ajustement schématique. Interchangeable signifie conforme aux dimensions et tolérances requises, pas parfaitement identique à l’échelle microscopique.",
      },
      {
        label: "Remplacer",
        caption:
          "Une pièce conforme peut prendre la place d’une autre du même modèle sans retouche manuelle.",
        detail:
          "Une pièce conforme peut prendre la place d’une autre du même modèle sans retouche manuelle. Ajustement schématique. Interchangeable signifie conforme aux dimensions et tolérances requises, pas parfaitement identique à l’échelle microscopique.",
      },
    ],
    limit:
      "Ajustement schématique. Interchangeable signifie conforme aux dimensions et tolérances requises, pas parfaitement identique à l’échelle microscopique.",
    source: {
      title: "NIST — Geometric interoperability via queries",
      url: "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=914283",
    },
  },
  {
    id: "databaseindex",
    canvasHeight: 230,
    title: "Trouver une ligne par index",
    paths: [
      "/micro-informatique-et-informatique/donnees/bases-de-donnees/bases-de-donnees-et-index",
    ],
    steps: [
      {
        label: "Parcourir",
        caption:
          "Sans index adapté, une recherche peut devoir examiner les lignes de la table une à une.",
        detail:
          "Sans index adapté, une recherche peut devoir examiner les lignes de la table une à une. Petit index pédagogique, pas la structure complète d’un B-tree. Le moteur choisit son plan ; un index coûte de l’espace et des mises à jour.",
      },
      {
        label: "Consulter",
        caption:
          "Un index ordonné associe des valeurs à des références permettant de retrouver les lignes.",
        detail:
          "Un index ordonné associe des valeurs à des références permettant de retrouver les lignes. Petit index pédagogique, pas la structure complète d’un B-tree. Le moteur choisit son plan ; un index coûte de l’espace et des mises à jour.",
      },
      {
        label: "Retrouver",
        caption:
          "La recherche de la valeur B conduit à la ligne repérée, sans relire toutes les autres données.",
        detail:
          "La recherche de la valeur B conduit à la ligne repérée, sans relire toutes les autres données. Petit index pédagogique, pas la structure complète d’un B-tree. Le moteur choisit son plan ; un index coûte de l’espace et des mises à jour.",
      },
    ],
    limit:
      "Petit index pédagogique, pas la structure complète d’un B-tree. Le moteur choisit son plan ; un index coûte de l’espace et des mises à jour.",
    source: {
      title: "PostgreSQL — Introduction aux index",
      url: "https://www.postgresql.org/docs/current/indexes-intro.html",
    },
  },
  {
    id: "runlength",
    canvasHeight: 230,
    title: "Coder les répétitions",
    paths: [
      "/micro-informatique-et-informatique/donnees/representation-et-compression/representation-et-compression-des-donnees",
    ],
    steps: [
      {
        label: "Une suite",
        caption:
          "Une rangée de pixels contient des séries de la même couleur, ici quatre bleus puis deux jaunes.",
        detail:
          "Une rangée de pixels contient des séries de la même couleur, ici quatre bleus puis deux jaunes. Exemple RLE sans perte. Les en-têtes et la taille des codes ne sont pas comptés ; une image variée peut devenir plus grosse.",
      },
      {
        label: "Compter",
        caption:
          "Un codage par répétitions représente chaque série par sa couleur et son nombre de pixels.",
        detail:
          "Un codage par répétitions représente chaque série par sa couleur et son nombre de pixels. Exemple RLE sans perte. Les en-têtes et la taille des codes ne sont pas comptés ; une image variée peut devenir plus grosse.",
      },
      {
        label: "Reconstruire",
        caption:
          "Le décodeur redéploie les séries et retrouve exactement les six pixels de départ.",
        detail:
          "Le décodeur redéploie les séries et retrouve exactement les six pixels de départ. Exemple RLE sans perte. Les en-têtes et la taille des codes ne sont pas comptés ; une image variée peut devenir plus grosse.",
      },
    ],
    limit:
      "Exemple RLE sans perte. Les en-têtes et la taille des codes ne sont pas comptés ; une image variée peut devenir plus grosse.",
    source: {
      title: "ImageMagick — Codage RLE du format MIFF",
      url: "https://imagemagick.org/miff/",
    },
  },
  {
    id: "branchloop",
    canvasHeight: 230,
    title: "Choisir puis recommencer",
    paths: [
      "/micro-informatique-et-informatique/logiciel/programmation/comment-un-programme-decide-t-il-quoi-faire-grace-aux-conditions-et-aux-boucles",
    ],
    steps: [
      {
        label: "Tester",
        caption:
          "Le programme teste une condition ; selon sa valeur, il suit l’une des deux branches.",
        detail:
          "Le programme teste une condition ; selon sa valeur, il suit l’une des deux branches. Petit programme fictif ; les flèches indiquent l’ordre d’exécution. Le compteur est initialisé à zéro avant le premier test.",
      },
      {
        label: "Répéter",
        caption:
          "Tant que le compteur reste inférieur à trois, une action est exécutée puis le compteur augmente.",
        detail:
          "Tant que le compteur reste inférieur à trois, une action est exécutée puis le compteur augmente. Petit programme fictif ; les flèches indiquent l’ordre d’exécution. Le compteur est initialisé à zéro avant le premier test.",
      },
      {
        label: "Arrêter",
        caption: "Quand le compteur vaut trois, le test est faux et la boucle rejoint la sortie.",
        detail:
          "Quand le compteur vaut trois, le test est faux et la boucle rejoint la sortie. Petit programme fictif ; les flèches indiquent l’ordre d’exécution. Le compteur est initialisé à zéro avant le premier test.",
      },
    ],
    limit:
      "Petit programme fictif ; les flèches indiquent l’ordre d’exécution. Le compteur est initialisé à zéro avant le premier test.",
    source: {
      title: "MDN — Boucles et itération",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
    },
  },
  {
    id: "bootchain",
    canvasHeight: 230,
    title: "Le relais du démarrage",
    paths: [
      "/micro-informatique-et-informatique/logiciel/systemes-d-exploitation/comment-un-ordinateur-demarre-t-il-quand-on-appuie-sur-le-bouton",
    ],
    steps: [
      {
        label: "Préparer",
        caption:
          "Le processeur exécute d’abord le micrologiciel persistant, qui initialise le matériel nécessaire.",
        detail:
          "Le processeur exécute d’abord le micrologiciel persistant, qui initialise le matériel nécessaire. Exemple de PC simplifié. Le processeur exécute le code ; les puces ne se passent pas physiquement des programmes comme des objets.",
      },
      {
        label: "Charger",
        caption:
          "Le chargeur d’amorçage place le noyau du système depuis le stockage vers la mémoire vive.",
        detail:
          "Le chargeur d’amorçage place le noyau du système depuis le stockage vers la mémoire vive. Exemple de PC simplifié. Le processeur exécute le code ; les puces ne se passent pas physiquement des programmes comme des objets.",
      },
      {
        label: "Démarrer",
        caption:
          "Le noyau initialise ses fonctions puis lance les services qui préparent la session utilisateur.",
        detail:
          "Le noyau initialise ses fonctions puis lance les services qui préparent la session utilisateur. Exemple de PC simplifié. Le processeur exécute le code ; les puces ne se passent pas physiquement des programmes comme des objets.",
      },
    ],
    limit:
      "Exemple de PC simplifié. Le processeur exécute le code ; les puces ne se passent pas physiquement des programmes comme des objets.",
    source: {
      title: "Red Hat — Du micrologiciel au noyau",
      url: "https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/6/html/installation_guide/s1-boot-init-shutdown-process",
    },
  },
  {
    id: "vigeneregrid",
    canvasHeight: 230,
    title: "Une clé, plusieurs décalages",
    paths: [
      "/micro-informatique-et-informatique/reseaux-et-securite/chiffrement/comment-le-chiffre-de-vigenere-cachait-il-un-message-mieux-que-celui-de-cesar",
    ],
    steps: [
      {
        label: "Un décalage",
        caption:
          "Dans le chiffre de César, le même décalage transforme chaque A en la même lettre.",
        detail:
          "Dans le chiffre de César, le même décalage transforme chaque A en la même lettre. Exemple A=0 à Z=25, modulo 26. Chiffre historique cassable ; ce dessin ne le recommande pas pour protéger des données.",
      },
      {
        label: "Une clé",
        caption:
          "Avec la clé BC répétée, les décalages alternent entre un et deux rangs dans l’alphabet.",
        detail:
          "Avec la clé BC répétée, les décalages alternent entre un et deux rangs dans l’alphabet. Exemple A=0 à Z=25, modulo 26. Chiffre historique cassable ; ce dessin ne le recommande pas pour protéger des données.",
      },
      {
        label: "Plusieurs lettres",
        caption:
          "Le message AAAA devient BCBC ; la même lettre peut donc recevoir des substitutions différentes.",
        detail:
          "Le message AAAA devient BCBC ; la même lettre peut donc recevoir des substitutions différentes. Exemple A=0 à Z=25, modulo 26. Chiffre historique cassable ; ce dessin ne le recommande pas pour protéger des données.",
      },
    ],
    limit:
      "Exemple A=0 à Z=25, modulo 26. Chiffre historique cassable ; ce dessin ne le recommande pas pour protéger des données.",
    source: {
      title: "University of Rhode Island — Chiffre de Vigenère",
      url: "https://cs.uri.edu/cryptography/classical-ciphers/vigenere/article.html",
    },
  },
  {
    id: "algebrabalance",
    canvasHeight: 230,
    title: "Garder l’égalité",
    paths: ["/sciences-fondamentales/mathematiques/algebre/histoire-principes-algebre"],
    steps: [
      {
        label: "Une inconnue",
        caption:
          "L’égalité 3x + 2 = 14 représente trois parts inconnues et deux unités face à quatorze unités.",
        detail:
          "L’égalité 3x + 2 = 14 représente trois parts inconnues et deux unités face à quatorze unités. Balance comme métaphore de l’égalité, avec unités fictives. Les opérations doivent être appliquées aux deux membres.",
      },
      {
        label: "Retirer deux",
        caption: "On enlève deux unités des deux côtés : l’égalité devient 3x = 12.",
        detail:
          "On enlève deux unités des deux côtés : l’égalité devient 3x = 12. Balance comme métaphore de l’égalité, avec unités fictives. Les opérations doivent être appliquées aux deux membres.",
      },
      {
        label: "Partager en trois",
        caption:
          "En divisant les deux côtés par trois, chaque part inconnue vaut quatre unités : x = 4.",
        detail:
          "En divisant les deux côtés par trois, chaque part inconnue vaut quatre unités : x = 4. Balance comme métaphore de l’égalité, avec unités fictives. Les opérations doivent être appliquées aux deux membres.",
      },
    ],
    limit:
      "Balance comme métaphore de l’égalité, avec unités fictives. Les opérations doivent être appliquées aux deux membres.",
    source: {
      title: "OpenStax — Propriétés de l’égalité",
      url: "https://openstax.org/books/elementary-algebra-2e/pages/2-1-solve-equations-using-the-subtraction-and-addition-properties-of-equality",
    },
  },
  {
    id: "trianglegeometry",
    canvasHeight: 230,
    title: "Un triangle sur quelle surface ?",
    paths: ["/sciences-fondamentales/mathematiques/geometrie/geometrie-euclidienne-et-au-dela"],
    steps: [
      {
        label: "Dans le plan",
        caption:
          "Un triangle du plan euclidien a une somme d’angles intérieurs égale à 180 degrés.",
        detail:
          "Un triangle du plan euclidien a une somme d’angles intérieurs égale à 180 degrés. Les côtés sphériques suivent des grands cercles. Projection schématique ; ce triangle particulier ne représente pas tous les triangles sphériques.",
      },
      {
        label: "Sur une sphère",
        caption:
          "Deux méridiens séparés d’un quart de tour et un arc d’équateur peuvent former trois angles droits.",
        detail:
          "Deux méridiens séparés d’un quart de tour et un arc d’équateur peuvent former trois angles droits. Les côtés sphériques suivent des grands cercles. Projection schématique ; ce triangle particulier ne représente pas tous les triangles sphériques.",
      },
      {
        label: "Changer de géométrie",
        caption:
          "Pour ce triangle sphérique précis, trois angles droits donnent une somme de 270 degrés.",
        detail:
          "Pour ce triangle sphérique précis, trois angles droits donnent une somme de 270 degrés. Les côtés sphériques suivent des grands cercles. Projection schématique ; ce triangle particulier ne représente pas tous les triangles sphériques.",
      },
    ],
    limit:
      "Les côtés sphériques suivent des grands cercles. Projection schématique ; ce triangle particulier ne représente pas tous les triangles sphériques.",
    source: {
      title: "LibreTexts — Triangles et géométrie sphérique",
      url: "https://math.libretexts.org/Courses/Hartnell_College/Mathematics_for_Elementary_Teachers/12%3A_Geometry/12.03%3A_Triangles_and_Quadrilaterals",
    },
  },
  {
    id: "tempscales",
    canvasHeight: 230,
    title: "Une température, trois nombres",
    paths: [
      "/sciences-fondamentales/physique/thermodynamique/les-echelles-de-temperature-celsius-fahrenheit-et-kelvin",
    ],
    steps: [
      {
        label: "Glace fondante",
        caption:
          "Sous la pression de référence, la fusion de la glace correspond à 0 °C, 32 °F et 273,15 K.",
        detail:
          "Sous la pression de référence, la fusion de la glace correspond à 0 °C, 32 °F et 273,15 K. Les trois colonnes montrent la même température. Graduations schématiques ; le point d’ébullition dépend de la pression. K s’écrit sans degré.",
      },
      {
        label: "Une pièce",
        caption:
          "La même température de 20 °C s’écrit 68 °F ou 293,15 K ; les objets ne changent pas de température.",
        detail:
          "La même température de 20 °C s’écrit 68 °F ou 293,15 K ; les objets ne changent pas de température. Les trois colonnes montrent la même température. Graduations schématiques ; le point d’ébullition dépend de la pression. K s’écrit sans degré.",
      },
      {
        label: "Eau bouillante",
        caption:
          "À pression atmosphérique normale, l’eau bout vers 100 °C, soit 212 °F et 373,15 K.",
        detail:
          "À pression atmosphérique normale, l’eau bout vers 100 °C, soit 212 °F et 373,15 K. Les trois colonnes montrent la même température. Graduations schématiques ; le point d’ébullition dépend de la pression. K s’écrit sans degré.",
      },
    ],
    limit:
      "Les trois colonnes montrent la même température. Graduations schématiques ; le point d’ébullition dépend de la pression. K s’écrit sans degré.",
    source: {
      title: "BIPM — Brochure sur le Système international",
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-FR.pdf",
    },
  },
  {
    id: "confounder",
    canvasHeight: 230,
    title: "Un troisième facteur",
    paths: [
      "/communication-et-medias/information-et-verification/education-aux-medias/comprendre-la-difference-entre-correlation-et-causalite",
    ],
    steps: [
      {
        label: "Observer",
        caption:
          "Deux séries peuvent augmenter ensemble ; cela décrit une association, sans identifier une cause.",
        detail:
          "Deux séries peuvent augmenter ensemble ; cela décrit une association, sans identifier une cause. Exemple conceptuel sans données mesurées. Une corrélation ne prouve ni ne réfute, à elle seule, un lien causal.",
      },
      {
        label: "Chercher",
        caption:
          "La chaleur peut favoriser à la fois les ventes de glaces et la fréquentation des lieux de baignade.",
        detail:
          "La chaleur peut favoriser à la fois les ventes de glaces et la fréquentation des lieux de baignade. Exemple conceptuel sans données mesurées. Une corrélation ne prouve ni ne réfute, à elle seule, un lien causal.",
      },
      {
        label: "Distinguer",
        caption:
          "Un facteur commun peut expliquer une association ; une flèche directe entre les deux effets n’est pas démontrée.",
        detail:
          "Un facteur commun peut expliquer une association ; une flèche directe entre les deux effets n’est pas démontrée. Exemple conceptuel sans données mesurées. Une corrélation ne prouve ni ne réfute, à elle seule, un lien causal.",
      },
    ],
    limit:
      "Exemple conceptuel sans données mesurées. Une corrélation ne prouve ni ne réfute, à elle seule, un lien causal.",
    source: {
      title: "OpenStax — Corrélation et causalité",
      url: "https://openstax.org/books/introductory-statistics-2e/pages/12-3-the-regression-equation",
    },
  },
  {
    id: "treeringmatch",
    canvasHeight: 230,
    title: "Raccorder des cernes",
    paths: [
      "/sciences-humaines-et-sociales/histoire/methode-historique/comment-les-cernes-des-arbres-permettent-ils-de-dater-le-passe",
    ],
    steps: [
      {
        label: "Une croissance",
        caption:
          "Des cernes de largeurs différentes enregistrent la croissance d’un arbre au fil des années.",
        detail:
          "Des cernes de largeurs différentes enregistrent la croissance d’un arbre au fil des années. Séries fictives, sans date archéologique réelle. Comparer plusieurs arbres ; dater l’abattage demande notamment le dernier cerne conservé.",
      },
      {
        label: "Comparer",
        caption:
          "Deux bois ayant vécu une période commune peuvent présenter une séquence de largeurs qui se correspond.",
        detail:
          "Deux bois ayant vécu une période commune peuvent présenter une séquence de largeurs qui se correspond. Séries fictives, sans date archéologique réelle. Comparer plusieurs arbres ; dater l’abattage demande notamment le dernier cerne conservé.",
      },
      {
        label: "Raccorder",
        caption:
          "En alignant la séquence commune avec une série datée, on peut situer les cernes du bois étudié.",
        detail:
          "En alignant la séquence commune avec une série datée, on peut situer les cernes du bois étudié. Séries fictives, sans date archéologique réelle. Comparer plusieurs arbres ; dater l’abattage demande notamment le dernier cerne conservé.",
      },
    ],
    limit:
      "Séries fictives, sans date archéologique réelle. Comparer plusieurs arbres ; dater l’abattage demande notamment le dernier cerne conservé.",
    source: {
      title: "National Park Service — Dendrochronologie",
      url: "https://www.nps.gov/articles/archeology-dendrochronology.htm",
    },
  },
  {
    id: "dietfibre",
    canvasHeight: 230,
    title: "Ce que deviennent les fibres",
    paths: [
      "/alimentation-et-nutrition/nutriments/fibres-alimentaires/fibres-alimentaires-roles-et-apports",
    ],
    steps: [
      {
        label: "Traverser",
        caption:
          "Les enzymes digestives humaines ne décomposent pas les fibres comme elles décomposent l’amidon.",
        detail:
          "Les enzymes digestives humaines ne décomposent pas les fibres comme elles décomposent l’amidon. Voie simplifiée ; toutes les fibres ne sont pas fermentées de la même façon. Aucun effet individuel ni apport recommandé n’est quantifié.",
      },
      {
        label: "Fermenter",
        caption:
          "Dans le côlon, certains microbes peuvent transformer des fibres fermentescibles en petites molécules.",
        detail:
          "Dans le côlon, certains microbes peuvent transformer des fibres fermentescibles en petites molécules. Voie simplifiée ; toutes les fibres ne sont pas fermentées de la même façon. Aucun effet individuel ni apport recommandé n’est quantifié.",
      },
      {
        label: "Échanger",
        caption:
          "Parmi les produits de fermentation, des acides gras à chaîne courte peuvent être utilisés par les cellules du côlon.",
        detail:
          "Parmi les produits de fermentation, des acides gras à chaîne courte peuvent être utilisés par les cellules du côlon. Voie simplifiée ; toutes les fibres ne sont pas fermentées de la même façon. Aucun effet individuel ni apport recommandé n’est quantifié.",
      },
    ],
    limit:
      "Voie simplifiée ; toutes les fibres ne sont pas fermentées de la même façon. Aucun effet individuel ni apport recommandé n’est quantifié.",
    source: {
      title: "Inserm — Microbiote intestinal",
      url: "https://www.inserm.fr/dossier/microbiote-intestinal-flore-intestinale/",
    },
  },
  {
    id: "essentialamino",
    canvasHeight: 230,
    title: "Des briques à réassembler",
    paths: [
      "/alimentation-et-nutrition/nutriments/macronutriments/pourquoi-certains-acides-amines-doivent-ils-venir-de-notre-assiette",
    ],
    steps: [
      {
        label: "Digérer",
        caption:
          "Les protéines alimentaires sont découpées en acides aminés avant leur absorption.",
        detail:
          "Les protéines alimentaires sont découpées en acides aminés avant leur absorption. Couleurs symboliques, pas une protéine réelle ni une règle de menu. La qualité protéique dépend aussi des quantités et de la digestibilité.",
      },
      {
        label: "Absorber",
        caption:
          "Les acides aminés issus de la digestion sont absorbés et deviennent disponibles pour les cellules.",
        detail:
          "Les acides aminés issus de la digestion sont absorbés et deviennent disponibles pour les cellules. Couleurs symboliques, pas une protéine réelle ni une règle de menu. La qualité protéique dépend aussi des quantités et de la digestibilité.",
      },
      {
        label: "Réassembler",
        caption:
          "Les cellules réassemblent des protéines ; neuf acides aminés indispensables doivent venir de l’alimentation.",
        detail:
          "Les cellules réassemblent des protéines ; neuf acides aminés indispensables doivent venir de l’alimentation. Couleurs symboliques, pas une protéine réelle ni une règle de menu. La qualité protéique dépend aussi des quantités et de la digestibilité.",
      },
    ],
    limit:
      "Couleurs symboliques, pas une protéine réelle ni une règle de menu. La qualité protéique dépend aussi des quantités et de la digestibilité.",
    source: {
      title: "Société suisse de nutrition — Protéines",
      url: "https://www.sge-ssn.ch/media/fv0a5hxf/protéines-complément-2025.pdf",
    },
  },
  {
    id: "nutritionlabel",
    canvasHeight: 230,
    title: "Lire une base commune",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/reperes-nutritionnels/lecture-etiquettes-alimentaires",
    ],
    steps: [
      {
        label: "Repérer",
        caption:
          "Deux produits fictifs affichent leur teneur en sucres pour une même quantité de 100 g.",
        detail:
          "Deux produits fictifs affichent leur teneur en sucres pour une même quantité de 100 g. Étiquettes inventées, seul le sucre est détaillé dans le dessin. Le tableau complet comporte d’autres informations ; aucune note de santé n’est déduite.",
      },
      {
        label: "Comparer",
        caption:
          "Pour comparer deux produits, les valeurs exprimées pour 100 g fournissent une même base de quantité.",
        detail:
          "Pour comparer deux produits, les valeurs exprimées pour 100 g fournissent une même base de quantité. Étiquettes inventées, seul le sucre est détaillé dans le dessin. Le tableau complet comporte d’autres informations ; aucune note de santé n’est déduite.",
      },
      {
        label: "Calculer",
        caption:
          "Une portion de 30 g d’un produit contenant 10 g de sucres pour 100 g apporte 3 g de sucres.",
        detail:
          "Une portion de 30 g d’un produit contenant 10 g de sucres pour 100 g apporte 3 g de sucres. Étiquettes inventées, seul le sucre est détaillé dans le dessin. Le tableau complet comporte d’autres informations ; aucune note de santé n’est déduite.",
      },
    ],
    limit:
      "Étiquettes inventées, seul le sucre est détaillé dans le dessin. Le tableau complet comporte d’autres informations ; aucune note de santé n’est déduite.",
    source: {
      title: "Commission européenne — Déclaration nutritionnelle",
      url: "https://food.ec.europa.eu/food-safety/labelling-and-nutrition/food-information-consumers-legislation/nutrition-labelling_en",
    },
  },
  {
    id: "barrierpack",
    canvasHeight: 230,
    title: "Ce que fait l’emballage",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/conservation/emballages-alimentaires",
    ],
    steps: [
      {
        label: "Protéger",
        caption:
          "Une enveloppe fermée peut former une barrière aux salissures et aux contaminations extérieures.",
        detail:
          "Une enveloppe fermée peut former une barrière aux salissures et aux contaminations extérieures. Emballages conceptuels, aucune durée de conservation. Vide et atmosphère modifiée ne remplacent ni un traitement validé ni les consignes du produit.",
      },
      {
        label: "Retirer l’air",
        caption:
          "Le conditionnement sous vide retire une grande partie de l’air, sans stériliser l’aliment.",
        detail:
          "Le conditionnement sous vide retire une grande partie de l’air, sans stériliser l’aliment. Emballages conceptuels, aucune durée de conservation. Vide et atmosphère modifiée ne remplacent ni un traitement validé ni les consignes du produit.",
      },
      {
        label: "Rester vigilant",
        caption:
          "Des microbes capables de se développer sans oxygène peuvent subsister ; les conditions de conservation restent nécessaires.",
        detail:
          "Des microbes capables de se développer sans oxygène peuvent subsister ; les conditions de conservation restent nécessaires. Emballages conceptuels, aucune durée de conservation. Vide et atmosphère modifiée ne remplacent ni un traitement validé ni les consignes du produit.",
      },
    ],
    limit:
      "Emballages conceptuels, aucune durée de conservation. Vide et atmosphère modifiée ne remplacent ni un traitement validé ni les consignes du produit.",
    source: {
      title: "Food Standards Agency — Emballage et dangers alimentaires",
      url: "https://myhaccp.food.gov.uk/help/guidance/preparatory-stage-e-describe-product",
    },
  },
  {
    id: "pasteurheat",
    canvasHeight: 230,
    title: "Chauffer ne suffit pas à tout",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/conservation/pasteurisation-et-sterilisation",
    ],
    steps: [
      {
        label: "Avant",
        caption: "Un aliment peut contenir des cellules microbiennes et des spores résistantes.",
        detail:
          "Un aliment peut contenir des cellules microbiennes et des spores résistantes. Principe comparatif, pas une recette de conserve. Sécurité et stabilité dépendent du couple durée-température, du produit et de l’emballage.",
      },
      {
        label: "Pasteuriser",
        caption:
          "Un traitement de pasteurisation adapté détruit des cellules végétatives ciblées mais peut laisser des spores viables.",
        detail:
          "Un traitement de pasteurisation adapté détruit des cellules végétatives ciblées mais peut laisser des spores viables. Principe comparatif, pas une recette de conserve. Sécurité et stabilité dépendent du couple durée-température, du produit et de l’emballage.",
      },
      {
        label: "Stabiliser",
        caption:
          "Un traitement industriel plus intense et un conditionnement adapté peuvent permettre une stabilité hors du froid.",
        detail:
          "Un traitement industriel plus intense et un conditionnement adapté peuvent permettre une stabilité hors du froid. Principe comparatif, pas une recette de conserve. Sécurité et stabilité dépendent du couple durée-température, du produit et de l’emballage.",
      },
    ],
    limit:
      "Principe comparatif, pas une recette de conserve. Sécurité et stabilité dépendent du couple durée-température, du produit et de l’emballage.",
    source: {
      title: "FDA — Traitements thermiques et spores",
      url: "https://www.fda.gov/food/outbreaks-foodborne-illness/post-outbreak-response-activities-clostridium-botulinum-illnesses-associated-consumption-powdered",
    },
  },
  {
    id: "steamengine",
    canvasHeight: 230,
    title: "De la pression à la rotation",
    paths: ["/energie/energies-fossiles-et-nucleaire/charbon/machine-vapeur"],
    steps: [
      {
        label: "Admettre",
        caption: "Dans cet exemple de moteur à vapeur, la vapeur arrive d’un côté du piston.",
        detail:
          "Dans cet exemple de moteur à vapeur, la vapeur arrive d’un côté du piston. Modèle à double effet simplifié, pas la machine atmosphérique de Newcomen. Chaudière, soupapes et condenseur omis ; schéma non constructif.",
      },
      {
        label: "Pousser",
        caption:
          "La différence de pression déplace le piston, qui entraîne la bielle et la manivelle.",
        detail:
          "La différence de pression déplace le piston, qui entraîne la bielle et la manivelle. Modèle à double effet simplifié, pas la machine atmosphérique de Newcomen. Chaudière, soupapes et condenseur omis ; schéma non constructif.",
      },
      {
        label: "Revenir",
        caption:
          "La distribution admet la vapeur de l’autre côté et laisse sortir la vapeur du premier côté.",
        detail:
          "La distribution admet la vapeur de l’autre côté et laisse sortir la vapeur du premier côté. Modèle à double effet simplifié, pas la machine atmosphérique de Newcomen. Chaudière, soupapes et condenseur omis ; schéma non constructif.",
      },
    ],
    limit:
      "Modèle à double effet simplifié, pas la machine atmosphérique de Newcomen. Chaudière, soupapes et condenseur omis ; schéma non constructif.",
    source: {
      title: "Science Museum — Machine à vapeur de Boulton et Watt",
      url: "https://collection.sciencemuseumgroup.org.uk/people/ap24508/watt-james",
    },
  },
  {
    id: "biogasdigester",
    canvasHeight: 230,
    title: "Du déchet au biogaz",
    paths: ["/energie/energies-fossiles-et-nucleaire/hydrocarbures/biogaz-gaz-sans-gisement"],
    steps: [
      {
        label: "Alimenter",
        caption:
          "Des matières organiques entrent dans une cuve fermée où le milieu est privé d’oxygène.",
        detail:
          "Des matières organiques entrent dans une cuve fermée où le milieu est privé d’oxygène. Installation conceptuelle non constructible. Le biogaz contient aussi du CO₂ et des impuretés ; il est inflammable et ne doit pas être assimilé à un gaz pur.",
      },
      {
        label: "Transformer",
        caption:
          "Plusieurs groupes de microbes dégradent la matière ; des archées produisent finalement du méthane.",
        detail:
          "Plusieurs groupes de microbes dégradent la matière ; des archées produisent finalement du méthane. Installation conceptuelle non constructible. Le biogaz contient aussi du CO₂ et des impuretés ; il est inflammable et ne doit pas être assimilé à un gaz pur.",
      },
      {
        label: "Récupérer",
        caption:
          "Le biogaz est collecté en haut et le digestat sort séparément ; leurs usages demandent des traitements adaptés.",
        detail:
          "Le biogaz est collecté en haut et le digestat sort séparément ; leurs usages demandent des traitements adaptés. Installation conceptuelle non constructible. Le biogaz contient aussi du CO₂ et des impuretés ; il est inflammable et ne doit pas être assimilé à un gaz pur.",
      },
    ],
    limit:
      "Installation conceptuelle non constructible. Le biogaz contient aussi du CO₂ et des impuretés ; il est inflammable et ne doit pas être assimilé à un gaz pur.",
    source: {
      title: "EPA — Fonctionnement de la méthanisation",
      url: "https://www.epa.gov/agstar/how-does-anaerobic-digestion-work",
    },
  },
  {
    id: "pumpedstorage",
    canvasHeight: 230,
    title: "Stocker avec deux bassins",
    paths: ["/energie/energies-renouvelables/hydraulique/hydroelectricite-et-stockage-par-pompage"],
    steps: [
      {
        label: "Pomper",
        caption:
          "En consommant de l’électricité, une pompe remonte l’eau du bassin inférieur vers le bassin supérieur.",
        detail:
          "En consommant de l’électricité, une pompe remonte l’eau du bassin inférieur vers le bassin supérieur. Même volume d’eau symbolique dans les trois vues, hors apports et évaporation. La station ne crée pas d’énergie supplémentaire.",
      },
      {
        label: "Attendre",
        caption:
          "L’énergie est stockée sous forme d’énergie potentielle de l’eau située en hauteur.",
        detail:
          "L’énergie est stockée sous forme d’énergie potentielle de l’eau située en hauteur. Même volume d’eau symbolique dans les trois vues, hors apports et évaporation. La station ne crée pas d’énergie supplémentaire.",
      },
      {
        label: "Turbiner",
        caption:
          "L’eau redescend dans la turbine et l’alternateur fournit de l’électricité, avec des pertes sur le cycle.",
        detail:
          "L’eau redescend dans la turbine et l’alternateur fournit de l’électricité, avec des pertes sur le cycle. Même volume d’eau symbolique dans les trois vues, hors apports et évaporation. La station ne crée pas d’énergie supplémentaire.",
      },
    ],
    limit:
      "Même volume d’eau symbolique dans les trois vues, hors apports et évaporation. La station ne crée pas d’énergie supplémentaire.",
    source: {
      title: "Department of Energy — Stockage hydraulique par pompage",
      url: "https://www.energy.gov/cmei/water/pumped-storage-hydropower",
    },
  },
  {
    id: "tidalturbine",
    canvasHeight: 230,
    title: "L’énergie d’un courant marin",
    paths: ["/energie/energies-renouvelables/hydraulique/les-hydroliennes-l-eolien-sous-marin"],
    steps: [
      {
        label: "Un courant",
        caption:
          "Un courant de marée transporte de l’énergie cinétique à travers un passage marin.",
        detail:
          "Un courant de marée transporte de l’énergie cinétique à travers un passage marin. Hydrolienne conceptuelle sans barrage. Le courant varie et peut s’inverser ; tous les modèles ne gèrent pas cette inversion de la même manière.",
      },
      {
        label: "Une turbine",
        caption:
          "L’écoulement entraîne les pales de l’hydrolienne qui transmettent un couple à la génératrice.",
        detail:
          "L’écoulement entraîne les pales de l’hydrolienne qui transmettent un couple à la génératrice. Hydrolienne conceptuelle sans barrage. Le courant varie et peut s’inverser ; tous les modèles ne gèrent pas cette inversion de la même manière.",
      },
      {
        label: "Une liaison",
        caption:
          "La génératrice produit de l’électricité acheminée vers la côte par un câble sous-marin.",
        detail:
          "La génératrice produit de l’électricité acheminée vers la côte par un câble sous-marin. Hydrolienne conceptuelle sans barrage. Le courant varie et peut s’inverser ; tous les modèles ne gèrent pas cette inversion de la même manière.",
      },
    ],
    limit:
      "Hydrolienne conceptuelle sans barrage. Le courant varie et peut s’inverser ; tous les modèles ne gèrent pas cette inversion de la même manière.",
    source: {
      title: "Ministère de la Transition écologique — Énergies marines",
      url: "https://www.ecologie.gouv.fr/politiques-publiques/energies-marines-renouvelables-hors-eolien-mer",
    },
  },
  {
    id: "batteryage",
    canvasHeight: 230,
    title: "Pourquoi la capacité baisse",
    paths: ["/energie/reseaux-et-stockage/batteries/pourquoi-une-batterie-s-use-avec-le-temps"],
    steps: [
      {
        label: "Une interface",
        caption:
          "Une couche protectrice se forme à l’interface de l’électrode négative et de l’électrolyte.",
        detail:
          "Une couche protectrice se forme à l’interface de l’électrode négative et de l’électrolyte. Deux mécanismes parmi d’autres, sans échelle de temps ni prédiction d’autonomie. Particules et couches très agrandies.",
      },
      {
        label: "Piéger du lithium",
        caption:
          "L’épaississement de cette couche peut immobiliser une partie du lithium et augmenter la résistance.",
        detail:
          "L’épaississement de cette couche peut immobiliser une partie du lithium et augmenter la résistance. Deux mécanismes parmi d’autres, sans échelle de temps ni prédiction d’autonomie. Particules et couches très agrandies.",
      },
      {
        label: "Perdre du contact",
        caption:
          "Des fissures et des zones isolées dans les matériaux peuvent aussi réduire la capacité utilisable.",
        detail:
          "Des fissures et des zones isolées dans les matériaux peuvent aussi réduire la capacité utilisable. Deux mécanismes parmi d’autres, sans échelle de temps ni prédiction d’autonomie. Particules et couches très agrandies.",
      },
    ],
    limit:
      "Deux mécanismes parmi d’autres, sans échelle de temps ni prédiction d’autonomie. Particules et couches très agrandies.",
    source: {
      title: "Argonne / DOE — Mécanismes de dégradation lithium-ion",
      url: "https://www.energy.gov/sites/prod/files/2014/03/f13/es032_abraham_2013_p.pdf",
    },
  },
  {
    id: "rootmicrobes",
    canvasHeight: 230,
    title: "Un réseau autour des racines",
    paths: [
      "/sciences-du-vivant-appliquees/agronomie/sols-et-fertilite/comment-les-microbes-du-sol-aident-ils-les-plantes-a-pousser",
    ],
    steps: [
      {
        label: "Une racine",
        caption:
          "La plante libère dans la rhizosphère des composés carbonés utilisables par des microbes du sol.",
        detail:
          "La plante libère dans la rhizosphère des composés carbonés utilisables par des microbes du sol. Exemple de mycorhize, pas de fixation d’azote par le champignon. Toutes les plantes et tous les microbes ne participent pas à cette association.",
      },
      {
        label: "Un champignon",
        caption:
          "Dans une association mycorhizienne, des filaments fongiques explorent le sol au-delà de la racine.",
        detail:
          "Dans une association mycorhizienne, des filaments fongiques explorent le sol au-delà de la racine. Exemple de mycorhize, pas de fixation d’azote par le champignon. Toutes les plantes et tous les microbes ne participent pas à cette association.",
      },
      {
        label: "Un échange",
        caption:
          "La plante fournit du carbone au champignon ; celui-ci peut lui transférer de l’eau et des éléments minéraux.",
        detail:
          "La plante fournit du carbone au champignon ; celui-ci peut lui transférer de l’eau et des éléments minéraux. Exemple de mycorhize, pas de fixation d’azote par le champignon. Toutes les plantes et tous les microbes ne participent pas à cette association.",
      },
    ],
    limit:
      "Exemple de mycorhize, pas de fixation d’azote par le champignon. Toutes les plantes et tous les microbes ne participent pas à cette association.",
    source: {
      title: "INRAE — Les échanges mycorhiziens",
      url: "https://www.inrae.fr/actualites/langage-plus-complexe-que-prevu-loeuvre-plus-ancienne-symbiose-terrestre",
    },
  },
  {
    id: "ultrasoundecho",
    canvasHeight: 230,
    title: "Mesurer le retour d’un son",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/imagerie-medicale/comment-l-echographie-voit-elle-un-bebe-dans-le-ventre-grace-au-son",
    ],
    steps: [
      {
        label: "Émettre",
        caption: "La sonde produit une impulsion ultrasonore qui se propage dans les tissus.",
        detail:
          "La sonde produit une impulsion ultrasonore qui se propage dans les tissus. Une ligne de mesure simplifiée, pas une image de diagnostic. Une partie du son continue en profondeur ; la vitesse varie selon les tissus.",
      },
      {
        label: "Recevoir",
        caption:
          "Une partie du son est réfléchie aux interfaces ; la sonde détecte les échos qui reviennent.",
        detail:
          "Une partie du son est réfléchie aux interfaces ; la sonde détecte les échos qui reviennent. Une ligne de mesure simplifiée, pas une image de diagnostic. Une partie du son continue en profondeur ; la vitesse varie selon les tissus.",
      },
      {
        label: "Localiser",
        caption:
          "Avec une vitesse de propagation supposée et le temps aller-retour, l’appareil estime la profondeur de l’interface.",
        detail:
          "Avec une vitesse de propagation supposée et le temps aller-retour, l’appareil estime la profondeur de l’interface. Une ligne de mesure simplifiée, pas une image de diagnostic. Une partie du son continue en profondeur ; la vitesse varie selon les tissus.",
      },
    ],
    limit:
      "Une ligne de mesure simplifiée, pas une image de diagnostic. Une partie du son continue en profondeur ; la vitesse varie selon les tissus.",
    source: {
      title: "NIH NIBIB — Ultrasons et échographie",
      url: "https://www.nibib.nih.gov/science-education/science-topics/ultrasound",
    },
  },
  {
    id: "mriprotons",
    canvasHeight: 230,
    title: "Le signal de l’IRM",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/imagerie-medicale/comment-un-aimant-geant-et-des-ondes-radio-fabriquent-ils-une-image-de-l-interieur-du-corps",
    ],
    steps: [
      {
        label: "Équilibrer",
        caption:
          "Le champ principal crée une petite aimantation nette dans les tissus riches en noyaux d’hydrogène.",
        detail:
          "Le champ principal crée une petite aimantation nette dans les tissus riches en noyaux d’hydrogène. Flèche représentant une aimantation collective, pas tous les protons alignés. Précession et relaxation sont simplifiées ; aucune interprétation clinique.",
      },
      {
        label: "Exciter",
        caption:
          "Une impulsion radiofréquence peut faire basculer cette aimantation nette hors de son équilibre.",
        detail:
          "Une impulsion radiofréquence peut faire basculer cette aimantation nette hors de son équilibre. Flèche représentant une aimantation collective, pas tous les protons alignés. Précession et relaxation sont simplifiées ; aucune interprétation clinique.",
      },
      {
        label: "Détecter",
        caption:
          "Le signal mesuré et son évolution, localisés grâce aux gradients, servent à reconstruire une image.",
        detail:
          "Le signal mesuré et son évolution, localisés grâce aux gradients, servent à reconstruire une image. Flèche représentant une aimantation collective, pas tous les protons alignés. Précession et relaxation sont simplifiées ; aucune interprétation clinique.",
      },
    ],
    limit:
      "Flèche représentant une aimantation collective, pas tous les protons alignés. Précession et relaxation sont simplifiées ; aucune interprétation clinique.",
    source: {
      title: "NIH NIBIB — Imagerie par résonance magnétique",
      url: "https://www.nibib.nih.gov/science-education/science-topics/magnetic-resonance-imaging-mri",
    },
  },
  {
    id: "antibiotictarget",
    canvasHeight: 230,
    title: "Viser une paroi bactérienne",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/pharmacologie/comment-un-antibiotique-tue-t-il-les-bacteries-sans-abimer-nos-cellules",
    ],
    steps: [
      {
        label: "Une paroi",
        caption:
          "Une bactérie possède une paroi de peptidoglycane autour de sa membrane, à la différence d’une cellule humaine.",
        detail:
          "Une bactérie possède une paroi de peptidoglycane autour de sa membrane, à la différence d’une cellule humaine. Exemple des antibiotiques ciblant la paroi, pas de tous les antibiotiques. Résistance et effets indésirables possibles ; aucune consigne de traitement.",
      },
      {
        label: "Une cible",
        caption:
          "Certains antibiotiques bloquent des enzymes impliquées dans la construction de cette paroi.",
        detail:
          "Certains antibiotiques bloquent des enzymes impliquées dans la construction de cette paroi. Exemple des antibiotiques ciblant la paroi, pas de tous les antibiotiques. Résistance et effets indésirables possibles ; aucune consigne de traitement.",
      },
      {
        label: "Une fragilité",
        caption:
          "Une bactérie sensible en croissance peut être fragilisée ; les virus ne possèdent pas cette cible.",
        detail:
          "Une bactérie sensible en croissance peut être fragilisée ; les virus ne possèdent pas cette cible. Exemple des antibiotiques ciblant la paroi, pas de tous les antibiotiques. Résistance et effets indésirables possibles ; aucune consigne de traitement.",
      },
    ],
    limit:
      "Exemple des antibiotiques ciblant la paroi, pas de tous les antibiotiques. Résistance et effets indésirables possibles ; aucune consigne de traitement.",
    source: {
      title: "Institut Pasteur — Antibiotiques et résistance",
      url: "https://www.pasteur.fr/fr/en-ce-moment/nos-actualites/dossiers/antibiotiques-quand-les-bacteries-font-de-la-resistance",
    },
  },
  {
    id: "mrnavaccine",
    canvasHeight: 230,
    title: "Une instruction temporaire",
    paths: [
      "/corps-humain-et-sante/prevention-et-sante-publique/vaccination/vaccins-a-arn-messager",
    ],
    steps: [
      {
        label: "Délivrer",
        caption:
          "Des particules lipidiques aident à délivrer l’ARN messager vaccinal dans le cytoplasme.",
        detail:
          "Des particules lipidiques aident à délivrer l’ARN messager vaccinal dans le cytoplasme. Parcours simplifié sans virus entier. La réponse mobilise plusieurs cellules ; le dessin ne fixe ni efficacité ni calendrier vaccinal.",
      },
      {
        label: "Traduire",
        caption:
          "Des ribosomes lisent cet ARN pour produire un antigène ; ce mécanisme ne demande pas d’entrer dans le noyau.",
        detail:
          "Des ribosomes lisent cet ARN pour produire un antigène ; ce mécanisme ne demande pas d’entrer dans le noyau. Parcours simplifié sans virus entier. La réponse mobilise plusieurs cellules ; le dessin ne fixe ni efficacité ni calendrier vaccinal.",
      },
      {
        label: "Reconnaître",
        caption:
          "L’antigène participe à l’apprentissage immunitaire, tandis que l’ARN est dégradé.",
        detail:
          "L’antigène participe à l’apprentissage immunitaire, tandis que l’ARN est dégradé. Parcours simplifié sans virus entier. La réponse mobilise plusieurs cellules ; le dessin ne fixe ni efficacité ni calendrier vaccinal.",
      },
    ],
    limit:
      "Parcours simplifié sans virus entier. La réponse mobilise plusieurs cellules ; le dessin ne fixe ni efficacité ni calendrier vaccinal.",
    source: {
      title: "NHGRI — Comprendre les vaccins à ARN messager",
      url: "https://www.genome.gov/about-genomics/fact-sheets/Understanding-COVID-19-mRNA-Vaccines",
    },
  },
  {
    id: "safetymargin",
    canvasHeight: 230,
    title: "Prévoir une marge",
    paths: [
      "/technologies-et-ingenierie/conception-et-fiabilite/defaillances-et-retour-dexperience/pourquoi-construit-on-les-batiments-et-les-machines-plus-solides-que-necessaire",
    ],
    steps: [
      {
        label: "Estimer",
        caption:
          "La conception distingue la sollicitation prévue et la résistance disponible de la pièce.",
        detail:
          "La conception distingue la sollicitation prévue et la résistance disponible de la pièce. Exemple numérique pédagogique, sans unité physique ni coefficient réglementaire. Le dimensionnement réel utilise des règles propres à chaque structure.",
      },
      {
        label: "Réserver",
        caption:
          "Dans cet exemple fictif, une résistance de dix unités face à une charge de cinq donne un rapport de deux.",
        detail:
          "Dans cet exemple fictif, une résistance de dix unités face à une charge de cinq donne un rapport de deux. Exemple numérique pédagogique, sans unité physique ni coefficient réglementaire. Le dimensionnement réel utilise des règles propres à chaque structure.",
      },
      {
        label: "Vérifier",
        caption:
          "Si la sollicitation augmente, la marge disponible diminue ; les incertitudes doivent être prises en compte.",
        detail:
          "Si la sollicitation augmente, la marge disponible diminue ; les incertitudes doivent être prises en compte. Exemple numérique pédagogique, sans unité physique ni coefficient réglementaire. Le dimensionnement réel utilise des règles propres à chaque structure.",
      },
    ],
    limit:
      "Exemple numérique pédagogique, sans unité physique ni coefficient réglementaire. Le dimensionnement réel utilise des règles propres à chaque structure.",
    source: {
      title: "NASA — Charge et coefficient de sécurité",
      url: "https://llis.nasa.gov/lesson/819",
    },
  },
  {
    id: "concreteprint",
    canvasHeight: 230,
    title: "Déposer des couches",
    paths: [
      "/technologies-et-ingenierie/genie-civil/materiaux/peut-on-vraiment-construire-une-maison-en-l-imprimant-en-beton",
    ],
    steps: [
      {
        label: "Une trajectoire",
        caption:
          "Une buse suit une trajectoire calculée et dépose un cordon de matériau cimentaire.",
        detail:
          "Une buse suit une trajectoire calculée et dépose un cordon de matériau cimentaire. Paroi illustrative avec ouverture ; couches agrandies. Stabilité, adhérence et conformité doivent être vérifiées ; ce n’est pas un plan de bâtiment.",
      },
      {
        label: "Superposer",
        caption:
          "Des passages successifs empilent les cordons ; la couche inférieure doit supporter les suivantes.",
        detail:
          "Des passages successifs empilent les cordons ; la couche inférieure doit supporter les suivantes. Paroi illustrative avec ouverture ; couches agrandies. Stabilité, adhérence et conformité doivent être vérifiées ; ce n’est pas un plan de bâtiment.",
      },
      {
        label: "Construire",
        caption:
          "L’impression peut former des parois, mais ne fournit pas à elle seule les armatures, le toit ou les réseaux.",
        detail:
          "L’impression peut former des parois, mais ne fournit pas à elle seule les armatures, le toit ou les réseaux. Paroi illustrative avec ouverture ; couches agrandies. Stabilité, adhérence et conformité doivent être vérifiées ; ce n’est pas un plan de bâtiment.",
      },
    ],
    limit:
      "Paroi illustrative avec ouverture ; couches agrandies. Stabilité, adhérence et conformité doivent être vérifiées ; ce n’est pas un plan de bâtiment.",
    source: {
      title: "CORDIS — Impression 3D de béton",
      url: "https://cordis.europa.eu/article/id/435273-3d-printed-lightweight-concrete-for-better-building-insulation/fr",
    },
  },
  {
    id: "topologyshape",
    canvasHeight: 230,
    title: "Où garder la matière ?",
    paths: [
      "/technologies-et-ingenierie/genie-civil/structures/comment-un-ordinateur-decide-t-il-ou-mettre-la-matiere-pour-faire-des-pieces-plus-legeres",
    ],
    steps: [
      {
        label: "Définir",
        caption:
          "Le calcul part d’un volume disponible, de points d’appui, de charges et de contraintes.",
        detail:
          "Le calcul part d’un volume disponible, de points d’appui, de charges et de contraintes. Forme illustrative, aucun résultat de calcul présenté. La même pièce ne convient pas à n’importe quelle charge ; rigidité et résistance sont distinctes.",
      },
      {
        label: "Répartir",
        caption:
          "Une analyse aide à conserver de la matière dans certaines zones et à en retirer dans d’autres.",
        detail:
          "Une analyse aide à conserver de la matière dans certaines zones et à en retirer dans d’autres. Forme illustrative, aucun résultat de calcul présenté. La même pièce ne convient pas à n’importe quelle charge ; rigidité et résistance sont distinctes.",
      },
      {
        label: "Contrôler",
        caption:
          "Une forme allégée doit encore être validée pour les charges retenues et pour son procédé de fabrication.",
        detail:
          "Une forme allégée doit encore être validée pour les charges retenues et pour son procédé de fabrication. Forme illustrative, aucun résultat de calcul présenté. La même pièce ne convient pas à n’importe quelle charge ; rigidité et résistance sont distinctes.",
      },
    ],
    limit:
      "Forme illustrative, aucun résultat de calcul présenté. La même pièce ne convient pas à n’importe quelle charge ; rigidité et résistance sont distinctes.",
    source: {
      title: "OpenScience — Optimisation topologique par la méthode SIMP",
      url: "https://openscience.fr/Topological-optimization-of-a-multibody-system-by-the-SIMP-method",
    },
  },
  {
    id: "deploystructure",
    canvasHeight: 230,
    title: "Du pliage au déploiement",
    paths: [
      "/technologies-et-ingenierie/genie-civil/structures/comment-une-structure-peut-elle-tenir-dans-un-sac-puis-se-deployer-ou-se-gonfler",
    ],
    steps: [
      {
        label: "Replier",
        caption:
          "Des éléments articulés occupent peu de place lorsqu’ils sont repliés le long d’un axe.",
        detail:
          "Des éléments articulés occupent peu de place lorsqu’ils sont repliés le long d’un axe. Exemple inspiré d’un parapluie, pas une structure gonflable. Les mêmes barres gardent leur longueur ; articulation et verrouillage simplifiés.",
      },
      {
        label: "Déployer",
        caption:
          "Le mouvement des articulations augmente l’ouverture de la structure sans allonger ses barres.",
        detail:
          "Le mouvement des articulations augmente l’ouverture de la structure sans allonger ses barres. Exemple inspiré d’un parapluie, pas une structure gonflable. Les mêmes barres gardent leur longueur ; articulation et verrouillage simplifiés.",
      },
      {
        label: "Stabiliser",
        caption:
          "Une structure ouverte demande un dispositif de maintien ou de verrouillage adapté à ses charges.",
        detail:
          "Une structure ouverte demande un dispositif de maintien ou de verrouillage adapté à ses charges. Exemple inspiré d’un parapluie, pas une structure gonflable. Les mêmes barres gardent leur longueur ; articulation et verrouillage simplifiés.",
      },
    ],
    limit:
      "Exemple inspiré d’un parapluie, pas une structure gonflable. Les mêmes barres gardent leur longueur ; articulation et verrouillage simplifiés.",
    source: {
      title: "NASA — Déploiement d’un parapluie spatial",
      url: "https://www.jpl.nasa.gov/edu/resources/project/space-origami-make-your-own-starshade/",
    },
  },
  {
    id: "radarecho",
    canvasHeight: 230,
    title: "L’aller-retour d’une onde",
    paths: [
      "/technologies-et-ingenierie/robotique/perception/comment-un-radar-repere-t-il-un-avion-ou-un-orage-sans-les-voir",
    ],
    steps: [
      {
        label: "Émettre",
        caption:
          "Le radar émet une impulsion radio vers une cible ; le trajet demande un temps non nul.",
        detail:
          "Le radar émet une impulsion radio vers une cible ; le trajet demande un temps non nul. Trajet conceptuel dans l’air ; échelles et intensités non respectées. Le Doppler fournit une information de vitesse radiale, non détaillée ici.",
      },
      {
        label: "Recevoir",
        caption: "Une partie de l’énergie est renvoyée vers l’antenne, qui détecte l’écho.",
        detail:
          "Une partie de l’énergie est renvoyée vers l’antenne, qui détecte l’écho. Trajet conceptuel dans l’air ; échelles et intensités non respectées. Le Doppler fournit une information de vitesse radiale, non détaillée ici.",
      },
      {
        label: "Mesurer",
        caption:
          "La distance correspond à la vitesse de propagation multipliée par le temps aller-retour, puis divisée par deux.",
        detail:
          "La distance correspond à la vitesse de propagation multipliée par le temps aller-retour, puis divisée par deux. Trajet conceptuel dans l’air ; échelles et intensités non respectées. Le Doppler fournit une information de vitesse radiale, non détaillée ici.",
      },
    ],
    limit:
      "Trajet conceptuel dans l’air ; échelles et intensités non respectées. Le Doppler fournit une information de vitesse radiale, non détaillée ici.",
    source: {
      title: "NOAA — Fonctionnement d’un radar",
      url: "https://www.noaa.gov/jetstream/doppler/how-radar-works",
    },
  },
] satisfies LessonDiagramSpec[];
