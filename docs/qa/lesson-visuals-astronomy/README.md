# Recette des schémas astronomiques

Douze dessins en trois vues pour seize articles publiés. Captures natives sans retouche : planches à 1280 px et troisième état dans chaque article à 320 px. Tous les états ont été activés par Entrée ou Espace après chargement des scripts.

- `desktop-bounds.json` : 36 vues, aucun texte hors du SVG et aucun identifiant de dessin dupliqué.
- `mobile-states.json` : 36 états, une seule figure visible, bonne légende et explication, largeur 320 px sans débordement, lettres du dessin à 12,55 px minimum.
- `production-states.json` et `production-console.json` : 36 états sous `next start` local ; aucune erreur ou alerte.
- `additional-paths.json` : les quatre autres chemins d’articles contrôlés à 320 px.

Une première commande mobile visait un onglet de largeur différente ; la recette a été reprise sur le bon onglet à 320 px. Un contrôle du spectre effectué avant le chargement du client a été rejoué après chargement complet. Aucun de ces essais précoces n’est compté comme une réussite. Le contrôle des identifiants a aussi été étendu à toutes les familles de dessins après détection d’une collision de nom de dégradé, corrigée dans les nouveaux nuages.

| Sujet                                                              | Trois vues sur ordinateur        | Article sur mobile             |
| ------------------------------------------------------------------ | -------------------------------- | ------------------------------ |
| Deux renflements, une Terre qui tourne                             | [Planche](tides-1280.jpg)        | [Mobile](tides-320.jpg)        |
| Du nuage à la fusion                                               | [Planche](starbirth-1280.jpg)    | [Mobile](starbirth-320.jpg)    |
| Deux destins selon la masse                                        | [Planche](starlife-1280.jpg)     | [Mobile](starlife-320.jpg)     |
| Une planète fait baisser la lumière reçue                          | [Planche](transit-1280.jpg)      | [Mobile](transit-320.jpg)      |
| Lire les creux d’un spectre                                        | [Planche](transmission-1280.jpg) | [Mobile](transmission-320.jpg) |
| Une amplification, puis une petite anomalie                        | [Planche](microlensing-1280.jpg) | [Mobile](microlensing-320.jpg) |
| La gravité dévie des trajets lumineux                              | [Planche](lensing-1280.jpg)      | [Mobile](lensing-320.jpg)      |
| Des distances qui augmentent, des galaxies qui gardent leur taille | [Planche](expansion-1280.jpg)    | [Mobile](expansion-320.jpg)    |
| La queue ionique s’éloigne du Soleil                               | [Planche](comet-1280.jpg)        | [Mobile](comet-320.jpg)        |
| Un fond lumineux masque les étoiles faibles                        | [Planche](skyglow-1280.jpg)      | [Mobile](skyglow-320.jpg)      |
| Des temps de trajet pour calculer une position                     | [Planche](gps-1280.jpg)          | [Mobile](gps-320.jpg)          |
| Huit planètes, deux grandes familles                               | [Planche](planets-1280.jpg)      | [Mobile](planets-320.jpg)      |
