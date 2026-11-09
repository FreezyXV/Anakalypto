# Préproduction locale — 10 octobre 2026

## Version disponible

La version de recette est accessible sur **http://127.0.0.1:3002/decouvrir**, depuis ce poste uniquement. Elle utilise une base PostgreSQL neuve, distincte de la production et de celle des tests. Le serveur existant sur le port 3001 n’a pas été arrêté ni reconfiguré.

Les articles corrigés sont réellement servis sur **3002**. Les quinze articles liés aux découvertes ont été comparés aux fichiers : corps Markdown complet, titre, résumé, catégorie, sources, quiz et `lastVerified` correspondent. Les dates de vérification n’ont pas été modifiées.

Le corpus entier est importé dans cette base dédiée : 299 catégories, 12 515 articles, dont 896 publiés et 11 619 prévus (`planned`, importés comme brouillons). L’import n’a supprimé aucun article, catégorie ou étiquette. Il ne s’agit pas d’un import limité aux quinze corrections.

Le serveur sert un **instantané** du dépôt, y compris les changements non commités. Après une modification du code ou des contenus, relancer la commande ci-dessous pour créer un nouvel instantané ; le serveur existant ne suit pas automatiquement ces changements.

## Relancer

Depuis la racine du dépôt, avec les dépendances déjà installées et les exécutables PostgreSQL `initdb`, `pg_ctl`, `createdb` disponibles :

```sh
npm run preview:local -- --test
```

La commande :

1. copie l’app dans un dossier temporaire privé, sans les fichiers `.env`, `.env.*`, `.git`, `.vercel` ou les documents de recette ;
2. utilise les dépendances existantes, sans installation ;
3. crée un cluster PostgreSQL local, limité à `127.0.0.1`, puis une base `anakalypto_preview` ;
4. fournit explicitement les URL locales aux migrations et à l’import ;
5. contrôle les quinze articles avec `scripts/check-preview-content.ts` ; ce contrôle refuse une base distante, une cible implicite ou la base des tests ;
6. avec `--test`, lance la suite complète dans **une autre base**, `anakalypto_preview_test`, que les tests peuvent vider ;
7. lance Next avec son propre dossier de cache et de verrouillage.

Les ports sont choisis parmi ceux disponibles à partir de 54329 pour PostgreSQL et 3002 pour l’app. Lire l’adresse réellement affichée à chaque lancement. L’option `--test` peut être omise pour une simple recette après validation de la suite.

**Ctrl+C** dans le terminal de lancement arrête ce serveur et son cluster dédiés. Le dossier temporaire est conservé. Un nouveau lancement crée un nouvel environnement ; il ne réutilise ni ne réinitialise la production.

### Instance de cette recette

- Instantané : `/private/tmp/anakalypto-preview-1LFef9/app`.
- Données PostgreSQL : `/private/tmp/anakalypto-preview-1LFef9/postgres`.
- Métadonnées : `/private/tmp/anakalypto-preview-1LFef9/preview.json`.
- Résultats techniques du navigateur : `/private/tmp/anakalypto-preview-1LFef9/browser-results.json`.
- Processus de lancement observé : `18421`. Pour cette instance encore active, `kill -TERM 18421` demande au lanceur d’arrêter son serveur et sa base. Ne pas réutiliser ce numéro après un redémarrage ; les lancements suivants enregistrent leur PID dans `preview.json`.

## Vérifications réalisées

| Vérification                               | Résultat                                                                                                                                           |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Corpus, sans connexion à une base          | 12 814 blocs valides                                                                                                                               |
| Import local                               | 299 catégories et 12 515 articles créés, zéro suppression                                                                                          |
| Comparaison base ↔ fichiers                | 15/15 articles corrigés identiques, sources et quiz compris                                                                                        |
| Suite complète                             | **89 tests réussis**, dont trois nouveaux tests des refus de cible du contrôle de préproduction                                                    |
| Types et lint                              | Réussis                                                                                                                                            |
| Compilation contre la base locale corrigée | Webpack : **1 234 pages générées**, dont quinze découvertes et quinze révisions                                                                    |
| Articles dans le navigateur                | Quinze pages à 1280 puis 320 px CSS : 178 paragraphes contrôlés, sources présentes, liens vers Découvrir présents                                  |
| Parcours Découvrir à 320 px CSS            | Quinze parcours complets, trente défis : erreur bloquante, correction, manipulation dans les deux états extrêmes, objectif final et lien Expanded  |
| Révision express du circuit                | Deux défis au clavier : dessin masqué avant réponse, visible après, erreur bloquante et correction possible ; focus visible et écran final atteint |

La première compilation locale a atteint la limite initiale de trente connexions du cluster de recette. Cette limite a été portée à cent pour accueillir les neuf processus de génération ; la relance a réussi. Le script utilise désormais cette capacité. Aucun paramètre de la base de production n’a été modifié.

La recette mobile a aussi révélé un débordement de cinq pixels sur le titre de l’article du turbo. La colonne peut maintenant se rétrécir et les mots longs se couper avec césure. Après correction, les quinze pages d’articles ne débordent plus à 320 px.

## Essais et suite

Pour une séance pilote **sur cet ordinateur**, ouvrir l’adresse dans une **nouvelle fenêtre privée** d’un navigateur. La progression des essais techniques reste dans le navigateur ayant exécuté la recette ; elle ne constitue pas un résultat utilisateur. La grille de résultats de Claude reste vide.

`127.0.0.1` désigne l’appareil qui ouvre l’adresse. Cette instance ne donne donc pas accès à un autre téléphone ni à des participants distants. Pour des essais sur leurs appareils, prévoir ensuite une prévisualisation hébergée avec sa propre base, ou un accès au réseau local explicitement configuré.

La recette indépendante actualisée est confiée à Claude dans `CLAUDE_CODE_PHASE4_PROMPT.md`. Un vrai essai au lecteur d’écran et des séances avec les deux publics restent nécessaires ; la lecture de l’arbre d’accessibilité ne les remplace pas. Les durées et bénéfices pédagogiques ne sont pas mesurés.

Aucun import en production, push ou déploiement n’a été effectué par Codex dans cette tranche. L’état du site public n’a pas été audité ici. La rotation du mot de passe de production doit être faite par le propriétaire dans Neon, avec mise à jour des consommateurs selon `docs/RELEASE_READINESS.md` ; aucun mot de passe n’est demandé dans le chat.
