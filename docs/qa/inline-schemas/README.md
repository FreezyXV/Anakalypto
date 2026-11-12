# Revue des schémas éditoriaux — 12 novembre 2026

Périmètre : les **965 blocs `schema` des 948 leçons publiées**, repris du contenu de GitHub `60fde10150f023bc2f3df2dd6cf934a2dc757830`. Aucun brouillon ajouté, publié ou supprimé pour cette mission.

## Décision et méthode

Les titres, légendes, valeurs et champs des 965 schémas ont été lus. **666 sont conservés sans modification du contenu du schéma ; 299 sont corrigés dans 296 leçons.** Les 300 opérations de correction (dont deux sur le même schéma de nuages), leur détail avant/après et leur raison sont dans `corrections.json`. Une correction peut être une seule précision de contexte ; ce nombre ne signifie pas 299 dessins entièrement refaits.

Le contrôle porte sur la représentation pédagogique : sens des flèches, conditions simultanées ou succession, unités, ordre, portée des valeurs et correspondance avec le sujet. Il ne constitue pas une nouvelle vérification exhaustive de tous les articles ni de toutes leurs sources. Les dates `lastVerified`, les quiz, les statuts et les identifiants sont conservés. Une mention de restes de repas a aussi été retirée de la mauvaise zone du réfrigérateur dans le texte.

Exemples : triangle du feu rendu comme conditions réunies ; réacteur en écoulement continu ; prix de vente en monnaies différentes séparés ; vitesse des nages représentée par un classement qualitatif ; définition de la chaleur corrigée ; grille du transistor séparée du canal ; ordre de la théorie de l’esprit et de la conservation rétabli ; appuis d’un arc placés avant son décintrement. Le Nutri-Score utilise des couleurs explicites, sans présenter D/E en vert.

Les vérifications ciblées ont utilisé notamment [NASA pour le décrochage](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/inclination-effects-on-drag/), [NHTSA pour les niveaux de conduite](https://www.nhtsa.gov/vehicle-safety/automated-vehicle-safety), [ANSES pour l’hygiène domestique](https://www.anses.fr/system/files/ANSES-Ft-HygieneDomestique.pdf), [NIH pour les formes du fer](https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/), [Commission européenne pour l’approche par risques de l’AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) et [Assurance maladie pour les premiers soins d’une entorse](https://www.ameli.fr/assure/sante/themes/entorse-cheville/bons-reflexes-que-faire). Les autres précisions rapprochent le schéma du texte de sa leçon ou rectifient un mécanisme fondamental ; elles ne prétendent pas dater à nouveau toute la leçon.

## Recette du rendu

- Validation du corpus et des 965 spécifications YAML.
- 965 rendus mesurés à **320 et 1280 px** : aucune sortie de figure, aucun débordement interne détecté, aucun chevauchement de cartes. À 320 px, la figure du banc de contrôle mesure 243 px, comme dans une vraie carte d’article. Les résultats finaux sont `mobile-layout-final.json` et `desktop-layout-final.json` ; les mesures antérieures sont des traces de diagnostic.
- **74 schémas examinés par captures à 320 px**, couvrant les neuf formats, les corrections de structure et des cas sensibles ; **15 examinés par captures sur ordinateur**, couvrant aussi les neuf formats. Les 74 ont été capturés aux deux tailles, mais toutes les captures d’ordinateur n’ont pas été regardées une à une. Les captures sont des traces du travail de revue et certaines précèdent les retouches globales de contraste ; onze cas mobiles ont été recapturés après les dernières corrections de barres, de pyramides, de couleurs et d’unité. Les fichiers `*-layout-final.json` décrivent le rendu final des 965 schémas. Les planches `contact-*.jpg` viennent de captures natives du navigateur ; les PNG complets restent dans `screenshots/`.
- Vérification supplémentaire dans de vrais articles ; le banc temporaire reprend le même moteur HTML et la même feuille de styles. Il reste dans la copie de recette hors dépôt et n’est pas livré comme une route publique.

Le contrôle réel a révélé des largeurs minimales de grille incompatibles avec les cartes mobiles. Elles sont maintenant bornées au conteneur. Les longs libellés restent à l’intérieur des cartes, les valeurs d’un graphique passent sous le libellé sur petit écran, les pyramides gardent une variation de largeur sur mobile. Les textes sur les en-têtes orange et verts ont un contraste renforcé. Une valeur nulle ne remplit plus artificiellement une barre.

## Portée de READY

`inlineStatus=READY` enregistre cette revue de **schémas éditoriaux**, séparément de la qualité des dessins SVG. Le hash du texte empêche d’appliquer la validation à un article modifié. Une modification ultérieure du contenu ou du chemin rouvre la revue ; une modification du moteur partagé doit être signalée avec `review-inline`. Aucun test avec des participants ni lecteur d’écran réel n’a été effectué pour cette livraison.

Cette recette et les migrations n’ont concerné que PostgreSQL local jetable. Aucun import en production ni déploiement n’a été réalisé.

La reprise a aussi été testée dans une seconde base locale vide : sept migrations appliquées, 948 indicateurs de schéma validé et 241 associations de dessin restaurés, dont les 50 nouveaux dessins READY. Le manifeste correspond au moteur courant. Voir `docs/qa/inline-schemas/fresh-installation.json`. L’API compilée restitue les 948 références uniques sur dix pages, sans données internes, avec refus des mutations.
