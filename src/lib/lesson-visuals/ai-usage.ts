import type { LessonDiagramSpec } from "./registry";
export const AI_USAGE_DIAGRAMS: readonly LessonDiagramSpec[] = [
  {
    id: "multimodal",
    title: "Texte, image et son dans un même traitement",
    paths: [
      "/intelligence-artificielle/modeles-de-langage/ia-generative/gpt-4o-ia-generative-multimodale",
    ],
    steps: [
      {
        label: "Des chaînes séparées",
        caption: "Une chaîne vocale peut séparer transcription, réponse et synthèse vocale.",
        detail:
          "La première scène représente un exemple de chaîne en trois modèles. Le texte transmis entre eux ne conserve pas nécessairement toute l’information de la voix, comme l’intonation.",
      },
      {
        label: "Plusieurs modalités",
        caption: "Un traitement multimodal peut recevoir plusieurs types de données.",
        detail:
          "Les cartes représentent une image, des mots et un son. La boîte centrale résume un modèle commun ; ce dessin ne révèle pas l’architecture interne exacte de GPT-4o.",
      },
      {
        label: "Une réponse illustrée",
        caption: "La réponse peut relier des éléments de l’image et de la consigne.",
        detail:
          "L’exemple dessiné reçoit une image de tasse et une question, puis affiche « Une tasse ». Il ne s’agit pas d’une inférence exécutée ; les modalités disponibles dépendent du modèle et du produit.",
      },
    ],
    limit:
      "Principe illustré à partir de l’annonce historique de 2024. Aucune disponibilité actuelle, latence ou performance n’est annoncée ; tous les modèles multimodaux ne produisent pas tous les types de sortie.",
    source: {
      title: "OpenAI — Hello GPT-4o, annonce du 13 mai 2024",
      url: "https://openai.com/index/hello-gpt-4o/",
    },
  },
  {
    id: "hallucination",
    title: "Une réponse plausible doit encore être vérifiée",
    paths: [
      "/intelligence-artificielle/modeles-de-langage/limites-et-erreurs/limites-des-modeles-de-langage",
    ],
    steps: [
      {
        label: "Une affirmation",
        caption: "Une phrase fluide peut annoncer une information fausse.",
        detail:
          "Le musée et son nombre de salles sont entièrement fictifs. L’exemple sert à dissocier le ton d’une réponse de sa véracité ; ce n’est pas une citation réelle ni un résultat de modèle.",
      },
      {
        label: "Recouper",
        caption: "Une source pertinente permet ici de repérer la contradiction.",
        detail:
          "Le document fictif indique quatre salles tandis que la réponse en annonçait sept. Une source doit elle-même être identifiée, datée et comprise ; le dessin ne garantit pas qu’une recherche trouve toujours la réponse.",
      },
      {
        label: "Corriger ou s’abstenir",
        caption: "Le résultat doit être corrigé ou l’incertitude reconnue.",
        detail:
          "Dans cet exemple, les informations fournies permettent de corriger le nombre. Si elles ne le permettaient pas, dire que l’on ne sait pas serait préférable à inventer ; une IA peut apprendre à exprimer son incertitude.",
      },
    ],
    limit:
      "Cas pédagogique inventé, sans mesure du taux d’erreur d’une IA. Assurance verbale et fiabilité ne sont pas équivalentes ; les modèles et outils de vérification peuvent eux-mêmes se tromper.",
    source: {
      title: "OpenAI — Why language models hallucinate, 2025",
      url: "https://openai.com/index/why-language-models-hallucinate/",
    },
  },
  {
    id: "localmodel",
    title: "Un modèle exécuté dans la mémoire de l’ordinateur",
    paths: [
      "/intelligence-artificielle/modeles-de-langage/transformeurs/faire-tourner-ia-ordinateur",
    ],
    steps: [
      {
        label: "Charger les poids",
        caption: "Les paramètres du modèle sont chargés pour effectuer des calculs localement.",
        detail:
          "Le fichier, la mémoire et le processeur sont représentés dans l’ordinateur. Aucun service distant n’est nécessaire dans cet exemple, une fois les fichiers et le logiciel disponibles.",
      },
      {
        label: "Réduire la précision",
        caption: "Une quantification regroupe des valeurs dans moins de niveaux.",
        detail:
          "Les quatre valeurs sont un jouet numérique. Le passage illustré de huit à deux bits par valeur réduit le nombre de codes disponibles de 256 à quatre ; les paramètres sont donc approximés.",
      },
      {
        label: "Prévoir toute la mémoire",
        caption: "La mémoire sert aux poids, mais aussi au contexte et au programme.",
        detail:
          "Les trois zones ne sont pas à l’échelle. La place nécessaire dépend du modèle, de la longueur du contexte, des caches et du logiciel ; la taille du fichier ne suffit pas à prédire l’usage de mémoire.",
      },
    ],
    limit:
      "Ordinateur et quantification schématiques, sans recommandation matérielle. Les échelles et métadonnées de quantification ne sont pas comptées dans le jouet. La perte de qualité et le gain de vitesse dépendent du modèle et du format.",
    source: {
      title: "llama.cpp — documentation officielle de quantification",
      url: "https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md",
    },
  },
  {
    id: "assistive",
    title: "Changer de modalité pour rendre une information accessible",
    paths: [
      "/intelligence-artificielle/ethique-et-societe/travail-et-usages/comment-l-intelligence-artificielle-aide-t-elle-les-personnes-aveugles-ou-sourdes",
    ],
    steps: [
      {
        label: "Du texte à la voix",
        caption: "Un texte filmé peut être reconnu puis lu à voix haute.",
        detail:
          "Le téléphone vise ici le mot « Sortie ». La reconnaissance de caractères et la synthèse vocale sont deux opérations distinctes ; cette scène représente leur principe, sans lancer la caméra ni produire du son.",
      },
      {
        label: "De la parole au texte",
        caption: "La parole peut être affichée sous forme de transcription.",
        detail:
          "Le mot « Bonjour » est un exemple préparé, pas une reconnaissance en direct. Le bruit, la distance, la langue et l’élocution peuvent affecter la qualité de la transcription.",
      },
      {
        label: "Vérifier une ambiguïté",
        caption: "Une reconnaissance incertaine peut nécessiter une autre vérification.",
        detail:
          "La lettre O et le chiffre 0 illustrent une ambiguïté de lecture. Le dessin conserve le point d’interrogation au lieu d’annoncer un résultat certain ; les besoins et moyens de contrôle varient selon la personne.",
      },
    ],
    limit:
      "Exemples génériques d’aides à la lecture et à la transcription, sans simulation de handicap ni interface d’une application réelle. Aucun diagnostic, guidage de déplacement ou dosage de médicament n’est proposé.",
    source: {
      title: "Google Accessibilité — produits et fonctionnalités",
      url: "https://www.google.com/intl/fr/accessibility/products-features/",
    },
  },
  {
    id: "syntheticmedia",
    title: "Un média peut être transformé sans raconter un événement réel",
    paths: [
      "/intelligence-artificielle/modeles-de-langage/ia-generative/comment-fabrique-t-on-un-deepfake-et-pourquoi-faut-il-s-en-mefier",
    ],
    steps: [
      {
        label: "Des éléments de départ",
        caption:
          "Un trucage peut combiner des traits et une expression issus de sources différentes.",
        detail:
          "Les deux avatars sont dessinés et ne représentent aucune personne réelle. L’un fournit ici une apparence, l’autre une expression ; c’est un principe de manipulation, pas une procédure logicielle.",
      },
      {
        label: "Une scène fabriquée",
        caption: "Une apparence recomposée peut donner une impression trompeuse.",
        detail:
          "L’avatar de sortie combine visuellement des éléments des deux dessins. Aucun réseau n’est exécuté ; d’autres techniques synthétiques fonctionnent différemment, notamment pour le son ou la génération complète.",
      },
      {
        label: "Vérifier l’origine",
        caption: "L’apparence seule ne suffit pas à établir l’origine d’un contenu.",
        detail:
          "Les trois repères invitent à examiner l’émetteur, l’historique et les confirmations indépendantes. Une provenance signée aide à tracer des informations, mais ne garantit pas la vérité de l’événement ; son absence ne prouve pas un faux.",
      },
    ],
    limit:
      "Avatars fictifs et transformation dessinée, aucun vrai visage ou enregistrement. Le schéma n’est pas un détecteur de deepfake ; les indices visuels et les techniques de provenance ont des limites.",
    source: {
      title: "NIST — Reducing Risks Posed by Synthetic Content, 2024",
      url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf",
    },
  },
  {
    id: "retrieval",
    title: "Chercher des documents avant de formuler une réponse",
    paths: [
      "/intelligence-artificielle/modeles-de-langage/limites-et-erreurs/pourquoi-une-ia-conversationnelle-ne-connait-elle-pas-les-dernieres-nouvelles",
    ],
    steps: [
      {
        label: "Des paramètres fixés",
        caption: "Une utilisation du modèle ne met pas automatiquement ses paramètres à jour.",
        detail:
          "Le cadenas désigne ici des poids fixés pendant l’inférence, pas un modèle impossible à réentraîner. Les éléments qui ne sont pas dans ses paramètres peuvent être fournis par le contexte ou un outil.",
      },
      {
        label: "Récupérer des documents",
        caption: "Un outil peut apporter des passages externes au moment de la question.",
        detail:
          "Les feuillets représentent des documents sélectionnés dans une base ou sur le Web. Leur date, leur pertinence et leur fiabilité doivent être contrôlées ; la récupération n’est pas un accès certain à tous les faits.",
      },
      {
        label: "Répondre avec du contexte",
        caption: "Le modèle peut utiliser les passages récupérés pour construire sa réponse.",
        detail:
          "Les flèches distinguent documents et paramètres. Lire un passage dans le contexte ne réentraîne pas les poids ; une citation doit pointer vers une source qui soutient réellement l’affirmation, et des erreurs restent possibles.",
      },
    ],
    limit:
      "Architecture simplifiée de génération augmentée par récupération, sans requête réseau exécutée ni date limite de connaissances attribuée à un produit. Pas de garantie d’actualité ou d’exactitude.",
    source: {
      title: "Lewis et al. — Retrieval-Augmented Generation, 2020",
      url: "https://arxiv.org/abs/2005.11401",
    },
  },
  {
    id: "robotaction",
    title: "Observer, commander un geste et observer à nouveau",
    paths: [
      "/intelligence-artificielle/ethique-et-societe/travail-et-usages/comment-un-robot-peut-il-apprendre-a-agir-dans-des-situations-qu-il-n-a-jamais-vues",
    ],
    steps: [
      {
        label: "Observer et recevoir une consigne",
        caption: "La caméra et la consigne décrivent la tâche à accomplir.",
        detail:
          "La scène fictive demande de saisir le cube. Le bras et l’objet sont dessinés ; le modèle n’analyse pas une vraie caméra et aucune commande n’est envoyée à une machine.",
      },
      {
        label: "Produire une action",
        caption: "Une politique apprise peut produire des commandes pour le robot.",
        detail:
          "La pince atteint ici le cube dans une pose calculée de bras à deux segments. La cinématique sert seulement au dessin ; un système réel doit aussi gérer collisions, forces, limites matérielles et supervision.",
      },
      {
        label: "Observer après le geste",
        caption: "De nouvelles observations permettent de poursuivre le contrôle en boucle.",
        detail:
          "Le cube est soulevé dans ce scénario préparé. Cela ne démontre ni réussite sur un objet inconnu, ni apprentissage en direct : généraliser après entraînement et ajuster les poids pendant l’action sont deux choses distinctes.",
      },
    ],
    limit:
      "Bras planaire fictif à deux segments, sans dynamique ni robot piloté. Les trois poses sont préparées ; la généralisation à des situations nouvelles doit être évaluée, elle n’est pas garantie par la présence d’un modèle VLA.",
    source: {
      title: "Brohan et al. — RT-2, Vision-Language-Action Models, 2023",
      url: "https://arxiv.org/abs/2307.15818",
    },
  },
  {
    id: "visionlanguage",
    title: "Relier une représentation de l’image aux mots de la question",
    paths: [
      "/intelligence-artificielle/modeles-de-langage/transformeurs/comment-une-ia-peut-elle-comprendre-a-la-fois-une-image-et-une-phrase",
    ],
    steps: [
      {
        label: "Image et question",
        caption: "Une image et une question fournissent deux types d’entrée.",
        detail:
          "La tasse et la question sont un exemple construit. Les cases sur l’image rappellent un découpage possible en patchs ; il ne s’agit pas d’un OCR qui remplace toute l’image par une phrase.",
      },
      {
        label: "Relier les représentations",
        caption: "Un encodeur visuel et une liaison rendent les informations compatibles.",
        detail:
          "La scène s’inspire de LLaVA : l’encodeur fournit des caractéristiques, puis une projection les relie à l’espace du modèle de langage. Les petits blocs sont symboliques et ne révèlent pas leurs valeurs réelles.",
      },
      {
        label: "Produire une réponse textuelle",
        caption: "Le modèle utilise les deux entrées pour répondre sur l’image.",
        detail:
          "La réponse « Une tasse » est préparée pour la démonstration. Ce type d’architecture peut répondre ou décrire, mais tous les modèles vision-langage ne génèrent pas des images et CLIP seul n’est pas ce modèle conversationnel complet.",
      },
    ],
    limit:
      "Exemple inspiré de l’architecture LLaVA, pas architecture universelle des modèles multimodaux. Aucune inférence ni mesure de compréhension ; lecture de petits détails et relations spatiales peuvent échouer.",
    source: {
      title: "Liu et al. — Visual Instruction Tuning, LLaVA, 2023",
      url: "https://arxiv.org/abs/2304.08485",
    },
  },
];
