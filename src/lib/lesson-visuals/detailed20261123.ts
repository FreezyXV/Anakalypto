import type { LessonDiagramSpec } from "./registry";

/** Planches illustrées pour les leçons réservées du 23 novembre 2026. */
export const DETAILED_LESSON_DIAGRAMS = [
  {
    id: "detailOrganicParcel",
    canvasHeight: 270,
    title: "Cultiver avec plusieurs leviers",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/empreinte-alimentaire/agriculture-biologique",
    ],
    steps: [
      {
        label: "Cultures en bandes",
        caption: "Le champ associe plusieurs surfaces cultivées.",
        detail:
          "Le choix des cultures dépend du sol et du climat. La parcelle est une illustration et ne représente pas un cahier des charges.",
      },
      {
        label: "Alterner les cultures",
        caption: "La succession des cultures change au fil des saisons.",
        detail:
          "Certaines rotations peuvent interrompre des cycles de ravageurs et diversifier le couvert, avec des effets propres au contexte.",
      },
      {
        label: "Préserver une bordure",
        caption: "Une haie ajoute un habitat au bord de la parcelle.",
        detail:
          "La richesse en espèces dépend aussi du paysage qui entoure l’exploitation. Une bordure représente un levier parmi plusieurs.",
      },
    ],
    limit:
      "Paysage fictif, vu en coupe ou en perspective. Les distances et les volumes sont stylisés.",
    source: {
      title: "Commission européenne — Production biologique",
      url: "https://agriculture.ec.europa.eu/farming/organic-farming/organic-production-and-products_en",
    },
  },
  {
    id: "detailLivingCover",
    canvasHeight: 270,
    title: "Lire une coupe de sol couvert",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/gaspillage-alimentaire/agriculture-regeneratrice",
    ],
    steps: [
      {
        label: "Voir le couvert",
        caption: "Des plantes protègent la surface entre deux cultures.",
        detail:
          "Selon leur durée et leur développement, elles peuvent limiter l’exposition du sol à la pluie et à l’érosion.",
      },
      {
        label: "Suivre les racines",
        caption: "Les racines occupent des profondeurs et des volumes différents.",
        detail:
          "Elles interagissent avec la structure du sol et apportent de la matière organique en se renouvelant.",
      },
      {
        label: "Suivre l’eau",
        caption: "Une partie de l’eau peut pénétrer dans le sol.",
        detail:
          "L’infiltration répond aussi au tassement, à la pente, au type de sol et à la quantité d’eau apportée.",
      },
    ],
    limit:
      "Paysage fictif, vu en coupe ou en perspective. Les distances et les volumes sont stylisés.",
    source: {
      title: "USDA NRCS — Cover Crops for Soil Health",
      url: "https://www.nrcs.usda.gov/conservation-basics/soil/soil-health/cover-crops-for-soil-health",
    },
  },
  {
    id: "detailAnimalHousing",
    canvasHeight: 270,
    title: "Observer un espace d’élevage",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/gaspillage-alimentaire/bien-etre-animal",
    ],
    steps: [
      {
        label: "Accéder à l’eau",
        caption: "L’abreuvement est un besoin de base des animaux.",
        detail:
          "L’état du matériel, l’espace disponible et l’observation des animaux comptent pour apprécier les conditions réelles.",
      },
      {
        label: "Avoir un lieu de repos",
        caption: "Le dessin situe une surface où l’animal peut se coucher.",
        detail:
          "Le confort dépend du matériau, de la propreté, de la place et de l’état de l’animal.",
      },
      {
        label: "Observer les interactions",
        caption: "Les mouvements et les interactions s’observent dans leur contexte.",
        detail:
          "La pièce illustrée suffit à situer quelques besoins. Une évaluation complète utilise aussi des observations sur les animaux.",
      },
    ],
    limit:
      "Paysage fictif, vu en coupe ou en perspective. Les distances et les volumes sont stylisés.",
    source: {
      title: "Anses — Le bien-être animal en 8 questions",
      url: "https://www.anses.fr/fr/article/anses-definition-du-bien-etre-animal",
    },
  },
  {
    id: "detailForestMosaic",
    canvasHeight: 270,
    title: "Distinguer ce que la forêt stocke de ce qu’elle absorbe",
    paths: [
      "/environnement-et-climat/biodiversite/forets-et-oceans/forets-du-monde-et-deforestation",
    ],
    steps: [
      {
        label: "Voir les stocks",
        caption: "Le bois vivant et les sols contiennent déjà du carbone.",
        detail:
          "Un stock est une quantité mesurée à une date. Il comprend plusieurs compartiments, dont la biomasse et la matière organique des sols.",
      },
      {
        label: "Suivre l’absorption",
        caption: "La croissance contribue aux échanges de carbone avec l’air.",
        detail:
          "Le bilan dépend aussi de la respiration, de la mortalité, des incendies et d’autres pertes. Une vieille forêt peut continuer à absorber du carbone.",
      },
      {
        label: "Voir le couvert reculer",
        caption: "Une perte d’arbres change à la fois le stock et les échanges.",
        detail:
          "Les conséquences dépendent de ce qui arrive au bois, au sol et à l’usage de la parcelle après le changement.",
      },
    ],
    limit:
      "Paysage fictif, vu en coupe ou en perspective. Les distances et les volumes sont stylisés.",
    source: {
      title: "FAO — Évaluation des ressources forestières mondiales",
      url: "https://www.fao.org/forest-resources-assessment/en/",
    },
  },
  {
    id: "detailClimateHabitats",
    canvasHeight: 270,
    title: "Lire les effets du climat dans un paysage",
    paths: [
      "/environnement-et-climat/changement-climatique/scenarios/le-climat-et-la-biodiversite-sont-ils-deux-crises-separees-ou-une-seule",
    ],
    steps: [
      {
        label: "Situer les habitats",
        caption: "Le relief contient des habitats à plusieurs altitudes.",
        detail:
          "Sur une même pente, l’altitude, le sol et l’exposition créent des écarts de température et d’humidité.",
      },
      {
        label: "Voir une aire se déplacer",
        caption: "Des conditions favorables peuvent se déplacer avec le climat.",
        detail:
          "Les espèces réagissent à des vitesses différentes. Certaines peuvent suivre les nouvelles conditions, d’autres disposent de peu d’espace.",
      },
      {
        label: "Repérer une coupure",
        caption: "Une infrastructure peut couper des habitats autrement proches.",
        detail:
          "La continuité du paysage peut faciliter certains déplacements. Le passage réel dépend toujours des espèces et du type d’obstacle.",
      },
    ],
    limit:
      "Paysage fictif, vu en coupe ou en perspective. Les distances et les volumes sont stylisés.",
    source: {
      title: "GIEC — Écosystèmes terrestres et d’eau douce",
      url: "https://www.ipcc.ch/report/ar6/wg2/chapter/chapter-2/",
    },
  },
  {
    id: "detailVillageServices",
    canvasHeight: 270,
    title: "Lire quatre services dans un même village",
    paths: [
      "/geographie-et-territoires/geographie-humaine/urbanisation/organiser-village-autonome",
    ],
    steps: [
      {
        label: "Eau",
        caption:
          "La ressource, le stockage et la distribution remplissent des fonctions distinctes.",
        detail:
          "La qualité de l’eau et le volume disponible varient dans le temps. Une réserve se juge aussi au regard de ses usages.",
      },
      {
        label: "Alimentation",
        caption: "Une partie du territoire est affectée aux cultures.",
        detail:
          "Les terres, l’eau et le travail disponible fixent des contraintes différentes suivant le climat et la saison.",
      },
      {
        label: "Énergie",
        caption: "Un équipement local peut alimenter une partie des usages.",
        detail:
          "Le moment où l’énergie est produite peut différer du moment où elle est nécessaire. Le réseau ou le stockage gère une partie de cet écart.",
      },
      {
        label: "Déchets",
        caption: "Les activités produisent des flux qui doivent être traités.",
        detail:
          "Les déchets organiques, les eaux usées et les autres matières suivent des filières distinctes selon leur nature et les moyens disponibles.",
      },
    ],
    limit:
      "Paysage fictif, vu en coupe ou en perspective. Les distances et les volumes sont stylisés.",
    source: {
      title: "Nations unies — Objectifs de développement durable",
      url: "https://sdgs.un.org/goals",
    },
  },
  {
    id: "detailSeasonalBeds",
    canvasHeight: 270,
    title: "Comprendre ce qui fait varier un calendrier de cultures",
    paths: [
      "/geographie-et-territoires/geographie-physique/climatologie/calendrier-saisons-cultures",
    ],
    steps: [
      {
        label: "Gel",
        caption: "Le risque de gel limite les dates adaptées à certaines cultures.",
        detail:
          "La dernière gelée varie d’une année à l’autre et dépend du climat local ainsi que de l’exposition de la parcelle.",
      },
      {
        label: "Réchauffement",
        caption: "Le sol peut se réchauffer au fil de la saison.",
        detail:
          "La température de l’air, l’humidité et la couverture du sol changent la vitesse de réchauffement.",
      },
      {
        label: "Croissance",
        caption: "L’ensoleillement et la chaleur modifient la période de croissance.",
        detail:
          "Un calendrier de culture se fonde sur les besoins des espèces et sur les conditions que l’on peut réellement observer.",
      },
      {
        label: "Ajustement local",
        caption: "La même date peut correspondre à des conditions différentes selon le lieu.",
        detail:
          "La latitude influence la durée du jour. Le relief et le microclimat peuvent décaler la saison observée.",
      },
    ],
    limit:
      "Paysage fictif, vu en coupe ou en perspective. Les distances et les volumes sont stylisés.",
    source: {
      title: "University of Minnesota Extension — Planting the vegetable garden",
      url: "https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/planting-the-vegetable-garden",
    },
  },
  {
    id: "detailFutureClouds",
    canvasHeight: 270,
    title: "Distinguer trois observations du ciel",
    paths: [
      "/geographie-et-territoires/geographie-physique/climatologie/prevoir-temps-sans-instruments",
    ],
    steps: [
      {
        label: "Nuages hauts",
        caption: "Des filaments élevés signalent de l’humidité en altitude.",
        detail:
          "Ils peuvent accompagner une évolution du temps. Leur présence seule ne renseigne ni sur l’heure ni sur le lieu d’une pluie.",
      },
      {
        label: "Nuages verticaux",
        caption: "Des nuages épais peuvent se développer vers le haut.",
        detail:
          "La forme est un indice du mouvement vertical de l’air. Une évolution locale se juge avec d’autres observations et les prévisions.",
      },
      {
        label: "Brouillard",
        caption: "Le brouillard se forme près du sol et réduit la visibilité.",
        detail:
          "La disparition ou la persistance du brouillard dépend notamment de l’humidité, du vent et du réchauffement local.",
      },
    ],
    limit:
      "Paysage fictif, vu en coupe ou en perspective. Les distances et les volumes sont stylisés.",
    source: {
      title: "Météo-France — Les différents types de nuages",
      url: "https://meteofrance.com/meteo-a-z/les-differents-types-de-nuages",
    },
  },
  {
    id: "detailFarmBalances",
    canvasHeight: 270,
    title: "Relier la parcelle au sol, à l’eau et aux habitats",
    paths: [
      "/sciences-du-vivant-appliquees/agronomie/agriculture-durable/agriculture-durable-dans-le-monde",
    ],
    steps: [
      {
        label: "Regarder le sol",
        caption: "Les racines et la couverture du sol modifient son fonctionnement.",
        detail:
          "Une parcelle se juge sur plusieurs années, en tenant compte de la rotation et des conditions du sol.",
      },
      {
        label: "Lire l’eau",
        caption: "La pente, les bandes enherbées et l’état du sol influencent le ruissellement.",
        detail:
          "Le dessin suit un trajet possible. Une parcelle très perméable ou déjà saturée ne réagit pas de la même façon.",
      },
      {
        label: "Garder des habitats",
        caption: "Une bordure végétalisée peut compléter l’espace cultivé.",
        detail:
          "Les effets sur la biodiversité et sur la production dépendent de l’aménagement, du voisinage et du type de culture.",
      },
    ],
    limit:
      "Paysage fictif, vu en coupe ou en perspective. Les distances et les volumes sont stylisés.",
    source: {
      title: "FAO — Les éléments de l’agroécologie",
      url: "https://www.fao.org/agroecology/overview/overview10elements/en/",
    },
  },
  {
    id: "detailAnimalTraction",
    canvasHeight: 270,
    title: "Suivre les fonctions de l’animal à la ferme",
    paths: [
      "/sciences-du-vivant-appliquees/agronomie/agriculture-durable/elevage-traction-animale",
    ],
    steps: [
      {
        label: "Transmettre un effort",
        caption: "L’animal transmet un effort de traction à un outil.",
        detail:
          "La traction remplace une partie du travail mécanique dans certains systèmes. Les conditions varient selon le sol et l’outil.",
      },
      {
        label: "Restituer de la matière",
        caption: "Les déjections peuvent participer au retour de matière organique au sol.",
        detail:
          "Le cycle comporte aussi des apports, des pertes et des exportations. La restitution représente un flux parmi plusieurs.",
      },
      {
        label: "Obtenir des produits",
        caption: "Selon le système, l’élevage fournit aussi des produits alimentaires.",
        detail:
          "Les fonctions dépendent des espèces, des pratiques d’élevage et des besoins de la ferme.",
      },
    ],
    limit:
      "Paysage fictif, vu en coupe ou en perspective. Les distances et les volumes sont stylisés.",
    source: {
      title: "FAO — Traction animale et outils",
      url: "https://www.fao.org/family-farming/detail/en/c/1619223/",
    },
  },
  {
    id: "detailWaterBalance",
    canvasHeight: 270,
    title: "Suivre les entrées et les pertes d’eau",
    paths: [
      "/alimentation-et-nutrition/nutriments/eau-et-hydratation/besoins-en-eau-et-hydratation",
    ],
    steps: [
      {
        label: "Boissons et aliments",
        caption: "L’eau ingérée provient des boissons et de certains aliments.",
        detail:
          "Le total des apports comprend aussi l’eau contenue dans les repas. Les aliments n’en apportent pas tous la même quantité.",
      },
      {
        label: "Pertes variables",
        caption: "Plusieurs voies éliminent de l’eau au cours de la journée.",
        detail:
          "Les pertes varient avec l’activité, l’environnement et l’état de la personne. Le dessin ne fixe aucun besoin individuel.",
      },
    ],
    limit:
      "Dessin de principe. Les quantités, courbes et objets représentés ne décrivent aucun apport individuel.",
    source: {
      title: "EFSA — Valeurs nutritionnelles de référence pour l’eau",
      url: "https://www.efsa.europa.eu/en/efsajournal/pub/1459",
    },
  },
  {
    id: "detailThirstSignal",
    canvasHeight: 270,
    title: "Quand le corps perçoit le besoin de boire",
    paths: ["/alimentation-et-nutrition/nutriments/eau-et-hydratation/pourquoi-a-t-on-soif"],
    steps: [
      {
        label: "Concentration du sang",
        caption:
          "Quand la quantité d’eau relative diminue, certains solutés deviennent plus concentrés.",
        detail:
          "Le dessin représente la concentration comme un nombre de points dans un même espace. Le volume circulant est un autre signal pertinent.",
      },
      {
        label: "Détection centrale",
        caption: "Des circuits cérébraux contribuent au déclenchement de la soif.",
        detail:
          "Ils répondent à des signaux du milieu intérieur. L’hypothalamus participe à cette régulation avec d’autres régions.",
      },
      {
        label: "Premières gorgées",
        caption: "La sensation peut diminuer avant que toute l’eau ingérée soit absorbée.",
        detail:
          "La bouche, la gorge et le tube digestif envoient des signaux précoces qui complètent ceux du sang.",
      },
    ],
    limit:
      "Dessin de principe. Les quantités, courbes et objets représentés ne décrivent aucun apport individuel.",
    source: {
      title: "OpenStax — Neural Control of Drinking Behavior",
      url: "https://openstax.org/books/introduction-behavioral-neuroscience/pages/16-5-neural-control-of-drinking-behavior",
    },
  },
  {
    id: "detailGlycemicCurve",
    canvasHeight: 270,
    title: "Lire la forme d’une réponse glycémique",
    paths: ["/alimentation-et-nutrition/nutriments/macronutriments/index-et-charge-glycemiques"],
    steps: [
      {
        label: "Courbe de référence",
        caption: "Une courbe suit la variation de la glycémie après ingestion.",
        detail:
          "La hauteur du pic et l’aire de la courbe décrivent deux propriétés différentes. Les axes sont qualitatifs.",
      },
      {
        label: "Comparer à quantité égale",
        caption:
          "L’index compare des réponses pour une quantité comparable de glucides disponibles.",
        detail:
          "Le principe utilise une référence et l’aire sous les variations de glycémie. La préparation et les personnes influencent les courbes observées.",
      },
      {
        label: "Changer la portion",
        caption: "La quantité de glucides d’une portion compte aussi.",
        detail:
          "La charge glycémique associe quantité de glucides de la portion et index. La courbe représente une situation fictive.",
      },
    ],
    limit:
      "Dessin de principe. Les quantités, courbes et objets représentés ne décrivent aucun apport individuel.",
    source: {
      title: "Atkinson et al. — Tables internationales d’index et de charge glycémiques",
      url: "https://pubmed.ncbi.nlm.nih.gov/18835944/",
    },
  },
  {
    id: "detailMineralBinding",
    canvasHeight: 270,
    title: "Voir l’interaction entre phytates et minéraux",
    paths: [
      "/alimentation-et-nutrition/nutriments/micronutriments/antinutriments-phytates-lectines",
    ],
    steps: [
      {
        label: "Dans un grain",
        caption: "Certains grains contiennent à la fois des phytates et des minéraux.",
        detail:
          "Le dessin grossit un mécanisme parmi plusieurs. La composition de l’aliment entier dépend de sa variété et de sa transformation.",
      },
      {
        label: "Former une association",
        caption: "Les phytates peuvent s’associer à des minéraux.",
        detail:
          "Cette interaction peut modifier leur disponibilité à l’absorption. Les points représentent des entités schématiques, sans stœchiométrie.",
      },
      {
        label: "Revenir à l’aliment",
        caption: "Le bilan dépend de ce qui compose le repas.",
        detail:
          "Les nutriments, les autres composés et la préparation influencent l’effet global. Une interaction isolée ne résume pas un aliment.",
      },
    ],
    limit:
      "Dessin de principe. Les quantités, courbes et objets représentés ne décrivent aucun apport individuel.",
    source: {
      title: "Turnlund et al. — Absorption du zinc et phytate",
      url: "https://pubmed.ncbi.nlm.nih.gov/6496386/",
    },
  },
  {
    id: "detailMicroNutrients",
    canvasHeight: 270,
    title: "Distinguer vitamines et minéraux",
    paths: ["/alimentation-et-nutrition/nutriments/micronutriments/vitamines-mineraux-essentiels"],
    steps: [
      {
        label: "Vitamines B et C",
        caption: "Les vitamines B et C appartiennent au groupe hydrosoluble.",
        detail:
          "Elles ont des fonctions variées et des comportements qui ne se résument pas à leur solubilité.",
      },
      {
        label: "Vitamines A, D, E et K",
        caption: "Les vitamines A, D, E et K sont liposolubles.",
        detail:
          "Leur absorption et leur transport diffèrent de ceux des vitamines hydrosolubles. Elles ne remplissent pas toutes la même fonction.",
      },
      {
        label: "Éléments minéraux",
        caption: "Le fer et le calcium sont des éléments minéraux.",
        detail:
          "Ils participent à des fonctions différentes de l’organisme. Le dessin illustre des familles et ne donne aucune indication de supplémentation.",
      },
    ],
    limit:
      "Dessin de principe. Les quantités, courbes et objets représentés ne décrivent aucun apport individuel.",
    source: {
      title: "OMS — Micronutriments",
      url: "https://www.who.int/health-topics/micronutrients",
    },
  },
  {
    id: "detailToothFood",
    canvasHeight: 270,
    title: "Lire une dent en coupe",
    paths: ["/alimentation-et-nutrition/nutrition-et-sante/nutrition-et-dents"],
    steps: [
      {
        label: "Repérer l’émail",
        caption: "La couche externe dure recouvre la couronne.",
        detail:
          "La coupe repère l’émail, la dentine et la partie interne. Ces tissus répondent différemment à une attaque de surface.",
      },
      {
        label: "Voir l’action des acides",
        caption: "Des acides peuvent favoriser la perte de minéraux à la surface.",
        detail:
          "Dans la carie, des bactéries du biofilm transforment des sucres fermentescibles en acides. Une boisson acide peut agir autrement.",
      },
      {
        label: "Suivre les échanges minéraux",
        caption: "La surface dentaire échange des minéraux avec son environnement.",
        detail:
          "La salive et le fluor contribuent à des conditions favorables à la reminéralisation. Le dessin se limite au mécanisme de surface.",
      },
    ],
    limit:
      "Dessin de principe. Les quantités, courbes et objets représentés ne décrivent aucun apport individuel.",
    source: {
      title: "NIDCR — The Tooth Decay Process",
      url: "https://www.nidcr.nih.gov/health-info/tooth-decay/more-info/tooth-decay-process",
    },
  },
  {
    id: "detailBoneMatrix",
    canvasHeight: 270,
    title: "Regarder ce qui donne à l’os ses propriétés",
    paths: ["/alimentation-et-nutrition/nutrition-et-sante/nutrition-et-os"],
    steps: [
      {
        label: "Ouvrir l’os",
        caption: "Le tissu osseux est un assemblage de matrice et de minéraux.",
        detail:
          "La matrice contient notamment du collagène. L’architecture varie entre les zones compactes et les zones plus poreuses.",
      },
      {
        label: "Repérer les minéraux",
        caption: "La phase minérale contribue à la rigidité de l’os.",
        detail:
          "Le calcium intervient au sein de cristaux associés à la matrice. L’illustration grossit ces constituants de manière qualitative.",
      },
      {
        label: "Relier à l’absorption",
        caption: "La vitamine D joue un rôle dans l’absorption du calcium.",
        detail:
          "La croissance, les sollicitations et le remodelage participent aussi aux propriétés du squelette. La planche ne prescrit aucun apport.",
      },
    ],
    limit:
      "Dessin de principe. Les quantités, courbes et objets représentés ne décrivent aucun apport individuel.",
    source: {
      title: "NIH ODS — Fiche sur le calcium",
      url: "https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/",
    },
  },
  {
    id: "detailRetinaNutrients",
    canvasHeight: 270,
    title: "Situer la macula dans la rétine",
    paths: ["/alimentation-et-nutrition/nutrition-et-sante/nutrition-et-vue"],
    steps: [
      {
        label: "Vue de l’œil",
        caption: "La rétine tapisse le fond de l’œil.",
        detail:
          "Ses différentes régions contribuent à la vision de façons distinctes. La coupe sert à localiser une région précise.",
      },
      {
        label: "Zoom sur la macula",
        caption: "La macula contient notamment les pigments lutéine et zéaxanthine.",
        detail:
          "Ces pigments occupent une région spécialisée de la rétine. Le dessin situe leur présence sans associer un résultat clinique à un aliment.",
      },
    ],
    limit:
      "Dessin de principe. Les quantités, courbes et objets représentés ne décrivent aucun apport individuel.",
    source: {
      title: "Hammond et al. — Pigment maculaire",
      url: "https://pubmed.ncbi.nlm.nih.gov/28973076/",
    },
  },
  {
    id: "detailScoreLabel",
    canvasHeight: 270,
    title: "Lire une note sur deux produits comparables",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/reperes-nutritionnels/nutri-score-principe-et-limites",
    ],
    steps: [
      {
        label: "Même famille",
        caption: "Deux emballages fictifs représentent des produits d’une même famille.",
        detail:
          "L’échelle se rapporte à une quantité de référence. Elle peut aider à comparer deux variantes d’un même type de produit.",
      },
      {
        label: "Lire le score",
        caption: "Le calcul synthétise certaines caractéristiques nutritionnelles.",
        detail:
          "Les scores fictifs servent à montrer comment comparer. Ils ne constituent pas une évaluation des produits réellement vendus.",
      },
      {
        label: "Lire aussi les ingrédients",
        caption: "La liste d’ingrédients fournit une autre information.",
        detail:
          "La note porte sur la qualité nutritionnelle estimée selon l’algorithme. D’autres critères se lisent séparément selon ce que l’on cherche.",
      },
    ],
    limit:
      "Dessin de principe. Les quantités, courbes et objets représentés ne décrivent aucun apport individuel.",
    source: {
      title: "Santé publique France — Questions sur l’algorithme Nutri-Score",
      url: "https://www.santepubliquefrance.fr/content/download/150262/file/FAQ-updatedAlgo-FR_20240404.pdf",
    },
  },
  {
    id: "detailIngredientStages",
    canvasHeight: 270,
    title: "Reconnaître le rôle de la formulation",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/aliments-ultra-transformes-classification-nova",
    ],
    steps: [
      {
        label: "Aliment brut",
        caption: "Les grains illustrent le point de départ d’une chaîne de transformation.",
        detail:
          "Des opérations simples peuvent modifier un aliment tout en conservant ses caractéristiques essentielles.",
      },
      {
        label: "Préparation simple",
        caption: "Mélanger, cuisiner ou conserver change la forme de l’aliment.",
        detail:
          "La classification s’appuie sur la nature de la formulation et le but de la transformation, ainsi que sur les ingrédients.",
      },
      {
        label: "Formulation industrielle",
        caption: "Une liste d’ingrédients peut donner des indices sur la formulation.",
        detail:
          "Le classement NOVA distingue des familles de produits selon des critères précis. L’emballage seul ne permet pas de trancher.",
      },
    ],
    limit:
      "Dessin de principe. Les quantités, courbes et objets représentés ne décrivent aucun apport individuel.",
    source: {
      title: "OPS — Classification NOVA et produits ultra-transformés",
      url: "https://iris.paho.org/bitstream/handle/10665.2/7699/9789275118641_eng.pdf",
    },
  },
  {
    id: "detailOwnershipCosts",
    canvasHeight: 270,
    title: "Retrouver les composantes du coût d’une voiture",
    paths: ["/automobile/industrie-automobile/marche/cout-total-possession-voiture"],
    steps: [
      {
        label: "Achat",
        caption: "Le prix d’achat fixe le montant payé au départ.",
        detail:
          "Le coût total se juge sur une période et intègre ce qui se passe après l’achat, notamment la revente éventuelle.",
      },
      {
        label: "Décote",
        caption: "La décote est l’écart entre le prix d’achat et la valeur de revente.",
        detail:
          "Cet écart dépend de la durée, du kilométrage, de l’état et du marché sur lequel la voiture sera revendue.",
      },
      {
        label: "Budget d’usage",
        caption: "L’énergie, l’assurance et l’entretien s’ajoutent selon l’usage.",
        detail:
          "Comparer deux véhicules demande de fixer une durée et un kilométrage semblables. Les montants ne sont pas représentés à l’échelle.",
      },
    ],
    limit:
      "Véhicules et circuits stylisés, hors échelle. Les modèles et dispositions réels varient.",
    source: {
      title: "The Shift Project — Coût total de possession et occasion",
      url: "https://theshiftproject.org/app/uploads/2026/06/Projet-Auto-et-Mobilites-Note-thematique-TCO-et-VO.pdf",
    },
  },
  {
    id: "detailSuvSpace",
    canvasHeight: 270,
    title: "Comparer un SUV et une berline de profil",
    paths: ["/automobile/industrie-automobile/marche/essor-suv-marche-automobile"],
    steps: [
      {
        label: "Assise plus haute",
        caption: "Les profils font apparaître une différence de hauteur et de position d’assise.",
        detail:
          "La forme varie selon les modèles. Les deux silhouettes fixent des repères communs pour comparer hauteur et longueur.",
      },
      {
        label: "Gabarit visible",
        caption: "Une carrosserie de forme différente change l’encombrement et la visibilité.",
        detail:
          "Le dessin montre des profils fictifs. L’espace occupé, la masse et la visibilité dépendent du véhicule précis.",
      },
    ],
    limit:
      "Véhicules et circuits stylisés, hors échelle. Les modèles et dispositions réels varient.",
    source: {
      title: "AIE — SUV et émissions",
      url: "https://www.iea.org/commentaries/as-their-sales-continue-to-rise-suvs-global-co2-emissions-are-nearing-1-billion-tonnes",
    },
  },
  {
    id: "detailLeaseReturn",
    canvasHeight: 270,
    title: "Suivre un contrat de location et la propriété",
    paths: ["/automobile/industrie-automobile/marche/location-longue-duree-propriete-automobile"],
    steps: [
      {
        label: "Contrat",
        caption: "Le contrat fixe une durée et des conditions d’usage.",
        detail:
          "Une location longue durée donne accès à un véhicule sur une période définie. Les règles exactes dépendent du contrat.",
      },
      {
        label: "Usage",
        caption: "Le kilométrage fait partie des éléments à vérifier pendant l’usage.",
        detail:
          "Le nombre de kilomètres prévu et l’entretien attendu influencent ce qui sera contrôlé lors de la restitution.",
      },
      {
        label: "Restitution",
        caption: "En fin de location longue durée, le véhicule est généralement rendu.",
        detail:
          "Des écarts par rapport aux conditions convenues peuvent avoir des conséquences financières. Le dessin se limite au principe.",
      },
      {
        label: "Propriété",
        caption: "Un propriétaire peut généralement revendre son véhicule.",
        detail:
          "Dans une location, la valeur de revente n’est pas récupérée par le conducteur à la restitution. Une option d’achat change les possibilités.",
      },
    ],
    limit:
      "Véhicules et circuits stylisés, hors échelle. Les modèles et dispositions réels varient.",
    source: {
      title: "DGCCRF — Location et option d’achat",
      url: "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/location-avec-option-dachat-loa-dun-vehicule-quelles-sont-les-regles-connaitre",
    },
  },
  {
    id: "detailCarMarket",
    canvasHeight: 270,
    title: "Lire un marché automobile réparti dans le monde",
    paths: ["/automobile/industrie-automobile/marche/marche-automobile-mondial-regions"],
    steps: [
      {
        label: "Amérique du Nord",
        caption: "Plusieurs marchés se concentrent dans de grandes régions de vente.",
        detail:
          "La carte indique des zones pour repérer les situations abordées. Les points ne représentent ni des volumes ni des frontières.",
      },
      {
        label: "Europe",
        caption: "Une région regroupe des marchés aux profils différents.",
        detail:
          "Les modèles vendus et le rythme des ventes dépendent entre autres des revenus, des usages et des politiques locales.",
      },
      {
        label: "Chine",
        caption: "La Chine constitue un marché majeur de l’automobile.",
        detail:
          "Les ventes intérieures se distinguent de la production et des exportations. Les trois grandeurs appellent des données différentes.",
      },
      {
        label: "Autres marchés",
        caption: "La croissance et le renouvellement du parc changent selon les lieux.",
        detail:
          "Une région peut avoir un poids plus modeste dans les ventes et une évolution rapide. Les cercles sont des repères cartographiques.",
      },
    ],
    limit:
      "Véhicules et circuits stylisés, hors échelle. Les modèles et dispositions réels varient.",
    source: {
      title: "OICA — Statistiques de ventes",
      url: "https://oica.net/sales-statistics/",
    },
  },
  {
    id: "detailValueCurve",
    canvasHeight: 270,
    title: "Lire la décote comme une trajectoire",
    paths: ["/automobile/industrie-automobile/marche/marche-de-loccasion-et-valeur-residuelle"],
    steps: [
      {
        label: "Premières années",
        caption: "La courbe fictive montre une perte de valeur rapide au début.",
        detail:
          "Des voitures différentes peuvent suivre des courbes différentes. Le graphique explique une forme fréquente du raisonnement.",
      },
      {
        label: "Valeur résiduelle",
        caption: "Plus tard, l’état et le marché peuvent déplacer la valeur observée.",
        detail:
          "Comparer des voitures demande de tenir compte du modèle, du kilométrage, de l’entretien, de l’âge et du contexte de vente.",
      },
    ],
    limit:
      "Véhicules et circuits stylisés, hors échelle. Les modèles et dispositions réels varient.",
    source: {
      title: "The Shift Project — Coût total de possession et occasion",
      url: "https://theshiftproject.org/app/uploads/2026/06/Projet-Auto-et-Mobilites-Note-thematique-TCO-et-VO.pdf",
    },
  },
  {
    id: "detailInspectionBench",
    canvasHeight: 270,
    title: "Ce qu’un contrôle technique voit sur une voiture",
    paths: [
      "/automobile/industrie-automobile/reglementation-automobile/controle-technique-securite-pollution",
    ],
    steps: [
      {
        label: "Situer le véhicule",
        caption: "Le pont rend certaines parties du véhicule accessibles au contrôle.",
        detail:
          "Un contrôle technique porte sur des points définis. Il faut distinguer une inspection réglementaire d’un diagnostic mécanique complet.",
      },
      {
        label: "Regarder les liaisons",
        caption: "Les roues et les éléments qui les relient au véhicule font partie de l’examen.",
        detail:
          "Le dessin situe des zones accessibles et ne donne aucune méthode de réparation. Les vérifications réglementaires suivent un protocole précis.",
      },
      {
        label: "Lire le relevé",
        caption: "Le document indique les défauts constatés lors de l’examen.",
        detail:
          "Il décrit l’état observé à un moment donné. L’historique d’entretien et d’autres examens apportent des informations complémentaires.",
      },
    ],
    limit:
      "Véhicules et circuits stylisés, hors échelle. Les modèles et dispositions réels varient.",
    source: {
      title: "Service Public — Contrôle technique d’une voiture",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2878",
    },
  },
  {
    id: "detailAbrasionSources",
    canvasHeight: 270,
    title: "Repérer trois sources de particules autour du véhicule",
    paths: [
      "/automobile/industrie-automobile/reglementation-automobile/pourquoi-la-norme-euro-7-s-interesse-t-elle-aussi-aux-freins-et-aux-pneus",
    ],
    steps: [
      {
        label: "Échappement",
        caption: "Les gaz quittent le moteur par la ligne d’échappement.",
        detail:
          "Les dispositifs sur cette ligne agissent sur les émissions à la sortie. Les freins et les pneus constituent des sources distinctes.",
      },
      {
        label: "Disque et plaquettes",
        caption: "Le frottement entre le disque et les plaquettes produit de l’usure.",
        detail:
          "Une partie de la matière peut être émise sous forme de particules. Les proportions dépendent du véhicule et des conditions d’usage.",
      },
      {
        label: "Pneu et chaussée",
        caption: "Le contact du pneu avec la chaussée enlève de la matière.",
        detail:
          "Cette source existe sur les véhicules électriques et thermiques. Le dessin ne représente aucun plafond réglementaire.",
      },
    ],
    limit:
      "Véhicules et circuits stylisés, hors échelle. Les modèles et dispositions réels varient.",
    source: {
      title: "Union européenne — Règlement Euro 7",
      url: "https://eur-lex.europa.eu/eli/reg/2024/1257/oj",
    },
  },
  {
    id: "detailHotCellPack",
    canvasHeight: 270,
    title: "Comprendre la propagation thermique dans un pack",
    paths: ["/automobile/motorisations/electrique/emballement-thermique-batterie-electrique"],
    steps: [
      {
        label: "Vue du pack",
        caption: "Un pack combine plusieurs cellules et des dispositifs de protection.",
        detail:
          "L’agencement varie selon le véhicule. La coupe stylisée rend visibles des cellules et leur séparation.",
      },
      {
        label: "Échauffement local",
        caption: "Dans une cellule, des réactions peuvent entretenir un échauffement.",
        detail:
          "La planche illustre une augmentation de chaleur sans reproduire une expérience ou ses conditions de départ.",
      },
      {
        label: "Chaleur vers les voisines",
        caption: "Une cellule chaude peut transmettre de la chaleur à une cellule proche.",
        detail:
          "La propagation dépend de l’architecture, des matériaux et du dispositif de refroidissement. Les flèches indiquent un trajet possible.",
      },
      {
        label: "Protection du pack",
        caption: "L’espacement et les barrières peuvent retarder un transfert de chaleur.",
        detail:
          "La surveillance, le refroidissement et la conception mécanique complètent les protections. Les usages et interventions exigent des procédures professionnelles.",
      },
    ],
    limit:
      "Véhicules et circuits stylisés, hors échelle. Les modèles et dispositions réels varient.",
    source: {
      title: "Wang et al. — Propagation de l’emballement dans un pack",
      url: "https://iieta.org/node/9927",
    },
  },
  {
    id: "detailDieselFilters",
    canvasHeight: 270,
    title: "Suivre les gaz dans une ligne diesel",
    paths: [
      "/automobile/motorisations/thermique/le-systeme-de-depollution-des-moteurs-diesel-adblue",
    ],
    steps: [
      {
        label: "Vue d’ensemble",
        caption: "Les gaz passent par plusieurs équipements qui ont des fonctions distinctes.",
        detail:
          "Le trajet présente une architecture illustrative. L’ordre précis et les pièces montées varient selon le modèle.",
      },
      {
        label: "Catalyseur d’oxydation",
        caption: "Le catalyseur traite notamment certains composés des gaz d’échappement.",
        detail:
          "Le traitement repose sur des réactions au contact du catalyseur. Le filtre à particules situé plus loin a un autre rôle.",
      },
      {
        label: "Filtre à particules",
        caption: "Le FAP retient une partie des particules de suie.",
        detail:
          "Des canaux bouchés en alternance obligent les gaz à traverser des parois poreuses. La régénération du filtre relève du fonctionnement du véhicule.",
      },
      {
        label: "Traitement des NOₓ",
        caption: "Le SCR transforme une partie des oxydes d’azote avec un réactif.",
        detail:
          "L’AdBlue est utilisé dans la ligne d’échappement. La coupe situe son arrivée schématique avant le catalyseur SCR.",
      },
    ],
    limit:
      "Véhicules et circuits stylisés, hors échelle. Les modèles et dispositions réels varient.",
    source: {
      title: "Department of Energy — Fonctionnement d’un véhicule diesel",
      url: "https://afdc.energy.gov/vehicles/how-do-diesel-cars-work",
    },
  },
  {
    id: "detailCompressionIgnition",
    canvasHeight: 270,
    title: "Ouvrir un cylindre diesel",
    paths: ["/automobile/motorisations/thermique/moteur-diesel-principe-et-declin"],
    steps: [
      {
        label: "Admission d’air",
        caption: "Le cylindre reçoit de l’air avant la compression.",
        detail:
          "Dans ce principe moteur, le carburant est ajouté plus tard. Les autres pièces sont simplifiées afin de garder la coupe lisible.",
      },
      {
        label: "Air comprimé",
        caption: "Le piston réduit le volume et l’air s’échauffe.",
        detail:
          "Le carburant est injecté vers la fin de la compression dans les moteurs diesel classiques. La coupe reste qualitative.",
      },
      {
        label: "Détente",
        caption: "La combustion élève la pression et les gaz poussent le piston.",
        detail:
          "Une partie de cette énergie devient un effort mécanique. Le dessin se concentre sur la différence d’allumage.",
      },
    ],
    limit:
      "Véhicules et circuits stylisés, hors échelle. Les modèles et dispositions réels varient.",
    source: {
      title: "Department of Energy — Fonctionnement d’un véhicule diesel",
      url: "https://afdc.energy.gov/vehicles/how-do-diesel-cars-work",
    },
  },
  {
    id: "detailThermalChain",
    canvasHeight: 270,
    title: "Ouvrir la chaîne mécanique d’une voiture",
    paths: ["/automobile/motorisations/thermique/voiture-thermique-chaine-complete"],
    steps: [
      {
        label: "Moteur",
        caption: "Le moteur convertit une partie de l’énergie du carburant en mouvement.",
        detail:
          "Le dessin ouvre le bloc pour montrer la conversion tout en situant sa place dans le véhicule.",
      },
      {
        label: "Transmission",
        caption: "La transmission relie le moteur aux roues motrices.",
        detail:
          "Les rapports de transmission transforment le couple et la vitesse de rotation. Leur chemin exact dépend de l’architecture.",
      },
      {
        label: "Roue motrice",
        caption: "La roue transmet un effort au sol au niveau du contact du pneu.",
        detail:
          "La traction dépend de l’adhérence et des conditions de la chaussée. Le dessin ne représente pas les éventuelles pertes.",
      },
      {
        label: "Circuits auxiliaires",
        caption: "L’échappement et le refroidissement remplissent des fonctions distinctes.",
        detail:
          "La chaleur doit être évacuée et les gaz doivent être traités et rejetés. Les trajets représentés sont simplifiés.",
      },
    ],
    limit: "Situation fictive et dessin hors échelle. La planche explique le mécanisme représenté.",
    source: {
      title: "Department of Energy — Fonctionnement d’un véhicule à essence",
      url: "https://afdc.energy.gov/vehicles/how-do-gasoline-cars-work",
    },
  },
  {
    id: "detailDrivingAssistScope",
    canvasHeight: 270,
    title: "Situer ce que le véhicule peut observer",
    paths: [
      "/automobile/securite-et-conduite/aides-a-la-conduite/technologies-aide-conduite-efficacite",
    ],
    steps: [
      {
        label: "Champ observé",
        caption: "La zone dessinée représente une partie du champ du capteur.",
        detail:
          "La perception dépend des capteurs et du contexte. Un objet distinguable dans une situation peut devenir difficile à détecter dans une autre.",
      },
      {
        label: "Freinage assisté",
        caption: "Le véhicule peut freiner en fonction de la situation détectée.",
        detail:
          "L’assistance peut éviter un choc ou réduire la vitesse d’impact. Son efficacité dépend du scénario et du système.",
      },
      {
        label: "Masque",
        caption: "Un obstacle peut cacher une personne ou une partie de la scène.",
        detail:
          "La géométrie seule réduit ce que le capteur peut observer. Les limites s’apprécient avec la vitesse, le temps disponible et les conditions réelles.",
      },
    ],
    limit: "Situation fictive et dessin hors échelle. La planche explique le mécanisme représenté.",
    source: {
      title: "Euro NCAP — Évaluation du freinage de sécurité",
      url: "https://www.euroncap.com/en/car-safety/the-ratings-explained/safety-assist/aeb-car-to-car/",
    },
  },
  {
    id: "detailDrivingRoles",
    canvasHeight: 270,
    title: "Lire qui assure la tâche de conduite",
    paths: [
      "/automobile/securite-et-conduite/conduite-autonome/niveaux-dautomatisation-de-la-conduite",
    ],
    steps: [
      {
        label: "Conduite manuelle",
        caption: "Au niveau zéro, la tâche dynamique est assurée par le conducteur.",
        detail:
          "Un véhicule peut avoir des avertissements ou des interventions ponctuelles sans les assurer de façon continue.",
      },
      {
        label: "Assistance combinée",
        caption:
          "Au niveau deux, le système peut contrôler simultanément direction et mouvement longitudinal.",
        detail:
          "Le conducteur doit superviser l’environnement et le système. Les tâches attribuées importent davantage que le nom commercial.",
      },
      {
        label: "Reprise au niveau 3",
        caption: "Dans son domaine prévu, le système assure la tâche dynamique de conduite.",
        detail:
          "Une demande de reprise appelle une personne disponible pour intervenir. Le niveau ne décrit ni la qualité du système ni les droits d’usage partout.",
      },
      {
        label: "Domaine du niveau 4",
        caption:
          "Dans le domaine prévu, le système sait gérer le repli sans compter sur une reprise humaine.",
        detail:
          "Les routes, la météo ou la zone peuvent faire partie de ce domaine. Le niveau cinq vise les conditions de conduite que peut rencontrer un conducteur humain.",
      },
    ],
    limit: "Situation fictive et dessin hors échelle. La planche explique le mécanisme représenté.",
    source: {
      title: "SAE International — Les niveaux de conduite automatisée",
      url: "https://www.sae.org/binaries/content/assets/cm/content/blog/sae-j3016-visual-chart_5.3.21.pdf",
    },
  },
  {
    id: "detailDeformingBodywork",
    canvasHeight: 270,
    title: "Suivre les protections dans un véhicule en coupe",
    paths: [
      "/automobile/securite-et-conduite/securite-passive/ceinture-airbag-et-structures-deformables",
    ],
    steps: [
      {
        label: "Approche",
        caption: "Le déplacement concerne toute la voiture avant le choc.",
        detail:
          "Le mouvement porte une énergie à dissiper ou à transférer. Le dessin montre le principe d’un choc frontal sans reproduire un protocole d’essai.",
      },
      {
        label: "Déformation",
        caption: "Une partie de l’avant se déforme et absorbe une part de l’énergie.",
        detail:
          "Cette déformation peut allonger la durée du ralentissement. La forme exacte dépend de l’architecture et de l’impact.",
      },
      {
        label: "Habitacle",
        caption: "La structure vise à limiter l’intrusion dans la zone occupée.",
        detail:
          "La rigidité locale de l’habitacle et la déformation des extrémités remplissent des fonctions complémentaires.",
      },
      {
        label: "Retenue",
        caption: "La ceinture et le coussin gonflable complètent le travail de la structure.",
        detail:
          "La retenue limite les déplacements et répartit des efforts. Les fonctions se complètent pendant le ralentissement, selon le type de choc.",
      },
    ],
    limit: "Situation fictive et dessin hors échelle. La planche explique le mécanisme représenté.",
    source: {
      title: "Euro NCAP — Évaluation de la protection des adultes",
      url: "https://www.euroncap.com/en/car-safety/the-ratings-explained/adult-occupant-protection/",
    },
  },
  {
    id: "detailCrashLab",
    canvasHeight: 270,
    title: "Passer d’une scène d’essai à une évaluation",
    paths: ["/automobile/securite-et-conduite/securite-passive/crash-tests-etoiles-securite"],
    steps: [
      {
        label: "Choc défini",
        caption: "Un essai reproduit un scénario défini pour rendre la comparaison possible.",
        detail:
          "Véhicules, obstacle et instrumentation sont placés selon un protocole. Ce choc schématique ne représente aucun essai officiel précis.",
      },
      {
        label: "Prendre des mesures",
        caption: "Des capteurs relèvent des grandeurs pendant l’essai.",
        detail:
          "L’observation de la structure et les mesures sur les mannequins contribuent à évaluer la protection dans ce scénario.",
      },
      {
        label: "Lire l’évaluation",
        caption: "Une note combine plusieurs résultats selon le protocole de l’année.",
        detail:
          "La note couvre d’autres aspects que le choc représenté. Pour comparer deux notes, il faut tenir compte de l’année et du cadre de l’évaluation.",
      },
    ],
    limit: "Situation fictive et dessin hors échelle. La planche explique le mécanisme représenté.",
    source: {
      title: "Euro NCAP — Comprendre la notation",
      url: "https://www.euroncap.com/en/car-safety/the-ratings-explained",
    },
  },
  {
    id: "detailRoadUsers",
    canvasHeight: 270,
    title: "Lire trois facteurs lors d’un conflit voiture–usager",
    paths: [
      "/automobile/securite-et-conduite/securite-passive/securite-pietons-cyclistes-automobile",
    ],
    steps: [
      {
        label: "Vitesse d’approche",
        caption: "La vitesse modifie le temps disponible et les conséquences possibles du choc.",
        detail:
          "La gravité varie aussi avec la configuration du véhicule, la personne exposée et les circonstances de l’impact.",
      },
      {
        label: "Face avant",
        caption: "La forme et la hauteur de la face avant influencent le contact.",
        detail:
          "Les essais spécialisés évaluent certaines zones du véhicule et certaines situations pour les usagers vulnérables.",
      },
      {
        label: "Traversée",
        caption: "L’aménagement de la traversée modifie l’exposition au conflit.",
        detail:
          "La visibilité, la géométrie et la vitesse pratiquée se combinent. Le dessin montre un principe d’aménagement sans dimension prescrite.",
      },
    ],
    limit: "Situation fictive et dessin hors échelle. La planche explique le mécanisme représenté.",
    source: {
      title: "AAA Foundation — Vitesse d’impact et gravité chez les piétons",
      url: "https://aaafoundation.org/impact-speed-pedestrians-risk-severe-injury-death/",
    },
  },
  {
    id: "detailWearPaths",
    canvasHeight: 270,
    title: "Séparer les effets de l’âge et de l’usage",
    paths: [
      "/automobile/usages-et-mobilite/entretien-et-cycle-de-vie/duree-vie-voiture-kilometrage-entretien",
    ],
    steps: [
      {
        label: "Usure d’usage",
        caption: "Le roulement et les sollicitations laissent des traces sur plusieurs pièces.",
        detail:
          "Le kilométrage renseigne sur une partie de l’usage. Les conditions de trajet modifient les sollicitations à kilométrage égal.",
      },
      {
        label: "Vieillissement",
        caption:
          "La corrosion et le vieillissement peuvent progresser même si le véhicule roule peu.",
        detail:
          "Le climat, le stockage, l’exposition aux sels et l’état initial influencent ces évolutions.",
      },
      {
        label: "Entretien documenté",
        caption: "L’historique apporte des informations que le compteur ne donne pas.",
        detail:
          "Les opérations et les contrôles aident à interpréter l’âge et les kilomètres, sans garantir l’état futur du véhicule.",
      },
    ],
    limit: "Situation fictive et dessin hors échelle. La planche explique le mécanisme représenté.",
    source: {
      title: "SDES — Parc de voitures en circulation au 1er janvier 2025",
      url: "https://www.statistiques.developpement-durable.gouv.fr/397-millions-de-voitures-en-circulation-en-france-au-1er-janvier-2025",
    },
  },
  {
    id: "detailSwimmingDrag",
    canvasHeight: 270,
    title: "Observer un corps dans l’eau",
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-individuels/apprendre-nager",
    ],
    steps: [
      {
        label: "Flottaison",
        caption: "Le corps reçoit une poussée de l’eau qui s’oppose à son poids.",
        detail:
          "Les positions changent la partie du corps immergée. Cette vue illustre un principe physique dans un apprentissage encadré.",
      },
      {
        label: "Respiration",
        caption: "La position de la tête modifie le rapport entre le visage et la surface.",
        detail:
          "En natation l’accès à l’air doit être coordonné avec le mouvement. Une planche ne remplace ni l’encadrement ni la surveillance.",
      },
      {
        label: "Alignement",
        caption: "L’orientation du corps modifie la résistance à l’avancement.",
        detail:
          "La vitesse et la posture changent l’écoulement autour du nageur. Les lignes montrent une direction générale, sans mesure de traînée.",
      },
    ],
    limit: "Situation fictive et dessin hors échelle. La planche explique le mécanisme représenté.",
    source: {
      title: "YMCA — Compétences de base en natation",
      url: "https://www.philaymca.org/news/basic-swimming-skills-everyone-should-learn",
    },
  },
  {
    id: "detailRopeStretch",
    canvasHeight: 270,
    title: "Voir comment une corde dynamique amortit",
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-individuels/comment-une-corde-d-escalade-arrete-t-elle-la-chute-d-un-grimpeur",
    ],
    steps: [
      {
        label: "Corde sous charge",
        caption: "La corde transmet des efforts entre le grimpeur et le système d’assurage.",
        detail:
          "Les points et les positions sont simplifiés pour isoler le rôle mécanique de la corde dans un système adapté.",
      },
      {
        label: "Allongement",
        caption: "Une corde dynamique s’allonge sous charge, ce qui aide à amortir l’arrêt.",
        detail:
          "Les efforts maximaux et la distance dépendent de l’ensemble de la situation. Le schéma n’enseigne aucun montage ni manœuvre.",
      },
    ],
    limit: "Situation fictive et dessin hors échelle. La planche explique le mécanisme représenté.",
    source: {
      title: "UIAA — Normes de sécurité pour le matériel d’escalade",
      url: "https://www.theuiaa.org/safety/safety-standards/",
    },
  },
  {
    id: "detailPlateShoe",
    canvasHeight: 270,
    title: "Lire la semelle d’une chaussure de course",
    paths: [
      "/sport-et-sciences-du-mouvement/sport-et-societe/dopage/des-chaussures-qui-font-courir-plus-vite-est-ce-du-dopage-technologique",
    ],
    steps: [
      {
        label: "Mousse",
        caption: "Une partie de la semelle peut se comprimer au contact du sol.",
        detail:
          "La réponse dépend des propriétés de la mousse, de l’épaisseur, de la géométrie et de la foulée du coureur.",
      },
      {
        label: "Plaque",
        caption: "Une plaque rigide peut être intégrée à la semelle.",
        detail:
          "La plaque et la mousse interagissent. Les effets observés sur l’économie de course ne se réduisent pas à une seule pièce.",
      },
      {
        label: "Courbure",
        caption: "La géométrie change la manière dont le pied déroule son appui.",
        detail:
          "Les différences de performance varient avec les personnes et les usages. Le dessin ne fixe aucun seuil de conformité sportive.",
      },
    ],
    limit: "Situation fictive et dessin hors échelle. La planche explique le mécanisme représenté.",
    source: {
      title: "Hoogkamer et al. — Comparaison du coût énergétique de la course",
      url: "https://pubmed.ncbi.nlm.nih.gov/29143929/",
    },
  },
  {
    id: "detailRadioCapacity",
    canvasHeight: 270,
    title: "Lire trois propriétés d’un réseau mobile dans une rue",
    paths: [
      "/communication-et-medias/telecommunications/reseaux-mobiles/deploiement-5g-et-perspectives-6g",
    ],
    steps: [
      {
        label: "Débit",
        caption: "Le débit concerne la quantité de données transférée par unité de temps.",
        detail:
          "L’utilité d’un haut débit dépend du signal, de l’équipement, de la fréquence et du nombre de personnes qui partagent la liaison.",
      },
      {
        label: "Capacité",
        caption: "Plusieurs cellules peuvent répartir les connexions d’une zone.",
        detail:
          "La capacité d’un secteur est partagée. Ajouter une antenne n’augmente pas uniformément le débit de chaque personne.",
      },
      {
        label: "Latence",
        caption:
          "La latence concerne le temps nécessaire pour parcourir un trajet et obtenir une réponse.",
        detail:
          "Le délai inclut aussi le traitement et les liaisons au-delà de l’antenne. L’illustration ne fixe aucune valeur de performance.",
      },
    ],
    limit:
      "Architecture de principe, hors échelle. Les éléments et les trajets varient selon le système réel.",
    source: {
      title: "UIT — Technologies mobiles de cinquième génération",
      url: "https://www.itu.int/en/mediacentre/backgrounders/Pages/5G-fifth-generation-of-mobile-technologies.aspx",
    },
  },
  {
    id: "detailMobileGenerations",
    canvasHeight: 270,
    title: "Comparer quatre générations de réseaux mobiles",
    paths: [
      "/communication-et-medias/telecommunications/reseaux-mobiles/que-change-chaque-generation-de-reseau-mobile-de-la-2g-a-la-5g",
    ],
    steps: [
      {
        label: "2G et SMS",
        caption: "Le passage au numérique facilite les appels et les messages courts.",
        detail:
          "La 2G comprend plusieurs standards. Le dessin retient un usage qui permet de situer la génération.",
      },
      {
        label: "3G et accès au Web",
        caption: "Les données mobiles prennent une place plus grande.",
        detail:
          "Les débits disponibles dépendent des versions du réseau et des conditions locales. La navigation devient plus praticable.",
      },
      {
        label: "4G et vidéo",
        caption: "Les réseaux à haut débit mobile facilitent des usages plus riches en données.",
        detail:
          "Le débit mobile dépend encore de la couverture et de la charge. La vidéo est un exemple d’usage plutôt qu’une frontière technique.",
      },
      {
        label: "5G et diversité des usages",
        caption: "La 5G prévoit des objectifs différents selon l’usage et le déploiement.",
        detail:
          "La capacité, le débit et la latence peuvent évoluer différemment. Ils ne sont pas garantis par le seul symbole affiché.",
      },
    ],
    limit:
      "Architecture de principe, hors échelle. Les éléments et les trajets varient selon le système réel.",
    source: {
      title: "UIT — Technologies mobiles de cinquième génération",
      url: "https://www.itu.int/en/mediacentre/backgrounders/Pages/5G-fifth-generation-of-mobile-technologies.aspx",
    },
  },
  {
    id: "detailHandsetRelay",
    canvasHeight: 270,
    title: "Suivre un appel du téléphone au réseau terrestre",
    paths: [
      "/communication-et-medias/telecommunications/satellites/comment-un-telephone-satellite-fonctionne-t-il-loin-de-toute-antenne-relais",
    ],
    steps: [
      {
        label: "Terminal",
        caption: "Le téléphone communique avec un satellite visible depuis sa position.",
        detail:
          "L’antenne du terminal et la visibilité du ciel comptent. Les reliefs et les obstacles peuvent réduire les possibilités de liaison.",
      },
      {
        label: "Relais en orbite",
        caption: "Le satellite relaie la communication au-delà des antennes mobiles locales.",
        detail:
          "La liaison radio utilise le satellite comme une partie d’un système. Le trajet précis varie selon les opérateurs et l’orbite.",
      },
      {
        label: "Station au sol",
        caption: "Une station peut relier le système satellite au réseau terrestre.",
        detail:
          "Les communications peuvent aussi emprunter d’autres satellites avant de rejoindre le sol, selon l’architecture du réseau.",
      },
      {
        label: "Zone visible",
        caption: "L’orbite influence la zone vue par un satellite à un instant donné.",
        detail:
          "Des orbites basses et des orbites géostationnaires impliquent des compromis distincts de couverture et de délai. Les distances sont stylisées.",
      },
    ],
    limit:
      "Architecture de principe, hors échelle. Les éléments et les trajets varient selon le système réel.",
    source: {
      title: "Iridium — Le réseau satellite",
      url: "https://www.iridium.com/network/",
    },
  },
  {
    id: "detailRotorInduction",
    canvasHeight: 270,
    title: "Suivre l’énergie dans une petite éolienne",
    paths: ["/energie/energies-renouvelables/eolien/construire-petite-eolienne"],
    steps: [
      {
        label: "Vent sur les pales",
        caption: "Les pales reçoivent un effort de l’air et entraînent le rotor.",
        detail:
          "La production dépend du vent, de la géométrie et du rendement. La coupe montre le principe sans donner de dimensions de construction.",
      },
      {
        label: "Génératrice",
        caption: "La rotation entraîne une génératrice qui produit un courant électrique.",
        detail:
          "La génératrice utilise un effet électromagnétique. Une partie de l’énergie reste perdue sous forme de chaleur et d’autres effets.",
      },
      {
        label: "Électricité utile",
        caption: "Le courant peut être adapté aux besoins du système installé.",
        detail:
          "Régulation, charge et stockage jouent des rôles différents selon l’installation. Le schéma n’est ni un plan ni un câblage.",
      },
    ],
    limit:
      "Architecture de principe, hors échelle. Les éléments et les trajets varient selon le système réel.",
    source: {
      title: "Department of Energy — Fonctionnement d’une éolienne",
      url: "https://www.energy.gov/cmei/systems/how-do-wind-turbines-work",
    },
  },
  {
    id: "detailHydrogenDensity",
    canvasHeight: 270,
    title: "Comparer la molécule et les volumes de stockage",
    paths: [
      "/energie/reseaux-et-stockage/hydrogene/la-molecule-d-hydrogene-et-ses-proprietes-energetiques",
    ],
    steps: [
      {
        label: "Molécule H₂",
        caption: "Le dihydrogène est constitué de deux atomes d’hydrogène.",
        detail:
          "Il peut porter beaucoup d’énergie par kilogramme. Cette mesure par unité de masse ne donne pas le volume nécessaire.",
      },
      {
        label: "Comparer les volumes",
        caption: "La densité dépend fortement de l’état du dihydrogène.",
        detail:
          "Le gaz est peu dense à pression ambiante. Les récipients illustrent une comparaison qualitative, sans dimension ni instruction de stockage.",
      },
    ],
    limit:
      "Architecture de principe, hors échelle. Les éléments et les trajets varient selon le système réel.",
    source: {
      title: "Department of Energy — Stockage de l’hydrogène",
      url: "https://www.energy.gov/cmei/fuels/hydrogen-storage",
    },
  },
  {
    id: "detailKernelGate",
    canvasHeight: 270,
    title: "Situer le noyau entre logiciel et matériel",
    paths: [
      "/micro-informatique-et-informatique/logiciel/systemes-d-exploitation/le-role-du-noyau-dans-l-architecture-d-un-systeme-d-exploitation",
    ],
    steps: [
      {
        label: "Demande d’un programme",
        caption: "Une application demande une opération au système.",
        detail:
          "Les applications accèdent à certaines ressources en passant par des interfaces prévues. Le principe varie selon le système et le service.",
      },
      {
        label: "Arbitrage du noyau",
        caption: "Le noyau attribue et protège l’accès à des ressources partagées.",
        detail:
          "Il organise des tâches, gère une partie de la mémoire et échange avec des pilotes. Le diagramme reste au niveau de l’architecture.",
      },
      {
        label: "Réponse du matériel",
        caption: "La réponse d’un périphérique remonte par les couches du système.",
        detail:
          "Les pilotes et le système transforment les événements physiques en informations exploitables par les programmes.",
      },
    ],
    limit:
      "Architecture de principe, hors échelle. Les éléments et les trajets varient selon le système réel.",
    source: {
      title: "The Linux Kernel documentation — User-space API",
      url: "https://kernel.org/doc/html/v6.14/userspace-api/index.html",
    },
  },
  {
    id: "detailArchivedComputer",
    canvasHeight: 270,
    title: "Séparer matériel, stockage et système au démarrage",
    paths: [
      "/micro-informatique-et-informatique/logiciel/systemes-d-exploitation/remettre-marche-vieil-ordinateur",
    ],
    steps: [
      {
        label: "Alimentation",
        caption: "Le démarrage commence par la mise sous tension du matériel.",
        detail:
          "Un écran noir n’a pas une cause unique. Les signes d’activité permettent de décrire le problème avant d’agir.",
      },
      {
        label: "Stockage",
        caption: "Le support de stockage conserve le système et les fichiers.",
        detail:
          "Un support défaillant et un système incompatible peuvent se ressembler au démarrage. La conservation des données constitue une étape distincte.",
      },
      {
        label: "Système compatible",
        caption: "Le système doit prendre en charge le matériel et ses interfaces.",
        detail:
          "Un ordinateur ancien peut demander un environnement différent d’un modèle récent. Le dessin ne présente aucune procédure de dépannage.",
      },
    ],
    limit:
      "Architecture de principe, hors échelle. Les éléments et les trajets varient selon le système réel.",
    source: {
      title: "Microsoft — Récupération et démarrage de Windows",
      url: "https://support.microsoft.com/en-us/windows/recovery-options-in-windows-31ce2444-7de3-818c-d626-e3b5a3024da5",
    },
  },
  {
    id: "detailGateThickness",
    canvasHeight: 270,
    title: "Comparer la géométrie de trois transistors",
    paths: ["/micro-informatique-et-informatique/materiel/processeurs/gravure-2-nanometres-tsmc"],
    steps: [
      {
        label: "Canal de surface",
        caption: "Dans un transistor planaire, la grille se trouve au-dessus du canal.",
        detail:
          "Un isolant sépare grille et canal. Le champ électrique de la grille modifie la conduction du canal.",
      },
      {
        label: "Ailette",
        caption: "Le canal en ailette permet à la grille d’agir sur plusieurs faces.",
        detail:
          "Cette forme améliore le contrôle électrostatique du canal. La coupe compare une géométrie et non les dimensions de composants commerciaux.",
      },
      {
        label: "Feuillets entourés",
        caption: "La grille peut entourer des feuillets servant de canaux.",
        detail:
          "La surface de contrôle change alors de géométrie. Un nom de nœud de fabrication ne donne pas à lui seul une dimension physique de la grille.",
      },
    ],
    limit:
      "Architecture de principe, hors échelle. Les éléments et les trajets varient selon le système réel.",
    source: {
      title: "TSMC Research — Transistors à feuillets",
      url: "https://research.tsmc.com/page/transistor-structure/59.html",
    },
  },
  {
    id: "detailPacketJourney",
    canvasHeight: 270,
    title: "Suivre un message à travers plusieurs équipements",
    paths: [
      "/micro-informatique-et-informatique/reseaux-et-securite/internet/fonctionnement-internet-acces-mondial",
    ],
    steps: [
      {
        label: "Message découpé",
        caption: "Des données sont segmentées pour pouvoir être transportées par le réseau.",
        detail:
          "Les informations de contrôle dépendent des protocoles. Le dessin suit un transport qui rend possible la recomposition ordonnée.",
      },
      {
        label: "Acheminement",
        caption: "Des équipements intermédiaires dirigent les paquets vers leur destination.",
        detail:
          "Tous les paquets ne suivent pas forcément le même chemin. Le dessin montre des routes possibles sans représenter un réseau réel.",
      },
      {
        label: "Arrivée",
        caption: "Les données reçues peuvent être réunies dans l’ordre attendu.",
        detail:
          "La recomposition dépend du protocole utilisé. La planche suppose un mécanisme qui peut remettre les données dans l’ordre et gérer les pertes.",
      },
    ],
    limit:
      "Architecture de principe, hors échelle. Les éléments et les trajets varient selon le système réel.",
    source: {
      title: "IETF — Transmission Control Protocol",
      url: "https://www.rfc-editor.org/rfc/rfc9293",
    },
  },
  {
    id: "detailJobsiteRobot",
    canvasHeight: 270,
    title: "Observer un robot et un point de contrôle sur un chantier",
    paths: [
      "/technologies-et-ingenierie/robotique/robots-mobiles/que-peuvent-faire-les-robots-sur-un-chantier-et-pourquoi-n-y-remplacent-ils-pas-les-ouvriers",
    ],
    steps: [
      {
        label: "Prendre la pièce",
        caption: "Le préhenseur déplace un élément d’un emplacement à un autre.",
        detail:
          "Chaque outil est adapté à un objet et à des conditions de chantier. Le mouvement est schématisé sans procédure de réglage.",
      },
      {
        label: "Répéter la pose",
        caption: "Un mouvement répétable convient à une partie du travail de pose.",
        detail:
          "La précision dépend des repères, de la géométrie et de la variabilité du support. Le reste du chantier doit être coordonné.",
      },
      {
        label: "Contrôler le résultat",
        caption: "La pose doit être appréciée dans les conditions du chantier.",
        detail:
          "Les équipes gèrent les écarts, l’organisation et les exigences de sécurité. Le contrôle fait partie du processus, en plus du geste robotisé.",
      },
    ],
    limit:
      "Architecture de principe, hors échelle. Les éléments et les trajets varient selon le système réel.",
    source: {
      title: "ETH Zürich — In situ Fabricator",
      url: "https://ethz.ch/content/dam/ethz/main/news/eth-news/medienmitteilungen/2019/pdf/190227_DFAB/Factsheet_Digital_Fabrication_EN.pdf",
    },
  },
  {
    id: "detailFrenchGridFlows",
    canvasHeight: 270,
    title: "Relier production, consommation et échanges électriques",
    paths: [
      "/energie/efficacite-et-sobriete/usages-et-consommation/d-ou-vient-l-electricite-que-l-on-consomme-en-france",
    ],
    steps: [
      {
        label: "Produire",
        caption: "La production alimente le réseau depuis plusieurs installations.",
        detail:
          "Le mix de production décrit les sources qui ont injecté de l’énergie sur une période. Il varie avec la disponibilité des installations.",
      },
      {
        label: "Consommer",
        caption: "Les usages retirent de l’énergie du réseau au même moment.",
        detail:
          "Les puissances injectées et soutirées doivent rester en équilibre, avec les pertes et les échanges nécessaires au fonctionnement du système.",
      },
      {
        label: "Échanger",
        caption:
          "Les liaisons transfrontalières peuvent transporter de l’électricité dans les deux sens.",
        detail:
          "Le solde se mesure sur une période. Consommation, production et exportations répondent à des questions différentes.",
      },
    ],
    limit:
      "Exemple de principe sans échelle ni données d’exploitation. Les installations réelles varient.",
    source: {
      title: "RTE — Bilan électrique 2025",
      url: "https://analysesetdonnees.rte-france.com/bilan-electrique-2025/synthese",
    },
  },
  {
    id: "detailCoalSteam",
    canvasHeight: 270,
    title: "Suivre l’énergie dans une centrale au charbon",
    paths: ["/energie/energies-fossiles-et-nucleaire/charbon/charbon-premiere-source-delectricite"],
    steps: [
      {
        label: "Chaudière",
        caption: "Le charbon apporte de l’énergie thermique à la chaudière.",
        detail:
          "La chaleur permet de produire de la vapeur dans le circuit d’eau. Les fumées suivent leur propre circuit de traitement.",
      },
      {
        label: "Turbine",
        caption: "La vapeur transmet de l’énergie à la turbine.",
        detail:
          "La détente met le rotor en mouvement. Un circuit de retour de l’eau complète l’installation, même si la planche n’en déroule pas les détails.",
      },
      {
        label: "Générateur",
        caption: "L’arbre mécanique entraîne un générateur électrique.",
        detail:
          "Une partie de l’énergie est perdue sous forme de chaleur. La conversion et les émissions se mesurent séparément.",
      },
    ],
    limit:
      "Exemple de principe sans échelle ni données d’exploitation. Les installations réelles varient.",
    source: {
      title: "EIA — Génération d’électricité",
      url: "https://www.eia.gov/energyexplained/electricity/how-electricity-is-generated.php",
    },
  },
  {
    id: "detailFossilInputs",
    canvasHeight: 270,
    title: "Voir trois usages des hydrocarbures",
    paths: [
      "/energie/energies-fossiles-et-nucleaire/hydrocarbures/consommation-mondiale-petrole-gaz",
    ],
    steps: [
      {
        label: "Carburant",
        caption: "Une partie des produits pétroliers est utilisée pour le transport.",
        detail:
          "La densité énergétique et l’infrastructure de distribution expliquent une partie de leur usage. Le schéma ne quantifie aucune consommation.",
      },
      {
        label: "Chaleur",
        caption: "Le gaz peut être utilisé pour produire de la chaleur.",
        detail:
          "Les usages varient selon le système de chauffage ou le procédé industriel, avec des possibilités de substitution différentes.",
      },
      {
        label: "Matière première",
        caption: "Certaines molécules servent de base à des produits industriels.",
        detail:
          "La pétrochimie emploie des matières premières distinctes des carburants brûlés. Remplacer un usage énergétique et un usage de matière pose deux problèmes différents.",
      },
    ],
    limit:
      "Exemple de principe sans échelle ni données d’exploitation. Les installations réelles varient.",
    source: {
      title: "EIA — Usages du pétrole",
      url: "https://www.eia.gov/energyexplained/oil-and-petroleum-products/use-of-oil.php",
    },
  },
  {
    id: "detailReactorFleet",
    canvasHeight: 270,
    title: "Suivre la conversion thermique d’une centrale nucléaire",
    paths: ["/energie/energies-fossiles-et-nucleaire/nucleaire/etat-du-parc-nucleaire-mondial"],
    steps: [
      {
        label: "Chaleur du réacteur",
        caption: "Le réacteur libère de la chaleur à partir de la fission.",
        detail:
          "La représentation est une coupe fonctionnelle, sans arrangement interne détaillé. Les circuits diffèrent selon les familles de réacteurs.",
      },
      {
        label: "Turbine à vapeur",
        caption: "La chaleur permet à la vapeur de transmettre de l’énergie à une turbine.",
        detail:
          "Certains réacteurs produisent la vapeur via un circuit séparé. Le trajet général montré ici ne représente pas un modèle particulier.",
      },
      {
        label: "Électricité",
        caption: "Le générateur convertit une rotation en électricité.",
        detail:
          "Les centrales ont aussi des besoins de refroidissement et des systèmes de sûreté. Le dessin isole la chaîne de conversion.",
      },
    ],
    limit:
      "Exemple de principe sans échelle ni données d’exploitation. Les installations réelles varient.",
    source: {
      title: "AIEA — Production d’électricité nucléaire",
      url: "https://www.iaea.org/topics/nuclear-power",
    },
  },
  {
    id: "detailPackPrice",
    canvasHeight: 270,
    title: "Lire ce que représente un prix de batterie par kWh",
    paths: ["/energie/reseaux-et-stockage/batteries/prix-des-batteries-lithium-ion-2025"],
    steps: [
      {
        label: "Coût par capacité",
        caption: "Le prix par kWh se rapporte à une capacité de stockage donnée.",
        detail:
          "Il faut préciser ce qui est compté, par exemple la cellule ou le pack. La courbe représente une tendance qualitative.",
      },
      {
        label: "Évolution de fabrication",
        caption: "Les volumes produits, les procédés et les matériaux influencent le coût.",
        detail:
          "Les variations de prix ne suivent pas une courbe régulière. Les facteurs d’une période ne sont pas forcément ceux de la suivante.",
      },
      {
        label: "Prix et usage du pack",
        caption: "Le prix par kWh ne se confond pas avec le coût complet d’un véhicule.",
        detail:
          "Une capacité plus élevée peut changer le coût total du pack. D’autres postes interviennent ensuite dans le véhicule entier.",
      },
    ],
    limit:
      "Exemple de principe sans échelle ni données d’exploitation. Les installations réelles varient.",
    source: {
      title: "AIE — Batteries et transitions énergétiques",
      url: "https://www.iea.org/reports/batteries-and-secure-energy-transitions",
    },
  },
  {
    id: "detailDrainagePlot",
    canvasHeight: 270,
    title: "Lire un trajet d’eaux usées sous la parcelle",
    paths: [
      "/environnement-et-climat/pollution-et-ressources/eau/assainissement-autonome-toilettes-seches",
    ],
    steps: [
      {
        label: "Depuis la maison",
        caption: "Des eaux usées quittent la maison vers une installation dédiée.",
        detail:
          "Le système reçoit des flux issus de plusieurs usages domestiques. La coupe explique le rôle des pièces, sans proposer de plan de pose.",
      },
      {
        label: "Séparation initiale",
        caption: "Une fosse retient une partie des matières avant le traitement suivant.",
        detail:
          "Cette étape ne suffit pas à épurer toute l’eau. La filière dépend du terrain et de la réglementation locale.",
      },
      {
        label: "Traitement par le sol",
        caption: "Dans certains systèmes, le sol fait partie du traitement des eaux.",
        detail:
          "Les caractéristiques du terrain conditionnent la filière. Les dimensions et l’implantation doivent être déterminées pour le site réel.",
      },
    ],
    limit:
      "Exemple de principe sans échelle ni données d’exploitation. Les installations réelles varient.",
    source: {
      title: "EPA — Fonctionnement d’un système d’assainissement autonome",
      url: "https://www.epa.gov/septic/how-septic-systems-work",
    },
  },
  {
    id: "detailWaterTreatment",
    canvasHeight: 270,
    title: "Distinguer l’aspect de l’eau de sa qualité",
    paths: ["/environnement-et-climat/pollution-et-ressources/eau/rendre-eau-potable"],
    steps: [
      {
        label: "Eau brute",
        caption: "Des particules visibles peuvent être présentes dans une eau brute.",
        detail:
          "La transparence ne suffit pas à déterminer si l’eau est potable. Des substances et des micro-organismes peuvent être invisibles.",
      },
      {
        label: "Clarification",
        caption: "La clarification réduit une partie des matières en suspension.",
        detail:
          "Elle agit sur l’aspect et facilite certaines étapes de traitement. La potabilité exige des mesures de qualité et un traitement adapté.",
      },
      {
        label: "Contrôle et protection",
        caption:
          "La chaîne de traitement s’accompagne d’un contrôle et d’une protection de l’eau traitée.",
        detail:
          "La méthode dépend de la qualité initiale et du risque. La planche présente les fonctions, sans donner de procédure de potabilisation.",
      },
    ],
    limit:
      "Exemple de principe sans échelle ni données d’exploitation. Les installations réelles varient.",
    source: {
      title: "CDC — Comment l’eau est traitée",
      url: "https://www.cdc.gov/drinking-water/about/how-water-treatment-works.html",
    },
  },
  {
    id: "detailIndoorAir",
    canvasHeight: 270,
    title: "Suivre les polluants dans une pièce en coupe",
    paths: [
      "/environnement-et-climat/pollution-et-ressources/qualite-de-l-air/la-pollution-de-l-air-interieur-un-risque-meconnu",
    ],
    steps: [
      {
        label: "Sources intérieures",
        caption: "Plusieurs activités et matériaux peuvent émettre des polluants dans une pièce.",
        detail:
          "La concentration dépend de la quantité émise, du volume et des échanges avec l’extérieur. Le dessin illustre une source parmi plusieurs.",
      },
      {
        label: "Polluant invisible",
        caption: "Le monoxyde de carbone ne se repère pas à l’apparence de l’air.",
        detail:
          "Il peut provenir d’une combustion incomplète. Les symboles dessinés servent uniquement à le situer parmi les dangers possibles.",
      },
      {
        label: "Renouveler l’air",
        caption: "Des échanges avec l’extérieur modifient l’accumulation dans la pièce.",
        detail:
          "Renouvellement d’air et réduction des émissions remplissent des fonctions complémentaires. Le dessin ne représente aucun débit recommandé.",
      },
    ],
    limit:
      "Exemple de principe sans échelle ni données d’exploitation. Les installations réelles varient.",
    source: {
      title: "OMS — Pollution de l’air dans les habitations",
      url: "https://www.who.int/fr/news-room/fact-sheets/detail/household-air-pollution-and-health",
    },
  },
  {
    id: "detailMaterialAxes",
    canvasHeight: 270,
    title: "Poser trois questions sur un plastique",
    paths: [
      "/sciences-du-vivant-appliquees/biotechnologies/biologie-de-synthese/un-plastique-d-origine-vegetale-est-il-forcement-biodegradable",
    ],
    steps: [
      {
        label: "Origine",
        caption: "Une partie des matières premières peut être d’origine biologique.",
        detail:
          "L’origine décrit une ressource utilisée pour fabriquer le matériau. Elle ne permet pas de déduire ce qui lui arrive après usage.",
      },
      {
        label: "Dégradation",
        caption: "La dégradation dépend des propriétés du matériau et du milieu.",
        detail:
          "L’humidité, le milieu et la durée sont nécessaires pour décrire le phénomène. Le dessin ne représente pas une vitesse de dégradation.",
      },
      {
        label: "Compostage",
        caption: "Le caractère compostable suppose des conditions précises.",
        detail:
          "Compostage industriel et compostage domestique peuvent fonctionner différemment. L’emballage doit être lu en tenant compte de la filière réelle.",
      },
    ],
    limit:
      "Exemple de principe sans échelle ni données d’exploitation. Les installations réelles varient.",
    source: {
      title: "Commission européenne — Plastiques biosourcés et biodégradables",
      url: "https://environment.ec.europa.eu/topics/plastics/bio-based-biodegradable-and-compostable-plastics_en",
    },
  },
  {
    id: "detailCementKiln",
    canvasHeight: 270,
    title: "Ouvrir le four qui produit le clinker",
    paths: ["/technologies-et-ingenierie/genie-civil/materiaux/empreinte-carbone-du-ciment"],
    steps: [
      {
        label: "Matière calcaire",
        caption: "Des matières riches en calcium entrent dans la chaîne de fabrication.",
        detail:
          "Le mélange contient aussi d’autres constituants. Le four dessiné sert à situer les transformations principales.",
      },
      {
        label: "Apport de chaleur",
        caption: "Le four chauffe le mélange pour produire le clinker.",
        detail:
          "Le chauffage consomme de l’énergie. La coupe montre les zones du four sans donner de conditions opératoires.",
      },
      {
        label: "Deux origines du CO₂",
        caption: "Le CO₂ provient à la fois de la calcination et de l’énergie utilisée.",
        detail:
          "La libération liée au calcaire dépend de la transformation chimique. Les émissions de l’énergie dépendent de son origine.",
      },
      {
        label: "Clinker puis ciment",
        caption: "Le clinker appartient à une étape intermédiaire avant le ciment.",
        detail:
          "Il est broyé avec d’autres constituants. La proportion de clinker et l’énergie consommée influencent l’empreinte du produit.",
      },
    ],
    limit:
      "Exemple de principe sans échelle ni données d’exploitation. Les installations réelles varient.",
    source: {
      title: "AIE — Ciment",
      url: "https://www.iea.org/energy-system/industry/cement",
    },
  },
  {
    id: "detailGrowingSkeleton",
    canvasHeight: 270,
    title: "Observer les jonctions d’un squelette en croissance",
    paths: ["/corps-humain-et-sante/anatomie/pourquoi-un-bebe-a-t-il-plus-d-os-qu-un-adulte"],
    steps: [
      {
        label: "Fontanelle du nourrisson",
        caption: "Le crâne du nourrisson possède des espaces souples entre certains os.",
        detail:
          "Le dessin localise un exemple de jonction. Le crâne grandit et ses différentes jonctions se transforment au cours du développement.",
      },
      {
        label: "Jonctions du crâne",
        caption: "Les espaces se transforment et laissent place à des jonctions plus fines.",
        detail:
          "Les sutures permettent la croissance pendant une période. Elles ne s’effacent pas toutes de la même façon ni au même moment.",
      },
      {
        label: "Plaque de croissance",
        caption: "Du cartilage participe à l’allongement de certains os.",
        detail:
          "Le dessin montre l’extrémité d’un os long. Cette plaque évolue au cours de la croissance et n’est pas assimilable à une fontanelle.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les formes sont simplifiées pour isoler le phénomène représenté.",
    source: {
      title: "OpenStax — Formation et développement des os",
      url: "https://openstax.org/books/anatomy-and-physiology-2e/pages/6-4-bone-formation-and-development",
    },
  },
  {
    id: "detailPainSignal",
    canvasHeight: 270,
    title: "Suivre un signal du corps jusqu’au cerveau",
    paths: ["/corps-humain-et-sante/anatomie/systeme-nerveux/a-quoi-sert-la-douleur"],
    steps: [
      {
        label: "Stimulus",
        caption:
          "Certains récepteurs répondent à des stimuli susceptibles d’endommager des tissus.",
        detail:
          "L’exemple du doigt sert à situer le départ possible d’un signal. L’intensité ressentie ne se déduit pas de ce point seul.",
      },
      {
        label: "Transmission nerveuse",
        caption: "Le signal est transmis par des voies nerveuses vers le système central.",
        detail:
          "Des mécanismes peuvent moduler son passage. Le dessin condense des étapes intermédiaires afin de montrer la relation entre les zones.",
      },
      {
        label: "Perception",
        caption: "Le cerveau participe à l’élaboration de l’expérience douloureuse.",
        detail:
          "Le contexte, la mémoire et l’état de la personne modulent cette expérience. La planche illustre un trajet parmi plusieurs possibles.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les formes sont simplifiées pour isoler le phénomène représenté.",
    source: {
      title: "NINDS — Pain",
      url: "https://www.ninds.nih.gov/health-information/disorders/pain",
    },
  },
  {
    id: "detailSynapseRemodel",
    canvasHeight: 270,
    title: "Observer une connexion qui se modifie",
    paths: ["/corps-humain-et-sante/anatomie/systeme-nerveux/plasticite-cerebrale"],
    steps: [
      {
        label: "Synapse",
        caption: "Deux cellules communiquent au niveau d’une connexion synaptique.",
        detail:
          "Le dessin grossit une jonction. Il condense plusieurs phénomènes possibles entre la cellule émettrice et celle qui reçoit le signal.",
      },
      {
        label: "Transmission modulée",
        caption: "L’efficacité d’une connexion peut évoluer avec son activité.",
        detail:
          "Les changements peuvent dépendre de l’expérience et du contexte. Le rôle d’une synapse doit se comprendre à l’échelle de son réseau.",
      },
      {
        label: "Connexions remaniées",
        caption: "Un réseau peut remanier des connexions existantes et en former de nouvelles.",
        detail:
          "La plasticité se manifeste à plusieurs échelles. Elle varie selon les régions et les étapes de la vie.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les formes sont simplifiées pour isoler le phénomène représenté.",
    source: {
      title: "OpenStax — Synaptic Mechanisms of Long-Term Memory",
      url: "https://openstax.org/books/introduction-behavioral-neuroscience/pages/18-4-synaptic-mechanisms-of-long-term-memory",
    },
  },
  {
    id: "detailAltitudeLung",
    canvasHeight: 270,
    title: "Comparer deux volumes d’air à des altitudes différentes",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-respiratoire/pourquoi-manque-t-on-de-souffle-en-altitude-alors-que-l-air-reste-le-meme",
    ],
    steps: [
      {
        label: "Même composition relative",
        caption: "La proportion d’oxygène reste à peu près la même aux deux altitudes illustrées.",
        detail:
          "À pression plus basse, un même volume contient moins de molécules. Les points symbolisent les molécules du mélange.",
      },
      {
        label: "Moins d’oxygène inspiré",
        caption: "La pression partielle d’oxygène diminue avec la pression atmosphérique.",
        detail:
          "À volume inspiré égal, la quantité d’oxygène est plus faible. Les effets sur l’organisme changent selon l’altitude et l’effort.",
      },
      {
        label: "Adaptation",
        caption: "Certaines réponses de l’organisme se mettent en place progressivement.",
        detail:
          "Le temps passé en altitude et les différences individuelles influencent l’adaptation. La planche ne fixe aucune règle d’exposition.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les formes sont simplifiées pour isoler le phénomène représenté.",
    source: {
      title: "CDC Yellow Book — Voyages en altitude",
      url: "https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html",
    },
  },
  {
    id: "detailSleepStart",
    canvasHeight: 270,
    title: "Situer une secousse à la transition vers le sommeil",
    paths: [
      "/corps-humain-et-sante/physiologie/sommeil/pourquoi-a-t-on-parfois-l-impression-de-tomber-juste-avant-de-s-endormir",
    ],
    steps: [
      {
        label: "Transition",
        caption: "L’endormissement constitue un passage progressif de l’éveil vers le sommeil.",
        detail:
          "Le tonus et l’activité changent pendant cette transition. Une secousse peut apparaître à ce moment sans être systématique.",
      },
      {
        label: "Secousse brève",
        caption: "Un mouvement soudain peut se produire au début du sommeil.",
        detail:
          "Il concerne parfois un membre ou une partie du corps. Le dessin n’attribue pas le mouvement à une cause unique.",
      },
      {
        label: "Sensation associée",
        caption: "Une impression de chute peut accompagner la secousse.",
        detail:
          "Plusieurs explications ont été avancées. L’ordre et la présence de la sensation peuvent varier d’une personne à l’autre.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les formes sont simplifiées pour isoler le phénomène représenté.",
    source: {
      title: "Chokroverty et al. — Secousses de l’endormissement observées",
      url: "https://pubmed.ncbi.nlm.nih.gov/23912581/",
    },
  },
  {
    id: "detailEarScreen",
    canvasHeight: 270,
    title: "Suivre le signal du dépistage auditif",
    paths: [
      "/corps-humain-et-sante/prevention-et-sante-publique/depistage/comment-verifie-t-on-qu-un-bebe-entend-bien-des-sa-naissance",
    ],
    steps: [
      {
        label: "Son envoyé",
        caption: "Une sonde produit un son bref dans le conduit auditif.",
        detail:
          "Le dessin montre le principe des otoémissions. Le dépistage auditif peut reposer sur d’autres mesures selon la situation clinique.",
      },
      {
        label: "Réponse de la cochlée",
        caption: "La mesure cherche une petite réponse qui revient de l’oreille interne.",
        detail:
          "Une réponse absente peut justifier une vérification complémentaire. Le résultat de dépistage ne suffit pas à établir un diagnostic.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les formes sont simplifiées pour isoler le phénomène représenté.",
    source: {
      title: "NIDCD — Dépistage de l’audition du nouveau-né",
      url: "https://www.nidcd.nih.gov/health/your-babys-hearing-screening-and-next-steps",
    },
  },
  {
    id: "detailListeningTube",
    canvasHeight: 270,
    title: "Comparer trois instruments d’auscultation",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/imagerie-medicale/comment-un-rouleau-de-papier-a-t-il-donne-naissance-au-stethoscope",
    ],
    steps: [
      {
        label: "Rouleau de papier",
        caption: "Un rouleau creux transmet des sons vers l’oreille à distance du corps.",
        detail:
          "Laennec a exploré ce principe avec un tube en papier. Le dessin montre une reconstitution de l’idée, sans reproduire un objet original.",
      },
      {
        label: "Tube en bois",
        caption: "Le tube rigide rend le principe plus durable.",
        detail:
          "Les formes historiques varient. Le stéthoscope monaural comportait un seul trajet d’écoute vers une oreille.",
      },
      {
        label: "Stéthoscope moderne",
        caption: "Le pavillon capte la vibration et les tubes la transmettent aux embouts.",
        detail:
          "Le trajet est dessiné en continu pour rendre visible le lien entre le pavillon et les deux oreilles.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les formes sont simplifiées pour isoler le phénomène représenté.",
    source: {
      title: "Science Museum Group — Laennec et le stéthoscope",
      url: "https://collection.sciencemuseumgroup.org.uk/people/cp37490",
    },
  },
  {
    id: "detailPhysicalExam",
    canvasHeight: 270,
    title: "Distinguer quatre observations au cours d’un examen",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/imagerie-medicale/examiner-patient-sans-machine",
    ],
    steps: [
      {
        label: "Échanger",
        caption: "La description de la personne donne un contexte à l’examen.",
        detail:
          "Un professionnel associe ce récit à d’autres informations. Le dessin n’associe pas de symptômes à un diagnostic.",
      },
      {
        label: "Observer",
        caption: "L’observation renseigne sur l’aspect et certains mouvements.",
        detail:
          "Les signes se lisent selon la situation et avec les autres observations. La planche représente la démarche, sans seuil clinique.",
      },
      {
        label: "Palper ou percuter",
        caption: "Le contact ou un tapotement apportent des informations différentes.",
        detail:
          "La palpation et la percussion ont des usages propres. Elles s’interprètent en fonction de la zone, de l’histoire et des autres signes.",
      },
      {
        label: "Écouter",
        caption: "L’auscultation donne accès à certains sons produits dans le corps.",
        detail:
          "Les sons peuvent ajouter un indice à l’examen. Leur interprétation dépend du contexte et de la formation du professionnel.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les formes sont simplifiées pour isoler le phénomène représenté.",
    source: {
      title: "Clinical Methods — The Physical Examination",
      url: "https://www.ncbi.nlm.nih.gov/sites/books/NBK361/",
    },
  },
  {
    id: "detailImagingSlice",
    canvasHeight: 270,
    title: "Comparer quatre façons de rendre visibles les tissus",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/imagerie-medicale/techniques-imagerie-medicale",
    ],
    steps: [
      {
        label: "Radiographie",
        caption: "Les rayons X traversent les tissus et donnent une projection.",
        detail:
          "La quantité de rayonnement reçue varie selon ce qu’il a traversé. Plusieurs structures peuvent se superposer sur l’image.",
      },
      {
        label: "Scanner",
        caption:
          "Le scanner combine des mesures prises autour du corps pour reconstruire des coupes.",
        detail:
          "La rotation et la reconstruction permettent de séparer des plans. Cette technique utilise des rayons X.",
      },
      {
        label: "Échographie",
        caption: "La sonde envoie des ultrasons et reçoit des échos.",
        detail:
          "Les interfaces de tissus renvoient une partie de l’onde. L’appareil transforme le temps de retour et les intensités en image.",
      },
      {
        label: "IRM",
        caption: "L’IRM utilise un champ magnétique et des impulsions radio pour former une image.",
        detail:
          "La mesure dépend de signaux émis dans certaines conditions physiques. L’IRM produit des contrastes différents de ceux des rayons X.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les formes sont simplifiées pour isoler le phénomène représenté.",
    source: {
      title: "NIBIB — Technologies d’imagerie",
      url: "https://www.nibib.nih.gov/science-education/science-topics",
    },
  },
  {
    id: "detailAbyssPressure",
    canvasHeight: 270,
    title: "Voir ce que la pression change pour un animal marin",
    paths: [
      "/sciences-fondamentales/biologie/evolution/comment-les-animaux-des-profondeurs-survivent-ils-a-une-pression-ecrasante",
    ],
    steps: [
      {
        label: "Pression extérieure",
        caption: "La pression exercée par l’eau augmente avec la profondeur.",
        detail:
          "Les flèches servent de repère. La pression d’un fluide s’exerce dans toutes les directions, pas seulement selon l’orientation du dessin.",
      },
      {
        label: "Tissus et cavités",
        caption: "Un corps riche en eau peut répondre autrement qu’une cavité pleine de gaz.",
        detail:
          "Les animaux des profondeurs n’ont pas tous la même anatomie. Certains ont des cavités ou des tissus adaptés à leur milieu.",
      },
      {
        label: "Molécules stabilisantes",
        caption: "Certaines molécules contribuent à stabiliser des protéines sous pression.",
        detail:
          "Des poissons étudiés contiennent davantage de certaines molécules aux plus grandes profondeurs. L’explication ne s’étend pas à tous les animaux.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les formes sont simplifiées pour isoler le phénomène représenté.",
    source: {
      title: "Yancey et al. — Poissons des grandes profondeurs",
      url: "https://www.pnas.org/doi/10.1073/pnas.1322003111",
    },
  },
  {
    id: "detailFifaCount",
    canvasHeight: 270,
    title: "Comprendre ce qu’un recensement de joueurs mesure",
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-collectifs/big-count-fifa-265-millions-de-joueurs",
    ],
    steps: [
      {
        label: "Recensement",
        caption: "Le terrain symbolise un ensemble de joueurs recensés.",
        detail:
          "Un recensement correspond à une date et à une méthode précises. Les points ne sont pas proportionnels aux effectifs.",
      },
      {
        label: "Périmètre",
        caption: "Le chiffre change selon les personnes incluses dans le comptage.",
        detail:
          "Joueurs inscrits, pratiquants occasionnels et personnes interrogées constituent des ensembles qui peuvent se chevaucher.",
      },
    ],
    limit: "Exemple de principe, sans mesure individuelle. Les tracés et positions sont fictifs.",
    source: {
      title: "FIFA — Big Count 2006, copie du rapport original",
      url: "https://condorperformance.com/wp-content/uploads/2020/02/emaga_9384_10704.pdf",
    },
  },
  {
    id: "detailCompareTrack",
    canvasHeight: 270,
    title: "Lire ce qui rend deux marques comparables",
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-individuels/records-donnees-reference-athletisme",
    ],
    steps: [
      {
        label: "Repère sur la piste",
        caption: "Une performance s’inscrit dans une épreuve et des conditions précises.",
        detail:
          "Le résultat ne devient un repère comparable qu’avec les règles de la discipline et le contexte de la mesure.",
      },
      {
        label: "Même épreuve",
        caption: "Comparer suppose de mesurer la même distance ou le même geste sportif.",
        detail:
          "La piste maintient un repère commun. Une modification des règles ou du système de chronométrage peut changer la comparaison.",
      },
      {
        label: "Conditions à comparer",
        caption: "Le vent, la surface ou le matériel peuvent modifier une performance.",
        detail:
          "Les conditions admissibles et les règles de validation dépendent de l’épreuve. Le dessin ne transpose aucune limite réglementaire.",
      },
    ],
    limit: "Exemple de principe, sans mesure individuelle. Les tracés et positions sont fictifs.",
    source: {
      title: "World Athletics — Règlements techniques",
      url: "https://worldathletics.org/about-iaaf/documents/book-of-rules",
    },
  },
  {
    id: "detailWarmupLoad",
    canvasHeight: 270,
    title: "Voir trois moments de la préparation au mouvement",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/blessures-et-prevention/a-quoi-sert-vraiment-l-echauffement-et-vaut-il-mieux-s-etirer-avant-l-effort",
    ],
    steps: [
      {
        label: "Au repos",
        caption: "Le muscle et les articulations partent d’un état avant l’effort.",
        detail:
          "La préparation dépend du type d’effort et de la situation. Le détail de la jambe sert à situer la zone sollicitée.",
      },
      {
        label: "Activation progressive",
        caption: "Une activité progressive modifie la circulation et la température des tissus.",
        detail:
          "L’augmentation des sollicitations peut préparer l’effort qui suit. La planche ne démontre aucun effet garanti sur les blessures.",
      },
      {
        label: "Geste spécifique",
        caption: "Reprendre un mouvement proche de l’épreuve prépare la coordination.",
        detail:
          "Amplitude, vitesse et précision dépendent de la discipline. La planche illustre un principe, sans proposer une routine individuelle.",
      },
    ],
    limit: "Exemple de principe, sans mesure individuelle. Les tracés et positions sont fictifs.",
    source: {
      title: "Fradkin et al. — Échauffement et performance physique",
      url: "https://pubmed.ncbi.nlm.nih.gov/19996770/",
    },
  },
  {
    id: "detailLoadRecovery",
    canvasHeight: 270,
    title: "Voir quand les sollicitations dépassent l’adaptation",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/blessures-et-prevention/blessures-et-charge-dentrainement",
    ],
    steps: [
      {
        label: "Sollicitations",
        caption: "La courbe dentelée représente une succession de charges.",
        detail:
          "Les pics illustrent des séances et des périodes de repos fictives. Les valeurs ne définissent pas une charge sûre.",
      },
      {
        label: "Adaptation",
        caption: "Certaines capacités progressent avec une dynamique plus lente.",
        detail:
          "Les tissus et les personnes ne réagissent pas tous à la même vitesse. Les deux courbes partagent un temps fictif pour illustrer le décalage.",
      },
      {
        label: "Décalage",
        caption:
          "Un écart entre les sollicitations et la capacité du moment peut augmenter le risque.",
        detail:
          "Le risque dépend aussi du contexte, de la récupération et des antécédents. Le graphique ne prédit pas une blessure.",
      },
    ],
    limit: "Exemple de principe, sans mesure individuelle. Les tracés et positions sont fictifs.",
    source: {
      title: "CIO — Charge sportive et risque de blessure",
      url: "https://bjsm.bmj.com/content/50/17/1030",
    },
  },
  {
    id: "detailFiberSoreness",
    canvasHeight: 270,
    title: "Placer le lactate et les courbatures sur des temps différents",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/energetique-musculaire/l-acide-lactique-est-il-vraiment-responsable-des-courbatures",
    ],
    steps: [
      {
        label: "Pendant l’effort",
        caption: "Le lactate est produit et réutilisé pendant l’activité musculaire.",
        detail:
          "Sa concentration évolue selon l’effort et le retour au repos. Le dessin ne suit pas une concentration mesurée.",
      },
      {
        label: "Après la sollicitation",
        caption: "Des courbatures peuvent apparaître en différé après un effort inhabituel.",
        detail:
          "Le tissu et la réponse à la sollicitation comptent. Les zébrures représentent ce contexte de manière stylisée.",
      },
      {
        label: "Deux moments",
        caption: "La chronologie du lactate et celle des courbatures sont différentes.",
        detail:
          "Ce décalage aide à comprendre pourquoi une présence momentanée de lactate n’explique pas la douleur différée.",
      },
    ],
    limit: "Exemple de principe, sans mesure individuelle. Les tracés et positions sont fictifs.",
    source: {
      title: "Schwane et al. — Lactate et courbatures différées",
      url: "https://pubmed.ncbi.nlm.nih.gov/27409551/",
    },
  },
  {
    id: "detailMuscleSpasm",
    canvasHeight: 270,
    title: "Comparer une fibre et une contraction involontaire",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/energetique-musculaire/pourquoi-une-crampe-surgit-elle-en-plein-effort-et-que-sait-on-vraiment-de-ses-causes",
    ],
    steps: [
      {
        label: "Tissu au repos",
        caption: "Le système nerveux module l’activation du muscle.",
        detail:
          "La fibre agrandie sert à isoler le rôle de la contraction. Les formes sont stylisées et ne représentent pas une coupe clinique.",
      },
      {
        label: "Contraction",
        caption: "Une crampe correspond à une contraction involontaire et douloureuse.",
        detail:
          "Le raccourcissement et la tension sont schématisés. Ils ne suffisent pas à déterminer ce qui a déclenché la crampe.",
      },
      {
        label: "Facteurs possibles",
        caption: "Fatigue locale et autres facteurs sont étudiés selon les situations.",
        detail:
          "Plusieurs mécanismes peuvent contribuer selon le contexte. Le dessin ne privilégie pas une conduite à tenir individuelle.",
      },
    ],
    limit: "Exemple de principe, sans mesure individuelle. Les tracés et positions sont fictifs.",
    source: {
      title: "Schwellnus et al. — Étude des crampes en endurance",
      url: "https://pubmed.ncbi.nlm.nih.gov/21148567/",
    },
  },
  {
    id: "detailMealRecovery",
    canvasHeight: 270,
    title: "Suivre les réserves musculaires autour de l’effort",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/entrainement/faut-il-manger-tout-de-suite-apres-l-entrainement-pour-mieux-progresser",
    ],
    steps: [
      {
        label: "Réserves mobilisées",
        caption: "L’effort utilise une partie des réserves énergétiques du muscle.",
        detail:
          "La part du glycogène dépend de l’intensité, de la durée et d’autres sources d’énergie utilisées pendant l’effort.",
      },
      {
        label: "Reconstitution",
        caption: "L’organisme peut reconstituer des réserves après l’effort.",
        detail:
          "Les apports contribuent aux processus de récupération, qui poursuivent des rythmes différents. Le dessin ne fixe aucun délai universel.",
      },
      {
        label: "Repas répartis",
        caption: "Les apports se lisent à l’échelle de plusieurs repas et de plusieurs séances.",
        detail:
          "La quantité totale et le contexte comptent. Rapprocher deux séances peut changer l’importance du moment des apports.",
      },
    ],
    limit: "Exemple de principe, sans mesure individuelle. Les tracés et positions sont fictifs.",
    source: {
      title: "Ivy et al. — Reconstitution du glycogène après effort",
      url: "https://pubmed.ncbi.nlm.nih.gov/3132449/",
    },
  },
  {
    id: "detailRedCellAltitude",
    canvasHeight: 270,
    title: "Suivre une réponse du sang à l’altitude",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/entrainement/les-champions-d-endurance-s-entrainent-en-montagne-pourquoi-leur-sang-produit-il-plus-de-globules-rouges",
    ],
    steps: [
      {
        label: "Oxygène disponible",
        caption: "La baisse de pression réduit l’oxygène disponible à volume égal.",
        detail:
          "Cette baisse modifie les conditions dans lesquelles l’organisme se fournit en oxygène. La coupe n’indique aucune altitude cible.",
      },
      {
        label: "Signal du rein",
        caption: "Le rein participe à la détection d’une disponibilité réduite en oxygène.",
        detail:
          "La réponse varie dans le temps. D’autres réactions physiologiques se produisent en parallèle et le dessin isole une voie.",
      },
      {
        label: "Moelle osseuse",
        caption: "L’érythropoïétine stimule la production de cellules sanguines dans la moelle.",
        detail:
          "Le signal fait partie d’une régulation physiologique. Le dessin n’indique aucun protocole d’entraînement ni de performance attendue.",
      },
      {
        label: "Globules rouges",
        caption: "La masse de globules rouges peut augmenter selon les conditions d’exposition.",
        detail:
          "L’adaptation varie selon les personnes et le contexte. La concentration mesurée du sang peut aussi changer avec le volume plasmatique.",
      },
    ],
    limit: "Exemple de principe, sans mesure individuelle. Les tracés et positions sont fictifs.",
    source: {
      title: "Étude sur la réponse de l’érythropoïétine à l’hypoxie",
      url: "https://pubmed.ncbi.nlm.nih.gov/12015348/",
    },
  },
  {
    id: "detailPulseTiming",
    canvasHeight: 270,
    title: "Mesurer les écarts entre les battements",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/entrainement/que-mesure-vraiment-la-variabilite-cardiaque-ce-chiffre-qui-promet-de-dire-si-vous-etes-recupere",
    ],
    steps: [
      {
        label: "Signal cardiaque",
        caption: "Une trace fictive matérialise des battements successifs.",
        detail:
          "La fréquence moyenne résume un rythme sur une période. Elle ne contient pas tout le détail de chaque intervalle.",
      },
      {
        label: "Intervalles",
        caption: "Les distances entre les pics représentent les temps entre battements.",
        detail:
          "La variabilité se calcule sur des intervalles. Deux séquences proches en fréquence moyenne peuvent différer par leurs intervalles.",
      },
      {
        label: "Perturbation",
        caption: "Un artefact peut modifier les intervalles détectés.",
        detail:
          "Le capteur, le mouvement et les conditions de mesure influencent le résultat. Un indice isolé ne suffit pas à caractériser une récupération.",
      },
    ],
    limit: "Exemple de principe, sans mesure individuelle. Les tracés et positions sont fictifs.",
    source: {
      title: "Task Force ESC et NASPE — Mesurer la variabilité cardiaque",
      url: "https://pubmed.ncbi.nlm.nih.gov/8598068/",
    },
  },
  {
    id: "detailLiftingMoment",
    canvasHeight: 270,
    title: "Comparer l’effet de la distance d’une charge",
    paths: [
      "/sport-et-sciences-du-mouvement/sport-et-societe/activite-physique-et-sante/porter-soulever-sans-blesser",
    ],
    steps: [
      {
        label: "Charge éloignée",
        caption: "Une même force peut produire un moment plus grand si elle agit plus loin.",
        detail:
          "La distance de la charge à l’axe choisi influe sur le moment. La silhouette montre un principe mécanique, sans déterminer les forces internes.",
      },
      {
        label: "Charge rapprochée",
        caption: "Réduire cette distance réduit le moment associé, à force égale.",
        detail:
          "Le dessin compare la même caisse dans deux positions fictives. Les autres efforts dépendent de la prise, du mouvement et des appuis.",
      },
      {
        label: "Contexte de manutention",
        caption: "La distance est un facteur parmi les caractéristiques de la tâche.",
        detail:
          "Le poids, la fréquence et l’environnement modifient les sollicitations. La planche ne prescrit pas de geste valable dans toutes les situations.",
      },
    ],
    limit: "Exemple de principe, sans mesure individuelle. Les tracés et positions sont fictifs.",
    source: {
      title: "NIOSH — Paramètres de la manutention",
      url: "https://www.cdc.gov/niosh/ergonomics/about/rnle.html",
    },
  },
  {
    id: "detailInformationSample",
    canvasHeight: 270,
    title: "Séparer ce qui est compté de ce qui circule",
    paths: [
      "/communication-et-medias/information-et-verification/desinformation/ampleur-desinformation-en-ligne",
    ],
    steps: [
      {
        label: "Choisir un échantillon",
        caption: "Les résultats d’une étude dépendent des messages retenus.",
        detail:
          "Une mesure s’interprète avec sa période, ses plateformes et ses règles de sélection. Les journaux symbolisent des contenus fictifs.",
      },
      {
        label: "Vérifier un contenu",
        caption: "Vérifier suppose de distinguer affirmation, sources et contexte.",
        detail:
          "L’intention de tromper ne se déduit pas de l’erreur seule. Les catégories reposent sur des définitions et sur des éléments de preuve.",
      },
      {
        label: "Mesurer la diffusion",
        caption:
          "Compter des messages et mesurer leur exposition donnent des résultats différents.",
        detail:
          "Un petit nombre de contenus peut être vu plusieurs fois. Les impressions ne garantissent pas la lecture ni l’adhésion.",
      },
    ],
    limit: "Objets et documents redessinés pour illustrer le principe. La scène est fictive.",
    source: {
      title: "UNESCO — Travaux sur la désinformation",
      url: "https://www.unesco.org/en/countering-disinformation",
    },
  },
  {
    id: "detailSyntheticProvenance",
    canvasHeight: 270,
    title: "Distinguer ce que montre une image de sa provenance",
    paths: [
      "/communication-et-medias/information-et-verification/desinformation/contenus-synthetiques-et-hypertrucages",
    ],
    steps: [
      {
        label: "Apparence",
        caption: "Deux images peuvent se ressembler et avoir des origines différentes.",
        detail:
          "La planche utilise des paysages inventés. Le seul aspect d’une image ne permet pas de confirmer son authenticité.",
      },
      {
        label: "Contexte",
        caption: "Les éléments vérifiables autour de l’image aident à l’interpréter.",
        detail:
          "La date, la première publication et la source sont des indices distincts. Un résultat visuel étrange ne prouve pas une fabrication.",
      },
      {
        label: "Provenance",
        caption: "Un historique attaché à un fichier peut documenter certaines transformations.",
        detail:
          "La provenance peut indiquer des actions déclarées. Elle ne confirme pas à elle seule que la scène ou son interprétation est vraie.",
      },
    ],
    limit: "Objets et documents redessinés pour illustrer le principe. La scène est fictive.",
    source: {
      title: "C2PA — Questions sur les informations de provenance",
      url: "https://c2pa.org/faqs/",
    },
  },
  {
    id: "detailNewsAvoidance",
    canvasHeight: 270,
    title: "Observer plusieurs manières de limiter les nouvelles",
    paths: [
      "/communication-et-medias/information-et-verification/education-aux-medias/pourquoi-certaines-personnes-evitent-elles-les-actualites",
    ],
    steps: [
      {
        label: "Flux répété",
        caption: "Un flux continu expose à des nouvelles et à des sujets répétés.",
        detail:
          "Le contenu du flux dépend des choix éditoriaux et des usages. Les motifs d’évitement varient selon les personnes.",
      },
      {
        label: "Pause dans le flux",
        caption: "Une personne peut éviter certaines nouvelles à certains moments.",
        detail:
          "Les enquêtes distinguent différents degrés d’évitement. La situation individuelle ne se déduit pas des statistiques globales.",
      },
      {
        label: "Sélection",
        caption: "On peut écarter un sujet tout en continuant à s’informer sur d’autres.",
        detail:
          "La fréquence et le périmètre de l’évitement changent la manière dont un questionnaire mesure ce comportement.",
      },
    ],
    limit: "Objets et documents redessinés pour illustrer le principe. La scène est fictive.",
    source: {
      title: "Reuters Institute — Digital News Report 2025",
      url: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/dnr-executive-summary",
    },
  },
  {
    id: "detailFeedRanking",
    canvasHeight: 270,
    title: "Comparer deux ordres d’affichage dans un même fil",
    paths: [
      "/communication-et-medias/medias-numeriques/reseaux-sociaux/economie-de-lattention-et-fils-algorithmiques",
    ],
    steps: [
      {
        label: "Ordre chronologique",
        caption: "Le premier ordre présente les éléments suivant leur date.",
        detail:
          "Le dessin conserve les mêmes contenus dans les deux colonnes. La position et le contenu du message sont deux données distinctes.",
      },
      {
        label: "Ordre classé",
        caption: "Un classement peut modifier l’ordre des mêmes éléments.",
        detail:
          "Les systèmes utilisent des signaux différents. Le dessin représente un réordonnancement fictif et non les règles d’une plateforme réelle.",
      },
      {
        label: "Signaux d’attention",
        caption: "Le système peut observer des signaux d’usage et les réutiliser.",
        detail:
          "Certaines prédictions servent à classer un fil. Regarder longtemps un contenu ne suffit pas à établir qu’il est fiable ou apprécié.",
      },
    ],
    limit: "Objets et documents redessinés pour illustrer le principe. La scène est fictive.",
    source: {
      title: "Commission européenne — Règlement sur les services numériques",
      url: "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package",
    },
  },
  {
    id: "detailAccountCounts",
    canvasHeight: 270,
    title: "Relier plusieurs comptes à une seule personne",
    paths: [
      "/communication-et-medias/medias-numeriques/reseaux-sociaux/utilisateurs-reseaux-sociaux-monde",
    ],
    steps: [
      {
        label: "Identités observées",
        caption: "Un décompte peut porter sur des comptes ou des identités d’usage.",
        detail:
          "Les sources et méthodes diffèrent selon les services. Le dessin emploie trois terminaux fictifs sans extrapolation mondiale.",
      },
      {
        label: "Comptes multiples",
        caption: "Une personne peut posséder plusieurs comptes, parfois sur le même service.",
        detail:
          "Des usages professionnels et personnels peuvent se recouper. Additionner les comptes ne permet donc pas de déduire le nombre de personnes.",
      },
    ],
    limit: "Objets et documents redessinés pour illustrer le principe. La scène est fictive.",
    source: {
      title: "DataReportal — Digital 2026 Global Overview",
      url: "https://datareportal.com/reports/digital-2026-global-overview-report",
    },
  },
  {
    id: "detailCivilCode",
    canvasHeight: 270,
    title: "Voir comment un texte civil commun s’est constitué",
    paths: ["/droit-et-justice/droit-prive/droit-civil/code-civil-des-francais-1804"],
    steps: [
      {
        label: "Règles dispersées",
        caption: "Des usages et des textes différents coexistaient avant la codification.",
        detail:
          "La situation dépendait des territoires et des domaines du droit. Les feuilles représentent cette diversité de manière symbolique.",
      },
      {
        label: "Code commun",
        caption: "La codification rassemble des règles civiles dans un texte commun.",
        detail:
          "Le Code traite notamment des personnes, des biens et de certaines relations privées. Le dessin ne reproduit aucune page historique.",
      },
      {
        label: "Texte révisé",
        caption: "Les règles ont évolué depuis la promulgation du Code.",
        detail:
          "Des articles ont été modifiés, complétés ou supprimés. Une consultation actuelle doit distinguer le texte historique et le droit en vigueur.",
      },
    ],
    limit: "Objets et documents redessinés pour illustrer le principe. La scène est fictive.",
    source: {
      title: "Légifrance — Code civil",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070721/",
    },
  },
  {
    id: "detailParcelTitle",
    canvasHeight: 270,
    title: "Distinguer une carte cadastrale et un titre",
    paths: ["/droit-et-justice/droit-prive/droit-civil/propriete-cadastre"],
    steps: [
      {
        label: "Carte des parcelles",
        caption: "Le plan cadastral représente des parcelles et leur disposition.",
        detail:
          "Le dessin situe une parcelle parmi d’autres. La carte ne suffit pas à fixer une limite de propriété en cas de litige.",
      },
      {
        label: "Titre de propriété",
        caption: "Un titre et le plan cadastral jouent des rôles différents.",
        detail:
          "L’identification fiscale ou géographique et la preuve de propriété demandent des documents distincts. La scène est fictive.",
      },
    ],
    limit: "Objets et documents redessinés pour illustrer le principe. La scène est fictive.",
    source: {
      title: "Service Public — Consulter le cadastre",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F14226",
    },
  },
  {
    id: "detailInventionRights",
    canvasHeight: 270,
    title: "Associer trois protections à leur objet",
    paths: [
      "/droit-et-justice/droit-prive/droit-civil/qu-est-ce-qui-distingue-le-droit-d-auteur-le-brevet-et-la-marque",
    ],
    steps: [
      {
        label: "Protéger une œuvre",
        caption: "Le droit d’auteur concerne des œuvres répondant aux conditions applicables.",
        detail:
          "L’objet de la protection se distingue de l’idée seule. La planche compare des notions, sans traiter un dossier particulier.",
      },
      {
        label: "Protéger une invention",
        caption: "Un brevet porte sur une invention dans le cadre d’un titre et de revendications.",
        detail:
          "Les conditions et la portée dépendent du régime applicable. Le dessin représente une pièce fictive et ne présume pas sa brevetabilité.",
      },
      {
        label: "Identifier par un signe",
        caption: "Une marque sert à distinguer des produits ou des services.",
        detail:
          "Une même création peut impliquer plusieurs protections. Le signe illustré ne représente aucune marque commerciale réelle.",
      },
    ],
    limit: "Objets et documents redessinés pour illustrer le principe. La scène est fictive.",
    source: {
      title: "OMPI — Qu’est-ce que la propriété intellectuelle ?",
      url: "https://www.wipo.int/fr/web/about-ip",
    },
  },
  {
    id: "detailSurveyBaseline",
    canvasHeight: 270,
    title: "Déduire une distance avec une base et deux visées",
    paths: ["/sciences-fondamentales/mathematiques/geometrie/arpenter-mesurer-terrain"],
    steps: [
      {
        label: "Base connue",
        caption: "La longueur du segment de départ est mesurée.",
        detail:
          "Cette longueur fixe l’échelle du triangle. Les points et le terrain sont fictifs, avec une perspective simplifiée.",
      },
      {
        label: "Deux visées",
        caption: "Deux directions vers un même point déterminent sa position relative.",
        detail:
          "On mesure les angles depuis les extrémités de la base. La qualité de la géométrie influence la précision du résultat.",
      },
      {
        label: "Distance déduite",
        caption: "Les côtés du triangle permettent de déduire une distance non parcourue.",
        detail:
          "Le calcul suppose des mesures cohérentes et un modèle adapté au terrain. Le trait pointillé matérialise une distance possible.",
      },
    ],
    limit: "Objets et documents redessinés pour illustrer le principe. La scène est fictive.",
    source: {
      title: "NOAA — Triangulation géodésique",
      url: "https://oceanservice.noaa.gov/facts/geodetic-survey.html",
    },
  },
  {
    id: "detailKagomeWeave",
    canvasHeight: 270,
    title: "Passer d’un tressage à un réseau géométrique",
    paths: [
      "/sciences-fondamentales/physique/electromagnetisme/pourquoi-un-motif-de-vannerie-japonaise-intrigue-t-il-les-physiciens-des-supraconducteurs",
    ],
    steps: [
      {
        label: "Tressage",
        caption: "Des bandes se croisent selon plusieurs directions.",
        detail:
          "Le motif aide à visualiser des espaces triangulaires et hexagonaux. Le dessin évoque une vannerie sans reproduire une pièce particulière.",
      },
      {
        label: "Réseau",
        caption: "Le réseau kagome contient des triangles qui se touchent par leurs sommets.",
        detail:
          "Les hexagones complètent le motif. On peut séparer visuellement les sites du réseau des fibres physiques de la vannerie.",
      },
      {
        label: "Sites du matériau",
        caption: "L’agencement des sites influence certains comportements électroniques.",
        detail:
          "Un matériau réel ajoute d’autres effets à la géométrie. Le motif ne permet pas de déduire à lui seul un état supraconducteur.",
      },
    ],
    limit: "Objets et documents redessinés pour illustrer le principe. La scène est fictive.",
    source: {
      title: "OSTI — Réseau kagome et matériau supraconducteur",
      url: "https://www.osti.gov/pages/biblio/1894711",
    },
  },
  {
    id: "detailNormReview",
    canvasHeight: 270,
    title: "Lire un contrôle par rapport à une règle supérieure",
    paths: [
      "/droit-et-justice/droit-public/droit-constitutionnel/pourquoi-une-loi-ne-peut-elle-pas-contredire-la-constitution",
    ],
    steps: [
      {
        label: "Règle supérieure",
        caption: "La Constitution et les normes de référence encadrent la loi.",
        detail:
          "La planche simplifie une partie de la hiérarchie. Les rapports entre certaines normes dépendent de la procédure et du contexte.",
      },
      {
        label: "Place des traités",
        caption: "Les traités, la Constitution et les lois se comparent dans des cadres distincts.",
        detail:
          "Le contrôle de constitutionnalité et le contrôle de compatibilité avec un traité n’examinent pas la même question.",
      },
      {
        label: "Contrôle d’un texte",
        caption: "Un texte peut être examiné au regard des normes qui s’imposent à lui.",
        detail:
          "En France, les effets et les autorités compétentes dépendent de la voie de contrôle. Le dessin présente un principe général.",
      },
    ],
    limit: "Schéma de principe. Les vues isolent la relation ou le phénomène décrit.",
    source: {
      title: "Conseil constitutionnel — Question prioritaire de constitutionnalité",
      url: "https://qpc360.conseil-constitutionnel.fr/decisions/la-qpc",
    },
  },
  {
    id: "detailSeparateInstitutions",
    canvasHeight: 270,
    title: "Distinguer trois fonctions publiques",
    paths: ["/droit-et-justice/droit-public/droit-constitutionnel/separation-des-pouvoirs"],
    steps: [
      {
        label: "Délibérer et voter",
        caption: "La fonction législative élabore et vote la loi suivant les procédures prévues.",
        detail:
          "Plusieurs organes peuvent contribuer au parcours d’un texte. Le dessin indique la fonction centrale sans résumer tout le processus.",
      },
      {
        label: "Exécuter",
        caption:
          "La fonction exécutive met en œuvre les politiques et les règles suivant ses compétences.",
        detail:
          "Des contrôles et des responsabilités s’appliquent à l’action des institutions. Les relations varient selon le système politique.",
      },
      {
        label: "Juger",
        caption: "La fonction juridictionnelle tranche des litiges dans un cadre défini.",
        detail:
          "L’indépendance des juridictions contribue à la séparation des pouvoirs. Le dessin simplifie des institutions et des relations plus nombreuses.",
      },
    ],
    limit: "Schéma de principe. Les vues isolent la relation ou le phénomène décrit.",
    source: {
      title: "Légifrance — Constitution du 4 octobre 1958",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000571356/",
    },
  },
  {
    id: "detailCourtroomRoles",
    canvasHeight: 270,
    title: "Situer quatre rôles lors d’une audience pénale",
    paths: ["/droit-et-justice/justice-et-institutions/metiers-du-droit/metiers-de-la-justice"],
    steps: [
      {
        label: "Accusation publique",
        caption: "Le procureur intervient au nom du ministère public.",
        detail:
          "Son rôle dépend de la procédure. La salle représentée situe des fonctions, sans reproduire le placement d’une juridiction précise.",
      },
      {
        label: "Décision",
        caption: "Le juge conduit l’examen et tranche selon les règles de la procédure.",
        detail:
          "La décision repose sur les éléments examinés et sur le droit applicable. La composition de la formation varie selon l’affaire.",
      },
      {
        label: "Défense",
        caption: "L’avocat assiste ou représente la partie qu’il défend selon le cas.",
        detail:
          "Les parties et leurs représentants interviennent à des moments définis. Il faut distinguer la défense du rôle du juge.",
      },
      {
        label: "Greffe",
        caption: "Le greffe contribue au suivi de la procédure et à la tenue des actes.",
        detail:
          "Les fonctions concrètes dépendent de la juridiction et de la procédure. Le dessin montre la place du dossier dans l’audience.",
      },
    ],
    limit: "Schéma de principe. Les vues isolent la relation ou le phénomène décrit.",
    source: {
      title: "Ministère de la Justice — Acteurs de la justice",
      url: "https://www.justice.gouv.fr/justice-france/acteurs-justice",
    },
  },
  {
    id: "detailPayslipFlow",
    canvasHeight: 270,
    title: "Suivre quatre montants sur un bulletin fictif",
    paths: [
      "/droit-et-justice/vie-quotidienne-et-droit/droit-du-travail/le-bulletin-de-salaire-comment-le-lire",
    ],
    steps: [
      {
        label: "Montant brut",
        caption: "Le brut comprend la rémunération avant certaines retenues.",
        detail:
          "Le salaire de base et des éléments variables peuvent y contribuer. Le document représenté ne contient aucun montant réel.",
      },
      {
        label: "Cotisations",
        caption:
          "Des prélèvements et contributions modifient le passage du brut aux montants nets.",
        detail:
          "Les lignes et les bases peuvent dépendre de la situation de travail. Le dessin distingue des postes sans donner de règle de calcul.",
      },
      {
        label: "Net avant impôt",
        caption: "Le bulletin distingue le net avant impôt d’autres montants de référence.",
        detail:
          "Le net imposable et le net social répondent à des définitions spécifiques. Ils ne se lisent pas comme des libellés interchangeables.",
      },
      {
        label: "Somme versée",
        caption: "Le net à payer rend compte de la somme versée après les retenues applicables.",
        detail:
          "Le prélèvement à la source peut changer cette somme. Le document réel doit être lu ligne par ligne selon la situation.",
      },
    ],
    limit: "Schéma de principe. Les vues isolent la relation ou le phénomène décrit.",
    source: {
      title: "Service Public — Fiche de paie",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F559",
    },
  },
  {
    id: "detailFreeFallGrid",
    canvasHeight: 270,
    title: "Comparer deux descriptions d’une trajectoire en chute libre",
    paths: [
      "/sciences-fondamentales/physique/mecanique/pourquoi-les-objets-tombent-ils-si-la-gravite-n-est-pas-une-force-pour-einstein",
    ],
    steps: [
      {
        label: "Attraction",
        caption: "Dans la description newtonienne, une force gravitationnelle accélère l’objet.",
        detail:
          "Le modèle décrit de nombreuses situations courantes avec précision. Le quadrillage pose un repère pour comparer les descriptions.",
      },
      {
        label: "Espace-temps courbe",
        caption:
          "En relativité générale, une chute libre suit une trajectoire dans un espace-temps courbe.",
        detail:
          "Le quadrillage est une analogie et ne montre ni toutes les dimensions ni un tissu matériel sous l’objet.",
      },
      {
        label: "Orbite",
        caption:
          "Un objet en orbite est en chute libre tant qu’aucune poussée ne modifie son mouvement.",
        detail:
          "Sa vitesse lui permet de continuer autour de l’astre. L’ellipse est qualitative et ne représente pas un calcul d’orbite.",
      },
    ],
    limit: "Schéma de principe. Les vues isolent la relation ou le phénomène décrit.",
    source: {
      title: "NASA — Questions sur la relativité",
      url: "https://imagine.gsfc.nasa.gov/ask_astro/relativity.html",
    },
  },
  {
    id: "detailInteractionsScale",
    canvasHeight: 270,
    title: "Comparer quatre interactions sur des exemples",
    paths: [
      "/sciences-fondamentales/physique/mecanique/quelles-sont-les-quatre-forces-qui-gouvernent-tout-l-univers",
    ],
    steps: [
      {
        label: "Gravitation",
        caption: "La gravitation contribue au mouvement des astres.",
        detail:
          "La théorie utilisée pour décrire le mouvement dépend de l’échelle et de la précision recherchée. Ce dessin prend un exemple astronomique.",
      },
      {
        label: "Électromagnétisme",
        caption: "Des charges électriques interagissent par l’électromagnétisme.",
        detail:
          "Les forces peuvent être attractives ou répulsives selon les charges. Le dessin choisit un exemple de charges opposées.",
      },
      {
        label: "Interaction forte",
        caption:
          "L’interaction forte lie les quarks et intervient aussi dans la cohésion des noyaux.",
        detail:
          "À l’échelle nucléaire, la force entre nucléons résulte de l’interaction forte. Les sphères représentent un noyau fictif.",
      },
      {
        label: "Interaction faible",
        caption: "L’interaction faible intervient dans certaines transformations de particules.",
        detail:
          "La désintégration bêta fournit un exemple. Le dessin symbolise une émission, sans détailler la réaction ni identifier tous ses produits.",
      },
    ],
    limit: "Schéma de principe. Les vues isolent la relation ou le phénomène décrit.",
    source: {
      title: "CERN — Le Modèle standard",
      url: "https://home.cern/science/physics/standard-model",
    },
  },
  {
    id: "detailLogicalQubit",
    canvasHeight: 270,
    title: "Comprendre pourquoi un qubit logique mobilise plusieurs éléments",
    paths: [
      "/sciences-fondamentales/physique/physique-quantique/correction-derreurs-quantiques-willow",
    ],
    steps: [
      {
        label: "Encodage",
        caption: "L’information logique est répartie entre plusieurs qubits physiques.",
        detail:
          "Le réseau représente un principe de codage. Il ne présente ni la disposition ni le protocole d’un processeur particulier.",
      },
      {
        label: "Indices",
        caption: "Des mesures appropriées peuvent apporter des indices d’erreur.",
        detail:
          "Elles portent sur des relations entre éléments. L’idée est d’obtenir de l’information sur les erreurs sans lire directement la valeur logique.",
      },
      {
        label: "Niveau logique",
        caption: "Le groupe d’éléments peut être traité comme une unité logique.",
        detail:
          "La baisse effective du taux d’erreur dépend du matériel et du code. Un groupe plus grand n’améliore pas tous les systèmes dans toutes les conditions.",
      },
    ],
    limit: "Schéma de principe. Les vues isolent la relation ou le phénomène décrit.",
    source: {
      title: "Google Quantum AI — Suppression des erreurs d’un qubit logique",
      url: "https://research.google/blog/suppressing-quantum-errors-by-scaling-a-surface-code-logical-qubit/",
    },
  },
  {
    id: "detailGeologicalOre",
    canvasHeight: 270,
    title: "Lire un indice géologique puis un échantillon",
    paths: ["/sciences-fondamentales/sciences-de-la-terre/geologie/trouver-minerais"],
    steps: [
      {
        label: "Signes sur le terrain",
        caption: "Les fractures et les contrastes de roche orientent une observation géologique.",
        detail:
          "Un signe n’établit ni la présence ni l’importance d’un gisement. La coupe représente des structures fictives.",
      },
      {
        label: "Échantillon",
        caption: "Un échantillon apporte des informations à une autre échelle.",
        detail:
          "Une identification dépend de l’analyse et du contexte. La taille et la composition d’un gisement appellent des observations plus larges.",
      },
    ],
    limit: "Schéma de principe. Les vues isolent la relation ou le phénomène décrit.",
    source: {
      title: "USGS — Programme des ressources minérales",
      url: "https://www.usgs.gov/programs/mineral-resources-program",
    },
  },
  {
    id: "detailNalediLayers",
    canvasHeight: 270,
    title: "Séparer les vestiges de leur interprétation",
    paths: ["/sciences-humaines-et-sociales/histoire/prehistoire/homo-naledi-species-debattue"],
    steps: [
      {
        label: "Contexte",
        caption: "La grotte et ses dépôts donnent un cadre aux découvertes.",
        detail:
          "Les spécialistes décrivent le lieu, les dépôts et les vestiges. La coupe est fictive et ne reproduit pas le site de Rising Star.",
      },
      {
        label: "Position",
        caption: "La place des os apporte des informations sur ce qui a pu se passer.",
        detail:
          "Le déplacement de sédiments et d’autres processus peuvent changer cette position. Des détails de terrain permettent de comparer des scénarios.",
      },
      {
        label: "Hypothèses",
        caption: "Les mêmes vestiges peuvent susciter plusieurs interprétations concurrentes.",
        detail:
          "Tester ces hypothèses demande des observations et des arguments indépendants. La planche ne tranche pas le débat sur les comportements d’Homo naledi.",
      },
    ],
    limit: "Schéma de principe. Les vues isolent la relation ou le phénomène décrit.",
    source: {
      title: "Smithsonian — Homo naledi",
      url: "https://humanorigins.si.edu/evidence/human-fossils/species/homo-naledi",
    },
  },
  {
    id: "detailChippedStone",
    canvasHeight: 270,
    title: "Observer la forme de plusieurs outillages préhistoriques",
    paths: ["/sciences-humaines-et-sociales/histoire/prehistoire/outils-pierre"],
    steps: [
      {
        label: "Galet",
        caption: "La matière et la forme initiale laissent des traces sur un objet en pierre.",
        detail:
          "Certaines surfaces conservent une partie du galet d’origine. La planche montre des formes générales de collection.",
      },
      {
        label: "Facettes",
        caption: "Des enlèvements successifs peuvent laisser des facettes reconnaissables.",
        detail:
          "L’orientation et la forme des traces aident à décrire l’objet. La vue ne donne aucune procédure de fabrication.",
      },
      {
        label: "Géométrie",
        caption: "Des traditions différentes produisent des bords et des profils variés.",
        detail:
          "Les formes ne constituent pas une progression uniforme. Leur lecture prend en compte le site, les usages possibles et la matière.",
      },
    ],
    limit: "Schéma de principe. Les vues isolent la relation ou le phénomène décrit.",
    source: {
      title: "Smithsonian — Outils de l’âge de pierre",
      url: "https://humanorigins.si.edu/evidence/behavior/stone-tools",
    },
  },
] satisfies LessonDiagramSpec[];
