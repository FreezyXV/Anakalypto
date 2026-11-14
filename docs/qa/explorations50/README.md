# Cinquante sujets supplémentaires, 150 vues

Recette du 14 novembre 2026. Les 50 leçons publiées ont été sélectionnées dans la file PostgreSQL en attente de dessin spécifique, puis réservées sous `Codex-50-2026-11-14` avant création. Elles possédaient déjà un schéma éditorial. Aucun bon dessin existant n’a été remplacé ; aucun article ni quiz n’est modifié.

## Périmètre et références

[lessons.csv](lessons.csv) contient les 50 références stables, chemins exacts, titres, identifiants des dessins et hashes des contenus lus. Aucune association par mot-clé. Dix sujets par ensemble : alimentation, arts et fabrication, automobile, environnement et eau, informatique.

Chaque dessin possède trois vues originales, une légende, une explication, une limite et une référence documentaire. Le rendu reste côté serveur et reprend les boutons natifs de l’explorateur. Les schémas sont des modèles pédagogiques : pas de dimensions industrielles, recettes de conservation, conseils médicaux ou procédures de réparation.

Points de justesse contrôlés : eau disponible et stérilité distinguées ; lactose séparé en deux sucres ; fermentation acétique exposée à l’oxygène ; congélation lente et rapide comparées ; portée en clé de sol ; rayons rectilignes au sténopé ; lamelles du papyrus distinctes des fibres du papier ; embrayage réellement relié à l’arbre de sortie ; séparation des circuits d’air de l’intercooler ; boucle de dérivation du refroidissement ; commande ABS distincte de la pression hydraulique ; plaquettes sur deux faces ; algues situées dans le tissu corallien ; blanchissement distinct de l’acidification ; glace continentale distinguée de la banquise ; rejet d’épuration non présenté comme potable ; charges négatives dans le nuage ; grille du transistor isolée ; cookie de session distinct d’une identité ; sel de mot de passe distinct d’un secret ; références cryptographiques orientées vers le bloc précédent.

## Recette visuelle

Les **150 vues ont toutes été regardées à 1280 et 320 px CSS** dans le navigateur, puis les défauts constatés ont été corrigés et les planches concernées recapturées. Les vingt planches finales, cinq sujets par planche, sont dans [captures](captures). L’assemblage recadre les vrais SVG rendus, sans les agrandir ; trois colonnes rapprochent les états pour la revue. Sur la page mobile, ils étaient affichés verticalement. Une route locale temporaire utilisait les composants réels, sans style global `.diagram` ; elle est retirée de la livraison.

[layout.json](layout.json) enregistre les 300 mesures : 150 états uniques par largeur, aucun texte coupé ni chevauchement de texte supérieur à 3 px selon le contrôle géométrique, aucune largeur de page débordante. Largeur minimale de SVG dans la recette mobile : 249 px ; texte minimal : **12,45 px**. Sur ordinateur, les SVG de la planche mesurent environ 324,66 px, avec texte minimal de 16,23 px. Ces mesures complètent la revue à l’œil, elles ne la remplacent pas.

Les **50 vraies pages de leçon ont aussi été opérées aux deux formats** : trois boutons activés à la souris sur ordinateur et avec Entrée au clavier sur mobile, état visible et `aria-pressed` vérifiés, un seul dessin visible à la fois. [interactions.json](interactions.json) conserve les 300 activations réussies. Aucun débordement horizontal ou message d’erreur console observé. Le détail explicatif et le lien de référence ont aussi été ouverts sur la leçon des chaînes de blocs.

## Préservation et vérifications

[before-render-hashes.json](before-render-hashes.json) a été capturé **avant** l’ajout, à partir de `782b435fbe912eca96fcb9143dd9c3741bd02722`. Les trois états de chacun des **245 dessins antérieurs sont identiques octet pour octet**. Les tests historiques conservent aussi la preuve sur les ateliers existants. Les 50 textes de la base d’essai correspondent aux hashes des textes réservés en production.

137 tests isolés réussis, sans base de données : exactitude des associations, états distincts, absence de doublons, identifiants SVG, préservation historique, colinéarité des rayons au sténopé, conservation du nombre de particules lors de la dilatation, ajout d’eau continentale, moyenne cinématique du différentiel et rapport des engrenages. Les échelles et les populations dessinées restent symboliques.

[source-http-checks.json](source-http-checks.json) trace le contrôle des 50 liens. Les liens réellement déplacés ont été remplacés. Certains serveurs refusent les robots (403/429) ou la connexion directe : cela n’est pas assimilé à une page disparue. The Met, Berkeley et les références institutionnelles consultables ont également été lus via le navigateur documentaire. La revue porte sur le mécanisme illustré et ne revalide pas l’ensemble des dates ou affirmations de chaque article ; `lastVerified` n’est pas changé.

## Suivi backend et limites

Après recette, les 50 associations sont terminées avec le même propriétaire, un hash de contenu inchangé, l’empreinte des sources de rendu et cette preuve. [backend-receipts.json](backend-receipts.json) conserve les reçus de validation. L’export synchronise le manifeste versionné et les listes de reprise ; aucun seed/import de contenu n’est effectué.

État confirmé par l’export après ce lot : **948 leçons suivies, 333 dessins spécifiques READY, 615 en attente de dessin spécifique**, 948 schémas éditoriaux READY. « En attente » ne signifie donc pas « aucun visuel ».

Le header reste inchangé selon la réponse explicite de l’utilisateur. Proposition conservée : une ligne mobile avec logo, recherche et menu ☰ ; navigation et réglage du thème dans le menu, à étudier séparément.

Pas de test avec participants ni avec un lecteur d’écran réel. La recette ne démontre pas la compréhension par tous les publics. Compilation de production réussie sur la base d’essai explicite : 1 296 pages générées, sans route de recette ni écriture de contenu. TypeScript, lint, formatage et validation du corpus en mode dry-run réussis. Les contrôles de publication sont rapportés lors de la livraison ; la suite globale locale n’est pas exécutée car sa préparation réinitialise une base.
