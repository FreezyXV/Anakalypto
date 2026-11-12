# Douze illustrations du corps humain · 12 novembre 2026

Douze leçons publiées déjà pourvues d’un schéma éditorial, mais sans dessin spécifique, ont été réservées dans la file PostgreSQL avant création. Aucun article, quiz, brouillon, schéma éditorial ni dessin préexistant n’a été réécrit. Les associations exactes, références et empreintes du texte sont dans [lessons.csv](lessons.csv).

## Recette visuelle effectuée

Les **36 vues** ont été examinées par œil à **1280 et 320 px**, sur les composants réellement utilisés dans les leçons. Les quatre planches mobiles assemblent des captures natives de 251 px de large, sans agrandissement ; les planches ordinateur conservent le contexte de la page. Le texte des SVG mesure au minimum **12,55 px** au format mobile testé. Aucun libellé coupé ni chevauchement de texte détecté dans [layout.json](layout.json). Les lignes de repérage, sens des flèches et structures ont aussi été regardés, au-delà de ces mesures.

Les douze vraies pages d’articles ont été ouvertes sur la base de test explicite, à chaque largeur. Les trois boutons ont été activés au clavier sur mobile et au clic sur ordinateur : état sélectionné et vue visible concordent, explication disponible, aucun débordement horizontal ni erreur console observée. Les 72 activations sont consignées dans [interactions.json](interactions.json). Les textes des articles utilisés ont les mêmes empreintes que ceux réservés en production.

Corrections issues de la recette : repère « Enzymes » dirigé vers la découpe de l’amidon plutôt que vers l’estomac ; sens du parcours sanguin dans le lit capillaire précisé ; flèche de filtration d’eau limitée à une seule membrane du dialyseur ; repère des cellules dégagé ; abréviations des cavités cardiaques expliquées dans les limites. Chaque dessin présente ses simplifications et sa source dans la leçon.

| Planche | Sujets                          | Ordinateur                        | Mobile                          |
| ------- | ------------------------------- | --------------------------------- | ------------------------------- |
| 0       | Circulation, coagulation, pouls | [1280 px](captures/desktop-0.jpg) | [320 px](captures/mobile-0.png) |
| 1       | Digestion, estomac, foie        | [1280 px](captures/desktop-1.jpg) | [320 px](captures/mobile-1.png) |
| 2       | Température, réflexe, dialyse   | [1280 px](captures/desktop-2.jpg) | [320 px](captures/mobile-2.png) |
| 3       | Anticorps, horloge, sommeil     | [1280 px](captures/desktop-3.jpg) | [320 px](captures/mobile-3.png) |

## Justesse et limites

- **LEC-DFD0A1D193E2 · heartloop** : Cœur droit → poumons → cœur gauche → corps ; couleurs pour O₂, sang humain jamais bleu.
- **LEC-EBC1A6DCF75C · clotmesh** : Brèche locale, plaquettes puis renfort de fibrine ; lumière du vaisseau encore ouverte.
- **LEC-035506F93DA3 · pulsewave** : Onde de pression distincte du déplacement des globules rouges ; gonflement amplifié.
- **LEC-C2D1D9B21F1A · gutabsorption** : Organes, villosité et deux voies : glucose vers le sang, grande partie des lipides vers la lymphe.
- **LEC-E3060B5D8C45 · gastricbarrier** : Mucus et bicarbonate protègent la surface sans neutraliser toute la cavité gastrique.
- **LEC-4A8EC7DD9282 · liverlobule** : Sang de la périphérie vers la veine centrale ; bile en sens opposé dans un autre réseau.
- **LEC-29C515454520 · thermostatbody** : Évaporation, vasodilatation, vasoconstriction et frisson ; pas de consigne médicale.
- **LEC-F7BF291591D1 · withdrawalreflex** : Voies sensitive et motrice avec interneurone spinal ; cerveau aussi informé.
- **LEC-74ADE757D315 · dialyser** : Fibres creuses, deux fluides en contre-courant ; diffusion de l’urée et filtration de l’eau distinguées.
- **LEC-AAFFCB7E6A31 · antibodyfit** : IgG avec deux chaînes lourdes et deux légères ; épitope sélectif ; neutralisation comme un exemple.
- **LEC-F43F0364C64E · bodyclock** : Rétine, horloge cérébrale, rythme persistant et coordination des horloges des organes.
- **LEC-BE91BD505D46 · sleepnight** : Hypnogramme fictif, N3 surtout tôt et REM plus long tard ; aucune durée fixe ni donnée de patient.

Les sources de mécanisme ont été consultées : NHLBI (cœur, coagulation, sommeil), NIDDK (digestion et hémodialyse), NIGMS (rythmes circadiens) et OpenStax (estomac, foie, réflexe, thermorégulation, anticorps et onde artérielle). Les URL exactes sont versionnées avec chaque dessin dans `src/lib/lesson-visuals/organs.ts`. Pour l’ultrafiltration, la distinction diffusion/pression est aussi corroborée par la [définition réglementaire américaine de l’hémodialyse](https://www.govinfo.gov/content/pkg/CFR-2025-title21-vol8/pdf/CFR-2025-title21-vol8-part876.pdf), §876.5860. Les vecteurs sont originaux, aucune figure source n’est copiée.

Il s’agit de modèles pédagogiques, pas de reproductions anatomiques à l’échelle ni de conseils de soin. Les trois vues sont des états commentés sans animation : la circulation n’est pas découpée en trois battements. L’hypnogramme est un exemple inventé, sans minuteur de cycle fixe. L’analogie de forme des anticorps ne représente pas une structure moléculaire exacte. La dialyse ne remplace pas toutes les fonctions rénales.

Cette recette ne constitue ni une nouvelle vérification intégrale des articles ni un test utilisateur. Aucune date éditoriale `lastVerified` n’est modifiée. Aucun lecteur d’écran réel n’a été utilisé ; le texte descriptif, les commandes natives et les annonces existantes sont conservés.

## Conservation de l’existant et contrôles

[before-render-hashes.json](before-render-hashes.json) fige les sorties réellement livrées au commit `9b000b0af235f36e407e736f7df2e399f68d150e`, avant tout ajout. Les **203 dessins précédents × 3 états restent identiques octet par octet** ; les contrôles existants conservent aussi toutes les scènes des 20 ateliers. Les nouvelles branches de rendu retournent `null` pour tous les anciens identifiants.

La suite isolée sans base couvre 124 tests, notamment conservation des sorties, chemins exacts uniques, cellules maintenues dans les fibres du dialyseur, écoulements opposés, onde distincte du sang et continuité de l’exemple de sommeil. Les contrôles de typage, lint, format, validation de corpus à blanc et build sont consignés dans la livraison. Aucune suite locale qui réinitialise une base n’est exécutée.

Après recette et contrôle des empreintes inchangées, seules ces douze réservations peuvent être terminées avec `schema:<identifiant>` et ce rapport comme preuve. Les validations des schémas éditoriaux restent indépendantes et inchangées. L’export backend est ensuite régénéré ; les instantanés précédents gardent leur valeur historique.

## Livraison technique

- 124 tests isolés sans base réussis ; lint, typage, format et `git diff --check` réussis.
- Corpus validé à blanc : 299 catégories et 12 486 articles présents dans les fichiers, sans import ni écriture ; ce total inclut des brouillons et ne définit pas le périmètre illustré.
- Build Next.js réussi sur la base de test explicitement choisie : 1 296 pages générées. La route de recette temporaire a été supprimée avant compilation.
- Les douze empreintes des textes de test correspondent aux douze réservations de production. Les mêmes empreintes ont été recontrôlées avant clôture en base. [backend-receipts.json](backend-receipts.json) contient les références et preuves enregistrées.
- Export backend : 948 leçons publiées suivies, 965 schémas éditoriaux dans 948 leçons validées, **253 associations de dessins READY**, **695 en attente de dessin spécifique**, aucune sans visuel, aucun défaut ou revue en attente, aucune réservation restante.

Aucun contenu n’a été importé. Les fichiers de travail des autres contributeurs ne font pas partie de ce lot.
