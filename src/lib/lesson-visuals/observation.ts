import type { LessonDiagramSpec } from "./registry";

export const OBSERVATION_DIAGRAMS: readonly LessonDiagramSpec[] = [
  {
    id: "interferometer",
    title: "Comparer deux trajets de lumière",
    paths: [
      "/espace-et-astronomie/astrophysique/cosmologie/gwtc-5-catalogue-ondes-gravitationnelles",
    ],
    steps: [
      {
        label: "Séparer le faisceau",
        caption: "Un séparateur envoie la lumière vers deux bras perpendiculaires.",
        detail:
          "Les miroirs renvoient les deux faisceaux au même séparateur. Le dessin distingue le trajet aller du retour par un léger décalage graphique, sans représenter les cavités réelles de LIGO.",
      },
      {
        label: "Changer les longueurs",
        caption:
          "Une onde gravitationnelle peut modifier différemment les longueurs des deux bras.",
        detail:
          "Les changements sont énormément grossis pour être visibles. Le dessin montre une polarisation et une orientation choisies : une vraie déformation mesurée est infime.",
      },
      {
        label: "Lire l’interférence",
        caption:
          "Le décalage des ondes recombinées peut modifier la lumière reçue par le détecteur.",
        detail:
          "Le petit tracé est un signal illustratif, pas un événement enregistré. Des détecteurs éloignés et de nombreux contrôles sont nécessaires pour distinguer un signal astrophysique du bruit.",
      },
    ],
    limit:
      "Interféromètre de Michelson simplifié ; déplacements et signal exagérés, sans cavités, recyclage optique, calibration ni donnée réelle de LIGO.",
    source: {
      title: "LIGO — What is an Interferometer?",
      url: "https://www.ligo.caltech.edu/LA/page/what-is-interferometer",
    },
  },
  {
    id: "blackhole",
    title: "Horizon, gaz lumineux et orbites",
    paths: ["/espace-et-astronomie/astrophysique/trous-noirs/trous-noirs-ce-quon-en-sait"],
    steps: [
      {
        label: "Placer l’horizon",
        caption: "L’horizon est une frontière de non-retour, pas une surface solide.",
        detail:
          "La limite est tracée pour l’expliquer. Le noir central de ce schéma n’est pas une photographie de l’ombre d’un trou noir et ne révèle pas ce qui se trouve au centre.",
      },
      {
        label: "Ajouter le disque",
        caption: "La matière chaude en dehors de l’horizon peut émettre beaucoup de lumière.",
        detail:
          "Le disque d’accrétion est de la matière en mouvement autour du trou noir. Il n’est pas présent autour de tous les trous noirs ; les effets optiques relativistes ne sont pas calculés ici.",
      },
      {
        label: "Suivre une étoile",
        caption: "L’orbite d’une étoile proche peut révéler une masse centrale invisible.",
        detail:
          "La trajectoire montrée est schématique. À distance comparable, un trou noir n’attire pas davantage qu’un autre objet sphérique de même masse : il n’aspire pas automatiquement toutes les étoiles voisines.",
      },
    ],
    limit:
      "Schéma structurel et orbite de principe, pas une image relativiste ; horizon et disque hors échelle, intérieur inconnu laissé sans détail inventé.",
    source: {
      title: "NASA — Anatomy of a Black Hole",
      url: "https://science.nasa.gov/universe/black-holes/anatomy/",
    },
  },
  {
    id: "webb",
    title: "Un grand miroir du côté froid",
    paths: ["/espace-et-astronomie/exploration-spatiale/sondes/telescope-spatial-james-webb"],
    steps: [
      {
        label: "Regarder le miroir",
        caption: "Dix-huit segments hexagonaux travaillent ensemble pour collecter la lumière.",
        detail:
          "Les segments dorés sont comptés dans le dessin. Le trou central et les supports sont distingués des segments ; leurs proportions sont ajustées pour rendre les éléments lisibles.",
      },
      {
        label: "Compter les couches",
        caption: "Cinq couches séparées forment le pare-soleil.",
        detail:
          "Les couches ne se touchent pas dans ce schéma fonctionnel. Elles réduisent les échanges thermiques et permettent l’évacuation de chaleur vers l’espace, plutôt qu’un refroidissement par contact avec de l’air.",
      },
      {
        label: "Séparer chaud et froid",
        caption: "Le miroir et les instruments restent du côté protégé du rayonnement solaire.",
        detail:
          "Les flèches solaires s’arrêtent du côté chaud du bouclier. Les rayons astronomiques arrivent du côté froid : le miroir ne regarde pas à travers le pare-soleil.",
      },
    ],
    limit:
      "Vue fonctionnelle du télescope déployé, sans rendu à l’échelle ni simulation thermique ou optique ; seul le miroir primaire est détaillé.",
    source: {
      title: "NASA — Webb FAQs",
      url: "https://science.nasa.gov/mission/webb/faqs-full/",
    },
  },
  {
    id: "infrared",
    title: "Une autre fenêtre sur la lumière",
    paths: [
      "/espace-et-astronomie/observation-astronomique/messagers-du-cosmos/pourquoi-observer-dans-linfrarouge",
    ],
    steps: [
      {
        label: "Comparer les ondes",
        caption: "L’infrarouge a des longueurs d’onde plus grandes que la lumière visible.",
        detail:
          "Le tracé compare des ondes symboliques. Le bleu et l’orange servent à lire le dessin ; l’infrarouge n’est pas une couleur que l’œil humain voit directement.",
      },
      {
        label: "Traverser la poussière",
        caption:
          "Certaines longueurs d’onde infrarouges traversent mieux un nuage poussiéreux que le visible.",
        detail:
          "Le nuage reste le même dans les deux trajets. L’opacité dépend de la longueur d’onde et de la poussière ; tout l’infrarouge ne traverse pas tous les nuages sans absorption.",
      },
      {
        label: "Repérer un objet froid",
        caption:
          "Des objets peu lumineux en visible peuvent émettre une part importante de leur rayonnement en infrarouge.",
        detail:
          "Le disque de poussière est montré avec un code de couleur, sans température ou spectre mesuré. Observer en infrarouge demande aussi de limiter le rayonnement thermique de l’instrument lui-même.",
      },
    ],
    limit:
      "Comparaison qualitative, sans échelle linéaire du spectre complet ni température déduite des couleurs ; les neutrinos et ondes gravitationnelles sont d’autres messagers.",
    source: {
      title: "NASA — Infrared Waves",
      url: "https://science.nasa.gov/ems/07_infraredwaves/",
    },
  },
  {
    id: "adaptiveoptics",
    title: "Mesurer la déformation, ajuster le miroir",
    paths: [
      "/espace-et-astronomie/observation-astronomique/telescopes/taille-des-telescopes-et-resolution",
    ],
    steps: [
      {
        label: "Voir la turbulence",
        caption: "L’atmosphère déforme le front d’onde avant qu’il arrive à l’instrument.",
        detail:
          "Les lignes ondulées représentent des fronts d’onde, pas les trajectoires oscillantes de photons. Une image d’étoile peut alors s’étaler au lieu de rester proche d’un point.",
      },
      {
        label: "Mesurer l’écart",
        caption: "Un capteur de front d’onde fournit des mesures au calculateur.",
        detail:
          "Une partie de la lumière est utilisée pour la mesure. Le calculateur commande les actionneurs du miroir à partir de ces informations ; les flèches de commande ne sont pas des rayons lumineux.",
      },
      {
        label: "Corriger rapidement",
        caption:
          "Un miroir déformable compense une partie des déformations pour améliorer l’image.",
        detail:
          "L’image plus concentrée est illustrative. Le système répète la mesure et la correction ; sa performance dépend du champ observé, des références disponibles et de la turbulence.",
      },
    ],
    limit:
      "Boucle fonctionnelle simplifiée ; fronts d’onde et image grossis, sans reconstruction optique, commande réelle ni promesse de correction parfaite.",
    source: {
      title: "ESO — What is Active and Adaptive Optics?",
      url: "https://www.eso.org/sci/facilities/develop/ao/what_ao.html",
    },
  },
  {
    id: "moonflight",
    title: "Passer derrière la Lune et revenir",
    paths: [
      "/espace-et-astronomie/exploration-spatiale/vols-habites/artemis-ii-retour-vers-la-lune",
    ],
    steps: [
      {
        label: "Quitter l’orbite terrestre",
        caption: "Après les vérifications autour de la Terre, Orion part vers la Lune.",
        detail:
          "La ligne montre l’enchaînement des grandes phases. Elle n’est pas calculée à partir d’éphémérides et ne permet pas de lire une vitesse, une date ou une distance de mission.",
      },
      {
        label: "Survoler sans se poser",
        caption: "Le vaisseau passe près de la Lune, sans alunissage dans cette mission.",
        detail:
          "La boucle reste éloignée de la surface. Le dessin distingue un survol d’une mise en orbite lunaire permanente et d’une descente vers un site d’atterrissage.",
      },
      {
        label: "Revenir sur Terre",
        caption: "La trajectoire ramène la capsule vers la Terre et sa rentrée atmosphérique.",
        detail:
          "Le retour utilise la géométrie de la trajectoire Terre-Lune ; de petites corrections restent possibles. La rentrée n’est ni un freinage contre la Lune ni une chute verticale directe depuis elle.",
      },
    ],
    limit:
      "Topologie simplifiée d’une mission de survol habité ; courbe symbolique, sans éphémérides, chronologie d’actualité, manœuvres détaillées ou paramètres de sécurité.",
    source: {
      title: "NASA — Artemis II Flight Path Animations",
      url: "https://svs.gsfc.nasa.gov/20412/",
    },
  },
  {
    id: "lunation",
    title: "Un même cycle de phases vu depuis la Terre",
    paths: ["/espace-et-astronomie/systeme-solaire/lune/calendrier-lunaire"],
    steps: [
      {
        label: "Nouvelle Lune",
        caption:
          "À la nouvelle Lune, la face tournée vers nous est très peu éclairée par le Soleil.",
        detail:
          "Le disque sombre ne vient pas de l’ombre terrestre. La Lune reçoit toujours de la lumière solaire sur une moitié ; nous voyons une proportion différente de cette moitié éclairée.",
      },
      {
        label: "Premier quartier",
        caption: "Environ un quart de cycle plus tard, nous voyons une moitié de disque éclairée.",
        detail:
          "Dans cette convention de vue depuis l’hémisphère nord, la partie éclairée croissante est à droite. L’orientation réelle dépend du lieu, de l’heure et de la façon dont on tient l’image.",
      },
      {
        label: "Pleine Lune",
        caption: "Environ à mi-cycle, presque toute la face visible est éclairée.",
        detail:
          "Les petites vignettes replacent ces trois étapes dans les huit phases usuelles. Un cycle de nouvelle Lune à nouvelle Lune dure environ 29,5 jours ; ce n’est pas exactement quatre semaines.",
      },
    ],
    limit:
      "Vues schématiques des phases dans une convention nord en haut ; pas d’éphémérides, de libration, d’éclipse ou de calendrier religieux calculé.",
    source: {
      title: "NASA — Moon Phases",
      url: "https://science.nasa.gov/moon/moon-phases/",
    },
  },
  {
    id: "polaris",
    title: "Prolonger les deux étoiles repères",
    paths: ["/espace-et-astronomie/astrophysique/etoiles/reperer-grace-etoiles"],
    steps: [
      {
        label: "Trouver la casserole",
        caption: "Les deux étoiles du bord de la casserole de la Grande Ourse servent de repères.",
        detail:
          "Le dessin conserve leur rôle dans une figure simplifiée. Les traits relient des positions apparentes : les étoiles ne forment pas un objet solide et ne sont pas à la même distance de nous.",
      },
      {
        label: "Prolonger la direction",
        caption:
          "En prolongeant la ligne depuis Merak vers Dubhe, on se dirige vers l’étoile polaire.",
        detail:
          "La flèche indique le bon sens de prolongement, depuis le fond vers le bord supérieur de la casserole. Les autres étoiles ne doivent pas être prises à la place de cette paire.",
      },
      {
        label: "Descendre vers le nord",
        caption:
          "L’étoile polaire indique approximativement le nord géographique dans l’hémisphère nord.",
        detail:
          "La verticale descend vers l’horizon nord. Polaris est proche du pôle céleste, sans coïncider exactement avec lui ; cette méthode n’est pas applicable telle quelle depuis l’hémisphère sud.",
      },
    ],
    limit:
      "Carte de repérage simplifiée, sans échelle angulaire ni ciel d’une date ou latitude précise ; orientation de la casserole variable au cours de la nuit.",
    source: {
      title: "NASA — What is the North Star?",
      url: "https://science.nasa.gov/solar-system/skywatching/what-is-the-north-star-and-how-do-you-find-it/",
    },
  },
  {
    id: "aurora",
    title: "De l’énergie solaire à la lumière de l’atmosphère",
    paths: [
      "/espace-et-astronomie/astrophysique/etoiles/comment-une-tempete-solaire-peut-elle-allumer-des-aurores-et-couper-le-courant",
    ],
    steps: [
      {
        label: "Perturber le champ",
        caption:
          "Le vent solaire peut transférer de l’énergie à l’environnement magnétique de la Terre.",
        detail:
          "Les lignes représentent le champ magnétique, pas une coque matérielle. Le côté tourné vers le Soleil est comprimé et le côté opposé s’étire en une queue magnétique.",
      },
      {
        label: "Guider des particules",
        caption:
          "Des particules énergétiques peuvent atteindre la haute atmosphère près des régions polaires.",
        detail:
          "Les trajets colorés sont schématiques. L’interaction avec la magnétosphère est complexe : les particules responsables ne sont pas simplement un rayon solaire visible qui toucherait le sol.",
      },
      {
        label: "Émettre de la lumière",
        caption:
          "Les collisions excitent des atomes et molécules de l’air, qui peuvent ensuite émettre de la lumière.",
        detail:
          "Le vert et le rouge sont associés notamment à l’oxygène ; l’azote contribue à d’autres couleurs. Les rubans sont dans l’atmosphère, au-dessus du sol, et non sur les lignes électriques.",
      },
    ],
    limit:
      "Schéma de transfert d’énergie et d’émission, sans modèle de tempête, altitude à l’échelle ou prédiction d’aurore ; les courants induits dans les réseaux ne sont pas simulés.",
    source: {
      title: "NASA — Auroras",
      url: "https://science.nasa.gov/sun/auroras/",
    },
  },
];
