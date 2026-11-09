import type { LessonDiagramSpec } from "./registry";

export const SPACE_CONTEXT_DIAGRAMS: readonly LessonDiagramSpec[] = [
  {
    id: "smallbodies",
    title: "Des corps différents, des noms précis",
    paths: ["/espace-et-astronomie/systeme-solaire/petits-corps/asteroides-cometes-et-meteorites"],
    steps: [
      {
        label: "Astéroïde",
        caption:
          "Un astéroïde est un petit corps principalement rocheux ou métallique en orbite autour du Soleil.",
        detail:
          "Sa forme peut être irrégulière et sa surface porte les traces de collisions. Le dessin ne représente pas un objet identifié ; la distinction avec les comètes n’est pas toujours une frontière parfaite.",
      },
      {
        label: "Comète active",
        caption: "Une comète réchauffée près du Soleil libère du gaz et de la poussière.",
        detail:
          "Le noyau reste petit par rapport à la chevelure et aux queues. Les glaces et poussières sont distinguées dans la coupe ; une comète lointaine peut être sombre et sans queue visible.",
      },
      {
        label: "Météore et météorite",
        caption:
          "Le météore est le phénomène lumineux dans l’atmosphère ; une météorite est un fragment arrivé au sol.",
        detail:
          "Un météoroïde est le corps dans l’espace avant cette entrée. Le dessin montre un fragment survivant pour distinguer les termes ; beaucoup de petits corps ne laissent aucun fragment au sol.",
      },
    ],
    limit:
      "Objets symboliques non à l’échelle ; coupe de comète explicative, entrée atmosphérique sans simulation d’échauffement ni probabilité d’impact.",
    source: {
      title: "NASA — Asteroids, Comets & Meteors",
      url: "https://science.nasa.gov/asteroids-comets-meteors/",
    },
  },
  {
    id: "isslife",
    title: "Recycler l’eau, produire l’oxygène, épurer l’air",
    paths: [
      "/espace-et-astronomie/exploration-spatiale/vols-habites/comment-les-astronautes-ont-ils-toujours-de-l-eau-et-de-l-air-dans-la-station-spatiale",
    ],
    steps: [
      {
        label: "Récupérer l’eau",
        caption: "L’eau récupérée est traitée et contrôlée avant d’être réutilisée.",
        detail:
          "L’humidité condensée et les eaux usées n’arrivent pas directement au verre de l’astronaute. Les unités de récupération, de purification et le réservoir d’eau propre ont des rôles distincts.",
      },
      {
        label: "Produire l’oxygène",
        caption:
          "L’électrolyse de l’eau produit de l’oxygène et de l’hydrogène grâce à un apport électrique.",
        detail:
          "Les atomes sont conservés dans le bilan 2 H₂O → 2 H₂ + O₂. L’oxygène rejoint l’atmosphère de la cabine ; l’hydrogène suit un circuit différent, qui n’est pas le circuit respiratoire.",
      },
      {
        label: "Retirer le CO₂",
        caption: "L’air circule dans des appareils qui retirent le dioxyde de carbone expiré.",
        detail:
          "Retirer le CO₂ ne suffit pas à fabriquer de l’oxygène. Une partie des systèmes peut aussi recycler de l’hydrogène et du CO₂ ; les pertes et le ravitaillement empêchent une boucle parfaitement fermée.",
      },
    ],
    limit:
      "Fonctions de support-vie simplifiées, sans taux de récupération garanti, tuyauterie réelle, protocole de potabilisation ou bilan complet de la station.",
    source: {
      title: "NASA — Environmental Control and Life Support Systems",
      url: "https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/",
    },
  },
  {
    id: "readaptation",
    title: "Un corps adapté au sol doit se réadapter après le vol",
    paths: [
      "/espace-et-astronomie/exploration-spatiale/vols-habites/pourquoi-les-astronautes-ont-ils-du-mal-a-marcher-en-revenant-sur-terre",
    ],
    steps: [
      {
        label: "Au sol",
        caption:
          "Sur Terre, se tenir debout sollicite continuellement des muscles et des os porteurs.",
        detail:
          "La flèche représente le poids, sans donner une force chiffrée. Les os et muscles dessinés sont des repères fonctionnels, pas une planche anatomique complète.",
      },
      {
        label: "En microgravité",
        caption:
          "En chute libre orbitale, les appuis habituels diminuent et les liquides se redistribuent.",
        detail:
          "La gravité n’a pas disparu autour de la station : elle entretient l’orbite. L’absence d’appui continu modifie le travail musculaire et les signaux d’équilibre ; les changements dépendent de la durée et des contre-mesures.",
      },
      {
        label: "Au retour",
        caption:
          "Au retour, l’équilibre, la circulation et les capacités musculaires doivent se réadapter aux appuis.",
        detail:
          "Le support dessiné représente l’accompagnement du retour, sans exercice prescrit ni délai annoncé. Le dessin ne permet pas d’évaluer l’état de santé d’une personne ou de prédire sa récupération.",
      },
    ],
    limit:
      "Illustration fonctionnelle sans mesure clinique, perte de masse chiffrée ou conseil médical ; corps et fluides schématiques, aucun délai de récupération garanti.",
    source: {
      title: "NASA — The Human Body in Space",
      url: "https://www.nasa.gov/humans-in-space/the-human-body-in-space/",
    },
  },
  {
    id: "heliosphere",
    title: "Franchir la bulle du vent solaire",
    paths: [
      "/espace-et-astronomie/exploration-spatiale/sondes/comment-les-sondes-voyager-ont-elles-atteint-l-espace-entre-les-etoiles",
    ],
    steps: [
      {
        label: "Suivre le vent solaire",
        caption: "Le vent solaire remplit une grande région autour du Soleil : l’héliosphère.",
        detail:
          "Les flèches partent du Soleil et représentent un flux de particules, pas la limite de la lumière solaire ni celle de la gravitation du Soleil.",
      },
      {
        label: "Repérer l’héliopause",
        caption:
          "L’héliopause marque une frontière entre l’environnement du vent solaire et le milieu interstellaire.",
        detail:
          "Le contour du dessin est simplifié et change en réalité selon l’environnement et l’activité solaire. Les sondes ont identifié le passage grâce à leurs mesures, pas en voyant une paroi.",
      },
      {
        label: "Mesurer au-delà",
        caption: "Une sonde au-delà de l’héliopause peut mesurer le milieu interstellaire.",
        detail:
          "Entrer dans le milieu interstellaire ne signifie pas avoir dépassé tous les objets liés au Soleil. La représentation n’est pas une carte des positions actuelles de Voyager 1 et Voyager 2.",
      },
    ],
    limit:
      "Bulle et trajet symboliques ; pas de frontière matérielle, de distance actuelle ou de forme réelle calculée. Le nuage d’Oort n’est pas cartographié.",
    source: {
      title: "NASA — Voyager Interstellar Mission",
      url: "https://science.nasa.gov/mission/voyager/interstellar-mission/",
    },
  },
  {
    id: "saturnrings",
    title: "Un anneau apparent, une multitude de particules",
    paths: [
      "/espace-et-astronomie/systeme-solaire/planetes/pourquoi-saturne-est-elle-entouree-d-anneaux",
    ],
    steps: [
      {
        label: "Voir l’ensemble",
        caption: "Les anneaux de Saturne forment un système très étendu autour de la planète.",
        detail:
          "Le dessin donne une vue oblique de leur organisation. Les couleurs différencient des bandes de matière ; elles ne codent ni un âge ni une composition mesurée.",
      },
      {
        label: "Agrandir la matière",
        caption: "L’anneau est constitué de nombreux morceaux de glace mêlés à d’autres matériaux.",
        detail:
          "L’agrandissement révèle des particules séparées, et non une plaque pleine. Chacune se déplace autour de Saturne ; leurs tailles et leurs espacements sont choisis pour la lisibilité.",
      },
      {
        label: "Regarder par la tranche",
        caption: "Les anneaux sont très minces par rapport à leur largeur.",
        detail:
          "La ligne est encore énormément épaissie pour rester visible. Le schéma explique la différence entre étendue et épaisseur, sans fixer un âge des anneaux ou expliquer leur origine encore discutée.",
      },
    ],
    limit:
      "Vue d’ensemble puis agrandissement et vue par la tranche ; tailles, densité et épaisseur exagérées, sans simulation des collisions ou de la dynamique orbitale.",
    source: {
      title: "NASA — Cassini: Rings",
      url: "https://science.nasa.gov/mission/cassini/science/rings/",
    },
  },
  {
    id: "sundial",
    title: "Incliner le style comme la latitude",
    paths: ["/espace-et-astronomie/observation-astronomique/retrouver-l-heure-avec-le-soleil"],
    steps: [
      {
        label: "Équateur · 0°",
        caption:
          "Pour ce cadran horizontal à style polaire, l’inclinaison limite à l’équateur est de 0°.",
        detail:
          "Le style est ici surélevé pour rendre sa direction visible en profil. L’image compare des orientations ; elle ne représente pas une ombre ou une heure lisible à l’équateur.",
      },
      {
        label: "Latitude · 45°",
        caption:
          "À 45° de latitude nord, le style est incliné de 45° au-dessus de l’horizon local.",
        detail:
          "Le petit globe montre pourquoi cette direction reste parallèle à l’axe terrestre. Le réglage exige aussi une orientation vers le nord géographique ; l’inclinaison seule ne suffit pas.",
      },
      {
        label: "Pôle · 90°",
        caption: "Au pôle, le style polaire est vertical par rapport au plan horizontal local.",
        detail:
          "C’est un autre cas limite de la même géométrie. L’ensoleillement saisonnier et les corrections entre heure solaire et heure légale ne sont pas calculés dans cette vue.",
      },
    ],
    limit:
      "Géométrie d’un style polaire dans un cadran horizontal, convention hémisphère nord ; ni ombre calculée, ni plan de construction complet ou heure légale.",
    source: {
      title: "NASA — The Sundial",
      url: "https://spdf.gsfc.nasa.gov/pub/documents/archived_websites/pwg.gsfc.nasa.gov/stargaze/Sundial.htm",
    },
  },
  {
    id: "habitable",
    title: "La zone dépend de la lumière reçue",
    paths: [
      "/espace-et-astronomie/systeme-solaire/planetes/que-veut-dire-zone-habitable-pour-une-exoplanete",
    ],
    steps: [
      {
        label: "Étoile moins lumineuse",
        caption:
          "Pour une étoile moins lumineuse, la zone d’eau liquide potentielle se situe plus près.",
        detail:
          "La planète garde la même orbite dans les trois vues. La bande verte est un repère illustratif construit à partir d’une variation de luminosité, pas un calcul de climat réel.",
      },
      {
        label: "Situation intermédiaire",
        caption:
          "Une planète peut se trouver dans une zone où l’eau liquide en surface est possible sous certaines conditions.",
        detail:
          "La position ne garantit ni eau, ni atmosphère, ni vie. La pression et la composition atmosphériques, parmi d’autres facteurs, doivent aussi être compatibles.",
      },
      {
        label: "Étoile plus lumineuse",
        caption: "Une luminosité stellaire plus élevée déplace cette zone vers l’extérieur.",
        detail:
          "Les limites utilisées ici restent des coefficients fixes autour d’un rayon proportionnel à la racine de la luminosité. Une étude réelle dépend aussi du spectre stellaire et du modèle atmosphérique.",
      },
    ],
    limit:
      "Comparaison géométrique à orbite fixe et flux de référence constant ; bande illustrative sans planète réelle, température, critères biologiques ou limites climatiques certifiées.",
    source: {
      title: "NASA — The Habitable Zone",
      url: "https://science.nasa.gov/exoplanets/habitable-zone/",
    },
  },
  {
    id: "meteors",
    title: "La Terre rencontre un courant de débris",
    paths: [
      "/espace-et-astronomie/systeme-solaire/petits-corps/pourquoi-voit-on-des-pluies-d-etoiles-filantes-en-aout-et-en-decembre",
    ],
    steps: [
      {
        label: "Repérer les débris",
        caption: "Des particules libérées par un corps parent occupent une région de l’espace.",
        detail:
          "Le trait gris situe une orbite terrestre simplifiée et les points représentent un courant de débris. Le dessin n’est pas une carte des orbites des Perséides ou des Géminides.",
      },
      {
        label: "Traverser le courant",
        caption:
          "Lorsque la Terre traverse ces débris, certains grains entrent dans l’atmosphère et produisent des météores.",
        detail:
          "Les tailles sont exagérées : un petit grain peut produire une traînée lumineuse. Les particules ne sont pas des étoiles qui quittent leur constellation.",
      },
      {
        label: "Reconnaître le radiant",
        caption:
          "Depuis le sol, les trajectoires semblent venir d’un même point par un effet de perspective.",
        detail:
          "La dernière vue change de point de vue : c’est le ciel depuis le sol. Les prolongements se rejoignent au radiant, sans indiquer une source matérielle située dans la constellation.",
      },
    ],
    limit:
      "Orbite et courant symboliques puis vue apparente du ciel ; pas de prévision de date, de taux horaire, d’intensité ou de couleur d’une pluie réelle.",
    source: {
      title: "NASA — Perseids or Sporadic Meteors?",
      url: "https://science.nasa.gov/blogs/earth-matters/2016/08/17/perseids-or-sporadic-meteors-maybe-both/",
    },
  },
];
