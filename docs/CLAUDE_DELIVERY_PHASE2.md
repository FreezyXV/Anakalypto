# Livraison Claude Code, phase 2 — 10 octobre 2026

Mission : `docs/collaboration/CLAUDE_CODE_PHASE2_PROMPT.md`. Les documents de la phase 1 sont
conservés comme historique, sans changement de contenu. Ils ont seulement été mis en forme avec
Prettier, fichier par fichier, pour passer la vérification de la CI.

Il n'y a eu aucun import, migration, commit, push ni déploiement, et aucune modification de
`src/`, `tests/`, `prisma/`, des configurations, de `package*.json`, de `README.md`, de
`content/discovery/` ni des documents de Codex.

## Ce qui a changé

**Articles.** Douze fichiers `content/domaine-*.md`, seulement dans les quinze articles audités :

- chaque point « À vérifier » de la phase 1 a reçu une décision : confirmé, corrigé, retiré ou
  limite signalée. Le tableau complet, avec sources et citations, est dans
  `docs/EDITORIAL_REVIEW_PHASE2.md` ;
- neuf questions de quiz ont été remplacées ou précisées pour porter sur le fonctionnement plutôt
  que sur des dates ou des chiffres non vérifiés, et une explication a été nuancée (automanette) ;
- trente-trois sources ont été ajoutées au front matter ;
- slugs, catégories, statuts et `lastVerified` sont inchangés.

**Documents créés.**

| Fichier                                | Contenu                                                                                               |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `docs/EDITORIAL_REVIEW_PHASE2.md`      | Tableau affirmation, source, décision et limite ; contrôle des quiz ; fichiers modifiés               |
| `docs/CLAUDE_INTEGRATION_REQUESTS.csv` | Vingt observations sur les découvertes, avec proposition, source et statut ; aucun JSON modifié       |
| `docs/VISUAL_REVIEW_GRID.md`           | Grille de relecture des douze dessins, avec observations datées                                       |
| `docs/USER_TEST_PROTOCOL.md`           | Protocole d'essai exploratoire pour les deux publics                                                  |
| `docs/USER_TEST_RESULTS_TEMPLATE.csv`  | Grille vide, en-têtes seulement                                                                       |
| `docs/RELEASE_READINESS.md`            | Inventaire, conditions de validation, effet réel des commandes, procédure de préproduction, décisions |
| `docs/CLAUDE_DELIVERY_PHASE2.md`       | Ce rapport                                                                                            |

## Principales décisions éditoriales

- **Retirés faute de source primaire**, chiffres et faits non essentiels :
  - cœur du cyclone de 15 à 20 °C plus chaud ;
  - 315 kg de CO₂, four à 1 500 °C et couleur conservée (verre) ;
  - record Wi-Fi de 382 km, portée de 20 à 50 m, 802.11g ;
  - C-54 de 1947 ;
  - Cai Lun, chiffons et blanchiment (papier) ;
  - surface d'une giornata, Crète ;
  - statistiques téléphoniques de 1912 et des années 1970 ;
  - « downsizing » ;
  - moteur « le plus utilisé ».
- **Corrigés selon la source** :
  - pain de Twann daté de 3560 à 3530 avant notre ère (et non 3700) ;
  - brevet de Büchi _déposé_ en 1905 ;
  - Chevreul a _publié_ en 1823 ;
  - stabilisateur Sperry à Paris en 1914 ;
  - automanette réservée aux avions qui en ont une ;
  - Chambre des représentants (et non le Congrès) pour Meucci ;
  - bougies de préchauffage du diesel ;
  - affaiblissement progressif du cyclone sur terre ;
  - anecdote de Strowger présentée comme une histoire racontée.
- **Verre** : le taux Citeo de 88 % est cité avec sa limite (année des données non précisée), et
  distingué du taux européen de collecte. La consigne demandait de distinguer les périmètres et
  de signaler la limite plutôt que de prétendre avoir vérifié.

## Vérifications réellement exécutées

| Contrôle                                                                        | Résultat                                                                                                                                      |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `node --import tsx prisma/seed.ts --dry-run`, après les corrections             | « Corpus valide », aucune écriture                                                                                                            |
| Statut HTTP de toutes les URL de sources ajoutées aux articles en phases 1 et 2 | Toutes répondent 200 avec `curl`                                                                                                              |
| Lecture directe des sources                                                     | WebFetch pour les pages HTML ; pour les PDF, téléchargement puis `pdftotext` : FAA, EPA, Bosch, RTE, ASBP, PATSTEC, Histel, FAO-Dokoutchaïev  |
| `node_modules/.bin/vitest run --config vitest.discovery.config.ts`              | 32 tests réussis, sur le moteur et les JSON en cours de Codex                                                                                 |
| Prettier, sur les seuls fichiers `docs/` de Claude                              | Mis en forme, puis vérifiés                                                                                                                   |
| Observation des dessins de Codex, serveur 3001, 390 × 844, 10 octobre, 18 h 33  | Descriptions accessibles relevées pour douze découvertes ; quatre captures regardées ; aucune erreur console. Aucun serveur stoppé ni relancé |

Non exécuté :

- la suite d'intégration globale, qui migre et vide une base ;
- tout essai avec des utilisateurs ;
- tout import ou déploiement.

## Limites

- **Origine des micro-organismes du levain** : sans source INRAE lisible, la demande
  correspondante s'appuie sur une source générale et reste marquée « à confirmer ».
- **Sources spécialisées non institutionnelles**, signalées comme telles dans le tableau :
  - Ate Up With Motor (voitures turbo de 1962) ;
  - engrXiv (Beau de Rochas, prépublication) ;
  - The Conversation (gluten) ;
  - Histel (téléphonie parisienne).
- **Phrases générales non revérifiées une à une**, listées dans la relecture :
  - analogies ;
  - savons durs ou mous ;
  - lag du turbo.
- **Dessins** : huit des douze n'ont été évalués que par leur description accessible, pas à
  l'œil. Les dessins évoluent encore.
- `README.md` n'a pas été modifié pendant cette mission, comme demandé. Ses chiffres datent de la
  phase 1 ; il passe la vérification Prettier.

## Demandes à Codex

Détail complet dans `docs/CLAUDE_INTEGRATION_REQUESTS.csv`. Les plus importantes :

1. **Cyclone, défauts observés** : le texte renvoie à une « troisième étape » qui n'existe plus,
   et l'œil est dessiné à l'intérieur des nuages au lieu d'une colonne dégagée où l'air descend.
2. **Fresque** : le curseur « Temps de séchage » assimile la carbonatation au séchage, alors que
   le dessin, lui, distingue bien les deux. Proposition : « Temps écoulé », et un nouveau retour.
3. **Électricité** : « Fais-la voyager » et « Distance parcourue » laissent croire qu'un même
   objet va de la centrale à la prise. Proposition : « Suis le réseau », et une phrase sur la
   lenteur des électrons face à la transmission presque instantanée de l'énergie.
4. **Pain** : « aucun être vivant ne produit de gaz » sans levain est une formulation absolue.
5. **Corrections mineures** :
   - pilote automatique (vitesse et automanette) ;
   - distracteur du diesel ;
   - formulations absolues du cyclone et du sol ;
   - sources manquantes dans les JSON du Wi-Fi et du verre ;
   - lisibilité des petits textes dans les dessins.

## Décisions restantes pour le propriétaire

Voir `docs/RELEASE_READINESS.md`, section 5 :

- l'environnement de préproduction ;
- l'environnement des essais ;
- l'ordre entre les essais et la mise en ligne ;
- le moment de la publication ;
- la rotation du mot de passe de la base de production.
