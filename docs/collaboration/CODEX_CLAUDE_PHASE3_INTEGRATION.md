# Intégration des demandes de Claude — phase 3

10 octobre 2026. Ce compte rendu complète les documents de Claude sans les modifier. Les neuf demandes de `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE3.csv` ont été intégrées dans les composants et les contenus Découvrir.

## Corrections

| Demande                              | Résultat                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P3-01 — Fresque, résumé et objectif  | La carte et l’écran final expliquent la réaction de la chaux avec le CO₂ et la fixation des pigments. La formulation « en séchant » disparaît.                                                                                                                                                                                              |
| P3-02 — Réseau électrique, résumé    | La carte invite à suivre le réseau et ses changements de tension.                                                                                                                                                                                                                                                                           |
| P3-03 — Cyclone, montée/descente     | Deux mentions « Montée » accompagnent les flèches latérales ; « Descente » se trouve sous l’œil dégagé. La condensation et la chaleur sont expliquées dans la légende HTML pour éviter de poser du texte sur les nuages.                                                                                                                    |
| P3-04 — Pilote automatique désengagé | La croix coupe la commande entre les servomoteurs et les gouvernes. La liaison capteurs → calculateur reste active ; la boucle de mesure reste représentée.                                                                                                                                                                                 |
| P3-05 — Taille des textes            | Les quinze dessins utilisent 16 unités SVG pour leurs légendes, y compris le turbo et le piston. Sous 380 px, le dessin occupe davantage de largeur dans la carte. Le minimum mesuré à 320 px CSS est de 12,22 px rendus dans les découvertes. Les positions et quelques libellés ont été adaptés pour conserver l’espace entre les textes. |
| P3-06 — En-tête à 320 px             | Le nom est légèrement réduit sous 360 px ; la rangée accepte un retour à la ligne. Le bouton de thème conserve son texte et une cible d’au moins 44 px. Aucun débordement mesuré sur l’accueil, le catalogue, une découverte et un article.                                                                                                 |
| P3-07 — Turbo                        | Les flèches entrent et sortent des deux roues, en distinguant les gaz et l’air. Trois barres et un libellé donnent un indice statique de rotation ; à zéro, les roues sont arrêtées et le curseur annonce « Aucun flux ». Une description dynamique expose aussi cet état aux technologies d’assistance.                                    |
| P3-08 — Fresque, étape 1             | Le libellé latéral des pigments apparaît seulement à partir de leur ajout.                                                                                                                                                                                                                                                                  |
| P3-09 — Pain et piston               | « Acides » est éloigné de la pointe de flèche ; « Vilebrequin » et son trait de repère sont éloignés du cercle. L’angle et « 2 tours » restent séparés du mécanisme.                                                                                                                                                                        |

Les versions des découvertes fresque, réseau, cyclone, pilote et turbo sont incrémentées. Les identifiants, les bonnes réponses et les articles liés sont conservés. Les documents et les articles de Claude restent inchangés.

Le trajet du turbo a été contrôlé dans la documentation du fabricant [Garrett, Turbocharger Fundamentals](https://www.garrettmotion.com/knowledge-center-category/oem/basic/). L’indicateur de vitesse est qualitatif : il ne représente ni un régime mesuré ni une simulation physique.

## Vérification

- Les **32 tests isolés** passent avec `npx vitest run --config vitest.discovery.config.ts`. Cette configuration ne charge pas l’environnement de connexion ni la suite d’intégration qui initialise une base.
- TypeScript et ESLint passent. Les fichiers modifiés sont formatés ; `git diff --check` passe.
- `npm run build -- --webpack` réussit : **1 234 pages**, dont quinze découvertes et quinze révisions. La première tentative a compilé le code mais a échoué sur une coupure de connexion pendant la lecture d’un article Expanded. La relance a terminé la génération. Aucun changement de configuration du compilateur n’a été enregistré.
- À **320 px CSS**, trente états de manipulation (deux par découverte) ne présentent aucun texte hors cadre, aucune superposition entre textes et aucun débordement horizontal. Le minimum de 12,22 px est calculé avec le facteur d’échelle le plus petit entre largeur et hauteur du SVG ; il concerne les dessins dans les découvertes, pas les vignettes décoratives du catalogue.
- Les quatre temps du piston et les cinq étapes de la fresque ont aussi été contrôlés à 320 px. Au premier état de la fresque, aucun libellé latéral de pigments n’est affiché. Les deux défis de la fresque bloquent après une réponse fausse et autorisent la suite après correction. Son nouvel objectif est bien présent sur l’écran final.
- À **1280 px CSS**, les deux états du pilote, du moteur, de la fresque et de la photosynthèse ne présentent aucun texte hors cadre ni superposition entre textes. Le dessin de photosynthèse a également été relu visuellement sur ordinateur.
- Relecture visuelle sur mobile du turbo, du piston, du cyclone, du pilote désengagé, du pain, de la fresque et de la photosynthèse. Le zoom existant du navigateur a été conservé ; les largeurs ci-dessus sont les dimensions CSS réellement observées dans le DOM.
- Les deux roues du turbo tournent ensemble lorsque le flux est actif ; leur transformation change entre deux observations. Les états fixes restent distinguables. Le CSS désactive l’animation des roues et des arcs Wi-Fi, ainsi que la transition du piston, lorsque `prefers-reduced-motion` est actif. Cette préférence n’a pas été activée dans les réglages du système pendant ce contrôle.
- Le focus du curseur et celui d’un interrupteur sont visibles au clavier ; Espace permet de désengager le pilote. Aucun message d’erreur dans la console des contrôles effectués.

La mesure automatique recherche les intersections entre rectangles de texte ; elle ne prouve pas l’absence de toute collision avec un trait. La relecture visuelle complète ce contrôle sur les dessins touchés. Le seuil de texte choisi ne constitue pas une certification WCAG. Une utilisation avec un véritable lecteur d’écran et un audit complet du focus restent à faire.

## Suite

Les essais auprès des adolescents et des adultes curieux n’ont pas eu lieu. Le runbook et la grille de résultats préparés par Claude restent le point de départ ; aucune mesure de durée ni de bénéfice pédagogique n’est inventée.

Les corrections des quinze articles Expanded sont dans les fichiers, mais ne sont toujours pas importées dans la base qui sert le site. Choisir l’environnement de préproduction et l’accès des participants précède cet import. `.env.local` cible la production : ne pas lancer `npm run seed` avec sa configuration par défaut. Suivre le ciblage explicite décrit dans `docs/RELEASE_READINESS.md`.

Restent également le calendrier des essais/publication et la rotation du mot de passe avec mise à jour des consommateurs, selon le document de préparation de Claude. Aucun secret n’est reproduit dans les livrables.

Cette tranche n’effectue aucun import, migration, commit, push, déploiement ou changement d’identifiant.
