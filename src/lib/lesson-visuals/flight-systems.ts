import type { LessonDiagramSpec } from "./registry";
export const FLIGHT_SYSTEM_DIAGRAMS: readonly LessonDiagramSpec[] = [
  {
    id: "inertial",
    title: "Calculer sa position puis recaler l’estimation",
    paths: [
      "/aeronautique/navigation-aerienne/instruments-de-vol/systemes-de-navigation-inertielle-et-satellitaire",
    ],
    steps: [
      {
        label: "Mesurer à bord",
        caption: "Des capteurs mesurent accélérations et rotations.",
        detail:
          "Après initialisation, une centrale utilise ces mesures pour estimer l’orientation, la vitesse et la position. Elle ne mesure pas directement une distance parcourue comme un compteur de pas.",
      },
      {
        label: "Accumuler une erreur",
        caption: "Une petite erreur de mesure peut faire dériver la position estimée.",
        detail:
          "La courbe orange est un exemple fictif d’erreur transversale due à un biais d’accélération constant. Le calcul intègre ce biais deux fois : l’écart croît ici avec le carré du temps.",
      },
      {
        label: "Combiner les sources",
        caption: "Une information extérieure valide aide à recaler l’estimation.",
        detail:
          "Une position satellitaire ou d’autres aides peuvent contribuer au recalage. Leur combinaison avec l’inertiel dépend du système ; elle ne supprime pas toutes les erreurs et ne garantit pas la détection de tout signal trompeur.",
      },
    ],
    limit:
      "Représentation fonctionnelle, puis erreur fictive en deux dimensions. Le modèle de biais constant ne représente ni toute la dérive d’une centrale réelle ni la gravité, les erreurs d’orientation ou un filtre de fusion complet.",
    source: {
      title: "FAA — AIM, Inertial Reference Units",
      url: "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_1.html",
    },
  },
  {
    id: "reckoning",
    title: "Le vent change la route au sol",
    paths: [
      "/aeronautique/navigation-aerienne/instruments-de-vol/comment-un-pilote-peut-il-trouver-sa-route-sans-gps",
    ],
    steps: [
      {
        label: "Sans vent",
        caption: "Le déplacement dans l’air correspond ici au déplacement au sol.",
        detail:
          "La flèche bleue indique le vecteur de vitesse dans l’air. Pour un temps donné, multiplier la vitesse par la durée donne un déplacement ; les directions doivent aussi être prises en compte.",
      },
      {
        label: "Vent de travers",
        caption: "Le vent s’ajoute au mouvement dans l’air et décale la route.",
        detail:
          "Le triangle additionne les vecteurs : vitesse au sol égale vitesse dans l’air plus vent. La flèche orange part de la pointe de la bleue ; la verte relie le départ au résultat.",
      },
      {
        label: "Orienter le nez",
        caption: "Le nez peut être orienté de côté tout en suivant la route souhaitée.",
        detail:
          "Dans cet exemple, une composante du mouvement dans l’air compense le vent latéral. La vitesse dans l’air est conservée entre les trois vues ; la vitesse au sol change avec la configuration.",
      },
    ],
    limit:
      "Vitesses fictives dans un plan, vent constant et durée commune. Les vecteurs respectent l’addition et une vitesse propre constante ; ce dessin ne fournit ni cap de vol réel ni navigation de secours.",
    source: {
      title: "FAA — Pilot’s Handbook, Navigation",
      url: "https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf",
    },
  },
  {
    id: "aircontrol",
    title: "Du terrain aux secteurs en route",
    paths: [
      "/aeronautique/navigation-aerienne/controle-du-trafic-aerien/controle-du-trafic-aerien-principes",
    ],
    steps: [
      {
        label: "Aérodrome",
        caption: "La tour suit les mouvements sur la piste et à ses abords.",
        detail:
          "La piste, la tour et le départ figurent une organisation simplifiée. Les périmètres exacts du service dépendent de l’aérodrome et des procédures applicables.",
      },
      {
        label: "Approche",
        caption: "Un service d’approche organise les arrivées et les départs.",
        detail:
          "La trajectoire traverse une zone intermédiaire avant de rejoindre l’espace en route. Les communications et transferts sont coordonnés entre organismes : le dessin ne signifie pas que le contrôle cesse entre les zones.",
      },
      {
        label: "En route",
        caption: "Des secteurs se partagent le suivi du trafic en croisière.",
        detail:
          "Les boîtes illustrent des volumes de responsabilité et les points de passage des transferts coordonnés. Ce ne sont pas des rails matériels ; les espacements réglementaires ne sont pas à l’échelle de l’image.",
      },
    ],
    limit:
      "Organisation générique, volumes et trajet symboliques, sans carte aéronautique ni distance de séparation. Un service peut remplir plusieurs fonctions selon le lieu ; les trois dessins ne définissent pas une procédure de vol.",
    source: {
      title: "DGAC — Missions du contrôle aérien",
      url: "https://recrutement.ecologie.gouv.fr/metiers/ingenieur-e-du-controle-navigation-aerienne",
    },
  },
  {
    id: "airrates",
    title: "Un nombre d’accidents a besoin d’un dénominateur",
    paths: ["/aeronautique/aviation-civile/securite/statistiques-mondiales-securite-aerienne"],
    steps: [
      {
        label: "Compter les accidents",
        caption: "Dans le périmètre OACI retenu, 95 accidents sont recensés en 2024.",
        detail:
          "Ce total comprend 10 accidents mortels. Il concerne les vols commerciaux réguliers d’avions de masse maximale au décollage supérieure à 5 700 kg, pas toute l’aviation.",
      },
      {
        label: "Compter les départs",
        caption: "Le même rapport retient 37,09 millions de départs en 2024.",
        detail:
          "Le volume d’activité constitue le dénominateur. Comparer seulement les nombres bruts entre deux années ne suffit pas si le trafic a changé.",
      },
      {
        label: "Calculer un taux",
        caption: "Le rapport publie 2,56 accidents par million de départs pour 2024.",
        detail:
          "On divise 95 par 37,09 millions, puis on multiplie par un million. Un taux d’accidents ne donne pas le nombre de morts ni le risque individuel de chaque voyage.",
      },
    ],
    limit:
      "Données historiques OACI 2024, rapport édition 2025, périmètre constant. Ce calcul n’établit ni un classement entre transports ni une tendance depuis 1970 ; il ne présente pas les derniers chiffres disponibles.",
    source: {
      title: "OACI — Safety Report 2025, pages 6–8",
      url: "https://www.icao.int/sites/default/files/sp-files/safety/Documents/ICAO_SR_2025.pdf",
    },
  },
  {
    id: "tcas",
    title: "Une surveillance entre avions équipés",
    paths: [
      "/aeronautique/aviation-civile/securite/comment-deux-avions-evitent-ils-de-se-rentrer-dedans-en-plein-ciel",
    ],
    steps: [
      {
        label: "Interroger et recevoir",
        caption: "Le TCAS interroge les transpondeurs des avions proches.",
        detail:
          "Les échanges radio fournissent des informations de trafic, notamment de distance et d’altitude. Le système ne détecte pas un avion dont le transpondeur compatible est absent ou inopérant.",
      },
      {
        label: "Alerter sur le trafic",
        caption: "Une alerte de trafic attire l’attention sur un conflit possible.",
        detail:
          "L’encadré orange représente une alerte TA, sans instruction de manœuvre. La logique évalue l’évolution du rapprochement : la proximité dessinée ne constitue pas un seuil universel.",
      },
      {
        label: "Coordonner les avis",
        caption: "Deux systèmes compatibles peuvent coordonner des avis complémentaires.",
        detail:
          "Les trajectoires verte et bleue montrent un exemple d’évitement vertical coordonné. Les avis RA peuvent aussi limiter ou modifier une vitesse verticale ; ils ne signifient pas toujours que l’un monte et l’autre descend.",
      },
    ],
    limit:
      "Vue de profil schématique de TCAS II, sans seuil, délai ni commande utilisable. Le système constitue une barrière supplémentaire avec des limites ; la figure n’est ni une garantie d’évitement ni une instruction de pilotage.",
    source: {
      title: "EUROCONTROL — ACAS / TCAS",
      url: "https://www.eurocontrol.int/system/acas",
    },
  },
  {
    id: "adsb",
    title: "De la position calculée au message diffusé",
    paths: [
      "/aeronautique/navigation-aerienne/controle-du-trafic-aerien/comment-peut-on-suivre-sur-internet-les-avions-en-plein-vol",
    ],
    steps: [
      {
        label: "Calculer la position",
        caption: "Des signaux de navigation sont reçus à bord.",
        detail:
          "Les satellites de navigation émettent vers le récepteur de l’avion. Ce premier lien sert à calculer une position ; le dessin ne représente pas une interrogation des satellites par l’avion.",
      },
      {
        label: "Diffuser un message",
        caption: "L’avion diffuse sa position et d’autres informations par radio.",
        detail:
          "Le signal orange part cette fois de l’avion vers des récepteurs compatibles au sol ou dans d’autres avions. L’ADS-B Out est une diffusion automatique, distincte d’un écho radar.",
      },
      {
        label: "Afficher une trace",
        caption: "Les messages reçus peuvent alimenter un affichage du trafic.",
        detail:
          "La liaison entre station et écran représente le traitement au sol. Un site public peut agréger des réceptions pour afficher une trace, avec des limites de couverture, de délai et de filtrage.",
      },
    ],
    limit:
      "Chaîne fonctionnelle ADS-B simplifiée ; satellites, avions et station ne sont pas à l’échelle. L’écran est fictif, sans vol réel suivi. Tous les avions et récepteurs ne disposent pas des mêmes équipements.",
    source: {
      title: "FAA — ADS-B Out and ADS-B In",
      url: "https://www.faa.gov/air_traffic/technology/equipadsb/resources/faq",
    },
  },
  {
    id: "recorders",
    title: "Deux types de données dans des mémoires protégées",
    paths: [
      "/aeronautique/aviation-civile/securite/la-boite-noire-deux-enregistreurs-pour-comprendre-un-accident",
    ],
    steps: [
      {
        label: "Sons du cockpit",
        caption: "Le CVR enregistre l’environnement sonore du poste de pilotage.",
        detail:
          "L’onde est un signal fictif représentant sons, conversations et alarmes. Ce dessin n’est pas un enregistrement d’accident et ne reproduit aucune conversation réelle.",
      },
      {
        label: "Paramètres de vol",
        caption: "Le FDR enregistre des paramètres de fonctionnement et de vol.",
        detail:
          "Les courbes symbolisent plusieurs grandeurs horodatées, sans unités ni événement réel. Elles ne sont pas une simple copie des sons du cockpit.",
      },
      {
        label: "Relire les mémoires",
        caption: "Les enquêteurs récupèrent puis rapprochent les données disponibles.",
        detail:
          "La coupe montre une mémoire protégée dans une enveloppe résistante. Les formes et couches sont pédagogiques ; certains équipements combinent plusieurs fonctions dans un même enregistreur.",
      },
    ],
    limit:
      "Formes génériques d’enregistreurs orange et coupe fonctionnelle. Signaux entièrement fictifs, sans résistance chiffrée ni garantie de récupération. Aucun enregistrement réel ni méthode de démontage.",
    source: {
      title: "ANSV — Flight recorders",
      url: "https://ansv.it/en/flight-recorders/",
    },
  },
  {
    id: "investigation",
    title: "Croiser les indices pour prévenir une répétition",
    paths: ["/aeronautique/aviation-civile/securite/enquetes-de-securite-apres-accident"],
    steps: [
      {
        label: "Recueillir",
        caption: "Données de vol, pièces et témoignages apportent des indices différents.",
        detail:
          "Les trois objets sont des exemples de sources d’information. Aucun indice isolé ne résume forcément un événement ; les enquêteurs examinent aussi le contexte opérationnel et documentaire.",
      },
      {
        label: "Reconstituer",
        caption: "Les informations sont rapprochées sur une chronologie.",
        detail:
          "Les repères reliés montrent comment plusieurs indices peuvent être comparés. Les étapes dessinées sont fictives et ne décrivent aucun accident ni une attribution de faute.",
      },
      {
        label: "Recommander",
        caption: "Des recommandations peuvent proposer des mesures de prévention.",
        detail:
          "Une recommandation s’adresse aux organismes concernés pour réduire un risque identifié. Son émission n’est pas une preuve que la mesure a déjà été mise en œuvre ou qu’un accident ne pourra plus survenir.",
      },
    ],
    limit:
      "Enquête de sécurité représentée comme un travail d’analyse, sans scène d’accident réel ni décision judiciaire. Les pictogrammes détaillés sont des exemples ; les recommandations ne sont pas automatiquement des obligations.",
    source: {
      title: "DGAC — Recommandations de sécurité",
      url: "https://www.ecologie.gouv.fr/politiques-publiques/recommandations-securite",
    },
  },
  {
    id: "certification",
    title: "De l’exigence à la démonstration de conformité",
    paths: [
      "/aeronautique/aviation-civile/certification-aeronautique/certification-avion-de-transport",
    ],
    steps: [
      {
        label: "Définir le cadre",
        caption: "Une base et un programme de certification précisent les exigences.",
        detail:
          "Le constructeur et l’autorité définissent les moyens de démontrer la conformité, y compris pour les nouveautés. Les deux premiers temps du processus EASA sont regroupés ici dans une seule vue.",
      },
      {
        label: "Apporter les preuves",
        caption: "Calculs, essais au sol et essais en vol alimentent la démonstration.",
        detail:
          "L’aile chargée représente un exemple d’essai de structure, pas l’unique preuve. Les charges appliquées vers le haut sont reprises par le montage ; la flexion est agrandie pour rendre l’essai lisible.",
      },
      {
        label: "Examiner et approuver",
        caption: "L’autorité examine la démonstration avant une éventuelle approbation.",
        detail:
          "La validation de conformité d’un type est distincte de l’autorisation individuelle d’un avion et de celle d’un exploitant. La figure ne remplace aucun document officiel et n’affiche pas un certificat réel.",
      },
    ],
    limit:
      "Processus EASA de certification de type condensé en trois vues, sans portée juridique pour un cas particulier. L’aile est fictive, charges et déformation non calculées ; aucun essai destructif garanti pour tous les programmes.",
    source: {
      title: "EASA — Aircraft certification",
      url: "https://www.easa.europa.eu/en/domains/aircraft-products/aircraft-certification",
    },
  },
];
