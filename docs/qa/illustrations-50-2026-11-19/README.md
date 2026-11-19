# Cinquante dessins, de la musique à l’énergie

Recette du 19 novembre 2026. Les illustrations complètent 50 leçons publiées qui avaient déjà un schéma dans le texte. La file de production donnait 948 leçons suivies et 383 dessins validés au départ. Les 50 références sans dessin ont été réservées au nom de `Codex-50c-2026-11-19` avant le travail. Les titres, textes, quiz et dates des articles sont restés identiques. Les 50 empreintes de contenu réservées en production concordent avec les textes servis par la base d’essai.

## Sujets

[Les 50 références, chemins et sources](lessons.csv) listent huit sujets d’arts et de culture, huit de géographie, six d’environnement, six d’industrie, sept d’automobile, six d’ingénierie, cinq de sport et quatre d’énergie. Les associations sont explicites et chacune possède trois états dessinés, une légende lisible, une explication, des limites et une source liée sur la page de leçon.

Points vérifiés dans les dessins : alignement d’un événement sonore avec l’image et retard visible ; douze pas de même rapport dans l’octave ; largeurs d’une pyramide des âges ; sens de circulation de l’air dans une cellule de Hadley ; échelle des surfaces et grille déformée en projection de Mercator ; cumul de CO₂ qui augmente encore lorsque les émissions diminuent ; becs du pied à coulisse en contact au zéro ; passage des gaz par une paroi poreuse et suie retenue ; suspension reliée à la roue et oscillations décroissantes ; joueurs de goalball en travers de la trajectoire ; circulation des ions et des électrons par des trajets différents.

## Vérification visuelle

Les 150 états ont été examinés sur les planches issues du navigateur à 320 et 1280 px, puis les dessins corrigés ont été recapturés. Dans les planches, les trois colonnes regroupent les trois états d’une leçon. En mobile, les vues étaient affichées verticalement. Points de départ : [arts à 320 px](planche-320-1.jpg), [géographie à 1280 px](planche-1280-3.jpg), [automobile à 320 px](planche-320-7.jpg), [sport à 1280 px](planche-1280-9.jpg) et [énergie à 320 px](planche-320-10.jpg). Les 20 planches couvrent le lot complet.

[Mesures des 300 rendus](layout.json) : aucun texte hors du cadre, aucun chevauchement de texte supérieur à 3 px selon la mesure géométrique et aucune page débordante. Les 150 états ont également été activés sur les vraies pages de leçon aux deux largeurs, avec Entrée sur mobile et un clic sur ordinateur. [Les 300 activations](interactions.json) confirment l’état sélectionné et l’affichage d’une seule vue à la fois. La plus petite taille mesurée du texte SVG dans les leçons est de 12,55 px à 320 px. Le navigateur n’a signalé aucune erreur de console pendant la recette. Le panneau de limites a été ouvert et le lien documentaire vérifié dans l’[échantillon d’accessibilité](accessibility.json).

## Vérifications techniques et sources

Comparaison à l’identique des 1 035 états des 345 dessins antérieurs, dans le même environnement JavaScript, avec le composant du commit `60d3d2fe9a1521317c59ef69bab50d44742dd645`. Les [empreintes de référence portables](before-portable-hashes.json) prolongent ce contrôle dans les tests, sans changer les coordonnées SVG livrées. La suite isolée couvre les associations exactes, trois géométries distinctes par dessin, les textes publiés et les dessins historiques. Elle compte 147 tests réussis.

Les [références](source-http-checks.json) documentent les mécanismes illustrés. Les refus d’accès automatique et les délais de téléchargement sont recensés dans le relevé. Ces retours sont distincts d’une page introuvable. Il s’agit d’une revue des dessins et de leurs légendes. La compréhension par des participants et la lecture avec un lecteur d’écran réel restent à mesurer.

## Suivi

Les reçus du backend sont consignés dans [backend-receipts.json](backend-receipts.json). Le manifeste de reprise et les listes sont exportés depuis la file persistante après validation. La file compte **433 dessins spécifiques validés et 515 à illustrer** parmi les 948 leçons publiées. Les 948 leçons ont un schéma éditorial validé et les réservations du lot sont libérées.
