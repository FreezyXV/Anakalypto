import type { LessonDiagramSpec } from "./registry";

export const AERONAUTICS_DIAGRAMS: readonly LessonDiagramSpec[] = [
  {
    id: "winglet",
    title: "Une aile, ses extrémités et son sillage",
    paths: ["/aeronautique/aerodynamique/trainee/les-winglets-petits-ailerons-contre-la-trainee"],
    steps: [
      {
        label: "Aile finie",
        caption: "Aux extrémités, l’écoulement s’enroule en tourbillons.",
        detail:
          "La différence de pression entre les deux faces participe à cet écoulement tridimensionnel. Le sillage et la déviation de l’air sont associés à une traînée induite par la portance.",
      },
      {
        label: "Ajouter un winglet",
        caption: "L’extrémité relevée modifie la répartition de l’écoulement.",
        detail:
          "Un winglet est une petite surface portante conçue avec le reste de l’aile. Il peut réduire la traînée induite dans certaines conditions ; il ne bouche pas simplement le passage de l’air.",
      },
      {
        label: "Comparer les sillages",
        caption: "Le sillage subsiste avec le winglet ; sa distribution change.",
        detail:
          "La taille des spirales sert ici à comparer qualitativement deux conceptions. Le bénéfice dépend du vol et doit aussi être comparé à la masse, aux efforts et à la traînée de la surface ajoutée.",
      },
    ],
    limit:
      "Vue oblique puis comparaison qualitative de deux demi-ailes ; spirales symboliques, sans mesure de carburant ni calcul des vitesses du sillage. Les tourbillons ne disparaissent pas.",
    source: {
      title: "NASA Glenn — Winglets",
      url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/winglets/",
    },
  },
  {
    id: "boundary",
    title: "Tout près de la surface : la couche limite",
    paths: ["/aeronautique/aerodynamique/ecoulements/couche-limite-transition-laminaire-turbulent"],
    steps: [
      {
        label: "Près de la paroi",
        caption: "Au contact de la paroi, l’air est immobile dans ce repère.",
        detail:
          "On se place dans le repère de la surface fixe. La viscosité freine le fluide près d’elle ; loin de la paroi, sa vitesse rejoint celle de l’écoulement extérieur.",
      },
      {
        label: "Régime laminaire",
        caption: "Des couches ordonnées ont des vitesses différentes.",
        detail:
          "Les flèches représentent la vitesse moyenne à plusieurs hauteurs. La région colorée matérialise une couche limite qui s’épaissit le long de la plaque, sans être une membrane.",
      },
      {
        label: "Régime turbulent",
        caption: "Des fluctuations mélangent l’air à l’intérieur de la couche.",
        detail:
          "Le profil moyen devient plus plein : le mélange transporte davantage de quantité de mouvement près de la paroi. Une couche turbulente peut néanmoins se séparer si les conditions le provoquent.",
      },
    ],
    limit:
      "Plaque plane, échelles verticales amplifiées, profils moyens qualitatifs. La transition dépend notamment des perturbations, de la rugosité et du nombre de Reynolds, pas d’un emplacement universel.",
    source: {
      title: "NASA Glenn — Boundary Layer",
      url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/boundary-layer/",
    },
  },
  {
    id: "transonic",
    title: "Quand une partie de l’air dépasse Mach 1",
    paths: ["/aeronautique/aerodynamique/ecoulements/vol-transsonique-onde-de-choc"],
    steps: [
      {
        label: "Sous Mach 1",
        caption: "Dans cette première situation, l’écoulement reste subsonique.",
        detail:
          "Le nombre de Mach compare la vitesse locale de l’air à la vitesse locale du son. Ici, même au-dessus du profil, aucun secteur supersonique n’est représenté.",
      },
      {
        label: "Poche supersonique",
        caption: "Au-dessus de l’aile, une poche devient localement supersonique.",
        detail:
          "L’avion peut encore avancer à une vitesse subsonique alors qu’une partie de l’écoulement accéléré autour du profil dépasse localement Mach 1. La frontière orange marque la fin de cette poche.",
      },
      {
        label: "Choc et séparation",
        caption: "Un choc ralentit brusquement l’air ; une séparation peut suivre.",
        detail:
          "À travers le choc, la pression augmente et le nombre de Mach diminue. Son interaction avec la couche limite peut provoquer une séparation et accroître la traînée, selon le profil et les conditions.",
      },
    ],
    limit:
      "Écoulements qualitatifs autour d’un profil schématique. La position du choc et l’apparition d’une séparation ne sont pas calculées ; aucun seuil de Mach universel n’est attribué à toutes les ailes.",
    source: {
      title: "NASA Glenn — High Subsonic Flow",
      url: "https://www.grc.nasa.gov/www/k-12/BGP/hisub.html",
    },
  },
  {
    id: "sonicboom",
    title: "Une source sonore qui rattrape ses ondes",
    paths: ["/aeronautique/aerodynamique/ecoulements/le-mur-du-son-et-le-bang-supersonique"],
    steps: [
      {
        label: "Mach 0,5",
        caption: "Les petites perturbations sonores devancent la source.",
        detail:
          "Chaque cercle est la coupe d’une onde émise plus tôt. La source avance vers la droite, mais moins vite que ces perturbations se propagent dans l’air.",
      },
      {
        label: "Mach 1",
        caption: "Les fronts idéalisés se rejoignent devant la source.",
        detail:
          "Les centres des cercles sont les anciennes positions de la source. À la vitesse du son, leurs points les plus avancés coïncident avec sa position actuelle.",
      },
      {
        label: "Mach 2",
        caption: "À vitesse supersonique, une enveloppe conique reste en arrière.",
        detail:
          "Le demi-angle de Mach des petites perturbations vaut ici 30°. Un avion supersonique produit continuellement des ondes de choc : le bang n’est pas réservé à l’instant où il passe Mach 1.",
      },
    ],
    limit:
      "Coupes à temps égal d’ondes de petites perturbations dans un air uniforme. Le cône de Mach n’est pas le calcul du choc d’un avion réel, dont l’angle dépend aussi de sa forme et de l’intensité du choc.",
    source: {
      title: "NASA Glenn — Mach Angle",
      url: "https://www.grc.nasa.gov/WWW/BGH/machang.html",
    },
  },
  {
    id: "turboprop",
    title: "De la turbine à l’hélice",
    paths: ["/aeronautique/propulsion/turbopropulseurs/turbopropulseur-principe-domaine-emploi"],
    steps: [
      {
        label: "Énergie des gaz",
        caption: "L’air est comprimé, puis chauffé par la combustion.",
        detail:
          "La coupe distingue l’entrée et le compresseur bleus, la chambre chaude orange, puis la turbine. L’énergie des gaz sert en grande partie à entraîner un arbre mécanique.",
      },
      {
        label: "Arbre et réducteur",
        caption: "La turbine entraîne l’hélice par un arbre et un réducteur.",
        detail:
          "Le chemin vert représente la transmission mécanique. Le réducteur adapte la rotation rapide de la turbine à celle de l’hélice ; l’architecture exacte varie selon le moteur.",
      },
      {
        label: "Air accéléré",
        caption: "L’hélice accélère une grande masse d’air vers l’arrière.",
        detail:
          "L’hélice fournit l’essentiel de la poussée de ce type de moteur. Les gaz qui sortent de la turbine peuvent aussi contribuer à la poussée, sans être son mécanisme principal.",
      },
    ],
    limit:
      "Coupe fonctionnelle, composants espacés et arbre décalé pour la lecture. Aucun régime, rapport d’engrenage ou pourcentage de poussée n’est attribué à un moteur particulier.",
    source: {
      title: "NASA Glenn — Turboprop Engine",
      url: "https://www.grc.nasa.gov/www/k-12/airplane/aturbp.html",
    },
  },
  {
    id: "sixpack",
    title: "Six instruments, six informations complémentaires",
    paths: ["/aeronautique/navigation-aerienne/instruments-de-vol/instruments-de-vol-primaires"],
    steps: [
      {
        label: "Pressions de l’air",
        caption: "Vitesse, altitude et variation d’altitude utilisent les pressions.",
        detail:
          "Dans ce tableau classique, l’anémomètre combine pression totale et pression statique ; l’altimètre et le variomètre utilisent la pression statique. Les cadrans colorés identifient ces trois informations.",
      },
      {
        label: "Références gyroscopiques",
        caption: "Assiette, virage et cap complètent le tableau classique.",
        detail:
          "Les trois cadrans orange illustrent les références gyroscopiques d’un équipement traditionnel. Les avions modernes peuvent afficher ces informations sur écran à partir d’autres capteurs.",
      },
      {
        label: "Croiser les informations",
        caption: "Aucun cadran, seul, ne décrit tout le mouvement de l’avion.",
        detail:
          "L’assiette ne donne pas directement la trajectoire, et le cap n’est pas nécessairement la route suivie au sol. Les instruments apportent des mesures différentes que l’on interprète ensemble.",
      },
    ],
    limit:
      "Disposition traditionnelle dite six-pack. Aiguilles symboliques sans graduation ni valeur de vol ; ce dessin présente les fonctions et ne constitue pas un instrument utilisable pour le pilotage.",
    source: {
      title: "FAA — Instrument Flying Handbook",
      url: "https://www.faa.gov/sites/faa.gov/files/pilots/FAA-H-8083-15B.pdf",
    },
  },
  {
    id: "attitude",
    title: "Lire l’horizon quand on ne le voit plus",
    paths: [
      "/aeronautique/navigation-aerienne/instruments-de-vol/comment-un-pilote-sait-il-ou-est-le-haut-dans-les-nuages",
    ],
    steps: [
      {
        label: "À plat",
        caption: "Le symbole fixe de l’avion est aligné avec l’horizon de référence.",
        detail:
          "Le bleu représente le côté ciel et le brun le côté sol. Un instrument d’attitude fournit une référence d’orientation même quand l’horizon extérieur est masqué.",
      },
      {
        label: "Incliné à droite",
        caption: "L’horizon s’incline face au symbole fixe de l’avion.",
        detail:
          "L’avion est ici incliné à droite par rapport à la référence terrestre. Sur ce type d’affichage, le symbole d’avion reste fixe et le fond représente le mouvement relatif de l’horizon.",
      },
      {
        label: "Nez relevé",
        caption: "L’horizon descend sous le symbole fixe lorsque le nez se relève.",
        detail:
          "L’assiette à cabrer décrit une orientation, pas une garantie de montée. La trajectoire dépend aussi de la vitesse, de l’incidence et des autres forces qui agissent sur l’avion.",
      },
    ],
    limit:
      "Affichage pédagogique de trois attitudes, sans graduation ni simulation de capteur. Les limitations et pannes des instruments réels ne sont pas représentées ; aucune consigne de pilotage.",
    source: {
      title: "FAA — Instrument Flying Handbook",
      url: "https://www.faa.gov/sites/faa.gov/files/pilots/FAA-H-8083-15B.pdf",
    },
  },
  {
    id: "drag",
    title: "Trois contributions à la traînée",
    paths: ["/aeronautique/aerodynamique/trainee/trainee-aerodynamique-reduction"],
    steps: [
      {
        label: "Frottement",
        caption: "L’air près de la surface exerce une contrainte de frottement.",
        detail:
          "Dans le repère du profil fixe, l’air arrive de la gauche et repart vers la droite. La force de traînée qu’il exerce sur le profil est dirigée vers la droite.",
      },
      {
        label: "Forme et sillage",
        caption: "Une séparation importante laisse un large sillage derrière l’objet.",
        detail:
          "Une différence de pression entre l’avant et l’arrière contribue à la traînée de forme. Un profilage adapté peut limiter le sillage dans certaines conditions d’écoulement.",
      },
      {
        label: "Portance et sillage",
        caption: "Une aile finie qui porte laisse aussi un sillage tourbillonnaire.",
        detail:
          "La portance d’une aile finie s’accompagne d’une traînée induite. Elle dépend notamment de la répartition de portance et de l’allongement ; elle ne vient pas seulement de la rugosité de surface.",
      },
    ],
    limit:
      "Trois contributions illustrées séparément, sans parts numériques. La traînée d’onde et les interactions entre composants ne figurent pas dans cette sélection ; les flèches sont qualitatives.",
    source: {
      title: "NASA Glenn — Drag",
      url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag/",
    },
  },
  {
    id: "windtunnel",
    title: "Faire venir l’air vers un modèle fixe",
    paths: [
      "/aeronautique/aerodynamique/ecoulements/comment-une-soufflerie-permet-elle-de-tester-un-avion-sans-le-faire-voler",
    ],
    steps: [
      {
        label: "Guider l’air",
        caption: "Le ventilateur fait circuler l’air dans la veine d’essai.",
        detail:
          "Le modèle reste fixé sur son support. Des éléments de préparation de l’écoulement, ici une grille en amont, aident à obtenir un air adapté à l’expérience.",
      },
      {
        label: "Mesurer les efforts",
        caption: "Une balance mesure les efforts transmis par le support.",
        detail:
          "Les flèches verte et orange distinguent portance et traînée dans le repère de la soufflerie. Les capteurs se trouvent dans la balance ; ce n’est pas le dessin des filets d’air qui donne directement les forces.",
      },
      {
        label: "Rendre l’air visible",
        caption: "Des traceurs aident à observer le parcours de l’écoulement.",
        detail:
          "Les lignes figurent ici un écoulement attaché de démonstration autour d’un profil. Une soufflerie peut aussi utiliser fumée, fils de laine ou autres techniques selon la vitesse et le phénomène étudié.",
      },
    ],
    limit:
      "Soufflerie ouverte simplifiée, sans reproduire ses équipements de sécurité. Une maquette ne reproduit pas automatiquement le vol réel : nombres de Mach et de Reynolds, échelle et montage doivent être considérés.",
    source: {
      title: "NASA Glenn — Wind Tunnels",
      url: "https://www.grc.nasa.gov/WWW/k-12/VirtualAero/BottleRocket/airplane/tunnel1.html",
    },
  },
  {
    id: "flaps",
    title: "Le bord d’attaque et le bord de fuite se déploient",
    paths: [
      "/aeronautique/aerodynamique/portance/pourquoi-les-ailes-d-un-avion-changent-elles-de-forme-au-decollage-et-a-l-atterrissage",
    ],
    steps: [
      {
        label: "Profil rentré",
        caption: "Le bec avant et le volet arrière s’intègrent au profil.",
        detail:
          "La coupe montre une aile équipée de dispositifs mobiles aux deux bords. L’avant reçoit l’air ; l’arrière est le bord de fuite. Le dessin permet de distinguer leurs rôles et leurs emplacements.",
      },
      {
        label: "Volet sorti",
        caption: "Le volet recule et s’abaisse : la cambrure augmente.",
        detail:
          "L’exemple choisi est un volet de type Fowler, qui peut aussi augmenter la surface. D’autres types de volets ont des mouvements différents ; tous ne reculent pas de cette manière.",
      },
      {
        label: "Bec et volet sortis",
        caption: "Le bec s’avance ; une fente laisse passer de l’air vers le dessus.",
        detail:
          "Le bec et la fente peuvent aider l’écoulement à rester attaché à plus forte incidence. Ces dispositifs augmentent la capacité de portance, avec aussi un coût en traînée selon leur configuration.",
      },
    ],
    limit:
      "Profil équipé d’un bec à fente et d’un volet Fowler, mouvements amplifiés. Lignes d’air qualitatives ; pas de calendrier universel de déploiement ni de valeur de vitesse ou de portance.",
    source: {
      title: "NASA Glenn — Flaps and Slats",
      url: "https://www.grc.nasa.gov/www/k-12/VirtualAero/BottleRocket/airplane/flap.html",
    },
  },
  {
    id: "glide",
    title: "Planer : avancer en perdant de la hauteur",
    paths: [
      "/aeronautique/aerodynamique/portance/comment-un-avion-de-ligne-peut-il-planer-quand-ses-moteurs-s-arretent",
      "/aeronautique/aerodynamique/ecoulements/le-planeur-voler-sans-moteur",
    ],
    steps: [
      {
        label: "Trajectoire descendante",
        caption: "Sans poussée, un vol plané stabilisé descend dans l’air.",
        detail:
          "L’air continue de circuler autour des ailes tant que l’avion avance. Le plané transforme une partie de l’énergie liée à l’altitude en énergie dissipée par la traînée.",
      },
      {
        label: "Équilibre des forces",
        caption: "Le poids est vertical ; portance et traînée sont liées à la trajectoire.",
        detail:
          "En descente rectiligne à vitesse constante, les trois forces se compensent. La portance est perpendiculaire à la vitesse dans l’air ; la traînée lui est opposée. Il n’y a pas de poussée motrice dessinée.",
      },
      {
        label: "Distance et hauteur",
        caption: "En air immobile, la finesse relie distance horizontale et hauteur perdue.",
        detail:
          "Le triangle montre un exemple géométrique de finesse 3, volontairement accentué pour la lisibilité. Le rapport portance/traînée est alors aussi égal à 3 en plané stabilisé ; ce n’est la performance d’aucun avion identifié.",
      },
    ],
    limit:
      "Air immobile, trajectoire rectiligne et vitesse constante ; pente très accentuée. Le vent et les ascendances changent le déplacement par rapport au sol. Aucun calcul d’autonomie ni procédure de panne réelle.",
    source: {
      title: "NASA Glenn — Glider Trajectory Problem",
      url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/glider-trajectory-problem/",
    },
  },
  {
    id: "icing",
    title: "Quand la glace déforme le profil de l’aile",
    paths: [
      "/aeronautique/aerodynamique/trainee/pourquoi-le-givre-est-il-dangereux-pour-les-ailes-d-un-avion",
    ],
    steps: [
      {
        label: "Gouttes surfondues",
        caption: "Des gouttes encore liquides rencontrent une surface froide.",
        detail:
          "Dans certaines conditions atmosphériques, de l’eau liquide existe sous 0 °C. Elle peut geler au contact de l’avion ; la forme de la glace dépend notamment de la température, des gouttes et de l’écoulement.",
      },
      {
        label: "Glace accumulée",
        caption: "La glace modifie le bord d’attaque et sa rugosité.",
        detail:
          "Le contour bleu ajouté montre une forme d’accrétion possible, fortement agrandie. Même une contamination peu épaisse peut perturber l’aérodynamique : le problème n’est pas seulement le poids ajouté.",
      },
      {
        label: "Écoulement perturbé",
        caption: "La séparation peut survenir plus tôt et réduire la portance maximale.",
        detail:
          "Le sillage ondulé représente une perturbation qualitative après l’accrétion. La traînée peut augmenter et l’incidence critique diminuer ; les conséquences exactes dépendent du profil et de la glace.",
      },
    ],
    limit:
      "Forme de glace amplifiée et écoulement illustratif, sans pourcentage ni seuil météorologique. Ni méthode de dégivrage, ni décision d’exploitation : l’image explique uniquement le mécanisme aérodynamique.",
    source: {
      title: "NASA Glenn — Aerodynamics of Icing",
      url: "https://aircrafticing.grc.nasa.gov/1_1_3_2.html",
    },
  },
  {
    id: "helicopter",
    title: "Des ailes qui tournent autour d’un mât",
    paths: [
      "/aeronautique/aerodynamique/portance/comment-les-pales-d-un-helicoptere-creent-la-portance",
    ],
    steps: [
      {
        label: "Pales en mouvement",
        caption: "Les pales rencontrent l’air parce qu’elles tournent.",
        detail:
          "Chaque pale est une aile en rotation. Le disque transparent représente la surface balayée, pas une plaque solide ; la force aérodynamique totale peut soutenir l’hélicoptère.",
      },
      {
        label: "Pas collectif",
        caption: "Le collectif change ensemble le pas des pales.",
        detail:
          "L’encart compare une section de pale avant et après un changement de pas. Cela modifie les efforts aérodynamiques, en interaction avec la puissance et les conditions de vol.",
      },
      {
        label: "Disque incliné",
        caption: "Une force de rotor inclinée possède une composante horizontale.",
        detail:
          "Le cyclique fait varier le pas au cours du tour et permet d’incliner le disque. La flèche oblique montre la résultante, et les pointillés ses composantes verticale et horizontale ; le rotor anticouple garde un rôle distinct.",
      },
    ],
    limit:
      "Vue latérale qualitative d’un rotor principal, sans calcul de battement, avance de phase ou autorotation. Les changements de pas sont agrandis ; cette présentation ne donne pas de commande de pilotage.",
    source: {
      title: "FAA Safety — Helicopter controls",
      url: "https://www.faasafety.gov/gslac/ALC/course_content_popup.aspx?cID=109&preview=true&sID=473",
    },
  },
  {
    id: "turbulence",
    title: "Trois origines possibles des mouvements d’air",
    paths: ["/aeronautique/aviation-civile/securite/les-turbulences-pourquoi-l-avion-est-secoue"],
    steps: [
      {
        label: "Chauffage du sol",
        caption: "Un chauffage inégal favorise des mouvements convectifs.",
        detail:
          "De l’air plus chaud monte tandis que d’autres mouvements compensent ces ascendances. Les flèches illustrent des déplacements dans la masse d’air, sans correspondre à une force constante sur l’avion.",
      },
      {
        label: "Relief et obstacles",
        caption: "Le relief peut créer ondes et zones turbulentes sous le vent.",
        detail:
          "Un vent franchissant une montagne peut être perturbé en aval. Les ondes ne sont pas elles-mêmes toutes turbulentes ; la spirale signale ici une zone de rotor possible, pas un phénomène garanti.",
      },
      {
        label: "Cisaillement",
        caption: "Des variations de vent peuvent favoriser la turbulence.",
        detail:
          "Les flèches de longueurs différentes indiquent deux vitesses de vent selon la hauteur. Un cisaillement peut produire de la turbulence, notamment près d’un courant-jet, mais ne suffit pas à prédire une secousse précise.",
      },
    ],
    limit:
      "Schémas météorologiques qualitatifs, sans prévision de lieu ni de sévérité. Les trajectoires d’air ne sont pas celles d’un avion ; un ciel sans nuages n’exclut pas la turbulence.",
    source: {
      title: "NOAA / National Weather Service — Turbulence",
      url: "https://www.weather.gov/zme/safety_turb",
    },
  },
];
