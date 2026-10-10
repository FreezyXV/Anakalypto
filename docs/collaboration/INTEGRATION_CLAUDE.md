# Intégration de la livraison Claude — 10 octobre 2026

Ce document décrit la troisième tranche. Les dessins spécifiques souhaités ont ensuite été réalisés ; voir [VISUAL_DELIVERY.md](./VISUAL_DELIVERY.md) pour la quatrième tranche.

## Périmètre

La livraison de Claude apporte douze découvertes et la relecture ciblée de quinze articles. Le catalogue contient désormais quinze découvertes publiées en local dans douze domaines. Les rapports originaux `docs/CLAUDE_DELIVERY.md`, `docs/EDITORIAL_REVIEW.md` et `docs/EDITORIAL_BACKLOG.csv` sont conservés comme trace de sa mission.

Codex a intégré les demandes prioritaires au moteur et ajusté les JSON concernés. Les huit découvertes dont le rendu ou une explication change passent en version 2, pour ouvrir une progression cohérente avec leur nouveau contenu.

## Changements

- `flow` accepte `loop`, `loopTo` et `offReached`. Une flèche de retour matérialise un cycle ; une croix et une description textuelle montrent l’interruption de la chaîne. Les autres `flow` conservent leur progression linéaire.
- Pilote automatique : le retour vise les capteurs, après la correction des gouvernes. La consigne reste choisie par les pilotes. Les capteurs restent disponibles lorsque le pilote automatique est désengagé ; la commande automatique des gouvernes est inactive. Fondement : [FAA, Automated Flight Control, pages 4-2 à 4-5](https://www.faasafety.gov/files/events/EA/EA03/2019/EA0392003/aah_ch04.pdf), consulté le 10 octobre.
- Quatre temps : un dessin SVG original montre un moteur à essence en coupe. Le curseur déplace le piston et la bielle, fait tourner le vilebrequin et change les soupapes. Une étincelle marque le début de la combustion. Quatre boutons permettent d’examiner les temps directement. Le cycle revient au début après deux tours ; le temps de détente est illustré séparément dans le premier défi. Le défi diesel conserve une chaîne sans bougie. Fondement : [NASA Glenn, Four Stroke Internal Combustion Engine](https://www.grc.nasa.gov/www/k-12/airplane/engopt.html), consulté le 10 octobre.
- Photosynthèse : arrêt avant la capture de lumière ; l’état sombre du défi du placard reste également interrompu. Le retour évite d’assimiler la bascule à un arrêt instantané de toutes les réactions : l’énergie déjà stockée peut encore alimenter les réactions suivantes. Fondement : [OpenStax, The Calvin Cycle](https://openstax.org/books/concepts-biology/pages/5-3-the-calvin-cycle), consulté le 10 octobre.
- Diesel : le deuxième défi distingue désormais la bougie d’allumage des bougies de préchauffage, qui chauffent sans produire d’étincelle. Source ajoutée : [Bosch, Glow plugs](https://www.boschaftermarket.com/xrm/media/images/parts/glow_plugs_3/pdf_33/en_4/bosch_brochure_glow_plugs.pdf), consultée le 10 octobre.
- Verre : arrêt après l’arrivée au tri, avant le broyage, tant que les intrus ne sont pas retirés.
- Téléphone : aucune étape de transmission active dans l’état silencieux.
- Levain, Wi-Fi et cyclone : le point d’arrêt est maintenant explicite.
- Cyclone : l’arrêt précède une évaporation **abondante**, sans suggérer qu’une mer froide ne s’évapore pas. La mer chaude est présentée comme une condition parmi plusieurs, et le défi sur la côte coupe l’alimentation marine en précisant l’affaiblissement progressif. Fondement : [NOAA, Hurricanes, formation](https://www.noaa.gov/education/resource-collections/weather-atmosphere/hurricanes), consulté le 10 octobre.

## Vérification

Les vingt-quatre tests de découverte vérifient aussi les limites du nouveau schéma, les retours de boucle, les états arrêtés, l’ouverture des soupapes, le retour mécanique après 720° et la longueur constante de la bielle. Tous les quinze contenus sont validés et leurs liens Expanded désignent des articles publiés du corpus.

Les composants suivent le même contrat pour le joueur, les aperçus et la révision express. Les nouveaux champs n’exigent pas de migration de base ni de dépendance supplémentaire.

- Les 24 tests passent avec `npx vitest run --config vitest.discovery.config.ts`, configuration isolée sans initialisation de base de test.
- TypeScript, lint et compilation Next de production passent. La compilation génère les quinze routes de découverte et leurs quinze routes de révision.
- Le corpus passe `node --import tsx prisma/seed.ts --dry-run`, sans import ni écriture en base. La suite d’intégration qui réinitialise une base n’a pas été lancée.
- Dans le navigateur à 390 × 844 : les sept scénarios à interrupteur modifiés passent dans les deux états ; le moteur passe ses quatre positions, la limite de 720°, une erreur corrigée qui bloque d’abord la suite, la fin de parcours puis la révision express. Les descriptions accessibles correspondent aux états visibles.
- Le catalogue affiche les quinze contenus ; catalogue et moteur sont également contrôlés à 1280 × 900. Aucun débordement horizontal n’apparaît sur les vues mesurées. Ces essais complètent ceux rapportés par Claude ; ils ne constituent pas un test auprès d’utilisateurs.

## Limites et publication

Le dessin du moteur est une représentation pédagogique idéalisée. Il ne modélise pas le calage réel, l’allumage anticipé, le croisement des soupapes ou les courbes de pression. Les autres sujets utilisent encore des chaînes de texte : coupe de cyclone, ondes du Wi-Fi et courbes du téléphone restent des pistes pour la prochaine tranche.

Les corrections Markdown des articles de Claude sont enregistrées dans le dépôt. Les pages Expanded lisent la base : ces corrections doivent être importées dans l’environnement choisi avant sa publication. Une compilation réussie ne constitue pas un import en base. Aucun import, migration, commit, push ou déploiement n’est effectué pendant cette intégration.

Les vérifications historiques restantes et le taux français de recyclage du verre restent ceux signalés dans l’audit de Claude. Les durées et l’efficacité pédagogique restent à tester avec les deux publics.
