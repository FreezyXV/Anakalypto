# Livraison Claude Code — 10 octobre 2026

Mission éditoriale décrite dans `docs/collaboration/CLAUDE_CODE_PROMPT.md` : audit de quinze
articles, douze découvertes, briefs visuels. Aucun fichier de Codex n'a été modifié. Il n'y a
eu ni commit, ni push, ni import en base, ni déploiement.

## Bilan

- **Douze découvertes écrites, douze publiables.** Toutes portent `status: "published"` après
  vérification des sources et test au navigateur. Aucune ne reste en brouillon : la seule qui en
  attendait une, `les-quatre-temps`, est devenue publiable grâce au curseur `flow` nommé ajouté
  par Codex pendant la mission.
- **Quinze articles audités.** Tous ont reçu au moins une source primaire ou spécialisée, et dix
  ont des passages corrigés. Détail : `docs/EDITORIAL_REVIEW.md`.
- **Quinze briefs visuels** : `docs/EDITORIAL_BACKLOG.csv`.

## Fichiers modifiés

Contenus :

- Douze nouveaux fichiers `content/discovery/*.json` :
  - `feuille-et-lumiere` (sciences fondamentales) ;
  - `naissance-d-un-cyclone` (géographie) ;
  - `le-pain-qui-gonfle` (alimentation) ;
  - `la-bouteille-qui-revient` (environnement) ;
  - `le-voyage-de-l-electricite` (énergie) ;
  - `les-donnees-dans-l-air` (informatique) ;
  - `le-pilote-qui-corrige` (aéronautique) ;
  - `de-la-pate-a-la-feuille` (industries) ;
  - `naissance-d-un-sol` (sciences du vivant) ;
  - `la-couleur-dans-le-mur` (arts) ;
  - `la-voix-dans-le-fil` (communication) ;
  - `les-quatre-temps` (automobile).

  Cela fait douze domaines, chaque découverte liée à un article publié.

- Corrections ciblées dans douze fichiers `content/domaine-*.md`, sur les quinze articles audités
  uniquement : 20 sources ajoutées, passages corrigés listés dans l'audit. Slugs, chemins,
  statuts, références croisées et `lastVerified` sont inchangés.

Documentation : `docs/EDITORIAL_REVIEW.md`, `docs/EDITORIAL_BACKLOG.csv`, ce fichier, et deux
paragraphes du `README.md` (chiffres du corpus, format Découvrir, état réel de la base de
production).

## Choix pédagogiques

- **Un seul objectif par découverte**, toujours un mécanisme et jamais une date. Six étapes :
  observer, manipuler, premier défi, comprendre, second défi, retenir.
- **Le bon visuel.** Tous les nouveaux sujets utilisent `flow`, le seul composant générique. Aucun
  schéma `soap`, `turbo` ou `circuit` n'a été réutilisé hors de son sujet. Chaque chaîne est soit
  une succession réelle (quatre temps, machine à papier, trajet de l'électricité), soit une chaîne
  causale annoncée comme simplifiée dans la légende ou le retour (photosynthèse, cyclone, sol).
- **La bonne manipulation.**
  - **Curseur** quand la progression a un sens : distance parcourue, eau retirée, temps écoulé,
    temps de séchage, avancement du cycle. Le moteur affiche alors le nom de l'étape atteinte.
  - **Interrupteur** quand la chaîne dépend d'une condition : lumière, mer chaude, levain, tri des
    intrus, Wi-Fi allumé, pilote automatique engagé, voix. La première étiquette de la chaîne est
    toujours vraie dans les deux états, pour que l'état « éteint » reste juste.
- **Défis.** Le second défi est un transfert : placard noir, arrivée sur la côte, retouche sur
  enduit sec, pluie sur un champ nu. Les distracteurs reprennent des idées fausses courantes :
  l'oxygène venu du CO₂, le son qui voyage dans le fil, la rotation de la Terre comme source
  d'énergie du cyclone, la graisse « détruite ». Chaque réponse, juste ou fausse, a un retour
  explicatif. Suivant le contrat révisé, chaque question de défi se comprend seule, puisque
  `/decouvrir/<slug>/reviser` la présente sans le texte de l'étape.
- **Ton** : phrases courtes, pas d'infantilisation. Aucune promesse d'efficacité ou de rétention.

## Sources

Chaque découverte cite au moins une source primaire, institutionnelle ou spécialisée, lue
directement le 10 octobre 2026 (`checkedAt`) :

| Organisme                                       | Découverte         |
| ----------------------------------------------- | ------------------ |
| OpenStax                                        | Photosynthèse      |
| NOAA et NOAA AOML                               | Cyclone            |
| Espace des sciences (dossier appuyé sur l'Inra) | Levain             |
| TNO, étude de 2011, et Close the Glass Loop     | Verre              |
| EIA, Sénat et Connaissance des Énergies         | Électricité        |
| Arcep et Cisco                                  | Wi-Fi              |
| FAA                                             | Pilote automatique |
| Techniques de l'Ingénieur                       | Papier             |
| FAO et ONU Info                                 | Sol                |
| Tate et ASBP Lime Group                         | Fresque            |
| Brevet de Bell de 1876                          | Téléphone          |
| NASA Glenn                                      | Quatre temps       |

Une deuxième source indépendante accompagne les sujets nuancés : cyclone, électricité, verre, sol,
fresque.

Points de méthode :

- un résumé automatique d'une page RTE en erreur 404 a repris mot pour mot la question posée ;
  il a été écarté et aucun chiffre RTE n'est utilisé ;
- les pages qui refusent la lecture automatique (Britannica, Smithsonian, CAMEO) ne sont pas
  citées comme vérifiées ;
- Cisco renvoie 403 à `curl`, mais la page a été lue avec l'outil web.

## Contrôles réellement effectués

- **Schéma** : les quinze JSON, brouillons compris, passent `discoveryLessonSchema`, via un script
  hors dépôt.
- **Tests de découverte** : `node_modules/.bin/vitest run --config vitest.discovery.config.ts`,
  16 tests réussis. Ils vérifient notamment que chaque `expandedPath` désigne un article publié.
- **Corpus** : `node --import tsx prisma/seed.ts --dry-run` affiche « Corpus valide », sans
  écriture en base.
- **Liens** : toutes les URL de sources ajoutées répondent 200, sauf Cisco (403 aux robots, page
  lue par ailleurs).
- **Navigateur.** Le serveur de Codex tourne sur le port 3001 dans le dépôt, et Next 16 refuse un
  second serveur dans le même dossier. Le test a donc été fait sur une copie du dépôt dans un
  dossier temporaire, avec `next dev -p 3002`, y compris les changements en cours de Codex.
  Playwright a été installé hors du dépôt. Pour les douze découvertes, à 390 × 844 et à
  1280 × 800 :
  - parcours complet ;
  - manipulation dans les deux positions, avec vérification des retours ;
  - mauvaise réponse à chaque défi : retour d'erreur, bouton « Continuer » bloqué ;
  - bonne réponse : retour, puis passage à l'étape suivante ;
  - écran de fin, lien « Approfondir » vers le bon article (200) et lien inverse présent dans
    l'article ;
  - aucune erreur console, aucun débordement horizontal, aucune étiquette SVG hors cadre ;
  - catalogue à 390 px : les douze découvertes listées, sans débordement ;
  - les quinze routes `/reviser` répondent 200, sans parcours de révision complet.
- **Lecture des écrans.** Captures relues à 390 px pour l'électricité, le papier et les quatre
  temps.
- **Non fait** : suite d'intégration globale (elle migre et vide une base) ; aucun test avec de
  vrais enfants ou adultes. Les durées de 3 minutes restent une cible, non mesurée.

## Limites

- `flow` dessine une chaîne verticale. Les quatre temps et le pilote automatique sont des boucles :
  le texte le dit, mais le dessin ne le montre pas.
- En mode interrupteur, `flow` met tout en évidence ou seulement la première étape. Il ne montre
  donc pas où la chaîne s'arrête réellement : pour une feuille dans le noir, la chaîne s'arrête
  avant la capture de la lumière. Les retours textuels portent la nuance.
- Les articles publiés le 9 octobre reposent encore souvent sur Wikipédia pour leurs dates
  historiques. Elles sont listées « À vérifier » dans l'audit.
- La France n'a pas de taux de recyclage du verre sourcé directement : Citeo n'était pas
  joignable.

## Demandes au moteur Codex

1. **Boucle pour `flow`**, avec une flèche du dernier élément vers le premier. Exemple :
   ```json
   {
     "kind": "flow",
     "loop": true,
     "labels": ["Admission", "Compression", "Combustion-détente", "Échappement"],
     "caption": "…"
   }
   ```
   Pour `les-quatre-temps` et `le-pilote-qui-corrige`.
2. **Point d'arrêt pour l'interrupteur sur `flow`** : nombre d'étapes atteintes quand
   l'interrupteur est éteint. Exemple : `"offReached": 1` pour la feuille dans le noir, ou
   `"offReached": 2` pour un lot de verre bloqué au tri.
3. **Composant `piston`** : cylindre en coupe, deux soupapes, bougie et piston animé par un
   curseur de 0 à 100, pour un cycle de deux tours. Brief dans `EDITORIAL_BACKLOG.csv`.
4. **Composants souhaités, priorité plus basse** :
   - coupe verticale de cyclone ;
   - plan d'appartement avec ondes atténuées par les murs ;
   - courbe sonore puis courbe de courant de même forme, pour le téléphone.

## Découvertes

Publiées, douze sur douze :

- `feuille-et-lumiere`
- `naissance-d-un-cyclone`
- `le-pain-qui-gonfle`
- `la-bouteille-qui-revient`
- `le-voyage-de-l-electricite`
- `les-donnees-dans-l-air`
- `le-pilote-qui-corrige`
- `de-la-pate-a-la-feuille`
- `naissance-d-un-sol`
- `la-couleur-dans-le-mur`
- `la-voix-dans-le-fil`
- `les-quatre-temps`

Brouillons : aucun.

« Publiées » signifie visibles en local sur `/decouvrir`. Rien n'est déployé : la mise en ligne
dépend du commit du moteur de Codex et d'une décision du propriétaire.
