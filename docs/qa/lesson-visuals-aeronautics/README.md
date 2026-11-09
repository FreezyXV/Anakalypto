# Aéronautique : écoulements, propulsion et instruments

14 schémas spécifiques, associés explicitement à 16 leçons publiées. Aucun nouveau contenu dans la base : seules les associations et illustrations sont ajoutées au code. Les vingt anciens dessins Découvrir restent conservés.

## Recette

- Les 42 états sont inspectés sur les planches `*-desktop.jpg` à 1 280 px ; chaque dessin fait aussi l’objet d’une capture de son troisième état sur la vraie page à 320 px, `*-320.jpg`. Les 14 captures mobiles ont été lues visuellement.
- `desktop-bounds.json` : 42 états, aucune étiquette hors du SVG.
- `mobile-states.json` : 42 interactions réelles par Entrée et Espace, une seule figure visible, légende conforme, aucune étiquette débordante ni défilement horizontal ; texte SVG minimal rendu à 12,55 px.
- `production-states.json` : 42 états vérifiés sur les vraies routes sous `next start`, à 1 280 px, après compilation locale. `production-console.json` est vide.
- 73 tests isolés passent, dont conservation des forces du plané et tangence des fronts du cône de Mach. TypeScript et ESLint du périmètre passent.
- Compilation de 1 244 pages réussie dans la copie isolée, base PostgreSQL locale sur le port 54329. Log : `/private/tmp/anakalypto-aeronautics-build.log`. Le serveur de compilation temporaire a été arrêté et la galerie temporaire retirée.

## Corrections pendant la revue

Flèches de vitesse replacées dans la couche limite ; sens des flèches autour du winglet corrigé ; disque du rotor et force rendus perpendiculaires ; raccord de la queue de l’hélicoptère corrigé ; flux accéléré ajouté après l’hélice ; contour de séparation du givrage clarifié ; repère du bec déplacé avec la pièce ; trois légendes du plané remontées dans le cadre. Toutes les captures finales sont réalisées après ces corrections.

## Portée

Les liens institutionnels et les limites figurent dans chaque schéma. Le dessin de l’horizon n’est pas un instrument de vol ; le plané a une pente volontairement accentuée de finesse 3 ; le cône acoustique représente de petites perturbations, pas le choc réel d’un avion. Les circuits sont fonctionnels, pas des plans de fabrication.

Cette recette ne remplace ni un essai avec des utilisateurs, ni une vérification au lecteur d’écran. Aucune publication, modification d’article, date de vérification, écriture en production ou promesse de validation complète du corpus.
