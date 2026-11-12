import type { LessonDiagramSpec } from "./registry";

/** Exact paths reserved in the isolated backend against GitHub 60fde10. */
export const BATCH50_DIAGRAMS = [
  {
    canvasHeight: 230,
    id: "newtonmotion",
    title: "Des forces au changement de mouvement",
    paths: ["/sciences-fondamentales/physique/mecanique/lois-de-newton-mecanique-classique"],
    steps: [
      {
        label: "Sans force nette",
        caption: "Le chariot garde sa vitesse lorsque les forces horizontales se compensent.",
        detail:
          "Une vitesse constante peut être non nulle : l’absence d’accélération ne signifie pas l’immobilité.",
      },
      {
        label: "Pousser",
        caption: "Une force résultante vers la droite accélère le même chariot dans ce sens.",
        detail:
          "Pour une même masse, c’est la résultante des forces qui détermine le changement de vitesse.",
      },
      {
        label: "Deux objets",
        caption:
          "Les deux chariots se poussent avec des forces opposées, appliquées sur des objets différents.",
        detail:
          "Les forces forment une paire d’interaction ; elles ne s’annulent pas sur un même chariot puisqu’elles agissent sur deux corps.",
      },
    ],
    limit:
      "Vue horizontale dans un référentiel inertiel ; poids et réaction du support ne sont pas dessinés.",
    source: {
      title: "NASA — Newton’s laws",
      url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/newtons-laws-of-motion/",
    },
  },
  {
    canvasHeight: 230,
    id: "energyball",
    title: "Suivre l’énergie d’une balle",
    paths: ["/sciences-fondamentales/physique/mecanique/energie-et-conservation"],
    steps: [
      {
        label: "En hauteur",
        caption: "La balle immobile possède une énergie de position par rapport au sol.",
        detail:
          "La hauteur fixe une réserve d’énergie potentielle gravitationnelle relativement au niveau de référence choisi.",
      },
      {
        label: "Pendant la chute",
        caption: "L’énergie de position diminue et l’énergie de mouvement augmente.",
        detail:
          "En tombant, la balle accélère tandis que son altitude diminue ; les barres indiquent un échange qualitatif entre deux formes.",
      },
      {
        label: "Après le choc",
        caption:
          "L’énergie se retrouve aussi dans la déformation, le son et l’échauffement du milieu.",
        detail:
          "Un rebond moins haut n’a pas détruit l’énergie : une part a été transférée aux déformations et à l’environnement.",
      },
    ],
    limit:
      "Bilan qualitatif du système balle, Terre et environnement, sans échelle de vitesse ni hauteur de rebond.",
    source: {
      title: "Energy",
      url: "https://www.britannica.com/science/energy",
    },
  },
  {
    canvasHeight: 230,
    id: "heatpaths",
    title: "Trois façons de transférer de l’énergie",
    paths: ["/sciences-fondamentales/physique/thermodynamique/conduction-convection-rayonnement"],
    steps: [
      {
        label: "Conduction",
        caption: "Dans une barre métallique, l’énergie se transmet de proche en proche.",
        detail:
          "Dans le métal, les interactions microscopiques transmettent l’énergie du côté chaud vers le côté froid.",
      },
      {
        label: "Convection",
        caption: "Dans l’eau chauffée par-dessous, des mouvements transportent l’énergie.",
        detail:
          "Le fluide chauffé peut monter et être remplacé par du fluide plus froid : la matière se déplace avec l’énergie.",
      },
      {
        label: "Rayonnement",
        caption: "Le Soleil transfère de l’énergie à un objet à travers l’espace.",
        detail:
          "Une surface chaude échange aussi de l’énergie sous forme d’ondes électromagnétiques ; aucun contact matériel n’est nécessaire.",
      },
    ],
    limit:
      "Les trois vues isolent les mécanismes pour les distinguer ; ils agissent souvent ensemble.",
    source: {
      title: "OpenStax — Transferts thermiques",
      url: "https://openstax.org/books/college-physics-2e/pages/14-4-heat-transfer-methods",
    },
  },
  {
    canvasHeight: 230,
    id: "magnetdomains",
    title: "Des domaines au morceau aimanté",
    paths: ["/sciences-fondamentales/physique/electromagnetisme/comment-fonctionne-un-aimant"],
    steps: [
      {
        label: "Domaines variés",
        caption: "Les domaines d’un matériau ferromagnétique ont des orientations différentes.",
        detail:
          "Chaque domaine possède une orientation, mais des orientations différentes peuvent donner un faible effet global.",
      },
      {
        label: "Orientation favorisée",
        caption: "Un champ extérieur favorise les domaines orientés dans sa direction.",
        detail:
          "Un champ extérieur favorise certaines orientations : la somme des contributions magnétiques change.",
      },
      {
        label: "Deux aimants",
        caption: "Couper un aimant donne deux morceaux possédant chacun un nord et un sud.",
        detail:
          "Couper un aimant ne sépare pas ses pôles : chacun des deux morceaux possède encore un nord et un sud.",
      },
    ],
    limit:
      "Les flèches représentent des aimantations collectives, jamais des électrons en rotation classique.",
    source: {
      title: "Magnet",
      url: "https://www.britannica.com/science/magnet",
    },
  },
  {
    canvasHeight: 230,
    id: "transformercoil",
    title: "Deux bobines reliées par un champ",
    paths: [
      "/sciences-fondamentales/physique/electromagnetisme/les-transformateurs-electriques-et-leur-role-dans-l-ajustement-de-la-tension",
    ],
    steps: [
      {
        label: "Primaire",
        caption: "Une tension alternative alimente la première bobine sur le noyau.",
        detail:
          "Un courant alternatif dans le primaire crée un flux magnétique variable qui traverse aussi le secondaire.",
      },
      {
        label: "Flux variable",
        caption: "Le flux magnétique variable traverse aussi la seconde bobine.",
        detail:
          "Davantage de spires au secondaire correspondent à une tension plus élevée dans ce modèle idéal.",
      },
      {
        label: "Moins de spires",
        caption:
          "Avec deux fois moins de spires au secondaire, la tension idéale est divisée par deux.",
        detail:
          "Moins de spires donnent une tension plus faible ; un transformateur ne crée pas d’énergie supplémentaire.",
      },
    ],
    limit:
      "Transformateur idéal à deux enroulements ; les flèches de flux sont un instant d’une alternance, pas un courant dans le fer.",
    source: {
      title: "Transformateurs (cours IUT GMP)",
      url: "https://iut-gmp.univ-lille.fr/upload/LPMICVI/05%20TransformateursCAT.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "rainbowdrop",
    title: "Le trajet de la lumière dans une goutte",
    paths: ["/sciences-fondamentales/physique/electromagnetisme/comment-se-forme-un-arc-en-ciel"],
    steps: [
      {
        label: "Entrer",
        caption: "La lumière solaire se réfracte en entrant dans une goutte d’eau.",
        detail:
          "À l’entrée dans l’eau, les rayons changent de direction ; les couleurs ne sont pas toutes déviées de la même façon.",
      },
      {
        label: "Se réfléchir",
        caption: "Une partie de la lumière est réfléchie à l’intérieur de la goutte.",
        detail:
          "Une réflexion interne renvoie une partie de la lumière vers l’avant de la goutte ; le reste poursuit d’autres trajets.",
      },
      {
        label: "Ressortir",
        caption:
          "Une seconde réfraction sépare davantage les directions des couleurs qui ressortent.",
        detail:
          "En ressortant, les couleurs se séparent davantage : seules certaines directions atteignent un observateur donné.",
      },
    ],
    limit:
      "Arc principal à une réflexion ; seuls rouge et violet sont tracés, écarts amplifiés, autres rayons transmis omis.",
    source: {
      title: "Rainbow Simulator",
      url: "https://www.nesdis.noaa.gov/about/k-12-education/optical-phenomena/rainbow-simulator",
    },
  },
  {
    canvasHeight: 230,
    id: "skyscatter",
    title: "Le bleu diffusé, le rouge transmis",
    paths: [
      "/sciences-fondamentales/physique/electromagnetisme/pourquoi-le-ciel-est-il-bleu-et-le-soleil-couchant-rouge",
    ],
    steps: [
      {
        label: "Lumière solaire",
        caption: "La lumière solaire contient plusieurs couleurs avant de traverser l’air.",
        detail:
          "Les molécules de l’air diffusent davantage les courtes longueurs d’onde que les longues.",
      },
      {
        label: "Diffusion",
        caption: "L’air diffuse plus fortement le bleu dans différentes directions.",
        detail:
          "En regardant à côté du Soleil, on reçoit une partie de cette lumière diffusée, ce qui colore le ciel.",
      },
      {
        label: "Long trajet",
        caption:
          "Sur un trajet plus long dans l’air, le faisceau direct s’appauvrit davantage en bleu.",
        detail:
          "Au couchant, le faisceau direct traverse davantage d’atmosphère : une grande part du bleu a été diffusée ailleurs.",
      },
    ],
    limit:
      "Schéma qualitatif de diffusion par les molécules ; pas de prévision de couleur pour un coucher de soleil réel.",
    source: {
      title: "The Appearance of the Sky",
      url: "https://scied.ucar.edu/learning-zone/atmosphere/appearance-sky",
    },
  },
  {
    canvasHeight: 230,
    id: "microwavefood",
    title: "Du champ électrique à l’échauffement",
    paths: [
      "/sciences-fondamentales/physique/electromagnetisme/comment-un-four-a-micro-ondes-chauffe-t-il-les-aliments",
    ],
    steps: [
      {
        label: "Le four",
        caption: "Un magnétron alimente l’enceinte métallique en micro-ondes.",
        detail:
          "Le champ électrique change rapidement de sens et agit notamment sur les molécules polaires de l’aliment.",
      },
      {
        label: "Molécules polaires",
        caption: "Le champ alternatif sollicite les molécules polaires de l’aliment.",
        detail:
          "La réponse du milieu au champ dissipe de l’énergie ; les zones chauffées ne sont pas nécessairement uniformes.",
      },
      {
        label: "Chauffage inégal",
        caption: "L’énergie absorbée chauffe l’aliment, avec des zones plus ou moins chaudes.",
        detail:
          "L’absorption n’est pas uniforme : le champ, la forme et la composition de l’aliment créent des zones plus ou moins chaudes.",
      },
    ],
    limit:
      "La fréquence domestique n’est pas une résonance particulière de l’eau ; agitation illustrée très agrandie, sans recette de cuisson.",
    source: {
      title: "FDA — Microwave ovens",
      url: "https://www.fda.gov/radiation-emitting-products/resources-you-radiation-emitting-products/microwave-ovens",
    },
  },
  {
    canvasHeight: 230,
    id: "lakeice",
    title: "L’eau froide peut rester au-dessus",
    paths: [
      "/sciences-fondamentales/physique/thermodynamique/pourquoi-un-lac-gele-t-il-par-la-surface-plutot-que-par-le-fond",
    ],
    steps: [
      {
        label: "Refroidissement",
        caption: "L’eau de surface se densifie en refroidissant vers 4 °C et peut descendre.",
        detail:
          "L’eau douce qui se refroidit vers 4 °C devient plus dense et peut rejoindre les couches profondes.",
      },
      {
        label: "Sous 4 °C",
        caption:
          "Une eau plus froide que 4 °C est moins dense et reste plus facilement en surface.",
        detail:
          "En dessous d’environ 4 °C, l’eau devient moins dense : les couches les plus froides restent davantage en surface.",
      },
      {
        label: "Glace flottante",
        caption: "La glace moins dense recouvre le lac et limite les échanges de chaleur.",
        detail:
          "La glace flotte sur l’eau liquide ; le gel progresse depuis la surface sans imposer que tout le lac soit déjà gelé.",
      },
    ],
    limit:
      "Lac d’eau douce simplifié, sans courant ; les températures illustrent une stratification hivernale, pas tous les lacs.",
    source: {
      title: "Facts About Water",
      url: "https://www.usgs.gov/water-science-school/science/facts-about-water",
    },
  },
  {
    canvasHeight: 230,
    id: "saltdissolve",
    title: "Le sel se disperse, l’huile se sépare",
    paths: [
      "/sciences-fondamentales/chimie/chimie-physique/pourquoi-le-sel-disparait-il-dans-l-eau-alors-que-l-huile-reste-a-part",
    ],
    steps: [
      {
        label: "Cristal",
        caption: "Dans le cristal de sel, ions sodium et chlorure occupent un réseau ordonné.",
        detail:
          "Le cristal rassemble des ions positifs et négatifs dans un réseau ; il ne disparaît pas par une transformation en huile.",
      },
      {
        label: "Solution",
        caption: "Les ions séparés et entourés d’eau se dispersent dans le liquide.",
        detail:
          "L’eau polaire entoure les ions séparés : l’orientation de ses molécules dépend du signe de la charge.",
      },
      {
        label: "Deux phases",
        caption: "L’huile forme une phase distincte au-dessus de l’eau salée.",
        detail:
          "L’huile se mélange peu à l’eau et forme une autre phase ; les ions du sel restent dispersés dans la phase aqueuse.",
      },
    ],
    limit:
      "Tailles et nombres de particules symboliques ; pas de disparition de matière ni d’ions transformés en molécules d’eau.",
    source: {
      title: "11.3 : Solubilité (Chimie 1re, OpenStax)",
      url: "https://query.libretexts.org/Francais/Chimie_1e_(OpenStax)/11%3A_Solutions_et_collo%C3%AFdes/11.3%3A_Solubilit%C3%A9",
    },
  },
  {
    canvasHeight: 230,
    id: "desalination",
    title: "Séparer l’eau et les sels dissous",
    paths: [
      "/environnement-et-climat/pollution-et-ressources/eau/comment-transforme-t-on-l-eau-de-mer-en-eau-douce",
    ],
    steps: [
      {
        label: "Eau salée",
        caption: "L’eau entre dans une installation avec ses sels dissous.",
        detail:
          "Une membrane sélective sépare deux compartiments : l’eau peut la traverser plus facilement que les sels.",
      },
      {
        label: "Sous pression",
        caption: "Une pompe pousse l’eau contre une membrane d’osmose inverse.",
        detail:
          "La pression appliquée doit dépasser l’effet osmotique pour pousser une partie de l’eau vers le côté moins salé.",
      },
      {
        label: "Deux sorties",
        caption: "Une eau appauvrie en sels traverse ; une saumure plus concentrée est évacuée.",
        detail:
          "On obtient un flux d’eau moins salée et un rejet plus concentré ; toute l’eau entrante n’est pas récupérée.",
      },
    ],
    limit:
      "Membrane représentée sans pores à l’échelle moléculaire ; rejet de sel non parfait et traitement final omis.",
    source: {
      title: "Desalination",
      url: "https://www.usgs.gov/water-science-school/science/desalination",
    },
  },
  {
    canvasHeight: 230,
    id: "compostlife",
    title: "Les vivants transforment les restes",
    paths: [
      "/environnement-et-climat/pollution-et-ressources/dechets-et-recyclage/comment-des-epluchures-se-transforment-elles-en-compost",
    ],
    steps: [
      {
        label: "Mélanger",
        caption:
          "Les restes humides et les matières sèches apportent différents éléments au compost.",
        detail:
          "Matière organique, humidité et air créent un milieu dans lequel des décomposeurs peuvent se développer.",
      },
      {
        label: "Décomposer",
        caption:
          "Micro-organismes, air et eau permettent la décomposition, qui libère de la chaleur.",
        detail:
          "L’activité des organismes transforme la matière et peut échauffer le tas ; l’aération évite certains déséquilibres.",
      },
      {
        label: "Mûrir",
        caption: "Le matériau devient plus homogène et stable pendant la maturation.",
        detail:
          "La maturation laisse une matière plus stable ; son apparence seule ne garantit pas que tous les éléments soient décomposés.",
      },
    ],
    limit:
      "Évolution qualitative sur plusieurs mois ; un petit compost domestique n’atteint pas toujours une forte température.",
    source: {
      title: "EPA — Composting at home",
      url: "https://www.epa.gov/recycle/composting-home",
    },
  },
  {
    canvasHeight: 230,
    id: "paperloop",
    title: "Récupérer les fibres du papier",
    paths: [
      "/environnement-et-climat/pollution-et-ressources/dechets-et-recyclage/comment-un-vieux-journal-redevient-il-du-papier-neuf",
    ],
    steps: [
      {
        label: "Défibrer",
        caption: "L’eau et le brassage séparent les fibres d’un ancien journal.",
        detail:
          "Les papiers récupérés sont mélangés à l’eau pour remettre une partie des fibres en suspension.",
      },
      {
        label: "Désencrer",
        caption: "Dans ce procédé, des bulles emportent des particules d’encre vers la mousse.",
        detail:
          "Le traitement retire des indésirables et, selon le produit, une partie des encres ; toutes les fibres ne sont pas conservées.",
      },
      {
        label: "Refaire une feuille",
        caption: "Les fibres épurées sont étalées, pressées et séchées pour former une feuille.",
        detail:
          "La feuille se reforme par égouttage, pressage et séchage ; les cycles successifs raccourcissent progressivement les fibres.",
      },
    ],
    limit:
      "Exemple de recyclage avec flottation ; les fibres s’usent et tous les papiers ne suivent pas ce même procédé.",
    source: {
      title: "Efficient paper recycling from first page to last",
      url: "https://www.cordis.europa.eu/article/id/120328-efficient-paper-recycling-from-first-page-to-last/fr",
    },
  },
  {
    canvasHeight: 230,
    id: "mangroveroots",
    title: "Des racines qui freinent l’eau",
    paths: [
      "/environnement-et-climat/biodiversite/ecosystemes/comment-les-mangroves-protegent-elles-les-cotes-des-vagues",
    ],
    steps: [
      {
        label: "Avant les racines",
        caption: "Une vague arrive depuis la mer vers une mangrove.",
        detail:
          "Les racines divisent l’écoulement et modifient localement la vitesse de l’eau qui traverse la mangrove.",
      },
      {
        label: "À travers les racines",
        caption:
          "Le réseau de racines dissipe une partie de l’énergie des vagues et ralentit l’eau.",
        detail:
          "Dans un courant ralenti, une partie des sédiments peut se déposer au milieu du réseau racinaire.",
      },
      {
        label: "Dépôt",
        caption: "L’eau ralentie favorise le dépôt de sédiments autour des racines.",
        detail:
          "La végétation peut atténuer une partie de l’énergie des vagues ; son efficacité dépend de la largeur et des conditions du site.",
      },
    ],
    limit:
      "Atténuation qualitative dépendant de la largeur de forêt, des espèces et des vagues ; aucune protection totale garantie.",
    source: {
      title: "NOAA — Mangrove forests",
      url: "https://oceanservice.noaa.gov/facts/mangroves.html",
    },
  },
  {
    canvasHeight: 230,
    id: "citycanopy",
    title: "Ombre et eau, deux effets distincts",
    paths: [
      "/environnement-et-climat/changement-climatique/impacts-et-adaptation/comment-les-arbres-rafraichissent-ils-une-ville-en-ete",
    ],
    steps: [
      {
        label: "Sol exposé",
        caption: "Le rayonnement solaire atteint le sol minéral exposé.",
        detail:
          "Les surfaces minérales exposées au Soleil absorbent de l’énergie et peuvent atteindre une température élevée.",
      },
      {
        label: "Faire de l’ombre",
        caption: "Le feuillage intercepte une partie du rayonnement avant qu’il n’atteigne le sol.",
        detail:
          "Le feuillage intercepte une partie du rayonnement avant qu’il atteigne le sol et les façades.",
      },
      {
        label: "Transpirer",
        caption: "L’eau puisée par les racines passe aussi en vapeur par les feuilles.",
        detail:
          "Quand l’eau est disponible, l’évapotranspiration consomme de l’énergie et contribue au rafraîchissement local.",
      },
    ],
    limit:
      "Aucune baisse de température chiffrée ; l’évapotranspiration dépend notamment de l’eau disponible et de l’état de l’arbre.",
    source: {
      title: "EPA — Trees and heat islands",
      url: "https://www.epa.gov/heatislands/using-trees-and-vegetation-reduce-heat-islands",
    },
  },
  {
    canvasHeight: 230,
    id: "ozonecycle",
    title: "L’ozone absorbe une partie des UV",
    paths: [
      "/environnement-et-climat/changement-climatique/gaz-a-effet-de-serre/pourquoi-un-trou-s-est-il-forme-dans-la-couche-d-ozone",
    ],
    steps: [
      {
        label: "Protection",
        caption: "Des molécules d’ozone de la stratosphère absorbent une partie des ultraviolets.",
        detail:
          "Des molécules d’ozone absorbent une partie des ultraviolets dans la stratosphère, avant qu’ils atteignent les couches plus basses.",
      },
      {
        label: "Chlore réactif",
        caption: "Le chlore libéré à partir de certains gaz peut détruire des molécules d’ozone.",
        detail:
          "Des espèces chlorées réactives peuvent participer à des cycles catalytiques qui détruisent plusieurs molécules d’ozone.",
      },
      {
        label: "Moins d’ozone",
        caption: "Une couche appauvrie laisse davantage d’UV atteindre les altitudes plus basses.",
        detail:
          "Avec moins d’ozone dans la colonne d’air, davantage de certains ultraviolets peuvent traverser ; les flèches comparent cet effet qualitativement.",
      },
    ],
    limit:
      "Molécules symboliques ; cycle catalytique du chlore très simplifié, sans représenter tout le mécanisme polaire.",
    source: {
      title: "NASA Sees Definitive Evidence of the Montreal Protocol's Success",
      url: "https://svs.gsfc.nasa.gov/12816/",
    },
  },
  {
    canvasHeight: 230,
    id: "algaebloom",
    title: "Du bassin versant à la baie",
    paths: [
      "/environnement-et-climat/pollution-et-ressources/eau/pourquoi-des-algues-vertes-envahissent-elles-certaines-plages-de-bretagne",
    ],
    steps: [
      {
        label: "Apports",
        caption: "Des nutriments peuvent être entraînés des sols vers les cours d’eau.",
        detail:
          "Des apports de nutriments peuvent stimuler la croissance du phytoplancton lorsque les autres conditions le permettent.",
      },
      {
        label: "Proliférer",
        caption:
          "Dans une baie favorable, des apports excessifs favorisent la croissance des algues.",
        detail:
          "Une forte quantité de matière organique s’accumule ; ce ne sont pas uniquement les algues vivantes qui expliquent la suite.",
      },
      {
        label: "Décomposer",
        caption: "La décomposition de la biomasse peut consommer l’oxygène dissous de l’eau.",
        detail:
          "La décomposition consomme de l’oxygène dissous et peut créer un déficit pour les organismes aquatiques.",
      },
    ],
    limit:
      "Volet aquatique de l’eutrophisation ; le dessin ne représente pas le dégagement toxique des tas échoués.",
    source: {
      title: "Les « marées vertes » en Bretagne, la responsabilité du nitrate",
      url: "https://agris.fao.org/search/en/records/66d9b4e6f995ef9c042515cb",
    },
  },
  {
    canvasHeight: 230,
    id: "rainharvest",
    title: "Du toit à la réserve non potable",
    paths: ["/environnement-et-climat/pollution-et-ressources/eau/recuperer-eau-pluie"],
    steps: [
      {
        label: "Collecter",
        caption: "La gouttière rassemble l’eau qui ruisselle sur le toit.",
        detail:
          "Une partie de la pluie tombée sur la toiture est conduite vers le système de collecte ; une autre peut être perdue.",
      },
      {
        label: "Écarter et filtrer",
        caption:
          "Un dispositif détourne le premier ruissellement ; une grille retient les gros débris.",
        detail:
          "Le dispositif écarte des débris et stocke de l’eau pour un usage prévu ; une filtration simple ne la rend pas potable.",
      },
      {
        label: "Stocker",
        caption: "L’eau rejoint une cuve fermée et opaque, pour un usage adapté.",
        detail:
          "L’eau stockée peut remplacer certains prélèvements pour des usages autorisés, sous réserve d’une installation adaptée.",
      },
    ],
    limit:
      "Circuit de principe, sans dimensionnement ni raccord au réseau potable ; une simple grille ne rend pas l’eau potable.",
    source: {
      title: "First Flush Filters - Rainwater Collection and Stormwater Management",
      url: "https://www.rainharvest.com/filtration/pre-filtration/first-flush-filters.asp",
    },
  },
  {
    canvasHeight: 230,
    id: "hedgerows",
    title: "Une haie freine le vent et l’eau",
    paths: ["/environnement-et-climat/biodiversite/ecosystemes/haies-bocage"],
    steps: [
      {
        label: "Vent",
        caption: "Une haie perméable ralentit le vent derrière elle.",
        detail:
          "Une haie constitue un obstacle poreux : elle ralentit une partie du vent sans former un mur entièrement étanche.",
      },
      {
        label: "Ruissellement",
        caption:
          "Une haie en travers d’une pente freine l’écoulement et retient une partie de la terre.",
        detail:
          "Racines, litière et relief peuvent limiter le ruissellement et favoriser localement l’infiltration.",
      },
      {
        label: "Habitat",
        caption: "Des arbres et arbustes variés offrent abris et continuités aux êtres vivants.",
        detail:
          "Fleurs, fruits et abris offrent des ressources à diverses espèces ; les effets dépendent des essences et de l’entretien.",
      },
    ],
    limit:
      "Effets qualitatifs ; protection variable selon la densité, la hauteur, l’orientation et les espèces de la haie.",
    source: {
      title: "Les haies : une richesse à préserver",
      url: "https://ofb.gouv.fr/doc/les-haies-une-richesse-a-preserver",
    },
  },
  {
    canvasHeight: 230,
    id: "wormsoil",
    title: "Une galerie relie surface et sol",
    paths: [
      "/environnement-et-climat/biodiversite/ecosystemes/comment-les-vers-de-terre-rendent-ils-le-sol-fertile",
    ],
    steps: [
      {
        label: "En surface",
        caption: "Un ver anécique peut tirer un débris de feuille vers son terrier.",
        detail:
          "Les vers incorporent une partie de la matière organique et déplacent des particules de sol.",
      },
      {
        label: "Galerie",
        caption: "La galerie ouvre un passage dans le sol pour l’air et l’eau.",
        detail:
          "Les galeries créent des passages pour l’air et l’eau, avec un effet variable selon les espèces et le sol.",
      },
      {
        label: "Turricules",
        caption: "Le ver rejette des mélanges de matière organique et minérale appelés turricules.",
        detail:
          "Déjections, activité microbienne et mélange contribuent à structurer le sol ; un seul ver ne réalise pas tous les rôles représentés.",
      },
    ],
    limit:
      "Exemple d’un ver anécique ; les espèces ne creusent pas toutes des galeries verticales profondes.",
    source: {
      title: "Impacts des invertébrés du sol (encyclopédie)",
      url: "https://www.academie-agriculture.fr/sites/default/files/publications/encyclopedie/impacts_invertebres.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "graftunion",
    title: "Rapprocher deux tissus vivants",
    paths: ["/sciences-du-vivant-appliquees/agronomie/selection-vegetale/greffage"],
    steps: [
      {
        label: "Deux partenaires",
        caption: "Le porte-greffe fournit les racines et le greffon la partie supérieure.",
        detail:
          "Greffon et porte-greffe doivent être compatibles ; on recherche le contact de leurs tissus capables de former une jonction.",
      },
      {
        label: "Aligner",
        caption: "Les zones de cambium des deux partenaires doivent être mises en contact.",
        detail:
          "Des tissus de cicatrisation se forment au voisinage de la coupe ; la protection limite notamment le dessèchement.",
      },
      {
        label: "Souder",
        caption: "Des tissus se reforment et peuvent rétablir la continuité des vaisseaux.",
        detail:
          "Une continuité vasculaire fonctionnelle permet les échanges ; la prise d’une greffe n’est jamais garantie par le seul ligaturage.",
      },
    ],
    limit:
      "Greffe de principe en coupe, espèces compatibles et réussite supposées ; ce n’est pas un guide de geste au couteau.",
    source: {
      title: "NOVAE2022 art02 (INRAE)",
      url: "https://hal.inrae.fr/hal-04622298/file/NOVAE2022_art02.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "croprotation",
    title: "Une même parcelle change de culture",
    paths: ["/sciences-du-vivant-appliquees/agronomie/agriculture-durable/rotation-cultures"],
    steps: [
      {
        label: "Légumineuse",
        caption: "Une légumineuse occupe la parcelle pendant une première saison.",
        detail:
          "Une succession répétée de la même culture peut favoriser certains ravageurs et prélever des ressources similaires.",
      },
      {
        label: "Céréale",
        caption: "La même parcelle reçoit une céréale la saison suivante.",
        detail:
          "Changer de famille et de système racinaire modifie les pressions exercées sur le sol et les organismes.",
      },
      {
        label: "Autre famille",
        caption: "Une troisième culture change encore la famille végétale présente.",
        detail:
          "La rotation se raisonne sur plusieurs années : le bénéfice dépend des espèces, des résidus et des contraintes locales.",
      },
    ],
    limit:
      "Exemple illustratif, sans calendrier agronomique universel ; bénéfice azoté dépendant des résidus et de la récolte.",
    source: {
      title: "Using Legumes in Crop Rotations",
      url: "https://bookstore.ksre.ksu.edu/pubs/using-legumes-in-crop-rotations_L778.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "rootnodules",
    title: "Des échanges dans les nodules",
    paths: ["/sciences-du-vivant-appliquees/agronomie/agriculture-durable/legumineuses-azote"],
    steps: [
      {
        label: "Une association",
        caption: "Des bactéries vivent dans des nodules sur les racines d’une légumineuse.",
        detail:
          "La plante fournit un milieu et des composés carbonés à des bactéries symbiotiques dans certains nodules.",
      },
      {
        label: "Fixer l’azote",
        caption:
          "Les bactéries convertissent de l’azote atmosphérique en composés utilisables par la plante.",
        detail:
          "Les bactéries réduisent l’azote atmosphérique en formes utilisables, au prix d’une dépense d’énergie.",
      },
      {
        label: "Recevoir des sucres",
        caption: "La plante fournit en retour des composés carbonés issus de la photosynthèse.",
        detail:
          "La plante fournit des composés carbonés issus de la photosynthèse aux bactéries ; cet apport soutient leur activité de fixation de l’azote.",
      },
    ],
    limit:
      "Échanges simplifiés ; la plante ne capte pas directement le N₂ par ses racines et ne fournit pas gratuitement de l’azote à toutes ses voisines.",
    source: {
      title: "The Impacts of Domestication and Breeding on Nitrogen Fixation Symbiosis in Legumes",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7461779/",
    },
  },
  {
    canvasHeight: 230,
    id: "biocontrol",
    title: "Un prédateur face aux pucerons",
    paths: [
      "/sciences-du-vivant-appliquees/agronomie/agriculture-durable/lutte-biologique-contre-ravageurs",
    ],
    steps: [
      {
        label: "Ravageurs",
        caption: "Des pucerons se nourrissent sur une plante cultivée.",
        detail:
          "Une population de ravageurs peut se développer lorsque ses ressources et les conditions sont favorables.",
      },
      {
        label: "Prédateur",
        caption: "Une coccinelle peut consommer des pucerons.",
        detail:
          "Un auxiliaire consomme ou parasite une partie des ravageurs ; le moyen choisi doit correspondre à l’espèce visée.",
      },
      {
        label: "Équilibre",
        caption:
          "Des habitats variés peuvent entretenir des auxiliaires sans supprimer tous les ravageurs.",
        detail:
          "Le contrôle biologique vise à limiter les dégâts ; il ne garantit ni disparition totale du ravageur ni équilibre permanent.",
      },
    ],
    limit:
      "Exemple de prédation, sans conseil de lâcher d’espèces ni garantie d’éradication ou d’absence de risque écologique.",
    source: {
      title: "Biological Pest Control Methods",
      url: "https://solvepestproblems.oregonstate.edu/property-guides/biological-pest-control",
    },
  },
  {
    canvasHeight: 230,
    id: "dripwater",
    title: "Apporter l’eau près des racines",
    paths: ["/sciences-du-vivant-appliquees/agronomie/agriculture-durable/irrigation-econome-eau"],
    steps: [
      {
        label: "Tuyau",
        caption: "Un réseau conduit l’eau le long de la rangée de plantes.",
        detail:
          "L’émetteur libère un petit débit à un endroit choisi plutôt que de mouiller uniformément toute la surface.",
      },
      {
        label: "Goutteurs",
        caption: "Les goutteurs libèrent lentement de l’eau à proximité des pieds.",
        detail:
          "L’eau s’étend dans le sol : la forme de la zone humide dépend du débit et des propriétés du terrain.",
      },
      {
        label: "Bulbe humide",
        caption: "L’eau se répartit dans une zone du sol autour du goutteur.",
        detail:
          "Un réglage adapté rapproche l’apport du besoin des racines ; un système mal réglé peut encore gaspiller de l’eau.",
      },
    ],
    limit:
      "Forme du bulbe qualitative, dépendante du sol et du débit ; un équipement seul ne garantit pas d’économie d’eau.",
    source: {
      title: "Drip Irrigation System: How It Saves Water in Farming",
      url: "https://www.smsfoundation.org/what-is-a-drip-irrigation-system-and-how-does-it-help-to-save-water/",
    },
  },
  {
    canvasHeight: 230,
    id: "mulchsoil",
    title: "Une couverture pour le sol",
    paths: [
      "/sciences-du-vivant-appliquees/agronomie/agriculture-durable/comment-une-couche-de-paille-protege-t-elle-le-sol-d-un-potager",
    ],
    steps: [
      {
        label: "Sol nu",
        caption: "Un sol découvert reçoit directement pluie, soleil et vent.",
        detail:
          "Un sol nu reçoit directement le rayonnement et la pluie ; l’eau peut s’évaporer depuis sa surface.",
      },
      {
        label: "Couvrir",
        caption: "Une couche de paille protège la surface autour de la plante.",
        detail:
          "Une couverture réduit l’exposition du sol et freine une partie des pertes par évaporation.",
      },
      {
        label: "Garder l’humidité",
        caption: "Le paillis limite l’évaporation et amortit l’impact des gouttes.",
        detail:
          "La vie du sol transforme progressivement un paillis organique ; son effet dépend de la matière et de son épaisseur.",
      },
    ],
    limit:
      "Comparaison qualitative sans épaisseur recommandée ; le paillis ne bloque pas toute évaporation ni toutes les adventices.",
    source: {
      title: "Guide : comment bien pailler son jardin",
      url: "https://librairie.ademe.fr/ged/9527/guide-comment-bien-pailler-jardin.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "seedvault",
    title: "Conserver une copie des semences",
    paths: [
      "/sciences-du-vivant-appliquees/agronomie/selection-vegetale/pourquoi-garde-t-on-des-millions-de-graines-dans-une-montagne-glacee-pres-du-pole-nord",
    ],
    steps: [
      {
        label: "Collection",
        caption: "Une banque de semences conserve des lots de variétés cultivées.",
        detail:
          "Des banques conservent des lots identifiés ; les doubles de sécurité ne remplacent pas la gestion des collections d’origine.",
      },
      {
        label: "Copie de secours",
        caption: "Des duplicatas sont placés au Svalbard, dans des sachets scellés au froid.",
        detail:
          "Pour les espèces adaptées à cette conservation, séchage et basse température ralentissent la dégradation des graines.",
      },
      {
        label: "Reconstituer",
        caption: "La banque déposante peut récupérer ses propres duplicatas après une perte.",
        detail:
          "Un lot peut être récupéré en cas de besoin ; il faut aussi suivre sa viabilité et renouveler les collections quand nécessaire.",
      },
    ],
    limit:
      "Le Svalbard conserve surtout les graines aptes au stockage sec et froid ; aucune durée de survie uniforme ni garantie éternelle.",
    source: {
      title: "Crop Trust — Svalbard",
      url: "https://www.croptrust.org/what-we-do/programs/svalbard-global-seed-vault/",
    },
  },
  {
    canvasHeight: 230,
    id: "insulinmicrobe",
    title: "D’un gène à une protéine purifiée",
    paths: [
      "/sciences-du-vivant-appliquees/biotechnologies/biologie-de-synthese/comment-des-bacteries-fabriquent-elles-l-insuline-des-diabetiques",
    ],
    steps: [
      {
        label: "Gène",
        caption: "Une séquence codant un précurseur de l’insuline est intégrée à un ADN vecteur.",
        detail:
          "Une construction génétique permet à des cellules cultivées de fabriquer un précurseur ou une forme d’insuline.",
      },
      {
        label: "Produire",
        caption:
          "Des microbes sélectionnés expriment cette séquence pendant une culture contrôlée.",
        detail:
          "La culture produit une matière contenant de nombreux composés : la molécule utile doit être récupérée et préparée.",
      },
      {
        label: "Purifier",
        caption:
          "La production est récupérée, transformée si nécessaire et purifiée avant formulation.",
        detail:
          "Des étapes industrielles de purification et de contrôle sont indispensables avant tout usage pharmaceutique.",
      },
    ],
    limit:
      "Chaîne industrielle très simplifiée ; ne représente ni la fabrication domestique ni le fonctionnement d’un traitement.",
    source: {
      title: "FDA — 100 years of insulin",
      url: "https://www.fda.gov/about-fda/fda-history-exhibits/100-years-insulin",
    },
  },
  {
    canvasHeight: 230,
    id: "washenzyme",
    title: "Une enzyme agit puis recommence",
    paths: [
      "/sciences-du-vivant-appliquees/biotechnologies/biologie-de-synthese/comment-des-enzymes-produites-par-des-microbes-aident-elles-la-lessive-a-laver-a-froid",
    ],
    steps: [
      {
        label: "Se rencontrer",
        caption: "Une enzyme de lessive rencontre une molécule de tache compatible.",
        detail:
          "Une enzyme reconnaît certains substrats ; toutes les taches ne correspondent pas à la même famille chimique.",
      },
      {
        label: "Catalyser",
        caption: "Au site actif, elle facilite une réaction qui coupe cette molécule.",
        detail:
          "Le substrat se lie au site actif et une réaction le transforme en fragments plus faciles à retirer.",
      },
      {
        label: "Libérer",
        caption: "Les fragments se séparent et l’enzyme peut agir sur une autre molécule.",
        detail:
          "L’enzyme peut agir de nouveau ; température, pH et composition de la lessive conditionnent son activité.",
      },
    ],
    limit:
      "Modèle de protéase ; les enzymes réelles sont souples et ne fonctionnent pas toutes sur toutes les taches.",
    source: {
      title: "Enzyme Technology: detergent (cours)",
      url: "https://water.lsbu.ac.uk/water/enztech/detergent.html",
    },
  },
  {
    canvasHeight: 230,
    id: "quorumlight",
    title: "Un signal s’accumule entre voisines",
    paths: [
      "/sciences-du-vivant-appliquees/biotechnologies/biologie-de-synthese/comment-des-bacteries-produisent-elles-de-la-lumiere-et-pourquoi-le-font-elles-ensemble",
    ],
    steps: [
      {
        label: "Peu de cellules",
        caption: "Quelques bactéries libèrent des molécules signal qui restent peu concentrées.",
        detail:
          "Des bactéries libèrent des molécules de signalisation qui se dispersent dans le milieu.",
      },
      {
        label: "Signal concentré",
        caption: "Dans un milieu donné, une population dense peut accumuler davantage de signal.",
        detail:
          "Si la production dépasse leur dispersion et leur dégradation, la concentration locale du signal augmente.",
      },
      {
        label: "Activer la lumière",
        caption:
          "Au-delà d’un seuil, un système de régulation peut activer les gènes de bioluminescence.",
        detail:
          "Au-delà d’une réponse seuil, l’expression de gènes peut changer ; chez l’exemple montré, cela active la lumière.",
      },
    ],
    limit:
      "Exemple de bactéries luminescentes, sans seuil chiffré ; dilution, circulation et dégradation du signal comptent aussi.",
    source: {
      title: "Princeton — Quorum sensing",
      url: "https://www.princeton.edu/news/2002/02/06/roll-call-study-shows-how-bacteria-signal-quorum",
    },
  },
  {
    canvasHeight: 230,
    id: "weaveloom",
    title: "Tordre les fibres puis croiser les fils",
    paths: ["/industries/materiaux-et-procedes/mise-en-forme/filer-tisser"],
    steps: [
      {
        label: "Filer",
        caption: "Des fibres sont étirées et torsadées pour former un fil.",
        detail:
          "Le filage étire et tord des fibres pour former un fil ; c’est une opération distincte du croisement des fils pendant le tissage.",
      },
      {
        label: "Chaîne et trame",
        caption: "Des fils de chaîne tendus croisent un fil de trame.",
        detail:
          "Le fil de trame traverse cette ouverture, au-dessus de certains fils et au-dessous des autres.",
      },
      {
        label: "Entrelacer",
        caption: "La trame passe alternativement au-dessus et au-dessous des fils de chaîne.",
        detail:
          "L’alternance se répète et les passages sont resserrés : le tissu se construit par entrecroisement, sans fusion des fils.",
      },
    ],
    limit:
      "Exemple d’armure toile ; les orientations du dessin sont conventionnelles et tous les textiles ne sont pas tissés.",
    source: {
      title: "National Park Service — Weaving",
      url: "https://home.nps.gov/articles/000/how-does-weaving-work.htm",
    },
  },
  {
    canvasHeight: 230,
    id: "foundrycast",
    title: "Une empreinte devient une pièce",
    paths: ["/industries/materiaux-et-procedes/mise-en-forme/fonderie"],
    steps: [
      {
        label: "Moule",
        caption: "Un modèle retiré laisse une cavité dans un moule de sable.",
        detail:
          "Le modèle sert à former une cavité dans le sable ; la cavité doit aussi permettre l’entrée du métal et la sortie des gaz.",
      },
      {
        label: "Coulée",
        caption: "Le métal liquide remplit la cavité par un canal de coulée.",
        detail:
          "Le métal liquide remplit le moule par les conduits prévus ; le résultat dépend notamment de l’écoulement et de la température.",
      },
      {
        label: "Démoulage",
        caption: "Après solidification, le moule est ouvert pour récupérer la pièce.",
        detail:
          "Après solidification et refroidissement adaptés, le moule est ouvert et les éléments de coulée sont retirés.",
      },
    ],
    limit:
      "Coupe de principe, sans paramètres de fabrication ; évents, masselottes et risques de la coulée ne sont pas détaillés.",
    source: {
      title: "Sand Casting",
      url: "https://www.reliance-foundry.com/blog/sand-casting",
    },
  },
  {
    canvasHeight: 230,
    id: "steeltemper",
    title: "La température change la structure",
    paths: ["/industries/industrie-lourde/siderurgie/trempe-revenu"],
    steps: [
      {
        label: "Chauffer",
        caption: "Un acier adapté est chauffé pour préparer sa transformation structurale.",
        detail:
          "Le chauffage prépare la structure d’un acier adapté au traitement ; il ne suffit pas de chauffer n’importe quel métal.",
      },
      {
        label: "Tremper",
        caption: "Un refroidissement rapide peut former une structure dure, la martensite.",
        detail:
          "Un refroidissement rapide peut former une structure dure, mais aussi produire des contraintes et une fragilité importante.",
      },
      {
        label: "Revenir",
        caption: "Un réchauffage modéré ajuste ensuite le compromis entre dureté et ténacité.",
        detail:
          "Le revenu modifie cette structure et réduit certaines contraintes, avec un compromis entre dureté et ténacité.",
      },
    ],
    limit:
      "Évolution qualitative d’un acier trempant ; ni températures, ni temps, ni recette de traitement universelle.",
    source: {
      title: "Learn About Quenching & Tempering",
      url: "https://www.cliftonsteel.com/education/quenching-tempering",
    },
  },
  {
    canvasHeight: 230,
    id: "catalystpath",
    title: "Un autre chemin, une barrière plus basse",
    paths: [
      "/industries/industrie-lourde/chimie-industrielle/les-catalyseurs-accelerer-une-reaction-chimique",
    ],
    steps: [
      {
        label: "Sans catalyseur",
        caption: "La réaction suit un chemin demandant une énergie d’activation élevée.",
        detail:
          "Sans catalyseur, les réactifs suivent un chemin dont la barrière d’activation peut être élevée.",
      },
      {
        label: "Autre chemin",
        caption: "Un catalyseur permet un chemin dont la barrière d’activation est plus basse.",
        detail:
          "Le catalyseur participe à un autre chemin réactionnel dont la barrière est plus accessible.",
      },
      {
        label: "Même bilan",
        caption: "Les niveaux d’énergie des réactifs et des produits restent les mêmes.",
        detail:
          "Le catalyseur est régénéré dans le cycle ; il ne change pas le bilan énergétique entre réactifs et produits.",
      },
    ],
    limit:
      "Profil énergétique illustratif sans échelle numérique ; un catalyseur ne déplace pas l’équilibre chimique.",
    source: {
      title: "Catalyse hétérogène en industrie",
      url: "https://perso.ens-lyon.fr/fenril.montorier/fichiers/LC11%20-%20Cours/Catalyse%20h%c3%a9t%c3%a9rogene%20en%20industrie%20-%20J1255.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "rubberlinks",
    title: "Des chaînes retenues par des ponts",
    paths: [
      "/industries/materiaux-et-procedes/composites-et-polymeres/comment-le-soufre-a-t-il-rendu-le-caoutchouc-solide-et-elastique",
    ],
    steps: [
      {
        label: "Chaînes",
        caption: "Le caoutchouc contient de longues chaînes moléculaires.",
        detail:
          "Les chaînes de polymère peuvent se déplacer les unes par rapport aux autres ; leur mobilité dépend de leur structure.",
      },
      {
        label: "Relier",
        caption: "La vulcanisation crée des ponts contenant du soufre entre certaines chaînes.",
        detail:
          "Des ponts relient certaines chaînes et limitent leur glissement relatif, tout en laissant une possibilité de déformation.",
      },
      {
        label: "Étirer",
        caption: "Le réseau s’étire et ses liaisons contribuent au retour vers la forme initiale.",
        detail:
          "Lorsqu’on relâche une déformation adaptée, le réseau favorise le retour de forme ; trop de ponts peut réduire la souplesse.",
      },
    ],
    limit:
      "Réseau symbolique très agrandi, sans formule chimique exacte ni prédiction de résistance.",
    source: {
      title: "UNSW — Polymer types",
      url: "https://www.unsw.edu.au/science/our-schools/materials/engage-with-us/high-school-students-and-teachers/online-tutorials/polymers/structure-and-form/polymer-types",
    },
  },
  {
    canvasHeight: 230,
    id: "thermoplastic",
    title: "Glisser ou rester réticulé",
    paths: [
      "/industries/materiaux-et-procedes/composites-et-polymeres/pourquoi-certains-plastiques-fondent-ils-a-la-chaleur-et-d-autres-non",
    ],
    steps: [
      {
        label: "Chaînes séparées",
        caption: "Dans un thermoplastique, les chaînes ne forment pas un réseau covalent continu.",
        detail:
          "À basse température d’usage, les chaînes ont une mobilité limitée et la pièce garde davantage sa forme.",
      },
      {
        label: "Ramollir",
        caption: "La chaleur facilite leurs mouvements et peut permettre la mise en forme.",
        detail:
          "Le chauffage augmente leur mobilité, ce qui permet une mise en forme dans une plage adaptée au matériau.",
      },
      {
        label: "Réseau réticulé",
        caption:
          "Un thermodurcissable durci garde ses liaisons entre chaînes et ne refond pas comme un thermoplastique.",
        detail:
          "Dans un thermodurcissable déjà durci, un réseau de liaisons retient les chaînes : il ne refond pas comme un thermoplastique et peut se dégrader à forte chaleur.",
      },
    ],
    limit:
      "Comparaison moléculaire simplifiée ; une chaleur excessive peut dégrader les deux familles, et refondre ne garantit pas un recyclage effectif.",
    source: {
      title: "Thermoplastique",
      url: "https://www.techniques-ingenieur.fr/glossaire/Thermoplastique",
    },
  },
  {
    canvasHeight: 230,
    id: "lathemill",
    title: "Ce qui tourne change la forme usinée",
    paths: [
      "/industries/materiaux-et-procedes/mise-en-forme/comment-un-tour-et-une-fraiseuse-taillent-ils-une-piece-dans-un-bloc-de-metal",
    ],
    steps: [
      {
        label: "Tour",
        caption: "Sur un tour, la pièce tourne face à un outil de coupe.",
        detail:
          "Au tournage, la pièce tourne et un outil enlève de la matière sur sa surface ; les copeaux emportent une partie de cette matière.",
      },
      {
        label: "Avance",
        caption: "L’outil se déplace pour enlever de la matière sur la pièce tournante.",
        detail:
          "La pièce continue à tourner pendant que l’outil avance : l’arête enlève de la matière sous forme de copeaux.",
      },
      {
        label: "Fraiseuse",
        caption:
          "Sur une fraiseuse, la fraise tourne et la pièce est déplacée relativement à elle.",
        detail:
          "Au fraisage, c’est l’outil à plusieurs arêtes qui tourne ; le déplacement relatif avec la pièce détermine la forme retirée.",
      },
    ],
    limit:
      "Schéma de coupe sans commande machine ni paramètre ; toutes les opérations d’usinage ne sont pas représentées.",
    source: {
      title: "F6 Les param coupe",
      url: "https://analyse-fabrication.univ-lille.fr/res/F6_Les_param_coupe.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "printlayers",
    title: "Ajouter de la matière couche par couche",
    paths: [
      "/industries/materiaux-et-procedes/mise-en-forme/comment-une-imprimante-3d-peut-elle-fabriquer-une-piece-detachee-sur-place",
    ],
    steps: [
      {
        label: "Première couche",
        caption: "Une buse dépose un trajet de matière sur un plateau.",
        detail:
          "Un fichier est découpé en couches et en trajectoires compatibles avec le procédé de fabrication choisi.",
      },
      {
        label: "Empiler",
        caption: "Des couches successives sont déposées au-dessus des précédentes.",
        detail:
          "La matière est déposée ou consolidée progressivement ; des supports peuvent être nécessaires selon la géométrie.",
      },
      {
        label: "Pièce",
        caption: "Le volume final résulte de l’empilement des trajets déposés.",
        detail:
          "L’objet résulte de l’empilement contrôlé ; sa résistance dépend aussi de l’orientation et des paramètres de fabrication.",
      },
    ],
    limit:
      "Exemple de dépôt de filament, géométrie sans surplomb ; supports, retrait, précision et validation de résistance omis.",
    source: {
      title: "NIST — Additive manufacturing",
      url: "https://www.nist.gov/additive-manufacturing/what-additive-manufacturing",
    },
  },
  {
    canvasHeight: 230,
    id: "rebarbeam",
    title: "Béton comprimé, acier tendu",
    paths: [
      "/technologies-et-ingenierie/genie-civil/materiaux/pourquoi-met-on-des-barres-d-acier-dans-le-beton",
    ],
    steps: [
      {
        label: "Poutre chargée",
        caption: "Une charge vers le bas courbe une poutre simplement appuyée.",
        detail:
          "La flexion comprime une face de la poutre et en étire l’autre ; le béton résiste moins bien à cette traction.",
      },
      {
        label: "Deux zones",
        caption: "Au milieu de cette portée, le haut se comprime et le bas s’étire.",
        detail:
          "Des armatures placées du côté tendu reprennent une partie des efforts après fissuration du béton.",
      },
      {
        label: "Armatures",
        caption: "Des barres placées dans la zone tendue reprennent une partie de la traction.",
        detail:
          "Le fonctionnement commun dépend de l’adhérence et d’un ancrage suffisant ; un trait d’acier ne garantit pas tout dimensionnement.",
      },
    ],
    limit:
      "Cas précis d’une travée simplement appuyée ; position des armatures différente au-dessus d’appuis continus, déformation amplifiée.",
    source: {
      title: "Corrosion des armatures du béton armé",
      url: "https://www.febelcem.be/fileadmin/user_upload/dossiers-ciment-2008/fr/T1_FR_Corrosion-armatures-beton-arme.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "fatiguecrack",
    title: "Une fissure progresse sous les cycles",
    paths: [
      "/technologies-et-ingenierie/conception-et-fiabilite/choix-des-materiaux/pourquoi-une-piece-de-metal-peut-elle-casser-a-force-d-etre-secouee",
    ],
    steps: [
      {
        label: "Sollicitations",
        caption: "Une pièce subit des efforts répétés, même sans surcharge unique.",
        detail:
          "Des efforts cycliques peuvent provoquer un endommagement même sans déformation permanente visible à chaque cycle.",
      },
      {
        label: "Amorçage",
        caption: "Une petite fissure peut apparaître à une zone de concentration des contraintes.",
        detail:
          "Une petite fissure peut s’amorcer dans une zone concentrant les contraintes et croître à chaque sollicitation.",
      },
      {
        label: "Propagation",
        caption: "La fissure avance et réduit progressivement la section résistante.",
        detail:
          "La fissure progresse sous les cycles et réduit la section résistante ; une rupture finale peut survenir lorsque la matière restante ne supporte plus la charge.",
      },
    ],
    limit:
      "Étapes qualitatives, sans prédiction de durée de vie ni seuil de charge ; la fissure est fortement agrandie.",
    source: {
      title: "material fatigue",
      url: "https://graphsearch.epfl.ch/fr/category/material-fatigue",
    },
  },
  {
    canvasHeight: 230,
    id: "rooftruss",
    title: "Le triangle limite la déformation",
    paths: ["/technologies-et-ingenierie/genie-civil/structures/charpente-bois"],
    steps: [
      {
        label: "Cadre",
        caption: "Un cadre articulé à quatre côtés peut se déformer en parallélogramme.",
        detail:
          "Un cadre dont les assemblages peuvent pivoter se déforme en parallélogramme, même si la longueur des quatre côtés reste presque constante.",
      },
      {
        label: "Diagonale",
        caption: "L’ajout d’une diagonale forme des triangles qui stabilisent le cadre.",
        detail:
          "Une diagonale limite cette déformation en créant deux triangles ; la stabilité dépend aussi des pièces et des assemblages.",
      },
      {
        label: "Ferme",
        caption:
          "Dans une ferme simple chargée symétriquement, les arbalétriers se compriment et l’entrait travaille en traction.",
        detail:
          "La triangulation donne un chemin aux efforts ; les rôles exacts dépendent des charges et de la forme de la ferme.",
      },
    ],
    limit:
      "Assemblages idéalisés, efforts simplifiés ; le dessin ne dimensionne pas une charpente réelle.",
    source: {
      title: "Fiche Pathologie Bâtiment C01 : déformation des charpentes assemblées bois",
      url: "https://qualiteconstruction.com/wp-content/uploads/2024/05/Fiche-Pathologie-Batiment-C01-Deformation-Charpentes-Assemblees-Bois-Chantier-AQC.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "claybrick",
    title: "De l’argile à la brique cuite",
    paths: ["/technologies-et-ingenierie/genie-civil/materiaux/brique-terre-cuite"],
    steps: [
      {
        label: "Mouler",
        caption: "Une terre argileuse préparée prend la forme du moule.",
        detail:
          "La préparation et le façonnage organisent une pâte d’argile et d’autres constituants dans la forme recherchée.",
      },
      {
        label: "Sécher",
        caption: "L’eau libre s’évacue progressivement avant la cuisson.",
        detail:
          "Le séchage retire une partie de l’eau avant cuisson et réduit certains risques de déformation ou de fissuration.",
      },
      {
        label: "Cuire",
        caption: "La cuisson transforme durablement la matière en une céramique.",
        detail:
          "La cuisson provoque des transformations durables ; une brique cuite ne redevient pas de la pâte par simple ajout d’eau.",
      },
    ],
    limit:
      "Sans température ni durée de cuisson ; terre crue sèche et terre cuite ne sont pas interchangeables.",
    source: {
      title: "Kiln firings: History, development and types of Structural kilns",
      url: "https://www.borregaard.com/biokeram/kiln-firing-history-development-and-types-of-kilns",
    },
  },
  {
    canvasHeight: 230,
    id: "aqueductslope",
    title: "Une pente guide l’eau par gravité",
    paths: ["/technologies-et-ingenierie/genie-civil/ouvrages-dart/aqueducs-canaux"],
    steps: [
      {
        label: "Canal",
        caption: "Un canal à surface libre descend légèrement vers sa destination.",
        detail:
          "Dans un canal à surface libre, une faible pente permet à l’eau de s’écouler grâce à la différence d’altitude.",
      },
      {
        label: "Franchir",
        caption: "Un ouvrage peut maintenir la pente du canal au-dessus d’une vallée.",
        detail:
          "Un pont ou un tunnel aide à maintenir un tracé adapté au relief sans faire intervenir une pompe.",
      },
      {
        label: "Écouler",
        caption: "La différence d’altitude permet l’écoulement sans pompe sur ce tronçon.",
        detail:
          "La différence de niveau fournit l’énergie de l’écoulement par gravité ; la pente est amplifiée ici pour rester visible dans le dessin.",
      },
    ],
    limit:
      "Pente et relief amplifiés ; cette vue représente un canal, pas un siphon inversé ni la totalité d’un réseau romain.",
    source: {
      title: "Aqueducts: Quenching Rome's Thirst",
      url: "https://www.nationalgeographic.com/history/history-magazine/article/roman-aqueducts-engineering-innovation",
    },
  },
  {
    canvasHeight: 230,
    id: "baseisolation",
    title: "Découpler une partie du mouvement",
    paths: [
      "/technologies-et-ingenierie/genie-civil/structures/comment-construire-des-batiments-qui-resistent-aux-tremblements-de-terre",
    ],
    steps: [
      {
        label: "Sol mobile",
        caption: "Une secousse déplace les fondations d’un bâtiment ordinaire.",
        detail:
          "Sans dispositif d’isolation, les déplacements du sol sollicitent directement la structure et ses occupants.",
      },
      {
        label: "Appuis souples",
        caption: "Des isolateurs permettent un déplacement relatif entre sol et bâtiment.",
        detail:
          "Des appuis isolateurs permettent un déplacement relatif entre sol et bâtiment, en modifiant sa réponse dynamique.",
      },
      {
        label: "Réponse réduite",
        caption:
          "Le mouvement transmis à la superstructure peut être réduit dans les conditions prévues par le calcul.",
        detail:
          "Le bâtiment reste sollicité, mais certaines accélérations peuvent être réduites ; des déplacements suffisants doivent être prévus aux appuis.",
      },
    ],
    limit:
      "Instantanés schématiques, pas une simulation sismique ; aucun bâtiment n’est garanti sans dommage pour tout séisme.",
    source: {
      title: "USGS — Evaluating earthquake protection",
      url: "https://pubs.usgs.gov/fs/2003/fs068-03/eval.html",
    },
  },
  {
    canvasHeight: 230,
    id: "quadcopter",
    title: "Répartir la poussée entre quatre rotors",
    paths: [
      "/technologies-et-ingenierie/robotique/robots-mobiles/comment-un-drone-a-quatre-helices-tient-il-immobile-dans-les-airs",
    ],
    steps: [
      {
        label: "Rotation opposée",
        caption: "Deux paires diagonales de rotors tournent en sens opposés.",
        detail:
          "Deux rotors d’une diagonale tournent dans un sens, les deux autres dans l’autre ; leurs couples peuvent se compenser.",
      },
      {
        label: "Stationnaire",
        caption:
          "La poussée totale vers le haut équilibre le poids lors d’un vol stationnaire idéalisé.",
        detail:
          "En vol stationnaire idéal, la poussée totale équilibre le poids ; le contrôleur ajuste les rotors pour stabiliser l’attitude.",
      },
      {
        label: "Incliner",
        caption: "En s’inclinant, le drone donne une composante horizontale à sa poussée.",
        detail:
          "Incliner le drone donne une composante horizontale à la poussée ; il faut aussi ajuster sa valeur pour conserver l’altitude.",
      },
    ],
    limit:
      "Vue de dessus puis de profil explicitement séparées ; pas de réglage de commande ni garantie de stabilité sans asservissement.",
    source: {
      title: "NASA — The science behind quadcopters",
      url: "https://www.nasa.gov/wp-content/uploads/2020/05/aam-science-behind-quadcopters-student-guide_1.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "lidarmap",
    title: "Chronométrer, puis placer des points",
    paths: [
      "/technologies-et-ingenierie/robotique/perception/comment-un-lidar-permet-il-a-un-robot-de-dessiner-une-carte-de-ce-qui-l-entoure",
    ],
    steps: [
      {
        label: "Émettre",
        caption: "Le lidar envoie une impulsion lumineuse vers un obstacle.",
        detail:
          "L’appareil émet une impulsion et détecte une partie de la lumière renvoyée par une surface.",
      },
      {
        label: "Recevoir",
        caption: "Une partie de la lumière revient ; le temps mesuré correspond à l’aller-retour.",
        detail:
          "Le trajet est un aller-retour : pour une mesure par temps de vol, la distance vaut la vitesse de la lumière multipliée par le délai, divisée par deux.",
      },
      {
        label: "Cartographier",
        caption:
          "Des distances mesurées dans plusieurs directions placent des points autour du capteur.",
        detail:
          "Plusieurs directions donnent un ensemble de points ; les zones masquées et les surfaces difficiles ne sont pas nécessairement mesurées.",
      },
    ],
    limit:
      "Coupe 2D d’un balayage, pas une carte 3D ni une localisation autonome complète ; distance égale à c multiplié par le temps, divisé par deux.",
    source: {
      title: "Imagerie laser 3D à plan focal",
      url: "https://www.techniques-ingenieur.fr/base-documentaire/electronique-photonique-th13/applications-des-lasers-et-instrumentation-laser-42661210/imagerie-laser-3d-a-plan-focal-r6734/",
    },
  },
  {
    canvasHeight: 230,
    id: "motortorque",
    title: "Le courant crée un couple moteur",
    paths: [
      "/technologies-et-ingenierie/robotique/actionneurs/comment-un-moteur-electrique-transforme-t-il-le-courant-en-mouvement",
    ],
    steps: [
      {
        label: "Champ",
        caption: "Une bobine mobile est placée dans le champ d’un stator.",
        detail:
          "En coupe, le point représente un courant sortant du plan et la croix un courant entrant ; les forces opposées créent un couple.",
      },
      {
        label: "Couple",
        caption: "Les forces sur les deux côtés opposés de la bobine créent un couple.",
        detail:
          "Quand la bobine tourne, le sens du courant et l’orientation dans le champ déterminent ensemble le sens des forces.",
      },
      {
        label: "Commuter",
        caption: "L’inversion du courant au bon moment entretient la rotation dans le même sens.",
        detail:
          "Le collecteur inverse le courant au bon passage pour entretenir le couple ; l’exemple simplifie un moteur à courant continu.",
      },
    ],
    limit:
      "Moteur à courant continu à collecteur simplifié ; ne décrit pas tous les moteurs synchrones ou asynchrones.",
    source: {
      title: "Commutation",
      url: "https://fab.cba.mit.edu/classes/865.21/topics/power_electronics/commutation/",
    },
  },
  {
    canvasHeight: 230,
    id: "elasticplastic",
    title: "Revenir à la forme ou garder un pli",
    paths: [
      "/technologies-et-ingenierie/conception-et-fiabilite/choix-des-materiaux/l-elasticite-et-la-plasticite-des-materiaux",
    ],
    steps: [
      {
        label: "Sans charge",
        caption: "Une éprouvette de métal est d’abord rectiligne.",
        detail:
          "Sans charge appliquée, on repère la longueur initiale de l’éprouvette ; les pointillés permettent de comparer les vues suivantes.",
      },
      {
        label: "Élastique",
        caption:
          "Sous une charge modérée, elle s’allonge et peut retrouver sa longueur initiale après décharge.",
        detail:
          "Sous une charge modérée, l’éprouvette s’allonge dans son domaine élastique ; une décharge permet alors un retour à sa longueur initiale.",
      },
      {
        label: "Plastique",
        caption:
          "Après une sollicitation suffisante puis décharge, une déformation permanente subsiste.",
        detail:
          "Après décharge, une partie de l’allongement disparaît, mais la pièce reste plus longue qu’au départ.",
      },
    ],
    limit:
      "Trois situations distinctes, sans échelle d’effort ; comportement illustratif d’un métal ductile.",
    source: {
      title: "12.06 : Élasticité et plasticité",
      url: "https://query.libretexts.org/Francais/Physique_universitaire_I_-_M%C3%A9canique,_son,_oscillations_et_ondes_(OpenStax)/12:_%C3%89quilibre_statique_et_%C3%A9lasticit%C3%A9/12.06:_%C3%89lasticit%C3%A9_et_plasticit%C3%A9",
    },
  },
  {
    canvasHeight: 230,
    id: "wheatflour",
    title: "Trois parties du grain, plusieurs farines",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/comment-un-grain-de-ble-devient-il-de-la-farine",
    ],
    steps: [
      {
        label: "Grain",
        caption: "Le son entoure l’amande riche en amidon ; le germe occupe une petite zone.",
        detail:
          "Le grain rassemble plusieurs tissus : l’enveloppe, le germe et une amande riche en amidon.",
      },
      {
        label: "Moudre et séparer",
        caption: "Des cylindres ouvrent le grain ; des tamis séparent des fractions.",
        detail:
          "La mouture sépare et réduit ces parties en particules ; des fractions sont ensuite triées selon le produit recherché.",
      },
      {
        label: "Choisir les fractions",
        caption:
          "La farine blanche contient surtout l’amande, la complète conserve aussi son et germe.",
        detail:
          "La farine obtenue dépend des fractions conservées ; une farine complète inclut davantage de parties du grain.",
      },
    ],
    limit:
      "Coupe simplifiée d’un grain, sans proportion exacte ni correspondance automatique avec un type commercial.",
    source: {
      title: "Document INRAE (fichier 3898)",
      url: "https://ciag.hub.inrae.fr/content/download/3898/36490?version=1",
    },
  },
  {
    canvasHeight: 230,
    id: "yogurtculture",
    title: "Des bactéries changent la texture du lait",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/fermentation/comment-des-bacteries-transforment-elles-le-lait-en-yaourt",
    ],
    steps: [
      {
        label: "Ensemencer",
        caption: "Des bactéries lactiques sont ajoutées à un lait préparé.",
        detail:
          "Le lait préparé reçoit des ferments sélectionnés dans des conditions industrielles ou de fabrication adaptées.",
      },
      {
        label: "Acidifier",
        caption: "Leur activité transforme une partie du lactose en acide lactique.",
        detail:
          "Les bactéries utilisent du lactose et produisent de l’acide lactique ; le milieu s’acidifie progressivement.",
      },
      {
        label: "Former un gel",
        caption: "L’acidification déstabilise les caséines, qui forment le réseau du yaourt.",
        detail:
          "L’acidification contribue à former le gel de protéines ; le refroidissement ralentit ensuite l’activité sans forcément tuer les ferments.",
      },
    ],
    limit:
      "Mécanisme illustratif sans protocole de fabrication ; ni tout le lactose ni tous les microbes ne disparaissent.",
    source: {
      title: "Fermented foods: yoghurt",
      url: "https://grupos.eez.csic.es/imili/wp-content/uploads/2025/07/fermented-foods-yoghurt.pdf",
    },
  },
] satisfies readonly LessonDiagramSpec[];
