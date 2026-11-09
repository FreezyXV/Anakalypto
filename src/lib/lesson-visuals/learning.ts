import type { LessonDiagramSpec } from "./registry";
export const LEARNING_DIAGRAMS: readonly LessonDiagramSpec[] = [
  {
    id: "gradient",
    title: "Réduire une erreur en ajustant un paramètre",
    paths: [
      "/intelligence-artificielle/apprentissage-automatique/apprentissage-profond/principes-apprentissage-profond",
    ],
    steps: [
      {
        label: "Point de départ",
        caption: "Dans cet exemple, le paramètre initial donne une erreur élevée.",
        detail:
          "La courbe représente une fonction fictive L = (w − 3)², avec w initialement nul. Elle sert à rendre visible une idée d’optimisation, pas à reproduire le paysage d’un véritable réseau profond.",
      },
      {
        label: "Premier ajustement",
        caption: "Un pas dans le sens opposé au gradient réduit l’erreur.",
        detail:
          "Avec un taux d’apprentissage de 0,2, le paramètre passe de 0 à 1,2. La valeur de L passe de 9 à 3,24 ; les points sont placés sur la courbe à partir de ces calculs.",
      },
      {
        label: "Nouvel ajustement",
        caption: "Un autre pas rapproche encore le paramètre du minimum de ce jouet.",
        detail:
          "Le paramètre atteint 1,92 et L vaut environ 1,17. Dans un réseau réel, beaucoup de paramètres sont ajustés et la fonction n’a généralement pas cette forme simple ; la baisse globale n’est pas garantie à chaque étape.",
      },
    ],
    limit:
      "Fonction convexe fictive à un paramètre, données sans unité et pas constants. La rétropropagation calcule des gradients ; cette courbe ne représente ni tout un réseau ni une mesure de sa précision sur de nouvelles données.",
    source: {
      title: "Stanford CS231n — Optimization and gradient descent",
      url: "https://cs231n.github.io/optimization-1/",
    },
  },
  {
    id: "golearning",
    title: "Proposer des coups, explorer puis apprendre des parties",
    paths: [
      "/intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement/apprentissage-par-renforcement-alphago",
    ],
    steps: [
      {
        label: "Représenter une position",
        caption: "La position du plateau est fournie à des réseaux de calcul.",
        detail:
          "Le plateau réduit est un exemple pédagogique de go en 9 × 9, pas une position issue d’un match d’AlphaGo. Les réseaux de politique et de valeur ont des rôles différents : proposer des coups et évaluer des positions.",
      },
      {
        label: "Explorer des suites",
        caption: "Une recherche explore des suites de coups sélectionnées.",
        detail:
          "L’arbre réduit montre des branches possibles, sans prétendre visiter toutes les parties. Dans AlphaGo, la recherche combine simulations et évaluations par réseaux ; les traits épais ne sont pas des probabilités mesurées.",
      },
      {
        label: "S’entraîner par le jeu",
        caption: "Les parties d’entraînement fournissent des résultats pour améliorer les réseaux.",
        detail:
          "La boucle représente l’autoconfrontation sur de nombreuses parties. Le point ajouté illustre seulement un coup légal ; le petit plateau n’est pas terminé et aucun résultat de cette position n’est calculé.",
      },
    ],
    limit:
      "Go 9 × 9 simplifié et arbre fictif. AlphaGo jouait en 19 × 19 ; le dessin ne rejoue aucun match, ne calcule pas le meilleur coup et ne confond pas apprentissage initial sur parties humaines avec autoconfrontation.",
    source: {
      title: "Silver et al. — AlphaGo, Nature 2016",
      url: "https://research.google/pubs/mastering-the-game-of-go-with-deep-neural-networks-and-tree-search/",
    },
  },
  {
    id: "overfitting",
    title: "Réussir sur les exemples vus ne suffit pas",
    paths: [
      "/intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement/donnees-dentrainement-et-surapprentissage",
    ],
    steps: [
      {
        label: "Début d’apprentissage",
        caption: "Les erreurs sur l’entraînement et la validation sont encore élevées.",
        detail:
          "Les deux courbes sont entièrement fictives et utilisent la même échelle. Le temps d’entraînement augmente vers la droite ; il ne s’agit pas du nombre de données ni d’un résultat expérimental.",
      },
      {
        label: "Comparer sur des données à part",
        caption: "La validation atteint ici son erreur la plus basse.",
        detail:
          "Les exemples de validation ne servent pas aux mises à jour des poids. Ils peuvent aider à choisir un réglage ou un moment d’arrêt ; un jeu de test final distinct sert ensuite à évaluer le choix obtenu.",
      },
      {
        label: "Surapprentissage",
        caption: "L’erreur d’entraînement baisse encore tandis que celle de validation remonte.",
        detail:
          "Cet écart illustre un surapprentissage possible. La forme des courbes n’est pas universelle et ne résume pas les problèmes de distribution, de fuite de données ou de corrélations trompeuses.",
      },
    ],
    limit:
      "Courbes synthétiques calculées, sans unité ni score d’un modèle réel. Validation utilisée pour les choix de modèle, test final tenu à part ; les deux rôles ne sont pas interchangeables.",
    source: {
      title: "Google — Machine Learning Crash Course, Overfitting",
      url: "https://developers.google.com/machine-learning/crash-course/overfitting/overfitting",
    },
  },
  {
    id: "attention",
    title: "Des jetons qui combinent leurs informations",
    paths: [
      "/intelligence-artificielle/modeles-de-langage/transformeurs/transformeurs-architecture-ia",
    ],
    steps: [
      {
        label: "Représenter les jetons",
        caption: "Les trois blocs représentent ici des jetons et leur position.",
        detail:
          "Les mots courts ont été choisis pour simplifier le dessin. En réalité, un jeton peut être une partie de mot ; les représentations sont des vecteurs numériques et une information de position est nécessaire.",
      },
      {
        label: "Pondérer les liens",
        caption: "Une tête d’attention combine des valeurs avec des poids normalisés.",
        detail:
          "Les poids 0,2, 0,5 et 0,3 sont choisis pour l’exemple et totalisent 1. Ils ne viennent pas d’un vrai modèle et ne prouvent pas une compréhension grammaticale ni une explication complète de sa réponse.",
      },
      {
        label: "Masquer le futur",
        caption: "Dans une attention causale, les jetons futurs ne sont pas accessibles.",
        detail:
          "La matrice autorise seulement la diagonale et les positions antérieures. Un encodeur peut utiliser une attention bidirectionnelle ; en génération autorégressive, les nouveaux jetons sont produits successivement.",
      },
    ],
    limit:
      "Une seule tête et trois jetons fictifs ; les matrices sont calculées et normalisées. Ni couches complètes, ni apprentissage de projections, ni toutes les variantes de transformeurs ne sont représentés.",
    source: {
      title: "Vaswani et al. — Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
    },
  },
  {
    id: "arcadelearning",
    title: "Voir les pixels, estimer des actions et rejouer des expériences",
    paths: [
      "/intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement/comment-une-ia-a-t-elle-appris-seule-a-jouer-a-des-jeux-video-atari",
    ],
    steps: [
      {
        label: "Observer l’écran",
        caption: "L’agent reçoit des images d’un jeu et des récompenses.",
        detail:
          "La scène est un jeu fictif de type arcade, pas une capture Atari. Des observations successives peuvent apporter une information de mouvement qu’une seule image ne fournit pas.",
      },
      {
        label: "Estimer les actions",
        caption: "Le réseau estime un retour futur pour chaque action possible.",
        detail:
          "Les trois barres montrent des valeurs Q entièrement inventées, pas des probabilités ni le score immédiat du jeu. La politique peut choisir une action exploratoire au lieu du maximum estimé.",
      },
      {
        label: "Rejouer des expériences",
        caption: "Des transitions stockées sont échantillonnées pour entraîner le réseau.",
        detail:
          "Chaque expérience associe état, action, récompense et état suivant. Le tampon est limité et peut oublier d’anciennes transitions ; DQN ne conserve pas indéfiniment tout ce qu’il a vécu.",
      },
    ],
    limit:
      "Jeu arcade dessiné, valeurs Q et transitions fictives. Schéma de principe inspiré de DQN, sans reproduction d’un entraînement, score humain ou nombre de jeux ; réseau convolutif et mise à jour sont condensés.",
    source: {
      title: "Mnih et al. — Playing Atari with Deep Reinforcement Learning",
      url: "https://arxiv.org/abs/1312.5602",
    },
  },
  {
    id: "exploration",
    title: "Essayer autre chose pour améliorer ce que l’on sait",
    paths: [
      "/intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement/pourquoi-une-ia-doit-elle-parfois-tenter-des-choix-au-hasard-pour-mieux-apprendre",
    ],
    steps: [
      {
        label: "Ce qui est observé",
        caption: "Les actions n’ont pas toutes été essayées autant de fois.",
        detail:
          "Les fractions indiquent des récompenses observées dans un exemple fictif, pas les probabilités véritables des actions. Celle qui n’a jamais été essayée reste inconnue.",
      },
      {
        label: "Exploiter",
        caption: "L’agent choisit ici l’action dont la moyenne observée est la meilleure.",
        detail:
          "Ce choix utilise ce qu’il connaît déjà. Il peut être bon à court terme tout en manquant une autre action encore peu explorée ; le dessin ne révèle pas les distributions cachées.",
      },
      {
        label: "Explorer",
        caption: "Une branche aléatoire peut choisir une action encore inconnue.",
        detail:
          "Avec epsilon = 0,1, cette branche est choisie avec une probabilité de 10 %, pas exactement une fois toutes les dix actions. Le tirage aléatoire peut aussi retomber sur l’action déjà jugée la meilleure.",
      },
    ],
    limit:
      "Trois actions fictives avec récompenses binaires et observations très limitées. Les 90 % / 10 % décrivent les branches de la politique, pas une performance, un calendrier déterministe ou la probabilité de gain d’une machine réelle.",
    source: {
      title: "Truong, Haupt et Koyejo — Machine Learning from Human Preferences, Action",
      url: "https://mlhp.stanford.edu/src/chap3.html",
    },
  },
  {
    id: "convolution",
    title: "Un même filtre calcule une réponse à plusieurs endroits",
    paths: [
      "/intelligence-artificielle/apprentissage-automatique/apprentissage-profond/comment-un-reseau-de-neurones-convolutif-repere-t-il-les-formes-dans-une-image",
    ],
    steps: [
      {
        label: "Pixels et filtre",
        caption: "Une petite image numérique est accompagnée d’un filtre 3 × 3.",
        detail:
          "L’image binaire contient un bord vertical. Le filtre est choisi à la main pour ce calcul pédagogique ; dans un réseau convolutif entraîné, ses coefficients sont généralement appris.",
      },
      {
        label: "Calcul local",
        caption: "Le filtre multiplie les neuf valeurs locales puis additionne les produits.",
        detail:
          "La fenêtre orange encadre les pixels utilisés. Le nombre affiché à droite est calculé à partir de cette fenêtre, avec un pas de un pixel et sans ajout de bordure.",
      },
      {
        label: "Carte de réponses",
        caption: "Le même calcul produit une carte qui répond au bord vertical.",
        detail:
          "L’image 5 × 5 et le filtre 3 × 3 donnent une sortie 3 × 3 dans cette configuration. Les réponses non nulles indiquent un contraste compatible avec ce filtre, pas une reconnaissance d’objet entier.",
      },
    ],
    limit:
      "Image binaire et filtre uniques, sans canaux RGB, biais, activation ou pooling. Convention de corrélation croisée utilisée par les CNN usuels ; les nombres sont calculés, pas un score d’un modèle entraîné.",
    source: {
      title: "Stanford CS231n — Convolutional layers",
      url: "https://cs231n.github.io/convolutional-networks/",
    },
  },
  {
    id: "recurrent",
    title: "Un état de calcul transmis dans le temps",
    paths: [
      "/intelligence-artificielle/apprentissage-automatique/apprentissage-profond/comment-un-reseau-de-neurones-recurrent-se-souvient-il-du-debut-d-une-phrase",
    ],
    steps: [
      {
        label: "Lire « Le »",
        caption: "Le premier élément met à jour un état à partir de l’état initial.",
        detail:
          "Le bloc h₁ résulte du mot représenté et de h₀. Les blocs dépliés montrent des appels successifs d’un même calcul, avec des paramètres partagés, pas trois réseaux entraînés séparément.",
      },
      {
        label: "Lire « chat »",
        caption: "Le nouvel élément est combiné avec l’état précédent.",
        detail:
          "La flèche horizontale transmet h₁ au calcul suivant. Un état caché est une représentation numérique comprimée ; ce n’est pas une copie intacte de tous les mots déjà lus.",
      },
      {
        label: "Lire « dort »",
        caption: "La troisième étape produit un nouvel état dépendant du parcours précédent.",
        detail:
          "L’information ancienne peut être difficile à conserver ou à apprendre sur de longues séquences. Les portes des LSTM aident à gérer cette information, mais elles ne sont pas représentées dans cette chaîne de RNN simple.",
      },
    ],
    limit:
      "Trois mots pris comme éléments d’entrée, états symboliques sans valeurs apprises. Schéma déplié d’un RNN simple ; il ne décrit pas toutes les variantes, ni les détails du gradient ou des portes d’un LSTM.",
    source: {
      title: "Stanford CS231n — Recurrent Neural Networks",
      url: "https://cs231n.github.io/rnn/",
    },
  },
  {
    id: "expertinference",
    title: "Des faits et des règles écrites qui produisent une conclusion",
    paths: [
      "/intelligence-artificielle/apprentissage-automatique/comment-fonctionnaient-les-systemes-experts-ces-ia-faites-de-regles",
    ],
    steps: [
      {
        label: "Faits fournis",
        caption: "Les propriétés de la figure sont données au système.",
        detail:
          "L’exemple dispose de faits encodés : trois côtés et trois longueurs égales. Il ne doit pas les deviner sur une photographie ; cette étape est distincte de la reconnaissance d’image.",
      },
      {
        label: "Appliquer une règle",
        caption: "Une règle applicable ajoute une nouvelle propriété.",
        detail:
          "La règle « si trois côtés, alors triangle » permet d’ajouter le fait triangle. Le moteur d’inférence recherche les règles dont les conditions correspondent aux faits disponibles.",
      },
      {
        label: "Enchaîner les règles",
        caption: "La conclusion d’une règle peut servir à une règle suivante.",
        detail:
          "À partir de triangle et de trois côtés égaux, une seconde règle conclut équilatéral. Ce petit exemple logique illustre un chaînage avant, sans apprendre automatiquement les règles à partir de données.",
      },
    ],
    limit:
      "Exemple déterministe de géométrie avec faits et règles fixés à la main. Aucun diagnostic de personne, système médical ou moteur expert complet ; les incertitudes et conflits de règles ne sont pas simulés.",
    source: {
      title: "CLIPS — User’s Guide, facts, rules and inference engine",
      url: "https://www.clipsrules.net/documentation/v642/ug642.pdf",
    },
  },
  {
    id: "diffusion",
    title: "Du bruit vers une image guidée par du texte",
    paths: [
      "/intelligence-artificielle/modeles-de-langage/ia-generative/comment-une-ia-fabrique-t-elle-une-image-a-partir-d-une-simple-phrase",
    ],
    steps: [
      {
        label: "Bruit de départ",
        caption: "La génération peut démarrer d’un échantillon de bruit.",
        detail:
          "Le cadre montre une texture numérique construite pour l’illustration. Il n’y a pas une photographie originale cachée sous ce bruit : une génération cherche à former un nouvel échantillon.",
      },
      {
        label: "Étapes guidées",
        caption: "Un modèle appris guide progressivement la transformation du bruit.",
        detail:
          "L’encodage du texte conditionne ici l’exemple « une maison ». Le dessin résume de nombreuses évaluations possibles ; ce n’est ni une exécution réelle ni exactement trois opérations de débruitage.",
      },
      {
        label: "Image produite",
        caption: "Une image se forme au terme du processus illustré.",
        detail:
          "La maison finale est dessinée pour expliquer le principe, pas générée par un modèle dans cette application. Certains modèles diffusent dans un espace latent puis décodent ce résultat en pixels.",
      },
    ],
    limit:
      "Trois illustrations d’une trajectoire de génération, sans réseau exécuté, reconstruction d’une image masquée ou promesse de résultat. Le texte conditionne un modèle appris ; il ne prescrit pas directement la couleur de chaque pixel.",
    source: {
      title: "Rombach et al. — High-Resolution Image Synthesis with Latent Diffusion Models",
      url: "https://arxiv.org/abs/2112.10752",
    },
  },
];
