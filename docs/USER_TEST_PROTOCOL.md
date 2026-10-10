# Protocole d'essai exploratoire du format Découvrir

Ce protocole prépare une petite session d'observation avec les deux publics visés : des jeunes à
partir de 10 ans, et des adolescents ou adultes curieux. Il ne mesure pas une efficacité
pédagogique. Avec six à huit personnes, les résultats montrent des difficultés et des pistes, pas
des pourcentages représentatifs. Aucun résultat n'est connu à ce jour : les durées de « 3 min »
affichées dans l'application restent une cible à mesurer.

On distingue trois choses, à ne jamais additionner en un seul score :

1. la **compréhension immédiate**, juste après la découverte ;
2. la **rétention**, le lendemain ;
3. l'**envie de revenir**, déclarée et expliquée.

## 1. Préparer

### Participants

- 6 à 8 personnes : 3 ou 4 jeunes de 10 à 14 ans, 3 ou 4 adolescents ou adultes.
- Varier si possible les profils : à l'aise ou non avec les sciences, joueurs ou non sur mobile.
- Pas de personne qui a participé à la conception du site.
- Pour un mineur : accord écrit d'un parent avant la séance, et présence ou accord d'un adulte
  responsable pendant la séance. L'enfant peut arrêter à tout moment, sans justification.

### Données personnelles

- Chaque participant reçoit un code (P01, P02…). Le nom n'apparaît jamais dans la grille.
- On note seulement la tranche d'âge (10-12, 13-14, 15-17, 18 et plus) et le profil déclaré.
- Pas d'enregistrement audio, vidéo ou d'écran sans accord écrit. Ne filmer que l'écran, jamais
  le visage.
- La liste qui relie les codes aux personnes est conservée à part, puis détruite après la
  synthèse.

### Matériel

- Un téléphone récent, si possible le même pour tous, ou celui du participant s'il le préfère.
  Noter le modèle.
- Un accès aux découvertes. Elles ne sont pas encore en ligne : le propriétaire doit choisir un
  environnement d'essai (préproduction, déploiement de prévisualisation ou serveur local
  accessible sur le réseau). Voir `docs/RELEASE_READINESS.md`.
- Avant chaque participant, repartir d'une progression vierge : fenêtre de navigation privée
  neuve, ou profil de navigateur dédié aux essais. Ne jamais effacer les données du navigateur
  personnel d'un participant. Le détail est dans `docs/USER_TEST_RUNBOOK.md`.
- Un chronomètre, la grille `docs/USER_TEST_RESULTS_TEMPLATE.csv` (imprimée ou ouverte sur un
  ordinateur) et les questions de la section 4.
- Durée prévue : 40 à 45 minutes par personne, plus 5 minutes le lendemain.

### Répartition des découvertes

Chaque participant fait trois découvertes, pas plus, pour limiter la fatigue. Six découvertes
variées sont réparties par rotation, et l'ordre change d'un participant à l'autre :

| Code | Découverte                   | Manipulation                                     |
| ---- | ---------------------------- | ------------------------------------------------ |
| A    | `naissance-d-un-cyclone`     | interrupteur                                     |
| B    | `les-quatre-temps`           | curseur et quatre boutons de temps, moteur animé |
| C    | `le-pain-qui-gonfle`         | interrupteur                                     |
| D    | `la-voix-dans-le-fil`        | interrupteur                                     |
| E    | `le-voyage-de-l-electricite` | curseur et cinq boutons d'étape                  |
| F    | `feuille-et-lumiere`         | interrupteur                                     |

| Participant | Ordre   |
| ----------- | ------- |
| P01         | A, B, C |
| P02         | D, E, F |
| P03         | B, C, D |
| P04         | E, F, A |
| P05         | C, D, E |
| P06         | F, A, B |
| P07         | A, D, F |
| P08         | B, E, C |

Si le groupe est plus petit, suivre le tableau dans l'ordre.

## 2. Script du modérateur

Lire ces phrases telles quelles. Ne pas expliquer le contenu. Ne pas dire si une réponse est
juste.

**Accueil.**

> « Merci d'être là. On teste le site, pas toi : il n'y a pas de bonne ou de mauvaise façon de
> faire. Si quelque chose est difficile, c'est une information utile pour nous. Tu peux arrêter
> quand tu veux. Pendant que tu utilises le téléphone, dis à voix haute ce que tu regardes et ce
> que tu penses, même si ça te paraît évident. »

**Avant chaque découverte**, poser la question « avant » de la section 4, puis :

> « Ouvre cette découverte et fais-la comme tu le ferais chez toi. Dis-moi quand tu penses avoir
> fini. »

**Pendant la découverte.**

- Si le participant se tait : « Qu'est-ce que tu regardes en ce moment ? »
- S'il demande de l'aide : « Qu'est-ce que tu essaierais ? »
- S'il est bloqué plus de 60 secondes, aide de niveau 1 : « Qu'est-ce que l'écran te propose de
  faire ? »
- Encore bloqué après 60 secondes, aide de niveau 2 : montrer la commande sans dire quoi
  répondre.
- Encore bloqué, aide de niveau 3 : passer à l'étape suivante, et le noter.
- Phrases interdites : « Tu es sûr ? », « Regarde mieux la réponse B », « C'est ça ».

**Après chaque découverte**, poser la question « après » puis la situation nouvelle de la section
4, sans montrer l'écran.

**À la fin**, poser les questions de la section 5.

## 3. Observer

Pour chaque découverte, noter dans la grille :

- **la durée réelle** : du premier écran de la découverte à l'écran de fin, en secondes. Ne pas
  compter les questions avant et après ;
- **la manipulation** : réussie seul, réussie après aide, ou non réussie. Noter si la personne
  a compris ce que changeait l'interrupteur ou le curseur, en reprenant ses mots ;
- **les hésitations** : nombre de pauses de plus de 5 secondes, ou de retours en arrière ;
- **les défis** : bonne réponse au premier essai, oui ou non, pour chacun des deux défis ;
- **l'aide** : niveau le plus haut atteint, de 0 à 3 ;
- **l'abandon** : oui ou non, et à quelle étape ;
- **les verbatims** : phrases exactes qui montrent une confusion ou un plaisir.

## 4. Questions de compréhension

Ces questions sont différentes des deux défis de chaque découverte. Elles se posent **à l'oral,
sans l'écran**. Noter la réponse mot pour mot, puis la coder après la séance :

- **0** : absent ou faux ;
- **1** : partiel ;
- **2** : l'élément attendu est là.

| Découverte     | Question avant et après                                                | Éléments attendus                                                                                          | Situation nouvelle                                                                                                      | Éléments attendus                                                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A cyclone      | « D'après toi, pourquoi un cyclone a-t-il besoin d'une mer chaude ? »  | La mer chaude fournit beaucoup de vapeur ; la condensation libère la chaleur qui alimente la tempête       | « Un cyclone traverse une grande île montagneuse, puis repasse sur une mer chaude. Que lui arrive-t-il, d'après toi ? » | Sur l'île, il reçoit beaucoup moins d'air chaud et humide et s'affaiblit ; au-dessus d'une mer chaude, il peut retrouver un apport d'énergie, sans garantie de se renforcer (d'autres conditions comptent) |
| B quatre temps | « Dans un moteur de voiture, à quel moment le piston est-il poussé ? » | Pendant la combustion-détente, par les gaz chauds ; les autres temps préparent ou vident le cylindre       | « Imagine que la soupape d'échappement reste bloquée fermée. Que se passe-t-il au cycle suivant ? »                     | Les gaz brûlés ne peuvent pas sortir ; il reste moins de place pour le mélange frais : le cycle suivant se passe mal                                                                                       |
| C pain         | « Qu'est-ce qui fait gonfler une pâte à pain ? »                       | Le gaz (CO₂) produit par les levures, retenu dans la pâte                                                  | « On met une pâte au levain au four tout de suite, sans attendre. Le pain sera-t-il bien gonflé ? Pourquoi ? »          | Peu gonflé : les levures n'ont pas eu le temps de produire du gaz                                                                                                                                          |
| D téléphone    | « Comment ta voix va-t-elle d'un téléphone fixe à un autre ? »         | Le micro transforme la voix en courant qui varie ; le courant passe dans le fil ; l'écouteur refait le son | « On coupe le fil entre deux téléphones fixes. Pourquoi n'entend-on plus rien ? »                                       | Le courant ne peut plus aller jusqu'à l'écouteur ; ce n'est pas le son qui passait dans le fil                                                                                                             |
| E électricité  | « Pourquoi la tension change-t-elle entre la centrale et la prise ? »  | Haute tension pour transporter loin avec moins de pertes ; abaissée par étapes avant les maisons           | « Pourquoi ne pas relier un village lointain à la centrale avec une ligne à 230 volts ? »                               | Il faudrait un courant beaucoup plus fort, et les pertes seraient bien plus grandes                                                                                                                        |
| F feuille      | « D'où vient l'oxygène qu'une plante rejette ? »                       | De l'eau, cassée grâce à l'énergie de la lumière                                                           | « Sous une lampe, une plante d'aquarium se couvre de petites bulles. D'où viennent-elles, à ton avis ? »                | D'oxygène libéré par la photosynthèse, à partir de l'eau, grâce à la lumière                                                                                                                               |

Ces éléments attendus reprennent les articles relus en phase 2. Si une réponse juste ne figure
pas dans la colonne, la noter telle quelle et la discuter pendant la synthèse : on ne force pas un
participant à « trouver la bonne phrase ».

### Le lendemain

Si le participant est disponible, par message ou par téléphone, en 5 minutes, sans réouvrir le
site : reposer la question « avant et après » de chaque découverte faite la veille. Coder de 0 à
2 dans la colonne `lendemain_code`. Ne pas donner la réponse ensuite, sauf si le participant la
demande à la toute fin.

## 5. Plaisir et envie de revenir

Questions ouvertes, sans proposer de réponses :

1. « Qu'est-ce que tu as pensé de ces découvertes ? »
2. « Laquelle t'a le plus marqué ? Pourquoi ? »
3. « Y a-t-il un moment où tu t'es ennuyé ou perdu ? Lequel ? »
4. « Si tu avais ce site sur ton téléphone, est-ce que tu y reviendrais ? Pourquoi ? »
5. « Par rapport à ce que tu fais d'habitude sur ton téléphone dans un moment libre, où
   placerais-tu ce site ? »

Puis une seule échelle, à la toute fin :

> « De 1 à 5, quelle envie as-tu de refaire une découverte demain ? 1, aucune envie ; 5, très
> envie. »

Noter le chiffre et surtout la raison donnée.

## 6. Remplir la grille

Fichier : `docs/USER_TEST_RESULTS_TEMPLATE.csv`. Le modèle est vide : en faire une copie pour la
session, et ne jamais l'enrichir d'exemples inventés.

- **Lignes** : une par participant et par découverte, donc trois lignes par participant.
- **Codes** : `participant_id` du type P01 ; `decouverte_slug` comme dans le tableau de la
  section 1 ; `ordre` de 1 à 3.
- **Séance et version** : `type_seance` vaut `pilote` ou `complete` ; `version_decouverte` reprend
  le numéro `version` du JSON au jour de l'essai. Ne pas fusionner des résultats de versions
  différentes sans le signaler.
- **Durée** : `duree_secondes` est un nombre entier, mesuré au chronomètre.
- **Oui ou non** : `manipulation_reussie` prend la valeur `seul`, `apres_aide` ou `non` ;
  `defi1_premier_essai`, `defi2_premier_essai` et `abandon` prennent `oui` ou `non`.
- **Aide** : `aide_niveau_max` de 0 à 3, selon la section 2.
- **Compréhension** : les colonnes `*_code` vont de 0 à 2, selon la section 4. Laisser vide si
  la question n'a pas été posée.
- **Verbatims** : mot pour mot, entre guillemets, sans nom propre.
- **Réponses brutes** : les copier dans `reponse_avant`, `reponse_apres`, `reponse_transfert`
  et `reponse_lendemain`, avant tout codage.

## 7. Synthèse

Pour chaque découverte, avec 3 à 4 observations seulement, donner des nombres et non des
pourcentages, par exemple « 2 sur 4 » :

1. **Utilisabilité** :
   - durée médiane et durées extrêmes, à comparer avec la cible affichée ;
   - nombre de personnes qui ont réussi la manipulation seules ;
   - niveau d'aide atteint ;
   - abandons.
2. **Compréhension immédiate** :
   - codes avant et après, présentés côte à côte ;
   - code de la situation nouvelle ;
   - défis réussis au premier essai.
3. **Rétention** : codes du lendemain, en précisant combien de personnes ont pu répondre.
4. **Envie de revenir** : échelle de 1 à 5 et raisons, regroupées par thème (curiosité, jeu,
   ennui, longueur, difficulté).

Rédiger ensuite :

- trois à cinq **problèmes observés**, chacun avec la découverte, l'étape, le nombre de personnes
  concernées et une citation ;
- les **pistes de correction**, séparées des observations ;
- les **limites** : petit échantillon, modérateur proche du projet, effet de nouveauté, un seul
  appareil.

Ne pas conclure qu'un format « fonctionne » ou « fait apprendre ». Une session de ce type indique
où regarder, pas un effet démontré.
