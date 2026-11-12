# Illustrations des leçons

Pour toute tâche d’illustration, lire [le guide de la file backend](docs/collaboration/ILLUSTRATION_BACKEND.md).

- Périmètre : leçons **publiées uniquement**, objectif de lancement d’environ 1 000. Ignorer les brouillons ; ne pas les publier ou les supprimer pour illustrer le catalogue.
- Répartition convenue : Claude crée les leçons ; Codex crée, associe et vérifie les illustrations. Une autre instruction explicite de l’utilisateur prévaut.
- Lire la file persistante via `npm run illustrations:work -- summary` / `list`, ou l’API GET `/api/illustrations` après installation. Aucun audit global n’est requis avant chaque illustration.
- Présence : lire `hasVisual`, `hasDrawing`, `hasInlineSchema` et `inlineStatus`. `WAITING_FOR_ILLUSTRATION` concerne le dessin spécifique ; un schéma éditorial peut déjà être présent et validé. Ne pas traiter cette file comme une liste de leçons sans aucun visuel.
- Réserver la leçon avec `claim --path /chemin --owner Nom` avant le travail. Conserver un bon visuel existant. Les états READY sont terminés ; REVIEW_REQUIRED et NEEDS_IMPROVEMENT concernent un visuel existant à contrôler/corriger.
- Après une vraie recette mobile et ordinateur, enregistrer `complete` avec la preuve dans `docs/qa/`. Si un rendu change, rouvrir ses associations avec `review`. Pour le schéma éditorial, utiliser `complete-inline` / `review-inline` : sa validation est indépendante du dessin. Libérer les réservations interrompues explicitement.
- PostgreSQL est la file de travail ; les CSV d’audit et JSON historiques sont des photographies, pas une deuxième file de réservation.
- Les commandes de file exigent `ILLUSTRATION_DATABASE_URL` explicite et ne chargent pas `.env.local`. Vérifier l’environnement cible : `.env.local` du dépôt peut désigner la production. Les tests isolés sont documentés dans le guide.

Après un lot validé, `npm run illustrations:work -- export` sauvegarde le manifeste de reprise et les listes depuis le backend, sans nouvel audit. Ne pas conserver les seules preuves de validation dans une base temporaire.
