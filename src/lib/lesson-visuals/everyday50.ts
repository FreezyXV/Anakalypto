import type { LessonDiagramSpec } from "./registry";

export const EVERYDAY_DIAGRAMS = [
  {
    id: "pitchfork",
    title: "Un la de référence",
    steps: [
      {
        label: "Faire vibrer",
        caption: "Les branches du diapason vibrent après un choc.",
        detail:
          "Ce mouvement va et vient autour d’une position de repos et met l’air voisin en vibration.",
      },
      {
        label: "Compter les cycles",
        caption: "La fréquence du la de référence est de 440 hertz.",
        detail:
          "Un hertz correspond à un cycle par seconde, donc 440 Hz à 440 allers-retours complets par seconde.",
      },
      {
        label: "Comparer les sons",
        caption: "L’orchestre ajuste ses instruments à une hauteur commune.",
        detail:
          "Si les hauteurs sont proches mais différentes, leur superposition produit des battements.",
      },
    ],
    limit:
      "Deux traces agrandies. Le la de référence peut différer selon les ensembles et les époques.",
    canvasHeight: 230,
    paths: ["/arts-et-culture/arts-du-spectacle/musique/diapason-a440-norme-internationale"],
    source: {
      title: "NIST — Standard Musical Pitch",
      url: "https://nvlpubs.nist.gov/nistpubs/Legacy/LC/nbslettercircular591r1940.pdf",
    },
  },
  {
    id: "twelvepart",
    title: "Douze pas dans une octave",
    steps: [
      {
        label: "Doubler",
        caption: "Deux notes séparées d’une octave ont des fréquences dans un rapport de deux.",
        detail:
          "On retrouve le même nom de note une octave plus haut, avec une fréquence deux fois plus grande.",
      },
      {
        label: "Découper",
        caption: "Le tempérament égal divise l’octave en douze demi-tons de même rapport.",
        detail:
          "Le rapport entre deux notes voisines reste fixe, donc leur écart en hertz grandit dans l’aigu.",
      },
      {
        label: "Comparer les quintes",
        caption:
          "Une quinte tempérée comprend sept de ces demi-tons et vaut presque une quinte pure.",
        detail:
          "En répétant les quintes, le léger écart avec la quinte pure devient perceptible dans le calcul.",
      },
    ],
    limit:
      "Roue d’intervalles conceptuelle. La position sur le cercle code le nombre de demi-tons.",
    canvasHeight: 230,
    paths: ["/arts-et-culture/arts-du-spectacle/musique/gammes-et-temperament-egal"],
    source: {
      title: "Université UNSW — Gammes et tempéraments",
      url: "https://www.phys.unsw.edu.au/jw/tuning.html",
    },
  },
  {
    id: "audiogroove",
    title: "Du son au sillon et retour",
    steps: [
      {
        label: "Graver",
        caption: "Dans un phonographe, le son fait vibrer une membrane reliée à une pointe.",
        detail: "La pointe inscrit les variations dans la matière pendant que le cylindre tourne.",
      },
      {
        label: "Conserver",
        caption: "Une fois la gravure terminée, le sillon garde les traces du mouvement.",
        detail:
          "Son relief suit les vibrations. La matière stocke une forme, sans son audible au repos.",
      },
      {
        label: "Relire",
        caption: "À la lecture, le sillon fait vibrer la pointe et la membrane.",
        detail:
          "À la lecture, le sillon fait vibrer la pointe et la membrane. Le pavillon dirige le son recréé vers l’auditeur.",
      },
    ],
    limit:
      "Principe d’un phonographe acoustique. Le sillon est agrandi, les mouvements sont schématiques.",
    canvasHeight: 230,
    paths: ["/arts-et-culture/arts-du-spectacle/musique/histoire-de-lenregistrement-sonore"],
    source: {
      title: "Library of Congress — Histoire du phonographe à cylindre",
      url: "https://www.loc.gov/collections/edison-company-motion-pictures-and-sound-recordings/articles-and-essays/history-of-edison-sound-recordings/history-of-the-cylinder-phonograph/",
    },
  },
  {
    id: "syncsound",
    title: "Faire coïncider image et son",
    steps: [
      {
        label: "Deux supports",
        caption: "Un film et un disque peuvent démarrer ensemble.",
        detail:
          "Si l’un des supports prend du retard, la voix ne correspond plus au mouvement des lèvres.",
      },
      {
        label: "Retard",
        caption: "Un décalage se voit lorsqu’on compare le même événement sur les deux pistes.",
        detail:
          "Un décalage se voit lorsqu’on compare le même événement sur les deux pistes. Le dessin montre un bruit bref associé à une image précise.",
      },
      {
        label: "Sur la pellicule",
        caption: "Une piste sonore optique inscrite sur le film avance avec les images.",
        detail: "Le lecteur du projecteur transforme ses variations lumineuses en signal sonore.",
      },
    ],
    limit:
      "Le décalage géométrique entre les lecteurs d’image et de son est compensé dans le projecteur ; la coupe est simplifiée.",
    canvasHeight: 230,
    paths: [
      "/arts-et-culture/arts-visuels/photographie-et-cinema/comment-le-cinema-a-t-il-appris-a-parler",
    ],
    source: {
      title: "Encyclopædia Universalis — Cinéma parlant",
      url: "https://www.universalis.fr/encyclopedie/parlant-cinema-reperes-chronologiques/",
    },
  },
  {
    id: "manuscript",
    title: "De la peau à la page enluminée",
    steps: [
      {
        label: "Préparer la page",
        caption: "On prépare, découpe et règle le parchemin avant de le remplir.",
        detail: "Les lignes servent de guide et les espaces des images sont prévus à l’avance.",
      },
      {
        label: "Copier le texte",
        caption: "Le copiste écrit à la main en réservant l’emplacement de la grande initiale.",
        detail: "Le texte peut être terminé avant que l’enlumineur commence la décoration.",
      },
      {
        label: "Enluminer",
        caption: "L’enlumineur ajoute couleurs, motifs et parfois feuille d’or.",
        detail:
          "L’enlumineur ajoute couleurs, motifs et parfois feuille d’or. Une lettrine peut servir de repère au début d’une section.",
      },
    ],
    limit:
      "Page originale inspirée de procédés historiques. Les ateliers avaient des organisations et des matériaux variés.",
    canvasHeight: 230,
    paths: [
      "/arts-et-culture/litterature-et-ecriture/histoire-du-livre/comment-fabriquait-on-un-livre-enlumine-au-moyen-age",
    ],
    source: {
      title: "Bibliothèque nationale de France — Le livre à l’époque carolingienne",
      url: "https://multimedia-ext.bnf.fr/pdf/carolingiens2.pdf",
    },
  },
  {
    id: "capitals",
    title: "Trois ordres, trois silhouettes",
    steps: [
      {
        label: "Dorique",
        caption: "Le chapiteau dorique présente un coussin et une dalle carrée.",
        detail: "Dans l’ordre dorique grec, le fût repose généralement sans base distincte.",
      },
      {
        label: "Ionique",
        caption: "Les volutes enroulées distinguent le chapiteau ionique.",
        detail:
          "Les volutes enroulées distinguent le chapiteau ionique. La colonne ionique comporte généralement une base moulurée.",
      },
      {
        label: "Corinthien",
        caption: "Le chapiteau corinthien se reconnaît à ses feuilles d’acanthe stylisées.",
        detail:
          "L’ensemble va au-delà du chapiteau : les proportions et l’entablement participent aussi à l’ordre.",
      },
    ],
    limit:
      "Les profils isolent les signes distinctifs. Aucune proportion de monument particulier n’est reproduite.",
    canvasHeight: 230,
    paths: ["/arts-et-culture/patrimoine/architecture/ordres-architecturaux-grecs"],
    source: {
      title: "The Met — Les ordres de l’architecture grecque",
      url: "https://www.metmuseum.org/-/media/files/learn/for-educators/publications-for-educators/greek.pdf",
    },
  },
  {
    id: "preservation",
    title: "Limiter l’exposition à la lumière",
    steps: [
      {
        label: "Exposer",
        caption: "Chaque exposition ajoute une dose de lumière à l’œuvre.",
        detail: "Cette dose augmente avec l’intensité et la durée d’éclairage.",
      },
      {
        label: "Réduire",
        caption: "Un éclairage moindre réduit la dose reçue pendant la même durée.",
        detail: "La conservation préventive agit sur les conditions de présentation.",
      },
      {
        label: "Alterner",
        caption: "Une période en réserve à l’obscurité interrompt l’exposition.",
        detail:
          "Elle évite une dose supplémentaire et ne répare pas les altérations déjà présentes.",
      },
    ],
    limit:
      "Courbes qualitatives, sans recommandation de seuil. La sensibilité dépend des matériaux.",
    canvasHeight: 230,
    paths: [
      "/arts-et-culture/patrimoine/musees-et-conservation/conservation-preventive-et-restauration",
    ],
    source: {
      title: "Institut canadien de conservation — Lumière et altération",
      url: "https://www.canada.ca/en/conservation-institute/services/agents-deterioration/light.html",
    },
  },
  {
    id: "diglayers",
    title: "Fouiller avant le chantier",
    steps: [
      {
        label: "Sonder",
        caption: "Des tranchées de diagnostic révèlent une partie du sous-sol.",
        detail:
          "Elles permettent d’évaluer la présence et l’étendue des vestiges sans tout ouvrir.",
      },
      {
        label: "Relever",
        caption: "Lors d’une fouille, les couches et la position des objets sont enregistrées.",
        detail: "Le contexte d’un objet peut renseigner davantage que l’objet isolé.",
      },
      {
        label: "Conserver les traces",
        caption: "Les plans et les prélèvements documentent les vestiges étudiés.",
        detail: "Les résultats restent consultables après l’intervention sur le terrain.",
      },
    ],
    limit:
      "Coupe fictive. Le diagnostic peut mener à plusieurs décisions ; il ne déclenche pas systématiquement une fouille.",
    canvasHeight: 230,
    paths: [
      "/arts-et-culture/patrimoine/musees-et-conservation/pourquoi-fouille-t-on-avant-de-construire-une-route",
    ],
    source: {
      title: "Inrap — Enregistrer les vestiges",
      url: "https://multimedia.inrap.fr/atlas/canal-seine-nord-europe/methodes/methodologie-enregistrement-novatrice",
    },
  },
  {
    id: "ages",
    title: "Lire l’âge dans la largeur",
    steps: [
      {
        label: "Lire une tranche",
        caption: "Chaque rangée représente une tranche d’âge et sa largeur représente un effectif.",
        detail:
          "Chaque rangée représente une tranche d’âge et sa largeur représente un effectif. Deux côtés permettent une comparaison dans la même tranche.",
      },
      {
        label: "Base large",
        caption:
          "Une base plus large que les rangées centrales indique de nombreuses personnes jeunes.",
        detail:
          "Une base plus large que les rangées centrales indique de nombreuses personnes jeunes. Le dessin compare des effectifs au même instant.",
      },
      {
        label: "Repérer un creux",
        caption:
          "Un creux dans les rangées indique une génération moins nombreuse que ses voisines.",
        detail:
          "Les données de naissance, de migration ou de survie sont nécessaires pour l’expliquer.",
      },
    ],
    limit:
      "Effectifs inventés. Une seule pyramide ne permet pas d’identifier les causes d’un creux.",
    canvasHeight: 230,
    paths: [
      "/geographie-et-territoires/geographie-humaine/demographie/comment-lit-on-une-pyramide-des-ages",
    ],
    source: {
      title: "Insee — Démographie, France, portrait social",
      url: "https://www.insee.fr/fr/statistiques/8612506",
    },
  },
  {
    id: "demographic",
    title: "Quand natalité et mortalité s’écartent",
    steps: [
      {
        label: "Deux taux élevés",
        caption: "Les naissances et les décès sont nombreux dans le modèle initial.",
        detail: "L’écart entre leurs taux est faible, donc l’accroissement naturel l’est aussi.",
      },
      {
        label: "Les décès diminuent",
        caption: "Le taux de mortalité baisse avant celui des naissances.",
        detail:
          "L’écart se creuse : davantage de naissances que de décès accroissent la population.",
      },
      {
        label: "Les naissances diminuent",
        caption: "Le taux de natalité baisse à son tour et l’écart se resserre.",
        detail:
          "Un faible écart ne renseigne pas à lui seul sur les migrations ou l’effectif total.",
      },
    ],
    limit:
      "Modèle schématique, sans dates ni valeurs nationales. Les trajectoires réelles varient.",
    canvasHeight: 230,
    paths: [
      "/geographie-et-territoires/geographie-humaine/demographie/la-transition-demographique-et-ses-differentes-etapes",
    ],
    source: {
      title: "Insee — Définition du taux d’excédent naturel",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1335",
    },
  },
  {
    id: "cloudtypes",
    title: "Trois silhouettes dans le ciel",
    steps: [
      {
        label: "Cumulus",
        caption: "Le cumulus a souvent une base assez plate et des bourgeons arrondis.",
        detail: "Ses contours montrent une convection localisée, qui peut rester modeste.",
      },
      {
        label: "Cirrus",
        caption: "Le cirrus forme des filaments à haute altitude.",
        detail:
          "Le cirrus forme des filaments à haute altitude. Il est principalement composé de cristaux de glace.",
      },
      {
        label: "Cumulonimbus",
        caption: "Le cumulonimbus s’étend fortement en hauteur et peut s’étaler en enclume.",
        detail:
          "Le cumulonimbus s’étend fortement en hauteur et peut s’étaler en enclume. C’est le nuage associé aux orages.",
      },
    ],
    limit:
      "Relief et altitudes schématiques. La forme seule ne suffit pas à prévoir le temps local.",
    canvasHeight: 230,
    paths: [
      "/geographie-et-territoires/geographie-physique/climatologie/les-nuages-et-ce-qu-ils-annoncent",
    ],
    source: {
      title: "OMM — Atlas international des nuages",
      url: "https://cloudatlas.wmo.int/fr/home.html",
    },
  },
  {
    id: "timezone",
    title: "Une rotation, différentes heures",
    steps: [
      {
        label: "Midi solaire",
        caption: "La région tournée vers le Soleil se trouve du côté éclairé.",
        detail:
          "À un même instant, des longitudes différentes connaissent des heures solaires différentes.",
      },
      {
        label: "Tranches théoriques",
        caption: "Un découpage régulier de 360 degrés en 24 donne des tranches de 15 degrés.",
        detail: "Cette règle représente une heure moyenne de rotation par tranche.",
      },
      {
        label: "Heures civiles",
        caption: "Les États adoptent des zones horaires selon leurs besoins.",
        detail:
          "Une frontière peut dévier d’un méridien et certains décalages comprennent des fractions d’heure.",
      },
    ],
    limit:
      "Le globe est stylisé ; les traits du troisième état ne sont pas des frontières réelles.",
    canvasHeight: 230,
    paths: [
      "/geographie-et-territoires/geographie-physique/climatologie/pourquoi-la-terre-est-elle-decoupee-en-24-fuseaux-horaires",
    ],
    source: {
      title: "U.S. Naval Observatory — Temps solaire et heure civile",
      url: "https://aa.usno.navy.mil/faq/eqtime",
    },
  },
  {
    id: "rainshadow",
    title: "Pourquoi l’air ne donne pas la même pluie partout",
    steps: [
      {
        label: "Montée humide",
        caption: "Près de l’équateur, l’air chaud et humide monte dans la circulation de Hadley.",
        detail:
          "En montant, il se refroidit. Une partie de la vapeur se condense et des pluies peuvent se produire.",
      },
      {
        label: "Descente subtropicale",
        caption: "Plus loin de l’équateur, l’air redescend vers la surface.",
        detail:
          "Il se réchauffe en descendant, ce qui réduit son humidité relative et freine la formation des nuages.",
      },
      {
        label: "Retour en surface",
        caption: "Près du sol, une partie de l’air revient vers les basses latitudes.",
        detail:
          "Près du sol, une partie de l’air revient vers les basses latitudes. Cette branche ferme la cellule de circulation simplifiée.",
      },
    ],
    limit:
      "Une cellule idéalisée. Sa position varie selon les saisons ; reliefs et courants marins influencent aussi les pluies.",
    canvasHeight: 230,
    paths: [
      "/geographie-et-territoires/geographie-physique/hydrographie/pourquoi-il-pleut-ici-et-pas-la",
    ],
    source: {
      title: "NOAA — Circulations atmosphériques globales",
      url: "https://www.noaa.gov/jetstream/global/global-atmospheric-circulations",
    },
  },
  {
    id: "mountainfold",
    title: "Comprimer et épaissir les roches",
    steps: [
      {
        label: "Se rapprocher",
        caption: "Deux portions de lithosphère continentale convergent.",
        detail: "Les couches superficielles dessinent des repères avant la collision.",
      },
      {
        label: "Plisser et empiler",
        caption: "La compression plisse et décale les couches.",
        detail:
          "Des portions de croûte peuvent se chevaucher et former une racine crustale plus épaisse.",
      },
      {
        label: "Soulever et éroder",
        caption: "La chaîne grandit tandis que les rivières et les glaciers l’érodent.",
        detail:
          "Le relief observé dépend de ces deux évolutions, qui peuvent se produire en même temps.",
      },
    ],
    limit: "Coupe d’une collision continentale idéalisée. Amplitudes et vitesses non représentées.",
    canvasHeight: 230,
    paths: [
      "/geographie-et-territoires/geographie-physique/reliefs/formation-chaines-de-montagnes",
    ],
    source: {
      title: "USGS — Collision continentale et Himalaya",
      url: "https://pubs.usgs.gov/gip/dynamic/himalaya.html",
    },
  },
  {
    id: "contourmap",
    title: "Transformer un relief en courbes",
    steps: [
      {
        label: "Couper à niveau",
        caption: "Un plan horizontal coupe le relief à une altitude donnée.",
        detail: "La trace de l’intersection rassemble des points de même altitude.",
      },
      {
        label: "Projeter sur la carte",
        caption:
          "Les traces de plusieurs altitudes deviennent des courbes emboîtées sur une carte.",
        detail: "Le même écart d’altitude sépare deux courbes successives dans cet exemple.",
      },
      {
        label: "Comparer les pentes",
        caption: "À équidistance identique, des courbes serrées correspondent à une pente forte.",
        detail:
          "À équidistance identique, des courbes serrées correspondent à une pente forte. Des courbes espacées indiquent une pente plus douce.",
      },
    ],
    limit:
      "Relief fictif, surface et altitude non à l’échelle. Vérifier l’équidistance dans la légende d’une carte réelle.",
    canvasHeight: 230,
    paths: [
      "/geographie-et-territoires/geographie-physique/reliefs/lire-une-carte-topographique-principes-de-base",
    ],
    source: {
      title: "USGS — Lire les symboles topographiques",
      url: "https://www.usgs.gov/ngp-standards-and-specifications/us-topo-map-symbol-guide",
    },
  },
  {
    id: "mercator",
    title: "Pourquoi le Nord paraît plus grand",
    steps: [
      {
        label: "Comparer sur le globe",
        caption: "Sur un globe, l’Afrique couvre une surface bien plus grande que le Groenland.",
        detail: "Les deux silhouettes sont placées à des latitudes différentes.",
      },
      {
        label: "Déplier la grille",
        caption: "Sur une projection de Mercator, les parallèles s’écartent vers les pôles.",
        detail:
          "Les formes locales restent bien reconnaissables, tandis que les surfaces sont gonflées aux hautes latitudes.",
      },
      {
        label: "Comparer les surfaces",
        caption: "Une carte équivalente conserve les rapports d’aire.",
        detail: "La forme des continents peut alors être déformée pour respecter leurs surfaces.",
      },
    ],
    limit:
      "Silhouettes conceptuelles. La troisième vue compare des tailles relatives et ne nomme pas une projection précise.",
    canvasHeight: 230,
    paths: [
      "/geographie-et-territoires/geographie-physique/reliefs/pourquoi-le-groenland-parait-il-aussi-grand-que-l-afrique-sur-une-carte",
    ],
    source: {
      title: "NOAA — Cartographie marine et projections",
      url: "https://nauticalcharts.noaa.gov/learn/nautical-cartography.html",
    },
  },
  {
    id: "midnightsea",
    title: "Vivre quand la lumière du Soleil disparaît",
    steps: [
      {
        label: "Descendre",
        caption:
          "La lumière solaire devient insuffisante pour la photosynthèse loin sous la surface.",
        detail:
          "La lumière solaire devient insuffisante pour la photosynthèse loin sous la surface. L’éclairement décroît progressivement avec la profondeur.",
      },
      {
        label: "Produire de la lumière",
        caption:
          "Certaines espèces utilisent des signaux lumineux pour attirer une proie ou un partenaire.",
        detail:
          "Les lumières représentées proviennent de l’animal ou de microbes associés, selon l’espèce.",
      },
      {
        label: "Recevoir de la nourriture",
        caption:
          "Des particules qui tombent depuis les couches hautes alimentent une partie de la vie profonde.",
        detail: "D’autres écosystèmes profonds disposent de sources d’énergie chimique.",
      },
    ],
    limit: "Coupe imaginaire. Profondeurs, organismes et distances ne sont pas à l’échelle.",
    canvasHeight: 230,
    paths: [
      "/environnement-et-climat/biodiversite/forets-et-oceans/comment-survivent-les-animaux-dans-les-profondeurs-sombres-de-l-ocean",
    ],
    source: {
      title: "NOAA Ocean Exploration — La vie profonde",
      url: "https://oceanexplorer.noaa.gov/explainers/marine-life/",
    },
  },
  {
    id: "seacarbon",
    title: "Le carbone traverse la surface de l’océan",
    steps: [
      {
        label: "Échanger",
        caption: "Du CO₂ circule entre l’eau et l’air dans les deux sens.",
        detail: "Le bilan dépend notamment de la concentration de CO₂ et de la température locale.",
      },
      {
        label: "Transporter",
        caption: "Les courants et le brassage peuvent transférer du carbone dissous en profondeur.",
        detail:
          "Des organismes contribuent aussi au transport de carbone par les particules qui coulent.",
      },
      {
        label: "Modifier l’eau",
        caption:
          "L’absorption de CO₂ modifie l’équilibre chimique de l’eau et fait baisser son pH.",
        detail:
          "Moins d’ions carbonate sont alors disponibles pour certains organismes calcificateurs.",
      },
    ],
    limit:
      "Flux conceptuels. Leur intensité et leur direction nettes varient dans le temps et dans l’espace.",
    canvasHeight: 230,
    paths: [
      "/environnement-et-climat/biodiversite/forets-et-oceans/oceans-et-absorption-du-carbone",
    ],
    source: {
      title: "GIEC — Cycle du carbone et rétroactions",
      url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/",
    },
  },
  {
    id: "climatewindow",
    title: "Du temps d’un jour au climat",
    steps: [
      {
        label: "Aujourd’hui",
        caption: "Un point du graphique représente une observation météorologique.",
        detail:
          "Un point du graphique représente une observation météorologique. Une journée peut être plus froide que celle qui la précède.",
      },
      {
        label: "De nombreux jours",
        caption: "Même une longue série fluctue d’un jour, d’une saison ou d’une année à l’autre.",
        detail:
          "Pour comparer, on utilise des statistiques calculées sur des périodes et des lieux définis.",
      },
      {
        label: "Comparer les périodes",
        caption: "Deux distributions peuvent se déplacer et rester superposées.",
        detail:
          "Une observation froide reste possible dans une période dont la moyenne est plus élevée.",
      },
    ],
    limit:
      "Graphiques fictifs. Ils expliquent une méthode et ne mesurent pas un réchauffement local.",
    canvasHeight: 230,
    paths: [
      "/environnement-et-climat/changement-climatique/scenarios/pourquoi-la-meteo-et-le-climat-ne-sont-ils-pas-la-meme-chose",
    ],
    source: {
      title: "Météo-France — Météo et climat",
      url: "https://meteofrance.com/meteo-a-z/quelle-difference-entre-meteo-et-climat",
    },
  },
  {
    id: "floodspace",
    title: "Donner de la place à la crue",
    steps: [
      {
        label: "Dans son lit",
        caption: "Au débit ordinaire, la rivière occupe son lit habituel.",
        detail: "Les terrains bas voisins appartiennent à la plaine inondable.",
      },
      {
        label: "Déborder",
        caption: "Pendant une crue, l’eau peut s’étaler sur cette plaine.",
        detail: "Les zones occupées par des bâtiments deviennent des enjeux exposés.",
      },
      {
        label: "Préserver un espace",
        caption: "Un secteur libre d’obstacles permet à l’eau de s’épandre.",
        detail:
          "L’effet dépend du relief et du bassin versant. Le dessin distingue l’aléa de ce qui est exposé.",
      },
    ],
    limit:
      "Coupe conceptuelle ; elle ne permet ni de prédire un niveau d’eau ni de concevoir un ouvrage.",
    canvasHeight: 230,
    paths: [
      "/environnement-et-climat/changement-climatique/impacts-et-adaptation/proteger-inondations",
    ],
    source: {
      title: "Géorisques — Champ d’expansion des crues",
      url: "https://www.georisques.gouv.fr/glossaire/champ-dexpansion-des-crues",
    },
  },
  {
    id: "recyclesort",
    title: "Même forme, autre recyclabilité",
    steps: [
      {
        label: "Un seul matériau",
        caption:
          "Un produit composé principalement d’une seule matière est souvent plus facile à orienter.",
        detail: "Le tri doit encore reconnaître le matériau et disposer d’une filière adaptée.",
      },
      {
        label: "Des couches collées",
        caption: "Un objet de même forme peut réunir plusieurs couches solidaires.",
        detail:
          "La séparation devient plus difficile si les matériaux ne peuvent pas être isolés par le procédé disponible.",
      },
      {
        label: "Trier puis traiter",
        caption: "Le traitement n’est possible qu’après la collecte, le tri et la préparation.",
        detail: "Garder les matériaux séparables dès la conception peut faciliter cette chaîne.",
      },
    ],
    limit: "Emballages fictifs. La couleur des bacs et les filières disponibles dépendent du lieu.",
    canvasHeight: 230,
    paths: [
      "/environnement-et-climat/pollution-et-ressources/dechets-et-recyclage/dechets-et-limites-du-recyclage",
    ],
    source: {
      title: "Centre commun de recherche — Concevoir un emballage recyclable",
      url: "https://joint-research-centre.ec.europa.eu/scientific-activities/circular-resource-management/design-recycling-packaging_en",
    },
  },
  {
    id: "carbonbudget",
    title: "Les émissions s’additionnent",
    steps: [
      {
        label: "Cumuler",
        caption: "Chaque nouvelle émission de CO₂ augmente le total émis.",
        detail:
          "Dans le dessin, la hauteur actuelle du total dépend de toutes les périodes précédentes.",
      },
      {
        label: "Réduire le rythme",
        caption: "Si les émissions diminuent mais restent positives, le total continue à monter.",
        detail:
          "Si les émissions diminuent mais restent positives, le total continue à monter. Sa pente est simplement moins forte.",
      },
      {
        label: "Atteindre zéro net",
        caption:
          "Lorsque les émissions nettes de CO₂ deviennent nulles, leur cumul cesse d’augmenter.",
        detail:
          "Un budget carbone est une estimation du cumul compatible avec un objectif de température et une probabilité donnée.",
      },
    ],
    limit:
      "Courbes inventées. Les autres gaz à effet de serre et les incertitudes ne sont pas représentés.",
    canvasHeight: 230,
    paths: [
      "/environnement-et-climat/changement-climatique/scenarios/changement-climatique-budget-carbone",
    ],
    source: {
      title: "GIEC — Le budget carbone et le cumul de CO₂",
      url: "https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/",
    },
  },
  {
    id: "siliconpanel",
    title: "Du lingot au module solaire",
    steps: [
      {
        label: "Découper",
        caption: "Un lingot de silicium très pur est découpé en plaquettes fines.",
        detail: "Les traits du dessin montrent des coupes successives dans le même lingot.",
      },
      {
        label: "Former la cellule",
        caption: "Une jonction est formée dans la plaquette et les contacts collectent le courant.",
        detail: "Les lignes métalliques guident les charges vers les connexions de la cellule.",
      },
      {
        label: "Assembler",
        caption: "Plusieurs cellules sont reliées et protégées dans un module.",
        detail:
          "Le verre de protection laisse passer la lumière ; le module supporte les cellules et leurs connexions.",
      },
    ],
    limit:
      "Filière du silicium cristallin simplifiée. Dopage, traitements de surface et encapsulation sont résumés.",
    canvasHeight: 230,
    paths: [
      "/industries/industrie-lourde/chimie-industrielle/comment-fabrique-t-on-un-panneau-solaire-en-silicium",
    ],
    source: {
      title: "Département américain de l’énergie — Fabrication photovoltaïque",
      url: "https://www.energy.gov/cmei/systems/solar-photovoltaic-manufacturing-basics",
    },
  },
  {
    id: "anvilforge",
    title: "Donner une forme au métal",
    steps: [
      {
        label: "Chauffer",
        caption: "La chaleur facilite la déformation du métal à façonner.",
        detail:
          "La pièce chaude peut être travaillée avec moins d’effort qu’à froid, selon l’alliage.",
      },
      {
        label: "Frapper",
        caption: "Les coups de marteau déforment la pièce sur l’enclume.",
        detail:
          "Une partie de sa matière s’étale : la pièce s’amincit et s’allonge dans l’exemple.",
      },
      {
        label: "Comparer",
        caption: "Le profil obtenu se compare à la forme voulue.",
        detail:
          "Le profil obtenu se compare à la forme voulue. Le forgeron peut reprendre la forme par d’autres passes.",
      },
    ],
    limit:
      "Transformation de principe, sans température ni procédé de fabrication. Les volumes dessinés sont approximatifs.",
    canvasHeight: 230,
    paths: ["/industries/industrie-lourde/siderurgie/forge-travail-fer"],
    source: {
      title: "Canton Drop Forge — Histoire du forgeage",
      url: "https://cantondropforge.com/history-of-forging/",
    },
  },
  {
    id: "coldlogistics",
    title: "Surveiller le froid pendant le voyage",
    steps: [
      {
        label: "Charger",
        caption: "Le chargement relie l’entrepôt au transport réfrigéré.",
        detail:
          "Le froid doit être maintenu pendant la manutention aussi bien que pendant le trajet.",
      },
      {
        label: "Suivre",
        caption: "Un enregistreur conserve des mesures le long du trajet.",
        detail:
          "Un enregistreur conserve des mesures le long du trajet. Le tracé permet de repérer un écart invisible à l’arrivée.",
      },
      {
        label: "Interpréter",
        caption: "Une rupture laisse une trace même si le produit refroidit ensuite.",
        detail: "L’évaluation dépend de la durée, de la température et du produit concerné.",
      },
    ],
    limit:
      "Courbe fictive et sans température cible. Le schéma ne décide pas de la sécurité d’un aliment.",
    canvasHeight: 230,
    paths: [
      "/industries/industrie-manufacturiere/chaine-logistique/comment-la-chaine-du-froid-garde-t-elle-les-aliments-frais-pendant-leur-voyage",
    ],
    source: {
      title: "Anses — Conservation des aliments et chaîne du froid",
      url: "https://www.anses.fr/fr/content/comment-bien-conserver-ses-aliments-et-ne-pas-interrompre-la-chaine-du-froid",
    },
  },
  {
    id: "intermodal",
    title: "Le même caisson sur trois véhicules",
    steps: [
      {
        label: "Au port",
        caption: "La grue saisit les coins renforcés du conteneur pour le déplacer.",
        detail:
          "La grue saisit les coins renforcés du conteneur pour le déplacer. Le caisson standardisé est manutentionné comme une unité.",
      },
      {
        label: "Sur le rail",
        caption: "Le caisson se fixe au wagon sans ouvrir ses portes.",
        detail: "Le contenu reste dans la même boîte pendant le changement de mode.",
      },
      {
        label: "Sur la route",
        caption: "Un châssis routier adapté reçoit les mêmes points de fixation.",
        detail: "Le camion peut assurer le dernier trajet jusqu’au destinataire.",
      },
    ],
    limit: "Un seul itinéraire fictif. Véhicules et dimensions symboliques.",
    canvasHeight: 230,
    paths: [
      "/industries/industrie-manufacturiere/chaine-logistique/comment-une-simple-boite-en-acier-a-t-elle-change-la-facon-dont-voyagent-les-objets",
    ],
    source: {
      title: "Royal Museums Greenwich — Le conteneur maritime",
      url: "https://www.rmg.co.uk/stories/ocean/unexpected-history-shipping-container",
    },
  },
  {
    id: "caliper",
    title: "Mesurer puis comparer",
    steps: [
      {
        label: "Au zéro",
        caption: "Becs fermés, le zéro du vernier coïncide avec celui de la règle.",
        detail: "Fermer les becs ne remplace pas la comparaison à des étalons.",
      },
      {
        label: "Entre les becs",
        caption: "Les becs extérieurs encadrent la pièce mesurée.",
        detail:
          "Le zéro du vernier dépasse 12 mm. Son quatrième trait s’aligne avec un trait de la règle, ce qui ajoute 0,4 mm.",
      },
      {
        label: "Dans la tolérance",
        caption: "Les 12,4 mm mesurés se situent dans l’intervalle illustratif de 12,2 à 12,6 mm.",
        detail: "Une mesure proche d’une limite peut exiger de tenir compte de l’incertitude.",
      },
    ],
    limit: "Appareil et valeurs fictifs. Le dessin n’est pas un protocole d’étalonnage.",
    canvasHeight: 230,
    paths: ["/industries/industrie-manufacturiere/qualite-et-normalisation/mesurer-avec-precision"],
    source: {
      title: "Mitutoyo — Lire un pied à coulisse à vernier",
      url: "https://www.mitutoyo.com/metrology-insights/mitutoyo-calipers-digital-dial-and-vernier-calipers-precision-measurement-tools-for-manufacturing/",
    },
  },
  {
    id: "weldjoint",
    title: "Deux pièces, une zone soudée",
    steps: [
      {
        label: "Un joint",
        caption: "Deux pièces métalliques se rejoignent le long d’un joint.",
        detail:
          "Deux pièces métalliques se rejoignent le long d’un joint. Le dessin montre leur section avant soudage.",
      },
      {
        label: "Un bain local",
        caption:
          "Dans cet exemple de soudage par fusion, la chaleur fond une zone limitée au joint.",
        detail:
          "Dans cet exemple de soudage par fusion, la chaleur fond une zone limitée au joint. Le métal d’apport peut participer au bain, selon le procédé.",
      },
      {
        label: "Une liaison solide",
        caption: "En refroidissant, le bain se solidifie et forme le cordon.",
        detail: "La chaleur peut modifier les propriétés du métal de part et d’autre du cordon.",
      },
    ],
    limit: "Coupe schématique. Aucune consigne de soudage, de réglage ou de contrôle.",
    canvasHeight: 230,
    paths: ["/industries/materiaux-et-procedes/mise-en-forme/soudage"],
    source: {
      title: "TWI — Soudage par fusion",
      url: "https://www.twi-global.com/technical-knowledge/faqs/what-is-fusion-welding",
    },
  },
  {
    id: "dragwake",
    title: "Le sillage derrière une voiture",
    steps: [
      {
        label: "Écoulement",
        caption: "Des lignes suivent le mouvement de l’air autour du véhicule.",
        detail: "La forme et la surface présentée à l’air influencent la traînée.",
      },
      {
        label: "Sillage",
        caption: "L’écoulement peut se décoller et laisser une zone perturbée derrière la voiture.",
        detail: "Le sillage contribue à la différence de pression entre l’avant et l’arrière.",
      },
      {
        label: "Vitesse × 2",
        caption:
          "Si les autres paramètres restent fixes, doubler la vitesse multiplie approximativement par quatre la force de traînée.",
        detail: "La puissance nécessaire pour vaincre cette seule force augmente davantage encore.",
      },
    ],
    limit:
      "Modèle à densité de l’air et coefficient de traînée constants. Les filets ne proviennent pas d’une simulation.",
    canvasHeight: 230,
    paths: ["/automobile/industrie-automobile/production/aerodynamique-automobile-trainee"],
    source: {
      title: "Département américain de l’énergie — Efficacité des véhicules",
      url: "https://www.energy.gov/cmei/vehicles/fuel-efficiency",
    },
  },
  {
    id: "mildhybrid",
    title: "Un moteur électrique en renfort",
    steps: [
      {
        label: "Récupérer",
        caption: "En décélération, la machine électrique peut produire de l’électricité.",
        detail: "Une partie de l’énergie du mouvement rejoint la petite batterie.",
      },
      {
        label: "Assister",
        caption:
          "La batterie alimente la machine pour aider le moteur thermique lors d’une accélération.",
        detail: "Dans l’exemple à courroie, les deux machines sont couplées mécaniquement.",
      },
      {
        label: "Redémarrer",
        caption: "La machine électrique peut relancer le moteur thermique après un arrêt.",
        detail:
          "Cette architecture illustre un appoint et laisse la traction principale au moteur thermique.",
      },
    ],
    limit: "Architecture à courroie simplifiée. Les fonctions exactes dépendent du véhicule.",
    canvasHeight: 230,
    paths: [
      "/automobile/motorisations/motorisations-hybrides/comment-une-voiture-hybride-legere-aide-t-elle-son-moteur-a-essence",
    ],
    source: {
      title: "IFPEN — Hybridation légère 48 volts",
      url: "https://www.ifpenergiesnouvelles.com/brief/48-volts-system-mild-hybrid-significant-potential",
    },
  },
  {
    id: "exhaustclean",
    title: "Transformer les gaz, retenir la suie",
    steps: [
      {
        label: "Deux formes de pollution",
        caption: "Le flux peut contenir des gaz polluants et des particules de suie.",
        detail:
          "Les points représentent uniquement les particules ; les flèches représentent le flux gazeux.",
      },
      {
        label: "Transformer des gaz",
        caption: "Des réactions catalysées transforment certains gaz à la surface du catalyseur.",
        detail:
          "Le type de polluants traité dépend du catalyseur et des conditions de fonctionnement.",
      },
      {
        label: "Piéger les particules",
        caption:
          "Les gaz traversent les parois poreuses d’un filtre et une partie des particules est piégée.",
        detail: "La suie accumulée peut être oxydée lors d’une régénération adaptée.",
      },
    ],
    limit:
      "Fonctions comparées. Leur ordre et leur intégration varient selon le véhicule ; les deux ne traitent pas tous les polluants.",
    canvasHeight: 230,
    paths: ["/automobile/motorisations/thermique/filtre-particules-catalyseur"],
    source: {
      title: "U.S. EPA — Technologies de dépollution des moteurs diesel",
      url: "https://www.epa.gov/sites/default/files/2014-02/documents/3_2010_diesel_eng_alternativecontrol.pdf",
    },
  },
  {
    id: "tyregrip",
    title: "Le pneu et son empreinte",
    steps: [
      {
        label: "Toucher",
        caption: "Une petite zone du pneu porte la charge sur la chaussée.",
        detail:
          "La forme et la taille de l’empreinte varient avec la charge, la pression et la construction.",
      },
      {
        label: "Évacuer l’eau",
        caption: "Les rainures donnent des passages à l’eau sous le pneu.",
        detail: "La gomme peut conserver davantage de contact direct avec la chaussée.",
      },
      {
        label: "Film d’eau",
        caption: "Quand un film sépare le pneu de la route, l’adhérence chute fortement.",
        detail: "Ce risque dépend aussi de la vitesse, de la quantité d’eau et de l’état du pneu.",
      },
    ],
    limit:
      "Empreinte schématique. Elle ne donne aucune vitesse de sécurité ou distance de freinage.",
    canvasHeight: 230,
    paths: ["/automobile/securite-et-conduite/pneus-contact-route-adherence"],
    source: {
      title: "Touring Club Suisse — Pneus et adhérence",
      url: "https://www.tcs.ch/mam/Digital-Media/PDF/Booklets/brochure-pneus-d-039-ete-2025.pdf",
    },
  },
  {
    id: "shocks",
    title: "Le ressort et l’amortisseur sur une bosse",
    steps: [
      {
        label: "Au repos",
        caption: "Le ressort soutient la caisse, tandis que la roue repose sur la chaussée.",
        detail: "Le ressort et l’amortisseur relient les parties mobiles à la caisse.",
      },
      {
        label: "Sur la bosse",
        caption: "La roue monte et le ressort se comprime.",
        detail: "Une partie du mouvement est absorbée sans déplacement identique de la caisse.",
      },
      {
        label: "Après la bosse",
        caption: "L’amortisseur dissipe l’énergie des oscillations.",
        detail: "La roue revient vers sa position de repos et la caisse se stabilise.",
      },
    ],
    limit: "Modèle d’une seule roue. La géométrie et l’amplitude sont volontairement simplifiées.",
    canvasHeight: 230,
    paths: ["/automobile/securite-et-conduite/suspension-confort-tenue-de-route"],
    source: {
      title: "OQLF — Suspension MacPherson",
      url: "https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8400463/suspension-macpherson",
    },
  },
  {
    id: "airbagsequence",
    title: "Le coussin se place devant l’occupant",
    steps: [
      {
        label: "Détecter",
        caption: "Des capteurs mesurent une décélération brutale.",
        detail: "Le calculateur détermine si les conditions de déploiement sont réunies.",
      },
      {
        label: "Déployer",
        caption: "Un générateur remplit rapidement le coussin de gaz.",
        detail: "Le coussin s’interpose entre l’occupant et l’intérieur du véhicule.",
      },
      {
        label: "Amortir",
        caption: "La ceinture retient l’occupant tandis que le coussin se dégonfle au contact.",
        detail: "Les deux protections sont prévues pour agir ensemble dans le scénario représenté.",
      },
    ],
    limit:
      "Aucune donnée de déclenchement ou de fabrication. Les dispositifs diffèrent selon les véhicules et les chocs.",
    canvasHeight: 230,
    paths: [
      "/automobile/securite-et-conduite/securite-passive/comment-un-airbag-se-gonfle-t-il-plus-vite-qu-un-clin-d-oeil",
    ],
    source: {
      title: "IIHS — Coussins gonflables automobiles",
      url: "https://www.iihs.org/topics/airbags",
    },
  },
  {
    id: "crumplefront",
    title: "Déformer l’avant, garder un espace",
    steps: [
      {
        label: "Avant l’impact",
        caption: "La structure avant et l’habitacle ont des fonctions différentes.",
        detail:
          "Le longeron en ocre relie l’avant à la structure de l’habitacle. Il est conçu pour se déformer lors d’un choc frontal.",
      },
      {
        label: "Plier",
        caption: "Des éléments de la structure avant se déforment progressivement.",
        detail:
          "La déformation transforme une partie de l’énergie du mouvement et allonge le temps de décélération.",
      },
      {
        label: "Protéger l’espace",
        caption: "L’habitacle est conçu pour préserver autant que possible un espace de survie.",
        detail:
          "L’habitacle est conçu pour préserver autant que possible un espace de survie. Les ceintures et les airbags interviennent en complément.",
      },
    ],
    limit:
      "Véhicule fictif. Le résultat réel dépend de la masse, de la vitesse, de l’angle et de la compatibilité des structures.",
    canvasHeight: 230,
    paths: [
      "/automobile/securite-et-conduite/securite-passive/pourquoi-l-avant-d-une-voiture-est-il-fait-pour-s-ecraser",
    ],
    source: {
      title: "NZ Transport Agency — Zones de déformation",
      url: "https://www.nzta.govt.nz/vehicles/choosing-the-right-vehicle/features-that-protect-you/crush-zones-and-crumple-zones",
    },
  },
  {
    id: "selfheal",
    title: "Refermer une fissure avec des capsules",
    steps: [
      {
        label: "Des capsules intactes",
        caption: "De petites capsules sont dispersées dans la matière.",
        detail: "Elles contiennent dans cet exemple un agent isolé du matériau environnant.",
      },
      {
        label: "Ouvrir au passage",
        caption: "Une fissure peut rompre les capsules qu’elle traverse.",
        detail:
          "Une fissure peut rompre les capsules qu’elle traverse. Leur contenu se libère dans le volume de la fissure.",
      },
      {
        label: "Combler",
        caption: "Le produit peut durcir et limiter la propagation de certains dommages.",
        detail: "Une capsule déjà ouverte ne se recharge pas dans cet exemple.",
      },
    ],
    limit:
      "Mécanisme conceptuel limité aux capsules. Le remplissage ne garantit pas le retour de toutes les propriétés.",
    canvasHeight: 230,
    paths: [
      "/technologies-et-ingenierie/conception-et-fiabilite/choix-des-materiaux/comment-un-materiau-peut-il-se-reparer-tout-seul-quand-il-se-fissure",
    ],
    source: {
      title: "Étude par microtomographie — Activation des capsules dans une fissure",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6883056/",
    },
  },
  {
    id: "limecycle",
    title: "Du calcaire à la chaux qui durcit",
    steps: [
      {
        label: "Cuire",
        caption: "Le calcaire se transforme en chaux vive et libère du CO₂.",
        detail: "Cette étape industrielle correspond à la décomposition du carbonate de calcium.",
      },
      {
        label: "Hydrater",
        caption: "La chaux vive réagit avec l’eau pour former de la chaux éteinte.",
        detail:
          "La chaux vive réagit avec l’eau pour former de la chaux éteinte. Le produit a désormais une autre composition chimique.",
      },
      {
        label: "Reprendre du CO₂",
        caption: "La chaux aérienne capte du CO₂ de l’air et reforme un carbonate au durcissement.",
        detail: "Cette carbonatation peut progresser de la surface vers l’intérieur.",
      },
    ],
    limit:
      "Cycle chimique de la chaux aérienne. Aucune instruction de préparation ; la prise diffère pour une chaux hydraulique.",
    canvasHeight: 230,
    paths: ["/technologies-et-ingenierie/genie-civil/materiaux/chaux-liant-millenaire"],
    source: {
      title: "National Lime Association — Le cycle de la chaux",
      url: "https://www.lime.org/resource/how-lime-is-made/",
    },
  },
  {
    id: "bridgeinspection",
    title: "Regarder sous le tablier",
    steps: [
      {
        label: "Une voie pour l’eau",
        caption: "L’eau peut s’infiltrer au joint ou sous un dispositif d’évacuation endommagé.",
        detail: "La fuite est parfois plus visible sous le pont qu’au niveau de la chaussée.",
      },
      {
        label: "Lire les indices",
        caption: "Une trace humide ou rouillée indique où inspecter plus attentivement.",
        detail: "Un signe isolé ne permet pas de déterminer l’état de tout le pont.",
      },
      {
        label: "Suivre puis intervenir",
        caption: "Des relevés comparables montrent si un défaut évolue.",
        detail:
          "Une inspection spécialisée aide à décider si le suivi ou l’entretien doivent être renforcés.",
      },
    ],
    limit: "Pont fictif. Le dessin ne permet ni diagnostic structurel ni décision d’usage.",
    canvasHeight: 230,
    paths: [
      "/technologies-et-ingenierie/genie-civil/ouvrages-dart/ponts-et-entretien-des-ouvrages",
    ],
    source: {
      title: "Cerema — Surveillance et entretien des ouvrages d’art",
      url: "https://www.cerema.fr/fr/actualites/surveillance-entretien-courant-ouvrages-art-routiers-interet",
    },
  },
  {
    id: "lithomask",
    title: "Projeter un dessin minuscule",
    steps: [
      {
        label: "Coder dans un masque",
        caption: "Un masque porte le motif d’une couche du circuit.",
        detail:
          "Un masque porte le motif d’une couche du circuit. Le dessin du masque est plus grand que le motif projeté.",
      },
      {
        label: "Exposer",
        caption:
          "Le système optique projette un motif réduit sur une couche sensible à la lumière.",
        detail:
          "Dans cette coupe, des lentilles réduisent le motif. En ultraviolet extrême, ce rôle est assuré par des miroirs.",
      },
      {
        label: "Transférer",
        caption:
          "Une fois révélée, la couche sensible peut guider le transfert du motif dans la matière.",
        detail:
          "Dans cet exemple, le révélateur retire la résine exposée. La gravure enlève ensuite la matière dans les ouvertures.",
      },
    ],
    limit:
      "Schéma optique conceptuel, sans procédé ou dimensions de fabrication. Les faisceaux ne représentent pas une machine particulière.",
    canvasHeight: 230,
    paths: [
      "/technologies-et-ingenierie/nanotechnologies/applications/comment-construit-on-des-structures-a-l-echelle-du-milliardieme-de-metre",
    ],
    source: {
      title: "ASML — Les principes de la lithographie",
      url: "https://www.asml.com/en/technology/lithography-principles",
    },
  },
  {
    id: "actuatorarm",
    title: "Trois façons de mettre un bras en mouvement",
    steps: [
      {
        label: "Électrique",
        caption: "Un moteur convertit l’énergie électrique en rotation.",
        detail: "Une transmission peut adapter la vitesse et le couple à l’articulation.",
      },
      {
        label: "Hydraulique",
        caption: "Un liquide sous pression pousse un piston.",
        detail:
          "La tige peut déplacer directement une charge ou entraîner un bras autour d’un axe.",
      },
      {
        label: "Pneumatique",
        caption: "L’air comprimé peut déplacer un piston à son tour.",
        detail: "La compressibilité de l’air influence la raideur et la commande du mouvement.",
      },
    ],
    limit:
      "Exemples d’actionneurs distincts. Ni la puissance ni la précision ne sont universelles.",
    canvasHeight: 230,
    paths: ["/technologies-et-ingenierie/robotique/actionneurs/actionneurs-en-robotique"],
    source: {
      title: "Festo — Comparaison des actionneurs électriques et pneumatiques",
      url: "https://www.festo.com/us/en/e/blog/innovation/electric-vs-pneumatic-actuators-how-to-choose-the-right-solution-id_4087971",
    },
  },
  {
    id: "mobilemapping",
    title: "Se repérer tout en construisant la carte",
    steps: [
      {
        label: "Observer",
        caption: "Le robot mesure des distances jusqu’aux surfaces voisines.",
        detail: "Les capteurs n’observent pas tout l’environnement depuis une seule position.",
      },
      {
        label: "Avancer",
        caption: "Il combine des déplacements estimés et de nouvelles observations.",
        detail: "Une estimation faite à partir du mouvement seul peut progressivement dériver.",
      },
      {
        label: "Recouper",
        caption:
          "En reconnaissant une zone déjà visitée, il peut corriger la carte et sa position.",
        detail:
          "Ce recoupement illustre une fermeture de boucle dans une méthode de cartographie et localisation simultanées.",
      },
    ],
    limit: "Plan fictif en deux dimensions. Les algorithmes et capteurs varient selon les robots.",
    canvasHeight: 230,
    paths: ["/technologies-et-ingenierie/robotique/robots-mobiles/robots-mobiles-et-navigation"],
    source: {
      title: "Nav2 — Cartographie et localisation du robot",
      url: "https://docs.nav2.org/rolling/configuration_and_development/first_time_robot_setup_guide/sensors/mapping_localization/",
    },
  },
  {
    id: "rugbypass",
    title: "Avancer avec des passes vers l’arrière",
    steps: [
      {
        label: "Courir",
        caption: "Le porteur du ballon et ses partenaires progressent vers l’en-but adverse.",
        detail:
          "Le porteur du ballon et ses partenaires progressent vers l’en-but adverse. La flèche montre le sens de l’attaque.",
      },
      {
        label: "Passer à la main",
        caption: "Le geste de passe envoie le ballon sur le côté ou vers l’arrière.",
        detail:
          "On juge le geste des bras ; l’élan d’un joueur peut emporter le ballon par rapport au sol.",
      },
      {
        label: "Continuer l’attaque",
        caption: "Le nouveau porteur peut courir vers l’en-but à son tour.",
        detail: "La direction de la passe et celle de l’attaque ne sont pas obligées de coïncider.",
      },
    ],
    limit:
      "Vue de principe du rugby à XV. Placement défensif et jeu au pied ne sont pas détaillés.",
    canvasHeight: 230,
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-collectifs/pourquoi-au-rugby-fait-on-des-passes-vers-l-arriere",
    ],
    source: {
      title: "World Rugby — Règle 11, passe en avant",
      url: "https://passport.world.rugby/laws-of-the-game/laws-by-number/11-knock-forward-or-throw-forward/",
    },
  },
  {
    id: "goalball",
    title: "Repérer un ballon qu’on ne voit pas",
    steps: [
      {
        label: "Se placer",
        caption: "Les lignes en relief aident les joueurs à se situer sur le terrain.",
        detail:
          "Les joueurs portent un masque opaque pour jouer dans les mêmes conditions visuelles.",
      },
      {
        label: "Écouter",
        caption: "Le ballon contient des grelots qui signalent sa trajectoire.",
        detail: "Le silence autour du jeu aide à distinguer ces repères sonores.",
      },
      {
        label: "Couvrir le but",
        caption: "Trois défenseurs peuvent s’étendre latéralement pour bloquer le ballon.",
        detail:
          "Trois défenseurs peuvent s’étendre latéralement pour bloquer le ballon. La défense coordonne trois zones devant le but.",
      },
    ],
    limit:
      "Terrain, joueurs et sons stylisés. Le dessin ne détaille pas les règles de faute ou de lancer.",
    canvasHeight: 230,
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-et-handicap/comment-joue-t-on-au-goalball-sans-voir-le-ballon",
    ],
    source: {
      title: "IBSA — Présentation du goalball",
      url: "https://ibsasport.org/sports/goalball/about/overview/",
    },
  },
  {
    id: "wheelchaircourt",
    title: "Deux poussées avant de rejouer le ballon",
    steps: [
      {
        label: "Tenir et avancer",
        caption: "Un joueur peut avancer en tenant le ballon sur ses genoux ou en main.",
        detail: "Le compteur distingue les poussées des roues des rebonds du ballon.",
      },
      {
        label: "Deux poussées",
        caption: "Deux poussées consécutives avec le ballon tenu sont autorisées.",
        detail: "Une troisième poussée sans jouer le ballon constitue une violation.",
      },
      {
        label: "Faire rebondir",
        caption: "Le joueur peut dribbler, passer ou tirer après ces poussées.",
        detail: "Après un dribble, il peut recommencer une nouvelle séquence de poussées.",
      },
    ],
    limit:
      "Règle représentée avec un seul joueur. Les pivots et autres situations sont précisés par le règlement.",
    canvasHeight: 230,
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-et-handicap/comment-joue-t-on-au-basket-en-fauteuil-roulant",
    ],
    source: {
      title: "IWBF — Règles du basket en fauteuil",
      url: "https://www.iwbf.org/our-sport/rules",
    },
  },
  {
    id: "crawl",
    title: "Un bras propulse pendant que l’autre revient",
    steps: [
      {
        label: "Prendre appui",
        caption: "Le bras immergé déplace de l’eau vers l’arrière.",
        detail: "L’effort exercé sur l’eau contribue à faire avancer le nageur.",
      },
      {
        label: "Revenir par l’air",
        caption: "L’autre bras revient vers l’avant au-dessus de la surface.",
        detail: "Il peut se replacer sans rencontrer la même résistance que sous l’eau.",
      },
      {
        label: "Alterner",
        caption: "Les bras se relaient, avec un roulis du corps et l’aide des jambes.",
        detail: "Cette coordination limite les interruptions de propulsion dans l’exemple.",
      },
    ],
    limit:
      "Positions stylisées et temps non mesurés. Le dessin explique une coordination et ne prescrit pas de technique.",
    canvasHeight: 230,
    paths: [
      "/sport-et-sciences-du-mouvement/disciplines-sportives/sports-individuels/pourquoi-le-crawl-est-il-la-nage-la-plus-rapide",
    ],
    source: {
      title: "Institut allemand des sciences de l’entraînement — Biomécanique du crawl",
      url: "https://lida.sport-iat.de/ta/Record/4085075?lng=en",
    },
  },
  {
    id: "sweatcool",
    title: "La sueur refroidit en s’évaporant",
    steps: [
      {
        label: "Une goutte sur la peau",
        caption: "L’effort produit de la chaleur et les glandes sudoripares libèrent de la sueur.",
        detail: "Le liquide présent sur la peau représente une réserve d’eau à évaporer.",
      },
      {
        label: "Passer en vapeur",
        caption: "L’évaporation consomme de l’énergie et retire de la chaleur à la peau.",
        detail: "La goutte devient plus petite à mesure que des molécules d’eau rejoignent l’air.",
      },
      {
        label: "Quand l’air est humide",
        caption: "Un air très humide freine l’évaporation de la sueur.",
        detail: "Deux peaux aussi mouillées peuvent perdre des quantités de chaleur différentes.",
      },
    ],
    limit: "Flux schématiques, sans estimation de risque individuel ni conseil médical.",
    canvasHeight: 230,
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/energetique-musculaire/pourquoi-transpire-t-on-autant-quand-on-fait-du-sport-sous-la-chaleur",
    ],
    source: {
      title: "La Revue du Praticien — Chaleur et sport",
      url: "https://www.larevuedupraticien.fr/article/chaleur-et-sport-comment-limiter-les-risques",
    },
  },
  {
    id: "geoloop",
    title: "Trois profondeurs, trois usages",
    steps: [
      {
        label: "Sous une maison",
        caption: "Une boucle proche du sol fournit de la chaleur à une pompe à chaleur.",
        detail: "Le système élève son niveau de température pour le chauffage du bâtiment.",
      },
      {
        label: "Pour un quartier",
        caption: "Un réservoir plus profond peut alimenter un réseau de chaleur.",
        detail: "Un échangeur sépare l’eau du sous-sol de l’eau du réseau au-dessus.",
      },
      {
        label: "Pour produire du courant",
        caption:
          "Dans certains sites, une source plus chaude alimente un groupe qui transforme la chaleur en électricité.",
        detail:
          "La vapeur ou un fluide de travail peut entraîner une turbine couplée à une génératrice.",
      },
    ],
    limit:
      "Profondeurs conceptuelles et non comparables d’un site à l’autre. Le rendement et la ressource dépendent du sous-sol.",
    canvasHeight: 230,
    paths: ["/energie/energies-renouvelables/geothermie-chaleur-de-la-terre"],
    source: {
      title: "Département américain de l’énergie — Principes de la géothermie",
      url: "https://www.energy.gov/hgeo/geothermal/geothermal-basics",
    },
  },
  {
    id: "offgridsolar",
    title: "Partager l’énergie du soleil entre jour et nuit",
    steps: [
      {
        label: "Produire",
        caption:
          "En journée, les panneaux fournissent de l’électricité lorsque le soleil les éclaire.",
        detail:
          "En journée, les panneaux fournissent de l’électricité lorsque le soleil les éclaire. Une partie peut alimenter les besoins immédiats.",
      },
      {
        label: "Mettre de côté",
        caption: "Quand la production dépasse la demande, une batterie peut recevoir de l’énergie.",
        detail:
          "Un régulateur adapte la charge ; un onduleur fournit le courant alternatif demandé par certains appareils.",
      },
      {
        label: "Restituer",
        caption: "Sans soleil, la batterie peut fournir une partie de l’énergie stockée.",
        detail: "L’autonomie dépend de la capacité utile, de l’ensoleillement et des usages.",
      },
    ],
    limit:
      "Bilan de principe, sans câblage ni dimensionnement. Les pertes et les protections sont omises.",
    canvasHeight: 230,
    paths: ["/energie/energies-renouvelables/solaire/installation-solaire-autonome"],
    source: {
      title: "Centre commun de recherche — Production solaire et batteries",
      url: "https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en",
    },
  },
  {
    id: "sodiumcell",
    title: "Le sodium se déplace entre deux électrodes",
    steps: [
      {
        label: "Séparer",
        caption: "Les électrodes sont séparées par un milieu qui laisse passer des ions.",
        detail:
          "Les électrodes sont séparées par un milieu qui laisse passer des ions. Les électrons utilisent le circuit externe.",
      },
      {
        label: "Charger",
        caption:
          "Une alimentation fait migrer les ions sodium vers l’électrode négative dans l’exemple.",
        detail: "Ils sont stockés dans ou près du matériau de cette électrode.",
      },
      {
        label: "Décharger",
        caption:
          "Les ions rejoignent l’électrode positive pendant que les électrons alimentent la charge externe.",
        detail:
          "C’est le retour du processus de charge, au travers de parcours différents pour ions et électrons.",
      },
    ],
    limit:
      "Cellule schématique. Le sel de cuisine brut ne constitue pas la matière active d’une cellule.",
    canvasHeight: 230,
    paths: ["/energie/reseaux-et-stockage/batteries/batteries-sodium-ion"],
    source: {
      title: "Agence internationale de l’énergie — Batteries pour véhicules",
      url: "https://www.iea.org/reports/global-ev-outlook-2026/electric-vehicle-batteries",
    },
  },
  {
    id: "backgroundrad",
    title: "Trois chemins de l’exposition naturelle",
    steps: [
      {
        label: "Depuis le ciel",
        caption: "Des rayons cosmiques et leurs produits atteignent l’atmosphère et le sol.",
        detail: "L’exposition d’origine cosmique varie avec l’altitude et le lieu.",
      },
      {
        label: "Depuis le sol",
        caption:
          "La désintégration d’éléments présents dans certaines roches libère notamment du radon.",
        detail:
          "La désintégration d’éléments présents dans certaines roches libère notamment du radon. Ce gaz peut pénétrer dans un bâtiment et y être inhalé.",
      },
      {
        label: "Dans le corps",
        caption:
          "Des radionucléides naturels, comme le potassium-40, sont présents en faible quantité en nous.",
        detail:
          "Le dessin situe cette source interne sans supposer la même importance pour chaque origine.",
      },
    ],
    limit:
      "Flèches qualitatives. Les doses et la part de chaque source varient ; aucune estimation individuelle.",
    canvasHeight: 230,
    paths: [
      "/energie/energies-fossiles-et-nucleaire/nucleaire/pourquoi-y-a-t-il-de-la-radioactivite-naturelle-tout-autour-de-nous",
    ],
    source: {
      title: "UNSCEAR — Sources naturelles d’exposition",
      url: "https://www.unscear.org/unscear/en/publications/2024_2.html",
    },
  },
] satisfies LessonDiagramSpec[];
