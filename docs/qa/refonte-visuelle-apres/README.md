# Refonte des dessins selon la référence « Après »

La référence donnée pour la refonte présente un phonographe avec une pointe et un cylindre réellement reconnaissables, un manuscrit dont on lit la matière, une baudroie dans son milieu et un habitacle avec un mannequin, une ceinture et un coussin. Ces quatre exemples servent d’étalon. Pour une coupe, les matières, la profondeur et la pièce visée par une légende doivent aider à comprendre la leçon. Pour un graphique ou un schéma abstrait, les repères, la hiérarchie et la lisibilité guident la revue.

## Couvertures examinées

La file du 24 novembre 2026 contient 848 leçons publiées avec un dessin dédié. Le premier examen couvre les 829 couvertures issues du registre, réparties en 28 planches, et les 19 captures initiales des ateliers à 390 px. L’inventaire indique, par référence de leçon, la case examinée et l’observation associée. Les dessins qui servent à plusieurs leçons apparaissent sous les références de chaque leçon. [Inventaire](inventaire.csv) · [Planches de couverture](couvertures) · [Ateliers](couvertures/ateliers.jpg)

- 18 leçons redessinées et vérifiées en intégralité.
- 4 leçons de la référence « Après » conservées.
- 391 leçons à reprendre, identifiées dès la couverture.
- 435 leçons dont les autres vues restent à relire avant décision.

L’inventaire est le relevé de cet examen. PostgreSQL continue de servir aux réservations et aux validations. Le relevé n’atteste pas que chaque état de chaque planche a été relu.

## Première série redessinée en SVG

Les leçons du silo, du forage et de l’usine de cellules montrent notamment un plancher perforé, l’eau entre les grains et l’enroulement interne d’une cellule. Le cœur conserve un signal électrique distinct de l’organe. Les planches sur la peau, le follicule, la main et la muqueuse rendent visibles les structures qui changent entre les vues. Les poissons, le sol, le panache et le robot utilisent la même logique de matière et de repères. Les 18 dessins livrés sont des SVG réalisés dans le code. Les images générées au début de la revue ont servi de référence de détail.

[Comparaison technique](comparaison-1.jpg) · [Comparaison anatomique](comparaison-2.jpg)

## Recette

Chromium a vérifié 51 vues, chacune activée à 320 et 1280 px. La recette couvre l’activation tactile, le clic et la touche Entrée, le panneau sélectionné, le cadrage, le chevauchement de texte, les renvois SVG et la console. Le texte le plus petit s’affiche à 12,6 px sur un écran de 320 px. Les 2 384 vues des 792 autres dessins du registre produisent le même rendu que la version précédente. [Mesures](mesures.json) · [Comparaison du rendu](preservation.json)

[Mobile 1](vues-320-1.jpg) · [Mobile 2](vues-320-2.jpg) · [Mobile 3](vues-320-3.jpg) · [Ordinateur 1](vues-1280-1.jpg) · [Ordinateur 2](vues-1280-2.jpg) · [Ordinateur 3](vues-1280-3.jpg)

[Reçus de validation](backend-receipts.json)
