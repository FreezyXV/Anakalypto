# File backend des illustrations — recette du 11 novembre 2026

Livraison : table ArticleIllustration, quatre états, réservations atomiques, références stables, preuves et empreintes, mise en file automatique à la publication, API de lecture paginée, commandes d’agent et initialisation des revues existantes.

## Résultats

- Migration appliquée à la seule base jetable PostgreSQL `anakalypto_preview` sur `127.0.0.1:54329` ; aucune migration ou import en production.
- Le SQL final a aussi été rejoué à neuf dans un schéma temporaire puis annulé intégralement par ROLLBACK.
- 171 validations reprises, zéro texte divergent et aucune réservation remplacée. Les 725 autres leçons publiées attendent une illustration. Les brouillons ne sont pas initialisés dans la file.
- 96 tests isolés sans base réussis ; 11 tests PostgreSQL dédiés réussis. Ces derniers créent une seule catégorie et une seule leçon de test au nom aléatoire puis suppriment uniquement cette fixture. Aucune réinitialisation de base.
- Vérifications PostgreSQL : publication depuis un brouillon, un seul gagnant pour deux réservations simultanées, refus d’un autre responsable, rejet de READY sans preuve et d’une réservation partielle, refus de validation si le texte a changé, conservation des références après modification, exclusion après dépublication, reprise idempotente, pagination sans doublon et déplacement de catégorie et correction pendant une dépublication temporaire.
- TypeScript et ESLint du périmètre réussis. Compilation Next.js réussie dans une copie isolée avec la base locale, y compris la nouvelle route dynamique `/api/illustrations`.
- API réelle sous `next start` à `127.0.0.1:3003` : 896 chemins et références uniques sur neuf pages ; 171 READY avec références de visuel ; 725 WAITING_FOR_ILLUSTRATION sans visuel ; aucun brouillon, texte intégral ou responsable dans les réponses publiques. Quatre requêtes invalides renvoient 400, une tentative POST renvoie 405, les réponses portent `Cache-Control: no-store`. Détails : [api-checks.json](api-checks.json).

## Usage et limites

Le [guide backend](../../collaboration/ILLUSTRATION_BACKEND.md) est le point d’entrée quotidien. Aucun audit global n’est nécessaire pour lire, réserver ou terminer un visuel. Les fichiers d’inventaire sont une photographie locale, pas une deuxième file active.

Le statut READY signifie qu’une recette d’illustration a été enregistrée, pas une validation éditoriale intégrale de la leçon. Une modification de texte invalide automatiquement la revue ; une modification du rendu doit être signalée par l’agent avec la commande `review` sur ses associations. Le manifeste de reprise initiale refuse de considérer la revue applicable si les sources des dessins ont changé ou si le texte en base diffère.

Pas de déploiement ni d’accès à la base de production pour cette recette. L’installation en production exige migration et reprise avant activation de l’API ; les commandes exactes et les environnements explicites sont documentés dans le guide. Aucun nouveau sujet créé.
