# Mission Claude Code — fiabilité éditoriale et préparation des essais

Tu travailles sur Anakalypto, une encyclopédie francophone qui développe un format « Découvrir » : expériences courtes et visuelles, manipulation et deux défis, avec passage vers les articles Expanded. Le public prioritaire comprend les jeunes dès 10 ans et les adolescents/adultes curieux. L’objectif produit est de proposer une alternative agréable aux jeux mobiles, sans promettre une efficacité pédagogique qui n’a pas été mesurée.

## Coordination immédiate avec Codex

Ta première mission a livré 12 découvertes, la relecture de 15 articles et trois documents. Le catalogue contient 15 découvertes publiées **localement** dans 12 domaines. Codex travaille actuellement sur 11 nouveaux schémas SVG interactifs pour compléter les quatre existants. Il prend en charge les composants, les états visuels, le schéma, les tests du moteur et les JSON de découverte. Son travail est en cours : ne considère pas les nouveaux dessins comme déjà validés ou livrés.

Lis avant de commencer :

- `docs/CLAUDE_DELIVERY.md` ;
- `docs/EDITORIAL_REVIEW.md` et `docs/EDITORIAL_BACKLOG.csv` ;
- `docs/collaboration/DISCOVERY_CONTRACT.md` ;
- `docs/collaboration/INTEGRATION_CLAUDE.md` ;
- les instructions locales applicables au dépôt.

**Répartition stricte pour travailler simultanément :**

- Tu peux modifier les articles des 12 fichiers `content/domaine-*.md` déjà concernés par ton audit et créer les documents listés ci-dessous.
- Ne modifie pas `src/`, `tests/`, `prisma/`, les configurations, `package*.json`, `README.md`, `content/discovery/` ni les documents de livraison Codex pendant cette mission.
- Ne réécris pas les changements de Codex, ne lance pas de formatage global, de restauration Git, de nettoyage ou de remplacement massif de fichiers.
- Pour un changement nécessaire dans un JSON ou un composant, documente précisément la proposition dans ton fichier de demandes d’intégration ; Codex s’en charge.
- Conserve les documents de ta première livraison comme historique. Écris les résultats de cette mission dans de nouveaux fichiers.

## Priorité 1 — fermer les points de fiabilité encore ouverts

Reprends toutes les lignes « À vérifier » de `EDITORIAL_REVIEW.md`, pas uniquement les dates. Pour chaque affirmation, lis directement une source primaire, institutionnelle ou spécialisée qui soutient précisément le propos. Un résultat de recherche, un résumé automatique ou deux versions linguistiques de Wikipédia ne constituent pas une vérification.

Exemples identifiés dans l’audit :

- Ohm en 1827 ; brevet de Büchi en 1905 et voitures turbo de 1962 ; Chevreul en 1823.
- Photosynthèse : stomates, amidon ; cyclone : écart de température du cœur et échelle de Saffir-Simpson.
- Levain : rôle du gluten, pain ancien trouvé en Suisse.
- Verre : taux français auprès de Citeo et affirmation sur les émissions évitées.
- Électricité : règle N-1, longueur du réseau et date du chiffre RTE.
- Wi-Fi : chronologie IEEE/Wi-Fi Alliance et record de distance.
- Aéronautique : Sperry, C-54 et démonstration Airbus.
- Papier : kraft, blanchiment et Cai Lun ; sol : feldspath/argile et Dokoutchaïev.
- Fresque : surface d’une giornata et dates historiques.
- Téléphone : Strowger, centraux français, statistiques d’abonnés et résolution concernant Meucci.
- Moteur : Beau de Rochas, Otto et distinction allumage diesel/préchauffage.

Ce sont des pistes à vérifier, pas des valeurs à recopier comme acquises. Si une recherche ciblée ne permet pas une confirmation fiable, enlève le détail non essentiel ou reformule prudemment. Conserve la précision nécessaire à la compréhension du mécanisme. Ne remplace jamais un chiffre inconnu par un chiffre plausible.

Pour le verre, distingue année des données, année de publication, verre d’emballage/verre total, France/Europe et indicateur calculé. N’utilise pas un taux provenant d’un périmètre différent. Si la source Citeo reste inaccessible, indique la limite et retire le taux plutôt que de prétendre l’avoir vérifié.

Ajoute les sources utiles au front matter des articles. Ne change pas automatiquement `lastVerified` pour tout le corpus : une date mise à jour doit correspondre à une vérification réelle du périmètre de l’article, documentée dans ton rapport. Ne modifie pas les identifiants, slugs, catégories ou statuts de publication.

## Priorité 2 — contrôler les explications et les quiz

Relis les 15 articles et leurs quiz à la lumière de ces corrections :

- une seule réponse doit être défendable ;
- les mauvaises réponses ne doivent pas être vraies dans une autre phrase de l’article ;
- les défis portent d’abord sur le fonctionnement, plutôt que sur la mémorisation de dates ;
- chaque explication d’erreur doit aider à comprendre ;
- le texte doit rester accessible dès 10 ans sans infantilisation.

Lis les découvertes en mode lecture seule et propose les corrections nécessaires dans `CLAUDE_INTEGRATION_REQUESTS.csv`. Repère notamment les formulations absolues trompeuses : absence totale de microbes sans levain, mer froide qui ne s’évaporerait pas, mer chaude suffisante à elle seule, courant téléphonique supposé nul dans le silence, carbonatation assimilée au simple séchage, circulation électrique assimilée au trajet lent d’un électron. Vérifie les affirmations avant toute recommandation ; ne corrige pas les JSON toi-même.

Pour les nouveaux dessins de Codex, prépare une grille de relecture par sujet : mécanisme attendu, état désactivé, état activé/étapes, scène de transfert, description accessible, erreurs possibles. Tant que les dessins changent, formule des observations datées et distingue proposition et défaut réellement observé.

## Priorité 3 — préparer les essais avec les deux publics

Crée `docs/USER_TEST_PROTOCOL.md`, utilisable par le propriétaire sans formation particulière. Prévois une petite session exploratoire avec les deux publics, sans présenter l’échantillon comme statistiquement représentatif.

Inclure :

1. recrutement proposé et organisation pratique ;
2. script neutre du modérateur, sans guider vers la bonne réponse ;
3. parcours mobile de trois découvertes variées, réparties entre participants pour limiter la fatigue ;
4. observation de la manipulation, hésitations, erreurs, besoin d’aide, abandon, temps réel par découverte ;
5. question de compréhension avant/après et une situation nouvelle, distincte des deux défis déjà vus ;
6. courte reprise le lendemain si les participants sont disponibles ;
7. questions sur le plaisir, l’envie de recommencer et les raisons, sans réponses suggérées ;
8. grille anonymisée de collecte et méthode simple de synthèse ;
9. distinction entre compréhension immédiate, rétention et envie de revenir.

Crée `docs/USER_TEST_RESULTS_TEMPLATE.csv` vide, avec en-têtes et consignes séparées. N’invente aucun participant, résultat, durée observée ou validation pédagogique. Les trois minutes affichées dans l’application restent une cible à mesurer.

## Priorité 4 — préparer une mise en ligne reviewable

Crée `docs/RELEASE_READINESS.md` avec :

- inventaire exact des articles corrigés et des points encore non résolus ;
- conditions de validation du format Découvrir et des sources ;
- procédure proposée pour vérifier/importer les Markdown dans une base de préproduction choisie, puis contrôler les pages Expanded et leurs liens inverses ;
- commandes du dépôt pertinentes et leur effet réel, après lecture des scripts ;
- séparation entre vérification locale, import de contenu et déploiement ;
- éléments que le propriétaire devra décider : environnement cible et moment de mise en ligne.

N’exécute aucun import, migration, commande `build:with-db`, réinitialisation, commit, push ou déploiement pendant cette mission. Aucun secret ou contenu d’un fichier `.env` ne doit apparaître dans les livrables. Le but est de préparer un résultat concret, pas d’intervenir sur la production.

## Vérifications autorisées

- Vérification éditoriale des sources, format des articles et quiz.
- `node --import tsx prisma/seed.ts --dry-run` pour valider le corpus sans écrire en base.
- Le serveur local de Codex utilise le port 3001. Ne le stoppe pas et ne lance pas un second serveur dans le même dossier. Un contrôle navigateur sur ce serveur est possible, mais distingue tes observations de celles de Codex.
- Ne lance pas la suite d’intégration globale : elle migre et vide une base. Si un contrôle exige une base isolée, décris le besoin et la procédure sans l’exécuter sur un environnement ambigu.

## Livrables

1. Articles corrigés, seulement dans le périmètre autorisé.
2. `docs/EDITORIAL_REVIEW_PHASE2.md` : tableau affirmation/source consultée/action/limite ; liens précis et dates de consultation réelle ; liste des fichiers modifiés.
3. `docs/CLAUDE_INTEGRATION_REQUESTS.csv` : `discovery_slug,step_id,priority,observation,proposed_text_or_behavior,source_url,status` ; aucune modification de JSON.
4. `docs/USER_TEST_PROTOCOL.md`.
5. `docs/USER_TEST_RESULTS_TEMPLATE.csv`, vide.
6. `docs/RELEASE_READINESS.md`.
7. `docs/CLAUDE_DELIVERY_PHASE2.md` : changements, vérifications réellement exécutées et résultats, limites, demandes à Codex et décisions restantes.

Critères de réussite : chaque ancien point ouvert a une décision traçable ; les détails fragiles non essentiels ne restent pas présentés comme certains ; le corpus passe en dry-run ; les documents permettent de lancer les essais réels et de préparer la préproduction ; aucune affirmation de test utilisateur ou de publication n’est inventée ; les fichiers en cours de Codex restent intacts.

Avance de façon autonome dans ce périmètre. Si un point ne peut pas être résolu, livre les autres travaux et explicite la limite au lieu de bloquer toute la mission.
