# Cinquante planches de la scène au numérique

Lot du 20 novembre 2026. La file de production comptait 948 leçons publiées, dont 433 avec un dessin spécifique validé et 515 qui en attendaient un. Les 50 leçons retenues avaient déjà un schéma éditorial intégré au texte et validé. La réservation a été faite sous `Codex-50d-2026-11-20` avant la création. [La liste des 50 leçons](lessons.csv) associe leur référence, leur chemin, la planche réalisée et sa source.

## Direction visuelle

Les 50 dessins vectoriels suivent la référence A, avec des aplats sobres, des matières reconnaissables et des annotations courtes. Dix leçons sont consacrées aux arts et à la culture, dix à l’automobile, dix aux méthodes de terrain et à l’industrie, dix aux ressources, et dix à l’information. Chaque dessin comporte trois vues sélectionnables, accompagnées d’une légende, d’explications et d’une note sur le périmètre du modèle.

L’allumage montre les deux enroulements de la bobine et l’écart entre les électrodes, la triangulation montre comment une base s’étend à un deuxième triangle, et le SMS conserve la même capacité quand l’encodage change. Les exemples chiffrés fictifs et les coupes hors échelle sont signalés sous les planches.

## Recette et reprise

Les 20 planches à 320 et 1280 px proviennent de Chromium sur les véritables pages de leçon. Exemples pour [les arts sur mobile](planche-320-01.jpg), [l’automobile sur mobile](planche-320-04.jpg), [l’industrie sur ordinateur](planche-1280-05.jpg), [les ressources sur mobile](planche-320-07.jpg) et [le numérique sur ordinateur](planche-1280-09.jpg). Les trois colonnes donnent les trois états de chaque dessin, à lire ligne par ligne. [Les mesures des 300 états](layout.json) contrôlent le texte, la mise en page, la commande active et les références SVG. La commande tactile est utilisée à 320 px et les commandes natives au clic et au clavier à 1280 px. Les 300 activations ont réussi sans débordement de page, sans chevauchement ni rognage de texte, et sans erreur dans la console. Le texte SVG le plus petit mesure 12,6 px à 320 px. La compréhension par des participants et la lecture avec un lecteur d’écran restent à mesurer.

Les [empreintes de contenu](content-hashes.json) comparent les textes de la base d’essai à ceux réservés en production. La [comparaison avec l’atlas précédent](preservation.json) couvre les 1 185 états des 395 dessins antérieurs, ainsi que leurs légendes et explications. Le corpus valide en mode simulation, et la suite isolée compte 148 tests réussis.

Les [contrôles des liens](source-http-checks.json) distinguent les réponses HTTP automatiques des références consultables par un autre canal. Les [reçus de validation](backend-receipts.json) et le [manifeste](../../collaboration/ILLUSTRATION_STATUS.json) permettent de reprendre le travail sans réillustrer ces leçons.

Après validation et export, la file compte 483 dessins spécifiques prêts, 465 leçons en attente de dessin et aucune réservation ouverte. Les 948 validations des schémas éditoriaux sont conservées.
