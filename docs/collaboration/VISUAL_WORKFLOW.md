# Organisation des illustrations

Le [guide backend](ILLUSTRATION_BACKEND.md) définit désormais le travail quotidien : lire la file persistante, réserver, illustrer, vérifier puis terminer. Les brouillons sont hors périmètre. Claude crée les sujets ; Codex traite seulement leurs illustrations.

Ne pas relancer un audit global avant chaque dessin. Ne pas maintenir en parallèle des réservations dans VISUAL_WORK_QUEUE.json et dans PostgreSQL. Les CSV et les JSON historiques conservent la photographie initiale et les preuves reprises lors de l’installation du backend.

Pour une réconciliation exceptionnelle hors base : `node --import tsx scripts/audit-lesson-visuals.ts --offline-reconcile`. Les références LEC sont stables par chemin. Les anciennes commandes `--claim` et `--approve` ne concernent que ce mode fichier historique ; dès que le backend est initialisé, employer `npm run illustrations:work`.

Chaque illustration doit représenter l’idée centrale de sa leçon, avec des associations explicites, des objets reconnaissables, des légendes lisibles et des limites scientifiques annoncées. Lire le texte exact, consulter les sources utiles, vérifier tous les états à 320 px et sur ordinateur, puis documenter une vraie recette. Conserver un bon visuel existant ; une amélioration exige un défaut décrit.

Après un lot terminé, `npm run illustrations:work -- export` sauvegarde les validations et les références depuis le backend, sans réauditer le corpus.

La présence du schéma éditorial (`hasInlineSchema`, `inlineStatus`) est indépendante du dessin spécifique (`hasDrawing`, `status`). Une attente de dessin ne signifie pas une absence de tout visuel. Contrôler le schéma déjà présent et conserver celui qui explique correctement le sujet avant de proposer un complément.
