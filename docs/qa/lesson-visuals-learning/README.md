# Apprentissage et modèles d’IA — contrôle du 9 novembre 2026

Dix dessins spécifiques et trente états : descente de gradient, go, surapprentissage, attention causale, arcade DQN, exploration, filtre convolutif, réseau récurrent, règles expertes et diffusion conditionnée. Les dix articles ont été lus ; leurs chemins sont associés explicitement.

Les dix planches `*-desktop.jpg` montrent les trois états à 1280 px. Les dix captures `*-320.jpg` montrent le dernier état dans la leçon à 320 px. Toutes ont été relues à l’œil. Les trente états mobiles ont été manipulés au clavier (Entrée et Espace), avec légende et détail attendus, une seule figure visible, texte SVG minimal de 12,55 px et aucun débordement. Les trente états compilés ont également été manipulés, sans erreur de console ; JSON de preuves joints.

Les courbes sont calculées sur des fonctions fictives. L’attention est normalisée avec masque causal ; le filtre produit réellement sa carte numérique. Cinq tests supplémentaires vérifient ces calculs ainsi que les probabilités epsilon-greedy. Le plateau de go ne calcule aucun résultat ; la scène arcade est originale et fictive ; la maison de diffusion est une illustration du processus, sans modèle exécuté ni photographie cachée.

80 tests isolés réussis ; TypeScript et ESLint du périmètre réussis. Compilation de 1 244 pages réussie dans une copie isolée reliée à PostgreSQL local. Aucun import, déploiement, modification éditoriale ou écriture dans la base de production.

Les sources primaires sont indiquées dans chaque schéma : cours Stanford, cours Google, articles de Vaswani, Silver, Mnih et Rombach, manuel officiel CLIPS. Cela ne constitue ni une évaluation avec de vrais apprenants ni un test avec lecteur d’écran réel.
