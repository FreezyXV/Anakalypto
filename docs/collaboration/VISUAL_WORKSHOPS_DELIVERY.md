# Ateliers visuels et couvertures Expanded — 10 octobre 2026

Les quinze articles reliés à Découvrir ont désormais un atelier visuel dans leur version approfondie. Les schémas existants servent aussi de couverture à ces articles lorsque ceux-ci n’ont pas d’illustration importée. Cela ajoute quinze ouvertures illustrées et quinze ateliers, avec vingt-deux situations explorables ; il s’agit des quinze mécanismes déjà dessinés et de leurs sept variantes éditoriales.

## Ce que l’utilisateur peut faire

- Manipuler directement un interrupteur ou un curseur, sans commencer un parcours.
- Comparer un état mémorisé avec l’état qu’il explore. Sur ordinateur les dessins sont côte à côte ; sur téléphone ils se suivent à pleine largeur.
- Mémoriser n’importe quel état, puis changer la commande ou la situation : mer/terre, Wi-Fi/murs, fresque/retouche, sol/érosion, réseau/équilibre, pilote/rafale, pain/microbes.
- Lire une légende qui décrit l’état réellement affiché. Le moteur commence à l’admission dans la référence et à la combustion-détente dans l’état exploré.
- Passer aux défis guidés ou à la lecture approfondie depuis les liens de la page.

La référence reste immobile, y compris pour les roues du turbo. Les commandes sont des boutons et curseurs accessibles au clavier. Les tailles et durées sont explicitement schématiques. L’exploration reste locale au composant : elle ne valide aucune découverte, ne répond à aucun quiz et n’écrit aucune progression sauvegardée.

## Implémentation

- `VisualWorkshop.tsx` et son module CSS composent les scènes et la comparaison.
- `workshop.ts` transmet seulement la manipulation et les variantes distinctes issues des JSON. Les réponses des défis restent dans Découvrir.
- `visual-state.ts` produit la description de l’état affiché pour tous les types de dessin, en respectant les images fixes et les phases du piston.
- `DiscoveryVisual.tsx` permet une légende d’état visible. Les vignettes du catalogue ont également une description cohérente avec leur état représentatif.
- La route des articles insère l’atelier et le schéma de couverture. Les articles sans découverte associée conservent leur présentation habituelle.

Les fichiers d’articles et les JSON éditoriaux n’ont pas été modifiés dans cette tranche. La description du pilote dans une rafale est maintenant spécifique à cette situation. Les mêmes composants SVG relient les couvertures, l’exploration libre et les défis guidés.

## Vérifications effectuées

- TypeScript, ESLint et les **35 tests isolés de Découvrir** passent. Trois tests vérifient l’exposition des variantes sans réponses, les légendes des états et la comparaison admission/combustion-détente.
- Compilation Webpack réussie : **1 234 pages**, avec les URL explicites de la base locale de préproduction.
- **Quinze ateliers à 320 px CSS** : deux états commandés au clavier, comparaison, mémorisation et sept variantes. La référence reste stable ; le dessin et sa description changent avec la commande.
- **Quinze couvertures à 320 px** : aucun débordement horizontal de page ni texte SVG hors de la largeur du dessin ; lettres SVG rendues au minimum à environ **12,22 px**. Les ateliers atteignent environ **12,27 px**.
- **Quinze comparaisons à 1280 px** : deux figures présentes, aucun débordement, lettres SVG au minimum à environ **18,67 px**.
- Le moteur, le cyclone, le pilote, le pain et la feuille ont été relus sur capture après correction des collisions signalées par Claude en phase 4. Le focus du bouton de mémorisation est visible. Aucune erreur dans les derniers journaux console inspectés.

Les mesures sont conservées dans `docs/qa/codex-workshops/verification.json`. Les premières comparaisons brutes de HTML pour le circuit et le piston différaient par les commentaires SSR ou la sérialisation du style. Un recontrôle du dessin normalisé et de la transformation CSS effective confirme la même figure et la même légende après mémorisation.

La préproduction active sur `http://127.0.0.1:3002` a reçu les fichiers de cette tranche. La copie locale conserve sa base isolée ; aucun nouvel import ou déploiement de production n’a été effectué par Codex.

## Relecture indépendante attendue

Claude a livré sa phase 4 pendant cette tranche ; elle porte sur la version antérieure aux ateliers. Ses six demandes sont traitées dans `CODEX_CLAUDE_PHASE4_INTEGRATION.md`. Le prompt suivant est `CLAUDE_CODE_PHASE5_PROMPT.md`. Il reste à regarder visuellement tous les ateliers et toutes les couvertures, à tester leurs animations avec une préférence de mouvement réduit réellement activée et à utiliser un véritable lecteur d’écran. Les mesures et l’arbre d’accessibilité ne remplacent pas ces essais. Aucun participant humain n’a encore essayé cette nouvelle présentation ; sa compréhension, sa durée et son plaisir ne sont donc pas mesurés.
