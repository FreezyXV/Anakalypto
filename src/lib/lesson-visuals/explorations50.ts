import type { LessonDiagramSpec } from "./registry";
/** Fifty exact published paths, claimed before authoring. */
export const EXPLORATIONS50_DIAGRAMS = [
  {
    id: "fridgezones",
    canvasHeight: 230,
    title: "Le froid et le rangement",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/gaspillage-alimentaire/la-conservation-optimale-des-aliments-au-refrigerateur",
    ],
    steps: [
      {
        label: "Mesurer",
        caption: "La température se vérifie dans la zone la plus froide, indiquée par la notice.",
        detail:
          "La température se vérifie dans la zone la plus froide, indiquée par la notice. Le dessin ne fixe pas cette zone au même étage pour tous les modèles.",
      },
      {
        label: "Séparer",
        caption: "Un récipient fermé retient les jus des aliments crus.",
        detail:
          "Un récipient fermé retient les jus des aliments crus. Les aliments prêts à manger sont séparés du cru ; les flèches représentent la circulation de l’air.",
      },
      {
        label: "Ralentir",
        caption: "Au froid, la multiplication microbienne peut ralentir sans disparaître.",
        detail:
          "Au froid, la multiplication microbienne peut ralentir sans disparaître. Les effectifs sont symboliques et certaines espèces continuent à croître au réfrigérateur.",
      },
    ],
    limit:
      "Rangement schématique, pas un plan universel. Suivre la notice et les étiquettes ; effectifs non mesurés.",
    source: {
      title: "Comment garantir l'hygiène des aliments dans son réfrigérateur ?",
      url: "https://www.anses.fr/fr/content/comment-garantir-lhygiene-des-aliments-dans-son-refrigerateur",
    },
  },
  {
    id: "fooddates",
    canvasHeight: 230,
    title: "Deux dates, deux messages",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/gaspillage-alimentaire/pourquoi-certains-aliments-ont-ils-une-date-limite-et-d-autres-une-date-conseillee",
    ],
    steps: [
      {
        label: "DLC",
        caption: "« À consommer jusqu’au » indique une limite à respecter pour la sécurité.",
        detail:
          "« À consommer jusqu’au » indique une limite à respecter pour la sécurité. L’emballage dessiné est un exemple ; le froid et les conditions indiquées restent nécessaires.",
      },
      {
        label: "DDM",
        caption: "« De préférence avant » concerne les qualités attendues du produit.",
        detail:
          "« De préférence avant » concerne les qualités attendues du produit. Une DDM dépassée ne suffit pas, à elle seule, à rendre un aliment dangereux.",
      },
      {
        label: "Après ouverture",
        caption: "Une fois ouvert, un produit suit les consignes après ouverture.",
        detail:
          "Une fois ouvert, un produit suit les consignes après ouverture. La date imprimée pour l’emballage fermé ne garantit plus sa conservation.",
      },
    ],
    limit:
      "Exemples fictifs sans date réelle. Emballage abîmé, mauvaise conservation et ouverture changent la situation.",
    source: {
      title: "Date limite de consommation (DLC) et date de durabilité minimale (DDM)",
      url: "https://www.anses.fr/fr/content/date-limite-de-consommation-dlc-et-date-de-durabilite-minimale-ddm",
    },
  },
  {
    id: "lactase",
    canvasHeight: 230,
    title: "Découper le sucre du lait",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/regimes-particuliers/lactose-et-intolerance",
    ],
    steps: [
      {
        label: "Le lactose",
        caption: "Le lactose est un sucre composé de deux unités liées.",
        detail:
          "Le lactose est un sucre composé de deux unités liées. Les deux formes représentent glucose et galactose, pas leur géométrie moléculaire réelle.",
      },
      {
        label: "Avec la lactase",
        caption: "La lactase permet de séparer ces deux unités dans l’intestin grêle.",
        detail:
          "La lactase permet de séparer ces deux unités dans l’intestin grêle. Les sucres simples peuvent ensuite être absorbés ; l’enzyme n’est pas consommée par une seule réaction.",
      },
      {
        label: "Peu de lactase",
        caption: "Du lactose non absorbé peut rejoindre le côlon et être fermenté.",
        detail:
          "Du lactose non absorbé peut rejoindre le côlon et être fermenté. Des gaz peuvent se former. La malabsorption ne provoque pas toujours des symptômes.",
      },
    ],
    limit:
      "Modèle moléculaire symbolique, sans dose ni diagnostic. Intolérance et allergie au lait sont différentes.",
    source: {
      title: "NIDDK — Lactose intolerance",
      url: "https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/definition-facts",
    },
  },
  {
    id: "honeywater",
    canvasHeight: 230,
    title: "Le miel : peu d’eau disponible",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/conservation/comment-le-miel-peut-il-se-conserver-presque-sans-fin",
    ],
    steps: [
      {
        label: "Du nectar",
        caption: "Les abeilles transforment le nectar et en retirent une partie de l’eau.",
        detail:
          "Les abeilles transforment le nectar et en retirent une partie de l’eau. Les traits ascendants figurent une évaporation ; ce ne sont pas des microbes qui s’échappent.",
      },
      {
        label: "Du miel concentré",
        caption: "Dans le miel, les sucres réduisent l’eau disponible pour de nombreux microbes.",
        detail:
          "Dans le miel, les sucres réduisent l’eau disponible pour de nombreux microbes. Le grossissement montre une différence de milieu, sans faire du sucre une cage moléculaire littérale.",
      },
      {
        label: "Refermer",
        caption: "Le miel peut reprendre de l’humidité si le pot reste ouvert.",
        detail:
          "Le miel peut reprendre de l’humidité si le pot reste ouvert. Une dilution peut permettre des fermentations. La cristallisation n’est pas la même chose qu’une altération.",
      },
    ],
    limit:
      "Quantités symboliques. Le miel n’est pas stérile ; pas de miel avant un an, même s’il paraît intact.",
    source: {
      title: "Agroscope — Nutrition et stockage du miel",
      url: "https://www.agroscope.admin.ch/fr/nutrition-abeilles",
    },
  },
  {
    id: "osmotickeeping",
    canvasHeight: 230,
    title: "L’eau disponible compte",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/conservation/pourquoi-le-sel-et-le-sucre-conservent-les-aliments",
    ],
    steps: [
      {
        label: "Milieu dilué",
        caption: "Une cellule microbienne échange de l’eau avec son milieu.",
        detail:
          "Une cellule microbienne échange de l’eau avec son milieu. La membrane sépare l’intérieur de l’extérieur ; les points représentent les solutés dissous.",
      },
      {
        label: "Milieu concentré",
        caption: "Un milieu extérieur plus concentré peut faire sortir de l’eau de la cellule.",
        detail:
          "Un milieu extérieur plus concentré peut faire sortir de l’eau de la cellule. La cellule se rétracte dans ce modèle d’osmose ; le sel n’aspire pas à distance comme une pompe.",
      },
      {
        label: "Croissance freinée",
        caption: "Moins d’eau disponible peut freiner la multiplication microbienne.",
        detail:
          "Moins d’eau disponible peut freiner la multiplication microbienne. Cela ne prouve pas la destruction des microbes et ne remplace pas un procédé de conservation validé.",
      },
    ],
    limit: "Osmose simplifiée, pas une recette. Les tolérances varient selon les micro-organismes.",
    source: {
      title: "FDA — Water activity in foods",
      url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-technical-guides/water-activity-aw-foods",
    },
  },
  {
    id: "freezefood",
    canvasHeight: 230,
    title: "Pourquoi la texture change au dégel",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/conservation/pourquoi-un-aliment-decongele-devient-il-parfois-tout-mou",
    ],
    steps: [
      {
        label: "Tissu végétal",
        caption: "Les cellules d’un fruit contiennent de l’eau et contribuent à sa fermeté.",
        detail:
          "Les cellules d’un fruit contiennent de l’eau et contribuent à sa fermeté. Le dessin est une coupe agrandie d’un tissu végétal, pas une cellule animale.",
      },
      {
        label: "Congeler",
        caption:
          "Une congélation lente favorise de plus gros cristaux, susceptibles d’endommager le tissu.",
        detail:
          "Une congélation lente favorise de plus gros cristaux, susceptibles d’endommager le tissu. La comparaison rapide montre davantage de petits cristaux, sans garantir une absence de dommage.",
      },
      {
        label: "Décongeler",
        caption: "Le tissu endommagé peut perdre du jus et de la fermeté au dégel.",
        detail:
          "Le tissu endommagé peut perdre du jus et de la fermeté au dégel. Les gouttes quittent les cellules abîmées ; l’aliment n’est pas rendu stérile par la congélation.",
      },
    ],
    limit:
      "Coupe symbolique d’un fruit. Cristaux non à l’échelle ; effet variable selon aliment et procédé.",
    source: {
      title: "Penn State Extension — Understanding the Process of Freezing",
      url: "https://extension.psu.edu/understanding-the-process-of-freezing",
    },
  },
  {
    id: "vinegarair",
    canvasHeight: 230,
    title: "De l’alcool à l’acide acétique",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/fermentation/comment-le-vin-se-transforme-t-il-en-vinaigre",
    ],
    steps: [
      {
        label: "Le vin",
        caption: "Des levures ont d’abord transformé des sucres en alcool.",
        detail:
          "Des levures ont d’abord transformé des sucres en alcool. Le flacon représente un vin de départ : l’étape acétique ne repart pas directement du raisin.",
      },
      {
        label: "Apporter de l’oxygène",
        caption: "Des bactéries acétiques utilisent l’oxygène pour oxyder l’éthanol.",
        detail:
          "Des bactéries acétiques utilisent l’oxygène pour oxyder l’éthanol. Les flèches d’air atteignent la surface du liquide où le modèle situe cette activité.",
      },
      {
        label: "Le vinaigre",
        caption: "L’acide acétique s’accumule au cours de la transformation.",
        detail:
          "L’acide acétique s’accumule au cours de la transformation. La mère de vinaigre peut former un voile ; la bulle d’air n’est pas à elle seule la cause de l’acidité.",
      },
    ],
    limit:
      "Principe biologique, pas une recette ni une validation de sécurité d’une préparation maison.",
    source: {
      title: "FAO — Bacterial fermentations",
      url: "https://www.fao.org/4/x0560e/x0560e10.htm",
    },
  },
  {
    id: "lactojar",
    canvasHeight: 230,
    title: "Les bactéries acidifient les légumes",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/fermentation/la-conservation-des-legumes-par-lactofermentation",
    ],
    steps: [
      {
        label: "Sous le liquide",
        caption: "Des légumes sont maintenus sous le liquide dans ce modèle de fermentation.",
        detail:
          "Des légumes sont maintenus sous le liquide dans ce modèle de fermentation. Le poids limite leur exposition à l’air. Cela ne suffit pas seul à rendre une préparation sûre.",
      },
      {
        label: "Transformer les sucres",
        caption: "Des bactéries lactiques produisent des acides à partir de sucres.",
        detail:
          "Des bactéries lactiques produisent des acides à partir de sucres. Les petits bâtonnets sont des bactéries agrandies ; ce mécanisme ne nécessite pas de lait.",
      },
      {
        label: "Acidifier",
        caption: "Le milieu devient plus acide et peut freiner des microbes indésirables.",
        detail:
          "Le milieu devient plus acide et peut freiner des microbes indésirables. La jauge indique une tendance et ne représente ni une mesure réelle de pH ni un seuil de sécurité.",
      },
    ],
    limit:
      "Principe général uniquement : procédé fiable, salage, température et conservation restent nécessaires.",
    source: {
      title: "INRAE STLO — Les légumes lactofermentés",
      url: "https://stlo.rennes.hub.inrae.fr/Media/apprendre-comprendre/cartel-stlo-legumes-fermentes",
    },
  },
  {
    id: "crossboard",
    canvasHeight: 230,
    title: "Une planche peut transporter des microbes",
    paths: [
      "/alimentation-et-nutrition/regimes-et-recommandations/securite-alimentaire/pourquoi-ne-faut-il-pas-couper-la-salade-sur-la-planche-du-poulet-cru",
    ],
    steps: [
      {
        label: "Le cru",
        caption: "Des microbes peuvent passer du poulet cru à une planche.",
        detail:
          "Des microbes peuvent passer du poulet cru à une planche. Les points colorés rendent visibles des microbes qui sont en réalité invisibles à l’œil nu.",
      },
      {
        label: "Le transfert",
        caption: "Réutiliser cette planche non nettoyée peut contaminer une salade.",
        detail:
          "Réutiliser cette planche non nettoyée peut contaminer une salade. La cuisson ultérieure du poulet ne nettoie pas la salade qui sera mangée crue.",
      },
      {
        label: "Séparer",
        caption: "Des planches distinctes et une hygiène adaptée interrompent ce trajet.",
        detail:
          "Des planches distinctes et une hygiène adaptée interrompent ce trajet. La séparation dessinée concerne aussi les mains et les ustensiles ; elle ne signifie pas stérilité.",
      },
    ],
    limit:
      "Trajet fictif et microbes fortement agrandis. Aucune couleur n’indique qu’un aliment réel est sûr.",
    source: {
      title: "Éviter les toxi-infections alimentaires, les bonnes pratiques",
      url: "https://www.anses.fr/fr/content/eviter-les-toxi-infections-alimentaires-en-confinement-les-bonnes-pratiques",
    },
  },
  {
    id: "solardryer",
    canvasHeight: 230,
    title: "Chaleur et ventilation dans un séchoir",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/gaspillage-alimentaire/la-conservation-des-aliments-par-sechage-solaire",
    ],
    steps: [
      {
        label: "Capter",
        caption: "Le Soleil chauffe un capteur sombre placé avant l’armoire de séchage.",
        detail:
          "Le Soleil chauffe un capteur sombre placé avant l’armoire de séchage. C’est ici un séchoir indirect : les aliments restent à l’abri du rayonnement direct.",
      },
      {
        label: "Faire circuler",
        caption: "L’air réchauffé traverse les claies et entraîne de la vapeur d’eau.",
        detail:
          "L’air réchauffé traverse les claies et entraîne de la vapeur d’eau. Une entrée basse et une sortie haute créent un trajet d’air ; un caisson étanche retiendrait l’humidité.",
      },
      {
        label: "Évacuer",
        caption: "L’air humide sort tandis que les tranches perdent de l’eau.",
        detail:
          "L’air humide sort tandis que les tranches perdent de l’eau. La taille réduite des tranches est symbolique ; la fin du séchage ne se juge pas sur cette image.",
      },
    ],
    limit:
      "Coupe de principe, pas un plan de fabrication ni une méthode validée pour viande ou poisson.",
    source: {
      title: "Le séchage au soleil des fruits et des légumes",
      url: "https://agris.fao.org/search/en/records/647761d5f2e6fe92b367b956",
    },
  },
  {
    id: "musicscore",
    canvasHeight: 230,
    title: "Hauteur et durée sur une portée",
    paths: [
      "/arts-et-culture/arts-du-spectacle/musique/comment-ecrit-on-de-la-musique-sur-une-partition",
    ],
    steps: [
      {
        label: "La hauteur",
        caption: "Sur cette portée en clé de sol, les notes montent de mi à sol.",
        detail:
          "Sur cette portée en clé de sol, les notes montent de mi à sol. Les notes sont mi, fa et sol : ligne, interligne, puis ligne supérieure.",
      },
      {
        label: "La durée",
        caption: "Une blanche dure deux noires dans une même unité de pulsation.",
        detail:
          "Une blanche dure deux noires dans une même unité de pulsation. Les têtes et les hampes distinguent les valeurs ; leur hauteur sur la portée reste la même.",
      },
      {
        label: "Une mesure",
        caption: "Quatre noires remplissent ici une mesure à quatre temps.",
        detail:
          "Quatre noires remplissent ici une mesure à quatre temps. Les quatre pulsations sont égales ; ce petit exemple n’est pas une partition sonore interactive.",
      },
    ],
    limit:
      "Notation occidentale simplifiée en clé de sol. Tempo et interprétation ne sont pas représentés.",
    source: {
      title: "Notation musicale",
      url: "https://www.larousse.fr/encyclopedie/musdico/notation_musicale/169355",
    },
  },
  {
    id: "fluteair",
    canvasHeight: 230,
    title: "Une colonne d’air qui résonne",
    paths: [
      "/arts-et-culture/arts-du-spectacle/musique/comment-une-flute-transforme-t-elle-un-souffle-en-musique",
    ],
    steps: [
      {
        label: "Le biseau",
        caption: "Un jet d’air oscille autour du biseau et excite l’air du tube.",
        detail:
          "Un jet d’air oscille autour du biseau et excite l’air du tube. Le jet n’avance pas simplement jusqu’à la sortie : la résonance entretient l’oscillation.",
      },
      {
        label: "Colonne longue",
        caption: "Tous les trous de ce modèle sont fermés : la longueur acoustique est grande.",
        detail:
          "Tous les trous de ce modèle sont fermés : la longueur acoustique est grande. La courbe montre schématiquement une vibration de pression, pas le déplacement d’un paquet d’air.",
      },
      {
        label: "Colonne raccourcie",
        caption:
          "Ouvrir un trou peut raccourcir la colonne acoustique et rendre la note plus aiguë.",
        detail:
          "Ouvrir un trou peut raccourcir la colonne acoustique et rendre la note plus aiguë. La longueur est une approximation : la géométrie des trous et les corrections d’extrémité comptent.",
      },
    ],
    limit:
      "Coupe de flûte à bec idéale ; courbe de pression qualitative et longueur acoustique simplifiée.",
    source: {
      title: "Yamaha — How is the sound produced?",
      url: "https://www.yamaha.com/en/musical_instrument_guide/flute/mechanism/mechanism002.html",
    },
  },
  {
    id: "shadowstage",
    canvasHeight: 230,
    title: "Une silhouette entre lampe et écran",
    paths: [
      "/arts-et-culture/arts-du-spectacle/theatre-et-danse/d-ou-viennent-les-marionnettes-et-le-theatre-d-ombres",
    ],
    steps: [
      {
        label: "La disposition",
        caption: "Une silhouette opaque est placée entre une lampe et un écran.",
        detail:
          "Une silhouette opaque est placée entre une lampe et un écran. Les rayons bornent la zone qui ne reçoit pas directement la lumière de la source.",
      },
      {
        label: "Agrandir",
        caption: "Rapprocher la silhouette de la lampe agrandit ici son ombre sur l’écran.",
        detail:
          "Rapprocher la silhouette de la lampe agrandit ici son ombre sur l’écran. Les rayons sont tracés depuis la même source ponctuelle : les tailles suivent une construction géométrique.",
      },
      {
        label: "Animer",
        caption: "Une articulation permet de modifier l’ombre en bougeant le bras.",
        detail:
          "Une articulation permet de modifier l’ombre en bougeant le bras. L’écran est vu de côté, puis son ombre est figurée dans une vue de face à droite.",
      },
    ],
    limit:
      "Dispositif générique de théâtre d’ombres, sans reproduction d’une marionnette traditionnelle. Source ponctuelle idéale.",
    source: {
      title: "Wayang puppet theatre",
      url: "https://ich.unesco.org/en/RL/wayang-puppet-theatre-00063",
    },
  },
  {
    id: "leadtype",
    canvasHeight: 230,
    title: "De la lettre en relief au tracé numérique",
    paths: [
      "/arts-et-culture/arts-visuels/arts-graphiques-et-design/comment-la-typographie-est-elle-passee-du-plomb-a-l-ecran",
    ],
    steps: [
      {
        label: "Le caractère",
        caption: "La face encrée d’un caractère mobile porte une lettre en miroir.",
        detail:
          "La face encrée d’un caractère mobile porte une lettre en miroir. L’empreinte sur le papier la remet dans le sens de lecture ; le bloc est représenté en perspective.",
      },
      {
        label: "Composer",
        caption: "Des caractères alignés forment une ligne réutilisable.",
        detail:
          "Des caractères alignés forment une ligne réutilisable. Le modèle montre une composition manuelle, pas une ligne de Linotype fondue d’un seul tenant.",
      },
      {
        label: "Le contour numérique",
        caption: "Une police numérique décrit notamment des contours mis à l’échelle.",
        detail:
          "Une police numérique décrit notamment des contours mis à l’échelle. Les points illustrent un tracé vectoriel ; toutes les polices ne sont pas définies de cette même manière.",
      },
    ],
    limit:
      "Exemples génériques ; dimensions et lettres originales. Les étapes intermédiaires historiques ne sont pas toutes montrées.",
    source: {
      title: "Gutenberg (Johannes Gensfleisch dit)",
      url: "https://www.universalis.fr/encyclopedie/gutenberg/",
    },
  },
  {
    id: "claykiln",
    canvasHeight: 230,
    title: "Sécher puis cuire : deux transformations",
    paths: [
      "/arts-et-culture/arts-visuels/peinture-et-sculpture/comment-l-argile-devient-elle-dure-comme-de-la-pierre-dans-un-four",
    ],
    steps: [
      {
        label: "Modeler",
        caption: "De l’eau entre les particules permet de modeler l’argile.",
        detail:
          "De l’eau entre les particules permet de modeler l’argile. Le grossissement montre des particules symboliques et non une structure minéralogique exacte.",
      },
      {
        label: "Sécher",
        caption: "Le séchage retire de l’eau libre, mais l’objet non cuit reste sensible à l’eau.",
        detail:
          "Le séchage retire de l’eau libre, mais l’objet non cuit reste sensible à l’eau. La forme durcit sans être encore devenue une céramique ; sécher ne suffit donc pas.",
      },
      {
        label: "Cuire",
        caption: "La cuisson transforme la matière et peut créer des liaisons entre grains.",
        detail:
          "La cuisson transforme la matière et peut créer des liaisons entre grains. La céramique obtenue ne redevient pas de l’argile plastique par simple ajout d’eau.",
      },
    ],
    limit:
      "Transformations agrandies, sans courbe de cuisson. Certaines céramiques cuites restent poreuses.",
    source: {
      title: "Document pédagogique (Lillonum)",
      url: "https://lillonum.univ-lille.fr/files/original/204d63940a429eeb3746d0b45261ef2332c6dbab.pdf",
    },
  },
  {
    id: "pigmentbinder",
    canvasHeight: 230,
    title: "Pigment et liant font une peinture",
    paths: ["/arts-et-culture/arts-visuels/peinture-et-sculpture/pigments-fabrication-couleurs"],
    steps: [
      {
        label: "La poudre",
        caption: "Des grains de pigment apportent la couleur.",
        detail:
          "Des grains de pigment apportent la couleur. L’ocre est ici un exemple : la poudre seule n’adhère pas durablement à tout support.",
      },
      {
        label: "Le liant",
        caption: "Le liant disperse les grains et peut les fixer au support.",
        detail:
          "Le liant disperse les grains et peut les fixer au support. La coupe agrandie sépare les grains colorés du milieu qui les entoure.",
      },
      {
        label: "La couche peinte",
        caption: "Après la formation du film, le pigment reste retenu dans la couche.",
        detail:
          "Après la formation du film, le pigment reste retenu dans la couche. Ce principe n’implique pas que tous les pigments soient solubles, inoffensifs ou résistants à la lumière.",
      },
    ],
    limit:
      "Coupe de principe, pas une recette. Pigments, liants et mécanismes de formation du film varient.",
    source: {
      title: "Natural Pigments and the Geology of Color Through History",
      url: "https://www.beyondeveryart.com/natural-pigments-and-the-geology-of-color-through-history/",
    },
  },
  {
    id: "pinholebox",
    canvasHeight: 230,
    title: "Les rayons croisent au petit trou",
    paths: [
      "/arts-et-culture/arts-visuels/photographie-et-cinema/comment-une-boite-percee-d-un-petit-trou-fabrique-t-elle-une-image",
    ],
    steps: [
      {
        label: "Un rayon",
        caption: "Le haut de l’objet envoie un rayon qui traverse le trou vers le bas du fond.",
        detail:
          "Le haut de l’objet envoie un rayon qui traverse le trou vers le bas du fond. La ligne reste droite de part et d’autre du trou ; aucune lentille n’est dessinée.",
      },
      {
        label: "Deux rayons",
        caption: "Un rayon issu du bas arrive en haut de la paroi du fond.",
        detail:
          "Un rayon issu du bas arrive en haut de la paroi du fond. Les deux droites se croisent au trou, ce qui explique l’inversion verticale de l’image.",
      },
      {
        label: "L’image inversée",
        caption: "Les points de l’objet produisent ensemble une image renversée.",
        detail:
          "Les points de l’objet produisent ensemble une image renversée. La flèche rouge du fond est inversée ; le fond doit diffuser ou enregistrer la lumière pour être observé.",
      },
    ],
    limit:
      "Coupe géométrique idéale, seulement quelques rayons. Diffraction, profondeur et exposition non représentées.",
    source: {
      title: "Chambre noire, chambre optique, reproduction graphique",
      url: "https://www.universalis.fr/encyclopedie/chambre-noire-chambre-optique/",
    },
  },
  {
    id: "papyrussheet",
    canvasHeight: 230,
    title: "Deux couches de lamelles croisées",
    paths: [
      "/arts-et-culture/litterature-et-ecriture/histoire-du-livre/comment-les-egyptiens-fabriquaient-ils-des-feuilles-avec-une-plante",
    ],
    steps: [
      {
        label: "La moelle",
        caption: "Des lamelles sont prélevées dans la moelle de la tige de papyrus.",
        detail:
          "Des lamelles sont prélevées dans la moelle de la tige de papyrus. La coupe triangulaire rappelle la tige ; les lamelles ne sont pas des fibres mises en pâte.",
      },
      {
        label: "Croiser",
        caption: "Une seconde couche de lamelles est placée perpendiculairement à la première.",
        detail:
          "Une seconde couche de lamelles est placée perpendiculairement à la première. Les deux orientations restent visibles dans la vue éclatée.",
      },
      {
        label: "Presser et sécher",
        caption: "Les couches pressées puis séchées forment un support d’écriture.",
        detail:
          "Les couches pressées puis séchées forment un support d’écriture. Le contour final garde la trace des deux couches, contrairement à une feuille de papier à fibres dispersées.",
      },
    ],
    limit:
      "Reconstitution simplifiée du procédé ; pas de collage ajouté aux lamelles dans ce dessin.",
    source: {
      title: "The Met — Papyrus-Making in Egypt",
      url: "https://www.metmuseum.org/essays/papyrus-making-in-egypt",
    },
  },
  {
    id: "paperfibres",
    canvasHeight: 230,
    title: "Une feuille de fibres entrelacées",
    paths: ["/arts-et-culture/litterature-et-ecriture/histoire-du-livre/fabriquer-papier"],
    steps: [
      {
        label: "Disperser",
        caption: "Les fibres préparées sont dispersées dans l’eau.",
        detail:
          "Les fibres préparées sont dispersées dans l’eau. Les brins dessinés ne sont pas des lamelles de papyrus : ils sont séparés dans une suspension.",
      },
      {
        label: "Égoutter",
        caption: "Un tamis retient les fibres tandis que l’eau passe au travers.",
        detail:
          "Un tamis retient les fibres tandis que l’eau passe au travers. Les fibres s’entrecroisent en une couche encore humide, portée par le cadre.",
      },
      {
        label: "Presser puis sécher",
        caption: "Le retrait d’eau rapproche les fibres et consolide une feuille.",
        detail:
          "Le retrait d’eau rapproche les fibres et consolide une feuille. L’agrandissement conserve leur enchevêtrement ; la pression seule ne remplace pas le séchage.",
      },
    ],
    limit:
      "Fabrication manuelle schématique, sans attribution historique ni recette de traitement des fibres.",
    source: {
      title: "Georgia Tech — Washi and Japanese papermaking",
      url: "https://paper.gatech.edu/washi/washi-history-japanese-papermaking",
    },
  },
  {
    id: "gothicvault",
    canvasHeight: 230,
    title: "Voûte, piliers et arcs-boutants",
    paths: ["/arts-et-culture/patrimoine/architecture/art-gothique-et-croisee-dogives"],
    steps: [
      {
        label: "La voûte",
        caption: "La voûte transmet des charges vers ses appuis.",
        detail:
          "La voûte transmet des charges vers ses appuis. La coupe montre des composantes verticales et latérales, sans calcul de structure.",
      },
      {
        label: "Les appuis",
        caption: "Un arc-boutant conduit une partie des poussées vers un contrefort extérieur.",
        detail:
          "Un arc-boutant conduit une partie des poussées vers un contrefort extérieur. La flèche suit un trajet vers le massif et le sol ; le mur n’est pas totalement déchargé.",
      },
      {
        label: "La verrière",
        caption: "Cette organisation permet d’ouvrir davantage certaines parties du mur.",
        detail:
          "Cette organisation permet d’ouvrir davantage certaines parties du mur. Les vitraux s’insèrent entre les appuis. Nervures et remplissages participent ensemble à la structure réelle.",
      },
    ],
    limit:
      "Travée fictive en coupe, pas une cathédrale identifiée. Trajets de forces qualitatifs, pas un dimensionnement.",
    source: {
      title: "Notre-Dame de Paris — Architecture extérieure",
      url: "https://www.notredamedeparis.fr/comprendre/architecture/facades-architecture-exterieure/",
    },
  },
  {
    id: "regenbrake",
    canvasHeight: 230,
    title: "Inverser le transfert d’énergie",
    paths: [
      "/automobile/motorisations/motorisations-hybrides/comment-une-voiture-electrique-recupere-t-elle-de-l-energie-en-freinant",
    ],
    steps: [
      {
        label: "Accélérer",
        caption: "La batterie fournit de l’énergie électrique au moteur qui entraîne les roues.",
        detail:
          "La batterie fournit de l’énergie électrique au moteur qui entraîne les roues. Les flèches figurent l’énergie ; elles ne représentent pas un parcours d’électrons isolés.",
      },
      {
        label: "Récupérer",
        caption: "Au ralentissement, les roues entraînent le moteur utilisé en génératrice.",
        detail:
          "Au ralentissement, les roues entraînent le moteur utilisé en génératrice. Une partie de l’énergie du mouvement peut être stockée dans la batterie, avec des pertes.",
      },
      {
        label: "Compléter",
        caption: "Les freins à friction restent nécessaires quand la récupération est limitée.",
        detail:
          "Les freins à friction restent nécessaires quand la récupération est limitée. L’énergie dissipée en chaleur n’est pas récupérée : on ne recharge pas intégralement l’énergie dépensée.",
      },
    ],
    limit:
      "Chaîne d’énergie simplifiée, sans quantité ni règle de conduite. Dépend de la vitesse, de l’adhérence et de la batterie.",
    source: {
      title: "Hybrid Electric Vehicles",
      url: "https://www.fueleconomy.gov/feg/hybridtech.shtml",
    },
  },
  {
    id: "dieselignition",
    canvasHeight: 230,
    title: "L’air comprimé permet l’auto-inflammation",
    paths: [
      "/automobile/motorisations/thermique/comment-un-moteur-diesel-s-allume-t-il-sans-bougie-d-allumage",
    ],
    steps: [
      {
        label: "Air seul",
        caption: "Le cylindre contient de l’air avant l’injection de gazole.",
        detail:
          "Le cylindre contient de l’air avant l’injection de gazole. L’admission et l’échappement ne sont pas détaillés : ces trois vues isolent le principe d’allumage.",
      },
      {
        label: "Comprimer",
        caption: "Le piston remonte et la compression élève la température de l’air.",
        detail:
          "Le piston remonte et la compression élève la température de l’air. Les mêmes particules occupent un plus petit volume, sans ajout de carburant à cette étape.",
      },
      {
        label: "Injecter",
        caption: "Le gazole pulvérisé s’enflamme dans l’air suffisamment chaud.",
        detail:
          "Le gazole pulvérisé s’enflamme dans l’air suffisamment chaud. La combustion repousse le piston ; aucune étincelle n’est utilisée pour l’allumage normal.",
      },
    ],
    limit:
      "Coupe simplifiée, pas les quatre temps complets. Les bougies de préchauffage éventuelles ne sont pas dessinées.",
    source: {
      title: "Cours de technologie : moteurs à allumage par compression",
      url: "https://direns.minesparis.psl.eu/Sites/Thopt/fr/res/TechnoMACI.pdf",
    },
  },
  {
    id: "clutchplates",
    canvasHeight: 230,
    title: "Relier puis séparer deux arbres",
    paths: ["/automobile/motorisations/thermique/embrayage-volant-moteur-bimasse"],
    steps: [
      {
        label: "Embrayé",
        caption: "Le disque est serré entre volant et plateau : le moteur peut entraîner la boîte.",
        detail:
          "Le disque est serré entre volant et plateau : le moteur peut entraîner la boîte. Les surfaces de friction sont en contact ; la pédale est relâchée dans ce cas.",
      },
      {
        label: "Débrayé",
        caption: "La commande libère le disque : la liaison d’entraînement est interrompue.",
        detail:
          "La commande libère le disque : la liaison d’entraînement est interrompue. La séparation est exagérée pour être visible. La boîte ne reçoit plus le couple par ce contact.",
      },
      {
        label: "Volant bimasse",
        caption: "Des ressorts entre deux masses peuvent atténuer les irrégularités de rotation.",
        detail:
          "Des ressorts entre deux masses peuvent atténuer les irrégularités de rotation. Cette vue de face zoome sur le volant ; les ressorts ne sont pas le mécanisme qui libère le disque.",
      },
    ],
    limit:
      "Embrayage manuel monodisque schématique. Espacements, butée et mécanisme du diaphragme simplifiés.",
    source: {
      title: "Schaeffler — LuK dual mass flywheel",
      url: "https://vehiclelifetimesolutions.schaeffler.in/en-gb/luk-dmf",
    },
  },
  {
    id: "gearboxpair",
    canvasHeight: 230,
    title: "Échanger vitesse de rotation et couple",
    paths: ["/automobile/motorisations/thermique/fonctionnement-boite-de-vitesses"],
    steps: [
      {
        label: "Réduire",
        caption: "Un petit pignon entraîne une grande roue : la sortie tourne plus lentement.",
        detail:
          "Un petit pignon entraîne une grande roue : la sortie tourne plus lentement. Les nombres de dents sont 12 et 24 : deux tours d’entrée correspondent à un tour de sortie en sens inverse.",
      },
      {
        label: "Augmenter",
        caption: "La grande roue entraîne le petit pignon : la sortie tourne plus vite.",
        detail:
          "La grande roue entraîne le petit pignon : la sortie tourne plus vite. Le rapport s’inverse. Dans un engrenage idéal, le couple diminue quand la vitesse augmente.",
      },
      {
        label: "Choisir",
        caption: "Une boîte sélectionne un rapport adapté entre moteur et transmission.",
        detail:
          "Une boîte sélectionne un rapport adapté entre moteur et transmission. Les deux paires sont des modèles distincts, pas le dessin complet d’une boîte réelle.",
      },
    ],
    limit:
      "Engrenages cylindriques idéaux sans pertes. Les profils de dents sont stylisés, pas des profils industriels.",
    source: {
      title: "TeachEngineering — Get in Gear",
      url: "https://www.teachengineering.org/activities/nyu_getingear_activity1",
    },
  },
  {
    id: "intercoolerair",
    canvasHeight: 230,
    title: "Refroidir l’air déjà comprimé",
    paths: ["/automobile/motorisations/thermique/intercooler-circuit-admission"],
    steps: [
      {
        label: "Comprimer",
        caption: "Le compresseur élève la pression de l’air et le réchauffe.",
        detail:
          "Le compresseur élève la pression de l’air et le réchauffe. La roue représentée est le compresseur ; la turbine d’échappement n’est pas détaillée ici.",
      },
      {
        label: "Échanger",
        caption: "La chaleur passe de l’air comprimé vers l’air extérieur à travers l’échangeur.",
        detail:
          "La chaleur passe de l’air comprimé vers l’air extérieur à travers l’échangeur. Les deux circuits ne se mélangent pas. Les flèches bleues traversent les ailettes extérieures.",
      },
      {
        label: "Admettre",
        caption: "L’air refroidi après compression peut être plus dense à pression comparable.",
        detail:
          "L’air refroidi après compression peut être plus dense à pression comparable. Les points dans le cylindre illustrent qualitativement plus d’air dans un même volume, pas une mesure.",
      },
    ],
    limit:
      "Admission air-air simplifiée ; pertes de pression et températures réelles non quantifiées.",
    source: {
      title: "Charge Air Cooling",
      url: "https://dieselnet.com/tech/air_cool.php",
    },
  },
  {
    id: "enginecoolant",
    canvasHeight: 230,
    title: "La boucle du liquide de refroidissement",
    paths: ["/automobile/motorisations/thermique/refroidissement-moteur-thermique"],
    steps: [
      {
        label: "À froid",
        caption:
          "Le thermostat limite le passage vers le radiateur pendant la montée en température.",
        detail:
          "Le thermostat limite le passage vers le radiateur pendant la montée en température. Le liquide circule encore dans une petite boucle de dérivation ; la pompe ne s’arrête pas.",
      },
      {
        label: "À chaud",
        caption: "Le thermostat ouvre le trajet vers le radiateur.",
        detail:
          "Le thermostat ouvre le trajet vers le radiateur. Le liquide emporte la chaleur du moteur puis revient refroidi par la pompe.",
      },
      {
        label: "Évacuer la chaleur",
        caption: "Le radiateur transfère la chaleur à l’air qui le traverse.",
        detail:
          "Le radiateur transfère la chaleur à l’air qui le traverse. Le ventilateur aide lorsque le flux d’air est insuffisant. Air et liquide restent dans des trajets séparés.",
      },
    ],
    limit:
      "Circuit de principe avec dérivation. Ne jamais ouvrir un circuit chaud ; dessin sans pression ni température de consigne.",
    source: {
      title:
        "Question of the week: why does an engine cooling system have a thermostat, and how does it relate to coolant?",
      url: "https://www.caltech.edu/about/news/question-week-why-does-engine-cooling-system-have-thermostat-and-hos-does-it-relate-coolant",
    },
  },
  {
    id: "differentialturn",
    canvasHeight: 230,
    title: "Deux roues, deux distances en virage",
    paths: ["/automobile/motorisations/thermique/transmission-integrale-differentiel"],
    steps: [
      {
        label: "Ligne droite",
        caption: "En ligne droite, deux roues égales parcourent des distances égales.",
        detail:
          "En ligne droite, deux roues égales parcourent des distances égales. Les repères de rotation sont identiques dans ce cas idéal sans glissement.",
      },
      {
        label: "Virage",
        caption: "La roue extérieure suit un arc plus long que la roue intérieure.",
        detail:
          "La roue extérieure suit un arc plus long que la roue intérieure. Pour des pneus identiques sans glissement, elle doit tourner plus vite pendant le même virage.",
      },
      {
        label: "Le différentiel",
        caption: "Le différentiel permet un écart de vitesse entre les deux sorties.",
        detail:
          "Le différentiel permet un écart de vitesse entre les deux sorties. Le modèle indique 1 et 3 pour une entrée moyenne de 2 ; ce sont des unités arbitraires de vitesse.",
      },
    ],
    limit:
      "Vue de dessus et principe cinématique d’un différentiel ouvert symétrique, sans plan interne de pignons.",
    source: {
      title: "MIT — How a differential works",
      url: "https://web.mit.edu/2.972/OldFiles/www/reports/differential/differential.html",
    },
  },
  {
    id: "abscontrol",
    canvasHeight: 230,
    title: "L’ABS corrige avant le blocage",
    paths: [
      "/automobile/securite-et-conduite/aides-a-la-conduite/comment-l-abs-permet-il-de-tourner-le-volant-en-freinant-a-fond",
    ],
    steps: [
      {
        label: "Surveiller",
        caption: "Un capteur mesure la rotation de la roue pendant le freinage.",
        detail:
          "Un capteur mesure la rotation de la roue pendant le freinage. Le calculateur utilise les signaux pour estimer le risque de blocage, sans mesurer directement l’adhérence.",
      },
      {
        label: "Relâcher un instant",
        caption: "Si le blocage menace, une vanne réduit la pression de freinage sur cette roue.",
        detail:
          "Si le blocage menace, une vanne réduit la pression de freinage sur cette roue. Le trajet de commande est distinct du circuit hydraulique ; la pédale du conducteur peut rester enfoncée.",
      },
      {
        label: "Réappliquer",
        caption: "Le système module de nouveau la pression quand la roue reprend de la rotation.",
        detail:
          "Le système module de nouveau la pression quand la roue reprend de la rotation. Cette boucle se répète. Elle aide à conserver la direction dans les limites de l’adhérence disponible.",
      },
    ],
    limit:
      "Une roue et une boucle simplifiées. L’ABS ne garantit ni évitement d’obstacle ni distance d’arrêt plus courte.",
    source: {
      title: "Bosch — Antilock braking system",
      url: "https://www.bosch-mobility.com/en/solutions/braking-systems/antilock-braking-system/",
    },
  },
  {
    id: "discbrake",
    canvasHeight: 230,
    title: "Pincer un disque pour dissiper l’énergie",
    paths: [
      "/automobile/usages-et-mobilite/entretien-et-cycle-de-vie/comment-les-freins-a-disque-arretent-ils-une-voiture",
    ],
    steps: [
      {
        label: "Libre",
        caption: "Le disque tourne avec la roue entre deux plaquettes écartées.",
        detail:
          "Le disque tourne avec la roue entre deux plaquettes écartées. La coupe est vue par la tranche ; l’espace des plaquettes est agrandi pour être visible.",
      },
      {
        label: "Serrer",
        caption: "La pression hydraulique rapproche les plaquettes contre le disque.",
        detail:
          "La pression hydraulique rapproche les plaquettes contre le disque. L’étrier soutient les plaquettes et les pistons ; les deux faces du disque participent au frottement.",
      },
      {
        label: "Dissiper",
        caption: "Le frottement transforme une partie de l’énergie du mouvement en chaleur.",
        detail:
          "Le frottement transforme une partie de l’énergie du mouvement en chaleur. Le disque et les plaquettes chauffent ; les traits de chaleur ne représentent pas un frein en feu.",
      },
    ],
    limit: "Frein à disque schématique, sans procédure de réparation ni température réelle.",
    source: {
      title: "Brembo — Chaleur au contact disque et plaquette",
      url: "https://www.bremboparts.com/europe/en/support/car/how-to-choose-the-right-product/brake-discs-with-vane-vs-pillar-ventilation-the-differences-204921",
    },
  },
  {
    id: "engineoil",
    canvasHeight: 230,
    title: "Un film entre les surfaces",
    paths: ["/automobile/usages-et-mobilite/entretien-et-cycle-de-vie/huile-moteur-lubrification"],
    steps: [
      {
        label: "Sans film suffisant",
        caption: "Des aspérités de deux surfaces peuvent entrer en contact.",
        detail:
          "Des aspérités de deux surfaces peuvent entrer en contact. Le relief est fortement agrandi pour rendre visibles les points de contact et l’usure possible.",
      },
      {
        label: "Avec un film",
        caption: "Un film d’huile peut séparer les surfaces en mouvement.",
        detail:
          "Un film d’huile peut séparer les surfaces en mouvement. C’est le régime de film complet montré ici ; tout contact moteur n’est pas toujours dans ce régime.",
      },
      {
        label: "Faire circuler",
        caption: "La pompe fait circuler l’huile du carter vers les points à lubrifier.",
        detail:
          "La pompe fait circuler l’huile du carter vers les points à lubrifier. Le filtre retient certaines impuretés avant le retour au carter, selon l’architecture du moteur.",
      },
    ],
    limit:
      "Rugosités et film exagérés. Ni choix d’huile, ni intervalle de vidange : suivre les spécifications du moteur.",
    source: {
      title: "Ce qu'il faut savoir sur les huiles moteurs",
      url: "https://www.tcs.ch/mam/Digital-Media/PDF/Booklets/Ce-qu-il-faut-savoir-sur-les-huiles-moteurs.pdf",
    },
  },
  {
    id: "flowerpollination",
    canvasHeight: 230,
    title: "Transporter le pollen vers une autre fleur",
    paths: [
      "/environnement-et-climat/biodiversite/ecosystemes/pourquoi-les-abeilles-sauvages-et-autres-pollinisateurs-sont-ils-precieux-pour-nos-cultures",
    ],
    steps: [
      {
        label: "Prendre du pollen",
        caption: "Un insecte visite une fleur et peut emporter du pollen des étamines.",
        detail:
          "Un insecte visite une fleur et peut emporter du pollen des étamines. Les grains jaunes sont agrandis ; ils ne sont pas des graines.",
      },
      {
        label: "Déposer",
        caption: "Du pollen compatible peut se déposer sur le stigmate d’une autre fleur.",
        detail:
          "Du pollen compatible peut se déposer sur le stigmate d’une autre fleur. Le trajet ne garantit pas à lui seul la fécondation : plusieurs étapes biologiques suivent.",
      },
      {
        label: "Former des graines",
        caption:
          "Après fécondation, des ovules deviennent des graines et l’ovaire peut former un fruit.",
        detail:
          "Après fécondation, des ovules deviennent des graines et l’ovaire peut former un fruit. La coupe relie les structures de la fleur au jeune fruit dans un exemple de plante à fleurs.",
      },
    ],
    limit:
      "Fleur générique pollinisée par insecte. Toutes les plantes ne dépendent pas de ce transport.",
    source: {
      title: "Rapport de l'IPBES sur les pollinisateurs (version longue)",
      url: "https://www.fondationbiodiversite.fr/wp-content/uploads/2016/02/IPBES-Rapport-V-longue.pdf",
    },
  },
  {
    id: "agroforestrows",
    canvasHeight: 230,
    title: "Arbres et cultures sur la même parcelle",
    paths: [
      "/environnement-et-climat/biodiversite/forets-et-oceans/l-agroforesterie-combiner-arbres-et-cultures",
    ],
    steps: [
      {
        label: "Associer",
        caption: "Des rangées d’arbres alternent avec des bandes cultivées.",
        detail:
          "Des rangées d’arbres alternent avec des bandes cultivées. Les espacements laissent ici un passage entre les rangées ; ce n’est pas une densité recommandée.",
      },
      {
        label: "Abriter",
        caption: "Les arbres peuvent créer de l’ombre et réduire localement le vent.",
        detail:
          "Les arbres peuvent créer de l’ombre et réduire localement le vent. La zone ombrée est qualitative. L’effet dépend de l’orientation, de la saison et des espèces.",
      },
      {
        label: "Partager les ressources",
        caption:
          "Racines et feuilles peuvent enrichir le système, mais les plantes peuvent aussi se concurrencer.",
        detail:
          "Racines et feuilles peuvent enrichir le système, mais les plantes peuvent aussi se concurrencer. Les racines de l’arbre et de la culture se chevauchent volontairement dans la coupe.",
      },
    ],
    limit:
      "Parcelle fictive, effets non quantifiés. Les bénéfices ne sont pas automatiques et demandent une conception adaptée.",
    source: {
      title: "FAO — Agroforestry",
      url: "https://www.fao.org/sustainable-forest-management-toolbox/modules/agroforestry/2/en",
    },
  },
  {
    id: "coralbleach",
    canvasHeight: 230,
    title: "Le blanchissement ne signifie pas mort immédiate",
    paths: ["/environnement-et-climat/biodiversite/forets-et-oceans/le-blanchissement-des-coraux"],
    steps: [
      {
        label: "En association",
        caption: "Des algues microscopiques vivent dans les tissus du polype corallien.",
        detail:
          "Des algues microscopiques vivent dans les tissus du polype corallien. Le squelette calcaire clair est sous les tissus ; les points bruns montrent les algues agrandies.",
      },
      {
        label: "Sous stress",
        caption: "Un stress thermique peut entraîner la perte d’algues et de coloration.",
        detail:
          "Un stress thermique peut entraîner la perte d’algues et de coloration. Les points quittent le tissu dans ce modèle, qui ne détaille pas tous les mécanismes de stress.",
      },
      {
        label: "Blanchi",
        caption: "Le squelette clair devient davantage visible à travers le tissu appauvri.",
        detail:
          "Le squelette clair devient davantage visible à travers le tissu appauvri. Le polype peut encore être vivant ; un rétablissement est possible si les conditions s’améliorent.",
      },
    ],
    limit:
      "Coupe d’un polype symbolique. Blanchissement et acidification sont deux mécanismes différents.",
    source: {
      title: "NOAA — What is coral bleaching?",
      url: "https://oceanservice.noaa.gov/facts/coral_bleach.html",
    },
  },
  {
    id: "oceanacid",
    canvasHeight: 230,
    title: "CO₂ dissous et carbonate moins disponible",
    paths: [
      "/environnement-et-climat/biodiversite/forets-et-oceans/pourquoi-l-acidification-des-oceans-menace-t-elle-les-recifs-coralliens",
    ],
    steps: [
      {
        label: "Absorber du CO₂",
        caption: "Du dioxyde de carbone de l’air se dissout dans l’eau de mer.",
        detail:
          "Du dioxyde de carbone de l’air se dissout dans l’eau de mer. Les flèches indiquent ici un apport ; les échanges réels existent dans les deux sens.",
      },
      {
        label: "Changer l’équilibre",
        caption: "Le CO₂ dissous modifie les équilibres chimiques et fait baisser le pH.",
        detail:
          "Le CO₂ dissous modifie les équilibres chimiques et fait baisser le pH. Une réaction simplifiée montre H⁺ et carbonate donnant du bicarbonate ; les symboles sont des espèces chimiques.",
      },
      {
        label: "Calcifier",
        caption:
          "Moins de carbonate disponible peut compliquer la formation de structures calcaires.",
        detail:
          "Moins de carbonate disponible peut compliquer la formation de structures calcaires. Le schéma ne montre pas tous les coraux se dissolvant immédiatement : les effets dépendent des conditions.",
      },
    ],
    limit:
      "Équilibres simplifiés, sans concentrations ni échelle de pH. Une baisse de pH ne signifie pas forcément une eau au-dessous de pH 7.",
    source: {
      title: "NOAA — Ocean acidification",
      url: "https://oceanservice.noaa.gov/facts/acidification.html",
    },
  },
  {
    id: "sealevelrise",
    canvasHeight: 230,
    title: "Deux causes de hausse du niveau marin",
    paths: [
      "/environnement-et-climat/changement-climatique/impacts-et-adaptation/pourquoi-le-niveau-de-la-mer-monte-t-il-et-que-devient-le-littoral",
    ],
    steps: [
      {
        label: "Un repère",
        caption: "Un niveau de référence permet de comparer les deux mécanismes.",
        detail:
          "Un niveau de référence permet de comparer les deux mécanismes. Le petit bassin est un modèle et ne représente pas une mesure d’évolution réelle du littoral.",
      },
      {
        label: "Se dilater",
        caption: "Une eau qui se réchauffe peut occuper plus de volume, à masse identique.",
        detail:
          "Une eau qui se réchauffe peut occuper plus de volume, à masse identique. Le même nombre de points occupe un volume plus grand : aucune nouvelle eau n’est ajoutée.",
      },
      {
        label: "Ajouter de l’eau",
        caption: "La fonte de glace reposant sur les continents ajoute de l’eau à l’océan.",
        detail:
          "La fonte de glace reposant sur les continents ajoute de l’eau à l’océan. Le glacier est sur la terre. Ce n’est pas la même situation que la fonte d’une banquise déjà flottante.",
      },
    ],
    limit:
      "Amplitudes très exagérées, sans prévision ni vitesse. Le niveau local dépend aussi des mouvements du sol.",
    source: {
      title: "Climate Change: Global Sea Level",
      url: "https://www.climate.gov/news-features/understanding-climate/climate-change-global-sea-level",
    },
  },
  {
    id: "wetlandsponge",
    canvasHeight: 230,
    title: "Retenir puis restituer une partie de l’eau",
    paths: [
      "/environnement-et-climat/pollution-et-ressources/eau/pourquoi-dit-on-que-les-zones-humides-sont-des-eponges-naturelles",
    ],
    steps: [
      {
        label: "Avant la crue",
        caption: "Une zone humide est reliée à un cours d’eau dans ce paysage fictif.",
        detail:
          "Une zone humide est reliée à un cours d’eau dans ce paysage fictif. Le sol et les dépressions peuvent offrir une capacité de stockage, qui varie selon leur état initial.",
      },
      {
        label: "Stocker",
        caption: "En crue, une partie de l’eau peut s’étaler et être stockée temporairement.",
        detail:
          "En crue, une partie de l’eau peut s’étaler et être stockée temporairement. La zone colorée montre le stockage, pas l’absorption illimitée de toute une inondation.",
      },
      {
        label: "Restituer",
        caption: "Une partie de l’eau stockée peut être restituée progressivement.",
        detail:
          "Une partie de l’eau stockée peut être restituée progressivement. Les échanges dépendent des sols, des nappes et du niveau du cours d’eau ; certaines zones sont déjà saturées.",
      },
    ],
    limit:
      "Métaphore d’éponge à capacité limitée. Cette coupe ne garantit pas une protection contre une crue donnée.",
    source: {
      title: "Protection des milieux humides",
      url: "https://www.ecologie.gouv.fr/protection-des-milieux-humides",
    },
  },
  {
    id: "sewageplant",
    canvasHeight: 230,
    title: "Séparer, traiter puis clarifier",
    paths: [
      "/environnement-et-climat/pollution-et-ressources/eau/que-devient-l-eau-de-l-evier-et-des-toilettes-dans-une-station-d-epuration",
    ],
    steps: [
      {
        label: "Retirer les gros déchets",
        caption: "Une grille retient des déchets avant les traitements plus fins.",
        detail:
          "Une grille retient des déchets avant les traitements plus fins. Le dessin se concentre sur une filière à boues activées, sans montrer toutes les étapes intermédiaires.",
      },
      {
        label: "Traiter biologiquement",
        caption: "Des micro-organismes consomment une partie de la pollution dans un bassin aéré.",
        detail:
          "Des micro-organismes consomment une partie de la pollution dans un bassin aéré. Les bulles fournissent de l’oxygène ; elles ne retirent pas seules la pollution.",
      },
      {
        label: "Clarifier",
        caption: "Des boues se séparent de l’eau avant son rejet autorisé dans le milieu.",
        detail:
          "Des boues se séparent de l’eau avant son rejet autorisé dans le milieu. Une partie des boues peut être recyclée vers le bassin biologique ; l’eau de sortie n’est pas de l’eau potable.",
      },
    ],
    limit:
      "Filière simplifiée. Désinfection et traitements complémentaires varient ; certains polluants peuvent subsister.",
    source: {
      title: "Wastewater Treatment Water Use",
      url: "https://www.usgs.gov/water-science-school/science/wastewater-treatment-water-use",
    },
  },
  {
    id: "stormcharges",
    canvasHeight: 230,
    title: "Séparer les charges puis décharger",
    paths: [
      "/geographie-et-territoires/geographie-physique/climatologie/comment-nait-un-eclair-pendant-un-orage",
    ],
    steps: [
      {
        label: "Les collisions",
        caption: "Glace et grésil se rencontrent dans un nuage animé de mouvements d’air.",
        detail:
          "Glace et grésil se rencontrent dans un nuage animé de mouvements d’air. Les charges se répartissent dans ce modèle courant de nuage d’orage.",
      },
      {
        label: "La séparation",
        caption: "Une grande région négative peut se trouver sous une région positive.",
        detail:
          "Une grande région négative peut se trouver sous une région positive. Le sol proche présente alors des charges positives induites ; les distributions réelles sont plus complexes.",
      },
      {
        label: "La décharge",
        caption: "Un canal conducteur permet une décharge entre nuage et sol.",
        detail:
          "Un canal conducteur permet une décharge entre nuage et sol. La lumière signale l’éclair ; la dilatation brutale de l’air chaud produit le tonnerre.",
      },
    ],
    limit:
      "Exemple courant de foudre négative au sol, pas tous les éclairs. Aucune échelle de tension ou de distance.",
    source: {
      title: "Lightning",
      url: "https://www.weather.gov/fgz/Lightning",
    },
  },
  {
    id: "waterjourney",
    canvasHeight: 230,
    title: "Des changements d’état et de réservoir",
    paths: [
      "/geographie-et-territoires/geographie-physique/hydrographie/comment-la-meme-eau-voyage-t-elle-sans-fin-entre-la-mer-le-ciel-et-la-terre",
    ],
    steps: [
      {
        label: "Évaporer",
        caption: "L’énergie solaire permet à de l’eau liquide de passer en vapeur.",
        detail:
          "L’énergie solaire permet à de l’eau liquide de passer en vapeur. La vapeur est invisible : les flèches montrent le transfert, pas un nuage de vapeur visible.",
      },
      {
        label: "Condenser et précipiter",
        caption: "Des gouttelettes ou cristaux forment des nuages et peuvent retomber.",
        detail:
          "Des gouttelettes ou cristaux forment des nuages et peuvent retomber. Les nuages ne sont pas faits seulement de vapeur ; les flèches distinguent transport et précipitation.",
      },
      {
        label: "Ruisseler et infiltrer",
        caption: "Une partie de l’eau rejoint les cours d’eau et une autre s’infiltre.",
        detail:
          "Une partie de l’eau rejoint les cours d’eau et une autre s’infiltre. Ces trajets peuvent ramener l’eau vers l’océan à des vitesses très différentes.",
      },
    ],
    limit:
      "Cycle simplifié sans proportions ni temps de séjour. Tous les réservoirs et chemins ne sont pas dessinés.",
    source: {
      title: "water cycle",
      url: "https://ugc.berkeley.edu/background-content/water-cycle/",
    },
  },
  {
    id: "watershedridge",
    canvasHeight: 230,
    title: "Une crête sépare deux écoulements",
    paths: [
      "/geographie-et-territoires/geographie-physique/hydrographie/ou-va-la-pluie-qui-tombe-de-chaque-cote-d-une-crete",
    ],
    steps: [
      {
        label: "La limite",
        caption: "La crête représente ici une ligne de partage des eaux de surface.",
        detail:
          "La crête représente ici une ligne de partage des eaux de surface. La limite suit le relief plutôt qu’une frontière administrative.",
      },
      {
        label: "Deux versants",
        caption: "La pluie ruisselle de chaque côté vers des réseaux différents.",
        detail:
          "La pluie ruisselle de chaque côté vers des réseaux différents. Les flèches descendent les deux versants : aucune goutte ne remonte spontanément à la crête.",
      },
      {
        label: "Un exutoire par bassin",
        caption: "Les petits cours d’eau d’un même bassin convergent vers une sortie commune.",
        detail:
          "Les petits cours d’eau d’un même bassin convergent vers une sortie commune. Deux couleurs distinguent les bassins voisins, qui pourraient se rejoindre plus loin selon le territoire.",
      },
    ],
    limit: "Relief fictif. Les circulations souterraines peuvent franchir la limite topographique.",
    source: {
      title: "fiche le bassin versant",
      url: "https://www.eaufrance.fr/sites/default/files/2018-07/fiche-le-bassin-versant-Agence-de-l-eau-onema-2012.pdf",
    },
  },
  {
    id: "htmltree",
    canvasHeight: 230,
    title: "Des balises à la page structurée",
    paths: [
      "/communication-et-medias/medias-numeriques/web/comment-le-langage-html-construit-il-une-page-web",
    ],
    steps: [
      {
        label: "Baliser",
        caption: "Le texte HTML indique les rôles d’un titre et d’un paragraphe.",
        detail:
          "Le texte HTML indique les rôles d’un titre et d’un paragraphe. Les chevrons encadrent des noms de balises : ils ne sont pas les mots affichés comme contenu.",
      },
      {
        label: "Emboîter",
        caption: "Le navigateur organise les éléments en une structure arborescente.",
        detail:
          "Le navigateur organise les éléments en une structure arborescente. Dans cet exemple, main contient un titre h1 et un paragraphe p ; ce ne sont pas trois pages séparées.",
      },
      {
        label: "Afficher",
        caption: "Le navigateur affiche le contenu selon cette structure et les styles.",
        detail:
          "Le navigateur affiche le contenu selon cette structure et les styles. Le titre et le paragraphe sont visibles ; le CSS peut changer leur apparence sans changer leur rôle.",
      },
    ],
    limit: "Extrait minimal, pas un document HTML complet. Le style affiché est un exemple.",
    source: {
      title: "MDN — HTML basics",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content",
    },
  },
  {
    id: "searchindex",
    canvasHeight: 230,
    title: "Chercher dans un index préparé",
    paths: [
      "/communication-et-medias/medias-numeriques/web/comment-un-moteur-de-recherche-trouve-t-il-une-page-parmi-toutes-celles-du-web",
    ],
    steps: [
      {
        label: "Explorer",
        caption: "Un robot découvre des pages en suivant des liens.",
        detail:
          "Un robot découvre des pages en suivant des liens. Les trois pages fictives sont reliées par des flèches de découverte, sans représenter tout le web.",
      },
      {
        label: "Indexer",
        caption: "Un index associe des termes aux pages qui les contiennent.",
        detail:
          "Un index associe des termes aux pages qui les contiennent. Le mot « arbre » renvoie aux pages A et C dans cet exemple inventé.",
      },
      {
        label: "Interroger",
        caption: "Une requête consulte l’index puis classe des résultats.",
        detail:
          "Une requête consulte l’index puis classe des résultats. Le moteur ne relit pas instantanément toutes les pages du web pour chaque recherche ; le classement est simplifié.",
      },
    ],
    limit:
      "Corpus de trois pages fictives, sans reproduction d’un moteur ni de son algorithme de classement.",
    source: {
      title: "Google Search Central — How Search works",
      url: "https://developers.google.com/search/docs/fundamentals/how-search-works",
    },
  },
  {
    id: "cookietoken",
    canvasHeight: 230,
    title: "Un identifiant relie des requêtes",
    paths: [
      "/communication-et-medias/medias-numeriques/web/comment-un-site-web-se-souvient-il-de-vous-grace-aux-cookies",
    ],
    steps: [
      {
        label: "Répondre",
        caption: "Le serveur peut envoyer un cookie dans sa réponse au navigateur.",
        detail:
          "Le serveur peut envoyer un cookie dans sa réponse au navigateur. Le jeton fictif S7 est une donnée d’exemple, sans identifiant réel.",
      },
      {
        label: "Conserver",
        caption: "Le navigateur conserve cette petite donnée selon ses attributs.",
        detail:
          "Le navigateur conserve cette petite donnée selon ses attributs. Dans cet exemple, le panier reste côté serveur, associé au même identifiant.",
      },
      {
        label: "Renvoyer",
        caption: "Une requête éligible renvoie le cookie et peut retrouver la session.",
        detail:
          "Une requête éligible renvoie le cookie et peut retrouver la session. Cela relie des requêtes sans révéler nécessairement l’identité de la personne. Tous les cookies n’ont pas la même fonction.",
      },
    ],
    limit:
      "Session fictive ; domaine, chemin, sécurité et expiration conditionnent les envois. Ce n’est pas un schéma de consentement.",
    source: {
      title: "MDN — Using HTTP cookies",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies",
    },
  },
  {
    id: "ssdanddisk",
    canvasHeight: 230,
    title: "Mécanique magnétique ou mémoire flash",
    paths: [
      "/micro-informatique-et-informatique/materiel/memoire-et-stockage/quelle-difference-y-a-t-il-entre-un-ssd-et-un-disque-dur",
    ],
    steps: [
      {
        label: "Disque dur",
        caption: "Une tête se déplace au-dessus d’un plateau magnétique en rotation.",
        detail:
          "Une tête se déplace au-dessus d’un plateau magnétique en rotation. Le bras et le plateau bougent, mais la tête ne doit normalement pas toucher la surface.",
      },
      {
        label: "SSD",
        caption: "Des puces de mémoire flash stockent les données sans pièce mobile.",
        detail:
          "Des puces de mémoire flash stockent les données sans pièce mobile. Les rectangles sont des boîtiers et un contrôleur, pas des cellules visibles à cette échelle.",
      },
      {
        label: "Accéder aux données",
        caption: "Le disque dur déplace sa tête ; le SSD adresse électroniquement ses cellules.",
        detail:
          "Le disque dur déplace sa tête ; le SSD adresse électroniquement ses cellules. La comparaison porte sur le mécanisme d’accès, pas sur un débit garanti ni un prix actuel.",
      },
    ],
    limit:
      "Vues de principe ; nombre de puces et capacité non représentatifs d’un modèle commercial.",
    source: {
      title: "IBM — What is an SSD?",
      url: "https://www.ibm.com/think/topics/solid-state-drives",
    },
  },
  {
    id: "capacitivetouch",
    canvasHeight: 230,
    title: "Le doigt perturbe une grille électrique",
    paths: [
      "/micro-informatique-et-informatique/materiel/peripheriques-et-ecrans/comment-un-ecran-tactile-sent-il-votre-doigt",
    ],
    steps: [
      {
        label: "La grille",
        caption:
          "Des électrodes permettent des mesures électriques à travers une surface isolante.",
        detail:
          "Des électrodes permettent des mesures électriques à travers une surface isolante. La grille est agrandie ; les couches conductrices réelles peuvent être transparentes.",
      },
      {
        label: "Le doigt",
        caption: "Un doigt proche modifie localement le couplage capacitif.",
        detail:
          "Un doigt proche modifie localement le couplage capacitif. Le verre reste entre le doigt et les électrodes : les couches ne sont pas mises en contact par pression.",
      },
      {
        label: "La position",
        caption: "Le contrôleur repère une variation localisée pour estimer une position.",
        detail:
          "Le contrôleur repère une variation localisée pour estimer une position. La zone colorée symbolise le signal, pas une empreinte stockée ni une photo du doigt.",
      },
    ],
    limit:
      "Écran capacitif projeté simplifié. Sensibilité, gants et plusieurs doigts dépendent du matériel.",
    source: {
      title: "How do touch-sensitive screens work?",
      url: "https://engineering.mit.edu/ask-an-engineer/how-do-touch-sensitive-screens-work",
    },
  },
  {
    id: "inkjetdrops",
    canvasHeight: 230,
    title: "Des buses déposent une image point par point",
    paths: [
      "/micro-informatique-et-informatique/materiel/peripheriques-et-ecrans/comment-une-imprimante-depose-t-elle-l-encre-exactement-au-bon-endroit",
    ],
    steps: [
      {
        label: "Les buses",
        caption: "Une tête de jet d’encre possède de minuscules buses au-dessus du papier.",
        detail:
          "Une tête de jet d’encre possède de minuscules buses au-dessus du papier. Les quatre couleurs sont cyan, magenta, jaune et noir ; les écarts sont agrandis.",
      },
      {
        label: "Éjecter",
        caption: "Une commande déclenche de petites gouttes vers des positions choisies.",
        detail:
          "Une commande déclenche de petites gouttes vers des positions choisies. Le dessin se limite au jet d’encre et ne montre pas le procédé au toner d’une imprimante laser.",
      },
      {
        label: "Former l’image",
        caption: "Le déplacement relatif du papier et de la tête place des points colorés.",
        detail:
          "Le déplacement relatif du papier et de la tête place des points colorés. À distance normale, les points contribuent à la perception de zones continues ; ici ils restent volontairement visibles.",
      },
    ],
    limit: "Gouttes et buses très agrandies. Commande thermique ou piézoélectrique non détaillée.",
    source: {
      title: "Epson — Micro Piezo inkjet technology",
      url: "https://corporate.epson/en/technology/overview/printer-inkjet/micro-piezo.html",
    },
  },
  {
    id: "transistorgate",
    canvasHeight: 230,
    title: "Une grille commande un canal",
    paths: [
      "/micro-informatique-et-informatique/materiel/processeurs/comment-un-transistor-minuscule-interrupteur-fait-il-fonctionner-un-ordinateur",
    ],
    steps: [
      {
        label: "Bloquer",
        caption: "Dans ce MOSFET simplifié, aucun canal conducteur ne relie source et drain.",
        detail:
          "Dans ce MOSFET simplifié, aucun canal conducteur ne relie source et drain. La grille est séparée du semi-conducteur par un isolant ; le dessin est une coupe conceptuelle.",
      },
      {
        label: "Commander",
        caption: "Une tension de grille adaptée permet de créer un canal conducteur.",
        detail:
          "Une tension de grille adaptée permet de créer un canal conducteur. Le chemin rouge est entre source et drain, pas à travers l’isolant de grille.",
      },
      {
        label: "Commuter",
        caption: "Changer la commande peut ouvrir ou fermer le passage du courant.",
        detail:
          "Changer la commande peut ouvrir ou fermer le passage du courant. Le circuit extérieur est nécessaire au courant. Le modèle isole une fonction de commutation, sans montrer une porte logique complète.",
      },
    ],
    limit:
      "MOSFET à enrichissement schématique, sans échelle, seuil chiffré ou architecture de processeur.",
    source: {
      title: "MIT OpenCourseWare — MOSFET, lecture 12",
      url: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/2d2c867fe21d0750631c5eac664c4da2_6_0022007L012.pdf",
    },
  },
  {
    id: "cpucooling",
    canvasHeight: 230,
    title: "Du processeur vers l’air",
    paths: [
      "/micro-informatique-et-informatique/materiel/processeurs/pourquoi-un-ordinateur-a-t-il-besoin-d-un-ventilateur",
    ],
    steps: [
      {
        label: "Conduire",
        caption: "La chaleur du processeur passe vers la base du dissipateur.",
        detail:
          "La chaleur du processeur passe vers la base du dissipateur. Une fine interface thermique facilite le contact ; elle ne produit pas de froid.",
      },
      {
        label: "Échanger",
        caption: "Les ailettes augmentent la surface d’échange avec l’air.",
        detail:
          "Les ailettes augmentent la surface d’échange avec l’air. La chaleur circule dans le métal puis vers l’air, sans transférer le courant du processeur au ventilateur.",
      },
      {
        label: "Ventiler",
        caption: "Le ventilateur renouvelle l’air qui emporte la chaleur.",
        detail:
          "Le ventilateur renouvelle l’air qui emporte la chaleur. Il ne refroidit pas la puce en dessous de l’air ambiant dans ce modèle ; certains appareils fonctionnent sans ventilateur.",
      },
    ],
    limit:
      "Coupe d’un refroidisseur à air simplifié ; aucun débit, seuil thermique ou conseil de démontage.",
    source: {
      title: "Intel — CPU cooling",
      url: "https://www.intel.com/content/www/us/en/gaming/resources/cpu-cooler-liquid-cooling-vs-air-cooling.html",
    },
  },
  {
    id: "passwordhash",
    canvasHeight: 230,
    title: "Conserver une empreinte salée",
    paths: [
      "/micro-informatique-et-informatique/reseaux-et-securite/chiffrement/comment-un-site-protege-t-il-votre-mot-de-passe-sans-le-connaitre",
    ],
    steps: [
      {
        label: "Créer",
        caption:
          "Le serveur calcule une empreinte avec un algorithme adapté et un sel propre au compte.",
        detail:
          "Le serveur calcule une empreinte avec un algorithme adapté et un sel propre au compte. Le mot de passe n’est pas enregistré en clair dans le modèle ; le sel n’est pas secret.",
      },
      {
        label: "Vérifier",
        caption: "À la connexion, le serveur recalcule avec le même sel puis compare.",
        detail:
          "À la connexion, le serveur recalcule avec le même sel puis compare. Une correspondance d’empreintes valide cet essai, sans déchiffrer l’empreinte stockée.",
      },
      {
        label: "Distinguer",
        caption: "Deux comptes utilisant le même mot de passe ont des sels différents.",
        detail:
          "Deux comptes utilisant le même mot de passe ont des sels différents. Leurs empreintes diffèrent. Des essais hors ligne restent possibles en cas de fuite : le coût du calcul les ralentit.",
      },
    ],
    limit:
      "Valeurs fictives et empreintes abrégées. Paramètres et authentification complète ne sont pas un guide d’implémentation.",
    source: {
      title: "Password Storage Cheat Sheet",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
    },
  },
  {
    id: "blocklinks",
    canvasHeight: 230,
    title: "Une modification rompt les références",
    paths: [
      "/micro-informatique-et-informatique/reseaux-et-securite/chiffrement/comment-une-chaine-de-blocs-rend-elle-le-passe-presque-impossible-a-modifier",
    ],
    steps: [
      {
        label: "Relier",
        caption: "Chaque bloc conserve une référence à l’empreinte du précédent.",
        detail:
          "Chaque bloc conserve une référence à l’empreinte du précédent. Les flèches reviennent vers le bloc précédent ; les empreintes sont abrégées et fictives.",
      },
      {
        label: "Modifier",
        caption: "Changer les données d’un ancien bloc change son empreinte.",
        detail:
          "Changer les données d’un ancien bloc change son empreinte. La référence mémorisée dans le bloc suivant ne correspond alors plus à cette empreinte.",
      },
      {
        label: "Vérifier collectivement",
        caption: "Recalculer une chaîne ne suffit pas à imposer une nouvelle histoire au réseau.",
        detail:
          "Recalculer une chaîne ne suffit pas à imposer une nouvelle histoire au réseau. Des règles de consensus et leurs hypothèses protègent l’historique partagé, avec des garanties variables selon les systèmes.",
      },
    ],
    limit:
      "Trois blocs fictifs. Une chaîne n’est pas absolument immuable ; consensus et attaques ne sont pas détaillés.",
    source: {
      title: "NIST — Blockchain Technology Overview",
      url: "https://doi.org/10.6028/NIST.IR.8202",
    },
  },
] satisfies LessonDiagramSpec[];
