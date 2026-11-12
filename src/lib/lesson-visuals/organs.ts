import type { LessonDiagramSpec } from "./registry";

/** Exact paths claimed in the persistent backend before drawing. */
export const ORGANS_DIAGRAMS = [
  {
    id: "heartloop",
    canvasHeight: 230,
    title: "Deux pompes, un circuit fermé",
    paths: ["/corps-humain-et-sante/anatomie/systeme-cardiovasculaire/coeur-circulation-sanguine"],
    steps: [
      {
        label: "Retour du corps",
        caption: "Le sang revenu du corps entre dans le cœur droit.",
        detail:
          "Le cœur droit reçoit le sang relativement pauvre en oxygène. Les quatre cavités sont séparées ; les deux moitiés du cœur ne mélangent pas directement leur contenu.",
      },
      {
        label: "Passage par les poumons",
        caption: "Le cœur droit envoie le sang aux poumons ; il revient au cœur gauche.",
        detail:
          "Dans les poumons, les échanges avec l’air enrichissent le sang en oxygène. Le retour des poumons rejoint l’oreillette gauche puis le ventricule gauche.",
      },
      {
        label: "Distribution au corps",
        caption: "Le cœur gauche envoie le sang aux organes, puis le retour rejoint le cœur droit.",
        detail:
          "Les deux pompes travaillent ensemble. Les vues mettent successivement en évidence des portions d’un circuit continu, et non trois battements successifs.",
      },
    ],
    limit:
      "Coupe fonctionnelle simplifiée, vue de face : le cœur droit est à gauche du dessin. OD/VD : oreillette/ventricule droits ; OG/VG : oreillette/ventricule gauches. Bleu signifie moins riche en O₂ ; le sang humain n’est pas bleu. Débits et dimensions non représentés.",
    source: {
      title: "NHLBI — How Blood Flows through the Heart",
      url: "https://www.nhlbi.nih.gov/health/heart/blood-flow",
    },
  },
  {
    id: "clotmesh",
    canvasHeight: 230,
    title: "Refermer une brèche dans un vaisseau",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-cardiovasculaire/comment-le-sang-s-arrete-t-il-de-couler-tout-seul-apres-une-coupure",
    ],
    steps: [
      {
        label: "La brèche",
        caption: "Une rupture de la paroi laisse sortir du sang du vaisseau.",
        detail:
          "La lésion déclenche plusieurs réponses locales. Cette première vue agrandit la brèche, sans représenter une quantité de sang perdue ni la vitesse d’un saignement.",
      },
      {
        label: "Les plaquettes",
        caption: "Des plaquettes s’attachent à la zone lésée et s’assemblent en bouchon.",
        detail:
          "Ces petits fragments cellulaires changent de forme et adhèrent les uns aux autres. Le dessin conserve le passage du sang dans la partie intacte du vaisseau.",
      },
      {
        label: "Le filet de fibrine",
        caption: "Des filaments de fibrine renforcent le bouchon local de plaquettes.",
        detail:
          "La fibrine résulte de réactions de coagulation. Son réseau stabilise le bouchon pendant la réparation ; il ne doit pas être confondu avec une fermeture de tout le vaisseau.",
      },
    ],
    limit:
      "Coupe agrandie et chronologie simplifiée d’une petite lésion. Les phénomènes se chevauchent ; la dissolution ultérieure du caillot n’est pas représentée. Aucun geste de soin n’est enseigné.",
    source: {
      title: "NHLBI — How Does Blood Clot?",
      url: "https://www.nhlbi.nih.gov/health/clotting-disorders/how-blood-clots",
    },
  },
  {
    id: "pulsewave",
    canvasHeight: 230,
    title: "Une onde dans une artère élastique",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-cardiovasculaire/pourquoi-sent-on-son-coeur-battre-au-poignet",
    ],
    steps: [
      {
        label: "Départ de l’onde",
        caption: "Une poussée du cœur distend localement la paroi de l’artère.",
        detail:
          "La vague de pression déforme la paroi élastique. Les globules rouges continuent de circuler : le pouls n’est pas un paquet de sang qui partirait seul à chaque battement.",
      },
      {
        label: "Propagation",
        caption:
          "La déformation se propage ; les globules rouges n’avancent que légèrement dans ce modèle.",
        detail:
          "Le déplacement de la vague et celui du sang sont deux phénomènes distincts. La comparaison est qualitative : leurs distances dessinées ne mesurent pas des vitesses réelles.",
      },
      {
        label: "Au poignet",
        caption: "L’artère superficielle se distend sous la peau, près de l’os.",
        detail:
          "Cette coupe du poignet montre pourquoi une déformation de l’artère peut être perçue au toucher. La paroi revient ensuite ; elle n’accumule pas les gonflements successifs.",
      },
    ],
    limit:
      "Deux vues d’une artère isolée, puis une coupe symbolique du poignet. Déformations très amplifiées ; aucune valeur de pression, de fréquence ou de vitesse ne peut être lue sur le dessin.",
    source: {
      title: "OpenStax — Blood Flow, Blood Pressure, and Resistance",
      url: "https://openstax.org/books/anatomy-and-physiology-2e/pages/20-2-blood-flow-blood-pressure-and-resistance",
    },
  },
  {
    id: "gutabsorption",
    canvasHeight: 230,
    title: "Du tube digestif aux nutriments",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-digestif/digestion-et-absorption-des-nutriments",
    ],
    steps: [
      {
        label: "Découper",
        caption:
          "Le tube digestif transforme les aliments ; les enzymes découpent de grandes molécules.",
        detail:
          "La silhouette situe l’estomac et l’intestin grêle. La chaîne dessinée à côté représente un glucide : elle distingue le découpage chimique du simple broyage des aliments.",
      },
      {
        label: "Franchir la paroi",
        caption:
          "Les petites molécules traversent les cellules de la paroi d’une villosité intestinale.",
        detail:
          "Une villosité est un repli vivant, avec un réseau de petits vaisseaux. L’absorption est un passage à travers les cellules, et non un trou laissant entrer des morceaux de repas.",
      },
      {
        label: "Deux voies de transport",
        caption:
          "Des sucres gagnent les capillaires ; une grande partie des lipides emprunte la lymphe.",
        detail:
          "Le sang et la lymphe sont deux voies distinctes après l’absorption. Le dessin ne prétend pas que tous les nutriments suivent le même trajet ni le même mode de transport.",
      },
    ],
    limit:
      "Organes et villosité représentés à des échelles différentes. Glucides et lipides ne sont que deux exemples ; les transports cellulaires et les microvillosités sont simplifiés.",
    source: {
      title: "NIDDK — Your Digestive System & How it Works",
      url: "https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works",
    },
  },
  {
    id: "gastricbarrier",
    canvasHeight: 230,
    title: "Un milieu acide, une paroi protégée",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-digestif/pourquoi-l-estomac-ne-se-digere-t-il-pas-lui-meme",
    ],
    steps: [
      {
        label: "Dans l’estomac",
        caption: "Le contenu acide est séparé des tissus de la paroi par une muqueuse protégée.",
        detail:
          "La coupe situe l’œsophage, la cavité et la paroi. Les replis sont symboliques ; le dessin prépare le zoom sur la protection qui recouvre les cellules.",
      },
      {
        label: "Le mucus",
        caption: "Les cellules sécrètent un gel de mucus qui reste au contact de leur surface.",
        detail:
          "Le mucus forme une barrière physique et ralentit les échanges près de la paroi. Il ne rend pas les tissus de l’estomac insensibles à leur propre suc gastrique.",
      },
      {
        label: "Le bicarbonate",
        caption: "Du bicarbonate dans le mucus neutralise une partie de l’acide près des cellules.",
        detail:
          "Un gradient se forme entre la cavité très acide et la surface cellulaire moins acide. Cette protection est entretenue par les sécrétions et les jonctions entre cellules.",
      },
    ],
    limit:
      "Coupe puis zoom de la muqueuse : aucune épaisseur réelle ni mesure de pH. Les symboles H⁺ et HCO₃⁻ désignent des ions ; l’estomac ne neutralise pas tout son contenu.",
    source: {
      title: "OpenStax — The Stomach",
      url: "https://openstax.org/books/anatomy-and-physiology/pages/23-4-the-stomach",
    },
  },
  {
    id: "liverlobule",
    canvasHeight: 230,
    title: "Le foie : deux arrivées, deux trajets",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-digestif/que-fait-le-foie-l-usine-chimique-du-corps",
    ],
    steps: [
      {
        label: "Deux arrivées de sang",
        caption: "L’artère hépatique et la veine porte apportent du sang au foie.",
        detail:
          "La veine porte arrive notamment de l’intestin ; l’artère apporte du sang oxygéné. La bile est un autre liquide : elle quitte le foie par des canaux biliaires.",
      },
      {
        label: "Le sang vers le centre",
        caption:
          "Dans un lobule simplifié, le sang va des petits vaisseaux périphériques vers la veine centrale.",
        detail:
          "Les hépatocytes sont au contact des espaces sanguins appelés sinusoïdes. Ils stockent, fabriquent et transforment des substances ; ce n’est pas un simple tamis mécanique.",
      },
      {
        label: "La bile vers les bords",
        caption:
          "La bile produite par les hépatocytes rejoint de petits canaux en périphérie du lobule.",
        detail:
          "À cette échelle, sang et bile suivent des directions opposées dans des conduits différents. La bile rejoint ensuite les voies biliaires ; elle ne se mélange pas au sang circulant.",
      },
    ],
    limit:
      "Organe puis lobule hépatique classique idéalement hexagonal. Réseaux très simplifiés ; l’organisation réelle varie, et toutes les fonctions du foie ne sont pas dessinées.",
    source: {
      title: "OpenStax — The Liver, Pancreas, and Gallbladder",
      url: "https://openstax.org/books/anatomy-and-physiology/pages/23-6-accessory-organs-in-digestion-the-liver-pancreas-and-gallbladder",
    },
  },
  {
    id: "thermostatbody",
    canvasHeight: 230,
    title: "Ajuster les pertes et la production",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-nerveux/comment-le-corps-garde-t-il-une-temperature-proche-de-37-c",
    ],
    steps: [
      {
        label: "Comparer",
        caption: "Des informations de température parviennent à l’hypothalamus, dans le cerveau.",
        detail:
          "Le système tient compte de la température interne et des signaux de la peau. La régulation n’impose pas exactement la même température à tout le corps à chaque instant.",
      },
      {
        label: "Trop chaud",
        caption:
          "La sueur qui s’évapore emporte de la chaleur ; les vaisseaux cutanés s’élargissent.",
        detail:
          "Le refroidissement dépend de l’évaporation, pas du simple fait que la sueur coule. La circulation près de la peau participe aussi aux échanges avec l’environnement.",
      },
      {
        label: "Trop froid",
        caption:
          "Des vaisseaux cutanés se resserrent ; les frissons musculaires produisent de la chaleur.",
        detail:
          "Le resserrement limite certains échanges avec la peau, tandis que les contractions des muscles augmentent la production de chaleur. Ce sont deux réponses complémentaires.",
      },
    ],
    limit:
      "Boucle de régulation puis coupes symboliques de peau et de muscle, sans échelle de température ni quantité de chaleur. La fièvre et les situations d’urgence ne sont pas traitées.",
    source: {
      title: "OpenStax — Homeostasis",
      url: "https://openstax.org/books/biology-2e/pages/33-3-homeostasis",
    },
  },
  {
    id: "withdrawalreflex",
    canvasHeight: 230,
    title: "Retirer la main sans attendre",
    paths: [
      "/corps-humain-et-sante/anatomie/systeme-nerveux/pourquoi-la-main-se-retire-t-elle-toute-seule-d-une-surface-brulante",
    ],
    steps: [
      {
        label: "Détecter",
        caption:
          "Un signal sensitif part de la peau exposée à une chaleur nocive et rejoint la moelle.",
        detail:
          "La voie orange représente le trajet d’une information nerveuse, pas le déplacement de la chaleur dans le bras. Le stimulus nocif est détecté par des terminaisons sensitives.",
      },
      {
        label: "Commander le retrait",
        caption: "Des relais de la moelle activent une voie motrice vers le muscle.",
        detail:
          "Le réflexe de retrait comporte des neurones intermédiaires. Il n’est pas confondu ici avec le réflexe rotulien, dont le circuit d’activation est plus court.",
      },
      {
        label: "Retirer et informer",
        caption:
          "La contraction déplace la main ; une information remonte également vers le cerveau.",
        detail:
          "La commande initiale n’attend pas une décision consciente. Le cerveau reçoit aussi des informations : le réflexe ne signifie pas que le cerveau serait entièrement déconnecté.",
      },
    ],
    limit:
      "Schéma fonctionnel d’un réflexe de retrait, sans orientation anatomique détaillée ni temps chiffré. Les voies, le muscle et la moelle sont agrandis ; les relais d’inhibition ne sont pas dessinés.",
    source: {
      title: "OpenStax — Motor Responses",
      url: "https://openstax.org/books/anatomy-and-physiology-2e/pages/14-3-motor-responses",
    },
  },
  {
    id: "dialyser",
    canvasHeight: 230,
    title: "Deux liquides séparés par une membrane",
    paths: [
      "/corps-humain-et-sante/maladies/maladies-chroniques/comment-une-machine-peut-elle-faire-le-travail-des-reins",
    ],
    steps: [
      {
        label: "Les deux circuits",
        caption:
          "Le sang circule dans des fibres creuses ; le dialysat passe autour en sens opposé.",
        detail:
          "Le dialyseur contient de nombreuses fibres ; une seule est agrandie au centre. Leur paroi est une membrane : les deux liquides ne sont pas mis directement en contact.",
      },
      {
        label: "Échanger des solutés",
        caption:
          "De petites molécules comme l’urée passent du sang vers le dialysat à travers la membrane.",
        detail:
          "Le gradient de concentration favorise ce transfert. Les globules rouges restent dans la fibre ; le dessin ne signifie pas que toutes les petites molécules sont éliminées de la même façon.",
      },
      {
        label: "Retirer de l’eau",
        caption: "Une différence de pression permet aussi de retirer une partie de l’eau du sang.",
        detail:
          "Le retrait d’eau est l’ultrafiltration ; il se distingue du transfert de l’urée par diffusion. La dialyse ne remplace pas toutes les fonctions, notamment hormonales, des reins.",
      },
    ],
    limit:
      "Coupe pédagogique d’un dialyseur, sans débit, durée, dose ni réglage de traitement. Une membrane sépare toujours les globules rouges du dialysat ; les ions et protéines ne sont pas tous représentés.",
    source: {
      title: "NIDDK — Hemodialysis",
      url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis",
    },
  },
  {
    id: "antibodyfit",
    canvasHeight: 230,
    title: "Reconnaître un petit motif précis",
    paths: [
      "/corps-humain-et-sante/physiologie/immunite/comment-un-anticorps-reconnait-il-un-microbe",
    ],
    steps: [
      {
        label: "Reconnaître",
        caption: "Le site au bout d’un anticorps ne se fixe pas à n’importe quel motif de surface.",
        detail:
          "L’anticorps reconnaît un épitope, une petite partie d’un antigène. Les formes géométriques servent de repères : elles ne représentent pas une serrure rigide à l’échelle moléculaire.",
      },
      {
        label: "Se fixer",
        caption: "Un motif compatible peut se lier au bout d’un bras de l’anticorps.",
        detail:
          "Le Y représente ici un anticorps de type IgG simplifié, avec deux sites de liaison. La fixation dépend de la complémentarité moléculaire et de plusieurs interactions chimiques.",
      },
      {
        label: "Bloquer une liaison",
        caption: "Certains anticorps fixés sur un virus empêchent son attachement à une cellule.",
        detail:
          "Cet exemple illustre la neutralisation. Tous les anticorps ne neutralisent pas ; d’autres favorisent le repérage et l’élimination par les cellules immunitaires.",
      },
    ],
    limit:
      "Protéines, virus et cellule à des échelles incompatibles volontairement rapprochées. Formes et couleurs symboliques ; l’efficacité immunitaire d’une personne ne peut pas être déduite de ce dessin.",
    source: {
      title: "OpenStax — Antibodies",
      url: "https://openstax.org/books/biology-2e/pages/42-3-antibodies",
    },
  },
  {
    id: "bodyclock",
    canvasHeight: 230,
    title: "Une horloge interne synchronisée",
    paths: [
      "/corps-humain-et-sante/physiologie/sommeil/comment-le-corps-sait-il-l-heure-sans-regarder-une-montre",
    ],
    steps: [
      {
        label: "Recevoir la lumière",
        caption: "La rétine transmet une information lumineuse à l’horloge principale du cerveau.",
        detail:
          "Le noyau suprachiasmatique se trouve dans l’hypothalamus. La lumière contribue à ajuster l’horloge ; ce trajet ne représente pas simplement la vision consciente des objets.",
      },
      {
        label: "Continuer sans lumière",
        caption:
          "L’horloge interne continue à osciller même sans alternance de lumière et d’obscurité.",
        detail:
          "Des mécanismes moléculaires entretiennent un rythme proche de vingt-quatre heures. Le cadran est une métaphore : le cerveau ne contient ni aiguilles ni engrenage.",
      },
      {
        label: "Coordonner les organes",
        caption: "L’horloge principale contribue à synchroniser les rythmes de différents organes.",
        detail:
          "Des horloges existent aussi dans les tissus et les organes. Le schéma montre cette coordination ; les repas, l’activité et d’autres signaux peuvent également influencer les rythmes.",
      },
    ],
    limit:
      "Trajet et organes schématiques ; positions et distances ne sont pas un atlas anatomique. Le rythme est proche de 24 h, sans horaire universel de coucher ni prescription concernant la lumière.",
    source: {
      title: "NIGMS — Circadian Rhythms",
      url: "https://nigms.nih.gov/education/fact-sheets/Pages/circadian-rhythms",
    },
  },
  {
    id: "sleepnight",
    canvasHeight: 230,
    title: "Une nuit change de cycle en cycle",
    paths: ["/corps-humain-et-sante/physiologie/sommeil/cycles-du-sommeil-et-fonction-reparatrice"],
    steps: [
      {
        label: "Lire un cycle",
        caption:
          "L’exemple passe par du sommeil non paradoxal puis du sommeil paradoxal, appelé REM.",
        detail:
          "Les niveaux indiquent des stades, pas une quantité de sommeil. Le tracé est un exemple construit pour apprendre à lire un hypnogramme, sans enregistrement d’une personne.",
      },
      {
        label: "Le sommeil profond",
        caption:
          "Dans cet exemple, les épisodes de sommeil profond N3 sont surtout présents en début de nuit.",
        detail:
          "Le sommeil non paradoxal comprend N1, N2 et N3. Les durées et les transitions varient ; tous les cycles ne descendent pas nécessairement jusqu’au stade N3.",
      },
      {
        label: "Le sommeil paradoxal",
        caption: "Les épisodes REM sont ici plus longs vers la fin de la nuit.",
        detail:
          "Le sommeil paradoxal revient à plusieurs reprises. Un cycle n’est pas une minuterie de quatre-vingt-dix minutes ; l’âge et d’autres facteurs modifient l’architecture du sommeil.",
      },
    ],
    limit:
      "Hypnogramme fictif à temps relatif, avec quatre cycles simplifiés. Aucune durée ni proportion de stade n’est mesurée ; ce dessin ne permet ni diagnostic ni calcul d’un horaire idéal de réveil.",
    source: {
      title: "NHLBI — Sleep Phases and Stages",
      url: "https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep",
    },
  },
] satisfies LessonDiagramSpec[];
