---
type: article
title: Les transformeurs, architecture au cœur de l'IA moderne
slug: transformeurs-architecture-ia
categoryPath: intelligence-artificielle/modeles-de-langage/transformeurs
summary: >
  Introduite en 2017, l'architecture Transformer repose entièrement sur le mécanisme
  d'attention. Elle est devenue la base des grands modèles de langage comme GPT, Llama et
  Gemini.
tags: [IA, transformeurs, attention, modeles-de-langage, apprentissage-profond]
relatedArticles: [correction-derreurs-quantiques-willow]
sources:
  - title: "Attention Is All You Need (arXiv:1706.03762)"
    url: "https://arxiv.org/abs/1706.03762"
    publisher: "Vaswani et al., Google Brain / Google Research (NeurIPS 2017)"
    date: "2017-06-12"
lastVerified: 2026-09-21
status: published
---

## Résumé

Le Transformer est une architecture de réseau de neurones présentée en 2017 dans l'article
scientifique Attention Is All You Need, publié par une équipe de Google (Ashish Vaswani,
Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser et
Illia Polosukhin). Sa proposition centrale est radicale : abandonner les mécanismes
récurrents et les convolutions utilisés jusque-là, pour ne s'appuyer que sur un mécanisme
appelé attention. Cette idée est devenue l'ossature de la grande majorité des systèmes d'IA
générative actuels.

## Le mécanisme d'attention

Les modèles précédents, comme les réseaux récurrents, traitaient le texte mot par mot, de
manière séquentielle, ce qui limitait la parallélisation et la mémoire du contexte lointain.
Le Transformer, lui, examine tous les éléments d'une séquence en même temps et calcule, pour
chaque mot, quels autres mots sont les plus pertinents. C'est l'auto-attention : chaque
élément pèse l'importance des autres pour construire sa représentation, ce qui permet de
saisir des relations à longue distance dans le texte.

## Une architecture générique

Conçu à l'origine pour la traduction automatique, le Transformer combine un encodeur et un
décodeur, des couches d'attention multi-têtes, des réseaux de neurones position par
position, des connexions résiduelles et un encodage de position. Sa capacité à être
massivement parallélisé a rendu possible l'entraînement de modèles à des centaines de
milliards de paramètres. De nombreux systèmes récents n'utilisent qu'une partie de
l'architecture (souvent le décodeur seul), mais conservent le principe de génération
autorégressive introduit en 2017.

## Faits clés

- Article fondateur : Attention Is All You Need, 2017.
- Principe : attention et auto-attention, sans récurrence ni convolution.
- Base des grands modèles de langage (GPT, Llama, Gemini) et d'applications au-delà du texte.

## Portée

Au-delà du langage, l'architecture Transformer est aujourd'hui utilisée pour l'image, l'audio
ou la prédiction de structures de protéines, ce qui illustre sa polyvalence.

[Emplacement image : schéma encodeur-décodeur du Transformer, légende et texte alternatif à
fournir ultérieurement.]

## Articles liés

- La puce quantique Willow et la correction d'erreurs sous le seuil

---

---
type: article
title: L'acier bas carbone par réduction directe à l'hydrogène
slug: lacier-bas-carbone-reduction-directe-hydrogene
categoryPath: industries/industrie-lourde/siderurgie
summary: >
  La sidérurgie traditionnelle, responsable d'environ 8 % des émissions mondiales de CO2, se
  tourne vers la réduction directe du fer à l'hydrogène, une technologie mise en œuvre à
  l'échelle industrielle par l'usine suédoise Stegra à partir de 2026.
tags: [industrie, siderurgie, acier, hydrogene, decarbonation]
relatedArticles: [energies-renouvelables-panorama]
sources:
  - title: "Hydrogen in Iron and Steelmaking: Ore-Based Metallics & Carbon-Neutral Steel"
    url: "https://www.midrex.com/tech-article/hydrogen-in-iron-and-steelmaking-ore-based-metallics-carbon-neutral-steel/"
    publisher: "Midrex Technologies"
    date: "2024"
  - title: "The world's first industrial-scale plant for green steel promises a cleaner future"
    url: "https://www.technologyreview.com/2024/12/27/1108546/green-steel-hydrogen-industrial-plant-zero-emissions-stegra/"
    publisher: "MIT Technology Review"
    date: "2024-12-27"
lastVerified: 2026-09-21
status: published
---

## Résumé

La production d'acier repose traditionnellement sur des hauts-fourneaux, qui utilisent du
coke (dérivé du charbon) pour réduire chimiquement le minerai de fer, un procédé fortement
émetteur de dioxyde de carbone. La sidérurgie représente à elle seule environ 8 % des
émissions mondiales de CO2 liées à l'énergie. Pour réduire cette empreinte, plusieurs
projets industriels développent la réduction directe du fer à l'hydrogène, une technologie
qui remplace le carbone par de l'hydrogène comme agent réducteur, ne produisant que de la
vapeur d'eau comme sous-produit de cette étape.

## Le principe de la réduction directe à l'hydrogène

Dans un procédé classique, le monoxyde de carbone extrait le fer de son minerai (oxyde de
fer) en captant l'oxygène, ce qui produit du dioxyde de carbone. Dans la réduction directe à
l'hydrogène, c'est l'hydrogène qui capte cet oxygène, produisant de l'eau à la place du CO2.
Le fer obtenu, dit fer directement réduit, est ensuite fondu dans un four électrique pour
produire de l'acier, une étape qui peut elle-même être alimentée par de l'électricité bas
carbone.

## Le projet industriel Stegra

L'entreprise suédoise Stegra (anciennement H2 Green Steel) construit à Boden, dans le nord
de la Suède, l'une des premières usines à l'échelle industrielle appliquant ce procédé, avec
un démarrage de la production annoncé pour 2026. Le site bénéficie de la proximité d'une
importante production d'électricité renouvelable, nécessaire pour produire l'hydrogène par
électrolyse de l'eau à un coût compétitif et avec une faible empreinte carbone.

## Les défis de la transition

Le principal frein à la généralisation de cette technologie tient au coût et à la
disponibilité de l'hydrogène bas carbone, qui nécessite d'importantes quantités
d'électricité renouvelable ou nucléaire pour être produit sans émissions. La conversion du
parc industriel existant, largement composé de hauts-fourneaux dont la durée de vie se
compte en décennies, représente également un investissement considérable.

## Faits clés

- La sidérurgie représente environ 8 % des émissions mondiales de CO2 liées à l'énergie.
- La réduction directe à l'hydrogène remplace le carbone par de l'hydrogène comme agent
  réducteur du minerai de fer.
- Le principal sous-produit de cette étape est de l'eau, et non du CO2.
- L'usine Stegra, à Boden (Suède), vise un démarrage de production en 2026.

## Chronologie

- Depuis le XIXe siècle : dominance du haut-fourneau au coke dans la production mondiale
  d'acier.
- 2024-2026 : montée en puissance des premiers projets industriels de réduction directe à
  l'hydrogène, dont Stegra.

## Points de vigilance

Le succès à grande échelle de cette filière dépend directement de la disponibilité d'une
électricité renouvelable abondante et bon marché ; son déploiement mondial restera
probablement progressif et inégal selon les régions.

[Emplacement image : schéma comparatif haut-fourneau au coke / réduction directe à
l'hydrogène, légende et texte alternatif à fournir ultérieurement.]

## Articles liés

- Panorama des énergies renouvelables

---

---
type: article
title: Casgevy, la première thérapie fondée sur CRISPR autorisée
slug: casgevy-premiere-therapie-crispr
categoryPath: sciences-du-vivant-appliquees/biotechnologies/genie-genetique
summary: >
  Casgevy (exagamglogène autotemcel) est devenu fin 2023 le premier traitement fondé sur
  l'édition du génome CRISPR à obtenir une autorisation, d'abord pour la drépanocytose puis
  pour la bêta-thalassémie, marquant une étape majeure pour la thérapie génique.
tags: [biotechnologie, CRISPR, therapie-genique, drepanocytose, FDA]
relatedArticles: []
sources:
  - title: "Vertex and CRISPR Therapeutics Announce US FDA Approval of CASGEVY (exagamglogene autotemcel) for the Treatment of Sickle Cell Disease"
    url: "https://investors.vrtx.com/news-releases/news-release-details/vertex-and-crispr-therapeutics-announce-us-fda-approval"
    publisher: "Vertex Pharmaceuticals"
    date: "2023-12-08"
  - title: "Casgevy (exagamglogene autotemcel) FDA Approval History"
    url: "https://www.drugs.com/history/casgevy.html"
    publisher: "Drugs.com"
    date: "2024"
lastVerified: 2026-09-21
status: published
---

## Résumé

Le 8 décembre 2023, l'agence américaine du médicament (FDA) a autorisé Casgevy
(exagamglogène autotemcel), développé conjointement par Vertex Pharmaceuticals et CRISPR
Therapeutics, pour le traitement de la drépanocytose chez les patients de 12 ans et plus
présentant des crises vaso-occlusives récurrentes. Il s'agit de la première thérapie fondée
sur la technologie d'édition du génome CRISPR à recevoir une autorisation réglementaire. Son
autorisation a ensuite été étendue à la bêta-thalassémie transfusion-dépendante en janvier
2024.

## Comment fonctionne le traitement

Casgevy est un traitement autologue : des cellules souches sanguines sont prélevées chez le
patient lui-même, puis modifiées en laboratoire à l'aide de l'outil d'édition génomique
CRISPR-Cas9 pour réactiver la production d'une forme d'hémoglobine normalement présente
uniquement chez le fœtus (hémoglobine fœtale), capable de compenser le défaut d'hémoglobine
caractéristique de la drépanocytose et de la bêta-thalassémie. Les cellules modifiées sont
ensuite réinjectées au patient après un conditionnement médullaire, dans le cadre d'un
protocole hospitalier lourd, proche de celui d'une greffe de moelle osseuse.

## La drépanocytose, une maladie génétique répandue

La drépanocytose est une maladie génétique héréditaire qui déforme les globules rouges, leur
donnant une forme de faucille qui peut obstruer les petits vaisseaux sanguins, provoquant des
crises douloureuses et des complications parfois graves. Selon les estimations relayées lors
de l'autorisation du traitement, plusieurs milliers de patients pourraient être éligibles à
ce type de thérapie aux seuls États-Unis.

## Les enjeux d'accès

Si l'autorisation de Casgevy constitue une avancée scientifique majeure, son accès reste
limité par un coût très élevé, la complexité du protocole de traitement (nécessitant une
hospitalisation prolongée) et le nombre restreint de centres habilités à l'administrer. Ces
contraintes soulèvent des questions d'équité d'accès à ce type de thérapies innovantes, en
particulier dans les pays où la charge de la maladie est la plus lourde, notamment en
Afrique subsaharienne.

## Faits clés

- Première autorisation d'une thérapie fondée sur CRISPR : 8 décembre 2023 (FDA), pour la
  drépanocytose.
- Extension à la bêta-thalassémie transfusion-dépendante : janvier 2024.
- Traitement autologue : cellules souches du patient prélevées, modifiées par CRISPR-Cas9,
  puis réinjectées.

## Chronologie

- 2012 : publication des travaux fondateurs sur CRISPR-Cas9 comme outil d'édition du génome.
- 8 décembre 2023 : autorisation de Casgevy par la FDA pour la drépanocytose.
- Janvier 2024 : extension de l'autorisation à la bêta-thalassémie.

## À retenir

Casgevy illustre le passage de CRISPR, outil de laboratoire découvert au début des années
2010, à une thérapie autorisée en une décennie environ, tout en soulignant les défis
pratiques et économiques que pose le déploiement à grande échelle de ce type de traitement
de pointe.

[Emplacement image : schéma du principe de l'édition génomique CRISPR-Cas9, légende et
texte alternatif à fournir ultérieurement.]

---

---
type: article
title: La puce quantique Willow et la correction d'erreurs sous le seuil
slug: correction-derreurs-quantiques-willow
categoryPath: sciences-fondamentales/physique/physique-quantique
summary: >
  En décembre 2024, Google a annoncé que sa puce quantique Willow, dotée de 105 qubits,
  avait démontré une correction d'erreurs quantiques fonctionnant en dessous d'un seuil
  critique, une étape considérée comme importante vers des ordinateurs quantiques fiables à
  grande échelle.
tags: [physique-quantique, informatique-quantique, Google, correction-derreurs, qubits]
relatedArticles: [transformeurs-architecture-ia]
sources:
  - title: "Physics - Cracking the Challenge of Quantum Error Correction"
    url: "https://physics.aps.org/articles/v17/176"
    publisher: "Physics (American Physical Society), synthèse de travaux publiés dans Nature"
    date: "2024"
lastVerified: 2026-09-21
status: published
---

## Résumé

En décembre 2024, l'équipe de recherche en informatique quantique de Google a annoncé, dans
une étude publiée dans la revue Nature, que sa puce quantique Willow, composée de 105 qubits
supraconducteurs, avait démontré pour la première fois une correction d'erreurs quantiques
fonctionnant en dessous d'un seuil critique : plus le nombre de qubits physiques utilisés
pour encoder un qubit logique augmente, plus le taux d'erreur diminue, une propriété
appelée mise à l'échelle exponentielle sous le seuil.

## Pourquoi la correction d'erreurs est cruciale

Les qubits, unités élémentaires de l'information quantique, sont extrêmement sensibles aux
perturbations de leur environnement, ce qui provoque des erreurs de calcul bien plus
fréquentes que dans l'informatique classique. Pour construire un ordinateur quantique
capable de résoudre des problèmes utiles, il est nécessaire de regrouper plusieurs qubits
physiques en un seul qubit logique plus fiable, à l'aide de codes de correction d'erreurs.
Le défi majeur de ce domaine a longtemps été de démontrer qu'augmenter le nombre de qubits
physiques réduisait bien le taux d'erreur global plutôt que de l'aggraver.

## Ce que démontre Willow

Avec Willow, l'équipe de Google a montré qu'en augmentant la taille du réseau de qubits
physiques utilisés pour encoder un qubit logique, le taux d'erreur diminuait effectivement
de façon exponentielle, franchissant ainsi le seuil de correction d'erreurs. Il s'agit d'une
étape considérée comme significative, bien que le nombre de qubits logiques fiables
démontré reste encore très limité par rapport à ce qui serait nécessaire pour des
applications pratiques à grande échelle.

## Nuancer les annonces

Au-delà de cette démonstration de correction d'erreurs, publiée dans une revue à comité de
lecture, plusieurs acteurs du secteur, dont Google, ont également revendiqué en 2025 un
« avantage quantique vérifiable » sur certaines tâches de calcul spécifiques. Ces
revendications de performance, souvent formulées dans des communiqués d'entreprise, doivent
être distinguées des résultats publiés et évalués par les pairs : elles portent
généralement sur des tâches de calcul très spécifiques, sans intérêt pratique direct.

## Faits clés

- Puce Willow : 105 qubits supraconducteurs (Google, annonce de décembre 2024).
- Démonstration d'une correction d'erreurs quantiques fonctionnant sous le seuil critique,
  publiée dans Nature.
- Le taux d'erreur diminue de façon exponentielle à mesure que le nombre de qubits physiques
  par qubit logique augmente.
- Les revendications d'« avantage quantique » sur des tâches spécifiques doivent être
  distinguées des applications pratiques, encore hors de portée.

## Chronologie

- Années 2010 : premières démonstrations expérimentales de qubits supraconducteurs.
- 2019 : première revendication d'« avantage quantique » par Google, contestée par certains
  concurrents.
- Décembre 2024 : annonce de la puce Willow et de la correction d'erreurs sous le seuil.

## À retenir

La correction d'erreurs sous le seuil est une étape scientifique importante, mais elle ne
signifie pas que des ordinateurs quantiques utiles à grande échelle sont imminents.

[Emplacement image : photo ou schéma d'une puce de processeur quantique supraconducteur,
légende et texte alternatif à fournir ultérieurement.]

## Articles liés

- Les transformeurs, architecture au cœur de l'IA moderne

---

---
type: article
title: Homo naledi, une espèce humaine ancienne aux origines débattues
slug: homo-naledi-species-debattue
categoryPath: sciences-humaines-et-sociales/histoire/prehistoire
summary: >
  Découvert en Afrique du Sud dans le système de grottes de Rising Star, Homo naledi
  présente un mélange inhabituel de caractéristiques anciennes et récentes, daté entre
  335 000 et 236 000 ans, et fait l'objet de débats scientifiques sur sa place exacte dans
  l'arbre généalogique humain.
tags: [prehistoire, paleoanthropologie, Homo-naledi, evolution-humaine]
relatedArticles: []
sources:
  - title: "Homo naledi"
    url: "https://humanorigins.si.edu/evidence/human-fossils/species/homo-naledi"
    publisher: "Smithsonian Institution's Human Origins Program"
    date: "2023"
lastVerified: 2026-09-21
status: published
---

## Résumé

Homo naledi est une espèce éteinte du genre Homo, découverte à partir de 2013 dans le
système de grottes de Rising Star, en Afrique du Sud, par une équipe dirigée par le
paléoanthropologue Lee Berger. Les restes fossiles, retrouvés en très grand nombre pour un
site de cette nature, ont été datés entre environ 335 000 et 236 000 ans, une période
relativement récente à l'échelle de l'évolution humaine, ce qui a considérablement surpris
la communauté scientifique compte tenu des caractéristiques anatomiques particulièrement
anciennes de l'espèce.

## Une anatomie mosaïque

Homo naledi présente une combinaison inhabituelle de traits anatomiques : un cerveau
relativement petit, environ un tiers du volume du cerveau humain moderne, associé à des
caractéristiques du squelette (mains, pieds, hanches) qui évoquent à la fois des espèces
très anciennes du genre Homo et, sur certains points, l'espèce humaine actuelle. Cette
combinaison de traits, chez une espèce ayant vécu à une époque où Homo sapiens existait déjà
en Afrique, illustre la coexistence de plusieurs lignées humaines distinctes durant une
large partie de la préhistoire.

## Le site de Rising Star, un contexte inhabituel

Le système de grottes de Rising Star, où les fossiles ont été découverts, est
particulièrement difficile d'accès, ce qui a conduit certains chercheurs de l'équipe de
découverte à émettre l'hypothèse que les corps auraient été intentionnellement déposés dans
ces chambres profondes par d'autres individus de l'espèce, une forme de comportement
funéraire qui impliquerait des capacités cognitives inattendues pour une espèce au cerveau
aussi petit.

## Un débat scientifique non tranché

Cette hypothèse de dépôt intentionnel et de comportement funéraire reste débattue au sein de
la communauté paléoanthropologique : plusieurs chercheurs soulignent que d'autres
explications, comme une accumulation naturelle des corps au fil du temps, n'ont pas été
définitivement écartées, et que les preuves avancées nécessitent encore d'être confirmées
par des analyses supplémentaires. La place exacte de Homo naledi dans l'arbre généalogique
humain fait également l'objet de discussions non tranchées.

## Faits clés

- Découverte : à partir de 2013, grottes de Rising Star, Afrique du Sud.
- Datation des fossiles : entre environ 335 000 et 236 000 ans.
- Volume cérébral : environ un tiers de celui de l'humain moderne.
- Hypothèse de comportement funéraire intentionnel : avancée par l'équipe de découverte, mais
  non consensuelle dans la communauté scientifique.

## Chronologie

- 2013 : découverte des premiers fossiles dans le système de grottes de Rising Star.
- 2015 : description scientifique formelle de l'espèce Homo naledi.
- 2017 : publication de la datation des fossiles (335 000 à 236 000 ans).
- Depuis 2023 : publications et débats sur l'hypothèse de comportements funéraires
  intentionnels.

## Ce qui reste débattu

La communauté scientifique n'est pas unanime sur l'interprétation du dépôt des corps comme
un comportement funéraire intentionnel, ni sur la position précise de Homo naledi dans
l'évolution humaine ; ces questions font l'objet de recherches et de publications en cours.

[Emplacement image : reconstitution du crâne ou du squelette de Homo naledi, légende et
texte alternatif à fournir ultérieurement.]
