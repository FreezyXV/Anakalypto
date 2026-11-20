import type { LessonDiagramSpec } from "./registry";

/** Exact associations for the lessons reserved in the illustration queue. */
export const ATLAS65_DIAGRAMS = [
  {
    canvasHeight: 230,
    id: "stageChorus",
    title: "Du chœur au dialogue sur la scène grecque",
    paths: ["/arts-et-culture/arts-du-spectacle/theatre-et-danse/origines-theatre-grec-antique"],
    steps: [
      {
        label: "Prendre place",
        caption: "Le chœur occupe un espace visible entre les spectateurs et le jeu scénique.",
        detail:
          "Ce groupe chante et danse. Selon la pièce, il incarne par exemple les habitants ou les témoins d’un événement.",
      },
      {
        label: "Distinguer une voix",
        caption: "Un acteur peut engager un échange avec le chœur.",
        detail:
          "La couleur de l’acteur permet de suivre le passage du groupe à la voix d’un personnage. La tradition associe cette innovation à Thespis.",
      },
      {
        label: "Faire dialoguer",
        caption: "Plusieurs acteurs peuvent se répondre en présence du chœur.",
        detail:
          "Leur réplique n’efface pas le groupe. Une tragédie peut alterner action dialoguée, chant et mouvement.",
      },
    ],
    limit:
      "Reconstitution de principe. La forme des théâtres et le rôle du chœur varient. Les récits sur Thespis sont transmis par la tradition antique.",
    source: {
      title: "Metropolitan Museum of Art — Theater in Ancient Greece",
      url: "https://www.metmuseum.org/de/essays/theater-in-ancient-greece",
    },
  },
  {
    canvasHeight: 230,
    id: "novelReaders",
    title: "Trois libertés qui font vivre le roman",
    paths: [
      "/arts-et-culture/litterature-et-ecriture/genres-litteraires/naissance-du-roman-moderne",
    ],
    steps: [
      {
        label: "Déployer un récit",
        caption:
          "Un roman dispose d’espace pour suivre des aventures et des personnages dans le temps.",
        detail:
          "Il peut ralentir sur un détail, accélérer sur des années et revenir sur un événement antérieur.",
      },
      {
        label: "Changer de regard",
        caption: "Le récit peut montrer la même situation à travers différents personnages.",
        detail:
          "Un narrateur peut donner au lecteur des informations différentes de celles que possède chaque personnage.",
      },
      {
        label: "Mêler les formes",
        caption:
          "Lettres, récits enchâssés et registres différents peuvent cohabiter dans un seul roman.",
        detail:
          "Don Quichotte joue avec les récits d’aventures et les façons de rapporter les faits. Chaque roman combine ces libertés différemment.",
      },
    ],
    limit:
      "Trois choix possibles, sans ordre historique obligatoire. La forme romanesque a connu des traditions différentes selon les langues et les époques.",
    source: {
      title: "Miguel de Cervantes — Don Quixote",
      url: "https://catalogue.bnf.fr/ark%3A/12148/cb319212337",
    },
  },
  {
    canvasHeight: 230,
    id: "archivesClimate",
    title: "Protéger un document à chaque étape",
    paths: [
      "/arts-et-culture/patrimoine/musees-et-conservation/archives-bibliotheques-preservation",
    ],
    steps: [
      {
        label: "Limiter la lumière",
        caption: "Des boîtes adaptées et une lumière maîtrisée protègent des documents sensibles.",
        detail:
          "L’effet de la lumière s’additionne au fil des expositions. Une copie peut être consultée plus souvent que l’original.",
      },
      {
        label: "Stabiliser le climat",
        caption: "Les archives surveillent la température et l’humidité selon les supports.",
        detail:
          "Un document gonfle ou se rétracte selon les conditions. La stabilité aide à limiter ces variations.",
      },
      {
        label: "Rendre consultable",
        caption: "Un support facilite l’ouverture d’un volume fragile.",
        detail:
          "On évite de forcer la reliure. Le personnel choisit comment manipuler et consulter chaque objet.",
      },
    ],
    limit:
      "Coupe de réserve fictive, sans consigne chiffrée. Papier, photographie et film nécessitent des traitements différents.",
    source: {
      title: "National Archives — Rehousing and preservation",
      url: "https://www.archives.gov/preservation/holdings-maintenance/considerations",
    },
  },
  {
    canvasHeight: 230,
    id: "livingHeritage",
    title: "Comment une pratique reste vivante",
    paths: ["/arts-et-culture/patrimoine/patrimoine-immateriel/patrimoine-culturel-immateriel"],
    steps: [
      {
        label: "Pratiquer ensemble",
        caption: "Un chant, une danse ou un récit prend vie quand une communauté le pratique.",
        detail:
          "Le patrimoine immatériel repose notamment sur une pratique reconnue et portée par ses participants.",
      },
      {
        label: "Apprendre en faisant",
        caption: "Un nouveau participant apprend les gestes, les mots et les circonstances.",
        detail:
          "Les personnes transmettent aussi la signification du geste. L’enregistrement peut fournir un repère.",
      },
      {
        label: "Faire évoluer",
        caption: "La transmission continue quand une autre génération reprend la pratique.",
        detail:
          "Elle peut modifier des aspects de la pratique en fonction du lieu, de son public ou du moment.",
      },
    ],
    limit:
      "Scène fictive, sans attribution à une tradition particulière. Une communauté peut transmettre par des formes très différentes.",
    source: {
      title: "UNESCO — Qu’est-ce que le patrimoine culturel immatériel ?",
      url: "https://ich.unesco.org/doc/src/01851-EN.pdf?t=1367330429",
    },
  },
  {
    canvasHeight: 230,
    id: "craftTransmission",
    title: "Ce que l’apprenti apprend du geste",
    paths: ["/arts-et-culture/patrimoine/patrimoine-immateriel/savoir-faire-artisanaux"],
    steps: [
      {
        label: "Voir le mouvement",
        caption: "L’apprenti observe comment l’outil rencontre la matière.",
        detail:
          "L’angle, l’appui et le rythme ont des effets visibles ou sensibles. Ces repères peuvent être difficiles à décrire avec des mots.",
      },
      {
        label: "Comparer sa trace",
        caption: "Le maître peut comparer la trace obtenue avec l’effet recherché.",
        detail:
          "L’apprenti ajuste son geste avec cette information. La répétition devient une manière d’apprendre ce qui change le résultat.",
      },
      {
        label: "Adapter sa technique",
        caption: "La maîtrise permet d’ajuster le geste aux propriétés de la matière.",
        detail:
          "Un geste appris sur une pièce se réemploie avec des variations sur une autre, selon la texture et la forme.",
      },
    ],
    limit:
      "Outil et pièce stylisés. La planche explique la transmission du savoir-faire, sans donner de méthode de travail pour une machine.",
    source: {
      title: "UNESCO — Savoir-faire liés à l’artisanat traditionnel",
      url: "https://ich.unesco.org/en/traditional-craftsmanship-00057",
    },
  },
  {
    canvasHeight: 230,
    id: "towerWind",
    title: "Le noyau, les ailes et le vent du Burj Khalifa",
    paths: ["/arts-et-culture/patrimoine/architecture/burj-khalifa-exemple-architectural"],
    steps: [
      {
        label: "Voir les tourbillons",
        caption: "Le vent peut se séparer autour d’une tour et former des tourbillons.",
        detail:
          "Cette action crée des efforts variables. La réponse dépend de la géométrie, de la rigidité, du vent et des modes de vibration.",
      },
      {
        label: "Lire le plan en Y",
        caption: "Trois ailes épaulent le noyau central de la tour.",
        detail:
          "Vue du dessus, chaque aile participe à la rigidité de l’ensemble. Le noyau et ses contreforts forment un système porteur.",
      },
      {
        label: "Suivre les retraits",
        caption: "Les ailes se retirent progressivement et la largeur varie avec la hauteur.",
        detail:
          "Une forme qui change en montant perturbe l’organisation des tourbillons. Les ingénieurs peuvent comparer des variantes en soufflerie.",
      },
    ],
    limit:
      "Coupes de principe et silhouette simplifiée. Les traits de vent n’indiquent ni vitesse calculée ni direction ventilée réelle.",
    source: {
      title: "Burj Khalifa — Structure et conception",
      url: "https://www.burjkhalifa.ae/the-tower/structures/",
    },
  },
  {
    canvasHeight: 230,
    id: "newswire",
    title: "Ce qu’il reste quand la dépêche est coupée",
    paths: [
      "/communication-et-medias/histoire-des-medias/presse-ecrite/agences-de-presse-et-circulation-de-linformation",
    ],
    steps: [
      {
        label: "Envoyer l’essentiel",
        caption: "Le début d’une dépêche rassemble les faits nécessaires à sa compréhension.",
        detail:
          "Dans cet exemple, les deux traits marqués contiennent qui est concerné, ce qui s’est passé et les repères de lieu et de temps.",
      },
      {
        label: "Se limiter aux faits clés",
        caption: "Une transmission interrompue peut ne laisser que les premières lignes.",
        detail:
          "Cette organisation rend le début exploitable. Des informations essentielles demandent néanmoins vérification et attribution.",
      },
      {
        label: "Ajouter le contexte",
        caption: "Le lecteur accède ensuite aux précisions et à l’arrière-plan.",
        detail:
          "Les agences adaptent l’ordre et la longueur à la nouvelle et au format. La dépêche sert souvent de base à d’autres articles.",
      },
    ],
    limit:
      "Transmission fictive. L’écriture du plus important au moins important a plusieurs usages, au-delà de l’histoire du télégraphe.",
    source: {
      title: "AFP — Qu’est-ce qu’une agence de presse ?",
      url: "https://gar-education-pfpart.afp.com/dossiers-documentaires/histoire-de-lagence-havas-de-lafp/quest-ce-quune-agence-de-presse",
    },
  },
  {
    canvasHeight: 230,
    id: "cheapPrint",
    title: "Comment un prix bas change la diffusion d’un journal",
    paths: [
      "/communication-et-medias/histoire-des-medias/presse-ecrite/comment-les-journaux-a-petit-prix-ont-ils-rendu-la-presse-populaire",
    ],
    steps: [
      {
        label: "Vendre par abonnement",
        caption: "Un journal coûteux dépend beaucoup des paiements de ses abonnés.",
        detail:
          "Réduire le prix payé par chaque lecteur oblige l’éditeur à trouver d’autres recettes ou à vendre davantage.",
      },
      {
        label: "Ouvrir des annonces",
        caption: "Une partie de l’espace peut être vendue aux annonceurs.",
        detail:
          "Les recettes publicitaires financent une part du journal. Le public plus large rend les annonces intéressantes pour les annonceurs.",
      },
      {
        label: "Élargir la vente",
        caption: "La vente au numéro donne accès au journal sans abonnement.",
        detail:
          "Les canaux de vente, les machines et les contenus accessibles contribuent aussi à la diffusion de la presse populaire.",
      },
    ],
    limit:
      "Maquette et pièces fictives, sans rapport de prix historique. Les institutions et les modèles diffèrent entre pays.",
    source: {
      title: "BnF — La collection de presse",
      url: "https://www.bnf.fr/fr/la-collection-de-presse-conservee-la-bnf",
    },
  },
  {
    canvasHeight: 230,
    id: "printPress",
    title: "De la feuille imprimée au journal périodique",
    paths: [
      "/communication-et-medias/histoire-des-medias/presse-ecrite/naissance-de-la-presse-periodique",
    ],
    steps: [
      {
        label: "Composer la page",
        caption: "Les caractères mobiles permettent de reproduire une page déjà composée.",
        detail:
          "Les lignes sont assemblées puis encrées. La presse réalise une impression sur une feuille à la fois dans cette scène.",
      },
      {
        label: "Tirer des exemplaires",
        caption: "La même composition produit une série de feuilles identiques.",
        detail:
          "Les lecteurs reçoivent le même contenu pendant que l’imprimeur prépare la prochaine édition.",
      },
      {
        label: "Revenir à date fixe",
        caption: "Une publication périodique annonce ou installe un rythme de parution.",
        detail:
          "Les moyens de collecte des nouvelles et de distribution aident à tenir ce rythme. Un nouveau numéro représente une nouvelle composition.",
      },
    ],
    limit:
      "Presse stylisée et journaux fictifs. L’imprimerie rend la série possible parmi d’autres conditions sociales et économiques.",
    source: {
      title: "BnF — De la Gazette de Renaudot au Premier Empire",
      url: "https://www.bnf.fr/fr/mediatheque/de-la-gazette-de-renaudot-au-premier-empire",
    },
  },
  {
    canvasHeight: 230,
    id: "webSnapshots",
    title: "Comparer plusieurs captures d’une même page",
    paths: [
      "/communication-et-medias/medias-numeriques/web/le-web-archivage-et-la-memoire-d-internet",
    ],
    steps: [
      {
        label: "Enregistrer une date",
        caption: "Une collecte garde une trace datée d’une page et des éléments accessibles.",
        detail: "La date de capture et la date de publication du contenu peuvent être différentes.",
      },
      {
        label: "Capturer les changements",
        caption: "Une autre collecte peut trouver de nouveaux textes ou images à la même adresse.",
        detail:
          "Les copies datées restent distinctes. Elles témoignent de ce que la collecte a réussi à enregistrer.",
      },
      {
        label: "Comparer les versions",
        caption: "On peut relire plusieurs états pour repérer les changements.",
        detail:
          "Une période sans capture ne permet pas de déduire ce que la page contenait entre deux visites de l’archive.",
      },
    ],
    limit:
      "Pages et mois fictifs. Les composants interactifs, vidéos et liens externes ne sont pas toujours conservés.",
    source: {
      title: "BnF — Consulter les archives de l’internet",
      url: "https://www.bnf.fr/fr/consulter-les-archives-de-linternet",
    },
  },
  {
    canvasHeight: 230,
    id: "historyEvidence",
    title: "Comment faire parler des traces différentes",
    paths: [
      "/sciences-humaines-et-sociales/histoire/methode-historique/comment-travaille-un-historien",
    ],
    steps: [
      {
        label: "Situer la trace",
        caption: "Un journal, une lettre ou un registre vient d’un contexte déterminé.",
        detail:
          "On cherche qui a produit le document, quand, pour qui et avec quel objectif. Un détail peut dépendre de ces réponses.",
      },
      {
        label: "Comparer les points de vue",
        caption: "Un autre document peut contredire ou compléter le premier.",
        detail:
          "Des témoins n’ont pas toujours la même information. Une différence peut aussi signaler un genre ou un public différent.",
      },
      {
        label: "Recouper les indices",
        caption:
          "Une source indépendante aide à vérifier ce qui se retrouve dans plusieurs traces.",
        detail:
          "Un registre n’a pas les mêmes silences qu’une lettre. L’historien distingue les faits étayés et ce qui reste incertain.",
      },
    ],
    limit:
      "Documents fictifs. La planche illustre une démarche avec trois types de traces, applicable aussi à des objets ou images.",
    source: {
      title: "National Archives — Document Analysis",
      url: "https://www.archives.gov/education/lessons/worksheets",
    },
  },
  {
    canvasHeight: 230,
    id: "lavauObjects",
    title: "Un mobilier qui raconte des échanges",
    paths: [
      "/sciences-humaines-et-sociales/histoire/prehistoire/que-revele-la-tombe-intacte-du-prince-celte-de-lavau-sur-ses-liens-avec-la-mediterranee",
    ],
    steps: [
      {
        label: "Situer la découverte",
        caption: "Le tumulus abritait une chambre funéraire avec un char et plusieurs objets.",
        detail:
          "Le contexte de fouille consigne leur emplacement et leurs relations. Il aide à interpréter l’ensemble.",
      },
      {
        label: "Regarder le chaudron",
        caption: "Le chaudron de bronze fournit des indices de fabrication et de style.",
        detail:
          "Les archéologues comparent la forme, le décor et les matériaux avec d’autres découvertes méditerranéennes.",
      },
      {
        label: "Relier des régions",
        caption: "Des objets importés suggèrent l’existence de réseaux d’échanges.",
        detail:
          "L’objet a pu changer de mains plusieurs fois. La carte ne suffit pas à déduire un trajet ou un contact direct.",
      },
    ],
    limit:
      "Coupe et carte schématiques. Le chaudron représente un repère visuel et ne reproduit pas tout le mobilier.",
    source: {
      title: "Inrap — La tombe princière de Lavau",
      url: "https://www.inrap.fr/sites/inrap.fr/files/atoms/files/cp_lavau_inrap_au_c2rmf.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "meridianMeasure",
    title: "D’une mesure locale à un étalon commun",
    paths: [
      "/industries/industrie-manufacturiere/qualite-et-normalisation/pourquoi-la-france-a-t-elle-invente-le-metre",
    ],
    steps: [
      {
        label: "Comparer les unités",
        caption: "La longueur d’une unité pouvait varier d’un lieu à l’autre.",
        detail:
          "Une même expression pouvait donc désigner des longueurs différentes. Une unité commune facilite les comparaisons entre lieux.",
      },
      {
        label: "Définir une référence",
        caption: "Le mètre historique a été rapporté au quart d’un méridien terrestre.",
        detail:
          "Le principe était de prendre un dix-millionième de la distance entre l’équateur et le pôle le long de ce méridien. On a dû estimer cette distance par des mesures.",
      },
      {
        label: "Fabriquer l’étalon",
        caption: "Un étalon matériel a rendu la référence reproductible en pratique.",
        detail:
          "La définition a évolué avec les techniques de mesure. Le système international actuel s’appuie sur la vitesse de la lumière, avec une unité de temps définie.",
      },
    ],
    limit:
      "Globe et règle hors échelle. La planche distingue l’idée d’origine et sa réalisation matérielle.",
    source: {
      title: "Observatoire de Paris — Le mètre, mesure républicaine",
      url: "https://www.obspm.fr/IMG//article_PDF/Le-mtre-mesure-rpublicaine_a2988.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "solidElectrolyte",
    title: "Suivre les ions à travers deux architectures",
    paths: [
      "/automobile/motorisations/electrique/pourquoi-les-batteries-a-electrolyte-solide-font-elles-tant-rever-les-constructeurs",
    ],
    steps: [
      {
        label: "Un milieu liquide",
        caption:
          "Dans une cellule classique, un électrolyte liquide imprègne un séparateur poreux.",
        detail:
          "Les ions peuvent passer d’une électrode à l’autre par ce milieu. Le séparateur maintient les électrodes physiquement distinctes.",
      },
      {
        label: "Un milieu solide",
        caption: "Certaines cellules utilisent un électrolyte solide qui conduit les ions.",
        detail:
          "La couche transporte les ions et sépare les électrodes dans l’architecture représentée.",
      },
      {
        label: "Des contacts à maîtriser",
        caption:
          "Les contacts entre électrolyte et électrodes peuvent modifier le passage des ions.",
        detail:
          "Les interfaces, la pression, les matériaux et le vieillissement comptent. Les promesses de densité ou de sécurité dépendent de la cellule.",
      },
    ],
    limit:
      "Coupe fonctionnelle hors échelle. La planche ne compare ni des modèles commercialisés ni des performances mesurées.",
    source: {
      title: "US Department of Energy — Next-Generation Batteries",
      url: "https://www.energy.gov/cmei/ammto/breaking-it-down-next-generation-batteries",
    },
  },
  {
    canvasHeight: 230,
    id: "transferCase",
    title: "Comment le couple peut rejoindre deux essieux",
    paths: ["/automobile/motorisations/thermique/boite-de-transfert-4x4"],
    steps: [
      {
        label: "Suivre un seul essieu",
        caption: "Sur le schéma, un seul essieu reçoit le couple moteur au départ.",
        detail:
          "La ligne active relie la boîte de transfert aux roues arrière dans cet exemple de transmission enclenchable.",
      },
      {
        label: "Entraîner deux essieux",
        caption: "La boîte peut aussi transmettre du couple à l’essieu avant.",
        detail:
          "Les systèmes qui lient les deux essieux rigidement se comportent différemment des architectures équipées d’un différentiel central.",
      },
      {
        label: "Changer le rapport",
        caption: "La gamme courte permet de rouler plus lentement pour un même régime du moteur.",
        detail:
          "Le rapport de réduction augmente le couple disponible aux roues, dans les limites du système et de l’adhérence.",
      },
    ],
    limit:
      "Exemple fonctionnel d’une transmission enclenchable. Les architectures permanentes et les véhicules électriques peuvent distribuer le couple autrement.",
    source: {
      title: "Jeep — Glossaire des transmissions 4×4",
      url: "https://www.jeep.com/4x4/faq-and-glossary.html",
    },
  },
  {
    canvasHeight: 230,
    id: "automaticGearbox",
    title: "Trois façons de transmettre et de changer de rapport",
    paths: ["/automobile/motorisations/thermique/la-transmission-manuelle-contre-automatique"],
    steps: [
      {
        label: "Le convertisseur",
        caption: "Un fluide permet de transmettre le couple entre le moteur et l’entrée de boîte.",
        detail:
          "Des trains d’engrenages peuvent ensuite choisir les rapports. Un embrayage de verrouillage peut limiter le glissement en régime stabilisé.",
      },
      {
        label: "Deux embrayages",
        caption: "Deux embrayages desservent deux ensembles de rapports.",
        detail:
          "Un nouveau rapport peut être présélectionné pendant que l’autre transmet le couple. La transition déplace progressivement le passage du couple.",
      },
      {
        label: "Les poulies",
        caption:
          "Deux poulies à diamètre de travail variable peuvent faire évoluer le rapport en continu.",
        detail:
          "La courroie ou la chaîne relie les poulies. Leur diamètre utile varie avec la position de leurs flasques.",
      },
    ],
    limit:
      "Coupes de principe. Les détails de commande, les rendements et les usages dépendent de la boîte.",
    source: {
      title: "Techniques de l’Ingénieur — Classification des transmissions",
      url: "https://www.techniques-ingenieur.fr/base-documentaire/mecanique-th7/groupes-motopropulseurs-gmp-automobiles-controles-et-hybridation-42169210/transmissions-dans-l-automobile-bm2586/classification-des-transmissions-bm2586niv10003.html",
    },
  },
  {
    canvasHeight: 230,
    id: "startingCircuit",
    title: "Les trois acteurs du démarrage électrique",
    paths: [
      "/automobile/usages-et-mobilite/entretien-et-cycle-de-vie/circuit-electrique-12v-batterie-alternateur-demarreur",
    ],
    steps: [
      {
        label: "À l’arrêt",
        caption: "La batterie conserve l’énergie nécessaire au démarrage.",
        detail:
          "Lorsque le moteur est arrêté, la batterie reste disponible pour certains consommateurs électriques.",
      },
      {
        label: "Au démarrage",
        caption:
          "La batterie fournit du courant au démarreur qui fait tourner le moteur thermique.",
        detail:
          "Le démarreur est un moteur électrique. Il cesse normalement d’entraîner le moteur thermique une fois le démarrage réalisé.",
      },
      {
        label: "Moteur en marche",
        caption: "L’alternateur est entraîné mécaniquement et alimente le réseau électrique.",
        detail:
          "Après régulation, l’énergie peut aussi recharger la batterie. La flèche représente ce transfert en retour.",
      },
    ],
    limit:
      "Flux simplifiés. Le câblage, les protections et les composants varient selon le système de démarrage et le véhicule.",
    source: {
      title: "DENSO — Starter and Alternator Manual",
      url: "https://assets.denso-am.eu/production/attachments/Starter-Alternator-Manual-English.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "suspensionLinks",
    title: "Le bras, la rotule et le mouvement de la roue",
    paths: [
      "/automobile/usages-et-mobilite/entretien-et-cycle-de-vie/train-roulant-rotules-silentblocs",
    ],
    steps: [
      {
        label: "Guider la roue",
        caption: "Un bras de suspension relie le porte-roue à la structure du véhicule.",
        detail:
          "Les liaisons fixent le mouvement possible. Selon la géométrie, le bras peut être triangulaire ou composé de plusieurs éléments.",
      },
      {
        label: "Laisser la roue monter",
        caption: "Les articulations autorisent le débattement de la suspension.",
        detail:
          "Les éléments élastiques filtrent certaines vibrations. Le dessin agrandit la différence de position.",
      },
      {
        label: "Tourner la roue",
        caption: "Une biellette de direction agit sur le porte-roue dans cet exemple.",
        detail:
          "La rotule permet de combiner les changements d’angle du bras et la rotation de direction.",
      },
    ],
    limit:
      "Train avant simplifié. La planche donne des repères de fonction et omet ressort, amortisseur et transmission.",
    source: {
      title: "ZF Aftermarket — Steering and chassis parts",
      url: "https://aftermarket.zf.com/sg/aftermarket-portal/our-portfolio/passenger-cars/products/steering-and-chassis-parts/",
    },
  },
  {
    canvasHeight: 230,
    id: "bodyRecycling",
    title: "Ce que le tri sépare dans une carrosserie",
    paths: [
      "/automobile/usages-et-mobilite/entretien-et-cycle-de-vie/recyclage-acier-aluminium-automobile",
    ],
    steps: [
      {
        label: "Observer l’ensemble",
        caption:
          "Une même carrosserie peut regrouper plusieurs aciers, de l’aluminium et d’autres matériaux.",
        detail:
          "Les matériaux solidaires avant démontage peuvent devoir être séparés pour rejoindre les bonnes filières.",
      },
      {
        label: "Démonter des pièces",
        caption: "Un démontage permet d’orienter séparément certains composants.",
        detail:
          "Une pièce en bon état peut être réemployée. Le retrait des fluides et éléments à traiter fait aussi partie de la filière.",
      },
      {
        label: "Séparer les matériaux",
        caption: "Un aimant aide à extraire les éléments ferromagnétiques d’un mélange.",
        detail:
          "Les métaux non ferreux demandent d’autres étapes de tri pour isoler des fractions utilisables, notamment l’aluminium.",
      },
    ],
    limit:
      "Schéma de principe sans taux de récupération. Le tri industriel dépend de la matière, de la conception des pièces et des installations.",
    source: {
      title: "ANFA — Le démontage et le recyclage automobile",
      url: "https://www.anfa-auto.fr/sites/default/files/2022-07/Autofocus%2095%20-%20Le%20d%C3%A9montage%20et%20le%20recyclage%20automobile.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "driverSensors",
    title: "Reconnaître trois façons de percevoir la route",
    paths: [
      "/automobile/securite-et-conduite/aides-a-la-conduite/capteurs-adas-radar-camera-lidar",
    ],
    steps: [
      {
        label: "Voir avec une caméra",
        caption:
          "Une caméra fournit une image où un logiciel peut reconnaître des formes ou des marques.",
        detail:
          "Elle renseigne sur l’apparence de la scène. L’éclairage ou une visibilité limitée peuvent gêner son usage.",
      },
      {
        label: "Mesurer avec un radar",
        caption:
          "Le radar utilise des ondes radio pour estimer la distance et la vitesse relative d’objets.",
        detail:
          "Le signal réfléchi porte de l’information. La précision dépend du capteur et de la scène.",
      },
      {
        label: "Balayer avec un lidar",
        caption:
          "Le lidar mesure des distances avec de la lumière et peut fournir des points en trois dimensions.",
        detail:
          "Le nuage de points décrit la géométrie détectée. Un calculateur peut réunir plusieurs types de mesures.",
      },
    ],
    limit:
      "Champs stylisés et hors échelle. Les ultrasons, souvent utilisés près du véhicule, ne figurent pas dans ces trois vues.",
    source: {
      title: "Sensors — Capteurs en conduite automatisée",
      url: "https://www.mdpi.com/1424-8220/26/7/2153",
    },
  },
  {
    canvasHeight: 230,
    id: "yawControl",
    title: "Pourquoi l’ESP compare deux mouvements",
    paths: [
      "/automobile/securite-et-conduite/aides-a-la-conduite/comment-l-esp-empeche-t-il-une-voiture-de-partir-en-tete-a-queue",
    ],
    steps: [
      {
        label: "Repérer l’intention",
        caption: "Le système estime la direction que le conducteur demande au volant.",
        detail:
          "Il tient compte d’autres mesures. Le pointillé indique la trajectoire voulue dans cet exemple de courbe.",
      },
      {
        label: "Repérer l’écart",
        caption: "Des capteurs renseignent aussi sur la rotation réelle de la voiture.",
        detail:
          "Une différence entre le comportement attendu et le mouvement mesuré peut signaler une perte de stabilité.",
      },
      {
        label: "Appliquer une correction",
        caption: "L’ESP peut freiner une ou plusieurs roues pour aider à réduire l’écart.",
        detail:
          "Le choix de la roue dépend du comportement détecté. L’adhérence disponible fixe une limite à ce que le système peut corriger.",
      },
    ],
    limit:
      "Vue conceptuelle. Le système peut aussi réduire le couple moteur. Le dessin ne constitue pas un guide de conduite.",
    source: {
      title: "Transports Canada — Contrôle électronique de stabilité",
      url: "https://tc.canada.ca/en/road-transportation/driver-assistance-technologies/electronic-stability-control",
    },
  },
  {
    canvasHeight: 230,
    id: "emergencyBrake",
    title: "De la détection à la demande de freinage",
    paths: ["/automobile/securite-et-conduite/aides-a-la-conduite/freinage-durgence-automatique"],
    steps: [
      {
        label: "Détecter un objet",
        caption: "Les capteurs donnent une estimation de la position des objets suivis.",
        detail:
          "Le calculateur exploite aussi leur vitesse relative et leur mouvement pour évaluer la situation.",
      },
      {
        label: "Évaluer le risque",
        caption: "Si la situation paraît critique, le système peut d’abord avertir le conducteur.",
        detail:
          "La succession des interventions dépend du système et du scénario. Une alerte n’établit pas à elle seule une collision imminente.",
      },
      {
        label: "Demander un freinage",
        caption:
          "Le véhicule peut appliquer un freinage automatique pour éviter ou atténuer la collision.",
        detail:
          "L’efficacité dépend de la vitesse, de l’adhérence, de l’objet et de ce que les capteurs peuvent détecter.",
      },
    ],
    limit:
      "Distances et durées fictives. Le dessin n’indique aucune distance de sécurité et ne garantit pas l’évitement.",
    source: {
      title: "NHTSA — Active Braking Technologies",
      url: "https://www.nhtsa.gov/research-data/crash-avoidance/active-braking-technologies",
    },
  },
  {
    canvasHeight: 230,
    id: "carSoftware",
    title: "Des calculateurs spécialisés aux fonctions mises à jour",
    paths: [
      "/automobile/industrie-automobile/production/qu-est-ce-qu-une-voiture-definie-par-logiciel-et-en-quoi-change-t-elle-tout",
    ],
    steps: [
      {
        label: "Distribuer les fonctions",
        caption: "Dans cet exemple, chaque fonction possède son calculateur dédié.",
        detail:
          "Les boîtiers peuvent déjà communiquer. Le dessin met en évidence la répartition des fonctions.",
      },
      {
        label: "Partager du calcul",
        caption:
          "Des contrôleurs plus puissants peuvent exécuter plusieurs fonctions et dialoguer avec des modules locaux.",
        detail: "L’architecture peut être centralisée, zonale ou combiner plusieurs approches.",
      },
      {
        label: "Mettre à jour",
        caption:
          "Une fonction logicielle peut être modifiée après livraison lorsque le véhicule le permet.",
        detail:
          "Une mise à jour dépend du matériel, de la version et des validations du constructeur. Des systèmes locaux restent nécessaires pour agir sur la voiture.",
      },
    ],
    limit:
      "Deux architectures stylisées. Le nombre de boîtiers, de fonctions et de mises à jour possibles varie selon le véhicule.",
    source: {
      title: "IBM — Software-defined vehicle",
      url: "https://www.ibm.com/think/topics/software-defined-vehicle",
    },
  },
  {
    canvasHeight: 230,
    id: "trafficMessages",
    title: "Comment une alerte peut dépasser un obstacle",
    paths: [
      "/automobile/securite-et-conduite/conduite-autonome/communication-v2x-vehicule-infrastructure",
    ],
    steps: [
      {
        label: "L’obstacle masque la vue",
        caption:
          "Un élément du décor peut empêcher la voiture de détecter directement ce qui se passe plus loin.",
        detail:
          "Un capteur embarqué observe ce qui arrive dans son champ. La scène oppose perception directe et message reçu.",
      },
      {
        label: "Un véhicule prévient",
        caption: "Un véhicule compatible peut partager un avertissement avec un autre.",
        detail:
          "Un message peut annoncer un risque en amont. L’équipement et les protocoles déterminent ce qui peut être reçu et interprété.",
      },
      {
        label: "Un équipement prévient",
        caption:
          "Une infrastructure connectée peut aussi diffuser des données utiles aux véhicules.",
        detail:
          "Les types de messages incluent selon les systèmes des informations de circulation ou de signalisation.",
      },
    ],
    limit:
      "Scénario fictif. La transmission et sa réception ne sont pas garanties, et ces messages complètent les autres moyens de perception.",
    source: {
      title: "US DOT — ITS ePrimer, Connected Vehicles",
      url: "https://www.its.dot.gov/pcb/eprimer/documents/module13.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "vehicleCharging",
    title: "Lire la puissance au fil d’une recharge",
    paths: ["/automobile/motorisations/electrique/recharge-et-infrastructure-des-bornes"],
    steps: [
      {
        label: "Début de session",
        caption: "La puissance peut monter en début de recharge rapide.",
        detail:
          "Le matériel, la température et l’état de la batterie limitent la puissance que le véhicule accepte à chaque instant.",
      },
      {
        label: "Zone de puissance élevée",
        caption: "Sur certains véhicules, la courbe reste un temps proche d’un plateau.",
        detail:
          "Les mêmes axes sont conservés dans les trois vues. Une autre voiture ou une batterie plus froide peut suivre un profil différent.",
      },
      {
        label: "Fin de charge",
        caption: "La puissance diminue souvent quand la batterie se rapproche de la pleine charge.",
        detail:
          "Une même quantité d’énergie prend alors plus de temps à entrer qu’au moment où la puissance était élevée.",
      },
    ],
    limit:
      "Courbe fictive de recharge rapide en courant continu. La baisse ne commence pas à un seuil universel et le graphique ne prescrit aucun trajet.",
    source: {
      title: "US Department of Energy — Selecting and Connecting EV Chargers",
      url: "https://betterbuildingssolutioncenter.energy.gov/sites/default/files/slides/Selecting%20and%20Connecting%20EV%20Chargers%20-%20Slides.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "hybridPower",
    title: "Trois trajets possibles de l’énergie dans un hybride",
    paths: [
      "/automobile/motorisations/motorisations-hybrides/motorisations-hybrides-architectures",
    ],
    steps: [
      {
        label: "Chemin électrique",
        caption: "Dans une architecture série, le moteur thermique entraîne une génératrice.",
        detail:
          "L’énergie électrique produite peut alimenter le système de traction et, selon l’état du véhicule, charger la batterie.",
      },
      {
        label: "Chemin mécanique",
        caption:
          "Une architecture parallèle peut entraîner les roues par une liaison mécanique depuis le moteur thermique.",
        detail:
          "Le moteur électrique peut également participer à la traction. Cette vue isole le chemin thermique pour le comparer.",
      },
      {
        label: "Trajet de récupération",
        caption: "Le moteur électrique peut servir de génératrice pendant une décélération.",
        detail:
          "Une partie de l’énergie du mouvement revient vers la batterie. La récupération varie selon le système et ses limites.",
      },
    ],
    limit:
      "Flux fonctionnels. Les architectures mixtes combinent des chemins et la récupération peut être limitée par l’état de charge ou l’adhérence.",
    source: {
      title: "US Department of Energy — Hybrid Overview",
      url: "https://afdc.energy.gov/fueleconomy/animations/hybrids/hybrid/hybridoverview.html",
    },
  },
  {
    canvasHeight: 230,
    id: "foodWaste",
    title: "Ce qui est perdu avec les aliments jetés",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/gaspillage-alimentaire/gaspillage-alimentaire-mondial",
    ],
    steps: [
      {
        label: "Produire les aliments",
        caption: "L’eau, les matières et l’énergie sont mobilisées avant la vente.",
        detail:
          "Une cagette représente ici les ressources associées au produit. Certaines s’ajoutent ensuite au stockage et au transport.",
      },
      {
        label: "Perdre avant la vente",
        caption:
          "Une partie de la production peut quitter la chaîne avant d’arriver au consommateur.",
        detail:
          "Des causes différentes interviennent à la récolte, à la manutention et au stockage. Une partie de ces pertes peut être évitée.",
      },
      {
        label: "Gaspiller après la vente",
        caption: "Un aliment encore consommable peut être jeté en magasin ou après achat.",
        detail:
          "La fin du parcours concentre les ressources déjà engagées. Prévenir le gaspillage évite d’avoir à les mobiliser pour un aliment qui sera jeté.",
      },
    ],
    limit:
      "Parcours fictif, sans proportion ni estimation d’impact. Les définitions statistiques des pertes et du gaspillage précisent à quelles étapes ils sont comptés.",
    source: {
      title: "FAO — Food Loss and Waste",
      url: "https://www.fao.org/platform-food-loss-waste/en",
    },
  },
  {
    canvasHeight: 230,
    id: "localChains",
    title: "Compter les intermédiaires et regarder la distance",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/empreinte-alimentaire/circuits-courts",
    ],
    steps: [
      {
        label: "Vendre directement",
        caption: "Une vente directe relie la ferme au consommateur sans intermédiaire commercial.",
        detail:
          "Le marché, un point à la ferme ou une commande directe peuvent organiser la rencontre avec le producteur.",
      },
      {
        label: "Passer par un acteur",
        caption: "Un seul intermédiaire reste compatible avec un circuit court.",
        detail:
          "Le nombre d’intermédiaires décrit la chaîne commerciale. Le dessin ne fixe pas de distance entre deux points.",
      },
      {
        label: "Comparer les parcours",
        caption: "Un produit qui a parcouru peu de kilomètres peut passer par plusieurs acteurs.",
        detail:
          "Le caractère local et le nombre d’intermédiaires décrivent deux propriétés différentes. Le transport et la production influent chacun sur le bilan.",
      },
    ],
    limit:
      "Exemples fictifs fondés sur l’usage français du terme « circuit court ». Les positions n’indiquent pas des distances mesurées.",
    source: {
      title: "Ministère de l’Agriculture — Circuit court et local",
      url: "https://documentation.ma-cantine.agriculture.gouv.fr/fr/article/circuit-court-et-local-de-quoi-parle-t-on-et-comment-les-declarer-1akdr2y/",
    },
  },
  {
    canvasHeight: 230,
    id: "plateEmissions",
    title: "Comparer trois postes derrière le même repas",
    paths: [
      "/alimentation-et-nutrition/alimentation-et-environnement/empreinte-alimentaire/empreinte-carbone-de-lalimentation",
    ],
    steps: [
      {
        label: "Regarder la ferme",
        caption:
          "La production agricole peut représenter une forte part de l’empreinte d’un aliment.",
        detail:
          "Les pratiques, le type d’aliment et les changements d’usage des sols peuvent peser sur ce poste.",
      },
      {
        label: "Regarder l’usine",
        caption:
          "La transformation, le stockage et le conditionnement mobilisent aussi des ressources.",
        detail:
          "La contribution de chaque étape varie avec le produit, ses procédés et son énergie.",
      },
      {
        label: "Regarder le trajet",
        caption: "Le transport a un effet qui dépend du mode, du chargement et de la distance.",
        detail:
          "Pour une même distance, les émissions peuvent être très différentes selon le véhicule ou le recours au fret aérien.",
      },
    ],
    limit:
      "Graphiques fictifs sur une même échelle sans valeurs. Les trois postes représentés n’épuisent pas l’analyse de cycle de vie.",
    source: {
      title: "FAO — Greenhouse gas emissions from agrifood systems",
      url: "https://www.fao.org/statistics/highlights-archive/highlights-detail/greenhouse-gas-emissions-from-agrifood-systems.-global--regional-and-country-trends--2000-2022",
    },
  },
  {
    canvasHeight: 230,
    id: "cellarRoots",
    title: "Ce qui se passe autour d’une cagette enterrée",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/conservation/le-stockage-en-cave-des-legumes-racines",
    ],
    steps: [
      {
        label: "Amortir les écarts",
        caption: "Un volume enterré peut atténuer les variations de température extérieure.",
        detail:
          "La terre change de température plus lentement que l’air extérieur. Le local dépend aussi de sa profondeur et de son emplacement.",
      },
      {
        label: "Renouveler l’air",
        caption: "Les échanges d’air influencent l’humidité et la condensation.",
        detail:
          "Les légumes continuent de respirer après récolte. L’air, l’eau et la température influencent l’évolution de leur qualité.",
      },
      {
        label: "Suivre l’état des légumes",
        caption: "Certains légumes se flétrissent, germent ou s’abîment selon les conditions.",
        detail:
          "Les légumes n’ont pas tous les mêmes besoins. Surveiller leur état aide à repérer des changements dans le stock.",
      },
    ],
    limit:
      "Coupe de principe, sans durée ou température de conservation prescrite. L’illustration ne suffit pas à juger si un aliment peut être consommé.",
    source: {
      title: "GRAB — Dossier conservation des légumes",
      url: "https://www.grab.fr/wp-content/uploads/2010/09/REF-BIO-OCT-nov-2010-dossier-conservation.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "dryingSmoking",
    title: "Deux effets distincts autour d’un aliment",
    paths: ["/alimentation-et-nutrition/technologies-alimentaires/conservation/sechage-et-fumage"],
    steps: [
      {
        label: "Identifier l’eau disponible",
        caption:
          "La part d’eau disponible dans un aliment influence l’activité de certains micro-organismes.",
        detail:
          "La teneur totale en eau et sa disponibilité pour les microbes sont deux mesures différentes.",
      },
      {
        label: "Suivre le séchage",
        caption: "Le séchage retire de l’eau et peut réduire l’activité de l’eau.",
        detail:
          "Dans le dessin, les flèches représentent l’eau qui quitte l’aliment. Les conditions et le produit changent le résultat.",
      },
      {
        label: "Suivre le fumage",
        caption:
          "Un fumage dépose différents composés, dont certains freinent des micro-organismes.",
        detail:
          "Le fumage peut aussi aller de pair avec un séchage. La conservation et la sécurité dépendent de l’ensemble du procédé.",
      },
    ],
    limit:
      "Principe qualitatif. Aucun paramètre de procédé ni garantie de conservation à température ambiante n’est représenté.",
    source: {
      title: "FAO — Techniques de transformation et de conservation",
      url: "https://www.fao.org/4/t0562e/t0562e04.htm",
    },
  },
  {
    canvasHeight: 230,
    id: "pulseRoots",
    title: "De la racine à la gousse d’une légumineuse",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/legumineuses-aliment-avenir",
    ],
    steps: [
      {
        label: "Suivre les racines",
        caption: "La plante explore le sol par des racines ramifiées.",
        detail:
          "Les racines prélèvent de l’eau et des nutriments. Certaines légumineuses forment aussi des nodosités.",
      },
      {
        label: "Observer les nodosités",
        caption: "Des bactéries peuvent y transformer l’azote de l’air en formes assimilables.",
        detail:
          "La plante fournit aux bactéries de l’énergie issue de ses sucres. La relation dépend des espèces et des conditions.",
      },
      {
        label: "Observer les graines",
        caption: "Les graines produites dans la gousse contiennent notamment des protéines.",
        detail:
          "La planche relie un processus dans la racine à un organe récolté sans chiffrer ses effets sur la composition.",
      },
    ],
    limit: "Exemple stylisé. La fixation varie avec la plante, les bactéries et l’environnement.",
    source: {
      title: "FAO — Pulses and soils",
      url: "https://www.fao.org/agroecology/new-knowledge-module/publications/detail/pulses-and-soils-a-dynamic-duo/en",
    },
  },
  {
    canvasHeight: 230,
    id: "palmFruit",
    title: "Un fruit, deux huiles selon la partie prélevée",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/huile-de-palme",
    ],
    steps: [
      {
        label: "Voir le régime",
        caption: "Les fruits du palmier à huile poussent ensemble sur un régime.",
        detail:
          "Un fruit contient une couche charnue autour d’un noyau. La coupe suivante agrandit ces parties.",
      },
      {
        label: "Repérer la pulpe",
        caption: "L’huile de palme provient de la pulpe du fruit.",
        detail:
          "La pulpe correspond à la couche charnue. Elle est distincte du noyau et de son contenu.",
      },
      {
        label: "Repérer l’amande",
        caption: "L’huile de palmiste provient de l’amande à l’intérieur du noyau.",
        detail:
          "Les deux huiles ont des compositions différentes. Une même culture peut donc fournir deux matières distinctes.",
      },
    ],
    limit:
      "Coupe botanique simplifiée. La production, les rendements et les impacts diffèrent selon le lieu et la filière.",
    source: {
      title: "Cirad — Palmier à huile, plantes et usages",
      url: "https://www.cirad.fr/nos-activites-notre-impact/filieres-agricoles-tropicales/palmier-a-huile/plantes-et-usages",
    },
  },
  {
    canvasHeight: 230,
    id: "saltIngredients",
    title: "Lire le sel d’un aliment et faire le calcul",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/sel-cache",
    ],
    steps: [
      {
        label: "Chercher dans la recette",
        caption: "Un aliment peut contenir du sel sans qu’on en ajoute à table.",
        detail:
          "Le sel a des fonctions de goût, de texture ou de conservation selon l’aliment. Le pain sert d’exemple.",
      },
      {
        label: "Lire la valeur",
        caption: "Dans cet exemple, le tableau indique 1,2 g de sel pour 100 g.",
        detail:
          "Une valeur rapportée à 100 g facilite la comparaison entre produits de la même catégorie.",
      },
      {
        label: "Rapporter à sa portion",
        caption: "Une portion de 50 g contient la moitié du sel annoncé pour 100 g.",
        detail:
          "Le calcul donne donc 0,6 g de sel dans cet exemple. Une autre taille de portion changerait le résultat.",
      },
    ],
    limit:
      "Emballage et valeurs fictifs. L’exercice explique une lecture de tableau et ne fixe pas d’objectif alimentaire.",
    source: {
      title: "Union européenne — Information des consommateurs sur les denrées alimentaires",
      url: "https://eur-lex.europa.eu/eli/reg/2011/1169/oj",
    },
  },
  {
    canvasHeight: 230,
    id: "sugarPortion",
    title: "Pourquoi une portion change la comparaison des sucres",
    paths: [
      "/alimentation-et-nutrition/technologies-alimentaires/transformation-industrielle/sucre-cache-comment-le-reperer",
    ],
    steps: [
      {
        label: "Deux produits salés",
        caption: "Des sauces peuvent contenir des sucres même quand leur goût paraît surtout salé.",
        detail:
          "Les sucres indiqués dans le tableau comprennent ceux déjà présents dans les ingrédients et ceux ajoutés.",
      },
      {
        label: "Comparer à poids égal",
        caption: "La sauce A affiche 8 g de sucres pour 100 g et la sauce B en affiche 4.",
        detail:
          "À masse égale, A contient donc deux fois la quantité de sucres de B dans la simulation.",
      },
      {
        label: "Comparer des portions",
        caption: "Avec 20 g de A et 100 g de B, le classement des quantités consommées change.",
        detail:
          "La portion A apporte ici 1,6 g de sucres et la portion B en apporte 4 g. Une liste d’ingrédients peut aider à repérer la présence de sucres ajoutés.",
      },
    ],
    limit:
      "Marques, valeurs et portions fictives. Ces valeurs ne décrivent aucun produit réel et n’indiquent aucun objectif de consommation.",
    source: {
      title: "Union européenne — Information des consommateurs sur les denrées alimentaires",
      url: "https://eur-lex.europa.eu/eli/reg/2011/1169/oj",
    },
  },
  {
    canvasHeight: 230,
    id: "soilTexture",
    title: "Pourquoi les particules se déposent différemment",
    paths: ["/sciences-du-vivant-appliquees/agronomie/sols-et-fertilite/reconnaitre-sol"],
    steps: [
      {
        label: "Comparer les grains",
        caption: "Les particules minérales se classent par taille, du sable à l’argile.",
        detail:
          "Les trois cercles agrandissent les grains de façon illustrative. La texture d’un sol dépend de la proportion des différentes tailles.",
      },
      {
        label: "Mettre en suspension",
        caption: "Mélangées à l’eau, les particules peuvent se répartir un temps dans le volume.",
        detail:
          "Si les particules se séparent correctement, leur vitesse de dépôt varie selon leurs propriétés.",
      },
      {
        label: "Observer les couches",
        caption: "Les grains les plus gros forment en général le dépôt le plus rapide.",
        detail:
          "D’autres particules s’accumulent plus lentement au-dessus. La matière organique et des particules mal séparées peuvent fausser l’observation.",
      },
    ],
    limit:
      "Bocal et couches hors échelle. Cette observation donne une estimation qualitative qui dépend de la préparation de l’échantillon.",
    source: {
      title: "Clemson Cooperative Extension — Soil Texture Analysis",
      url: "https://hgic.clemson.edu/factsheet/soil-texture-analysis-the-jar-test/",
    },
  },
  {
    canvasHeight: 230,
    id: "soilEcosystem",
    title: "Suivre le passage d’une feuille dans le sol",
    paths: ["/sciences-du-vivant-appliquees/agronomie/sols-et-fertilite/sols-vivants-et-erosion"],
    steps: [
      {
        label: "Déposer de la litière",
        caption: "Les feuilles et les racines mortes fournissent de la matière au sol.",
        detail:
          "Le dessin suit un fragment de litière. Sa transformation dépend aussi de l’humidité et de la température.",
      },
      {
        label: "Décomposer la matière",
        caption: "Champignons, bactéries et autres organismes transforment ces débris.",
        detail:
          "La planche montre les filaments de certains champignons. Une partie des éléments est rendue disponible sous d’autres formes.",
      },
      {
        label: "Faire circuler",
        caption: "La faune déplace des fragments et creuse des galeries.",
        detail:
          "Les pores et les galeries peuvent modifier les échanges d’air et d’eau. Les interactions dépendent des organismes présents.",
      },
    ],
    limit:
      "Coupe fictive avec organismes et racines agrandis. Les étapes peuvent se chevaucher et varient d’un sol à l’autre.",
    source: {
      title: "USDA NRCS — Soil Biology Primer",
      url: "https://www.nrcs.usda.gov/resources/education-and-teaching-materials/soil-biology-primer",
    },
  },
  {
    canvasHeight: 230,
    id: "natureServices",
    title: "Trois contributions visibles d’un milieu vivant",
    paths: [
      "/environnement-et-climat/biodiversite/ecosystemes/services-ecosystemiques-biodiversite",
    ],
    steps: [
      {
        label: "Transporter du pollen",
        caption: "Des insectes déplacent du pollen d’une fleur à une autre.",
        detail:
          "Pour les plantes concernées, ce transfert aide la reproduction et peut soutenir une récolte.",
      },
      {
        label: "Ralentir l’eau",
        caption:
          "Une zone végétalisée ou humide peut retenir une partie de l’eau et ralentir son écoulement.",
        detail:
          "Le relief, le sol et le type de végétation influencent l’effet. Un milieu saturé ne réagit pas de la même façon.",
      },
      {
        label: "Stocker du carbone",
        caption:
          "La végétation et les sols peuvent conserver du carbone pendant des périodes variables.",
        detail:
          "La photosynthèse incorpore du carbone dans la biomasse. Feu, dégradation et changements d’usage peuvent modifier le stock.",
      },
    ],
    limit:
      "Trois mécanismes illustratifs. Le dessin n’est ni une mesure locale, ni un inventaire de toutes les contributions de la nature.",
    source: {
      title: "IPBES — Contributions de la nature aux populations",
      url: "https://www.ipbes.net/",
    },
  },
  {
    canvasHeight: 230,
    id: "cityWaste",
    title: "Suivre les déchets d’une collecte à leurs filières",
    paths: [
      "/geographie-et-territoires/geographie-humaine/urbanisation/comment-une-grande-ville-se-debarrasse-t-elle-de-ses-dechets",
    ],
    steps: [
      {
        label: "Regrouper les déchets",
        caption: "La collecte rapproche les déchets de sites où ils peuvent être traités.",
        detail:
          "Les fréquences, les équipements et les consignes varient selon le territoire et le flux.",
      },
      {
        label: "Séparer les matières",
        caption: "Des installations trient certaines matières selon leur nature et leur qualité.",
        detail:
          "Un mélange mal trié peut demander d’autres opérations et compliquer la valorisation.",
      },
      {
        label: "Orienter les flux",
        caption: "Selon leur nature, les déchets prennent des chemins différents.",
        detail:
          "Le recyclage, le traitement biologique, la valorisation énergétique et l’enfouissement remplissent des fonctions distinctes dans un système de gestion.",
      },
    ],
    limit:
      "Parcours municipal générique. Les couleurs ne correspondent pas aux consignes d’une ville en particulier.",
    source: {
      title: "Banque mondiale — What a Waste",
      url: "https://www.worldbank.org/what-a-waste",
    },
  },
  {
    canvasHeight: 230,
    id: "isolatedHome",
    title: "Trois équilibres dans une maison autonome",
    paths: ["/energie/efficacite-et-sobriete/usages-et-consommation/maison-autonome-independante"],
    steps: [
      {
        label: "Réduire les besoins",
        caption: "Une enveloppe adaptée réduit la demande de chauffage et de refroidissement.",
        detail:
          "L’isolation et la conception de la maison influencent la quantité d’énergie qu’il faudra produire ou stocker.",
      },
      {
        label: "Décaler les usages",
        caption:
          "Une production qui varie dans la journée ne coïncide pas toujours avec la consommation.",
        detail:
          "Stocker une part de l’énergie et décaler certains usages sont deux manières de mieux rapprocher production et demande.",
      },
      {
        label: "Considérer l’eau",
        caption:
          "L’eau demande un autre bilan, avec des apports, des usages et des besoins de traitement.",
        detail:
          "Une réserve peut décaler la disponibilité. La qualité requise et la quantité utilisable dépendent des usages et du site.",
      },
    ],
    limit:
      "Coupe de fonctionnement, sans dimensionnement, branchement ni usage potable présumé. Une maison peut couvrir seulement une partie de ses besoins.",
    source: {
      title: "US Department of Energy — How to Design for Performance",
      url: "https://bsesc.energy.gov/energy-basics/how-design-performance",
    },
  },
  {
    canvasHeight: 230,
    id: "householdEnergy",
    title: "Repérer les usages de l’énergie dans le logement",
    paths: ["/energie/efficacite-et-sobriete/usages-et-consommation/ou-part-lenergie-dun-menage"],
    steps: [
      {
        label: "Chauffer le volume",
        caption:
          "Le chauffage couvre une partie des pertes à travers l’enveloppe et le renouvellement d’air.",
        detail:
          "La température extérieure, le climat et l’isolation modifient fortement ce poste selon le logement.",
      },
      {
        label: "Chauffer l’eau",
        caption: "Il faut aussi apporter de l’énergie à l’eau chaude sanitaire.",
        detail:
          "Le volume utilisé, la température et l’efficacité du système influencent la consommation.",
      },
      {
        label: "Utiliser les appareils",
        caption: "Éclairage, cuisson et appareils représentent d’autres usages de l’énergie.",
        detail:
          "La répartition varie avec le logement, les équipements et les habitudes. Une famille peut observer ses usages sur un relevé ou un suivi.",
      },
    ],
    limit:
      "Coupe qualitative. Les flèches ne donnent pas de parts chiffrées et le classement n’est pas universel.",
    source: {
      title: "Agence internationale de l’énergie — Energy Efficiency and Demand",
      url: "https://www.iea.org/energy-system/energy-efficiency-and-demand",
    },
  },
  {
    canvasHeight: 230,
    id: "hydrogenVector",
    title: "Suivre l’énergie avant et après l’hydrogène",
    paths: ["/energie/reseaux-et-stockage/hydrogene/hydrogene-couleurs-et-usages"],
    steps: [
      {
        label: "Disposer d’une énergie",
        caption:
          "Dans la voie représentée, de l’électricité est disponible avant la fabrication de l’hydrogène.",
        detail: "Le vecteur se place entre la ressource et le service qui utilisera cette énergie.",
      },
      {
        label: "Produire le vecteur",
        caption:
          "Un électrolyseur peut utiliser de l’électricité pour séparer l’eau en hydrogène et oxygène.",
        detail:
          "L’hydrogène obtenu peut ensuite véhiculer de l’énergie. D’autres procédés de production utilisent d’autres ressources.",
      },
      {
        label: "Atteindre un usage",
        caption:
          "La conversion en service utile demande une autre étape et s’accompagne de pertes.",
        detail:
          "La chaîne peut fournir un réactif, de la chaleur ou de l’électricité selon l’usage. Les étapes supplémentaires influencent le bilan.",
      },
    ],
    limit:
      "Principe sans conditions de production ou de stockage. Le rendement et les émissions dépendent de la filière choisie.",
    source: {
      title: "US Department of Energy — Hydrogen Production by Electrolysis",
      url: "https://www.energy.gov/cmei/fuels/hydrogen-production-electrolysis",
    },
  },
  {
    canvasHeight: 230,
    id: "petroleumMaterials",
    title: "Du pétrole à une chaîne de polymère",
    paths: [
      "/energie/energies-fossiles-et-nucleaire/hydrocarbures/pourquoi-trouve-t-on-du-petrole-dans-nos-sacs-nos-vetements-et-nos-medicaments",
    ],
    steps: [
      {
        label: "Choisir une fraction",
        caption: "Une fraction issue du pétrole peut devenir une matière première chimique.",
        detail:
          "Le gaz naturel fournit aussi des matières premières. Les voies de transformation dépendent du produit à fabriquer.",
      },
      {
        label: "Former des briques",
        caption:
          "Des procédés permettent d’obtenir de petites molécules servant de briques de départ.",
        detail:
          "La pétrochimie fournit par exemple des familles de molécules utilisables pour préparer différents plastiques.",
      },
      {
        label: "Allonger la chaîne",
        caption: "La polymérisation relie des motifs chimiques en longues chaînes.",
        detail:
          "Le nombre de motifs et la structure de la chaîne influencent les propriétés de la matière finale.",
      },
    ],
    limit:
      "Molécules stylisées et non cotées. Tous les polymères ne viennent pas du pétrole et tous les produits pétrochimiques ne sont pas des polymères.",
    source: {
      title: "US Energy Information Administration — Oil and plastic",
      url: "https://www.eia.gov/tools/faqs/faq.php?id=34&t=6",
    },
  },
  {
    canvasHeight: 230,
    id: "materialForming",
    title: "Enlever, déformer ou ajouter pour obtenir une forme",
    paths: ["/industries/materiaux-et-procedes/mise-en-forme/mise-en-forme-des-materiaux"],
    steps: [
      {
        label: "Enlever de la matière",
        caption: "Un outil d’usinage dégage de la matière pour créer un relief ou une cavité.",
        detail:
          "Les copeaux représentent ce qui a été retiré. Le résultat dépend de la matière et de la machine.",
      },
      {
        label: "Déformer la pièce",
        caption: "Une presse et un outil peuvent donner une nouvelle forme à une pièce.",
        detail:
          "Dans cet exemple, une tôle change de forme sous l’effort sans que le procédé principal enlève de matière.",
      },
      {
        label: "Ajouter des couches",
        caption: "Un procédé additif construit la forme en déposant ou consolidant des couches.",
        detail:
          "Le nombre de pièces, l’état de surface, les propriétés et la géométrie contribuent au choix du procédé.",
      },
    ],
    limit:
      "Outils stylisés et sans réglage de machine. Une même pièce peut nécessiter plusieurs familles de procédés.",
    source: {
      title: "MIT — Manufacturing Processes and Systems",
      url: "https://stuff.mit.edu/afs/athena.mit.edu/course/2/2.810/www/course-desc.html",
    },
  },
  {
    canvasHeight: 230,
    id: "logisticsChain",
    title: "Voir une petite variation remonter la chaîne",
    paths: [
      "/industries/industrie-manufacturiere/chaine-logistique/chaine-logistique-mondiale-perturbations",
    ],
    steps: [
      {
        label: "Observer la demande",
        caption: "Les achats des clients ont une variation limitée dans cet exemple.",
        detail: "Le graphique suit une petite hausse suivie d’un retour vers le niveau précédent.",
      },
      {
        label: "Commander au magasin",
        caption: "Le magasin peut commander davantage que la variation qu’il vient de constater.",
        detail:
          "Une prévision, un stock de sécurité ou des commandes par lots peuvent expliquer cette réaction.",
      },
      {
        label: "Réagir chez le fournisseur",
        caption: "Le fournisseur voit les commandes du magasin plutôt que les achats finaux.",
        detail:
          "S’il réagit aux changements de la même façon, il peut amplifier la variation une deuxième fois.",
      },
    ],
    limit:
      "Traces fictives sur la même échelle. L’effet de fouet n’est pas inévitable et plusieurs facteurs, dont les délais, peuvent le modifier.",
    source: {
      title: "MIT — Order Stability in Supply Chains",
      url: "https://dspace.mit.edu/entities/publication/2869b188-a6ef-4df7-aba2-d68bed37b8e3",
    },
  },
  {
    canvasHeight: 230,
    id: "factoryNavigation",
    title: "Trois manières de guider un chariot dans un atelier",
    paths: [
      "/industries/industrie-manufacturiere/automatisation/comment-des-chariots-sans-conducteur-trouvent-ils-leur-chemin-dans-une-usine",
    ],
    steps: [
      {
        label: "Suivre un tracé fixe",
        caption: "Un repère continu peut donner le chemin à suivre au chariot.",
        detail:
          "Un fil ou une ligne au sol offre un trajet prédéfini. Le chariot peut s’arrêter si sa zone de circulation est occupée.",
      },
      {
        label: "Lire des repères",
        caption: "Des repères espacés peuvent servir à identifier des positions dans l’atelier.",
        detail:
          "Le véhicule combine ces observations et son estimation de déplacement pour suivre le trajet prévu.",
      },
      {
        label: "Utiliser une carte",
        caption:
          "Un chariot qui se localise sur une carte peut, selon sa conception, recalculer une route.",
        detail:
          "Des capteurs évaluent l’espace libre. Le véhicule peut attendre ou emprunter un autre chemin autorisé.",
      },
    ],
    limit:
      "Plan fictif. Les méthodes, les capteurs de sécurité et les règles de circulation dépendent de l’installation.",
    source: {
      title: "Techniques de l’Ingénieur — Industrial trucks",
      url: "https://www.techniques-ingenieur.fr/en/resources/article/ti082/industrial-trucks-a9206",
    },
  },
  {
    canvasHeight: 230,
    id: "concreteBinder",
    title: "Ce qui change quand le liant change",
    paths: [
      "/technologies-et-ingenierie/genie-civil/materiaux/peut-on-fabriquer-du-beton-sans-ciment-portland-pour-emettre-moins-de-co2",
    ],
    steps: [
      {
        label: "Identifier le liant",
        caption: "Le liant durci relie les granulats et contribue aux propriétés du béton.",
        detail:
          "Le ciment Portland contient du clinker. Une partie des émissions de sa production provient de la fabrication de ce clinker.",
      },
      {
        label: "Réduire le clinker",
        caption: "Des ciments composés peuvent utiliser moins de clinker par quantité de ciment.",
        detail:
          "Des constituants supplémentaires modifient la formulation. Les propriétés à vérifier et les effets varient avec ces matériaux.",
      },
      {
        label: "Employer d’autres liants",
        caption:
          "Des matières riches en silice et alumine peuvent former des liants dans d’autres systèmes.",
        detail:
          "L’activation et le choix des matières modifient le bilan. L’empreinte dépend aussi du transport, de la production et de la durée d’usage.",
      },
    ],
    limit:
      "Coupe sans recette de formulation ni comparaison chiffrée. Les usages et les performances demandent une évaluation spécifique.",
    source: {
      title: "Techniques de l’Ingénieur — Ciments géopolymères",
      url: "https://www.techniques-ingenieur.fr/base-documentaire/materiaux-th11/surfaces-et-structures-fonctionnelles-42534210/ciments-geopolymeres-n3301/que-sont-les-ciments-geopolymeres-n3301niv10001.html",
    },
  },
  {
    canvasHeight: 230,
    id: "loadStructure",
    title: "Trois chemins pour transmettre une même charge",
    paths: [
      "/technologies-et-ingenierie/genie-civil/structures/burj-khalifa-plus-haut-batiment-du-monde",
    ],
    steps: [
      {
        label: "Comprendre l’arc",
        caption: "Un arc peut transmettre une charge aux appuis principalement par compression.",
        detail:
          "Les appuis doivent pouvoir reprendre les composantes de l’effort, dont une poussée horizontale dans cet exemple.",
      },
      {
        label: "Comprendre le câble",
        caption: "Un câble suspendu transmet l’effort surtout en traction.",
        detail:
          "Il tire sur ses ancrages. La forme qu’il prend dépend de la géométrie et de la manière dont la charge se répartit.",
      },
      {
        label: "Comprendre la poutre",
        caption: "La flexion comprime une partie de la poutre et tend l’autre.",
        detail:
          "Dans l’exemple simplement appuyé et chargé vers le bas, les fibres du haut sont comprimées et celles du bas tendues.",
      },
    ],
    limit:
      "Forces et déformations exagérées. Les flèches situent un trajet ou une charge et n’ont pas d’échelle de calcul.",
    source: {
      title: "OpenStax — Stress, Strain, and Elastic Modulus",
      url: "https://openstax.org/books/university-physics-volume-1/pages/12-3-stress-strain-and-elastic-modulus",
    },
  },
  {
    canvasHeight: 230,
    id: "printedBridge",
    title: "Du cordon imprimé à la passerelle assemblée",
    paths: [
      "/technologies-et-ingenierie/genie-civil/structures/comment-des-robots-impriment-ils-des-ponts-en-beton-ou-en-acier",
    ],
    steps: [
      {
        label: "Tracer un cordon",
        caption: "Une imprimante peut déposer une quantité de matière le long d’un trajet calculé.",
        detail:
          "Le déplacement crée une première forme. Le dessin représente un procédé de dépôt de matière.",
      },
      {
        label: "Superposer les couches",
        caption: "Les couches successives construisent le volume de l’élément.",
        detail:
          "Les interfaces, le séchage ou le durcissement et l’orientation des couches influencent le comportement de la pièce.",
      },
      {
        label: "Assembler la passerelle",
        caption:
          "Dans le projet illustré, des éléments imprimés sont assemblés pour former un arc.",
        detail:
          "La forme et la façon de reprendre les efforts sont définies pour le projet. Un ouvrage réel demande des essais et une vérification de structure.",
      },
    ],
    limit:
      "Illustration inspirée de Striatus. La planche ne fournit ni modèle d’exécution, ni paramètres d’impression, ni bilan carbone.",
    source: {
      title: "ETH Zurich — Striatus, une passerelle imprimée",
      url: "https://ethz.ch/en/news-and-events/eth-news/news/2021/07/3d-printed-and-unreinforced.html",
    },
  },
  {
    canvasHeight: 230,
    id: "robotSensing",
    title: "De la mesure à une décision de mouvement",
    paths: ["/technologies-et-ingenierie/robotique/perception/capteurs-perception-robotique"],
    steps: [
      {
        label: "Collecter des mesures",
        caption:
          "Un capteur relève des points, des intensités ou d’autres valeurs selon son principe.",
        detail:
          "Les points restent associés à une estimation de position, avec un champ et une incertitude.",
      },
      {
        label: "Interpréter",
        caption: "Un traitement peut regrouper certains points comme un objet probable.",
        detail:
          "Comparer plusieurs mesures réduit certaines ambiguïtés. Les erreurs et les angles morts restent possibles.",
      },
      {
        label: "Choisir un passage",
        caption: "Un programme peut proposer un mouvement dans la zone estimée libre.",
        detail:
          "La machine vérifie ensuite son environnement en continu. Perception, décision et action se corrigent au fil du mouvement.",
      },
    ],
    limit:
      "Scène qualitative. Le dessin n’établit aucun niveau de sûreté ni méthode pour régler un robot réel.",
    source: {
      title: "NIST — Perception Performance of Robotic Systems",
      url: "https://www.nist.gov/programs-projects/perception-performance-robotic-systems",
    },
  },
  {
    canvasHeight: 230,
    id: "topologicalSurface",
    title: "Voir la différence entre le volume et la surface",
    paths: [
      "/sciences-fondamentales/chimie/chimie-inorganique/un-materiau-peut-il-etre-isolant-a-l-interieur-et-conducteur-en-surface",
    ],
    steps: [
      {
        label: "Regarder le volume",
        caption:
          "Un isolant topologique peut présenter un volume isolant dans un domaine d’énergie donné.",
        detail:
          "Le schéma représente une situation idéale. Une impureté ou le niveau d’énergie réel peuvent changer le comportement mesuré.",
      },
      {
        label: "Regarder la surface",
        caption: "Des états électroniques de surface peuvent permettre le transport du courant.",
        detail:
          "Ces états résultent de la structure électronique du matériau et de symétries qui orientent leur protection.",
      },
      {
        label: "Comparer les contributions",
        caption:
          "Une mesure conçue pour la surface peut aider à distinguer son signal de celui du volume.",
        detail:
          "La géométrie, l’épaisseur et les conditions du test comptent. Les lignes montrent où peut passer le courant plutôt que des trajectoires individuelles.",
      },
    ],
    limit:
      "Bloc et lignes de courant stylisés. La planche n’implique ni conduction sans pertes, ni résistance à toute perturbation.",
    source: {
      title: "NIST — Topological Insulators",
      url: "https://www.nist.gov/programs-projects/topological-insulators",
    },
  },
  {
    canvasHeight: 230,
    id: "oceanTrench",
    title: "Repérer le domaine hadal au fond d’une fosse",
    paths: [
      "/sciences-fondamentales/sciences-de-la-terre/oceanographie/les-fosses-oceaniques-et-la-zone-hadale",
    ],
    steps: [
      {
        label: "Lire la coupe",
        caption: "Le fond de l’océan varie du relief élevé à des dépressions profondes.",
        detail:
          "Une forte verticale est nécessaire pour rendre le relief visible à l’échelle de l’image.",
      },
      {
        label: "Repérer une profondeur",
        caption:
          "Le terme hadal s’applique généralement aux profondeurs situées au-dessous d’environ 6 000 m.",
        detail:
          "Le pointillé indique un niveau de profondeur sous la surface. La limite est une convention de description.",
      },
      {
        label: "Regarder la fosse",
        caption: "Certaines fosses prolongent le domaine océanique au-delà de cette profondeur.",
        detail:
          "La forte pression, l’obscurité et la température influencent les conditions de vie. Des organismes sont adaptés à ces milieux.",
      },
    ],
    limit:
      "Relief et profondeur fortement schématisés. La coupe ne représente aucune fosse à l’échelle.",
    source: {
      title: "NOAA — Layers of the Ocean",
      url: "https://noaa.gov/jetstream/ocean/layers-of-ocean",
    },
  },
  {
    canvasHeight: 230,
    id: "algorithmCost",
    title: "Chercher le même nombre de deux façons",
    paths: ["/micro-informatique-et-informatique/logiciel/algorithmes/algorithmes-et-complexite"],
    steps: [
      {
        label: "Parcourir la liste",
        caption: "Une recherche séquentielle lit les valeurs jusqu’à trouver 28.",
        detail:
          "Dans cette liste, le nombre apparaît au septième emplacement. Une cible au début aurait demandé moins de comparaisons.",
      },
      {
        label: "Diviser la liste",
        caption: "Dans une liste triée, une comparaison permet d’écarter toute une moitié.",
        detail:
          "Ici on compare 28 à 16, puis à 24, puis à 28. Les trois marques suivent les comparaisons.",
      },
      {
        label: "Vérifier le prérequis",
        caption: "Dans une liste non triée, une comparaison ne suffit pas à éliminer une moitié.",
        detail:
          "Trier a lui-même un coût. Le meilleur choix dépend de la taille des données et du nombre de recherches prévues.",
      },
    ],
    limit:
      "Liste fictive de huit valeurs. Le dessin compte des comparaisons pour un cas précis, sans mesurer de durée de traitement.",
    source: {
      title: "MIT OpenCourseWare — Introduction to Algorithms",
      url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/",
    },
  },
  {
    canvasHeight: 230,
    id: "osResources",
    title: "À quoi le système donne accès",
    paths: [
      "/micro-informatique-et-informatique/logiciel/systemes-d-exploitation/histoire-principes-systemes-exploitation",
    ],
    steps: [
      {
        label: "Donner un créneau",
        caption:
          "Un système peut accorder du temps de processeur à une application prête à travailler.",
        detail:
          "L’ordonnanceur choisit une tâche parmi celles qui attendent, selon sa politique et les ressources disponibles.",
      },
      {
        label: "Passer à une autre tâche",
        caption: "Le système peut reprendre le contrôle et passer à une autre application.",
        detail:
          "Sur un cœur, des créneaux successifs donnent l’impression de travail simultané. Plusieurs cœurs peuvent aussi exécuter des tâches en parallèle.",
      },
      {
        label: "Isoler la mémoire",
        caption: "Le système peut séparer les espaces mémoire vus par différents programmes.",
        detail:
          "Les permissions et les mécanismes matériels contrôlent les accès. Certains échanges sont explicitement autorisés.",
      },
    ],
    limit:
      "Modèle simple. Les applications peuvent avoir plusieurs tâches et les systèmes gèrent aussi fichiers, périphériques et réseaux.",
    source: {
      title: "Linux Kernel Documentation — Scheduler",
      url: "https://docs.kernel.org/scheduler/index.html",
    },
  },
  {
    canvasHeight: 230,
    id: "digitalArchives",
    title: "Garder des données vérifiables et accessibles",
    paths: [
      "/micro-informatique-et-informatique/materiel/memoire-et-stockage/conserver-donnees-long-terme",
    ],
    steps: [
      {
        label: "Faire plusieurs copies",
        caption:
          "Des copies sur des supports ou dans des lieux différents réduisent certaines pertes simultanées.",
        detail:
          "La séparation des lieux protège notamment contre un incident qui touche un seul site.",
      },
      {
        label: "Comparer des empreintes",
        caption:
          "Une empreinte calculée sur le fichier permet de détecter certains changements de son contenu.",
        detail:
          "On la compare à une empreinte conservée. Une différence signale un fichier différent ou un problème lors de la comparaison.",
      },
      {
        label: "Migrer et contrôler",
        caption:
          "On peut déplacer des fichiers vers un nouveau support ou les convertir vers un format lisible.",
        detail:
          "Après transfert, on contrôle les fichiers. Convertir un format peut aussi demander de vérifier que le contenu utile a été préservé.",
      },
    ],
    limit:
      "Supports stylisés et aucun délai recommandé. Le nombre de copies et la fréquence de contrôle dépendent des besoins de conservation.",
    source: {
      title: "Library of Congress — Data Integrity Management",
      url: "https://www.loc.gov/programs/digital-collections-management/inventory-and-custody/data-integrity-management/",
    },
  },
  {
    canvasHeight: 230,
    id: "chipFabrication",
    title: "Du disque de silicium au composant assemblé",
    paths: ["/micro-informatique-et-informatique/materiel/processeurs/fabrique-puce"],
    steps: [
      {
        label: "Repérer les circuits",
        caption:
          "Un disque de silicium porte plusieurs exemplaires de circuits fabriqués par étapes.",
        detail:
          "Le quadrillage figure les futures puces. Les traitements et la vérification s’appliquent à différents moments.",
      },
      {
        label: "Détacher les dés",
        caption: "Le disque peut être découpé pour isoler chaque circuit.",
        detail:
          "Un dé est une puce nue. Le contrôle permet d’identifier les unités qui répondent aux critères de production.",
      },
      {
        label: "Assembler le boîtier",
        caption:
          "Le boîtier relie la puce à des contacts utilisables et contribue à sa protection.",
        detail:
          "Certains assemblages intègrent plusieurs dés. La disposition des contacts et l’évacuation de chaleur dépendent du produit.",
      },
    ],
    limit:
      "Vues hors échelle, centrées sur le passage du disque au composant. Les étapes peuvent être organisées différemment selon la technologie.",
    source: {
      title: "IBM — Semiconductor manufacturing",
      url: "https://www.ibm.com/think/topics/semiconductor-manufacturing",
    },
  },
  {
    canvasHeight: 230,
    id: "geostationary",
    title: "Pourquoi une antenne peut rester pointée au même endroit",
    paths: [
      "/communication-et-medias/telecommunications/satellites/communications-par-satellite-geostationnaire",
    ],
    steps: [
      {
        label: "Placer l’orbite",
        caption:
          "Une orbite géostationnaire est circulaire dans le plan de l’équateur, dans le sens de rotation terrestre.",
        detail:
          "Une orbite qui a seulement la même période mais qui est inclinée ne donne pas une position fixe dans le ciel.",
      },
      {
        label: "Faire tourner ensemble",
        caption:
          "La période du satellite correspond à la rotation de la Terre par rapport aux étoiles.",
        detail:
          "Le satellite reste au-dessus de la même longitude dans ce modèle. Son altitude est d’environ 35 786 km.",
      },
      {
        label: "Regarder depuis le sol",
        caption:
          "La direction du satellite reste à peu près fixe pour une antenne immobile qui peut le voir.",
        detail:
          "Des corrections réelles maintiennent le satellite près de sa position nominale. L’antenne reçoit le signal dans cette direction.",
      },
    ],
    limit:
      "Perspectives et distances hors échelle. Le repère terrestre représente la longitude à la verticale du satellite.",
    source: {
      title: "NOAA NESDIS — Why do satellites have different orbits?",
      url: "https://www.nesdis.noaa.gov/about/k-12-education/satellites-technology/why-do-satellites-have-different-orbits",
    },
  },
  {
    canvasHeight: 230,
    id: "walkPendulum",
    title: "Suivre le centre de masse pendant un pas",
    paths: [
      "/sport-et-sciences-du-mouvement/physiologie-de-l-effort/energetique-musculaire/marcher-et-porter-longtemps",
    ],
    steps: [
      {
        label: "Monter vers l’appui",
        caption: "Le centre de masse se soulève au cours de l’appui dans ce modèle de marche.",
        detail:
          "Quand il monte, son énergie potentielle de pesanteur augmente. Sa vitesse horizontale peut diminuer.",
      },
      {
        label: "Passer le pied",
        caption: "Le centre de masse se rapproche de son point haut pendant le simple appui.",
        detail:
          "Le membre d’appui joue approximativement le rôle de tige d’un pendule inversé. Le pied sert de base pour cette phase.",
      },
      {
        label: "Descendre vers l’autre appui",
        caption:
          "En redescendant, une partie de l’énergie potentielle redevient de l’énergie de mouvement.",
        detail:
          "La conversion reste partielle. Les muscles fournissent de l’énergie et les transitions entre appuis ont aussi un coût.",
      },
    ],
    limit:
      "Trajectoire et angles simplifiés. Le modèle présente l’échange d’énergie et ne donne aucun conseil de portage ou d’entraînement.",
    source: {
      title: "Cavagna et al. — Pendular energy transduction in walking",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1307665/",
    },
  },
  {
    canvasHeight: 230,
    id: "lorenzCurve",
    title: "Lire la distribution entière sur une courbe",
    paths: [
      "/sciences-humaines-et-sociales/economie/inegalites-et-redistribution/inegalites-de-revenu-et-de-patrimoine",
    ],
    steps: [
      {
        label: "Voir l’égalité",
        caption: "Si chaque personne reçoit la même part, la courbe suit la diagonale.",
        detail:
          "On classe d’abord les personnes du revenu le plus faible au plus élevé, puis on cumule leur part des revenus.",
      },
      {
        label: "Lire un écart",
        caption:
          "Une courbe sous la diagonale indique que les premiers groupes cumulent une part de revenu plus faible que leur part de population.",
        detail:
          "À mi-parcours horizontal, la hauteur donne la part reçue par la moitié des personnes aux revenus les plus faibles.",
      },
      {
        label: "Relier à un indicateur",
        caption: "L’indice de Gini rapporte l’aire de l’écart à l’aire sous la diagonale.",
        detail:
          "L’aire représente un résumé de l’inégalité, utile pour comparer selon une méthode cohérente. Des distributions différentes peuvent donner le même indice.",
      },
    ],
    limit:
      "Courbes fictives entre zéro et cent pour cent. Le dessin ne compare aucun pays ni aucun revenu observé.",
    source: {
      title: "Insee — Indice de Gini",
      url: "https://www.insee.fr/fr/metadonnees/definition/c1551",
    },
  },
  {
    canvasHeight: 230,
    id: "accountingEntries",
    title: "Enregistrer un achat qui déplace 60 €",
    paths: ["/sciences-humaines-et-sociales/economie/microeconomie/comptabilite-partie-double"],
    steps: [
      {
        label: "Identifier l’opération",
        caption: "Un commerçant utilise 60 € de sa caisse pour acheter du stock.",
        detail:
          "On suit deux comptes d’actifs dans cet exemple. L’achat augmente le stock et diminue la caisse.",
      },
      {
        label: "Écrire deux mouvements",
        caption: "Le stock reçoit un débit de 60 € et la caisse un crédit de 60 €.",
        detail:
          "Pour ces deux comptes d’actifs, le débit augmente le compte et le crédit le diminue. Le sens dépend du type de compte.",
      },
      {
        label: "Vérifier l’équilibre",
        caption: "Les montants des deux côtés sont égaux pour l’opération.",
        detail:
          "L’égalité permet certains contrôles arithmétiques. Elle ne suffit pas à détecter une opération oubliée ou imputée au mauvais compte.",
      },
    ],
    limit:
      "Achat fictif au comptant, sans taxes, avec suivi du stock en continu. L’exemple isole le principe de partie double.",
    source: {
      title: "OpenStax — Record transactions for merchandise purchases",
      url: "https://openstax.org/books/principles-financial-accounting/pages/6-3-analyze-and-record-transactions-for-merchandise-purchases-using-the-perpetual-inventory-system",
    },
  },
  {
    canvasHeight: 230,
    id: "externalCost",
    title: "Repérer un coût ou un bénéfice qui sort de l’échange",
    paths: [
      "/sciences-humaines-et-sociales/economie/microeconomie/pourquoi-la-pollution-d-une-usine-coute-t-elle-aussi-a-ses-voisins",
    ],
    steps: [
      {
        label: "Poser le décor",
        caption:
          "Une activité et son voisinage peuvent être liés en dehors d’un achat ou d’une vente.",
        detail:
          "Pour repérer une externalité, on cherche un effet sur quelqu’un qui n’est pas partie à l’échange.",
      },
      {
        label: "Suivre un coût",
        caption: "L’activité de l’usine peut imposer un coût au voisin si une pollution l’affecte.",
        detail:
          "Le dommage peut exister même s’il n’apparaît pas dans le prix du produit fabriqué.",
      },
      {
        label: "Suivre un bénéfice",
        caption: "Les abeilles de la ruche peuvent aussi polliniser le verger d’un voisin.",
        detail:
          "Le bénéfice pour le verger peut exister sans paiement à l’apiculteur. C’est le cas positif du même principe.",
      },
    ],
    limit:
      "Scènes fictives. On isole un effet extérieur à l’échange, sans en calculer la valeur et sans l’attribuer à un cas réel.",
    source: {
      title: "OpenStax — The Economics of Pollution",
      url: "https://openstax.org/books/principles-microeconomics-3e/pages/12-1-the-economics-of-pollution",
    },
  },
  {
    canvasHeight: 230,
    id: "commonResource",
    title: "Quand une ressource commune doit se renouveler",
    paths: [
      "/sciences-humaines-et-sociales/sociologie/groupes-et-normes/cooperation-biens-communs",
    ],
    steps: [
      {
        label: "Identifier le stock",
        caption: "Plusieurs personnes peuvent utiliser le même stock de poissons.",
        detail:
          "Ce qu’une personne prélève réduit ce qui reste aux autres, même si les usagers ont des intérêts communs à long terme.",
      },
      {
        label: "Observer la pression",
        caption: "Un prélèvement plus rapide que le renouvellement diminue le stock.",
        detail:
          "L’accès, les besoins et la capacité du milieu peuvent ensemble expliquer cette pression.",
      },
      {
        label: "Organiser l’usage",
        caption: "Des personnes peuvent établir et adapter des règles de prélèvement ensemble.",
        detail:
          "Des limites comprises, un suivi adapté et des moyens de traiter les désaccords peuvent compter dans la durée.",
      },
    ],
    limit:
      "Étang et nombre de poissons fictifs. L’effet des règles dépend du milieu, des personnes et de leur capacité à les ajuster.",
    source: {
      title: "Académie royale des sciences de Suède — Economic Governance and the Commons",
      url: "https://www.nobelprize.org/uploads/2018/06/advanced-economicsciences2009.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "groupConformity",
    title: "Comment un groupe peut peser sur une réponse",
    paths: ["/sciences-humaines-et-sociales/sociologie/groupes-et-normes/conformite-et-obeissance"],
    steps: [
      {
        label: "Faire la comparaison",
        caption: "Le trait de référence a la même longueur que B sur ce dessin.",
        detail: "La tâche consiste à comparer des longueurs visibles sans instrument.",
      },
      {
        label: "Entendre un accord",
        caption: "Le groupe annonce unanimement une autre réponse dans le scénario.",
        detail:
          "Dans une situation de ce type, un participant peut douter ou hésiter à s’opposer à la réponse donnée publiquement.",
      },
      {
        label: "Entendre un désaccord",
        caption: "Une personne qui répond différemment rompt l’unanimité du groupe.",
        detail:
          "Les expériences d’Asch montrent que la situation sociale influe sur les réponses selon le protocole et le contexte.",
      },
    ],
    limit:
      "Reconstitution de principe, sans pourcentage ni prédiction individuelle. L’exercice ne mesure pas un trait de personnalité.",
    source: {
      title: "Solomon Asch — Opinions and Social Pressure",
      url: "https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Influence_Compliance/Asch_1955_Opinions_and_social_pressure.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "taskSwitching",
    title: "Visualiser le temps perdu entre deux tâches",
    paths: [
      "/sciences-humaines-et-sociales/psychologie/cognition/pourquoi-ne-peut-on-pas-bien-faire-deux-choses-a-la-fois",
    ],
    steps: [
      {
        label: "Travailler par blocs",
        caption: "On peut réaliser la totalité d’une tâche, puis passer à l’autre.",
        detail:
          "La longueur de chaque couleur représente le temps passé à faire le même travail dans cet exemple.",
      },
      {
        label: "Alterner plus souvent",
        caption: "Faire des morceaux de chaque tâche impose davantage de changements.",
        detail:
          "Le temps visible sur les blocs reste le même. Les changements ont aussi leurs propres exigences.",
      },
      {
        label: "Ajouter les transitions",
        caption:
          "Le cerveau doit reprendre les règles ou les informations utiles à la nouvelle tâche.",
        detail:
          "Les espaces représentent un coût fictif de transition. Sa taille varie selon la tâche et la préparation possible.",
      },
    ],
    limit:
      "Temps fictifs. Certaines actions peuvent se dérouler en parallèle. Le coût concerne surtout les tâches qui se disputent l’attention ou des règles de réponse.",
    source: {
      title:
        "Rubinstein, Meyer et Evans — Executive Control of Cognitive Processes in Task Switching",
      url: "https://www.apa.org/pubs/journals/releases/xhp274763.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "compoundGrowth",
    title: "Voir où apparaissent les intérêts sur les intérêts",
    paths: ["/sciences-humaines-et-sociales/economie/microeconomie/interets-composes"],
    steps: [
      {
        label: "Partir de 1 000 €",
        caption: "On suppose un capital initial fictif de 1 000 € et un taux fixe de 5 % par an.",
        detail:
          "Les bandes du haut comparent les intérêts sur une même échelle. La coupure dans les barres abrège le dessin du capital initial.",
      },
      {
        label: "Ajouter 50 €",
        caption: "La première année, 5 % de 1 000 € font 50 €.",
        detail:
          "Le montant en fin d’année devient 1 050 €. Cette base sert au calcul suivant dans le modèle.",
      },
      {
        label: "Calculer sur 1 050 €",
        caption: "La deuxième année, 5 % de 1 050 € font 52,50 €.",
        detail:
          "Sur ces 52,50 €, 2,50 € proviennent des intérêts déjà ajoutés. Le solde de l’exemple atteint 1 102,50 €.",
      },
    ],
    limit:
      "Simulation arithmétique, taux constant, hors frais, fiscalité et inflation. Elle ne représente aucun placement réel.",
    source: {
      title: "OQLF — Intérêts composés",
      url: "https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/501409/interets-composes",
    },
  },
] satisfies LessonDiagramSpec[];
