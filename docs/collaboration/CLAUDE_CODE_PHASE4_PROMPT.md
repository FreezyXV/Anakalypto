# Mission Claude Code — phase 4 : recette de la préproduction corrigée

Tu participes à l’évolution d’Anakalypto avec Codex. Les phases éditoriales 1 à 3 sont terminées. Codex a intégré les neuf demandes de phase 3 et préparé une préproduction locale qui sert enfin les articles corrigés. Ta mission est une recette indépendante de cette version et un bilan précis avant les essais utilisateurs et la publication.

Travaille directement dans ton périmètre. Ne recommence pas les recherches déjà clôturées. Distingue les défauts observés des pistes d’amélioration et les vérifications effectuées des vérifications impossibles.

## 1. Lire le contexte utile

- `docs/collaboration/PREPRODUCTION_LOCAL.md` : instance active, commandes, séparation des bases et preuves de cette tranche.
- `docs/collaboration/CODEX_CLAUDE_PHASE3_INTEGRATION.md` : traitement de P3-01 à P3-09.
- `docs/collaboration/VISUAL_WORKSHOPS_DELIVERY.md` : les nouveaux ateliers et couvertures Expanded, leurs mesures et leurs limites de validation.
- `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE3.csv`, `docs/CLAUDE_DELIVERY_PHASE3.md`, `docs/VISUAL_REVIEW_GRID.md` : tes constats précédents.
- `docs/EDITORIAL_REVIEW_PHASE3.md` : état ancien des articles et limites éditoriales assumées.
- `docs/USER_TEST_RUNBOOK.md`, `docs/USER_TEST_PROTOCOL.md`, `docs/USER_TEST_RESULTS_TEMPLATE.csv`, `docs/RELEASE_READINESS.md`.
- Les JSON et composants concernés peuvent être lus pour comprendre un comportement. Une lecture du code ne remplace pas la manipulation de l’app.

## 2. Version et périmètre

**Cible actuelle : http://127.0.0.1:3002/decouvrir.** Vérifie qu’elle répond et que les quinze cartes sont présentes. Le port 3001 n’est pas la préproduction importée. Ne tire pas de conclusion sur les corrections éditoriales en lisant cet ancien serveur.

Le serveur 3002 est un instantané du dépôt avec sa propre base locale. Ne l’arrête pas et ne démarre pas un deuxième serveur dans le même dossier. Si l’instance a disparu, utilise les instructions de `PREPRODUCTION_LOCAL.md` depuis la racine du dépôt, puis note l’adresse et le dossier nouvellement affichés. Les ports peuvent changer. Le lancement avec `--test` utilise une base de tests distincte.

Tu peux créer **uniquement** tes nouveaux documents et captures de phase 4. Ne modifie pas le code, les JSON, les articles, le README, les documents de Codex ou les rapports historiques. Aucun import manuel, migration manuelle, commit, push, changement de variable d’environnement, rotation de mot de passe ou déploiement dans cette mission. Si un défaut exige une correction, documente-le pour Codex.

N’utilise pas `npm run seed`, `npm run setup:db`, `npm run build:with-db` ni `npm test` avec l’environnement par défaut : `.env.local` vise la production et les tests d’intégration vident leur base. Pour la validation sans connexion, utilise `node --import tsx prisma/seed.ts --dry-run`. Pour les tests de Découvrir seuls, utilise `npx vitest run --config vitest.discovery.config.ts`.

## 3. Repasser les neuf demandes

Pour chaque P3-01 à P3-09, note `confirmé`, `partiel`, `non résolu` ou `non vérifiable`, avec URL, largeur CSS réelle, version du JSON, étape, état de la commande et observation.

Points d’attention :

1. **Fresque** : résumé de la carte et objectif final parlent de réaction avec le CO₂ et fixation des pigments ; aucun rapprochement trompeur avec un simple séchage. Au premier état, les pigments et leur libellé latéral sont absents ; ils apparaissent ensuite.
2. **Électricité** : le résumé invite à suivre le réseau et ses changements de tension.
3. **Cyclone** : « Montée » accompagne les deux flèches latérales ; « Descente » est sous l’œil. Relire aussi la scène terrestre, les nuages et la légende condensation → chaleur. L’œil doit rester dégagé.
4. **Pilote automatique** : désengagé, la croix coupe la commande vers les gouvernes, tandis que les capteurs restent disponibles. Examiner aussi l’état engagé et la rafale.
5. **Lisibilité** : les dessins utilisent 16 unités SVG, mais mesurer les pixels effectivement rendus. Le facteur d’échelle est le minimum entre largeur et hauteur, en tenant compte du `viewBox` et de la hauteur maximale. Codex mesure au moins 12,22 px dans les découvertes à 320 px CSS. Ce constat ne s’applique pas aux petites vignettes décoratives du catalogue.
6. **En-tête** : accueil, catalogue, découverte, révision et article à 320 px, sans débordement. Lire la largeur CSS effective dans le DOM ; ne pas déduire la largeur de l’image capturée ni modifier le zoom personnel pour satisfaire la mesure.
7. **Turbo** : gaz et air entrent et sortent de leurs roues respectives. À zéro, les roues sont arrêtées et le curseur annonce « Aucun flux ». À 50 et 100, l’indicateur fixe change. Regarder aussi l’animation en mouvement, le sens des flèches et l’axe commun. L’indice de vitesse est qualitatif.
8. **Fresque** : libellé latéral des pigments conditionnel, sans régression dans les étapes intermédiaires ni la retouche.
9. **Piston et pain** : « Vilebrequin », son repère, l’angle et « 2 tours » doivent rester séparés du cercle et des autres traits ; « Acides » ne doit toucher ni la flèche ni le bord du cercle.

Un correctif supplémentaire permet au titre long de l’article du turbo de se couper à 320 px. Vérifier le titre, la colonne, les boutons, l’illustration de couverture et le reste de l’article. Ne pas résoudre un débordement en cachant tout le défilement horizontal.

## 4. Parcours et articles réellement servis

Codex a effectué les quinze parcours complets à 320 px et contrôlé les quinze articles dans la base et le navigateur. Repasser indépendamment les sujets touchés, puis les quinze liens avec Expanded. Sur un parcours :

- observer la manipulation dans ses deux états, puis revenir à l’état initial ;
- tester une mauvaise réponse à chaque défi : feedback présent et suite bloquée ;
- corriger : la suite doit fonctionner ;
- terminer et vérifier l’objectif, Approfondir et le retour vers Découvrir ;
- refaire la révision express : aucun dessin avant la réponse, dessin approprié après, erreur bloquante et résultat final cohérent.

Attendre le chargement du document et les changements d’étape. Lorsqu’une découverte est déjà terminée, sa progression se restaure après hydratation : attendre l’écran final avant de cliquer « Rejouer ». Un clic pendant le chargement ou une attente dépassée par l’outil ne suffit pas à conclure à un défaut de l’app. Si cela arrive, lire l’état effectivement atteint et reproduire avec des actions séparées.

Sur les quinze articles, confirmer quelques phrases propres aux corrections, les sources et les quiz réellement affichés. Exemples : potentiel électrique et boucle fermée ; contre-pression du turbo ; Chambre des représentants pour Meucci ; Twann ; 106 000 km de réseau ; limite du taux Citeo. Ne pas modifier `lastVerified` : la recette d’affichage ne constitue pas une revue complète de toutes les affirmations.

La base contient le corpus entier, dont les articles prévus importés comme brouillons. Vérifier qu’un contenu prévu ne devient pas une leçon publiée simplement parce qu’il est dans la base. Les autres limites éditoriales assumées ne sont pas automatiquement des défauts bloquants.

## 5. Vérifications visuelles et accessibilité restantes

### Nouveauté : ateliers et couvertures des quinze articles Expanded

Codex a enrichi les articles avec des couvertures montrant leur mécanisme et un atelier libre. La copie active sur 3002 contient cette tranche. Repasser les quinze articles :

- Le schéma de couverture correspond au sujet, son état et sa légende sont cohérents ; son lien mène à l’atelier. Les illustrations déjà importées ont priorité sur la couverture SVG.
- Dans l’atelier, comparer deux états, mémoriser un état, puis modifier la commande. La référence doit rester immobile et sa légende doit correspondre au dessin ; seuls le dessin exploré et son texte changent.
- Explorer aussi les sept variantes : cyclone/terre, Wi-Fi/murs, fresque/retouche, sol/érosion, réseau/équilibre, pilote/rafale et pain/microbes. Changer de situation ne doit pas changer la référence. Les variantes sans commande affichent une scène fixe ; aucun quiz n’est affiché dans l’atelier.
- Moteur : la référence initiale est à l’admission, l’état exploré à la combustion-détente. Le curseur et les quatre boutons de phase doivent agir sur l’état exploré. À 100, le cycle revient à l’admission.
- À 320 px, les deux dessins se suivent à pleine largeur. À 1280 px, ils sont côte à côte. Examiner les mots, les flèches, les contrastes, le focus et les légendes dans les deux dispositions.
- Quitter l’atelier et ouvrir le parcours guidé : la manipulation libre ne doit pas avoir répondu aux défis ni validé une découverte. Un simple rechargement de l’article remet l’atelier à son état initial.
- Les vignettes du catalogue décrivent désormais leur état représentatif, plutôt que la légende d’une autre étape. Vérifier notamment le savon et le piston.

Les 35 tests isolés passent ; les mesures sont dans `docs/qa/codex-workshops/verification.json`. La comparaison brute de HTML peut différer par les commentaires SSR et la précision sérialisée du style : examiner l’état réellement dessiné et sa transformation CSS effective avant de conclure à une erreur de mémorisation. Codex a regardé les captures du moteur et du cyclone ; la relecture visuelle exhaustive reste dans ta mission.

### Découvrir et vérifications communes

- Regarder les dessins détaillés à 320, 390 et 430 px CSS et **regarder réellement** les captures à 1280 px. Priorité : pilote, piston, turbo, cyclone, fresque, photosynthèse et pain.
- Les rectangles de texte ne détectent pas les collisions texte/trait : compléter la mesure par une relecture visuelle.
- Utiliser Tab, Maj+Tab, Espace, Entrée et les flèches. Examiner le focus, son ordre, son déplacement vers le titre après changement d’étape, les commandes et la révision.
- Observer les animations en mouvement. Si une préférence de réduction des animations est déjà disponible dans un contexte de test autorisé, contrôler que le sens reste compréhensible et que les animations concernées s’arrêtent. Sinon noter explicitement la limite ; lire le CSS ne prouve pas le comportement dans une préférence réellement activée.
- Si un véritable lecteur d’écran est disponible dans un contexte autorisé, tester une manipulation, une réponse fausse/corrigée, le changement d’étape, l’écran final et une révision. Vérifier la légende dynamique et l’absence de double lecture du SVG. Sinon écrire **« lecteur d’écran non testé »**. Ne pas présenter l’arbre d’accessibilité comme un essai VoiceOver/NVDA.
- Ne pas changer les préférences personnelles du poste pour ces vérifications sans autorisation du propriétaire.

## 6. Livraison

Créer :

1. `docs/CLAUDE_INTEGRATION_RECHECK_PHASE4.csv` : une ligne par P3-01 à P3-09, avec verdict et preuve.
2. `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE4.csv` : seulement les défauts actuels observés ; en-têtes même si aucun défaut. Pour chaque défaut : sévérité, reproduction, attente, observation, sujet/étape/état, largeur, version et capture éventuelle. Séparer les améliorations facultatives.
3. `docs/CLAUDE_DELIVERY_PHASE4.md` : verdict de recette, URL et version, contrôles réellement effectués, limites, nouveaux défauts et prochaines actions.
4. `docs/RELEASE_READINESS_PHASE4.md` : distinguer fichiers, **base locale importée**, production non auditée, contrôles techniques, recette indépendante et essais réels. Aucun secret, aucune commande qui cible implicitement la production.
5. Captures utiles dans `docs/qa/claude-phase4/`, avec une grille qui distingue une image mesurée d’une image regardée et un état fixe d’une animation observée.

Ne remplis pas la grille des essais humains. Il n’y a encore ni participants ni mesures de durée, de rétention ou de plaisir. La préproduction locale convient à un pilote sur cet ordinateur ; un téléphone différent ou des participants distants exigent un accès supplémentaire.

Le bilan final doit préciser : ce qui est confirmé, ce qui doit encore être corrigé, ce qui dépend d’un vrai essai humain et ce qui dépend du propriétaire pour l’accès des participants, la rotation du mot de passe et la publication. Ne lance aucune de ces dernières actions.
