# Contrat du format Découvrir — version 1

## Responsabilités

Codex : moteur, composants, routes, suivi local, tests et trois pilotes. Claude Code : enrichissement et vérification ciblée des articles, douze nouveaux scénarios, documentation éditoriale. Le propriétaire : direction artistique et relecture des visuels facultatifs. Une copie du prompt Claude se trouve dans `CLAUDE_CODE_PROMPT.md`.

## Données

Une découverte est un JSON UTF-8 dans `content/discovery/<slug>.json`. `src/lib/discovery/schema.ts` fait autorité ; aucune migration Prisma n’est requise. Les fichiers sont validés, puis seuls ceux portant `status: "published"` sont exposés. Les brouillons doivent eux aussi respecter le format.

Champs racine : `slug`, `version` (entier positif), `status` (`draft` ou `published`), `title` (100 caractères maximum), `summary`, `domain`, `domainPath` (slug de premier niveau), `minutes` (1–10), `expandedPath` (chemin absolu d’un article publié), `objective`, `sources`, `steps`.

Chaque source contient `title`, `url`, `publisher`, `checkedAt` (AAAA-MM-JJ ; date de consultation réelle). Une date de consultation ne constitue pas une certification indépendante de l’ensemble de la leçon.

Chaque étape contient un `id` unique, `title` (80 caractères maximum), `text` (240 caractères maximum), `visual` et éventuellement `interaction`. Les autres textes courts sont eux aussi limités à 240 caractères. Une découverte contient 5 à 8 étapes, au moins une manipulation et deux choix avec `checkpoint: true`.

### Visuels

`visual` contient `kind`, `caption`, `active` (booléen, faux par défaut) et éventuellement les options ci-dessous. Les nouveaux champs restent facultatifs : les contenus de la première version sont compatibles.

- `soap` : graisse entourée de molécules ; l’activation révèle les molécules. Têtes bleues vers l’extérieur, queues orange vers la graisse.
- `turbo` : deux roues sur le même axe, flux séparés. L’activation fait tourner les roues ; un curseur règle qualitativement leur vitesse. Aucune unité physique ni relation quantitative n’est revendiquée.
- `circuit` : pile, lampe et interrupteur. L’activation ferme l’interrupteur et allume la lampe. Les flèches représentent le sens conventionnel du courant.
- `flow` : 2 à 5 éléments nommés dans `labels`, chacun de 30 caractères maximum. Un curseur fait avancer la mise en évidence dans la chaîne. Il représente une progression illustrative et non une simulation physique.
- `piston` : moteur à essence en coupe, deux soupapes, bougie, piston, bielle et vilebrequin. Le curseur 0–100 parcourt deux tours (720°) et les quatre temps. À 100, le dessin revient à l’admission, au début du cycle suivant. La géométrie reste schématique ; le calage réel des soupapes, les échanges thermiques et les performances ne sont pas simulés.

Options de `flow` :

- `loop: true` dessine un retour depuis la dernière étape. `loopTo` est l’index de destination en base zéro, zéro par défaut. Il doit viser une étape antérieure ; le pilote automatique revient ainsi à ses capteurs, index 1, et conserve la consigne des pilotes.
- `offReached` est le nombre d’étapes atteintes quand la valeur est zéro : 0 signifie aucune, 1 signifie seulement la première, etc. Il doit rester inférieur au nombre d’étapes. Une croix signale la première étape non atteinte ; une description accessible nomme l’arrêt. En l’absence de ce champ, la chaîne conserve son comportement initial.

Option de `piston` : `phase` (0–3) fixe un temps pour les étapes explicatives ou les questions : admission, compression, combustion-détente, échappement. Sans phase fixe, la valeur du curseur règle la position. Ne pas dessiner une bougie dans une explication de l’allumage diesel : conserver un `flow` compatible ou créer un modèle adapté.

### Dessins par sujet (ajout compatible)

Les types `photosynthesis`, `bread`, `glass`, `wifi`, `telephone`, `cyclone`, `paper`, `soil`, `fresco`, `grid` et `autopilot` offrent des dessins propres à ces mécanismes. Les manipulations pilotent leur état ; les valeurs ne constituent pas des mesures physiques. Les descriptions dynamiques sont définies dans `src/lib/discovery/mechanisms.ts`.

- `paper`, `soil`, `fresco`, `grid` : cinq étapes, sélectionnées par le curseur ou des boutons directs. `frame` (0–4) fixe l’image d’une explication ou d’un défi. Ce champ est interdit sur une manipulation, pour éviter de rendre le curseur inopérant.
- `scene` est une variante limitée au sujet : `walls` pour Wi-Fi, `land` pour cyclone, `retouch` pour fresque, `erosion` pour sol, `balance` pour réseau, `gust` pour pilote automatique, `microbes` pour pain.
- `phase` reste réservé au piston ; `loop`, `loopTo` et `offReached` restent réservés à `flow`. Les autres dessins représentent directement leur interruption ou leur boucle.

Exemple : `{ "kind": "fresco", "caption": "Retouche sur enduit durci", "active": true, "frame": 4, "scene": "retouch" }`. La description accessible précise que le nouvel ajout reste en surface.

Voir `VISUAL_DELIVERY.md` pour l’inventaire des dessins et leurs limites.

Le SVG est décoratif pour les technologies d’assistance ; `caption`, l’état textuel dynamique et le retour de manipulation décrivent ce qui doit être compris. Les dessins sont des schémas simplifiés. `active` s’applique aux étapes sans manipulation et aux questions ; pour une manipulation, la valeur de la commande gouverne le dessin. Une `phase` fixe prend le dessus sur `active` pour un piston.

### Interactions

Choix :

```json
{
  "kind": "choice",
  "question": "Quel changement observes-tu ?",
  "options": [
    { "id": "a", "label": "Première proposition", "feedback": "Explication adaptée à ce choix." },
    { "id": "b", "label": "Deuxième proposition", "feedback": "Explication adaptée à ce choix." }
  ],
  "correctOptionId": "a",
  "checkpoint": true
}
```

Le joueur peut réessayer. Le passage à l’étape suivante nécessite une réponse correcte ; le premier essai reste enregistré pour proposer une révision après une erreur. Deux à quatre options, avec identifiants uniques et bonne réponse existante.

Interrupteur : `kind: "toggle"`, `label` (nom accessible), `onLabel`, `offLabel`, `onFeedback`, `offFeedback`. La valeur initiale est désactivée ; toute action permet de continuer.

Curseur : `kind: "range"`, `label`, `minLabel`, `maxLabel`, `feedback`. Plage interne 0–100 par pas de 10 ; niveaux visibles faible/modéré/important, sauf pour `flow` qui affiche l’étape atteinte. Pour `piston`, pas de 1, nom du temps courant et quatre boutons pour choisir directement un temps. Le déplacement respecte la réduction des animations demandée par le système. Les libellés doivent correspondre à la progression montrée. Une action sur le curseur ou un bouton de temps permet de continuer.

## Publication et évolutions

Changer `version` lorsqu’une modification altère les étapes, les bonnes réponses ou la signification de la progression. Un changement de version invalide la session précédente. Les anciennes données « leçon lue » de l’encyclopédie restent distinctes des résultats des défis.

Routes : `/decouvrir` pour la sélection, `/decouvrir/<slug>` pour une expérience. Le lien `expandedPath` permet d’approfondir ; l’article expose automatiquement le lien inverse. Un chargement depuis le serveur n’envoie au client que la découverte ouverte, pas tout le corpus.

La progression est locale, sans compte ni synchronisation. Un premier essai correct aux défis donne « Défis réussis » ; une erreur donne « À revoir ». Le lendemain, la découverte devient une suggestion de révision. Il ne s’agit pas d’une mesure exhaustive de maîtrise.

### Révision express (moteur, ajout compatible)

La route `/decouvrir/<slug>/reviser` reprend uniquement les étapes `choice` portant `checkpoint: true`. Les questions doivent rester compréhensibles seules ; les retours et le schéma sont affichés après une réponse. Elle conserve la découverte terminée et ses premiers essais. Une révision interrompue peut reprendre après rechargement.

Le stockage local accepte désormais des champs facultatifs `review`, `reviewedAt` et `reviewStreak`. Les anciens enregistrements restent lisibles. Une erreur, même corrigée, remet l’intervalle à 24 heures. Une révision prévue réussie au premier essai propose ensuite 3, 7, 14 puis 30 jours. Un entraînement anticipé n’allonge pas l’échéance. Cette règle simple reste à évaluer avec les utilisateurs ; aucun effet pédagogique particulier n’est garanti.

Le catalogue propose dans cet ordre : la dernière découverte ou révision commencée, une révision arrivée à échéance, une découverte encore inédite, puis un entraînement. Les dates sont rafraîchies lorsque l’onglet revient au premier plan et chaque minute ; le changement de jour suit le fuseau Europe/Paris. Le contrat JSON des auteurs reste inchangé.

Pour contrôler les contenus et les règles de progression sans base : `node_modules/.bin/vitest run --config vitest.discovery.config.ts`. Pour valider le corpus Expanded sans écrire : `node --import tsx prisma/seed.ts --dry-run`.

## Suite prévue

Une fois les pilotes testés : vérifier les scénarios Claude, ajouter les composants demandés si nécessaire, tester compréhension et envie de revenir avec des enfants et adultes, puis décider du déploiement. Comptes, notifications, télémétrie et catalogue massif ne sont pas inclus dans cette première tranche.
