import type { LessonDiagramSpec } from "./registry";

/** Planches illustrées pour les leçons réservées du 24 novembre 2026. */
export const EDITION_LESSON_DIAGRAMS = [
  {
    id: "editionLipidRoutes",
    canvasHeight: 270,
    title: "Les trajets du cholestérol",
    paths: ["/alimentation-et-nutrition/nutriments/macronutriments/cholesterol-ami-ou-ennemi"],
    steps: [
      {
        label: "Transport par LDL",
        caption: "Des particules LDL transportent du cholestérol dans le sang.",
        detail:
          "Le cholestérol voyage dans des lipoprotéines. La première flèche représente sa livraison à des cellules.",
      },
      {
        label: "Retour par HDL",
        caption:
          "Les particules HDL participent au retour d’une partie du cholestérol vers le foie.",
        detail:
          "Le retour est représenté en sens inverse. Les particules HDL et LDL transportent la même molécule de cholestérol.",
      },
      {
        label: "Dans l’artère",
        caption: "Une plaque peut se former dans la paroi d’une artère.",
        detail:
          "Le relief ocre représente une plaque dans la paroi, dont la formation fait intervenir des lipides et une réponse inflammatoire.",
      },
    ],
    limit:
      "Coupe ou assiette de principe, hors échelle. Les couleurs et quantités ne décrivent aucun apport individuel.",
    source: {
      title: "NHLBI — Le cholestérol sanguin",
      url: "https://www.nhlbi.nih.gov/health/blood-cholesterol",
    },
  },
  {
    id: "editionFibreColon",
    canvasHeight: 270,
    title: "Microbes et fibres dans le côlon",
    paths: [
      "/alimentation-et-nutrition/nutriments/microbiote-et-probiotiques/probiotiques-et-prebiotiques",
    ],
    steps: [
      {
        label: "Prébiotique",
        caption: "Certains microbes utilisent un substrat qui peut avoir un effet bénéfique.",
        detail:
          "Les grains figurent un substrat utilisé par certains microbes déjà présents. Toutes les fibres ne répondent pas à la définition de prébiotique.",
      },
      {
        label: "Probiotique",
        caption:
          "Un probiotique contient des micro-organismes vivants dont un bénéfice a été démontré dans certaines conditions.",
        detail:
          "Le flacon figure un apport de microbes vivants. Le bénéfice dépend notamment de la souche et de l’usage étudiés.",
      },
      {
        label: "Comparer les deux",
        caption:
          "Un prébiotique fournit un substrat et un probiotique apporte des micro-organismes.",
        detail:
          "Les deux flèches ont des points de départ différents. La coupe montre ce qui entre dans le côlon sans promettre un effet identique pour tous.",
      },
    ],
    limit:
      "Coupe ou assiette de principe, hors échelle. Les couleurs et quantités ne décrivent aucun apport individuel.",
    source: {
      title: "NCCIH — Probiotiques et prébiotiques",
      url: "https://www.nccih.nih.gov/health/probiotics-usefulness-and-safety",
    },
  },
  {
    id: "editionIronCarrier",
    canvasHeight: 270,
    title: "Des réserves au transport d’oxygène",
    paths: ["/alimentation-et-nutrition/nutriments/micronutriments/carence-en-fer-dans-le-monde"],
    steps: [
      {
        label: "Réserves",
        caption: "Une partie du fer du corps est mise en réserve.",
        detail:
          "Les pastilles ocres symbolisent du fer stocké, notamment sous forme de ferritine. Elles sont dessinées à part pour distinguer réserve et circulation.",
      },
      {
        label: "Transport",
        caption: "L’hémoglobine des globules rouges contient du fer et fixe l’oxygène.",
        detail:
          "Les points bleus représentent l’oxygène associé aux globules rouges. C’est l’hémoglobine qui le fixe et le transporte dans le sang.",
      },
      {
        label: "Réserves en baisse",
        caption: "Les réserves peuvent diminuer avant que le transport d’oxygène soit atteint.",
        detail:
          "La flèche figure une disponibilité en fer qui baisse. Une carence et une anémie décrivent deux situations que des examens aident à distinguer.",
      },
    ],
    limit:
      "Coupe ou assiette de principe, hors échelle. Les couleurs et quantités ne décrivent aucun apport individuel.",
    source: {
      title: "NIH — Le rôle du fer et ses réserves",
      url: "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/",
    },
  },
  {
    id: "editionHairFollicle",
    canvasHeight: 270,
    title: "De la racine à la fibre",
    paths: ["/alimentation-et-nutrition/nutrition-et-sante/nutrition-et-cheveux"],
    steps: [
      {
        label: "Dans la peau",
        caption: "La racine est logée dans un follicule vivant.",
        detail:
          "La vue en coupe relie la tige visible à la structure enfouie. Les cellules qui fabriquent le cheveu se trouvent à sa base.",
      },
      {
        label: "Vers la surface",
        caption: "La fibre produite à la base ressort à la surface de la peau.",
        detail:
          "La flèche pointe la zone où les cellules prolifèrent. La tige visible se compose surtout de cellules kératinisées.",
      },
    ],
    limit:
      "Coupe ou assiette de principe, hors échelle. Les couleurs et quantités ne décrivent aucun apport individuel.",
    source: {
      title: "NCBI Bookshelf — Anatomie du follicule pileux",
      url: "https://www.ncbi.nlm.nih.gov/books/NBK470321/",
    },
  },
  {
    id: "editionSkinBarrier",
    canvasHeight: 270,
    title: "La peau en coupe",
    paths: ["/alimentation-et-nutrition/nutrition-et-sante/nutrition-et-peau"],
    steps: [
      {
        label: "Couche externe",
        caption:
          "La couche superficielle protège les tissus des échanges excessifs avec l’extérieur.",
        detail:
          "Les petits traits figurent les cellules de la couche cornée. Les lipides entre ces cellules contribuent aussi à la fonction de barrière.",
      },
      {
        label: "Renouvellement",
        caption: "Des cellules produites en profondeur se déplacent vers la surface.",
        detail:
          "La flèche suit le renouvellement de l’épiderme sur une petite zone de peau. La forme dessinée n’indique aucune vitesse de renouvellement.",
      },
      {
        label: "Échanges",
        caption: "La peau est exposée à plusieurs facteurs à la fois.",
        detail:
          "Les flèches montrent deux directions d’échange. Cet équilibre dépend de l’état de la barrière ainsi que des conditions extérieures.",
      },
    ],
    limit:
      "Coupe ou assiette de principe, hors échelle. Les couleurs et quantités ne décrivent aucun apport individuel.",
    source: {
      title: "NCBI Bookshelf — La structure de la couche cornée",
      url: "https://www.ncbi.nlm.nih.gov/books/NBK513299/",
    },
  },
  {
    id: "editionFoodReactions",
    canvasHeight: 270,
    title: "Deux réactions possibles aux aliments",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/regimes-particuliers/allergies-et-intolerances-alimentaires",
    ],
    steps: [
      {
        label: "Réponse immunitaire",
        caption:
          "Dans certaines allergies, le système immunitaire réagit à une protéine alimentaire.",
        detail:
          "L’embranchement évoque un anticorps du type IgE. D’autres réactions allergiques alimentaires mobilisent des mécanismes différents.",
      },
      {
        label: "Digestion du lactose",
        caption: "Quand l’activité de la lactase est insuffisante, du lactose reste mal digéré.",
        detail:
          "Les molécules sont figurées par des pastilles. La lactase coupe normalement le lactose en deux sucres plus petits dans l’intestin grêle.",
      },
      {
        label: "Deux mécanismes",
        caption:
          "Une digestion incomplète du lactose et une allergie au lait ont des causes différentes.",
        detail:
          "Le dessin compare les mécanismes. Des manifestations qui se ressemblent ne suffisent pas à les différencier chez une personne.",
      },
    ],
    limit:
      "Coupe ou assiette de principe, hors échelle. Les couleurs et quantités ne décrivent aucun apport individuel.",
    source: {
      title: "NIDDK — Mécanisme de l’intolérance au lactose et distinction avec l’allergie",
      url: "https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/symptoms-causes",
    },
  },
  {
    id: "editionGlutenVillous",
    canvasHeight: 270,
    title: "Les villosités de l’intestin grêle",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/regimes-particuliers/gluten-mythes-et-realites",
    ],
    steps: [
      {
        label: "Surface plissée",
        caption: "Les villosités augmentent la surface d’absorption de l’intestin grêle.",
        detail:
          "La coupe fait ressortir les reliefs qui multiplient la surface de contact entre le contenu intestinal et les cellules de la paroi.",
      },
      {
        label: "Maladie cœliaque",
        caption:
          "Dans la maladie cœliaque, la réaction au gluten peut abîmer et aplatir les villosités.",
        detail:
          "La seconde coupe représente des reliefs raccourcis. Le mécanisme est propre à la maladie cœliaque et ne décrit pas la réaction de tout le monde au gluten.",
      },
    ],
    limit:
      "Coupe ou assiette de principe, hors échelle. Les couleurs et quantités ne décrivent aucun apport individuel.",
    source: {
      title: "NIDDK — Maladie cœliaque et intestin grêle",
      url: "https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease/symptoms-causes",
    },
  },
  {
    id: "editionMediterraneanTable",
    canvasHeight: 270,
    title: "Les composantes d’une table méditerranéenne",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/regimes-particuliers/regime-mediterraneen",
    ],
    steps: [
      {
        label: "Base végétale",
        caption: "Légumes, fruits, légumineuses et céréales occupent une place importante.",
        detail:
          "L’assiette rassemble des aliments de plusieurs familles végétales. Les surfaces colorées servent à les repérer et ne fixent aucune portion.",
      },
      {
        label: "Autres aliments",
        caption:
          "L’huile d’olive est une matière grasse habituelle. Le poisson est un des aliments possibles.",
        detail:
          "La fiole isole l’huile du reste de l’assiette. Le motif décrit un ensemble d’habitudes alimentaires, avec des variantes locales.",
      },
      {
        label: "Sur la durée",
        caption: "Deux repas peuvent être différents tout en relevant du même modèle alimentaire.",
        detail:
          "Les deux assiettes illustrent une diversité d’aliments sur plusieurs repas. Une assiette isolée décrit mal un régime suivi sur la durée.",
      },
    ],
    limit:
      "Coupe ou assiette de principe, hors échelle. Les couleurs et quantités ne décrivent aucun apport individuel.",
    source: {
      title: "UNESCO — La diète méditerranéenne",
      url: "https://ich.unesco.org/fr/RL/la-diete-mediterraneenne-00884",
    },
  },
  {
    id: "editionPlantTable",
    canvasHeight: 270,
    title: "Deux modèles d’alimentation végétale",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/regimes-particuliers/regimes-vegetariens-et-vegetaliens",
    ],
    steps: [
      {
        label: "Végétalien et végétarien",
        caption:
          "Un repas végétarien peut contenir un œuf. Un repas végétalien exclut les aliments d’origine animale.",
        detail:
          "L’œuf de l’assiette de droite rend la distinction visible. Les deux assiettes contiennent aussi des aliments végétaux.",
      },
      {
        label: "Faire varier",
        caption: "L’équilibre dépend de l’ensemble des aliments et de leur variété.",
        detail:
          "Les deux assiettes correspondent à des choix différents. Elles illustrent la complémentarité possible entre céréales, légumineuses et autres aliments.",
      },
      {
        label: "Vitamine B12",
        caption:
          "La vitamine B12 demande une attention particulière dans une alimentation végétalienne.",
        detail:
          "Le cartouche isole un nutriment. Les aliments enrichis et compléments peuvent fournir de la B12 selon leurs caractéristiques.",
      },
    ],
    limit:
      "Coupe ou assiette de principe, hors échelle. Les couleurs et quantités ne décrivent aucun apport individuel.",
    source: {
      title: "Anses — Régimes végétariens et repères alimentaires",
      url: "https://www.anses.fr/fr/actualite/regimes-vegetariens-effets-sante-reperes-alimentaires",
    },
  },
  {
    id: "editionFatGeometry",
    canvasHeight: 270,
    title: "La forme des chaînes cis et trans",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/graisses-trans",
    ],
    steps: [
      {
        label: "Configuration cis",
        caption: "Dans la configuration cis, la chaîne se plie près de la double liaison.",
        detail:
          "La forme est schématique. Ce qui distingue la configuration est la position relative des deux prolongements autour de la double liaison.",
      },
      {
        label: "Configuration trans",
        caption: "Dans la configuration trans, la chaîne a une forme plus rectiligne.",
        detail:
          "Les prolongements sont dessinés de part et d’autre de la double liaison. C’est la même zone de la molécule que dans la première vue.",
      },
      {
        label: "La double liaison",
        caption: "Les mots cis et trans décrivent une disposition dans l’espace.",
        detail:
          "Le cercle isole la double liaison carbone-carbone. La figure compare une propriété de structure à composition comparable.",
      },
    ],
    limit:
      "Coupe ou assiette de principe, hors échelle. Les couleurs et quantités ne décrivent aucun apport individuel.",
    source: {
      title: "Anses — Les acides gras trans",
      url: "https://www.anses.fr/fr/article/acides-gras-trans",
    },
  },
  {
    id: "editionMorningMeal",
    canvasHeight: 270,
    title: "Un petit-déjeuner dans la journée",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/reperes-nutritionnels/le-petit-dejeuner-des-adolescents-et-leurs-apports-en-nutriments",
    ],
    steps: [
      {
        label: "Les aliments",
        caption: "Un repas peut apporter plusieurs types de nutriments selon sa composition.",
        detail:
          "Les formes représentent des familles d’aliments. Les éléments dessinés ne prescrivent ni des portions ni un menu unique.",
      },
      {
        label: "Le reste de la journée",
        caption: "Un repas ne représente qu’une partie des apports alimentaires.",
        detail:
          "Les repères prolongent le repas vers les autres moments de la journée. Les études de consommation examinent généralement les apports sur une durée plus large.",
      },
    ],
    limit:
      "Scène de principe, hors échelle. Les valeurs, objets et conditions de préparation sont illustratifs.",
    source: {
      title:
        "Étude européenne HELENA — Apports en micronutriments selon la prise du petit-déjeuner",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7589686/",
    },
  },
  {
    id: "editionFoodHazards",
    canvasHeight: 270,
    title: "Trois types de dangers alimentaires",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/securite-alimentaire/contaminants-alimentaires-normes-securite",
    ],
    steps: [
      {
        label: "Biologique",
        caption:
          "Des bactéries, des virus ou des parasites peuvent être à l’origine d’un danger alimentaire.",
        detail:
          "Les formes en suspension symbolisent des agents biologiques. Le dessin ne permet pas de reconnaître un aliment contaminé à son apparence.",
      },
      {
        label: "Chimique",
        caption: "Une substance chimique indésirable peut atteindre un aliment.",
        detail:
          "Les gouttes figurent une contamination comme des résidus de produit de nettoyage. Le niveau d’exposition compte pour évaluer le risque.",
      },
      {
        label: "Physique",
        caption: "Un fragment dur ou coupant peut blesser si on l’avale.",
        detail:
          "L’objet anguleux représente un corps étranger comme un éclat de verre. Les trois catégories aident à distinguer comment protéger les aliments.",
      },
    ],
    limit:
      "Scène de principe, hors échelle. Les valeurs, objets et conditions de préparation sont illustratifs.",
    source: {
      title: "OMS — Sécurité sanitaire des aliments",
      url: "https://www.who.int/news-room/fact-sheets/detail/food-safety",
    },
  },
  {
    id: "editionKitchenSurfaces",
    canvasHeight: 270,
    title: "Les contacts invisibles en cuisine",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/securite-alimentaire/hygiene-en-cuisine",
    ],
    steps: [
      {
        label: "Transfert",
        caption: "Une surface commune peut transférer une contamination d’un aliment à un autre.",
        detail:
          "La flèche relie deux aliments qui se succèdent sur une même zone de préparation. Le transfert peut arriver sans signe visible.",
      },
      {
        label: "Deux surfaces",
        caption:
          "Séparer les préparations limite certains contacts entre le cru et le prêt à consommer.",
        detail:
          "Les deux postes ont des usages différents. Le principe s’applique aussi aux couteaux, récipients et mains qui passent d’un aliment à l’autre.",
      },
      {
        label: "Nettoyage",
        caption: "Nettoyer les surfaces interrompt certains trajets de contamination.",
        detail:
          "Le geste est montré au niveau du plan de travail. Séparation, nettoyage et lavage des mains agissent sur des trajets complémentaires.",
      },
    ],
    limit:
      "Scène de principe, hors échelle. Les valeurs, objets et conditions de préparation sont illustratifs.",
    source: {
      title: "OMS — Cinq clés pour des aliments plus sûrs",
      url: "https://www.who.int/publications/i/item/9789241594639",
    },
  },
  {
    id: "editionFishTrophic",
    canvasHeight: 270,
    title: "Le mercure dans une chaîne marine",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/securite-alimentaire/metaux-lourds-poissons",
    ],
    steps: [
      {
        label: "Chaîne alimentaire",
        caption: "De petits organismes font partie de l’alimentation d’espèces plus grandes.",
        detail:
          "Les silhouettes suivent un exemple de réseau alimentaire très simplifié. Toutes les espèces ne se nourrissent pas de la même façon.",
      },
      {
        label: "Accumulation",
        caption:
          "Le méthylmercure peut s’accumuler dans les tissus et sa concentration augmenter aux niveaux trophiques élevés.",
        detail:
          "Les marques se font plus nombreuses dans le prédateur pour illustrer le phénomène. Elles ne représentent ni une dose ni une mesure.",
      },
      {
        label: "Espèces différentes",
        caption: "Les concentrations varient avec l’espèce, le milieu, l’âge et l’alimentation.",
        detail:
          "La même silhouette peut correspondre à des situations très diverses. La position dans la chaîne donne une explication, avec des exceptions.",
      },
    ],
    limit:
      "Scène de principe, hors échelle. Les valeurs, objets et conditions de préparation sont illustratifs.",
    source: {
      title: "Anses — Le méthylmercure dans les poissons",
      url: "https://www.anses.fr/fr/article/methylmercure-risque-sante-cas-consommation-importante-poissons",
    },
  },
  {
    id: "editionPesticideResidue",
    canvasHeight: 270,
    title: "Du prélèvement au contrôle",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/securite-alimentaire/pesticides-dans-alimentation",
    ],
    steps: [
      {
        label: "Prélèvement",
        caption: "Un échantillon d’aliment est prélevé pour être analysé.",
        detail:
          "Le fruit représente un lot échantillonné. Un protocole de prélèvement sert à préciser la portée de l’analyse.",
      },
      {
        label: "Analyse",
        caption: "Le laboratoire cherche et mesure des résidus déterminés.",
        detail:
          "Le tracé représente une mesure instrumentale. Détecter un résidu et dépasser une limite réglementaire correspondent à des résultats différents.",
      },
      {
        label: "Comparer à la limite",
        caption: "La limite maximale s’applique à un couple substance et denrée.",
        detail:
          "Les repères simplifient une comparaison réglementaire. L’évaluation du risque sanitaire tient aussi compte de l’exposition et de la toxicité.",
      },
    ],
    limit:
      "Scène de principe, hors échelle. Les valeurs, objets et conditions de préparation sont illustratifs.",
    source: {
      title: "Commission européenne — Limites maximales de résidus",
      url: "https://food.ec.europa.eu/plants/pesticides/maximum-residue-levels/qas-pesticides_en",
    },
  },
  {
    id: "editionPreservationModes",
    canvasHeight: 270,
    title: "Trois principes de conservation",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/conservation/techniques-conservation-aliments",
    ],
    steps: [
      {
        label: "Froid",
        caption:
          "Le froid ralentit la croissance de nombreux microbes et d’autres transformations.",
        detail:
          "Le premier contenant représente une conservation par le froid. La réfrigération ne détruit pas tous les micro-organismes.",
      },
      {
        label: "Eau disponible",
        caption: "Le séchage réduit l’eau disponible pour la croissance microbienne.",
        detail:
          "La texture plus sèche figure un effet sur l’activité de l’eau. La conservation dépend aussi de l’aliment, de son conditionnement et du procédé.",
      },
      {
        label: "Traitement et protection",
        caption: "Un procédé thermique adapté peut être associé à un contenant fermé.",
        detail:
          "Le bocal représente le principe d’un produit traité et protégé d’une recontamination. Les conditions réelles dépendent du produit et du procédé.",
      },
    ],
    limit:
      "Scène de principe, hors échelle. Les valeurs, objets et conditions de préparation sont illustratifs.",
    source: {
      title: "FDA — L’activité de l’eau dans les aliments",
      url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-technical-guides/water-activity-aw-foods",
    },
  },
  {
    id: "editionSupplementLabel",
    canvasHeight: 270,
    title: "Lire une étiquette de complément",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/complements-alimentaires",
    ],
    steps: [
      {
        label: "La substance",
        caption: "Le nom de la substance précise ce que contient le produit.",
        detail:
          "La zone mise en évidence représente la liste des ingrédients. La forme d’un produit seule ne dit pas ce qu’il contient.",
      },
      {
        label: "La portion",
        caption: "La quantité indiquée s’interprète avec l’unité et la portion mentionnées.",
        detail:
          "Comparer deux étiquettes demande de vérifier si elles parlent d’une unité, d’une portion ou de la quantité journalière indiquée.",
      },
      {
        label: "Cumul des produits",
        caption: "Des produits différents peuvent contenir la même substance.",
        detail:
          "Les sources juxtaposées illustrent pourquoi la quantité totale peut différer de celle figurant sur un seul emballage.",
      },
    ],
    limit:
      "Scène de principe, hors échelle. Les valeurs, objets et conditions de préparation sont illustratifs.",
    source: {
      title: "Anses — Les compléments alimentaires",
      url: "https://www.anses.fr/fr/article/complements-alimentaires-necessite-dune-consommation-eclairee",
    },
  },
  {
    id: "editionGrainSilo",
    canvasHeight: 270,
    title: "À l’intérieur d’un silo à grains",
    paths: ["/sciences-du-vivant-appliquees/agronomie/agriculture-durable/conserver-recoltes"],
    steps: [
      {
        label: "Stockage",
        caption: "Le grain entre par le haut et remplit progressivement le volume du silo.",
        detail:
          "La coupe dévoile le volume intérieur derrière l’enveloppe. Les points symbolisent les grains et ne décrivent aucune capacité réelle.",
      },
      {
        label: "Air et humidité",
        caption:
          "La circulation de l’air, la température et l’humidité influencent l’état du stock.",
        detail:
          "Les flèches traversent la masse de grains. Un silo réel peut avoir des gradients entre la surface, le centre et la paroi.",
      },
      {
        label: "Surveillance",
        caption: "Des mesures prises à plusieurs endroits donnent des indications sur le stock.",
        detail:
          "Les sondes figurent une surveillance locale du grain. Elles peuvent aider à repérer des zones qui évoluent différemment.",
      },
    ],
    limit:
      "Scène de principe, hors échelle. Les valeurs, objets et conditions de préparation sont illustratifs.",
    source: {
      title: "FAO — Stockage et préservation des céréales",
      url: "https://www.fao.org/4/x5065e/x5065e0a.htm",
    },
  },
  {
    id: "editionNourishmentVariety",
    canvasHeight: 270,
    title: "Les plantes apportent plusieurs nutriments",
    paths: ["/sciences-du-vivant-appliquees/agronomie/selection-vegetale/plantes-nourrissantes"],
    steps: [
      {
        label: "Énergie",
        caption:
          "Les tubercules ou les céréales peuvent apporter de l’énergie sous forme d’amidon.",
        detail:
          "Les formes représentent des aliments riches en glucides. L’apport dépend de la plante, de sa préparation et de la quantité consommée.",
      },
      {
        label: "Protéines",
        caption: "Les légumineuses contribuent aux apports en protéines et acides aminés.",
        detail:
          "Les graines figurent des plantes dont la composition diffère de celle des tubercules. Plusieurs aliments contribuent ensemble aux apports d’une journée.",
      },
      {
        label: "Vitamines et minéraux",
        caption: "Des familles de plantes différentes contribuent à des apports différents.",
        detail:
          "Les vues distinguent quelques grandes fonctions. Les couleurs ne classent pas les plantes et n’établissent aucun classement d’aliments.",
      },
    ],
    limit:
      "Scène de principe, hors échelle. Les valeurs, objets et conditions de préparation sont illustratifs.",
    source: {
      title: "FAO — Les légumineuses",
      url: "https://www.fao.org/pulses-2016/en/",
    },
  },
  {
    id: "editionNitrogenReturn",
    canvasHeight: 270,
    title: "Revenir du végétal au sol",
    paths: [
      "/sciences-du-vivant-appliquees/agronomie/sols-et-fertilite/fertiliser-sans-engrais-industriels",
    ],
    steps: [
      {
        label: "Résidus végétaux",
        caption: "Les résidus laissés ou apportés au sol contiennent des nutriments.",
        detail:
          "La couche supérieure représente des matières organiques. La disponibilité des nutriments change au fil de leur décomposition.",
      },
      {
        label: "Transformation dans le sol",
        caption: "Les organismes du sol transforment une partie de la matière organique.",
        detail:
          "Les traits descendent depuis les résidus. Cette transformation libère certains nutriments dans des formes utilisables par les racines.",
      },
      {
        label: "Racines",
        caption:
          "Certaines légumineuses hébergent des bactéries capables de fixer l’azote de l’air.",
        detail:
          "Les nodules représentent cette association. La quantité d’azote qui revient au sol dépend de la culture et du devenir des résidus.",
      },
    ],
    limit:
      "Scène de principe, hors échelle. Les valeurs, objets et conditions de préparation sont illustratifs.",
    source: {
      title: "USDA — Transformations de l’azote dans le sol",
      url: "https://www.nrcs.usda.gov/sites/default/files/2022-10/Soil%20Nitrogen.pdf",
    },
  },
  {
    id: "editionHeartSignal",
    canvasHeight: 270,
    title: "Pourquoi un choc peut interrompre un rythme",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-cardiovasculaire/comment-un-defibrillateur-remet-il-de-l-ordre-dans-un-coeur-qui-s-emballe",
    ],
    steps: [
      {
        label: "Activité désordonnée",
        caption: "Certains rythmes désorganisent la contraction du cœur.",
        detail:
          "Les lignes montrent des signaux électriques qui se propagent sans coordination suffisante. La circulation du sang peut alors être gravement compromise.",
      },
      {
        label: "Interruption",
        caption: "Un choc électrique peut interrompre certains rythmes d’arrêt cardiaque.",
        detail:
          "La figure met en évidence l’interruption de l’activité désordonnée. Tous les rythmes d’arrêt cardiaque ne sont pas traités par un choc.",
      },
      {
        label: "Reprise possible",
        caption: "Une activité électrique organisée peut reprendre après l’interruption du rythme.",
        detail:
          "Le tracé régulier figure un résultat possible. La défibrillation n’assure à elle seule ni reprise du rythme ni reprise de la circulation.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les tracés et positions ne décrivent aucune mesure individuelle.",
    source: {
      title: "NHLBI — Comment agit un défibrillateur",
      url: "https://www.nhlbi.nih.gov/health/defibrillators/how-do-defibrillators-work",
    },
  },
  {
    id: "editionVesselRisks",
    canvasHeight: 270,
    title: "Ce qui modifie le risque cardiovasculaire",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-cardiovasculaire/les-facteurs-de-risque-cardiovasculaire-modifiables",
    ],
    steps: [
      {
        label: "Une artère",
        caption: "Le sang circule dans une cavité bordée par la paroi de l’artère.",
        detail:
          "La coupe sépare le passage du sang et la paroi. Des maladies cardiovasculaires se développent en partie au niveau de cette paroi.",
      },
      {
        label: "Formation d’une plaque",
        caption: "Une plaque se développe dans la paroi et peut modifier le passage du sang.",
        detail:
          "Le relief symbolise une accumulation de substances et de cellules. Une complication dépend aussi de la stabilité de la plaque.",
      },
      {
        label: "Plusieurs facteurs",
        caption: "Des facteurs comme le tabac, la tension et le cholestérol peuvent se cumuler.",
        detail:
          "Les repères entourent le même système. Le risque dépend de facteurs multiples, dont certains sont modifiables et d’autres liés à l’âge ou aux antécédents.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les tracés et positions ne décrivent aucune mesure individuelle.",
    source: {
      title: "OMS — Maladies cardiovasculaires et facteurs de risque",
      url: "https://www.who.int/fr/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)",
    },
  },
  {
    id: "editionPressureWaves",
    canvasHeight: 270,
    title: "Deux valeurs dans un cycle cardiaque",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-cardiovasculaire/pression-arterielle-et-hypertension",
    ],
    steps: [
      {
        label: "Systolique",
        caption: "La pression systolique représente la valeur haute du cycle.",
        detail:
          "Le premier point suit le sommet atteint lorsque le cœur éjecte le sang. Le tracé stylisé sert à lire les deux termes d’une mesure.",
      },
      {
        label: "Diastolique",
        caption: "La pression diastolique représente la valeur basse du cycle.",
        detail:
          "Le second point correspond à l’intervalle entre deux contractions. Les valeurs réelles dépendent entre autres de la situation de mesure.",
      },
      {
        label: "Plusieurs mesures",
        caption: "La pression varie au cours du temps, même au repos.",
        detail:
          "Les graduations rappellent qu’une mesure est une observation ponctuelle. L’interprétation médicale peut s’appuyer sur plusieurs mesures et leur contexte.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les tracés et positions ne décrivent aucune mesure individuelle.",
    source: {
      title: "OMS — Pression systolique, diastolique et hypertension",
      url: "https://www.who.int/news-room/fact-sheets/detail/hypertension",
    },
  },
  {
    id: "editionDeficitCurve",
    canvasHeight: 270,
    title: "Comment une carence peut apparaître",
    paths: ["/corps-humain-et-sante/anatomie/systeme-digestif/vitamines-carences"],
    steps: [
      {
        label: "Apports et besoins",
        caption: "Le corps utilise des vitamines et ses besoins varient selon le contexte.",
        detail:
          "Les tracés distinguent des besoins et l’évolution schématique d’une disponibilité. Aucune valeur ni durée universelle n’y est représentée.",
      },
      {
        label: "Réserves",
        caption:
          "Lorsqu’il existe des réserves, elles peuvent diminuer si l’apport ou l’absorption est insuffisant.",
        detail:
          "Le tracé descend pour illustrer l’épuisement progressif de certaines réserves. Cette dynamique change d’une vitamine à l’autre.",
      },
      {
        label: "Fonction touchée",
        caption: "Les effets d’un déficit dépendent de la vitamine et de la fonction concernée.",
        detail:
          "Le repère indique un moment conceptuel où une fonction peut être affectée. Il ne représente ni un seuil clinique ni une durée prédite.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les tracés et positions ne décrivent aucune mesure individuelle.",
    source: {
      title: "NIH — Vitamine A, réserves et carence",
      url: "https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/",
    },
  },
  {
    id: "editionYawnObservation",
    canvasHeight: 270,
    title: "Observer un bâillement contagieux",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-nerveux/pourquoi-le-baillement-est-il-contagieux-et-est-ce-un-signe-d-empathie",
    ],
    steps: [
      {
        label: "Le signal",
        caption: "Voir ou entendre un bâillement peut précéder un autre bâillement.",
        detail:
          "La première personne fournit le signal observé. La succession est le phénomène que les études essaient de mesurer.",
      },
      {
        label: "La réponse",
        caption: "La réponse varie entre personnes et situations.",
        detail:
          "La seconde personne symbolise une réponse possible. Certaines personnes réagissent et d’autres non dans des conditions apparemment proches.",
      },
      {
        label: "Le contexte",
        caption: "Un bâillement contagieux ne mesure pas à lui seul l’empathie.",
        detail:
          "Les repères matérialisent des influences possibles comme l’attention ou la familiarité. Une association observée ne permet pas d’isoler automatiquement un mécanisme.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les tracés et positions ne décrivent aucune mesure individuelle.",
    source: {
      title: "Bartholomew et Cirulli — Variabilité du bâillement contagieux",
      url: "https://pubmed.ncbi.nlm.nih.gov/24632594/",
    },
  },
  {
    id: "editionCellCycleControl",
    canvasHeight: 270,
    title: "Des contrôles de division à la tumeur",
    paths: [
      "/corps-humain-et-sante/maladies/maladies-chroniques/comment-une-cellule-normale-devient-elle-une-cellule-cancereuse",
    ],
    steps: [
      {
        label: "Division contrôlée",
        caption: "Des signaux participent au déclenchement et à l’arrêt de la division cellulaire.",
        detail:
          "Le cercle représente des cellules et quelques signaux de contrôle. Les tissus contiennent de nombreuses barrières qui limitent la prolifération inappropriée.",
      },
      {
        label: "Contrôles altérés",
        caption:
          "Des changements peuvent modifier les réponses aux signaux qui contrôlent la croissance.",
        detail:
          "Certaines barrières figurées s’effacent. La transformation cancéreuse résulte généralement de plusieurs changements, avec des trajectoires différentes.",
      },
      {
        label: "Accumulation de cellules",
        caption:
          "Une population de cellules qui échappe à certains contrôles peut former une tumeur.",
        detail:
          "Les cellules sont plus nombreuses dans la dernière vue. Cette croissance locale illustre une possibilité sans représenter tous les types de cancer.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les tracés et positions ne décrivent aucune mesure individuelle.",
    source: {
      title: "NCI — Qu’est-ce que le cancer ?",
      url: "https://www.cancer.gov/about-cancer/understanding/what-is-cancer",
    },
  },
  {
    id: "editionGlucoseGates",
    canvasHeight: 270,
    title: "Quand la réponse à l’insuline diminue",
    paths: [
      "/corps-humain-et-sante/maladies/maladies-chroniques/diabete-de-type-2-mecanismes-et-prevention",
    ],
    steps: [
      {
        label: "Insuline et glucose",
        caption: "Dans certains tissus, l’insuline favorise l’entrée du glucose dans les cellules.",
        detail:
          "Les pastilles représentent le glucose. La flèche traverse une membrane pour illustrer une des réponses à l’insuline.",
      },
      {
        label: "Résistance",
        caption: "Les mêmes tissus peuvent répondre moins fortement au signal d’insuline.",
        detail:
          "L’entrée du glucose est moins bien stimulée. Le foie, les muscles et le tissu adipeux interviennent chacun dans la régulation.",
      },
      {
        label: "Glucose dans le sang",
        caption: "Si la compensation est insuffisante, la glycémie reste plus élevée.",
        detail:
          "Les pastilles se retrouvent davantage du côté du sang. La figure isole un mécanisme et ne représente ni une mesure ni une évolution obligatoire.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les tracés et positions ne décrivent aucune mesure individuelle.",
    source: {
      title: "NIDDK — Résistance à l’insuline",
      url: "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/prediabetes-insulin-resistance",
    },
  },
  {
    id: "editionThermalBalance",
    canvasHeight: 270,
    title: "Les échanges de chaleur du corps",
    paths: ["/corps-humain-et-sante/physiologie/hypothermie-coup-de-chaleur"],
    steps: [
      {
        label: "Équilibre",
        caption: "Le corps produit de la chaleur et en échange avec son environnement.",
        detail:
          "Les flèches font apparaître les directions possibles d’échange. L’activité, la température, l’humidité et le vent modifient ces flux.",
      },
      {
        label: "Perte nette",
        caption:
          "La température interne peut diminuer quand la chaleur perdue dépasse la production.",
        detail:
          "Les flux extérieurs dominent dans cette vue. Les vêtements, l’eau et le vent font partie des éléments qui changent l’équilibre.",
      },
      {
        label: "Gain net",
        caption: "La température interne peut monter si la chaleur s’accumule.",
        detail:
          "Les échanges figurés dépendent du milieu et de l’effort. Le tracé explique un déséquilibre et ne donne aucun seuil d’urgence.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les tracés et positions ne décrivent aucune mesure individuelle.",
    source: {
      title: "OMS — Chaleur et santé",
      url: "https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health",
    },
  },
  {
    id: "editionImmuneTimeline",
    canvasHeight: 270,
    title: "Deux réponses qui coopèrent",
    paths: ["/corps-humain-et-sante/physiologie/immunite/immunite-innee-et-adaptative"],
    steps: [
      {
        label: "Réponse innée",
        caption:
          "Des mécanismes rapides reconnaissent des caractéristiques communes d’agents étrangers ou de tissus lésés.",
        detail:
          "La première vue regroupe des acteurs qui interviennent tôt. Les barrières et divers types de cellules contribuent à cette réponse.",
      },
      {
        label: "Réponse adaptative",
        caption: "Certains lymphocytes répondent à des éléments plus précisément reconnus.",
        detail:
          "La forme associée aux cellules distingue la reconnaissance spécifique. La réponse adaptative dépend aussi de signaux issus de la réponse innée.",
      },
      {
        label: "Mémoire",
        caption: "Une partie des cellules peut persister et contribuer à une réponse ultérieure.",
        detail:
          "Les repères se prolongent sur la frise. La mémoire immunitaire décrit un effet durable possible et sa portée varie selon le contexte.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les tracés et positions ne décrivent aucune mesure individuelle.",
    source: {
      title: "NCBI Bookshelf — Immunité innée et adaptative",
      url: "https://www.ncbi.nlm.nih.gov/books/NBK27090/",
    },
  },
  {
    id: "editionGraspReflex",
    canvasHeight: 270,
    title: "Le réflexe d’agrippement palmaire",
    paths: [
      "/sciences-humaines-et-sociales/psychologie/developpement/pourquoi-un-nouveau-ne-serre-t-il-fort-le-doigt-qu-on-lui-tend",
    ],
    steps: [
      {
        label: "Toucher la paume",
        caption: "Un contact sur la paume peut déclencher le réflexe du nourrisson.",
        detail:
          "Dans la première vue, le doigt touche la paume. Le repère indique le début du stimulus qui précède le mouvement.",
      },
      {
        label: "Fermeture de la main",
        caption: "Les doigts se referment automatiquement autour du stimulus.",
        detail:
          "La courbe suit le mouvement des doigts. Ce réflexe précoce est à distinguer de la saisie intentionnelle qui se développe plus tard.",
      },
    ],
    limit:
      "Dessin anatomique de principe, hors échelle. Les tracés et positions ne décrivent aucune mesure individuelle.",
    source: {
      title: "American Academy of Pediatrics — Les réflexes du nouveau-né",
      url: "https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx",
    },
  },
  {
    id: "editionDepressionFrames",
    canvasHeight: 270,
    title: "Différentes dimensions d’un épisode dépressif",
    paths: ["/corps-humain-et-sante/maladies/sante-mentale/depression-donnees-et-prise-en-charge"],
    steps: [
      {
        label: "Plusieurs dimensions",
        caption:
          "Un épisode peut affecter l’humeur, l’intérêt et des fonctions comme le sommeil ou l’énergie.",
        detail:
          "Les repères représentent des dimensions qui varient selon la personne. Une scène isolée ne donne qu’une partie de ce qu’elle ressent.",
      },
      {
        label: "Durée",
        caption: "La persistance et la fréquence des changements comptent dans leur évaluation.",
        detail:
          "La frise attire l’attention sur ce qui se répète au fil du temps. Elle ne pose aucun diagnostic et ne fixe pas de durée à partir du dessin.",
      },
      {
        label: "Retentissement",
        caption: "Les changements peuvent affecter la vie quotidienne de différentes manières.",
        detail:
          "Les observations sont mises en relation. Un professionnel évalue notamment la durée, la gravité et les répercussions de l’ensemble.",
      },
    ],
    limit:
      "Scène de principe. Les tracés, personnes et résultats sont figurés pour expliquer le mécanisme ou la comparaison.",
    source: {
      title: "OMS — La dépression",
      url: "https://www.who.int/news-room/fact-sheets/detail/depression",
    },
  },
  {
    id: "editionExerciseMood",
    canvasHeight: 270,
    title: "Activité physique et ressenti",
    paths: [
      "/corps-humain-et-sante/maladies/sante-mentale/le-role-de-l-exercice-physique-sur-la-sante-mentale",
    ],
    steps: [
      {
        label: "Une séance",
        caption: "Le contexte d’une activité influence la manière dont elle est vécue.",
        detail:
          "La silhouette et la trajectoire présentent une activité possible. L’intensité, le lieu, les préférences et la fatigue peuvent changer l’expérience.",
      },
      {
        label: "Juste après",
        caption: "L’état ressenti peut changer pendant ou après une activité.",
        detail:
          "Le tracé symbolise une évolution possible. Il n’annonce aucune variation identique de l’humeur pour toutes les personnes.",
      },
      {
        label: "Sur la durée",
        caption:
          "Une activité régulière est associée à des bénéfices de santé mentale dans de nombreuses études.",
        detail:
          "La série de repères distingue la pratique répétée de l’effet d’une seule séance. L’évolution individuelle varie selon la situation.",
      },
    ],
    limit:
      "Scène de principe. Les tracés, personnes et résultats sont figurés pour expliquer le mécanisme ou la comparaison.",
    source: {
      title: "OMS — Activité physique et santé",
      url: "https://www.who.int/fr/news-room/fact-sheets/detail/physical-activity",
    },
  },
  {
    id: "editionStressPacing",
    canvasHeight: 270,
    title: "Observer une réponse au stress",
    paths: [
      "/corps-humain-et-sante/maladies/sante-mentale/les-techniques-de-gestion-du-stress-au-quotidien",
    ],
    steps: [
      {
        label: "Demande et réponse",
        caption: "Une même situation peut provoquer des réponses d’intensité différente.",
        detail:
          "Le tracé sépare la demande de la réaction qui l’accompagne. Une réaction dépend du contexte, de la personne et du moment.",
      },
      {
        label: "Pause",
        caption: "Porter l’attention sur la respiration est une façon de marquer une pause.",
        detail:
          "Le motif ondulé sert de repère visuel. Il ne prescrit ni cadence, ni exercice obligatoire, ni résultat précis.",
      },
      {
        label: "Après la pause",
        caption: "Identifier ce qui peut être changé aide à distinguer réaction et situation.",
        detail:
          "Le dernier repère ramène à la demande de départ. Le contexte peut combiner des facteurs individuels, matériels et sociaux.",
      },
    ],
    limit:
      "Scène de principe. Les tracés, personnes et résultats sont figurés pour expliquer le mécanisme ou la comparaison.",
    source: {
      title: "OMS — Faire ce qui compte en période de stress",
      url: "https://www.who.int/publications/i/item/9789240003927",
    },
  },
  {
    id: "editionTraumaTriggers",
    canvasHeight: 270,
    title: "Quand un rappel déclenche une réaction",
    paths: ["/corps-humain-et-sante/maladies/sante-mentale/stress-post-traumatique"],
    steps: [
      {
        label: "Un indice",
        caption: "Un son, un lieu ou une autre perception peut rappeler un événement traumatique.",
        detail:
          "Le dessin sépare le contexte présent du souvenir associé. La perception ne déclenche pas la même réponse chez toutes les personnes.",
      },
      {
        label: "Une réponse automatique",
        caption: "Des manifestations physiques et émotionnelles peuvent apparaître rapidement.",
        detail:
          "Le signal fait ressortir le caractère parfois involontaire de la réaction. Son intensité et ses manifestations dépendent de la personne.",
      },
      {
        label: "Un contexte changeant",
        caption: "Le même indice est vécu différemment selon la situation.",
        detail:
          "Les repères distinguent les conditions du moment. Le dessin décrit un mécanisme possible, sans résumer à lui seul le trouble de stress post-traumatique.",
      },
    ],
    limit:
      "Scène de principe. Les tracés, personnes et résultats sont figurés pour expliquer le mécanisme ou la comparaison.",
    source: {
      title: "OMS — Trouble de stress post-traumatique",
      url: "https://www.who.int/news-room/fact-sheets/detail/post-traumatic-stress-disorder",
    },
  },
  {
    id: "editionAllergyResponse",
    canvasHeight: 270,
    title: "D’un allergène à des symptômes",
    paths: ["/corps-humain-et-sante/physiologie/immunite/allergies-et-hypersensibilite"],
    steps: [
      {
        label: "Reconnaissance",
        caption: "Dans certaines allergies, des anticorps spécifiques reconnaissent un allergène.",
        detail:
          "Les formes rapprochées figurent le contact entre un allergène et des anticorps associés à une cellule immunitaire.",
      },
      {
        label: "Médiateurs",
        caption: "Certaines cellules activées libèrent des médiateurs comme l’histamine.",
        detail:
          "Les petits points se déplacent vers les tissus voisins. L’histamine est un exemple parmi plusieurs molécules qui participent à la réaction.",
      },
      {
        label: "Dans les tissus",
        caption: "Les manifestations varient selon les tissus et l’étendue de la réaction.",
        detail:
          "Les repères isolent des sites possibles. Une réaction peut rester locale ou avoir des effets plus étendus, selon la situation.",
      },
    ],
    limit:
      "Scène de principe. Les tracés, personnes et résultats sont figurés pour expliquer le mécanisme ou la comparaison.",
    source: {
      title: "Inserm — Mécanismes des allergies",
      url: "https://www.inserm.fr/dossier/allergies/",
    },
  },
  {
    id: "editionSleepDefenses",
    canvasHeight: 270,
    title: "Le sommeil et la réponse immunitaire",
    paths: [
      "/corps-humain-et-sante/physiologie/sommeil/pourquoi-manquer-de-sommeil-affaiblit-il-les-defenses-du-corps",
    ],
    steps: [
      {
        label: "Temps de sommeil",
        caption:
          "L’immunité évolue selon le moment de la journée et l’état de veille ou de sommeil.",
        detail:
          "La frise distingue des périodes d’une journée stylisée. Elle ne fixe aucune durée idéale ni seuil mesuré.",
      },
      {
        label: "Échanges",
        caption: "Le sommeil et la réponse immunitaire s’influencent mutuellement.",
        detail:
          "Les flèches représentent des échanges entre processus. Plusieurs signaux hormonaux et inflammatoires contribuent à cette relation.",
      },
      {
        label: "Sur plusieurs nuits",
        caption:
          "Les recherches distinguent un manque de sommeil ponctuel et une perturbation répétée.",
        detail:
          "Les points prolongent l’observation dans le temps. Les effets dépendent du type de perturbation et de la réponse immunitaire mesurée.",
      },
    ],
    limit:
      "Scène de principe. Les tracés, personnes et résultats sont figurés pour expliquer le mécanisme ou la comparaison.",
    source: {
      title: "NHLBI — Étude du sommeil et de la fonction immunitaire",
      url: "https://www.nhlbi.nih.gov/news/2022/nih-funded-study-shows-sound-sleep-supports-immune-function",
    },
  },
  {
    id: "editionScreeningGroups",
    canvasHeight: 270,
    title: "Ce qui arrive après un dépistage",
    paths: [
      "/corps-humain-et-sante/prevention-et-sante-publique/depistage/depistage-organise-des-cancers",
    ],
    steps: [
      {
        label: "Population",
        caption: "Un dépistage est proposé à un groupe défini avant l’apparition de symptômes.",
        detail:
          "Chaque silhouette représente un cas fictif. La définition du groupe est importante pour comprendre les résultats attendus.",
      },
      {
        label: "Résultats",
        caption: "Le test répartit les personnes selon le résultat observé.",
        detail:
          "Les repères séparent des résultats de test. Il peut exister des faux positifs et des faux négatifs, qui ont des conséquences différentes.",
      },
      {
        label: "Examens",
        caption: "D’autres examens peuvent être nécessaires pour confirmer un résultat.",
        detail:
          "La personne sélectionnée illustre une orientation, selon le protocole. Un seul test de dépistage ne suffit pas toujours à établir un diagnostic.",
      },
      {
        label: "Bénéfices et limites",
        caption: "L’intérêt se juge au niveau du programme et dépend du groupe invité.",
        detail:
          "Les proportions du dessin sont fictives. On distingue notamment détection utile, examens supplémentaires et surdiagnostic.",
      },
    ],
    limit:
      "Scène de principe. Les tracés, personnes et résultats sont figurés pour expliquer le mécanisme ou la comparaison.",
    source: {
      title: "OMS Europe — Guide des programmes de dépistage",
      url: "https://www.who.int/europe/publications/i/item/9789289054782",
    },
  },
  {
    id: "editionLindTrial",
    canvasHeight: 270,
    title: "Le raisonnement de l’essai sur le scorbut",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/medecine-fondee-sur-les-preuves/james-lind-scorbut",
    ],
    steps: [
      {
        label: "En mer",
        caption: "Le scorbut posait un problème à bord lors de longues traversées.",
        detail:
          "Le bateau situe l’expérience de Lind dans son contexte maritime. Le dessin présente un épisode historique sans reproduire exactement le navire.",
      },
      {
        label: "Groupes comparés",
        caption:
          "Lind a donné des interventions différentes à de petits groupes de marins malades.",
        detail:
          "La répartition évoque la comparaison faite sur le même navire. Les groupes de l’époque étaient trop petits pour une mesure moderne précise.",
      },
      {
        label: "Observer l’évolution",
        caption:
          "Les marins ayant reçu des agrumes se sont améliorés plus rapidement dans le récit de Lind.",
        detail:
          "Le repère isole ce groupe dans le témoignage. La description historique n’équivaut pas à un essai moderne randomisé.",
      },
    ],
    limit:
      "Scène de principe. Les tracés, personnes et résultats sont figurés pour expliquer le mécanisme ou la comparaison.",
    source: {
      title: "James Lind — Traité du scorbut de 1753",
      url: "https://www.jameslindlibrary.org/lind-j-1753/",
    },
  },
  {
    id: "editionHandWashingHistory",
    canvasHeight: 270,
    title: "Ce qu’a comparé Semmelweis",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/medecine-fondee-sur-les-preuves/semmelweis-lavage-mains",
    ],
    steps: [
      {
        label: "Deux services",
        caption: "Semmelweis a comparé la fièvre puerpérale dans deux services de maternité.",
        detail:
          "Les deux encadrés représentent les services de Vienne. Les barres servent à distinguer les situations et ne reproduisent pas les mesures historiques.",
      },
      {
        label: "Changement de pratique",
        caption: "Le nettoyage des mains a été introduit dans le service où il travaillait.",
        detail:
          "Les mains et le bassin représentent le changement de pratique. Le dessin n’est ni une reconstitution de la procédure ni une instruction.",
      },
      {
        label: "Après le changement",
        caption: "La mortalité par fièvre puerpérale a baissé dans ce service.",
        detail:
          "La dernière vue fait ressortir la comparaison avant et après. Les hauteurs des barres sont illustratives, sans échelle et sans chiffres.",
      },
    ],
    limit:
      "Scène de principe. Les tracés, personnes et résultats sont figurés pour expliquer le mécanisme ou la comparaison.",
    source: {
      title: "James Lind Library — Semmelweis sur la fièvre puerpérale",
      url: "https://www.jameslindlibrary.org/semmelweis-i-1861/",
    },
  },
  {
    id: "editionActivityBouts",
    canvasHeight: 270,
    title: "L’activité au fil d’une journée",
    paths: [
      "/sport-et-sciences-du-mouvement/sport-et-societe/activite-physique-et-sante/bouger-est-un-medicament",
    ],
    steps: [
      {
        label: "Moments séparés",
        caption: "Les occasions de bouger peuvent être réparties dans la journée.",
        detail:
          "Les repères évoquent des activités courtes, selon le transport, le travail ou les loisirs. Ils ne représentent aucun objectif personnel.",
      },
      {
        label: "Temps cumulé",
        caption: "Les différentes périodes d’activité peuvent contribuer à un total.",
        detail:
          "La frise regroupe les périodes actives. L’intensité et la régularité éclairent aussi l’effet de ces activités sur la santé.",
      },
      {
        label: "Contexte",
        caption:
          "Les possibilités de bouger dépendent de la personne, de ses capacités et de son environnement.",
        detail:
          "La figure compare des façons de répartir une activité. Chaque silhouette représente une situation possible et aucun programme imposé.",
      },
    ],
    limit:
      "Scène de principe. Les tracés, personnes et résultats sont figurés pour expliquer le mécanisme ou la comparaison.",
    source: {
      title: "OMS — L’activité physique",
      url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
    },
  },
  {
    id: "editionRentedRooms",
    canvasHeight: 270,
    title: "Ce qu’organise un bail d’habitation",
    paths: ["/droit-et-justice/droit-prive/droit-civil/bail-habitation"],
    steps: [
      {
        label: "Le logement",
        caption: "Le bail encadre la mise à disposition du logement.",
        detail:
          "La coupe figure le bien dont le locataire reçoit l’usage. L’écrit identifie notamment les parties et précise les conditions convenues.",
      },
      {
        label: "Usage et paiement",
        caption: "L’occupation s’accompagne d’obligations pour le locataire et pour le bailleur.",
        detail:
          "Les clés et le document symbolisent un échange qui se poursuit dans le temps. Le paiement du loyer fait partie de ces obligations.",
      },
      {
        label: "État des lieux",
        caption:
          "L’état des lieux permet de comparer l’état du logement à l’entrée et à la sortie.",
        detail:
          "La coupe et la fiche se lisent ensemble. Le constat porte sur les lieux et équipements concernés, selon les conditions du bail.",
      },
    ],
    limit:
      "Situation fictive et schéma de principe. L’application des règles dépend des faits et des textes qui les régissent.",
    source: {
      title: "Légifrance — Loi du 6 juillet 1989 sur les rapports locatifs",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310",
    },
  },
  {
    id: "editionContractTerms",
    canvasHeight: 270,
    title: "Les conditions de validité d’un contrat",
    paths: ["/droit-et-justice/droit-prive/droit-civil/contrat-conditions-de-validite"],
    steps: [
      {
        label: "Consentement",
        caption: "Les parties doivent consentir au contrat.",
        detail:
          "Les signatures symbolisent un accord. Une signature seule ne permet pas de trancher une question sur les conditions du consentement.",
      },
      {
        label: "Capacité",
        caption:
          "Les parties doivent avoir la capacité de contracter dans la situation considérée.",
        detail:
          "Le document met en évidence la personne qui s’engage. La capacité et les conditions de représentation varient selon le cadre légal.",
      },
      {
        label: "Contenu",
        caption: "Le contenu du contrat doit être licite et certain.",
        detail:
          "La zone surlignée représente les engagements. L’accord des parties ne suffit pas à rendre valable un engagement contraire à une règle applicable.",
      },
    ],
    limit:
      "Situation fictive et schéma de principe. L’application des règles dépend des faits et des textes qui les régissent.",
    source: {
      title: "Légifrance — Code civil, validité du contrat",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGISCTA000032006712",
    },
  },
  {
    id: "editionHoldingTitle",
    canvasHeight: 270,
    title: "Posséder et être propriétaire",
    paths: [
      "/droit-et-justice/droit-prive/droit-civil/la-possession-et-la-propriete-deux-notions-distinctes",
    ],
    steps: [
      {
        label: "Usage de fait",
        caption: "Une personne peut détenir ou utiliser un bien sans en être propriétaire.",
        detail:
          "Le dessin montre des signes visibles de contrôle matériel. La possession au sens juridique s’apprécie au regard de conditions précises.",
      },
      {
        label: "Droit de propriété",
        caption: "Les documents et les autres éléments de preuve éclairent à qui revient le droit.",
        detail:
          "La planche distingue l’usage visible de la situation juridique. La force d’un document dépend de sa nature et du bien concerné.",
      },
    ],
    limit:
      "Situation fictive et schéma de principe. L’application des règles dépend des faits et des textes qui les régissent.",
    source: {
      title: "Légifrance — Code civil, article 2255 sur la possession",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000019017175/",
    },
  },
  {
    id: "editionSharedRisk",
    canvasHeight: 270,
    title: "Le principe de la couverture d’assurance",
    paths: ["/droit-et-justice/droit-prive/droit-civil/le-contrat-d-assurance-principes-de-base"],
    steps: [
      {
        label: "Primes",
        caption: "Les primes financent une mutualisation de risques entre assurés.",
        detail:
          "Les piles de pièces représentent des contributions. L’assureur s’engage dans les conditions définies par le contrat et la réglementation.",
      },
      {
        label: "Événement",
        caption: "Un événement peut donner lieu à une demande au titre d’une garantie.",
        detail:
          "Le repère isole un événement parmi les risques possibles. Les circonstances et les garanties prévues déterminent l’examen de la demande.",
      },
      {
        label: "Couverture",
        caption: "Le contrat définit les garanties, limites et éventuelles franchises.",
        detail:
          "Le document rappelle qu’une prise en charge dépend de la garantie concernée. La franchise peut laisser une partie du coût à l’assuré.",
      },
    ],
    limit:
      "Situation fictive et schéma de principe. L’application des règles dépend des faits et des textes qui les régissent.",
    source: {
      title: "Légifrance — Code des assurances",
      url: "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006073984/",
    },
  },
  {
    id: "editionLiabilityChain",
    canvasHeight: 270,
    title: "Les éléments d’une responsabilité civile",
    paths: ["/droit-et-justice/droit-prive/droit-civil/responsabilite-civile-et-reparation"],
    steps: [
      {
        label: "Le fait",
        caption: "Un événement ou un comportement est examiné au regard des règles applicables.",
        detail:
          "Le premier repère isole le fait invoqué. Les régimes de responsabilité prévoient des conditions qui varient selon les cas.",
      },
      {
        label: "Le dommage",
        caption: "La personne qui demande réparation doit pouvoir établir le préjudice concerné.",
        detail:
          "La trace d’impact représente un dommage possible. Le préjudice peut prendre d’autres formes que celle montrée par le dessin.",
      },
      {
        label: "Le lien",
        caption: "Il faut établir un lien entre le fait et le dommage selon le régime en cause.",
        detail:
          "La flèche relie les deux éléments. Une succession dans le temps ne suffit pas à démontrer leur relation.",
      },
    ],
    limit:
      "Situation fictive et schéma de principe. L’application des règles dépend des faits et des textes qui les régissent.",
    source: {
      title: "Légifrance — Code civil, article 1240",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032041571/",
    },
  },
  {
    id: "editionLegalAccess",
    canvasHeight: 270,
    title: "L’accès à une aide pour les frais de justice",
    paths: [
      "/droit-et-justice/droit-prive/procedure-et-preuve/comment-peut-on-aller-en-justice-quand-on-n-a-pas-d-argent",
    ],
    steps: [
      {
        label: "Identifier le besoin",
        caption:
          "Une procédure peut entraîner des frais et nécessiter un accompagnement juridique.",
        detail:
          "Le dossier et le tribunal illustrent les coûts qui peuvent se poser. D’autres dispositifs peuvent aussi informer ou orienter une personne.",
      },
      {
        label: "Critères",
        caption: "L’aide juridictionnelle dépend de critères fixés par le dispositif.",
        detail:
          "La sélection du document représente l’examen d’une demande. Selon les conditions, la prise en charge peut être totale ou partielle.",
      },
      {
        label: "Prise en charge",
        caption: "L’aide peut couvrir certains frais de procédure.",
        detail:
          "La dernière vue suit le dossier vers la juridiction. Les frais couverts dépendent notamment de la décision d’attribution et de la procédure.",
      },
    ],
    limit:
      "Situation fictive et schéma de principe. L’application des règles dépend des faits et des textes qui les régissent.",
    source: {
      title: "Service Public — Aide juridictionnelle",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F18074",
    },
  },
  {
    id: "editionMediationRoom",
    canvasHeight: 270,
    title: "Médiation et arbitrage",
    paths: ["/droit-et-justice/droit-prive/procedure-et-preuve/mediation-arbitrage"],
    steps: [
      {
        label: "Médiation",
        caption: "Le médiateur aide les parties à chercher un accord.",
        detail:
          "Les deux flèches vont des parties vers le dialogue. La solution, si elle existe, reste construite et acceptée par les parties.",
      },
      {
        label: "Arbitrage",
        caption: "L’arbitre tranche le différend dans le cadre prévu par la convention applicable.",
        detail:
          "Le résultat est figuré par une décision. Les effets et modalités de contestation d’une sentence dépendent des règles qui s’appliquent.",
      },
    ],
    limit:
      "Situation fictive et schéma de principe. L’application des règles dépend des faits et des textes qui les régissent.",
    source: {
      title: "Légifrance — Code de procédure civile, arbitrage et résolution amiable",
      url: "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006070716/",
    },
  },
  {
    id: "editionProofBurden",
    canvasHeight: 270,
    title: "La présomption d’innocence dans une procédure",
    paths: [
      "/droit-et-justice/droit-prive/procedure-et-preuve/presomption-dinnocence-et-charge-de-la-preuve",
    ],
    steps: [
      {
        label: "Au départ",
        caption:
          "Une personne mise en cause est présumée innocente avant qu’une culpabilité soit établie.",
        detail:
          "La première vue distingue l’accusation du résultat de la procédure. La présomption organise la façon dont les charges sont examinées.",
      },
      {
        label: "Examiner les preuves",
        caption: "L’accusation doit établir la culpabilité selon les règles de preuve applicables.",
        detail:
          "Les dossiers figurent des éléments qui peuvent être discutés. La valeur de chacun s’apprécie au cours de la procédure.",
      },
      {
        label: "Décision",
        caption: "La juridiction statue après l’examen des charges et les débats.",
        detail:
          "Le document final symbolise une décision motivée. Être mis en cause, être jugé et être déclaré coupable correspondent à des étapes différentes.",
      },
    ],
    limit:
      "Situation fictive et schéma de principe. L’application des règles dépend des faits et des textes qui les régissent.",
    source: {
      title: "Conseil de l’Europe — Convention européenne des droits de l’homme",
      url: "https://www.echr.coe.int/documents/d/echr/convention_fra",
    },
  },
  {
    id: "editionConstitutionMap",
    canvasHeight: 270,
    title: "Le rôle d’une Constitution",
    paths: ["/droit-et-justice/droit-public/droit-constitutionnel/constitution-du-4-octobre-1958"],
    steps: [
      {
        label: "Règle de référence",
        caption:
          "La Constitution fixe des règles essentielles de l’organisation politique et juridique.",
        detail:
          "Le document supérieur figure un texte de référence. Plusieurs textes et principes forment en France le bloc de constitutionnalité.",
      },
      {
        label: "Institutions",
        caption: "La Constitution identifie plusieurs institutions et leurs compétences.",
        detail:
          "Les édifices désignent des fonctions différentes. Chacun représente une institution, avec des attributions définies et parfois partagées.",
      },
      {
        label: "Relations",
        caption: "Elle organise aussi les relations et certains contrôles entre les institutions.",
        detail:
          "Les flèches montrent des relations prévues par les textes. Le dessin isole quelques principes et laisse de côté les procédures précises.",
      },
    ],
    limit:
      "Situation fictive et schéma de principe. L’application des règles dépend des faits et des textes qui les régissent.",
    source: {
      title: "Conseil constitutionnel — Texte de la Constitution de 1958",
      url: "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur",
    },
  },
  {
    id: "editionDeclarationRights",
    canvasHeight: 270,
    title: "De la dignité à des droits pour tous",
    paths: [
      "/droit-et-justice/justice-et-institutions/droits-fondamentaux/declaration-universelle-droits-homme-1948",
    ],
    steps: [
      {
        label: "Dignité",
        caption: "La Déclaration part de la dignité et de l’égalité en droits des êtres humains.",
        detail:
          "Les silhouettes entourent un principe commun. La place de chacun sur la planche n’indique aucune hiérarchie.",
      },
      {
        label: "Libertés",
        caption:
          "Le texte énonce des droits civils, politiques, économiques, sociaux et culturels.",
        detail:
          "Les pages symbolisent des catégories de droits. Il s’agit d’un ensemble, dont la planche donne quelques repères.",
      },
      {
        label: "Universalité",
        caption: "Les droits énoncés concernent chaque personne.",
        detail:
          "Le dernier cercle étend le même principe à tous. La Déclaration constitue une référence internationale pour les textes et institutions qui l’ont suivie.",
      },
    ],
    limit:
      "Situation fictive et schéma de principe. L’application des règles dépend des faits et des textes qui les régissent.",
    source: {
      title: "Nations Unies — Déclaration universelle des droits de l’homme",
      url: "https://www.un.org/fr/about-us/universal-declaration-of-human-rights",
    },
  },
  {
    id: "editionParkZoning",
    canvasHeight: 270,
    title: "Le dessin d’un parc national français",
    paths: [
      "/droit-et-justice/droit-public/droit-de-lenvironnement/comment-la-loi-protege-t-elle-la-nature-dans-un-parc-national",
    ],
    steps: [
      {
        label: "Le cœur",
        caption: "Le cœur du parc est soumis à des règles de protection particulières.",
        detail:
          "La zone mise en évidence correspond à un exemple de cœur. Les limites et les règles réelles figurent dans les documents du parc.",
      },
      {
        label: "Aire d’adhésion",
        caption:
          "Une commune peut adhérer à la charte si elle se trouve dans l’aire prévue à cet effet.",
        detail:
          "La zone périphérique représente un espace de coopération. L’aire d’adhésion effective dépend des communes ayant adhéré.",
      },
      {
        label: "La charte",
        caption: "La charte organise un projet de protection et de développement selon les zones.",
        detail:
          "La superposition relie carte et projet. Les travaux, activités et usages restent soumis aux règles applicables à l’endroit considéré.",
      },
    ],
    limit:
      "Carte ou schéma de principe. Seuls les éléments utiles à la comparaison figurent dans le dessin.",
    source: {
      title: "Parcs nationaux de France — La charte d’un parc national",
      url: "https://parcsnationaux.fr/qui-sommes-nous/quest-ce-quun-parc-national/la-charte-dun-parc-national",
    },
  },
  {
    id: "editionUncertaintyPrecaution",
    canvasHeight: 270,
    title: "Décider quand le risque reste incertain",
    paths: ["/droit-et-justice/droit-public/droit-de-lenvironnement/principe-de-precaution"],
    steps: [
      {
        label: "Un risque plausible",
        caption:
          "Un risque de dommage grave pour l’environnement peut être envisagé malgré des incertitudes.",
        detail:
          "Le premier repère distingue la possibilité d’un dommage de ce qui a déjà été observé. La plausibilité demande un examen des connaissances.",
      },
      {
        label: "Évaluer",
        caption: "Une évaluation aide à clarifier ce qui est connu et les conséquences possibles.",
        detail:
          "Les formes rapprochent les observations et les hypothèses. Le principe de précaution ne dispense pas de faire évoluer l’évaluation.",
      },
      {
        label: "Réexaminer",
        caption:
          "Des mesures provisoires et proportionnées peuvent être revues avec de nouvelles données.",
        detail:
          "La flèche de retour matérialise la réévaluation. La nature des mesures dépend de la situation et des compétences de l’autorité.",
      },
    ],
    limit:
      "Carte ou schéma de principe. Seuls les éléments utiles à la comparaison figurent dans le dessin.",
    source: {
      title: "Conseil constitutionnel — Charte de l’environnement de 2004",
      url: "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/charte-de-l-environnement-de-2004",
    },
  },
  {
    id: "editionInternationalCourt",
    canvasHeight: 270,
    title: "Le rôle de la Cour pénale internationale",
    paths: [
      "/droit-et-justice/droit-public/droit-international/cour-penale-internationale-statut-de-rome",
    ],
    steps: [
      {
        label: "Compétence",
        caption:
          "La Cour traite certains crimes internationaux dans les conditions du Statut de Rome.",
        detail:
          "Le cadre représente les conditions de compétence et de recevabilité. L’existence d’un crime allégué ne suffit pas à établir que la Cour peut le juger.",
      },
      {
        label: "Les personnes",
        caption: "La Cour juge des personnes physiques pour les crimes relevant de sa compétence.",
        detail:
          "La silhouette distingue une responsabilité pénale individuelle. La Cour contribue à une justice complémentaire des juridictions nationales.",
      },
      {
        label: "Coopération",
        caption:
          "La Cour dépend notamment de la coopération des États pour des actes comme les arrestations.",
        detail:
          "Les flèches matérialisent les demandes entre la Cour et les autorités. Les modalités de coopération dépendent du cadre applicable.",
      },
    ],
    limit:
      "Carte ou schéma de principe. Seuls les éléments utiles à la comparaison figurent dans le dessin.",
    source: {
      title: "Cour pénale internationale — Le Statut de Rome",
      url: "https://www.icc-cpi.int/publications/core-legal-texts/rome-statute-international-criminal-court",
    },
  },
  {
    id: "editionPersonalData",
    canvasHeight: 270,
    title: "Suivre les données personnelles",
    paths: [
      "/droit-et-justice/justice-et-institutions/droits-fondamentaux/comment-la-loi-protege-t-elle-nos-donnees-personnelles-sur-internet",
    ],
    steps: [
      {
        label: "Collecte",
        caption:
          "Une information qui permet d’identifier une personne peut être une donnée personnelle.",
        detail:
          "Les fragments de dossier représentent quelques éléments. Ils peuvent permettre l’identification directement ou par recoupement.",
      },
      {
        label: "Finalité et durée",
        caption:
          "L’usage des données répond à une finalité et la durée de conservation doit être justifiée.",
        detail:
          "Le dossier rejoint un espace de stockage. La durée et les accès se définissent au regard de l’usage prévu et des règles applicables.",
      },
      {
        label: "Les droits",
        caption: "Une personne peut exercer certains droits auprès de l’organisme concerné.",
        detail:
          "La flèche revient vers la personne. Le droit d’accès, de rectification ou d’effacement s’exerce avec des conditions qui dépendent du cas.",
      },
    ],
    limit:
      "Carte ou schéma de principe. Seuls les éléments utiles à la comparaison figurent dans le dessin.",
    source: {
      title: "CNIL — Les droits sur les données personnelles",
      url: "https://www.cnil.fr/fr/les-droits-pour-maitriser-vos-donnees-personnelles",
    },
  },
  {
    id: "editionExpressionBounds",
    canvasHeight: 270,
    title: "La liberté d’expression dans son contexte",
    paths: [
      "/droit-et-justice/justice-et-institutions/droits-fondamentaux/liberte-dexpression-et-ses-limites",
    ],
    steps: [
      {
        label: "Exprimer et recevoir",
        caption: "La liberté d’expression protège la circulation d’idées et d’informations.",
        detail:
          "Le message est représenté entre deux personnes. Le droit protège aussi la réception des informations, dans le cadre juridique applicable.",
      },
      {
        label: "Restrictions",
        caption: "Une restriction doit remplir les conditions fixées par les textes.",
        detail:
          "Le cadre distingue les restrictions prévues de l’expression protégée. La protection de la réputation ou des droits d’autrui peut faire partie des buts reconnus.",
      },
      {
        label: "Apprécier le contexte",
        caption: "Une appréciation concrète tient compte du propos et de ses circonstances.",
        detail:
          "Les deux côtés mettent en regard la liberté et le but de la restriction. Son caractère nécessaire se juge dans la situation considérée.",
      },
    ],
    limit:
      "Carte ou schéma de principe. Seuls les éléments utiles à la comparaison figurent dans le dessin.",
    source: {
      title: "Conseil de l’Europe — Liberté d’expression",
      url: "https://www.coe.int/en/web/freedom-expression",
    },
  },
  {
    id: "editionIndependentCourt",
    canvasHeight: 270,
    title: "Ce qui distingue indépendance et impartialité",
    paths: [
      "/droit-et-justice/justice-et-institutions/droits-fondamentaux/pourquoi-chacun-a-t-il-droit-a-un-tribunal-independant-et-impartial",
    ],
    steps: [
      {
        label: "Indépendance",
        caption: "Une juridiction doit pouvoir statuer à l’abri des pressions extérieures.",
        detail:
          "L’écart entre les édifices représente l’indépendance institutionnelle. L’organisation et le statut des juges contribuent à cette garantie.",
      },
      {
        label: "Impartialité",
        caption: "Le tribunal doit examiner l’affaire sans parti pris envers les parties.",
        detail:
          "Les deux parties sont placées de part et d’autre. L’impartialité concerne le juge et les garanties offertes contre un doute légitime.",
      },
      {
        label: "Procédure",
        caption: "Les garanties du procès rendent le raisonnement et la décision contrôlables.",
        detail:
          "Les documents illustrent la possibilité de débattre des éléments et de connaître les motifs de la décision, selon la procédure applicable.",
      },
    ],
    limit:
      "Carte ou schéma de principe. Seuls les éléments utiles à la comparaison figurent dans le dessin.",
    source: {
      title: "Conseil de l’Europe — Convention européenne, article 6",
      url: "https://www.echr.coe.int/documents/d/echr/convention_fra",
    },
  },
  {
    id: "editionCourtLevels",
    canvasHeight: 270,
    title: "Première instance, appel et cassation",
    paths: [
      "/droit-et-justice/justice-et-institutions/organisation-judiciaire/organisation-tribunaux-en-france",
    ],
    steps: [
      {
        label: "Première instance",
        caption: "La première juridiction saisie examine l’affaire relevant de sa compétence.",
        detail:
          "Le niveau inférieur symbolise la décision initiale. La juridiction compétente découle notamment de la matière et de la procédure.",
      },
      {
        label: "Appel",
        caption:
          "Lorsqu’il est ouvert, l’appel permet un nouvel examen dans la limite de ce qui est contesté.",
        detail:
          "La flèche se déplace vers un autre niveau. Le recours et sa portée dépendent de la décision et du type d’affaire.",
      },
      {
        label: "Cassation",
        caption: "Le contrôle de cassation porte sur l’application du droit.",
        detail:
          "La dernière loupe vise la règle appliquée. En règle générale, ce recours ne cherche pas à rejuger les faits comme le ferait un nouvel examen au fond.",
      },
    ],
    limit:
      "Carte ou schéma de principe. Seuls les éléments utiles à la comparaison figurent dans le dessin.",
    source: {
      title: "Ministère de la Justice — Organisation des cours et tribunaux",
      url: "https://www.justice.gouv.fr/justice-france/lorganisation-cours-tribunaux",
    },
  },
  {
    id: "editionTwoJurisdictions",
    canvasHeight: 270,
    title: "Deux ordres de juridictions en France",
    paths: [
      "/droit-et-justice/justice-et-institutions/organisation-judiciaire/pourquoi-la-france-a-t-elle-deux-ordres-de-juridictions-judiciaire-et-administratif",
    ],
    steps: [
      {
        label: "Judiciaire",
        caption: "L’ordre judiciaire traite notamment des litiges civils et des affaires pénales.",
        detail:
          "Le premier édifice réunit des juridictions de l’ordre judiciaire. La répartition interne dépend de la matière et des parties.",
      },
      {
        label: "Administratif",
        caption:
          "L’ordre administratif connaît de nombreux litiges liés à l’action des administrations.",
        detail:
          "Le second édifice distingue les juridictions administratives. Certaines affaires dans lesquelles intervient une administration relèvent toutefois d’autres règles.",
      },
      {
        label: "Compétence",
        caption: "La nature de l’affaire aide à déterminer l’ordre compétent.",
        detail:
          "Les flèches séparent les deux voies. Le Tribunal des conflits peut résoudre certains conflits de compétence.",
      },
    ],
    limit:
      "Carte ou schéma de principe. Seuls les éléments utiles à la comparaison figurent dans le dessin.",
    source: {
      title: "Ministère de la Justice — Les deux ordres de juridictions",
      url: "https://www.justice.gouv.fr/justice-france/lorganisation-cours-tribunaux",
    },
  },
  {
    id: "editionEmploymentExchange",
    canvasHeight: 270,
    title: "Les éléments d’un contrat de travail",
    paths: [
      "/droit-et-justice/vie-quotidienne-et-droit/droit-du-travail/contrat-de-travail-et-licenciement",
    ],
    steps: [
      {
        label: "Travail",
        caption: "Le contrat organise une prestation de travail.",
        detail:
          "Le geste représente une activité réalisée pour un employeur. Le travail peut être organisé sous des modalités différentes selon le contrat.",
      },
      {
        label: "Rémunération",
        caption: "La prestation est accomplie en contrepartie d’une rémunération.",
        detail:
          "Les pièces symbolisent ce qui est versé en échange du travail. La rémunération peut comporter plusieurs éléments définis par les règles applicables.",
      },
      {
        label: "Subordination",
        caption:
          "L’employeur dispose de pouvoirs d’organisation et de contrôle dans le cadre prévu.",
        detail:
          "La relation entre les acteurs illustre le lien de subordination. Les conditions réelles d’exécution aident à qualifier juridiquement la relation.",
      },
    ],
    limit:
      "Carte ou schéma de principe. Seuls les éléments utiles à la comparaison figurent dans le dessin.",
    source: {
      title: "Légifrance — Code du travail",
      url: "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006072050/",
    },
  },
  {
    id: "editionRemoteWork",
    canvasHeight: 270,
    title: "Comment s’organise le télétravail",
    paths: [
      "/droit-et-justice/vie-quotidienne-et-droit/droit-du-travail/quelles-sont-les-regles-du-teletravail-pour-un-salarie-en-france",
    ],
    steps: [
      {
        label: "Hors du site",
        caption:
          "Le télétravail permet d’exécuter certaines tâches hors des locaux de l’employeur.",
        detail:
          "Le poste et les locaux sont séparés dans la planche. La possibilité dépend des tâches et de l’organisation convenue.",
      },
      {
        label: "Organisation",
        caption:
          "Les modalités du télétravail peuvent encadrer les lieux, les horaires et les outils.",
        detail:
          "Le document relie les deux lieux. Leur articulation dépend notamment de l’accord, de la charte ou des modalités fixées entre les parties.",
      },
      {
        label: "Temps et droits",
        caption:
          "Le télétravail s’inscrit dans les règles du temps de travail et les droits des salariés.",
        detail:
          "Les repères rapprochent lieu de travail et temps de travail. La distance ne fait pas disparaître les règles applicables à la relation.",
      },
    ],
    limit:
      "Carte ou schéma de principe. Seuls les éléments utiles à la comparaison figurent dans le dessin.",
    source: {
      title: "Service Public — Télétravail dans le secteur privé",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F13851",
    },
  },
  {
    id: "editionLoanSchedule",
    canvasHeight: 270,
    title: "Distinguer ce qu’on emprunte et ce qu’on rembourse",
    paths: [
      "/droit-et-justice/vie-quotidienne-et-droit/droit-de-la-consommation/credit-consommation",
    ],
    steps: [
      {
        label: "Capital",
        caption: "Le capital est la somme mise à disposition selon le contrat.",
        detail:
          "Le montant de départ est représenté comme une pile unique. Le calendrier du crédit décrit ensuite des paiements répartis dans le temps.",
      },
      {
        label: "Remboursement",
        caption:
          "Les paiements comprennent le remboursement du capital et peuvent inclure des intérêts et des frais.",
        detail:
          "Les piles illustrent des composantes différentes des échéances. Le montant et la répartition peuvent varier selon le crédit.",
      },
      {
        label: "Comparer",
        caption: "Le TAEG aide à comparer le coût annuel selon une méthode réglementaire.",
        detail:
          "La comparaison doit aussi tenir compte du montant, de la durée et du coût total. Les hauteurs des barres ne sont pas des taux observés.",
      },
    ],
    limit:
      "Schéma de principe. Les montants, proportions et situations sont fictifs, sauf les jalons historiques explicitement datés.",
    source: {
      title: "Service Public — Informations sur le crédit à la consommation",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2440",
    },
  },
  {
    id: "editionGoodsConformity",
    canvasHeight: 270,
    title: "Du produit annoncé à la solution",
    paths: [
      "/droit-et-justice/vie-quotidienne-et-droit/droit-de-la-consommation/la-garantie-legale-de-conformite",
    ],
    steps: [
      {
        label: "Description",
        caption:
          "Les caractéristiques attendues dépendent notamment de la description et du contrat.",
        detail:
          "Le produit annoncé est figuré avec sa fiche. Les exigences de conformité peuvent également découler des règles applicables.",
      },
      {
        label: "Écart",
        caption:
          "Un écart entre le bien livré et ce qui était attendu peut signaler un défaut de conformité.",
        detail:
          "La loupe matérialise le point de comparaison. Une garantie légale s’apprécie selon le bien, la vente et les circonstances.",
      },
      {
        label: "Solution",
        caption:
          "La garantie peut ouvrir des possibilités telles que la réparation ou le remplacement.",
        detail:
          "Les documents montrent l’examen des suites possibles. D’autres solutions existent dans les cas prévus par les textes.",
      },
    ],
    limit:
      "Schéma de principe. Les montants, proportions et situations sont fictifs, sauf les jalons historiques explicitement datés.",
    source: {
      title: "Service Public — Garantie légale de conformité",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11094",
    },
  },
  {
    id: "editionOrderReturn",
    canvasHeight: 270,
    title: "D’un achat à distance à un retour",
    paths: [
      "/droit-et-justice/vie-quotidienne-et-droit/droit-de-la-consommation/peut-on-changer-d-avis-apres-un-achat-en-ligne",
    ],
    steps: [
      {
        label: "Réception",
        caption: "Un achat à distance se conclut avant que le consommateur voie le produit livré.",
        detail:
          "Le colis et la commande distinguent les deux moments. Le point de départ d’un éventuel délai dépend notamment du type de contrat.",
      },
      {
        label: "Rétractation",
        caption:
          "Le droit de rétractation existe pour de nombreux achats à distance et comporte des exceptions.",
        detail:
          "Le repère figure l’information adressée au vendeur. Les ventes et les services ne suivent pas tous les mêmes conditions.",
      },
      {
        label: "Retour",
        caption:
          "Après une rétractation, les suites dépendent des règles applicables à la commande.",
        detail:
          "Les flèches indiquent des échanges distincts. Les conditions de retour et de remboursement dépendent notamment de la nature du bien.",
      },
    ],
    limit:
      "Schéma de principe. Les montants, proportions et situations sont fictifs, sauf les jalons historiques explicitement datés.",
    source: {
      title: "Service Public — Délai de rétractation pour les achats à distance",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F10485",
    },
  },
  {
    id: "editionAdvertisingClaims",
    canvasHeight: 270,
    title: "Les promesses dans une publicité",
    paths: [
      "/droit-et-justice/vie-quotidienne-et-droit/droit-de-la-consommation/pourquoi-une-publicite-n-a-t-elle-pas-le-droit-de-tromper",
    ],
    steps: [
      {
        label: "La promesse",
        caption: "Une publicité peut avancer une caractéristique qui influence le choix.",
        detail:
          "L’affichage représente une promesse portant sur un produit. Une information présentée ou omise peut changer sa perception.",
      },
      {
        label: "Les preuves",
        caption:
          "Une allégation se juge à partir des informations et des éléments disponibles pour l’étayer.",
        detail:
          "La loupe cible ce qui permet de vérifier la promesse. Les conditions de mesure doivent correspondre à la portée de l’allégation.",
      },
      {
        label: "Le choix",
        caption: "La présentation d’une offre peut orienter une décision d’achat.",
        detail:
          "La flèche relie la promesse à un choix. Le caractère trompeur dépend notamment du message et de l’effet qu’il peut avoir dans son contexte.",
      },
    ],
    limit:
      "Schéma de principe. Les montants, proportions et situations sont fictifs, sauf les jalons historiques explicitement datés.",
    source: {
      title: "EUR-Lex — Directive sur les pratiques commerciales déloyales",
      url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj?locale=fr",
    },
  },
  {
    id: "editionVacationTimeline",
    canvasHeight: 270,
    title: "Les congés payés en quatre repères",
    paths: [
      "/droit-et-justice/vie-quotidienne-et-droit/droit-du-travail/comment-les-salaries-ont-ils-obtenu-cinq-semaines-de-conges-payes",
    ],
    steps: [
      {
        label: "1936",
        caption: "La loi généralise deux semaines de congés payés.",
        detail:
          "Les deux blocs colorés représentent les deux semaines du jalon historique. L’accès aux congés avait d’abord progressé dans certains secteurs.",
      },
      {
        label: "1956",
        caption: "Une troisième semaine est ajoutée au minimum légal.",
        detail:
          "La troisième case s’allume pour montrer le changement. Les blocs alignés servent à comparer les étapes de la généralisation.",
      },
      {
        label: "1969",
        caption: "La quatrième semaine est généralisée par la loi.",
        detail:
          "Quatre blocs figurent le nouveau minimum légal du jalon. Certaines catégories de salariés bénéficiaient déjà de dispositions plus favorables.",
      },
      {
        label: "1982",
        caption: "Une cinquième semaine est instituée.",
        detail:
          "Les cinq blocs terminent la frise. Les modalités concrètes de décompte dépendent du cadre dans lequel les congés sont pris.",
      },
    ],
    limit:
      "Schéma de principe. Les montants, proportions et situations sont fictifs, sauf les jalons historiques explicitement datés.",
    source: {
      title: "Assemblée nationale — Proposition de loi de 2019, historique des congés payés",
      url: "https://www.assemblee-nationale.fr/dyn/docs/PIONANR5L15B2097.raw",
    },
  },
  {
    id: "editionStrikeDialogue",
    canvasHeight: 270,
    title: "Le travail, les revendications et la discussion",
    paths: ["/droit-et-justice/vie-quotidienne-et-droit/droit-du-travail/droit-de-greve"],
    steps: [
      {
        label: "Arrêt collectif",
        caption: "Dans le cadre représenté, des salariés cessent collectivement le travail.",
        detail:
          "L’arrêt de l’activité est distingué des autres modes d’action. Les conditions et modalités de la grève peuvent varier selon le secteur.",
      },
      {
        label: "Revendications",
        caption: "Des revendications professionnelles accompagnent la cessation du travail.",
        detail:
          "Le document représente les demandes formulées par les salariés. Les revendications et la manière dont elles sont portées varient selon le mouvement.",
      },
      {
        label: "Discussion",
        caption: "Une discussion peut permettre de rechercher une issue au conflit.",
        detail:
          "La table réunit les acteurs après la formulation des demandes. Le dessin présente une possibilité et ne suppose pas qu’un accord soit atteint.",
      },
    ],
    limit:
      "Schéma de principe. Les montants, proportions et situations sont fictifs, sauf les jalons historiques explicitement datés.",
    source: {
      title: "Service Public — Grève dans le secteur privé",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F117",
    },
  },
  {
    id: "editionBodinPrices",
    canvasHeight: 270,
    title: "Le raisonnement de Jean Bodin sur les prix",
    paths: [
      "/sciences-humaines-et-sociales/economie/macroeconomie/pourquoi-les-prix-ont-ils-flambe-au-xvie-siecle-selon-jean-bodin",
    ],
    steps: [
      {
        label: "Monnaie",
        caption:
          "Bodin a relié la hausse des prix à une plus grande abondance de métaux précieux et de monnaie.",
        detail:
          "Les pièces figurent l’une des variables qu’il examine. Leur hauteur n’indique aucune quantité historique mesurée.",
      },
      {
        label: "Prix",
        caption: "Une même marchandise peut demander plus de monnaie quand son prix augmente.",
        detail:
          "Le panier représente un bien comparable au fil du temps. L’échange permet de distinguer la quantité disponible de son prix nominal.",
      },
      {
        label: "Explication",
        caption: "L’abondance monétaire fait partie des explications proposées par Bodin.",
        detail:
          "Les repères rapprochent monnaie et prix dans son argument. La planche ne transforme pas cette explication historique en cause unique.",
      },
    ],
    limit:
      "Schéma de principe. Les montants, proportions et situations sont fictifs, sauf les jalons historiques explicitement datés.",
    source: {
      title: "Université de Tours — Fac-similé des Paradoxes et de la réponse de Bodin",
      url: "https://www.bvh.univ-tours.fr/Consult/index.asp?numfiche=1430&numtable=B721816101_SA8_1092",
    },
  },
  {
    id: "editionReserveBuffer",
    canvasHeight: 270,
    title: "Le rôle d’une épargne de précaution",
    paths: ["/sciences-humaines-et-sociales/economie/microeconomie/epargne-de-precaution"],
    steps: [
      {
        label: "Réserve disponible",
        caption: "Une réserve permet de garder de l’argent disponible pour une dépense imprévue.",
        detail:
          "Le volume initial représente une somme mise de côté. Sa taille ne correspond à aucun montant ni recommandation personnelle.",
      },
      {
        label: "Imprévu",
        caption: "Une dépense inattendue peut être couverte par une partie de la réserve.",
        detail:
          "La flèche sort du fonds vers la dépense. La portion dessinée sert à montrer l’usage du fonds, sans représenter de montant type.",
      },
      {
        label: "Après la dépense",
        caption: "Une réserve employée peut se reconstituer progressivement.",
        detail:
          "Les dépôts figurent des apports possibles après l’événement. Leur rythme dépend de ce qui demeure disponible après les dépenses courantes.",
      },
    ],
    limit:
      "Schéma de principe. Les montants, proportions et situations sont fictifs, sauf les jalons historiques explicitement datés.",
    source: {
      title: "Banque de France — Comprendre l’épargne de précaution",
      url: "https://www.mesquestionsdargent.fr/epargne-et-placements/epargne-de-precaution",
    },
  },
  {
    id: "editionBudgetEnvelope",
    canvasHeight: 270,
    title: "Lire les écarts dans un budget",
    paths: ["/sciences-humaines-et-sociales/economie/microeconomie/tenir-son-budget-personnel"],
    steps: [
      {
        label: "Recettes",
        caption: "Un budget rapproche les sommes disponibles et les dépenses d’une période.",
        detail:
          "Le premier registre situe les recettes dans la période représentée. Les sommes réellement disponibles peuvent varier d’un mois à l’autre.",
      },
      {
        label: "Dépenses",
        caption: "Répartir les dépenses par poste aide à voir leur poids relatif.",
        detail:
          "Les enveloppes représentent des catégories. Leur taille symbolique aide à comparer les rubriques sans donner de règle de répartition.",
      },
      {
        label: "Écarts",
        caption: "Comparer prévu et réalisé permet de repérer ce qui a changé.",
        detail:
          "Le dernier registre rapproche deux observations. Les écarts peuvent venir des dépenses, des recettes ou d’un changement de calendrier.",
      },
    ],
    limit:
      "Schéma de principe. Les montants, proportions et situations sont fictifs, sauf les jalons historiques explicitement datés.",
    source: {
      title: "Banque de France — Gérer son budget",
      url: "https://www.mesquestionsdargent.fr/budget/budget-enfant/tuto-comment-gerer-efficacement-son-budget",
    },
  },
  {
    id: "editionSportRevenue",
    canvasHeight: 270,
    title: "D’où peuvent venir les recettes du sport",
    paths: [
      "/sport-et-sciences-du-mouvement/sport-et-societe/economie-du-sport/economie-mondiale-du-sport",
    ],
    steps: [
      {
        label: "Billetterie",
        caption: "Des spectateurs paient pour assister à un événement.",
        detail:
          "Les places et les billets figurent une recette liée à la fréquentation. Son poids diffère selon les disciplines et les organisations.",
      },
      {
        label: "Diffusion",
        caption: "Des droits de diffusion peuvent être vendus pour montrer une compétition.",
        detail:
          "La caméra matérialise un contrat de diffusion. Le modèle dépend du public, du marché et de la structure de la compétition.",
      },
      {
        label: "Partenariats",
        caption:
          "Des partenaires et d’autres échanges peuvent fournir des recettes supplémentaires.",
        detail:
          "La planche relie plusieurs sources au même événement. Un club, un organisateur et une ligue ne perçoivent pas nécessairement les mêmes revenus.",
      },
    ],
    limit:
      "Schéma de principe. Les montants, proportions et situations sont fictifs, sauf les jalons historiques explicitement datés.",
    source: {
      title: "UEFA — Rapport sur les finances des clubs européens",
      url: "https://ecfil.uefa.com/",
    },
  },
  {
    id: "editionEmissionsTest",
    canvasHeight: 270,
    title: "Du cycle de mesure à la conformité",
    paths: ["/automobile/industrie-automobile/reglementation-automobile/normes-demissions-euro"],
    steps: [
      {
        label: "Mise à l’essai",
        caption:
          "Les émissions d’un véhicule peuvent être mesurées pendant un cycle de conduite défini.",
        detail:
          "Le véhicule et le tracé représentent le déroulement d’un essai. Les procédures européennes comportent des conditions et des méthodes distinctes.",
      },
      {
        label: "Polluants",
        caption:
          "Les règles peuvent viser des polluants différents selon le véhicule et la procédure.",
        detail:
          "Les repères symbolisent différentes substances mesurées. Le CO₂ et les polluants locaux sont suivis selon des cadres distincts.",
      },
      {
        label: "Conformité",
        caption: "La mesure s’interprète au regard des limites et de la procédure applicables.",
        detail:
          "Les résultats et limites sont rapprochés. Les niveaux du dessin sont fictifs et ne décrivent aucune réglementation particulière.",
      },
    ],
    limit:
      "Système et situation de principe. Les trajets, règles et responsabilités dépendent du cadre applicable.",
    source: {
      title: "Commission européenne — Réception des véhicules et émissions",
      url: "https://single-market-economy.ec.europa.eu/sectors/automotive-industry/technical-harmonisation/faq-type-approval-vehicles_en",
    },
  },
  {
    id: "editionRoadZone",
    canvasHeight: 270,
    title: "Comment lire une restriction dans une zone",
    paths: [
      "/automobile/industrie-automobile/reglementation-automobile/zones-faibles-emissions-automobile",
    ],
    steps: [
      {
        label: "Périmètre",
        caption: "Une restriction s’applique à un périmètre défini.",
        detail:
          "Le contour sur la carte représente une zone fictive. Les voies de bordure ou de traversée peuvent être soumises à des règles particulières.",
      },
      {
        label: "Véhicule",
        caption: "Les restrictions peuvent dépendre de la catégorie du véhicule et de la date.",
        detail:
          "Les véhicules distinguent des cas possibles. Le dessin ne correspond à aucune ville et ne prévoit pas d’autorisation de circulation.",
      },
      {
        label: "Règles locales",
        caption:
          "Le périmètre, les exceptions et les horaires se lisent dans les règles applicables.",
        detail:
          "Le document précise les conditions de la carte. Ces informations peuvent changer au fil du temps.",
      },
    ],
    limit:
      "Système et situation de principe. Les trajets, règles et responsabilités dépendent du cadre applicable.",
    source: {
      title: "Service Public — Zones à faibles émissions",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A17999?lang=fr",
    },
  },
  {
    id: "editionFuelOrigins",
    canvasHeight: 270,
    title: "Deux familles de carburants",
    paths: [
      "/automobile/motorisations/carburants-alternatifs/biocarburants-et-carburants-de-synthese",
    ],
    steps: [
      {
        label: "Matière biologique",
        caption: "Un biocarburant utilise une matière première d’origine biologique.",
        detail:
          "Les formes représentent des matières premières possibles, dont des résidus. Les voies de conversion dépendent de la matière et du carburant produit.",
      },
      {
        label: "Voie de synthèse",
        caption: "Une voie de synthèse peut associer de l’hydrogène et une source de carbone.",
        detail:
          "Les flux convergent vers une installation. Les carburants de synthèse s’obtiennent par plusieurs voies et l’origine de leurs intrants varie.",
      },
      {
        label: "Cycle de vie",
        caption: "Le bilan dépend aussi de la production, du transport et de l’énergie utilisée.",
        detail:
          "La flèche de retour élargit la vue au-delà du véhicule. Les deux familles ne produisent pas automatiquement le même bilan d’émissions.",
      },
    ],
    limit:
      "Système et situation de principe. Les trajets, règles et responsabilités dépendent du cadre applicable.",
    source: {
      title: "AIE — Carburants de synthèse pour le transport",
      url: "https://www.iea.org/reports/the-role-of-e-fuels-in-decarbonising-transport",
    },
  },
  {
    id: "editionOilToFuel",
    canvasHeight: 270,
    title: "Suivre une huile usagée jusqu’au carburant",
    paths: [
      "/automobile/motorisations/carburants-alternatifs/comment-transforme-t-on-de-l-huile-de-friture-usagee-en-carburant",
    ],
    steps: [
      {
        label: "Collecte",
        caption: "L’huile de friture usagée est récupérée comme matière première.",
        detail:
          "Le récipient représente la collecte et l’entrée dans une filière. La composition de l’huile et ses impuretés varient selon sa provenance.",
      },
      {
        label: "Conversion",
        caption:
          "Une installation transforme des composants de l’huile pour produire un carburant.",
        detail:
          "Les cuves montrent l’échelle industrielle. Il existe plusieurs voies, dont celle qui transforme les corps gras en esters de biodiesel.",
      },
      {
        label: "Contrôle",
        caption: "La filière vérifie les caractéristiques du carburant obtenu avant son usage.",
        detail:
          "Le produit final rejoint un contrôle de qualité. L’huile de départ et le carburant répondent à des caractéristiques différentes.",
      },
    ],
    limit:
      "Système et situation de principe. Les trajets, règles et responsabilités dépendent du cadre applicable.",
    source: {
      title: "Département de l’Énergie des États-Unis — Production de biodiesel",
      url: "https://afdc.energy.gov/fuels/biodiesel-production",
    },
  },
  {
    id: "editionRobotaxiZone",
    canvasHeight: 270,
    title: "Le domaine d’exploitation d’un robotaxi",
    paths: [
      "/automobile/securite-et-conduite/conduite-autonome/securite-des-vehicules-autonomes-waymo",
    ],
    steps: [
      {
        label: "Zone prévue",
        caption: "Un service automatisé est conçu pour certaines conditions d’exploitation.",
        detail:
          "Le tracé délimite un exemple de zone autorisée par la conception du service. Le type de route, la météo et la visibilité peuvent aussi compter.",
      },
      {
        label: "En bordure",
        caption: "Le comportement prévu peut changer quand le véhicule rencontre une limite.",
        detail:
          "Le repère situe la transition vers une situation extérieure au domaine. La réponse dépend des fonctions et conditions définies par le système.",
      },
      {
        label: "Suivi du service",
        caption: "L’exploitant peut superviser ou assister certains aspects du service.",
        detail:
          "Le poste et le véhicule représentent des acteurs distincts. La nature du suivi varie selon le service et le cadre réglementaire.",
      },
    ],
    limit:
      "Système et situation de principe. Les trajets, règles et responsabilités dépendent du cadre applicable.",
    source: {
      title: "NHTSA — Sécurité et véhicules automatisés",
      url: "https://www.nhtsa.gov/vehicle-safety/automated-vehicles-safety",
    },
  },
  {
    id: "editionCarDataRoute",
    canvasHeight: 270,
    title: "Le trajet possible des données d’une voiture",
    paths: ["/automobile/securite-et-conduite/donnees-voiture-vie-privee"],
    steps: [
      {
        label: "Dans le véhicule",
        caption: "Des capteurs produisent des informations utiles à différentes fonctions.",
        detail:
          "Les points représentent des données comme la position ou un état du véhicule. Certaines peuvent être traitées seulement à bord.",
      },
      {
        label: "Transfert",
        caption:
          "Des données peuvent être transmises à un service externe selon la fonction utilisée.",
        detail:
          "La flèche sort du véhicule vers un autre acteur. Le traitement local et le transfert externe entraînent des questions différentes.",
      },
      {
        label: "Usage et droits",
        caption:
          "L’usage et la conservation des données dépendent de leur finalité et du cadre applicable.",
        detail:
          "Le dossier symbolise leur gestion dans la durée. Certains droits peuvent être exercés auprès de l’organisme responsable.",
      },
    ],
    limit:
      "Système et situation de principe. Les trajets, règles et responsabilités dépendent du cadre applicable.",
    source: {
      title: "CNIL — Véhicules connectés et traitement des données",
      url: "https://www.cnil.fr/fr/vehicules-connectes-un-pack-de-conformite-pour-une-utilisation-responsable-des-donnees",
    },
  },
  {
    id: "editionMediaTrustSurvey",
    canvasHeight: 270,
    title: "Lire un sondage sur la confiance envers les médias",
    paths: [
      "/communication-et-medias/information-et-verification/journalisme/dans-quels-pays-fait-on-le-plus-confiance-aux-medias",
    ],
    steps: [
      {
        label: "La question",
        caption: "Les résultats dépendent de la question posée et des personnes interrogées.",
        detail:
          "La fiche représente le questionnaire et les silhouettes l’échantillon. L’expression confiance envers les médias peut couvrir plusieurs questions proches.",
      },
      {
        label: "Comparer",
        caption: "On peut comparer des réponses recueillies au moyen d’une méthode commune.",
        detail:
          "Les barres sont fictives et servent à illustrer une comparaison. Elles ne donnent le score d’aucun pays.",
      },
      {
        label: "Même cadre",
        caption: "Les comparaisons demandent de regarder l’année, l’échantillon et la formulation.",
        detail:
          "Deux mesures peuvent différer par leur contexte. Le dernier dessin met en regard ce qui doit rester comparable.",
      },
    ],
    limit:
      "Système et situation de principe. Les trajets, règles et responsabilités dépendent du cadre applicable.",
    source: {
      title: "Reuters Institute — Digital News Report 2025",
      url: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/dnr-executive-summary",
    },
  },
  {
    id: "editionOversightPlatform",
    canvasHeight: 270,
    title: "Les obligations et contrôles du règlement européen",
    paths: [
      "/communication-et-medias/medias-numeriques/plateformes-et-moderation/comment-le-reglement-europeen-sur-les-services-numeriques-encadre-t-il-les-grandes-plateformes",
    ],
    steps: [
      {
        label: "Transparence",
        caption:
          "Les services concernés doivent expliquer certaines pratiques et publier des informations.",
        detail:
          "Le registre illustre un accès à des renseignements sur le fonctionnement du service. Les obligations diffèrent selon sa nature et sa taille.",
      },
      {
        label: "Risques systémiques",
        caption:
          "Les très grandes plateformes et les très grands moteurs visés doivent évaluer certains risques.",
        detail:
          "Le périmètre s’élargit d’un contenu à des effets à grande échelle. Le règlement prévoit aussi des mesures d’atténuation pour les services concernés.",
      },
      {
        label: "Contrôle",
        caption:
          "Des autorités compétentes examinent le respect des obligations dans le cadre prévu.",
        detail:
          "La loupe figure un contrôle ou une demande d’information. La répartition des pouvoirs dépend de l’obligation et du service.",
      },
    ],
    limit:
      "Système et situation de principe. Les trajets, règles et responsabilités dépendent du cadre applicable.",
    source: {
      title: "Commission européenne — Législation sur les services numériques",
      url: "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package",
    },
  },
  {
    id: "editionModerationQueue",
    canvasHeight: 270,
    title: "Du signalement au recours",
    paths: [
      "/communication-et-medias/medias-numeriques/plateformes-et-moderation/moderation-des-contenus-en-ligne",
    ],
    steps: [
      {
        label: "Tri",
        caption: "Les signalements sont orientés vers les procédures pertinentes.",
        detail:
          "Des messages arrivent dans une file fictive. La priorité peut varier selon leur nature et la manière dont le service organise leur examen.",
      },
      {
        label: "Examen",
        caption: "Le service examine le contenu et le contexte au regard des règles applicables.",
        detail:
          "Le dossier sélectionné représente un élément à vérifier. Des outils automatisés peuvent aider au traitement avec des procédures variables.",
      },
      {
        label: "Motifs",
        caption: "Une restriction peut donner lieu à une explication de la décision.",
        detail:
          "Le document relie un résultat à ses motifs. Le droit applicable peut exiger que certaines informations soient communiquées à la personne concernée.",
      },
      {
        label: "Recours",
        caption: "Un mécanisme de recours permet de contester certaines décisions.",
        detail:
          "La flèche renvoie vers un autre examen. Les modalités et les résultats possibles dépendent du service et du cadre juridique.",
      },
    ],
    limit:
      "Système et situation de principe. Les trajets, règles et responsabilités dépendent du cadre applicable.",
    source: {
      title: "Commission européenne — Signalement, motivation et recours dans le DSA",
      url: "https://digital-strategy.ec.europa.eu/en/policies/dsa-notice-and-action-mechanism",
    },
  },
  {
    id: "editionRegulatorRoles",
    canvasHeight: 270,
    title: "Ce qu’un régulateur peut examiner",
    paths: [
      "/communication-et-medias/medias-numeriques/plateformes-et-moderation/que-fait-l-arcom-face-aux-fausses-informations",
    ],
    steps: [
      {
        label: "Observer",
        caption: "L’Arcom suit des pratiques et des obligations relevant de ses missions.",
        detail:
          "Le regard porte sur le fonctionnement d’un service. Les pouvoirs de l’Arcom se définissent par les textes qui lui attribuent une compétence.",
      },
      {
        label: "Demander des éléments",
        caption: "Des informations peuvent être demandées aux acteurs dans le cadre d’un contrôle.",
        detail:
          "Le registre représente des éléments utiles pour vérifier une obligation. Les exigences de coopération varient selon le cadre en cause.",
      },
      {
        label: "Décider",
        caption: "Une suite éventuelle s’inscrit dans une procédure et une compétence définies.",
        detail:
          "La dernière vue sépare analyse et décision. Un même contenu peut aussi soulever des questions relevant d’une plateforme ou d’une autre autorité.",
      },
    ],
    limit:
      "Système et situation de principe. Les trajets, règles et responsabilités dépendent du cadre applicable.",
    source: {
      title: "Arcom — Missions sur Internet et les réseaux sociaux",
      url: "https://www.arcom.fr/internet-et-reseaux-sociaux",
    },
  },
  {
    id: "editionWildfireLandscape",
    canvasHeight: 270,
    title: "Le relief, le vent et les enjeux d’un feu",
    paths: [
      "/environnement-et-climat/biodiversite/forets-et-oceans/comment-lutte-t-on-contre-un-feu-de-foret",
    ],
    steps: [
      {
        label: "Paysage",
        caption: "La végétation et le relief influencent le comportement d’un feu.",
        detail:
          "La vue en perspective montre des pentes et différents secteurs du terrain. Les zones colorées représentent un paysage fictif.",
      },
      {
        label: "Vent",
        caption: "Le vent peut faire évoluer le front du feu et la direction des fumées.",
        detail:
          "La flèche représente une direction à un instant donné. La propagation réelle dépend de plusieurs facteurs qui peuvent changer rapidement.",
      },
      {
        label: "Protection",
        caption: "La protection des personnes et des lieux exposés oriente l’intervention.",
        detail:
          "Les repères isolent des secteurs à protéger. Les décisions appartiennent aux équipes compétentes et s’adaptent à l’évolution du terrain.",
      },
    ],
    limit:
      "Coupe ou vue de principe, hors échelle. Les dimensions, flux et installations sont stylisés.",
    source: {
      title: "Ministère de la Transition écologique — Feux de forêt et de végétation",
      url: "https://www.ecologie.gouv.fr/feux-foret-vegetation-ayons-bons-reflexes",
    },
  },
  {
    id: "editionPlumeExposure",
    canvasHeight: 270,
    title: "D’une source à l’air respiré",
    paths: [
      "/environnement-et-climat/pollution-et-ressources/qualite-de-l-air/pollution-de-lair-ambiant-risque-sanitaire",
    ],
    steps: [
      {
        label: "Source",
        caption:
          "Des activités humaines et des phénomènes naturels émettent des substances dans l’air.",
        detail:
          "La cheminée représente un exemple de source. Plusieurs sources diffuses ou fixes peuvent contribuer aux concentrations observées.",
      },
      {
        label: "Transport",
        caption: "Les polluants sont transportés et certains se transforment dans l’atmosphère.",
        detail:
          "Le panache varie avec les mouvements de l’air. Une partie des polluants peut aussi se former après les émissions, au cours de réactions.",
      },
      {
        label: "Exposition",
        caption:
          "L’exposition correspond à ce que les personnes rencontrent dans les lieux et au cours du temps.",
        detail:
          "Le repère est placé là où l’air est respiré. Émissions, concentration ambiante et exposition décrivent des grandeurs différentes.",
      },
    ],
    limit:
      "Coupe ou vue de principe, hors échelle. Les dimensions, flux et installations sont stylisés.",
    source: {
      title: "OMS — Pollution de l’air et exposition",
      url: "https://www.who.int/health-topics/air-pollution",
    },
  },
  {
    id: "editionStrategicMinerals",
    canvasHeight: 270,
    title: "Du sous-sol à la chaîne de valeur",
    paths: [
      "/geographie-et-territoires/geopolitique/ressources/repartition-mondiale-lithium-ressource-strategique",
    ],
    steps: [
      {
        label: "Ressource",
        caption:
          "Des minerais peuvent fournir des composants dont dépendent des technologies importantes.",
        detail:
          "Le bloc rocheux représente une ressource en place. Sa présence ne garantit ni faisabilité d’extraction ni disponibilité commerciale.",
      },
      {
        label: "Transformation",
        caption: "Le minerai doit souvent être traité ou raffiné avant d’être utilisé.",
        detail:
          "La trajectoire relie deux étapes qui peuvent se dérouler dans des lieux différents. Les capacités de transformation comptent autant que les gisements pour certains usages.",
      },
      {
        label: "Dépendances",
        caption: "Une concentration de l’approvisionnement peut exister à plusieurs étapes.",
        detail:
          "Les liens entre l’extraction, le raffinage et les usages forment une chaîne. Le caractère critique varie selon la demande, les substitutions et les fournisseurs.",
      },
    ],
    limit:
      "Coupe ou vue de principe, hors échelle. Les dimensions, flux et installations sont stylisés.",
    source: {
      title: "AIE — Minéraux critiques et chaînes d’approvisionnement",
      url: "https://www.iea.org/topics/critical-minerals",
    },
  },
  {
    id: "editionAlkaliCompare",
    canvasHeight: 270,
    title: "Deux sels de la famille des carbonates",
    paths: ["/industries/industrie-lourde/chimie-industrielle/soude-potasse"],
    steps: [
      {
        label: "Ion partagé",
        caption:
          "Le carbonate de sodium et le carbonate de potassium ont l’ion carbonate en commun.",
        detail:
          "Les signes CO₃²⁻ représentent le même ion dans les deux contenants. Il s’agit d’un modèle d’ions et non d’un dessin de grains de matière.",
      },
      {
        label: "Sodium et potassium",
        caption: "Deux ions sodium ou deux ions potassium compensent la charge du carbonate.",
        detail:
          "Le haut des contenants met en évidence les deux ions associés au carbonate. Un même anion n’implique pas que les deux sels aient toutes les mêmes propriétés.",
      },
      {
        label: "Nom et usage",
        caption: "Les carbonates ont des usages industriels différents selon le sel et le procédé.",
        detail:
          "La planche compare deux substances précises. Les noms usuels soude et potasse peuvent aussi désigner d’autres composés, notamment des hydroxydes.",
      },
    ],
    limit:
      "Coupe ou vue de principe, hors échelle. Les dimensions, flux et installations sont stylisés.",
    source: {
      title: "Département de l’Énergie des États-Unis — Potasse et carbonate de sodium",
      url: "https://www.energy.gov/sites/prod/files/2013/11/f4/potash_soda_borate.pdf",
    },
  },
  {
    id: "editionProductionRobot",
    canvasHeight: 270,
    title: "Une cellule de production robotisée",
    paths: [
      "/industries/industrie-manufacturiere/automatisation/pourquoi-la-france-cherche-t-elle-a-reindustrialiser-et-quel-role-jouent-les-robots",
    ],
    steps: [
      {
        label: "La tâche",
        caption:
          "Un bras peut répéter un mouvement défini pour déplacer une pièce ou agir sur elle.",
        detail:
          "Le bras et l’outil isolent une opération. Les capacités dépendent de l’outil monté et de la façon dont la tâche est conçue.",
      },
      {
        label: "Le positionnement",
        caption: "Les supports et les capteurs aident à présenter la pièce au bon endroit.",
        detail:
          "Les repères rendent visible la préparation en amont du geste. L’outil, les pièces et le poste sont conçus pour fonctionner ensemble.",
      },
      {
        label: "L’organisation",
        caption:
          "Robotiser un poste modifie aussi des tâches de préparation, de réglage et de maintenance.",
        detail:
          "La vue s’élargit au poste et à son environnement. Les effets sur la production et le travail dépendent de l’organisation réelle.",
      },
    ],
    limit:
      "Coupe ou vue de principe, hors échelle. Les dimensions, flux et installations sont stylisés.",
    source: {
      title: "OSHA — Robots industriels et organisation des postes",
      url: "https://www.osha.gov/otm/section-4-safety-hazards/chapter-4",
    },
  },
  {
    id: "editionCellFactory",
    canvasHeight: 270,
    title: "Les opérations d’une usine de cellules",
    paths: [
      "/industries/industrie-manufacturiere/chaine-logistique/pourquoi-l-europe-construit-elle-des-usines-geantes-de-batteries-et-reussissent-elles",
    ],
    steps: [
      {
        label: "Électrodes",
        caption:
          "La fabrication commence notamment par des opérations de préparation et de traitement des électrodes.",
        detail:
          "Les rouleaux et couches figurent une ligne de principe. Les matériaux et procédés dépendent du type de cellule.",
      },
      {
        label: "Cellules",
        caption: "Des électrodes et d’autres composants sont assemblés pour former des cellules.",
        detail:
          "La vue met en évidence la transition entre des couches et un ensemble utilisable. Les étapes se déroulent sous des conditions industrielles contrôlées.",
      },
      {
        label: "Contrôles",
        caption:
          "Des essais et le suivi de la production permettent d’évaluer la qualité et le rendement.",
        detail:
          "Les repères représentent des contrôles en ligne ou après assemblage. La capacité annoncée et la production de cellules conformes décrivent deux notions distinctes.",
      },
    ],
    limit:
      "Coupe ou vue de principe, hors échelle. Les dimensions, flux et installations sont stylisés.",
    source: {
      title: "Argonne National Laboratory — Modèle de production BatPaC",
      url: "https://www.anl.gov/partnerships/batpac-battery-manufacturing-cost-estimation",
    },
  },
  {
    id: "editionChipSupplyMap",
    canvasHeight: 270,
    title: "Les maillons de la fabrication d’une puce",
    paths: ["/micro-informatique-et-informatique/materiel/processeurs/tsmc-geopolitique-puces"],
    steps: [
      {
        label: "Concevoir",
        caption: "Des équipes définissent les fonctions et la disposition des circuits.",
        detail:
          "Le dessin symbolise un plan de circuits. Les outils de conception et les blocs réutilisables peuvent venir d’acteurs distincts.",
      },
      {
        label: "Fabriquer",
        caption: "Une fonderie produit des circuits sur des tranches de matériau semi-conducteur.",
        detail:
          "Le disque figure une tranche avant découpe. Cette étape utilise des procédés et équipements hautement spécialisés.",
      },
      {
        label: "Assembler et tester",
        caption:
          "Les puces sont testées et intégrées dans des boîtiers ou ensembles avant leur usage.",
        detail:
          "Le composant final combine plusieurs opérations. Une entreprise comme TSMC intervient dans certains maillons d’une chaîne qui en comporte d’autres.",
      },
    ],
    limit:
      "Coupe ou vue de principe, hors échelle. Les dimensions, flux et installations sont stylisés.",
    source: {
      title: "TSMC — Services de fonderie et fabrication de semi-conducteurs",
      url: "https://www.tsmc.com/english/aboutTSMC",
    },
  },
  {
    id: "editionFailureBarriers",
    canvasHeight: 270,
    title: "Quand plusieurs barrières peuvent céder",
    paths: [
      "/technologies-et-ingenierie/conception-et-fiabilite/defaillances-et-retour-dexperience/defaillances-techniques-et-causes-multiples",
    ],
    steps: [
      {
        label: "Barrières",
        caption: "Plusieurs protections peuvent s’interposer entre un danger et un accident.",
        detail:
          "Les écrans symbolisent des mesures matérielles et organisationnelles. Chacun représente une occasion différente de détecter ou de bloquer un problème.",
      },
      {
        label: "Lacunes",
        caption:
          "Une combinaison de défaillances peut rendre l’ensemble des protections insuffisant.",
        detail:
          "Le trajet traverse des ouvertures dans les écrans. Leur alignement est une métaphore de la combinaison des causes, sans forme physique unique.",
      },
      {
        label: "Indépendance",
        caption:
          "Des protections séparées réduisent le risque qu’une même cause affecte plusieurs barrières.",
        detail:
          "Les repères modifient l’organisation des barrières. La conception tient compte des causes communes ainsi que de la fiabilité de chacune.",
      },
    ],
    limit:
      "Coupe ou vue de principe, hors échelle. Les dimensions, flux et installations sont stylisés.",
    source: {
      title: "James Reason — Modèles d’erreur humaine et barrières de protection",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1117770/",
    },
  },
  {
    id: "editionWellAquifer",
    canvasHeight: 270,
    title: "Un captage souterrain vu en coupe",
    paths: [
      "/technologies-et-ingenierie/genie-civil/ouvrages-dart/la-construction-de-puits-et-de-forages",
    ],
    steps: [
      {
        label: "Couche perméable",
        caption:
          "Une nappe occupe des pores ou des fissures dans un milieu qui peut transmettre l’eau.",
        detail:
          "La couche texturée matérialise des sédiments ou des roches perméables. L’eau occupe les vides du milieu et ne forme pas nécessairement un lac sous terre.",
      },
      {
        label: "Captage",
        caption: "Un forage ouvert sur un niveau aquifère peut permettre d’en prélever de l’eau.",
        detail:
          "Le tube rejoint la couche représentée. La coupe montre le principe et aucun détail dimensionnel ou procédé d’installation.",
      },
      {
        label: "Protection",
        caption:
          "L’environnement du captage et les caractéristiques du sous-sol comptent pour protéger l’eau.",
        detail:
          "Les repères distinguent la surface et la zone captée. Le suivi et les mesures de protection dépendent du site et de l’usage.",
      },
    ],
    limit:
      "Coupe ou vue de principe, hors échelle. Les dimensions, flux et installations sont stylisés.",
    source: {
      title: "USGS — Pourquoi l’eau souterraine se trouve dans des aquifères",
      url: "https://www.usgs.gov/special-topics/water-science-school/science/aquifers-and-groundwater",
    },
  },
  {
    id: "editionNanoScale",
    canvasHeight: 270,
    title: "Voir les changements d’échelle",
    paths: [
      "/technologies-et-ingenierie/nanotechnologies/applications/applications-nanotechnologies-medecine-industrie",
    ],
    steps: [
      {
        label: "Comparer",
        caption: "Un nanomètre est un milliardième de mètre.",
        detail:
          "Les cadres symbolisent des niveaux d’agrandissement et non des rapports mesurables à l’écran. Les objets réels ne sont pas représentés à la même échelle.",
      },
      {
        label: "Couche mince",
        caption:
          "Une couche peut avoir une épaisseur nanométrique tout en couvrant une surface plus grande.",
        detail:
          "La coupe isole l’épaisseur à mesurer. La taille d’une structure sur un axe n’impose pas la même dimension sur les autres axes.",
      },
      {
        label: "Propriétés",
        caption:
          "À très petite échelle, certaines propriétés varient avec la taille, la structure et la composition.",
        detail:
          "Les formes mettent en regard des arrangements différents. Les effets ne sont pas communs à tous les nanomatériaux.",
      },
    ],
    limit:
      "Coupe ou vue de principe, hors échelle. Les dimensions, flux et installations sont stylisés.",
    source: {
      title: "National Nanotechnology Initiative — Dimensions et échelle du nanomètre",
      url: "https://www.nano.gov/nanotech-101/what/nano-size",
    },
  },
  {
    id: "editionProgramLayers",
    canvasHeight: 270,
    title: "Du code au comportement d’un programme",
    paths: [
      "/micro-informatique-et-informatique/logiciel/programmation/histoire-principes-langages-programmation",
    ],
    steps: [
      {
        label: "Écrire",
        caption: "Un langage permet d’exprimer des opérations selon une syntaxe et des règles.",
        detail:
          "La page représente des instructions écrites pour un programme. La manière de décrire un problème change d’un langage à l’autre.",
      },
      {
        label: "Traduire ou interpréter",
        caption: "Un environnement transforme ou interprète les instructions pour les exécuter.",
        detail:
          "Les couches intermédiaires représentent des traitements possibles. Certains environnements combinent compilation et interprétation.",
      },
      {
        label: "Exécuter",
        caption:
          "Une exécution produit des effets ou des résultats observables dans un environnement donné.",
        detail:
          "L’affichage montre un résultat possible des instructions. Les données d’entrée et les conditions du système participent aussi au résultat.",
      },
    ],
    limit:
      "Exemple illustratif. Les groupes, tracés et proportions ne reproduisent pas des mesures individuelles.",
    source: {
      title: "LLVM — Du langage à son exécution",
      url: "https://llvm.org/docs/tutorial/",
    },
  },
  {
    id: "editionBlindTrial",
    canvasHeight: 270,
    title: "Ce que change l’aveugle dans un essai",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/medecine-fondee-sur-les-preuves/le-double-aveugle-eliminer-les-biais-d-attente",
    ],
    steps: [
      {
        label: "Comparer",
        caption:
          "Un essai répartit des participants entre des groupes qui reçoivent des interventions définies.",
        detail:
          "Les silhouettes illustrent deux groupes fictifs. L’attribution aléatoire et le masquage répondent à des problèmes méthodologiques différents.",
      },
      {
        label: "Masquer",
        caption:
          "Le masquage garde l’attribution inconnue à des personnes définies par le protocole.",
        detail:
          "L’écran représente l’information retenue. Il importe de connaître exactement qui ignore l’attribution, par exemple participants, soignants ou évaluateurs.",
      },
      {
        label: "Analyser",
        caption: "Les résultats sont comparés selon une méthode établie à l’avance.",
        detail:
          "La scène sépare le recueil de l’analyse. Le masquage peut réduire certains biais sans régler à lui seul tous les problèmes de l’essai.",
      },
    ],
    limit:
      "Exemple illustratif. Les groupes, tracés et proportions ne reproduisent pas des mesures individuelles.",
    source: {
      title: "CONSORT — Le masquage et le compte rendu des essais",
      url: "https://www.consort-spirit.org/",
    },
  },
  {
    id: "editionEvidenceComparison",
    canvasHeight: 270,
    title: "Trois façons de produire des connaissances",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/medecine-fondee-sur-les-preuves/niveaux-de-preuve-en-medecine",
    ],
    steps: [
      {
        label: "Observer un cas",
        caption: "Un cas peut faire apparaître un phénomène ou suggérer une hypothèse.",
        detail:
          "Le dossier isole une observation. Sans groupe comparateur, plusieurs explications peuvent rester compatibles avec le cas observé.",
      },
      {
        label: "Comparer",
        caption: "Des groupes comparables aident à examiner une différence de résultat.",
        detail:
          "Le dessin met plusieurs observations en regard. La qualité de la comparaison dépend notamment de la sélection, des mesures et du protocole.",
      },
      {
        label: "Synthétiser",
        caption: "Une revue systématique rassemble des études répondant à une question définie.",
        detail:
          "Le registre superpose des résultats. La synthèse dépend de la qualité des études et de ce qu’il est pertinent de comparer.",
      },
    ],
    limit:
      "Exemple illustratif. Les groupes, tracés et proportions ne reproduisent pas des mesures individuelles.",
    source: {
      title: "Cochrane — Manuel de revue systématique des interventions",
      url: "https://training.cochrane.org/handbook/current",
    },
  },
  {
    id: "editionPlaceboTrial",
    canvasHeight: 270,
    title: "Ce qu’une comparaison avec placebo éclaire",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/medecine-fondee-sur-les-preuves/pourquoi-un-faux-medicament-peut-il-parfois-soulager",
    ],
    steps: [
      {
        label: "Contexte",
        caption: "Les conditions d’un soin peuvent modifier le ressenti ou certains résultats.",
        detail:
          "Le dessin situe la rencontre et l’attention portée à la personne. Les attentes ne résument pas tout ce qui peut changer après une intervention.",
      },
      {
        label: "Comparaison",
        caption: "Un groupe placebo peut servir de référence pour une intervention étudiée.",
        detail:
          "Les deux groupes reçoivent des interventions distinctes selon le protocole. Leur différence de résultat peut aider à isoler l’effet recherché.",
      },
      {
        label: "Évolution observée",
        caption: "Une amélioration dans le groupe placebo peut avoir plusieurs causes.",
        detail:
          "Le schéma rapproche le contexte, l’évolution spontanée et la façon de mesurer. Attribuer toute amélioration à un effet placebo serait trompeur.",
      },
    ],
    limit:
      "Exemple illustratif. Les groupes, tracés et proportions ne reproduisent pas des mesures individuelles.",
    source: {
      title: "NCCIH — Placebo et contexte d’une intervention",
      url: "https://www.nccih.nih.gov/health/placebo-effect",
    },
  },
  {
    id: "editionWillowMedicine",
    canvasHeight: 270,
    title: "Du saule à l’aspirine",
    paths: ["/sciences-du-vivant-appliquees/medecine/pharmacologie/ecorce-saule-aspirine"],
    steps: [
      {
        label: "Écorce",
        caption: "L’écorce de saule a été utilisée dans des préparations historiques.",
        detail:
          "Le fragment d’écorce situe le point de départ. Le dessin représente un matériau historique sans indiquer d’usage ni de préparation.",
      },
      {
        label: "Molécules",
        caption: "Le saule contient notamment de la salicine, distincte de l’aspirine.",
        detail:
          "Les formes dessinées matérialisent l’identification de substances. Des composés apparentés peuvent différer par leur structure et leurs effets.",
      },
      {
        label: "Aspirine",
        caption: "L’aspirine est une substance définie, l’acide acétylsalicylique.",
        detail:
          "Le flacon figure un médicament identifié par sa molécule. La trajectoire historique comporte plusieurs étapes de recherche et de fabrication.",
      },
    ],
    limit:
      "Exemple illustratif. Les groupes, tracés et proportions ne reproduisent pas des mesures individuelles.",
    source: {
      title: "Science History Institute — Une histoire de l’aspirine",
      url: "https://www.sciencehistory.org/stories/magazine/aspirin-turn-of-the-century-miracle-drug/",
    },
  },
  {
    id: "editionPhasesTrial",
    canvasHeight: 270,
    title: "Ce que les phases d’un essai cherchent à établir",
    paths: [
      "/sciences-du-vivant-appliquees/medecine/pharmacologie/principes-pharmacologie-essais-cliniques",
    ],
    steps: [
      {
        label: "Phase I",
        caption:
          "Les premières études chez l’humain examinent notamment la sécurité et le comportement du produit.",
        detail:
          "Le petit groupe représente les premiers essais dans un programme type. Le profil des participants et les objectifs varient selon le médicament.",
      },
      {
        label: "Phase II",
        caption:
          "Les études explorent les doses, les effets observés et la tolérance dans la population visée.",
        detail:
          "La planche élargit l’observation vers la situation étudiée. L’organisation peut combiner phases ou modifier leur ordre selon le programme.",
      },
      {
        label: "Phase III",
        caption: "Des essais plus larges évaluent l’effet et les risques, souvent en comparaison.",
        detail:
          "Les groupes illustrent un exemple de confirmation. Leur taille réelle dépend de la question, des résultats attendus et du type d’intervention.",
      },
      {
        label: "Phase IV",
        caption: "Des études peuvent se poursuivre après l’autorisation.",
        detail:
          "La dernière vue prolonge le suivi dans des conditions d’usage plus larges. Les études de phase IV constituent une partie de la surveillance après autorisation.",
      },
    ],
    limit:
      "Exemple illustratif. Les groupes, tracés et proportions ne reproduisent pas des mesures individuelles.",
    source: {
      title: "FDA — Les phases de recherche clinique",
      url: "https://www.fda.gov/patients/drug-development-process/step-3-clinical-research",
    },
  },
  {
    id: "editionLaborWorkshop",
    canvasHeight: 270,
    title: "Travail industriel, actions et règles sociales",
    paths: [
      "/sciences-humaines-et-sociales/histoire/epoque-contemporaine/pourquoi-la-revolution-industrielle-a-t-elle-provoque-autant-de-revoltes-et-de-lois-sociales",
    ],
    steps: [
      {
        label: "Atelier",
        caption:
          "L’industrialisation a concentré certaines formes de travail dans les ateliers et usines.",
        detail:
          "Le dessin présente un atelier de principe. Les techniques, horaires et formes de travail diffèrent selon les régions et les périodes.",
      },
      {
        label: "Actions collectives",
        caption: "Des travailleurs se sont organisés pour contester leurs conditions de travail.",
        detail:
          "Les silhouettes figurent une action collective parmi plusieurs formes historiques. Les conflits et demandes variaient selon les métiers.",
      },
      {
        label: "Règles",
        caption: "Des lois ont progressivement encadré certains aspects du travail industriel.",
        detail:
          "Le document symbolise des règles écrites, comme celles sur les horaires ou le travail des enfants. Leur adoption et leur application ont eu des rythmes différents.",
      },
    ],
    limit:
      "Exemple illustratif. Les groupes, tracés et proportions ne reproduisent pas des mesures individuelles.",
    source: {
      title: "Parlement britannique — Lois sur les fabriques",
      url: "https://www.parliament.uk/about/living-heritage/transformingsociety/livinglearning/19thcentury/overview/factoryact/",
    },
  },
  {
    id: "editionEmotionContext",
    canvasHeight: 270,
    title: "Les émotions dans une décision",
    paths: [
      "/sciences-humaines-et-sociales/psychologie/biais-cognitifs/comment-nos-emotions-orientent-elles-nos-decisions-sans-qu-on-s-en-rende-compte",
    ],
    steps: [
      {
        label: "Perception",
        caption:
          "Une situation peut susciter une émotion qui dirige l’attention vers certains éléments.",
        detail:
          "Les deux zones séparent ce qui est perçu des options examinées. L’attention varie avec le contexte et l’expérience.",
      },
      {
        label: "Évaluation",
        caption: "Un état émotionnel peut modifier la perception d’un risque ou d’une possibilité.",
        detail:
          "Les formes mises en balance figurent une évaluation. L’influence dépend du type d’émotion, de son origine et de la décision.",
      },
      {
        label: "Contexte",
        caption: "Réexaminer les informations peut révéler d’autres aspects de la même situation.",
        detail:
          "Le retour sur les options sépare les informations disponibles et la façon dont elles ont été perçues. L’émotion peut aussi transmettre un indice pertinent.",
      },
    ],
    limit:
      "Exemple illustratif. Les groupes, tracés et proportions ne reproduisent pas des mesures individuelles.",
    source: {
      title: "Lerner et coll. — Émotion et décision",
      url: "https://pubmed.ncbi.nlm.nih.gov/25251484/",
    },
  },
  {
    id: "editionClaimRepetition",
    canvasHeight: 270,
    title: "Comment une affirmation devient familière",
    paths: [
      "/sciences-humaines-et-sociales/psychologie/cognition/pourquoi-croit-on-aux-fausses-informations-meme-quand-on-se-croit-prudent",
    ],
    steps: [
      {
        label: "Première rencontre",
        caption:
          "Une affirmation peut être rencontrée une première fois dans un flux d’informations.",
        detail:
          "Le premier document porte le message à examiner. La planche suit l’impression de familiarité, indépendamment de la vérité du message.",
      },
      {
        label: "Répétition",
        caption: "Revoir une affirmation peut augmenter l’impression qu’elle est vraie.",
        detail:
          "Les copies représentent la répétition du même message. Leur nombre n’indique ni résultat de mesure ni effet garanti.",
      },
      {
        label: "Vérification",
        caption:
          "Un élément vérifiable et indépendant apporte une information différente de la répétition.",
        detail:
          "La loupe examine un autre élément que les copies du message. Plusieurs publications peuvent toutes reprendre la même source.",
      },
    ],
    limit:
      "Exemple illustratif. Les groupes, tracés et proportions ne reproduisent pas des mesures individuelles.",
    source: {
      title: "Fazio et coll. — Répétition et impression de vérité",
      url: "https://pubmed.ncbi.nlm.nih.gov/26301795/",
    },
  },
  {
    id: "editionSpacedRecall",
    canvasHeight: 270,
    title: "Réviser, attendre et rappeler",
    paths: [
      "/sciences-humaines-et-sociales/psychologie/cognition/pourquoi-reviser-en-plusieurs-fois-aide-t-il-a-mieux-retenir",
    ],
    steps: [
      {
        label: "Séance concentrée",
        caption: "Des révisions peuvent être regroupées dans une seule séance.",
        detail:
          "Sur la première frise les repères sont proches. Ils représentent des occasions de rappel ou de révision et non une durée imposée.",
      },
      {
        label: "Séances espacées",
        caption: "L’espacement répartit les occasions de révision à des moments différents.",
        detail:
          "La seconde frise conserve plusieurs occasions tout en les séparant. L’espacement pertinent dépend de ce qui est appris et du moment où il faut le retenir.",
      },
      {
        label: "Rappel ultérieur",
        caption: "Une épreuve plus tardive permet de comparer ce qui a été retenu.",
        detail:
          "Le dernier repère sépare la révision de sa mesure. Le dessin montre le principe expérimental sans supposer un intervalle optimal pour tous.",
      },
    ],
    limit:
      "Exemple illustratif. Les groupes, tracés et proportions ne reproduisent pas des mesures individuelles.",
    source: {
      title: "Cepeda et coll. — Effet de l’espacement des révisions",
      url: "https://journals.sagepub.com/doi/10.1111/j.1467-9280.2008.02209.x",
    },
  },
] satisfies LessonDiagramSpec[];
