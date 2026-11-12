import type { LessonDiagramSpec } from "./registry";
export const RADIO_DIAGRAMS: readonly LessonDiagramSpec[] = [
  {
    id: "broadcast",
    title: "Une émission, plusieurs postes à l’écoute",
    paths: [
      "/communication-et-medias/histoire-des-medias/radio-et-television/naissance-de-la-radiodiffusion",
    ],
    steps: [
      {
        label: "Émettre un programme",
        caption: "Un studio fournit un programme à un émetteur radio.",
        detail:
          "Le microphone, l’antenne et le poste sont des dessins génériques. Le trait relie le studio à l’émetteur ; entre les antennes, la transmission se fait par ondes, sans câble entre le studio et chaque auditeur.",
      },
      {
        label: "Atteindre un public",
        caption: "Plusieurs récepteurs peuvent écouter la même émission.",
        detail:
          "Les trois postes représentent un public, pas trois connexions individuelles établies par la station. Les arcs symbolisent une propagation ; ce ne sont pas des murs ni une carte réelle de couverture.",
      },
      {
        label: "Écouter au foyer",
        caption: "Le poste transforme le signal reçu en son pour les auditeurs.",
        detail:
          "La scène agrandit un poste d’inspiration ancienne, sans reproduire un appareil de collection précis. Le dessin n’explique pas à lui seul l’organisation économique ou politique des radios : il montre le principe de diffusion vers un public.",
      },
    ],
    limit:
      "Illustration générique de radiodiffusion sonore, sans date d’invention unique, portée, fréquence ou audience mesurée. Pas de reconstitution d’un studio ou poste historique identifié.",
    source: {
      title: "Ofcom — 100 years of radio, histoire de la radiodiffusion",
      url: "https://www.ofcom.org.uk/tv-radio-and-on-demand/analogue-radio/100-years-of-radio",
    },
  },
  {
    id: "shortwave",
    title: "Des trajets radio courbés dans l’ionosphère",
    paths: [
      "/communication-et-medias/histoire-des-medias/radio-et-television/pourquoi-les-ondes-courtes-peuvent-elles-porter-la-radio-a-l-autre-bout-du-monde",
    ],
    steps: [
      {
        label: "Au-delà de l’horizon",
        caption: "Un trajet retournant vers le sol peut dépasser l’horizon local.",
        detail:
          "La couche bleutée représente une région ionisée de l’atmosphère. Le trait bleu est un trajet radio schématique qui se courbe progressivement ; il ne s’agit pas d’un rayon rebondissant sur une paroi solide.",
      },
      {
        label: "Plusieurs bonds",
        caption:
          "Des trajets successifs peuvent alterner retour par l’ionosphère et passage au sol.",
        detail:
          "Les deux bonds sont dessinés sans échelle. Le retour vers le sol dépend notamment de la fréquence, de l’angle et des conditions ionosphériques ; il n’est pas assuré pour toute onde courte.",
      },
      {
        label: "Une propagation variable",
        caption: "D’autres conditions peuvent empêcher le même trajet d’atteindre le récepteur.",
        detail:
          "Le trajet pâle interrompu rappelle la liaison précédente ; le nouveau trajet orange traverse ici la couche et continue vers l’espace. Ce cas n’est qu’un exemple : l’absorption et les perturbations solaires peuvent également interrompre une liaison.",
      },
    ],
    limit:
      "Trajets qualitatifs, couche et courbure terrestre fortement exagérées. Aucune fréquence maximale, hauteur, distance de bond ou règle jour/nuit fixe n’est calculée. Les ondes courtes ne sont pas réfléchies comme par un miroir métallique.",
    source: {
      title: "NOAA — HF Radio Communications et ionosphère",
      url: "https://www.spaceweather.gov/impacts/hf-radio-communications",
    },
  },
  {
    id: "crystalradio",
    title: "Un signal reçu fournit l’énergie d’une écoute faible",
    paths: [
      "/communication-et-medias/histoire-des-medias/radio-et-television/comment-un-poste-a-galene-capte-t-il-la-radio-sans-pile-ni-prise",
    ],
    steps: [
      {
        label: "Les pièces du poste",
        caption:
          "Un accord, un détecteur à cristal et un écouteur reçoivent l’énergie de l’antenne.",
        detail:
          "Le montage en bois est une illustration générique. L’accord sélectionne une bande autour d’une station, le contact à cristal est non linéaire, et l’écouteur convertit une faible énergie électrique en son.",
      },
      {
        label: "Extraire une variation",
        caption:
          "Le détecteur rend le signal asymétrique et permet de retrouver sa variation lente.",
        detail:
          "Les courbes sont calculées sur une AM fictive et un redresseur idéal. L’enveloppe n’est pas la porteuse : la fréquence radio est beaucoup plus élevée que celle du son, rapport volontairement réduit dans le dessin.",
      },
      {
        label: "Un circuit sans pile",
        caption: "Le circuit ne comporte ni pile ni amplificateur alimenté.",
        detail:
          "Le schéma de principe montre un accord LC, un détecteur idéal et un écouteur sensible avec un retour à la terre. Il simplifie les couplages et la réponse de l’écouteur ; ce n’est pas un plan de fabrication ou de raccordement d’antenne.",
      },
    ],
    limit:
      "Appareil générique et circuit équivalent simplifié, sans portée universelle ni promesse de réception. L’énergie vient de l’émetteur via le champ reçu ; « sans pile » ne signifie pas « sans consommation ». Le cristal réel n’est pas une diode idéale.",
    source: {
      title: "National Bureau of Standards — Circular 121, récepteur à cristal, 1922",
      url: "https://www.govinfo.gov/app/details/GOVPUB-C13-07b596dc1b751f724f455973facc4138",
    },
  },
  {
    id: "wirelessmorse",
    title: "Un message codé dans la durée des signaux",
    paths: [
      "/communication-et-medias/histoire-des-medias/radio-et-television/comment-la-tsf-a-t-elle-permis-d-envoyer-des-messages-sans-fil",
    ],
    steps: [
      {
        label: "Signaux courts",
        caption: "La lettre S est représentée par trois signaux courts.",
        detail:
          "La ligne du temps est construite avec une unité par point et une unité de silence entre les éléments. La hauteur des barres n’encode pas la lettre : c’est leur durée qui distingue points et traits.",
      },
      {
        label: "Signaux longs",
        caption: "La lettre O utilise trois signaux trois fois plus longs.",
        detail:
          "La même échelle de temps est conservée. Un trait dure trois unités de point ; les silences internes restent d’une unité. Il ne faut pas confondre durée du signal et longueur d’onde radio.",
      },
      {
        label: "Transmettre puis lire",
        caption: "Le récepteur permet de reconnaître le rythme transmis sans fil.",
        detail:
          "L’exemple transmis est la lettre A, un point puis un trait, avec les durées calculées. La chaîne résume un équipement générique de télégraphie radio ; les premiers appareils utilisaient différents détecteurs et des émissions qui ne sont pas toutes une porteuse sinusoïdale pure.",
      },
    ],
    limit:
      "Durées normalisées suivant le Morse international, sans vitesse absolue ni émission réellement produite. Illustration du principe de TSF, sans reconstitution exacte des appareils de Branly ou Marconi et sans récit de priorité historique.",
    source: {
      title: "UIT-R M.1677-1 — Code Morse international",
      url: "https://www.itu.int/rec/R-REC-M.1677-1-200910-I/",
    },
  },
  {
    id: "colourtv",
    title: "Garder la luminosité et ajouter l’information de couleur",
    paths: [
      "/communication-et-medias/histoire-des-medias/radio-et-television/comment-la-television-est-elle-passee-du-noir-et-blanc-a-la-couleur",
    ],
    steps: [
      {
        label: "Trois composantes",
        caption: "L’écran couleur combine des composantes rouge, verte et bleue.",
        detail:
          "Les bandes représentent des valeurs préparées de signaux R′, V′ et B′. Le dessin montre des couleurs émises par un écran, pas un mélange de peintures ; la gamme de l’écran ne couvre pas toutes les couleurs visibles.",
      },
      {
        label: "Séparer les informations",
        caption:
          "Le codage analogique distingue une information de luminosité et des différences de couleur.",
        detail:
          "Les bandes grises sont calculées avec Y′ = 0,299 R′ + 0,587 V′ + 0,114 B′. Ce signal de luma repose sur des composantes pré-corrigées en gamma ; ce n’est pas une mesure directe de luminance physique.",
      },
      {
        label: "Rester compatible",
        caption:
          "Un poste monochrome compatible utilise la luma ; un poste couleur utilise aussi la chrominance.",
        detail:
          "Les deux écrans montrent le même motif préparé. Le dessin résume la compatibilité des systèmes analogiques concernés, pas la possibilité de décoder toutes les normes avec n’importe quel ancien téléviseur.",
      },
    ],
    limit:
      "Principe des systèmes analogiques NTSC/PAL/SECAM, sans formes de sous-porteuses, balayage ni différences complètes entre normes. Le signal Y′ n’est pas la moyenne simple des canaux ; le rendu gris à l’écran reste une approximation illustrative.",
    source: {
      title: "UIT-R BT.470-5 — Conventional television systems, tableau 2",
      url: "https://www.itu.int/dms_pubrec/itu-r/rec/bt/R-REC-BT.470-5-199802-S%21%21PDF-E.pdf",
    },
  },
];
