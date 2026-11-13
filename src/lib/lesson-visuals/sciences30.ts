import type { LessonDiagramSpec } from "./registry";

/** Thirty exact published paths reserved before illustration. */
export const SCIENCES30_DIAGRAMS = [
  {
    id: "cellmap",
    canvasHeight: 230,
    title: "Des cellules avec ou sans noyau",
    paths: ["/sciences-fondamentales/biologie/cellule/la-cellule-unite-du-vivant"],
    steps: [
      {
        label: "Le socle commun",
        caption:
          "Une membrane délimite le cytoplasme et sépare le contenu cellulaire du milieu extérieur.",
        detail:
          "Une membrane délimite le cytoplasme et sépare le contenu cellulaire du milieu extérieur. ADN et ribosomes sont présents dans les deux modèles.",
      },
      {
        label: "Une bactérie",
        caption:
          "Dans une bactérie, l’ADN occupe une région du cytoplasme sans être entouré par la membrane d’un noyau.",
        detail:
          "Dans une bactérie, l’ADN occupe une région du cytoplasme sans être entouré par la membrane d’un noyau. Les points représentent des ribosomes.",
      },
      {
        label: "Une cellule animale",
        caption: "Dans cette cellule animale, le noyau entoure une grande partie de l’ADN.",
        detail:
          "Dans cette cellule animale, le noyau entoure une grande partie de l’ADN. Des mitochondries et d’autres compartiments spécialisés sont présents.",
      },
    ],
    limit:
      "Coupes symboliques non à l’échelle ; une bactérie et une cellule animale ne représentent pas toutes les formes du vivant. Les ribosomes ne sont pas des organites à membrane.",
    source: {
      title: "OpenStax — Prokaryotic Cells",
      url: "https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells",
    },
  },
  {
    id: "foodweb",
    canvasHeight: 230,
    title: "Énergie et matière dans un réseau vivant",
    paths: ["/sciences-fondamentales/biologie/ecologie/chaines-alimentaires-et-ecosystemes"],
    steps: [
      {
        label: "Une chaîne",
        caption:
          "La lumière alimente une plante, mangée par un insecte, lui-même consommé par un oiseau.",
        detail:
          "La lumière alimente une plante, mangée par un insecte, lui-même consommé par un oiseau. Les flèches suivent le transfert de matière et d’énergie.",
      },
      {
        label: "Plusieurs chemins",
        caption: "Un même animal peut utiliser plusieurs ressources.",
        detail:
          "Un même animal peut utiliser plusieurs ressources. Les deux voies dessinées forment un petit réseau alimentaire plutôt qu’une chaîne unique.",
      },
      {
        label: "Le recyclage",
        caption: "Des restes rejoignent les décomposeurs.",
        detail:
          "Des restes rejoignent les décomposeurs. Des éléments minéraux retournent au sol et peuvent être repris par la plante ; l’énergie se dissipe aussi en chaleur.",
      },
    ],
    limit:
      "Réseau inventé, espèces simplifiées et flux non quantifiés. La matière peut être recyclée, mais l’énergie ne tourne pas en boucle.",
    source: {
      title: "OpenStax — Energy Flow through Ecosystems",
      url: "https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems",
    },
  },
  {
    id: "selectionbeetles",
    canvasHeight: 230,
    title: "La population change, pas par intention",
    paths: ["/sciences-fondamentales/biologie/evolution/theorie-evolution-selection-naturelle"],
    steps: [
      {
        label: "Variation initiale",
        caption: "La population de coléoptères contient déjà des individus clairs et foncés.",
        detail:
          "La population de coléoptères contient déjà des individus clairs et foncés. La variation existe avant la sélection et n’est pas créée par le besoin.",
      },
      {
        label: "Un milieu sélectif",
        caption: "Sur ce fond sombre, certains individus sont moins repérables par le prédateur.",
        detail:
          "Sur ce fond sombre, certains individus sont moins repérables par le prédateur. Les silhouettes pâles indiquent ici des pertes dans un exemple simplifié.",
      },
      {
        label: "Des descendants",
        caption:
          "Les survivants laissent des descendants et la fréquence du caractère foncé augmente.",
        detail:
          "Les survivants laissent des descendants et la fréquence du caractère foncé augmente. Aucun individu clair n’est dessiné en train de se transformer en foncé.",
      },
    ],
    limit:
      "Exemple fictif de camouflage avec caractère héritable ; effectifs inventés, autres mécanismes évolutifs non représentés.",
    source: {
      title: "OpenStax — Understanding Evolution",
      url: "https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution",
    },
  },
  {
    id: "resistantpopulation",
    canvasHeight: 230,
    title: "Une résistance sélectionnée dans la population",
    paths: [
      "/sciences-fondamentales/biologie/evolution/comment-les-bacteries-deviennent-elles-resistantes-aux-antibiotiques",
    ],
    steps: [
      {
        label: "Avant l’exposition",
        caption:
          "Quelques bactéries portent déjà un caractère de résistance au milieu de bactéries sensibles.",
        detail:
          "Quelques bactéries portent déjà un caractère de résistance au milieu de bactéries sensibles. Une résistance peut venir d’une mutation ou d’un gène acquis.",
      },
      {
        label: "La sélection",
        caption: "L’exposition à cet antibiotique réduit la population sensible dans cet exemple.",
        detail:
          "L’exposition à cet antibiotique réduit la population sensible dans cet exemple. La couleur des survivantes était déjà présente avant l’exposition.",
      },
      {
        label: "La multiplication",
        caption: "Les survivantes se divisent et transmettent leur résistance.",
        detail:
          "Les survivantes se divisent et transmettent leur résistance. La population change ; ce n’est ni le patient ni l’antibiotique qui apprend à résister.",
      },
    ],
    limit:
      "Exemple fictif : certains antibiotiques inhibent la multiplication plutôt que de tuer. Le transfert de gènes n’est pas dessiné. Aucun choix de traitement n’est proposé.",
    source: {
      title: "CDC — About Antimicrobial Resistance",
      url: "https://www.cdc.gov/antimicrobial-resistance/about/index.html",
    },
  },
  {
    id: "abomarkers",
    canvasHeight: 230,
    title: "A, B, AB, O : des marques de surface",
    paths: [
      "/sciences-fondamentales/biologie/genetique/pourquoi-n-avons-nous-pas-tous-le-meme-groupe-sanguin",
    ],
    steps: [
      {
        label: "A et B",
        caption: "Les globules rouges portent des motifs de surface différents.",
        detail:
          "Les globules rouges portent des motifs de surface différents. Le triangle représente l’antigène A et le carré l’antigène B, sans reproduire leur forme moléculaire.",
      },
      {
        label: "AB et O",
        caption: "Un globule AB porte les deux types de marques.",
        detail:
          "Un globule AB porte les deux types de marques. Un globule O ne porte ni A ni B ; il possède pourtant de nombreuses autres molécules de surface.",
      },
      {
        label: "Deux versions héritées",
        caption: "Dans cet exemple, un allèle A et un allèle B sont reçus des parents.",
        detail:
          "Dans cet exemple, un allèle A et un allèle B sont reçus des parents. Leur expression conjointe correspond au groupe AB, sans donner de probabilité familiale.",
      },
    ],
    limit:
      "Système ABO seul. Le dessin ne donne aucune règle de transfusion : Rh et de nombreux autres systèmes ne sont pas représentés.",
    source: {
      title: "NHS Blood Donation — Blood types",
      url: "https://www.blood.co.uk/why-give-blood/blood-types/",
    },
  },
  {
    id: "phscale",
    canvasHeight: 230,
    title: "Une unité de pH change beaucoup",
    paths: ["/sciences-fondamentales/chimie/chimie-inorganique/acides-bases"],
    steps: [
      {
        label: "Situer le pH",
        caption:
          "En solution aqueuse à 25 °C, les repères acide, neutre et basique se situent autour du pH 7.",
        detail:
          "En solution aqueuse à 25 °C, les repères acide, neutre et basique se situent autour du pH 7. Cette règle de neutralité dépend de la température.",
      },
      {
        label: "Comparer 3 et 4",
        caption:
          "À pH 3, la concentration en ions oxonium est environ dix fois celle à pH 4 dans le modèle dilué.",
        detail:
          "À pH 3, la concentration en ions oxonium est environ dix fois celle à pH 4 dans le modèle dilué. Les dix points et le point unique illustrent ce rapport.",
      },
      {
        label: "La neutralité",
        caption: "À la neutralité, les concentrations en ions oxonium et hydroxyde sont égales.",
        detail:
          "À la neutralité, les concentrations en ions oxonium et hydroxyde sont égales. Elles ne sont pas nulles : l’eau contient les deux types d’ions.",
      },
    ],
    limit:
      "Solutions aqueuses idéales diluées à 25 °C ; le pH n’est pas une échelle universellement limitée à 0–14 et ne mesure pas à lui seul le danger.",
    source: {
      title: "OpenStax — pH and pOH",
      url: "https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh",
    },
  },
  {
    id: "waterbonds",
    canvasHeight: 230,
    title: "La forme de l’eau relie ses propriétés",
    paths: [
      "/sciences-fondamentales/chimie/chimie-inorganique/l-eau-une-molecule-aux-proprietes-exceptionnelles",
    ],
    steps: [
      {
        label: "Une molécule coudée",
        caption: "Dans H₂O, les deux liaisons O–H forment un coude.",
        detail:
          "Dans H₂O, les deux liaisons O–H forment un coude. La répartition inégale des électrons donne des charges partielles, notées δ, et non des ions séparés.",
      },
      {
        label: "Entre voisines",
        caption:
          "Des attractions se forment entre un hydrogène partiellement positif et l’oxygène d’une voisine.",
        detail:
          "Des attractions se forment entre un hydrogène partiellement positif et l’oxygène d’une voisine. Les pointillés sont des liaisons hydrogène entre molécules.",
      },
      {
        label: "Un réseau ouvert",
        caption: "Un réseau de glace est plus ouvert que l’eau liquide.",
        detail:
          "Un réseau de glace est plus ouvert que l’eau liquide. La glace, moins dense dans les conditions ordinaires, flotte sur une eau représentée plus compacte.",
      },
    ],
    limit:
      "Vue moléculaire schématique en deux dimensions ; distances et orientation du réseau de glace sont simplifiées. Les traits O–H sont distincts des pointillés intermoléculaires.",
    source: {
      title: "OpenStax — Water",
      url: "https://openstax.org/books/biology-2e/pages/2-2-water",
    },
  },
  {
    id: "redoxpair",
    canvasHeight: 230,
    title: "Un transfert d’électrons couplé",
    paths: ["/sciences-fondamentales/chimie/chimie-inorganique/oxydation-reduction"],
    steps: [
      {
        label: "Avant le transfert",
        caption:
          "Un atome de zinc et un ion cuivre Cu²⁺ sont représentés avant une réaction possible.",
        detail:
          "Un atome de zinc et un ion cuivre Cu²⁺ sont représentés avant une réaction possible. Deux électrons vont être transférés du zinc vers le cuivre.",
      },
      {
        label: "Perdre et gagner",
        caption: "Le zinc perd deux électrons : il est oxydé.",
        detail:
          "Le zinc perd deux électrons : il est oxydé. L’ion cuivre gagne les deux mêmes électrons : il est réduit. Les deux transformations sont couplées.",
      },
      {
        label: "Après le transfert",
        caption: "L’état final représente Zn²⁺ et Cu métallique.",
        detail:
          "L’état final représente Zn²⁺ et Cu métallique. La charge totale et les atomes sont conservés, même si leur état chimique a changé.",
      },
    ],
    limit:
      "Exemple Zn + Cu²⁺ → Zn²⁺ + Cu ; solvant et contre-ions omis. Les électrons et les distances sont des symboles, pas des trajectoires atomiques.",
    source: {
      title: "OpenStax — Classifying Chemical Reactions",
      url: "https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions",
    },
  },
  {
    id: "periodicmap",
    canvasHeight: 230,
    title: "Lire les premières lignes du tableau",
    paths: ["/sciences-fondamentales/chimie/chimie-inorganique/tableau-periodique-des-elements"],
    steps: [
      {
        label: "Le numéro atomique",
        caption: "Les huit protons de l’oxygène fixent son numéro atomique Z = 8.",
        detail:
          "Les huit protons de l’oxygène fixent son numéro atomique Z = 8. Changer le nombre de neutrons ne change pas l’élément ; changer celui des protons le change.",
      },
      {
        label: "Une période",
        caption: "De Li à Ne, le numéro atomique augmente de gauche à droite.",
        detail:
          "De Li à Ne, le numéro atomique augmente de gauche à droite. Cet extrait aligne les familles des premières périodes sans afficher les blocs des périodes suivantes.",
      },
      {
        label: "Une famille",
        caption:
          "Li et Na sont alignés dans une même famille et présentent des ressemblances chimiques.",
        detail:
          "Li et Na sont alignés dans une même famille et présentent des ressemblances chimiques. Le modèle ne prétend pas que tous les éléments d’une colonne sont identiques.",
      },
    ],
    limit:
      "Extrait des trois premières périodes : H à Ar. Neutrons et couches électroniques non représentés ; blocs d et f et règles détaillées de valence omis.",
    source: {
      title: "OpenStax — The Periodic Table",
      url: "https://openstax.org/books/chemistry-2e/pages/2-5-the-periodic-table",
    },
  },
  {
    id: "carbonbonds",
    canvasHeight: 230,
    title: "Quatre liaisons, plusieurs constructions",
    paths: ["/sciences-fondamentales/chimie/chimie-organique/molecule-carbone-composes-organiques"],
    steps: [
      {
        label: "Le méthane",
        caption:
          "Dans ce modèle de méthane CH₄, un carbone forme quatre liaisons simples avec quatre hydrogènes.",
        detail:
          "Dans ce modèle de méthane CH₄, un carbone forme quatre liaisons simples avec quatre hydrogènes. La disposition dessinée à plat ne représente pas sa forme tétraédrique.",
      },
      {
        label: "Une chaîne",
        caption:
          "Deux carbones liés entre eux et complétés par six hydrogènes forment l’éthane C₂H₆.",
        detail:
          "Deux carbones liés entre eux et complétés par six hydrogènes forment l’éthane C₂H₆. Le carbone peut ainsi constituer un squelette de plusieurs atomes.",
      },
      {
        label: "Un groupe fonctionnel",
        caption: "En remplaçant une extrémité par un groupe –OH, on obtient ici l’éthanol C₂H₆O.",
        detail:
          "En remplaçant une extrémité par un groupe –OH, on obtient ici l’éthanol C₂H₆O. Le groupe fonctionnel change les propriétés de la molécule.",
      },
    ],
    limit:
      "Modèles de connectivité à plat, sans échelle ni géométrie 3D. Chaque carbone conserve quatre liaisons ; toutes les molécules carbonées ne sont pas dessinées.",
    source: {
      title: "OpenStax — Hydrocarbons",
      url: "https://openstax.org/books/chemistry-2e/pages/20-1-hydrocarbons",
    },
  },
  {
    id: "methaneflame",
    canvasHeight: 230,
    title: "Brûler réorganise les atomes",
    paths: ["/sciences-fondamentales/chimie/chimie-physique/combustion"],
    steps: [
      {
        label: "Les réactifs",
        caption:
          "Une molécule de méthane et deux molécules de dioxygène fournissent un carbone, quatre hydrogènes et quatre oxygènes.",
        detail:
          "Une molécule de méthane et deux molécules de dioxygène fournissent un carbone, quatre hydrogènes et quatre oxygènes. Le dessin suit ce petit bilan.",
      },
      {
        label: "L’amorçage",
        caption: "Une énergie d’amorçage permet de franchir la barrière de départ.",
        detail:
          "Une énergie d’amorçage permet de franchir la barrière de départ. La réaction peut ensuite dégager de l’énergie, sans créer ni supprimer les atomes.",
      },
      {
        label: "Les produits",
        caption: "La combustion complète représentée produit une molécule de CO₂ et deux de H₂O.",
        detail:
          "La combustion complète représentée produit une molécule de CO₂ et deux de H₂O. Le carbone, l’hydrogène et l’oxygène sont tous conservés.",
      },
    ],
    limit:
      "Combustion complète idéale du méthane, pas du bois. Air, mécanisme radicalaire et combustion incomplète omis ; aucun protocole d’allumage.",
    source: {
      title: "OpenStax — Writing and Balancing Chemical Equations",
      url: "https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations",
    },
  },
  {
    id: "dynamicbalance",
    canvasHeight: 230,
    title: "À l’équilibre, les échanges continuent",
    paths: ["/sciences-fondamentales/chimie/chimie-physique/reactions-chimiques-et-equilibre"],
    steps: [
      {
        label: "État initial",
        caption:
          "Le récipient fermé contient surtout des particules A dans cet exemple réversible A ⇌ B.",
        detail:
          "Le récipient fermé contient surtout des particules A dans cet exemple réversible A ⇌ B. Les couleurs représentent deux espèces, sans réaction réelle particulière.",
      },
      {
        label: "Deux sens possibles",
        caption: "Des transformations A vers B et B vers A peuvent se produire.",
        detail:
          "Des transformations A vers B et B vers A peuvent se produire. Le nombre de flèches symbolise des échanges, pas des particules qui traversent la paroi.",
      },
      {
        label: "Vitesses égales",
        caption:
          "Les vitesses opposées deviennent égales : les effectifs moyens restent constants.",
        detail:
          "Les vitesses opposées deviennent égales : les effectifs moyens restent constants. Il peut rester davantage de A que de B ; équilibre ne signifie pas mêmes quantités.",
      },
    ],
    limit:
      "Modèle fictif A ⇌ B à volume et température constants. Les nombres sont illustratifs et ne permettent pas de calculer une constante réelle.",
    source: {
      title: "OpenStax — Chemical Equilibria",
      url: "https://openstax.org/books/chemistry-2e/pages/13-1-chemical-equilibria",
    },
  },
  {
    id: "maillardfood",
    canvasHeight: 230,
    title: "Du pain pâle à une croûte aromatique",
    paths: [
      "/sciences-fondamentales/chimie/chimie-physique/pourquoi-la-croute-du-pain-et-la-viande-grillee-ont-elles-ce-gout-et-cette-couleur",
    ],
    steps: [
      {
        label: "La surface humide",
        caption: "La mie humide et la surface pâle sont distinguées dans cette coupe de pain.",
        detail:
          "La mie humide et la surface pâle sont distinguées dans cette coupe de pain. L’eau qui s’évapore emporte de l’énergie et influence la température de surface.",
      },
      {
        label: "La surface chauffe",
        caption:
          "La surface moins humide peut brunir plus vite dans des conditions de cuisson adaptées.",
        detail:
          "La surface moins humide peut brunir plus vite dans des conditions de cuisson adaptées. Des sucres réducteurs réagissent avec des groupes aminés présents dans l’aliment.",
      },
      {
        label: "Des réactions en réseau",
        caption: "Le brunissement et des composés aromatiques résultent d’un réseau de réactions.",
        detail:
          "Le brunissement et des composés aromatiques résultent d’un réseau de réactions. Le dessin ne donne pas une molécule unique d’arôme et distingue cette voie des sucres seuls.",
      },
    ],
    limit:
      "Schéma qualitatif sans recette, seuil universel ni durée. La réaction de Maillard peut aussi être lente ; couleur seule ≠ preuve d’une cuisson sûre.",
    source: {
      title: "ACS / C&EN — Maillard Reaction",
      url: "https://cen.acs.org/articles/89/i47/Maillard-Reaction.html",
    },
  },
  {
    id: "eratosthenes",
    canvasHeight: 230,
    title: "Relier une ombre à un tour de Terre",
    paths: [
      "/sciences-fondamentales/mathematiques/geometrie/comment-eratosthene-a-t-il-mesure-la-terre-avec-une-ombre",
    ],
    steps: [
      {
        label: "Deux verticales",
        caption: "Deux bâtons suivent les verticales locales d’une Terre courbe.",
        detail:
          "Deux bâtons suivent les verticales locales d’une Terre courbe. Les rayons solaires sont supposés parallèles ; les ombres diffèrent au même instant.",
      },
      {
        label: "Le même angle",
        caption:
          "L’angle entre les rayons et une verticale correspond à l’angle au centre entre les deux sites dans ce modèle géométrique simplifié.",
        detail:
          "L’angle entre les rayons et une verticale correspond à l’angle au centre entre les deux sites dans ce modèle géométrique simplifié.",
      },
      {
        label: "Changer d’échelle",
        caption:
          "Si 7,2° correspondent à la distance d entre les deux sites, le tour vaut 360 / 7,2 × d, soit 50 × d.",
        detail:
          "Si 7,2° correspondent à la distance d entre les deux sites, le tour vaut 360 / 7,2 × d, soit 50 × d. On conserve l’unité de longueur choisie.",
      },
    ],
    limit:
      "Angle du dessin volontairement agrandi. Sites idéalisés sur un même méridien ; longueur historique du stade non tranchée.",
    source: {
      title: "OpenStax — Ancient Astronomy",
      url: "https://openstax.org/books/astronomy-2e/pages/2-2-ancient-astronomy",
    },
  },
  {
    id: "mapprojection",
    canvasHeight: 230,
    title: "Une sphère ne s’aplatit pas sans déformation",
    paths: [
      "/sciences-fondamentales/mathematiques/geometrie/pourquoi-aucune-carte-du-monde-a-plat-ne-peut-elle-etre-parfaitement-fidele",
    ],
    steps: [
      {
        label: "Le globe",
        caption: "Des repères locaux identiques sur le globe servent à suivre la déformation.",
        detail:
          "Des repères locaux identiques sur le globe servent à suivre la déformation. Ils ne représentent pas la superficie complète de pays ou de continents.",
      },
      {
        label: "Mercator",
        caption:
          "Dans la projection de Mercator, les petits repères restent localement ronds mais grossissent vers les hautes latitudes.",
        detail:
          "Dans la projection de Mercator, les petits repères restent localement ronds mais grossissent vers les hautes latitudes. Les pôles ne sont pas représentables à distance finie.",
      },
      {
        label: "Cylindrique équivalente",
        caption:
          "La projection cylindrique équivalente conserve ici les surfaces des petits repères, au prix d’un aplatissement des formes vers les hautes latitudes.",
        detail:
          "La projection cylindrique équivalente conserve ici les surfaces des petits repères, au prix d’un aplatissement des formes vers les hautes latitudes.",
      },
    ],
    limit:
      "Projection sphérique calculée ; indicatrices locales agrandies, pas contours de pays. Globe et cartes n’utilisent pas une échelle commune.",
    source: {
      title: "USGS — How are different map projections used?",
      url: "https://www.usgs.gov/faqs/how-are-different-map-projections-used",
    },
  },
  {
    id: "circlepi",
    canvasHeight: 230,
    title: "Le tour vaut un peu plus de trois diamètres",
    paths: [
      "/sciences-fondamentales/mathematiques/geometrie/pourquoi-le-nombre-pi-se-cache-t-il-dans-tous-les-cercles",
    ],
    steps: [
      {
        label: "Mesurer le diamètre",
        caption: "Le diamètre traverse le centre du cercle.",
        detail:
          "Le diamètre traverse le centre du cercle. Une ficelle idéale posée sur le contour mesure la circonférence, qui doit être distinguée du rayon.",
      },
      {
        label: "Dérouler le tour",
        caption: "La longueur déroulée est comparée à trois segments égaux au diamètre.",
        detail:
          "La longueur déroulée est comparée à trois segments égaux au diamètre. Il reste environ 0,14 diamètre : le rapport vaut π, et non exactement 3.",
      },
      {
        label: "Comparer les tailles",
        caption:
          "Deux cercles de tailles différentes ont le même rapport entre circonférence et diamètre.",
        detail:
          "Deux cercles de tailles différentes ont le même rapport entre circonférence et diamètre. Changer l’échelle multiplie les deux longueurs dans la même proportion.",
      },
    ],
    limit:
      "Géométrie euclidienne idéale. Les traits déroulés utilisent une même échelle dans leur vue ; 3,14 est une approximation de π.",
    source: {
      title: "OpenStax — Geometry Applications: Circles",
      url: "https://openstax.org/books/prealgebra-2e/pages/9-5-solve-geometry-applications-circles-and-irregular-figures",
    },
  },
  {
    id: "meanmedian",
    canvasHeight: 230,
    title: "Une série, trois façons de la résumer",
    paths: [
      "/sciences-fondamentales/mathematiques/probabilites-et-statistiques/la-moyenne-la-mediane-et-le-mode-trois-mesures-distinctes",
    ],
    steps: [
      {
        label: "Moyenne",
        caption: "Pour la série 2, 3, 3, 4, 38, le total vaut 50.",
        detail:
          "Pour la série 2, 3, 3, 4, 38, le total vaut 50. Réparti sur cinq valeurs, il donne une moyenne de 10, très éloignée de la plupart des observations.",
      },
      {
        label: "Médiane",
        caption: "La série est déjà rangée.",
        detail:
          "La série est déjà rangée. La troisième des cinq valeurs est 3 : c’est la médiane, avec deux observations de chaque côté, même si certaines sont égales.",
      },
      {
        label: "Mode",
        caption: "La valeur 3 apparaît deux fois, plus que toutes les autres : c’est le mode.",
        detail:
          "La valeur 3 apparaît deux fois, plus que toutes les autres : c’est le mode. Il répond à une question de fréquence plutôt qu’à une question de partage.",
      },
    ],
    limit:
      "Série pédagogique inventée. Les colonnes et leur axe sont à échelle commune ; la médiane n’exige pas que 50 % soient strictement inférieurs.",
    source: {
      title: "OpenStax — Measures of the Center of the Data",
      url: "https://openstax.org/books/introductory-statistics-2e/pages/2-5-measures-of-the-center-of-the-data",
    },
  },
  {
    id: "samplingmeans",
    canvasHeight: 230,
    title: "Une fréquence peut se stabiliser",
    paths: [
      "/sciences-fondamentales/mathematiques/probabilites-et-statistiques/la-loi-des-grands-nombres",
    ],
    steps: [
      {
        label: "Peu de lancers",
        caption:
          "Les premières observations d’une séquence de lancers indépendants d’une pièce équilibrée peuvent s’éloigner de 50 %.",
        detail:
          "Les premières observations d’une séquence de lancers indépendants d’une pièce équilibrée peuvent s’éloigner de 50 %. L’exemple est simulé et reproductible.",
      },
      {
        label: "Davantage de lancers",
        caption:
          "La fréquence cumulée fluctue encore, mais sur une plus grande série les écarts relatifs deviennent ici plus petits.",
        detail:
          "La fréquence cumulée fluctue encore, mais sur une plus grande série les écarts relatifs deviennent ici plus petits. Ce tracé n’est pas une garantie pour tout nombre de lancers.",
      },
      {
        label: "Sans dette du hasard",
        caption:
          "Le prochain lancer garde une probabilité de 1/2 de donner pile, même après plusieurs piles.",
        detail:
          "Le prochain lancer garde une probabilité de 1/2 de donner pile, même après plusieurs piles. Les écarts passés ne rendent pas face obligatoire.",
      },
    ],
    limit:
      "Une seule simulation déterministe d’une pièce équilibrée indépendante ; pas une démonstration du théorème ni une trajectoire qui converge monotoniquement.",
    source: {
      title: "OpenStax — Mean or Expected Value",
      url: "https://openstax.org/books/introductory-statistics-2e/pages/4-2-mean-or-expected-value-and-standard-deviation",
    },
  },
  {
    id: "moonweight",
    canvasHeight: 230,
    title: "Même masse, poids différent",
    paths: [
      "/sciences-fondamentales/physique/mecanique/pourquoi-peserait-on-six-fois-moins-sur-la-lune-sans-perdre-un-gramme",
    ],
    steps: [
      {
        label: "Sur Terre",
        caption: "Un objet de masse 1 kg est suspendu à un dynamomètre gradué en newtons.",
        detail:
          "Un objet de masse 1 kg est suspendu à un dynamomètre gradué en newtons. À la surface terrestre, son poids vaut environ 9,8 N.",
      },
      {
        label: "Sur la Lune",
        caption:
          "Le même objet garde sa masse de 1 kg à la surface lunaire, mais son poids vaut environ 1,6 N.",
        detail:
          "Le même objet garde sa masse de 1 kg à la surface lunaire, mais son poids vaut environ 1,6 N. Le ressort est moins étiré dans le modèle.",
      },
      {
        label: "Comparer les masses",
        caption: "Une balance à bras égaux compare deux masses dans le même champ de pesanteur.",
        detail:
          "Une balance à bras égaux compare deux masses dans le même champ de pesanteur. Les deux côtés sont affectés ensemble, elle peut donc rester équilibrée sur la Lune.",
      },
    ],
    limit:
      "Pesanteurs moyennes de surface ; élongations et objets stylisés. Le dynamomètre mesure une force, pas directement une masse.",
    source: {
      title: "NASA — Moon Facts",
      url: "https://science.nasa.gov/moon/facts/",
    },
  },
  {
    id: "laserbeam",
    canvasHeight: 230,
    title: "Amplifier une lumière directionnelle",
    paths: [
      "/sciences-fondamentales/physique/physique-quantique/pourquoi-la-lumiere-d-un-laser-est-elle-si-differente-de-celle-d-une-lampe",
    ],
    steps: [
      {
        label: "Apporter de l’énergie",
        caption: "Le pompage fournit l’énergie au milieu amplificateur.",
        detail:
          "Le pompage fournit l’énergie au milieu amplificateur. Des niveaux d’énergie schématiques distinguent les atomes excités de ceux de plus basse énergie.",
      },
      {
        label: "Émission stimulée",
        caption: "Un photon adapté peut stimuler l’émission d’un autre photon dans le même mode.",
        detail:
          "Un photon adapté peut stimuler l’émission d’un autre photon dans le même mode. L’atome perd l’énergie correspondante, fournie auparavant par le pompage.",
      },
      {
        label: "La cavité optique",
        caption:
          "Des miroirs font repasser la lumière dans le milieu ; une sortie partiellement transmissive laisse émerger le faisceau.",
        detail:
          "Des miroirs font repasser la lumière dans le milieu ; une sortie partiellement transmissive laisse émerger le faisceau. Une partie de la lumière reste dans la cavité.",
      },
    ],
    limit:
      "Modèle simplifié d’un laser à cavité, pas de tous les lasers. Ondes, niveaux et couleurs sont symboliques ; bande spectrale et divergence réelles non nulles.",
    source: {
      title: "OpenStax — Lasers",
      url: "https://openstax.org/books/university-physics-volume-3/pages/8-6-lasers",
    },
  },
  {
    id: "thermalcontact",
    canvasHeight: 230,
    title: "La chaleur est une énergie transférée",
    paths: ["/sciences-fondamentales/physique/thermodynamique/temperature-et-chaleur"],
    steps: [
      {
        label: "Deux températures",
        caption: "Deux blocs de même matériau et de même masse sont à 60 °C et 20 °C.",
        detail:
          "Deux blocs de même matériau et de même masse sont à 60 °C et 20 °C. Les thermomètres mesurent leur température, pas une quantité de chaleur stockée.",
      },
      {
        label: "Un transfert",
        caption:
          "Mis en contact dans un système idéal isolé, ils échangent de l’énergie du plus chaud vers le plus froid.",
        detail:
          "Mis en contact dans un système idéal isolé, ils échangent de l’énergie du plus chaud vers le plus froid. Le second se réchauffe pendant que le premier refroidit.",
      },
      {
        label: "L’équilibre thermique",
        caption:
          "Dans ce cas symétrique sans changement de phase, les deux blocs atteignent 40 °C.",
        detail:
          "Dans ce cas symétrique sans changement de phase, les deux blocs atteignent 40 °C. L’échange net cesse, mais les particules ne deviennent pas immobiles.",
      },
    ],
    limit:
      "Exemple idéal avec capacités thermiques égales constantes et aucune perte extérieure. Agitation symbolique, pas une trajectoire moléculaire mesurée.",
    source: {
      title: "OpenStax — Heat Transfer and Calorimetry",
      url: "https://openstax.org/books/university-physics-volume-2/pages/1-4-heat-transfer-specific-heat-and-calorimetry",
    },
  },
  {
    id: "fridgecycle",
    canvasHeight: 230,
    title: "Faire sortir la chaleur du réfrigérateur",
    paths: [
      "/sciences-fondamentales/physique/thermodynamique/un-refrigerateur-fabrique-t-il-vraiment-du-froid",
    ],
    steps: [
      {
        label: "Absorber dedans",
        caption:
          "Dans l’évaporateur placé du côté froid, le fluide reçoit de l’énergie thermique et se vaporise.",
        detail:
          "Dans l’évaporateur placé du côté froid, le fluide reçoit de l’énergie thermique et se vaporise. Il quitte cette zone sous forme de gaz à basse pression.",
      },
      {
        label: "Fournir du travail",
        caption: "Le compresseur reçoit du travail électrique et élève la pression du gaz.",
        detail:
          "Le compresseur reçoit du travail électrique et élève la pression du gaz. Le fluide circule ensuite vers le condenseur, côté extérieur.",
      },
      {
        label: "Rejeter derrière",
        caption: "Le condenseur rejette la chaleur vers la pièce.",
        detail:
          "Le condenseur rejette la chaleur vers la pièce. Après liquéfaction puis détente, le fluide retourne à l’évaporateur ; le bilan est Q rejetée = Q prise + travail.",
      },
    ],
    limit:
      "Cycle à compression de vapeur qualitatif. Le détendeur prépare un mélange liquide-vapeur, pas simplement un liquide refroidi. Pas de valeurs de pression.",
    source: {
      title: "OpenStax — Refrigerators and Heat Pumps",
      url: "https://openstax.org/books/university-physics-volume-2/pages/4-3-refrigerators-and-heat-pumps",
    },
  },
  {
    id: "hotspring",
    canvasHeight: 230,
    title: "L’eau circule dans des roches chaudes",
    paths: [
      "/sciences-fondamentales/sciences-de-la-terre/volcans-et-seismes/pourquoi-certaines-sources-sortent-elles-du-sol-deja-chaudes",
    ],
    steps: [
      {
        label: "L’infiltration",
        caption: "L’eau de pluie pénètre dans des roches perméables et des fissures.",
        detail:
          "L’eau de pluie pénètre dans des roches perméables et des fissures. Les traits bleus mettent en évidence un trajet possible de descente.",
      },
      {
        label: "Le réchauffement",
        caption: "En profondeur, l’eau échange de l’énergie avec des roches plus chaudes.",
        detail:
          "En profondeur, l’eau échange de l’énergie avec des roches plus chaudes. Cette coupe n’impose pas la présence d’une chambre magmatique.",
      },
      {
        label: "La remontée",
        caption: "L’eau peut remonter par une autre voie et ressortir en source chaude.",
        detail:
          "L’eau peut remonter par une autre voie et ressortir en source chaude. Géologie, pression et perméabilité contrôlent le circuit réel.",
      },
    ],
    limit:
      "Coupe conceptuelle sans échelle : ni profondeur, ni température ni temps de parcours mesurés. Tous les systèmes thermaux ne produisent pas de geyser.",
    source: {
      title: "National Park Service — Monitoring Geothermal Systems",
      url: "https://www.nps.gov/articles/geothermal-systems-and-monitoring-hydrothermal-features.htm",
    },
  },
  {
    id: "oceancirculation",
    canvasHeight: 230,
    title: "Surface et profondeur transportent la chaleur",
    paths: [
      "/sciences-fondamentales/sciences-de-la-terre/oceanographie/courants-oceaniques-role-climatique",
    ],
    steps: [
      {
        label: "Le vent en surface",
        caption: "Le vent entraîne des mouvements de surface.",
        detail:
          "Le vent entraîne des mouvements de surface. La coupe montre un transfert d’eau relativement chaude vers une région où elle peut perdre de la chaleur.",
      },
      {
        label: "Refroidir et plonger",
        caption:
          "En se refroidissant, une eau suffisamment salée peut devenir plus dense et plonger.",
        detail:
          "En se refroidissant, une eau suffisamment salée peut devenir plus dense et plonger. Les flèches vers l’air représentent une perte d’énergie thermique.",
      },
      {
        label: "Un retour en profondeur",
        caption:
          "Une circulation profonde et des remontées ailleurs relient les régions de l’océan.",
        detail:
          "Une circulation profonde et des remontées ailleurs relient les régions de l’océan. Les vents et le mélange contribuent aussi à l’ensemble : ce n’est pas une pompe unique.",
      },
    ],
    limit:
      "Coupe conceptuelle, pas une carte de l’AMOC ni un calendrier de trajet. Température, salinité, vents et mélange agissent ensemble.",
    source: {
      title: "NOAA — Thermohaline Circulation",
      url: "https://oceanservice.noaa.gov/education/tutorial_currents/05conveyor1.html",
    },
  },
  {
    id: "gravitydam",
    canvasHeight: 230,
    title: "La poussée grandit avec la profondeur",
    paths: [
      "/technologies-et-ingenierie/genie-civil/ouvrages-dart/comment-un-barrage-resiste-t-il-a-la-poussee-de-l-eau",
    ],
    steps: [
      {
        label: "La pression de l’eau",
        caption: "Sur une paroi verticale, la pression hydrostatique augmente avec la profondeur.",
        detail:
          "Sur une paroi verticale, la pression hydrostatique augmente avec la profondeur. Les flèches plus longues près du fond représentent cette augmentation.",
      },
      {
        label: "Le barrage-poids",
        caption: "La coupe du barrage-poids montre une large base sur le rocher.",
        detail:
          "La coupe du barrage-poids montre une large base sur le rocher. Son poids et la réaction de sa fondation participent à l’équilibre face à la poussée de l’eau.",
      },
      {
        label: "Le barrage-voûte",
        caption:
          "Cette vue de dessus change de perspective : l’arc transmet une partie des efforts vers les flancs rocheux.",
        detail:
          "Cette vue de dessus change de perspective : l’arc transmet une partie des efforts vers les flancs rocheux. Le côté convexe est tourné vers la retenue.",
      },
    ],
    limit:
      "Schéma d’efforts, pas calcul de dimensionnement. Sous-pressions, drainage, séismes et facteurs de sécurité ne sont pas tous représentés.",
    source: {
      title: "Bureau of Reclamation — Glossary: arch and gravity dams",
      url: "https://www.usbr.gov/library/glossary/",
    },
  },
  {
    id: "memoryalloy",
    canvasHeight: 230,
    title: "Retrouver une forme par une transformation",
    paths: [
      "/technologies-et-ingenierie/conception-et-fiabilite/choix-des-materiaux/les-alliages-a-memoire-de-forme",
    ],
    steps: [
      {
        label: "La forme préparée",
        caption: "Le fil de nitinol possède ici une forme préparée.",
        detail:
          "Le fil de nitinol possède ici une forme préparée. Dans une plage de température adaptée, sa structure cristalline peut changer sans fusionner.",
      },
      {
        label: "Déformer à froid",
        caption:
          "À basse température appropriée, la déformation réoriente des variantes de martensite.",
        detail:
          "À basse température appropriée, la déformation réoriente des variantes de martensite. Le dessin du réseau est une analogie de cette réorganisation.",
      },
      {
        label: "Réchauffer",
        caption:
          "En réchauffant dans la bonne plage, la transformation vers l’austénite permet de retrouver la forme préparée.",
        detail:
          "En réchauffant dans la bonne plage, la transformation vers l’austénite permet de retrouver la forme préparée. Ce retour a des limites de déformation et de contrainte.",
      },
    ],
    limit:
      "Effet mémoire thermique illustré, distinct de la superélasticité. Réseau symbolique, sans température universelle ni démonstration de manipulation.",
    source: {
      title: "NASA Glenn — Shape Memory Alloys, p. 24",
      url: "https://ntrs.nasa.gov/api/citations/20120016705/downloads/20120016705.pdf",
    },
  },
  {
    id: "passivelayer",
    canvasHeight: 230,
    title: "Une couche mince protège l’inox",
    paths: [
      "/technologies-et-ingenierie/conception-et-fiabilite/choix-des-materiaux/pourquoi-l-acier-inoxydable-ne-rouille-t-il-pas",
    ],
    steps: [
      {
        label: "Une surface protégée",
        caption: "Une fine couche passive riche en chrome sépare l’alliage du milieu.",
        detail:
          "Une fine couche passive riche en chrome sépare l’alliage du milieu. La couche est volontairement agrandie pour être visible et n’est pas un revêtement de peinture.",
      },
      {
        label: "Une rayure",
        caption: "Une rayure découvre localement du métal.",
        detail:
          "Une rayure découvre localement du métal. Les autres portions de couche restent en place ; l’exposition n’est pas représentée comme une disparition totale de la protection.",
      },
      {
        label: "La repassivation",
        caption: "En présence d’un milieu suffisamment oxydant, la couche peut se reformer.",
        detail:
          "En présence d’un milieu suffisamment oxydant, la couche peut se reformer. Les chlorures ou d’autres conditions défavorables peuvent toutefois provoquer une corrosion locale.",
      },
    ],
    limit:
      "Coupe qualitative d’un inox, sans échelle. La repassivation dépend du milieu et de l’alliage ; elle n’implique pas une résistance à toute corrosion.",
    source: {
      title: "worldstainless — Corrosion properties",
      url: "https://worldstainless.org/about-stainless/properties/corrosion-properties/",
    },
  },
  {
    id: "graphenelattice",
    canvasHeight: 230,
    title: "Une couche, puis un empilement",
    paths: ["/technologies-et-ingenierie/nanotechnologies/nanomateriaux/graphene-et-nanomateriaux"],
    steps: [
      {
        label: "Un réseau hexagonal",
        caption:
          "Les atomes de carbone forment un réseau hexagonal, chaque atome intérieur ayant trois voisins dans le plan.",
        detail:
          "Les atomes de carbone forment un réseau hexagonal, chaque atome intérieur ayant trois voisins dans le plan. Les liaisons ne forment pas un damier carré.",
      },
      {
        label: "Une seule couche",
        caption: "Une feuille isolée a une épaisseur atomique.",
        detail:
          "Une feuille isolée a une épaisseur atomique. La vue légèrement inclinée montre son étendue sans lui donner artificiellement l’épaisseur d’un bloc massif.",
      },
      {
        label: "Plusieurs feuillets",
        caption: "Le graphite contient des feuillets empilés.",
        detail:
          "Le graphite contient des feuillets empilés. Les interactions entre couches diffèrent des liaisons fortes dans chaque feuille, ce qui aide à comprendre leur glissement.",
      },
    ],
    limit:
      "Réseaux finis agrandis et coupe symbolique ; électrons délocalisés, défauts et détails d’empilement omis. Aucun facteur de résistance universel.",
    source: {
      title: "Académie royale des sciences de Suède — Graphene, Nobel 2010",
      url: "https://www.nobelprize.org/uploads/2018/06/popular-physicsprize2010-1.pdf",
    },
  },
  {
    id: "compositeply",
    canvasHeight: 230,
    title: "Des fibres maintenues par une matrice",
    paths: [
      "/industries/materiaux-et-procedes/composites-et-polymeres/composites-et-materiaux-combines",
    ],
    steps: [
      {
        label: "Les fibres",
        caption: "Des fibres parallèles assurent surtout une résistance dans leur direction.",
        detail:
          "Des fibres parallèles assurent surtout une résistance dans leur direction. Un faisceau isolé n’a pas à lui seul la rigidité ni la cohésion d’une pièce complète.",
      },
      {
        label: "La matrice",
        caption: "La matrice enrobe les fibres et transmet des efforts entre elles.",
        detail:
          "La matrice enrobe les fibres et transmet des efforts entre elles. La coupe montre les deux constituants, avec des proportions volontairement simplifiées.",
      },
      {
        label: "Orienter les couches",
        caption:
          "Croiser des couches à différentes orientations adapte la réponse mécanique aux efforts attendus.",
        detail:
          "Croiser des couches à différentes orientations adapte la réponse mécanique aux efforts attendus. Cela ne rend pas automatiquement le matériau identique dans toutes les directions.",
      },
    ],
    limit:
      "Composite stratifié à fibres longues, pas modèle de tous les composites. Vues éclatées non à l’échelle ; aucune résistance chiffrée garantie.",
    source: {
      title: "NASA Spinoff — Composite Materials",
      url: "https://spinoff.nasa.gov/node/9821",
    },
  },
  {
    id: "healingcapsule",
    canvasHeight: 230,
    title: "Une capsule libère un agent réparateur",
    paths: [
      "/technologies-et-ingenierie/genie-civil/materiaux/comment-des-bacteries-des-capsules-ou-la-chaux-romaine-reparent-elles-les-fissures-du-beton",
    ],
    steps: [
      {
        label: "Avant la fissure",
        caption:
          "Des capsules contenant un agent réparateur sont dispersées dans une matrice de béton.",
        detail:
          "Des capsules contenant un agent réparateur sont dispersées dans une matrice de béton. Les granulats et les capsules sont volontairement faciles à distinguer.",
      },
      {
        label: "La capsule se rompt",
        caption: "Une fissure qui rencontre une capsule peut en rompre l’enveloppe.",
        detail:
          "Une fissure qui rencontre une capsule peut en rompre l’enveloppe. L’agent se libère dans la fissure ; les capsules non touchées restent intactes.",
      },
      {
        label: "Un comblement local",
        caption:
          "Selon la formulation et les conditions, l’agent peut combler localement la fissure.",
        detail:
          "Selon la formulation et les conditions, l’agent peut combler localement la fissure. Le dessin ne promet ni récupération totale de résistance ni réparation de toute fissure.",
      },
    ],
    limit:
      "Exemple par microcapsules uniquement : ne représente ni la voie bactérienne ni la chaux romaine. Dimensions et résultat qualitatifs.",
    source: {
      title: "Al-Tabbaa et al. — Microcapsule-based self-healing concrete",
      url: "https://www.repository.cam.ac.uk/items/9a2535a5-abd7-4fc7-a1cc-b8b098c863ce",
    },
  },
] as const satisfies readonly LessonDiagramSpec[];
