import type { LessonDiagramSpec } from "./registry";

/** Exact associations for the lessons reserved in the illustration queue. */
export const ATLAS100_DIAGRAMS = [
  {
    canvasHeight: 230,
    id: "populationGrid",
    title: "Lire des milliards sur une grille",
    paths: ["/geographie-et-territoires/geographie-humaine/demographie/huit-milliards-dhabitants"],
    steps: [
      {
        label: "Définir l’échelle",
        caption: "Quarante points représentent environ quatre milliards de personnes.",
        detail:
          "Chaque point vaut cent millions. Les estimations historiques ne sont pas un comptage au jour près.",
      },
      {
        label: "Comparer avec sept",
        caption: "Soixante-dix points représentent sept milliards.",
        detail:
          "La différence de trente points vaut trois milliards. La grille compare des effectifs, sans supposer la même vitesse de croissance.",
      },
      {
        label: "Repérer huit milliards",
        caption: "Les dix nouveaux points portent le total à huit milliards.",
        detail:
          "L’ONU a retenu 2022 comme repère symbolique. Les projections ultérieures dépendent notamment des naissances et de la mortalité.",
      },
    ],
    limit: "Grille proportionnelle en effectifs. Les dates de franchissement sont des estimations.",
    source: {
      title: "Nations unies — World Population Prospects",
      url: "https://population.un.org/wpp/",
    },
  },
  {
    canvasHeight: 230,
    id: "departmentBalance",
    title: "Deux soldes expliquent une variation de population",
    paths: [
      "/geographie-et-territoires/geographie-humaine/demographie/pourquoi-certains-departements-francais-gagnent-ils-des-habitants-et-d-autres-en-perdent-ils",
    ],
    steps: [
      {
        label: "Le solde naturel",
        caption: "Les naissances augmentent la population et les décès la diminuent.",
        detail:
          "Le solde naturel calcule la différence entre les naissances et les décès sur une même période.",
      },
      {
        label: "Le solde migratoire",
        caption: "Les arrivées et les départs modifient eux aussi la population.",
        detail: "Un solde peut être négatif même si des personnes continuent à arriver.",
      },
      {
        label: "Additionner les soldes",
        caption: "Un solde de +3 et un solde de −1 donnent +2.",
        detail:
          "Les deux composantes peuvent aussi se compenser. Un résultat nul peut cacher de nombreux mouvements.",
      },
    ],
    limit:
      "Effectifs fictifs. L’Insee utilise aussi un solde apparent selon les données disponibles.",
    source: {
      title: "Insee — Évolution de la population",
      url: "https://www.insee.fr/fr/statistiques/7726965",
    },
  },
  {
    canvasHeight: 230,
    id: "migrationStock",
    title: "La différence entre un déplacement et un effectif",
    paths: [
      "/geographie-et-territoires/geographie-humaine/migrations/migrations-realites-et-idees-recues",
    ],
    steps: [
      {
        label: "Changer de lieu",
        caption: "Un déplacement peut avoir lieu à l’intérieur d’un pays.",
        detail:
          "Un déplacement interne peut être durable ou forcé selon le contexte. Dans l’exemple, la frontière reste du même côté.",
      },
      {
        label: "Traverser une frontière",
        caption:
          "Une migration internationale implique un changement de pays de résidence dans la définition statistique utilisée.",
        detail: "Les situations juridiques ou les raisons du déplacement varient.",
      },
      {
        label: "Compter à une date",
        caption: "Un stock compte des personnes selon une définition, à une date précise.",
        detail:
          "Un flux compte des mouvements pendant une période. Une même personne peut effectuer plusieurs mouvements.",
      },
    ],
    limit:
      "Carte fictive. Les catégories de migrant, déplacé interne et réfugié ne sont pas équivalentes.",
    source: {
      title: "Nations unies — International Migrant Stock",
      url: "https://www.un.org/development/desa/pd/content/International-migrant-stock",
    },
  },
  {
    canvasHeight: 230,
    id: "crowdedCoast",
    title: "Pourquoi la bande côtière concentre les usages",
    paths: [
      "/geographie-et-territoires/geographie-humaine/pourquoi-tant-de-monde-vit-il-sur-un-si-petit-bout-de-cote-en-france",
    ],
    steps: [
      {
        label: "Lire le relief",
        caption: "La rencontre de la terre et de la mer attire des activités variées.",
        detail:
          "Ports, habitations et fréquentation saisonnière ne se répartissent pas de la même façon.",
      },
      {
        label: "Regarder le bâti",
        caption: "Une concentration de bâtiments peut apparaître dans une bande étroite.",
        detail:
          "La densité dépend du périmètre choisi. Touristes et habitants permanents sont mesurés différemment.",
      },
      {
        label: "Comparer deux lignes de côte",
        caption: "Le trait de côte peut se déplacer selon les conditions locales.",
        detail:
          "La dynamique des plages, l’érosion et les ouvrages modifient la forme du littoral au fil du temps.",
      },
    ],
    limit: "Carte fictive sans mesure du recul ni projection sur un lieu réel.",
    source: {
      title: "SDES — Environnement littoral et marin",
      url: "https://www.statistiques.developpement-durable.gouv.fr/environnement-littoral-et-marin-en-metropole-synthese-des-connaissances-en-2021",
    },
  },
  {
    canvasHeight: 230,
    id: "cityGrowth",
    title: "Du noyau urbain aux extensions",
    paths: ["/geographie-et-territoires/geographie-humaine/urbanisation/urbanisation-mondiale-onu"],
    steps: [
      {
        label: "Regarder le noyau",
        caption: "Un noyau d’habitat et d’activités peut concentrer les constructions.",
        detail: "La densité du bâti et le nombre d’habitants décrivent deux propriétés distinctes.",
      },
      {
        label: "Suivre les axes",
        caption: "Le bâti peut se prolonger le long de routes ou de transports.",
        detail:
          "Les nouvelles constructions peuvent créer des extensions ou relier plusieurs noyaux.",
      },
      {
        label: "Lire la part urbaine",
        caption: "L’urbanisation est une hausse de la part de la population vivant en ville.",
        detail:
          "Elle peut résulter de mouvements, de croissance démographique ou d’un changement de classification.",
      },
    ],
    limit: "Plan stylisé. Les pays emploient des seuils et des définitions différents.",
    source: {
      title: "Nations unies — World Urbanization Prospects",
      url: "https://population.un.org/wup/",
    },
  },
  {
    canvasHeight: 230,
    id: "overseasScale",
    title: "De petites terres dans de très grands espaces maritimes",
    paths: [
      "/geographie-et-territoires/geographie-physique/pourquoi-les-outre-mer-donnent-ils-a-la-france-un-territoire-si-disperse",
    ],
    steps: [
      {
        label: "Placer les terres",
        caption: "Les territoires d’outre-mer sont répartis dans plusieurs océans.",
        detail: "Une carte centrée sur la France métropolitaine peut masquer cette dispersion.",
      },
      {
        label: "Comparer terre et mer",
        caption:
          "Une île entoure un espace maritime dont l’étendue dépasse souvent celle de sa surface terrestre.",
        detail: "La façade maritime donne un point de départ pour comprendre cette différence.",
      },
      {
        label: "Lire une aire dispersée",
        caption:
          "Plusieurs domaines maritimes éloignés peuvent représenter ensemble une grande surface.",
        detail:
          "L’étendue et les limites dépendent du droit de la mer et des accords avec les voisins.",
      },
    ],
    limit:
      "Carte de principe. Les cercles ne dessinent ni des frontières ni des superficies officielles.",
    source: {
      title: "Sénat — Les outre-mer et leur espace maritime",
      url: "https://www.senat.fr/rap/r13-430/r13-43012.html",
    },
  },
  {
    canvasHeight: 230,
    id: "marineZones",
    title: "Lire les droits de la côte vers le large",
    paths: [
      "/geographie-et-territoires/geopolitique/frontieres/comment-partage-t-on-la-mer-entre-les-pays",
    ],
    steps: [
      {
        label: "Partir de la ligne de base",
        caption: "Les distances maritimes juridiques se mesurent depuis des lignes de base.",
        detail:
          "La ligne de base suit en principe le rivage à marée basse, avec des règles particulières selon la côte.",
      },
      {
        label: "Situer la mer territoriale",
        caption: "La mer territoriale peut s’étendre jusqu’à douze milles marins.",
        detail:
          "L’État y exerce sa souveraineté sous réserve des règles de la Convention, dont le passage inoffensif.",
      },
      {
        label: "Situer la ZEE",
        caption:
          "La zone économique exclusive peut s’étendre jusqu’à deux cents milles depuis les lignes de base.",
        detail:
          "Elle confère des droits sur les ressources tout en préservant notamment la liberté de navigation des autres États.",
      },
    ],
    limit:
      "Distances maximales et dessin hors échelle. Les délimitations entre voisins peuvent modifier ces contours.",
    source: {
      title: "Nations unies — Convention sur le droit de la mer",
      url: "https://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "borderMap",
    title: "Trois repères possibles pour tracer une frontière",
    paths: [
      "/geographie-et-territoires/geopolitique/frontieres/differend-frontalier-essequibo-guyana-venezuela",
    ],
    steps: [
      {
        label: "Suivre un cours d’eau",
        caption: "Un traité peut prendre une rivière comme référence.",
        detail:
          "La frontière choisit parfois le milieu ou un autre repère. Un déplacement du cours d’eau ne déplace pas automatiquement le tracé.",
      },
      {
        label: "Convenir d’une ligne",
        caption: "Une frontière peut relier des repères géométriques convenus.",
        detail:
          "Une ligne vue sur la carte résulte d’une délimitation. Les personnes qui habitent la région peuvent la vivre de façons différentes.",
      },
      {
        label: "Matérialiser le tracé",
        caption: "Des bornes peuvent aider à repérer une limite sur le terrain.",
        detail:
          "Les cartes et les bornes représentent un accord ou une décision dont le statut dépend du contexte.",
      },
    ],
    limit: "Frontières fictives. Le dessin ne fixe aucun tracé ni statut territorial réel.",
    source: {
      title: "Encyclopaedia Britannica — Political boundary",
      url: "https://www.britannica.com/topic/boundary-political-science",
    },
  },
  {
    canvasHeight: 230,
    id: "territoryAssets",
    title: "Inventorier un territoire de la surface au sous-sol",
    paths: ["/geographie-et-territoires/geopolitique/ressources/ressources-territoire"],
    steps: [
      {
        label: "Repérer en surface",
        caption: "Une carte peut montrer les usages de l’eau, du sol et du bois.",
        detail: "Une même ressource peut servir à plusieurs usages qui se concurrencent.",
      },
      {
        label: "Observer le sous-sol",
        caption:
          "Le sous-sol peut contenir des matériaux visibles seulement en coupe ou dans des données géologiques.",
        detail: "Une présence géologique ne suffit pas à définir une ressource exploitable.",
      },
      {
        label: "Relier à un besoin",
        caption: "L’accès, la qualité et les usages possibles modifient l’intérêt d’une ressource.",
        detail:
          "Les effets sur les milieux et l’approvisionnement à long terme font également partie du choix.",
      },
    ],
    limit:
      "Coupe fictive. La position et la taille des matières ne décrivent aucun gisement exploitable.",
    source: {
      title: "BRGM — InfoTerre",
      url: "https://infoterre.brgm.fr/",
    },
  },
  {
    canvasHeight: 230,
    id: "chartCompass",
    title: "Trois repères pour comprendre un relèvement",
    paths: ["/geographie-et-territoires/geopolitique/routes-et-detroits/naviguer-sans-gps"],
    steps: [
      {
        label: "Lire une carte",
        caption:
          "Deux objets reconnaissables peuvent servir de repères communs entre le terrain et la carte.",
        detail:
          "Il faut d’abord identifier correctement les objets. Les deux points du dessin sont fictifs.",
      },
      {
        label: "Comprendre le nord",
        caption: "Une boussole indique le nord magnétique.",
        detail:
          "Il peut différer du nord géographique. Les cartes et instruments exigent des conventions cohérentes.",
      },
      {
        label: "Recouper des directions",
        caption: "Deux directions vers des repères peuvent donner une position approximative.",
        detail: "L’angle de croisement et l’incertitude des mesures influencent le résultat.",
      },
    ],
    limit:
      "Exemple de géométrie hors échelle. La planche ne sert pas à préparer une navigation réelle.",
    source: {
      title: "NOAA — Nautical charts",
      url: "https://nauticalcharts.noaa.gov/",
    },
  },
  {
    canvasHeight: 230,
    id: "macroNutrients",
    title: "Reconnaître trois familles de molécules",
    paths: [
      "/alimentation-et-nutrition/nutriments/macronutriments/role-glucides-lipides-proteines",
    ],
    steps: [
      {
        label: "Les glucides",
        caption: "Les glucides comprennent des sucres simples et des assemblages plus longs.",
        detail: "L’amidon, par exemple, est formé d’unités de glucose reliées entre elles.",
      },
      {
        label: "Les lipides",
        caption: "De nombreux lipides alimentaires comportent des chaînes d’acides gras.",
        detail:
          "Un triglycéride associe trois acides gras à un squelette de glycérol. Il peut constituer une réserve d’énergie.",
      },
      {
        label: "Les protéines",
        caption: "Une protéine est une chaîne d’acides aminés qui adopte une ou plusieurs formes.",
        detail:
          "La suite des acides aminés influe sur sa forme et peut lui permettre de remplir une fonction précise.",
      },
    ],
    limit:
      "Symboles moléculaires sans formule ni proportions atomiques. Les familles contiennent de nombreuses variantes.",
    source: {
      title: "Anses — Les macronutriments",
      url: "https://www.anses.fr/fr/thematique/alimentation-humaine",
    },
  },
  {
    canvasHeight: 230,
    id: "essentialFat",
    title: "Lire le numéro des familles oméga",
    paths: ["/alimentation-et-nutrition/nutriments/macronutriments/acides-gras-essentiels"],
    steps: [
      {
        label: "Repérer une extrémité",
        caption:
          "Le nom oméga désigne la position d’une liaison double à partir d’une extrémité précise.",
        detail: "On compte les atomes de carbone à partir de l’extrémité dite méthyle.",
      },
      {
        label: "Comparer les familles",
        caption: "La première liaison double est au carbone 3 pour n-3 et au carbone 6 pour n-6.",
        detail:
          "Ce classement distingue deux familles. Il ne donne pas à lui seul la structure entière de la molécule.",
      },
      {
        label: "Relier à la nourriture",
        caption: "L’acide alpha-linolénique et l’acide linoléique sont essentiels chez l’humain.",
        detail:
          "Ils fournissent un point de départ pour d’autres molécules de leur famille. L’organisme doit obtenir ces deux acides gras par la nourriture.",
      },
    ],
    limit:
      "Chaînes abrégées. Seule la liaison utile à la comparaison est marquée. Aucun apport individuel n’est indiqué.",
    source: {
      title: "Anses — Les acides gras oméga-3",
      url: "https://www.anses.fr/fr/content/les-acides-gras-omega-3",
    },
  },
  {
    canvasHeight: 230,
    id: "carrotVision",
    title: "De la carotte à la vision quand la lumière baisse",
    paths: [
      "/alimentation-et-nutrition/nutriments/micronutriments/pourquoi-dit-on-que-les-carottes-font-voir-dans-le-noir",
    ],
    steps: [
      {
        label: "Repérer le pigment",
        caption:
          "La carotte contient du bêta-carotène, un pigment que le corps peut convertir en vitamine A.",
        detail: "La quantité convertie varie selon les aliments et le contexte.",
      },
      {
        label: "Situer la rétine",
        caption: "Un dérivé de la vitamine A participe au fonctionnement des pigments visuels.",
        detail:
          "Dans les bâtonnets, le pigment aide à capter la lumière faible. Les bâtonnets se trouvent dans la rétine, au fond de l’œil.",
      },
      {
        label: "Comprendre la limite",
        caption: "Les yeux ont besoin d’un signal lumineux, même faible.",
        detail:
          "Un apport supplémentaire en carottes ne donne pas de vision dans l’obscurité totale.",
      },
    ],
    limit:
      "Coupe de principe, sans doses ni conseils sur une carence. Le dessin ne retrace pas l’histoire de la propagande de guerre.",
    source: {
      title: "Anses — Vitamine A et caroténoïdes provitaminiques",
      url: "https://www.anses.fr/fr/content/vitamine-carotenoides-provitaminiques",
    },
  },
  {
    canvasHeight: 230,
    id: "coldContinuity",
    title: "Lire un trajet sur une courbe de température",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/securite-alimentaire/chaine-du-froid-et-risque-microbiologique",
    ],
    steps: [
      {
        label: "Suivre le trajet",
        caption: "Le produit passe par plusieurs moments de stockage et de transport.",
        detail: "Un relevé continu aide à comprendre ce qui lui est arrivé pendant la manutention.",
      },
      {
        label: "Repérer une rupture",
        caption: "Un pic montre qu’une phase moins froide a interrompu le trajet dans cet exemple.",
        detail:
          "La durée et l’ampleur du changement importent. Cette courbe représente un relevé fictif.",
      },
      {
        label: "Retrouver le froid",
        caption:
          "Refroidir de nouveau modifie la suite du trajet, tandis que l’exposition précédente a déjà eu lieu.",
        detail:
          "Le temps, le produit et les organismes concernés déterminent le risque. La ligne ne permet pas de trancher si un aliment peut être consommé.",
      },
    ],
    limit:
      "Profil fictif sans seuil ni durée de conservation. Pour une situation réelle, se référer aux consignes adaptées au produit.",
    source: {
      title: "OMS — Food safety",
      url: "https://www.who.int/news-room/fact-sheets/detail/food-safety",
    },
  },
  {
    canvasHeight: 230,
    id: "sealedPreserve",
    title: "Comprendre les deux fonctions d’une conserve",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/conservation/appertisation-et-sterilisation",
    ],
    steps: [
      {
        label: "Situer le récipient",
        caption: "Un récipient contient le produit et peut l’isoler du milieu extérieur.",
        detail: "Les premiers travaux d’Appert utilisaient notamment des récipients en verre.",
      },
      {
        label: "Comprendre le traitement",
        caption:
          "Un traitement validé pour le produit est destiné à maîtriser certains micro-organismes.",
        detail: "L’effet dépend de l’aliment, de son contenant et des caractéristiques du procédé.",
      },
      {
        label: "Comprendre la fermeture",
        caption: "Une fermeture étanche limite la recontamination après traitement.",
        detail:
          "La fermeture et l’efficacité du traitement remplissent des fonctions complémentaires. L’emballage seul ne certifie pas la sécurité du produit.",
      },
    ],
    limit:
      "Histoire et principe. Aucun paramètre ni méthode de fabrication d’une conserve à domicile n’est indiqué.",
    source: {
      title: "Encyclopaedia Britannica — Food preservation",
      url: "https://www.britannica.com/topic/food-preservation",
    },
  },
  {
    canvasHeight: 230,
    id: "saltWaterActivity",
    title: "Pourquoi l’eau disponible change dans un aliment salé",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/conservation/la-conservation-par-le-sel-salaisons-et-saumures",
    ],
    steps: [
      {
        label: "Situer l’eau",
        caption: "Une partie de l’eau présente peut être utilisée par des micro-organismes.",
        detail: "L’activité de l’eau décrit cette disponibilité plutôt que la seule masse d’eau.",
      },
      {
        label: "Observer l’effet du sel",
        caption: "Le sel dissous réduit l’activité de l’eau dans l’aliment.",
        detail:
          "Des échanges d’eau peuvent aussi se produire entre l’aliment et son environnement. Les repères bleus simplifient ces deux effets.",
      },
      {
        label: "Comparer les réponses",
        caption:
          "Les micro-organismes n’ont pas tous la même tolérance à une faible activité de l’eau.",
        detail:
          "La réduction de l’eau disponible peut ralentir la croissance de certains. La qualité et la sécurité dépendent de l’ensemble du procédé.",
      },
    ],
    limit: "Dessin qualitatif sans quantité, concentration, durée ni protocole de salaison.",
    source: {
      title: "FAO — Water activity in food",
      url: "https://www.fao.org/4/Y4358E/y4358e06.htm",
    },
  },
  {
    canvasHeight: 230,
    id: "seaweedLayers",
    title: "Relier l’algue à son milieu et à ses usages",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/algues-ressource-avenir",
    ],
    steps: [
      {
        label: "Observer le milieu",
        caption: "Les macroalgues marines vivent en contact avec l’eau qui les entoure.",
        detail:
          "Certaines sont fixées à un support. Les formes et les conditions varient selon les espèces.",
      },
      {
        label: "Suivre la lumière",
        caption: "La lumière permet la photosynthèse et influence la profondeur de croissance.",
        detail:
          "Salinité, température et nutriments comptent aussi. Les conditions varient au cours de l’année.",
      },
      {
        label: "Distinguer les usages",
        caption: "Les algues peuvent fournir des aliments ou des matières premières.",
        detail:
          "La composition et l’usage ne sont pas interchangeables entre espèces. Certaines filières valorisent des composés qui épaississent des mélanges.",
      },
    ],
    limit:
      "Coupe stylisée. Le dessin n’identifie aucune algue à consommer et ne garantit pas la qualité d’une algue prélevée.",
    source: {
      title: "FAO — Seaweeds and microalgae",
      url: "https://www.fao.org/fishery/en/topic/16210",
    },
  },
  {
    canvasHeight: 230,
    id: "emulsionAdditive",
    title: "Pourquoi les gouttes ne se comportent pas toutes pareil",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/additifs-alimentaires",
    ],
    steps: [
      {
        label: "Comparer deux couches",
        caption: "L’huile et l’eau tendent à former deux phases séparées.",
        detail:
          "L’huile dessinée au-dessus représente un des cas fréquents. Les propriétés dépendent des liquides utilisés.",
      },
      {
        label: "Former des gouttes",
        caption: "Le mélange peut disperser un liquide en petites gouttes dans l’autre.",
        detail:
          "Une dispersion créée mécaniquement peut évoluer. Les gouttes peuvent se regrouper avec le temps.",
      },
      {
        label: "Stabiliser la dispersion",
        caption: "Un émulsifiant peut réduire la tendance des gouttes à fusionner.",
        detail:
          "Il agit à la surface entre les liquides. C’est une fonction parmi celles que peuvent remplir certains additifs.",
      },
    ],
    limit:
      "Gouttes agrandies et nombre indicatif. Le résultat varie avec le produit, son procédé et les autres ingrédients.",
    source: {
      title: "Commission européenne — Food additives",
      url: "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en",
    },
  },
  {
    canvasHeight: 230,
    id: "cookingRetention",
    title: "Deux façons dont la cuisson change les nutriments",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/cuisson-et-nutriments",
    ],
    steps: [
      {
        label: "Partir de l’aliment",
        caption: "Les nutriments sont répartis dans les tissus de l’aliment.",
        detail: "On suit ici un légume dans de l’eau sans fixer une méthode de préparation.",
      },
      {
        label: "Suivre ce qui se dissout",
        caption: "Une partie des substances solubles peut passer dans l’eau de cuisson.",
        detail:
          "Ce transfert change la répartition entre l’aliment et le liquide. Il ne détruit pas nécessairement les molécules transférées.",
      },
      {
        label: "Ajouter l’effet thermique",
        caption: "Certaines vitamines sont sensibles à la chaleur et à la durée de traitement.",
        detail:
          "La cuisson peut également rendre certains composés plus accessibles. Les effets ne sont pas les mêmes pour tous les nutriments.",
      },
    ],
    limit: "Schéma qualitatif. Aucune quantité retenue ou température de cuisson n’est calculée.",
    source: {
      title: "USDA — Table of Nutrient Retention Factors",
      url: "https://www.ars.usda.gov/ARSUserFiles/80400525/Data/retn/retn06.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "sweetnessDose",
    title: "Séparer le goût sucré des fonctions du sucre",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/edulcorants",
    ],
    steps: [
      {
        label: "Repérer la sensation",
        caption: "Deux substances différentes peuvent provoquer une sensation sucrée.",
        detail: "Le goût dépend aussi de la recette, du mélange et des personnes.",
      },
      {
        label: "Comparer des masses",
        caption:
          "Certains édulcorants donnent une sensation sucrée avec une masse plus faible que le sucre.",
        detail:
          "La comparaison est qualitative. Elle varie selon le composé et ce qu’on appelle une intensité comparable.",
      },
      {
        label: "Comparer une texture",
        caption: "Le sucre peut aussi contribuer au volume et à la structure d’un produit.",
        detail:
          "Remplacer le goût sucré ne reproduit pas toutes ces fonctions. La texture demande une autre comparaison.",
      },
    ],
    limit:
      "Formes et quantités indicatives. La planche n’évalue aucun effet de santé ni substitution alimentaire personnelle.",
    source: {
      title: "EFSA — Édulcorants",
      url: "https://www.efsa.europa.eu/fr/topics/topic/sweeteners",
    },
  },
  {
    canvasHeight: 230,
    id: "pigmentLayers",
    title: "Comprendre où se trouve un pigment ancien",
    paths: [
      "/arts-et-culture/arts-visuels/peinture-et-sculpture/pourquoi-certains-pigments-des-maitres-anciens-etaient-ils-dangereux",
    ],
    steps: [
      {
        label: "Repérer la couche",
        caption: "Le pigment donne sa couleur à une couche de peinture.",
        detail:
          "Le liant fixe les particules sur le support. La couche peut aussi inclure des matières de nature différente.",
      },
      {
        label: "Voir un détachement",
        caption: "Une couche dégradée peut libérer des particules.",
        detail:
          "La loupe symbolise un changement d’état. Certains pigments historiques contiennent des composés toxiques.",
      },
      {
        label: "Distinguer présence et exposition",
        caption:
          "Le danger de la substance et l’exposition à celle-ci sont deux questions distinctes.",
        detail:
          "La nature du matériau, son état et les manipulations influencent l’évaluation par les professionnels.",
      },
    ],
    limit: "Coupe fictive. Aucune recette de pigment ni procédure d’intervention n’est fournie.",
    source: {
      title: "Institut canadien de conservation — Le plomb dans les collections",
      url: "https://www.canada.ca/fr/institut-conservation/services/publications-conservation-preservation/notes-institut-canadien-conservation/plomb-collections-museales.html",
    },
  },
  {
    canvasHeight: 230,
    id: "paintingAuction",
    title: "Pourquoi un dossier change la lecture d’un prix",
    paths: ["/arts-et-culture/arts-visuels/peinture-et-sculpture/salvator-mundi-record-denchere"],
    steps: [
      {
        label: "Étudier l’historique",
        caption: "Le même objet peut changer de propriétaires et d’interprétation.",
        detail:
          "Les documents, observations et restaurations contribuent au dossier, avec des degrés d’incertitude variables.",
      },
      {
        label: "Réexaminer l’attribution",
        caption: "Une attribution change les attentes autour d’une œuvre.",
        detail:
          "L’auteur supposé n’est qu’un des facteurs. La rareté, la provenance, l’état et le marché comptent aussi.",
      },
      {
        label: "Observer l’enchère",
        caption: "Une vente enchérit jusqu’au prix retenu par le mécanisme de vente.",
        detail:
          "Le prix final d’une vente précise n’est pas à lui seul une mesure de la qualité artistique.",
      },
    ],
    limit:
      "Un cadre original illustre le principe. La planche ne reproduit pas l’œuvre et ne convertit pas des monnaies ou des prix historiques.",
    source: {
      title: "Christie’s — Salvator Mundi, lot de la vente 2017",
      url: "https://www.christies.com/en/lot/lot-6110563",
    },
  },
  {
    canvasHeight: 230,
    id: "heritageListing",
    title: "De l’identification d’un site à son suivi",
    paths: [
      "/arts-et-culture/patrimoine/musees-et-conservation/liste-du-patrimoine-mondial-unesco",
    ],
    steps: [
      {
        label: "Présenter le site",
        caption: "Un dossier expose ce qui rend le bien significatif et comment il est géré.",
        detail:
          "Il associe des éléments de valeur, des limites et des informations sur sa conservation.",
      },
      {
        label: "Évaluer",
        caption: "Une proposition d’inscription est examinée selon des critères communs.",
        detail:
          "Les organes consultatifs et le comité interviennent à différentes étapes de l’évaluation et de la décision.",
      },
      {
        label: "Suivre dans le temps",
        caption: "L’inscription s’accompagne d’un suivi des conditions de protection.",
        detail:
          "Le suivi aide à identifier des évolutions du site ou des pressions sur sa conservation.",
      },
    ],
    limit: "Site fictif et procédure simplifiée. Les étapes peuvent varier selon le dossier.",
    source: {
      title: "UNESCO — Orientations du patrimoine mondial",
      url: "https://whc.unesco.org/en/guidelines/",
    },
  },
  {
    canvasHeight: 230,
    id: "radioAlert",
    title: "Comprendre pourquoi la radio peut compléter les alertes",
    paths: [
      "/communication-et-medias/histoire-des-medias/radio-et-television/la-radio-comme-outil-d-alerte-en-cas-de-catastrophe",
    ],
    steps: [
      {
        label: "Émettre",
        caption: "Un émetteur radiodiffuse l’information vers une zone.",
        detail: "Les ondes peuvent atteindre de nombreux points sans liaison individuelle.",
      },
      {
        label: "Recevoir en plusieurs lieux",
        caption: "Plusieurs postes peuvent capter le même signal en même temps.",
        detail: "La portée dépend de l’émetteur, des obstacles, du poste et des conditions.",
      },
      {
        label: "Distinguer les alimentations",
        caption: "Un poste autonome ne dépend pas directement d’une prise secteur du logement.",
        detail:
          "L’émetteur dépend aussi de son infrastructure et de son alimentation. Ce canal complète d’autres moyens d’alerte.",
      },
    ],
    limit:
      "Schéma de diffusion sans station ni fréquence réelle. Les alertes officielles et la disponibilité des réseaux varient selon le lieu.",
    source: {
      title: "Sécurité civile — Système d’alerte des populations",
      url: "https://www.securite-civile.interieur.gouv.fr/reagir/comment-se-preparer-face-aux-risques/systeme-dalerte-des",
    },
  },
  {
    canvasHeight: 230,
    id: "tvSchedule",
    title: "Trois manières de partager le temps d’un programme",
    paths: [
      "/communication-et-medias/histoire-des-medias/radio-et-television/television-du-direct-au-flux-a-la-demande",
    ],
    steps: [
      {
        label: "Suivre une grille",
        caption: "Une programmation fixe indique un horaire commun de diffusion.",
        detail: "Les foyers qui choisissent ce programme peuvent le voir au même moment.",
      },
      {
        label: "Regarder en différé",
        caption: "Un programme enregistré ou mis à disposition peut être regardé plus tard.",
        detail: "Le temps de diffusion et le temps de visionnage deviennent distincts.",
      },
      {
        label: "À la demande",
        caption: "Différents spectateurs peuvent commencer à des heures différentes.",
        detail:
          "Des événements continuent d’être suivis en direct. Grille et demande peuvent coexister.",
      },
    ],
    limit:
      "Horaires fictifs. L’exercice compare des modèles de diffusion et ne chiffre pas les usages.",
    source: {
      title: "Ofcom — Media Nations 2025",
      url: "https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-adults/media-nations-2025",
    },
  },
  {
    canvasHeight: 230,
    id: "verifyClaim",
    title: "Vérifier une page en sortant de son cadre",
    paths: [
      "/communication-et-medias/information-et-verification/education-aux-medias/education-aux-medias-et-a-linformation",
    ],
    steps: [
      {
        label: "Repérer l’auteur",
        caption: "Une page doit être replacée dans son contexte de publication.",
        detail: "Relever qui signe et qui héberge permet de formuler une question vérifiable.",
      },
      {
        label: "Lire latéralement",
        caption:
          "Chercher d’autres informations sur la source peut révéler son rôle et ses pratiques.",
        detail:
          "Des pages qui se répètent ne constituent pas forcément des confirmations indépendantes.",
      },
      {
        label: "Remonter au document",
        caption:
          "L’article original, le rapport ou le document complet peut fournir un contexte manquant.",
        detail: "Comparer la date et les mots d’origine aide à repérer une citation déformée.",
      },
    ],
    limit:
      "Exemples fictifs. Aucun signe unique ne prouve à lui seul qu’une information est exacte.",
    source: {
      title: "Stanford Digital Inquiry Group — Lateral reading",
      url: "https://cor.inquirygroup.org/curriculum/lessons/intro-to-lateral-reading/",
    },
  },
  {
    canvasHeight: 230,
    id: "newsroomCheck",
    title: "Suivre une affirmation avant sa publication",
    paths: [
      "/communication-et-medias/information-et-verification/journalisme/comment-les-journalistes-verifient-ils-une-information-avant-de-la-publier",
    ],
    steps: [
      {
        label: "Formuler le fait",
        caption:
          "Identifier une phrase précise permet de dire clairement ce qui doit être vérifié.",
        detail:
          "La rédaction distingue une affirmation factuelle d’une opinion ou d’un commentaire.",
      },
      {
        label: "Chercher des traces",
        caption: "Une source indépendante peut confirmer, contredire ou préciser le fait.",
        detail:
          "La date, le lieu et la provenance changent la valeur d’un document ou d’une image.",
      },
      {
        label: "Rendre les preuves visibles",
        caption: "Un article vérifié indique ce qui a pu être établi et sur quoi cela repose.",
        detail:
          "Les éléments incertains peuvent rester qualifiés, et une erreur peut donner lieu à une correction.",
      },
    ],
    limit:
      "Pièces fictives. Les étapes et exigences varient selon la rédaction et la nature de l’information.",
    source: {
      title: "AFP — Charte des bonnes pratiques éditoriales",
      url: "https://www.afp.com/sites/default/files/2025-05/charte_deontologique_AFP-F%C3%A9vrier2025.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "pressRevenue",
    title: "Lire les différentes recettes d’un journal",
    paths: [
      "/communication-et-medias/information-et-verification/journalisme/crise-economique-de-la-presse",
    ],
    steps: [
      {
        label: "Observer les ventes",
        caption: "La vente d’exemplaires est une source de recettes possible.",
        detail: "Le lecteur peut acheter un numéro ou payer pour un accès régulier.",
      },
      {
        label: "Observer la publicité",
        caption: "La publication peut aussi vendre de l’espace ou de l’attention à des annonceurs.",
        detail:
          "Les recettes publicitaires et les ventes peuvent évoluer dans des sens différents.",
      },
      {
        label: "Regarder le modèle entier",
        caption: "Le poids des abonnements et de la publicité peut changer.",
        detail:
          "D’autres ressources existent selon la publication. Comparer les périodes demande des définitions cohérentes.",
      },
    ],
    limit:
      "Barres fictives. Le dessin ne présente ni des données comptables réelles ni une tendance chiffrée.",
    source: {
      title: "UNESCO — Journalism as a public good",
      url: "https://www.unesco.org/reports/world-media-trends/2021/en/journalism-public-good",
    },
  },
  {
    canvasHeight: 230,
    id: "protectedSource",
    title: "Distinguer l’identité de la source et la preuve publiée",
    paths: [
      "/communication-et-medias/information-et-verification/journalisme/secret-des-sources-et-protection-des-journalistes",
    ],
    steps: [
      {
        label: "Recevoir un élément",
        caption: "Une personne peut apporter une information à un journaliste.",
        detail:
          "L’identité de cette personne et la valeur de l’information sont deux questions distinctes.",
      },
      {
        label: "Vérifier l’élément",
        caption:
          "La rédaction peut chercher des documents ou d’autres témoignages qui étayent le fait.",
        detail:
          "L’emploi de l’anonymat rend le travail de vérification particulièrement important.",
      },
      {
        label: "Publier le résultat",
        caption:
          "L’article peut rapporter des éléments établis sans divulguer l’identité de la personne.",
        detail:
          "Les règles et les exceptions à la protection des sources dépendent du cadre applicable.",
      },
    ],
    limit: "Scénario fictif. Cette planche décrit la démarche éditoriale générale.",
    source: {
      title: "AFP — Principes concernant les sources",
      url: "https://www.afp.com/sites/default/files/afp_-_vingt_principes_concernant_les_sources_-_juillet_2024.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "openWeb",
    title: "Comprendre ce qu’une adresse rend partageable",
    paths: ["/communication-et-medias/medias-numeriques/web/web-ouvert-et-plateformes-fermees"],
    steps: [
      {
        label: "Relier des pages",
        caption: "Sur le Web, un lien peut désigner une page par son adresse.",
        detail:
          "Des sites distincts peuvent s’appuyer sur les mêmes techniques tout en restant indépendants.",
      },
      {
        label: "Limiter l’accès",
        caption: "Une page peut demander de s’identifier ou d’avoir une autorisation.",
        detail:
          "Connaître l’adresse ne garantit alors pas que le destinataire pourra lire le contenu.",
      },
      {
        label: "Partager un lien ouvert",
        caption:
          "Une adresse publique peut conduire différents lecteurs vers le même contenu accessible.",
        detail:
          "La visibilité par un moteur de recherche dépend en plus de la façon dont le site et le moteur l’autorisent.",
      },
    ],
    limit:
      "Pages fictives. Le dessin distingue l’adresse d’une ressource, son accès public et son indexation.",
    source: {
      title: "W3C — Architecture of the World Wide Web",
      url: "https://www.w3.org/TR/webarch/",
    },
  },
  {
    canvasHeight: 230,
    id: "autoInnovations",
    title: "Trois innovations, trois rôles de sécurité",
    paths: ["/automobile/industrie-automobile/histoire-innovations-automobiles"],
    steps: [
      {
        label: "Retenir les occupants",
        caption: "La ceinture limite le déplacement du corps lors d’un choc.",
        detail:
          "Elle répartit l’effort sur certaines parties du corps quand elle est utilisée comme prévu.",
      },
      {
        label: "Garder de la maîtrise",
        caption: "L’ABS module la pression de freinage pour limiter le blocage des roues.",
        detail:
          "Il répond à une situation de freinage. Ses effets dépendent de la route, du véhicule et des pneus.",
      },
      {
        label: "Amortir un mouvement",
        caption: "Un coussin gonflable peut atténuer certains contacts lors d’un choc.",
        detail:
          "Il est conçu pour travailler avec la ceinture. La protection varie selon le choc et la place occupée.",
      },
    ],
    limit:
      "Vues fonctionnelles hors échelle. Elles ne constituent ni un calendrier précis ni un guide de conduite.",
    source: {
      title: "NHTSA — How Vehicle Safety Has Improved",
      url: "https://www.nhtsa.gov/how-vehicle-safety-has-improved-over-decades",
    },
  },
  {
    canvasHeight: 230,
    id: "carMaterialChain",
    title: "Du minerai au composant automobile",
    paths: [
      "/automobile/industrie-automobile/production/matieres-premieres-automobile-lithium-cobalt-nickel",
    ],
    steps: [
      {
        label: "Situer le minerai",
        caption: "Un minerai contient des éléments recherchés mêlés à d’autres matières.",
        detail: "La composition et les étapes nécessaires diffèrent selon la ressource et le site.",
      },
      {
        label: "Préparer la matière",
        caption:
          "La transformation puis le raffinage fournissent des matières répondant à certains niveaux de qualité.",
        detail:
          "La disponibilité d’un minerai et la capacité à le transformer sont deux contraintes distinctes.",
      },
      {
        label: "Fabriquer le composant",
        caption: "Les fabricants utilisent des matières adaptées à une pièce ou à un circuit.",
        detail:
          "Le cuivre d’un conducteur et la matière d’un composant électronique répondent à des besoins différents.",
      },
    ],
    limit:
      "Exemple fonctionnel sans procédé ni quantité. Les métaux peuvent aussi provenir du recyclage.",
    source: {
      title: "AIE — Global Critical Minerals Outlook",
      url: "https://www.iea.org/reports/global-critical-minerals-outlook-2025",
    },
  },
  {
    canvasHeight: 230,
    id: "carFactoryNetwork",
    title: "Lire l’assemblage dans un réseau de sites",
    paths: ["/automobile/industrie-automobile/production/production-automobile-mondiale"],
    steps: [
      {
        label: "Fabriquer des composants",
        caption: "Une voiture regroupe des pièces de sites différents.",
        detail:
          "Un site peut se spécialiser dans un type de pièce ou une sous-famille de véhicules.",
      },
      {
        label: "Assembler",
        caption: "Les composants rejoignent un site d’assemblage selon des délais coordonnés.",
        detail:
          "Des pièces peuvent être préparées à proximité. Les flux changent selon le modèle et la région.",
      },
      {
        label: "Distribuer",
        caption: "Les véhicules finis rejoignent les marchés par plusieurs modes de transport.",
        detail:
          "Le lieu de fabrication, la marque et le lieu de vente désignent des choses différentes.",
      },
    ],
    limit:
      "Réseau et carte fictifs. Aucun volume, itinéraire commercial ou classement de pays n’est représenté.",
    source: {
      title: "OICA — Statistiques de production",
      url: "https://oica.net/fr/production-statistics/",
    },
  },
  {
    canvasHeight: 230,
    id: "autoChipSupply",
    title: "Voir pourquoi une petite puce peut avoir un grand effet",
    paths: ["/automobile/industrie-automobile/production/semi-conducteurs-automobile"],
    steps: [
      {
        label: "Identifier la puce",
        caption: "Des puces entrent dans la fabrication de modules électroniques.",
        detail:
          "Leur taille ou leur prix ne représente pas toujours leur importance dans l’ensemble.",
      },
      {
        label: "Suivre la fonction",
        caption: "Un module permet à un véhicule d’exécuter certaines mesures ou commandes.",
        detail:
          "Les composants doivent répondre à des caractéristiques de fonctionnement et de qualification.",
      },
      {
        label: "Repérer une dépendance",
        caption: "Une référence manquante peut empêcher d’achever le module et la voiture.",
        detail:
          "Une autre puce n’est pas automatiquement interchangeable. La conception, les essais et l’approvisionnement comptent.",
      },
    ],
    limit:
      "Module fictif. La planche n’implique ni qu’une seule puce est utilisée, ni un protocole de remplacement.",
    source: {
      title: "Parlement européen — European Chips Act",
      url: "https://research.europarl.europa.eu/EPRS_BRI%282026%29774694",
    },
  },
  {
    canvasHeight: 230,
    id: "recallTrace",
    title: "Suivre les véhicules concernés par une correction",
    paths: [
      "/automobile/industrie-automobile/reglementation-automobile/rappels-automobiles-securite",
    ],
    steps: [
      {
        label: "Délimiter la série",
        caption: "Un défaut détecté peut concerner un ensemble de véhicules identifiables.",
        detail:
          "Regarder un symptôme isolé ne permet pas de déduire à lui seul l’étendue d’un rappel.",
      },
      {
        label: "Identifier précisément",
        caption: "Les références d’un véhicule aident à le rapprocher de la série concernée.",
        detail: "La date de production ou le lot de montage peuvent compléter cette recherche.",
      },
      {
        label: "Confirmer l’action",
        caption: "Le suivi indique si la correction prévue a été appliquée.",
        detail:
          "Le contenu de l’intervention dépend du défaut. La traçabilité facilite la vérification ultérieure.",
      },
    ],
    limit:
      "Identifiants inventés. Le dessin ne représente aucun rappel réel. Pour un véhicule précis, utiliser les canaux officiels.",
    source: {
      title: "NHTSA — Vehicle recalls",
      url: "https://www.nhtsa.gov/recalls",
    },
  },
  {
    canvasHeight: 230,
    id: "evPower",
    title: "Suivre l’électricité entre batterie et roues",
    paths: ["/automobile/motorisations/electrique/voiture-electrique"],
    steps: [
      {
        label: "Stocker",
        caption: "La batterie de traction conserve de l’énergie sous forme chimique.",
        detail:
          "Le véhicule dispose aussi d’éléments de gestion et de protection dont le dessin ne détaille pas le câblage.",
      },
      {
        label: "Entraîner",
        caption: "L’électronique de puissance adapte l’énergie électrique au moteur.",
        detail: "Le moteur crée un couple qui est transmis aux roues par la chaîne mécanique.",
      },
      {
        label: "Récupérer",
        caption: "Une décélération peut permettre au moteur de fonctionner comme génératrice.",
        detail:
          "Une partie de l’énergie revient vers la batterie. Les limites électriques, mécaniques et d’adhérence influent sur la récupération.",
      },
    ],
    limit:
      "Flux fonctionnels hors échelle. Aucun câblage ni paramètre d’intervention n’est représenté.",
    source: {
      title: "US Department of Energy — How Do All-Electric Cars Work?",
      url: "https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work",
    },
  },
  {
    canvasHeight: 230,
    id: "valveTiming",
    title: "Comparer le déphasage des soupapes et la suralimentation",
    paths: ["/automobile/motorisations/thermique/distribution-variable-turbocompresseur"],
    steps: [
      {
        label: "Lire l’ouverture",
        caption: "La position de la soupape suit le cycle du moteur.",
        detail:
          "Le graphique indique une ouverture relative au fil de l’angle, dans un exemple idéalisé.",
      },
      {
        label: "Décaler le profil",
        caption: "Une distribution variable peut modifier le moment d’ouverture ou de fermeture.",
        detail:
          "Certaines architectures peuvent aussi modifier la levée ou la durée. La vue isole le déphasage.",
      },
      {
        label: "Agir sur l’air",
        caption: "Un turbocompresseur agit autrement en comprimant l’air admis.",
        detail:
          "Le travail vient de la turbine entraînée par les gaz d’échappement. Les deux approches peuvent coexister.",
      },
    ],
    limit:
      "Courbes fictives et dessin sans réglages. Le résultat dépend du moteur et de son régime.",
    source: {
      title: "Techniques de l’Ingénieur — Variable Valve Timing Technologies",
      url: "https://www.techniques-ingenieur.fr/en/resources/article/ti151/variable-valve-timing-technologies-for-internal-combustion-engines-bm2580",
    },
  },
  {
    canvasHeight: 230,
    id: "enginePumps",
    title: "Comparer les trajets de trois fluides",
    paths: ["/automobile/motorisations/thermique/pompes-voiture-thermique"],
    steps: [
      {
        label: "Faire circuler l’huile",
        caption: "Une pompe contribue à alimenter les éléments à lubrifier.",
        detail:
          "Le circuit d’huile assure aussi un transport de chaleur et peut inclure un filtre.",
      },
      {
        label: "Faire circuler le liquide de refroidissement",
        caption: "Un autre circuit transporte de la chaleur vers un échangeur.",
        detail:
          "Sa pompe aide à déplacer le liquide. Le trajet varie selon le système de refroidissement.",
      },
      {
        label: "Amener le carburant",
        caption: "Une ou plusieurs pompes peuvent alimenter le système d’injection.",
        detail: "Ce trajet et ses composants dépendent du type de moteur et de carburant.",
      },
    ],
    limit:
      "Trois circuits fonctionnels simplifiés. Le dessin ne donne ni pression, ni procédure de diagnostic ou de maintenance.",
    source: {
      title: "Bosch Mobility — Powertrain systems",
      url: "https://www.bosch-mobility.com/en/solutions/powertrain/",
    },
  },
  {
    canvasHeight: 230,
    id: "diagnosticChain",
    title: "Pourquoi le code défaut est un point de départ",
    paths: [
      "/automobile/usages-et-mobilite/entretien-et-cycle-de-vie/diagnostic-electronique-reparation-automobile",
    ],
    steps: [
      {
        label: "Lire l’observation",
        caption: "Un calculateur conserve certains écarts détectés sous forme de codes.",
        detail: "Le code décrit ce que le système observe selon des règles de diagnostic.",
      },
      {
        label: "Comparer les hypothèses",
        caption: "Un même signal inhabituel peut venir de causes différentes.",
        detail:
          "Un capteur, une liaison ou une autre cause peuvent produire un symptôme comparable.",
      },
      {
        label: "Tester une hypothèse",
        caption: "Une mesure est confrontée au comportement attendu avant d’imputer la cause.",
        detail:
          "Le contrôle final cherche à savoir si le défaut et son symptôme réapparaissent dans les conditions concernées.",
      },
    ],
    limit: "Exemple fictif, sans code, accès, commande ou méthode de contournement réelle.",
    source: {
      title: "California Air Resources Board — On-Board Diagnostics",
      url: "https://ww2.arb.ca.gov/our-work/programs/obd",
    },
  },
  {
    canvasHeight: 230,
    id: "batteryMaterials",
    title: "Suivre les matières d’une batterie après usage",
    paths: [
      "/automobile/usages-et-mobilite/entretien-et-cycle-de-vie/recyclage-batteries-vehicules-electriques",
    ],
    steps: [
      {
        label: "Évaluer l’état",
        caption: "L’état de la batterie oriente les décisions prises en fin d’usage.",
        detail:
          "Réparer, réemployer ou recycler sont des voies qui dépendent du système et des exigences de sécurité.",
      },
      {
        label: "Séparer les fractions",
        caption: "Les filières industrielles séparent différentes matières au cours du traitement.",
        detail: "Le boîtier et les matériaux actifs suivent des voies qui peuvent différer.",
      },
      {
        label: "Récupérer des matières",
        caption: "Les procédés cherchent à récupérer des matières utiles pour de nouveaux usages.",
        detail: "La chimie de la cellule influence la valeur et la voie de récupération possibles.",
      },
    ],
    limit:
      "Flux industriels de principe. Aucun démontage à domicile ni procédé chimique n’est indiqué.",
    source: {
      title: "US Department of Energy — Batteries for Electric Vehicles",
      url: "https://afdc.energy.gov/vehicles/electric-batteries",
    },
  },
  {
    canvasHeight: 230,
    id: "drivingFatigue",
    title: "Comment la vigilance change la perception",
    paths: ["/automobile/securite-et-conduite/ergonomie-fatigue-conduite"],
    steps: [
      {
        label: "Repérer les indices",
        caption: "Le conducteur regarde différents points qui l’aident à comprendre la route.",
        detail:
          "Le regard et l’attention mentale ne se confondent pas. Une information visible peut passer inaperçue.",
      },
      {
        label: "Voir une attention fluctuante",
        caption: "La fatigue peut diminuer la vigilance et la capacité à traiter ce qui change.",
        detail:
          "La vision représentée est une métaphore. Un clignement ou un regard isolé ne suffit pas à mesurer la fatigue.",
      },
      {
        label: "Situer une aide possible",
        caption:
          "Un système peut avertir dans certaines situations qu’il interprète comme préoccupantes.",
        detail:
          "L’alerte dépend des capteurs et de la méthode. Elle ne rétablit pas la vigilance du conducteur.",
      },
    ],
    limit:
      "Scène fictive, sans recommandation médicale ou verdict d’aptitude. Les capacités des aides dépendent du véhicule.",
    source: {
      title: "NHTSA — Drowsy driving",
      url: "https://www.nhtsa.gov/risky-driving/drowsy-driving",
    },
  },
  {
    canvasHeight: 230,
    id: "trafficNoise",
    title: "Distinguer ce qu’on entend selon le passage d’un véhicule",
    paths: ["/automobile/usages-et-mobilite/bruit-routier-sante-et-pneus"],
    steps: [
      {
        label: "Écouter le groupe moteur",
        caption:
          "À certaines vitesses ou phases d’accélération, le groupe motorisé contribue au bruit entendu.",
        detail: "Le niveau dépend du modèle et de ce qu’il fait au moment du passage.",
      },
      {
        label: "Écouter les pneus",
        caption: "Le contact entre les pneus et la chaussée produit lui aussi du bruit.",
        detail:
          "Sa contribution peut devenir dominante. La vitesse, le pneu et la surface changent cette comparaison.",
      },
      {
        label: "Changer la surface",
        caption: "Deux revêtements peuvent produire des niveaux de bruit différents.",
        detail:
          "Des fréquences et des conditions météorologiques différentes modifient aussi la propagation.",
      },
    ],
    limit: "Ondes symboliques sans niveau sonore ni seuil de vitesse universel.",
    source: {
      title: "Danish Road Directorate — Noise from electric vehicles",
      url: "https://www.vejdirektoratet.dk/udgivelse/noise-electric-vehicles-0",
    },
  },
  {
    canvasHeight: 230,
    id: "anticipationEnergy",
    title: "Pourquoi deux profils de vitesse ont des coûts différents",
    paths: ["/automobile/usages-et-mobilite/eco-conduite-consommation-securite"],
    steps: [
      {
        label: "Suivre la vitesse",
        caption: "La courbe montre comment la vitesse peut changer avec la distance.",
        detail:
          "Deux passages au même endroit n’ont pas forcément la même vitesse ou le même besoin d’énergie.",
      },
      {
        label: "Comparer une décélération",
        caption:
          "Le véhicule doit perdre une partie de son énergie de mouvement avant de ralentir.",
        detail:
          "Cette énergie peut être dissipée par le freinage ou en partie récupérée selon le véhicule.",
      },
      {
        label: "Comprendre l’anticipation",
        caption:
          "Un ralentissement qui commence plus tôt peut modifier l’effort nécessaire ensuite.",
        detail: "La circulation, la sécurité et le parcours déterminent ce qui est possible.",
      },
    ],
    limit: "Profils fictifs sans vitesses, bilan ni consigne de conduite.",
    source: {
      title: "ADEME — Écoconduite et consommation",
      url: "https://agirpourlatransition.ademe.fr/particuliers/economiser/carburant/ecoconduite-solution-consommer-moins-carburant-limiter-emissions-co2",
    },
  },
  {
    canvasHeight: 230,
    id: "vehicleLifeCycle",
    title: "Lire deux trajectoires d’émissions sur une durée d’usage",
    paths: [
      "/automobile/usages-et-mobilite/entretien-et-cycle-de-vie/analyse-du-cycle-de-vie-dune-automobile",
    ],
    steps: [
      {
        label: "Partir de la fabrication",
        caption: "Les deux véhicules peuvent avoir un bilan différent avant le premier kilomètre.",
        detail: "La batterie, les matériaux et la production influencent ce point de départ.",
      },
      {
        label: "Ajouter l’usage",
        caption:
          "Chaque déplacement ajoute des émissions selon l’énergie utilisée et les conditions du trajet.",
        detail:
          "Les pentes du modèle illustrent une comparaison possible. Un croisement dépend des hypothèses et n’est pas garanti.",
      },
      {
        label: "Considérer la fin de vie",
        caption: "La filière de fin de vie peut changer le résultat total de l’analyse.",
        detail:
          "Le mode de comptage du recyclage et de la récupération fait partie des hypothèses.",
      },
    ],
    limit:
      "Courbes fictives, sans quantité ni recommandation d’achat. Les couleurs représentent deux scénarios de cycle de vie.",
    source: {
      title: "US Department of Energy — GREET Life Cycle Assessment",
      url: "https://www.energy.gov/cmei/rd-greet-life-cycle-assessment-model",
    },
  },
  {
    canvasHeight: 230,
    id: "vehicleMass",
    title: "Isoler ce que change la masse d’un véhicule",
    paths: ["/automobile/usages-et-mobilite/entretien-et-cycle-de-vie/augmentation-poids-voitures"],
    steps: [
      {
        label: "Comparer un même gabarit",
        caption: "Deux véhicules de volume semblable peuvent peser différemment.",
        detail: "Les matériaux, les équipements et la motorisation contribuent à la masse.",
      },
      {
        label: "Mettre en mouvement",
        caption:
          "Une masse supérieure demande plus d’énergie pour atteindre la même vitesse, à conditions comparables.",
        detail: "La part utile du trajet dépend aussi des pertes et de la récupération éventuelle.",
      },
      {
        label: "Regarder le parcours",
        caption:
          "Les montées, les accélérations et le roulement modifient la contribution de la masse.",
        detail: "Un trajet uniforme et un trajet avec des arrêts n’ont pas le même bilan.",
      },
    ],
    limit:
      "Véhicules et charges fictifs. L’illustration isole la masse, sans mesurer la consommation totale.",
    source: {
      title: "Bruxelles Environnement — Voitures plus grandes et plus lourdes",
      url: "https://environnement.brussels/pro/nos-actions/plans-et-politiques-regionales/des-voitures-plus-grandes-et-plus-lourdes-en-region-bruxelloise-quels-impacts-et-quelles-mesures-envisager",
    },
  },
  {
    canvasHeight: 230,
    id: "sharedMobility",
    title: "Partager un véhicule ou partager le même trajet",
    paths: ["/automobile/usages-et-mobilite/mobilite-partagee/autopartage-et-covoiturage"],
    steps: [
      {
        label: "Partager dans le temps",
        caption:
          "L’autopartage peut donner accès à un véhicule à différents utilisateurs au fil des heures.",
        detail: "Les personnes peuvent utiliser le même objet sans se déplacer ensemble.",
      },
      {
        label: "Partager un trajet",
        caption: "Le covoiturage réunit plusieurs personnes dans un déplacement.",
        detail:
          "Le taux d’occupation change, même si le véhicule reste la propriété d’une seule personne.",
      },
      {
        label: "Combiner les idées",
        caption: "Un véhicule partagé peut aussi transporter plusieurs voyageurs lors d’un trajet.",
        detail:
          "Les effets sur l’espace et les déplacements dépendent de ce que la formule remplace.",
      },
    ],
    limit: "Scénario fictif. Aucun taux d’occupation ou d’usage réel n’est indiqué.",
    source: {
      title: "ADEME — Les mobilités partagées",
      url: "https://agirpourlatransition.ademe.fr/particuliers/bouger/deplacer-autrement",
    },
  },
  {
    canvasHeight: 230,
    id: "utilityPayload",
    title: "Trois contraintes pour une même camionnette",
    paths: ["/automobile/usages-et-mobilite/vehicules-utilitaires-transport-marchandises"],
    steps: [
      {
        label: "Regarder le volume",
        caption: "Le volume disponible indique la place dont disposent les objets.",
        detail:
          "La forme des objets et l’organisation intérieure influencent la place réellement utilisable.",
      },
      {
        label: "Regarder la masse",
        caption:
          "La charge utile concerne la masse qu’il reste à embarquer dans la limite autorisée.",
        detail:
          "Outils, aménagements et chargement font partie du calcul réel selon la définition du véhicule.",
      },
      {
        label: "Regarder la tournée",
        caption: "La succession des livraisons transforme l’usage du véhicule.",
        detail:
          "Le trajet, les arrêts, la durée de stationnement et les possibilités de recharge comptent selon le cas.",
      },
    ],
    limit:
      "Schéma de mission fictif. Aucune valeur de chargement, dimension ou règle réglementaire n’est indiquée.",
    source: {
      title: "Annales des mines — Véhicules utilitaires et usages",
      url: "https://www.annales.org/ri/2018/ri-mai-2018/2018-05-5.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "streetCrossSection",
    title: "Une même largeur de rue, des usages différents",
    paths: ["/automobile/usages-et-mobilite/voiture-espace-urbain-stationnement"],
    steps: [
      {
        label: "Délimiter la largeur",
        caption: "La rue possède un espace total réparti entre plusieurs usages.",
        detail: "Circuler, marcher, stationner, livrer ou végétaliser se partagent cet espace.",
      },
      {
        label: "Isoler le stationnement",
        caption:
          "Une bande de stationnement occupe une largeur même lorsque la voiture est immobile.",
        detail: "Les choix de stationnement influencent les activités possibles le long de la rue.",
      },
      {
        label: "Comparer une autre répartition",
        caption: "La même emprise peut recevoir d’autres usages de circulation.",
        detail:
          "Le dessin compare une répartition possible. Les besoins et contraintes changent d’une rue à l’autre.",
      },
    ],
    limit:
      "Profil fictif et hors échelle. Il n’indique aucune dimension ou règle d’aménagement applicable.",
    source: {
      title: "Cerema — Concevoir une piste cyclable",
      url: "https://www.cerema.fr/fr/actualites/8-recommandations-reussir-votre-piste-cyclable",
    },
  },
  {
    canvasHeight: 230,
    id: "materialRecovery",
    title: "Identifier une pièce avant de l’orienter",
    paths: [
      "/technologies-et-ingenierie/conception-et-fiabilite/choix-des-materiaux/reconnaitre-recuperer-materiaux",
    ],
    steps: [
      {
        label: "Observer son état",
        caption: "La couleur, l’aspect et les marques d’une pièce donnent des premiers indices.",
        detail: "Ils peuvent être masqués par le revêtement ou par une modification antérieure.",
      },
      {
        label: "Confirmer la matière",
        caption: "On peut rapprocher plusieurs indices ou utiliser une mesure adaptée.",
        detail:
          "Les filières professionnelles emploient des moyens différents selon la précision nécessaire.",
      },
      {
        label: "Orienter la pièce",
        caption:
          "La matière et l’état déterminent en partie si la pièce peut être réutilisée ou recyclée.",
        detail:
          "La sécurité, l’usage prévu et les contaminants possibles font partie de la décision.",
      },
    ],
    limit:
      "Pièces fictives et méthode de principe. La planche ne valide aucun matériau récupéré pour un usage réel.",
    source: {
      title: "Bruker — Scrap Metal Recycling",
      url: "https://www.bruker.com/en/applications/industrial/metals/scrap-metal-recycling.html",
    },
  },
  {
    canvasHeight: 230,
    id: "roadDrainage",
    title: "Suivre l’eau autour des couches d’une route",
    paths: ["/technologies-et-ingenierie/genie-civil/ouvrages-dart/construire-route-durable"],
    steps: [
      {
        label: "Observer les couches",
        caption: "Le revêtement et les couches inférieures transmettent les charges vers le sol.",
        detail: "Les matériaux et épaisseurs répondent à la circulation, au climat et au support.",
      },
      {
        label: "Lire le profil",
        caption: "Le profil transversal peut favoriser l’évacuation de l’eau sur les côtés.",
        detail:
          "La coupe accentue le bombement pour le rendre visible. Les profils peuvent être différents selon le projet.",
      },
      {
        label: "Collecter l’eau",
        caption: "Des dispositifs peuvent intercepter l’eau au bord ou dans les couches.",
        detail:
          "L’eau durable et les cycles de gel peuvent affecter le support. Les objets visibles indiquent le principe d’évacuation.",
      },
    ],
    limit:
      "Coupe de principe sans dimensionnement. Les ouvrages et les matériaux doivent être adaptés au site.",
    source: {
      title: "FHWA — Geotechnical Aspects of Pavements",
      url: "https://www.fhwa.dot.gov/engineering/geotech/pubs/05037/",
    },
  },
  {
    canvasHeight: 230,
    id: "euvMirrors",
    title: "Suivre le chemin de la lumière EUV",
    paths: ["/micro-informatique-et-informatique/materiel/processeurs/asml-lithographie-euv"],
    steps: [
      {
        label: "La faire réfléchir",
        caption: "Le rayonnement EUV est fortement absorbé par de nombreuses matières.",
        detail:
          "Le trajet se fait sous vide. Le système emploie des miroirs adaptés pour guider le rayonnement.",
      },
      {
        label: "Lire le masque",
        caption: "Le masque module la lumière réfléchie selon le motif à reproduire.",
        detail:
          "La surface du masque et le système de projection conservent le contraste utile à l’exposition.",
      },
      {
        label: "Projeter sur le disque",
        caption: "La lumière expose une couche sensible à la surface du disque.",
        detail:
          "D’autres opérations transforment ensuite l’exposition en structure. Plusieurs couches peuvent être traitées séparément.",
      },
    ],
    limit:
      "Trajet de principe. Les miroirs, angles et dimensions ne reproduisent aucune machine commerciale.",
    source: {
      title: "ASML — Lenses and mirrors",
      url: "https://www.asml.com/technology/lithography-principles/lenses-and-mirrors",
    },
  },
  {
    canvasHeight: 230,
    id: "superconductingQubit",
    title: "Trois étapes pour agir sur un circuit quantique",
    paths: [
      "/micro-informatique-et-informatique/materiel/processeurs/comment-fonctionne-un-processeur-quantique-a-qubits-supraconducteurs",
    ],
    steps: [
      {
        label: "Repérer les états",
        caption:
          "Un circuit supraconducteur peut être conçu avec deux niveaux d’énergie utilisés comme qubit.",
        detail:
          "Le circuit est refroidi pour limiter certaines perturbations. Des niveaux supplémentaires peuvent exister.",
      },
      {
        label: "Agir sur l’état",
        caption: "Un signal de commande peut modifier l’état du qubit.",
        detail:
          "Selon la commande, le système peut évoluer vers une superposition. Le dessin ne donne aucun réglage.",
      },
      {
        label: "Lire un signal",
        caption: "Un dispositif de lecture produit un résultat lié à l’état du circuit.",
        detail:
          "Le résultat d’une mesure ne révèle pas à lui seul toutes les propriétés d’une superposition.",
      },
    ],
    limit:
      "Coupe fonctionnelle et niveaux fictifs. L’illustration ne donne ni dimensions, ni paramètres de construction ou de commande.",
    source: {
      title: "CEA — Processeur quantique élémentaire",
      url: "https://irig.cea.fr/multimedia/Documents/infographies/defis-du-cea-infographie-processeur-quantique-elementaire214.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "matrixProcessor",
    title: "Pourquoi les opérations de matrice se prêtent à une grille",
    paths: [
      "/micro-informatique-et-informatique/materiel/processeurs/les-processeurs-specialises-pour-l-intelligence-artificielle",
    ],
    steps: [
      {
        label: "Alimenter la grille",
        caption: "Des données et des coefficients sont amenés vers des unités de calcul.",
        detail:
          "Les puces cherchent à réutiliser les données pour réduire des échanges coûteux avec la mémoire.",
      },
      {
        label: "Calculer en parallèle",
        caption: "Plusieurs cellules peuvent multiplier et additionner en même temps.",
        detail:
          "Certaines architectures font passer des résultats partiels d’une unité à la suivante.",
      },
      {
        label: "Accumuler",
        caption: "Les contributions de plusieurs calculs composent un résultat par accumulation.",
        detail:
          "Les gains dépendent du problème, de la taille des données et de la précision employée.",
      },
    ],
    limit:
      "Grille conceptuelle. Le dessin ne donne aucun benchmark et ne décrit pas toutes les puces d’IA.",
    source: {
      title: "Google Cloud — TPU architecture",
      url: "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm",
    },
  },
  {
    canvasHeight: 230,
    id: "riscInterface",
    title: "Distinguer ce que le logiciel demande et le circuit qui l’exécute",
    paths: [
      "/micro-informatique-et-informatique/materiel/processeurs/que-change-le-fait-qu-une-architecture-de-processeur-soit-libre-comme-risc-v",
    ],
    steps: [
      {
        label: "Exprimer une instruction",
        caption: "Le programme peut demander une opération au processeur.",
        detail:
          "Ce que représente un ordre de bas niveau dépend du jeu d’instructions qu’il utilise.",
      },
      {
        label: "Fixer le sens",
        caption: "Une spécification décrit l’effet attendu de chaque instruction et son encodage.",
        detail:
          "RISC-V publie ce contrat sous forme de spécifications ouvertes. Des extensions peuvent compléter la base.",
      },
      {
        label: "Construire des circuits différents",
        caption:
          "Deux processeurs peuvent mettre en œuvre le même jeu d’instructions avec des circuits différents.",
        detail:
          "Leurs caches, leur consommation et leurs performances peuvent varier. L’ouverture du jeu d’instructions ne rend pas automatiquement le circuit ouvert.",
      },
    ],
    limit:
      "Architecture de principe. La compatibilité réelle dépend aussi des extensions et de l’environnement logiciel.",
    source: {
      title: "RISC-V International — Ratified specifications",
      url: "https://riscv.org/specifications/ratified/",
    },
  },
  {
    canvasHeight: 230,
    id: "mooreGrowth",
    title: "Voir la différence entre un rythme et une mesure",
    paths: ["/micro-informatique-et-informatique/materiel/processeurs/loi-moore"],
    steps: [
      {
        label: "Tracer un point de départ",
        caption: "Le nombre de transistors est l’indicateur de départ de cette planche.",
        detail: "Les barres sont relatives et correspondent à des périodes fictives de même durée.",
      },
      {
        label: "Doubler plusieurs fois",
        caption:
          "Doubler quatre unités donne huit, davantage en valeur absolue qu’un doublement de une à deux.",
        detail: "Une succession de doublements produit une forme exponentielle dans ce modèle.",
      },
      {
        label: "Observer un écart",
        caption: "Le rythme d’une série réelle peut s’écarter d’un doublement régulier.",
        detail:
          "La définition de la puce, les techniques de fabrication et les coûts influencent la comparaison.",
      },
    ],
    limit:
      "Barres fictives. Elles ne prédisent ni un nombre réel de transistors ni la performance d’un appareil.",
    source: {
      title: "Computer History Museum — Moore’s law",
      url: "https://www.computerhistory.org/siliconengine/moores-law-predicts-the-future-of-integrated-circuits/",
    },
  },
  {
    canvasHeight: 230,
    id: "localNetwork",
    title: "Comprendre ce qu’un réseau peut faire sans Internet",
    paths: [
      "/micro-informatique-et-informatique/reseaux-et-securite/internet/reseaux-locaux-sans-internet",
    ],
    steps: [
      {
        label: "Relier deux appareils",
        caption: "Des appareils peuvent échanger sur une liaison locale.",
        detail:
          "Les appareils peuvent communiquer sur leur réseau local même si la connexion à Internet est coupée.",
      },
      {
        label: "Ajouter un point central",
        caption: "Un équipement intermédiaire peut relayer les échanges locaux.",
        detail: "Cela ne signifie pas que les données doivent quitter les lieux.",
      },
      {
        label: "Relier à un autre réseau",
        caption: "L’accès à Internet nécessite une liaison vers un réseau extérieur.",
        detail:
          "Des services locaux peuvent continuer à fonctionner indépendamment de cette liaison.",
      },
    ],
    limit:
      "Architecture de principe. Le dessin ne donne ni paramètres de connexion ni accès à un réseau tiers.",
    source: {
      title: "Cisco — What is a LAN?",
      url: "https://www.cisco.com/c/en/us/products/switches/what-is-a-lan-local-area-network.html",
    },
  },
  {
    canvasHeight: 230,
    id: "satelliteBackhaul",
    title: "Suivre un échange de données entre ciel et sol",
    paths: [
      "/micro-informatique-et-informatique/reseaux-et-securite/internet/comment-internet-arrive-t-il-par-satellite-dans-les-endroits-isoles",
    ],
    steps: [
      {
        label: "Émettre depuis le terminal",
        caption: "Une antenne au domicile transmet un signal vers un satellite accessible.",
        detail: "L’orientation, l’obstruction et la technologie influencent la liaison.",
      },
      {
        label: "Passer par une station",
        caption:
          "Un satellite peut relayer le signal vers une station terrestre raccordée au réseau.",
        detail: "Selon l’architecture, des liens entre satellites peuvent aussi intervenir.",
      },
      {
        label: "Relier à Internet",
        caption: "La station ou une autre passerelle rejoint le réseau terrestre.",
        detail:
          "Les échanges empruntent un trajet dans les deux sens. La latence dépend aussi des traitements et des distances.",
      },
    ],
    limit: "Schéma hors échelle. Il ne montre ni orbite précise ni paramètres radio.",
    source: {
      title: "ESA — Satellite communications",
      url: "https://www.esa.int/Applications/Connectivity_and_Secure_Communications",
    },
  },
  {
    canvasHeight: 230,
    id: "electricMagnetic",
    title: "Comparer l’action du courant et celle d’un champ variable",
    paths: [
      "/sciences-fondamentales/physique/electromagnetisme/electricite-et-magnetisme-un-seul-phenomene",
    ],
    steps: [
      {
        label: "Créer un champ",
        caption: "Un courant circulant dans une bobine produit un champ magnétique.",
        detail: "La forme et la direction du champ dépendent du courant et de la géométrie.",
      },
      {
        label: "Induire une tension",
        caption: "Quand le flux magnétique lié à une bobine change, une tension peut apparaître.",
        detail:
          "Un mouvement d’aimant est une façon de changer ce flux. Un circuit fermé peut alors laisser circuler un courant.",
      },
      {
        label: "Arrêter la variation",
        caption: "Si le flux reste constant, l’induction décrite disparaît.",
        detail:
          "Le champ peut encore exister. Ce qui compte ici est son changement au cours du temps.",
      },
    ],
    limit:
      "Schéma de principe. Champ, bobine et effets sont représentés sans paramètres expérimentaux.",
    source: {
      title: "OpenStax — Faraday’s Law",
      url: "https://openstax.org/books/university-physics-volume-2/pages/13-1-faradays-law",
    },
  },
  {
    canvasHeight: 230,
    id: "particleWave",
    title: "Comment des impacts séparés font apparaître un motif",
    paths: ["/sciences-fondamentales/physique/physique-quantique/dualite-onde-corpuscule"],
    steps: [
      {
        label: "Détecter un événement",
        caption: "Un détecteur enregistre un impact localisé.",
        detail: "Un seul impact ne donne pas la forme de la répartition des événements.",
      },
      {
        label: "Accumuler des impacts",
        caption: "De nombreux événements permettent de voir des régions plus ou moins fréquentes.",
        detail: "Le dessin compare la lecture d’un événement isolé et celle d’un ensemble.",
      },
      {
        label: "Reconnaître des interférences",
        caption: "Dans certaines conditions avec deux fentes, la répartition révèle des franges.",
        detail:
          "La description quantique prédit ces probabilités. Le dessin n’attribue pas une trajectoire classique non mesurée à chaque particule.",
      },
    ],
    limit:
      "Impacts synthétiques. Le contraste et la disposition des franges ne reproduisent pas une mesure réelle.",
    source: {
      title: "OpenStax — Wave-Particle Duality",
      url: "https://openstax.org/books/university-physics-volume-3/pages/6-6-wave-particle-duality",
    },
  },
  {
    canvasHeight: 230,
    id: "thermoLaws",
    title: "Séparer le bilan d’énergie du sens des transferts",
    paths: [
      "/sciences-fondamentales/physique/thermodynamique/les-deux-principes-de-la-thermodynamique",
    ],
    steps: [
      {
        label: "Compter les échanges",
        caption: "La variation d’énergie d’un système dépend de ce qui entre et de ce qui sort.",
        detail: "Le système peut échanger de l’énergie sous forme de chaleur et de travail.",
      },
      {
        label: "Suivre la chaleur",
        caption: "Un transfert de chaleur se fait spontanément du plus chaud vers le plus froid.",
        detail: "Le second principe décrit le sens des processus spontanés dans cette situation.",
      },
      {
        label: "Inverser le trajet",
        caption:
          "Une pompe à chaleur peut déplacer de la chaleur dans le sens inverse avec un apport de travail.",
        detail:
          "Le bilan doit compter cet apport. Le sens et le bilan répondent à deux questions complémentaires.",
      },
    ],
    limit:
      "Processus de principe sans température ni rendement. La planche n’épuise pas les formulations des deux principes.",
    source: {
      title: "OpenStax — The Second Law of Thermodynamics",
      url: "https://openstax.org/books/university-physics-volume-2/pages/4-4-statements-of-the-second-law-of-thermodynamics",
    },
  },
  {
    canvasHeight: 230,
    id: "energyServices",
    title: "Suivre une chaîne de conversion et d’usage",
    paths: ["/energie/energies-renouvelables/capter-transformer-stocker-energie-naturelle"],
    steps: [
      {
        label: "Partir du flux",
        caption: "Le rayonnement solaire apporte une énergie variable selon le lieu et l’heure.",
        detail: "Dans l’exemple, un équipement est placé sur le trajet de ce flux.",
      },
      {
        label: "Convertir",
        caption:
          "Un panneau photovoltaïque transforme une part du rayonnement reçu en électricité.",
        detail: "Les équipements électriques adaptent ensuite ce flux à l’usage ou au stockage.",
      },
      {
        label: "Décaler l’usage",
        caption: "Une réserve d’énergie peut permettre de l’utiliser à un autre moment.",
        detail:
          "Le stockage a des capacités et des pertes. D’autres chaînes convertissent l’énergie du vent, de l’eau ou de la chaleur.",
      },
    ],
    limit:
      "Chaîne solaire fonctionnelle. Aucun câblage, dimensionnement ou rendement réel n’est indiqué.",
    source: {
      title: "AIE — Renewables",
      url: "https://www.iea.org/energy-system/renewables",
    },
  },
  {
    canvasHeight: 230,
    id: "renewableProfiles",
    title: "Comparer des profils de production dans le temps",
    paths: ["/energie/energies-renouvelables/solaire/energies-renouvelables-panorama"],
    steps: [
      {
        label: "Suivre le soleil",
        caption:
          "Un profil photovoltaïque peut monter après le lever du soleil et redescendre en soirée.",
        detail: "Les nuages et la saison peuvent modifier cette forme de référence.",
      },
      {
        label: "Suivre le vent",
        caption: "La production éolienne suit un profil différent quand le vent varie.",
        detail: "La machine, son site et l’agrégation de plusieurs sites changent le résultat.",
      },
      {
        label: "Suivre l’eau",
        caption:
          "Une production hydraulique dépend des apports et des capacités de gestion du site.",
        detail:
          "Un ouvrage au fil de l’eau et un ouvrage avec réserve ne réagissent pas de la même façon.",
      },
    ],
    limit:
      "Tracés fictifs et axes communs. Aucun profil universel ou classement de technologies n’est supposé.",
    source: {
      title: "AIE — Renewables",
      url: "https://www.iea.org/energy-system/renewables",
    },
  },
  {
    canvasHeight: 230,
    id: "lfpCell",
    title: "Où la chimie LFP change une cellule",
    paths: [
      "/energie/reseaux-et-stockage/batteries/la-chimie-lfp-lithium-fer-phosphate-plus-stable-et-moins-chere",
    ],
    steps: [
      {
        label: "Identifier les couches",
        caption: "Une cellule comprend des électrodes et un milieu permettant le transfert d’ions.",
        detail:
          "La coupe repère la cathode. D’autres éléments assurent le support et la collecte du courant.",
      },
      {
        label: "Reconnaître le LFP",
        caption: "Une cathode LFP s’appuie sur un phosphate de fer et de lithium.",
        detail:
          "Le matériau actif diffère de celui des chimies utilisant du nickel et du cobalt dans la cathode.",
      },
      {
        label: "Comparer un usage",
        caption:
          "La chimie peut modifier la densité d’énergie, la stabilité et d’autres propriétés.",
        detail:
          "La cellule complète, son assemblage et sa gestion influencent aussi le comportement du produit.",
      },
    ],
    limit:
      "Architecture qualitative et hors échelle. Aucune valeur de sécurité, de masse ou de prix n’est donnée.",
    source: {
      title: "AIE — Electric vehicle batteries",
      url: "https://www.iea.org/reports/global-ev-outlook-2025/electric-vehicle-batteries",
    },
  },
  {
    canvasHeight: 230,
    id: "factoryArm",
    title: "Suivre un bras d’atelier d’une tâche à l’autre",
    paths: [
      "/industries/industrie-manufacturiere/automatisation/automatisation-industrielle-robotique-production",
    ],
    steps: [
      {
        label: "Repérer les axes",
        caption: "Plusieurs articulations permettent au robot de positionner son outil.",
        detail: "Le nombre d’axes et leur disposition déterminent en partie l’espace accessible.",
      },
      {
        label: "Suivre un mouvement",
        caption: "La commande coordonne les articulations pour suivre une trajectoire.",
        detail: "L’outil, la pièce et les autres équipements participent à cette organisation.",
      },
      {
        label: "Changer de tâche",
        caption: "Un autre outil et une autre trajectoire permettent une autre opération.",
        detail:
          "Passer d’une tâche à une autre demande de vérifier le processus et l’environnement.",
      },
    ],
    limit: "Bras de principe. Aucun programme, réglage ou paramètre de sûreté n’est indiqué.",
    source: {
      title: "International Federation of Robotics — Industrial Robots",
      url: "https://ifr.org/industrial-robots",
    },
  },
  {
    canvasHeight: 230,
    id: "fabPrototype",
    title: "Du dessin à un prototype essayé",
    paths: [
      "/industries/industrie-manufacturiere/chaine-logistique/qu-est-ce-qu-un-fab-lab-et-que-peut-on-y-fabriquer",
    ],
    steps: [
      {
        label: "Dessiner",
        caption: "Un modèle numérique décrit certains contours et dimensions de la pièce.",
        detail: "Un plan ou une maquette peut rendre une idée assez précise pour l’essayer.",
      },
      {
        label: "Fabriquer",
        caption: "L’atelier produit une première version avec un procédé adapté.",
        detail: "Le choix dépend de la matière, de la forme et de la précision recherchée.",
      },
      {
        label: "Essayer et reprendre",
        caption: "Le premier essai permet de vérifier où la pièce répond au besoin.",
        detail: "Les défauts observés peuvent conduire à modifier le dessin ou le procédé.",
      },
    ],
    limit:
      "Projet fictif et machines stylisées. Le dessin ne fixe aucun mode opératoire de fabrication.",
    source: {
      title: "MIT — Do-It-Yourself Manufacturing",
      url: "https://betterworld.mit.edu/spectrum/issues/winter-2014/do-it-yourself-manufacturing/",
    },
  },
  {
    canvasHeight: 230,
    id: "warehouseFlow",
    title: "Ce qui décide de la sortie d’un stock",
    paths: [
      "/industries/industrie-manufacturiere/chaine-logistique/stocker-conserver-marchandises",
    ],
    steps: [
      {
        label: "Identifier les emplacements",
        caption: "Les marchandises peuvent être suivies par emplacements ou par lots.",
        detail:
          "Une information correcte réduit la difficulté à retrouver une pièce ou à connaître l’état du stock.",
      },
      {
        label: "Faire tourner par entrée",
        caption: "Sortir d’abord ce qui est entré en premier est une règle de rotation possible.",
        detail: "Elle aide à éviter que des articles plus anciens restent longtemps en réserve.",
      },
      {
        label: "Faire tourner par échéance",
        caption: "Une échéance plus proche peut donner la priorité à un lot entré plus tard.",
        detail:
          "Le schéma représente trois échéances fictives. Les règles dépendent de la marchandise et du site.",
      },
    ],
    limit:
      "Exemple de logistique hors alimentation sanitaire. Aucun seuil de stockage ou de conservation n’est donné.",
    source: {
      title: "AutoStore — Inventory Management",
      url: "https://www.autostoresystem.com/insights/guide-to-inventory-management",
    },
  },
  {
    canvasHeight: 230,
    id: "sharedStandard",
    title: "Ce qu’une dimension commune rend possible",
    paths: [
      "/industries/industrie-manufacturiere/qualite-et-normalisation/pourquoi-le-monde-a-t-il-besoin-de-normes-communes-comme-celles-de-l-iso",
    ],
    steps: [
      {
        label: "Observer un écart",
        caption: "Deux pièces peuvent remplir une fonction semblable et ne pas s’accorder.",
        detail: "Leur géométrie, leur matière et les écarts autorisés influencent l’ajustement.",
      },
      {
        label: "Partager une spécification",
        caption: "Un document commun peut définir les dimensions et d’autres exigences.",
        detail: "Les fabricants qui choisissent cette spécification disposent de repères communs.",
      },
      {
        label: "Vérifier l’ajustement",
        caption: "La production et le contrôle doivent ramener les pièces dans les écarts admis.",
        detail: "Une norme peut aussi traiter des essais, de la sécurité ou de la qualité.",
      },
    ],
    limit:
      "Connecteurs fictifs. L’illustration ne décrit aucun standard précis ni plan de fabrication.",
    source: {
      title: "ISO — Standards",
      url: "https://www.iso.org/standards.html",
    },
  },
  {
    canvasHeight: 230,
    id: "magnetLoop",
    title: "Suivre un aimant après la fin d’usage",
    paths: [
      "/industries/materiaux-et-procedes/mise-en-forme/peut-on-recycler-les-aimants-des-eoliennes-et-des-voitures-electriques",
    ],
    steps: [
      {
        label: "Le retrouver dans l’équipement",
        caption: "Certains moteurs et générateurs intègrent des aimants permanents.",
        detail: "La présence et les types d’aimants changent selon l’architecture.",
      },
      {
        label: "Séparer la matière",
        caption:
          "La filière doit isoler ou identifier la matière d’intérêt parmi d’autres composants.",
        detail:
          "La conception du produit et les informations sur sa composition influencent l’opération.",
      },
      {
        label: "Choisir une récupération",
        caption: "Des procédés cherchent à récupérer un matériau utile pour de nouveaux usages.",
        detail:
          "Le produit final et le bilan dépendent de la filière, de la qualité de départ et de l’énergie mobilisée.",
      },
    ],
    limit:
      "Schéma de filière. Aucune condition opératoire, composition ou procédure de démontage n’est fournie.",
    source: {
      title: "Commission européenne — Magnet Recycling in Europe",
      url: "https://cordis.europa.eu/article/id/442156-gearing-up-for-high-performance-magnet-recycling-in-europe",
    },
  },
  {
    canvasHeight: 230,
    id: "extinctionRisk",
    title: "Comment des données deviennent une catégorie de risque",
    paths: [
      "/environnement-et-climat/biodiversite/especes-menacees/liste-rouge-uicn-2025-biodiversite",
    ],
    steps: [
      {
        label: "Rassembler les données",
        caption:
          "Une évaluation peut utiliser la tendance de population, l’aire de répartition ou d’autres données.",
        detail: "Le tracé fictif montre un seul indice et ne suffit pas à classer une espèce.",
      },
      {
        label: "Lire une catégorie",
        caption: "VU, EN et CR désignent trois catégories de menace selon l’UICN.",
        detail:
          "D’autres catégories indiquent d’autres niveaux ou états. Les critères sont appliqués à un périmètre défini.",
      },
      {
        label: "Reconnaître l’incertitude",
        caption:
          "DD signale que les données sont insuffisantes pour une évaluation directe ou indirecte.",
        detail:
          "Des données insuffisantes empêchent une évaluation solide du risque et laissent donc la question ouverte.",
      },
    ],
    limit: "Catégories sélectionnées et données fictives. Aucune espèce réelle n’est évaluée ici.",
    source: {
      title: "UICN — Red List Frequently Asked Questions",
      url: "https://nrl.iucnredlist.org/about/faqs",
    },
  },
  {
    canvasHeight: 230,
    id: "floodAdaptation",
    title: "Comparer le même quartier avant et après un aménagement",
    paths: [
      "/environnement-et-climat/changement-climatique/impacts-et-adaptation/adaptation-au-changement-climatique",
    ],
    steps: [
      {
        label: "Observer l’exposition",
        caption: "Un espace bâti peut se trouver sur le passage d’une crue.",
        detail:
          "La hauteur d’eau, les usages et la vulnérabilité des bâtiments participent au risque.",
      },
      {
        label: "Modifier le paysage",
        caption: "Une zone d’expansion ou de rétention peut laisser une place à l’eau.",
        detail: "Selon le site, ces espaces et d’autres mesures peuvent réduire certains dommages.",
      },
      {
        label: "Comprendre le risque restant",
        caption: "Un événement plus important peut dépasser les capacités prévues.",
        detail: "Le suivi et l’entretien aident à adapter les mesures au fil du temps.",
      },
    ],
    limit:
      "Coupe fictive. Le dessin ne dimensionne pas un ouvrage et ne garantit aucune protection.",
    source: {
      title: "GIEC — Climate Change 2022, Impacts, Adaptation and Vulnerability",
      url: "https://www.ipcc.ch/report/ar6/wg2/",
    },
  },
  {
    canvasHeight: 230,
    id: "choiceArchitecture",
    title: "Comment la présentation modifie un choix disponible",
    paths: [
      "/sciences-humaines-et-sociales/economie/microeconomie/comment-pousser-les-gens-a-mieux-choisir-sans-rien-leur-interdire",
    ],
    steps: [
      {
        label: "Regarder les options",
        caption: "Les deux boissons restent proposées au même prix dans cet exemple.",
        detail: "Le point de départ est un ordre de présentation choisi pour la simulation.",
      },
      {
        label: "Déplacer l’option",
        caption: "Mettre l’eau en premier peut la rendre plus visible.",
        detail:
          "Les deux options restent accessibles. La place modifie une caractéristique de la situation de choix.",
      },
      {
        label: "Observer l’effet",
        caption: "On peut comparer les choix dans les deux mises en place.",
        detail: "Le résultat dépend du contexte, des préférences et de la méthode d’observation.",
      },
    ],
    limit:
      "Exemple fictif, sans effet garanti ou prescription de comportement. Les barres n’indiquent aucun effet chiffré.",
    source: {
      title: "OCDE — Behavioural Insights",
      url: "https://www.oecd.org/en/topics/behavioural-insights.html",
    },
  },
  {
    canvasHeight: 230,
    id: "gainLoss",
    title: "Situer un gain et une perte autour d’un repère",
    paths: [
      "/sciences-humaines-et-sociales/economie/microeconomie/pourquoi-perdre-une-somme-fait-il-plus-mal-que-gagner-la-meme-somme-ne-fait-plaisir",
    ],
    steps: [
      {
        label: "Fixer le repère",
        caption: "Un résultat peut être jugé par rapport à une situation de référence.",
        detail: "Ce repère peut être la situation actuelle ou ce que l’on attendait.",
      },
      {
        label: "Regarder le gain",
        caption: "Un gain déplace le résultat d’un côté du repère.",
        detail:
          "La courbe représente une valeur ressentie dans un modèle de décision, pas une mesure de plaisir.",
      },
      {
        label: "Regarder la perte",
        caption:
          "Dans ce modèle, une perte comparable peut avoir plus de poids qu’un gain de même taille.",
        detail: "Cette asymétrie peut varier selon le contexte et les personnes.",
      },
    ],
    limit:
      "Courbe qualitative de la théorie des perspectives. Aucun coefficient universel ni conseil financier n’est donné.",
    source: {
      title: "Kahneman et Tversky — Prospect Theory",
      url: "https://www.jstor.org/stable/1914185",
    },
  },
  {
    canvasHeight: 230,
    id: "skillCalibration",
    title: "Comparer ce qu’on pense réussir à ce qu’on réussit",
    paths: [
      "/sciences-humaines-et-sociales/psychologie/biais-cognitifs/l-effet-dunning-kruger-surestimer-sa-propre-competence",
    ],
    steps: [
      {
        label: "Estimer",
        caption: "Avant le retour d’un exercice, une personne peut estimer son résultat.",
        detail:
          "Cette estimation dépend du domaine, de l’information et de l’échelle de comparaison.",
      },
      {
        label: "Comparer",
        caption: "Un résultat observé peut s’écarter de l’estimation.",
        detail:
          "Les travaux sur la calibration étudient cette différence dans des tâches précises. Une courbe unique ne résume pas tous les cas.",
      },
      {
        label: "Réviser",
        caption: "Un retour précis peut aider à ajuster une estimation ultérieure.",
        detail:
          "Savoir ce qui a été bien ou mal fait donne un repère plus concret qu’une impression générale.",
      },
    ],
    limit:
      "Scores fictifs. L’exercice ne définit ni un trait de personnalité ni un classement universel des capacités.",
    source: {
      title: "Kruger et Dunning — Unskilled and Unaware of It",
      url: "https://pubmed.ncbi.nlm.nih.gov/10626367/",
    },
  },
  {
    canvasHeight: 230,
    id: "smallStart",
    title: "Voir ce qui change entre reporter et commencer",
    paths: [
      "/sciences-humaines-et-sociales/psychologie/biais-cognitifs/pourquoi-remet-on-a-demain-ce-qu-on-sait-devoir-faire-aujourd-hui",
    ],
    steps: [
      {
        label: "Reconnaître la tâche",
        caption: "Une tâche peut susciter de l’ennui, de l’incertitude ou un effort anticipé.",
        detail:
          "Le scénario représente un devoir fictif. Les causes d’un report peuvent être différentes.",
      },
      {
        label: "Reporter",
        caption: "Le report peut réduire l’inconfort immédiat.",
        detail:
          "Il laisse la tâche en place. Le coût et les contraintes peuvent ensuite se reporter vers un autre moment.",
      },
      {
        label: "Commencer un geste",
        caption: "Un premier geste concret rend la tâche plus précise dans l’exemple.",
        detail:
          "Ouvrir le document ne résout pas la tâche entière. Le dessin montre seulement un autre chemin possible.",
      },
    ],
    limit:
      "Situation fictive et qualitative. La planche n’est ni un diagnostic ni une méthode de traitement.",
    source: {
      title: "Sirois — Procrastination and Stress",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9480316/",
    },
  },
  {
    canvasHeight: 230,
    id: "retrievalPractice",
    title: "Voir la différence entre relire et retrouver",
    paths: ["/sciences-humaines-et-sociales/psychologie/cognition/apprendre-efficacement"],
    steps: [
      {
        label: "Observer l’exemple",
        caption: "Lire une explication rend les mots et les idées plus familiers.",
        detail: "Cette sensation ne dit pas exactement ce que l’on pourra retrouver sans support.",
      },
      {
        label: "Se poser une question",
        caption: "Le rappel actif demande de produire une réponse à partir de la mémoire.",
        detail:
          "Un exercice court peut révéler ce qui reste flou lorsque les mots du cours sont cachés.",
      },
      {
        label: "Comparer la réponse",
        caption: "Un retour permet de vérifier la réponse et de corriger les erreurs.",
        detail:
          "Une nouvelle tentative ultérieure peut aider à retenir selon la tâche et les modalités de révision.",
      },
    ],
    limit:
      "Exercice fictif. Les effets dépendent du matériau à apprendre et de la façon de s’interroger.",
    source: {
      title: "Dunlosky et al. — Improving Students’ Learning With Effective Learning Techniques",
      url: "https://journals.sagepub.com/doi/10.1177/1529100612453266",
    },
  },
  {
    canvasHeight: 230,
    id: "habitCue",
    title: "Repérer le contexte qui revient avec une habitude",
    paths: ["/sciences-humaines-et-sociales/psychologie/cognition/former-de-bonnes-habitudes"],
    steps: [
      {
        label: "Identifier le contexte",
        caption: "Une heure, un lieu ou une activité précédente peut servir de repère.",
        detail: "Un même geste n’est pas déclenché par le même contexte pour tout le monde.",
      },
      {
        label: "Répéter l’action",
        caption: "Répéter un comportement dans un contexte semblable peut renforcer l’association.",
        detail:
          "La répétition seule ne suffit pas à prévoir le délai. Les circonstances et la difficulté comptent.",
      },
      {
        label: "Répondre au repère",
        caption:
          "Le contexte peut finir par favoriser le geste sans nouvelle délibération complète.",
        detail:
          "Une nouvelle situation peut modifier les indices qui déclenchent un geste habituel.",
      },
    ],
    limit:
      "Exemple fictif et aucun délai universel. Le dessin ne prescrit pas une méthode de changement personnel.",
    source: {
      title: "Lally et al. — How are habits formed",
      url: "https://onlinelibrary.wiley.com/doi/10.1002/ejsp.674",
    },
  },
  {
    canvasHeight: 230,
    id: "attentionGate",
    title: "Du signal disponible au souvenir retrouvé",
    paths: [
      "/sciences-humaines-et-sociales/psychologie/cognition/processus-cognitifs-memoire-attention",
    ],
    steps: [
      {
        label: "Recevoir plusieurs signaux",
        caption: "Plusieurs éléments sont présents en même temps autour de nous.",
        detail:
          "Leur intérêt ou leur intensité ne suffit pas à prédire tous nos choix d’attention.",
      },
      {
        label: "Favoriser une information",
        caption: "L’attention aide à traiter certains éléments plus directement.",
        detail:
          "L’information qui reste accessible dépend aussi de la tâche et de ce qu’on connaissait déjà.",
      },
      {
        label: "Reconstruire",
        caption: "Se rappeler peut mêler des détails disponibles et des attentes.",
        detail: "Un souvenir peut être utile tout en restant différent d’un enregistrement fidèle.",
      },
    ],
    limit:
      "Diagramme fonctionnel. Il ne localise pas les fonctions dans une zone du cerveau et ne mesure aucune capacité.",
    source: {
      title: "Encyclopaedia Britannica — Human memory",
      url: "https://www.britannica.com/science/memory-psychology",
    },
  },
  {
    canvasHeight: 230,
    id: "objectPermanence",
    title: "Comprendre ce qui arrive à un objet qu’on ne voit plus",
    paths: [
      "/sciences-humaines-et-sociales/psychologie/developpement/stades-developpement-enfant-piaget",
    ],
    steps: [
      {
        label: "Voir l’objet",
        caption: "Un objet visible peut être suivi par le regard.",
        detail:
          "Le dessin place l’objet et l’enfant dans la même scène avant d’ajouter un obstacle.",
      },
      {
        label: "Le masquer",
        caption: "Quand un écran passe devant, l’objet n’est plus visible.",
        detail:
          "La permanence de l’objet désigne l’idée qu’il continue à exister malgré cette disparition visuelle.",
      },
      {
        label: "Le retrouver",
        caption: "Le passage de l’écran permet de revoir l’objet au même endroit.",
        detail:
          "Les méthodes de recherche et de regard n’évaluent pas exactement la même chose chez un jeune enfant.",
      },
    ],
    limit: "Scène pédagogique. Aucun âge exact, test de développement ou diagnostic n’est donné.",
    source: {
      title: "OpenStax — Lifespan Development",
      url: "https://openstax.org/books/psychology-2e/pages/9-3-stages-of-development",
    },
  },
  {
    canvasHeight: 230,
    id: "skillTransfer",
    title: "Passer d’un geste observé à un geste réutilisé",
    paths: ["/sciences-humaines-et-sociales/sociologie/education-et-mobilite/transmettre-savoirs"],
    steps: [
      {
        label: "Voir le geste",
        caption: "Une démonstration montre la relation entre le geste et la matière.",
        detail: "Elle donne accès à des indices difficiles à transmettre par le seul texte.",
      },
      {
        label: "Garder une trace",
        caption:
          "Un croquis ou des notes rendent une partie de l’information consultable plus tard.",
        detail:
          "Le document peut conserver des repères mais omettre des sensations ou des conditions.",
      },
      {
        label: "Mettre en pratique",
        caption: "La personne qui reprend le geste l’essaie dans son propre contexte.",
        detail:
          "Un retour peut préciser ce que la démonstration ou le document ne rendait pas visible.",
      },
    ],
    limit:
      "Scène fictive, applicable à différentes formes d’enseignement. Aucun métier précis n’est modélisé.",
    source: {
      title: "UNESCO — Le compagnonnage, réseau de transmission des savoirs",
      url: "https://ich.unesco.org/en/RL/the-compagnonnage-network-of-knowledge-and-identity-in-apprenticeship-00441",
    },
  },
  {
    canvasHeight: 230,
    id: "activeListening",
    title: "Vérifier ensemble qu’un message a été compris",
    paths: [
      "/sciences-humaines-et-sociales/sociologie/groupes-et-normes/ecoute-active-communication",
    ],
    steps: [
      {
        label: "Laisser le récit s’exprimer",
        caption: "La première personne formule son point de vue.",
        detail: "L’auditeur peut attendre avant d’interpréter ou de proposer une solution.",
      },
      {
        label: "Reformuler",
        caption: "Redire le sens perçu permet à l’autre de le confirmer ou de le corriger.",
        detail: "Une reformulation n’implique pas que les deux personnes sont d’accord.",
      },
      {
        label: "Poser une question",
        caption: "Une question ouverte peut clarifier ce qui reste incertain.",
        detail: "La personne répond avec ses propres termes. La compréhension peut alors évoluer.",
      },
    ],
    limit:
      "Échange fictif. Le dessin illustre des gestes de conversation qui dépendent du contexte et des personnes.",
    source: {
      title: "Weger et al. — The Relative Effectiveness of Active Listening",
      url: "https://doi.org/10.1080/10904018.2013.813234",
    },
  },
  {
    canvasHeight: 230,
    id: "priceBasket",
    title: "Pourquoi l’inflation se regarde par panier",
    paths: ["/sciences-humaines-et-sociales/economie/macroeconomie/inflation-comment-ca-marche"],
    steps: [
      {
        label: "Définir un panier",
        caption: "Un panier fictif de trois produits coûte dix euros au départ.",
        detail:
          "Comparer un panier aide à distinguer un changement général de la variation d’un prix isolé.",
      },
      {
        label: "Changer un prix",
        caption: "Une hausse sur un seul produit accroît le total de ce panier.",
        detail: "La contribution de chaque prix dépend de son importance dans les achats suivis.",
      },
      {
        label: "Lire plusieurs prix ensemble",
        caption: "Le coût global réagit lorsque plusieurs éléments changent.",
        detail:
          "Un indice réel pondère différents produits et services. La situation d’un ménage peut différer du panier de référence.",
      },
    ],
    limit:
      "Prix et produits fictifs. Cet exemple ne mesure pas l’inflation effective ni un conseil de budget.",
    source: {
      title: "Insee — Indice des prix à la consommation",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1557",
    },
  },
  {
    canvasHeight: 230,
    id: "unemploymentBase",
    title: "Comprendre qui fait partie du dénominateur",
    paths: [
      "/sciences-humaines-et-sociales/economie/macroeconomie/le-role-du-chomage-comme-indicateur-macroeconomique-majeur",
    ],
    steps: [
      {
        label: "Partir de dix personnes",
        caption: "Le groupe fictif contient des situations différentes.",
        detail: "La population totale ne correspond pas à la seule population active.",
      },
      {
        label: "Délimiter les actifs",
        caption:
          "La population active inclut des personnes en emploi et des personnes au chômage au sens de la définition utilisée.",
        detail: "Le dessin compte ici six en emploi, deux au chômage et deux hors de l’activité.",
      },
      {
        label: "Faire le rapport",
        caption:
          "Le taux est calculé sur huit actifs. Deux personnes sur huit donnent 25 % dans l’exercice.",
        detail:
          "Un même nombre de chômeurs peut correspondre à un taux différent si le nombre d’actifs change.",
      },
    ],
    limit:
      "Effectifs fictifs. La définition statistique est à distinguer de l’inscription administrative.",
    source: {
      title: "Insee — Chômage au sens du BIT",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1129",
    },
  },
  {
    canvasHeight: 230,
    id: "realProduction",
    title: "Distinguer ce qui est produit et ce que vaut la production",
    paths: [
      "/sciences-humaines-et-sociales/economie/macroeconomie/perspectives-de-croissance-mondiale-fmi-2025",
    ],
    steps: [
      {
        label: "Fixer le repère",
        caption: "Quatre objets à deux euros valent huit euros au départ.",
        detail:
          "Dans ce modèle à un seul produit, la valeur de la production est la quantité multipliée par le prix.",
      },
      {
        label: "Augmenter seulement le prix",
        caption: "Les mêmes quatre objets valent douze euros à trois euros chacun.",
        detail: "Le montant augmente dans cet exemple alors que le nombre produit est identique.",
      },
      {
        label: "Comparer en volume",
        caption:
          "Cinq objets à prix de référence passent de quatre à cinq unités, soit 25 % de plus.",
        detail:
          "Les comptables nationaux utilisent des méthodes plus complètes pour agréger des productions différentes et corriger les variations de prix.",
      },
    ],
    limit:
      "Exemple avec un seul produit. Il n’explique ni toute la méthode du PIB ni la distribution du niveau de vie.",
    source: {
      title: "Insee — Produit intérieur brut",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1365",
    },
  },
  {
    canvasHeight: 230,
    id: "barterExchange",
    title: "Deux modes de coordination pour échanger",
    paths: ["/sciences-humaines-et-sociales/economie/macroeconomie/troc-invention-monnaie"],
    steps: [
      {
        label: "Échanger directement",
        caption: "Le troc échange des biens ou services directement entre des parties.",
        detail: "Dans le dessin, chaque personne doit accepter ce que l’autre lui propose.",
      },
      {
        label: "Comparer les besoins",
        caption: "Les attentes peuvent ne pas coïncider au même moment.",
        detail: "D’autres formes d’organisation ou de crédit peuvent aussi permettre des échanges.",
      },
      {
        label: "Intercaler une monnaie",
        caption:
          "Un moyen d’échange accepté peut séparer le moment où l’on vend de celui où l’on achète.",
        detail: "La confiance, les règles et la disponibilité influencent l’usage de ce moyen.",
      },
    ],
    limit:
      "Scène conceptuelle. Elle ne postule pas une histoire universelle où le troc précède toujours la monnaie.",
    source: {
      title: "Banque de France — La monnaie",
      url: "https://abc-economie.banque-france.fr/fr/abc-de-leconomie/la-monnaie",
    },
  },
  {
    canvasHeight: 230,
    id: "marketEntry",
    title: "Pourquoi l’entrée sur un marché change les choix",
    paths: [
      "/sciences-humaines-et-sociales/economie/microeconomie/les-monopoles-et-leur-impact-sur-le-fonctionnement-d-un-marche",
    ],
    steps: [
      {
        label: "Comparer les offres",
        caption: "Plusieurs entreprises peuvent proposer des offres qui répondent au même besoin.",
        detail:
          "Les produits ne sont pas forcément identiques. La définition du marché dépend des options que les acheteurs considèrent.",
      },
      {
        label: "Repérer une barrière",
        caption: "Des coûts fixes, un réseau ou un autre obstacle peuvent freiner l’entrée.",
        detail: "Les barrières peuvent venir de la technologie, du contexte ou des règles.",
      },
      {
        label: "Observer un vendeur unique",
        caption:
          "Dans un modèle de monopole, une seule entreprise offre le produit du marché décrit.",
        detail:
          "Des alternatives proches et la régulation peuvent limiter les décisions possibles.",
      },
    ],
    limit: "Scène microéconomique fictive. La planche ne qualifie juridiquement aucune entreprise.",
    source: {
      title: "OpenStax — How Monopolies Form",
      url: "https://openstax.org/books/principles-microeconomics-3e/pages/9-1-how-monopolies-form-barriers-to-entry",
    },
  },
  {
    canvasHeight: 230,
    id: "priceIntersection",
    title: "Lire un prix d’équilibre sur un graphique",
    paths: ["/sciences-humaines-et-sociales/economie/microeconomie/principes-offre-et-demande"],
    steps: [
      {
        label: "Lire les courbes",
        caption: "Le modèle relie chaque prix à une quantité offerte et à une quantité demandée.",
        detail:
          "Les deux courbes résument des hypothèses sur les comportements, toutes choses égales par ailleurs.",
      },
      {
        label: "Repérer la rencontre",
        caption: "Au croisement, les quantités offertes et demandées coïncident dans le modèle.",
        detail: "L’axe vertical donne alors un prix d’équilibre et l’axe horizontal une quantité.",
      },
      {
        label: "Déplacer la demande",
        caption: "Une variation des préférences ou des besoins peut déplacer la courbe de demande.",
        detail:
          "Le point de rencontre change. Les marchés réels sont aussi influencés par les délais, les règles et le pouvoir de marché.",
      },
    ],
    limit:
      "Axes et courbes fictifs. Le dessin ne prévoit aucun prix réel et n’implique pas que tous les prix se forment ainsi.",
    source: {
      title: "OpenStax — Demand, Supply and Equilibrium",
      url: "https://openstax.org/books/principles-macroeconomics-2e/pages/3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services",
    },
  },
  {
    canvasHeight: 230,
    id: "industrialTransition",
    title: "Relier l’usine, l’énergie et les transports",
    paths: [
      "/sciences-humaines-et-sociales/histoire/epoque-contemporaine/grandes-transformations-epoque-contemporaine",
    ],
    steps: [
      {
        label: "Observer la dispersion",
        caption: "Une partie de la production se fait dans de petits ateliers ou à domicile.",
        detail: "Les formes de production peuvent coexister pendant longtemps.",
      },
      {
        label: "Mettre en commun des machines",
        caption: "Des machines et une source d’énergie peuvent être rassemblées au même endroit.",
        detail:
          "Le regroupement modifie l’organisation du travail et les besoins en matières, en énergie et en transport.",
      },
      {
        label: "Étendre les marchés",
        caption:
          "De nouveaux moyens de transport peuvent rapprocher lieux de production et marchés.",
        detail:
          "Les effets diffèrent selon les régions et les secteurs. Ils incluent aussi des effets sociaux et environnementaux.",
      },
    ],
    limit:
      "Scènes stylisées sans dates précises. Elles montrent trois transformations possibles, à des rythmes différents.",
    source: {
      title: "Science Museum — Steaming Through The Centuries",
      url: "https://blog.sciencemuseum.org.uk/steaming-through-the-centuries/",
    },
  },
  {
    canvasHeight: 230,
    id: "marshallAid",
    title: "Suivre trois liens dans le redressement d’après-guerre",
    paths: [
      "/sciences-humaines-et-sociales/histoire/epoque-contemporaine/plan-marshall-reconstruction-europe",
    ],
    steps: [
      {
        label: "Situer les dommages",
        caption: "Les destructions et les pénuries freinent certains échanges et productions.",
        detail: "Les conditions de départ diffèrent selon les pays et les régions.",
      },
      {
        label: "Financer des approvisionnements",
        caption:
          "Le plan Marshall a fourni une aide permettant d’acquérir des ressources et biens nécessaires.",
        detail:
          "Les importations et les programmes nationaux contribuaient à des objectifs différents.",
      },
      {
        label: "Combiner plusieurs facteurs",
        caption: "La reprise s’explique par plusieurs canaux au-delà d’un seul programme.",
        detail:
          "Les décisions locales, l’investissement et d’autres échanges jouent aussi un rôle.",
      },
    ],
    limit:
      "Mécanisme de principe. La planche n’attribue ni montant ni causalité exclusive à l’aide.",
    source: {
      title: "US Office of the Historian — The Marshall Plan",
      url: "https://history.state.gov/milestones/1945-1952/marshall-plan",
    },
  },
  {
    canvasHeight: 230,
    id: "neolithicVillage",
    title: "Lire l’habitat, la culture et les réserves dans un paysage",
    paths: ["/sciences-humaines-et-sociales/histoire/prehistoire/revolution-neolithique"],
    steps: [
      {
        label: "Regarder les habitats",
        caption: "Des traces d’habitat révèlent comment les groupes occupaient un lieu.",
        detail: "La sédentarité et l’agriculture n’apparaissent pas partout ensemble.",
      },
      {
        label: "Repérer la production",
        caption:
          "Culture et élevage modifient les ressources disponibles et l’organisation du paysage.",
        detail:
          "Des plantes, des animaux, des outils et des restes de consommation donnent des indices différents.",
      },
      {
        label: "Interpréter une réserve",
        caption: "Des structures ou des récipients peuvent garder une partie des récoltes.",
        detail:
          "Le stockage change les possibilités d’usage dans le temps. Les archéologues recoupent les traces pour l’inférer.",
      },
    ],
    limit:
      "Village fictif et sans attribution à une époque locale exacte. Les trajectoires du Néolithique sont diverses.",
    source: {
      title: "Inrap — Le Néolithique",
      url: "https://multimedia.inrap.fr/archeologie-preventive/periode/7/Neolithique",
    },
  },
  {
    canvasHeight: 230,
    id: "writingSystems",
    title: "De l’apprentissage individuel à l’accès à l’écrit",
    paths: [
      "/sciences-humaines-et-sociales/sociologie/education-et-mobilite/comment-le-monde-a-t-il-appris-a-lire-et-a-ecrire",
    ],
    steps: [
      {
        label: "Déchiffrer des signes",
        caption:
          "Un système d’écriture utilise des signes pour représenter des éléments du langage.",
        detail: "L’apprentissage peut associer sons, sens et signes de plusieurs façons.",
      },
      {
        label: "Pratiquer la lecture",
        caption: "L’apprentissage se consolide par des occasions de lire et d’écrire.",
        detail: "La pratique peut se faire à l’école, en famille, au travail et en d’autres lieux.",
      },
      {
        label: "Regarder l’accès",
        caption:
          "L’accès à l’enseignement, aux textes et aux langues comprises varie selon les situations.",
        detail:
          "Les enquêtes sur l’alphabétisation emploient des définitions et des outils qui influencent la mesure.",
      },
    ],
    limit: "Scènes fictives. Le dessin ne classe pas des écritures ou des systèmes scolaires.",
    source: {
      title: "Institut de statistique de l’UNESCO — Literacy",
      url: "https://uis.unesco.org/en/topic/literacy",
    },
  },
  {
    canvasHeight: 230,
    id: "firstBasket",
    title: "Voir comment une cible en hauteur change un jeu",
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-collectifs/comment-le-basket-ball-a-t-il-ete-invente",
    ],
    steps: [
      {
        label: "Placer la cible",
        caption:
          "Naismith a imaginé un jeu en salle où le ballon doit atteindre un panier en hauteur.",
        detail: "La position de la cible change la façon de marquer par rapport à un but au sol.",
      },
      {
        label: "Faire entrer le ballon",
        caption:
          "Le tir réussit quand le ballon traverse l’ouverture selon les règles de l’exercice.",
        detail:
          "Dans les premières formes du jeu, le panier pouvait retenir le ballon après un point.",
      },
      {
        label: "Faire évoluer le panier",
        caption: "Des dispositifs ouverts permettent ensuite au ballon de tomber après le panier.",
        detail:
          "L’équipement et les règles se transforment avec la pratique. Le dessin ne fixe pas une date pour chaque modification.",
      },
    ],
    limit:
      "Reconstitution de principe. Les formes avec et sans fond ne reproduisent aucun équipement d’époque à l’identique.",
    source: {
      title: "Springfield College — Where Basketball Was Invented",
      url: "https://springfield.edu/where-basketball-was-invented-the-birthplace-of-basketball",
    },
  },
  {
    canvasHeight: 230,
    id: "sportTracking",
    title: "Du relevé de positions à une question de jeu",
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-collectifs/que-font-les-scientifiques-et-les-statisticiens-dans-une-equipe-de-haut-niveau",
    ],
    steps: [
      {
        label: "Relever des positions",
        caption: "Des mesures indiquent où se trouvent des joueurs à plusieurs instants.",
        detail: "Les points d’un relevé dépendent du capteur, de l’échantillonnage et du contexte.",
      },
      {
        label: "Relier les positions",
        caption: "Une série permet d’estimer une trajectoire ou d’autres indicateurs.",
        detail:
          "La mesure peut aider à décrire un déplacement. Elle ne dit pas toujours pourquoi il a eu lieu.",
      },
      {
        label: "Poser une question",
        caption:
          "Les analystes peuvent examiner une zone ou une séquence pour éclairer une décision.",
        detail:
          "L’interprétation mobilise aussi le jeu, les objectifs et ce que les données ne décrivent pas.",
      },
    ],
    limit:
      "Terrain, points et joueurs fictifs. L’illustration ne juge aucune équipe ni performance individuelle.",
    source: {
      title: "FIFA — Electronic Performance and Tracking Systems",
      url: "https://inside.fifa.com/technical/football-technology/standards/epts",
    },
  },
  {
    canvasHeight: 230,
    id: "paraClassification",
    title: "Pourquoi une classe dépend du sport pratiqué",
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-et-handicap/sport-adapte-et-classification",
    ],
    steps: [
      {
        label: "Identifier les exigences",
        caption:
          "Chaque sport demande des actions différentes, parfois dans des conditions très précises.",
        detail: "Le même type de limitation peut affecter différemment deux épreuves.",
      },
      {
        label: "Évaluer l’impact",
        caption:
          "Les procédures examinent l’effet d’une déficience éligible sur les activités du sport concerné.",
        detail: "Les critères et étapes sont définis par les organisations responsables du sport.",
      },
      {
        label: "Attribuer une classe",
        caption: "La classe relève du système de classification de ce sport.",
        detail:
          "Le système vise à réduire l’influence de la déficience sur le résultat de la compétition, dans le cadre prévu.",
      },
    ],
    limit:
      "Classes A et B fictives. Le dessin ne permet ni classement officiel ni évaluation personnelle.",
    source: {
      title: "International Paralympic Committee — Classification",
      url: "https://www.paralympic.org/classification",
    },
  },
  {
    canvasHeight: 230,
    id: "altitudeTrack",
    title: "Pourquoi l’altitude n’a pas un seul effet sur la performance",
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-individuels/les-records-de-1968-a-mexico-et-l-altitude",
    ],
    steps: [
      {
        label: "Regarder l’air",
        caption:
          "En altitude, la pression atmosphérique et, généralement, la densité de l’air diminuent.",
        detail:
          "Le pourcentage d’oxygène reste à peu près le même alors que sa pression partielle baisse.",
      },
      {
        label: "Regarder la traînée",
        caption: "Un air moins dense peut réduire la traînée à vitesse comparable.",
        detail:
          "L’influence réelle dépend de l’épreuve, de la vitesse, du vent et des autres conditions.",
      },
      {
        label: "Regarder l’endurance",
        caption:
          "La pression plus faible d’oxygène peut limiter certains efforts prolongés en altitude.",
        detail:
          "Ces effets différents ne suffisent pas à attribuer un record individuel à l’altitude seule.",
      },
    ],
    limit:
      "Schéma qualitatif. Aucun gain mesuré, conseil d’entraînement ou attribution du saut de Mexico n’est proposé.",
    source: {
      title: "NASA Glenn — The Drag Equation",
      url: "https://www.grc.nasa.gov/www/k-12/VirtualAero/BottleRocket/airplane/drageq.html",
    },
  },
  {
    canvasHeight: 230,
    id: "recordFrontier",
    title: "Lire un record comme une ligne par paliers",
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-individuels/pourquoi-les-records-du-monde-tombent-ils-moins-vite-qu-avant",
    ],
    steps: [
      {
        label: "Fixer le repère",
        caption:
          "Un record conserve la meilleure performance reconnue jusqu’à ce qu’elle soit dépassée.",
        detail: "La façon d’exprimer une meilleure marque dépend de l’épreuve.",
      },
      {
        label: "Observer les paliers",
        caption: "La ligne avance à la date d’un nouveau record puis reste au même niveau.",
        detail: "Une performance exceptionnelle peut rester longtemps sans être dépassée.",
      },
      {
        label: "Comparer les intervalles",
        caption: "L’écart entre deux records peut changer, tout comme l’ampleur du progrès.",
        detail:
          "Règles, technologie, conditions et nombre de compétiteurs influencent la comparaison entre épreuves.",
      },
    ],
    limit: "Série fictive. Le dessin ne prévoit aucune limite humaine ni date de prochain record.",
    source: {
      title: "Frontiers in Physiology — Research on world-record performance",
      url: "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2024.1372092/full",
    },
  },
  {
    canvasHeight: 230,
    id: "muscleEnergy",
    title: "Voir trois contributions au renouvellement de l’ATP",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/energetique-musculaire/filieres-energetiques-du-muscle",
    ],
    steps: [
      {
        label: "Au début",
        caption: "L’ATP permet aux protéines du muscle de produire une contraction.",
        detail:
          "La phosphocréatine contribue à reconstituer rapidement l’ATP dans certains efforts.",
      },
      {
        label: "Au fil de l’effort",
        caption: "La glycolyse contribue aussi à fournir de l’ATP.",
        detail:
          "Les voies peuvent contribuer en même temps. Leurs parts diffèrent selon l’intensité, la durée et les conditions.",
      },
      {
        label: "Au cours d’un effort plus long",
        caption:
          "La production oxydative peut prendre une part importante lorsque l’effort se poursuit.",
        detail:
          "Les courbes se superposent pour montrer cette coexistence. Elles ne fixent aucun instant de passage entre les voies.",
      },
    ],
    limit:
      "Courbes fictives et non chiffrées. Elles n’indiquent pas la dépense d’un sportif ni un protocole d’entraînement.",
    source: {
      title: "Gastin — Energy system interaction during maximal exercise",
      url: "https://pubmed.ncbi.nlm.nih.gov/11547894/",
    },
  },
  {
    canvasHeight: 230,
    id: "effortHeart",
    title: "Lire l’augmentation du débit pendant un effort",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/energetique-musculaire/pourquoi-le-coeur-bat-il-plus-vite-quand-on-fait-du-sport",
    ],
    steps: [
      {
        label: "Commencer au repos",
        caption: "Le cœur propulse du sang à chaque battement.",
        detail:
          "Le débit minute combine le nombre de battements et la quantité éjectée à chaque battement.",
      },
      {
        label: "Observer l’effort",
        caption: "La fréquence cardiaque peut augmenter pour répondre à la demande du corps.",
        detail:
          "La quantité éjectée par battement peut aussi changer. L’ajustement dépend de l’intensité et de la situation.",
      },
      {
        label: "Observer la récupération",
        caption: "Après l’effort, la fréquence revient progressivement vers un autre niveau.",
        detail:
          "Le rythme du retour varie selon de nombreux facteurs. Les tracés n’indiquent pas de seuil ni d’objectif.",
      },
    ],
    limit:
      "Cœur et tracés stylisés. La courbe n’est ni un électrocardiogramme réel ni un test de santé.",
    source: {
      title: "OpenStax — Cardiac Physiology",
      url: "https://openstax.org/books/anatomy-and-physiology-2e/pages/19-4-cardiac-physiology",
    },
  },
  {
    canvasHeight: 230,
    id: "muscleAdaptation",
    title: "Distinguer ce que changent la commande et la fibre",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/entrainement/comment-les-muscles-deviennent-ils-plus-forts-avec-l-entrainement",
    ],
    steps: [
      {
        label: "Activer les fibres",
        caption: "Les nerfs activent des groupes de fibres musculaires.",
        detail: "La force produite dépend en partie de la coordination de ce recrutement.",
      },
      {
        label: "Modifier la commande",
        caption: "La pratique peut modifier la façon dont les unités motrices sont activées.",
        detail:
          "Ces adaptations participent aux gains de force et peuvent coexister avec d’autres changements.",
      },
      {
        label: "Modifier le muscle",
        caption:
          "Certaines formes d’entraînement peuvent augmenter la taille de fibres musculaires.",
        detail:
          "L’évolution dépend de la tâche, du contexte et du temps. Le gain de taille et le gain de force ne sont pas strictement proportionnels.",
      },
    ],
    limit: "Coupe et fibres agrandies. Aucun programme, charge ou délai individuel n’est indiqué.",
    source: {
      title: "Folland et Williams — The Adaptations to Strength Training",
      url: "https://pubmed.ncbi.nlm.nih.gov/17241104/",
    },
  },
  {
    canvasHeight: 230,
    id: "opticalWatch",
    title: "Ce qu’une montre lit à travers la peau",
    paths: [
      "/sport-et-sciences-du-mouvement/sport-et-societe/activite-physique-et-sante/que-mesure-vraiment-le-capteur-au-dos-d-une-montre-connectee-et-peut-on-s-y-fier",
    ],
    steps: [
      {
        label: "Éclairer",
        caption:
          "Une diode envoie de la lumière et un capteur mesure une partie de la lumière renvoyée.",
        detail:
          "Ce trajet rencontre la peau et les tissus. La longueur d’onde et le dispositif varient.",
      },
      {
        label: "Estimer le pouls",
        caption: "Les variations du volume sanguin influencent le signal optique mesuré.",
        detail: "Un appareil peut repérer une périodicité pour estimer le pouls.",
      },
      {
        label: "Voir un signal perturbé",
        caption:
          "Un mouvement ou le changement de contact entre la peau et la montre peut brouiller le signal.",
        detail:
          "La fiabilité dépend de la situation et du dispositif. La mesure optique de poignet n’est pas assimilable à tout examen cardiaque.",
      },
    ],
    limit:
      "Signal fictif, ni valeur de performance ni indication médicale. Aucun produit précis n’est évalué.",
    source: {
      title: "Zhang et al. — Wrist-Worn Photoplethysmograph Motion Artifacts",
      url: "https://pubmed.ncbi.nlm.nih.gov/30736395/",
    },
  },
  {
    canvasHeight: 230,
    id: "trainingCycle",
    title: "Lire trois moments après une séance",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/entrainement/principes-periodisation-entrainement-sportif",
    ],
    steps: [
      {
        label: "Voir la fatigue",
        caption: "Une séance peut diminuer transitoirement la performance disponible.",
        detail: "La réponse dépend de la nature de l’effort et des capacités de départ.",
      },
      {
        label: "Revenir vers un repère",
        caption:
          "La récupération permet de retrouver une partie ou la totalité de la disponibilité antérieure.",
        detail:
          "Cette récupération n’a pas un délai identique pour toutes les personnes ou séances.",
      },
      {
        label: "Envisager une adaptation",
        caption:
          "Une suite d’expositions et de récupérations peut modifier la capacité à répondre à l’effort.",
        detail:
          "Le troisième profil illustre une réponse possible. La progression réelle n’est pas une courbe garantie.",
      },
    ],
    limit: "Courbe qualitative. Aucun délai, volume, charge ou programme à suivre n’est indiqué.",
    source: {
      title: "Encyclopaedia Britannica — Exercise and physical fitness",
      url: "https://www.britannica.com/topic/exercise-physical-fitness",
    },
  },
] satisfies LessonDiagramSpec[];
