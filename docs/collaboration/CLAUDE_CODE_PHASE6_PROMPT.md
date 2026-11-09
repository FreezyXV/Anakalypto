# Prompt pour Claude Code — Phase 6

Tu interviens comme relecteur pédagogique et responsable de recette indépendante d’Anakalypto. Ton verdict de phase 5 a accepté quinze ateliers. Codex a depuis intégré tes cinq suggestions facultatives et ajouté cinq sujets interactifs. Ta mission est de vérifier cette version, de relever les défauts reproductibles et de distinguer clairement ce qui est vérifié, observé ou encore inconnu.

## Périmètre et coordination

Lis d’abord :

- `docs/CLAUDE_DELIVERY_PHASE5.md` et `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE5.csv` ;
- `docs/collaboration/CODEX_CLAUDE_PHASE5_INTEGRATION.md` ;
- `docs/collaboration/NEW_VISUAL_SUBJECTS_DELIVERY.md` ;
- `docs/qa/codex-phase5-integration/verification.json` et `docs/qa/codex-new-subjects/verification.json`.

Réalise une recette indépendante ; les preuves de Codex t’aident à préparer les contrôles, mais ne remplacent pas tes observations. Crée uniquement tes nouveaux documents et captures. Ne modifie ni code, ni JSON, ni articles, ni README, ni documents déjà livrés. Signale les corrections à Codex dans un CSV précis. Ne redémarre ou n’arrête aucun serveur existant.

L’aperçu local isolé est `http://127.0.0.1:3002`. Son instantané est `/private/tmp/anakalypto-preview-1LFef9/app`. Il sert vingt découvertes et les articles de la base PostgreSQL locale. Vérifie le nombre de découvertes et la présence des changements ci-dessous avant de commencer ; si l’aperçu est obsolète ou indisponible, signale-le sans importer le corpus ni modifier sa configuration. Le fichier `.env.local` du dépôt de travail pointe vers la production : ne lance ni seed normal, migration, import, tests d’intégration ou commande globale `npm test`. Les commandes autorisées pour cette recette sont `npx vitest run --config vitest.discovery.config.ts` et `node --import tsx prisma/seed.ts --dry-run`, sans écriture en base. Aucun commit, push, déploiement ou changement de mot de passe.

## Lot A : tes cinq suggestions intégrées

Recontrôle A5-01 à A5-05 à 320, 390 et 1280 px. Pour chaque point, écris « confirmé », « partiel », « défaut constaté » ou « non vérifié » avec preuve et limites.

1. **Retour en haut.** À 320 et 390, le bouton doit rester après le pied de page, sans recouvrir une figure. Fais réellement défiler jusqu’au pied de page puis active-le. À 1280, il doit conserver son fonctionnement flottant. Vérifie clavier et focus. La compilation réussie ne prouve pas le fonctionnement du site public.
2. **Titres de comparaison.** Le cyclone doit commencer par « Mer froide / Mer chaude ». Mémorise la mer chaude puis désactive la commande : la référence doit conserver son titre. Même contrôle pour le moteur, une séquence à cinq étapes et la Lune. Le titre doit décrire l’état réellement dessiné ; deux états identiques peuvent naturellement avoir le même titre. Vérifie les titres longs et l’alignement des figures.
3. **Levain, Deux équipes.** Regarde personnellement les deux dessins côte à côte : pâte / loupe et deux trajets des microbes. Relis les mots « surtout » et la légende ; ils désignent des rôles dominants, pas une exclusivité absolue. Vérifie que la référence et sa légende restent inchangées quand la variante est choisie. Signale séparément toute affirmation douteuse du texte JSON existant.
4. **Annonces.** Change chacune des sept variantes au clavier. Le statut accessible doit annoncer la situation et préciser, si nécessaire, que la référence reste inchangée. Si un vrai lecteur d’écran est disponible, utilise-le pour juger les annonces ; sinon, note explicitement « structure et texte vérifiés, lecture vocale non testée ». Ne transforme pas une inspection ARIA en résultat de lecteur d’écran.
5. **Commandes lisibles.** Les boutons et repères des curseurs sont à 16 px. Jusqu’à 360 px, les boutons d’étape sont en une colonne ; à 390, ils passent en deux colonnes. Vérifie papier, fresque, réseau électrique, moteur, sol et huit phases lunaires. Les mots longs doivent rester lisibles, les cibles tactiles au moins 44 px, le focus visible et la sélection synchronisée avec le dessin. Sur la Lune à 390, les huit boutons forment quatre paires.

## Lot B : cinq nouveaux sujets

Les cinq JSON sont dans `content/discovery/`. Chacun comprend six étapes, une manipulation, deux défis autonomes, une révision express, une couverture et un atelier Expanded. Les routes Expanded exactes sont dans chaque JSON. Les articles Expanded n’ont pas été intégralement revalidés par ces ajouts ; ne leur attribue pas une date de vérification récente.

| Sujet      | Découverte                                   | Contrôles pédagogiques prioritaires                                                                                                                                                                                                                                                         |
| ---------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Levier     | `/decouvrir/un-petit-effort-un-grand-levier` | Barre idéale à l’équilibre, charge 120 N, déplacement de l’appui, moments égaux. Bras de l’effort 10 → 30 cm et effort nécessaire 360 → 40 N ; distinguer gain de force et déplacement.                                                                                                     |
| Flottaison | `/decouvrir/le-bateau-et-l-eau-deplacee`     | Coque fermée étanche de 400 kg, volume extérieur maximal 1 m³, eau douce 1 kg/L. Curseur 75 : 600 kg ajoutés, immersion complète et équilibre neutre ; 76 : poussée insuffisante, coque qui coule mais poussée toujours présente. Le dessin ne calcule pas la stabilité ou l’envahissement. |
| Lune       | `/decouvrir/la-lune-et-nos-points-de-vue`    | Huit phases, Soleil éclairant toujours une moitié, vues orbitale et terrestre cohérentes. Vue depuis l’hémisphère nord : croissante à droite, décroissante à gauche. Les phases ordinaires ne viennent pas de l’ombre de la Terre. Curseur et huit boutons synchronisés.                    |
| Saisons    | `/decouvrir/un-axe-deux-saisons`             | Les deux Terres sont deux dates ; axe parallèle d’une date à l’autre, inclinaison d’environ 23,4°, saisons opposées entre hémisphères. Le cercle orange sélectionne la situation. Aucune température réelle n’est calculée.                                                                 |
| Engrenages | `/decouvrir/deux-roues-deux-vitesses`        | Douze dents entraînent dix-huit dents, sens opposés et sortie à deux tiers de l’angle d’entrée. Repères de rotation lisibles, dents symboliques. Le curseur commande un angle, pas une vitesse.                                                                                             |

Lis directement les sources primaires citées dans les JSON : NASA / JPL, OpenStax / Rice University et Carnegie Mellon University. Vérifie les relations enseignées, les valeurs limites, les simplifications annoncées et les défis. Relis chaque question sans l’étape précédente. Signale séparément un passage incorrect ou insuffisamment sourcé d’un article Expanded existant.

Pour chacun des cinq sujets :

- Regarde personnellement couverture et atelier à 320, 390 et 1280 px. Mesure le débordement et les petits textes, puis inspecte aussi les dessins : flèches, couleurs, orientation, collisions, contraste et légende. Distingue inspection visuelle et mesure automatisée.
- Manipule minimum, milieu et maximum. Ajoute les huit phases de Lune et les seuils 75 / 76 de la coque. Note état exact et valeur du curseur dans tes preuves.
- Compare, mémorise, change la commande et vérifie que dessin, titre et légende de référence restent stables. Recharge ensuite : exploration libre revenue à son état initial, sans progression enregistrée par l’atelier.
- Rejoue les six étapes : manipulation, mauvaise réponse bloquante puis bonne réponse à chacun des deux défis, écran final, lien vers l’article et retour. Termine ensuite la révision express. Vérifie aussi les cinq cartes du catalogue.
- Vérifie flèches, Espace et Entrée, focus visible, noms accessibles, annonces et préférence de réduction des animations dans l’outil de test. Regarde les animations réellement en mouvement ; précise ce qui n’a pas été observé.

## Livrables attendus

Crée uniquement :

- `docs/CLAUDE_INTEGRATION_RECHECK_PHASE6.csv` : recontrôle des cinq demandes A5 ;
- `docs/VISUAL_NEW_SUBJECTS_REVIEW_PHASE6.csv` : matrice des cinq sujets, contextes et largeurs ;
- `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE6.csv` : demandes à Codex ;
- `docs/CLAUDE_DELIVERY_PHASE6.md` : verdict par lot, vérifications effectuées et limites ;
- `docs/qa/claude-phase6/` : captures compressées et index indiquant sujet, écran, état, largeur et type d’observation.

Chaque demande doit comporter un identifiant, sa gravité, son type (défaut constaté, risque d’interprétation, suggestion facultative), le sujet, la route, la valeur / situation exacte, la largeur, les étapes de reproduction, l’observation, le résultat attendu et une preuve. Un défaut doit être reproductible ; une hypothèse doit rester identifiée comme telle. N’invente ni participants ni durées mesurées. Ne remplis pas la grille de résultats utilisateurs.

Si aucun défaut n’est constaté, annonce-le avec le périmètre réellement testé. Les décisions de publication, de recrutement des participants et de rotation du mot de passe restent celles du propriétaire du projet.
