# Propulsions, carburants et écopage

Huit nouveaux schémas pour neuf articles publiés : hydrogène (deux leçons), concepts ZEROe historiques, propulsion électrique, moteur à pistons, SAF, freinage au sol, double allumage et écopage.

## Recette finale

- Huit planches `*-desktop.jpg` : tous les 24 états lus visuellement à 1 280 px. Les captures finales reflètent les retouches des légendes et repères.
- Huit `*-320.jpg`, tous lus visuellement sur les vraies pages ; `mobile-states.json` relève les 24 interactions par Entrée et Espace, une seule figure à la fois, légendes conformes, aucune étiquette hors du SVG ni défilement horizontal. Texte minimal rendu : 12,55 px.
- `desktop-bounds.json` : 24 états, aucune étiquette hors cadre. `additional-paths.json` vérifie la seconde leçon sur l’hydrogène à 320 px.
- `production-states.json` : 24 états vérifiés sous `next start` après compilation locale ; `production-console.json` est vide.
- 75 tests isolés, TypeScript et ESLint du périmètre passent. Compilation locale de 1 244 pages réussie. Log `/private/tmp/anakalypto-aircraft-propulsion-build.log` ; base isolée sur le port 54329. Galerie temporaire supprimée et serveur de recette de production locale arrêté.

## Points de représentation

- Hydrogène : stockage cryogénique, deux chaînes de propulsion, eau/chaleur pour la pile et NOₓ possibles pour la combustion. Aucune promesse de bilan climatique nul.
- ZEROe : trois concepts de septembre 2020 identifiés comme historiques ; aucune échéance industrielle garantie ni revendication qu’il s’agisse des choix actuels. Le programme révisé de 2025 est signalé séparément dans les suivis éditoriaux.
- Électrique : la masse du pack reste pratiquement conservée quand l’énergie stockée diminue. L’hybride choisi est une architecture série, pas tous les hybrides.
- Moteur : architecture à plat, coupe du temps moteur, puis entraînement de l’hélice, trois vues distinctes. Les quatre temps complets restent dans le texte.
- SAF : familles de matières premières, conversion et qualification ; le CO₂ de combustion est explicite. Aucune réduction chiffrée ni compatibilité universelle sans mélange.
- Freinage : effort du sol opposé à l’avancement, spoiler repéré distinct du volet, exemple d’inverseur du flux secondaire avec cœur restant vers l’arrière.
- Magnétos : la panne est indiquée sur une seule source et sa liaison devient grise ; l’autre bougie reste active. Deux pannes alternatives, sans procédure de maintenance.
- Écopage : coque au contact, puis zoom d’une seule écope avec eau relative arrivant de l’avant et soute ventilée, enfin charge transportée représentée en coupe. Formes fonctionnelles, sans vitesses ni consignes de choix d’un plan d’eau.

Le chapitre 7 FAA a été lu en texte depuis son PDF officiel téléchargé dans `/private/tmp`, le lecteur web refusant sa taille. Les autres sources institutionnelles sont indiquées dans les figures. Le rapport USDA 2016 fournit le contexte des opérations d’amphibies ; il n’est pas présenté comme un plan coté des soutes.

Pas de test avec participants ni de lecteur d’écran réel. Aucun article, lastVerified, import de base, commit, push ou déploiement modifié par cette série.
