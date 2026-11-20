import type { LessonDiagramSpec } from "./registry";

/** Explicit associations for the 50 published lessons reserved on 20 November 2026. */
export const THEMATIC50_DIAGRAMS = [
  {
    canvasHeight: 230,
    id: "operaStage",
    title: "Comment les mots sont entrés dans l’opéra",
    paths: [
      "/arts-et-culture/arts-du-spectacle/opera-et-arts-lyriques/naissance-de-lopera-en-italie",
    ],
    steps: [
      {
        label: "Plusieurs voix",
        caption: "Plusieurs lignes chantées peuvent se superposer.",
        detail:
          "Chaque couleur suit une ligne vocale. Quand les lignes avancent ensemble, entendre chaque mot peut devenir plus difficile.",
      },
      {
        label: "Voix et basse",
        caption: "Dans le récitatif, une voix suit les accents du texte.",
        detail:
          "Un accompagnement discret soutient le chant. Compare le tracé mobile de la voix et le soutien plus stable de la basse.",
      },
      {
        label: "Sur la scène",
        caption: "Le chant devient partie intégrante d’une action jouée.",
        detail:
          "Les voix incarnent les personnages. Les instruments accompagnent le dialogue, les changements d’ambiance et d’autres moments de la scène.",
      },
    ],
    limit:
      "Les courbes ne transcrivent aucune partition. La polyphonie a continué d’exister à côté de ces formes.",
    source: {
      title: "Metropolitan Museum of Art — L’opéra",
      url: "https://www.metmuseum.org/fr/essays/the-opera",
    },
  },
  {
    canvasHeight: 230,
    id: "balletPose",
    title: "Du ballet de cour au geste de scène",
    paths: ["/arts-et-culture/arts-du-spectacle/theatre-et-danse/naissance-du-ballet-classique"],
    steps: [
      {
        label: "Danser à la cour",
        caption: "Le ballet de cour met en scène des danseurs devant des spectateurs.",
        detail:
          "Les figures et les déplacements contribuent à la composition du spectacle autant que le décor.",
      },
      {
        label: "Nommer les positions",
        caption: "Dans la première position, les talons sont rapprochés et les pointes s’ouvrent.",
        detail:
          "La vue du dessus isole les appuis. Les noms partagés servent à transmettre une position ou une suite de mouvements.",
      },
      {
        label: "Composer un geste",
        caption: "La technique fournit un vocabulaire pour dessiner le mouvement sur scène.",
        detail:
          "Observe le prolongement des bras et de la jambe. La position des pieds seule ne suffit pas à décrire toute la figure.",
      },
    ],
    limit:
      "Personnages stylisés et poses non destinées à être reproduites. L’ouverture des pieds dépend de la morphologie et du travail technique.",
    source: {
      title: "Opéra national de Paris — Histoire de l’École de danse",
      url: "https://www.operadeparis.fr/artistes/ecole-de-danse/histoire",
    },
  },
  {
    canvasHeight: 230,
    id: "wayfindingSign",
    title: "Transformer un escalier en signal",
    paths: [
      "/arts-et-culture/arts-visuels/arts-graphiques-et-design/comment-un-pictogramme-se-comprend-il-sans-un-seul-mot",
    ],
    steps: [
      {
        label: "La situation réelle",
        caption:
          "Un escalier comporte des marches, des garde-corps et des détails de construction.",
        detail: "Repère la succession des marches avant de retirer les éléments secondaires.",
      },
      {
        label: "Le signe simplifié",
        caption: "Le contour des marches et une direction suffisent ici à évoquer un escalier.",
        detail:
          "Le contraste détache la forme du fond. La répétition des marches fournit une silhouette reconnaissable.",
      },
      {
        label: "Le panneau en contexte",
        caption: "Une flèche séparée désigne le chemin à prendre.",
        detail:
          "La montée dessinée décrit un objet. La flèche extérieure indique dans quelle direction trouver cet objet.",
      },
    ],
    limit:
      "Dessin de principe. Les symboles officiels et la compréhension du public dépendent du contexte et des conventions.",
    source: {
      title: "AFNOR — Symboles graphiques d’information publique",
      url: "https://www.boutique.afnor.org/en-gb/standard/nf-iso-7001/graphical-symbols-public-information-symbols/fa132773/30493",
    },
  },
  {
    canvasHeight: 230,
    id: "letterForms",
    title: "Un A façonné par trois outils",
    paths: ["/arts-et-culture/arts-visuels/arts-graphiques-et-design/histoire-de-la-typographie"],
    steps: [
      {
        label: "La plume taillée",
        caption: "Une plume plate produit des largeurs différentes selon l’orientation du geste.",
        detail:
          "La même pointe dessine un trait fin dans une direction et un plein dans une autre.",
      },
      {
        label: "La gravure",
        caption: "La gravure permet des traits fins et un contraste marqué avec les pleins.",
        detail:
          "Les empattements et les filets du A changent de dessin. Les formes imprimées combinent des contraintes techniques et des choix typographiques.",
      },
      {
        label: "La grille de pixels",
        caption: "Une petite grille oblige à traduire certaines obliques en marches.",
        detail:
          "Les pixels allumés composent le contour de la lettre. À très basse définition, le dessin est souvent retouché à la main.",
      },
    ],
    limit:
      "Trois formes dessinées pour la leçon. Les outils ont influencé les lettres, parmi d’autres facteurs historiques.",
    source: {
      title: "Metropolitan Museum of Art — L’héritage de Firmin Didot",
      url: "https://www.metmuseum.org/pt/perspectives/firmin-didot",
    },
  },
  {
    canvasHeight: 230,
    id: "earlyCinema",
    title: "La pellicule du tournage à l’écran",
    paths: [
      "/arts-et-culture/arts-visuels/photographie-et-cinema/premiere-projection-cinematographe-lumiere",
    ],
    steps: [
      {
        label: "Prendre les vues",
        caption: "L’appareil enregistre une succession d’images sur une pellicule.",
        detail:
          "Chaque cadre saisit un état du mouvement. Les perforations permettent d’entraîner le film.",
      },
      {
        label: "Faire avancer le film",
        caption: "Le mécanisme déplace le film d’un cadre au suivant.",
        detail: "L’enchaînement rapide des vues donne l’impression d’un mouvement continu.",
      },
      {
        label: "Projeter les vues",
        caption: "Une lumière traverse la pellicule et l’objectif forme une image agrandie.",
        detail:
          "La projection rend visible le même défilement à tout un public. Le Cinématographe Lumière pouvait servir à la prise de vues et à la projection.",
      },
    ],
    limit:
      "Coupe simplifiée. Le film dessiné et le projecteur ne reproduisent pas une machine ou une pellicule d’archive à l’identique.",
    source: {
      title: "Institut Lumière — Le Cinématographe Lumière",
      url: "https://www.institut-lumiere.org/le-cinematographe-lumiere",
    },
  },
  {
    canvasHeight: 230,
    id: "inkTools",
    title: "Reconnaître la matière et le geste dans un trait",
    paths: ["/arts-et-culture/litterature-et-ecriture/histoire-du-livre/encre-outils-ecriture"],
    steps: [
      {
        label: "Encre au carbone",
        caption: "Des particules fines de carbone donnent sa couleur à l’encre.",
        detail:
          "Un liquide et un liant permettent de les déposer sur le support. La couleur est portée par les particules pigmentaires.",
      },
      {
        label: "Encre ferro-gallique",
        caption: "Une encre ferro-gallique peut prendre une teinte brune en vieillissant.",
        detail:
          "Des composés issus du fer et des tanins forment le colorant. L’état de la trace dépend aussi du papier, du temps et de la conservation.",
      },
      {
        label: "Pointe et pression",
        caption: "Le contour du trait dépend de l’outil autant que de l’encre.",
        detail:
          "Une pointe large peut dessiner un aplat et une plume fendue peut varier avec la pression.",
      },
    ],
    limit:
      "Couleur et texture figurées. L’aspect d’un trait ne suffit pas à identifier une encre sans autre examen.",
    source: {
      title: "University of Illinois — Iron gall ink",
      url: "https://www.library.illinois.edu/rbx/2021/04/07/iron-gall-ink/",
    },
  },
  {
    canvasHeight: 230,
    id: "vernacularHouse",
    title: "Trois réponses à un milieu de vie",
    paths: ["/arts-et-culture/patrimoine/architecture/architecture-vernaculaire"],
    steps: [
      {
        label: "Murs de terre",
        caption: "Un mur massif en terre peut amortir les variations de température.",
        detail:
          "La masse du mur se réchauffe et se refroidit lentement. L’effet dépend du climat et de la composition du bâtiment.",
      },
      {
        label: "Toit pentu",
        caption: "Un toit incliné aide à évacuer l’eau de pluie.",
        detail:
          "Le volume de la toiture et son débord éloignent une partie de l’eau du mur dans cet exemple.",
      },
      {
        label: "Plancher surélevé",
        caption: "Un espace sous la maison peut éloigner le plancher d’un sol humide.",
        detail:
          "Les poteaux séparent le volume habité du terrain. Le même principe peut aussi répondre à des risques d’inondation selon le lieu.",
      },
    ],
    limit:
      "Exemples de stratégies, sans attribution à une seule culture. L’habitat vernaculaire dépend également des pratiques et ressources locales.",
    source: {
      title: "ICOMOS — Charte du patrimoine bâti vernaculaire",
      url: "https://ciav.icomos.org/charter-on-the-built-vernacular-herigage-english/",
    },
  },
  {
    canvasHeight: 230,
    id: "artRestoration",
    title: "Repérer, essayer, puis intervenir",
    paths: [
      "/arts-et-culture/patrimoine/musees-et-conservation/comment-decide-t-on-de-restaurer-une-uvre-sans-la-trahir",
    ],
    steps: [
      {
        label: "Faire un constat",
        caption: "Le restaurateur commence par examiner et documenter l’état de l’œuvre.",
        detail:
          "La ligne matérialise une altération observée. Identifier une cause peut demander des examens supplémentaires.",
      },
      {
        label: "Tester sur une zone",
        caption: "Un petit essai aide à évaluer les effets d’une intervention.",
        detail:
          "On compare le résultat local avec les surfaces voisines avant de décider jusqu’où intervenir.",
      },
      {
        label: "Choisir l’étendue",
        caption: "Le traitement peut être limité à la zone qui le justifie.",
        detail:
          "Les observations, les essais et l’intervention restent documentés pour les professionnels qui reprendront l’œuvre.",
      },
    ],
    limit:
      "Œuvre fictive. Une restauration est décidée au cas par cas, avec une attention à la compatibilité et à la possibilité de retraitement.",
    source: {
      title: "Ministère de la Culture — Préparer une campagne de restauration",
      url: "https://www.culture.gouv.fr/content/download/195690/2094969",
    },
  },
  {
    canvasHeight: 230,
    id: "curiosityCabinet",
    title: "Du cabinet à la collection documentée",
    paths: [
      "/arts-et-culture/patrimoine/musees-et-conservation/pourquoi-les-princes-collectionnaient-ils-des-objets-etranges",
    ],
    steps: [
      {
        label: "Rassembler",
        caption: "Coquillages, instruments et objets fabriqués pouvaient partager le même meuble.",
        detail:
          "Le rapprochement matérialisait une manière de rassembler des objets naturels et des productions humaines.",
      },
      {
        label: "Inventorier",
        caption:
          "Une fiche permet d’identifier un objet et de garder une trace de ce qu’on en sait.",
        detail:
          "Relie l’objet à sa fiche. Une information manquante peut rester explicitement inconnue.",
      },
      {
        label: "Présenter",
        caption: "Classer et légender les pièces change ce que le visiteur peut en comprendre.",
        detail:
          "Une vitrine ordonnée rend la comparaison possible. Les façons de classer ont elles-mêmes évolué.",
      },
    ],
    limit:
      "Cabinet et inventaire fictifs. Certaines collections ont nourri des musées sans suivre un parcours identique.",
    source: {
      title: "Histoire par l’image — Les cabinets de curiosités",
      url: "https://histoire-image.org/etudes/cabinets-curiosites",
    },
  },
  {
    canvasHeight: 230,
    id: "tapestryLoom",
    title: "Comment les fils fabriquent une image",
    paths: [
      "/arts-et-culture/patrimoine/patrimoine-immateriel/pourquoi-un-ministre-du-roi-a-t-il-transforme-une-teinturerie-en-manufacture-de-tapisseries",
    ],
    steps: [
      {
        label: "Tendre la chaîne",
        caption: "Sur le métier de haute lisse, les fils de chaîne sont dressés à la verticale.",
        detail:
          "Le carton de l’artiste donne un repère pour l’image. Les fils tendus forment l’ossature souple de la tapisserie.",
      },
      {
        label: "Passer la trame",
        caption: "La trame colorée passe entre les fils de chaîne dans chaque portion du motif.",
        detail:
          "Les passages successifs remplissent de petites zones. Le lissier change de couleur en suivant la composition.",
      },
      {
        label: "Faire apparaître le motif",
        caption: "La trame tassée compose la surface visible et recouvre la chaîne.",
        detail:
          "Le motif est fabriqué pendant le tissage. Le dessin montre des fils très agrandis pour rendre le principe visible.",
      },
    ],
    limit:
      "Métier et carton stylisés. Les techniques de haute lisse et leurs gestes sont plus détaillés dans les ressources de la manufacture.",
    source: {
      title: "Mobilier national — Manufacture des Gobelins",
      url: "https://www.mobiliernational.culture.gouv.fr/fr/nous-connaitre/les-manufactures/manufacture-des-gobelins",
    },
  },
  {
    canvasHeight: 230,
    id: "movingAssembly",
    title: "Un châssis traverse trois postes",
    paths: [
      "/automobile/industrie-automobile/production/comment-la-chaine-de-montage-de-ford-a-t-elle-change-la-fabrication-des-voitures",
    ],
    steps: [
      {
        label: "Engager le châssis",
        caption: "La pièce à assembler avance jusqu’au premier poste.",
        detail:
          "Le déplacement de l’objet change l’organisation du travail. L’équipe reste à son poste pendant que les châssis se succèdent.",
      },
      {
        label: "Ajouter une pièce",
        caption: "Chaque poste effectue une opération définie pendant le passage.",
        detail:
          "Le dessin isole un ajout pour rendre visible le partage des tâches et la cadence commune.",
      },
      {
        label: "Transmettre au suivant",
        caption: "Le châssis arrive au poste suivant avec la pièce déjà montée.",
        detail:
          "Une variation du rythme à un poste peut ralentir toute la ligne. L’organisation demande aussi une arrivée régulière de pièces.",
      },
    ],
    limit:
      "Reconstitution de principe et non relevé du plan de Highland Park. Les trois postes illustrent la logique de Ford en 1913.",
    source: {
      title: "The Henry Ford — Chronologie de Ford Motor Company",
      url: "https://www.thehenryford.org/collections/explore/popular-research-topics/ford-motor-co-chronology-1903-2003",
    },
  },
  {
    canvasHeight: 230,
    id: "carMaterials",
    title: "Choisir une matière pour chaque fonction",
    paths: [
      "/automobile/industrie-automobile/production/materiaux-automobile-acier-aluminium-composites",
    ],
    steps: [
      {
        label: "Protéger l’habitacle",
        caption: "L’acier constitue souvent une grande part de la structure de sécurité.",
        detail:
          "Les nuances et les géométries des pièces servent des fonctions différentes. Les zones de déformation et la cellule n’ont pas les mêmes objectifs.",
      },
      {
        label: "Alléger une pièce",
        caption: "L’aluminium peut réduire la masse d’une pièce à fonction comparable.",
        detail:
          "La forme, les assemblages et le mode de production sont adaptés au changement de matériau.",
      },
      {
        label: "Habiller et protéger",
        caption:
          "Des plastiques sont présents dans des garnitures et certaines pièces extérieures.",
        detail:
          "Un pare-chocs peut faire intervenir plusieurs matériaux et plusieurs couches, avec des rôles distincts.",
      },
    ],
    limit:
      "Répartition indicative. Les constructeurs emploient des combinaisons différentes et la silhouette n’est celle d’aucun modèle commercial.",
    source: {
      title: "Plateforme automobile — Matériaux pour l’allègement",
      url: "https://pfa-auto.fr/wp-content/uploads/2018/06/DT_Materiaux-pour-allegement_V6.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "sharedPlatform",
    title: "Un soubassement pour plusieurs silhouettes",
    paths: [
      "/automobile/industrie-automobile/production/plateformes-modulaires-et-standardisation",
    ],
    steps: [
      {
        label: "Les points communs",
        caption:
          "Une plateforme donne un ensemble de points d’ancrage et de sous-ensembles réutilisables.",
        detail: "La partie basse mise en évidence est le repère à suivre d’une vue à l’autre.",
      },
      {
        label: "Une voiture basse",
        caption: "Une carrosserie basse peut partager des choix techniques avec d’autres modèles.",
        detail: "L’habitacle et la silhouette changent autour d’éléments d’architecture communs.",
      },
      {
        label: "Une voiture haute",
        caption: "Un véhicule plus haut peut reprendre la même architecture de base.",
        detail:
          "Les plateformes modulaires permettent souvent de varier certaines dimensions. La silhouette conserve ici le même empattement pour faciliter la comparaison.",
      },
    ],
    limit:
      "Deux véhicules fictifs. Une plateforme réelle regroupe des composants et des règles compatibles, avec des variantes selon les modèles.",
    source: {
      title: "Volkswagen Group — Production et plateformes",
      url: "https://annualreport2023.volkswagen-group.com/group-management-report/sustainable-value-enhancement/production.html",
    },
  },
  {
    canvasHeight: 230,
    id: "energyRange",
    title: "Ce que l’air change entre 110 et 130 km/h",
    paths: ["/automobile/motorisations/electrique/autonomie-reelle-et-cycle-dhomologation"],
    steps: [
      {
        label: "À 110 km/h",
        caption: "On fixe l’indice de dépense aérodynamique par kilomètre à 1,00.",
        detail:
          "Imagine la même voiture à vitesse constante, dans le même air et sur le même parcours de référence.",
      },
      {
        label: "À 130 km/h",
        caption: "La traînée augmente avec le carré de la vitesse dans ce modèle.",
        detail:
          "À distance égale, l’énergie dépensée contre l’air suit le même rapport que la force de traînée.",
      },
      {
        label: "Comparer l’énergie",
        caption: "L’indice passe de 1,00 à environ 1,40 pour la part aérodynamique.",
        detail:
          "Le rapport vient de 130 au carré divisé par 110 au carré. Il ne compte ni le roulement, ni les pertes de transmission, ni la climatisation.",
      },
    ],
    limit:
      "Modèle à coefficient aérodynamique constant. Le +40 % ne s’applique qu’à la part liée à l’air par kilomètre.",
    source: {
      title: "NASA Glenn Research Center — The Drag Equation",
      url: "https://www.grc.nasa.gov/www/k-12/VirtualAero/BottleRocket/airplane/drageq.html",
    },
  },
  {
    canvasHeight: 230,
    id: "motorMagnets",
    title: "Comment le champ entraîne le rotor",
    paths: [
      "/automobile/motorisations/electrique/pourquoi-les-moteurs-de-voitures-electriques-ont-ils-besoin-de-terres-rares",
    ],
    steps: [
      {
        label: "Le champ du stator",
        caption: "Les bobines du stator créent un champ magnétique tournant.",
        detail:
          "Le dessin isole successivement des zones du stator pour montrer comment l’orientation du champ change.",
      },
      {
        label: "Le rotor à aimants",
        caption: "Les aimants du rotor interagissent avec le champ pour fournir du couple.",
        detail:
          "Le rotor est au centre. Dans ce type de moteur, certains aimants à base de terres rares permettent une forte densité de couple.",
      },
      {
        label: "Un rotor sans aimants",
        caption: "Un moteur à induction est un exemple de moteur dépourvu d’aimants permanents.",
        detail:
          "Le champ variable induit des courants dans des conducteurs du rotor. La conception et les compromis diffèrent du moteur à aimants.",
      },
    ],
    limit:
      "Coupes schématiques sans nombre réel de pôles ni simulation électrique. Tous les moteurs électriques n’ont pas besoin de terres rares.",
    source: {
      title: "US Department of Energy — Advanced Motors and Electric Drives",
      url: "https://www.energy.gov/cmei/vehicles/research-and-development-advanced-motors-and-electric-drives",
    },
  },
  {
    canvasHeight: 230,
    id: "vehicleGrid",
    title: "Entre la voiture, la maison et le réseau",
    paths: ["/automobile/motorisations/electrique/recharge-bidirectionnelle-vehicule-reseau"],
    steps: [
      {
        label: "Charger la batterie",
        caption: "La voiture reçoit de l’énergie par un équipement de recharge.",
        detail: "La flèche montre le sens de transfert entre l’installation et la batterie.",
      },
      {
        label: "Alimenter la maison",
        caption:
          "Une installation compatible peut faire circuler l’énergie dans l’autre sens vers la maison.",
        detail:
          "La fonction requiert du matériel et des protections adaptés. L’énergie disponible dépend aussi de la charge restante.",
      },
      {
        label: "Servir le réseau",
        caption:
          "Le véhicule peut également restituer de l’énergie au réseau avec une installation compatible.",
        detail:
          "Un opérateur peut coordonner plusieurs véhicules. Le service dépend des équipements, des règles locales et de l’accord de l’utilisateur.",
      },
    ],
    limit:
      "Flux d’énergie simplifiés. Aucune instruction de branchement. La compatibilité dépend du véhicule, de la borne et du service.",
    source: {
      title: "CharIN — Interopérabilité du vehicle-to-grid",
      url: "https://www.charin.global/news/vehicle-to-grid-v2g-interoperability-standards-grid-integration/",
    },
  },
  {
    canvasHeight: 230,
    id: "engineFeedback",
    title: "La boucle d’information d’un calculateur",
    paths: ["/automobile/motorisations/thermique/calculateur-moteur-capteurs"],
    steps: [
      {
        label: "Mesurer l’air",
        caption: "Un débitmètre transmet une mesure de l’air aspiré au calculateur.",
        detail:
          "Cette mesure est l’une des entrées possibles pour estimer la quantité de carburant à injecter.",
      },
      {
        label: "Commander l’injection",
        caption:
          "Le calculateur utilise ses entrées et ses réglages pour commander les injecteurs.",
        detail:
          "La commande agit sur la combustion et les gaz qui arrivent ensuite à l’échappement.",
      },
      {
        label: "Ajuster le mélange",
        caption: "Une sonde à l’échappement fournit une information de retour.",
        detail:
          "La sonde lambda permet d’ajuster la commande sur les cycles suivants lorsque la régulation fonctionne en boucle fermée.",
      },
    ],
    limit:
      "Exemple d’un moteur essence. Le calculateur s’appuie aussi sur d’autres capteurs et peut changer de stratégie selon son régime de fonctionnement.",
    source: {
      title: "Bosch Mobility — Sonde lambda à commutation",
      url: "https://www.bosch-mobility.com/en/solutions/exhaust-gas-treatment/switching-type-lambda-sensor/",
    },
  },
  {
    canvasHeight: 230,
    id: "sparkCoil",
    title: "La bobine et l’instant de l’étincelle",
    paths: ["/automobile/motorisations/thermique/le-systeme-d-allumage-electronique-moderne"],
    steps: [
      {
        label: "Alimenter le primaire",
        caption: "Un courant dans le bobinage primaire crée un champ magnétique.",
        detail:
          "Le dessin montre deux bobinages partageant un noyau pour rendre visible leur couplage.",
      },
      {
        label: "Couper le courant",
        caption: "Une coupure rapide dans le primaire provoque une variation du champ.",
        detail:
          "Cette variation induit une tension dans le secondaire, qui possède davantage de spires.",
      },
      {
        label: "Franchir l’écart",
        caption: "La tension permet une décharge entre les électrodes de la bougie.",
        detail:
          "Cette étincelle amorce la combustion dans un moteur à allumage commandé. Le moment est choisi par la commande du moteur.",
      },
    ],
    limit:
      "Schéma fonctionnel sans temps, tension de réglage ni procédure. Les moteurs diesel fonctionnent par auto-inflammation du carburant injecté.",
    source: {
      title: "Bosch Aftermarket — Ignition systems",
      url: "https://www.boschaftermarket.com/xrm/media/images/country_specific/my/services_and_support_5/downloads_17/pag_ignition_overview_brochure_cd2016_en_fin_82276.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "steeringAssist",
    title: "Du volant à l’orientation des roues",
    paths: ["/automobile/securite-et-conduite/direction-assistee-maniabilite"],
    steps: [
      {
        label: "Suivre la liaison",
        caption: "Le volant agit sur la colonne puis sur le mécanisme de direction.",
        detail: "Une crémaillère transforme ici une rotation en déplacement latéral.",
      },
      {
        label: "Ajouter une aide",
        caption: "Une assistance électrique ajoute un effort au mouvement commandé.",
        detail:
          "Cette aide réduit l’effort au volant. Elle peut varier avec la vitesse ou l’effort mesuré.",
      },
      {
        label: "Tourner les roues",
        caption: "Les biellettes transmettent le mouvement de la crémaillère aux roues.",
        detail:
          "La position des roues dépend aussi de la géométrie de la direction et des appuis des pneus.",
      },
    ],
    limit:
      "Direction à crémaillère représentée de manière simplifiée. L’emplacement de l’assistance varie selon les systèmes.",
    source: {
      title: "NSK — Electric Power Steering",
      url: "https://www.nskeurope.com/eu-en/products/automotive/automotive-oem/industries/electric-power-steering",
    },
  },
  {
    canvasHeight: 230,
    id: "carCooling",
    title: "Trois façons de chauffer l’habitacle",
    paths: ["/automobile/usages-et-mobilite/chauffage-climatisation-consommation-automobile"],
    steps: [
      {
        label: "Chauffer par résistance",
        caption: "Une résistance convertit de l’électricité en chaleur dans la voiture.",
        detail:
          "Quand le véhicule est débranché, l’énergie provient de la batterie de traction sur l’exemple dessiné.",
      },
      {
        label: "Déplacer la chaleur",
        caption: "Une pompe à chaleur transfère de la chaleur vers l’habitacle.",
        detail:
          "Elle dépense aussi de l’électricité. Sous certaines conditions, elle livre davantage de chaleur que la même énergie électrique utilisée dans une résistance.",
      },
      {
        label: "Préchauffer à la prise",
        caption: "Préparer l’habitacle avant le départ peut mobiliser l’énergie du raccordement.",
        detail:
          "L’énergie réellement tirée de la prise ou de la batterie dépend de la puissance disponible et du véhicule.",
      },
    ],
    limit:
      "Schéma qualitatif sans estimation d’autonomie. Le chauffage, la climatisation et le conditionnement de la batterie influent différemment selon les conditions.",
    source: {
      title: "US Department of Energy — Winterizing your electric vehicle",
      url: "https://www.energy.gov/articles/winterizing-your-electric-vehicle",
    },
  },
  {
    canvasHeight: 230,
    id: "surveyTriangle",
    title: "Construire la carte à partir d’une base",
    paths: [
      "/geographie-et-territoires/geographie-physique/reliefs/refaire-une-carte-par-triangulation",
    ],
    steps: [
      {
        label: "Mesurer la base",
        caption: "La distance entre A et B est connue au départ.",
        detail:
          "Ces deux points fixent l’échelle. Le point C peut être un repère accessible au regard sans être accessible à pied.",
      },
      {
        label: "Viser le troisième point",
        caption: "Deux visées depuis A et B se croisent à la position de C.",
        detail:
          "La base et les deux angles suffisent à déduire les autres côtés du triangle dans cette construction plane.",
      },
      {
        label: "Prolonger le réseau",
        caption: "Un côté déjà calculé peut servir de base au triangle suivant.",
        detail:
          "En enchaînant les triangles, on étend le réseau sans mesurer directement toutes les distances au sol.",
      },
    ],
    limit:
      "Construction dans un plan et dessin sans échelle. Les grands levés géodésiques corrigent notamment la courbure de la Terre.",
    source: {
      title: "NOAA — Triangulation et réseaux géodésiques",
      url: "https://www.ngs.noaa.gov/INFO/history/triangulation.shtml",
    },
  },
  {
    canvasHeight: 230,
    id: "seaPassage",
    title: "Pourquoi un détroit concentre le trafic",
    paths: [
      "/geographie-et-territoires/geopolitique/routes-et-detroits/detroits-et-routes-maritimes",
    ],
    steps: [
      {
        label: "Relier deux bassins",
        caption: "Un détroit est un passage naturel resserré entre deux terres.",
        detail:
          "Plusieurs trajets convergent parce qu’ils ont besoin de passer d’un bassin maritime à l’autre.",
      },
      {
        label: "Partager un passage",
        caption: "Une même ouverture concentre des navires partis de différents ports.",
        detail:
          "La densité du trafic rend la circulation et les incidents dans le passage importants pour les routes qui en dépendent.",
      },
      {
        label: "Comparer un détour",
        caption: "Une autre route peut éviter le passage au prix d’un trajet plus long.",
        detail:
          "Le détour change les besoins en temps et en carburant. Dans certains cas, aucun détour maritime praticable n’existe à proximité.",
      },
    ],
    limit:
      "Carte fictive. Les contraintes de navigation, les distances et les solutions diffèrent selon le détroit.",
    source: {
      title: "CNUCED — Review of Maritime Transport 2024",
      url: "https://unctad.org/publication/review-maritime-transport-2024",
    },
  },
  {
    canvasHeight: 230,
    id: "factorySensor",
    title: "Écouter la machine avant la panne",
    paths: ["/industries/industrie-4-0/iot/internet-des-objets-industriel"],
    steps: [
      {
        label: "Mesurer les vibrations",
        caption: "Un capteur fixé près du roulement relève des vibrations.",
        detail:
          "Même un roulement en bon état vibre. Le signal habituel constitue un repère aux conditions de fonctionnement comparables.",
      },
      {
        label: "Repérer un changement",
        caption: "Des caractéristiques du signal peuvent changer avec un défaut ou de l’usure.",
        detail:
          "Compare les amplitudes du dessin. En pratique, la fréquence, la charge, la vitesse et d’autres facteurs aident à interpréter le signal.",
      },
      {
        label: "Suivre une tendance",
        caption: "Un écart persistant peut justifier un contrôle avant une panne.",
        detail:
          "Le dernier tracé compare des mesures prises à des instants différents. L’examen de la machine permet ensuite d’identifier la cause.",
      },
    ],
    limit:
      "Tracés fictifs et sans seuil de maintenance. Une vibration inhabituelle n’identifie pas à elle seule un roulement défectueux.",
    source: {
      title: "SKF — Condition monitoring",
      url: "https://www.skf.com/group/industries/machine-tools/products-and-services/condition-monitoring",
    },
  },
  {
    canvasHeight: 230,
    id: "digitalTwin",
    title: "Une machine, son modèle et leurs échanges",
    paths: [
      "/industries/industrie-4-0/jumeaux-numeriques/jumeau-numerique-applications-industrielles",
    ],
    steps: [
      {
        label: "Représenter la machine",
        caption: "Un modèle numérique représente ce qu’on veut observer dans la machine.",
        detail:
          "Le modèle retient des grandeurs et des mécanismes adaptés à une question, par exemple la charge ou le mouvement.",
      },
      {
        label: "Relier les mesures",
        caption: "Des données de fonctionnement permettent de mettre le modèle à jour.",
        detail:
          "Les mesures gardent le modèle relié à l’état réel. La fréquence et la précision requises dépendent de l’usage.",
      },
      {
        label: "Essayer une variante",
        caption: "On peut faire varier un scénario dans le modèle avant de toucher à la machine.",
        detail:
          "L’essai virtuel renseigne dans la limite des données et des hypothèses utilisées. Le modèle doit être validé pour l’usage prévu.",
      },
    ],
    limit:
      "La forme virtuelle évoque la machine. Un jumeau numérique peut être utile sans représentation en trois dimensions.",
    source: {
      title: "NIST — Framework for a digital twin in manufacturing",
      url: "https://www.nist.gov/publications/framework-digital-twin-manufacturing",
    },
  },
  {
    canvasHeight: 230,
    id: "ironReduction",
    title: "Deux voies pour retirer l’oxygène du minerai",
    paths: [
      "/industries/industrie-lourde/siderurgie/lacier-bas-carbone-reduction-directe-hydrogene",
    ],
    steps: [
      {
        label: "Observer le minerai",
        caption: "Dans un minerai de fer courant, le fer est lié à l’oxygène.",
        detail:
          "Séparer le fer de cet oxygène est l’étape de réduction. La planche isole ce changement de la fabrication complète de l’acier.",
      },
      {
        label: "Suivre la voie carbonée",
        caption: "Un gaz réducteur contenant du carbone peut emporter l’oxygène en formant du CO₂.",
        detail:
          "Le dessin suit l’oxygène du minerai. Il omet les réactions intermédiaires et les autres étapes de la filière.",
      },
      {
        label: "Suivre la voie hydrogène",
        caption: "L’hydrogène peut emporter cet oxygène sous forme d’eau.",
        detail:
          "Le bilan des émissions dépend aussi de la façon de produire l’hydrogène et d’alimenter le reste de la filière.",
      },
    ],
    limit:
      "Réactions représentées qualitativement. Ni le bilan de l’installation ni les conditions de fonctionnement ne sont figurés.",
    source: {
      title: "Agence internationale de l’énergie — Iron and steel",
      url: "https://www.iea.org/energy-system/industry/steel",
    },
  },
  {
    canvasHeight: 230,
    id: "bloomFurnace",
    title: "Suivre le fer dans un bas fourneau",
    paths: ["/industries/industrie-lourde/siderurgie/minerai-fer-bas-fourneau"],
    steps: [
      {
        label: "Charger le fourneau",
        caption: "Minerai de fer et charbon de bois entrent dans la cuve.",
        detail:
          "La coupe situe les matières et l’arrivée d’air. Les proportions et la forme dépendent du fourneau historique.",
      },
      {
        label: "Transformer le minerai",
        caption: "Le gaz réducteur retire de l’oxygène des oxydes du minerai.",
        detail:
          "Une partie des matières forme des scories. Le fer obtenu demeure principalement solide dans le procédé représenté.",
      },
      {
        label: "Repérer la loupe",
        caption: "Une masse de fer mêlée de scories peut être extraite du fourneau.",
        detail:
          "Un travail mécanique ultérieur consolide le métal et peut en retirer une partie des scories.",
      },
    ],
    limit:
      "Coupe de principe, avec agrandissement de la loupe. Les résultats varient selon le minerai et la technique de réduction.",
    source: {
      title: "EXARC Journal — Development of Bloomery Furnaces",
      url: "https://exarc.net/issue-2020-2/ea/development-bloomery-furnaces",
    },
  },
  {
    canvasHeight: 230,
    id: "ironCarbon",
    title: "Comparer le carbone dans trois matériaux ferreux",
    paths: [
      "/industries/industrie-lourde/siderurgie/pourquoi-la-fonte-le-fer-et-l-acier-ne-se-comportent-ils-pas-de-la-meme-facon",
    ],
    steps: [
      {
        label: "Très peu de carbone",
        caption: "Le fer forgé historique contient très peu de carbone.",
        detail:
          "Il peut aussi contenir des inclusions de scories. Les quelques points figurent une teneur relative.",
      },
      {
        label: "La plage des aciers",
        caption: "La teneur en carbone de l’acier varie selon la nuance.",
        detail:
          "La composition, le traitement thermique et la microstructure influencent les propriétés. Les points n’indiquent pas un pourcentage.",
      },
      {
        label: "La famille des fontes",
        caption: "Les fontes sont en général plus riches en carbone que les aciers.",
        detail:
          "La fonte se prête bien au moulage. La forme du carbone et la microstructure peuvent fortement changer sa ténacité.",
      },
    ],
    limit:
      "Les points illustrent une comparaison qualitative. Ils n’imitent pas une micrographie et ne décrivent pas toutes les fontes ou tous les aciers.",
    source: {
      title: "World Steel Association — What is steel?",
      url: "https://worldsteel.org/about-steel/what-is-steel/",
    },
  },
  {
    canvasHeight: 230,
    id: "threadFit",
    title: "Voir quand deux filetages s’accordent",
    paths: [
      "/industries/industrie-manufacturiere/qualite-et-normalisation/normalisation-et-controle-qualite",
    ],
    steps: [
      {
        label: "Repérer le pas",
        caption: "Le pas est la distance entre deux crêtes voisines mesurée dans l’axe.",
        detail:
          "La cote mise en évidence se répète de filet en filet. Le diamètre et le profil sont aussi définis.",
      },
      {
        label: "Comparer des profils",
        caption: "Un pas et un diamètre compatibles permettent aux filets de s’engager.",
        detail:
          "Les tolérances définissent les écarts acceptés. Elles sont indispensables à l’interchangeabilité des pièces fabriquées séparément.",
      },
      {
        label: "Essayer un autre pas",
        caption: "L’écart entre les filets s’accumule si les pas sont différents.",
        detail:
          "Même si les débuts de filets semblent alignés, ils cessent de coïncider plus loin.",
      },
    ],
    limit:
      "Filets agrandis et aplatis en deux dimensions. Pas et diamètre compatibles supposent également un profil et un sens adaptés.",
    source: {
      title: "ISO — Plan général des filetages métriques",
      url: "https://www.iso.org/standard/4165.html",
    },
  },
  {
    canvasHeight: 230,
    id: "materialChoice",
    title: "Comparer la flexion et la résistance à la rupture",
    paths: [
      "/technologies-et-ingenierie/conception-et-fiabilite/choix-des-materiaux/comment-choisir-un-materiau",
    ],
    steps: [
      {
        label: "Même forme, même charge",
        caption: "Dans la première vue, la pièce se déforme peu sous la charge.",
        detail: "Garder la même géométrie permet d’isoler un effet du matériau dans cet exemple.",
      },
      {
        label: "Observer la flèche",
        caption: "Une autre matière peut se courber davantage sous la même charge.",
        detail:
          "La flèche mesure un déplacement. Pour ce cas de flexion, une flèche plus grande correspond à une rigidité plus faible.",
      },
      {
        label: "Séparer les critères",
        caption: "La charge qui déclenche la rupture répond à une autre question.",
        detail:
          "Une pièce rigide peut se rompre plus tôt qu’une autre dans certaines conditions. Le bon choix dépend des contraintes d’usage.",
      },
    ],
    limit:
      "Essai conceptuel. L’épaisseur, la forme et l’histoire de fabrication modifient aussi le comportement d’une pièce réelle.",
    source: {
      title: "MIT OpenCourseWare — Mechanical Behavior of Materials",
      url: "https://ocw.mit.edu/courses/3-032-mechanical-behavior-of-materials-fall-2007/",
    },
  },
  {
    canvasHeight: 230,
    id: "assistExoskeleton",
    title: "Deux façons d’assister le mouvement",
    paths: [
      "/technologies-et-ingenierie/robotique/actionneurs/comment-un-exosquelette-aide-t-il-a-marcher-ou-a-porter-une-charge",
    ],
    steps: [
      {
        label: "Repérer la structure",
        caption:
          "Un exosquelette se porte sur le corps, près des articulations ou des zones soutenues.",
        detail:
          "La structure suit le mouvement du membre. Le montage dans le dessin isole une articulation pour faciliter la comparaison.",
      },
      {
        label: "Restituer de l’énergie",
        caption:
          "Un élément élastique peut stocker de l’énergie dans un mouvement puis la restituer.",
        detail:
          "Une assistance passive peut réduire l’effort musculaire sur certaines phases. Elle peut le déplacer vers d’autres zones ou d’autres phases.",
      },
      {
        label: "Apporter une aide motorisée",
        caption: "Un moteur peut exercer un couple d’assistance au moment prévu.",
        detail:
          "Le contrôleur règle l’aide selon le dispositif et les signaux disponibles. L’exemple ne présume d’aucun gain clinique.",
      },
    ],
    limit:
      "Dispositifs schématiques. Les effets et le confort dépendent du réglage, de la personne et de la tâche.",
    source: {
      title: "NIOSH — Comparaison de dispositifs passifs et actifs",
      url: "https://stacks.cdc.gov/view/cdc/226288",
    },
  },
  {
    canvasHeight: 230,
    id: "hiddenWater",
    title: "D’où vient l’empreinte en eau d’une culture",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/empreinte-alimentaire/eau-virtuelle",
    ],
    steps: [
      {
        label: "Suivre la pluie",
        caption:
          "L’eau verte désigne ici l’eau de pluie stockée dans le sol et utilisée par la culture.",
        detail:
          "La flèche suit une partie de la pluie vers les racines. Seule la part utilisée dans le périmètre étudié entre dans ce calcul.",
      },
      {
        label: "Suivre le prélèvement",
        caption:
          "L’eau bleue correspond à la part consommée provenant d’une rivière, d’un lac ou d’une nappe.",
        detail:
          "Une conduite d’irrigation amène cette eau au champ. Toute l’eau prélevée n’est pas nécessairement consommée.",
      },
      {
        label: "Estimer l’eau grise",
        caption: "L’eau grise est un volume théorique associé à la dilution d’un polluant.",
        detail:
          "Il indique le volume qui serait nécessaire pour rester sous un seuil donné. Le cours d’eau ne fournit qu’un repère pour comprendre cet indicateur.",
      },
    ],
    limit:
      "Aucun volume calculé. L’empreinte dépend notamment du site, du produit, des hypothèses et de la période.",
    source: {
      title: "Mekonnen et Hoekstra — Water footprint of crops",
      url: "https://www.waterfootprint.org/resources/Mekonnen-Hoekstra-2011-WaterFootprintCrops.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "growingSeason",
    title: "Trois parcours possibles pour une tomate",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/empreinte-alimentaire/saisonnalite-fruits-legumes",
    ],
    steps: [
      {
        label: "Cultiver en saison",
        caption:
          "En saison locale, la plante peut pousser sous des conditions naturellement favorables.",
        detail:
          "Le calendrier varie selon la région et le climat. Le dessin prend la tomate comme exemple.",
      },
      {
        label: "Prolonger avec la chaleur",
        caption: "Une serre chauffée peut produire quand il fait trop froid dehors.",
        detail:
          "Le chauffage consomme une énergie dont la quantité et l’origine comptent dans le bilan environnemental.",
      },
      {
        label: "Cultiver plus loin",
        caption:
          "Une tomate peut aussi venir d’une région où les conditions conviennent à ce moment.",
        detail:
          "Le mode de transport, sa durée et les conditions de culture comptent. La distance seule ne suffit pas pour classer les impacts.",
      },
    ],
    limit:
      "Trois parcours possibles. Le dessin ne compare pas le bilan carbone de trois produits réels.",
    source: {
      title: "ADEME — Calendrier des fruits et légumes de saison",
      url: "https://librairie.ademe.fr/agriculture-alimentation-foret-bioeconomie/5784-a-chaque-mois-ses-fruits-et-legumes-.html",
    },
  },
  {
    canvasHeight: 230,
    id: "fishSelectivity",
    title: "Ce qu’un engin de pêche peut laisser passer",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/gaspillage-alimentaire/peche-durable",
    ],
    steps: [
      {
        label: "Observer le milieu",
        caption: "Le même milieu peut abriter plusieurs espèces et plusieurs classes de taille.",
        detail: "On compare les poissons dans le même cadre avant de regarder l’action de l’engin.",
      },
      {
        label: "Observer la capture",
        caption:
          "Un engin peut retenir des animaux différents de l’espèce ou de la taille recherchée.",
        detail:
          "Le comportement des poissons et le type d’engin pèsent aussi sur la composition des captures.",
      },
      {
        label: "Faciliter une sortie",
        caption: "Un dispositif sélectif peut laisser sortir une partie des petits poissons.",
        detail:
          "Sa performance s’évalue pour un engin, des espèces et des conditions de pêche donnés. Elle n’élimine pas toutes les prises indésirées.",
      },
    ],
    limit:
      "Dessin qualitatif sans géométrie de fabrication. La sélectivité est un aspect de la gestion durable, parmi d’autres.",
    source: {
      title: "FAO — Mesures techniques et sélectivité des engins",
      url: "https://www.fao.org/4/y3427e/y3427e04.htm",
    },
  },
  {
    canvasHeight: 230,
    id: "forestRenewal",
    title: "Suivre le renouvellement d’un peuplement",
    paths: ["/environnement-et-climat/biodiversite/forets-et-oceans/gerer-durablement-foret"],
    steps: [
      {
        label: "Décrire la forêt",
        caption: "Le peuplement contient ici des arbres de hauteurs et d’âges différents.",
        detail:
          "Le gestionnaire regarde aussi les espèces, les sols, les habitats et les signes de régénération sous le couvert.",
      },
      {
        label: "Ouvrir de la place",
        caption:
          "Une coupe choisie peut ouvrir de l’espace et laisser arriver davantage de lumière.",
        detail:
          "Le type de coupe dépend des essences et des objectifs. Certaines jeunes pousses se développent aussi bien sous un couvert.",
      },
      {
        label: "Observer la relève",
        caption: "Des semis ou de jeunes plantations peuvent renouveler le peuplement.",
        detail:
          "La régénération demande un suivi. La lumière, la sécheresse ou la pression des animaux peuvent modifier son succès.",
      },
    ],
    limit:
      "Coupe de principe. Les trois vues ne fixent ni calendrier ni quantité de bois à prélever.",
    source: {
      title: "ONF — Renouveler progressivement la forêt",
      url: "https://www.onf.fr/vivre-la-foret/enjeux-foret/biodiversite-foret/proteger-biodiversite/prevenir-les-risques-incendie-et-restaurer-les-ecosystemes/%2B/7ef%3A%3Acoupes-de-regeneration-renouveler-progressivement-la-foret.html",
    },
  },
  {
    canvasHeight: 230,
    id: "repairCycle",
    title: "Quand une panne concerne seulement une pièce",
    paths: [
      "/environnement-et-climat/pollution-et-ressources/dechets-et-recyclage/reparer-plutot-jeter",
    ],
    steps: [
      {
        label: "Localiser la panne",
        caption: "Un objet à l’arrêt peut avoir un seul composant défaillant.",
        detail:
          "Le dessin isole le module concerné. Le diagnostic cherche d’abord ce qui empêche l’ensemble de fonctionner.",
      },
      {
        label: "Remplacer la pièce",
        caption:
          "Une pièce accessible et disponible peut permettre de conserver le reste de l’objet.",
        detail:
          "La possibilité de réparer dépend aussi du démontage, de la documentation, des compétences et du prix des pièces.",
      },
      {
        label: "Reprendre l’usage",
        caption: "Après contrôle, l’appareil réparé peut retrouver sa fonction.",
        detail:
          "Prolonger sa durée d’usage peut éviter un remplacement prématuré. Le bénéfice dépend de l’objet et de ce qui a été remplacé.",
      },
    ],
    limit:
      "Appareil fictif, sans instruction de démontage. La sécurité d’une réparation dépend notamment du produit et de la panne.",
    source: {
      title: "Commission européenne — Écoconception et réparabilité",
      url: "https://energy-efficient-products.ec.europa.eu/ecodesign-and-energy-label/legislative-framework_en",
    },
  },
  {
    canvasHeight: 230,
    id: "waterBalance",
    title: "Comparer les usages et la ressource disponible",
    paths: ["/environnement-et-climat/pollution-et-ressources/eau/stress-hydrique-mondial"],
    steps: [
      {
        label: "Une ressource locale",
        caption: "La quantité de ressource renouvelable dépend du lieu et de la période.",
        detail:
          "Les pluies et les apports alimentent des réserves. Une partie des écoulements soutient les milieux naturels.",
      },
      {
        label: "Faire face aux usages",
        caption: "Les besoins des différents secteurs entraînent des prélèvements.",
        detail:
          "La position des niveaux indique qualitativement le rapport entre les prélèvements et l’eau douce disponible.",
      },
      {
        label: "Voir la pression augmenter",
        caption: "Si l’offre diminue pendant que les prélèvements montent, la pression s’accroît.",
        detail:
          "À usages comparables, une saison sèche peut suffire à augmenter le rapport. La disponibilité écologique fait partie de l’évaluation internationale.",
      },
    ],
    limit:
      "Volumes fictifs. L’indicateur onusien utilise les ressources renouvelables disponibles après prise en compte des besoins environnementaux.",
    source: {
      title: "FAO — Niveau de stress hydrique",
      url: "https://www.fao.org/sustainable-development-goals-data-portal/data/indicators/642-water-stress/",
    },
  },
  {
    canvasHeight: 230,
    id: "climatePlots",
    title: "Lire deux signaux sur une année",
    paths: [
      "/geographie-et-territoires/geographie-physique/climatologie/classification-climats-mondiaux-koppen",
    ],
    steps: [
      {
        label: "Profil tropical humide",
        caption: "La température reste élevée et les pluies sont abondantes dans ce profil fictif.",
        detail:
          "La courbe suit la température, les barres les précipitations. Une année humide seule ne suffit pas à décrire le climat.",
      },
      {
        label: "Profil aride",
        caption: "Les pluies faibles caractérisent ce profil dans la comparaison.",
        detail:
          "Les barres sont basses une grande partie de l’année. Un climat aride peut être chaud ou froid.",
      },
      {
        label: "Profil tempéré",
        caption: "L’écart de température entre saisons ressort dans le troisième profil.",
        detail:
          "Les précipitations varient selon le climat local. La classification confronte plusieurs seuils et la répartition saisonnière.",
      },
    ],
    limit:
      "Trois profils fictifs sur des axes relatifs communs. La classification de Köppen-Geiger couvre bien plus de sous-types.",
    source: {
      title: "Beck et al. — Present and future Köppen-Geiger climate classification",
      url: "https://www.nature.com/articles/sdata2018214",
    },
  },
  {
    canvasHeight: 230,
    id: "dryDesert",
    title: "Reconnaître un désert chaud ou froid",
    paths: [
      "/geographie-et-territoires/geographie-physique/reliefs/quel-est-le-plus-grand-desert-du-monde-et-est-ce-vraiment-le-sahara",
    ],
    steps: [
      {
        label: "Le critère commun",
        caption: "Des précipitations très faibles caractérisent les déserts représentés.",
        detail:
          "L’eau peut tomber sous forme de pluie ou de neige. La température ne suffit pas à identifier un désert.",
      },
      {
        label: "Un désert polaire",
        caption: "Une grande partie de l’Antarctique reçoit très peu de précipitations.",
        detail:
          "La glace peut s’accumuler sur une longue durée malgré une faible quantité de neige chaque année.",
      },
      {
        label: "Un désert chaud",
        caption: "Le Sahara est le plus grand désert chaud.",
        detail:
          "La chaleur va ici de pair avec une forte aridité. Les dunes ne représentent qu’une partie des paysages du Sahara.",
      },
    ],
    limit:
      "Coupes stylisées, sans échelle d’aire ni de précipitations. Les côtes et les régions intérieures n’ont pas les mêmes conditions.",
    source: {
      title: "NSIDC — Science du temps et du climat polaires",
      url: "https://nsidc.org/learn/parts-cryosphere/arctic-weather-and-climate/science-arctic-weather-and-climate",
    },
  },
  {
    canvasHeight: 230,
    id: "sandGrains",
    title: "Observer les grains et leur milieu d’origine",
    paths: [
      "/geographie-et-territoires/geopolitique/ressources/pourquoi-le-monde-pourrait-il-manquer-de-sable",
    ],
    steps: [
      {
        label: "Regarder les grains",
        caption: "La taille et la forme des grains varient selon leur origine.",
        detail:
          "Le transport, les chocs et l’érosion changent les surfaces. Les grains dessinés sont agrandis.",
      },
      {
        label: "Sélectionner un granulat",
        caption: "Un granulat pour le béton est sélectionné selon des caractéristiques précises.",
        detail:
          "La répartition des tailles, la forme et la qualité du granulat comptent. Du sable très fin et uniforme est généralement peu adapté tel quel.",
      },
      {
        label: "Observer l’extraction",
        caption: "Extraire du sable peut modifier un habitat ou l’équilibre d’un cours d’eau.",
        detail:
          "Le renouvellement du matériau dépend de l’apport de sédiments. Les effets diffèrent selon le lieu et la façon de prélever.",
      },
    ],
    limit:
      "Grains stylisés, sans mesure de diamètre. Le dessin ne définit pas un test d’acceptation pour fabriquer du béton.",
    source: {
      title: "PNUE — Sand and Sustainability",
      url: "https://wedocs.unep.org/items/9ec225c4-5a9f-44d0-a560-46e0c8264003/full",
    },
  },
  {
    canvasHeight: 230,
    id: "maizeSelection",
    title: "Suivre l’évolution d’un épi au fil des semis",
    paths: [
      "/sciences-du-vivant-appliquees/agronomie/selection-vegetale/comment-une-herbe-sauvage-du-mexique-est-elle-devenue-le-mais",
    ],
    steps: [
      {
        label: "Observer la téosinte",
        caption:
          "La téosinte porte de petits épis avec peu de grains protégés par une enveloppe dure.",
        detail:
          "Le dessin utilise un gros plan pour mettre l’accent sur les grains plutôt que sur la taille de la plante.",
      },
      {
        label: "Ressemer un choix",
        caption:
          "Ressemer certaines plantes change les caractères transmis au fil des générations.",
        detail:
          "La vue intermédiaire figure la sélection répétée de caractères utiles. Elle ne se rattache pas à une variété historique précise.",
      },
      {
        label: "Comparer avec le maïs",
        caption: "Les épis de maïs ont davantage de grains, disposés en rangées.",
        detail:
          "La domestication a aussi modifié l’architecture et la dispersion naturelle des grains. Lis les trois états comme des repères d’un processus long.",
      },
    ],
    limit:
      "Épis agrandis et nombre de grains indicatif. La planche ne présente ni un arbre de filiation exhaustif ni des étapes datées.",
    source: {
      title: "Piperno et al. — Early maize in the Central Balsas River Valley",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/2664021/",
    },
  },
  {
    canvasHeight: 230,
    id: "imageProvenance",
    title: "Retrouver le contexte d’une image recadrée",
    paths: [
      "/communication-et-medias/information-et-verification/education-aux-medias/comment-retrouver-d-ou-vient-une-image-trouvee-en-ligne",
    ],
    steps: [
      {
        label: "Relever les détails",
        caption: "Les reliefs et l’horizon servent d’indices visuels pour chercher la même scène.",
        detail:
          "Garder en tête des détails reconnaissables aide quand la taille ou le cadre change.",
      },
      {
        label: "Comparer les cadres",
        caption:
          "Une recherche inversée peut retrouver une image plus large ou une copie recadrée.",
        detail:
          "Compare la même crête et le bord supprimé pour vérifier que les images correspondent réellement.",
      },
      {
        label: "Recouper les dates",
        caption: "Les pages retrouvées donnent des repères sur la circulation de l’image.",
        detail:
          "Une publication ancienne retrouvée n’est pas forcément la première. Une date EXIF peut manquer ou avoir été modifiée.",
      },
    ],
    limit:
      "Paysage et dates fictifs. Une correspondance d’image aide à enquêter, sans établir à elle seule l’origine ni les droits.",
    source: {
      title: "Google Search — About this image",
      url: "https://blog.google/products-and-platforms/products/search/about-this-image-google-search/",
    },
  },
  {
    canvasHeight: 230,
    id: "feedRanking",
    title: "Voir le même ensemble dans un autre ordre",
    paths: [
      "/communication-et-medias/medias-numeriques/plateformes-et-moderation/pourquoi-votre-fil-d-actualite-ne-ressemble-t-il-pas-a-celui-d-un-ami",
    ],
    steps: [
      {
        label: "Le même ensemble",
        caption: "Trois contenus sont disponibles avant le classement.",
        detail:
          "Une recommandation choisit les éléments à proposer et leur ordre. La planche conserve volontairement les trois mêmes candidats.",
      },
      {
        label: "Un intérêt pour l’art",
        caption:
          "Un signal d’intérêt pour l’art peut donner la priorité au contenu consacré au musée.",
        detail:
          "Le musée passe en premier. Dans un système réel, de nombreux autres signaux peuvent modifier cet ordre.",
      },
      {
        label: "Un intérêt pour la nature",
        caption: "Avec un autre signal, le contenu sur la forêt peut être placé en tête.",
        detail:
          "Regarder, ignorer ou évaluer un contenu peut fournir un signal selon la plateforme. Une recommandation reste une estimation de préférence.",
      },
    ],
    limit:
      "Fil et critères fictifs. Les critères, leur poids et les réglages offerts dépendent de chaque service.",
    source: {
      title: "YouTube — How recommendations work",
      url: "https://www.youtube.com/howyoutubeworks/product-features/recommendations/",
    },
  },
  {
    canvasHeight: 230,
    id: "webHyperlink",
    title: "Ce qu’un lien change entre deux documents",
    paths: ["/communication-et-medias/medias-numeriques/web/histoire-du-web-utilisateurs"],
    steps: [
      {
        label: "Des documents séparés",
        caption: "Des documents existent à des endroits distincts et possèdent des adresses.",
        detail:
          "Un navigateur peut afficher un premier document. Le lecteur a encore besoin d’un chemin vers les autres références.",
      },
      {
        label: "Le lien contient une adresse",
        caption: "Un lien donne au navigateur l’adresse d’une autre ressource.",
        detail: "Le texte visible du lien et l’adresse qu’il désigne jouent deux rôles différents.",
      },
      {
        label: "Ouvrir la ressource",
        caption: "Le navigateur demande et affiche la ressource désignée, si elle est disponible.",
        detail:
          "La deuxième page peut provenir d’un autre serveur. On peut suivre un nouveau lien depuis cette page.",
      },
    ],
    limit:
      "Interface reconstruite pour la leçon. Les requêtes et les redirections réelles sont simplifiées.",
    source: {
      title: "CERN — World Wide Web at 35",
      url: "https://home.web.cern.ch/world-wide-web-35/",
    },
  },
  {
    canvasHeight: 230,
    id: "textEncoding",
    title: "Ce qui tient dans les données d’un SMS",
    paths: [
      "/communication-et-medias/telecommunications/reseaux-mobiles/pourquoi-un-sms-est-il-limite-a-160-caracteres",
    ],
    steps: [
      {
        label: "Partir du volume disponible",
        caption: "Les données utiles d’un SMS unique peuvent occuper 140 octets, soit 1 120 bits.",
        detail:
          "La bande zoome sur 32 bits de cette capacité. Chaque rectangle représente un bit et chaque bloc coloré montre un groupement.",
      },
      {
        label: "Utiliser l’alphabet GSM",
        caption: "Un caractère de base prend 7 bits et peut permettre d’en loger 160.",
        detail:
          "Dans ce calcul, les caractères occupent chacun une position de l’alphabet de base. Certains caractères GSM utilisent deux positions.",
      },
      {
        label: "Comparer avec UCS-2",
        caption: "À 16 bits par caractère simple, la même capacité donne 70 caractères.",
        detail:
          "Un en-tête de concaténation prend de la place si le texte est réparti sur plusieurs SMS. Les symboles et certains encodages peuvent encore changer le compte.",
      },
    ],
    limit:
      "Calcul pour un seul segment sans en-tête additionnel. Le mode d’encodage d’un message dépend des caractères effectivement envoyés.",
    source: {
      title: "ETSI — Spécification technique du SMS",
      url: "https://www.etsi.org/deliver/etsi_ts/123000_123099/123040/16.00.00_60/ts_123040v160000p.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "languageRuntime",
    title: "Trois repères du code source à la machine",
    paths: [
      "/micro-informatique-et-informatique/logiciel/programmation/les-langages-de-programmation-compiles-et-interpretes-une-distinction-fondamentale",
    ],
    steps: [
      {
        label: "Repérer les deux formes",
        caption: "Le texte source est destiné à être lu et écrit par des humains.",
        detail:
          "Le processeur exécute des instructions machine. Un système de traduction ou d’exécution fait le lien.",
      },
      {
        label: "Préparer des instructions natives",
        caption:
          "Une compilation à l’avance peut produire des instructions pour un processeur cible.",
        detail:
          "Le fichier obtenu peut être exécuté avec les dépendances et l’environnement adaptés à sa plateforme.",
      },
      {
        label: "Faire intervenir un moteur",
        caption: "Un environnement d’exécution peut interpréter une représentation intermédiaire.",
        detail:
          "CPython, par exemple, compile du code source en bytecode que son moteur exécute. Certains systèmes peuvent aussi compiler pendant l’exécution.",
      },
    ],
    limit:
      "Parcours simplifiés. La façon de compiler ou d’interpréter dépend de l’implémentation et parfois du contexte, même pour un seul langage.",
    source: {
      title: "Python — Glossaire de la documentation",
      url: "https://docs.python.org/3/glossary.html",
    },
  },
  {
    canvasHeight: 230,
    id: "memoryStorage",
    title: "Suivre un document entre le SSD et la RAM",
    paths: [
      "/micro-informatique-et-informatique/materiel/memoire-et-stockage/ram-stockage-ssd-evolution",
    ],
    steps: [
      {
        label: "Conserver le fichier",
        caption: "Le fichier reste sur le stockage quand l’ordinateur est éteint.",
        detail:
          "Le SSD est l’exemple de stockage non volatil illustré. Il conserve l’état qui lui a été enregistré.",
      },
      {
        label: "Ouvrir et modifier",
        caption: "L’application utilise la mémoire vive pour les données dont elle se sert.",
        detail:
          "Une modification peut rester dans la copie de travail. La mémoire vive ordinaire perd son contenu lorsque l’alimentation est coupée.",
      },
      {
        label: "Enregistrer",
        caption: "L’enregistrement écrit une version des modifications sur le support de stockage.",
        detail:
          "Une application peut le faire automatiquement ou à la demande. Le document enregistré et la copie de travail peuvent coexister.",
      },
    ],
    limit:
      "Chemin simplifié d’un fichier. La planche ne détaille ni les registres, ni les caches, ni les fichiers temporaires.",
    source: {
      title: "IBM — Primary storage vs. secondary storage",
      url: "https://www.ibm.com/think/topics/primary-vs-secondary-storage",
    },
  },
  {
    canvasHeight: 230,
    id: "graphicParallel",
    title: "Un même calcul sur plusieurs parties de l’image",
    paths: ["/micro-informatique-et-informatique/materiel/processeurs/cartes-graphiques"],
    steps: [
      {
        label: "Préparer les tuiles",
        caption: "Une image peut être découpée en zones de calcul.",
        detail:
          "Sur le dessin, une tuile est un morceau de la même image. L’exemple suppose une opération qui se prête au découpage.",
      },
      {
        label: "Faire une tuile à la fois",
        caption: "Un traitement séquentiel peut appliquer le calcul aux zones l’une après l’autre.",
        detail: "Cette vue donne une base de comparaison et représente un choix d’algorithme.",
      },
      {
        label: "Calculer en parallèle",
        caption:
          "Un GPU peut faire avancer plusieurs calculs similaires sur des zones différentes.",
        detail:
          "Un traitement favorable au parallélisme peut traiter beaucoup de données de cette façon. Les accès mémoire et les dépendances influencent le résultat.",
      },
    ],
    limit:
      "Exemple de principe. Des processeurs généralistes peuvent aussi calculer en parallèle. Aucune vitesse n’est comparée.",
    source: {
      title: "NVIDIA — CUDA Programming Model",
      url: "https://developer.nvidia.com/blog/?p=18697",
    },
  },
  {
    canvasHeight: 230,
    id: "taskSpecialization",
    title: "Fabriquer une épingle en partageant les gestes",
    paths: ["/sciences-humaines-et-sociales/economie/microeconomie/division-travail"],
    steps: [
      {
        label: "Enchaîner les gestes",
        caption: "Une seule personne peut assurer à la suite plusieurs opérations.",
        detail:
          "Étirer, couper et former sont les trois gestes retenus ici pour représenter une chaîne plus longue.",
      },
      {
        label: "Répartir les opérations",
        caption: "La spécialisation attribue un geste ou un groupe de gestes à chaque poste.",
        detail:
          "La répétition facilite l’apprentissage d’une opération. Réduire les changements d’outil peut aussi améliorer la cadence.",
      },
      {
        label: "Coordonner la production",
        caption: "Les postes doivent transmettre les pièces au bon rythme.",
        detail:
          "Un poste saturé peut limiter le débit de toute la chaîne. Des tâches répétitives et une coordination accrue font partie des compromis possibles.",
      },
    ],
    limit:
      "Illustration inspirée de l’exemple d’Adam Smith. Elle ne reconstitue pas une manufacture ni ses chiffres de production.",
    source: {
      title: "Adam Smith — La Richesse des nations, livre I, chapitre I",
      url: "https://files.libertyfund.org/files/220/Smith_0141-02_EBk_v6.0.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "missingFailures",
    title: "Retrouver les projets que les réussites cachent",
    paths: [
      "/sciences-humaines-et-sociales/psychologie/biais-cognitifs/pourquoi-ne-regarder-que-les-reussites-nous-trompe-t-il",
    ],
    steps: [
      {
        label: "Compter les départs",
        caption: "Douze projets commencent dans cet exemple fictif.",
        detail:
          "Le nombre de départs est le dénominateur nécessaire si l’on cherche la fréquence des réussites.",
      },
      {
        label: "Voir les seuls succès",
        caption: "Cinq projets sont visibles parce qu’ils ont réussi.",
        detail:
          "Avec cette sélection, tous les cas observés ont réussi. Ce que l’on voit dépend alors du résultat lui-même.",
      },
      {
        label: "Réintégrer les absents",
        caption: "Les sept autres projets complètent le groupe de départ.",
        detail:
          "Le résultat devient cinq réussites sur douze, et non cinq sur cinq. Pour étudier une cause, il faudrait aussi comparer d’autres caractéristiques.",
      },
    ],
    limit:
      "Effectifs fictifs. Le dessin illustre une sélection des cas et ne démontre aucune causalité.",
    source: {
      title: "Brown et al. — Survivorship Bias in Performance Studies",
      url: "https://terpconnect.umd.edu/~wermers/ftpsite/FAME/Brown_Goetzmann_Ibbotson_Ross.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "rumorChain",
    title: "Suivre ce qui change quand un message circule",
    paths: [
      "/sciences-humaines-et-sociales/sociologie/groupes-et-normes/pourquoi-une-rumeur-se-deforme-t-elle-en-passant-de-bouche-en-bouche",
    ],
    steps: [
      {
        label: "Le message initial",
        caption: "Dans cet exemple, le musée ferme plus tôt le samedi.",
        detail:
          "Le premier énoncé contient un jour et un changement d’horaire. Le dessin conserve exactement ces deux repères.",
      },
      {
        label: "La perte d’un détail",
        caption: "La personne suivante omet « plus tôt ».",
        detail:
          "La nouvelle phrase devient ambiguë et peut faire penser que le musée reste fermé toute la journée.",
      },
      {
        label: "L’amplification",
        caption: "Une nouvelle version parle de tout le week-end.",
        detail:
          "La durée s’étend alors au-delà du message d’origine. Consulter l’information publiée par le musée permettrait de vérifier le sens initial.",
      },
    ],
    limit:
      "Exemple fictif, sans personnes ou établissement réels. Les transmissions ne se déforment pas toujours dans le même sens.",
    source: {
      title: "American Psychological Association — Chain reproduction",
      url: "https://dictionary.apa.org/chain-reproduction",
    },
  },
] satisfies LessonDiagramSpec[];
