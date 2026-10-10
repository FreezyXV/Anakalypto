# Créer les visuels d’Anakalypto

Les quinze découvertes fonctionnent maintenant avec des schémas SVG dessinés dans l’application : les trois pilotes, le piston et onze nouveaux mécanismes. Aucune image à générer n’est nécessaire pour les tester. Le catalogue et les expériences se consultent sur `/decouvrir`. L’inventaire et les limites figurent dans `VISUAL_DELIVERY.md`. Commencer par la justesse pédagogique ; affiner ensuite le style.

## Ce que tu peux produire

1. Choisir un sujet et écrire l’idée à faire comprendre en une phrase.
2. Décrire trois états : situation initiale, action, conséquence. Un texte de 20 à 40 mots par état suffit comme cible de rédaction.
3. Faire produire un storyboard, puis le relire : les flèches vont-elles au bon endroit ? Quel détail est volontairement simplifié ? Le changement est-il cohérent avec une source précise ?
4. Pour une interaction, demander à l’assistant de code des éléments SVG séparés. Pour une couverture ou une ambiance, générer une image raster sans texte. Les mots et les commandes restent dans l’application.
5. Vérifier le dessin à la taille d’un téléphone : trois ou quatre éléments essentiels, contours nets, aucune petite légende incorporée, sens compréhensible sans dépendre uniquement des couleurs.

## Brief commun prêt à copier

> Prépare un storyboard pédagogique pour Anakalypto, accessible dès 10 ans et intéressant pour les adultes. Sujet : [SUJET]. Objectif unique : [OBJECTIF]. Source de référence : [URL ET PASSAGE]. Représente une situation initiale, une action que l’utilisateur peut effectuer et une conséquence observable. Donne pour chaque état les éléments à dessiner, leur position, le sens des flèches et une explication courte. Signale les simplifications du modèle et les points à vérifier. Style : carnet scientifique contemporain, formes simples, contours bleu nuit, fond clair, quelques couleurs franches. Ne dessine pas de texte dans les images. Ne crée pas de détail scientifique absent du brief. Si une relation est incertaine, indique-la au lieu de l’inventer.

## Trois briefs concrets

### Savon

Objectif : comprendre que la tête reste du côté de l’eau et la queue du côté de la graisse.

> Dessine un schéma 2D très simple vu en coupe : une goutte de graisse orange au centre, entourée d’eau. Dans le deuxième état, ajoute des molécules schématisées avec une tête ronde bleue à l’extérieur et une queue orange vers la graisse. Prépare séparément l’eau, la graisse, une molécule et les éventuelles flèches. Ce sont des symboles pédagogiques, pas une représentation atomique. Aucun texte, aucune mousse décorative qui masque le mécanisme. Propose un troisième état montrant le groupe dispersé dans l’eau, sans faire disparaître la matière grasse. Fais vérifier le sens tête/queue avant toute animation.

### Turbo

Objectif : comprendre que les gaz d’échappement entraînent une turbine reliée au compresseur.

> Dessine deux roues reliées par un axe. À gauche, un trajet de gaz d’échappement traverse la turbine puis sort. À droite, un trajet distinct d’air traverse le compresseur puis va vers le moteur. Ne relie jamais les deux trajets de gaz entre eux. Prépare les roues, l’axe et les flèches dans des éléments distincts. Vue schématique 2D, quatre couleurs maximum, pas de moteur photoréaliste ni de tuyauterie inventée, aucun texte. Le mouvement de rotation sera animé par le code.

### Circuit

Objectif : comprendre qu’un trajet fermé est nécessaire dans ce circuit à pile et lampe.

> Dessine une pile, une lampe et un interrupteur dans une boucle simple. Produis les états interrupteur ouvert / lampe éteinte et interrupteur fermé / lampe allumée. Les fils doivent joindre correctement les deux bornes de la pile et les deux connexions de la lampe. Aucune liaison directe qui court-circuite la lampe. Prépare des éléments SVG séparés pour les fils, les contacts, la pile et la lampe. Les flèches de courant sont ajoutées dans le code, avec le sens conventionnel clairement expliqué. Aucun texte dans le dessin.

## Ajouter une illustration statique à Expanded

Le circuit existant décrit dans `docs/ILLUSTRATIONS.md` reste disponible :

- Enregistrer un PNG, JPEG ou WebP dans `illustrations/a-traiter/`, nommé d’après le slug complet de l’article.
- Savon : `comment-fabrique-t-on-du-savon-avec-de-l-huile.png`.
- Turbo : `comment-un-turbocompresseur-rend-il-un-moteur-plus-puissant.png`.
- Circuit : `tension-courant-resistance.png`.
- Une deuxième illustration reçoit `--2` avant l’extension.
- Lancer `npm run illustrations` pour convertir et actualiser le manifeste, puis vérifier le rendu local. Cette commande écrit des fichiers ; elle ne déploie pas le site.

Une image ajoutée ainsi enrichit l’article et sa tuile. Elle ne remplace pas automatiquement un schéma interactif du format Découvrir. Pour cela, transmettre les éléments et le storyboard à Codex : le composant doit être adapté et testé. Éviter d’ajouter une nouvelle propriété JSON que le contrat ne prévoit pas.

## Validation humaine utile

Faire expliquer le dessin par une personne qui n’a pas lu l’article. Si elle comprend le contraire de l’objectif, revoir le schéma. Tester avec un enfant et un adulte si les deux publics sont visés. La relecture artistique et la vérification scientifique sont deux étapes distinctes. Noter auteur, outil, source, date et droit d’utilisation des éléments externes ; conserver les fichiers originaux hors du dossier public.
