# Cinq nouveaux sujets visuels — 11 octobre 2026

Codex ajoute cinq découvertes et cinq schémas manipulables, associés à cinq articles déjà publiés. Le catalogue contient désormais vingt découvertes. Chaque nouveau sujet dispose de six étapes, d’une manipulation, de deux défis de compréhension, d’une révision express, d’une couverture SVG et d’un atelier Expanded avec comparaison et mémorisation.

## Inventaire

| Sujet      | Découverte                                   | Manipulation           | Relation représentée                                                                            |
| ---------- | -------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------- |
| Levier     | `/decouvrir/un-petit-effort-un-grand-levier` | Déplacer l’appui       | Les moments des forces se compensent ; la charge reste à 120 N.                                 |
| Flottaison | `/decouvrir/le-bateau-et-l-eau-deplacee`     | Ajouter de 0 à 800 kg  | Une coque étanche de 400 kg, volume maximal de 1 m³, déplace davantage d’eau jusqu’à sa limite. |
| Lune       | `/decouvrir/la-lune-et-nos-points-de-vue`    | Choisir huit phases    | Position orbitale et disque vu de la Terre ; croissants et phases gibbeuses dans les deux sens. |
| Saisons    | `/decouvrir/un-axe-deux-saisons`             | Juin / décembre        | Deux positions de la même Terre, axe parallèle, hémisphères exposés différemment.               |
| Engrenages | `/decouvrir/deux-roues-deux-vitesses`        | Faire tourner l’entrée | 12 dents entraînent 18 dents ; sens opposé, sortie à deux tiers de l’angle d’entrée.            |

Les JSON de `content/discovery/` donnent les routes Expanded exactes et les sources primaires consultées : NASA, OpenStax / Rice University et Carnegie Mellon University. Le champ `checkedAt` des **nouvelles découvertes** est au 11 octobre 2026. Les articles Expanded et leurs dates `lastVerified` ne sont pas modifiés ; leur relecture éditoriale complète reste distincte.

## Choix pédagogiques et limites

- Le levier reste à l’équilibre : la valeur affichée est l’effort nécessaire, et le dessin ne simule pas une levée. Barre sans poids ni frottement ; gain de force et coût en déplacement sont distingués.
- La coque est un modèle fermé, étanche, en eau douce à 1 kg/L. À 600 kg ajoutés, elle est entièrement immergée avec poussée égale au poids. Au-delà, même totalement immergée, la poussée est insuffisante. La profondeur dessinée est schématique ; stabilité, vagues et envahissement ne sont pas calculés.
- Les huit phases lunaires sont des repères dans une évolution continue. Orientation depuis l’hémisphère nord ; orbite, inclinaison et tailles simplifiées. Les phases ordinaires sont distinguées des éclipses. Le curseur sélectionne une phase, pas une date réelle.
- Les deux Terres du dessin des saisons représentent deux dates, pas deux planètes. Le contour orange sélectionne juin ou décembre. L’inclinaison explique l’ensoleillement ; le modèle ne calcule ni température ni durée du jour pour une latitude donnée.
- Les engrenages représentent exactement le rapport de rotation 12/18. Les profils des dents sont symboliques et les frottements ne sont pas simulés. Le curseur commande un angle, pas une vitesse.
- Les réponses justes occupent des positions différentes dans les dix défis. Les questions se comprennent sans relire l’étape précédente, pour permettre la révision express.
- Trois minutes restent une durée cible. Aucun résultat d’essai humain n’est attribué à ces ajouts.

## Vérifications effectuées par Codex

- 40 tests isolés de découverte passent, sans accès à une base : validation des vingt JSON, liens vers des articles publiés, rendu de tous les mécanismes, équilibre des moments, limite de flottaison, huit phases lunaires et rapport des engrenages.
- TypeScript, ESLint des composants / bibliothèques de découverte et Prettier des fichiers de cette livraison passent.
- Compilation complète Webpack réussie dans l’instantané isolé, avec la base PostgreSQL locale : 1 244 pages générées, vingt découvertes et vingt routes de révision.
- Corpus Expanded valide en `--dry-run`, sans écriture.
- Cinq parcours complets à 320 px : trente étapes, manipulations au clavier, dix mauvaises réponses bloquantes puis dix bonnes réponses, écran final et lien vers l’article.
- Cinq révisions express terminées après erreurs et corrections : dix défis supplémentaires vérifiés.
- Comparaison et mémorisation dans les cinq ateliers à 320 et 1280 px : référence stable, dessins et légendes actualisés ; état mémorisé identique à l’état exploré après normalisation des commentaires HTML d’hydratation.
- Aucun débordement horizontal dans ces dix vues. Dans les ateliers, plus petite lettre SVG mesurée : 12,27 px à 320, 18,67 px à 1280. Les cinq couvertures sont également présentes, avec légende, lien vers Découvrir et sans débordement à 320 ; leur minimum mesuré est de 12,22 px.
- Les cinq dessins sont regardés dans des captures à 320 et 1280 px. Les huit phases sont commandées dans le navigateur ; les croissants, quartiers, pleine Lune et phases gibbeuses sont regardés. Les seuils 75 / 76 du curseur de flottaison sont vérifiés dans l’interface.
- Les vingt cartes et les cinq nouveaux liens du catalogue sont présents ; aucun message d’erreur relevé dans les journaux du navigateur consultés.

Preuves : `docs/qa/codex-new-subjects/verification.json` et captures JPEG du même dossier. Ces manipulations sont une recette technique effectuée par Codex, pas des séances avec des participants. Un lecteur d’écran réel n’a pas été testé.

## Coordination avec la phase 5 de Claude

La phase 5 de Claude porte sur les **quinze sujets précédents**, recettés avant ces ajouts. Son verdict accepté et ses cinq suggestions facultatives ne constituent pas une recette indépendante des cinq nouveaux sujets. Ses documents et captures sont conservés. Aucun article, ancien JSON de découverte, rapport Claude ou README n’est modifié par cette livraison. Aucun import en production, commit, push ou déploiement n’est réalisé.

## Brief de relecture pour Claude Code

Après ta phase 5, réalise une relecture indépendante des cinq sujets de cette livraison. Consulte les cinq nouveaux JSON, les sources citées, `src/lib/discovery/models.ts`, les cinq composants `LeverDiagram`, `BuoyancyDiagram`, `MoonDiagram`, `SeasonsDiagram`, `GearsDiagram`, et les preuves du dossier `docs/qa/codex-new-subjects/`. Commence par vérifier que l’aperçu sert bien vingt découvertes ; l’instantané local est `/private/tmp/anakalypto-preview-1LFef9/app`, URL `http://127.0.0.1:3002`. Ne redémarre pas le serveur et ne change pas sa base.

1. Regarde les cinq dessins à 320, 390 et 1280 px : titres, petits chiffres, flèches, repères, états limites et milieu des curseurs. Une mesure de largeur seule ne vaut pas une inspection visuelle.
2. Vérifie particulièrement : équilibre et effort d’un levier ; coque entièrement immergée à la limite sans la qualifier de flottante à la surface ; poussée toujours présente quand elle coule ; huit phases et orientation croissante / décroissante ; absence de confusion phases / ombre terrestre ; axes parallèles et hémisphères opposés pour les saisons ; sens et angles des engrenages.
3. Rejoue les six étapes de chaque découverte, erreur puis correction aux deux défis, puis la révision express. Relis les questions seules. Vérifie les liens aller-retour avec l’article et les huit boutons de phase lunaire.
4. Dans les cinq ateliers Expanded, compare deux états, mémorise l’un, change la commande et vérifie la stabilité de la référence. Vérifie le focus, les noms accessibles et les légendes. Précise si un vrai lecteur d’écran a été utilisé ; sinon, conserve cette limite.
5. Relis les nouvelles découvertes à partir des sources citées. Pour un passage douteux dans un article Expanded, signale-le séparément : sa présence ne signifie pas que l’article complet a été vérifié aujourd’hui.
6. Rédige exclusivement de nouveaux livrables, par exemple `docs/CLAUDE_NEW_SUBJECTS_REVIEW.md`, `docs/CLAUDE_NEW_SUBJECTS_REQUESTS.csv` et des captures dans `docs/qa/claude-new-subjects/`. Chaque demande doit contenir sujet, écran, état exact, largeur, reproduction, observation, attente pédagogique et preuve. Distingue défaut constaté, risque d’interprétation et suggestion facultative.

Ne modifie ni code, ni JSON, ni article, ni document existant pendant cette recette. N’importe rien en base ; ne lance pas `npm test`, `npm run seed`, migration, commit, push ou déploiement. Les tests isolés `npx vitest run --config vitest.discovery.config.ts` et le corpus en `node --import tsx prisma/seed.ts --dry-run` suffisent pour ce périmètre. Ne renseigne aucune donnée personnelle ni résultat humain fictif.
