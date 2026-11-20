# Soixante-cinq nouvelles planches pédagogiques

Lot du 20 novembre 2026. La file comptait 483 dessins spécifiques validés et 465 leçons en attente sur 948 leçons publiées. Les 65 leçons réservées avaient déjà un schéma éditorial intégré au texte. [Le registre des références](lessons.csv) associe leur chemin, la nouvelle planche et sa source.

## Direction visuelle

Les dessins suivent la charte A avec des coupes et des vues de dessus, une palette d’atelier, des repères communs entre les états et des légendes courtes. Chaque leçon propose trois vues et une explication pour chacune d’elles. Le Burj Khalifa se lit à la fois en élévation et en plan. Les trajectoires de l’ESP comparent l’intention du conducteur à l’écart mesuré. Les poutres, les câbles et les arcs reprennent la même question sous trois formes. Le fruit du palmier est ouvert pour identifier deux matières premières distinctes. Les exemples fictifs et les coupes hors échelle sont signalés sous les planches.

Exemples dans les captures [du patrimoine](planche-320-03.jpg), [des aides à la conduite](planche-320-05.jpg), [des aliments et des sols](planche-320-07.jpg), [des ouvrages et des robots](planche-1280-10.jpg) et [des courbes et des orbites](planche-1280-12.jpg).

## Recette et reprise

Les 26 planches proviennent des pages de leçon dans Chromium à 320 et 1280 px. Les trois colonnes donnent les trois états de chaque dessin. Les 390 changements de vue ont été déclenchés dans les deux formats, au toucher sur mobile et au clic et au clavier sur ordinateur. [Les mesures](layout.json) donnent les états activés, les tailles de texte et les résultats des contrôles de cadre et de références SVG. Le texte SVG le plus petit mesure 12,6 px à 320 px. Aucun texte ne déborde ou ne se chevauche selon les mesures, et aucune erreur n’a été signalée dans la console. La validation porte sur le rendu et le fonctionnement. Un lecteur d’écran réel et des participants n’ont pas été mobilisés.

[Les empreintes des textes](content-hashes.json) comparent la base d’essai à la version réservée en production. [La comparaison du rendu avant et après intégration](preservation.json) couvre les 1 335 états des 445 dessins antérieurs et leurs textes associés. Le corpus valide en simulation et la suite isolée compte 148 tests réussis.

[Le relevé des liens](source-http-checks.json) indique les réponses HTTP et les corroborations utilisées quand un hôte refusait la requête automatique. [Les reçus backend](backend-receipts.json) et le [manifeste](../../collaboration/ILLUSTRATION_STATUS.json) permettent de poursuivre depuis la file persistante.

Après validation et export, la file compte 548 dessins spécifiques prêts, 400 leçons en attente d’un dessin et aucune réservation ouverte. Les 948 validations des schémas éditoriaux concordent avec le manifeste antérieur.
