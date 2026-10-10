---
type: category
title: Intelligence artificielle
slug: intelligence-artificielle
categoryPath: intelligence-artificielle
level: 0
parentSlug:
summary: >
  Une intelligence artificielle ne comprend pas au sens où nous l'entendons. Elle repère des
  régularités dans d'énormes quantités d'exemples, puis s'en sert pour prédire. Cette distinction
  est la clé pour comprendre à la fois ce que ces systèmes réussissent remarquablement et ce
  qu'ils ratent de façon parfois absurde. Cette section explique comment ils apprennent, quelles
  architectures ont permis les progrès récents, et ce que les modèles de langage font réellement
  quand ils écrivent une phrase. Un dernier volet traite des questions que ces outils posent à la
  société : les biais qu'ils reproduisent, la difficulté de leur demander des comptes, et les
  premières règles adoptées pour les encadrer. On s'en tient ici à ce qui est établi, en
  signalant ce qui relève de l'annonce.
---

---
type: category
title: Apprentissage automatique
slug: apprentissage-automatique
categoryPath: intelligence-artificielle/apprentissage-automatique
level: 1
parentSlug: intelligence-artificielle
summary: >
  Au lieu d'écrire les règles, on montre des exemples et le programme ajuste lui-même ses
  paramètres. C'est le changement de méthode à l'origine de tout le reste.
---

---
type: category
title: Apprentissage profond
slug: apprentissage-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
level: 2
parentSlug: apprentissage-automatique
summary: >
  Des réseaux de neurones empilés sur de nombreuses couches, chacune construisant des
  représentations un peu plus abstraites que la précédente.
---

---
type: category
title: Apprentissage par renforcement
slug: apprentissage-par-renforcement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
level: 2
parentSlug: apprentissage-automatique
summary: >
  Apprendre par essais et erreurs, guidé par une récompense. C'est ainsi qu'une machine a appris
  à jouer au go mieux que n'importe quel humain.
---

---
type: category
title: Données et entraînement
slug: donnees-et-entrainement
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
level: 2
parentSlug: apprentissage-automatique
summary: >
  La qualité d'un modèle dépend d'abord de ses données. Cette catégorie traite de leur
  collecte, de leur étiquetage et des pièges classiques de l'entraînement.
---

---
type: category
title: Modèles de langage
slug: modeles-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage
level: 1
parentSlug: intelligence-artificielle
summary: >
  Des systèmes qui prédisent le mot suivant. Cette description paraît modeste, mais elle suffit
  à produire des textes cohérents sur presque n'importe quel sujet.
---

---
type: category
title: Transformeurs
slug: transformeurs
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
level: 2
parentSlug: modeles-de-langage
summary: >
  L'architecture publiée en 2017 qui a rendu possibles les grands modèles actuels, grâce à un
  mécanisme appelé attention.
---

---
type: category
title: IA générative
slug: ia-generative
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
level: 2
parentSlug: modeles-de-langage
summary: >
  Produire du texte, des images, du son ou du code plutôt que classer ou prédire une valeur.
  Un déplacement d'usage qui a rendu ces outils grand public.
---

---
type: category
title: Limites et erreurs
slug: limites-et-erreurs
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
level: 2
parentSlug: modeles-de-langage
summary: >
  Pourquoi un modèle invente des références qui n'existent pas, échoue sur des calculs simples,
  et reste confiant dans les deux cas.
---

---
type: category
title: Éthique et société
slug: ethique-et-societe
categoryPath: intelligence-artificielle/ethique-et-societe
level: 1
parentSlug: intelligence-artificielle
summary: >
  Qui est responsable d'une décision prise par un système ? Que faire des biais qu'il
  reproduit ? Et comment encadrer une technologie qui évolue plus vite que les textes.
---

---
type: category
title: Biais
slug: biais
categoryPath: intelligence-artificielle/ethique-et-societe/biais
level: 2
parentSlug: ethique-et-societe
summary: >
  Un modèle entraîné sur des données qui reflètent des inégalités passées les reproduit, et
  parfois les amplifie, avec l'apparence de la neutralité.
---

---
type: category
title: Régulation
slug: regulation
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
level: 2
parentSlug: ethique-et-societe
summary: >
  Le premier cadre juridique complet au monde a été adopté en Europe en 2024. Il classe les
  usages selon le risque qu'ils font courir.
---

---
type: category
title: Travail et usages
slug: travail-et-usages
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
level: 2
parentSlug: ethique-et-societe
summary: >
  Ce que ces outils changent concrètement dans les métiers, au-delà des annonces de
  remplacement massif comme des dénégations.
---

---
type: article
title: Comment une machine apprend
slug: principes-apprentissage-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  On ne lui donne pas de règles. On lui montre des exemples, et elle ajuste des millions de
  paramètres jusqu'à se tromper le moins possible.
tags: [apprentissage, reseaux-de-neurones, retropropagation, entrainement, couches]
relatedArticles: [transformeurs-architecture-ia, donnees-dentrainement-et-surapprentissage]
sources:
  - title: "Deep learning"
    url: "https://www.britannica.com/technology/deep-learning"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
  - title: "Machine learning"
    url: "https://www.nature.com/subjects/machine-learning"
    publisher: "Nature"
    date: "2025"
quiz:
  - question: "En quoi l'apprentissage automatique diffère-t-il de la programmation classique ?"
    options:
      - "Il est plus rapide"
      - "On ne donne pas les règles : le programme les déduit lui-même à partir d'exemples"
      - "Il n'utilise pas d'ordinateur"
    answer: 2
    explanation: >
      Écrire les règles pour reconnaître un chat sur une photo est impossible. Montrer des
      milliers de photos étiquetées et laisser le système trouver ce qui les distingue
      fonctionne.
  - question: "Que font les couches successives d'un réseau profond ?"
    options:
      - "Elles répètent le même calcul"
      - "Chacune construit une représentation un peu plus abstraite que la précédente"
      - "Elles vérifient le travail des autres"
    answer: 2
    explanation: >
      Sur une image, les premières couches détectent des bords, les suivantes des formes, puis
      des parties d'objets, puis des objets entiers.
lastVerified: 2026-09-23
status: published
---

## En bref

Programmer, c'est normalement écrire des règles : si ceci, alors cela.

Cette méthode fonctionne très bien pour calculer un salaire ou trier une liste. Elle échoue
complètement pour reconnaître un chat sur une photo.

Essayez d'écrire les règles qui définissent un chat. Des oreilles pointues ? Un chien aussi. De
la fourrure ? Un tapis aussi. Aucune liste de règles ne marche.

## Le changement de méthode

L'apprentissage automatique renverse le problème.

On ne donne plus les règles. On donne des milliers d'exemples étiquetés — voici un chat, voici un
chien — et le système ajuste lui-même ses paramètres internes jusqu'à se tromper le moins souvent
possible.

Il ne découvre pas la définition d'un chat. Il trouve une combinaison de motifs qui sépare les
deux catégories sur les exemples qu'on lui a montrés.

## Les réseaux de neurones

Le dispositif le plus utilisé s'inspire très librement du cerveau.

Des unités de calcul, organisées en couches, reçoivent des nombres, les combinent avec des poids,
et transmettent un résultat à la couche suivante.

« Profond » signifie simplement qu'il y a beaucoup de couches.

Et cette profondeur a un effet remarquable : chaque couche construit une représentation un peu
plus abstraite. Sur une image, les premières couches réagissent à des bords et des contrastes.
Les suivantes à des formes simples. Puis à des textures, des parties d'objets, et enfin à des
objets entiers.

Personne n'a programmé cette hiérarchie. Elle émerge de l'entraînement.

## Comment l'ajustement se fait

Le principe s'appelle la rétropropagation du gradient, formulé dans les années 1980.

On présente un exemple, on compare la réponse du réseau à la bonne réponse, on mesure l'erreur.
Puis on calcule, pour chaque paramètre, dans quel sens le modifier légèrement pour réduire cette
erreur. Et on recommence, des millions de fois.

C'est une descente très lente vers le fond d'une vallée, à tâtons.

## Pourquoi maintenant

L'idée est ancienne. Ce qui a changé récemment tient à trois choses.

Les données : internet a rendu disponibles des quantités d'images et de textes sans précédent.

La puissance de calcul : les processeurs graphiques, conçus pour les jeux vidéo, se sont révélés
parfaitement adaptés à ces calculs répétitifs et parallèles.

Et quelques avancées techniques qui ont rendu possible l'entraînement de réseaux vraiment
profonds.

## À retenir

- L'apprentissage automatique déduit les règles au lieu de les recevoir.
- Un réseau profond empile des couches qui construisent des représentations de plus en plus
  abstraites.
- La rétropropagation ajuste les paramètres pour réduire l'erreur, par petits pas.
- Données massives et processeurs graphiques expliquent l'essor récent.

[Emplacement image : couches successives d'un réseau et représentations construites, légende et
texte alternatif à fournir ultérieurement.]

---

---
type: article
title: Apprendre en jouant des millions de parties
slug: apprentissage-par-renforcement-alphago
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Le go comporte plus de positions possibles qu'il n'y a d'atomes dans l'Univers observable.
  Impossible de les calculer toutes : il fallait apprendre à évaluer.
tags: [renforcement, go, jeu, recompense, strategie]
relatedArticles: [principes-apprentissage-profond, limites-des-modeles-de-langage]
sources:
  - title: "Reinforcement learning"
    url: "https://www.britannica.com/technology/reinforcement-learning"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
  - title: "Machine learning"
    url: "https://www.nature.com/subjects/machine-learning"
    publisher: "Nature"
    date: "2025"
quiz:
  - question: "Comment un système apprend-il par renforcement ?"
    options:
      - "En lisant des livres de règles"
      - "En essayant des actions et en recevant une récompense ou une pénalité selon le
        résultat"
      - "En copiant un humain"
    answer: 2
    explanation: >
      Il n'y a pas de bonne réponse fournie à chaque étape. Le système découvre par essais
      quelles suites d'actions mènent à une récompense.
  - question: "Pourquoi le go était-il plus difficile que les échecs pour une machine ?"
    options:
      - "Les règles sont plus compliquées"
      - "Le nombre de positions possibles est astronomiquement plus grand et une position est
        difficile à évaluer"
      - "Le plateau est plus petit"
    answer: 2
    explanation: >
      Aux échecs, on peut compter la valeur des pièces. Au go, évaluer une position relève
      d'une appréciation globale que les programmeurs ne savaient pas formuler.
lastVerified: 2026-09-23
status: published
---

## En bref

Il existe une troisième façon d'apprendre, différente de celle qui consiste à montrer des exemples
étiquetés.

Dans l'apprentissage par renforcement, personne ne dit quelle est la bonne action. Le système
essaie, observe le résultat, et reçoit une récompense ou une pénalité.

À force d'essais, il découvre quelles suites d'actions mènent à de bons résultats.

C'est ainsi que l'on apprend à faire du vélo : pas en lisant un manuel, mais en tombant.

## Le problème du crédit

La difficulté principale est subtile.

Dans une partie de jeu, la récompense arrive à la fin : on a gagné ou perdu. Mais quel coup, parmi
les deux cents joués, mérite le crédit ?

Peut-être le coup décisif a-t-il été joué cinquante tours plus tôt, et paraissait alors anodin.

Tout l'art des algorithmes de renforcement consiste à répartir ce crédit dans le temps.

## Pourquoi le go était si difficile

Les échecs ont été résolus par la force de calcul dès les années 1990 : on explore les coups
possibles et on évalue les positions en comptant la valeur des pièces.

Le go résistait pour deux raisons.

Le nombre de positions possibles y est astronomiquement plus grand — bien supérieur au nombre
d'atomes dans l'Univers observable. Aucune exploration exhaustive n'est envisageable.

Et surtout, évaluer une position est très difficile. Il n'y a pas de pièces à compter. Les joueurs
professionnels parlent d'intuition, de forme, d'équilibre. Personne ne savait traduire cela en
règles.

## La solution

Un système a combiné deux éléments.

Un réseau de neurones entraîné à évaluer une position et à proposer des coups plausibles, ce qui
réduit énormément l'espace à explorer.

Et une exploration ciblée, qui simule des suites de coups à partir de ces propositions.

Le système a d'abord appris sur des parties humaines, puis a progressé en jouant contre lui-même
des millions de parties.

Une version ultérieure s'est passée entièrement des parties humaines, apprenant de zéro par
autoconfrontation — et a dépassé la précédente.

## Ce que cela a montré

Certains coups joués par la machine ont d'abord semblé être des erreurs aux commentateurs
professionnels, avant de se révéler décisifs.

Le système avait exploré des régions du jeu que des siècles de pratique humaine avaient écartées.

La méthode a ensuite trouvé des applications hors du jeu : optimisation de la consommation
énergétique de centres de données, contrôle de plasma dans des réacteurs expérimentaux,
découverte d'algorithmes.

## À retenir

- L'apprentissage par renforcement procède par essais, guidé par une récompense.
- La difficulté est de savoir quelle action mérite le crédit d'un succès tardif.
- Le go résistait par son nombre de positions et la difficulté d'évaluer une position.
- Le système a progressé en jouant contre lui-même des millions de parties.

[Emplacement image : boucle action-récompense de l'apprentissage par renforcement, légende et
texte alternatif à fournir ultérieurement.]

---

---
type: article
title: Les données d'entraînement
slug: donnees-dentrainement-et-surapprentissage
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un modèle qui réussit parfaitement sur ses exemples d'entraînement et échoue ailleurs a appris
  par cœur au lieu de comprendre.
tags: [donnees, surapprentissage, etiquetage, generalisation, validation]
relatedArticles: [principes-apprentissage-profond, biais-algorithmiques-exemples-documentes]
sources:
  - title: "Machine learning"
    url: "https://www.nature.com/subjects/machine-learning"
    publisher: "Nature"
    date: "2025"
  - title: "Artificial intelligence"
    url: "https://www.britannica.com/technology/artificial-intelligence"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
quiz:
  - question: "Qu'est-ce que le surapprentissage ?"
    options:
      - "Apprendre trop vite"
      - "Mémoriser les exemples d'entraînement au lieu d'en tirer des règles générales"
      - "Utiliser trop de données"
    answer: 2
    explanation: >
      Le modèle réussit parfaitement sur ce qu'il a vu et échoue sur du nouveau. C'est
      l'équivalent d'un élève qui apprend les corrigés par cœur sans comprendre la méthode.
  - question: "Pourquoi garde-t-on des données de côté pendant l'entraînement ?"
    options:
      - "Pour économiser de la mémoire"
      - "Pour tester le modèle sur des exemples qu'il n'a jamais vus et détecter le
        surapprentissage"
      - "Pour les utiliser plus tard"
    answer: 2
    explanation: >
      Évaluer un modèle sur ses propres données d'entraînement ne prouve rien. Seuls des
      exemples inédits mesurent sa capacité à généraliser.
lastVerified: 2026-09-23
status: published
---

## En bref

On parle beaucoup d'algorithmes. Dans la pratique, la qualité d'un système d'apprentissage dépend
au moins autant de ses données.

Un adage du domaine résume la situation : si les données sont mauvaises, les résultats le seront
aussi, quelle que soit la sophistication du modèle.

## Le travail invisible de l'étiquetage

Pour apprendre à reconnaître quelque chose, un modèle a besoin d'exemples annotés.

Quelqu'un a dû entourer des piétons sur des centaines de milliers d'images, transcrire des heures
d'audio, classer des textes.

Ce travail est massif, souvent sous-traité, et rarement évoqué quand on présente une prouesse
technique. Il pose des questions de conditions de travail, notamment pour les personnes chargées
de trier des contenus violents.

## Le piège du surapprentissage

Voici l'erreur classique, et elle est instructive.

Imaginez un élève qui apprend par cœur tous les corrigés d'exercices. Il aura vingt sur vingt sur
ces exercices précis, et zéro sur un exercice nouveau.

Un modèle peut faire exactement cela : mémoriser ses exemples d'entraînement plutôt que d'en
extraire des régularités utiles.

D'où une règle absolue : on met de côté une partie des données, que le modèle ne voit jamais
pendant son entraînement. C'est sur celles-là qu'on l'évalue. Un écart important entre les deux
performances signale un surapprentissage.

## Les corrélations trompeuses

Un modèle trouve ce qui sépare les catégories, sans se demander si c'est pertinent.

Des exemples réels ont été documentés. Un système censé distinguer des animaux avait en réalité
appris à repérer la neige en arrière-plan, parce que toutes les photos d'une espèce avaient été
prises en hiver.

Un système d'aide au diagnostic avait appris à reconnaître le type d'appareil ayant pris la
radiographie, car les cas graves venaient d'un hôpital particulier.

Le modèle a bien fonctionné sur les données de test. Il aurait échoué dans la vraie vie.

## Ce que cela implique

La documentation des données compte autant que celle du code : d'où viennent-elles, qui les a
annotées, quelles populations sont représentées, quelles périodes couvrent-elles.

Et l'évaluation doit se faire sur des données qui ressemblent aux conditions réelles d'usage, pas
à celles du laboratoire.

## À retenir

- La qualité des données pèse autant que celle de l'algorithme.
- L'étiquetage représente un travail humain massif et peu visible.
- Le surapprentissage consiste à mémoriser au lieu de généraliser.
- Un modèle peut réussir pour de mauvaises raisons, en exploitant des corrélations trompeuses.

[Emplacement image : erreur sur les données d'entraînement et sur les données de test, légende et
texte alternatif à fournir ultérieurement.]

---

---
type: article
title: Les transformeurs
slug: transformeurs-architecture-ia
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Publiée en 2017, cette architecture traite tous les mots d'une phrase en parallèle plutôt que
  l'un après l'autre. C'est ce qui a tout débloqué.
tags: [transformeurs, attention, 2017, parallelisation, contexte]
relatedArticles: [principes-apprentissage-profond, gpt-4o-ia-generative-multimodale]
sources:
  - title: "Transformer models"
    url: "https://www.britannica.com/technology/artificial-intelligence"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
  - title: "Machine learning"
    url: "https://www.nature.com/subjects/machine-learning"
    publisher: "Nature"
    date: "2025"
quiz:
  - question: "Qu'apporte le mécanisme d'attention ?"
    options:
      - "Il accélère le calcul"
      - "Il permet à chaque mot de regarder tous les autres mots de la phrase et de pondérer
        leur importance"
      - "Il corrige les fautes d'orthographe"
    answer: 2
    explanation: >
      Dans « le chat que le chien poursuivait était noir », l'attention permet de relier
      « était noir » à « chat » plutôt qu'à « chien », malgré la distance.
  - question: "Pourquoi le traitement en parallèle a-t-il tout changé ?"
    options:
      - "Il produit de meilleures phrases"
      - "Il permet d'exploiter pleinement les processeurs graphiques et donc d'entraîner sur
        des données bien plus vastes"
      - "Il consomme moins d'électricité"
    answer: 2
    explanation: >
      Les architectures précédentes traitaient les mots l'un après l'autre, ce qui interdisait
      la parallélisation. Le goulot d'étranglement n'était pas l'idée, mais le temps de calcul.
lastVerified: 2026-09-23
status: published
---

## En bref

En 2017, un article scientifique au titre provocateur — « L'attention est tout ce dont vous avez
besoin » — propose une nouvelle architecture de réseau de neurones : le transformeur.

Presque tous les systèmes d'intelligence artificielle dont on parle aujourd'hui en descendent.

## Le problème d'avant

Les architectures précédentes traitaient un texte mot après mot, en gardant une mémoire de ce qui
précédait.

Deux limites en découlaient.

La mémoire se dégradait avec la distance : un lien entre le début et la fin d'un long paragraphe
se perdait.

Et surtout, le traitement était séquentiel. Il fallait finir le mot précédent avant de commencer
le suivant. Impossible de paralléliser, donc impossible d'exploiter la puissance des processeurs
graphiques, qui excellent justement à faire beaucoup de choses en même temps.

## L'idée de l'attention

Le transformeur traite tous les mots simultanément.

Pour chaque mot, il calcule à quel point chacun des autres mots de la phrase est pertinent. Ces
poids s'appellent l'attention.

Prenons une phrase : « Le chat que le chien poursuivait était noir. » Qui est noir ? Un humain
répond sans réfléchir. Pour une machine, il faut relier « était noir » à « chat », alors que
« chien » est bien plus proche dans la phrase.

Le mécanisme d'attention permet exactement cela : établir des liens directs entre mots éloignés,
sans passer par tous les mots intermédiaires.

## Ce que cela a débloqué

Le traitement en parallèle permet d'utiliser pleinement les processeurs graphiques.

Conséquence : on peut entraîner sur des quantités de texte incomparablement plus grandes, et
construire des modèles beaucoup plus gros.

Le goulot d'étranglement n'était donc pas l'idée mais le temps de calcul. En le levant,
l'architecture a ouvert la voie à une montée en échelle qui a produit des capacités inattendues.

## Au-delà du texte

L'architecture s'est révélée générale.

Elle a été appliquée aux images, en les découpant en morceaux traités comme des mots ; à l'audio ;
au code ; et à la prédiction de la structure des protéines, un problème resté ouvert pendant des
décennies en biologie.

## À retenir

- Le transformeur est publié en 2017 et fonde les systèmes actuels.
- Il traite tous les mots en parallèle au lieu de les enchaîner.
- L'attention relie directement des mots éloignés dans un texte.
- La parallélisation a permis d'entraîner sur des données bien plus vastes.

[Emplacement image : mécanisme d'attention reliant les mots d'une phrase, légende et texte
alternatif à fournir ultérieurement.]

---

---
type: article
title: L'IA générative multimodale
slug: gpt-4o-ia-generative-multimodale
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Un même modèle traite texte, image et son. L'adoption a été l'une des plus rapides jamais
  observées pour une technologie grand public.
tags: [IA-generative, multimodal, ChatGPT, adoption, usages]
relatedArticles: [transformeurs-architecture-ia, limites-des-modeles-de-langage]
sources:
  - title: "Generative AI"
    url: "https://www.britannica.com/technology/artificial-intelligence"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
  - title: "AI"
    url: "https://www.oecd.org/digital/artificial-intelligence/"
    publisher: "OCDE"
    date: "2025"
quiz:
  - question: "Que signifie « multimodal » ?"
    options:
      - "Qui fonctionne sur plusieurs appareils"
      - "Qui traite plusieurs types de données — texte, image, son — dans un même modèle"
      - "Qui parle plusieurs langues"
    answer: 2
    explanation: >
      Auparavant, un modèle par type de donnée, reliés bout à bout. Traiter le tout dans un
      seul système réduit les pertes d'information et accélère la réponse.
  - question: "Comment un modèle de langage produit-il une phrase ?"
    options:
      - "Il la cherche dans une base de données"
      - "Il prédit le mot suivant, un par un, en fonction de ce qui précède"
      - "Il traduit depuis une langue interne"
    answer: 2
    explanation: >
      C'est le mécanisme complet. La cohérence apparente du texte résulte de cette prédiction
      répétée, pas d'un plan établi à l'avance.
lastVerified: 2026-09-23
status: published
---

## En bref

Publié en mai 2024, GPT-4o a marqué une étape : un même modèle traitait et produisait du texte,
des images et de l'audio.

L'adoption a été spectaculaire. ChatGPT comptait environ 200 millions d'utilisateurs actifs
hebdomadaires en août 2024, et une très grande majorité des plus grandes entreprises mondiales
utilisaient ces outils.

Ce modèle particulier a depuis été retiré de l'interface grand public en février 2026, tout en
restant accessible aux développeurs. Le rythme de renouvellement est rapide.

## Ce que multimodal veut dire

Auparavant, faire parler une machine supposait d'enchaîner plusieurs systèmes : un pour
transcrire la voix en texte, un pour traiter le texte, un pour produire une voix.

À chaque passage, de l'information se perdait — l'intonation, l'hésitation, le bruit de fond — et
du temps aussi.

Traiter les trois dans un même modèle supprime ces ruptures. Le système peut percevoir le ton
d'une voix et y répondre.

## Ce qu'un modèle de langage fait réellement

Le mécanisme est important à comprendre, parce qu'il explique aussi les défauts.

Un modèle de langage prédit le mot suivant. C'est tout.

Il a été entraîné sur d'immenses quantités de texte, et il a appris quelles suites de mots sont
plausibles. Quand on lui pose une question, il produit un mot, puis le suivant en tenant compte
de ce qu'il vient d'écrire, et ainsi de suite.

Il n'a pas de plan préalable. Il n'y a pas de sens caché quelque part. La cohérence apparaît de
cette prédiction répétée.

Ce constat surprend, car les textes produits paraissent réfléchis. Mais c'est bien ce
fonctionnement-là, et il éclaire pourquoi le système peut être brillant et absurde dans la même
réponse.

## Ce que cela change concrètement

Les usages les mieux établis sont ceux où un humain reste en position de vérifier : rédiger un
premier jet, reformuler, résumer, traduire, expliquer un concept, aider à écrire du code.

Les usages où personne ne vérifie sont les plus risqués, précisément parce que le système est tout
aussi fluide quand il se trompe.

## À retenir

- Multimodal signifie traiter texte, image et son dans un même modèle.
- ChatGPT a atteint environ 200 millions d'utilisateurs hebdomadaires en août 2024.
- Un modèle de langage prédit le mot suivant, sans plan préalable.
- Les usages sûrs sont ceux où un humain vérifie le résultat.

[Emplacement image : chaîne de traitement séparée et traitement multimodal unifié, légende et
texte alternatif à fournir ultérieurement.]

---

---
type: article
title: Pourquoi une IA invente des choses fausses
slug: limites-des-modeles-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Un modèle qui produit une référence inexistante ne ment pas. Il fait exactement ce pour quoi
  il a été conçu : produire une suite de mots plausible.
tags: [hallucination, fiabilite, verification, limites, plausibilite]
relatedArticles: [gpt-4o-ia-generative-multimodale, donnees-dentrainement-et-surapprentissage]
sources:
  - title: "Artificial intelligence"
    url: "https://www.britannica.com/technology/artificial-intelligence"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
  - title: "AI principles"
    url: "https://www.oecd.org/digital/artificial-intelligence/"
    publisher: "OCDE"
    date: "2025"
quiz:
  - question: "Pourquoi un modèle de langage invente-t-il des références qui n'existent pas ?"
    options:
      - "Parce qu'il veut tromper"
      - "Parce qu'il produit ce qui est plausible, et qu'une fausse référence ressemble
        beaucoup à une vraie"
      - "Parce qu'il a mal mémorisé"
    answer: 2
    explanation: >
      Le système optimise la vraisemblance de la suite de mots, pas sa véracité. Un titre
      d'article inventé a exactement la forme d'un vrai titre.
  - question: "Pourquoi un modèle est-il aussi sûr de lui quand il se trompe ?"
    options:
      - "Parce qu'on l'a programmé pour être confiant"
      - "Parce que rien dans son fonctionnement ne distingue une réponse exacte d'une réponse
        plausible mais fausse"
      - "Parce qu'il refuse d'admettre ses erreurs"
    answer: 2
    explanation: >
      Le ton assuré fait partie du style appris. Il ne reflète aucune évaluation interne de
      fiabilité, ce qui rend la vérification humaine indispensable.
lastVerified: 2026-09-23
status: published
---

## En bref

Un modèle de langage peut citer un article scientifique qui n'existe pas, avec un titre crédible,
des auteurs plausibles et une année cohérente.

On appelle cela une hallucination. Le mot est mal choisi, car il suggère un dysfonctionnement.

Ce n'est pas un bug. C'est la conséquence directe du fonctionnement normal du système.

## L'explication

Le modèle a été entraîné à produire la suite de mots la plus plausible.

Or une référence bibliographique inventée est exactement aussi plausible qu'une vraie : même
structure, même style, mêmes conventions de nommage.

Rien, dans le mécanisme, ne distingue « restituer une information mémorisée » de « produire
quelque chose qui ressemble à une information ». Les deux se présentent identiquement.

## Pourquoi il ne doute pas

Le ton assuré fait partie du style qu'il a appris. Les textes sur lesquels il s'est entraîné sont
majoritairement écrits avec assurance.

Il n'existe pas, dans son fonctionnement, de mécanisme interne qui évalue la fiabilité de ce qu'il
produit et module le ton en conséquence.

C'est ce qui rend ces erreurs particulièrement piégeuses : elles arrivent avec la même confiance
que les réponses exactes.

## Les autres limites

Le calcul. Un modèle manipule du texte, pas des nombres. Il peut échouer sur des opérations
qu'une calculatrice à deux euros réussit, parce qu'il produit un résultat plausible plutôt qu'il
ne calcule. Les systèmes récents contournent cela en appelant de vrais outils de calcul.

La date de connaissance. Un modèle a été entraîné jusqu'à un certain moment. Ce qui s'est passé
après lui est inconnu, sauf s'il dispose d'un accès à des sources externes.

Les biais des données, qu'il reproduit.

Et la sensibilité à la formulation : reformuler une question peut changer la réponse, ce qui
indique que le raisonnement n'est pas aussi stable qu'il en a l'air.

## Comment s'en servir raisonnablement

La règle pratique est simple : plus le coût d'une erreur est élevé, plus la vérification doit
être systématique.

Demander une explication d'un concept que l'on peut recouper, faire reformuler un texte dont on
connaît le contenu, obtenir un premier jet que l'on relira : ces usages exposent peu.

Demander un chiffre précis, une référence, une règle de droit, un diagnostic : là, vérifier n'est
pas une précaution mais une nécessité.

## À retenir

- Une hallucination n'est pas un bug mais une conséquence du fonctionnement normal.
- Le système optimise la plausibilité, pas la véracité.
- Son assurance ne reflète aucune évaluation interne de fiabilité.
- La vérification doit être proportionnée au coût d'une erreur.

[Emplacement image : production d'une référence plausible mais inexistante, légende et texte
alternatif à fournir ultérieurement.]

---

---
type: article
title: Les biais des algorithmes
slug: biais-algorithmiques-exemples-documentes
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un système entraîné sur des décisions passées apprend aussi les discriminations qu'elles
  contenaient, puis les applique avec l'apparence de l'objectivité.
tags: [biais, discrimination, recrutement, equite, donnees]
relatedArticles: [donnees-dentrainement-et-surapprentissage, reglement-europeen-sur-lia-ai-act]
sources:
  - title: "AI principles"
    url: "https://www.oecd.org/digital/artificial-intelligence/"
    publisher: "OCDE"
    date: "2025"
  - title: "Ethics of AI"
    url: "https://www.unesco.org/en/artificial-intelligence"
    publisher: "UNESCO"
    date: "2025"
quiz:
  - question: "D'où viennent principalement les biais d'un système d'IA ?"
    options:
      - "De bugs dans le code"
      - "Des données d'entraînement, qui reflètent des décisions et des inégalités passées"
      - "De la volonté des concepteurs"
    answer: 2
    explanation: >
      Un système entraîné sur des recrutements passés reproduira les préférences qui les
      guidaient, sans que personne ne l'ait voulu ni programmé.
  - question: "Supprimer la variable « sexe » ou « origine » suffit-il à éliminer un biais ?"
    options:
      - "Oui, c'est la solution"
      - "Non : d'autres variables corrélées permettent au modèle de reconstituer
        l'information"
      - "Oui, si on supprime aussi l'âge"
    answer: 2
    explanation: >
      Un code postal, un parcours scolaire, un type de loisir peuvent suffire. C'est ce qu'on
      appelle une variable substitutive.
lastVerified: 2026-09-23
status: published
---

## En bref

Un algorithme paraît neutre. C'est une machine, elle ne préfère personne.

Cette intuition est fausse, et l'apparence de neutralité aggrave le problème plutôt qu'elle ne le
règle.

## D'où viennent les biais

Principalement des données.

Un système entraîné sur des décisions humaines passées apprend ces décisions, y compris ce
qu'elles avaient de discriminatoire.

Un cas documenté et devenu classique : un outil d'aide au recrutement entraîné sur les embauches
passées d'une entreprise. Comme ces embauches avaient favorisé un profil particulier, le système
a appris à reproduire cette préférence, en pénalisant par exemple des indices associés à un autre
profil. L'outil a été abandonné.

Personne n'avait programmé cette discrimination. Elle était dans les données.

## Les autres sources

La représentation. Si un groupe est peu présent dans les données d'entraînement, le système
fonctionne moins bien pour lui. Des systèmes de reconnaissance faciale ont montré des taux
d'erreur nettement plus élevés sur certains groupes que sur d'autres.

La définition même de l'objectif. Optimiser un critère apparemment neutre peut produire un
résultat injuste : maximiser la réussite scolaire prédite peut conduire à écarter les élèves qui
auraient le plus besoin d'aide.

Et la boucle de rétroaction : un système qui envoie davantage de contrôles dans un quartier y
trouvera mécaniquement davantage d'infractions, ce qui confirmera sa prédiction et renforcera le
ciblage.

## Pourquoi c'est difficile à corriger

Supprimer la variable sensible ne suffit pas. D'autres variables la reconstituent : le code
postal, le parcours scolaire, le type de loisirs. On les appelle des variables substitutives.

Et définir l'équité est en soi un problème. Plusieurs définitions mathématiques existent — même
taux d'erreur entre groupes, même taux de sélection, même valeur prédictive — et il a été démontré
qu'elles ne peuvent pas être satisfaites simultanément, sauf cas particuliers.

Choisir une définition est donc une décision politique, pas technique.

## Ce qui aide

Documenter les données et les limites d'usage d'un système.

Mesurer les performances séparément par groupe, et pas seulement en moyenne.

Permettre l'audit par des tiers.

Et maintenir une intervention humaine réelle dans les décisions à fort enjeu, ce qui suppose que
la personne puisse effectivement contredire la machine.

## À retenir

- Les biais viennent surtout des données, pas du code.
- Supprimer une variable sensible ne suffit pas : d'autres la reconstituent.
- Plusieurs définitions de l'équité existent et sont incompatibles entre elles.
- Mesurer les performances par groupe est indispensable.

[Emplacement image : boucle de rétroaction d'un système de prédiction, légende et texte
alternatif à fournir ultérieurement.]

---

---
type: article
title: Le règlement européen sur l'IA
slug: reglement-europeen-sur-lia-ai-act
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Entré en vigueur le 1er août 2024, il classe les usages selon leur risque plutôt que les
  technologies selon leur nature.
tags: [regulation, AI-Act, Europe, risque, sanctions]
relatedArticles: [biais-algorithmiques-exemples-documentes, moderation-des-contenus-en-ligne]
sources:
  - title: "AI Act"
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
    publisher: "Commission européenne"
    date: "2025"
  - title: "Ethics of AI"
    url: "https://www.unesco.org/en/artificial-intelligence"
    publisher: "UNESCO"
    date: "2025"
quiz:
  - question: "Sur quoi le règlement européen fonde-t-il ses obligations ?"
    options:
      - "Sur la technologie employée"
      - "Sur le risque que l'usage fait courir aux personnes"
      - "Sur la taille de l'entreprise"
    answer: 2
    explanation: >
      Un même modèle peut être sans obligation particulière dans un usage anodin et très
      encadré dans un usage sensible comme le recrutement ou le crédit.
  - question: "Pourquoi réguler l'usage plutôt que la technologie ?"
    options:
      - "Parce que c'est plus simple"
      - "Parce qu'une technologie évolue vite et qu'un texte qui la vise directement devient
        obsolète"
      - "Parce que la technologie est neutre"
    answer: 2
    explanation: >
      Une règle fondée sur l'usage reste applicable quand la technique change. C'est un choix
      de conception du texte.
lastVerified: 2026-09-23
status: published
---

## En bref

Le règlement européen sur l'intelligence artificielle est entré en vigueur le 1er août 2024.
C'est le premier cadre juridique complet au monde sur ce sujet.

Son application se fait par étapes : les interdictions dès février 2025, les obligations relatives
aux modèles à usage général en août 2025, et le reste progressivement.

Les sanctions peuvent atteindre 35 millions d'euros ou 7 % du chiffre d'affaires mondial.

## L'idée centrale

Le texte ne régule pas la technologie. Il régule les usages, classés selon le risque qu'ils font
courir aux personnes.

C'est un choix de conception important. Une règle qui viserait une technique précise deviendrait
obsolète à la génération suivante. Une règle fondée sur l'usage survit au changement technique.

## Quatre niveaux

Les usages à risque inacceptable sont interdits. On y trouve la notation sociale généralisée des
citoyens par les autorités publiques, l'exploitation des vulnérabilités de personnes fragiles, et
certaines formes d'identification biométrique à distance en temps réel dans l'espace public.

Les usages à haut risque sont autorisés mais lourdement encadrés : recrutement, accès à
l'éducation, évaluation de crédit, dispositifs médicaux, gestion d'infrastructures critiques,
certains usages judiciaires. Ils supposent une documentation, une gestion des risques, une qualité
des données, une supervision humaine effective et une traçabilité.

Les usages à risque limité doivent respecter des obligations de transparence : une personne doit
savoir qu'elle interagit avec une machine, et les contenus générés doivent être signalés comme
tels.

Le reste relève du risque minimal et n'est pas spécifiquement encadré.

## Les débats

Ils sont réels et méritent d'être connus.

Certains estiment que les obligations pèseront surtout sur les petites structures, les grandes
disposant déjà de services de conformité.

D'autres jugent au contraire le texte insuffisant, notamment sur les exceptions accordées aux
usages de sécurité.

La question de l'extraterritorialité se pose également : le règlement s'applique aux systèmes mis
sur le marché européen, quel que soit le lieu de leur conception.

## L'effet au-delà de l'Europe

Un phénomène déjà observé pour la protection des données pourrait se reproduire : plutôt que de
maintenir deux versions d'un produit, des entreprises appliquent la norme la plus exigeante
partout.

La régulation européenne devient alors, de fait, un standard plus large.

## À retenir

- Entré en vigueur le 1er août 2024, appliqué par étapes.
- Il régule les usages selon leur risque, pas les technologies.
- Quatre niveaux, de l'interdiction au risque minimal.
- Sanctions jusqu'à 35 millions d'euros ou 7 % du chiffre d'affaires mondial.

[Emplacement image : les quatre niveaux de risque et les obligations associées, légende et texte
alternatif à fournir ultérieurement.]

---

---
type: article
title: Ce que l'IA change dans le travail
slug: ia-et-transformation-du-travail
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Les technologies transforment plus souvent les métiers qu'elles ne les suppriment. Ce sont
  les tâches qui disparaissent, rarement les professions entières.
tags: [travail, automatisation, competences, taches, emploi]
relatedArticles: [gpt-4o-ia-generative-multimodale, automatisation-industrielle-robotique-production]
sources:
  - title: "AI and the labour market"
    url: "https://www.oecd.org/employment/"
    publisher: "OCDE"
    date: "2025"
  - title: "Future of work"
    url: "https://www.ilo.org/"
    publisher: "Organisation internationale du travail"
    date: "2025"
quiz:
  - question: "Que suppriment généralement les technologies d'automatisation ?"
    options:
      - "Des métiers entiers"
      - "Des tâches à l'intérieur des métiers, qui se recomposent"
      - "Rien du tout"
    answer: 2
    explanation: >
      Un métier est un ensemble de tâches. Automatiser certaines d'entre elles change le
      contenu du travail plus souvent qu'elle ne fait disparaître la profession.
  - question: "Quel type de tâche résiste le mieux à l'automatisation ?"
    options:
      - "Les tâches répétitives et codifiables"
      - "Celles qui demandent contact humain, jugement en situation incertaine ou dextérité
        physique dans un environnement changeant"
      - "Les tâches de calcul"
    answer: 2
    explanation: >
      Paradoxalement, certaines tâches manuelles peu qualifiées sont plus difficiles à
      automatiser que des tâches intellectuelles très qualifiées.
lastVerified: 2026-09-23
status: published
---

## En bref

Deux discours s'affrontent : l'IA va supprimer des millions d'emplois, ou l'IA ne changera rien
d'important.

Les travaux disponibles décrivent quelque chose de plus nuancé, et de plus intéressant.

## Raisonner en tâches, pas en métiers

Un métier n'est pas une chose unique. C'est un ensemble de tâches.

Un comptable saisit des écritures, vérifie leur cohérence, conseille un dirigeant, explique une
situation à un client, répond à un contrôle.

Certaines de ces tâches s'automatisent bien. D'autres pas du tout.

L'histoire des technologies précédentes montre que c'est presque toujours ainsi : les tâches
disparaissent, les métiers se recomposent. Le distributeur automatique de billets n'a pas
supprimé les employés de banque, il a déplacé leur travail vers le conseil.

## Ce qui résiste

Trois familles de tâches résistent particulièrement.

Celles qui reposent sur le contact humain : soin, éducation, négociation, accompagnement.

Celles qui exigent un jugement en situation incertaine, avec des responsabilités et des enjeux
mal définis à l'avance.

Et, de manière contre-intuitive, beaucoup de tâches manuelles dans des environnements changeants.
Un plombier intervenant dans une cave encombrée mobilise une dextérité et une adaptation que les
robots ne maîtrisent pas. C'est un paradoxe connu : ce qui est facile pour un humain est souvent
difficile pour une machine, et réciproquement.

## Ce qui est nouveau cette fois

Les vagues d'automatisation précédentes touchaient surtout des tâches manuelles répétitives.

Celle-ci touche des tâches intellectuelles : rédiger, résumer, traduire, analyser, produire du
code.

Cela concerne donc des professions qui se croyaient à l'abri, et cela pose la question de la
formation initiale : si les tâches de débutant sont automatisées, comment forme-t-on les experts
de demain ?

## Ce que montrent les premières études

Les évaluations menées en situation réelle indiquent des gains de productivité réels, mais
inégaux.

Un résultat revient : l'écart entre les moins expérimentés et les plus expérimentés se réduit, les
premiers progressant davantage.

Et un autre : les gains sont les plus nets sur les tâches où le résultat est facilement
vérifiable, et les plus incertains là où l'erreur passe inaperçue.

## À retenir

- Les technologies suppriment des tâches plus souvent que des métiers.
- Contact humain, jugement en incertitude et dextérité en milieu changeant résistent le mieux.
- Cette vague touche des tâches intellectuelles, contrairement aux précédentes.
- Les gains observés sont les plus nets quand le résultat est facilement vérifiable.

[Emplacement image : décomposition d'un métier en tâches automatisables et non automatisables,
légende et texte alternatif à fournir ultérieurement.]

---

---
type: article
title: Le neurone artificiel
slug: neurone-artificiel
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une fonction mathématique inspirée, de loin, du neurone biologique.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: La rétropropagation du gradient
slug: retropropagation-gradient
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  L'algorithme qui permet à un réseau de neurones d'apprendre de ses erreurs.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les réseaux convolutifs et la vision
slug: reseaux-convolutifs-vision
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Comment une IA apprend à reconnaître des chats, des visages ou des tumeurs.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: AlexNet et le tournant de 2012
slug: alexnet-tournant-2012
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  La compétition ImageNet qui a lancé la vague de l'apprentissage profond.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Le surapprentissage
slug: surapprentissage
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Quand un modèle apprend par cœur au lieu de comprendre.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les pionniers de l'apprentissage profond
slug: pionniers-apprentissage-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Hinton, LeCun, Bengio : le prix Turing 2018 et des décennies de recherche à contre-courant.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: AlphaFold et la structure des protéines
slug: alphafold-structure-proteines
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Prédire la forme des protéines : une avancée récompensée par le prix Nobel de chimie 2024.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: AlphaGo contre Lee Sedol
slug: alphago-contre-lee-sedol
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  En 2016, une IA bat un champion de go, un jeu jugé hors de portée des machines.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: La récompense et la punition
slug: recompense-punition
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Le principe de l'apprentissage par essais et erreurs, emprunté à la psychologie.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Le renforcement à partir de retours humains
slug: renforcement-partir-retours-humains
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  La technique qui a rendu les assistants conversationnels plus utiles et plus polis.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les robots qui apprennent à marcher
slug: robots-apprennent-marcher
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Apprendre des mouvements en simulation avant de les transférer au monde réel.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les IA qui trichent
slug: ia-trichent
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Quand un système trouve une faille dans ses règles pour maximiser sa récompense.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Échecs et Deep Blue
slug: echecs-deep-blue
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  En 1997, un ordinateur bat Kasparov : une victoire fondée sur la force de calcul.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'étiquetage des données
slug: etiquetage-donnees
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Le travail humain, souvent invisible, qui permet aux IA d'apprendre.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Le coût énergétique de l'entraînement
slug: cout-energetique-entrainement
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Combien d'électricité et d'eau consomment les grands modèles.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les données synthétiques
slug: donnees-synthetiques
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Entraîner une IA avec des données produites par une autre IA : promesses et risques.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les droits d'auteur et l'entraînement des IA
slug: droits-auteur-entrainement-ia
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Les procès d'auteurs et de médias contre les entreprises d'IA.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les lois d'échelle
slug: lois-echelle
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Plus de données, plus de calcul, meilleurs résultats : jusqu'où ?
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Évaluer une IA
slug: evaluer-ia
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Les benchmarks, leurs limites et le problème de la contamination.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Le mécanisme d'attention
slug: mecanisme-attention
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment un modèle décide quels mots comptent pour comprendre une phrase.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les tokens
slug: tokens
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Les morceaux de mots que manipulent les modèles de langage.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: La fenêtre de contexte
slug: fenetre-contexte
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  La quantité de texte qu'un modèle peut prendre en compte d'un seul coup.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les embeddings
slug: embeddings
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Représenter le sens des mots par des nombres, pour mesurer leur proximité.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les modèles ouverts et fermés
slug: modeles-ouverts-fermes
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Poids publiés ou non : ce que cela change pour la recherche et la sécurité.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Du GPT de 2018 aux modèles actuels
slug: gpt-2018-modeles-actuels
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Les grandes étapes de l'évolution des modèles de langage.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Faire tourner une IA sur son ordinateur
slug: faire-tourner-ia-ordinateur
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Les modèles locaux fonctionnent sans internet : un moyen de garder l'accès au savoir hors ligne.
tags: [transformeurs, ia-locale, hors-ligne, essentiel-reconstruction]
relatedArticles: [reseaux-locaux-sans-internet]
sources:
  - title: "llama.cpp: A CPU-First Framework for Running LLaMA Models on Local Hardware"
    url: "https://www.sandgarden.com/learn/llama-cpp"
    publisher: "Sand Garden"
    date: "2025"
  - title: "Which Quantization Should I Use? A Unified Evaluation of llama.cpp Quantization"
    url: "https://arxiv.org/html/2601.14277v1"
    publisher: "arXiv"
    date: "2026"
quiz:
  - question: "Que permet la technique appelée quantification pour exécuter un modèle de
      langage sur un ordinateur ordinaire ?"
    options:
      - "Elle rend le modèle plus intelligent"
      - "Elle réduit la précision des calculs internes pour diminuer la mémoire nécessaire"
      - "Elle connecte automatiquement le modèle à internet"
    answer: 2
    explanation: >
      La quantification réduit la précision numérique utilisée pour stocker les paramètres du
      modèle, ce qui diminue fortement la mémoire nécessaire, au prix d'une légère perte de
      qualité généralement acceptable.
  - question: "Quel avantage principal offre l'exécution d'un modèle de langage directement sur
      son propre ordinateur, plutôt que via un service en ligne ?"
    options:
      - "Le modèle devient automatiquement plus performant que n'importe quel service en ligne"
      - "Le modèle reste utilisable même sans connexion internet"
      - "Cela élimine tout besoin de mémoire vive"
    answer: 2
    explanation: >
      Un modèle exécuté localement continue de fonctionner même sans accès à internet,
      contrairement à un service en ligne qui devient inutilisable dès que la connexion est
      coupée.
lastVerified: 2026-09-28
status: published
---

## En bref

Interroger une intelligence artificielle ne nécessite pas forcément une connexion à internet. Des
modèles de langage peuvent fonctionner directement sur un ordinateur personnel, sans dépendre
d'aucun service extérieur, à condition de respecter certaines contraintes techniques.

## Pourquoi un modèle de langage est-il si volumineux

Un modèle de langage contient des milliards de paramètres numériques ajustés durant son
entraînement. Stocker et faire fonctionner un tel volume de données nécessite normalement une
quantité de mémoire bien supérieure à celle d'un ordinateur personnel ordinaire.

## La quantification, réduire la précision pour gagner en légèreté

La quantification consiste à réduire la précision numérique utilisée pour stocker chaque
paramètre du modèle, ce qui diminue fortement l'espace mémoire nécessaire. Cette réduction
entraîne une légère perte de qualité dans les réponses, généralement peu perceptible pour un usage
courant.

## Des outils conçus pour le matériel ordinaire

Des logiciels spécialisés, conçus pour fonctionner efficacement sur un simple processeur
d'ordinateur plutôt que sur du matériel spécialisé coûteux, permettent d'exécuter des modèles
quantifiés même sur une machine sans carte graphique puissante.

## L'avantage de fonctionner sans connexion

Un modèle de langage exécuté localement continue de répondre aux questions même en l'absence
totale de connexion internet, ce qui en fait un outil précieux de conservation et d'accès au
savoir dans des situations où les réseaux de communication habituels seraient indisponibles.

## Les limites d'un modèle exécuté localement

Un modèle quantifié pour fonctionner sur du matériel modeste reste généralement moins performant
qu'un modèle de très grande taille exécuté sur une infrastructure spécialisée. Il reste néanmoins
capable de répondre utilement à de nombreuses questions générales, même hors ligne.

## À retenir

- Un modèle de langage contient des milliards de paramètres, ce qui nécessite normalement
  beaucoup de mémoire.
- La quantification réduit la précision des paramètres pour diminuer fortement la mémoire
  nécessaire.
- Des logiciels spécialisés permettent d'exécuter des modèles quantifiés sur un ordinateur
  ordinaire.
- Un modèle exécuté localement continue de fonctionner sans aucune connexion internet.
- Un modèle allégé reste moins performant qu'un grand modèle en ligne, mais utile hors ligne.

[Emplacement image : ordinateur portable exécutant un modèle de langage localement, sans
connexion réseau visible, légende et texte alternatif à fournir ultérieurement.]

---

---
type: article
title: La génération d'images
slug: generation-images
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Les modèles de diffusion : partir du bruit pour arriver à une image.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: La génération de voix et de musique
slug: generation-voix-musique
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Des voix clonées aux chansons générées : techniques et enjeux.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les deepfakes
slug: deepfakes
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Des vidéos truquées réalistes : risques de manipulation et moyens de détection.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les agents d'IA
slug: agents-ia
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Des IA qui enchaînent des actions pour accomplir une tâche, et les risques associés.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'IA et la création artistique
slug: ia-creation-artistique
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Qui est l'auteur d'une œuvre générée, et ce que l'IA change pour les artistes.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: La génération de vidéos
slug: generation-videos
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Les progrès rapides de la vidéo générée et leurs limites.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Le filigrane des contenus générés
slug: filigrane-contenus-generes
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Marquer les textes et images produits par IA : techniques et efficacité.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'IA ne sait pas ce qu'elle ne sait pas
slug: ia-sait-qu-sait
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Pourquoi un modèle affirme avec assurance des choses fausses.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Le raisonnement des modèles de langage
slug: raisonnement-modeles-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Ce qu'ils savent faire en logique et en mathématiques, et où ils échouent.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'injection de prompt
slug: injection-prompt
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Des instructions cachées dans un texte qui détournent le comportement d'une IA.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Vérifier une réponse d'IA
slug: verifier-reponse-ia
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Les bons réflexes pour ne pas se laisser tromper.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Le paradoxe de Moravec
slug: paradoxe-moravec
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Pourquoi ce qui est facile pour un enfant est difficile pour une machine, et inversement.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'alignement des IA
slug: alignement-ia
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Faire en sorte qu'une IA poursuive les objectifs voulus par ses concepteurs.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les IA sont-elles conscientes
slug: ia-elles-conscientes
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Ce que la science peut dire, et ne peut pas encore dire, sur cette question.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: La reconnaissance faciale et ses erreurs
slug: reconnaissance-faciale-erreurs
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des taux d'erreur différents selon la couleur de peau : études et conséquences.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les biais de genre dans les IA
slug: biais-genre-ia
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Traductions, recrutement, images générées : comment les stéréotypes se reproduisent.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'algorithme de recrutement d'Amazon
slug: algorithme-recrutement-amazon
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un outil abandonné parce qu'il pénalisait les candidatures féminines.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les algorithmes en justice
slug: algorithmes-justice
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Prédire la récidive : l'affaire COMPAS aux États-Unis.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Mesurer l'équité d'un algorithme
slug: mesurer-equite-algorithme
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Plusieurs définitions de l'équité, parfois incompatibles entre elles.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les biais culturels et linguistiques
slug: biais-culturels-linguistiques
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des IA entraînées surtout en anglais, qui comprennent moins bien les autres cultures.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les systèmes à haut risque
slug: systemes-haut-risque
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Ce que le règlement européen impose aux IA utilisées dans la santé, l'emploi ou la justice.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: La régulation de l'IA aux États-Unis et en Chine
slug: regulation-ia-etats-unis-chine
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Trois modèles de régulation qui s'opposent.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: La reconnaissance faciale dans l'espace public
slug: reconnaissance-faciale-espace-public
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Autorisée, encadrée ou interdite selon les pays.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: La responsabilité en cas d'erreur d'une IA
slug: responsabilite-cas-erreur-ia
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Qui est responsable quand une IA cause un dommage.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: La sécurité des IA les plus puissantes
slug: securite-ia-puissantes
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Évaluations, laboratoires de sûreté et engagements des entreprises.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'IA et les armes autonomes
slug: ia-armes-autonomes
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Le débat international sur les systèmes d'armes létales autonomes.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'IA dans l'éducation
slug: ia-education
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Tricherie, tutorat personnalisé : ce que l'IA change à l'école.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'IA dans la santé
slug: ia-sante
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Diagnostic, découverte de médicaments, gestion administrative.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les métiers les plus exposés
slug: metiers-exposes
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Ce que disent les études sur les emplois transformés ou menacés.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Bien utiliser un assistant conversationnel
slug: bien-utiliser-assistant-conversationnel
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Formuler une demande, vérifier, protéger ses données.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'IA et la productivité
slug: ia-productivite
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Ce que mesurent les études sur les gains réels dans les entreprises.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'IA dans la recherche scientifique
slug: ia-recherche-scientifique
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Des mathématiques à la biologie : les découvertes assistées par l'IA.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Les hivers de l'IA
slug: hivers-ia
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  De la conférence de Dartmouth en 1956 aux périodes de désillusion : une histoire faite de promesses et de reculs.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Le test de Turing
slug: test-turing
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une machine peut-elle se faire passer pour un humain, et ce test mesure-t-il vraiment l'intelligence ?
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'effet ELIZA
slug: effet-eliza
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Depuis le premier chatbot en 1966, nous prêtons facilement des sentiments aux machines qui parlent.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: L'IA et les élections
slug: ia-elections
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Désinformation, faux enregistrements, ciblage : les risques et les mesures prises par les États et les plateformes.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---

---
type: article
title: Le dilemme exploration-exploitation
slug: le-dilemme-exploration-exploitation
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Un compromis fondamental entre essayer du nouveau et exploiter ce qui fonctionne deja.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La fonction de recompense, definir ce qu'une IA doit apprendre
slug: la-fonction-de-recompense-definir-ce-qu-une-ia-doit-apprendre
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Pourquoi bien concevoir cette fonction est souvent plus difficile que l'algorithme lui-meme.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le piratage de recompense (reward hacking)
slug: le-piratage-de-recompense-reward-hacking
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Quand une IA trouve une faille pour maximiser sa recompense sans faire ce qu'on attendait vraiment.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement applique a la robotique
slug: l-apprentissage-par-renforcement-applique-a-la-robotique
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Comment des robots apprennent des taches physiques par essai et erreur.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les simulateurs utilises pour entrainer des IA par renforcement
slug: les-simulateurs-utilises-pour-entrainer-des-ia-par-renforcement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Pourquoi il est souvent plus rapide d'entrainer une IA dans un monde virtuel.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La difference entre apprentissage supervise et par renforcement
slug: la-difference-entre-apprentissage-supervise-et-par-renforcement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Deux approches fondamentalement differentes de l'apprentissage automatique.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: AlphaGo Zero, apprendre sans donnees humaines
slug: alphago-zero-apprendre-sans-donnees-humaines
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une version qui a surpasse la precedente en n'apprenant que contre elle-meme.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les jeux video comme terrain d'entrainement pour l'IA
slug: les-jeux-video-comme-terrain-d-entrainement-pour-l-ia
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Pourquoi les environnements virtuels sont si utiles pour tester des algorithmes.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement dans les vehicules autonomes
slug: l-apprentissage-par-renforcement-dans-les-vehicules-autonomes
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Un usage encore limite en raison des risques lies aux erreurs en conditions reelles.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le renforcement a partir de retours humains (RLHF)
slug: le-renforcement-a-partir-de-retours-humains-rlhf
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Comment des preferences humaines guident l'entrainement des assistants conversationnels modernes.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les IA qui trichent, un probleme d'alignement
slug: les-ia-qui-trichent-un-probleme-d-alignement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Comment un systeme peut trouver des raccourcis inattendus pour atteindre un objectif.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Deep Blue et la victoire aux echecs contre Kasparov
slug: deep-blue-et-la-victoire-aux-echecs-contre-kasparov
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Un moment symbolique, bien qu'obtenu par une methode differente de l'apprentissage moderne.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La difference entre Deep Blue et AlphaGo
slug: la-difference-entre-deep-blue-et-alphago
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Deux approches tres eloignees, separees par pres de vingt ans de progres en IA.
tags: [apprentissage-par-renforcement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement multi-agents
slug: l-apprentissage-par-renforcement-multi-agents
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Comment plusieurs IA peuvent apprendre a cooperer, ou a rivaliser, entre elles.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le probleme de la generalisation en apprentissage par renforcement
slug: le-probleme-de-la-generalisation-en-apprentissage-par-renforcement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Pourquoi une IA entrainee dans un contexte precis echoue souvent ailleurs.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les robots qui apprennent a marcher par essai et erreur
slug: les-robots-qui-apprennent-a-marcher-par-essai-et-erreur
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Comment des milliers de chutes simulees permettent d'affiner une demarche stable.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par curiosite artificielle
slug: l-apprentissage-par-curiosite-artificielle
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une technique qui pousse une IA a explorer meme sans recompense immediate.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des recompenses intermediaires dans l'apprentissage complexe
slug: le-role-des-recompenses-intermediaires-dans-l-apprentissage-complexe
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Comment decomposer un objectif lointain en etapes plus faciles a apprendre.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement dans la gestion de reseaux electriques
slug: l-apprentissage-par-renforcement-dans-la-gestion-de-reseaux-electriques
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une piste de recherche pour optimiser en temps reel un systeme complexe.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les limites actuelles de l'apprentissage par renforcement
slug: les-limites-actuelles-de-l-apprentissage-par-renforcement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Pourquoi cette methode reste, malgre ses succes, couteuse et parfois instable.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement dans les jeux de strategie complexes
slug: l-apprentissage-par-renforcement-dans-les-jeux-de-strategie-complexes
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Comment des IA ont progressivement surpasse les meilleurs joueurs humains sur plusieurs jeux.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le taux d'apprentissage et son reglage delicat
slug: le-taux-d-apprentissage-et-son-reglage-delicat
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Un parametre technique qui influence fortement la vitesse et la stabilite de l'apprentissage.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement inverse
slug: l-apprentissage-par-renforcement-inverse
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une approche qui deduit une fonction de recompense a partir de comportements observes.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les competitions d'IA en environnement de jeu simule
slug: les-competitions-d-ia-en-environnement-de-jeu-simule
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Comment des chercheurs comparent publiquement les performances de differents algorithmes.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement et la robotique de manipulation fine
slug: l-apprentissage-par-renforcement-et-la-robotique-de-manipulation-fine
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Un defi particulierement difficile qui implique une grande precision physique.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des simulateurs physiques realistes en apprentissage automatique
slug: le-role-des-simulateurs-physiques-realistes-en-apprentissage-automatique
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Pourquoi la qualite de la simulation influence directement la reussite du transfert au monde reel.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les recompenses eparses, un defi majeur de l'apprentissage
slug: les-recompenses-eparses-un-defi-majeur-de-l-apprentissage
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Comment une IA apprend quand elle ne recoit un signal positif que tres rarement.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement applique a l'optimisation industrielle
slug: l-apprentissage-par-renforcement-applique-a-l-optimisation-industrielle
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Des usages concrets qui commencent a emerger au-dela des jeux et de la recherche.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le cout de calcul de l'apprentissage par renforcement moderne
slug: le-cout-de-calcul-de-l-apprentissage-par-renforcement-moderne
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Pourquoi entrainer certains systemes exige des ressources informatiques considerables.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'avenir de l'apprentissage par renforcement dans la robotique generale
slug: l-avenir-de-l-apprentissage-par-renforcement-dans-la-robotique-generale
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Vers des robots capables d'apprendre de nouvelles taches de maniere plus autonome.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le perceptron, l'anceatre du reseau de neurones
slug: le-perceptron-l-anceatre-du-reseau-de-neurones
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un modele tres simple qui a pose les premieres bases theoriques de l'IA moderne.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les couches cachees d'un reseau de neurones
slug: les-couches-cachees-d-un-reseau-de-neurones
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Comment l'information se transforme progressivement a travers plusieurs etapes internes.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La fonction d'activation dans un neurone artificiel
slug: la-fonction-d-activation-dans-un-neurone-artificiel
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un element simple mais essentiel qui introduit de la non-linearite dans le calcul.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le gradient et son role dans l'apprentissage
slug: le-gradient-et-son-role-dans-l-apprentissage
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un concept mathematique qui guide l'ajustement progressif d'un reseau de neurones.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les reseaux de neurones recurrents
slug: les-reseaux-de-neurones-recurrents
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une architecture concue pour traiter des donnees qui se deroulent dans le temps.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les reseaux convolutifs et la reconnaissance d'images
slug: les-reseaux-convolutifs-et-la-reconnaissance-d-images
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une architecture specifique qui a transforme la vision par ordinateur.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: ImageNet, le jeu de donnees qui a change la vision par ordinateur
slug: imagenet-le-jeu-de-donnees-qui-a-change-la-vision-par-ordinateur
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une base de donnees massive qui a servi de reference a des annees de recherche.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le surapprentissage, quand une IA memorise au lieu d'apprendre
slug: le-surapprentissage-quand-une-ia-memorise-au-lieu-d-apprendre
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un piege frequent ou un modele reussit parfaitement sur ses exemples mais echoue ailleurs.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La regularisation, eviter le surapprentissage
slug: la-regularisation-eviter-le-surapprentissage
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Des techniques qui empechent un modele de trop coller a ses donnees d'entrainement.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les pionniers de l'apprentissage profond et leur parcours
slug: les-pionniers-de-l-apprentissage-profond-et-leur-parcours
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Des chercheurs qui ont persevere pendant des decennies avant la reconnaissance actuelle.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Geoffrey Hinton et la retropropagation du gradient
slug: geoffrey-hinton-et-la-retropropagation-du-gradient
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un chercheur central dans l'histoire de l'apprentissage profond moderne.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Yann LeCun et les reseaux convolutifs
slug: yann-lecun-et-les-reseaux-convolutifs
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un pionnier francais dont les travaux ont pose les bases de la vision par ordinateur moderne.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: AlphaFold, resoudre un probleme scientifique majeur
slug: alphafold-resoudre-un-probleme-scientifique-majeur
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Comment une IA a permis une avancee historique en biologie structurale.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les reseaux antagonistes generatifs (GAN)
slug: les-reseaux-antagonistes-generatifs-gan
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une architecture ou deux reseaux s'affrontent pour ameliorer mutuellement leurs performances.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les hivers de l'IA, des periodes de desillusion
slug: les-hivers-de-l-ia-des-periodes-de-desillusion
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Des phases historiques ou l'enthousiasme initial pour l'IA est retombe faute de resultats.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le premier hiver de l'IA dans les annees 1970
slug: le-premier-hiver-de-l-ia-dans-les-annees-1970
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Des promesses non tenues qui ont entraine une chute du financement de la recherche.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage profond applique au traitement du son
slug: l-apprentissage-profond-applique-au-traitement-du-son
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Comment ces techniques ont transforme la reconnaissance et la synthese vocale.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les couches de normalisation dans les reseaux profonds
slug: les-couches-de-normalisation-dans-les-reseaux-profonds
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Des techniques qui stabilisent l'entrainement de reseaux tres profonds.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le calcul sur cartes graphiques et l'essor de l'apprentissage profond
slug: le-calcul-sur-cartes-graphiques-et-l-essor-de-l-apprentissage-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Pourquoi une technologie concue pour les jeux video a rendu possible l'IA moderne.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les reseaux de neurones a memoire long terme et court terme (LSTM)
slug: les-reseaux-de-neurones-a-memoire-long-terme-et-court-terme-lstm
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une architecture concue specifiquement pour se souvenir d'informations sur la duree.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par transfert en apprentissage profond
slug: l-apprentissage-par-transfert-en-apprentissage-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Comment reutiliser un modele deja entraine accelere fortement de nouvelles applications.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La detection d'objets par apprentissage profond
slug: la-detection-d-objets-par-apprentissage-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Comment une IA localise et identifie simultanement plusieurs objets dans une image.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'interpretabilite des reseaux de neurones profonds
slug: l-interpretabilite-des-reseaux-de-neurones-profonds
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un defi majeur : comprendre pourquoi une IA prend une decision donnee.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les reseaux profonds appliques a la traduction automatique
slug: les-reseaux-profonds-appliques-a-la-traduction-automatique
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Comment cette technologie a considerablement ameliore la qualite des traductions.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La taille croissante des modeles d'apprentissage profond
slug: la-taille-croissante-des-modeles-d-apprentissage-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Pourquoi des modeles toujours plus grands ont continue d'ameliorer les performances.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage auto-supervise, apprendre sans etiquettes
slug: l-apprentissage-auto-supervise-apprendre-sans-etiquettes
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une approche qui reduit fortement le besoin de donnees annotees manuellement.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les reseaux de neurones a attention, avant les transformeurs
slug: les-reseaux-de-neurones-a-attention-avant-les-transformeurs
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Des travaux precurseurs qui ont prepare le terrain a une architecture plus recente.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage profond en imagerie medicale
slug: l-apprentissage-profond-en-imagerie-medicale
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Comment ces techniques aident desormais a detecter certaines pathologies sur des images.
tags: [apprentissage-profond]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le probleme de la disparition du gradient
slug: le-probleme-de-la-disparition-du-gradient
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un obstacle technique qui a longtemps limite la profondeur des reseaux entrainables.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'evolution du materiel dedie a l'apprentissage profond
slug: l-evolution-du-materiel-dedie-a-l-apprentissage-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Comment des puces specialisees ont accelere considerablement l'entrainement des modeles.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La qualite des donnees d'entrainement, un facteur decisif
slug: la-qualite-des-donnees-d-entrainement-un-facteur-decisif
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Pourquoi de mauvaises donnees produisent inevitablement de mauvais resultats.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'etiquetage manuel des donnees, un travail humain souvent invisible
slug: l-etiquetage-manuel-des-donnees-un-travail-humain-souvent-invisible
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un travail considerable, realise par des milliers de personnes, souvent peu remunerees.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le cout energetique de l'entrainement des grands modeles d'IA
slug: le-cout-energetique-de-l-entrainement-des-grands-modeles-d-ia
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une consommation electrique considerable, en forte croissance ces dernieres annees.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees synthetiques, une alternative aux donnees reelles
slug: les-donnees-synthetiques-une-alternative-aux-donnees-reelles
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Comment generer artificiellement des exemples pour entrainer un modele.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les droits d'auteur et l'entrainement des IA generatives
slug: les-droits-d-auteur-et-l-entrainement-des-ia-generatives
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un debat juridique majeur autour de l'usage d'oeuvres protegees pour entrainer des modeles.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les lois d'echelle en apprentissage automatique
slug: les-lois-d-echelle-en-apprentissage-automatique
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Des regularites observees qui relient taille du modele, donnees et performance.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Evaluer une IA, methodes et limites
slug: evaluer-une-ia-methodes-et-limites
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Comment on mesure objectivement la performance d'un modele, et pourquoi c'est difficile.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les jeux de benchmark en intelligence artificielle
slug: les-jeux-de-benchmark-en-intelligence-artificielle
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Des tests standardises qui permettent de comparer differents modeles entre eux.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le nettoyage des donnees avant l'entrainement
slug: le-nettoyage-des-donnees-avant-l-entrainement
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une etape souvent longue et peu visible mais determinante pour la qualite finale.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais presents dans les donnees d'entrainement
slug: les-biais-presents-dans-les-donnees-d-entrainement
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Comment un modele reproduit, sans le vouloir, les inegalites presentes dans ses exemples.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La contamination des donnees de test
slug: la-contamination-des-donnees-de-test
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un risque frequent qui fausse artificiellement l'evaluation d'un modele.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees multilingues et leur representation inegale
slug: les-donnees-multilingues-et-leur-representation-inegale
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Pourquoi certaines langues sont bien mieux servies que d'autres par l'IA actuelle.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le refroidissement des centres de donnees dedies a l'IA
slug: le-refroidissement-des-centres-de-donnees-dedies-a-l-ia
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un defi technique et environnemental lie a une consommation d'energie tres concentree.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La consommation d'eau des centres de donnees pour l'IA
slug: la-consommation-d-eau-des-centres-de-donnees-pour-l-ia
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un aspect environnemental moins connu mais bien reel de cette infrastructure.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les licences de donnees et leur complexite juridique
slug: les-licences-de-donnees-et-leur-complexite-juridique
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Comment savoir si une donnee peut legalement etre utilisee pour entrainer une IA.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'annotation collaborative de donnees a grande echelle
slug: l-annotation-collaborative-de-donnees-a-grande-echelle
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Comment des plateformes organisent le travail de milliers de personnes pour etiqueter des donnees.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees d'entrainement issues d'internet, un choix par defaut
slug: les-donnees-d-entrainement-issues-d-internet-un-choix-par-defaut
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Pourquoi la majorite des grands modeles s'appuient sur des textes collectes en ligne.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le probleme de la rarete des donnees dans certains domaines specialises
slug: le-probleme-de-la-rarete-des-donnees-dans-certains-domaines-specialises
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Pourquoi certains secteurs manquent cruellement de donnees pour entrainer une IA fiable.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees d'entrainement et la vie privee
slug: les-donnees-d-entrainement-et-la-vie-privee
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Comment on tente de limiter l'usage d'informations personnelles dans l'entrainement d'un modele.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La duree et le cout d'un entrainement de grand modele de langage
slug: la-duree-et-le-cout-d-un-entrainement-de-grand-modele-de-langage
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Des semaines de calcul intensif sur des milliers de processeurs specialises.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees de retour utilisateur pour ameliorer un modele deploye
slug: les-donnees-de-retour-utilisateur-pour-ameliorer-un-modele-deploye
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Comment un systeme continue de s'ameliorer apres sa mise en service.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'equilibrage des donnees d'entrainement entre categories
slug: l-equilibrage-des-donnees-d-entrainement-entre-categories
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Pourquoi un modele apprend mal les categories sous-representees dans ses exemples.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La validation croisee en apprentissage automatique
slug: la-validation-croisee-en-apprentissage-automatique
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une methode qui permet d'evaluer un modele de maniere plus fiable.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees d'entrainement dans le domaine medical
slug: les-donnees-d-entrainement-dans-le-domaine-medical
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Des exigences de qualite et de confidentialite particulierement elevees.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le partage ouvert de jeux de donnees pour la recherche en IA
slug: le-partage-ouvert-de-jeux-de-donnees-pour-la-recherche-en-ia
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Comment la mise en commun accelere le progres scientifique collectif.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees d'entrainement obsoletes et leur impact sur un modele
slug: les-donnees-d-entrainement-obsoletes-et-leur-impact-sur-un-modele
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Pourquoi un modele forme sur d'anciennes donnees peut mal repondre a des questions recentes.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La mise a jour des connaissances d'un modele deja entraine
slug: la-mise-a-jour-des-connaissances-d-un-modele-deja-entraine
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un defi technique reel, distinct du simple reentrainement complet.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le cout economique de la collecte de donnees a grande echelle
slug: le-cout-economique-de-la-collecte-de-donnees-a-grande-echelle
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un investissement souvent sous-estime dans le developpement d'une IA.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees synthetiques generees par une autre IA
slug: les-donnees-synthetiques-generees-par-une-autre-ia
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une methode qui souleve elle-meme des questions sur la qualite et les biais transmis.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'impact environnemental global de l'entrainement des IA
slug: l-impact-environnemental-global-de-l-entrainement-des-ia
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Ce que represente concretement, en emissions, le developpement des grands modeles actuels.
tags: [donnees-et-entrainement]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Comment un biais s'introduit dans un algorithme
slug: comment-un-biais-s-introduit-dans-un-algorithme
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Pourquoi une IA n'est jamais neutre, meme sans intention de discrimination.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais raciaux dans la reconnaissance faciale
slug: les-biais-raciaux-dans-la-reconnaissance-faciale
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des taux d'erreur significativement plus eleves observes pour certains groupes de population.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de credit automatises
slug: les-biais-dans-les-systemes-de-credit-automatises
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment un algorithme peut reproduire des discriminations financieres historiques.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de recrutement automatises
slug: les-biais-dans-les-systemes-de-recrutement-automatises
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des cas documentes ou un algorithme a discrimine sans intention explicite.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La mesure de l'equite algorithmique, plusieurs definitions possibles
slug: la-mesure-de-l-equite-algorithmique-plusieurs-definitions-possibles
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Pourquoi il n'existe pas une seule maniere de definir ce qu'est un algorithme juste.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais linguistiques dans les modeles de langage
slug: les-biais-linguistiques-dans-les-modeles-de-langage
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment certaines langues et dialectes sont moins bien traites que d'autres.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais culturels dans les IA generatives d'images
slug: les-biais-culturels-dans-les-ia-generatives-d-images
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment un modele peut reproduire des stereotypes culturels sans intention explicite.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les audits algorithmiques, verifier l'equite d'un systeme
slug: les-audits-algorithmiques-verifier-l-equite-d-un-systeme
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment on examine methodiquement un algorithme pour detecter d'eventuels biais.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de justice predictive
slug: les-biais-dans-les-systemes-de-justice-predictive
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des enjeux particulierement sensibles quand un algorithme influence une decision judiciaire.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La correction des biais algorithmiques, methodes existantes
slug: la-correction-des-biais-algorithmiques-methodes-existantes
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des techniques qui tentent, avec un succes variable, de reduire les discriminations observees.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais de genre dans la traduction automatique
slug: les-biais-de-genre-dans-la-traduction-automatique
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment un modele associe parfois certains metiers a un genre par defaut.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de reconnaissance vocale
slug: les-biais-dans-les-systemes-de-reconnaissance-vocale
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des performances qui varient selon l'accent ou le dialecte de l'utilisateur.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La transparence algorithmique comme outil de lutte contre les biais
slug: la-transparence-algorithmique-comme-outil-de-lutte-contre-les-biais
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Pourquoi comprendre le fonctionnement d'un systeme aide a en corriger les defauts.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de sante automatises
slug: les-biais-dans-les-systemes-de-sante-automatises
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des risques particuliers quand un algorithme influence un diagnostic medical.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la diversite des equipes dans la reduction des biais
slug: le-role-de-la-diversite-des-equipes-dans-la-reduction-des-biais
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment la composition des concepteurs peut influencer les angles morts d'un systeme.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais historiques et leur reproduction par l'IA
slug: les-biais-historiques-et-leur-reproduction-par-l-ia
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment un modele entraine sur le passe peut perpetuer des inegalites deja depassees.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les moteurs de recherche
slug: les-biais-dans-les-moteurs-de-recherche
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment le classement des resultats peut refleter, sans intention, certains stereotypes.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La regulation face aux biais algorithmiques
slug: la-regulation-face-aux-biais-algorithmiques
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Ce que certaines lois exigent desormais en matiere de verification et de correction.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les assistants vocaux et conversationnels
slug: les-biais-dans-les-assistants-vocaux-et-conversationnels
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment ces systemes peuvent reproduire des stereotypes de genre ou culturels.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de notation et de scoring social
slug: les-biais-dans-les-systemes-de-notation-et-de-scoring-social
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des enjeux ethiques majeurs quand un algorithme evalue le comportement d'une personne.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La sensibilite culturelle des modeles d'intelligence artificielle
slug: la-sensibilite-culturelle-des-modeles-d-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment un meme systeme peut mal interpreter des contextes culturels differents.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les algorithmes de tarification dynamique
slug: les-biais-dans-les-algorithmes-de-tarification-dynamique
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment un prix peut varier de maniere discriminatoire selon des criteres caches.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La responsabilite juridique en cas de biais algorithmique averve
slug: la-responsabilite-juridique-en-cas-de-biais-algorithmique-averve
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Qui doit repondre lorsqu'un systeme automatise a produit une discrimination.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans l'evaluation automatisee des candidatures scolaires
slug: les-biais-dans-l-evaluation-automatisee-des-candidatures-scolaires
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des enjeux specifiques quand un algorithme influence l'acces a l'education.
tags: [biais]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des associations civiles dans la denonciation des biais algorithmiques
slug: le-role-des-associations-civiles-dans-la-denonciation-des-biais-algorithmiques
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment des organisations independantes ont revele des cas concrets de discrimination.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans la publicite ciblee automatisee
slug: les-biais-dans-la-publicite-ciblee-automatisee
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment certains groupes recoivent, ou ne recoivent pas, certaines offres commerciales.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La formation des developpeurs a la detection des biais
slug: la-formation-des-developpeurs-a-la-detection-des-biais
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un enjeu de sensibilisation encore inegalement integre dans les cursus techniques.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais amplifies par des boucles de retroaction
slug: les-biais-amplifies-par-des-boucles-de-retroaction
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Comment un systeme peut renforcer progressivement une discrimination initiale minime.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de reconnaissance d'emotions
slug: les-biais-dans-les-systemes-de-reconnaissance-d-emotions
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Une technologie encore jeune, aux performances inegales selon les groupes.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les initiatives internationales pour standardiser la mesure des biais
slug: les-initiatives-internationales-pour-standardiser-la-mesure-des-biais
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des efforts encore recents pour harmoniser l'evaluation de l'equite algorithmique.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les differentes categories de risque dans le reglement europeen sur l'IA
slug: les-differentes-categories-de-risque-dans-le-reglement-europeen-sur-l-ia
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Comment ce texte classe les usages de l'IA selon leur niveau de danger potentiel.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les usages interdits par le reglement europeen sur l'IA
slug: les-usages-interdits-par-le-reglement-europeen-sur-l-ia
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Une liste restreinte de pratiques considerees comme inacceptables, quel que soit le contexte.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La regulation de l'IA au Royaume-Uni
slug: la-regulation-de-l-ia-au-royaume-uni
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Une approche differente de celle de l'Union europeenne, plus souple pour l'instant.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La strategie chinoise de regulation de l'intelligence artificielle
slug: la-strategie-chinoise-de-regulation-de-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un cadre qui combine controle etatique fort et soutien actif a l'innovation.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'absence de loi federale sur l'IA aux Etats-Unis
slug: l-absence-de-loi-federale-sur-l-ia-aux-etats-unis
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Comment ce pays regule pour l'instant surtout par secteur et par Etat.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La reconnaissance faciale et son encadrement legal variable
slug: la-reconnaissance-faciale-et-son-encadrement-legal-variable
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des regles tres differentes d'un pays a l'autre pour cette technologie sensible.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La reconnaissance faciale dans les aeroports
slug: la-reconnaissance-faciale-dans-les-aeroports
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un usage deja repandu, avec des questions de securite et de vie privee associees.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La responsabilite juridique en cas de dommage cause par une IA
slug: la-responsabilite-juridique-en-cas-de-dommage-cause-par-une-ia
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un flou juridique encore largement en construction dans de nombreux pays.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les organismes de certification pour les systemes d'IA a haut risque
slug: les-organismes-de-certification-pour-les-systemes-d-ia-a-haut-risque
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Comment on verifie qu'un systeme respecte les exigences reglementaires avant deploiement.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La regulation de l'IA dans le secteur medical
slug: la-regulation-de-l-ia-dans-le-secteur-medical
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des exigences specifiques quand un systeme influence directement un diagnostic ou un traitement.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les armes autonomes et le debat international sur leur interdiction
slug: les-armes-autonomes-et-le-debat-international-sur-leur-interdiction
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un enjeu majeur de securite qui divise la communaute internationale.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le controle humain des systemes d'armes autonomes
slug: le-controle-humain-des-systemes-d-armes-autonomes
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un principe defendu par de nombreux Etats mais difficile a garantir techniquement.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et la desinformation electorale
slug: l-ia-et-la-desinformation-electorale
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Comment des contenus generes artificiellement peuvent influencer un scrutin.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les deepfakes electoraux et leur reglementation
slug: les-deepfakes-electoraux-et-leur-reglementation
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des lois recentes qui tentent d'encadrer un risque nouveau pour la democratie.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La securite des modeles d'IA les plus puissants, enjeux specifiques
slug: la-securite-des-modeles-d-ia-les-plus-puissants-enjeux-specifiques
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Pourquoi certains chercheurs appellent a une vigilance particuliere sur les systemes les plus avances.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les instituts de securite de l'IA crees par les gouvernements
slug: les-instituts-de-securite-de-l-ia-crees-par-les-gouvernements
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des structures recentes dediees a l'evaluation des risques des systemes les plus avances.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le sommet mondial sur la securite de l'intelligence artificielle
slug: le-sommet-mondial-sur-la-securite-de-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Une initiative internationale recente pour coordonner la reflexion sur les risques.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La regulation de l'IA generative et le droit d'auteur
slug: la-regulation-de-l-ia-generative-et-le-droit-d-auteur
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un chantier juridique majeur encore loin d'etre stabilise dans la plupart des pays.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les obligations de transparence pour les systemes d'IA a haut risque
slug: les-obligations-de-transparence-pour-les-systemes-d-ia-a-haut-risque
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Ce que les entreprises doivent desormais documenter et publier sur leurs systemes.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La certification des systemes d'IA embarques dans des vehicules
slug: la-certification-des-systemes-d-ia-embarques-dans-des-vehicules
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un cadre reglementaire specifique lie a des enjeux de securite physique.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La regulation de l'IA dans le secteur financier
slug: la-regulation-de-l-ia-dans-le-secteur-financier
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des exigences particulieres pour des systemes qui influencent des decisions economiques sensibles.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des organisations internationales dans la gouvernance de l'IA
slug: le-role-des-organisations-internationales-dans-la-gouvernance-de-l-ia
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Comment des institutions mondiales tentent de coordonner une reponse commune.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les sanctions prevues en cas de non-conformite au reglement europeen sur l'IA
slug: les-sanctions-prevues-en-cas-de-non-conformite-au-reglement-europeen-sur-l-ia
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des amendes qui peuvent atteindre des montants tres significatifs pour les entreprises.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La regulation des chatbots utilises dans les services publics
slug: la-regulation-des-chatbots-utilises-dans-les-services-publics
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des exigences specifiques quand un systeme automatise interagit directement avec des citoyens.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les comites d'ethique de l'intelligence artificielle en entreprise
slug: les-comites-d-ethique-de-l-intelligence-artificielle-en-entreprise
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Comment certaines organisations tentent d'encadrer en interne le developpement de leurs systemes.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La regulation de l'IA dans l'education
slug: la-regulation-de-l-ia-dans-l-education
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des questions specifiques liees a l'usage de ces outils par des mineurs.
tags: [regulation]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les normes techniques internationales pour l'intelligence artificielle
slug: les-normes-techniques-internationales-pour-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Comment des standards communs facilitent la conformite reglementaire a l'echelle mondiale.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La regulation de l'IA et la protection des lanceurs d'alerte du secteur technologique
slug: la-regulation-de-l-ia-et-la-protection-des-lanceurs-d-alerte-du-secteur-technologique
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des protections specifiques pour ceux qui revelent des pratiques problematiques.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role du Parlement europeen dans l'adoption du reglement sur l'IA
slug: le-role-du-parlement-europeen-dans-l-adoption-du-reglement-sur-l-ia
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un processus legislatif long qui a mobilise de nombreux acteurs.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'evolution future attendue de la regulation mondiale de l'IA
slug: l-evolution-future-attendue-de-la-regulation-mondiale-de-l-ia
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des tendances qui se dessinent a mesure que la technologie progresse rapidement.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et l'automatisation des taches repetitives de bureau
slug: l-ia-et-l-automatisation-des-taches-repetitives-de-bureau
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment certains outils changent deja des metiers administratifs courants.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et le metier de traducteur
slug: l-ia-et-le-metier-de-traducteur
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment cette profession s'adapte a des outils de plus en plus performants.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA dans le service client
slug: l-ia-dans-le-service-client
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment les assistants automatises transforment ce secteur, avec des resultats variables.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et le metier de developpeur informatique
slug: l-ia-et-le-metier-de-developpeur-informatique
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment des outils d'assistance changent deja la pratique quotidienne du code.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA dans le journalisme
slug: l-ia-dans-le-journalisme
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Des usages varies, de la generation automatique d'articles simples a l'aide a l'enquete.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et la creation de contenu marketing
slug: l-ia-et-la-creation-de-contenu-marketing
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment ces outils accelerent, mais ne remplacent pas totalement, le travail creatif.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA dans l'agriculture de precision
slug: l-ia-dans-l-agriculture-de-precision
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment des systemes automatises optimisent l'usage de l'eau et des engrais.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et le diagnostic medical assiste
slug: l-ia-et-le-diagnostic-medical-assiste
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment ces outils aident, sans les remplacer, les professionnels de sante.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA dans la recherche de nouveaux medicaments
slug: l-ia-dans-la-recherche-de-nouveaux-medicaments
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment ces outils accelerent certaines etapes longues de la decouverte pharmaceutique.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et l'enseignement personnalise
slug: l-ia-et-l-enseignement-personnalise
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment ces outils adaptent, en theorie, le rythme d'apprentissage a chaque eleve.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les limites de l'IA dans l'education
slug: les-limites-de-l-ia-dans-l-education
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Ce que ces outils ne peuvent pas remplacer dans la relation pedagogique humaine.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et la productivite au travail, ce que montrent les etudes
slug: l-ia-et-la-productivite-au-travail-ce-que-montrent-les-etudes
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Des gains reels mais inegalement repartis selon les taches et les secteurs.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les metiers les plus exposes a l'automatisation par l'IA
slug: les-metiers-les-plus-exposes-a-l-automatisation-par-l-ia
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Un panorama nuance qui depasse souvent les idees recues sur les taches concernees.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La reconversion professionnelle face a l'automatisation par l'IA
slug: la-reconversion-professionnelle-face-a-l-automatisation-par-l-ia
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment accompagner les travailleurs dont le metier evolue rapidement.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Bien utiliser un assistant conversationnel, principes de base
slug: bien-utiliser-un-assistant-conversationnel-principes-de-base
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Des reflexes simples pour tirer un meilleur parti de ces outils tout en restant vigilant.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les limites de fiabilite d'un assistant conversationnel
slug: les-limites-de-fiabilite-d-un-assistant-conversationnel
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Pourquoi il faut toujours verifier les informations fournies par ce type d'outil.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA dans la recherche scientifique fondamentale
slug: l-ia-dans-la-recherche-scientifique-fondamentale
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment ces outils accelerent certaines etapes de l'analyse de donnees complexes.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et la creation musicale assistee
slug: l-ia-et-la-creation-musicale-assistee
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment des outils generatifs s'integrent progressivement dans certains processus creatifs.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA dans les centres d'appels
slug: l-ia-dans-les-centres-d-appels
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment l'automatisation change la nature de ce secteur employant beaucoup de personnes.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et le metier d'avocat
slug: l-ia-et-le-metier-d-avocat
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment ces outils assistent la recherche juridique sans remplacer le jugement professionnel.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA dans la gestion des ressources humaines
slug: l-ia-dans-la-gestion-des-ressources-humaines
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Des usages varies, du tri de candidatures a l'analyse des besoins de formation.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et le travail creatif artistique
slug: l-ia-et-le-travail-creatif-artistique
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Un debat vif sur la place de ces outils dans des professions historiquement humaines.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA dans la logistique et la gestion des stocks
slug: l-ia-dans-la-logistique-et-la-gestion-des-stocks
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment ces outils optimisent des chaines d'approvisionnement complexes.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et le metier d'enseignant
slug: l-ia-et-le-metier-d-enseignant
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment ces outils peuvent assister, sans remplacer, la relation pedagogique.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA dans la detection de fraudes financieres
slug: l-ia-dans-la-detection-de-fraudes-financieres
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment ces systemes identifient des anomalies parmi des millions de transactions.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et l'adaptation des competences professionnelles
slug: l-ia-et-l-adaptation-des-competences-professionnelles
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Ce que les employeurs attendent de plus en plus des travailleurs face a cette technologie.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA dans le secteur de l'assurance
slug: l-ia-dans-le-secteur-de-l-assurance
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment ces outils influencent l'evaluation des risques et la tarification.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et la productivite des petites entreprises
slug: l-ia-et-la-productivite-des-petites-entreprises
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Comment des outils accessibles changent aussi le quotidien des structures modestes.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA dans la gestion de projet
slug: l-ia-dans-la-gestion-de-projet
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Des usages varies pour planifier, suivre et anticiper les risques d'un projet.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'avenir du travail face a l'intelligence artificielle generative
slug: l-avenir-du-travail-face-a-l-intelligence-artificielle-generative
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Des scenarios contrastes proposes par differents chercheurs et economistes.
tags: [travail-et-usages]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le fonctionnement general de la generation d'images par IA
slug: le-fonctionnement-general-de-la-generation-d-images-par-ia
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment un modele transforme une simple description textuelle en image.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les modeles de diffusion en generation d'images
slug: les-modeles-de-diffusion-en-generation-d-images
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une technique qui construit progressivement une image a partir de bruit aleatoire.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La generation de voix synthetique
slug: la-generation-de-voix-synthetique
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment un modele peut reproduire une voix humaine de maniere de plus en plus realiste.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le clonage vocal et ses risques d'abus
slug: le-clonage-vocal-et-ses-risques-d-abus
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une technologie puissante qui souleve des questions ethiques et de securite reelles.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La generation de musique par intelligence artificielle
slug: la-generation-de-musique-par-intelligence-artificielle
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment ces outils composent des morceaux originaux a partir d'une simple description.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les deepfakes video, principe technique
slug: les-deepfakes-video-principe-technique
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment on genere une video convaincante mais entierement fabriquee.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La detection des deepfakes, methodes actuelles
slug: la-detection-des-deepfakes-methodes-actuelles
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Des techniques qui tentent de reperer des indices subtils de manipulation.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les agents d'IA autonomes, au-dela du simple chat
slug: les-agents-d-ia-autonomes-au-dela-du-simple-chat
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Des systemes concus pour accomplir des taches complexes en plusieurs etapes.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA et la creation artistique, un debat sur l'originalite
slug: l-ia-et-la-creation-artistique-un-debat-sur-l-originalite
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une question philosophique et juridique encore largement ouverte.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La generation de video par intelligence artificielle
slug: la-generation-de-video-par-intelligence-artificielle
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une technologie recente qui produit des sequences animees a partir d'un simple texte.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le filigrane numerique des contenus generes par IA
slug: le-filigrane-numerique-des-contenus-generes-par-ia
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une technique qui vise a signaler l'origine artificielle d'un contenu.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les standards d'authentification des contenus numeriques
slug: les-standards-d-authentification-des-contenus-numeriques
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Des initiatives recentes pour garantir la provenance d'une image ou d'une video.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA generative dans le design de produits
slug: l-ia-generative-dans-le-design-de-produits
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment ces outils proposent rapidement de multiples variantes creatives.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La generation de code par intelligence artificielle
slug: la-generation-de-code-par-intelligence-artificielle
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment ces outils assistent, de plus en plus, l'ecriture de programmes informatiques.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les modeles de generation d'images entraines sur des oeuvres protegees
slug: les-modeles-de-generation-d-images-entraines-sur-des-oeuvres-protegees
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Un debat juridique majeur autour du consentement des createurs originaux.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA generative dans le jeu video
slug: l-ia-generative-dans-le-jeu-video
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment ces outils commencent a etre utilises pour creer des mondes et des dialogues.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les limites actuelles de la generation d'images par IA
slug: les-limites-actuelles-de-la-generation-d-images-par-ia
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Des erreurs frequentes qui trahissent encore souvent l'origine artificielle d'une image.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA generative et la personnalisation de contenu
slug: l-ia-generative-et-la-personnalisation-de-contenu
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment ces outils adaptent desormais un meme contenu a differents publics.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les modeles multimodaux, combiner texte, image et son
slug: les-modeles-multimodaux-combiner-texte-image-et-son
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une nouvelle generation d'IA capable de traiter simultanement plusieurs types de donnees.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA generative dans la publicite personnalisee
slug: l-ia-generative-dans-la-publicite-personnalisee
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment ces outils produisent rapidement de nombreuses variantes d'un meme message.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La qualite variable des voix generees par IA selon les langues
slug: la-qualite-variable-des-voix-generees-par-ia-selon-les-langues
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Pourquoi certaines langues restent moins bien servies par ces technologies recentes.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA generative et la production de faux temoignages
slug: l-ia-generative-et-la-production-de-faux-temoignages
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Un risque de manipulation qui exige une vigilance particuliere du public.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les outils de generation d'images accessibles au grand public
slug: les-outils-de-generation-d-images-accessibles-au-grand-public
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment cette technologie s'est rapidement democratisee ces dernieres annees.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA generative dans la mode et le stylisme
slug: l-ia-generative-dans-la-mode-et-le-stylisme
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment ces outils assistent la creation de nouveaux motifs et designs.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La responsabilite legale en cas d'usage malveillant d'un contenu genere
slug: la-responsabilite-legale-en-cas-d-usage-malveillant-d-un-contenu-genere
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une question juridique complexe qui implique plusieurs acteurs potentiels.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les concours artistiques et l'usage de l'IA generative
slug: les-concours-artistiques-et-l-usage-de-l-ia-generative
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Un debat recent sur la place de ces outils dans les competitions creatives.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA generative et la traduction de contenus multimedias
slug: l-ia-generative-et-la-traduction-de-contenus-multimedias
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment ces outils adaptent desormais texte, voix et sous-titres simultanement.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les risques de desinformation lies a l'IA generative
slug: les-risques-de-desinformation-lies-a-l-ia-generative
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment cette technologie facilite la production de contenus trompeurs a grande echelle.
tags: [ia-generative]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'IA generative dans l'architecture et la visualisation
slug: l-ia-generative-dans-l-architecture-et-la-visualisation
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment ces outils aident a imaginer rapidement plusieurs concepts de batiments.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'evolution rapide de la qualite des contenus generes par IA
slug: l-evolution-rapide-de-la-qualite-des-contenus-generes-par-ia
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Comment cette technologie s'est amelioree de maniere spectaculaire en quelques annees.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les hallucinations des modeles de langage, definition precise
slug: les-hallucinations-des-modeles-de-langage-definition-precise
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Pourquoi une IA peut affirmer un fait completement invente avec une grande confiance.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Pourquoi une IA a du mal a compter et a calculer
slug: pourquoi-une-ia-a-du-mal-a-compter-et-a-calculer
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une limite surprenante, liee a la maniere dont ces systemes traitent l'information.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les erreurs de raisonnement logique des IA generatives
slug: les-erreurs-de-raisonnement-logique-des-ia-generatives
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Des faiblesses qui persistent malgre des performances impressionnantes par ailleurs.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La difference entre memorisation et comprehension chez une IA
slug: la-difference-entre-memorisation-et-comprehension-chez-une-ia
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une question centrale pour evaluer ce qu'un modele de langage sait reellement.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'injection de prompt, une vulnerabilite specifique
slug: l-injection-de-prompt-une-vulnerabilite-specifique
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Comment un texte malveillant peut detourner le comportement prevu d'une IA.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le jailbreak des modeles de langage
slug: le-jailbreak-des-modeles-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Des techniques qui tentent de contourner les limites imposees a un systeme d'IA.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Verifier une reponse d'IA, methode pratique
slug: verifier-une-reponse-d-ia-methode-pratique
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Des reflexes simples pour distinguer une information fiable d'une invention plausible.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le paradoxe de Moravec, ce qui est facile pour l'humain reste dur pour la machine
slug: le-paradoxe-de-moravec-ce-qui-est-facile-pour-l-humain-reste-dur-pour-la-machine
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Pourquoi certaines taches simples pour nous restent tres difficiles pour une IA.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'alignement des IA, faire correspondre objectifs et intentions humaines
slug: l-alignement-des-ia-faire-correspondre-objectifs-et-intentions-humaines
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Un defi central de la recherche actuelle sur l'intelligence artificielle.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les IA sont-elles conscientes, un debat philosophique et scientifique
slug: les-ia-sont-elles-conscientes-un-debat-philosophique-et-scientifique
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une question qui divise les chercheurs, sans reponse scientifique tranchee.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le test de Turing, une mesure historique de l'intelligence artificielle
slug: le-test-de-turing-une-mesure-historique-de-l-intelligence-artificielle
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Un critere ancien qui reste discute quant a sa pertinence aujourd'hui.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'effet ELIZA, se laisser tromper par un simple programme
slug: l-effet-eliza-se-laisser-tromper-par-un-simple-programme
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une decouverte ancienne qui explique pourquoi on attribue facilement de l'intelligence a un texte.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais de confirmation dans l'usage des assistants conversationnels
slug: les-biais-de-confirmation-dans-l-usage-des-assistants-conversationnels
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Comment on a tendance a croire une reponse qui confirme deja notre opinion.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les limites de la memoire d'un modele de langage en conversation
slug: les-limites-de-la-memoire-d-un-modele-de-langage-en-conversation
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Pourquoi une IA peut oublier des elements mentionnes plus tot dans un meme echange.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La difference entre generer du texte et comprendre le monde
slug: la-difference-entre-generer-du-texte-et-comprendre-le-monde
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Un debat central sur la nature reelle de ce que font ces systemes.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les erreurs factuelles frequentes des assistants conversationnels
slug: les-erreurs-factuelles-frequentes-des-assistants-conversationnels
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Des categories de fautes recurrentes qu'il est utile de connaitre pour rester vigilant.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: L'incapacite d'une IA a savoir ce qu'elle ignore
slug: l-incapacite-d-une-ia-a-savoir-ce-qu-elle-ignore
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Pourquoi ces systemes repondent souvent avec assurance meme lorsqu'ils se trompent.
tags: [limites-et-erreurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les tests de raisonnement utilises pour evaluer les IA
slug: les-tests-de-raisonnement-utilises-pour-evaluer-les-ia
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Des exercices concus specifiquement pour reveler les limites logiques des modeles actuels.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La sensibilite des IA generatives a la formulation d'une question
slug: la-sensibilite-des-ia-generatives-a-la-formulation-d-une-question
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Pourquoi reformuler legerement une demande peut donner une reponse tres differente.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les limites culturelles et contextuelles des modeles de langage
slug: les-limites-culturelles-et-contextuelles-des-modeles-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Comment un meme systeme peut mal interpreter un contexte culturel eloigne de ses donnees.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le probleme de la coherence sur de longs textes generes par IA
slug: le-probleme-de-la-coherence-sur-de-longs-textes-generes-par-ia
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Pourquoi une IA peut se contredire elle-meme au fil d'un texte long.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les erreurs mathematiques typiques des modeles de langage generalistes
slug: les-erreurs-mathematiques-typiques-des-modeles-de-langage-generalistes
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Pourquoi ces systemes restent, sur ce point precis, moins fiables qu'une calculatrice simple.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'usage critique des sources citees par une IA generative
slug: l-usage-critique-des-sources-citees-par-une-ia-generative
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Pourquoi il faut toujours verifier qu'une source citee existe reellement.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les limites de l'IA dans la comprehension de l'humour et de l'ironie
slug: les-limites-de-l-ia-dans-la-comprehension-de-l-humour-et-de-l-ironie
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Des nuances de langage qui restent difficiles a saisir pour ces systemes.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La confiance excessive accordee aux reponses d'une IA
slug: la-confiance-excessive-accordee-aux-reponses-d-une-ia
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Un risque psychologique reel, amplifie par le ton assure de ces systemes.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les erreurs de traduction subtiles generees par IA
slug: les-erreurs-de-traduction-subtiles-generees-par-ia
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Des nuances de sens parfois perdues malgre une fluidite apparente du texte traduit.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le probleme du raisonnement en plusieurs etapes pour les IA
slug: le-probleme-du-raisonnement-en-plusieurs-etapes-pour-les-ia
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Pourquoi enchainer plusieurs deductions logiques reste un exercice difficile pour ces systemes.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les techniques pour ameliorer la fiabilite des reponses d'une IA
slug: les-techniques-pour-ameliorer-la-fiabilite-des-reponses-d-une-ia
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Des methodes qui reduisent, sans les eliminer, les erreurs frequentes de ces systemes.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La difference entre un modele de langage et une base de connaissances
slug: la-difference-entre-un-modele-de-langage-et-une-base-de-connaissances
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une confusion frequente qui explique certaines attentes irrealistes envers ces outils.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: L'evolution des taux d'erreur des modeles de langage au fil des versions
slug: l-evolution-des-taux-d-erreur-des-modeles-de-langage-au-fil-des-versions
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Des progres reels mais qui n'eliminent pas totalement ce type de limitation.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'article de recherche qui a introduit les transformeurs
slug: l-article-de-recherche-qui-a-introduit-les-transformeurs
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une publication scientifique qui a change durablement le cours de la recherche en IA.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La difference entre transformeurs et reseaux recurrents
slug: la-difference-entre-transformeurs-et-reseaux-recurrents
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Pourquoi cette nouvelle architecture a rapidement surpasse les approches precedentes.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le mecanisme d'attention, principe intuitif
slug: le-mecanisme-d-attention-principe-intuitif
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment un modele apprend a se concentrer sur les elements les plus pertinents d'un texte.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'attention multi-tetes dans un transformeur
slug: l-attention-multi-tetes-dans-un-transformeur
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment plusieurs mecanismes d'attention parallels enrichissent la comprehension d'un texte.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les tokens, l'unite de base du traitement du langage par une IA
slug: les-tokens-l-unite-de-base-du-traitement-du-langage-par-une-ia
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment un texte est decoupe en fragments avant d'etre traite par un modele.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le vocabulaire des tokens et sa construction
slug: le-vocabulaire-des-tokens-et-sa-construction
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment on choisit precisement quels fragments de texte un modele va reconnaitre.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La fenetre de contexte, ce qu'une IA peut lire en une fois
slug: la-fenetre-de-contexte-ce-qu-une-ia-peut-lire-en-une-fois
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une limite technique qui determine la quantite de texte traitable simultanement.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les embeddings, representer le sens d'un mot par des nombres
slug: les-embeddings-representer-le-sens-d-un-mot-par-des-nombres
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une technique fondamentale qui transforme le langage en une forme exploitable par une machine.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La distance semantique entre les embeddings
slug: la-distance-semantique-entre-les-embeddings
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment on mesure, mathematiquement, la proximite de sens entre deux mots.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les modeles ouverts contre les modeles fermes
slug: les-modeles-ouverts-contre-les-modeles-fermes
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une distinction majeure qui influence la transparence et l'accessibilite de ces technologies.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les avantages et risques des modeles d'IA ouverts
slug: les-avantages-et-risques-des-modeles-d-ia-ouverts
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Un debat qui oppose transparence scientifique et risques de mesusage.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'histoire du GPT, de la premiere version aux modeles actuels
slug: l-histoire-du-gpt-de-la-premiere-version-aux-modeles-actuels
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une progression rapide qui illustre l'acceleration recente de ce domaine.
tags: [transformeurs]
priority: 2
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Faire fonctionner un modele de langage sur son propre ordinateur
slug: faire-fonctionner-un-modele-de-langage-sur-son-propre-ordinateur
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Des options recentes qui permettent d'utiliser l'IA sans dependre d'un service en ligne.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: La quantification des modeles pour reduire leur taille
slug: la-quantification-des-modeles-pour-reduire-leur-taille
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une technique qui compresse un modele pour le rendre utilisable sur du materiel modeste.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le fine-tuning, adapter un modele existant a une tache specifique
slug: le-fine-tuning-adapter-un-modele-existant-a-une-tache-specifique
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment on specialise un modele general sans devoir l'entrainer depuis le debut.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les architectures alternatives aux transformeurs
slug: les-architectures-alternatives-aux-transformeurs
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Des pistes de recherche recentes qui tentent de depasser certaines limites actuelles.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le cout de calcul de l'attention dans les transformeurs
slug: le-cout-de-calcul-de-l-attention-dans-les-transformeurs
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Pourquoi traiter de tres longs textes reste, techniquement, particulierement couteux.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les modeles de langage specialises par domaine
slug: les-modeles-de-langage-specialises-par-domaine
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment certains modeles sont concus specifiquement pour un secteur precis.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'entrainement prealable et l'ajustement fin, deux etapes distinctes
slug: l-entrainement-prealable-et-l-ajustement-fin-deux-etapes-distinctes
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment un modele acquiert d'abord des connaissances generales puis une specialisation.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La taille des modeles de langage, un nombre de parametres
slug: la-taille-des-modeles-de-langage-un-nombre-de-parametres
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment ce chiffre, souvent mis en avant, ne resume pas a lui seul la qualite d'un modele.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les transformeurs appliques a la vision par ordinateur
slug: les-transformeurs-appliques-a-la-vision-par-ordinateur
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment cette architecture, nee pour le texte, s'est etendue a l'analyse d'images.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des donnees d'entrainement dans la performance d'un transformeur
slug: le-role-des-donnees-d-entrainement-dans-la-performance-d-un-transformeur
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Pourquoi la quantite et la qualite des exemples influencent directement le resultat final.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les limites de la fenetre de contexte et les techniques pour l'etendre
slug: les-limites-de-la-fenetre-de-contexte-et-les-techniques-pour-l-etendre
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Des recherches actives pour permettre a un modele de traiter des documents plus longs.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La comparaison des principaux modeles de langage actuels
slug: la-comparaison-des-principaux-modeles-de-langage-actuels
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Ce qui distingue reellement les differentes offres disponibles sur le marche.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'impact des transformeurs au-dela du traitement du langage
slug: l-impact-des-transformeurs-au-dela-du-traitement-du-langage
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment cette architecture a influence d'autres domaines de l'intelligence artificielle.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les licences des modeles ouverts et leurs restrictions reelles
slug: les-licences-des-modeles-ouverts-et-leurs-restrictions-reelles
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Pourquoi le terme ouvert ne signifie pas toujours une liberte totale d'usage.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des chercheurs independants dans le developpement des transformeurs
slug: le-role-des-chercheurs-independants-dans-le-developpement-des-transformeurs
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment des contributions hors des grandes entreprises ont aussi fait avancer ce domaine.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: La consommation memoire d'un modele de langage en fonctionnement
slug: la-consommation-memoire-d-un-modele-de-langage-en-fonctionnement
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Pourquoi certains modeles necessitent un materiel informatique tres puissant.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'evolution attendue de l'architecture des modeles de langage
slug: l-evolution-attendue-de-l-architecture-des-modeles-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Des pistes de recherche qui pourraient succeder aux transformeurs actuels.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des benchmarks publics dans la course aux modeles de langage
slug: le-role-des-benchmarks-publics-dans-la-course-aux-modeles-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Comment des tests standardises influencent la reputation et le developpement de ces systemes.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le principe general de l'apprentissage par renforcement
slug: le-principe-general-de-l-apprentissage-par-renforcement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une methode ou un agent apprend a agir en recevant des recompenses ou des penalites selon ses choix.
tags: [apprentissage-par-renforcement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la recompense dans l'orientation du comportement d'un agent artificiel
slug: le-role-de-la-recompense-dans-l-orientation-du-comportement-d-un-agent-artificiel
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Un signal qui guide progressivement l'agent vers les actions les plus avantageuses.
tags: [apprentissage-par-renforcement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Comment une IA a-t-elle appris seule à jouer à des jeux vidéo Atari ?
slug: comment-une-ia-a-t-elle-appris-seule-a-jouer-a-des-jeux-video-atari
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  En 2013, des chercheurs de DeepMind ont présenté une IA qui apprend à jouer en regardant
  seulement les pixels de l'écran et le score. En 2015, des versions de cette IA ont été
  entraînées sur 50 jeux de la console Atari 2600. Les jeux vidéo sont un bon terrain
  d'entraînement, car le score sert de récompense et l'on peut rejouer sans fin.
tags: [apprentissage-par-renforcement]
sources:
  - title: "Deep reinforcement learning"
    url: "https://deepmind.google/discover/blog/deep-reinforcement-learning/"
    publisher: "Google DeepMind"
  - title: "Playing Atari with Deep Reinforcement Learning"
    url: "https://arxiv.org/abs/1312.5602"
    publisher: "arXiv"
  - title: "OpenAI Five"
    url: "https://en.wikipedia.org/wiki/OpenAI_Five"
    publisher: "Wikipedia"
quiz:
  - question: "Que voyait l'IA de DeepMind pour apprendre à jouer ?"
    options:
      - "Les règles écrites du jeu"
      - "Les pixels de l'écran et le score"
      - "Des vidéos de champions"
    answer: 2
    explanation: >
      L'IA recevait seulement l'image de l'écran, pixel par pixel, et le score, qui lui
      servait de récompense.
  - question: "Sur combien de jeux Atari la version de 2015 a-t-elle été testée ?"
    options:
      - "5"
      - "500"
      - "50"
    answer: 3
    explanation: >
      DeepMind a entraîné des agents sur 50 jeux Atari différents. Ils ont atteint le
      niveau humain dans presque la moitié d'entre eux.
  - question: "À quoi sert la « relecture d'expériences » ?"
    options:
      - "À réutiliser au hasard des moments déjà vécus pour apprendre"
      - "À enregistrer les parties pour les montrer aux joueurs"
      - "À accélérer la console"
    answer: 1
    explanation: >
      L'IA garde ses expériences en mémoire et en tire des exemples au hasard. Cela rend
      l'apprentissage plus stable.
  - question: "Combien d'années de jeu OpenAI Five avait-il accumulées en 2018 en jouant contre lui-même ?"
    options:
      - "Environ 18 ans"
      - "Environ 180 ans"
      - "Environ 1 800 ans"
    answer: 2
    explanation: >
      En 2018, OpenAI Five avait joué l'équivalent d'environ 180 ans de parties de Dota 2,
      sur de très nombreux ordinateurs.
lastVerified: 2026-10-09
status: published
---

## En bref

En 2013, des chercheurs de DeepMind ont présenté une IA qui apprend à jouer en regardant seulement les pixels de l'écran et le score. En 2015, des versions de cette IA ont été entraînées sur 50 jeux de la console Atari 2600. Les jeux vidéo sont un bon terrain d'entraînement, car le score sert de récompense et l'on peut rejouer sans fin.

## Pourquoi des jeux vidéo ?

Pour apprendre par renforcement, une IA a besoin de trois choses : un monde où agir, des actions possibles et une récompense. Les jeux vidéo réunissent tout cela. Le score indique clairement si l'IA progresse. On peut rejouer des milliers de parties sans rien casser, et beaucoup plus vite qu'un humain.

## Apprendre avec seulement l'écran

L'Atari 2600 est une console de jeux sortie en 1977. Ses jeux sont simples, mais très variés. En décembre 2013, des chercheurs de l'entreprise DeepMind ont publié un article qui a marqué l'histoire de l'IA.

Leur programme ne connaissait pas les règles. Il voyait seulement les pixels de l'écran et le score. Il pouvait appuyer sur les boutons de la manette. Au début, il jouait n'importe comment. Peu à peu, il a appris quelles actions faisaient monter le score.

Le programme utilise un réseau de neurones convolutif, le type de réseau qui sert à analyser des images. Ce réseau estime, pour chaque action possible, combien de récompenses elle va rapporter plus tard. Le programme a été appelé DQN.

## Rejouer ses souvenirs

DQN a une astuce : la relecture d'expériences. Il garde en mémoire tout ce qu'il a vécu. Pour apprendre, il pioche au hasard dans ces souvenirs, au lieu d'utiliser seulement les dernières secondes de jeu. Les exemples sont plus variés, et l'apprentissage devient plus stable.

En 2015, DeepMind a présenté les résultats dans la revue Nature. Des agents DQN ont été entraînés sur 50 jeux Atari différents. Ils ont atteint le niveau humain dans presque la moitié de ces jeux, bien plus que toutes les méthodes précédentes.

## Des jeux de plus en plus difficiles

Après les jeux Atari, d'autres IA se sont attaquées à des jeux plus complexes. OpenAI Five joue à Dota 2, un jeu où deux équipes de cinq s'affrontent. En 2018, il avait déjà joué l'équivalent d'environ 180 ans de parties contre lui-même. En avril 2019, il a battu l'équipe OG, championne du monde de 2018.

## À retenir

- Les jeux vidéo sont un bon terrain d'entraînement : le score sert de récompense et l'on peut rejouer sans fin.
- En 2013, le programme DQN de DeepMind apprenait à jouer en voyant seulement les pixels de l'écran et le score.
- DQN utilise un réseau de neurones convolutif et une relecture au hasard de ses expériences passées.
- Testé sur 50 jeux Atari, il a atteint le niveau humain dans presque la moitié d'entre eux.
- En avril 2019, OpenAI Five a battu les champions du monde du jeu Dota 2.

---
type: article
title: Pourquoi une IA doit-elle parfois tenter des choix au hasard pour mieux apprendre ?
slug: pourquoi-une-ia-doit-elle-parfois-tenter-des-choix-au-hasard-pour-mieux-apprendre
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une IA qui apprend par essais et récompenses doit choisir entre deux attitudes. Exploiter,
  c'est refaire ce qui a déjà bien marché. Explorer, c'est essayer autre chose, au risque de
  perdre, pour peut-être trouver mieux.
tags: [apprentissage-par-renforcement]
sources:
  - title: "Exploration–exploitation dilemma"
    url: "https://en.wikipedia.org/wiki/Exploration%E2%80%93exploitation_dilemma"
    publisher: "Wikipedia"
  - title: "Multi-armed bandit"
    url: "https://en.wikipedia.org/wiki/Multi-armed_bandit"
    publisher: "Wikipedia"
  - title: "Apprentissage par renforcement"
    url: "https://fr.wikipedia.org/wiki/Apprentissage_par_renforcement"
    publisher: "Wikipédia"
quiz:
  - question: "Que veut dire « exploiter » pour une IA qui apprend par renforcement ?"
    options:
      - "Essayer une action jamais tentée"
      - "Refaire l'action qui a donné les meilleures récompenses"
      - "Arrêter de jouer"
    answer: 2
    explanation: >
      Exploiter, c'est utiliser ce que l'on sait déjà pour choisir l'action qui semble la
      meilleure.
  - question: "D'où vient le nom du problème du « bandit manchot » ?"
    options:
      - "D'un voleur célèbre"
      - "D'un jeu de cartes"
      - "Des machines à sous à levier"
    answer: 3
    explanation: >
      En anglais, les machines à sous à un levier sont surnommées « bandits manchots ». Le
      joueur doit choisir sur quelle machine jouer.
  - question: "Avec la méthode epsilon-glouton et epsilon égal à 0,1, combien de fois l'IA choisit-elle au hasard ?"
    options:
      - "Environ 1 fois sur 10"
      - "Environ 9 fois sur 10"
      - "Jamais"
    answer: 1
    explanation: >
      Avec epsilon égal à 0,1, l'IA choisit au hasard dans 10 % des cas et prend la
      meilleure option connue dans 90 % des cas.
  - question: "Pourquoi une IA qui n'explore jamais risque-t-elle de mal apprendre ?"
    options:
      - "Elle va trop vite"
      - "Elle peut passer à côté d'une meilleure option qu'elle n'a jamais essayée"
      - "Elle consomme trop d'électricité"
    answer: 2
    explanation: >
      Ses connaissances peuvent être incomplètes. Sans essayer autre chose, elle ne
      découvre jamais les options meilleures.
lastVerified: 2026-10-09
status: published
---

## En bref

Une IA qui apprend par essais et récompenses doit choisir entre deux attitudes. Exploiter, c'est refaire ce qui a déjà bien marché. Explorer, c'est essayer autre chose, au risque de perdre, pour peut-être trouver mieux.

## Le dilemme du restaurant

Imagine que tu connais une bonne pizzeria dans ton quartier. Ce soir, tu peux y retourner : tu es presque sûr de bien manger. Tu peux aussi tester le nouveau restaurant d'à côté. Il sera peut-être meilleur, peut-être moins bon.

Refaire ce qui marche s'appelle exploiter. Essayer autre chose pour en apprendre plus s'appelle explorer. Les chercheurs en intelligence artificielle appellent ce choix le dilemme exploration-exploitation.

## Une IA qui apprend par récompenses

Dans l'apprentissage par renforcement, un programme appelé agent agit dans un environnement. Après chaque action, il reçoit une récompense, positive ou négative. Son but est d'obtenir le plus de récompenses possible.

Au début, l'agent ne sait presque rien. S'il refait toujours la première action qui a rapporté un peu, il risque de rater une action bien meilleure. Ses connaissances peuvent être incomplètes ou trompeuses. Mais s'il essaie tout le temps des actions au hasard, il ne profite jamais de ce qu'il a appris. Il doit trouver un équilibre pour gagner le plus sur le long terme.

## Les bandits manchots

Le cas le plus connu s'appelle le problème du bandit manchot. En anglais, les machines à sous à un levier sont surnommées « bandits manchots ». Un joueur fait face à une rangée de machines. Chacune rapporte en moyenne une somme différente, mais il ne sait pas laquelle est la meilleure. Il doit décider sur quelle machine jouer, combien de fois, et quand changer. Le mathématicien Herbert Robbins a formulé la version de ce problème la plus étudiée en 1952.

## La méthode epsilon-glouton

Une solution simple s'appelle la méthode epsilon-glouton. Epsilon est un petit nombre, par exemple 0,1. La plupart du temps, l'agent choisit l'action qui a rapporté le plus jusque-là. Mais dans une proportion epsilon des cas, il choisit une action au hasard. Avec epsilon égal à 0,1, il exploite donc 9 fois sur 10 et explore 1 fois sur 10.

Ce dilemme ne concerne pas que les jeux. Il apparaît dans les essais de nouveaux médicaments, où l'on veut tester des traitements tout en protégeant les patients, ou dans le choix du chemin des données sur un réseau.

## À retenir

- Exploiter, c'est refaire l'action qui a donné les meilleures récompenses.
- Explorer, c'est essayer une autre action pour découvrir peut-être mieux.
- Une IA qui apprend par renforcement doit équilibrer les deux pour gagner le plus sur le long terme.
- Le problème du bandit manchot, formulé par Herbert Robbins en 1952, est l'exemple classique de ce dilemme.
- La méthode epsilon-glouton choisit au hasard dans une petite part des cas, par exemple 1 fois sur 10.

---
type: article
title: Le role de la fonction de valeur dans l'estimation des benefices futurs d'une action
slug: le-role-de-la-fonction-de-valeur-dans-l-estimation-des-benefices-futurs-d-une-action
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Un outil mathematique qui aide l'agent a evaluer l'interet a long terme de ses choix.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'entrainement progressif de robots physiques par essais et recompenses
slug: l-entrainement-progressif-de-robots-physiques-par-essais-et-recompenses
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une application concrete ou un robot apprend progressivement a accomplir des taches physiques.
tags: [apprentissage-par-renforcement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role des simulations dans l'entrainement securise des agents d'apprentissage par renforcement
slug: le-role-des-simulations-dans-l-entrainement-securise-des-agents-d-apprentissage-par-renforcement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Un environnement virtuel qui permet de s'entrainer sans risque avant un deploiement reel.
tags: [apprentissage-par-renforcement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les victoires historiques de l'intelligence artificielle dans des jeux de strategie complexes
slug: les-victoires-historiques-de-l-intelligence-artificielle-dans-des-jeux-de-strategie-complexes
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Des exploits marquants qui ont demontre publiquement la puissance de ces methodes d'apprentissage.
tags: [apprentissage-par-renforcement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la politique dans la strategie de decision d'un agent entraine par renforcement
slug: le-role-de-la-politique-dans-la-strategie-de-decision-d-un-agent-entraine-par-renforcement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une regle de comportement qui determine quelle action choisir selon la situation rencontree.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement multi-agents et la cooperation entre plusieurs systemes
slug: l-apprentissage-par-renforcement-multi-agents-et-la-cooperation-entre-plusieurs-systemes
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une extension complexe ou plusieurs agents interagissent et doivent parfois collaborer entre eux.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de l'apprentissage par renforcement dans l'optimisation des systemes de recommandation
slug: le-role-de-l-apprentissage-par-renforcement-dans-l-optimisation-des-systemes-de-recommandation
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une application qui ajuste progressivement les suggestions selon les reactions de l'utilisateur.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les defis de la conception d'une fonction de recompense adaptee a un probleme complexe
slug: les-defis-de-la-conception-d-une-fonction-de-recompense-adaptee-a-un-probleme-complexe
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une difficulte pratique majeure car une recompense mal concue peut mener a des comportements indesirables.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement applique a la gestion de reseaux electriques
slug: l-apprentissage-par-renforcement-applique-a-la-gestion-de-reseaux-electriques
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une application qui optimise dynamiquement la distribution d'energie selon la demande.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des reseaux de neurones dans l'apprentissage par renforcement profond
slug: le-role-des-reseaux-de-neurones-dans-l-apprentissage-par-renforcement-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une combinaison technique qui a permis des progres majeurs dans la resolution de problemes complexes.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement et son role dans l'optimisation de la conduite autonome
slug: l-apprentissage-par-renforcement-et-son-role-dans-l-optimisation-de-la-conduite-autonome
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une application prometteuse qui aide un vehicule a ameliorer progressivement ses decisions de conduite.
tags: [apprentissage-par-renforcement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'apprentissage par renforcement dans la finance algorithmique
slug: le-role-de-l-apprentissage-par-renforcement-dans-la-finance-algorithmique
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une application qui ajuste des strategies d'investissement en fonction des resultats observes.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les limites actuelles de l'apprentissage par renforcement face a des problemes du monde reel
slug: les-limites-actuelles-de-l-apprentissage-par-renforcement-face-a-des-problemes-du-monde-reel
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Des difficultes pratiques qui compliquent le passage d'un environnement simule a une application concrete.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement inverse et la deduction d'objectifs a partir de comportements observes
slug: l-apprentissage-par-renforcement-inverse-et-la-deduction-d-objectifs-a-partir-de-comportements-observes
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une approche originale qui cherche a comprendre les intentions plutot que de les imposer directement.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la patience et du temps d'entrainement necessaire en apprentissage par renforcement
slug: le-role-de-la-patience-et-du-temps-d-entrainement-necessaire-en-apprentissage-par-renforcement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une contrainte pratique importante qui peut necessiter de tres nombreuses tentatives avant reussite.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement applique a l'optimisation de la logistique et des chaines d'approvisionnement
slug: l-apprentissage-par-renforcement-applique-a-l-optimisation-de-la-logistique-et-des-chaines-d-approvisionnement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une application concrete qui ameliore progressivement l'efficacite des decisions logistiques.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des benchmarks standardises dans l'evaluation des progres en apprentissage par renforcement
slug: le-role-des-benchmarks-standardises-dans-l-evaluation-des-progres-en-apprentissage-par-renforcement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Des environnements de test communs qui permettent de comparer objectivement differentes methodes.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage par renforcement et les questions ethiques liees a son deploiement
slug: l-apprentissage-par-renforcement-et-les-questions-ethiques-liees-a-son-deploiement
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une reflexion necessaire sur les consequences de systemes qui apprennent de maniere autonome.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la generalisation dans la capacite d'un agent entraine a s'adapter a de nouvelles situations
slug: le-role-de-la-generalisation-dans-la-capacite-d-un-agent-entraine-a-s-adapter-a-de-nouvelles-situations
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-par-renforcement
summary: >
  Une qualite essentielle qui distingue un apprentissage superficiel d'une comprehension plus profonde.
tags: [apprentissage-par-renforcement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le principe general des reseaux de neurones artificiels
slug: le-principe-general-des-reseaux-de-neurones-artificiels
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une architecture inspiree tres librement du fonctionnement du cerveau, organisee en couches de traitement.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role des couches cachees dans le fonctionnement d'un reseau de neurones profond
slug: le-role-des-couches-cachees-dans-le-fonctionnement-d-un-reseau-de-neurones-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Des etapes intermediaires qui permettent au reseau d'extraire progressivement des informations complexes.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage profond applique a la reconnaissance d'images
slug: l-apprentissage-profond-applique-a-la-reconnaissance-d-images
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une application majeure qui a considerablement ameliore la capacite des machines a identifier des objets visuels.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Comment un réseau de neurones convolutif repère-t-il les formes dans une image ?
slug: comment-un-reseau-de-neurones-convolutif-repere-t-il-les-formes-dans-une-image
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un réseau de neurones convolutif fait glisser de petits filtres sur toute l'image. Les
  premières couches repèrent des bords et des taches de couleur, les suivantes des formes de
  plus en plus complexes. Cette idée s'inspire de la façon dont fonctionne le cortex visuel.
tags: [apprentissage-profond]
sources:
  - title: "Réseau neuronal convolutif"
    url: "https://fr.wikipedia.org/wiki/R%C3%A9seau_neuronal_convolutif"
    publisher: "Wikipédia"
  - title: "Convolutional neural network"
    url: "https://en.wikipedia.org/wiki/Convolutional_neural_network"
    publisher: "Wikipedia"
quiz:
  - question: "Que fait un filtre dans un réseau convolutif ?"
    options:
      - "Il efface les couleurs de l'image"
      - "Il glisse sur l'image et cherche un motif précis"
      - "Il agrandit l'image"
    answer: 2
    explanation: >
      Un filtre est une petite grille, par exemple de 3 sur 3 pixels, qui parcourt toute
      l'image pour repérer un motif.
  - question: "Que repèrent les premières couches d'un réseau convolutif ?"
    options:
      - "Des visages entiers"
      - "Des noms d'objets"
      - "Des bords et des taches de couleur"
    answer: 3
    explanation: >
      Les premières couches détectent des éléments simples, comme des bords ou des taches
      de couleur. Les couches suivantes combinent ces éléments.
  - question: "Sur quel animal Hubel et Wiesel ont-ils étudié le cortex visuel ?"
    options:
      - "Le chat"
      - "Le pigeon"
      - "Le dauphin"
    answer: 1
    explanation: >
      Dans les années 1950 et 1960, ils ont montré que certains neurones du cortex visuel
      du chat réagissent à une petite zone du champ de vision.
  - question: "À quoi a servi LeNet-5, le réseau de Yann LeCun ?"
    options:
      - "À jouer aux échecs"
      - "À lire des chèques dans des banques américaines"
      - "À traduire des livres"
    answer: 2
    explanation: >
      À partir de juin 1996, ce système a lu des millions de chèques par jour dans
      plusieurs banques américaines.
lastVerified: 2026-10-09
status: published
---

## En bref

Un réseau de neurones convolutif fait glisser de petits filtres sur toute l'image. Les premières couches repèrent des bords et des taches de couleur, les suivantes des formes de plus en plus complexes. Cette idée s'inspire de la façon dont fonctionne le cortex visuel.

## Une image, c'est un tableau de nombres

Pour un ordinateur, une photo est une grille de pixels. Chaque pixel est décrit par des nombres qui indiquent sa couleur. Reconnaître un chat dans ce tableau de nombres est difficile. Le chat peut être à gauche ou à droite, grand ou petit.

Un réseau de neurones convolutif est conçu pour ce problème. Il est très utilisé pour reconnaître des images et des vidéos.

## Des filtres qui glissent

Le cœur du réseau est le filtre. C'est une petite grille de nombres, souvent de 3 sur 3 ou de 5 sur 5 pixels. Le filtre glisse sur toute l'image, case par case. À chaque position, il calcule si le petit morceau d'image ressemble au motif qu'il cherche. Cette opération s'appelle une convolution.

Le résultat est une carte qui montre où le motif apparaît dans l'image. Un même filtre est utilisé partout. Ainsi, un bord est repéré de la même façon en haut ou en bas de la photo.

Le réseau n'est pas programmé à la main. Pendant l'apprentissage, il règle lui-même les nombres de ses filtres à partir de milliers d'exemples.

## Du simple au compliqué

Le réseau empile plusieurs couches de filtres. Les premières couches repèrent des choses simples : des bords orientés et des taches de couleur. Les couches suivantes combinent ces morceaux. Elles reconnaissent des formes plus grandes, comme un œil ou une oreille, puis un objet entier.

Entre certaines couches, une étape de regroupement réduit la taille des cartes. Souvent, on garde seulement la plus grande valeur de chaque carré de 2 sur 2. Le réseau garde l'essentiel et calcule plus vite.

## Inspiré par le cerveau du chat

Dans les années 1950 et 1960, David Hubel et Torsten Wiesel ont étudié le cortex visuel du chat. Ils ont montré que certains neurones réagissent seulement à une petite zone du champ de vision.

En 1980, Kunihiko Fukushima a proposé le néocognitron, un ancêtre des réseaux convolutifs. Yann LeCun et son équipe ont ensuite créé LeNet-5, présenté en 1995. À partir de juin 1996, ce système lisait des millions de chèques par jour dans plusieurs banques américaines. En 2012, le réseau convolutif AlexNet a gagné le concours de reconnaissance d'images ImageNet.

## À retenir

- Un réseau convolutif fait glisser de petits filtres sur toute l'image pour repérer des motifs.
- Les premières couches repèrent des bords et des couleurs, les suivantes des formes de plus en plus complexes.
- Le réseau apprend lui-même les valeurs de ses filtres à partir d'exemples.
- L'idée s'inspire des travaux de Hubel et Wiesel sur le cortex visuel du chat.
- Dès 1996, le réseau LeNet-5 de Yann LeCun lisait des millions de chèques par jour.

---
type: article
title: L'entrainement d'un reseau de neurones et le principe de la retropropagation
slug: l-entrainement-d-un-reseau-de-neurones-et-le-principe-de-la-retropropagation
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une methode fondamentale qui ajuste progressivement le reseau en fonction de ses erreurs.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Comment un réseau de neurones récurrent se souvient-il du début d'une phrase ?
slug: comment-un-reseau-de-neurones-recurrent-se-souvient-il-du-debut-d-une-phrase
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un réseau de neurones récurrent lit une suite d'éléments, comme les mots d'une phrase, un
  par un. À chaque étape, il garde une petite mémoire de ce qu'il a déjà lu. Cette mémoire
  s'efface vite, c'est pourquoi on a inventé en 1997 une version améliorée, le LSTM.
tags: [apprentissage-profond]
sources:
  - title: "Réseau de neurones récurrents"
    url: "https://fr.wikipedia.org/wiki/R%C3%A9seau_de_neurones_r%C3%A9currents"
    publisher: "Wikipédia"
  - title: "Recurrent neural network"
    url: "https://en.wikipedia.org/wiki/Recurrent_neural_network"
    publisher: "Wikipedia"
quiz:
  - question: "Comment un réseau récurrent lit-il une phrase ?"
    options:
      - "Tous les mots en même temps"
      - "Un mot après l'autre, en gardant une mémoire"
      - "En commençant par la fin"
    answer: 2
    explanation: >
      Le réseau traite les éléments un par un. À chaque étape, il met à jour son état
      caché à partir du mot lu et de son état précédent.
  - question: "Quel problème touche les réseaux récurrents classiques ?"
    options:
      - "Ils oublient vite les informations lointaines"
      - "Ils ne savent lire que des chiffres"
      - "Ils chauffent trop"
    answer: 1
    explanation: >
      L'effet des éléments anciens diminue très vite au fil des étapes. On parle de
      disparition du gradient.
  - question: "En quelle année le LSTM a-t-il été proposé ?"
    options:
      - "En 1957"
      - "En 2022"
      - "En 1997"
    answer: 3
    explanation: >
      Sepp Hochreiter et Jürgen Schmidhuber ont proposé le LSTM en 1997 pour aider le
      réseau à garder des informations plus longtemps.
  - question: "Quelle architecture a remplacé les réseaux récurrents pour la plupart des tâches de langage ?"
    options:
      - "Le perceptron"
      - "Le transformeur"
      - "Le système expert"
    answer: 2
    explanation: >
      À la fin des années 2010, les transformeurs, qui utilisent l'attention au lieu d'une
      boucle, sont devenus l'architecture dominante.
lastVerified: 2026-10-09
status: published
---

## En bref

Un réseau de neurones récurrent lit une suite d'éléments, comme les mots d'une phrase, un par un. À chaque étape, il garde une petite mémoire de ce qu'il a déjà lu. Cette mémoire s'efface vite, c'est pourquoi on a inventé en 1997 une version améliorée, le LSTM.

## Lire dans l'ordre

Beaucoup de données arrivent en suite : les mots d'une phrase, les sons d'une voix, les températures jour après jour. Dans ces données, l'ordre compte. « Le chat mange la souris » ne veut pas dire la même chose que « la souris mange le chat ».

Un réseau de neurones récurrent est fait pour ce genre de données. Il lit les éléments un par un, dans l'ordre. Il peut traiter des suites de longueur variable : une phrase de trois mots ou de trente.

## Une mémoire qui tourne en boucle

Le mot « récurrent » veut dire que le réseau contient une boucle. Une partie de ce qu'il calcule à une étape lui revient à l'étape suivante.

Cette information qui circule s'appelle l'état caché. C'est une sorte de mémoire. À chaque mot, le réseau mélange le nouveau mot avec son état caché précédent. Il obtient un nouvel état caché, puis passe au mot suivant. Quand il arrive au bout de la phrase, son état caché résume ce qu'il a lu.

## Le problème de l'oubli

Les premiers réseaux récurrents avaient un défaut. L'effet des éléments anciens diminuait très vite à chaque étape. Le réseau avait donc du mal à relier la fin d'une longue phrase à son début. Les chercheurs appellent ce problème la disparition du gradient : le signal qui sert à corriger le réseau pendant l'apprentissage devient presque nul pour les éléments lointains.

En 1997, Sepp Hochreiter et Jürgen Schmidhuber ont proposé le LSTM, pour « longue mémoire à court terme ». Ce réseau possède des portes. Une porte décide ce qu'il faut oublier, une autre ce qu'il faut ajouter à la mémoire, une troisième ce qu'il faut ressortir. En 2014, Kyunghyun Cho et son équipe ont présenté le GRU, une version plus simple avec moins de réglages.

## Des usages, puis un successeur

Les réseaux récurrents ont servi à reconnaître l'écriture manuscrite, à reconnaître la parole et à traduire des textes. Des LSTM ont par exemple été utilisés dans la recherche vocale de Google.

À la fin des années 2010, une autre architecture, le transformeur, est devenue la plus utilisée pour le langage. Elle remplace la boucle par un mécanisme d'attention, qui regarde tous les mots à la fois.

## À retenir

- Un réseau de neurones récurrent lit une suite d'éléments un par un, dans l'ordre.
- Il garde une mémoire, l'état caché, qu'il met à jour à chaque élément lu.
- Les réseaux récurrents simples oublient vite les éléments lointains : c'est la disparition du gradient.
- Le LSTM, proposé en 1997, utilise des portes pour garder des informations plus longtemps.
- Depuis la fin des années 2010, les transformeurs les ont remplacés pour la plupart des tâches de langage.

---
type: article
title: L'apprentissage profond et son role dans les avancees recentes de la reconnaissance vocale
slug: l-apprentissage-profond-et-son-role-dans-les-avancees-recentes-de-la-reconnaissance-vocale
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une amelioration significative qui a rendu les assistants vocaux bien plus fiables qu'auparavant.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la quantite de donnees necessaire pour entrainer efficacement un reseau profond
slug: le-role-de-la-quantite-de-donnees-necessaire-pour-entrainer-efficacement-un-reseau-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une exigence importante car ces methodes necessitent generalement de tres grands volumes d'exemples.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les reseaux generatifs antagonistes et leur principe de competition entre deux modeles
slug: les-reseaux-generatifs-antagonistes-et-leur-principe-de-competition-entre-deux-modeles
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une approche originale ou deux reseaux s'ameliorent mutuellement a travers une competition constante.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la puissance de calcul dans les progres recents de l'apprentissage profond
slug: le-role-de-la-puissance-de-calcul-dans-les-progres-recents-de-l-apprentissage-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un facteur determinant qui a permis d'entrainer des modeles de plus en plus performants.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage profond applique a la traduction automatique de langues
slug: l-apprentissage-profond-applique-a-la-traduction-automatique-de-langues
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une application qui a considerablement ameliore la qualite des traductions produites par ordinateur.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role du surapprentissage et les techniques pour l'eviter dans un reseau profond
slug: le-role-du-surapprentissage-et-les-techniques-pour-l-eviter-dans-un-reseau-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un probleme frequent ou le modele memorise les exemples plutot que d'apprendre a generaliser.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les reseaux de neurones profonds appliques au diagnostic medical par imagerie
slug: les-reseaux-de-neurones-profonds-appliques-au-diagnostic-medical-par-imagerie
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une application prometteuse qui aide les professionnels de sante a detecter certaines anomalies.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role du transfert d'apprentissage dans la reutilisation de modeles deja entraines
slug: le-role-du-transfert-d-apprentissage-dans-la-reutilisation-de-modeles-deja-entraines
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une technique efficace qui permet d'adapter un modele existant a une nouvelle tache sans tout reapprendre.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage profond et la generation de contenu artificiel comme des images ou des textes
slug: l-apprentissage-profond-et-la-generation-de-contenu-artificiel-comme-des-images-ou-des-textes
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une capacite recente et impressionnante qui souleve aussi de nouvelles questions ethiques.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la fonction d'activation dans le comportement des neurones artificiels
slug: le-role-de-la-fonction-d-activation-dans-le-comportement-des-neurones-artificiels
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un element technique qui determine comment un neurone reagit aux signaux qu'il recoit.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les reseaux de neurones profonds dans les systemes de recommandation en ligne
slug: les-reseaux-de-neurones-profonds-dans-les-systemes-de-recommandation-en-ligne
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une application discrete mais tres repandue qui personnalise les suggestions faites aux utilisateurs.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la consommation energetique dans l'entrainement des grands modeles d'apprentissage profond
slug: le-role-de-la-consommation-energetique-dans-l-entrainement-des-grands-modeles-d-apprentissage-profond
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Un enjeu environnemental croissant lie a la puissance de calcul necessaire a ces methodes.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: L'apprentissage profond applique a la detection de fraudes financieres
slug: l-apprentissage-profond-applique-a-la-detection-de-fraudes-financieres
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une utilisation concrete qui identifie automatiquement des comportements suspects dans de grands volumes de transactions.
tags: [apprentissage-profond]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des architectures profondes dans la comprehension du langage naturel
slug: le-role-des-architectures-profondes-dans-la-comprehension-du-langage-naturel
categoryPath: intelligence-artificielle/apprentissage-automatique/apprentissage-profond
summary: >
  Une avancee majeure qui a considerablement ameliore la capacite des machines a traiter le texte.
tags: [apprentissage-profond, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la qualite des donnees dans la performance d'un modele d'apprentissage automatique
slug: le-role-de-la-qualite-des-donnees-dans-la-performance-d-un-modele-d-apprentissage-automatique
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un facteur determinant car un modele ne peut pas depasser la qualite de ce qu'il apprend.
tags: [donnees-et-entrainement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: La separation des donnees en ensembles d'entrainement et de test
slug: la-separation-des-donnees-en-ensembles-d-entrainement-et-de-test
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une pratique essentielle qui permet d'evaluer honnetement la capacite reelle d'un modele.
tags: [donnees-et-entrainement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'annotation manuelle dans la preparation des donnees d'entrainement
slug: le-role-de-l-annotation-manuelle-dans-la-preparation-des-donnees-d-entrainement
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un travail souvent long et couteux mais indispensable pour de nombreux types d'apprentissage.
tags: [donnees-et-entrainement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les biais presents dans les donnees et leur impact sur le comportement d'un modele
slug: les-biais-presents-dans-les-donnees-et-leur-impact-sur-le-comportement-d-un-modele
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un risque majeur ou un modele reproduit ou amplifie des desequilibres presents dans ses exemples.
tags: [donnees-et-entrainement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role du nettoyage des donnees avant l'entrainement d'un modele d'apprentissage automatique
slug: le-role-du-nettoyage-des-donnees-avant-l-entrainement-d-un-modele-d-apprentissage-automatique
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une etape preparatoire necessaire pour eliminer les erreurs et incoherences des donnees brutes.
tags: [donnees-et-entrainement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: L'augmentation de donnees comme technique pour enrichir artificiellement un jeu d'entrainement limite
slug: l-augmentation-de-donnees-comme-technique-pour-enrichir-artificiellement-un-jeu-d-entrainement-limite
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une methode qui cree des variations supplementaires a partir des donnees existantes.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la validation croisee dans l'evaluation fiable d'un modele d'apprentissage
slug: le-role-de-la-validation-croisee-dans-l-evaluation-fiable-d-un-modele-d-apprentissage
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une methode statistique qui teste un modele sur plusieurs decoupages differents des donnees disponibles.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees synthetiques generees artificiellement pour l'entrainement de modeles
slug: les-donnees-synthetiques-generees-artificiellement-pour-l-entrainement-de-modeles
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une alternative utile lorsque les donnees reelles sont rares, sensibles ou couteuses a obtenir.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role du surapprentissage et du sous-apprentissage dans la qualite d'un modele entraine
slug: le-role-du-surapprentissage-et-du-sous-apprentissage-dans-la-qualite-d-un-modele-entraine
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Deux problemes opposes qui traduisent chacun un mauvais equilibre entre le modele et ses donnees.
tags: [donnees-et-entrainement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: La collecte ethique de donnees et le respect du consentement des personnes concernees
slug: la-collecte-ethique-de-donnees-et-le-respect-du-consentement-des-personnes-concernees
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un enjeu croissant lie a l'origine et a l'usage responsable des informations utilisees pour entrainer un modele.
tags: [donnees-et-entrainement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la diversite des donnees dans la capacite de generalisation d'un modele
slug: le-role-de-la-diversite-des-donnees-dans-la-capacite-de-generalisation-d-un-modele
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une richesse d'exemples varies qui aide le modele a mieux fonctionner face a des situations nouvelles.
tags: [donnees-et-entrainement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les jeux de donnees publics et leur role dans la recherche en intelligence artificielle
slug: les-jeux-de-donnees-publics-et-leur-role-dans-la-recherche-en-intelligence-artificielle
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Des ressources partagees qui permettent a la communaute scientifique de comparer differentes approches.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role du pretraitement des donnees dans la preparation avant l'entrainement d'un modele
slug: le-role-du-pretraitement-des-donnees-dans-la-preparation-avant-l-entrainement-d-un-modele
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une etape technique qui met les donnees dans un format adapte a l'apprentissage automatique.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees deséquilibrees et les techniques pour compenser leur repartition inegale
slug: les-donnees-desequilibrees-et-les-techniques-pour-compenser-leur-repartition-inegale
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un defi frequent lorsque certaines categories sont beaucoup moins representees que d'autres.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de l'etiquetage collaboratif dans la constitution de grands jeux de donnees
slug: le-role-de-l-etiquetage-collaboratif-dans-la-constitution-de-grands-jeux-de-donnees
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une approche qui mobilise de nombreuses personnes pour annoter efficacement de vastes ensembles d'informations.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees personnelles et les reglementations encadrant leur usage pour l'entrainement de modeles
slug: les-donnees-personnelles-et-les-reglementations-encadrant-leur-usage-pour-l-entrainement-de-modeles
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un cadre juridique de plus en plus strict qui protege les informations sensibles des individus.
tags: [donnees-et-entrainement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role du volume de donnees necessaire selon la complexite du modele a entrainer
slug: le-role-du-volume-de-donnees-necessaire-selon-la-complexite-du-modele-a-entrainer
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une relation generale ou des modeles plus complexes necessitent habituellement davantage d'exemples.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les donnees d'entrainement obsoletes et le besoin de reactualisation reguliere d'un modele
slug: les-donnees-d-entrainement-obsoletes-et-le-besoin-de-reactualisation-reguliere-d-un-modele
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un enjeu de maintenance qui garantit que le modele reste pertinent face a un monde qui change.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des metriques d'evaluation dans la mesure objective de la performance d'un modele
slug: le-role-des-metriques-d-evaluation-dans-la-mesure-objective-de-la-performance-d-un-modele
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Des indicateurs precis qui permettent de comparer differentes approches selon des criteres communs.
tags: [donnees-et-entrainement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: La provenance des donnees et les questions de propriete intellectuelle qu'elle souleve
slug: la-provenance-des-donnees-et-les-questions-de-propriete-intellectuelle-qu-elle-souleve
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Un debat actuel sur les droits associes aux contenus utilises pour entrainer des modeles d'intelligence artificielle.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role du reequilibrage des donnees dans la reduction des biais discriminatoires d'un modele
slug: le-role-du-reequilibrage-des-donnees-dans-la-reduction-des-biais-discriminatoires-d-un-modele
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une technique corrective qui vise a limiter la reproduction d'inegalites presentes dans les exemples.
tags: [donnees-et-entrainement, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les couts economiques lies a la collecte et a la preparation des donnees d'entrainement
slug: les-couts-economiques-lies-a-la-collecte-et-a-la-preparation-des-donnees-d-entrainement
categoryPath: intelligence-artificielle/apprentissage-automatique/donnees-et-entrainement
summary: >
  Une depense souvent sous-estimee mais qui represente une part importante du developpement d'un modele.
tags: [donnees-et-entrainement]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais de genre dans les systemes d'intelligence artificielle
slug: les-biais-de-genre-dans-les-systemes-d-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Une reproduction indesirable de stereotypes existants deja presents dans les donnees d'apprentissage.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Pourquoi certains logiciels de reconnaissance faciale se trompent-ils plus sur certains visages ?
slug: pourquoi-certains-logiciels-de-reconnaissance-faciale-se-trompent-ils-plus-sur-certains-visages
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des études ont montré que des logiciels de reconnaissance faciale font beaucoup plus
  d'erreurs sur les visages de personnes à la peau foncée, surtout des femmes. Une des causes
  probables est le manque de diversité des photos utilisées pour les entraîner.
tags: [biais]
sources:
  - title: "NIST Study Evaluates Effects of Race, Age, Sex on Face Recognition Software"
    url: "https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software"
    publisher: "NIST"
  - title: "Joy Buolamwini"
    url: "https://en.wikipedia.org/wiki/Joy_Buolamwini"
    publisher: "Wikipedia"
  - title: "Facial recognition system"
    url: "https://en.wikipedia.org/wiki/Facial_recognition_system"
    publisher: "Wikipedia"
quiz:
  - question: "Qu'a dû porter Joy Buolamwini pour qu'un logiciel détecte son visage ?"
    options:
      - "Des lunettes de soleil"
      - "Un masque blanc"
      - "Un chapeau rouge"
    answer: 2
    explanation: >
      Le logiciel ne détectait pas bien son visage à la peau foncée. Il le détectait quand
      elle portait un masque blanc.
  - question: "Dans l'étude Gender Shades de 2018, quel groupe subissait le plus d'erreurs ?"
    options:
      - "Les hommes à la peau claire"
      - "Les enfants"
      - "Les femmes à la peau foncée"
    answer: 3
    explanation: >
      Les femmes à la peau foncée subissaient jusqu'à 34,7 % d'erreurs, contre moins de 1
      % pour les hommes à la peau claire.
  - question: "Combien d'algorithmes l'agence américaine NIST a-t-elle testés en 2019 ?"
    options:
      - "189"
      - "3"
      - "12 000"
    answer: 1
    explanation: >
      Le NIST a testé 189 algorithmes de 99 développeurs sur plus de 18 millions d'images.
  - question: "Que suggèrent les résultats des algorithmes développés en Asie ?"
    options:
      - "Que la reconnaissance faciale ne marche jamais"
      - "Que des photos d'entraînement plus variées peuvent réduire les écarts"
      - "Que les ordinateurs asiatiques sont plus rapides"
    answer: 2
    explanation: >
      Ces algorithmes ne montraient pas de grand écart entre visages asiatiques et blancs.
      Cela suggère que la diversité des données d'entraînement compte.
lastVerified: 2026-10-09
status: published
---

## En bref

Des études ont montré que des logiciels de reconnaissance faciale font beaucoup plus d'erreurs sur les visages de personnes à la peau foncée, surtout des femmes. Une des causes probables est le manque de diversité des photos utilisées pour les entraîner.

## Un masque blanc

Joy Buolamwini est une chercheuse au MIT, une grande université américaine. Pour un projet artistique, elle utilisait un logiciel qui devait détecter son visage. Il n'y arrivait pas bien, car elle a la peau foncée. Le logiciel détectait son visage quand elle portait un masque blanc. Cette expérience l'a poussée à étudier le problème. En 2016, elle a fondé l'Algorithmic Justice League, une association qui lutte contre les injustices causées par les algorithmes.

## L'étude Gender Shades

En 2018, Joy Buolamwini et Timnit Gebru ont testé des logiciels d'analyse de visages vendus par IBM, Microsoft et Face++. Ces logiciels devaient dire si une photo montrait un homme ou une femme.

Les résultats étaient très inégaux. Pour les hommes à la peau claire, le taux d'erreur était inférieur à 1 %. Pour les femmes à la peau foncée, il montait jusqu'à 34,7 %. Autrement dit, le logiciel se trompait parfois sur plus d'une femme noire sur trois.

## Une grande étude officielle

Le 19 décembre 2019, le NIST, une agence américaine chargée des mesures et des normes, a publié une étude encore plus vaste. Elle a testé 189 algorithmes de 99 développeurs, sur 18,27 millions d'images de 8,49 millions de personnes.

Pour vérifier si deux photos montrent la même personne, beaucoup d'algorithmes se trompaient plus souvent sur les visages asiatiques et afro-américains que sur les visages blancs. Ils confondaient plus souvent deux personnes différentes. L'écart allait souvent de 10 à 100 fois plus d'erreurs. Pour retrouver une personne dans une grande base de photos, les erreurs étaient plus fréquentes pour les femmes afro-américaines.

## D'où vient le problème

Un logiciel de reconnaissance faciale apprend à partir de photos. Si ces photos montrent surtout un type de visage, il reconnaît mieux ce type de visage. Le NIST a fait une observation intéressante : les algorithmes développés dans des pays d'Asie ne montraient pas de grand écart entre visages asiatiques et blancs. Cela suggère que des photos d'entraînement plus variées peuvent réduire les inégalités.

Ces erreurs ont des conséquences réelles, par exemple quand la police utilise ces logiciels. Après la publication de ces travaux, IBM a arrêté son logiciel de reconnaissance faciale en 2020. Microsoft et Amazon ont annoncé des changements dans leurs produits.

## À retenir

- Des logiciels de reconnaissance faciale se trompent plus souvent sur les visages à la peau foncée.
- En 2018, l'étude Gender Shades a mesuré jusqu'à 34,7 % d'erreurs pour les femmes à la peau foncée, contre moins de 1 % pour les hommes à la peau claire.
- En 2019, le NIST a testé 189 algorithmes et trouvé souvent 10 à 100 fois plus de fausses correspondances pour les visages asiatiques et afro-américains.
- Une cause probable est le manque de diversité des photos d'entraînement.
- Ces travaux ont poussé IBM, Microsoft et Amazon à modifier ou arrêter leurs produits.

---
type: article
title: Le role des donnees historiques dans la reproduction de discriminations passees par un modele
slug: le-role-des-donnees-historiques-dans-la-reproduction-de-discriminations-passees-par-un-modele
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un risque majeur ou une intelligence artificielle apprend involontairement des inegalites du passe.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de recrutement automatise
slug: les-biais-dans-les-systemes-de-recrutement-automatise
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un enjeu concret ou un outil d'intelligence artificielle peut desavantager certains candidats sans intention explicite.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la diversite des equipes de developpement dans la reduction des biais algorithmiques
slug: le-role-de-la-diversite-des-equipes-de-developpement-dans-la-reduction-des-biais-algorithmiques
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Une piste de solution qui vise a integrer davantage de perspectives des la conception d'un systeme.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de credit et d'evaluation financiere automatisee
slug: les-biais-dans-les-systemes-de-credit-et-d-evaluation-financiere-automatisee
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un risque qui peut affecter injustement l'acces a des services financiers pour certaines populations.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'audit algorithmique dans la detection des biais caches d'un modele
slug: le-role-de-l-audit-algorithmique-dans-la-detection-des-biais-caches-d-un-modele
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Une verification independante qui examine le comportement d'un systeme pour reperer d'eventuelles inegalites.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les biais linguistiques dans les modeles de traitement du langage naturel
slug: les-biais-linguistiques-dans-les-modeles-de-traitement-du-langage-naturel
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Une performance parfois inegale d'un modele selon la langue ou le dialecte utilise par l'utilisateur.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la transparence algorithmique dans l'identification des biais existants
slug: le-role-de-la-transparence-algorithmique-dans-l-identification-des-biais-existants
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Une exigence croissante qui permet de mieux comprendre pourquoi un systeme prend certaines decisions.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de justice predictive et leur impact sur les decisions judiciaires
slug: les-biais-dans-les-systemes-de-justice-predictive-et-leur-impact-sur-les-decisions-judiciaires
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un enjeu particulierement sensible ou une erreur peut avoir des consequences graves pour une personne.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role des tests statistiques dans la mesure objective des biais d'un modele
slug: le-role-des-tests-statistiques-dans-la-mesure-objective-des-biais-d-un-modele
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des methodes rigoureuses qui permettent de quantifier precisement des inegalites de traitement.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais lies a l'age dans les systemes automatises de decision
slug: les-biais-lies-a-l-age-dans-les-systemes-automatises-de-decision
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un phenomene moins etudie mais reel ou certains groupes d'age sont traites differemment par un modele.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des correctifs techniques dans la reduction des biais apres leur detection
slug: le-role-des-correctifs-techniques-dans-la-reduction-des-biais-apres-leur-detection
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des ajustements specifiques appliques a un modele pour limiter des inegalites identifiees.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais geographiques dans les modeles entraines principalement sur certaines regions du monde
slug: les-biais-geographiques-dans-les-modeles-entraines-principalement-sur-certaines-regions-du-monde
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un desequilibre de representation qui peut affecter la pertinence d'un modele selon le contexte culturel.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des associations de defense des droits dans la denonciation des biais algorithmiques
slug: le-role-des-associations-de-defense-des-droits-dans-la-denonciation-des-biais-algorithmiques
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Une vigilance citoyenne complementaire aux controles techniques et reglementaires.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de reconnaissance vocale selon les accents et les langues
slug: les-biais-dans-les-systemes-de-reconnaissance-vocale-selon-les-accents-et-les-langues
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Une performance variable qui peut desavantager certains locuteurs par rapport a d'autres.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la reglementation dans l'obligation de tester les biais avant le deploiement d'un systeme
slug: le-role-de-la-reglementation-dans-l-obligation-de-tester-les-biais-avant-le-deploiement-d-un-systeme
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Des exigences legales croissantes qui responsabilisent davantage les concepteurs de technologies.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les biais de confirmation amplifies par les systemes de recommandation personnalisee
slug: les-biais-de-confirmation-amplifies-par-les-systemes-de-recommandation-personnalisee
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un phenomene ou un algorithme renforce des opinions deja existantes plutot que d'ouvrir a la diversite.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'education du public dans la comprehension des biais presents dans l'intelligence artificielle
slug: le-role-de-l-education-du-public-dans-la-comprehension-des-biais-presents-dans-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Une sensibilisation necessaire pour que les utilisateurs restent critiques face aux resultats produits.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes medicaux automatises selon les populations etudiees
slug: les-biais-dans-les-systemes-medicaux-automatises-selon-les-populations-etudiees
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un risque specifique lie a un manque de diversite dans les donnees medicales utilisees pour l'entrainement.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la recherche academique dans l'avancement des connaissances sur les biais algorithmiques
slug: le-role-de-la-recherche-academique-dans-l-avancement-des-connaissances-sur-les-biais-algorithmiques
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un travail scientifique continu qui ameliore progressivement la comprehension de ces phenomenes.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les biais dans les systemes de moderation automatique de contenu en ligne
slug: les-biais-dans-les-systemes-de-moderation-automatique-de-contenu-en-ligne
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Un enjeu qui peut affecter injustement certains groupes ou certaines expressions culturelles.
tags: [biais]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la responsabilite des entreprises dans la correction des biais de leurs systemes
slug: le-role-de-la-responsabilite-des-entreprises-dans-la-correction-des-biais-de-leurs-systemes
categoryPath: intelligence-artificielle/ethique-et-societe/biais
summary: >
  Une obligation croissante qui pousse les organisations a assumer les consequences de leurs technologies.
tags: [biais, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role des premieres lois specifiques encadrant l'intelligence artificielle
slug: le-role-des-premieres-lois-specifiques-encadrant-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des textes recents qui commencent a definir un cadre juridique pour ces technologies.
tags: [regulation, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: La classification des systemes d'intelligence artificielle selon leur niveau de risque
slug: la-classification-des-systemes-d-intelligence-artificielle-selon-leur-niveau-de-risque
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Une approche reglementaire qui adapte les exigences selon les consequences potentielles d'un systeme.
tags: [regulation, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role des autorites de controle dans la surveillance des systemes d'intelligence artificielle
slug: le-role-des-autorites-de-controle-dans-la-surveillance-des-systemes-d-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des institutions specifiques chargees de verifier le respect des regles applicables a ces technologies.
tags: [regulation, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les obligations de transparence imposees aux developpeurs de systemes d'intelligence artificielle
slug: les-obligations-de-transparence-imposees-aux-developpeurs-de-systemes-d-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des exigences qui visent a rendre plus comprehensible le fonctionnement de ces technologies.
tags: [regulation, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la certification dans la validation de la conformite d'un systeme d'intelligence artificielle
slug: le-role-de-la-certification-dans-la-validation-de-la-conformite-d-un-systeme-d-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un processus qui verifie qu'un systeme respecte les normes de securite et d'ethique attendues.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les differences d'approche reglementaire entre plusieurs grandes regions du monde
slug: les-differences-d-approche-reglementaire-entre-plusieurs-grandes-regions-du-monde
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des strategies variees qui refletent des priorites et des cultures juridiques distinctes.
tags: [regulation, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la responsabilite juridique en cas de dommage cause par un systeme autonome
slug: le-role-de-la-responsabilite-juridique-en-cas-de-dommage-cause-par-un-systeme-autonome
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Une question complexe qui interroge qui doit repondre des consequences d'une decision automatisee.
tags: [regulation, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les interdictions specifiques de certains usages jugés trop risques de l'intelligence artificielle
slug: les-interdictions-specifiques-de-certains-usages-juges-trop-risques-de-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des limites claires posees face a des applications considerees comme dangereuses pour les droits fondamentaux.
tags: [regulation, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role des comites d'ethique dans l'accompagnement du developpement responsable de l'intelligence artificielle
slug: le-role-des-comites-d-ethique-dans-l-accompagnement-du-developpement-responsable-de-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des instances consultatives qui aident a anticiper les consequences ethiques d'une nouvelle technologie.
tags: [regulation, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les sanctions prevues en cas de non-respect des reglementations sur l'intelligence artificielle
slug: les-sanctions-prevues-en-cas-de-non-respect-des-reglementations-sur-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des consequences juridiques destinees a inciter les entreprises a se conformer aux exigences legales.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la cooperation internationale dans l'harmonisation des regles sur l'intelligence artificielle
slug: le-role-de-la-cooperation-internationale-dans-l-harmonisation-des-regles-sur-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un effort de coordination necessaire face a des technologies qui depassent facilement les frontieres.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les consultations publiques organisees avant l'adoption de nouvelles lois sur l'intelligence artificielle
slug: les-consultations-publiques-organisees-avant-l-adoption-de-nouvelles-lois-sur-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Une demarche democratique qui associe la societe civile a l'elaboration du cadre juridique.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la protection des donnees personnelles dans la regulation de l'intelligence artificielle
slug: le-role-de-la-protection-des-donnees-personnelles-dans-la-regulation-de-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un lien etroit entre deux cadres juridiques qui se renforcent mutuellement.
tags: [regulation, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les debats sur la regulation de l'intelligence artificielle generative et ses usages creatifs
slug: les-debats-sur-la-regulation-de-l-intelligence-artificielle-generative-et-ses-usages-creatifs
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des discussions specifiques liees aux enjeux particuliers de ces technologies recentes.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des organismes de normalisation technique dans la regulation de l'intelligence artificielle
slug: le-role-des-organismes-de-normalisation-technique-dans-la-regulation-de-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des institutions qui definissent des standards techniques complementaires aux lois generales.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les obligations d'information des utilisateurs face a un systeme d'intelligence artificielle
slug: les-obligations-d-information-des-utilisateurs-face-a-un-systeme-d-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Une exigence qui garantit que les personnes sachent qu'elles interagissent avec une machine.
tags: [regulation, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role du droit de la concurrence dans l'encadrement des grandes entreprises d'intelligence artificielle
slug: le-role-du-droit-de-la-concurrence-dans-l-encadrement-des-grandes-entreprises-d-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Une dimension economique de la regulation qui vise a preserver un marche equitable.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les propositions de moratoire temporaire sur certains developpements d'intelligence artificielle avancee
slug: les-propositions-de-moratoire-temporaire-sur-certains-developpements-d-intelligence-artificielle-avancee
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Des appels a une pause reflexion face a des progres juges potentiellement risques.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role des sandbox reglementaires dans l'experimentation encadree de nouvelles technologies
slug: le-role-des-sandbox-reglementaires-dans-l-experimentation-encadree-de-nouvelles-technologies
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un espace controle qui permet de tester une innovation avant son deploiement complet.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les debats parlementaires autour de l'adoption des premieres grandes lois sur l'intelligence artificielle
slug: les-debats-parlementaires-autour-de-l-adoption-des-premieres-grandes-lois-sur-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Un processus legislatif qui a mobilise de nombreux acteurs aux interets parfois divergents.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la societe civile dans l'influence sur la regulation de l'intelligence artificielle
slug: le-role-de-la-societe-civile-dans-l-influence-sur-la-regulation-de-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Une participation citoyenne qui pese de plus en plus dans les decisions publiques sur ce sujet.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les defis d'application pratique des reglementations face a l'evolution rapide des technologies
slug: les-defis-d-application-pratique-des-reglementations-face-a-l-evolution-rapide-des-technologies
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Une difficulte reelle ou la loi peine parfois a suivre le rythme des innovations techniques.
tags: [regulation]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: L'impact de l'intelligence artificielle sur la transformation de certains metiers
slug: l-impact-de-l-intelligence-artificielle-sur-la-transformation-de-certains-metiers
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une evolution qui modifie profondement les taches quotidiennes de nombreux professionnels.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle dans l'automatisation de taches repetitives au travail
slug: le-role-de-l-intelligence-artificielle-dans-l-automatisation-de-taches-repetitives-au-travail
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une liberation de temps qui permet aux travailleurs de se concentrer sur des activites plus complexes.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les nouveaux metiers crees par le developpement de l'intelligence artificielle
slug: les-nouveaux-metiers-crees-par-le-developpement-de-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Des professions inedites qui n'existaient pas avant l'essor de ces technologies.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la formation continue face aux transformations liees a l'intelligence artificielle
slug: le-role-de-la-formation-continue-face-aux-transformations-liees-a-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une necessite croissante pour que les travailleurs adaptent leurs competences aux nouveaux outils.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les craintes liees a la disparition de certains emplois du fait de l'intelligence artificielle
slug: les-craintes-liees-a-la-disparition-de-certains-emplois-du-fait-de-l-intelligence-artificielle
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une inquietude legitime qui accompagne historiquement chaque grande vague d'automatisation.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle comme outil d'assistance plutot que de remplacement du travailleur
slug: le-role-de-l-intelligence-artificielle-comme-outil-d-assistance-plutot-que-de-remplacement-du-travailleur
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une perspective qui envisage la technologie comme un complement aux competences humaines.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les usages de l'intelligence artificielle dans l'education et l'apprentissage personnalise
slug: les-usages-de-l-intelligence-artificielle-dans-l-education-et-l-apprentissage-personnalise
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une application qui adapte le contenu pedagogique aux besoins specifiques de chaque eleve.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Comment l'intelligence artificielle aide-t-elle les personnes aveugles ou sourdes ?
slug: comment-l-intelligence-artificielle-aide-t-elle-les-personnes-aveugles-ou-sourdes
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Des applications utilisent l'intelligence artificielle pour décrire à voix haute ce que
  filme un téléphone, lire un texte ou reconnaître des billets. D'autres transforment la
  parole en texte en temps réel pour les personnes sourdes. Ces outils rendent les personnes
  plus autonomes, mais peuvent se tromper.
tags: [travail-et-usages]
sources:
  - title: "Seeing AI"
    url: "https://en.wikipedia.org/wiki/Seeing_AI"
    publisher: "Wikipedia"
  - title: "Be My Eyes"
    url: "https://en.wikipedia.org/wiki/Be_My_Eyes"
    publisher: "Wikipedia"
  - title: "Live Transcribe"
    url: "https://en.wikipedia.org/wiki/Live_Transcribe"
    publisher: "Wikipedia"
quiz:
  - question: "Que fait l'application Seeing AI de Microsoft ?"
    options:
      - "Elle décrit à voix haute ce que filme la caméra"
      - "Elle traduit le chant des oiseaux"
      - "Elle recharge le téléphone"
    answer: 1
    explanation: >
      Seeing AI utilise la caméra du téléphone pour reconnaître du texte, des objets ou
      des personnes, puis les décrit à voix haute.
  - question: "Comment fonctionnait Be My Eyes à ses débuts ?"
    options:
      - "Avec un robot qui accompagne la personne"
      - "Avec des bénévoles voyants joints par appel vidéo"
      - "Avec des lunettes spéciales"
    answer: 2
    explanation: >
      Une personne aveugle filme ce qui l'entoure avec son téléphone, et un bénévole qui
      parle la même langue l'aide en direct.
  - question: "En quelle année Be My Eyes a-t-il ajouté un assistant d'IA ?"
    options:
      - "En 1995"
      - "En 2012"
      - "En 2023"
    answer: 3
    explanation: >
      En mars 2023, Be My Eyes a lancé Be My AI, un assistant basé sur le modèle GPT-4.
  - question: "Que fait l'application Live Transcribe de Google ?"
    options:
      - "Elle écrit en direct ce que disent les gens"
      - "Elle compose de la musique"
      - "Elle lit les codes-barres"
    answer: 1
    explanation: >
      Live Transcribe transforme la parole en texte en temps réel, pour aider les
      personnes sourdes ou malentendantes.
lastVerified: 2026-10-09
status: published
---

## En bref

Des applications utilisent l'intelligence artificielle pour décrire à voix haute ce que filme un téléphone, lire un texte ou reconnaître des billets. D'autres transforment la parole en texte en temps réel pour les personnes sourdes. Ces outils rendent les personnes plus autonomes, mais peuvent se tromper.

## Des yeux dans le téléphone

Pour une personne aveugle ou malvoyante, lire un menu, trouver la bonne boîte de conserve ou reconnaître un billet peut être difficile. Des applications utilisent l'intelligence artificielle pour l'aider.

Seeing AI a été lancée par Microsoft le 12 juillet 2017. Elle utilise la caméra du téléphone. Elle lit à voix haute du texte imprimé ou écrit à la main. Elle décrit une scène, signale les personnes présentes et reconnaît des billets de plusieurs monnaies, dont l'euro. Elle peut aussi lire un code-barres pour identifier un produit, ou dire la couleur d'un vêtement.

## Des bénévoles, puis une IA

Be My Eyes a été présentée en 2012 et lancée en 2015. Au départ, l'application ne contenait pas d'IA. Une personne aveugle filme ce qui l'entoure avec son téléphone. Un bénévole voyant, qui parle la même langue, reçoit l'appel et l'aide en direct. L'application compte plus de 10 millions de bénévoles et environ 1 million d'utilisateurs aveugles ou malvoyants.

En mars 2023, Be My Eyes a ajouté Be My AI, un assistant basé sur le modèle de langage GPT-4. L'utilisateur envoie une photo et reçoit une description. Il peut ensuite poser des questions, par exemple sur la couleur d'un pull ou le contenu d'un plat. En quelques semaines, l'assistant a été utilisé un million de fois.

## Des sous-titres pour la vraie vie

Pour les personnes sourdes ou malentendantes, suivre une conversation peut être compliqué. Live Transcribe, une application de Google sortie le 4 février 2019, écrit en direct ce que disent les gens autour. Elle utilise la reconnaissance de la parole par apprentissage automatique. Elle fonctionne dans des dizaines de langues. Elle signale aussi certains sons, comme des applaudissements, des rires ou un sifflement.

## Utile, mais pas parfait

Ces outils rendent les personnes plus autonomes au quotidien. Ils ne remplacent pas tout. Une IA peut mal lire un texte, se tromper sur un objet ou mal entendre un mot dans un endroit bruyant. Pour une information importante, comme la dose d'un médicament, il vaut mieux vérifier avec une autre méthode ou une autre personne.

## À retenir

- Des applications comme Seeing AI, lancée par Microsoft en 2017, décrivent à voix haute ce que filme le téléphone.
- Be My Eyes met en relation des personnes aveugles avec plus de 10 millions de bénévoles voyants.
- Depuis mars 2023, Be My Eyes propose aussi un assistant d'IA basé sur GPT-4.
- Live Transcribe, sortie en 2019, écrit en direct les paroles pour les personnes sourdes ou malentendantes.
- Ces outils rendent plus autonome, mais ils peuvent se tromper sur des informations importantes.

---
type: article
title: Les usages de l'intelligence artificielle dans la creation artistique et culturelle
slug: les-usages-de-l-intelligence-artificielle-dans-la-creation-artistique-et-culturelle
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une application qui souleve a la fois de l'enthousiasme et des questions sur la place de la creation humaine.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle dans le diagnostic medical et l'aide a la decision clinique
slug: le-role-de-l-intelligence-artificielle-dans-le-diagnostic-medical-et-l-aide-a-la-decision-clinique
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une assistance precieuse qui complete l'expertise des professionnels de sante sans les remplacer.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les usages de l'intelligence artificielle dans l'agriculture et l'optimisation des rendements
slug: les-usages-de-l-intelligence-artificielle-dans-l-agriculture-et-l-optimisation-des-rendements
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une application concrete qui aide les agriculteurs a prendre des decisions plus precises.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle dans les services clients et l'assistance automatisee
slug: le-role-de-l-intelligence-artificielle-dans-les-services-clients-et-l-assistance-automatisee
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une application repandue qui traite une grande partie des demandes simples des utilisateurs.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les usages de l'intelligence artificielle dans la recherche scientifique et l'acceleration des decouvertes
slug: les-usages-de-l-intelligence-artificielle-dans-la-recherche-scientifique-et-l-acceleration-des-decouvertes
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Un outil puissant qui aide les chercheurs a analyser des donnees complexes plus rapidement.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle dans la lutte contre le changement climatique
slug: le-role-de-l-intelligence-artificielle-dans-la-lutte-contre-le-changement-climatique
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une application prometteuse pour optimiser l'usage des ressources et anticiper certains phenomenes.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les inquietudes liees a la dependance croissante aux outils d'intelligence artificielle au travail
slug: les-inquietudes-liees-a-la-dependance-croissante-aux-outils-d-intelligence-artificielle-au-travail
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une reflexion necessaire sur l'equilibre entre efficacite et maintien des competences humaines.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle dans la securite et la prevention des risques industriels
slug: le-role-de-l-intelligence-artificielle-dans-la-securite-et-la-prevention-des-risques-industriels
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une surveillance renforcee qui aide a anticiper et a prevenir des incidents avant qu'ils ne surviennent.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les usages de l'intelligence artificielle dans les administrations publiques
slug: les-usages-de-l-intelligence-artificielle-dans-les-administrations-publiques
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une modernisation des services qui vise a simplifier certaines demarches pour les citoyens.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle dans l'evolution des metiers de la creation de contenu
slug: le-role-de-l-intelligence-artificielle-dans-l-evolution-des-metiers-de-la-creation-de-contenu
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une transformation qui touche particulierement les professions liees a l'ecriture et a la conception visuelle.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les debats sur la juste remuneration des travailleurs dont les donnees ont servi a entrainer un modele
slug: les-debats-sur-la-juste-remuneration-des-travailleurs-dont-les-donnees-ont-servi-a-entrainer-un-modele
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une question emergente liee a la valeur economique creee a partir de contenus humains existants.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle dans l'amelioration de l'accessibilite des services numeriques
slug: le-role-de-l-intelligence-artificielle-dans-l-amelioration-de-l-accessibilite-des-services-numeriques
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une contribution qui facilite l'usage de la technologie pour un public plus large et diversifie.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les usages de l'intelligence artificielle dans le domaine de la securite publique et leurs limites ethiques
slug: les-usages-de-l-intelligence-artificielle-dans-le-domaine-de-la-securite-publique-et-leurs-limites-ethiques
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une application sensible qui necessite un encadrement particulierement rigoureux.
tags: [travail-et-usages]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role du dialogue social dans l'accompagnement des transformations liees a l'intelligence artificielle en entreprise
slug: le-role-du-dialogue-social-dans-l-accompagnement-des-transformations-liees-a-l-intelligence-artificielle-en-entreprise
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  Une concertation necessaire entre employeurs et salaries face a ces changements profonds.
tags: [travail-et-usages, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le principe general de la generation de texte par intelligence artificielle
slug: le-principe-general-de-la-generation-de-texte-par-intelligence-artificielle
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une capacite qui permet a un modele de produire du texte coherent a partir d'une simple instruction.
tags: [ia-generative, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Comment une IA fabrique-t-elle une image à partir d'une simple phrase ?
slug: comment-une-ia-fabrique-t-elle-une-image-a-partir-d-une-simple-phrase
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Beaucoup d'IA qui créent des images sont des modèles de diffusion. Elles partent d'une image
  remplie de bruit, comme la neige d'une vieille télévision, puis enlèvent ce bruit petit à
  petit. La phrase écrite par l'utilisateur guide chaque étape.
tags: [ia-generative]
sources:
  - title: "Diffusion model"
    url: "https://en.wikipedia.org/wiki/Diffusion_model"
    publisher: "Wikipedia"
  - title: "Stable Diffusion"
    url: "https://fr.wikipedia.org/wiki/Stable_Diffusion"
    publisher: "Wikipédia"
  - title: "Stable Diffusion"
    url: "https://en.wikipedia.org/wiki/Stable_Diffusion"
    publisher: "Wikipedia"
quiz:
  - question: "Par quoi commence un modèle de diffusion pour créer une image ?"
    options:
      - "Par un dessin fait par un humain"
      - "Par une photo trouvée sur Internet"
      - "Par une image remplie de bruit au hasard"
    answer: 3
    explanation: >
      Le modèle part d'une image de bruit pur, puis la nettoie étape par étape.
  - question: "Que fait-on aux images pendant l'entraînement ?"
    options:
      - "On leur ajoute du bruit peu à peu"
      - "On les imprime"
      - "On les découpe en morceaux de puzzle"
    answer: 1
    explanation: >
      On abîme les images en ajoutant du bruit étape par étape. Le réseau apprend à
      deviner le bruit ajouté pour pouvoir l'enlever.
  - question: "Combien de paires image-texte contient la base LAION-5B ?"
    options:
      - "5 000"
      - "Environ 5 milliards"
      - "Environ 5 millions"
    answer: 2
    explanation: >
      LAION-5B contient environ 5 milliards de paires image-texte récupérées sur le Web.
  - question: "Quand Stable Diffusion a-t-il été rendu public ?"
    options:
      - "Le 22 août 2022"
      - "En 1977"
      - "En 2005"
    answer: 1
    explanation: >
      Stable Diffusion a été publié le 22 août 2022 par l'entreprise Stability AI.
lastVerified: 2026-10-09
status: published
---

## En bref

Beaucoup d'IA qui créent des images sont des modèles de diffusion. Elles partent d'une image remplie de bruit, comme la neige d'une vieille télévision, puis enlèvent ce bruit petit à petit. La phrase écrite par l'utilisateur guide chaque étape.

## Apprendre à nettoyer une image

Pour créer des images, beaucoup d'IA utilisent un modèle de diffusion. L'idée est surprenante : on apprend à l'IA à nettoyer des images abîmées.

Pendant l'entraînement, on prend une vraie image. On lui ajoute un peu de bruit, c'est-à-dire des points de couleur au hasard, comme la neige d'une vieille télévision. Puis on en ajoute encore, étape après étape, jusqu'à ce que l'image ne soit plus qu'un brouillard de points. Un réseau de neurones apprend à faire le chemin inverse. À chaque étape, il devine quel bruit a été ajouté pour pouvoir l'enlever.

## Créer à partir de rien

Une fois entraîné, le modèle peut inventer une image. Il part d'une image remplie de bruit pur, tiré au hasard. Il estime le bruit présent et en retire une partie. Puis il recommence, encore et encore. Peu à peu, des formes apparaissent, puis des détails. À la fin, il reste une image nette qui n'existait nulle part.

Plus on fait d'étapes, plus le calcul prend de temps.

## La phrase sert de guide

Pour que l'image corresponde à une phrase, le modèle utilise un encodeur de texte. C'est un autre réseau qui transforme les mots en une liste de nombres. À chaque étape de nettoyage, ces nombres orientent le réseau. Si la phrase parle d'« un chat sur la Lune », il enlève le bruit de façon à faire apparaître un chat et un paysage lunaire.

Pour apprendre le lien entre les mots et les images, ces modèles ont vu énormément d'exemples. La base LAION-5B, par exemple, contient environ 5 milliards de paires image-texte récupérées sur le Web.

## Un exemple connu

Les modèles de diffusion ont été présentés en 2015. Une amélioration importante a été publiée en 2020. Stable Diffusion, de l'entreprise Stability AI, a été publié le 22 août 2022. Ses premières versions créaient des images de 512 sur 512 pixels. Pour aller plus vite, il ne travaille pas directement sur les pixels, mais sur une version compressée de l'image. Il peut tourner sur un ordinateur personnel équipé d'une carte graphique de milieu de gamme.

## À retenir

- Beaucoup d'IA qui créent des images sont des modèles de diffusion.
- Pendant l'entraînement, on ajoute du bruit aux images et le réseau apprend à l'enlever.
- Pour créer une image, le modèle part de bruit pur et le retire petit à petit.
- Un encodeur de texte transforme la phrase en nombres qui guident chaque étape.
- Stable Diffusion, publié le 22 août 2022, peut tourner sur un ordinateur personnel avec une bonne carte graphique.

---
type: article
title: Le role des instructions precises dans l'obtention de meilleurs resultats generatifs
slug: le-role-des-instructions-precises-dans-l-obtention-de-meilleurs-resultats-generatifs
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une competence pratique qui ameliore significativement la qualite des contenus produits par un modele.
tags: [ia-generative, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les usages de l'intelligence artificielle generative dans la creation de musique originale
slug: les-usages-de-l-intelligence-artificielle-generative-dans-la-creation-de-musique-originale
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une application qui compose des morceaux entiers a partir de simples parametres definis par l'utilisateur.
tags: [ia-generative, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle generative dans l'assistance a l'ecriture creative
slug: le-role-de-l-intelligence-artificielle-generative-dans-l-assistance-a-l-ecriture-creative
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Un outil qui aide les auteurs a explorer des idees ou a surmonter des blocages dans leur travail.
tags: [ia-generative, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les videos generees par intelligence artificielle et les progres recents de cette technologie
slug: les-videos-generees-par-intelligence-artificielle-et-les-progres-recents-de-cette-technologie
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une capacite emergente qui permet de creer des sequences animees a partir de descriptions textuelles.
tags: [ia-generative, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle generative dans le prototypage rapide de nouveaux designs
slug: le-role-de-l-intelligence-artificielle-generative-dans-le-prototypage-rapide-de-nouveaux-designs
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une application qui accelere considerablement les phases initiales de conception d'un produit.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les questions de droits d'auteur souleves par les contenus produits par intelligence artificielle generative
slug: les-questions-de-droits-d-auteur-souleves-par-les-contenus-produits-par-intelligence-artificielle-generative
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Un debat juridique actuel sur la propriete des oeuvres creees avec l'aide de ces outils.
tags: [ia-generative, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle generative dans la personnalisation de contenus marketing
slug: le-role-de-l-intelligence-artificielle-generative-dans-la-personnalisation-de-contenus-marketing
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une application commerciale qui adapte automatiquement des messages a differents publics.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Comment fabrique-t-on un deepfake, et pourquoi faut-il s'en méfier ?
slug: comment-fabrique-t-on-un-deepfake-et-pourquoi-faut-il-s-en-mefier
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Un deepfake, ou hypertrucage, est une image, une vidéo ou un son modifié ou fabriqué par une
  intelligence artificielle. Il peut faire dire ou faire à une personne des choses qu'elle n'a
  jamais dites ni faites. Il sert parfois à tromper, à harceler ou à escroquer.
tags: [ia-generative]
sources:
  - title: "Deepfake"
    url: "https://fr.wikipedia.org/wiki/Deepfake"
    publisher: "Wikipédia"
  - title: "Deepfake"
    url: "https://en.wikipedia.org/wiki/Deepfake"
    publisher: "Wikipedia"
  - title: "Artificial Intelligence Act"
    url: "https://en.wikipedia.org/wiki/Artificial_Intelligence_Act"
    publisher: "Wikipedia"
quiz:
  - question: "Quel est le mot français officiel pour « deepfake » ?"
    options:
      - "Hypertrucage"
      - "Photocopie"
      - "Mégafiltre"
    answer: 1
    explanation: >
      Le terme officiel en français est « hypertrucage ».
  - question: "D'où vient le mot « deepfake » ?"
    options:
      - "D'un film de 1990"
      - "Du pseudonyme d'un utilisateur du site Reddit, en 2017"
      - "D'une loi européenne"
    answer: 2
    explanation: >
      Fin 2017, un utilisateur de Reddit qui se faisait appeler « deepfakes » a partagé
      des vidéos truquées. Le nom est resté.
  - question: "Dans un réseau antagoniste génératif, que fait le discriminateur ?"
    options:
      - "Il fabrique les fausses images"
      - "Il colorie les images"
      - "Il essaie de distinguer les vraies images des fausses"
    answer: 3
    explanation: >
      Le générateur fabrique des images, le discriminateur cherche à les démasquer. Chacun
      pousse l'autre à progresser.
  - question: "Pourquoi détecter les deepfakes est-il difficile ?"
    options:
      - "Parce que les techniques de fabrication s'améliorent sans cesse"
      - "Parce que les vidéos sont trop courtes"
      - "Parce que personne ne cherche à les détecter"
    answer: 1
    explanation: >
      Les chercheurs parlent d'une cible qui bouge : dès qu'un défaut est repéré, les
      fabricants de deepfakes le corrigent.
lastVerified: 2026-10-09
status: published
---

## En bref

Un deepfake, ou hypertrucage, est une image, une vidéo ou un son modifié ou fabriqué par une intelligence artificielle. Il peut faire dire ou faire à une personne des choses qu'elle n'a jamais dites ni faites. Il sert parfois à tromper, à harceler ou à escroquer.

## Un trucage fait par une IA

Un deepfake est une image, une vidéo ou un son qui a été modifié ou fabriqué grâce à l'intelligence artificielle. En français, le mot officiel est « hypertrucage ». On peut par exemple coller le visage d'une personne sur le corps d'une autre, ou imiter sa voix.

Le mot est apparu fin 2017. Un utilisateur du site Reddit, qui se faisait appeler « deepfakes », partageait des vidéos où des visages de célébrités avaient été collés sur d'autres corps. En janvier 2018, une application, FakeApp, a rendu ce trucage facile pour tout le monde.

## Comment on le fabrique

Pour échanger deux visages, on utilise souvent un autoencodeur. C'est un réseau de neurones qui apprend à résumer un visage en une liste de nombres. Une autre partie du réseau apprend à redessiner un visage précis à partir de ce résumé. On résume le visage de la personne filmée, puis on le redessine avec les traits d'une autre personne. Le nouveau visage garde la même expression et les mêmes mouvements.

On ajoute souvent un réseau antagoniste génératif. Il met deux réseaux en compétition. Le générateur fabrique de fausses images. Le discriminateur essaie de distinguer les vraies des fausses. Chacun pousse l'autre à progresser, et les faux deviennent de plus en plus réalistes.

## Pourquoi c'est dangereux

Les deepfakes servent parfois à fabriquer des images intimes de personnes sans leur accord. Ils servent aussi à répandre de fausses informations. En 2022, par exemple, un deepfake du président ukrainien Volodymyr Zelensky a circulé. Ils peuvent aider des escrocs à se faire passer pour quelqu'un d'autre, ou servir à harceler.

## Les repérer et les encadrer

Des chercheurs ont mis au point des logiciels qui cherchent des défauts : un clignement des yeux irrégulier, des reflets étranges dans les yeux, un éclairage incohérent. Mais les techniques de fabrication changent sans cesse. Un défaut repéré aujourd'hui peut disparaître demain. Le meilleur réflexe reste de vérifier d'où vient une vidéo avant de la croire ou de la partager.

Les lois commencent à s'adapter. Le règlement européen sur l'IA, entré en vigueur le 1er août 2024, impose des obligations de transparence pour les systèmes qui créent ou modifient des images, des sons ou des vidéos, comme les deepfakes. Depuis 2020, la Chine exige aussi que les contenus fabriqués soient signalés.

## À retenir

- Un deepfake, ou hypertrucage, est une image, une vidéo ou un son fabriqué ou modifié par une IA.
- Le mot vient du pseudonyme d'un utilisateur de Reddit, fin 2017.
- On les fabrique avec des autoencodeurs et des réseaux antagonistes génératifs, où un générateur et un discriminateur s'affrontent.
- Ils servent parfois à désinformer, à escroquer ou à harceler.
- Les défauts qui trahissent un deepfake changent sans cesse : il faut vérifier la source d'une vidéo.

---
type: article
title: Le role de l'intelligence artificielle generative dans l'assistance a la programmation informatique
slug: le-role-de-l-intelligence-artificielle-generative-dans-l-assistance-a-la-programmation-informatique
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Un outil qui aide les developpeurs a ecrire, corriger et comprendre du code plus rapidement.
tags: [ia-generative, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les avatars virtuels generes par intelligence artificielle et leurs usages croissants
slug: les-avatars-virtuels-generes-par-intelligence-artificielle-et-leurs-usages-croissants
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une application qui cree des representations numeriques personnalisees pour divers contextes.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle generative dans le doublage et la synthese vocale
slug: le-role-de-l-intelligence-artificielle-generative-dans-le-doublage-et-la-synthese-vocale
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une technologie qui produit des voix artificielles de plus en plus proches de la parole humaine.
tags: [ia-generative, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les limites actuelles de la coherence factuelle des contenus produits par intelligence artificielle generative
slug: les-limites-actuelles-de-la-coherence-factuelle-des-contenus-produits-par-intelligence-artificielle-generative
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une faiblesse importante ou le modele peut produire des affirmations plausibles mais fausses.
tags: [ia-generative, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle generative dans la conception de jeux video
slug: le-role-de-l-intelligence-artificielle-generative-dans-la-conception-de-jeux-video
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une application qui aide a creer plus rapidement des environnements, des personnages ou des scenarios.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les debats sur l'authenticite et l'originalite des contenus produits par intelligence artificielle generative
slug: les-debats-sur-l-authenticite-et-l-originalite-des-contenus-produits-par-intelligence-artificielle-generative
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une reflexion culturelle sur la valeur et la signification d'une creation assistee par la machine.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle generative dans la traduction et l'adaptation de contenus multimedia
slug: le-role-de-l-intelligence-artificielle-generative-dans-la-traduction-et-l-adaptation-de-contenus-multimedia
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une application qui facilite l'acces a des contenus originellement produits dans une autre langue.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les outils de detection de contenus generes par intelligence artificielle et leurs limites
slug: les-outils-de-detection-de-contenus-generes-par-intelligence-artificielle-et-leurs-limites
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Des methodes encore imparfaites qui tentent d'identifier ce qui a ete produit par une machine.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de l'intelligence artificielle generative dans la restauration et la colorisation d'archives anciennes
slug: le-role-de-l-intelligence-artificielle-generative-dans-la-restauration-et-la-colorisation-d-archives-anciennes
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une application qui redonne vie a des documents historiques degrades ou incomplets.
tags: [ia-generative]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les usages educatifs de l'intelligence artificielle generative pour creer du contenu pedagogique personnalise
slug: les-usages-educatifs-de-l-intelligence-artificielle-generative-pour-creer-du-contenu-pedagogique-personnalise
categoryPath: intelligence-artificielle/modeles-de-langage/ia-generative
summary: >
  Une application qui adapte automatiquement des exercices ou des explications au niveau de chaque apprenant.
tags: [ia-generative, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le phenomene des hallucinations dans les modeles de langage
slug: le-phenomene-des-hallucinations-dans-les-modeles-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une tendance a produire des informations fausses avec une apparence de certitude trompeuse.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Pourquoi une IA conversationnelle ne connaît-elle pas les dernières nouvelles ?
slug: pourquoi-une-ia-conversationnelle-ne-connait-elle-pas-les-dernieres-nouvelles
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Un modèle de langage apprend à partir d'un grand ensemble de textes réunis jusqu'à une
  certaine date. Après cette date limite des connaissances, il ne sait rien de ce qui s'est
  passé. Pour répondre sur l'actualité, il doit aller chercher des informations récentes, par
  exemple sur le Web.
tags: [limites-et-erreurs]
sources:
  - title: "Knowledge cutoff"
    url: "https://en.wikipedia.org/wiki/Knowledge_cutoff"
    publisher: "Wikipedia"
  - title: "Retrieval-augmented generation"
    url: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation"
    publisher: "Wikipedia"
  - title: "Large language model"
    url: "https://en.wikipedia.org/wiki/Large_language_model"
    publisher: "Wikipedia"
quiz:
  - question: "Qu'est-ce que la date limite des connaissances d'un modèle de langage ?"
    options:
      - "La date à laquelle il cessera de fonctionner"
      - "La date après laquelle il n'a plus reçu de nouveaux textes pour apprendre"
      - "La date de naissance de son inventeur"
    answer: 2
    explanation: >
      C'est le moment au-delà duquel le modèle n'a pas été entraîné sur de nouvelles
      données.
  - question: "Quelle était la date limite des connaissances de GPT-4 ?"
    options:
      - "Septembre 2021"
      - "Janvier 2000"
      - "Décembre 2025"
    answer: 1
    explanation: >
      La date limite des connaissances de GPT-4 était septembre 2021.
  - question: "Que fait la génération augmentée par récupération ?"
    options:
      - "Elle efface la mémoire du modèle"
      - "Elle réentraîne le modèle chaque minute"
      - "Elle va chercher des documents avant de répondre"
    answer: 3
    explanation: >
      Le modèle récupère des textes dans des documents ou sur le Web, puis s'en sert pour
      répondre.
  - question: "Une IA qui cherche sur le Web peut-elle encore se tromper ?"
    options:
      - "Non, jamais"
      - "Oui, elle peut mal comprendre ou inventer autour des sources"
      - "Seulement le dimanche"
    answer: 2
    explanation: >
      Même avec des sources exactes, le modèle peut mal les interpréter ou ajouter des
      erreurs. Il faut vérifier.
lastVerified: 2026-10-09
status: published
---

## En bref

Un modèle de langage apprend à partir d'un grand ensemble de textes réunis jusqu'à une certaine date. Après cette date limite des connaissances, il ne sait rien de ce qui s'est passé. Pour répondre sur l'actualité, il doit aller chercher des informations récentes, par exemple sur le Web.

## Un apprentissage qui s'arrête

Un modèle de langage, comme ceux des assistants conversationnels, apprend en lisant une énorme quantité de textes. Ces textes sont réunis jusqu'à une certaine date. Ensuite, l'entraînement se fait une fois pour toutes. Ce que le modèle sait reste figé.

Le moment après lequel il n'a plus reçu de nouveaux textes s'appelle la date limite des connaissances. Tout ce qui s'est passé après lui est inconnu : un nouveau champion, une élection, une découverte.

## Des exemples de dates

Chaque modèle a sa propre date limite. Pour GPT-4, c'était septembre 2021. Pour GPT-4 Turbo, décembre 2023. Pour GPT-5, septembre 2024. Un modèle est souvent utilisé pendant des mois, voire des années, après cette date. L'écart entre ce qu'il sait et le monde réel grandit donc avec le temps.

Il y a un autre piège. Les chercheurs ont remarqué que les connaissances d'un modèle ne s'arrêtent pas net à sa date limite. Sur certains sujets, il y avait peu de textes récents au moment de l'entraînement. Le modèle peut alors être encore plus en retard sur ces sujets.

## Le risque de répondre à côté

Quand on pose une question sur un fait récent, un modèle sans accès à l'actualité ne peut pas connaître la bonne réponse. Il peut le dire. Mais il peut aussi donner une information dépassée comme si elle était actuelle. Il peut même inventer une réponse qui a l'air juste.

## Aller chercher l'information

Pour réduire ce problème, on relie souvent le modèle à des outils. La génération augmentée par récupération, présentée dans un article de 2020, en est un exemple. Avant de répondre, le système va chercher des textes dans des documents, une base de données ou sur le Web. Puis le modèle s'appuie sur ces textes pour écrire sa réponse.

Cette méthode coûte bien moins cher que de réentraîner tout le modèle : il suffit de mettre à jour les documents. Elle aide aussi le modèle à rester proche des faits. Mais elle ne supprime pas toutes les erreurs. Le modèle peut mal comprendre une source, ou inventer des détails autour d'elle. Il reste utile de regarder la date et la source d'une information avant d'y croire.

## À retenir

- Un modèle de langage apprend sur des textes réunis jusqu'à une date précise, sa date limite des connaissances.
- Après cette date, il ne sait rien de ce qui s'est passé, sauf s'il va chercher l'information ailleurs.
- La date limite de GPT-4 était septembre 2021.
- La génération augmentée par récupération va chercher des documents récents avant de répondre.
- Même avec des sources, une IA peut se tromper : il faut vérifier la date et l'origine de l'information.

---
type: article
title: Les difficultes des modeles de langage a effectuer des calculs mathematiques precis
slug: les-difficultes-des-modeles-de-langage-a-effectuer-des-calculs-mathematiques-precis
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une faiblesse frequente liee a la nature meme du fonctionnement de ces systemes.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role du contexte limite dans les capacites de raisonnement d'un modele de langage
slug: le-role-du-contexte-limite-dans-les-capacites-de-raisonnement-d-un-modele-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une contrainte technique qui restreint la quantite d'informations que le modele peut prendre en compte simultanement.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les biais culturels et linguistiques dans les reponses produites par les modeles de langage
slug: les-biais-culturels-et-linguistiques-dans-les-reponses-produites-par-les-modeles-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une tendance a mieux refleter certaines cultures que d'autres selon la composition des donnees d'entrainement.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la verification humaine face aux limites des modeles de langage
slug: le-role-de-la-verification-humaine-face-aux-limites-des-modeles-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une precaution essentielle qui rappelle l'importance de ne pas faire une confiance aveugle a ces outils.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les difficultes des modeles de langage a comprendre l'ironie et le second degre
slug: les-difficultes-des-modeles-de-langage-a-comprendre-l-ironie-et-le-second-degre
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une limite de comprehension qui peut mener a des interpretations litterales inappropriees.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la sensibilite aux formulations dans les reponses variables d'un modele de langage
slug: le-role-de-la-sensibilite-aux-formulations-dans-les-reponses-variables-d-un-modele-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Un phenomene ou une legere reformulation de la question peut donner une reponse tres differente.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les limites des modeles de langage face a des raisonnements logiques complexes
slug: les-limites-des-modeles-de-langage-face-a-des-raisonnements-logiques-complexes
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une faiblesse qui se manifeste particulierement sur des problemes necessitant plusieurs etapes de deduction.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la transparence sur les limites d'un modele dans la confiance des utilisateurs
slug: le-role-de-la-transparence-sur-les-limites-d-un-modele-dans-la-confiance-des-utilisateurs
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une communication honnete necessaire pour eviter une confiance excessive envers ces outils.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les difficultes des modeles de langage a gerer des informations tres recentes
slug: les-difficultes-des-modeles-de-langage-a-gerer-des-informations-tres-recentes
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une limite naturelle liee au delai entre l'entrainement du modele et son utilisation effective.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role des tests adverses dans la decouverte des failles d'un modele de langage
slug: le-role-des-tests-adverses-dans-la-decouverte-des-failles-d-un-modele-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une methode qui cherche deliberement des questions capables de faire echouer le systeme.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les limites des modeles de langage dans la comprehension d'un contexte culturel specifique
slug: les-limites-des-modeles-de-langage-dans-la-comprehension-d-un-contexte-culturel-specifique
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une difficulte a saisir pleinement des nuances propres a une culture particuliere.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la coherence interne dans l'evaluation de la fiabilite d'une reponse generee
slug: le-role-de-la-coherence-interne-dans-l-evaluation-de-la-fiabilite-d-une-reponse-generee
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Un critere utile mais imparfait qui n'exclut pas la presence d'informations fausses bien presentees.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les difficultes des modeles de langage a reconnaitre leurs propres erreurs sans aide exterieure
slug: les-difficultes-des-modeles-de-langage-a-reconnaitre-leurs-propres-erreurs-sans-aide-exterieure
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une limite qui souligne l'importance de la verification par une source independante.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la recherche continue dans la reduction progressive des erreurs des modeles de langage
slug: le-role-de-la-recherche-continue-dans-la-reduction-progressive-des-erreurs-des-modeles-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Un effort scientifique constant qui vise a ameliorer la fiabilite de ces systemes au fil du temps.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les limites des modeles de langage face a des questions necessitant une expertise tres specialisee
slug: les-limites-des-modeles-de-langage-face-a-des-questions-necessitant-une-expertise-tres-specialisee
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une prudence necessaire dans des domaines ou une erreur pourrait avoir des consequences graves.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la citation des sources dans l'amelioration de la fiabilite percue d'un modele de langage
slug: le-role-de-la-citation-des-sources-dans-l-amelioration-de-la-fiabilite-percue-d-un-modele-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une pratique qui aide l'utilisateur a verifier lui-meme l'exactitude d'une information fournie.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les difficultes des modeles de langage a maintenir une coherence sur de tres longues conversations
slug: les-difficultes-des-modeles-de-langage-a-maintenir-une-coherence-sur-de-tres-longues-conversations
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une limite technique liee a la capacite du systeme a se souvenir des echanges precedents.
tags: [limites-et-erreurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de l'esprit critique de l'utilisateur face aux reponses produites par un modele de langage
slug: le-role-de-l-esprit-critique-de-l-utilisateur-face-aux-reponses-produites-par-un-modele-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Une competence essentielle qui reste indispensable malgre les progres constants de ces technologies.
tags: [limites-et-erreurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le principe general de l'architecture transformeur en intelligence artificielle
slug: le-principe-general-de-l-architecture-transformeur-en-intelligence-artificielle
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une innovation majeure qui a transforme la maniere dont les machines traitent le langage.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role du mecanisme d'attention dans le fonctionnement des transformeurs
slug: le-role-du-mecanisme-d-attention-dans-le-fonctionnement-des-transformeurs
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Un composant cle qui permet au modele de ponderer l'importance de chaque mot dans son contexte.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: La difference entre les transformeurs et les architectures de reseaux de neurones precedentes
slug: la-difference-entre-les-transformeurs-et-les-architectures-de-reseaux-de-neurones-precedentes
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une avancee technique qui a permis de traiter le langage de maniere plus efficace et plus rapide.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role du traitement en parallele dans l'efficacite des transformeurs par rapport aux methodes anteriereures
slug: le-role-du-traitement-en-parallele-dans-l-efficacite-des-transformeurs-par-rapport-aux-methodes-anteriereures
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une capacite qui accelere considerablement l'entrainement sur de grands volumes de texte.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les grands modeles de langage bases sur l'architecture transformeur
slug: les-grands-modeles-de-langage-bases-sur-l-architecture-transformeur
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Des systemes de grande taille qui ont demontre des capacites remarquables de comprehension et de generation.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'encodage positionnel dans la comprehension de l'ordre des mots par un transformeur
slug: le-role-de-l-encodage-positionnel-dans-la-comprehension-de-l-ordre-des-mots-par-un-transformeur
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Un element technique qui permet au modele de tenir compte de la position de chaque mot dans une phrase.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les transformeurs appliques au-dela du texte, notamment aux images et au son
slug: les-transformeurs-appliques-au-dela-du-texte-notamment-aux-images-et-au-son
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une extension de cette architecture a d'autres types de donnees que le seul langage ecrit.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role du pre-entrainement massif dans la construction des grands modeles bases sur les transformeurs
slug: le-role-du-pre-entrainement-massif-dans-la-construction-des-grands-modeles-bases-sur-les-transformeurs
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une premiere phase generale qui precede l'adaptation du modele a des taches plus specifiques.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les transformeurs et l'evolution rapide de leur taille au fil des recentes annees
slug: les-transformeurs-et-l-evolution-rapide-de-leur-taille-au-fil-des-recentes-annees
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une croissance impressionnante du nombre de parametres qui a accompagne les progres de ces modeles.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'affinage specifique dans l'adaptation d'un modele transformeur a une tache particuliere
slug: le-role-de-l-affinage-specifique-dans-l-adaptation-d-un-modele-transformeur-a-une-tache-particuliere
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une seconde etape qui specialise un modele generaliste pour un usage plus precis.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les transformeurs multimodaux capables de traiter simultanement texte, image et son
slug: les-transformeurs-multimodaux-capables-de-traiter-simultanement-texte-image-et-son
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une avancee recente qui combine plusieurs types d'information au sein d'un meme modele.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la couche d'attention multi-tetes dans la richesse de comprehension d'un transformeur
slug: le-role-de-la-couche-d-attention-multi-tetes-dans-la-richesse-de-comprehension-d-un-transformeur
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Un mecanisme qui permet au modele d'examiner un texte sous plusieurs angles simultanement.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les defis lies au cout de calcul de l'entrainement des grands modeles transformeurs
slug: les-defis-lies-au-cout-de-calcul-de-l-entrainement-des-grands-modeles-transformeurs
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une contrainte pratique importante liee aux ressources considerables necessaires a ces entrainements.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role des transformeurs dans les progres recents de la traduction automatique
slug: le-role-des-transformeurs-dans-les-progres-recents-de-la-traduction-automatique
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une amelioration significative de la qualite grace a une meilleure prise en compte du contexte global.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Les versions allegees de transformeurs concues pour fonctionner sur des appareils moins puissants
slug: les-versions-allegees-de-transformeurs-concues-pour-fonctionner-sur-des-appareils-moins-puissants
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une adaptation necessaire pour rendre ces technologies accessibles au-dela des grands centres de calcul.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Le role de la recherche academique dans les ameliorations continues de l'architecture transformeur
slug: le-role-de-la-recherche-academique-dans-les-ameliorations-continues-de-l-architecture-transformeur
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Un travail scientifique constant qui affine progressivement le fonctionnement de ces modeles.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les transformeurs et leur capacite a generer du texte coherent sur de longues sequences
slug: les-transformeurs-et-leur-capacite-a-generer-du-texte-coherent-sur-de-longues-sequences
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une performance remarquable par rapport aux limites des architectures qui les ont precedes.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de l'open source dans la diffusion et l'amelioration collective des modeles transformeurs
slug: le-role-de-l-open-source-dans-la-diffusion-et-l-amelioration-collective-des-modeles-transformeurs
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Un partage qui a accelere considerablement les progres et l'adoption de cette technologie.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les transformeurs appliques a la prediction de structures biologiques complexes
slug: les-transformeurs-appliques-a-la-prediction-de-structures-biologiques-complexes
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une application scientifique majeure qui a aide a resoudre des problemes longtemps consideres tres difficiles.
tags: [transformeurs, essentiel-reconstruction]
priority: 2
essentiel: true
status: planned
---

À rédiger.

---
type: article
title: Le role de la comprehension du contexte long dans les capacites avancees des transformeurs recents
slug: le-role-de-la-comprehension-du-contexte-long-dans-les-capacites-avancees-des-transformeurs-recents
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Une amelioration continue qui permet au modele de traiter des documents de plus en plus longs.
tags: [transformeurs]
priority: 3
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Comment fonctionnaient les systèmes experts, ces IA faites de règles ?
slug: comment-fonctionnaient-les-systemes-experts-ces-ia-faites-de-regles
categoryPath: intelligence-artificielle/apprentissage-automatique
summary: >
  Un système expert est un programme qui imite le raisonnement d'un spécialiste. Il contient
  des centaines de règles du type « si... alors... », écrites à la main avec l'aide d'experts.
  Ces systèmes ont connu leur grande époque dans les années 1980, avant l'essor de
  l'apprentissage automatique.
tags: [systemes-experts, regles, reconstruction]
sources:
  - title: "Système expert"
    url: "https://fr.wikipedia.org/wiki/Syst%C3%A8me_expert"
    publisher: "Wikipédia"
  - title: "Mycin"
    url: "https://en.wikipedia.org/wiki/Mycin"
    publisher: "Wikipedia"
  - title: "Expert system"
    url: "https://en.wikipedia.org/wiki/Expert_system"
    publisher: "Wikipedia"
quiz:
  - question: "Quelle forme ont les règles d'un système expert ?"
    options:
      - "Des dessins"
      - "Si... alors..."
      - "Des notes de musique"
    answer: 2
    explanation: >
      Chaque règle dit : si certaines conditions sont vraies, alors on peut conclure
      quelque chose.
  - question: "Quelle partie d'un système expert applique les règles aux faits ?"
    options:
      - "Le moteur d'inférence"
      - "L'écran"
      - "La base de faits"
    answer: 1
    explanation: >
      Le moteur d'inférence combine les faits connus et les règles pour en tirer de
      nouvelles conclusions.
  - question: "À quoi servait MYCIN ?"
    options:
      - "À piloter des avions"
      - "À jouer aux échecs"
      - "À trouver la bactérie d'une infection et proposer un antibiotique"
    answer: 3
    explanation: >
      MYCIN identifiait les bactéries de certaines infections graves et recommandait un
      antibiotique avec sa dose.
  - question: "Quel était le grand problème des systèmes experts ?"
    options:
      - "Ils étaient trop petits"
      - "Il était très difficile de recueillir et d'entretenir les connaissances des experts"
      - "Ils ne savaient pas compter"
    answer: 2
    explanation: >
      Les experts ont peu de temps, et leur savoir est dur à mettre en règles. Plus il y
      avait de règles, plus le système était difficile à entretenir.
lastVerified: 2026-10-09
status: published
---

## En bref

Un système expert est un programme qui imite le raisonnement d'un spécialiste. Il contient des centaines de règles du type « si... alors... », écrites à la main avec l'aide d'experts. Ces systèmes ont connu leur grande époque dans les années 1980, avant l'essor de l'apprentissage automatique.

## Mettre un expert dans un ordinateur

Un médecin, un chimiste ou un garagiste sait résoudre des problèmes grâce à son expérience. Dans les années 1960 et 1970, des chercheurs ont eu une idée : écrire ce savoir sous forme de règles, puis laisser un ordinateur raisonner avec.

Le résultat s'appelle un système expert. C'est un programme qui imite la façon dont un spécialiste prend une décision. Les systèmes experts ont été parmi les premiers vrais succès de l'intelligence artificielle.

## Des faits, des règles et un moteur

Un système expert a trois parties. La base de faits contient ce que l'on sait sur le cas à traiter, par exemple les symptômes d'un malade. La base de règles contient le savoir des experts. Chaque règle a la forme « si... alors... » : si le patient a de la fièvre et telle analyse est positive, alors telle bactérie est probable.

La troisième partie est le moteur d'inférence. C'est lui qui raisonne. Il regarde les faits, cherche les règles qui s'appliquent, et en tire de nouvelles conclusions. Ces conclusions deviennent de nouveaux faits, qui déclenchent d'autres règles.

Contrairement à un réseau de neurones, un système expert n'apprend pas à partir d'exemples. Toutes ses règles sont écrites à la main, avec l'aide des spécialistes.

## MYCIN, un médecin en règles

Le premier système expert connu, DENDRAL, date de 1965. Il aidait des chimistes à identifier des molécules. Au début des années 1970, à l'université Stanford, Edward Shortliffe a créé MYCIN. Ce programme cherchait quelle bactérie causait une infection grave, comme une méningite. Il proposait ensuite un antibiotique et une dose adaptée au poids du patient.

MYCIN contenait environ 600 règles. Lors d'un test, ses propositions ont été jugées acceptables dans 65 % des cas. Cinq médecins de l'université obtenaient entre 42,5 % et 62,5 %. Pourtant, MYCIN n'a jamais été utilisé à l'hôpital : il fallait taper toutes les données à la main, sur un gros ordinateur, à une époque sans ordinateurs personnels.

## Gloire et limites

Dans les années 1980, les systèmes experts ont connu un grand succès. Deux tiers des 500 plus grandes entreprises américaines les utilisaient. Mais ils avaient un gros défaut. Recueillir le savoir des experts prenait beaucoup de temps, et ce savoir était difficile à transformer en règles. Plus le nombre de règles grandissait, plus le système devenait difficile à entretenir et fragile face aux cas imprévus. L'apprentissage automatique, qui tire ses règles des données, a ensuite pris le relais.

## À retenir

- Un système expert imite le raisonnement d'un spécialiste avec des règles « si... alors... ».
- Il contient une base de faits, une base de règles et un moteur d'inférence qui raisonne.
- Ses règles sont écrites à la main avec des experts : il n'apprend pas à partir d'exemples.
- MYCIN, créé à Stanford au début des années 1970, utilisait environ 600 règles pour soigner des infections.
- Les systèmes experts ont connu leur âge d'or dans les années 1980, puis ont été freinés par la difficulté de recueillir et d'entretenir les connaissances.

---
type: article
title: Comment un robot peut-il apprendre à agir dans des situations qu'il n'a jamais vues ?
slug: comment-un-robot-peut-il-apprendre-a-agir-dans-des-situations-qu-il-n-a-jamais-vues
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  L'IA physique relie perception, décision et action dans le monde réel. Les modèles vision-
  langage-action transforment une image et une consigne écrite en gestes de robot.
tags: [travail-et-usages]
sources:
  - title: "Physical AI"
    url: "https://en.wikipedia.org/wiki/Physical_AI"
    publisher: "Wikipedia"
  - title: "Vision-language-action model"
    url: "https://en.wikipedia.org/wiki/Vision-language-action_model"
    publisher: "Wikipedia"
  - title: "Robotique"
    url: "https://fr.wikipedia.org/wiki/Robotique"
    publisher: "Wikipédia"
quiz:
  - question: "Que fait un système d'IA physique ?"
    options:
      - "Il ne fait que dessiner"
      - "Il remplace l'électricité"
      - "Il perçoit, planifie et agit dans le monde réel"
    answer: 3
    explanation: >
      L'IA physique désigne des systèmes d'IA qui perçoivent, raisonnent et agissent dans le
      monde réel, à l'échelle humaine.
  - question: "Pourquoi un robot classique s'adapte-t-il mal ?"
    options:
      - "Il est trop petit"
      - "Il a peur du noir"
      - "Il suit un programme sans avoir appris à gérer les situations nouvelles"
    answer: 3
    explanation: >
      Un robot classique s'adapte mal à une situation nouvelle, car on ne lui a pas donné la
      possibilité d'apprendre.
  - question: "Que reçoit un modèle vision-langage-action ?"
    options:
      - "Seulement de l'électricité"
      - "Une image et une consigne écrite"
      - "Un colis"
    answer: 2
    explanation: >
      Un modèle vision-langage-action reçoit une image et une consigne écrite, puis produit une
      suite d'actions de robot.
  - question: "Pourquoi la sécurité est-elle cruciale ?"
    options:
      - "Une panne peut causer des dégâts ou des blessures"
      - "Parce que les robots n'ont pas de couleur"
      - "Parce que les robots sont lents à gagner"
    answer: 1
    explanation: >
      La sécurité exige une supervision et des mécanismes de secours, car une panne peut causer
      des dégâts ou des blessures.
lastVerified: 2026-09-30
status: published
---

## En bref

L'IA physique relie perception, décision et action dans le monde réel. Les modèles vision-langage-action transforment une image et une consigne écrite en gestes de robot.

## L'IA qui agit dans le monde réel

L'IA physique désigne des systèmes d'IA qui perçoivent, raisonnent et agissent dans le monde réel, à l'échelle humaine. Ils fonctionnent en boucle : percevoir, planifier, puis agir avec des moteurs et des actionneurs. Ils utilisent des caméras, des lidars, des radars et des capteurs tactiles pour représenter leur environnement. On les trouve dans les voitures autonomes, les robots d'entrepôt, les robots humanoïdes et les robots agricoles.

## Apprendre à s'adapter

Un robot classique s'adapte mal à une situation nouvelle, car on ne lui a pas donné la possibilité d'apprendre. Des techniques d'apprentissage permettent à des robots d'améliorer leur comportement et de faire face à des situations imprévues. Un modèle vision-langage-action reçoit une image et une consigne écrite, puis produit une suite d'actions de robot. Il s'appuie sur un modèle de vision et de langage préentraîné, qui transforme images et texte en représentations communes. Un décodeur d'actions convertit ensuite ces représentations en commandes pour les articulations du robot. On l'entraîne avec des démonstrations de robots, de la téléopération par des humains ou de la simulation, associées à des consignes écrites. RT-2, de Google DeepMind, a lancé cette approche ; OpenVLA est un modèle ouvert ; pi0 produit des gestes continus.

## Ce qui reste difficile

Il reste des défis : capteurs incomplets, évitement des collisions, calcul en temps réel, énergie limitée et passage de la simulation au monde réel. La sécurité exige une supervision et des mécanismes de secours, car une panne peut causer des dégâts ou des blessures.

## À retenir

- L'IA physique désigne des systèmes d'IA qui perçoivent, raisonnent et agissent dans le monde réel, à l'échelle humaine.
- Ils fonctionnent en boucle : percevoir, planifier, puis agir avec des moteurs et des actionneurs.
- Un robot classique s'adapte mal à une situation nouvelle, car on ne lui a pas donné la possibilité d'apprendre.
- Un modèle vision-langage-action reçoit une image et une consigne écrite, puis produit une suite d'actions de robot.
- La sécurité exige une supervision et des mécanismes de secours, car une panne peut causer des dégâts ou des blessures.

---
type: article
title: La fenêtre de contexte d'un modèle de langage
slug: la-fenetre-de-contexte-d-un-modele-de-langage
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Sujet de veille de septembre 2026 à documenter avec des sources vérifiables : la fenêtre de contexte d'un modèle de langage.
tags: [transformeurs, veille-2026-09]
priority: 0.83
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les modèles de raisonnement et la réflexion étape par étape
slug: les-modeles-de-raisonnement-et-la-reflexion-etape-par-etape
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Sujet de veille de septembre 2026 à documenter avec des sources vérifiables : les modèles de raisonnement et la réflexion étape par étape.
tags: [transformeurs, veille-2026-09]
priority: 0.83
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Comment une IA peut-elle comprendre à la fois une image et une phrase ?
slug: comment-une-ia-peut-elle-comprendre-a-la-fois-une-image-et-une-phrase
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Un modèle vision-langage lit des images et du texte. Un encodeur transforme l'image en jetons,
  que le modèle de langage traite comme des mots, pour décrire ou répondre à des questions.
tags: [transformeurs]
sources:
  - title: "Vision-language model"
    url: "https://en.wikipedia.org/wiki/Vision-language_model"
    publisher: "Wikipedia"
  - title: "Multimodal learning"
    url: "https://en.wikipedia.org/wiki/Multimodal_learning"
    publisher: "Wikipedia"
  - title: "Vision-language-action model"
    url: "https://en.wikipedia.org/wiki/Vision-language-action_model"
    publisher: "Wikipedia"
quiz:
  - question: "Que peut faire un modèle de vision et de langage ?"
    options:
      - "Décrire une image ou répondre à une question sur elle"
      - "Seulement imprimer"
      - "Éteindre la lumière"
    answer: 1
    explanation: >
      Il sert à décrire une image, à répondre à des questions sur une image ou à retrouver une
      image à partir d'un texte.
  - question: "Comment le modèle de langage reçoit-il une image ?"
    options:
      - "Sous forme de jetons d'image"
      - "Par courrier"
      - "En la mangeant"
    answer: 1
    explanation: >
      Les caractéristiques de l'image sont converties en jetons d'image, mêlés aux jetons de
      texte pendant l'entraînement.
  - question: "Qu'apprend CLIP ?"
    options:
      - "Des représentations communes aux images et au texte"
      - "Des recettes de cuisine"
      - "La météo"
    answer: 1
    explanation: >
      CLIP a marqué un tournant : il apprend des représentations communes aux images et au
      texte.
  - question: "Quelle difficulté pose la combinaison de plusieurs types de données ?"
    options:
      - "Relier les parties qui se correspondent et fusionner l'information"
      - "Trouver assez d'encre"
      - "Trouver du papier"
    answer: 1
    explanation: >
      Deux difficultés : l'alignement, qui relie les parties des différents types de données, et
      la fusion de leurs informations.
lastVerified: 2026-09-30
status: published
---

## En bref

Un modèle vision-langage lit des images et du texte. Un encodeur transforme l'image en jetons, que le modèle de langage traite comme des mots, pour décrire ou répondre à des questions.

## Plusieurs types de données

Un modèle de vision et de langage est un système d'IA qui peut interpréter et produire à la fois des images et du texte. Il fait partie de l'apprentissage multimodal, qui combine plusieurs types de données : texte, audio, images ou vidéo. Il sert à décrire une image, à répondre à des questions sur une image ou à retrouver une image à partir d'un texte.

## Comment une image devient du texte pour le modèle

Il combine un encodeur de vision, un modèle de langage et une couche de liaison entre les deux. Les caractéristiques de l'image sont converties en jetons d'image, mêlés aux jetons de texte pendant l'entraînement. CLIP a marqué un tournant : il apprend des représentations communes aux images et au texte. GPT-4V, Gemini et Claude 3 intègrent la vision ; LLaVA et d'autres sont des modèles ouverts.

## Difficultés et prolongements

Deux difficultés : l'alignement, qui relie les parties des différents types de données, et la fusion de leurs informations. Combiner des jeux de données différents peut aussi poser des risques pour la vie privée. Ces modèles servent de base à des modèles qui pilotent des robots à partir d'une image et d'une consigne.

## À retenir

- Un modèle de vision et de langage est un système d'IA qui peut interpréter et produire à la fois des images et du texte.
- Il sert à décrire une image, à répondre à des questions sur une image ou à retrouver une image à partir d'un texte.
- Il combine un encodeur de vision, un modèle de langage et une couche de liaison entre les deux.
- Les caractéristiques de l'image sont converties en jetons d'image, mêlés aux jetons de texte pendant l'entraînement.
- Deux difficultés : relier les parties des images et du texte, puis fusionner leurs informations.

---
type: article
title: Que peut faire l'IA dans un tribunal, et qu'est-ce qui est interdit ?
slug: que-peut-faire-l-ia-dans-un-tribunal-et-qu-est-ce-qui-est-interdit
categoryPath: intelligence-artificielle/ethique-et-societe/travail-et-usages
summary: >
  La justice prédictive analyse des décisions passées pour estimer l'issue d'un litige. Elle est
  encadrée : profilage des magistrats interdit en France, usages à haut risque surveillés en
  Europe.
tags: [travail-et-usages]
sources:
  - title: "Justice prédictive"
    url: "https://fr.wikipedia.org/wiki/Justice_pr%C3%A9dictive"
    publisher: "Wikipédia"
  - title: "Article 33, loi n° 2019-222 du 23 mars 2019"
    url: "https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000038261761"
    publisher: "Légifrance"
  - title: "COMPAS (software)"
    url: "https://en.wikipedia.org/wiki/COMPAS_(software)"
    publisher: "Wikipedia"
  - title: "Artificial Intelligence Act"
    url: "https://en.wikipedia.org/wiki/Artificial_Intelligence_Act"
    publisher: "Wikipedia"
  - title: "AI Act : cadre réglementaire pour l'intelligence artificielle"
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
    publisher: "Commission européenne"
  - title: "Hallucination (artificial intelligence)"
    url: "https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)"
    publisher: "Wikipedia"
quiz:
  - question: "Que fait la justice prédictive ?"
    options:
      - "Elle remplace tous les juges"
      - "Elle imprime les lois"
      - "Elle analyse des décisions passées pour estimer l'issue d'un litige"
    answer: 3
    explanation: >
      La justice prédictive désigne des outils qui analysent de nombreuses décisions de justice
      pour estimer l'issue probable d'un litige.
  - question: "Que ne peut-on pas faire avec l'identité des magistrats en France ?"
    options:
      - "Évaluer, comparer ou prédire leurs pratiques"
      - "La lire dans un journal"
      - "La citer dans un jugement"
    answer: 1
    explanation: >
      En France, les données d'identité des magistrats ne peuvent pas être réutilisées pour
      évaluer, comparer ou prédire leurs pratiques professionnelles.
  - question: "Que reprochait-on au logiciel COMPAS ?"
    options:
      - "D'être trop bavard"
      - "D'être trop lumineux"
      - "Un biais selon l'origine ethnique et un algorithme secret"
    answer: 3
    explanation: >
      Une enquête de ProPublica a conclu qu'il était biaisé selon l'origine ethnique, ce que son
      éditeur a contesté.
  - question: "Que doit-on faire, selon l'Europe, pour l'IA à haut risque ?"
    options:
      - "Supprimer tous les tribunaux"
      - "La laisser sans contrôle"
      - "Renforcer la surveillance et le contrôle humain"
    answer: 3
    explanation: >
      Le règlement européen sur l'IA classe parmi les usages à haut risque ceux qui touchent la
      justice et les forces de l'ordre.
lastVerified: 2026-09-30
status: published
---

## En bref

La justice prédictive analyse des décisions passées pour estimer l'issue d'un litige. Elle est encadrée : profilage des magistrats interdit en France, usages à haut risque surveillés en Europe.

## Ce que fait la justice prédictive

La justice prédictive désigne des outils qui analysent de nombreuses décisions de justice pour estimer l'issue probable d'un litige. Ils s'appuient sur le traitement automatique du langage pour repérer les éléments clés des décisions, comme les dates et les montants. Leurs partisans espèrent réduire les délais et favoriser les règlements négociés. Leurs critiques craignent des décisions uniformisées, qui laisseraient moins de place à l'interprétation, et une dépendance excessive de magistrats surchargés.

## Les règles en France

En France, les données d'identité des magistrats ne peuvent pas être réutilisées pour évaluer, comparer ou prédire leurs pratiques professionnelles.

## Un exemple américain : COMPAS

Aux États-Unis, le logiciel COMPAS évalue la probabilité qu'un prévenu récidive ; il est utilisé dans plusieurs juridictions. Une enquête de ProPublica a conclu qu'il était biaisé selon l'origine ethnique, ce que son éditeur a contesté. Son algorithme relève du secret commercial, ce qui empêche un examen public et pose une question de droits de la défense. La Cour suprême du Wisconsin a autorisé les juges à tenir compte de ses scores, à condition d'un avertissement sur ses limites.

## Les règles européennes

Le règlement européen sur l'IA classe parmi les usages à haut risque ceux qui touchent la justice et les forces de l'ordre. Il interdit les systèmes qui évaluent le risque qu'une personne commette une infraction en se fondant uniquement sur son profilage. Des avocats ont été sanctionnés pour avoir cité de fausses décisions de justice inventées par une IA. Dans les domaines à enjeux élevés, une vérification humaine reste nécessaire.

## À retenir

- La justice prédictive désigne des outils qui analysent de nombreuses décisions de justice pour estimer l'issue probable d'un litige.
- En France, les données d'identité des magistrats ne peuvent pas être réutilisées pour évaluer, comparer ou prédire leurs pratiques professionnelles.
- Une enquête de ProPublica a conclu qu'il était biaisé selon l'origine ethnique, ce que son éditeur a contesté.
- Le règlement européen sur l'IA classe parmi les usages à haut risque ceux qui touchent la justice et les forces de l'ordre.
- Il interdit les systèmes qui évaluent le risque qu'une personne commette une infraction en se fondant uniquement sur son profilage.

---
type: article
title: Les tests de performance des IA et leurs limites
slug: les-tests-de-performance-des-ia-et-leurs-limites
categoryPath: intelligence-artificielle/modeles-de-langage/limites-et-erreurs
summary: >
  Sujet de veille de septembre 2026 à documenter avec des sources vérifiables : les tests de performance des IA et leurs limites.
tags: [limites-et-erreurs, veille-2026-09]
priority: 0.82
essentiel: false
status: planned
---

À rédiger.

---
type: article
title: Les pratiques interdites par le règlement européen sur l'IA
slug: les-pratiques-interdites-par-le-reglement-europeen-sur-l-ia
categoryPath: intelligence-artificielle/ethique-et-societe/regulation
summary: >
  Sujet de veille de septembre 2026 à documenter avec des sources vérifiables : les pratiques interdites par le règlement européen sur l'IA.
tags: [regulation, veille-2026-09]
priority: 0.81
essentiel: false
status: planned
---

À rédiger.
