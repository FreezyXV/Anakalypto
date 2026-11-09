import { AI_CONTEXT_DIAGRAMS } from "./ai-context";
import { AI_USAGE_DIAGRAMS } from "./ai-usage";
import { LEARNING_DIAGRAMS } from "./learning";
import { AIRCRAFT_PROPULSION_DIAGRAMS } from "./aircraft-propulsion";
import { FLIGHT_SYSTEM_DIAGRAMS } from "./flight-systems";
import { AERONAUTICS_DIAGRAMS } from "./aeronautics";
import { SPACE_CONTEXT_DIAGRAMS } from "./space-context";
import { OBSERVATION_DIAGRAMS } from "./observation";
import { ASTRONOMY_DIAGRAMS } from "./astronomy";

/** Associations éditoriales explicites. Aucune recherche de mots-clés au rendu. */
export type LessonDiagramKind =
  | "lift"
  | "jet"
  | "hydraulic"
  | "lock"
  | "solar"
  | "wind"
  | "hydro"
  | "heatpump"
  | "battery"
  | "induction"
  | "greenhouse"
  | "groundwater"
  | "tectonics"
  | "eclipse"
  | "orbit"
  | "lens"
  | "fibre"
  | "distillation"
  | "binary"
  | "pixels"
  | "neuron"
  | "alveoli"
  | "dna"
  | "saponification"
  | "perspective"
  | "printing"
  | "engraving"
  | "arch"
  | "timbre"
  | "camera"
  | "pendulum"
  | "radiocarbon"
  | "probability"
  | "sorting"
  | "cpu"
  | "barcode"
  | "tides"
  | "starbirth"
  | "starlife"
  | "transit"
  | "transmission"
  | "microlensing"
  | "lensing"
  | "expansion"
  | "comet"
  | "skyglow"
  | "gps"
  | "planets"
  | "interferometer"
  | "blackhole"
  | "webb"
  | "infrared"
  | "adaptiveoptics"
  | "moonflight"
  | "lunation"
  | "polaris"
  | "aurora"
  | "smallbodies"
  | "isslife"
  | "readaptation"
  | "heliosphere"
  | "saturnrings"
  | "sundial"
  | "habitable"
  | "meteors"
  | "winglet"
  | "boundary"
  | "transonic"
  | "sonicboom"
  | "turboprop"
  | "sixpack"
  | "attitude"
  | "drag"
  | "windtunnel"
  | "flaps"
  | "glide"
  | "icing"
  | "helicopter"
  | "turbulence"
  | "inertial"
  | "reckoning"
  | "aircontrol"
  | "airrates"
  | "tcas"
  | "adsb"
  | "recorders"
  | "investigation"
  | "certification"
  | "hydrogenair"
  | "zeroe"
  | "electricair"
  | "aeroengine"
  | "saf"
  | "landingbrakes"
  | "magnetos"
  | "scooper"
  | "biasloop"
  | "aiact"
  | "worktasks"
  | "facematching"
  | "justiceai"
  | "multimodal"
  | "hallucination"
  | "localmodel"
  | "assistive"
  | "syntheticmedia"
  | "retrieval"
  | "robotaction"
  | "visionlanguage"
  | "gradient"
  | "golearning"
  | "overfitting"
  | "attention"
  | "arcadelearning"
  | "exploration"
  | "convolution"
  | "recurrent"
  | "expertinference"
  | "diffusion";
export type LessonDiagramStep = { label: string; caption: string; detail: string };
export type LessonDiagramSpec = {
  id: LessonDiagramKind;
  title: string;
  paths: string[];
  steps: [LessonDiagramStep, LessonDiagramStep, LessonDiagramStep];
  limit: string;
  source: { title: string; url: string };
};
export const LESSON_DIAGRAMS: readonly LessonDiagramSpec[] = [
  {
    id: "lift",
    title: "L’aile et l’air qui la contourne",
    paths: [
      "/aeronautique/aerodynamique/portance/physique-portance-aerodynamique",
      "/aeronautique/aerodynamique/portance/pourquoi-un-avion-vole-portance-et-ecoulement-de-l-air",
      "/aeronautique/aerodynamique/portance/decrochage-aerodynamique",
    ],
    steps: [
      {
        label: "Écoulement attaché",
        caption: "L’air suit le profil de l’aile et est dévié vers le bas.",
        detail:
          "La portance résulte de la répartition des pressions autour de l’aile. La déviation de l’air décrit le même phénomène ; les filets au-dessus et au-dessous n’ont pas à se rejoindre en même temps.",
      },
      {
        label: "Incidence accrue",
        caption: "L’aile s’incline davantage par rapport à l’air incident.",
        detail:
          "Avant le décrochage, augmenter l’incidence peut augmenter la portance. L’incidence est l’angle avec l’air relatif, pas avec l’horizon.",
      },
      {
        label: "Décrochage",
        caption: "L’écoulement se sépare et la portance diminue fortement.",
        detail:
          "Le dessin conserve une portance résiduelle : elle ne devient pas nécessairement nulle. L’incidence critique dépend du profil et des conditions de vol.",
      },
    ],
    limit:
      "Coupe qualitative ; les flèches ne mesurent pas les forces, et aucun angle critique universel n’est imposé.",
    source: {
      title: "NASA Glenn — Lift",
      url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/what-is-lift/",
    },
  },
  {
    id: "jet",
    title: "Deux flux, un même moteur",
    paths: [
      "/aeronautique/propulsion/turboreacteurs/fonctionnement-turboreacteur",
      "/aeronautique/propulsion/turboreacteurs/taux-de-dilution-turboreacteurs",
      "/aeronautique/propulsion/turboreacteurs/le-turboreacteur-a-double-flux-principe-de-fonctionnement",
    ],
    steps: [
      {
        label: "Faire entrer l’air",
        caption: "La soufflante envoie une partie de l’air autour du cœur.",
        detail:
          "Le flux secondaire contourne les chambres chaudes. Dans un turboréacteur à double flux, il contribue lui aussi à la poussée.",
      },
      {
        label: "Chauffer le cœur",
        caption: "Le compresseur précède la combustion, puis la turbine.",
        detail:
          "Le carburant apporte de l’énergie. La turbine récupère une partie de cette énergie pour entraîner le compresseur et la soufflante par des arbres.",
      },
      {
        label: "Accélérer les flux",
        caption: "De l’air est accéléré vers l’arrière ; le moteur est poussé vers l’avant.",
        detail:
          "La combustion est continue. Les zones montrées coexistent dans le moteur : ce ne sont pas quatre temps successifs comme dans un moteur à piston.",
      },
    ],
    limit:
      "Architecture de double flux simplifiée ; un seul arbre symbolique, sans proportions réelles ni calcul de poussée.",
    source: {
      title: "NASA Glenn — Turbofan",
      url: "https://www.grc.nasa.gov/www/k-12/airplane/aturbf.html",
    },
  },
  {
    id: "hydraulic",
    title: "Une pression, deux surfaces",
    paths: [
      "/technologies-et-ingenierie/robotique/actionneurs/comment-un-verin-hydraulique-donne-t-il-une-force-enorme-a-une-machine",
    ],
    steps: [
      {
        label: "Observer les pistons",
        caption: "Deux pistons communiquent par un liquide enfermé.",
        detail:
          "Le piston de droite a une surface quatre fois plus grande. On suppose le liquide incompressible et on néglige les frottements et la différence de hauteur.",
      },
      {
        label: "Transmettre l’effort",
        caption: "100 N sur 1 cm² correspondent à 400 N sur 4 cm².",
        detail:
          "L’augmentation de pression transmise est la même : F / A. L’aire dessinée en perspective n’est pas une mesure de la surface du piston.",
      },
      {
        label: "Comparer les courses",
        caption: "Le grand piston parcourt une distance quatre fois plus petite.",
        detail:
          "Pour le même volume déplacé, 4 cm de course à gauche correspondent à 1 cm à droite. Le gain de force ne crée pas d’énergie.",
      },
    ],
    limit:
      "Presse hydraulique idéale ; les valeurs indiquent les forces et les flèches leur direction. Le circuit de commande d’un vérin double effet n’est pas détaillé.",
    source: {
      title: "OpenStax — Pascal et hydraulique",
      url: "https://openstax.org/books/university-physics-volume-1/pages/14-3-pascals-principle-and-hydraulics",
    },
  },
  {
    id: "lock",
    title: "Monter grâce au niveau de l’eau",
    paths: [
      "/technologies-et-ingenierie/genie-civil/ouvrages-dart/comment-une-ecluse-fait-elle-monter-un-bateau-sans-aucune-pompe",
    ],
    steps: [
      {
        label: "Entrer en bas",
        caption: "Le sas et l’aval sont au même niveau ; le bateau entre.",
        detail:
          "La porte aval est ouverte, la porte amont fermée. Les portes sont représentées en coupe : une ouverture est un passage libre.",
      },
      {
        label: "Remplir le sas",
        caption: "Les portes sont fermées ; une vanne laisse entrer l’eau d’amont.",
        detail:
          "L’eau s’écoule par gravité depuis le niveau le plus haut. Le bateau reste à flot pendant la montée.",
      },
      {
        label: "Sortir en haut",
        caption: "Quand les niveaux sont égaux, la porte amont peut s’ouvrir.",
        detail:
          "La porte aval reste fermée. Pour descendre, le sas se vide vers l’aval ; on ne pousse pas le bateau avec un piston.",
      },
    ],
    limit:
      "Écluse simple vue en coupe ; les positions et conduits des vannes varient selon les ouvrages.",
    source: {
      title: "VNF — Gestion de l’eau et écluses",
      url: "https://www.vnf.fr/vnf/app/uploads/2025/06/Le-canal-du-Midi_un-ouvrage-hydraulique-au-coeur-des-territoires-1.pdf",
    },
  },
  {
    id: "solar",
    title: "De la lumière au courant",
    paths: [
      "/energie/energies-renouvelables/solaire/comment-fonctionne-une-cellule-photovoltaique",
    ],
    steps: [
      {
        label: "Éclairer la cellule",
        caption: "Des photons apportent de l’énergie au silicium.",
        detail:
          "La cellule absorbe une partie de la lumière. Le reste peut être réfléchi ou transmis ; une partie de l’énergie absorbée devient de la chaleur.",
      },
      {
        label: "Séparer les charges",
        caption: "Le champ interne aide à séparer les charges mobiles.",
        detail:
          "Le schéma distingue les deux faces et la jonction. Il ne représente ni chaque atome ni le dopage à son échelle réelle.",
      },
      {
        label: "Fermer le circuit",
        caption: "Un circuit extérieur permet de fournir de l’énergie à une lampe.",
        detail:
          "La lampe représente un récepteur adapté au courant continu de la cellule. Aucun onduleur ni réseau domestique n’est représenté.",
      },
    ],
    limit:
      "Vue fonctionnelle d’une cellule ; les points représentent des charges, pas des photons transformés en électrons.",
    source: {
      title: "Department of Energy — Solar basics",
      url: "https://www.energy.gov/cmei/systems/how-does-solar-energy-work",
    },
  },
  {
    id: "wind",
    title: "Du vent à la génératrice",
    paths: [
      "/energie/energies-renouvelables/eolien/comment-fonctionne-une-eolienne",
      "/energie/energies-renouvelables/eolien/record-mondial-installations-eoliennes-2024",
    ],
    steps: [
      {
        label: "Capter le vent",
        caption: "Les pales extraient une partie de l’énergie du vent.",
        detail:
          "Les forces aérodynamiques sur les pales font tourner le rotor. Le vent n’est pas entièrement arrêté.",
      },
      {
        label: "Entraîner la machine",
        caption: "Un arbre transmet la rotation à la génératrice.",
        detail:
          "La nacelle est ouverte symboliquement pour voir la génératrice. Certaines éoliennes utilisent un multiplicateur, d’autres un entraînement direct.",
      },
      {
        label: "Produire du courant",
        caption: "La génératrice convertit l’énergie mécanique en énergie électrique.",
        detail:
          "Les câbles passent dans la tour. L’électronique de puissance et le raccordement au réseau ne sont pas détaillés ici.",
      },
    ],
    limit:
      "Schéma de conversion ; l’angle des pales et la longueur des flèches ne donnent ni vitesse ni rendement.",
    source: {
      title: "Department of Energy — Wind turbines",
      url: "https://www.energy.gov/cmei/systems/how-do-wind-turbines-work",
    },
  },
  {
    id: "hydro",
    title: "La chute entraîne une turbine",
    paths: [
      "/energie/energies-renouvelables/hydraulique/comment-un-barrage-transforme-t-il-l-eau-d-une-riviere-en-electricite",
      "/energie/energies-renouvelables/hydraulique/microcentrale-hydroelectrique",
    ],
    steps: [
      {
        label: "Retenir l’eau",
        caption: "L’eau stockée en hauteur possède de l’énergie potentielle.",
        detail:
          "La différence de niveau entre la retenue et l’aval contribue à la hauteur de chute disponible.",
      },
      {
        label: "Faire tourner la turbine",
        caption: "L’eau descend dans la conduite, traverse la turbine puis rejoint l’aval.",
        detail:
          "La conduite est ici dessinée à travers une coupe du barrage pour rendre le trajet visible. L’eau ne traverse pas la génératrice.",
      },
      {
        label: "Entraîner la génératrice",
        caption: "La turbine entraîne la génératrice par un arbre.",
        detail:
          "La conversion passe de l’énergie de l’eau à la rotation, puis à l’électricité. Le débit et la hauteur de chute influencent la puissance.",
      },
    ],
    limit:
      "Centrale avec retenue simplifiée ; pas de pompage, de dimensions de génie civil ou de simulation de débit.",
    source: {
      title: "EIA — Hydropower",
      url: "https://www.eia.gov/energyexplained/hydropower/",
    },
  },
  {
    id: "heatpump",
    title: "Déplacer la chaleur vers la maison",
    paths: [
      "/energie/efficacite-et-sobriete/efficacite-energetique/comment-une-pompe-a-chaleur-chauffe-t-elle-avec-l-air-froid-du-dehors",
    ],
    steps: [
      {
        label: "Prélever dehors",
        caption: "Un fluide plus froid que l’air extérieur y absorbe de la chaleur.",
        detail:
          "Même un air froid peut céder de la chaleur à un fluide encore plus froid. Ce fluide s’évapore dans l’échangeur extérieur.",
      },
      {
        label: "Comprimer",
        caption: "Le compresseur reçoit de l’énergie électrique.",
        detail:
          "La compression élève la pression et la température du fluide gazeux. La chaleur livrée ensuite inclut cet apport d’énergie.",
      },
      {
        label: "Chauffer dedans",
        caption: "Le fluide cède de la chaleur dans la maison, puis passe par le détendeur.",
        detail:
          "Après condensation et détente, le fluide peut de nouveau absorber de la chaleur dehors. Le circuit est fermé ; l’air extérieur ne circule pas dans les tuyaux.",
      },
    ],
    limit:
      "Mode chauffage uniquement ; aucun coefficient de performance garanti, ni fluide réel ou température chiffrée.",
    source: {
      title: "IEA — How a heat pump works",
      url: "https://www.iea.org/reports/the-future-of-heat-pumps/how-a-heat-pump-works",
    },
  },
  {
    id: "battery",
    title: "Deux trajets dans une batterie",
    paths: [
      "/energie/reseaux-et-stockage/batteries/comment-fonctionne-une-batterie-lithium-ion",
      "/automobile/motorisations/electrique/chimies-batteries-lithium-ion-automobile",
    ],
    steps: [
      {
        label: "Décharger",
        caption: "Les ions Li⁺ traversent l’électrolyte du côté négatif vers le côté positif.",
        detail:
          "Les électrons suivent un autre chemin : le circuit extérieur qui alimente l’appareil. Les ions ne passent pas dans la lampe.",
      },
      {
        label: "Suivre les électrons",
        caption: "Les électrons passent par l’appareil, pas à travers le séparateur.",
        detail:
          "La flèche indique ici le sens de déplacement des électrons, opposé au sens conventionnel du courant.",
      },
      {
        label: "Recharger",
        caption: "Un chargeur impose le trajet inverse des ions et des électrons.",
        detail:
          "Les électrodes gardent leurs signes + et −. Le chargeur apporte l’énergie nécessaire ; la batterie n’inverse pas spontanément son fonctionnement.",
      },
    ],
    limit:
      "Cellule lithium-ion rechargeable schématique ; pas de chimie détaillée, de vieillissement ni de procédure de recharge.",
    source: {
      title: "NASA — Batteries, X-57",
      url: "https://www.nasa.gov/wp-content/uploads/2018/07/x-57-how-do-batteries-store-and-transfer-energy.pdf",
    },
  },
  {
    id: "induction",
    title: "Faire varier le champ dans une bobine",
    paths: [
      "/energie/reseaux-et-stockage/reseaux-electriques/produire-electricite-avec-aimant",
      "/sciences-fondamentales/physique/electromagnetisme/comment-une-dynamo-de-velo-fabrique-t-elle-de-l-electricite",
    ],
    steps: [
      {
        label: "Aimant immobile",
        caption: "Un aimant immobile ne suffit pas à maintenir un courant.",
        detail:
          "Dans cette expérience, la bobine et l’aimant sont immobiles l’un par rapport à l’autre et le champ ne varie pas.",
      },
      {
        label: "Approcher l’aimant",
        caption: "Quand l’aimant approche, le flux magnétique dans la bobine change.",
        detail:
          "Cette variation induit une tension ; le circuit fermé permet un courant. Le galvanomètre indique un sens, sans valeur mesurée.",
      },
      {
        label: "Éloigner l’aimant",
        caption: "Quand le mouvement s’inverse, la déviation de l’aiguille s’inverse.",
        detail:
          "Dans une génératrice, une rotation entretient les variations. Le dessin montre l’expérience de translation qui permet d’en comprendre le principe.",
      },
    ],
    limit:
      "Expérience idéale ; l’aiguille est qualitative et ne représente pas une intensité calculée.",
    source: {
      title: "OpenStax — Generators and induction",
      url: "https://openstax.org/books/university-physics-volume-2/pages/13-6-electric-generators-and-back-emf",
    },
  },
  {
    id: "greenhouse",
    title: "L’infrarouge et l’atmosphère",
    paths: [
      "/environnement-et-climat/changement-climatique/gaz-a-effet-de-serre/pourquoi-le-methane-est-il-un-gaz-a-effet-de-serre-si-puissant",
      "/environnement-et-climat/changement-climatique/gaz-a-effet-de-serre/concentration-record-de-co2-dans-latmosphere",
      "/espace-et-astronomie/systeme-solaire/planetes/pourquoi-venus-est-elle-la-planete-la-plus-chaude-du-systeme-solaire",
    ],
    steps: [
      {
        label: "Recevoir du Soleil",
        caption: "Une partie du rayonnement solaire atteint le sol et le réchauffe.",
        detail:
          "Les flèches dorées représentent le rayonnement solaire. Une partie est aussi réfléchie vers l’espace.",
      },
      {
        label: "Émettre de l’infrarouge",
        caption: "Le sol émet un rayonnement infrarouge vers l’atmosphère et l’espace.",
        detail:
          "Les flèches orange représentent une autre gamme de rayonnement. Une partie traverse l’atmosphère sans être absorbée.",
      },
      {
        label: "Absorber et réémettre",
        caption:
          "Les gaz à effet de serre absorbent puis émettent de l’infrarouge dans plusieurs directions.",
        detail:
          "Une partie revient vers la surface. L’atmosphère n’est ni un miroir étanche ni un couvercle : de l’énergie continue de repartir vers l’espace.",
      },
    ],
    limit:
      "Principe commun, sans comparaison quantitative entre méthane, CO₂ et Vénus ; les flèches ne constituent pas un bilan énergétique chiffré.",
    source: {
      title: "NASA — Greenhouse effect",
      url: "https://science.nasa.gov/climate-change/faq/what-is-the-greenhouse-effect/",
    },
  },
  {
    id: "groundwater",
    title: "L’eau entre les grains de la roche",
    paths: [
      "/environnement-et-climat/pollution-et-ressources/eau/comment-se-forme-une-nappe-d-eau-sous-nos-pieds",
      "/sciences-fondamentales/sciences-de-la-terre/geologie/trouver-eau-souterraine",
    ],
    steps: [
      {
        label: "Infiltration",
        caption: "Une partie de la pluie descend dans les pores du sol.",
        detail:
          "Le dessin montre seulement l’eau qui s’infiltre ; d’autres fractions ruissellent ou retournent à l’atmosphère.",
      },
      {
        label: "Zone saturée",
        caption: "Sous le niveau de la nappe, les pores sont remplis d’eau.",
        detail:
          "Les grains de roche restent présents dans la zone bleue. Une nappe est un milieu rocheux saturé, pas une caverne remplie d’eau.",
      },
      {
        label: "Puiser dans la nappe",
        caption: "Un puits atteint la zone saturée de l’aquifère.",
        detail:
          "L’eau peut circuler entre les pores connectés. La recharge n’est pas instantanée ; le schéma ne garantit ni débit ni potabilité.",
      },
    ],
    limit:
      "Nappe libre dans un matériau poreux ; les nappes captives et les écoulements dans les fissures ne sont pas représentés.",
    source: {
      title: "USGS — Groundwater",
      url: "https://www.usgs.gov/water-science-school/science/groundwater-what-groundwater",
    },
  },
  {
    id: "tectonics",
    title: "Trois frontières de plaques",
    paths: [
      "/sciences-fondamentales/sciences-de-la-terre/geologie/tectonique-des-plaques",
      "/sciences-fondamentales/sciences-de-la-terre/volcans-et-seismes/volcans-et-tremblements-de-terre",
    ],
    steps: [
      {
        label: "S’écarter",
        caption: "Deux plaques s’écartent à une dorsale.",
        detail:
          "Du matériau chaud remonte et forme de la nouvelle lithosphère océanique. Les plaques incluent la croûte et une partie rigide du manteau.",
      },
      {
        label: "Converger",
        caption: "Une plaque océanique plonge sous une autre plaque.",
        detail:
          "La subduction peut s’accompagner de séismes et de volcanisme. Toutes les convergences ne sont pas des subductions océaniques.",
      },
      {
        label: "Coulisser",
        caption: "Deux plaques glissent horizontalement l’une contre l’autre.",
        detail:
          "Le troisième panneau est vu de dessus. Le coulissage peut produire des séismes sans créer ni détruire de lithosphère à cette frontière.",
      },
    ],
    limit:
      "Deux coupes et une vue de dessus explicitement distinguées ; aucun mouvement à l’échelle du temps réel.",
    source: {
      title: "NOAA — Plate tectonics",
      url: "https://oceanexplorer.noaa.gov/ocean-fact/plate-boundaries/",
    },
  },
  {
    id: "eclipse",
    title: "Quand une ombre rencontre un astre",
    paths: [
      "/espace-et-astronomie/systeme-solaire/lune/pourquoi-n-y-a-t-il-pas-une-eclipse-a-chaque-nouvelle-lune",
    ],
    steps: [
      {
        label: "Sans alignement",
        caption: "La Lune passe généralement au-dessus ou au-dessous de l’alignement.",
        detail:
          "Son orbite est inclinée par rapport au plan de l’orbite terrestre. L’écart vertical est volontairement exagéré ici.",
      },
      {
        label: "Éclipse de Soleil",
        caption: "La Lune est entre le Soleil et la Terre.",
        detail:
          "Son ombre peut atteindre une petite partie de la Terre. Les dimensions du dessin ne permettent pas de distinguer une éclipse totale d’une annulaire.",
      },
      {
        label: "Éclipse de Lune",
        caption: "La Terre est entre le Soleil et la Lune.",
        detail:
          "La Lune traverse l’ombre de la Terre, à la pleine Lune et près d’un nœud de son orbite. Les phases et les éclipses sont deux phénomènes différents.",
      },
    ],
    limit:
      "Alignements schématiques, tailles et distances non respectées ; aucune prédiction de date ou de visibilité.",
    source: {
      title: "NASA — Eclipses and the Moon",
      url: "https://science.nasa.gov/moon/eclipses/",
    },
  },
  {
    id: "orbit",
    title: "Tomber en avançant",
    paths: [
      "/espace-et-astronomie/exploration-spatiale/lanceurs-et-orbites/mettre-un-objet-en-orbite",
      "/espace-et-astronomie/exploration-spatiale/lanceurs-et-orbites/comment-une-fusee-fait-elle-pour-rester-en-orbite-autour-de-la-terre",
      "/espace-et-astronomie/exploration-spatiale/vols-habites/pourquoi-les-astronautes-flottent-ils-dans-la-station-spatiale",
    ],
    steps: [
      {
        label: "Sans vitesse latérale",
        caption: "Sans vitesse tangentielle, l’objet tombe vers le sol.",
        detail:
          "L’expérience part au-dessus de la Terre. La flèche orange représente la direction de la gravité.",
      },
      {
        label: "Vitesse insuffisante",
        caption: "Une vitesse latérale plus grande fait tomber plus loin.",
        detail:
          "Le point de contact se déplace sur le globe. On néglige l’atmosphère pour isoler le rôle de la vitesse initiale.",
      },
      {
        label: "En orbite",
        caption: "À la bonne vitesse, la trajectoire contourne la Terre.",
        detail:
          "La gravité continue d’agir vers le centre. La flèche bleue est tangentielle : en orbite circulaire, vitesse et gravité n’ont pas la même direction.",
      },
    ],
    limit:
      "Expérience de pensée sans atmosphère, non à l’échelle ; ni trajectoire de lancement ni calcul orbital.",
    source: {
      title: "NASA — Orbits",
      url: "https://science.nasa.gov/learn/basics-of-space-flight/chapter3-4/",
    },
  },
  {
    id: "lens",
    title: "Faire converger ou diverger la lumière",
    paths: [
      "/sciences-fondamentales/physique/electromagnetisme/lentilles-optique",
      "/espace-et-astronomie/observation-astronomique/telescopes/fabriquer-lunette-astronomique",
    ],
    steps: [
      {
        label: "Sans lentille",
        caption: "Des rayons parallèles restent parallèles dans un milieu uniforme.",
        detail:
          "Le trait horizontal gris indique l’axe optique. Les flèches dorées vont toutes de gauche à droite.",
      },
      {
        label: "Convergente",
        caption: "Une lentille convergente rapproche les rayons vers un foyer.",
        detail:
          "La lentille est plus épaisse au centre. Le modèle de lentille mince concentre symboliquement la déviation au plan central.",
      },
      {
        label: "Divergente",
        caption: "Une lentille divergente écarte les rayons.",
        detail:
          "Les prolongements pointillés se croisent au foyer virtuel, du côté de la source. La lumière ne parcourt pas ces pointillés.",
      },
    ],
    limit:
      "Lentilles minces et rayons proches de l’axe ; pas de montage complet de lunette, ni d’aberrations.",
    source: {
      title: "OpenStax — Thin lenses",
      url: "https://openstax.org/books/university-physics-volume-3/pages/2-4-thin-lenses",
    },
  },
  {
    id: "fibre",
    title: "Guider un rayon dans du verre",
    paths: [
      "/communication-et-medias/telecommunications/fibre-et-reseaux-fixes/comment-la-lumiere-reste-t-elle-prisonniere-d-une-fibre-optique",
      "/communication-et-medias/telecommunications/fibre-et-reseaux-fixes/fibre-optique-et-reseaux-dacces",
    ],
    steps: [
      {
        label: "Voir les couches",
        caption: "Le cœur est entouré d’une gaine d’indice plus faible.",
        detail: "Les deux couches sont transparentes. La gaine n’est pas un miroir métallique.",
      },
      {
        label: "Guider la lumière",
        caption: "Dans les bonnes conditions d’angle, le rayon reste dans le cœur.",
        detail:
          "Le tracé montre un rayon guidé par réflexion totale interne. Ce modèle de rayons convient à l’explication d’une fibre multimode.",
      },
      {
        label: "Lire une impulsion",
        caption: "Un récepteur convertit un signal lumineux reçu en signal électrique.",
        detail:
          "Le point lumineux illustre une impulsion ; le dessin ne prétend pas coder un octet réel ou représenter tous les modes optiques.",
      },
    ],
    limit:
      "Fibre droite multimode symbolique ; une fibre monomode se décrit par un mode électromagnétique, pas par ce seul zigzag.",
    source: {
      title: "OpenStax — Refraction and fiber optics",
      url: "https://openstax.org/books/physics/pages/16-2-refraction",
    },
  },
  {
    id: "distillation",
    title: "Vaporiser puis condenser",
    paths: ["/sciences-fondamentales/chimie/chimie-organique/distillation"],
    steps: [
      {
        label: "Chauffer le mélange",
        caption: "La vapeur est plus riche en composé le plus volatil.",
        detail:
          "Les deux espèces peuvent s’évaporer ensemble. Le dessin ne suppose pas que l’une attende que l’autre ait entièrement disparu.",
      },
      {
        label: "Refroidir la vapeur",
        caption: "Un réfrigérant enlève de la chaleur et condense la vapeur.",
        detail:
          "L’eau froide circule dans une enveloppe séparée. Elle entre par le bas et ressort par le haut ; elle ne se mélange pas au distillat.",
      },
      {
        label: "Recueillir le distillat",
        caption: "Le liquide condensé arrive dans un autre récipient.",
        detail:
          "Le distillat est enrichi, pas nécessairement pur. La séparation dépend du mélange et de l’appareil utilisé.",
      },
    ],
    limit:
      "Distillation simple symbolique ; aucun protocole, montage de sécurité complet ou température opératoire.",
    source: {
      title: "Chemistry LibreTexts — Simple distillation",
      url: "https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_Lab_Techniques_(Nichols)/05%3A_Distillation/5.02%3A_Simple_Distillation/5.2B%3A_Separation_Theory",
    },
  },
  {
    id: "binary",
    title: "Quatre positions, seize nombres",
    paths: [
      "/micro-informatique-et-informatique/donnees/representation-et-compression/comment-un-ordinateur-peut-il-tout-ecrire-avec-seulement-des-0-et-des-1",
      "/sciences-fondamentales/mathematiques/algebre/numeration-position-zero",
    ],
    steps: [
      {
        label: "Lire 0001",
        caption: "Seule la colonne des unités est active : la valeur est 1.",
        detail:
          "De gauche à droite, les quatre positions valent 8, 4, 2 et 1. Un bit à zéro ne contribue pas à la somme.",
      },
      {
        label: "Lire 0101",
        caption: "Les colonnes 4 et 1 sont actives : la valeur est 5.",
        detail:
          "La même règle de position s’applique avec seulement deux chiffres. Les états physiques peuvent être deux plages de tension, sans exiger l’absence totale de courant.",
      },
      {
        label: "Lire 1101",
        caption: "Les colonnes 8, 4 et 1 sont actives : la valeur est 13.",
        detail:
          "Quatre bits permettent de représenter seize valeurs entières de 0 à 15. Le codage des lettres demande une convention supplémentaire.",
      },
    ],
    limit:
      "Exemples d’entiers non signés sur quatre bits ; aucun flottant, texte ou circuit électronique simulé.",
    source: {
      title: "CS Unplugged — Binary numbers",
      url: "https://www.csunplugged.org/en/topics/binary-numbers/",
    },
  },
  {
    id: "pixels",
    title: "Une image est faite d’échantillons",
    paths: [
      "/micro-informatique-et-informatique/donnees/representation-et-compression/qu-est-ce-qu-un-pixel-et-comment-une-image-est-elle-faite-de-pixels",
      "/micro-informatique-et-informatique/materiel/peripheriques-et-ecrans/comment-un-ecran-affiche-une-image",
    ],
    steps: [
      {
        label: "Voir la grille",
        caption: "Chaque case représente une couleur échantillonnée de l’image.",
        detail:
          "Le petit motif est une image matricielle volontairement grossière. Les cases sont un moyen de la dessiner, pas la forme universelle d’un pixel physique.",
      },
      {
        label: "Agrandir sans détail",
        caption: "Agrandir les mêmes pixels ne recrée pas les détails manquants.",
        detail:
          "Le contour en escalier devient visible. On agrandit ici au plus proche voisin, sans interpolation.",
      },
      {
        label: "Composer une couleur",
        caption: "Un écran RVB combine des sous-pixels rouges, verts et bleus.",
        detail:
          "Le détail montre un arrangement en bandes possible, pas celui de tous les écrans. Trois canaux allumés ensemble peuvent produire du blanc.",
      },
    ],
    limit:
      "Motif symbolique, sans mesure colorimétrique ; les dispositions de sous-pixels et les technologies d’écran varient.",
    source: {
      title: "MDN — Pixel",
      url: "https://developer.mozilla.org/en-US/docs/Glossary/Pixel",
    },
  },
  {
    id: "neuron",
    title: "Du signal électrique au message chimique",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-nerveux/comment-un-neurone-envoie-t-il-un-message-a-un-autre-neurone",
      "/corps-humain-et-sante/anatomie/systeme-nerveux/systeme-nerveux-structure-fonctionnement",
    ],
    steps: [
      {
        label: "Suivre l’axone",
        caption: "Un signal électrique se propage jusqu’à la terminaison.",
        detail:
          "La vue principale montre un corps cellulaire, ses dendrites et son axone. Le médaillon est un agrandissement de la synapse.",
      },
      {
        label: "Libérer les messagers",
        caption: "La terminaison libère des neurotransmetteurs dans la fente.",
        detail:
          "Les molécules diffusent vers la membrane de la cellule suivante. Elles ne sont pas un courant électrique sautant dans le vide.",
      },
      {
        label: "Activer des récepteurs",
        caption: "Les neurotransmetteurs se fixent à des récepteurs.",
        detail:
          "La réponse peut exciter ou inhiber la cellule suivante. Une réception ne déclenche pas nécessairement un nouveau potentiel d’action.",
      },
    ],
    limit:
      "Synapse chimique simplifiée ; pas de chronométrie, d’anatomie complète ou de synapse électrique.",
    source: {
      title: "OpenStax — Neuronal communication",
      url: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons",
    },
  },
  {
    id: "alveoli",
    title: "Une paroi fine entre l’air et le sang",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-respiratoire/comment-les-poumons-font-ils-passer-l-oxygene-de-l-air-dans-le-sang",
      "/corps-humain-et-sante/anatomie/systeme-respiratoire/echanges-gazeux-et-respiration",
    ],
    steps: [
      {
        label: "Apporter l’air",
        caption: "L’air atteint une alvéole au bout d’une bronchiole.",
        detail:
          "Le capillaire qui longe sa paroi contient du sang. L’air et le sang restent dans deux compartiments distincts.",
      },
      {
        label: "Échanger les gaz",
        caption: "L’O₂ passe vers le sang et le CO₂ vers l’alvéole.",
        detail:
          "Les gaz diffusent à travers la paroi selon leurs différences de pressions partielles. Les flèches montrent les deux directions ; elles ne représentent pas le volume d’air inspiré.",
      },
      {
        label: "Transporter l’oxygène",
        caption: "Les globules rouges emportent l’oxygène vers le cœur.",
        detail:
          "La couleur distingue le sang avant et après son passage au poumon. Elle ne signifie pas que le sang humain devient bleu.",
      },
    ],
    limit:
      "Une seule alvéole agrandie ; ni ventilation mécanique, circulation complète ni conseil médical.",
    source: {
      title: "OpenStax — Gas exchange",
      url: "https://openstax.org/books/anatomy-and-physiology-2e/pages/22-4-gas-exchange",
    },
  },
  {
    id: "dna",
    title: "Deux brins complémentaires",
    paths: ["/sciences-fondamentales/biologie/genetique/decouverte-structure-adn"],
    steps: [
      {
        label: "Voir la double hélice",
        caption: "L’ADN comporte deux brins enroulés ensemble.",
        detail:
          "Les montants représentent les squelettes sucre-phosphate ; les barreaux représentent les paires de bases.",
      },
      {
        label: "Lire les paires",
        caption: "A s’apparie avec T ; G s’apparie avec C.",
        detail:
          "La vue déroulée montre les bases par leurs lettres, pas par leur couleur seule. Les liaisons entre bases sont symbolisées au centre.",
      },
      {
        label: "Comprendre la copie",
        caption: "Chaque brin peut servir de modèle pour un brin complémentaire.",
        detail:
          "Chaque molécule fille conserve un ancien brin et contient un nouveau brin. Les enzymes et la synthèse orientée sont laissées hors de cette vue d’ensemble.",
      },
    ],
    limit:
      "Structure et copie schématiques ; les bases sont hors échelle et la troisième vue n’est pas une fourche de réplication détaillée.",
    source: {
      title: "OpenStax — DNA structure",
      url: "https://openstax.org/books/biology-2e/pages/14-2-dna-structure-and-sequencing",
    },
  },
  {
    id: "saponification",
    title: "De l’huile aux molécules de savon",
    paths: [
      "/sciences-fondamentales/chimie/chimie-organique/comment-fabrique-t-on-du-savon-avec-de-l-huile",
    ],
    steps: [
      {
        label: "Voir le corps gras",
        caption: "Un triglycéride porte trois longues chaînes liées au glycérol.",
        detail:
          "Les trois chaînes sont simplifiées en zigzags. Elles ne sont pas trois molécules de savon déjà libres.",
      },
      {
        label: "Transformer les liaisons",
        caption: "Une base forte permet de transformer les liaisons ester.",
        detail:
          "Le bilan symbolique montre trois ions hydroxyde pour un triglycéride. Il explique une réaction, sans donner de recette de fabrication.",
      },
      {
        label: "Identifier les produits",
        caption: "On obtient du glycérol et trois ions carboxylate constituant le savon.",
        detail:
          "Les ions sodium accompagnent les carboxylates si la base est la soude. Les longues queues et les têtes ioniques expliquent ensuite le nettoyage, montré dans l’atelier du savon.",
      },
    ],
    limit:
      "Bilan moléculaire simplifié, sans protocole ni quantités de manipulation ; les contre-ions sont indiqués dans la légende.",
    source: {
      title: "OpenStax — Soap",
      url: "https://openstax.org/books/organic-chemistry/pages/27-2-soap",
    },
  },
  {
    id: "perspective",
    title: "Dessiner une profondeur à un point de fuite",
    paths: ["/arts-et-culture/arts-visuels/peinture-et-sculpture/perspective-lineaire-renaissance"],
    steps: [
      {
        label: "Les lignes du sol",
        caption: "Les lignes qui s’éloignent convergent vers un même point de fuite.",
        detail:
          "Dans cet exemple à un point de fuite, le plan du tableau reste parallèle à la façade. Seule la famille de lignes qui s’éloigne de face converge vers ce point.",
      },
      {
        label: "Les transversales",
        caption: "Les intervalles paraissent se resserrer vers l’horizon.",
        detail:
          "Le dessin est une projection de carreaux de même profondeur. Les verticales restent verticales et les transversales restent horizontales dans cette configuration.",
      },
      {
        label: "Deux tailles apparentes",
        caption: "Deux personnages de même taille paraissent différents selon leur distance.",
        detail:
          "Les pieds et les têtes respectent les mêmes directions de fuite. La ligne d’horizon correspond à la hauteur de l’œil, pas forcément au bord réel d’une mer.",
      },
    ],
    limit:
      "Construction géométrique à un point de fuite ; elle ne décrit pas toutes les orientations d’un objet ni tous les systèmes artistiques.",
    source: {
      title: "National Gallery — Perspective",
      url: "https://www.nationalgallery.org.uk/paintings/glossary/perspective",
    },
  },
  {
    id: "printing",
    title: "Encrer, presser, réutiliser",
    paths: [
      "/arts-et-culture/litterature-et-ecriture/histoire-du-livre/invention-de-limprimerie-a-caracteres-mobiles",
    ],
    steps: [
      {
        label: "Composer et encrer",
        caption: "Des caractères séparés forment une ligne prête à imprimer.",
        detail:
          "Les signes sont inversés sur leur face imprimante pour donner une lecture correcte sur la feuille. Les blocs peuvent être redistribués après usage.",
      },
      {
        label: "Appliquer la pression",
        caption: "La vis abaisse une platine qui presse le papier sur les caractères encrés.",
        detail:
          "Le dessin montre une coupe fonctionnelle de la presse. L’encre se transfère depuis les surfaces en relief vers le papier.",
      },
      {
        label: "Recommencer",
        caption:
          "La feuille est retirée ; la composition peut être réencrée pour une autre impression.",
        detail:
          "La presse, l’encre, le métal et la composition fonctionnent ensemble. Ce schéma explique le procédé sans attribuer à Gutenberg l’invention mondiale du caractère mobile.",
      },
    ],
    limit:
      "Presse à vis simplifiée ; le chariot et la manipulation complète du tympan ne sont pas montrés.",
    source: {
      title: "International Printing Museum — Gutenberg Press",
      url: "https://www.printmuseum.org/gutenberg-press",
    },
  },
  {
    id: "engraving",
    title: "Un relief encré, une image sur le papier",
    paths: [
      "/arts-et-culture/arts-visuels/arts-graphiques-et-design/comment-une-gravure-permet-elle-d-imprimer-la-meme-image-des-dizaines-de-fois",
    ],
    steps: [
      {
        label: "Creuser les blancs",
        caption: "La partie que l’on veut imprimer reste en relief.",
        detail:
          "Cet exemple montre une gravure en relief, comme sur bois ou linoléum. Les zones creusées ne doivent pas toucher la surface du rouleau.",
      },
      {
        label: "Encrer le relief",
        caption: "Le rouleau dépose l’encre sur les zones hautes de la matrice.",
        detail:
          "Le fond des creux reste sans encre dans ce procédé. En taille-douce, l’encre est au contraire conservée dans les creux : c’est une autre technique.",
      },
      {
        label: "Presser le papier",
        caption: "Le papier prend l’encre au contact des zones en relief.",
        detail:
          "La coupe montre le transfert sur la feuille. Une vue de la feuille imprimée redressée serait inversée par rapport à la face de la matrice.",
      },
    ],
    limit:
      "Coupe de gravure en relief uniquement ; ni gravure en creux ni lithographie. Le motif est volontairement simple.",
    source: {
      title: "Metropolitan Museum of Art — Woodcut",
      url: "https://www.metmuseum.org/essays/the-printed-image-in-the-west-woodcut",
    },
  },
  {
    id: "arch",
    title: "Les pierres se poussent, les appuis résistent",
    paths: [
      "/arts-et-culture/patrimoine/architecture/comment-un-arc-en-pierre-tient-il-debout-grace-a-son-propre-poids",
    ],
    steps: [
      {
        label: "Construire sur un cintre",
        caption: "Un support provisoire porte les voussoirs pendant la construction.",
        detail:
          "Les pierres taillées en coin sont posées de part et d’autre. Le cintre de bois soutient le montage tant qu’il ne forme pas un ensemble stable.",
      },
      {
        label: "Fermer avec la clé",
        caption: "La clé complète l’anneau de pierres.",
        detail:
          "L’arc complet transmet des efforts de compression entre ses pierres. La stabilité dépend aussi de sa forme, de ses charges et de ses appuis.",
      },
      {
        label: "Résister sur les côtés",
        caption: "Les appuis reprennent aussi la poussée horizontale de l’arc.",
        detail:
          "Les flèches orange indiquent l’action de l’arc sur les appuis ; les flèches bleues montrent leur réaction opposée. Leur longueur ne mesure pas un effort.",
      },
    ],
    limit:
      "Arc symétrique en plein cintre ; ce n’est pas un calcul de stabilité ni un conseil de construction.",
    source: {
      title: "University of Colorado — Bridge forces",
      url: "https://www.teachengineering.org/activities/cub_brid_lesson01_activity1",
    },
  },
  {
    id: "timbre",
    title: "Même fondamentale, autres harmoniques",
    paths: [
      "/arts-et-culture/arts-du-spectacle/musique/pourquoi-deux-instruments-ne-sonnent-ils-pas-pareil-sur-la-meme-note",
    ],
    steps: [
      {
        label: "Un son pur",
        caption: "Une seule composante donne une sinusoïde.",
        detail:
          "Le graphe de gauche montre le signal en fonction du temps. Les bâtons à droite représentent les amplitudes des composantes aux fréquences f, 2f et 3f.",
      },
      {
        label: "Ajouter 2f",
        caption: "Une deuxième harmonique modifie la forme sans changer la fondamentale f.",
        detail:
          "Le modèle additionne des sinusoïdes. Les amplitudes choisies illustrent un mélange, sans être une mesure réelle d’un instrument.",
      },
      {
        label: "Ajouter 3f",
        caption: "Un autre mélange d’harmoniques donne une autre forme périodique.",
        detail:
          "Les trois sons gardent la même période fondamentale. Le timbre réel dépend aussi de l’attaque, de l’évolution du son et d’autres composantes ; aucun son n’est joué automatiquement.",
      },
    ],
    limit:
      "Signaux périodiques idéalisés, amplitudes relatives ; ce ne sont pas des enregistrements de flûte ou de violon.",
    source: {
      title: "Georgia State University — Timbre",
      url: "https://hyperphysics.phy-astr.gsu.edu/hbase/Sound/timbre.html",
    },
  },
  {
    id: "camera",
    title: "La lumière croise le trou et renverse l’image",
    paths: ["/arts-et-culture/arts-visuels/photographie-et-cinema/invention-de-la-photographie"],
    steps: [
      {
        label: "Suivre le haut",
        caption: "Un rayon venant du haut de l’objet atteint le bas de l’écran.",
        detail:
          "La boîte est vue en coupe. Le petit trou ne retourne pas lui-même le rayon : la lumière continue en ligne droite après l’ouverture.",
      },
      {
        label: "Suivre le bas",
        caption: "Le bas de l’objet se projette en haut de l’écran.",
        detail:
          "Les deux faisceaux se croisent au niveau du trou. L’image est inversée verticalement ; les distances du dessin ne sont pas celles d’un appareil particulier.",
      },
      {
        label: "Voir la projection",
        caption: "L’écran reçoit une image renversée de la scène extérieure.",
        detail:
          "Une chambre noire projette une image sans la conserver. La photographie demande en plus une surface sensible et un moyen d’enregistrer durablement cette image.",
      },
    ],
    limit:
      "Sténopé idéal, sans lentille ni diffusion ; les étapes chimiques de la photographie ne sont pas dessinées.",
    source: {
      title: "History of Science Museum, Oxford — Camera obscura",
      url: "https://www.hsm.ox.ac.uk/node/348091",
    },
  },
  {
    id: "pendulum",
    title: "Un fil plus long, un aller-retour plus lent",
    paths: ["/sciences-fondamentales/physique/mecanique/pendule-mesure-temps"],
    steps: [
      {
        label: "Court · 0,5 m",
        caption: "Le pendule court a une période d’environ 1,42 seconde.",
        detail:
          "La période est la durée d’un aller-retour complet. Le modèle utilise T = 2π√(L/g), pour une petite amplitude et g = 9,81 m/s².",
      },
      {
        label: "Moyen · 1 m",
        caption: "À un mètre, la période vaut environ 2,01 secondes.",
        detail:
          "Doubler la longueur multiplie la période par √2. La position dessinée est un instant choisi pour comparer les longueurs, pas une animation chronométrée.",
      },
      {
        label: "Long · 2 m",
        caption: "À deux mètres, la période vaut environ 2,84 secondes.",
        detail:
          "La longueur se mesure du point d’attache au centre de la masse. La formule néglige les frottements, l’élasticité du fil et les grandes amplitudes.",
      },
    ],
    limit:
      "Pendule simple à faible amplitude ; périodes théoriques arrondies, aucune simulation d’horloge ou du pendule de Foucault.",
    source: {
      title: "OpenStax — Pendulums",
      url: "https://openstax.org/books/university-physics-volume-1/pages/15-4-pendulums",
    },
  },
  {
    id: "radiocarbon",
    title: "Une fraction qui diminue de moitié",
    paths: [
      "/sciences-humaines-et-sociales/histoire/methode-historique/comment-le-carbone-14-permet-il-de-dater-un-os-ou-un-morceau-de-bois",
    ],
    steps: [
      {
        label: "Au départ",
        caption: "La fraction de carbone 14 de départ sert de référence : 100 %.",
        detail:
          "On considère un échantillon fermé aux échanges après sa mort. Les points symbolisent une fraction moyenne dans un très grand ensemble, pas 64 atomes dont la date de désintégration serait prédite.",
      },
      {
        label: "Une demi-vie",
        caption: "Après environ 5 730 ans, la fraction moyenne restante vaut 50 %.",
        detail:
          "Des noyaux de carbone 14 se sont transformés en azote 14. Les points grisés ne signifient pas que la moitié de la matière de l’échantillon a disparu.",
      },
      {
        label: "Deux demi-vies",
        caption: "Après environ 11 460 ans, la fraction moyenne restante vaut 25 %.",
        detail:
          "On divise à nouveau par deux la quantité restante, pas la quantité de départ. Une datation réelle demande des références, une calibration et une analyse des incertitudes.",
      },
    ],
    limit:
      "Décroissance théorique avec une demi-vie de 5 730 ans ; aucune date archéologique calibrée n’est calculée.",
    source: {
      title: "CEA — Datation au carbone 14",
      url: "https://www.cea.fr/comprendre/Pages/radioactivite/essentiel-sur-la-datation-au-carbone-14.aspx",
    },
  },
  {
    id: "probability",
    title: "Deux lancers, quatre chemins",
    paths: [
      "/sciences-fondamentales/mathematiques/probabilites-et-statistiques/le-hasard-et-les-probabilites",
    ],
    steps: [
      {
        label: "Un lancer",
        caption: "Une pièce idéale équilibrée donne Pile ou Face avec la même probabilité.",
        detail:
          "Chaque branche vaut une chance sur deux. On pose l’hypothèse de lancers indépendants et d’une pièce qui ne reste pas sur la tranche.",
      },
      {
        label: "Deux lancers",
        caption: "Les quatre suites PP, PF, FP et FF sont équiprobables.",
        detail:
          "Chaque chemin a une probabilité 1/2 × 1/2 = 1/4. La deuxième lettre dépend du deuxième lancer ; le premier résultat ne change pas sa probabilité.",
      },
      {
        label: "Un de chaque",
        caption: "Obtenir une fois Pile et une fois Face correspond à deux chemins sur quatre.",
        detail:
          "PF et FP sont deux suites distinctes. Leur probabilité totale vaut 1/4 + 1/4 = 1/2 ; le hasard ne garantit pas que chaque série de quatre essais contienne ces quatre suites.",
      },
    ],
    limit:
      "Modèle mathématique de pièce équilibrée et de lancers indépendants ; aucun conseil de jeu ni prédiction d’un résultat réel.",
    source: {
      title: "OpenStax — Independent events",
      url: "https://openstax.org/books/introductory-statistics/pages/3-2-independent-and-mutually-exclusive-events",
    },
  },
  {
    id: "sorting",
    title: "Insérer chaque valeur à sa place",
    paths: [
      "/micro-informatique-et-informatique/logiciel/algorithmes/comment-un-ordinateur-range-t-il-une-liste-dans-l-ordre",
    ],
    steps: [
      {
        label: "Liste de départ",
        caption: "La liste contient 4, 1, 3 et 2 dans cet ordre.",
        detail:
          "Le dessin illustre le tri par insertion. On commence par considérer la première valeur comme une partie déjà triée.",
      },
      {
        label: "Insérer le 1",
        caption: "Le 1 passe avant le 4 ; les deux premières valeurs sont rangées.",
        detail:
          "La partie colorée est un préfixe trié. Les valeurs 3 et 2 restent à insérer ; un préfixe trié ne signifie pas que la liste entière est triée.",
      },
      {
        label: "Liste triée",
        caption: "Après insertion du 3 puis du 2, on obtient 1, 2, 3 et 4.",
        detail:
          "Le dernier dessin résume deux insertions supplémentaires. Le calcul conserve toutes les valeurs et n’en invente aucune ; d’autres algorithmes peuvent obtenir le même résultat autrement.",
      },
    ],
    limit:
      "Étapes sélectionnées d’un tri par insertion sur quatre entiers ; aucun chronométrage ni comparaison de performances.",
    source: {
      title: "Princeton — Insertion sort",
      url: "https://algs4.cs.princeton.edu/code/javadoc/edu/princeton/cs/algs4/Insertion.html",
    },
  },
  {
    id: "cpu",
    title: "Lire une instruction, calculer, ranger",
    paths: [
      "/micro-informatique-et-informatique/materiel/processeurs/comment-fonctionne-un-processeur",
    ],
    steps: [
      {
        label: "Lire",
        caption: "Le processeur reçoit une instruction depuis la mémoire.",
        detail:
          "La mémoire et le boîtier du processeur sont séparés. Les traits représentent des échanges logiques, sans coder la largeur réelle des bus.",
      },
      {
        label: "Décoder",
        caption: "La commande reconnaît l’opération et sélectionne les données.",
        detail:
          "Dans cet exemple, il faut additionner 2 et 3. Les registres contiennent les opérandes que l’unité de calcul va utiliser.",
      },
      {
        label: "Calculer et ranger",
        caption: "L’unité de calcul produit 5, puis le résultat est rangé dans un registre.",
        detail:
          "Les données ne sont pas toutes reconverties en texte dans un vrai processeur. Ce cycle pédagogique ne décrit pas le parallélisme, les caches ni l’exécution spéculative.",
      },
    ],
    limit:
      "Organisation fonctionnelle d’un cœur simplifié, sans jeu d’instructions réel, dessin de transistors ou promesse d’un cycle par instruction.",
    source: {
      title: "Arm — Central Processing Unit",
      url: "https://www.arm.com/glossary/cpu",
    },
  },
  {
    id: "barcode",
    title: "Un motif qui permet de retrouver une fiche",
    paths: [
      "/industries/industrie-manufacturiere/chaine-logistique/comment-une-caisse-lit-elle-un-code-barres",
    ],
    steps: [
      {
        label: "Éclairer",
        caption: "Un lecteur éclaire les barres et les espaces du code.",
        detail:
          "Le motif dessiné est un exemple technique EAN-13, avec un chiffre de contrôle cohérent. Il n’est pas présenté comme un produit commercial attribué.",
      },
      {
        label: "Mesurer le contraste",
        caption: "Les espaces clairs renvoient davantage de lumière que les barres sombres.",
        detail:
          "Le signal simplifié sous le code représente cette alternance le long d’une ligne de lecture. Un vrai lecteur doit aussi gérer l’orientation, le bruit et les défauts d’impression.",
      },
      {
        label: "Retrouver l’identifiant",
        caption: "Le lecteur décode un identifiant ; la caisse consulte ensuite sa base.",
        detail:
          "Un code-barres de produit identifie l’article. Le prix est normalement associé à sa fiche dans le système de la caisse, pas contenu dans ce motif EAN de démonstration.",
      },
    ],
    limit:
      "Exemple technique non attribué ; lecture optique qualitative et fiche sans prix. Les espaces de silence sont conservés autour du motif.",
    source: {
      title: "GS1 — GTINs and barcodes",
      url: "https://support.gs1.org/support/solutions/articles/43000734095-how-do-gs1-gtins-and-barcodes-work-",
    },
  },
  ...ASTRONOMY_DIAGRAMS,
  ...OBSERVATION_DIAGRAMS,
  ...SPACE_CONTEXT_DIAGRAMS,
  ...AERONAUTICS_DIAGRAMS,
  ...FLIGHT_SYSTEM_DIAGRAMS,
  ...AIRCRAFT_PROPULSION_DIAGRAMS,
  ...LEARNING_DIAGRAMS,
  ...AI_USAGE_DIAGRAMS,
  ...AI_CONTEXT_DIAGRAMS,
];
const BY_PATH = new Map(
  LESSON_DIAGRAMS.flatMap((spec) => spec.paths.map((path) => [path, spec] as const)),
);
export function getLessonDiagram(path: string): LessonDiagramSpec | undefined {
  return BY_PATH.get("/" + path.replace(/^\/+|\/+$/g, ""));
}

/** The cover illustrates the central mechanism, rather than always its last teaching frame. */
export function lessonPosterFrame(spec: LessonDiagramSpec): 0 | 1 | 2 {
  const frames: Partial<Record<LessonDiagramKind, 0 | 1 | 2>> = {
    lift: 0,
    hydraulic: 1,
    battery: 0,
    induction: 1,
    tectonics: 1,
    eclipse: 1,
    lens: 1,
    neuron: 1,
    alveoli: 1,
    dna: 0,
    perspective: 2,
    printing: 1,
    engraving: 2,
    arch: 2,
    timbre: 1,
    camera: 2,
    pendulum: 1,
    radiocarbon: 1,
    probability: 2,
    sorting: 1,
    cpu: 2,
    barcode: 1,
    transit: 1,
    expansion: 1,
    comet: 1,
    skyglow: 1,
    winglet: 1,
    transonic: 1,
    attitude: 0,
    icing: 1,
    recorders: 0,
    aircontrol: 1,
    tcas: 2,
    magnetos: 0,
    scooper: 1,
    aeroengine: 1,
    electricair: 0,
    overfitting: 2,
    convolution: 2,
    attention: 1,
    diffusion: 2,
  };
  return frames[spec.id] ?? 2;
}
