# Mission Claude Code — phase 3 : recette indépendante et préparation des essais

Tu poursuis le travail sur Anakalypto après ta livraison de phase 2 et la livraison des visuels par Codex. Ton objectif est de vérifier le résultat actuel, fermer les limites encore utiles à résoudre et rendre les documents opérationnels pour les premiers essais. Travaille de façon autonome dans le périmètre ci-dessous.

## 1. État actuel : éviter de refaire le travail livré

- Le catalogue Découvrir contient 15 découvertes, chacune avec un dessin adapté : savon, turbo, circuit, piston et 11 nouveaux mécanismes SVG.
- Codex a intégré les demandes de ta phase 2. Le détail des décisions est dans `docs/collaboration/CODEX_CLAUDE_PHASE2_INTEGRATION.md` ; consulte-le avant de reprendre les 20 lignes de ton CSV.
- Cyclone : la référence à la « troisième étape » est supprimée ; l’œil est une colonne dégagée avec de l’air descendant, séparée des nuages. Le symbole de rotation à gauche est une vue du dessus dans l’hémisphère nord.
- Fresque : le titre, la commande, les explications et la phrase à retenir distinguent carbonatation et perte d’eau.
- Réseau : « Suis le réseau » et une commande par étapes remplacent l’image d’un même électron faisant tout le trajet.
- Pain : le retour désactivé ne présente plus la pâte comme stérile. Une source INRAE a été lue et ajoutée ; elle décrit le levain naturel, sans démontrer à elle seule l’origine précise de chaque microbe.
- D’autres demandes ont été intégrées : automanette, distracteur diesel, formulations absolues, source FEVE, retrait de fréquences non nécessaires dans le défi Wi-Fi.
- Les petits textes des 11 nouveaux dessins ont été agrandis ; certaines mentions secondaires figurent désormais dans la légende HTML.
- Codex rapporte 32 tests isolés réussis, TypeScript et lint réussis, une compilation finale avec `npm run build -- --webpack`, 11 parcours mobiles complets et des contrôles de révision. Ce sont des vérifications techniques, pas des essais utilisateurs.
- Les articles Expanded corrigés sont encore dans les Markdown : aucun import de ces corrections ni déploiement n’a été effectué dans cette collaboration. Leurs pages lisent la base.

Lis les instructions locales applicables, puis : `docs/CLAUDE_DELIVERY_PHASE2.md`, `docs/EDITORIAL_REVIEW_PHASE2.md`, `docs/CLAUDE_INTEGRATION_REQUESTS.csv`, `docs/VISUAL_REVIEW_GRID.md`, `docs/RELEASE_READINESS.md`, `docs/USER_TEST_PROTOCOL.md`, `docs/collaboration/DISCOVERY_CONTRACT.md`, `docs/collaboration/VISUAL_DELIVERY.md` et `docs/collaboration/CODEX_CLAUDE_PHASE2_INTEGRATION.md`.

## 2. Répartition des fichiers

Tu peux modifier uniquement les 15 articles déjà audités dans les 12 fichiers `content/domaine-*.md`, tes documents de préparation (`VISUAL_REVIEW_GRID.md`, `RELEASE_READINESS.md`, `USER_TEST_PROTOCOL.md`, `USER_TEST_RESULTS_TEMPLATE.csv`) et les nouveaux livrables de phase 3.

Ne modifie pas `src/`, `tests/`, `prisma/`, `content/discovery/`, les configurations, les dépendances, `README.md` ou les documents de Codex. Conserve les rapports et le CSV des phases 1 et 2 comme historique. Pour tout défaut de composant ou de JSON, documente une demande précise à Codex. Ne réécris pas son travail et ne lance pas de formatage global, restauration Git ou nettoyage.

## 3. Priorité 1 — vérifier les corrections et réellement regarder les visuels

Crée `docs/CLAUDE_INTEGRATION_RECHECK_PHASE3.csv`. Reprends chacune des 20 lignes du CSV de phase 2 et indique : demande d’origine, décision Codex, preuve observée dans la version actuelle, statut (`confirmé`, `partiellement résolu`, `à revoir`, `sans action justifiée`) et éventuelle suite. Une reformulation différente de la tienne peut résoudre le problème : juge le mécanisme et la compréhension, pas la conformité littérale à ta proposition.

Relis visuellement les 15 découvertes, y compris les trois pilotes, dans le navigateur. Pour chacune :

- regarde le dessin réel, pas seulement sa description accessible ou son code ;
- compare les deux états d’un interrupteur ou les étapes d’un curseur ;
- contrôle les vues fixes des défis et les scènes complémentaires lorsqu’elles existent ;
- vérifie le sens des flèches, les éléments reliés, le changement effectivement visible et les simplifications ;
- vérifie si le dessin permet de comprendre l’idée centrale avant de lire la description détaillée.

Fais la recette principale à 390 px et sur ordinateur. Contrôle aussi à 320 px et 430 px les vues les plus denses : photosynthèse, réseau, pilote automatique, papier et fresque. Vérifie lisibilité, superpositions et débordements. Distingue les dimensions rendues des textes et la valeur `font-size` dans le SVG : une valeur de 14 unités ne garantit pas 14 pixels après mise à l’échelle.

Pour chaque parcours, essaie la manipulation, une mauvaise réponse puis la bonne à chacun des deux défis, l’écran final, le lien vers Expanded et la révision express. Vérifie la navigation au clavier et les noms accessibles des commandes. Pour le lien inverse dans Expanded, distingue le fonctionnement du lien de l’état éditorial de l’article servi par la base.

Actualise `VISUAL_REVIEW_GRID.md` avec la version réellement regardée, l’état ou la scène, la largeur, la date, l’observation et un verdict motivé. Enregistre les captures utiles dans `docs/qa/claude-phase3/`, sans données personnelles, et référence-les. Si un outil ne permet pas de regarder une capture, marque le contrôle visuel comme non effectué. Les captures et descriptions ne constituent pas un test avec un enfant ou un adulte.

Ne stoppe pas le serveur 3001, ne lance pas un deuxième serveur dans le même dossier et n’efface pas les données d’un navigateur personnel. Utilise un contexte de test dédié si tu dois repartir d’une progression vierge.

## 4. Priorité 2 — résoudre les dernières limites éditoriales ciblées

Concentre-toi sur les points encore ouverts ; ne recommence pas tout l’audit historique :

- Longueur du réseau RTE : trouver une donnée officielle récente, avec année et périmètre exact, ou retirer le chiffre ancien s’il n’apporte rien au mécanisme.
- Taux Citeo : rechercher l’année et la définition précise de l’indicateur. Si elles restent indéterminées, conserver explicitement cette limite ou retirer le chiffre. Ne confonds pas collecte, recyclage et périmètres France/Europe.
- Levain : lire la source INRAE ajoutée par Codex, puis vérifier séparément l’affirmation sur l’origine des microbes. Ne transforme pas une source sur la présence de levures et bactéries dans le levain en preuve de leur provenance. Si nécessaire, reformule sobrement pour ne pas enseigner une origine non démontrée.
- Sources spécialisées signalées en phase 2 : chercher une source primaire plus solide seulement pour les affirmations centrales ou contestables. Si un détail périphérique reste fragile, le retirer peut être préférable à une recherche indéfinie.

Lis directement les sources utilisées, enregistre le passage pertinent et distingue source consultée, interprétation et limite. Un statut HTTP 200 ne prouve pas qu’une source soutient une affirmation. Ne modifie `lastVerified` que si tout le périmètre de l’article a réellement été revérifié ; cette mission ciblée ne le justifie pas automatiquement.

Consigne les changements et limites dans `docs/EDITORIAL_REVIEW_PHASE3.md`. Toute proposition pour un JSON ou un dessin va dans `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE3.csv`, avec découverte, étape, sévérité, problème, reproduction, proposition et source si nécessaire.

## 5. Priorité 3 — actualiser les documents et préparer une séance utilisable

Actualise `RELEASE_READINESS.md` : les anciennes demandes déjà intégrées ne doivent plus apparaître comme défauts actuels. Distingue clairement articles présents dans les fichiers, articles réellement servis depuis la base, vérifications techniques, recette indépendante et essais utilisateurs. Toute validation doit renvoyer à une preuve ou à un rapport daté.

Relis le protocole et la grille de résultats selon les interactions actuelles. Vérifie que les questions de transfert n’ajoutent pas de certitudes absentes du cours : par exemple, revenir au-dessus d’une mer chaude peut favoriser un cyclone, sans garantir son renforcement. Garde les réponses brutes avant le codage et sépare compréhension, rétention et envie de revenir.

Crée `docs/USER_TEST_RUNBOOK.md` : préparation matérielle, choix des trois découvertes par participant, vérification de l’accès, remise à zéro dans le contexte de test, script du modérateur, ordre des questions, mesures à noter, suivi du lendemain et méthode de synthèse. Une séance pilote courte peut tester le déroulement avant la session complète. Laisse la grille de résultats vide tant que personne n’a participé ; n’invente aucun recrutement, résultat, durée observée ou bénéfice pédagogique.

Les choix de préproduction, d’accès aux participants, d’ordre entre essais et publication, et de date de publication restent à décider par le propriétaire. Propose une séquence concrète et indique ce qui dépend de ces choix, sans bloquer les travaux indépendants.

## 6. Vérifications et limites opérationnelles

Tu peux lancer `npm run seed:check`, `node_modules/.bin/vitest run --config vitest.discovery.config.ts` et les contrôles statiques pertinents. Lis leurs scripts avant exécution. Vérifie Prettier sur tes seuls fichiers modifiés ; signale les problèmes hors de ton périmètre sans les corriger globalement.

Ne lance pas `npm test` ni une commande Vitest sans la configuration isolée : la suite globale migre et vide une base. `.env.local` cible actuellement la production. Aucun import, migration, `seed` sans `--dry-run`, `setup:db`, `build:with-db`, commit, push ou déploiement dans cette mission. Ne crée pas de ressource externe.

Pour le mot de passe de la base : documente seulement la procédure de rotation et les consommateurs à actualiser, sans afficher de secret ni effectuer la rotation. Le propriétaire devra l’exécuter avec l’accès approprié ; n’invente pas de mot de passe et ne le demande pas dans un document.

## 7. Livraison attendue

Livre les documents actualisés, les éventuelles corrections d’articles ciblées et :

1. `docs/CLAUDE_INTEGRATION_RECHECK_PHASE3.csv` : les 20 demandes de phase 2, avec décision et preuve.
2. `docs/EDITORIAL_REVIEW_PHASE3.md` : sources réellement lues, corrections et limites.
3. `docs/CLAUDE_INTEGRATION_REQUESTS_PHASE3.csv` : seulement les défauts encore présents ou nouveaux ; conserve les en-têtes s’il n’y a aucune demande.
4. `docs/USER_TEST_RUNBOOK.md` : séance prête à organiser.
5. `docs/CLAUDE_DELIVERY_PHASE3.md` : fichiers modifiés, contrôles et résultats réels, captures consultées, demandes à Codex et décisions restantes.

Critères de réussite : aucune ancienne anomalie corrigée présentée comme actuelle ; les 15 dessins réellement regardés ou les limites d’observation explicites ; chaque défaut reproductible et localisé ; le corpus et les tests isolés passent ; les documents permettent d’organiser les essais ; aucune écriture en base ni publication. Si un contrôle est impossible, termine le reste et rapporte précisément ce qui manque.
