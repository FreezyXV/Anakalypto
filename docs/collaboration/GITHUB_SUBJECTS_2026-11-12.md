# État des sujets et des visuels — 12 novembre 2026

Référence GitHub vérifiée : [`main` au commit 60fde10150f023bc2f3df2dd6cf934a2dc757830](https://github.com/FreezyXV/Anakalypto/tree/60fde10150f023bc2f3df2dd6cf934a2dc757830). Cette photographie est datée ; elle ne prétend pas décrire un futur `main`.

| Mesure                                                                    | Résultat |
| ------------------------------------------------------------------------- | -------: |
| Leçons publiées                                                           |      948 |
| Blocs schématiques éditoriaux                                             |      965 |
| Leçons publiées avec au moins un schéma éditorial                         |      948 |
| Leçons avec dessin spécifique sur ce GitHub                               |      157 |
| Leçons avec dessin spécifique dans le travail local conservé avant ce lot |      191 |
| Nouveaux dessins spécifiques de ce lot                                    |       50 |
| Leçons avec dessin spécifique après ce lot                                |      241 |
| Leçons sans dessin spécifique                                             |      707 |
| Leçons publiées sans aucun visuel pédagogique                             |        0 |

Le total local précédent de 200 associations ne doit pas être additionné aveuglément aux 50 nouvelles. Le nettoyage de Claude a fusionné des leçons et supprimé neuf associations redondantes. Les chemins renommés ont été rapprochés de leurs nouvelles références ; les dessins restent conservés. Le nombre de fichiers ou de variantes n’est pas le nombre de leçons distinctes.

Le CSV joint liste les 948 références LEC, chemins complets, titres et sources. `github_diagram` désigne l’association à ce commit GitHub ; `local_diagram` est la photographie locale prise au début de l’audit. `working_visual_refs` et les champs de statut sont ajoutés depuis l’export backend final. Les lignes de fichiers du CSV correspondent à la photographie initiale, avant les corrections de schémas.

Le contenu actuel de GitHub a été repris dans le travail local avec conservation des modifications déjà présentes. La majorité des anciennes leçons illustrées a changé depuis les validations précédentes : **191 dessins restent conservés et marqués à revérifier dans leur nouveau texte**, sans être déclarés défectueux et sans être refaits.

## Livraison de ce lot

- 50 dessins spécifiques, chacun avec trois vues : [sélection et recette](../qa/lesson-visuals-batch50/README.md).
- Lecture des 965 schémas de Claude : 666 conservés, 299 corrigés dans 296 leçons, pour 300 opérations de correction documentées : [revue](../qa/inline-schemas/README.md).
- Présence de visuel suivie sur les 948 publiées, indépendamment de la qualité : `hasVisual`, `hasDrawing`, `hasInlineSchema`, compteur et statut des schémas, statut du dessin.
- Réservations atomiques, invalidation après changement du texte ou du chemin, preuves exportées et reprise contrôlée : [guide backend](ILLUSTRATION_BACKEND.md).

Les schémas conservés n’ont pas été recréés. Les nouveaux dessins complètent des schémas textuels existants quand un objet, une coupe, un trajet ou une transformation apporte une explication visuelle utile.

## Limites et installation

117 tests isolés et 13 tests PostgreSQL passent ; compilation et lint passent. Les 300 états des nouveaux dessins ont été opérés sur les vrais articles compilés. Les 965 schémas ont été mesurés sur mobile et ordinateur ; l’examen de captures est échantillonné, comme le précise la recette.

Tout a été validé sur une copie locale isolée. Les fichiers de contenu, migrations et manifestes sont prêts pour leur intégration. Une installation de production doit appliquer les migrations sur sa base cible avant d’activer la nouvelle API. Un commit/push ne remplace pas cette migration et n’importe pas à lui seul les textes corrigés. Aucune écriture en base de production ni aucun déploiement n’est effectué dans cette mission.

La reprise a aussi été testée dans une seconde base locale vide : sept migrations appliquées, 948 indicateurs de schéma validé et 241 associations de dessin restaurés, dont les 50 nouveaux dessins READY. Le manifeste correspond au moteur courant. Voir `docs/qa/inline-schemas/fresh-installation.json`. L’API compilée restitue les 948 références uniques sur dix pages, sans données internes, avec refus des mutations.
