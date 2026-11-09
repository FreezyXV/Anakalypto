# Intégration des suggestions de la phase 5 — 11 octobre 2026

Les cinq améliorations facultatives de `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE5.csv` sont intégrées. Le verdict indépendant de Claude reste celui de ses quinze sujets ; ses rapports ne sont pas réécrits. Les cinq sujets ajoutés ensuite par Codex restent à relire indépendamment.

| Demande | Changement                                                                                                                                                                        | Vérification effectuée                                                                                                                                                                                                        |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A5-01   | Sur mobile, « Haut de page » apparaît après le pied de page, dans le flux du document. Il reste flottant à partir de 768 px.                                                      | Position CSS `static` à 320, `fixed` à 1280 ; retour effectif à `scrollY = 0`. Aucun bouton flottant mobile devant les dessins.                                                                                               |
| A5-02   | Les titres de comparaison décrivent l’état affiché, à partir des mêmes libellés que les commandes. Le titre mémorisé reste attaché à la capture.                                  | Cyclone : « Mer froide / Mer chaude », mémorisation de la mer chaude puis « Mer chaude / Mer froide ». Moteur : admission conservée pendant le passage à l’échappement. Un test couvre les états initiaux des vingt ateliers. |
| A5-03   | La variante « Deux équipes » montre deux trajets distincts : levures → surtout du gaz ; bactéries → surtout des acides. Légende spécifique, symboles agrandis sans décompte réel. | Inspection du dessin à 320 et 1280, référence « Avec levain » conservée. La vue habituelle de la pâte et sa loupe restent disponibles.                                                                                        |
| A5-04   | Le changement de situation alimente le statut accessible ; en comparaison, l’annonce précise que la référence reste inchangée.                                                    | Texte du statut contrôlé dans les sept variantes. Un lecteur d’écran réel n’a pas été utilisé.                                                                                                                                |
| A5-05   | Boutons d’étape, boutons de temps du moteur et repères des curseurs à 16 px. Une colonne jusqu’à 360 px ; deux au-delà. Seule une dernière étape impaire occupe toute la ligne.   | Six séries de boutons contrôlées à 320 : texte à 16 px, hauteur de 48 à 52 px, aucun débordement. Lune à 390 : huit boutons répartis en quatre paires.                                                                        |

## Recette et preuves

- 41 tests de découverte isolés passent, sans base de données. TypeScript et ESLint des composants / bibliothèques concernés passent.
- Compilation Webpack finale réussie dans l’instantané local isolé : 1 244 pages générées. Il s’agit d’une compilation de production, pas d’une recette du site public.
- Vingt ateliers manipulés à 320 px : dessin et légende changent, référence stable, aucune largeur de document supérieure au viewport. Les sept variantes gardent également leur référence.
- Minimum mesuré des lettres SVG dans ces ateliers : 12,27 px à 320. Les boutons HTML sont à 16 px ; ce sont deux mesures différentes.
- Le nouveau dessin du levain et les titres du moteur sont regardés sur ordinateur ; les boutons d’étape et de phase lunaire sont regardés sur mobile, avec activation au clavier et focus visible.
- Preuves : `docs/qa/codex-phase5-integration/verification.json` et captures du même dossier. Les preuves des cinq nouveaux sujets restent dans `docs/qa/codex-new-subjects/`.

La recette utilise `http://127.0.0.1:3002` et l’instantané `/private/tmp/anakalypto-preview-1LFef9/app`, connecté à PostgreSQL local. Le serveur de travail sur 3001 reste disponible. Aucun import en production, commit, push, déploiement ou changement de secret. Aucun article Expanded, ancien JSON de découverte, rapport Claude ou résultat de participant n’est modifié.

## Prochaine relecture

Le brief consolidé est dans `docs/collaboration/CLAUDE_CODE_PHASE6_PROMPT.md`. Il porte sur ces cinq intégrations et sur les cinq nouveaux sujets décrits dans `NEW_VISUAL_SUBJECTS_DELIVERY.md`. Les essais avec des participants et avec un lecteur d’écran réel restent distincts des contrôles techniques effectués ici.
