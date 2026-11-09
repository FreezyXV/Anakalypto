# Mission Claude Code — phase 5 : ateliers Expanded et contre-recette visuelle

Tu collabores avec Codex sur Anakalypto. Ta phase 4 est terminée. Codex a corrigé tes six demandes et ajouté des couvertures et ateliers interactifs aux quinze articles Expanded associés à Découvrir. Ta mission est une recette indépendante de cette nouvelle présentation, avec des constats précis et reproductibles.

## Contexte à lire

- `docs/collaboration/CODEX_CLAUDE_PHASE4_INTEGRATION.md` : les six corrections et les limites de validation.
- `docs/collaboration/VISUAL_WORKSHOPS_DELIVERY.md` : fonctionnement des ateliers et contrôles effectués.
- `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE4.csv`, `docs/CLAUDE_DELIVERY_PHASE4.md` et ta grille de captures de phase 4.
- `docs/collaboration/PREPRODUCTION_LOCAL.md` pour l’adresse et l’isolation de la base.

## Périmètre et environnement

La cible active est **http://127.0.0.1:3002**, notamment les articles accessibles depuis les quinze découvertes. Elle sert la copie locale avec les nouveaux composants et les corrections. Le port 3001 ne sert pas les corrections éditoriales importées. Note l’URL et l’heure de ta recette, les versions JSON et les états réellement examinés.

Ne modifie pas le code, les articles, les JSON, le README, les rapports historiques ou les documents de Codex. Crée seulement tes rapports et captures de phase 5. Ne réalise aucun import, migration manuelle, commit, push, déploiement, changement d’environnement ou rotation de secret. Ne stoppe pas le serveur. Si l’instance a disparu, suivre le lancement isolé documenté ; noter les nouveaux ports au lieu de réutiliser aveuglément 3002.

L’environnement par défaut du dépôt vise la production. Ne lance ni `npm run seed` ni la suite globale `npm test` avec cet environnement. Les contrôles sans base sont `node --import tsx prisma/seed.ts --dry-run` et `npx vitest run --config vitest.discovery.config.ts` ; ce dernier contient maintenant 35 tests.

## 1. Contre-recette des six demandes P4

Repasser P4-01 à P4-06 à 320 et 1280 px CSS réels. Examiner les états concernés dans Découvrir et dans Expanded, puisque les mêmes dessins y sont utilisés. Regarder les captures ; ne pas conclure uniquement à partir des rectangles de texte.

Pour le pilote, les légendes doivent tenir dans leurs boîtes et les flèches relier les bons éléments. Pour le cyclone, « Rotation » doit être séparé du symbole et du nuage, sans gêner le titre. Pour le pain, les trois lignes sans levain et les légendes avec levain doivent rester dans la loupe. Pour la feuille, regarder le contour inférieur et le O₂ au-dessus de la pointe de flèche, avec et sans lumière. Pour le piston, regarder l’espace entre le mot et son trait de rappel à plusieurs positions.

Le serveur reste `next dev`, avec son indicateur désactivé. Vérifier que le bouton N n’est ni visible ni atteint dans la navigation au clavier. Ne présenter cette correction comme un lancement en mode production que si ce mode a réellement été utilisé.

## 2. Quinze couvertures et quinze ateliers

Pour chaque article associé :

1. La couverture représente le sujet, et sa légende correspond à l’état dessiné. Le lien mène à l’atelier. Une illustration déjà importée doit conserver sa priorité.
2. Manipuler la commande dans deux états ; vérifier le dessin et sa description. Sur les séquences à curseur, essayer aussi une étape intermédiaire et un bouton d’étape. Le moteur doit commencer par comparer admission et combustion-détente ; à 100, le cycle revient à l’admission.
3. Activer la comparaison, mémoriser un état, puis changer la commande : la référence et sa légende restent stables. Mémoriser un nouvel état doit remplacer cette référence.
4. Essayer les sept variantes : mer/terre, Wi-Fi/murs, fresque/retouche, sol/érosion, réseau/équilibre, pilote/rafale, pain/microbes. La référence reste stable lors du changement de situation. Les scènes fixes peuvent ne pas proposer de commande ; aucun défi n’apparaît dans l’atelier.
5. À 320 px les deux dessins se suivent à pleine largeur ; à 1280 px ils sont côte à côte. Observer lisibilité, légendes, sens des flèches, collisions, couleurs et absence de débordement.
6. Les liens vers les défis guidés et la lecture fonctionnent. Une exploration libre ne valide aucune découverte et ne répond à aucun défi. Un rechargement remet l’atelier à son état initial. Ne pas effacer une progression personnelle pour tester cela : utiliser un contexte de test propre.

Les 22 situations proviennent des 15 mécanismes et de leurs variantes déjà décrites dans les JSON. Vérifier aussi les vignettes du catalogue : leur légende décrit maintenant leur état représentatif, notamment pour le savon et le piston.

La comparaison brute de HTML peut différer par les commentaires SSR ou la précision sérialisée d’un style. Avant de signaler une mémorisation incorrecte, comparer l’état visible, sa légende et, si nécessaire, la transformation CSS effective du piston.

## 3. Accessibilité et limites

Examiner Tab, Maj+Tab, Espace, Entrée et les flèches, les noms des commandes, le focus et la description des figures. Tester un vrai lecteur d’écran si un contexte autorisé est disponible ; sinon écrire « lecteur d’écran non testé ». L’arbre d’accessibilité ne remplace pas cet essai.

Vérifier les animations et un contexte de mouvement réduit si disponible sans changer les préférences personnelles du poste. Le dessin mémorisé doit rester immobile. Ne pas inventer de résultats d’essais avec des participants : aucun temps d’apprentissage, plaisir ou gain de rétention n’est encore mesuré.

## Livraison

- `docs/CLAUDE_INTEGRATION_RECHECK_PHASE5.csv` : verdict et preuve pour chaque P4-01 à P4-06.
- `docs/VISUAL_WORKSHOPS_REVIEW_PHASE5.csv` : une ligne par article, indiquant largeur, couverture, commande, comparaison, variantes, clavier, image regardée et limites.
- `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE5.csv` : défauts actuels observés, séparés des améliorations facultatives. Reproduction, attente, observation, URL, état, largeur, sévérité et capture.
- `docs/CLAUDE_DELIVERY_PHASE5.md` : verdict, périmètre réellement examiné, défauts, limites et suite concrète.
- Captures utiles dans `docs/qa/claude-phase5/`, avec une grille des images regardées.

Conserver les résultats humains vides. Ne relancer les anciens 44 parcours complets que si un changement ou un défaut observé le justifie ; cette mission se concentre sur les ateliers et les corrections visuelles récentes.
