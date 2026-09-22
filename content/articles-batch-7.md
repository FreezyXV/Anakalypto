---
type: article
title: Les actionneurs en robotique
slug: actionneurs-en-robotique
categoryPath: technologies-et-ingenierie/robotique/actionneurs
summary: >
  Les actionneurs convertissent une énergie électrique, hydraulique ou pneumatique en
  mouvement mécanique, et constituent l'élément qui permet à un robot de se déplacer ou de
  manipuler des objets.
tags: [robotique, actionneurs, moteurs, ingenierie]
relatedArticles: [capteurs-perception-robotique]
sources:
  - title: "Robot (technology)"
    url: "https://www.britannica.com/technology/robot-technology"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
lastVerified: 2026-09-21
status: published
---

## Résumé

Un actionneur est le composant d'un robot qui convertit une source d'énergie en mouvement
mécanique, permettant au robot de se déplacer ou d'agir physiquement sur son environnement.
De la même manière que les muscles produisent le mouvement chez les êtres vivants, les
actionneurs constituent la partie « motrice » d'un système robotique, complétant les
capteurs, qui lui permettent de percevoir son environnement, et les systèmes de contrôle, qui
coordonnent ses actions.

## Trois grandes familles d'actionneurs

Les actionneurs électriques, les plus répandus, incluent les moteurs à courant continu, les
moteurs pas à pas, qui se déplacent par incréments angulaires précis, les servomoteurs,
capables de maintenir une position donnée avec précision, et les moteurs sans balais
(brushless), plus durables et efficaces. Les actionneurs hydrauliques, qui utilisent la
pression d'un fluide, développent des forces très importantes et équipent notamment les
robots industriels lourds. Les actionneurs pneumatiques, qui utilisent l'air comprimé,
offrent une grande rapidité de réaction et sont notamment utilisés dans certains muscles
artificiels souples.

## Des technologies émergentes

Au-delà de ces trois grandes familles, des technologies plus récentes se développent : les
actionneurs piézoélectriques, qui exploitent la déformation de certains matériaux sous
l'effet d'un champ électrique pour produire des mouvements extrêmement précis à petite
échelle, et les alliages à mémoire de forme, des matériaux capables de reprendre une forme
prédéfinie sous l'effet de la chaleur, ouvrant la voie à des actionneurs plus compacts et
silencieux pour certaines applications spécialisées.

## Les caractéristiques qui définissent un actionneur

Le choix d'un actionneur pour une application robotique donnée dépend de plusieurs
caractéristiques : le couple qu'il peut délivrer, sa vitesse maximale, sa précision de
positionnement et sa densité de puissance, c'est-à-dire la puissance qu'il peut développer
rapportée à sa taille ou à son poids. Les actionneurs sont généralement associés à des
réducteurs mécaniques, comme les réducteurs harmoniques (harmonic drive), qui permettent
d'obtenir un couple élevé avec un moteur compact, ainsi qu'à des systèmes d'asservissement,
qui contrôlent en continu la position, la vitesse ou le couple délivré.

## Faits clés

- Trois grandes familles d'actionneurs : électriques, hydrauliques, pneumatiques.
- Technologies émergentes : actionneurs piézoélectriques, alliages à mémoire de forme.
- Caractéristiques clés : couple, vitesse, précision, densité de puissance.
- Les réducteurs harmoniques (harmonic drive) permettent d'obtenir un couple élevé avec un
  moteur compact.

[Emplacement image : bras robotique articulé montrant ses différents actionneurs, légende et
texte alternatif à fournir ultérieurement.]

## Articles liés

- Les capteurs et la perception en robotique

---

---
type: article
title: Les capteurs et la perception en robotique
slug: capteurs-perception-robotique
categoryPath: technologies-et-ingenierie/robotique/perception
summary: >
  La perception robotique combine caméras, LiDAR, radar et centrales inertielles, traités par
  des méthodes d'apprentissage profond, pour permettre à un robot de percevoir et de
  cartographier son environnement en temps réel.
tags: [robotique, perception, LiDAR, capteurs, SLAM]
relatedArticles: [actionneurs-en-robotique]
sources:
  - title: "Robot (technology)"
    url: "https://www.britannica.com/technology/robot-technology"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
lastVerified: 2026-09-21
status: published
---

## Résumé

La perception, en robotique, désigne l'ensemble des processus par lesquels un robot acquiert
et interprète des informations sur son environnement, afin d'y adapter son comportement.
Cette fonction s'appuie sur une combinaison de capteurs physiques et de méthodes de
traitement des données, souvent fondées aujourd'hui sur l'apprentissage profond, pour
transformer des signaux bruts en une représentation exploitable du monde environnant.

## Les principaux types de capteurs

Plusieurs types de capteurs se complètent dans les systèmes robotiques modernes. Les caméras,
associées à des techniques de vision par ordinateur, permettent d'identifier des objets, des
obstacles ou des personnes à partir d'images. Le LiDAR (télédétection par laser) mesure les
distances en analysant le temps de retour d'impulsions laser réfléchies, produisant un nuage
de points en trois dimensions particulièrement précis pour cartographier un environnement. Le
radar, moins précis mais plus robuste dans des conditions météorologiques dégradées,
complète souvent ces deux technologies. Les capteurs à ultrasons mesurent des distances plus
courtes, tandis que les centrales inertielles (IMU) mesurent l'orientation et
l'accélération du robot lui-même, et les encodeurs mesurent précisément le mouvement de ses
propres actionneurs.

## Le traitement des données par apprentissage profond

Le traitement de ces données brutes s'appuie de plus en plus sur des méthodes
d'apprentissage profond, en particulier des réseaux de neurones convolutifs, capables de
détecter et de segmenter automatiquement des objets ou des zones d'intérêt à partir d'images
ou de nuages de points, sans qu'il soit nécessaire de programmer explicitement des règles de
reconnaissance pour chaque situation possible.

## La cartographie et la localisation simultanées

Une technique centrale de la perception robotique est le SLAM (localisation et cartographie
simultanées), qui permet à un robot de construire une carte de son environnement inconnu
tout en déterminant simultanément sa propre position au sein de cette carte, un défi
particulièrement délicat lorsque ni la carte ni la position du robot ne sont connues au
départ. La fusion de plusieurs capteurs, qui combine les forces respectives de chaque
technologie pour compenser leurs faiblesses individuelles, constitue également un enjeu
technique majeur de la robotique moderne.

## Faits clés

- Capteurs principaux : caméras, LiDAR, radar, ultrasons, centrales inertielles (IMU),
  encodeurs.
- Le LiDAR produit un nuage de points 3D précis par mesure du temps de retour d'impulsions
  laser.
- Le traitement moderne s'appuie sur des réseaux de neurones convolutifs (apprentissage
  profond).
- Le SLAM permet de cartographier un environnement inconnu tout en s'y localisant
  simultanément.

## À retenir

La robustesse de la perception face à des conditions dégradées (faible luminosité,
intempéries, environnements très changeants) reste l'un des défis techniques majeurs de la
robotique, ce qui explique pourquoi la plupart des systèmes robotiques avancés combinent
plusieurs types de capteurs complémentaires plutôt que de s'appuyer sur une seule technologie.

[Emplacement image : véhicule robotisé équipé de capteurs LiDAR et de caméras, légende et
texte alternatif à fournir ultérieurement.]

## Articles liés

- Les actionneurs en robotique

---

---
type: article
title: Le graphène et les nanomatériaux
slug: graphene-et-nanomateriaux
categoryPath: technologies-et-ingenierie/nanotechnologies/nanomateriaux
summary: >
  Isolé en 2004 par Andre Geim et Konstantin Novoselov, le graphène, un feuillet de carbone
  d'un seul atome d'épaisseur, environ cent fois plus résistant que l'acier, leur a valu le
  prix Nobel de physique 2010.
tags: [nanotechnologies, graphene, Nobel, nanomateriaux, Geim-Novoselov]
relatedArticles: [applications-nanotechnologies-medecine-industrie]
sources:
  - title: "The Nobel Prize in Physics 2010"
    url: "https://www.nobelprize.org/prizes/physics/2010/speedread/"
    publisher: "NobelPrize.org"
    date: "2010"
  - title: "Electric Field Effect in Atomically Thin Carbon Films"
    url: "https://www.science.org/doi/10.1126/science.1102896"
    publisher: "Novoselov et al., Science (2004)"
    date: "2004"
lastVerified: 2026-09-21
status: published
---

## Résumé

Les nanomatériaux sont des matériaux structurés à l'échelle du nanomètre (un milliardième de
mètre), une échelle à laquelle la matière présente souvent des propriétés physiques et
chimiques très différentes de celles observées à plus grande échelle. Le graphène, un
feuillet de carbone d'un seul atome d'épaisseur organisé en réseau hexagonal, en est
l'exemple le plus emblématique : isolé pour la première fois en 2004 par les physiciens Andre
Geim et Konstantin Novoselov à l'Université de Manchester, il leur a valu le prix Nobel de
physique en 2010.

## Une découverte obtenue avec du ruban adhésif

L'expérience qui a permis d'isoler le graphène pour la première fois, publiée dans la revue
Science en 2004, repose sur une méthode d'une simplicité surprenante : l'exfoliation
mécanique au ruban adhésif, qui consiste à détacher progressivement des couches de plus en
plus fines de graphite (la forme du carbone utilisée notamment dans les mines de crayon),
jusqu'à obtenir un feuillet d'un seul atome d'épaisseur. Cette méthode, accessible et peu
coûteuse, a permis une caractérisation rapide des propriétés extraordinaires de ce matériau
par de nombreux laboratoires à travers le monde.

## Des propriétés hors normes

Le graphène présente des propriétés mécaniques et électriques exceptionnelles : il serait
environ cent fois plus résistant que l'acier à masse égale, tout en étant extrêmement léger
et flexible. Sur le plan électrique, il conduit mieux que le cuivre, ses électrons se
comportant, dans certaines conditions, comme des particules quasiment dépourvues de masse,
un phénomène physique qui a également suscité un vif intérêt en physique fondamentale,
au-delà des seules applications pratiques du matériau.

## D'autres nanomatériaux emblématiques

Au-delà du graphène, d'autres nanomatériaux ont marqué le développement des nanotechnologies.
Les nanotubes de carbone, des cylindres de carbone enroulés à l'échelle nanométrique,
partagent certaines propriétés remarquables avec le graphène. Les fullerènes, des molécules
de carbone organisées en structures sphériques fermées, ont été découverts dès les années
1980. Les points quantiques (quantum dots), des nanocristaux semi-conducteurs, présentent
quant à eux des propriétés optiques réglables selon leur taille, exploitées notamment dans
certains écrans d'affichage de nouvelle génération.

## Faits clés

- Le graphène a été isolé pour la première fois en 2004 par Andre Geim et Konstantin
  Novoselov (Université de Manchester).
- Méthode utilisée : exfoliation mécanique au ruban adhésif à partir de graphite.
- Prix Nobel de physique 2010 attribué à Geim et Novoselov.
- Le graphène serait environ 100 fois plus résistant que l'acier et meilleur conducteur que
  le cuivre.

## À retenir

Un nanomètre équivaut à un milliardième de mètre (10⁻⁹ m) : à titre de comparaison, un
cheveu humain mesure environ 80 000 à 100 000 nanomètres de diamètre, ce qui donne une idée
de l'échelle extrême à laquelle opèrent les nanomatériaux comme le graphène.

[Emplacement image : structure hexagonale du graphène en représentation moléculaire, légende
et texte alternatif à fournir ultérieurement.]

## Articles liés

- Les applications médicales et industrielles des nanotechnologies

---

---
type: article
title: Les applications médicales et industrielles des nanotechnologies
slug: applications-nanotechnologies-medecine-industrie
categoryPath: technologies-et-ingenierie/nanotechnologies/applications
summary: >
  Des nanoparticules lipidiques des vaccins à ARNm aux crèmes solaires en passant par les
  batteries et la filtration de l'eau, les nanotechnologies trouvent des applications très
  diversifiées, tout en soulevant des questions encore débattues de nanotoxicologie.
tags: [nanotechnologies, medecine, applications, NIH, nanotoxicologie]
relatedArticles: [graphene-et-nanomateriaux]
sources:
  - title: "Nanotechnology"
    url: "https://www.cancer.gov/nano"
    publisher: "National Cancer Institute (NIH)"
    date: "2024"
lastVerified: 2026-09-21
status: published
---

## Résumé

Les nanotechnologies, qui manipulent la matière à l'échelle du nanomètre, trouvent des
applications concrètes dans des domaines aussi variés que la médecine, l'électronique,
l'énergie ou les cosmétiques. Cette diversité tient aux propriétés physiques et chimiques
particulières que prend la matière à cette échelle extrême, souvent très différentes de
celles observées sur des matériaux de taille ordinaire.

## Des applications médicales concrètes

En médecine, les nanotechnologies ont notamment permis le développement de systèmes de
vectorisation ciblée de médicaments, qui délivrent un traitement plus précisément à l'endroit
où il est nécessaire, réduisant ainsi les effets secondaires. L'exemple le plus connu du grand
public reste probablement celui des nanoparticules lipidiques utilisées dans les vaccins à
ARN messager développés contre la COVID-19, qui protègent et transportent l'ARN jusqu'aux
cellules cibles. Les nanotechnologies interviennent également en imagerie médicale, à travers
des agents de contraste plus précis, et dans le domaine émergent de la théranostique, qui
combine diagnostic et traitement au sein d'un même dispositif nanométrique.

## Des applications industrielles très diversifiées

Dans l'industrie, les nanotechnologies contribuent à la miniaturisation continue des
composants électroniques, notamment au sein des transistors qui équipent les processeurs
modernes. Elles permettent également de développer des matériaux composites plus légers et
plus résistants, des revêtements aux propriétés spécifiques (antibactériennes, autonettoyantes)
et des catalyseurs plus efficaces pour l'industrie chimique. Dans le domaine de l'eau, des
nanomatériaux sont utilisés pour améliorer les techniques de filtration et de dessalement.
Dans l'énergie, ils contribuent à l'amélioration des batteries et des cellules solaires.
Enfin, dans les cosmétiques, des nanoparticules de dioxyde de titane ou d'oxyde de zinc sont
couramment utilisées dans les crèmes solaires pour leur capacité à filtrer les rayons
ultraviolets.

## Un domaine de recherche encore en construction

Malgré cette diversité d'applications déjà déployées, la nanotoxicologie, c'est-à-dire
l'étude des effets potentiels des nanoparticules sur la santé humaine et sur
l'environnement, reste un domaine de recherche actif et encore incomplet. Les
réglementations encadrant l'usage des nanomatériaux, notamment le règlement européen REACH,
continuent d'évoluer à mesure que les connaissances scientifiques sur ces effets progressent.

## Faits clés

- Les nanoparticules lipidiques des vaccins à ARNm illustrent une application médicale
  concrète des nanotechnologies.
- Applications industrielles : miniaturisation électronique, matériaux composites,
  revêtements, catalyse, filtration/dessalement, batteries et cellules solaires.
- Le dioxyde de titane et l'oxyde de zinc en nanoparticules sont couramment utilisés dans les
  crèmes solaires.

## Ce qui reste débattu

La nanotoxicologie, c'est-à-dire les effets potentiels des nanoparticules sur la santé et
l'environnement, demeure un domaine de recherche actif dont les connaissances restent
incomplètes ; les réglementations encadrant leur usage, comme le règlement européen REACH,
continuent d'évoluer en conséquence.

[Emplacement image : illustration conceptuelle d'une nanoparticule vectorisant un médicament,
légende et texte alternatif à fournir ultérieurement.]

## Articles liés

- Le graphène et les nanomatériaux

---

---
type: article
title: Les grandes transformations de l'époque contemporaine
slug: grandes-transformations-epoque-contemporaine
categoryPath: sciences-humaines-et-sociales/histoire/epoque-contemporaine
summary: >
  Ouverte par la Révolution française de 1789 dans l'historiographie française, l'époque
  contemporaine a vu se succéder révolutions industrielles, décolonisation, deux guerres
  mondiales et une transition démographique sans précédent.
tags: [histoire, epoque-contemporaine, revolution-industrielle, decolonisation]
relatedArticles: []
sources:
  - title: "History of Europe"
    url: "https://www.britannica.com/topic/history-of-Europe"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
lastVerified: 2026-09-21
status: published
---

## Résumé

Dans l'historiographie française, l'époque contemporaine désigne conventionnellement la
période ouverte par la Révolution française de 1789, qui se poursuit jusqu'à nos jours. Cette
période, la plus courte des grandes divisions historiques traditionnelles (Antiquité, Moyen
Âge, époque moderne, époque contemporaine), a pourtant concentré des transformations d'une
ampleur et d'une rapidité sans précédent dans l'histoire humaine.

## Des révolutions politiques aux révolutions industrielles

L'époque contemporaine s'ouvre par une vague de révolutions atlantiques, dont la Révolution
française de 1789 et son cortège de déclarations des droits, qui bouleversent durablement les
formes traditionnelles d'organisation politique en Europe et dans les Amériques. Parallèlement,
la révolution industrielle, amorcée en Grande-Bretagne autour de 1780 avec l'essor de la
machine à vapeur, transforme radicalement les modes de production, suivie à la fin du XIXe
siècle par une seconde vague industrielle portée par l'électricité et le pétrole, qui
accélère encore davantage l'industrialisation des sociétés occidentales.

## Colonisation, guerres mondiales et décolonisation

Le XIXe et le début du XXe siècle voient l'apogée des empires coloniaux européens, dont
l'expansion territoriale et économique s'accompagne de profondes transformations, souvent
violentes, des sociétés colonisées. Les deux guerres mondiales du XXe siècle (1914-1918 et
1939-1945) marquent ensuite des ruptures majeures, tant par leur ampleur destructrice inédite
que par les recompositions géopolitiques qu'elles entraînent, ouvrant la voie, dans les
décennies suivantes, à un vaste mouvement de décolonisation qui transforme la carte politique
mondiale.

## Une transition démographique et technologique inédite

L'époque contemporaine est également marquée par une urbanisation croissante des sociétés,
une mondialisation progressive des échanges économiques et culturels, et, plus récemment, par
une révolution numérique dont l'ampleur continue de se déployer. Sur le plan démographique,
la population mondiale est passée d'environ un milliard d'habitants en 1800 à près de huit
milliards en 2022, une multiplication par huit en un peu plus de deux siècles, sans équivalent
dans l'histoire humaine antérieure.

## Faits clés

- L'époque contemporaine est conventionnellement ouverte par la Révolution française de 1789.
- Première révolution industrielle : vapeur, à partir d'environ 1780 (Grande-Bretagne).
- Deux guerres mondiales : 1914-1918 et 1939-1945.
- Population mondiale : d'environ 1 milliard en 1800 à près de 8 milliards en 2022.

## À retenir

La périodisation « époque contemporaine » à partir de 1789 reste propre à la tradition
historiographique française ; d'autres traditions nationales retiennent parfois d'autres
bornes chronologiques pour désigner la période la plus récente de l'histoire.

[Emplacement image : collage représentant plusieurs grandes transformations de l'époque
contemporaine (industrie, guerre, décolonisation), légende et texte alternatif à fournir
ultérieurement.]

---

---
type: article
title: Les processus cognitifs, mémoire et attention
slug: processus-cognitifs-memoire-attention
categoryPath: sciences-humaines-et-sociales/psychologie/cognition
summary: >
  La psychologie cognitive distingue plusieurs types de mémoire, dont une mémoire de travail
  à la capacité limitée d'environ quatre à sept éléments, et plusieurs formes d'attention qui
  filtrent en permanence les informations traitées par le cerveau.
tags: [psychologie, cognition, memoire, attention, Baddeley]
relatedArticles: [systeme-nerveux-structure-fonctionnement]
sources:
  - title: "Memory (psychology)"
    url: "https://www.britannica.com/science/memory-psychology"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
lastVerified: 2026-09-21
status: published
---

## Résumé

La psychologie cognitive étudie les processus mentaux impliqués dans le traitement de
l'information : perception, mémoire, langage, raisonnement et prise de décision. La mémoire
et l'attention, deux processus étroitement liés, occupent une place centrale dans ce domaine,
qui s'appuie de plus en plus sur les neurosciences pour relier ces phénomènes psychologiques à
leur substrat cérébral concret.

## Les différents systèmes de mémoire

Le modèle classique d'Atkinson et Shiffrin, proposé en 1968, distingue trois grands systèmes
de mémoire : la mémoire sensorielle, qui retient très brièvement les informations perçues par
les sens ; la mémoire à court terme, ou mémoire de travail, qui maintient temporairement des
informations activement traitées ; et la mémoire à long terme, qui conserve durablement des
connaissances et des souvenirs. La mémoire de travail a ensuite été affinée par le modèle
d'Alan Baddeley et Graham Hitch en 1974, qui la décrit comme un système à plusieurs
composantes plutôt qu'un simple espace de stockage unique.

## La capacité limitée de la mémoire de travail

Une découverte particulièrement influente en psychologie cognitive concerne la capacité
limitée de la mémoire de travail : le psychologue George Miller a proposé en 1956 que cette
capacité se limite à environ sept éléments, plus ou moins deux, une estimation devenue
célèbre sous le nom de « nombre magique sept ». Des travaux ultérieurs, notamment ceux de
Nelson Cowan, ont révisé cette estimation à la baisse, suggérant une capacité plus proche de
quatre éléments lorsque certaines stratégies de regroupement mental ne sont pas exploitées.

## L'attention comme mécanisme de sélection

L'attention désigne la capacité à sélectionner certaines informations parmi l'ensemble de
celles disponibles dans l'environnement, pour un traitement cognitif plus approfondi. On
distingue notamment l'attention sélective, qui filtre les informations pertinentes parmi un
flux plus large, l'attention divisée, qui répartit les ressources cognitives entre plusieurs
tâches simultanées, et l'attention soutenue, qui maintient un niveau de vigilance sur une
durée prolongée. Le modèle du filtre de Donald Broadbent, proposé en 1958, a marqué une étape
importante dans la compréhension théorique de ces mécanismes de sélection attentionnelle.

## Faits clés

- Modèle d'Atkinson-Shiffrin (1968) : mémoire sensorielle, à court terme, à long terme.
- Modèle de la mémoire de travail de Baddeley et Hitch (1974), à plusieurs composantes.
- Capacité de la mémoire de travail : environ 7±2 éléments (Miller, 1956), révisée à environ
  4 par des travaux ultérieurs (Cowan).
- Trois formes d'attention : sélective, divisée, soutenue.

## À retenir

La consolidation des souvenirs, processus par lequel une information passe d'un stockage
temporaire à une mémoire durable, implique notamment une structure cérébrale appelée
hippocampe, dont le rôle central dans la formation des souvenirs a été mis en évidence par de
nombreuses études en neurosciences.

[Emplacement image : schéma des différents systèmes de mémoire humaine, légende et texte
alternatif à fournir ultérieurement.]

## Articles liés

- Le système nerveux, structure et fonctionnement

---

---
type: article
title: Les grandes étapes du développement de l'enfant selon Piaget
slug: stades-developpement-enfant-piaget
categoryPath: sciences-humaines-et-sociales/psychologie/developpement
summary: >
  Le psychologue suisse Jean Piaget a décrit quatre stades successifs du développement
  cognitif de l'enfant, une théorie influente mais aujourd'hui nuancée par des recherches
  ultérieures qui en révisent la rigidité et l'universalité supposées.
tags: [psychologie, developpement, Piaget, enfance, cognition]
relatedArticles: [processus-cognitifs-memoire-attention]
sources:
  - title: "Jean Piaget"
    url: "https://www.britannica.com/biography/Jean-Piaget"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
lastVerified: 2026-09-21
status: published
---

## Résumé

Le psychologue suisse Jean Piaget (1896-1980) est l'auteur de l'une des théories les plus
influentes du développement cognitif de l'enfant, structurée autour de quatre stades
successifs, chacun caractérisé par des capacités de raisonnement qualitativement différentes.
Cette théorie repose sur deux processus fondamentaux, l'assimilation, qui intègre une
nouvelle information à des schémas mentaux existants, et l'accommodation, qui modifie ces
schémas pour s'adapter à une information nouvelle et inattendue.

## Le stade sensori-moteur (0-2 ans)

Durant les deux premières années de vie, l'enfant explore le monde essentiellement à travers
ses sensations et ses actions motrices. C'est durant ce stade que se développe, selon Piaget,
la notion de permanence de l'objet : la compréhension progressive qu'un objet continue
d'exister même lorsqu'il n'est plus directement perçu, une capacité qui n'est pas innée mais
se construit progressivement au cours des premiers mois de vie.

## Le stade préopératoire (2-7 ans)

Ce stade est marqué par le développement rapide du langage et de la pensée symbolique, la
capacité à faire en sorte qu'une chose (un mot, un objet, un dessin) en représente une autre.
Piaget y décrit également l'égocentrisme intellectuel de l'enfant, sa difficulté à concevoir
qu'autrui puisse percevoir une situation d'un point de vue différent du sien propre, une
caractéristique qui s'atténue progressivement en fin de stade.

## Les stades opératoire concret et opératoire formel

Entre 7 et 11 ans environ, l'enfant entre dans le stade opératoire concret, durant lequel il
acquiert la notion de conservation (comprendre par exemple qu'une quantité de liquide reste
identique lorsqu'elle est versée dans un récipient de forme différente) et développe une
logique applicable à des situations concrètes. À partir d'environ 11 ans, le stade opératoire
formel voit émerger la capacité à raisonner de manière abstraite et hypothético-déductive, y
compris sur des situations purement hypothétiques, sans nécessiter de support concret.

## Faits clés

- Quatre stades : sensori-moteur (0-2 ans), préopératoire (2-7 ans), opératoire concret
  (7-11 ans), opératoire formel (11 ans et plus).
- Deux processus fondamentaux : assimilation et accommodation.
- Concepts clés : permanence de l'objet, pensée symbolique, conservation, raisonnement
  hypothético-déductif.

## Ce qui reste débattu

Les recherches en psychologie du développement postérieures à Piaget ont nuancé sa théorie
sur plusieurs points : des travaux ultérieurs suggèrent que certaines capacités cognitives
apparaissent plus précocement que ne le pensait Piaget, et que le passage d'un stade à
l'autre est moins rigide et moins universel qu'il ne l'avait initialement décrit. Les travaux
du psychologue biélorusse Lev Vygotski, contemporain de Piaget, ont par ailleurs mis en avant
le rôle central des interactions sociales dans le développement cognitif de l'enfant, un
aspect que la théorie originelle de Piaget laissait relativement en retrait.

[Emplacement image : illustration des quatre stades du développement cognitif selon Piaget,
légende et texte alternatif à fournir ultérieurement.]

## Articles liés

- Les processus cognitifs, mémoire et attention

---

---
type: article
title: Les principes de l'offre et de la demande
slug: principes-offre-et-demande
categoryPath: sciences-humaines-et-sociales/economie/microeconomie
summary: >
  L'intersection des courbes d'offre et de demande détermine le prix et la quantité
  d'équilibre d'un marché, un cadre théorique formalisé par Alfred Marshall à la fin du
  XIXe siècle et fondé sur l'intuition de la « main invisible » d'Adam Smith.
tags: [economie, microeconomie, offre-et-demande, Adam-Smith, Marshall]
relatedArticles: []
sources:
  - title: "Supply and demand"
    url: "https://www.britannica.com/money/supply-and-demand"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
lastVerified: 2026-09-21
status: published
---

## Résumé

Le modèle de l'offre et de la demande constitue l'un des outils les plus fondamentaux de la
microéconomie pour expliquer la formation des prix sur un marché. La loi de la demande
énonce que, toutes choses égales par ailleurs, la quantité demandée d'un bien décroît
lorsque son prix augmente, tandis que la loi de l'offre énonce, à l'inverse, que la quantité
offerte par les producteurs croît généralement avec le prix, puisqu'un prix plus élevé rend
la production plus rentable.

## L'équilibre de marché

Représentées graphiquement, la courbe de demande est généralement décroissante et la courbe
d'offre croissante en fonction du prix. Leur point d'intersection détermine le prix et la
quantité d'équilibre du marché : au-dessus de ce prix, l'offre excède la demande, créant un
surplus qui pousse les prix à la baisse ; en dessous, la demande excède l'offre, créant une
pénurie qui pousse les prix à la hausse. Ce mécanisme d'ajustement automatique, sans
intervention centralisée, constitue le cœur de l'analyse microéconomique classique des
marchés concurrentiels.

## Des concepts complémentaires

Plusieurs concepts affinent cette analyse de base. L'élasticité-prix mesure la sensibilité de
la quantité demandée ou offerte à une variation de prix : elle diffère fortement selon les
biens, certains produits de première nécessité étant peu sensibles au prix (faible
élasticité), tandis que des biens plus substituables le sont davantage. Le surplus du
consommateur et le surplus du producteur mesurent respectivement le bénéfice retiré par les
acheteurs et par les vendeurs de l'existence d'un marché à son prix d'équilibre. Des
facteurs externes — évolution des revenus, des préférences des consommateurs, des coûts de
production — peuvent déplacer l'ensemble d'une courbe d'offre ou de demande, modifiant ainsi
le point d'équilibre du marché.

## Une intuition ancienne, une formalisation plus récente

L'intuition selon laquelle des marchés libres, guidés par l'intérêt individuel des acteurs
économiques, tendent naturellement vers un équilibre bénéfique à l'ensemble de la société,
remonte à l'économiste écossais Adam Smith, qui la formule dès 1776 dans son ouvrage La
Richesse des nations sous l'image de la « main invisible ». La représentation graphique
moderne, avec des courbes d'offre et de demande se croisant sur un même diagramme, est
toutefois plus tardive, formalisée notamment par l'économiste britannique Alfred Marshall
dans son ouvrage de 1890, Principles of Economics.

## Faits clés

- Loi de la demande : la quantité demandée décroît généralement avec le prix.
- Loi de l'offre : la quantité offerte croît généralement avec le prix.
- Le prix d'équilibre correspond à l'intersection des courbes d'offre et de demande.
- Formalisation graphique moderne attribuée à Alfred Marshall (Principles of Economics,
  1890).

## À retenir

Le modèle de l'offre et de la demande décrit un cas idéalisé de marché concurrentiel ; de
nombreuses situations réelles s'en écartent en raison de monopoles, d'externalités, d'une
information imparfaite ou de réglementations publiques, autant de facteurs que l'analyse
microéconomique étudie séparément pour affiner ce cadre de base.

[Emplacement image : graphique classique des courbes d'offre et de demande avec le point
d'équilibre, légende et texte alternatif à fournir ultérieurement.]

---

---
type: article
title: Les techniques d'imagerie médicale
slug: techniques-imagerie-medicale
categoryPath: sciences-du-vivant-appliquees/medecine/imagerie-medicale
summary: >
  De la radiographie découverte par Röntgen en 1895 à l'IRM récompensée par un prix Nobel en
  2003, les techniques d'imagerie médicale permettent de visualiser l'intérieur du corps
  humain sans intervention chirurgicale.
tags: [medecine, imagerie-medicale, IRM, scanner, radiographie]
relatedArticles: []
sources:
  - title: "Medical Imaging"
    url: "https://www.nibib.nih.gov/science-education/science-topics"
    publisher: "National Institute of Biomedical Imaging and Bioengineering (NIH)"
    date: "2024"
lastVerified: 2026-09-21
status: published
---

## Résumé

L'imagerie médicale regroupe l'ensemble des techniques qui permettent de visualiser
l'intérieur du corps humain sans recourir à une intervention chirurgicale invasive. Ces
techniques, qui reposent sur des principes physiques très différents les uns des autres, se
sont considérablement diversifiées depuis la découverte des rayons X en 1895, offrant
aujourd'hui aux médecins un éventail d'outils diagnostiques complémentaires, chacun adapté à
des situations cliniques spécifiques.

## La radiographie, technique fondatrice

La radiographie, fondée sur les rayons X découverts en 1895 par le physicien allemand Wilhelm
Röntgen, reste l'une des techniques d'imagerie les plus utilisées, notamment pour l'examen
des os et de certaines structures thoraciques. Elle repose sur la capacité des différents
tissus du corps à absorber plus ou moins fortement ce rayonnement, les tissus les plus denses,
comme les os, apparaissant plus clairs sur l'image obtenue.

## L'échographie, une technique sans irradiation

L'échographie utilise des ultrasons, des ondes sonores de haute fréquence inaudibles par
l'oreille humaine, pour produire des images en temps réel des tissus mous et des organes.
N'utilisant aucun rayonnement ionisant, elle est particulièrement privilégiée pour le suivi de
grossesse et pour de nombreux examens nécessitant une répétition fréquente sans risque
d'irradiation cumulée.

## Le scanner et l'IRM, deux techniques récompensées par des prix Nobel

Le scanner, ou tomodensitométrie, combine de multiples clichés radiographiques pris sous
différents angles pour reconstituer une image en coupes du corps ; cette technique a valu à
ses développeurs, Allan Cormack et Godfrey Hounsfield, le prix Nobel de physiologie ou
médecine en 1979. L'imagerie par résonance magnétique (IRM), qui exploite un puissant champ
magnétique associé à des ondes radiofréquences pour produire des images très détaillées des
tissus mous, sans recourir à aucun rayonnement ionisant, a été récompensée par le prix Nobel
de physiologie ou médecine attribué en 2003 à Paul Lauterbur et Peter Mansfield. Une autre
famille de techniques, la médecine nucléaire, dont la tomographie par émission de positons
(TEP), utilise l'injection de traceurs faiblement radioactifs pour visualiser des processus
métaboliques en plus de la simple structure anatomique.

## Des compromis techniques différents

Chaque technique d'imagerie implique un compromis différent entre résolution spatiale,
exposition à des rayonnements ionisants, coût de l'examen et type de tissu le mieux visualisé,
ce qui explique pourquoi les médecins choisissent la technique la plus adaptée selon la
question clinique posée plutôt que de recourir systématiquement à la technique la plus
sophistiquée disponible.

## Faits clés

- Radiographie : rayons X, découverts par Wilhelm Röntgen en 1895.
- Scanner (tomodensitométrie) : prix Nobel de physiologie ou médecine 1979 (Cormack et
  Hounsfield).
- IRM : prix Nobel de physiologie ou médecine 2003 (Lauterbur et Mansfield), aucun
  rayonnement ionisant.
- Échographie : ultrasons, sans irradiation, très utilisée pour le suivi de grossesse.

[Emplacement image : équipement d'IRM ou de scanner dans un service de radiologie, légende
et texte alternatif à fournir ultérieurement.]

---

---
type: article
title: Les principes de la pharmacologie et des essais cliniques
slug: principes-pharmacologie-essais-cliniques
categoryPath: sciences-du-vivant-appliquees/medecine/pharmacologie
summary: >
  La pharmacologie étudie l'action des médicaments sur l'organisme à travers le parcours en
  quatre phases des essais cliniques, un processus rigoureux et encadré qui précède toute
  autorisation de mise sur le marché.
tags: [medecine, pharmacologie, essais-cliniques, NIH, medicaments]
relatedArticles: []
sources:
  - title: "NIH Clinical Research Trials and You: The Basics"
    url: "https://www.nih.gov/health-information/nih-clinical-research-trials-you/basics"
    publisher: "National Institutes of Health (NIH)"
    date: "2024"
  - title: "Pharmacology"
    url: "https://www.britannica.com/science/pharmacology"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
lastVerified: 2026-09-21
status: published
---

## Résumé

La pharmacologie est la science qui étudie l'action des médicaments sur l'organisme et, en
retour, la manière dont l'organisme traite ces substances. Elle se subdivise en deux grands
champs complémentaires : la pharmacocinétique, qui décrit le devenir d'une substance dans le
corps, et la pharmacodynamie, qui décrit son mécanisme d'action sur les cibles biologiques.

## Pharmacocinétique et pharmacodynamie

La pharmacocinétique suit généralement le modèle dit ADME : absorption du médicament dans
l'organisme, distribution vers les différents tissus, métabolisme (transformation chimique,
principalement par le foie) et excrétion (élimination, principalement par les reins). La
pharmacodynamie, de son côté, étudie le mécanisme d'action précis d'une substance,
généralement par sa liaison à des récepteurs biologiques spécifiques, ainsi que la relation
entre la dose administrée et l'intensité de l'effet observé, une relation résumée par la
courbe dose-réponse et par des indicateurs de sécurité comme la dose létale médiane (DL50).

## Les quatre phases des essais cliniques

Avant qu'un médicament puisse être autorisé, il doit franchir plusieurs phases d'essais
cliniques rigoureusement encadrées. La phase I, menée sur un petit nombre de volontaires
(généralement entre 20 et 100), évalue en priorité la sécurité du produit et sa tolérance. La
phase II, menée sur plusieurs centaines de patients, évalue l'efficacité préliminaire et
affine la posologie. La phase III, réalisée sur plusieurs milliers de patients dans le cadre
d'essais randomisés contrôlés, confirme l'efficacité et la sécurité à plus grande échelle,
généralement en comparaison avec un traitement de référence ou un placebo. La phase IV,
enfin, intervient après la commercialisation du médicament et correspond à la
pharmacovigilance, c'est-à-dire la surveillance continue des effets indésirables observés en
conditions réelles d'utilisation.

## Des méthodes conçues pour limiter les biais

Les essais cliniques de phase III s'appuient généralement sur la randomisation, qui répartit
aléatoirement les patients entre le groupe recevant le traitement testé et un groupe témoin,
et sur le principe du double aveugle, où ni le patient ni le médecin ne savent quel
traitement est effectivement administré, afin de limiter autant que possible les biais
d'interprétation, qu'ils soient conscients ou inconscients, des résultats observés.

## Faits clés

- Pharmacocinétique (ADME : absorption, distribution, métabolisme, excrétion) et
  pharmacodynamie (mécanisme d'action, dose-réponse).
- Phase I : sécurité, ~20-100 volontaires. Phase II : efficacité/dose, centaines de patients.
- Phase III : essais randomisés contrôlés, milliers de patients.
- Phase IV : pharmacovigilance post-commercialisation.

## À retenir

L'autorisation finale de mise sur le marché d'un médicament relève d'agences réglementaires
spécialisées, comme la FDA aux États-Unis, l'EMA au niveau européen ou l'ANSM en France, qui
évaluent l'ensemble des données issues de ces essais avant d'en autoriser la
commercialisation effective.

[Emplacement image : laboratoire pharmaceutique ou illustration d'un essai clinique
randomisé, légende et texte alternatif à fournir ultérieurement.]

---

---
type: article
title: La biologie de synthèse et ses applications récentes
slug: biologie-de-synthese-applications-recentes
categoryPath: sciences-du-vivant-appliquees/biotechnologies/biologie-de-synthese
summary: >
  De la création du premier génome bactérien synthétique en 2010 à la thérapie CRISPR Casgevy
  autorisée en 2023, la biologie de synthèse conçoit et reprogramme des systèmes biologiques à
  des fins thérapeutiques et industrielles.
tags: [biotechnologies, biologie-de-synthese, CRISPR, Craig-Venter, Nobel]
relatedArticles: [casgevy-premiere-therapie-crispr]
sources:
  - title: "The Nobel Prize in Chemistry 2020"
    url: "https://www.nobelprize.org/prizes/chemistry/2020/"
    publisher: "NobelPrize.org"
    date: "2020"
lastVerified: 2026-09-21
status: published
---

## Résumé

La biologie de synthèse est une discipline qui vise à concevoir, construire ou reprogrammer
des systèmes biologiques, en s'appuyant notamment sur l'ADN de synthèse et sur la conception
de circuits génétiques artificiels. Elle se distingue des biotechnologies plus traditionnelles
par une approche résolument ingénierique, cherchant à appliquer aux systèmes vivants des
principes de conception habituellement réservés aux systèmes technologiques.

## Des jalons scientifiques marquants

Plusieurs avancées ont marqué le développement de cette discipline. En 2010, l'équipe du
généticien Craig Venter est parvenue à créer le premier génome bactérien entièrement
synthétique, capable de faire fonctionner une cellule vivante à partir d'un ADN conçu et
assemblé en laboratoire. En 2012, les chercheuses Jennifer Doudna et Emmanuelle Charpentier
publient les travaux fondateurs sur l'outil d'édition génomique CRISPR-Cas9, une découverte
qui révolutionne la capacité à modifier précisément l'ADN d'un organisme, et qui leur vaut le
prix Nobel de chimie en 2020.

## Des applications déjà largement déployées

La biologie de synthèse a débouché sur de nombreuses applications concrètes. L'insuline
recombinante, produite par des bactéries génétiquement modifiées, a révolutionné dès les
années 1980 le traitement du diabète. L'artémisinine, un antipaludéen initialement extrait
d'une plante en quantités limitées, peut aujourd'hui être produite par des levures modifiées
génétiquement, sécurisant son approvisionnement. Plus récemment, les cellules CAR-T,
reprogrammées génétiquement pour combattre certains cancers, et la viande cultivée en
laboratoire à partir de cellules animales, illustrent l'étendue croissante des applications
possibles de cette discipline.

## Casgevy, une application thérapeutique récente

Fin 2023, la thérapie Casgevy, fondée directement sur l'outil CRISPR-Cas9, est devenue la
première thérapie d'édition génomique autorisée pour traiter la drépanocytose, une maladie
génétique du sang, illustrant le passage rapide de cette technologie du laboratoire de
recherche à une application clinique concrète, en un peu plus d'une décennie seulement depuis
sa découverte.

## Faits clés

- Premier génome bactérien synthétique créé par l'équipe de Craig Venter en 2010.
- CRISPR-Cas9, découvert par Doudna et Charpentier (2012), récompensé par le prix Nobel de
  chimie 2020.
- Applications déployées : insuline recombinante, artémisinine par levure modifiée, cellules
  CAR-T, viande cultivée.
- Casgevy (2023) : première thérapie CRISPR autorisée, pour la drépanocytose.

## Ce qui reste débattu

La biologie de synthèse soulève des questions de biosécurité, liées au risque de création ou
de diffusion accidentelle d'organismes modifiés dangereux, ainsi que des questions éthiques
plus spécifiques concernant l'édition du génome des cellules germinales humaines,
particulièrement vives depuis l'affaire du chercheur chinois He Jiankui, qui a annoncé en
2018 la naissance d'enfants dont le génome avait été modifié par CRISPR, un acte largement
condamné par la communauté scientifique internationale.

[Emplacement image : illustration de laboratoire de biologie moléculaire ou schéma de
l'édition génomique CRISPR, légende et texte alternatif à fournir ultérieurement.]

## Articles liés

- Casgevy, la première thérapie fondée sur CRISPR autorisée

---

---
type: article
title: L'agriculture durable dans le monde
slug: agriculture-durable-dans-le-monde
categoryPath: sciences-du-vivant-appliquees/agronomie/agriculture-durable
summary: >
  Selon la FAO, les coûts cachés des systèmes agroalimentaires mondiaux atteindraient environ
  12 000 milliards de dollars par an, dont près de 70 % liés aux régimes alimentaires
  malsains et aux maladies non transmissibles qu'ils favorisent.
tags: [agronomie, agriculture-durable, FAO, couts-caches, alimentation]
relatedArticles: []
sources:
  - title: "The State of Food and Agriculture 2024"
    url: "https://www.fao.org/agrifood-economics/publications/detail/en/c/1722598/"
    publisher: "Organisation des Nations unies pour l'alimentation et l'agriculture (FAO)"
    date: "2024"
lastVerified: 2026-09-21
status: published
---

## Résumé

L'agriculture durable vise à concilier trois objectifs souvent perçus comme en tension : la
sécurité alimentaire, la viabilité économique des exploitations et la protection de
l'environnement. Le rapport 2024 de la FAO sur l'état de l'alimentation et de l'agriculture
dans le monde, consacré à cette question, introduit une méthode d'évaluation appelée
comptabilité en coûts complets (true cost accounting), qui cherche à intégrer dans l'analyse
des coûts habituellement absents des bilans économiques classiques.

## Des coûts cachés considérables

Selon cette évaluation, portant sur 156 pays, les coûts cachés des systèmes agroalimentaires
mondiaux atteindraient environ 12 000 milliards de dollars par an, soit environ 10 % du
produit intérieur brut mondial. Ces coûts cachés recouvrent notamment les impacts sanitaires,
sociaux et environnementaux qui ne sont pas directement pris en compte dans le prix de vente
des produits alimentaires, mais qui pèsent bien réellement sur les sociétés, que ce soit sous
forme de dépenses de santé publique, de dégradation environnementale ou d'inégalités
sociales.

## Les régimes alimentaires malsains, principal facteur identifié

Le rapport de la FAO identifie les régimes alimentaires malsains et les maladies non
transmissibles qu'ils favorisent (maladies cardiovasculaires, diabète, certains cancers)
comme le principal facteur de ces coûts cachés : ils représenteraient à eux seuls environ
70 % du total estimé, soit environ 8 100 milliards de dollars par an, loin devant les coûts
environnementaux ou sociaux directement associés à la production agricole elle-même.

## Une charge inégalement répartie

L'analyse de la FAO révèle par ailleurs que ces coûts cachés pèsent proportionnellement bien
plus lourdement sur les pays à faible revenu, où ils peuvent représenter plus de 30 % du
produit intérieur brut national, contre une proportion nettement inférieure dans les pays à
revenu élevé, une asymétrie qui souligne l'urgence particulière d'une transformation des
systèmes agroalimentaires dans les régions les plus vulnérables.

## Faits clés

- Coûts cachés des systèmes agroalimentaires mondiaux : environ 12 000 milliards de dollars
  par an (FAO, sur 156 pays), soit environ 10 % du PIB mondial.
- Environ 70 % (8 100 milliards de dollars) sont liés aux régimes alimentaires malsains et
  aux maladies non transmissibles associées.
- Les pays à faible revenu supportent le coût relatif le plus élevé (plus de 30 % du PIB).
- Méthode utilisée : comptabilité en coûts complets (true cost accounting).

## À retenir

L'agriculture durable ne se limite donc pas, dans cette perspective, aux seules pratiques
agricoles respectueuses de l'environnement : elle englobe également la nature des régimes
alimentaires eux-mêmes, dont l'impact sur la santé publique constitue, selon cette analyse
de la FAO, le facteur de coût caché le plus important à l'échelle mondiale.

[Emplacement image : champ cultivé selon des pratiques agroécologiques, légende et texte
alternatif à fournir ultérieurement.]

---

---
type: article
title: La sélection végétale, méthodes traditionnelles et modernes
slug: selection-vegetale-methodes-traditionnelles-modernes
categoryPath: sciences-du-vivant-appliquees/agronomie/selection-vegetale
summary: >
  De la domestication des plantes il y a dix mille ans à l'édition génomique par CRISPR, la
  sélection végétale a considérablement amélioré le rendement des cultures, notamment grâce
  aux blés nains de la révolution verte de Norman Borlaug.
tags: [agronomie, selection-vegetale, Norman-Borlaug, CRISPR, revolution-verte]
relatedArticles: []
sources:
  - title: "Plant breeding"
    url: "https://www.britannica.com/science/plant-breeding"
    publisher: "Encyclopaedia Britannica"
    date: "2025"
  - title: "International Treaty on Plant Genetic Resources"
    url: "https://www.fao.org/plant-treaty/"
    publisher: "FAO"
    date: "2024"
lastVerified: 2026-09-21
status: published
---

## Résumé

La sélection végétale, qui vise à améliorer les caractéristiques des plantes cultivées, est
une pratique aussi ancienne que l'agriculture elle-même : dès la domestication des premières
plantes cultivées, il y a environ dix mille ans, les cultivateurs sélectionnaient déjà,
consciemment ou non, les individus présentant les caractéristiques les plus favorables pour
en conserver les graines. Cette pratique s'est considérablement affinée et accélérée au fil
des siècles, en particulier au cours du XXe siècle.

## Les méthodes traditionnelles

Les méthodes traditionnelles de sélection végétale incluent la sélection massale, qui
consiste à choisir et à reproduire les individus les plus performants au sein d'une
population cultivée, la sélection généalogique, qui suit précisément la lignée des individus
sélectionnés sur plusieurs générations, et le croisement ou hybridation entre différentes
variétés ou espèces apparentées. L'hétérosis, ou vigueur hybride, phénomène par lequel un
croisement entre deux lignées distinctes produit une descendance aux performances supérieures
à celles des deux parents, a notamment été exploité avec un succès particulièrement marqué
sur le maïs.

## La révolution verte

Le XXe siècle a connu une transformation majeure de l'agriculture mondiale, souvent désignée
sous le nom de révolution verte, dont l'agronome américain Norman Borlaug fut l'une des
figures centrales. Ses travaux de sélection ont notamment permis de développer des variétés
de blé « naines », plus courtes et donc moins sujettes à la verse (l'affaissement des tiges
sous le poids des épis), capables de supporter de plus fortes doses d'engrais sans s'effondrer
et produisant ainsi des rendements considérablement accrus. Ces travaux ont valu à Norman
Borlaug le prix Nobel de la paix en 1970, en reconnaissance de leur contribution à la
sécurité alimentaire mondiale.

## Les méthodes modernes

La sélection végétale contemporaine s'appuie sur des outils considérablement plus précis que
les méthodes traditionnelles : la sélection assistée par marqueurs génétiques permet
d'identifier précocement, dès le stade de la plantule, les individus porteurs de gènes
d'intérêt, sans attendre leur développement complet. La mutagenèse induit artificiellement des
mutations génétiques pour élargir la diversité génétique disponible. La transgénèse
(organismes génétiquement modifiés, ou OGM) introduit directement des gènes d'intérêt,
parfois issus d'autres espèces. L'édition génomique par CRISPR permet enfin de modifier de
manière très ciblée et précise des séquences génétiques existantes, sans nécessairement
introduire de matériel génétique étranger.

## Faits clés

- La domestication des plantes cultivées remonte à environ dix mille ans.
- L'hétérosis (vigueur hybride) est particulièrement exploitée sur le maïs.
- Norman Borlaug, figure de la révolution verte, reçoit le prix Nobel de la paix en 1970 pour
  ses variétés de blé nain à haut rendement.
- Méthodes modernes : sélection assistée par marqueurs, mutagenèse, transgénèse (OGM),
  édition génomique CRISPR.

## Ce qui reste débattu

Le statut réglementaire des organismes génétiquement modifiés (OGM) reste strict et débattu,
en particulier au sein de l'Union européenne. Le statut juridique des plantes obtenues par
édition génomique de type CRISPR, qui ne comportent pas nécessairement de gène étranger
introduit, fait par ailleurs l'objet d'un débat réglementaire encore non stabilisé dans
plusieurs juridictions, certaines les assimilant aux OGM classiques et d'autres les
distinguant.

[Emplacement image : champ de blé ou serre de sélection variétale, légende et texte
alternatif à fournir ultérieurement.]
