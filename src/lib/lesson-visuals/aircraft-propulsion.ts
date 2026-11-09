import type { LessonDiagramSpec } from "./registry";
export const AIRCRAFT_PROPULSION_DIAGRAMS: readonly LessonDiagramSpec[] = [
  {
    id: "hydrogenair",
    title: "Stocker l’hydrogène puis choisir une chaîne de propulsion",
    paths: [
      "/aeronautique/aviation-civile/decarbonation/avion-a-hydrogene-etat-des-projets",
      "/aeronautique/propulsion/propulsion-electrique-aeronautique/que-rejette-un-avion-a-hydrogene-et-ou-loge-t-on-le-carburant",
    ],
    steps: [
      {
        label: "Réservoir isolé",
        caption: "L’hydrogène liquide nécessite un réservoir cryogénique isolé.",
        detail:
          "Le volume et l’isolation compliquent son intégration dans l’avion. La température d’environ −253 °C est un ordre de grandeur près de la pression atmosphérique, pas une consigne universelle de stockage.",
      },
      {
        label: "Combustion",
        caption: "Une turbine peut brûler l’hydrogène avec l’air.",
        detail:
          "L’hydrogène n’apporte pas de carbone, mais la combustion dans l’air peut former des oxydes d’azote. L’eau émise et les effets en altitude doivent aussi être considérés : absence de CO₂ à l’échappement ne signifie pas impact climatique nul.",
      },
      {
        label: "Pile et moteur",
        caption: "Une pile transforme hydrogène et oxygène en électricité pour un moteur.",
        detail:
          "Le chemin vert représente l’énergie électrique vers le moteur, qui entraîne une hélice. La pile produit aussi de l’eau et de la chaleur ; le bilan global dépend notamment de la fabrication et de la distribution de l’hydrogène.",
      },
    ],
    limit:
      "Chaînes fonctionnelles, sans rendement ni volume comparatif chiffré. Réservoir, isolation et composants sont agrandis ; la figure ne décrit ni un avion certifié ni l’ensemble du circuit cryogénique.",
    source: {
      title: "Commission européenne / EAFO — Hydrogen aircraft",
      url: "https://alternative-fuels-observatory.ec.europa.eu/transport-mode/aviation/alternative-fuelled-aircrafts",
    },
  },
  {
    id: "zeroe",
    title: "Trois silhouettes conceptuelles dévoilées en 2020",
    paths: [
      "/aeronautique/aviation-civile/decarbonation/les-concepts-d-avion-a-hydrogene-d-airbus",
    ],
    steps: [
      {
        label: "Turbosoufflantes",
        caption: "Le concept à turbosoufflantes de 2020 gardait une silhouette classique.",
        detail:
          "La zone bleue derrière la cabine représente le principe de stockage d’hydrogène envisagé à l’arrière. Les nacelles sous les ailes distinguent cette proposition, sans reproduire ses dimensions industrielles.",
      },
      {
        label: "Turbopropulseurs",
        caption: "Le deuxième concept de 2020 utilisait des hélices et des turbines.",
        detail:
          "La silhouette met en évidence les deux hélices et une aile haute. Le dessin évoque une proposition de recherche, pas un appareil commercial déjà certifié ou une date de livraison.",
      },
      {
        label: "Aile intégrée",
        caption: "Le troisième concept de 2020 fusionnait davantage corps et ailes.",
        detail:
          "Le corps plus large ouvrait différentes possibilités de cabine et de stockage. Les pointillés figurent seulement un volume disponible ; ils ne fixent pas un emplacement technique définitif des réservoirs.",
      },
    ],
    limit:
      "Interprétations graphiques des trois concepts historiques de septembre 2020, sans logo, plan coté ni calendrier. Le programme a évolué depuis : ces formes ne sont pas présentées comme le choix actuel ou une mise en service garantie.",
    source: {
      title: "Airbus — Three ZEROe concepts, 21 septembre 2020",
      url: "https://www.airbus.com/en/newsroom/press-releases/2020-09-airbus-reveals-new-zero-emission-concept-aircraft",
    },
  },
  {
    id: "electricair",
    title: "Énergie électrique, masse embarquée et hybridation",
    paths: [
      "/aeronautique/propulsion/propulsion-electrique-aeronautique/propulsion-electrique-hybride-aeronautique",
    ],
    steps: [
      {
        label: "Batterie et moteur",
        caption: "La batterie fournit de l’énergie à un moteur qui entraîne l’hélice.",
        detail:
          "La flèche verte est un transfert d’énergie, pas un circuit électrique complet. Convertisseur, refroidissement et protections sont nécessaires dans un système réel, mais ne sont pas tous dessinés ici.",
      },
      {
        label: "Énergie consommée",
        caption: "Une batterie déchargée garde pratiquement toute sa masse.",
        detail:
          "La comparaison montre la même enveloppe et les mêmes cellules, avec une charge différente. Contrairement à un carburant brûlé et rejeté, le contenu matériel de la batterie reste largement à bord.",
      },
      {
        label: "Architecture hybride",
        caption: "Un générateur et une batterie peuvent alimenter une chaîne électrique.",
        detail:
          "Cette vue choisit un hybride série : un moteur thermique entraîne un générateur ; le moteur électrique entraîne l’hélice. Il existe d’autres architectures, notamment avec entraînement mécanique direct.",
      },
    ],
    limit:
      "Schéma énergétique générique, sans comparaison de masses pour un vol réel, capacité de batterie ni rendement annoncé. Le niveau coloré est un état de charge symbolique ; les chaînes de conversion et leurs pertes sont simplifiées.",
    source: {
      title: "NASA — Electrified aircraft configurations",
      url: "https://www.nasa.gov/eap-aircraft-concepts/aircraft-configurations/",
    },
  },
  {
    id: "aeroengine",
    title: "Des cylindres à l’hélice",
    paths: [
      "/aeronautique/propulsion/moteurs-a-piston/fonctionnement-moteurs-a-piston-aeronautiques",
    ],
    steps: [
      {
        label: "Cylindres opposés",
        caption: "Un moteur à plat répartit ses cylindres de chaque côté du carter.",
        detail:
          "L’exemple représente quatre cylindres horizontalement opposés. D’autres nombres de cylindres et d’autres architectures existent ; ce dessin n’affirme pas que tous les avions à pistons sont identiques.",
      },
      {
        label: "Piston et vilebrequin",
        caption: "La pression des gaz pousse un piston relié au vilebrequin.",
        detail:
          "La bielle transforme le mouvement alternatif du piston en rotation avec le vilebrequin. Cette coupe montre un instant du temps moteur d’un cylindre à allumage commandé, pas les quatre temps complets.",
      },
      {
        label: "Entraîner l’hélice",
        caption: "La rotation du moteur entraîne une hélice qui agit sur l’air.",
        detail:
          "L’hélice est une surface portante tournante ; elle accélère de l’air vers l’arrière. La transmission peut être directe ou comporter un réducteur selon l’appareil et le moteur.",
      },
    ],
    limit:
      "Architecture à plat vue de dessus, puis coupe de cylindre et chaîne de transmission dans des vues distinctes. Pièces schématiques sans dimensions de fabrication ; le cycle complet est expliqué dans le texte de la leçon.",
    source: {
      title: "FAA — Pilot’s Handbook, chapitre 7",
      url: "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf",
    },
  },
  {
    id: "saf",
    title: "Trois familles de matières premières, un carburant à qualifier",
    paths: ["/aeronautique/aviation-civile/decarbonation/carburants-aviation-durables-saf"],
    steps: [
      {
        label: "Huiles et graisses",
        caption:
          "Des huiles et graisses résiduelles peuvent être transformées en composants de carburant.",
        detail:
          "L’exemple évoque la filière HEFA : la matière première doit subir des transformations chimiques et un traitement. Il ne suffit pas de filtrer une huile de cuisine pour l’utiliser dans un réacteur.",
      },
      {
        label: "Résidus de biomasse",
        caption: "Des résidus agricoles ou forestiers peuvent alimenter d’autres filières.",
        detail:
          "La conversion peut passer par différents intermédiaires selon le procédé. Le dessin regroupe ces transformations dans une installation générique ; la ressource et sa provenance doivent être évaluées.",
      },
      {
        label: "Carburant de synthèse",
        caption: "Du CO₂ capté et de l’hydrogène peuvent servir à synthétiser des hydrocarbures.",
        detail:
          "Cette voie consomme de l’énergie. La compatibilité, les conditions de mélange et la durabilité dépendent de la filière qualifiée ; à la combustion, ces carburants émettent toujours du CO₂.",
      },
    ],
    limit:
      "Trois familles illustratives, ni liste exhaustive ni bilan de cycle de vie. Aucun pourcentage de réduction climatique ou taux de mélange universel ; qualification du carburant et critères de durabilité restent nécessaires.",
    source: {
      title: "EASA — Sustainable aviation fuel pathways",
      url: "https://www.easa.europa.eu/en/domains/environment/eaer/sustainable-aviation-fuels/what-are-sustainable-aviation-fuels",
    },
  },
  {
    id: "landingbrakes",
    title: "Trois contributions au ralentissement après le toucher",
    paths: [
      "/aeronautique/propulsion/turboreacteurs/comment-un-avion-de-ligne-freine-t-il-apres-l-atterrissage",
    ],
    steps: [
      {
        label: "Freins des roues",
        caption: "Les freins dissipent de l’énergie et les pneus transmettent l’effort au sol.",
        detail:
          "Le zoom distingue disque, étrier et pneu. L’effort de la piste sur la roue s’oppose au mouvement de l’avion ; il dépend notamment de l’adhérence et du chargement sur les roues.",
      },
      {
        label: "Aérofreins au sol",
        caption: "Les spoilers augmentent la traînée et réduisent la portance.",
        detail:
          "Les panneaux relevés sur l’aile sont distincts des volets. En diminuant la portance résiduelle, ils contribuent aussi à charger les roues et à rendre le freinage de roue efficace.",
      },
      {
        label: "Inverseur de poussée",
        caption: "Un inverseur peut détourner une partie du flux vers l’avant et les côtés.",
        detail:
          "La coupe choisit un inverseur à grilles sur le flux secondaire d’une turbosoufflante. Le flux du cœur reste vers l’arrière ; la réaction du flux dévié contribue au ralentissement de l’avion.",
      },
    ],
    limit:
      "Contributions présentées séparément, pas une séquence de commandes. Architecture d’inverseur particulière ; aucun angle, seuil de vitesse, distance d’arrêt ou règle d’emploi valable pour tous les avions.",
    source: {
      title: "Airbus Safety First — Forces de décélération au sol",
      url: "https://safetyfirst.airbus.com/using-aircraft-as-a-sensor-on-contaminated-runways/",
    },
  },
  {
    id: "magnetos",
    title: "Deux voies d’allumage pour un même cylindre",
    paths: [
      "/aeronautique/propulsion/moteurs-a-piston/pourquoi-le-moteur-d-un-petit-avion-a-t-il-deux-allumages",
    ],
    steps: [
      {
        label: "Deux voies actives",
        caption: "Deux magnétos alimentent deux bougies dans chaque cylindre.",
        detail:
          "Le dessin montre un seul cylindre pour rendre les deux chemins visibles. Les magnétos d’un système traditionnel sont entraînées par le moteur et produisent l’énergie de l’allumage indépendamment de la batterie de bord.",
      },
      {
        label: "Voie A indisponible",
        caption: "Dans cet exemple, la voie B continue de fournir l’étincelle.",
        detail:
          "La croix est sur la magnéto A : sa liaison devient grise, tandis que la bougie B reste active. La redondance peut permettre la poursuite de la combustion, avec des performances qui peuvent changer.",
      },
      {
        label: "Voie B indisponible",
        caption: "Dans la situation inverse, la voie A reste active.",
        detail:
          "La comparaison illustre une panne simple d’une voie, pas toutes les pannes du moteur. Les deux allumages partagent le même moteur ; une indépendance électrique n’exclut pas toute cause commune.",
      },
    ],
    limit:
      "Chaînes fonctionnelles d’un allumage traditionnel, sans retour électrique, ordre de mise à feu ni schéma de maintenance. Les deux pannes montrées sont des alternatives ; elles ne s’enchaînent pas pour supprimer les deux voies.",
    source: {
      title: "FAA — Pilot’s Handbook, Ignition System",
      url: "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf",
    },
  },
  {
    id: "scooper",
    title: "L’eau entre par des écopes sous la coque",
    paths: [
      "/aeronautique/propulsion/turbopropulseurs/comment-un-avion-bombardier-d-eau-remplit-il-ses-reservoirs-sans-s-arreter",
    ],
    steps: [
      {
        label: "Coque sur l’eau",
        caption: "L’amphibie glisse sur l’eau pour effectuer un écopage.",
        detail:
          "La silhouette présente une aile haute et deux turbopropulseurs. Cette phase se déroule au contact de l’eau ; le dessin ne représente pas un simple survol sans contact.",
      },
      {
        label: "Écopes immergées",
        caption: "L’avancement de la coque permet de faire entrer l’eau dans les écopes.",
        detail:
          "Dans le repère de l’avion, l’eau arrive face aux ouvertures et remonte par des conduits vers les soutes. La coupe montre un trajet fonctionnel agrandi ; le détail des compartiments dépend de l’appareil.",
      },
      {
        label: "Charge embarquée",
        caption: "Après l’écopage, l’eau recueillie reste dans les soutes pour le transport.",
        detail:
          "L’entrée est refermée et la silhouette s’éloigne de la surface. La charge doit rester compatible avec l’appareil et les conditions d’utilisation ; aucune capacité ou performance n’est déduite de la taille du dessin.",
      },
    ],
    limit:
      "Principe d’un amphibie écopeur inspiré du CL-415, sans plan de soutes ou conduite du vol. Écopes et tuyaux agrandis, réservoirs schématiques ; pas de vitesse, durée, profondeur ou choix de plan d’eau opérationnel.",
    source: {
      title: "USDA Forest Service — Amphibious water scooper aircraft",
      url: "https://www.fs.usda.gov/sites/default/files/media_wysiwyg/amphibious_water_scooper_aircraft_operations_plan_final_2016-_041316.pdf",
    },
  },
];
