import type { LessonDiagramSpec } from "./registry";

/** Exact associations for the 29 lessons reserved in the backend on 11 November 2026. */
export const ENERGY29_DIAGRAMS = [
  {
    canvasHeight: 230,
    id: "rebound",
    title: "Une meilleure lampe, puis davantage d’usage",
    paths: [
      "/energie/efficacite-et-sobriete/efficacite-energetique/efficacite-energetique-et-effet-rebond",
    ],
    steps: [
      {
        label: "Avant le changement",
        caption: "Dans cet exemple, une lampe de 60 W utilisée une heure consomme 60 Wh.",
        detail:
          "Le même service lumineux sert de point de départ. Les nombres sont inventés pour expliquer le calcul, pas les performances d’un produit.",
      },
      {
        label: "Même usage",
        caption: "À lumière comparable, 10 W pendant une heure ne consomment que 10 Wh.",
        detail:
          "À durée identique, le gain technique est de 50 Wh. La barre garde la même échelle que dans la première vue.",
      },
      {
        label: "Usage prolongé",
        caption: "Si la nouvelle lampe fonctionne trois heures, elle consomme 30 Wh.",
        detail:
          "L’économie devient 30 Wh au lieu de 50 Wh : dans cet exemple, 40 % du gain attendu est repris par l’usage supplémentaire.",
      },
    ],
    limit:
      "Exemple arithmétique fictif, à service lumineux supposé comparable. Il ne mesure aucun rebond réel et n’illustre pas les effets indirects de dépense.",
    source: {
      title: "AIE — Efficiency should always be the first answer",
      url: "https://www.iea.org/commentaries/efficiency-should-always-be-the-first-answer",
    },
  },
  {
    canvasHeight: 230,
    id: "refinery",
    title: "Séparer, puis transformer le pétrole",
    paths: ["/energie/energies-fossiles-et-nucleaire/hydrocarbures/raffinage-du-petrole"],
    steps: [
      {
        label: "Trier les fractions",
        caption: "Une colonne sépare des familles d’hydrocarbures selon leur volatilité.",
        detail:
          "Le bas est plus chaud que le haut. Les sorties représentent des coupes de distillation, pas des molécules pures triées seulement par leur poids.",
      },
      {
        label: "Recueillir les coupes",
        caption: "Gaz, coupes légères et coupes plus lourdes sont recueillis à différents niveaux.",
        detail:
          "Le dessin conserve le gradient de température. Les produits finis demandent souvent d’autres traitements et des mélanges.",
      },
      {
        label: "Craquer les molécules",
        caption: "Une opération distincte peut casser une longue chaîne en chaînes plus petites.",
        detail:
          "Le nombre de carbones est conservé dans cet exemple. Le craquage ne se déroule pas simplement dans les plateaux de la colonne.",
      },
    ],
    limit:
      "Schéma sans température, proportion de produits ni formule de carburant commercial. Le craquage montré conserve les carbones mais omet les hydrogènes et réactions secondaires.",
    source: {
      title: "EIA — Crude oil distillation",
      url: "https://www.eia.gov/todayinenergy/detail.php?id=6970",
    },
  },
  {
    canvasHeight: 230,
    id: "nuclearwaste",
    title: "Deux critères, puis plusieurs barrières",
    paths: ["/energie/energies-fossiles-et-nucleaire/nucleaire/dechets-radioactifs-et-stockage"],
    steps: [
      {
        label: "Distinguer les critères",
        caption:
          "L’activité d’un déchet et la durée de vie de ses radionucléides sont deux critères différents.",
        detail:
          "La grille est qualitative : les récipients ne représentent ni une statistique de volumes ni toutes les catégories réglementaires.",
      },
      {
        label: "Comprendre la demi-vie",
        caption:
          "Pour un radionucléide isolé, l’effectif moyen est divisé par deux à chaque demi-vie.",
        detail:
          "La suite 8, 4, 2, 1 est une espérance sur une grande population ramenée à huit unités. Une poignée de noyaux réels ne suit pas exactement cette suite.",
      },
      {
        label: "Multiplier les barrières",
        caption:
          "Pour certains déchets de haute activité vitrifiés, matrice, conteneur et roche retardent la dispersion.",
        detail:
          "Cette coupe générique ne décrit pas tous les déchets ni un stockage déjà autorisé. Les barrières ne font pas disparaître la radioactivité.",
      },
    ],
    limit:
      "Aucune échelle d’activité ou profondeur de projet. La demi-vie montrée concerne un radionucléide unique sans filiation radioactive ; la gestion dépend de la catégorie de déchet.",
    source: {
      title: "Andra — Classification et modes de gestion, PNGMDR",
      url: "https://www.andra.fr/sites/default/files/2017-12/PNGMDR-2010-2012-synthese.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "fusion",
    title: "Assembler des noyaux, confiner un plasma",
    paths: [
      "/energie/energies-fossiles-et-nucleaire/nucleaire/fusion-nucleaire-etat-des-recherches",
    ],
    steps: [
      {
        label: "Deux isotopes",
        caption:
          "Le deutérium apporte un proton et un neutron ; le tritium, un proton et deux neutrons.",
        detail:
          "Les billes rouges sont des protons, les bleues des neutrons. Elles ne dessinent pas des orbites ni la taille réelle des noyaux.",
      },
      {
        label: "La réaction D–T",
        caption: "La fusion D–T produit un noyau d’hélium et un neutron énergétique.",
        detail:
          "Les deux protons et trois neutrons initiaux se retrouvent dans les produits. L’énergie est libérée sous forme de mouvement, sans combustion.",
      },
      {
        label: "Le confinement",
        caption: "Dans un tokamak, les champs magnétiques confinent le plasma chargé.",
        detail:
          "L’anneau rose représente le plasma. Les neutrons, sans charge, atteignent les structures ; leur énergie et l’activation des matériaux doivent être gérées.",
      },
    ],
    limit:
      "Coupe symbolique d’un tokamak, sans dimension ni calendrier industriel. Ce schéma ne représente pas la chaîne de réactions dominante dans le Soleil et ne promet pas l’absence de déchets.",
    source: {
      title: "DOE — Deuterium-Tritium Fusion Fuel",
      url: "https://www.energy.gov/science/doe-explainsdeuterium-tritium-fusion-fuel",
    },
  },
  {
    canvasHeight: 230,
    id: "csp",
    title: "Du miroir à la chaleur stockée",
    paths: ["/energie/energies-renouvelables/solaire/solaire-thermique-et-concentration"],
    steps: [
      {
        label: "Concentrer la lumière",
        caption: "Des miroirs orientés dirigent la lumière vers le récepteur d’une tour.",
        detail:
          "Les traits dorés sont des rayons schématiques. Le fluide du récepteur chauffe ; ce n’est pas une conversion photovoltaïque.",
      },
      {
        label: "Conserver la chaleur",
        caption: "Un réservoir chaud peut recevoir le fluide chauffé par le récepteur.",
        detail:
          "Dans la variante à deux réservoirs, le fluide refroidi retourne au réservoir moins chaud puis au récepteur.",
      },
      {
        label: "Produire plus tard",
        caption:
          "La chaleur stockée peut encore alimenter une turbine quand le Soleil ne fournit plus d’énergie.",
        detail:
          "Un échangeur chauffe le circuit vapeur qui entraîne un alternateur. Le stock diminue : la production ne dure pas indéfiniment.",
      },
    ],
    limit:
      "Variante de centrale à tour et stockage thermique à deux réservoirs, sans bilan de rendement, durée de stockage ou géométrie optique exacte.",
    source: {
      title: "DOE — Concentrating Solar-Thermal Power Basics",
      url: "https://www.energy.gov/cmei/systems/concentrating-solar-thermal-power-basics",
    },
  },
  {
    canvasHeight: 230,
    id: "duckcurve",
    title: "Le Soleil et la demande n’ont pas le même horaire",
    paths: ["/energie/reseaux-et-stockage/reseaux-electriques/mix-electrique-et-intermittence"],
    steps: [
      {
        label: "La demande",
        caption: "Une journée fictive présente une demande plus forte en début de soirée.",
        detail:
          "La courbe bleue est une puissance dans des unités arbitraires ; elle ne représente pas la France, un relevé ou une prévision.",
      },
      {
        label: "Ajouter le solaire",
        caption:
          "La production solaire fictive culmine autour de midi et baisse avant la pointe du soir.",
        detail:
          "La zone dorée utilise la même échelle verticale que la demande. Aucune production éolienne n’est incluse.",
      },
      {
        label: "Calculer le reste",
        caption: "La demande résiduelle est calculée en soustrayant le solaire à la demande.",
        detail:
          "Le creux de midi et la remontée du soir apparaissent dans la courbe orange. D’autres moyens, échanges ou flexibilités doivent couvrir ce reste.",
      },
    ],
    limit:
      "Six points inventés, reliés par segments ; pas un modèle de réseau ou une courbe nationale. Les unités arbitraires servent uniquement à rendre la soustraction vérifiable.",
    source: {
      title: "DOE — Confronting the Duck Curve",
      url: "https://www.energy.gov/cmei/solar/articles/confronting-duck-curve-how-address-over-generation-solar-energy",
    },
  },
  {
    canvasHeight: 230,
    id: "energychain",
    title: "Compter la même énergie à trois étapes",
    paths: [
      "/energie/efficacite-et-sobriete/usages-et-consommation/energie-primaire-et-energie-finale",
    ],
    steps: [
      {
        label: "À la source",
        caption: "Le bilan fictif commence avec 100 unités d’énergie du combustible.",
        detail:
          "Le contour large représente une quantité d’énergie, pas un courant électrique. Aucun coefficient réglementaire n’est utilisé.",
      },
      {
        label: "Chez l’usager",
        caption: "Après transformation et transport, 35 unités arrivent chez l’utilisateur.",
        detail:
          "Dans cet exemple inventé, 65 unités ont été dissipées avant la livraison. La conversion d’une autre source aurait un autre bilan.",
      },
      {
        label: "Le service rendu",
        caption:
          "Sur les 35 unités finales, 28 rendent le service choisi et 7 sont dissipées à l’usage.",
        detail:
          "Le bilan se ferme : 65 + 7 + 28 = 100. Le mot utile dépend du service que l’on veut mesurer.",
      },
    ],
    limit:
      "Bilan énergétique fictif, non valeur de centrale ou facteur DPE. Les conventions statistiques d’énergie primaire dépendent de la filière ; les unités ne sont pas des données nationales.",
    source: {
      title: "SDES — Méthodologie du bilan énergétique, mars 2026",
      url: "https://www.statistiques.developpement-durable.gouv.fr/media/9074/download?inline=",
    },
  },
  {
    canvasHeight: 230,
    id: "watermill",
    title: "Du bief à la paire de meules",
    paths: ["/energie/energies-renouvelables/hydraulique/moulin-eau"],
    steps: [
      {
        label: "Recevoir l’eau",
        caption: "Le bief amène l’eau sur les augets d’une roue alimentée par le haut.",
        detail:
          "Le poids de l’eau dans les augets contribue à entraîner la roue. Le sens de rotation correspond au côté où les augets se remplissent.",
      },
      {
        label: "Transmettre le mouvement",
        caption: "Un arbre et des engrenages transmettent la rotation à un axe vertical.",
        detail:
          "La coupe de principe montre un renvoi d’angle. Les dents et rapports de vitesse ne sont pas dimensionnés.",
      },
      {
        label: "Moudre le grain",
        caption: "La meule supérieure tourne au-dessus de la meule inférieure fixe.",
        detail:
          "Le grain entre par le centre et se déplace vers le bord, où la farine est recueillie. Les pierres sont dessinées écartées pour rendre le trajet visible.",
      },
    ],
    limit:
      "Moulin générique à roue verticale par-dessus, pas reconstitution d’un site. Paliers, réglage d’écartement, carter et débit sont simplifiés ; pas de rapport de vitesse calculé.",
    source: {
      title: "Acorn Bank Watermill Trust — The mill machinery",
      url: "https://acornbankwatermill.org.uk/mill_working.html",
    },
  },
  {
    canvasHeight: 230,
    id: "leadacid",
    title: "Une réaction chimique que l’on peut inverser",
    paths: ["/energie/reseaux-et-stockage/batteries/batterie-plomb"],
    steps: [
      {
        label: "Les deux plaques",
        caption:
          "Une cellule comporte une plaque négative de plomb et une positive au dioxyde de plomb.",
        detail:
          "Les plaques baignent dans un électrolyte à base d’acide sulfurique. La coupe est un principe, pas un montage à reproduire.",
      },
      {
        label: "Décharger",
        caption: "En décharge, les deux plaques se transforment vers du sulfate de plomb.",
        detail:
          "Les électrons circulent dans le circuit extérieur du pôle négatif vers le positif. L’électrolyte participe à la réaction et se dilue.",
      },
      {
        label: "Recharger",
        caption: "Un chargeur fournit de l’énergie pour inverser les transformations.",
        detail:
          "Le sens du flux d’électrons externe s’inverse. Les mêmes bornes restent repérées + et − ; le dessin ne donne aucune consigne de charge.",
      },
    ],
    limit:
      "Une seule cellule simplifiée, sans tension, dosage, capacité ou procédure de fabrication. Le plomb est toxique et l’électrolyte corrosif ; ce n’est pas une expérience domestique.",
    source: {
      title: "MIT OpenCourseWare — Batteries and Energy Storage, cours 11",
      url: "https://ocw.mit.edu/courses/2-60j-fundamentals-of-advanced-energy-conversion-spring-2020/ed4b85c28d16b5cc2dd0d2635a5723f4_MIT2_60s20_lec11.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "electrolyser",
    title: "De l’électricité pour séparer l’eau",
    paths: ["/energie/reseaux-et-stockage/hydrogene/electrolyse-eau"],
    steps: [
      {
        label: "Apporter l’énergie",
        caption:
          "Une alimentation continue impose la réaction dans une cellule à membrane échangeuse de protons.",
        detail:
          "La borne positive est reliée à l’anode, la négative à la cathode. Ce choix PEM ne décrit pas toutes les technologies d’électrolyse.",
      },
      {
        label: "Séparer les trajets",
        caption:
          "À l’anode, l’eau forme de l’oxygène ; les protons traversent la membrane vers la cathode.",
        detail:
          "Les électrons passent par le circuit extérieur et l’alimentation. Ils ne traversent pas la membrane avec les protons.",
      },
      {
        label: "Former les gaz",
        caption: "À la cathode, les protons et les électrons forment l’hydrogène.",
        detail:
          "Le bilan est 2 H₂O → 2 H₂ + O₂. Les volumes de gaz sont dans le rapport 2:1 à température et pression identiques.",
      },
    ],
    limit:
      "Cellule PEM de principe, pas une recette avec eau salée ni un plan de raccordement. Aucun taux de production ou rendement n’est promis ; les gaz restent séparés.",
    source: {
      title: "DOE — Hydrogen Production: Electrolysis",
      url: "https://www.energy.gov/cmei/fuels/hydrogen-production-electrolysis",
    },
  },
  {
    canvasHeight: 230,
    id: "insulation",
    title: "Ralentir les transferts à travers l’enveloppe",
    paths: ["/energie/efficacite-et-sobriete/efficacite-energetique/isoler-batiment"],
    steps: [
      {
        label: "Repérer les pertes",
        caption: "Quand l’intérieur est plus chaud, de l’énergie est transférée vers l’extérieur.",
        detail:
          "Les flèches traversent le toit et les murs ; leur largeur n’est pas une mesure de la part des pertes.",
      },
      {
        label: "Ajouter une résistance",
        caption: "Une couche isolante continue réduit le transfert à travers la paroi.",
        detail:
          "À matériau identique, plus d’épaisseur augmente la résistance thermique. La pose, l’humidité et les autres couches comptent aussi.",
      },
      {
        label: "Traiter les jonctions",
        caption:
          "Une interruption d’isolant peut laisser un pont thermique au droit d’un plancher.",
        detail:
          "La loupe distingue la couche isolante et la dalle qui la traverse. Elle ne prescrit pas un détail de construction applicable à tout bâtiment.",
      },
    ],
    limit:
      "Coupe qualitative en hiver, sans température, pourcentage de pertes ou résistance de chantier. Isolation et étanchéité à l’air sont différentes ; la ventilation reste nécessaire.",
    source: {
      title: "DOE — Building America, Energy Renovations: Insulation",
      url: "https://www.energy.gov/sites/prod/files/2013/11/f5/insulation_guide.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "led",
    title: "Des charges électriques à la lumière",
    paths: [
      "/energie/efficacite-et-sobriete/efficacite-energetique/comment-une-led-fabrique-t-elle-de-la-lumiere-sans-chauffer-de-filament",
    ],
    steps: [
      {
        label: "La jonction",
        caption: "Une LED injecte des électrons et des trous dans un semi-conducteur.",
        detail:
          "Le trou est une absence d’électron mobile dans le matériau, pas une petite particule de matière ni un proton.",
      },
      {
        label: "Émettre un photon",
        caption: "Une recombinaison peut libérer de l’énergie sous forme d’un photon.",
        detail:
          "La couleur dépend notamment du matériau et de sa bande interdite. Toute l’énergie ne devient pas lumière : la LED dissipe aussi de la chaleur.",
      },
      {
        label: "Obtenir du blanc",
        caption: "Une LED bleue et un luminophore peuvent fournir un mélange perçu comme blanc.",
        detail:
          "Une partie de la lumière bleue est convertie en longueurs d’onde plus grandes. Le bleu restant se mélange à ces émissions.",
      },
    ],
    limit:
      "Représentation qualitative de porteurs et photons, pas trajectoires atomiques ni spectre mesuré. Le luminophore est une voie courante parmi plusieurs pour obtenir du blanc.",
    source: {
      title: "DOE — LED Basics",
      url: "https://www.energy.gov/cmei/ssl/led-basics",
    },
  },
  {
    canvasHeight: 230,
    id: "cogeneration",
    title: "Une machine, deux sorties utiles",
    paths: ["/energie/efficacite-et-sobriete/efficacite-energetique/cogeneration"],
    steps: [
      {
        label: "Produire du courant",
        caption: "Un moteur entraîne un alternateur et dégage aussi de la chaleur.",
        detail:
          "La rotation devient de l’énergie électrique. La branche orange représente la chaleur du moteur et de ses gaz, pas un second combustible.",
      },
      {
        label: "Récupérer la chaleur",
        caption: "Un échangeur récupère une partie de la chaleur pour un circuit d’eau.",
        detail:
          "Les fluides restent séparés dans l’échangeur. Des pertes persistent et aucun rendement universel n’est représenté.",
      },
      {
        label: "Utiliser les deux",
        caption: "Électricité et chaleur peuvent alimenter des usages simultanés sur un site.",
        detail:
          "Le bénéfice dépend d’un besoin réel de chaleur au bon moment. Récupérer une chaleur sans usage ne la rend pas utile.",
      },
    ],
    limit:
      "Installation générique moteur-alternateur avec récupération, sans puissance, bilan carbone ou rendement chiffré. Le circuit de chauffage est une boucle séparée.",
    source: {
      title: "EPA — What Is CHP?",
      url: "https://www.epa.gov/chp/what-chp",
    },
  },
  {
    canvasHeight: 230,
    id: "firewood",
    title: "L’eau du bois change la combustion",
    paths: ["/energie/efficacite-et-sobriete/usages-et-consommation/bois-chauffage"],
    steps: [
      {
        label: "Du bois humide",
        caption: "Une bûche humide contient de l’eau qu’il faut chauffer puis évaporer.",
        detail:
          "Les gouttes bleues symbolisent l’humidité. L’énergie consacrée à cette eau n’est pas entièrement disponible pour chauffer la pièce.",
      },
      {
        label: "Un bois séché",
        caption: "Un bois séché contient moins d’eau avant d’entrer dans le foyer.",
        detail:
          "L’aspect des gouttes est qualitatif : la couleur ou les fissures d’une bûche ne suffisent pas à mesurer son humidité.",
      },
      {
        label: "Un appareil adapté",
        caption:
          "Un poêle fermé transfère une partie de la chaleur vers la pièce et évacue les fumées.",
        detail:
          "Le conduit reste distinct de l’air de la pièce. Même du bois sec brûlé correctement produit des émissions, dont des particules.",
      },
    ],
    limit:
      "Aucun conseil d’installation, seuil d’humidité mesuré ni rendement annoncé. Le poêle n’est pas sans émissions et le conduit représenté n’est pas un plan de fumisterie.",
    source: {
      title: "EPA — Burn Wise: dry, seasoned wood",
      url: "https://www.epa.gov/sites/default/files/2016-11/documents/kit_3_health_and_safety_tips.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "glazing",
    title: "Deux vitres et une lame de gaz",
    paths: [
      "/energie/efficacite-et-sobriete/efficacite-energetique/comment-un-double-vitrage-garde-t-il-la-chaleur-dans-la-maison",
    ],
    steps: [
      {
        label: "Une vitre",
        caption:
          "Une paroi vitrée simple laisse passer des transferts thermiques entre les deux faces.",
        detail:
          "La face intérieure est supposée plus chaude. Les flèches orange représentent des transferts, pas une circulation d’air à travers le verre.",
      },
      {
        label: "Deux vitres",
        caption: "La lame de gaz enfermée entre deux vitres augmente la résistance thermique.",
        detail:
          "Le gaz n’est pas du vide. Sa conductivité, l’espacement, les bords et les mouvements internes influencent la performance.",
      },
      {
        label: "Une couche faible émissivité",
        caption: "Une couche adaptée réduit aussi les échanges radiatifs infrarouges.",
        detail:
          "Les traits courbes orange symbolisent l’infrarouge. La lumière visible peut toujours traverser ; la chaleur n’est pas bloquée intégralement.",
      },
    ],
    limit:
      "Coupe de principe, sans coefficient U ou épaisseur optimale universelle. Un vitrage performant n’efface pas les pertes du cadre, des bords ou du reste du bâtiment.",
    source: {
      title: "DOE — Window Types and Technologies",
      url: "https://www.energy.gov/energysaver/window-types-and-technologies",
    },
  },
  {
    canvasHeight: 230,
    id: "thermalmass",
    title: "Stocker le jour, refroidir quand c’est possible",
    paths: [
      "/energie/efficacite-et-sobriete/efficacite-energetique/pourquoi-une-maison-aux-murs-epais-de-pierre-ou-de-terre-reste-t-elle-fraiche-en-ete",
    ],
    steps: [
      {
        label: "Recevoir la chaleur",
        caption: "Le jour, une masse lourde absorbe progressivement de l’énergie thermique.",
        detail:
          "Les zones orange dans le mur symbolisent la chaleur stockée. La hausse de température intérieure peut être retardée, pas supprimée indéfiniment.",
      },
      {
        label: "Restituer lentement",
        caption: "Quand les conditions changent, la masse peut restituer la chaleur emmagasinée.",
        detail:
          "L’inertie amortit et décale les variations. Elle ne remplace pas une isolation et ne crée aucune source de froid.",
      },
      {
        label: "Refroidir la masse",
        caption:
          "Si l’air extérieur est plus frais, une ventilation nocturne peut aider à évacuer la chaleur.",
        detail:
          "Les flèches bleues sont ici de l’air, les orange de l’énergie. Par nuit chaude, ce refroidissement peut être insuffisant.",
      },
    ],
    limit:
      "Scénario qualitatif jour/nuit, sans température ou délai calculé. Le résultat dépend du climat, des apports, des protections solaires et de la ventilation réelle.",
    source: {
      title: "Building Performance NZ — Using thermal mass",
      url: "https://www.building.govt.nz/getting-started/smarter-homes-guides/design/using-thermal-mass-for-heating-and-cooling",
    },
  },
  {
    canvasHeight: 230,
    id: "standby",
    title: "Écran noir, quelques circuits encore actifs",
    paths: [
      "/energie/efficacite-et-sobriete/usages-et-consommation/pourquoi-un-appareil-en-veille-consomme-t-il-encore-de-l-electricite",
    ],
    steps: [
      {
        label: "En fonctionnement",
        caption: "L’alimentation fournit de l’énergie à l’écran et à l’électronique.",
        detail:
          "La coupe de télévision est générique. Les fils représentent des connexions internes, sans tension ou valeur de puissance.",
      },
      {
        label: "En veille",
        caption:
          "L’écran est éteint, mais le récepteur de commande et une partie de l’alimentation restent actifs.",
        detail:
          "Les éléments colorés sont encore alimentés. L’état de veille exact dépend de l’appareil et de ses fonctions réseau.",
      },
      {
        label: "Alimentation coupée",
        caption:
          "Quand la source secteur est réellement séparée, elle ne fournit plus d’énergie à ces circuits.",
        detail:
          "L’interrupteur dessiné est un symbole de séparation ; un appareil avec batterie ou une autre source peut encore être alimenté autrement.",
      },
    ],
    limit:
      "Principe de veille, sans norme réglementaire, chiffre de facture ni recommandation de débrancher tout appareil. La coupure montrée concerne uniquement cette alimentation secteur.",
    source: {
      title: "Lawrence Berkeley National Laboratory — Standby Power",
      url: "https://standby.lbl.gov/",
    },
  },
  {
    canvasHeight: 230,
    id: "pyrolysis",
    title: "Chauffer le bois avec peu d’oxygène",
    paths: ["/energie/energies-fossiles-et-nucleaire/charbon/charbon-bois"],
    steps: [
      {
        label: "Le bois de départ",
        caption: "Le bois contient du carbone, mais aussi de l’eau et d’autres constituants.",
        detail:
          "Les traits bruns représentent le bois. Le carbone n’est pas ajouté depuis l’extérieur pour fabriquer le charbon.",
      },
      {
        label: "La pyrolyse",
        caption:
          "La chaleur et un apport d’oxygène limité permettent une décomposition avec départ de vapeurs et de gaz.",
        detail:
          "La coupe sépare le foyer de chauffe et le bois traité. C’est une représentation générique de procédé, pas une meule à fabriquer.",
      },
      {
        label: "Le résidu solide",
        caption: "Après traitement et refroidissement adapté, un résidu riche en carbone demeure.",
        detail:
          "Une partie de la matière est partie en gaz et liquides. La masse de charbon ne représente pas toute la masse du bois initial.",
      },
    ],
    limit:
      "Sans durée, température de conduite ou mode opératoire. Les gaz de pyrolyse peuvent être inflammables et toxiques ; l’illustration ne propose pas d’expérience domestique.",
    source: {
      title: "FAO — Wood carbonisation and the products it yields",
      url: "https://www.fao.org/4/X5555E/x5555e03.htm",
    },
  },
  {
    canvasHeight: 230,
    id: "windmill",
    title: "Du vent aux engrenages, puis à la farine",
    paths: ["/energie/energies-renouvelables/eolien/moulins-vent"],
    steps: [
      {
        label: "Capter le vent",
        caption: "Les ailes d’un moulin entraînent un arbre presque horizontal.",
        detail:
          "Le moulin-tour générique se distingue d’une éolienne électrique. Les toiles et l’orientation sont simplifiées.",
      },
      {
        label: "Changer d’axe",
        caption: "Le rouet et la lanterne transmettent la rotation vers un axe vertical.",
        detail:
          "La coupe rend visible le renvoi d’angle. Les formes sont schématiques et ne définissent pas un nombre de dents ni un rapport de vitesse.",
      },
      {
        label: "Écraser le grain",
        caption: "La meule supérieure tourne, la meule inférieure reste fixe.",
        detail:
          "Le grain entre au centre et sort moulu vers le bord. Les pierres sont écartées dans la vue pédagogique ; le moulin ne produit pas ici d’électricité.",
      },
    ],
    limit:
      "Moulin-tour et mécanisme génériques, pas restitution d’un monument ni de tous les types de moulins. Aucun réglage de toile ou procédé d’exploitation n’est indiqué.",
    source: {
      title: "Acorn Bank Watermill Trust — Engrenages et paire de meules",
      url: "https://acornbankwatermill.org.uk/mill_working.html",
    },
  },
  {
    canvasHeight: 230,
    id: "solaroven",
    title: "Lumière reçue, chaleur conservée",
    paths: ["/energie/energies-renouvelables/solaire/four-chauffe-eau-solaires"],
    steps: [
      {
        label: "Diriger la lumière",
        caption: "Un réflecteur peut renvoyer une partie de la lumière vers un cuiseur boîte.",
        detail:
          "Le trait doré est un trajet schématique vers l’intérieur. Les angles ne dimensionnent pas un réflecteur réel.",
      },
      {
        label: "Absorber",
        caption: "Une surface sombre et le récipient absorbent l’énergie lumineuse.",
        detail:
          "La lumière devient de l’énergie thermique. La chaleur n’est pas apportée par une flamme invisible.",
      },
      {
        label: "Limiter les pertes",
        caption:
          "Le couvercle transparent et l’isolation limitent les pertes, notamment les échanges d’air.",
        detail:
          "De la chaleur s’échappe toujours. La vitre ne constitue pas une barrière parfaite ; l’ensoleillement et le vent changent le résultat.",
      },
    ],
    limit:
      "Cuiseur boîte de principe, pas recette de fabrication ni garantie de température ou de cuisson sûre. Le rôle du couvercle ne se réduit pas à emprisonner tous les infrarouges.",
    source: {
      title: "NASA — Make Sun S’mores",
      url: "https://www.nasa.gov/stem-content/make-sun-smores/",
    },
  },
  {
    canvasHeight: 230,
    id: "voltapile",
    title: "Des cellules empilées et un circuit extérieur",
    paths: [
      "/energie/reseaux-et-stockage/batteries/comment-volta-a-t-il-invente-la-premiere-pile-electrique",
    ],
    steps: [
      {
        label: "Un étage",
        caption: "Un étage associe deux métaux différents et un séparateur humide.",
        detail:
          "Le séparateur conduit des ions ; les électrons utilisent les parties métalliques et le circuit extérieur. Aucun dosage d’électrolyte n’est donné.",
      },
      {
        label: "Additionner les tensions",
        caption: "Des étages orientés de la même façon peuvent additionner leurs tensions.",
        detail:
          "Les disques métalliques entre étages sont en contact. Ajouter des étages ne garantit pas une puissance proportionnelle.",
      },
      {
        label: "Fermer le circuit",
        caption: "Dans le circuit fermé, les transformations chimiques entretiennent un courant.",
        detail:
          "Les flèches bleues figurent les électrons dans le fil, du pôle zinc négatif vers le pôle positif. La pile s’use et n’est pas une source illimitée.",
      },
    ],
    limit:
      "Pile générique zinc-cuivre inspirée de Volta, sans tension par étage ou reconstitution exacte d’un objet historique. Pas de montage expérimental ni de courant disponible promis.",
    source: {
      title: "Smithsonian — Battery: Voltaic Pile",
      url: "https://americanhistory.si.edu/pt/collections/object/nmah_703289",
    },
  },
  {
    canvasHeight: 230,
    id: "fuelcell",
    title: "Deux trajets pour les charges, puis de l’eau",
    paths: [
      "/energie/reseaux-et-stockage/hydrogene/comment-une-pile-a-hydrogene-produit-elle-de-l-electricite-sans-rien-bruler",
    ],
    steps: [
      {
        label: "Alimenter la cellule",
        caption: "Une pile PEM reçoit de l’hydrogène à l’anode et de l’oxygène à la cathode.",
        detail:
          "La membrane sépare les côtés. La pile consomme des réactifs ; elle ne stocke pas une réserve d’électricité infinie.",
      },
      {
        label: "Séparer les trajets",
        caption:
          "Les protons traversent la membrane tandis que les électrons passent par le circuit extérieur.",
        detail:
          "L’anode est ici le pôle négatif, la cathode le positif. Le sens électronique est opposé au sens conventionnel du courant.",
      },
      {
        label: "Former de l’eau",
        caption:
          "À la cathode, protons, électrons et oxygène réagissent pour former de l’eau et libérer de la chaleur.",
        detail:
          "L’électricité alimente le circuit extérieur tant que les réactifs et les conditions nécessaires sont maintenus.",
      },
    ],
    limit:
      "Pile PEM qualitative, sans rendement ni promesse de bilan carbone nul. La production et l’acheminement de l’hydrogène ont leur propre empreinte ; la membrane ne laisse pas passer les électrons.",
    source: {
      title: "DOE — Fuel Cell Animation, text version",
      url: "https://www.energy.gov/cmei/fuels/fuel-cell-animation-text-version",
    },
  },
  {
    canvasHeight: 230,
    id: "gridcascade",
    title: "Une panne peut déplacer les contraintes",
    paths: [
      "/energie/reseaux-et-stockage/reseaux-electriques/pourquoi-un-pays-entier-peut-il-se-retrouver-d-un-coup-sans-electricite",
    ],
    steps: [
      {
        label: "Plusieurs chemins",
        caption: "Dans ce réseau fictif, deux liaisons peuvent desservir des consommateurs.",
        detail:
          "Les traits sont des liaisons de réseau, pas un calcul de circulation de puissance. La redondance n’assure pas seule la stabilité.",
      },
      {
        label: "Une liaison se coupe",
        caption:
          "La perte d’une liaison reporte des contraintes sur les liaisons restées en service.",
        detail:
          "Dans le scénario montré, la liaison restante est insuffisante. Les signes orange sont des alertes, pas des seuils calculés.",
      },
      {
        label: "Limiter la cascade",
        caption:
          "Une coupure sélective peut réduire la demande à alimenter et préserver une partie du réseau.",
        detail:
          "La branche délestée est grisée, l’autre reste desservie. Cette action n’est ni une garantie universelle ni l’unique protection du réseau.",
      },
    ],
    limit:
      "Exemple hypothétique : pas une reconstitution du black-out ibérique, pas de cause réelle attribuée à un incident et pas de modèle de tension, fréquence ou capacité de lignes.",
    source: {
      title: "ENTSO-E — Expert panel, 28 April 2025 blackout",
      url: "https://www.entsoe.eu/publications/blackout/28-april-2025-iberian-blackout/",
    },
  },
  {
    canvasHeight: 230,
    id: "fission",
    title: "De la cassure du noyau à l’alternateur",
    paths: [
      "/energie/energies-fossiles-et-nucleaire/nucleaire/comment-un-atome-qui-se-casse-peut-il-allumer-une-ampoule",
    ],
    steps: [
      {
        label: "Un neutron arrive",
        caption: "Un neutron peut déclencher la fission d’un noyau fissile comme l’uranium 235.",
        detail:
          "Le noyau est symbolique : les billes n’en énumèrent pas les 235 nucléons. Un simple choc n’entraîne pas toujours une fission.",
      },
      {
        label: "La réaction libère de l’énergie",
        caption:
          "La fission produit des fragments et des neutrons qui peuvent entretenir une réaction en chaîne.",
        detail:
          "Une partie majeure de l’énergie est portée par le mouvement des fragments puis devient chaleur. Les barres de contrôle absorbent des neutrons.",
      },
      {
        label: "Transformer la chaleur",
        caption:
          "Dans cet exemple à eau pressurisée, un circuit primaire chauffe un circuit vapeur séparé.",
        detail:
          "La vapeur entraîne la turbine et l’alternateur. L’eau du réacteur ne voyage pas jusqu’à l’ampoule ; les boucles sont simplifiées.",
      },
    ],
    limit:
      "Réacteur à eau pressurisée de principe, pas tous les types de centrales. Aucun isotope de fragment, rendement ou débit n’est calculé ; refroidissement, pompes et protections sont simplifiés.",
    source: {
      title: "DOE — Fission and Fusion: What is the Difference?",
      url: "https://www.energy.gov/ne/articles/fission-and-fusion-what-difference",
    },
  },
  {
    canvasHeight: 230,
    id: "demandshift",
    title: "Déplacer un usage, sans le faire disparaître",
    paths: [
      "/energie/reseaux-et-stockage/reseaux-electriques/reseaux-electriques-intelligents-smart-grids",
    ],
    steps: [
      {
        label: "Un usage à la pointe",
        caption:
          "Dans cet exemple fictif, un chauffe-eau augmente l’énergie consommée dans le créneau du soir.",
        detail:
          "Les trois barres mesurent des kWh par créneau de même durée, pas une courbe de puissance nationale.",
      },
      {
        label: "Recevoir un signal",
        caption:
          "Un système de commande peut proposer un autre créneau compatible avec le service attendu.",
        detail:
          "Les pointillés sont des informations. Le compteur ne déplace pas à lui seul la consommation de tout appareil.",
      },
      {
        label: "Décaler le chauffage",
        caption: "Le même apport d’énergie est déplacé vers le milieu de journée dans cet exemple.",
        detail:
          "La somme des trois créneaux est conservée. Cette flexibilité suppose un équipement pilotable et le respect du besoin d’eau chaude.",
      },
    ],
    limit:
      "Exemple inventé à énergie et durée de créneaux constantes. Pas de tarif, effacement mesuré, consigne de température sanitaire ou garantie d’économie financière.",
    source: {
      title: "RTE — Mécanisme d’ajustement et effacement",
      url: "https://analysesetdonnees.rte-france.com/marches/equilibrage",
    },
  },
  {
    canvasHeight: 230,
    id: "agrivoltaic",
    title: "Partager une parcelle et la lumière",
    paths: [
      "/energie/energies-renouvelables/solaire/peut-on-produire-de-l-electricite-et-des-cultures-sur-le-meme-champ",
    ],
    steps: [
      {
        label: "Deux productions",
        caption: "Des panneaux surélevés produisent de l’électricité au-dessus d’une culture.",
        detail:
          "Les rangs et les supports sont génériques. Les panneaux ne remplacent pas la production agricole dans le principe illustré.",
      },
      {
        label: "Créer une ombre partielle",
        caption: "L’ombre change la lumière reçue par les plantes et le sol.",
        detail:
          "Une ombre peut limiter certains stress thermiques mais peut aussi réduire la photosynthèse. Le résultat dépend de la culture et des conditions.",
      },
      {
        label: "Chercher un compromis",
        caption:
          "L’écartement et l’orientation déterminent la répartition entre zones éclairées et ombragées.",
        detail:
          "Le dessin montre une autre géométrie, pas une récolte garantie ni une comparaison de rendements mesurés.",
      },
    ],
    limit:
      "Géométrie illustrative sans calcul solaire ou agronomique, sans rendement chiffré ni résumé des règles françaises. Aucune culture n’est présentée comme gagnante dans tous les climats.",
    source: {
      title: "DOE — Farmer’s Guide to Going Solar",
      url: "https://www.energy.gov/cmei/systems/farmers-guide-going-solar",
    },
  },
  {
    canvasHeight: 230,
    id: "compressedair",
    title: "Stocker de l’air et gérer sa chaleur",
    paths: [
      "/energie/reseaux-et-stockage/batteries/comment-stocker-de-l-electricite-dans-de-l-air-comprime",
    ],
    steps: [
      {
        label: "Comprimer",
        caption:
          "Une machine alimentée en électricité comprime de l’air vers un volume de stockage.",
        detail:
          "La compression échauffe l’air. Le trait bleu transporte de l’air et le trait orange représente un transfert thermique.",
      },
      {
        label: "Conserver",
        caption:
          "Dans la variante adiabatique montrée, un stockage thermique conserve une partie de la chaleur de compression.",
        detail:
          "Le réservoir d’air et celui de chaleur sont deux stockages différents. Ils ne contiennent pas directement des électrons du réseau.",
      },
      {
        label: "Détendre",
        caption:
          "La chaleur récupérée peut réchauffer l’air avant sa détente dans une machine entraînant un alternateur.",
        detail:
          "L’air traverse ensuite la machine et est rejeté. Les systèmes classiques à réchauffage par combustible ne sont pas représentés ici.",
      },
    ],
    limit:
      "Variante adiabatique qualitative, sans pression, rendement ou consigne d’exploitation. Les pertes subsistent ; une caverne n’est pas disponible sur n’importe quel site.",
    source: {
      title: "DOE — Compressed Air Energy Storage, SI 2030",
      url: "https://www.energy.gov/sites/default/files/2023-09/8_Technology%20Strategy%20Assessment%20-%208%20Compressed%20Air%20Energy%20Storage%20_508.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "gridbattery",
    title: "Absorber, restituer, garder une réserve",
    paths: [
      "/energie/reseaux-et-stockage/batteries/comment-une-mega-batterie-aide-t-elle-a-stabiliser-le-reseau-electrique",
    ],
    steps: [
      {
        label: "Charger",
        caption:
          "Une batterie raccordée par un convertisseur peut absorber de l’énergie du réseau.",
        detail:
          "L’électricité est convertie en énergie chimique. Les flèches indiquent le sens du transfert d’énergie, pas un sens permanent du courant alternatif.",
      },
      {
        label: "Soutenir le réseau",
        caption: "Le convertisseur peut restituer de la puissance depuis la batterie.",
        detail:
          "Le contrôle peut contribuer à l’équilibrage du réseau, dans les limites du convertisseur, de la charge disponible et de ses réglages.",
      },
      {
        label: "Distinguer MW et MWh",
        caption:
          "Une réserve fictive de 4 MWh pourrait fournir 2 MW pendant 2 h dans un calcul idéal.",
        detail:
          "La puissance limite le débit d’énergie, la capacité limite sa durée. Les pertes et marges de fonctionnement réduisent les possibilités réelles.",
      },
    ],
    limit:
      "Installation générique, pas Hornsdale ou Moss Landing. Exemple 2 MW / 4 MWh idéal ; pas de promesse de durée, vitesse de réaction universelle ou stabilité garantie.",
    source: {
      title: "DOE — Battery Energy Storage Systems, FEMP 2025",
      url: "https://www.energy.gov/sites/default/files/2025-08/femp_summer_camp_t2_s3_slides.pdf",
    },
  },
  {
    canvasHeight: 230,
    id: "flowbattery",
    title: "Des liquides pour l’énergie, des cellules pour la puissance",
    paths: [
      "/energie/reseaux-et-stockage/batteries/comment-une-batterie-peut-elle-stocker-de-l-energie-dans-des-reservoirs-de-liquide",
    ],
    steps: [
      {
        label: "Faire circuler",
        caption:
          "Deux circuits de liquide distincts traversent les deux côtés d’un empilement électrochimique.",
        detail:
          "Chaque réservoir dispose d’un trajet aller et retour. Les électrolytes ne sont pas mélangés dans une cuve centrale.",
      },
      {
        label: "Agrandir les réserves",
        caption:
          "À chimie comparable, davantage de liquide actif permet de stocker davantage d’énergie.",
        detail:
          "Les réservoirs changent de taille, l’empilement reste identique. La quantité de liquide ne suffit pas seule à décrire l’état de charge.",
      },
      {
        label: "Adapter la puissance",
        caption: "La taille et le nombre de cellules influencent la puissance disponible.",
        detail:
          "Ici, les réservoirs restent identiques à la vue précédente et l’empilement grandit. Les pompes et auxiliaires consomment aussi de l’énergie.",
      },
    ],
    limit:
      "Batterie à flux de principe, sans composition d’électrolyte ou performance chiffrée. Énergie et puissance sont dimensionnables séparément, sans être indépendantes de toutes les contraintes du système.",
    source: {
      title: "IEA Energy Storage — Technology: Flow Battery, 2024",
      url: "https://iea-es.org/wp-content/uploads/public/FactSheet_Electrochemical_Flow-Battery.pdf",
    },
  },
] as const satisfies readonly LessonDiagramSpec[];
