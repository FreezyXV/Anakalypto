# Cinquante illustrations complémentaires — 12 novembre 2026

**50 leçons publiées distinctes, 50 dessins spécifiques, 150 vues.** Les références LEC et les chemins exacts sont dans `selection.json`. La sélection a été confrontée à GitHub `60fde10` et au registre local : aucune ne possédait déjà un dessin spécifique. Leurs schémas textuels existants sont conservés, avec les corrections de la revue éditoriale quand nécessaires.

Les cinq familles couvrent physique, environnement, agriculture/biotechnologies, fabrication et ingénierie. Chaque dessin présente trois vues sélectionnables, une légende propre à chaque vue, une explication et les limites du modèle. Les SVG partagent des composants de finition, mais leurs objets et mécanismes sont propres au sujet. Aucun nouveau sujet n’est créé.

## Vérifications

Les **150 vues ont été examinées sur les dix planches `sheet-0.jpg` à `sheet-9.jpg`**, issues des captures natives de la galerie de recette. Les reprises comprennent le trajet optique de l’arc-en-ciel, les liaisons des polymères, la colonne de purification de l’insuline, les armatures du béton et le couple d’un moteur vu en coupe. La comparaison de chaque vue avec sa légende et son explication a aussi permis de préciser les textes de l’ozone, du tissage et de plusieurs vues de comparaison.

Les vrais articles ont été ouverts en version compilée sur une base locale isolée. Les trois boutons de chaque leçon ont été activés avec Entrée/Espace à **1280 et 320 px : 300 états vérifiés**, une seule figure visible, bon numéro d’état, légende et explication présentes, pas de texte dessiné hors cadre ni de débordement horizontal. Le plus petit texte SVG mesure **12,55 px à 320 px**. Les contrôles natifs ont un contour de focus visible. Aucune erreur ni alerte console sur la session compilée. Les six états mobile/ordinateur du moteur ont été contrôlés une dernière fois après maintien du symbole × dans son orientation de lecture ; ils sont remplacés dans les 300 résultats et détaillés dans `motortorque-final-recheck.json`. Les résultats sont dans `compiled-layout.json`.

Les captures mobiles de tous les sujets sont archivées ; la recette mobile intégrale repose sur les mesures et les manipulations, complétées par l’examen visuel de cas ciblés. Elle ne prétend pas que chacune des 150 vues a été regardée individuellement sur un téléphone réel. Les nouveaux dessins ne comportent pas d’animation ni de stockage de progression.

Les tests de préservation comparent exactement le balisage des 153 types de dessins antérieurs, dans leurs trois états, à la version avant le lot. Les tests de mécanisme portent notamment sur la réfraction/réflexion, l’aller-retour lidar, le rapport d’un transformateur et l’alternance du tissage.

## Validation backend

Seuls ces 50 nouveaux dessins reçoivent la validation `status=READY` de ce lot après recette. Les 191 associations préexistantes sont conservées ; leur statut `REVIEW_REQUIRED` reste distinct de `inlineStatus=READY`, car les leçons ont largement changé depuis les anciennes validations. Ce statut ne signifie pas qu’un nouveau dessin doit être créé.

Les preuves et hashes sont exportés dans le manifeste de reprise versionné. Aucun import de production, publication ou déploiement n’est inclus dans cette recette.
