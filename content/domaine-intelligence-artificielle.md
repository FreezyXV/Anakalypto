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
tags: [transformeurs, essentiel-reconstruction]
priority: 1
essentiel: true
status: planned
---

À rédiger.

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
