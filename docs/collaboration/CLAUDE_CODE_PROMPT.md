# Mission Claude Code — contenus et fiabilité d’Anakalypto

Copier le texte ci-dessous dans Claude Code, depuis ce dépôt. Ce document prépare une mission ; il n’affirme pas que Claude l’a exécutée.

---

Tu travailles sur Anakalypto, une application francophone pour comprendre des sujets variés grâce à des expériences courtes et à des articles approfondis. Le propriétaire souhaite que Codex et Claude Code se répartissent le travail. Codex a commencé le moteur interactif ; ta mission est éditoriale, pédagogique et documentaire.

## Objectif produit et public

Rendre l’apprentissage accessible dès 10 ans, tout en restant intéressant pour les adolescents et les adultes curieux. Chaque découverte doit donner envie d’essayer, permettre d’observer une conséquence et expliquer une seule idée essentielle. Éviter le ton infantilisant. Ne pas promettre une rétention, une efficacité ou une exactitude démontrées sans preuve.

Deux profondeurs partagent un sujet :

- Découvrir : 5 à 8 étapes, 2 à 4 minutes comme cible à tester, peu de lecture, une manipulation et deux défis de compréhension.
- Approfondir / Expanded : explications plus détaillées, limites du modèle, exemples et sources précises. Les articles Markdown existants restent la base de cette profondeur.

Le corpus actuel contient 896 articles publiés dans 19 domaines, 2 646 questions et 2 192 références citées. Ces chiffres sont un instantané ; recalcule-les avant de documenter le nouvel état. Le dépôt contient aussi un très grand nombre de sujets planifiés : ne les publier pas en masse.

## Coordination obligatoire

Avant toute modification : lire les instructions locales applicables, `git status --short`, `docs/collaboration/DISCOVERY_CONTRACT.md`, `docs/collaboration/VISUAL_CONTENT_GUIDE.md`, le schéma `src/lib/discovery/schema.ts` et les trois JSON pilotes. Inspecter le code pour comprendre le rendu, sans le modifier.

Codex possède les fichiers suivants pendant cette tranche :

- `src/**`, `tests/**`, `scripts/**`, `prisma/**`, les fichiers de configuration et les dépendances ;
- les trois pilotes `content/discovery/savon-et-graisse.json`, `le-turbo.json`, `allumer-une-lampe.json` ;
- `docs/collaboration/**`.

Tu peux modifier uniquement :

- `content/domaine-*.md`, sur les articles sélectionnés et leurs références ;
- de nouveaux fichiers `content/discovery/<nouveau-slug>.json` ;
- `docs/EDITORIAL_REVIEW.md`, `docs/CLAUDE_DELIVERY.md`, `docs/EDITORIAL_BACKLOG.csv` ;
- `README.md`, pour une documentation exacte du produit et du corpus.

Ne pas écraser les changements ou supprimer les fichiers non suivis de Codex. Ne pas effectuer de formatage global. Aucun ajout de dépendance, refonte de schéma, migration, import en base, déploiement, push ou modification de service externe dans cette mission. Si le moteur ne permet pas une interaction nécessaire, décrire le besoin dans le rapport avec un exemple de données ; ne pas le contourner avec une image trompeuse ou un schéma hors sujet.

## Livrable 1 — audit éditorial ciblé

Sélectionner 15 articles publiés : les trois liés aux pilotes et douze autres sujets favorables au format court. Pour chacun : identifier l’objectif d’apprentissage, les notions préalables, la qualité des sources, les affirmations nécessitant vérification, les simplifications, les problèmes des distracteurs et le potentiel visuel.

Rédiger `docs/EDITORIAL_REVIEW.md` avec des liens précis vers les sources consultées et les fichiers concernés. Séparer constat vérifié, interprétation et point restant à vérifier. Une URL présente dans le corpus ne prouve pas qu’elle étaye la phrase. Une page d’accueil institutionnelle n’est pas une référence précise. Deux langues de Wikipédia ne constituent pas deux confirmations indépendantes.

Corriger les articles sélectionnés de façon ciblée. Préserver leurs slugs, chemins, statut et références croisées. Conserver les contraintes du corpus : ouverture `## En bref`, fermeture `## À retenir`, quiz en base 1 dans YAML, textes français accentués. Pour les articles à enjeu médical, juridique ou financier, vérifier les sources institutionnelles actuelles et limiter la formulation au sujet étudié. Ne pas changer `lastVerified` si les affirmations n’ont pas réellement été vérifiées.

## Livrable 2 — douze découvertes supplémentaires

Créer douze nouveaux JSON conformes au contrat, couvrant au moins quatre domaines si les formats existants permettent une explication fidèle. S’appuyer sur des articles déjà publiés. Les domaines peuvent inclure environnement, énergie, sciences du vivant, industrie, technologie ou communication, mais un flux linéaire ne convient pas à tous les sujets.

Chaque découverte doit contenir :

1. Un titre concret qui suscite une question.
2. Un seul objectif observable et une situation initiale.
3. Une manipulation qui illustre une relation, avec un retour textuel accessible.
4. Deux questions de compréhension ou de transfert. Éviter les dates anecdotiques et les réponses absurdes faciles à éliminer.
5. Des retours utiles pour chaque réponse, y compris les erreurs. Autoriser l’essai et la correction.
6. Une synthèse cohérente avec l’objectif et un lien vers le bon article approfondi.
7. Au moins une référence primaire, institutionnelle ou spécialisée consultée directement, lorsque disponible. Ajouter une deuxième référence indépendante lorsque la nuance du sujet le nécessite.

Lire le contrat pour les noms de champs. Les composants existants sont `soap`, `turbo`, `circuit` et `flow`. Le moteur propose `choice`, `toggle`, `range`. Ne jamais utiliser un turbo pour illustrer un organe ou un circuit pour illustrer un phénomène sans rapport. `flow` représente uniquement une succession réelle ou une chaîne causale explicitement simplifiée. Les légendes de ses éléments ont au plus 30 caractères.

Un JSON validé reste un brouillon si sa vérification scientifique ou son rendu mobile n’est pas satisfaisant. Utiliser `status: "draft"` pour les expériences qui attendent un nouveau composant. Publier uniquement les expériences réellement vérifiées. Signaler précisément combien des douze sont publiables et combien restent en brouillon.

## Livrable 3 — briefs visuels

Dans `docs/EDITORIAL_BACKLOG.csv`, renseigner pour les quinze sujets : slug, objectif, mécanisme, composants nécessaires, action de l’utilisateur, changement observable, message accessible, source précise, limite scientifique, priorité et état.

Les briefs doivent décrire une représentation pédagogique, pas seulement « une belle image de… ». Séparer l’illustration d’ambiance et le schéma de fonctionnement. Prévoir des légendes en HTML et des éléments graphiques indépendants ; ne pas intégrer le texte dans une image générée. Le guide visuel explique comment le propriétaire peut fournir des images facultatives.

## Vérification et livraison

- Valider les JSON avec le schéma existant et vérifier que chaque `expandedPath` désigne un article publié dans le corpus Markdown.
- Lancer `node --import tsx prisma/seed.ts --dry-run` : aucune écriture en base.
- Lancer les tests unitaires de découverte avec `node_modules/.bin/vitest run --config vitest.discovery.config.ts`.
- Vérifier les nouveaux formats à 390 px et sur ordinateur si le serveur local est disponible. Tester la manipulation, les erreurs, la bonne réponse et le passage vers l’article. Ne pas déclarer un test navigateur réussi sans l’avoir effectué.
- Ne pas lancer la suite d’intégration globale : elle applique des migrations et vide une base de test. Ne jamais pointer un test destructif vers la base de production.
- Mettre à jour le README sans présenter les douze contenus comme publiés si certains sont encore en brouillon.
- Rédiger `docs/CLAUDE_DELIVERY.md` : fichiers modifiés, choix pédagogiques, sources, contrôles réellement effectués, limitations, demandes au moteur Codex et liste des découvertes publiées/brouillons.

Commence par un bref plan, puis réalise la mission dans le périmètre défini. Utilise ton jugement pour les choix éditoriaux usuels. Si un blocage technique existe, continue les tâches indépendantes et documente le besoin d’intégration.
