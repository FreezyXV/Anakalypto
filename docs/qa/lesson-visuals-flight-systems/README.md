# Navigation et sécurité aérienne

Neuf schémas, dix leçons publiées : navigation inertielle, triangle des vents, tour/approche/en route, taux d’accidents, TCAS, ADS-B, enregistreurs, enquête de sécurité et certification de type.

## Vérifications

- Neuf planches `*-desktop.jpg` : les 27 états ont été lus visuellement à 1 280 px. Les corrections finales TCAS (vue de profil et deux couleurs) et arrondi ont leurs captures mises à jour.
- Neuf `*-320.jpg`, tous lus visuellement sur les vraies pages ; `mobile-states.json` relève les 27 états manipulés au clavier. Une seule figure à la fois, légendes conformes, aucun débordement horizontal ou libellé hors du SVG, fonte minimale 12,55 px.
- `desktop-bounds.json` : aucune étiquette hors du cadre. `additional-paths.json` vérifie la seconde leçon de contrôle aérien à 320 px.
- `production-states.json` : les 27 états fonctionnent sous `next start` sur la compilation locale ; `production-console.json` est vide. Galerie temporaire retirée et serveur de production locale arrêté.
- 75 tests isolés passent. TypeScript et ESLint du périmètre passent. Le triangle des vents conserve la vitesse propre et l’addition vectorielle ; le modèle d’erreur inertielle intègre deux fois un biais constant.
- Compilation locale réussie, 1 244 pages. Log `/private/tmp/anakalypto-flight-systems-build.log`, base isolée sur le port 54329. Aucun import de contenu, commit, push ou déploiement.

## Représentations et limites

Les statistiques OACI concernent explicitement 2024 et le périmètre des avions de plus de 5 700 kg en transport commercial régulier ; le dessin ne les présente pas comme les dernières données disponibles, une comparaison entre transports ou une baisse continue. Les 95 points, dont 10 orange, distinguent le total d’accidents de ceux qui sont mortels. Le taux est arrondi.

Les traces de navigation, messages et signaux des enregistreurs sont fictifs. Les vecteurs de vitesse sont calculés ; les trajectoires d’évitement TCAS montrent un exemple vertical de profil, sans délai universel ni instruction de pilotage. Un avis RA n’ordonne pas toujours une montée et une descente.

Le processus de certification condense les quatre étapes EASA en trois vues en regroupant base et programme. L’essai de flexion est qualitatif et ne prétend pas décrire toutes les preuves d’un programme réel. Une recommandation d’enquête est distincte de sa mise en œuvre.

Le lien ANSV fournit une introduction institutionnelle aux enregistreurs, les pages BEA ayant été intermittentes lors de la consultation. Aucun article ni date lastVerified n’a été modifié. Recette humaine au lecteur d’écran et essais avec participants non réalisés.
