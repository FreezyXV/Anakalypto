import type { LessonDiagramSpec } from "./registry";

export const ASTRONOMY_DIAGRAMS: readonly LessonDiagramSpec[] = [
  {
    id: "tides",
    title: "Deux renflements, une Terre qui tourne",
    paths: [
      "/espace-et-astronomie/systeme-solaire/lune/la-lune-formation-et-marees",
      "/sciences-fondamentales/sciences-de-la-terre/oceanographie/comment-la-lune-fait-elle-monter-et-descendre-la-mer",
      "/espace-et-astronomie/systeme-solaire/lune/pourquoi-la-mer-monte-t-elle-et-descend-elle-deux-fois-par-jour",
      "/espace-et-astronomie/systeme-solaire/lune/les-marees-et-l-effet-de-la-lune-sur-les-oceans",
    ],
    steps: [
      {
        label: "Comparer les attractions",
        caption:
          "La Lune attire le côté proche plus fortement que le centre, et le côté éloigné moins fortement.",
        detail:
          "Les flèches orange pointent toutes vers la Lune. Elles comparent son attraction à trois endroits ; elles ne représentent pas encore les forces de marée.",
      },
      {
        label: "Retirer le mouvement commun",
        caption:
          "Par rapport au centre terrestre, l’effet différentiel étire l’océan dans deux directions opposées.",
        detail:
          "Les flèches bleues représentent ce qui reste après retrait de l’accélération du centre. La Lune ne repousse pas l’eau du côté éloigné : son attraction y est plus faible.",
      },
      {
        label: "Suivre une côte",
        caption:
          "Un même point de la Terre rencontre deux zones hautes dans ce modèle de marée d’équilibre.",
        detail:
          "Les trois positions repérées suivent une côte pendant la rotation. Les continents, la profondeur et les résonances transforment fortement les marées réelles : ce dessin ne prédit ni leur heure ni leur hauteur.",
      },
    ],
    limit:
      "Modèle de marée d’équilibre avec un océan global, sans Soleil ni continents ; renflements très exagérés et mouvements locaux non simulés.",
    source: {
      title: "NOAA — Tides",
      url: "https://www.noaa.gov/jetstream/ocean/tides",
    },
  },
  {
    id: "starbirth",
    title: "Du nuage à la fusion",
    paths: [
      "/espace-et-astronomie/astrophysique/etoiles/comment-nait-une-etoile-a-partir-d-un-nuage-de-gaz",
    ],
    steps: [
      {
        label: "Rassembler le gaz",
        caption: "Une région dense d’un nuage se contracte sous l’effet de sa gravité.",
        detail:
          "Le gaz et les poussières ne s’allument pas d’un seul coup. La contraction concentre progressivement la matière dans certaines régions du nuage.",
      },
      {
        label: "Former une protoétoile",
        caption: "Une protoétoile reçoit de la matière depuis le disque qui l’entoure.",
        detail:
          "Le disque et les jets sont représentés séparément. À ce stade, la contraction et l’accrétion peuvent fournir l’énergie rayonnée avant la fusion durable de l’hydrogène.",
      },
      {
        label: "Allumer la fusion",
        caption:
          "Si sa masse suffit, le cœur devient assez chaud pour entretenir la fusion de l’hydrogène.",
        detail:
          "La pression interne et la gravité s’équilibrent dans une étoile de la séquence principale. Les flèches montrent les directions, sans mesurer les forces ni donner une température universelle.",
      },
    ],
    limit:
      "Étapes symboliques de la formation d’une étoile ; masses, distances, durées et luminosités ne sont pas représentées à l’échelle.",
    source: {
      title: "NASA — Stars",
      url: "https://science.nasa.gov/universe/stars/",
    },
  },
  {
    id: "starlife",
    title: "Deux destins selon la masse",
    paths: [
      "/espace-et-astronomie/astrophysique/etoiles/formation-stellaire-galaxies-lointaines-jwst",
    ],
    steps: [
      {
        label: "Comparer les étoiles",
        caption:
          "Une étoile semblable au Soleil et une étoile massive n’évoluent pas au même rythme.",
        detail:
          "Les deux lignes sont deux scénarios, pas deux étapes d’une même étoile. Une étoile plus massive peut vivre moins longtemps malgré une réserve de matière plus grande.",
      },
      {
        label: "Changer de structure",
        caption:
          "Les étoiles évoluent lorsque leur combustible central et leur structure changent.",
        detail:
          "La ligne du haut montre une géante rouge ; celle du bas une supergéante. Le dessin compare les chemins, sans coder les rayons réels par les tailles des disques.",
      },
      {
        label: "Voir les restes",
        caption:
          "Le scénario solaire laisse une naine blanche ; une étoile massive peut laisser une étoile à neutrons ou un trou noir.",
        detail:
          "L’enveloppe éjectée du scénario solaire n’est pas une supernova. La ligne massive représente une issue possible avec explosion ; toutes les étoiles massives ne suivent pas exactement le même scénario.",
      },
    ],
    limit:
      "Deux grandes voies schématiques, sans système binaire, seuil de masse précis ni scénario exhaustif de fin de vie ; durées non à l’échelle.",
    source: {
      title: "NASA — Life Cycles of Sun-like and Massive Stars",
      url: "https://science.nasa.gov/asset/webb/life-cycles-of-sun-like-and-massive-stars/",
    },
  },
  {
    id: "transit",
    title: "Une planète fait baisser la lumière reçue",
    paths: [
      "/espace-et-astronomie/observation-astronomique/telescopes/comment-plato-va-t-il-chercher-des-planetes-comme-la-terre",
    ],
    steps: [
      {
        label: "Avant le passage",
        caption: "Avant le transit, le disque de l’étoile n’est pas masqué.",
        detail:
          "Le dessin montre la silhouette vue depuis l’observateur, et non une vue de dessus de l’orbite. La courbe en dessous suit la lumière reçue au cours du passage.",
      },
      {
        label: "Pendant le passage",
        caption: "La planète masque une partie du disque et la lumière reçue diminue.",
        detail:
          "La baisse dépend notamment du rapport des surfaces apparentes. La planète est volontairement grande pour rendre le mécanisme visible ; une planète comme la Terre produit une baisse bien plus petite devant une étoile solaire.",
      },
      {
        label: "Après le passage",
        caption: "La lumière revient au niveau initial lorsque la planète quitte le disque.",
        detail:
          "Le point coloré suit la position sélectionnée sur la courbe. Des baisses répétées peuvent révéler une période orbitale ; un signal isolé ne suffit pas à prouver la présence d’une planète.",
      },
    ],
    limit:
      "Disques uniformes sans assombrissement au bord, sans bruit ni taches stellaires ; exemple géométrique grossi, pas une courbe de mesures de PLATO.",
    source: {
      title: "ESA — Eclipse spectroscopy",
      url: "https://www.esa.int/ESA_Multimedia/Images/2023/09/Eclipse_spectroscopy",
    },
  },
  {
    id: "transmission",
    title: "Lire les creux d’un spectre",
    paths: [
      "/espace-et-astronomie/observation-astronomique/telescopes/comment-le-telescope-webb-lit-il-la-composition-de-l-air-d-une-planete-lointaine",
    ],
    steps: [
      {
        label: "Éclairer l’atmosphère",
        caption:
          "Une petite partie de la lumière stellaire traverse le bord de l’atmosphère planétaire.",
        detail:
          "Le disque opaque de la planète bloque la lumière centrale. Le trajet coloré passe dans la couche atmosphérique, pas à travers le sol de la planète.",
      },
      {
        label: "Séparer les longueurs d’onde",
        caption: "Les molécules absorbent davantage certaines longueurs d’onde que d’autres.",
        detail:
          "La bande colorée est un code de lecture symbolique de l’infrarouge, pas ses couleurs visibles. Les creux sont des bandes d’absorption illustratives ; ils ne correspondent pas ici à une molécule identifiée.",
      },
      {
        label: "Comparer les signatures",
        caption: "On compare les variations du spectre à des modèles pour étudier l’atmosphère.",
        detail:
          "Le tracé gris sert de référence et le tracé bleu montre une absorption supplémentaire. Une vraie interprétation doit prendre en compte les incertitudes, les nuages et plusieurs molécules possibles.",
      },
    ],
    limit:
      "Spectre fictif sans axe chiffré ni identification chimique ; atmosphère et passage lumineux agrandis, dispositif de Webb non dessiné à l’échelle.",
    source: {
      title: "ESA — Eclipse spectroscopy",
      url: "https://www.esa.int/ESA_Multimedia/Images/2023/09/Eclipse_spectroscopy",
    },
  },
  {
    id: "microlensing",
    title: "Une amplification, puis une petite anomalie",
    paths: [
      "/espace-et-astronomie/observation-astronomique/messagers-du-cosmos/comment-une-etoile-peut-elle-servir-de-loupe-pour-trouver-des-planetes",
      "/espace-et-astronomie/observation-astronomique/telescopes/a-quoi-sert-le-telescope-spatial-roman-pour-chasser-les-exoplanetes",
    ],
    steps: [
      {
        label: "Approcher l’alignement",
        caption:
          "Une étoile au premier plan passe près de notre ligne de visée vers une étoile lointaine.",
        detail:
          "Les deux étoiles sont à des distances différentes. Leurs images sont généralement trop proches pour être distinguées : l’observation porte surtout sur la lumière totale reçue.",
      },
      {
        label: "Amplifier la lumière",
        caption: "L’amplification augmente puis diminue quand l’alignement évolue.",
        detail:
          "La courbe bleue est calculée pour une lentille ponctuelle idéale. La luminosité augmente pendant l’événement : c’est l’inverse de la baisse provoquée par un transit.",
      },
      {
        label: "Repérer une anomalie",
        caption: "Une planète autour de la lentille peut ajouter une perturbation à la courbe.",
        detail:
          "La petite anomalie orange est un exemple qualitatif ajouté à la courbe idéale, pas une simulation d’un système planétaire réel. Les anomalies ne sont pas toujours des bosses positives ni aussi simples.",
      },
    ],
    limit:
      "Lentille ponctuelle idéale pour la courbe principale ; anomalie planétaire illustrative et distances non à l’échelle. Aucun paramètre réel n’est estimé.",
    source: {
      title: "NASA — Microlensing",
      url: "https://science.nasa.gov/mission/roman-space-telescope/microlensing/",
    },
  },
  {
    id: "lensing",
    title: "La gravité dévie des trajets lumineux",
    paths: [
      "/espace-et-astronomie/astrophysique/cosmologie/comment-un-amas-de-galaxies-peut-il-agir-comme-une-loupe-cosmique",
    ],
    steps: [
      {
        label: "Aligner les objets",
        caption:
          "Une source lointaine se trouve derrière un amas de galaxies dans notre ligne de visée.",
        detail:
          "La source, l’amas et l’observateur sont trois plans distincts. L’amas n’émet pas lui-même la lumière de la source que l’on cherche à observer.",
      },
      {
        label: "Suivre deux trajets",
        caption:
          "La gravité de l’amas permet à plusieurs trajets de lumière d’atteindre le même observateur.",
        detail:
          "Les chemins courbes sont des tracés explicatifs en coupe. Ils montrent une déviation gravitationnelle, sans représenter une réfraction dans du verre ni résoudre une distribution de masse réelle.",
      },
      {
        label: "Voir des arcs",
        caption:
          "Dans l’image du ciel, une même source peut apparaître déformée ou multipliée autour de l’amas.",
        detail:
          "Cette dernière vue est une vue du ciel, différente de la coupe précédente. Les arcs représentent des images déformées ; ils ne sont ni des anneaux matériels ni l’orbite de la source.",
      },
    ],
    limit:
      "Coupe de principe puis vue du ciel explicitement distinguées ; arcs symboliques, sans reconstruction de masse ou calcul relativiste d’un amas réel.",
    source: {
      title: "NASA — Microlensing",
      url: "https://science.nasa.gov/mission/roman-space-telescope/microlensing/",
    },
  },
  {
    id: "expansion",
    title: "Des distances qui augmentent, des galaxies qui gardent leur taille",
    paths: ["/espace-et-astronomie/astrophysique/cosmologie/comment-sait-on-que-l-univers-grandit"],
    steps: [
      {
        label: "Choisir une référence",
        caption: "Des groupes de galaxies sont séparés par des distances initiales.",
        detail:
          "La galaxie repérée sert uniquement de référence de mesure. Elle n’est pas au centre de l’Univers ; le même raisonnement peut être fait depuis une autre galaxie.",
      },
      {
        label: "Étendre les distances",
        caption:
          "À grande échelle, le même facteur d’expansion augmente toutes les séparations de cet exemple.",
        detail:
          "Les symboles des galaxies gardent la même taille. La grille décrit seulement des distances entre objets non liés ; elle ne représente pas un matériau qui tire sur les galaxies.",
      },
      {
        label: "Étirer la lumière",
        caption:
          "La longueur d’onde de la lumière peut augmenter pendant sa propagation dans l’Univers en expansion.",
        detail:
          "Les deux ondes ont le même nombre d’oscillations, mais des espacements différents. Le dessin explique un décalage cosmologique sans donner une vitesse ni une valeur de la constante de Hubble.",
      },
    ],
    limit:
      "Exemple géométrique à deux dimensions avec facteurs d’échelle choisis ; ni carte du cosmos ni modèle des mouvements à l’intérieur des systèmes liés.",
    source: {
      title: "NASA — Early Universe",
      url: "https://science.nasa.gov/mission/webb/early-universe/",
    },
  },
  {
    id: "comet",
    title: "La queue ionique s’éloigne du Soleil",
    paths: [
      "/espace-et-astronomie/systeme-solaire/petits-corps/pourquoi-la-queue-d-une-comete-pointe-t-elle-toujours-a-l-oppose-du-soleil",
    ],
    steps: [
      {
        label: "Loin du Soleil",
        caption: "Un noyau peu actif loin du Soleil peut n’avoir aucune queue visible.",
        detail:
          "L’orbite et la direction du mouvement sont distinguées de la direction du rayonnement solaire. Les distances ne sont pas comparables aux dimensions réelles du noyau.",
      },
      {
        label: "Approcher du Soleil",
        caption:
          "La matière libérée forme une chevelure, une queue ionique et une queue de poussière.",
        detail:
          "La queue bleue est ionique ; la queue claire représente la poussière. La pression du rayonnement et l’interaction avec le vent solaire n’agissent pas de la même façon sur ces matières.",
      },
      {
        label: "S’éloigner du Soleil",
        caption: "Après le passage, la queue ionique reste dirigée à l’opposé du Soleil.",
        detail:
          "La flèche de mouvement peut alors pointer vers la queue : celle-ci n’est pas simplement une traînée laissée derrière la comète. La queue de poussière peut être courbée et ne suit pas exactement la même direction.",
      },
    ],
    limit:
      "Orbite symbolique et deux queues simplifiées ; la queue ionique suit approximativement la direction antisolaire, sans simulation du champ magnétique solaire.",
    source: {
      title: "NASA Space Place — What Is a Comet?",
      url: "https://spaceplace.nasa.gov/comets/en/",
    },
  },
  {
    id: "skyglow",
    title: "Un fond lumineux masque les étoiles faibles",
    paths: [
      "/espace-et-astronomie/observation-astronomique/telescopes/pourquoi-voit-on-beaucoup-moins-d-etoiles-en-ville-qu-a-la-campagne",
    ],
    steps: [
      {
        label: "Sous un ciel sombre",
        caption: "Un fond sombre permet de distinguer les étoiles faibles.",
        detail:
          "Les points gardent les mêmes positions dans les trois vues. Leur nombre est choisi pour la démonstration ; ce n’est pas une mesure du nombre d’étoiles visibles depuis un lieu réel.",
      },
      {
        label: "Éclairer le ciel",
        caption:
          "La lumière artificielle diffusée rend le fond du ciel plus clair et réduit le contraste.",
        detail:
          "Les étoiles ne s’éteignent pas : certaines deviennent difficiles à séparer du fond lumineux. Le halo est symbolique, sans modèle de diffusion atmosphérique ou seuil de vision mesuré.",
      },
      {
        label: "Orienter vers le sol",
        caption:
          "Un éclairage dirigé et moins envahissant peut réduire la lumière envoyée vers le ciel.",
        detail:
          "Les capots orientent la lumière vers les surfaces utiles. Les réflexions au sol et les autres sources continuent d’éclairer un peu le ciel : le dessin ne promet pas un ciel parfaitement noir.",
      },
    ],
    limit:
      "Comparaison qualitative à champ d’étoiles fixe ; pas de carte de pollution lumineuse, de classement Bortle ni de photométrie réelle.",
    source: {
      title: "ESO — Dark and quiet skies preservation",
      url: "https://www.eso.org/public/about-eso/dark-skies-preservation/",
    },
  },
  {
    id: "gps",
    title: "Des temps de trajet pour calculer une position",
    paths: [
      "/espace-et-astronomie/exploration-spatiale/lanceurs-et-orbites/comment-le-gps-sait-il-exactement-ou-vous-etes",
    ],
    steps: [
      {
        label: "Recevoir une heure",
        caption: "Un satellite diffuse son heure d’émission et des informations sur sa position.",
        detail:
          "Le récepteur reçoit le signal radio. Il n’a pas à envoyer une demande au satellite pour obtenir sa position ; le lien dessiné est à sens unique.",
      },
      {
        label: "Comparer les trajets",
        caption: "Plusieurs temps d’arrivée donnent des informations de distance.",
        detail:
          "On parle de pseudodistances tant que l’écart d’horloge du récepteur n’est pas corrigé. Les traits sont des trajets de signaux, et non des angles mesurés par triangulation.",
      },
      {
        label: "Corriger l’horloge",
        caption:
          "Au moins quatre satellites permettent de résoudre trois coordonnées et l’écart d’horloge.",
        detail:
          "La position et le temps sont estimés ensemble. Les retards atmosphériques et les réflexions peuvent perturber la mesure ; ce schéma n’annonce aucune précision garantie.",
      },
    ],
    limit:
      "Vue de principe à quatre satellites sans géométrie orbitale réelle ; temps, distances et corrections relativistes ne sont pas simulés.",
    source: {
      title: "NIST — How Do You Measure Your Location Using GPS?",
      url: "https://www.nist.gov/how-do-you-measure-it/how-do-you-measure-your-location-using-gps",
    },
  },
  {
    id: "planets",
    title: "Huit planètes, deux grandes familles",
    paths: ["/espace-et-astronomie/systeme-solaire/planetes/huit-planetes-systeme-solaire"],
    steps: [
      {
        label: "Les rocheuses",
        caption: "Mercure, Vénus, la Terre et Mars sont les quatre planètes intérieures rocheuses.",
        detail:
          "L’ordre suit l’éloignement au Soleil. Les distances et les diamètres sont ajustés séparément pour permettre la lecture : on ne peut pas les mesurer sur ce dessin.",
      },
      {
        label: "Les géantes",
        caption:
          "Jupiter et Saturne sont des géantes gazeuses ; Uranus et Neptune sont des géantes de glace.",
        detail:
          "Le mot glace décrit une famille de composition interne : Uranus et Neptune ne sont pas de simples boules de glace solide. Les quatre géantes possèdent des anneaux, pas seulement Saturne.",
      },
      {
        label: "Replacer les huit",
        caption: "Les huit planètes sont présentées dans leur ordre à partir du Soleil.",
        detail:
          "La ligne du haut continue sur celle du bas, comme un catalogue. Ce n’est pas une photographie, un alignement actuel des planètes ou une vue de leurs orbites.",
      },
    ],
    limit:
      "Planche de classement, sans échelle de diamètre ou de distance et sans positions orbitales actuelles ; les planètes naines ne sont pas représentées.",
    source: {
      title: "NASA — Planet Sizes and Locations",
      url: "https://science.nasa.gov/solar-system/planet-sizes-and-locations-in-our-solar-system/",
    },
  },
];
