# Déroulé d'une séance d'essai Découvrir

Ce document dit quoi faire, dans quel ordre, avant, pendant et après une séance. Le **pourquoi**,
les questions et le codage sont dans `docs/USER_TEST_PROTOCOL.md` ; ce déroulé y renvoie.

Aucun participant n'a été recruté et aucune séance n'a eu lieu à ce jour. La grille
`docs/USER_TEST_RESULTS_TEMPLATE.csv` reste vide jusqu'à la première séance réelle. Aucun
résultat, aucune durée et aucun bénéfice pédagogique ne doivent y être ajoutés par avance.

## 0. Ce qui doit être décidé avant

| Décision               | Options                                                                                           | Effet sur la séance                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Accès des participants | Préproduction, prévisualisation Vercel, ou serveur local du propriétaire accessible sur le réseau | Détermine l'adresse à ouvrir sur le téléphone. Sans décision, seule une séance pilote sur l'ordinateur du propriétaire est possible |
| Version testée         | La version du jour, ou celle qui corrige les défauts P3-01 à P3-06                                | Noter le numéro `version` de chaque découverte dans la grille. Les défauts ouverts sont listés dans `docs/RELEASE_READINESS.md`     |
| Lieu et dates          | —                                                                                                 | Prévoir le lendemain pour le rappel de 5 minutes                                                                                    |

## 1. Préparer, une semaine à la veille

### Recrutement

Viser 6 à 8 personnes : 3 ou 4 jeunes de 10 à 14 ans, 3 ou 4 adolescents ou adultes.

- Envoyer le formulaire d'accord, signé par un parent pour un mineur.
- Attribuer un code à chacun (P01, P02…) et l'ordre des découvertes, selon le tableau de
  rotation du protocole (section 1).
- Tenir la correspondance entre nom et code dans un fichier séparé, hors du dépôt. Le détruire
  après la synthèse.

### Matériel

- Le téléphone d'essai, chargé, avec la luminosité au maximum. Noter le modèle.
- Un chronomètre. Celui du téléphone d'essai ne convient pas : il sert à la découverte.
- Une fiche papier par participant : code, ordre des trois découvertes, questions « avant »,
  « après » et « situation nouvelle » (protocole, section 4), et une case par mesure.
- La grille CSV ouverte sur un ordinateur, ou imprimée.
- Si le participant est d'accord, un enregistrement de l'écran seulement, jamais du visage.

### Vérifier l'accès, la veille, sur le téléphone d'essai

1. Ouvrir l'adresse retenue, puis `/decouvrir` : les découvertes A à F du protocole sont
   listées.
2. Ouvrir chacune des six, faire la première manipulation, puis revenir. Aucune page blanche,
   aucune erreur.
3. Ouvrir `/decouvrir/<slug>/reviser` pour l'une d'elles : la page répond.
4. Noter le numéro `version` de chaque découverte. Il se trouve dans les fichiers
   `content/discovery/<slug>.json` de la version déployée ; demander à Codex si besoin.
5. Si l'accès passe par le réseau local, vérifier que le téléphone est sur le même réseau.

### Repartir d'une progression vierge

La progression est enregistrée dans le navigateur du téléphone. Pour chaque participant :

- **solution recommandée** : une **fenêtre de navigation privée neuve**. La fermer après le
  participant ;
- **autre solution** : un **profil de navigateur dédié aux essais**, dont on efface les données
  du site entre deux participants ;
- **contrôle** : à l'ouverture de `/decouvrir`, aucune découverte ne doit apparaître comme
  commencée ou terminée ;
- **interdit** : effacer les données du navigateur personnel d'un participant, ou faire la
  séance sur son téléphone sans fenêtre privée.

## 2. Séance pilote : avant la session complète

Une ou deux personnes, de préférence une de chaque public. Elle sert à tester le déroulé, pas à
produire des résultats.

- Dérouler exactement les étapes de la section 3.
- Noter ce qui coince dans l'organisation : temps total, compréhension des consignes orales,
  confort du chronométrage, lisibilité de la fiche papier.
- Saisir les lignes avec `type_seance = pilote`. **Ne pas les fusionner** avec la session
  complète dans la synthèse.
- Les questions ne changent pas pendant la session complète. Si le pilote montre qu'une question
  est incomprise, la modifier **avant** la session et le noter.

## 3. Pendant la séance : environ 45 minutes par personne

| Minute | Étape                                                       | Ce que fait le modérateur                                                                                                                                                                |
| ------ | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0-3    | Accueil                                                     | Lire la phrase d'accueil du protocole (section 2). Rappeler qu'on peut arrêter. Ouvrir une fenêtre privée neuve                                                                          |
| 3-5    | Découverte 1, question « avant »                            | La poser à l'oral, sans écran, et noter la réponse mot pour mot                                                                                                                          |
| 5-10   | Découverte 1                                                | « Ouvre cette découverte et fais-la comme chez toi. » Lancer le chronomètre au premier écran de la découverte, l'arrêter à l'écran final. Noter les hésitations, l'aide et les verbatims |
| 10-13  | Découverte 1, questions « après » et « situation nouvelle » | À l'oral, sans écran. Ne pas corriger                                                                                                                                                    |
| 13-23  | Découverte 2                                                | Même suite : avant, parcours, après, situation nouvelle                                                                                                                                  |
| 23-33  | Découverte 3                                                | Même suite                                                                                                                                                                               |
| 33-40  | Plaisir et envie de revenir                                 | Questions 1 à 5 du protocole (section 5), puis l'échelle de 1 à 5 avec sa raison                                                                                                         |
| 40-45  | Clôture                                                     | Remercier. Demander l'accord pour le rappel du lendemain, et le moyen de contact. Fermer la fenêtre privée                                                                               |

**Règles du modérateur**, détaillées dans le protocole, section 2 :

- ne jamais dire si une réponse est juste ;
- relancer avec « Qu'est-ce que tu regardes ? » ou « Qu'est-ce que tu essaierais ? » ;
- aider par paliers, après 60 secondes de blocage : niveau 1, puis 2, puis 3 ;
- noter le niveau atteint.

**Mesures à noter pour chaque découverte**, une ligne de la grille :

- durée en secondes, du premier écran à l'écran final ;
- manipulation : `seul`, `apres_aide` ou `non`, et ce que la personne en dit ;
- hésitations : pauses de plus de 5 secondes, retours en arrière ;
- défi 1 et défi 2 : bonne réponse au premier essai, `oui` ou `non` ;
- niveau d'aide le plus haut, de 0 à 3 ;
- abandon, et à quelle étape ;
- réponses brutes avant, après et à la situation nouvelle, **mot pour mot**. Le codage de 0 à
  2 se fait **après** la séance.

## 4. Le lendemain : 5 minutes

- Contacter le participant par le moyen convenu, sans lui faire rouvrir le site.
- Reposer la question « avant et après » de chacune de ses trois découvertes.
- Noter la réponse brute dans `reponse_lendemain`, puis la coder.
- S'il ne répond pas, laisser la case vide : ne pas la coder 0.

## 5. Après les séances

1. **Saisir** une ligne par participant et par découverte dans une **copie** de la grille. Le
   modèle reste vide.
2. **Coder** les réponses de 0 à 2 avec les éléments attendus du protocole (section 4). Si
   possible, faire coder une seconde personne sans lui montrer le premier codage, puis discuter
   les écarts.
3. **Synthétiser** en suivant la section 7 du protocole, avec des nombres et non des
   pourcentages, et en séparant trois parties :
   - compréhension immédiate (avant, après, situation nouvelle, défis) ;
   - rétention (lendemain) ;
   - envie de revenir (échelle et raisons).
4. **Relier chaque problème observé** à une découverte, une étape, un nombre de personnes et
   une citation. Proposer ensuite des pistes, séparées des observations.
5. **Écrire les limites** : petit échantillon, effet de nouveauté, modérateur proche du projet,
   un seul appareil, version testée.
6. **Ne pas conclure** qu'une découverte « fait apprendre ». Une séance de ce type montre où
   regarder.
