# Livraison de la revue des dessins existants

## Backend de production

- 948 leçons publiées et suivies, 965 schémas éditoriaux présents dans 948 leçons ; 948 validations éditoriales conservées ou renouvelées pour la seule fresque.
- 241 leçons avec dessin spécifique validé ; 0 dessin à vérifier ou à améliorer ; 0 réservation restante.
- 707 leçons sans dessin spécifique complémentaire, mais avec schéma éditorial validé. 0 leçon publiée sans visuel.
- 191 validations de dessin enregistrées avec le hash du texte, le fingerprint du moteur et la preuve de recette. Le manifeste de reprise et les inventaires CSV/JSON sont exportés depuis PostgreSQL.
- Fresque : mise à jour ciblée d’un résumé, du corps et d’une question, testée sur la branche de préproduction puis appliquée en production. Version précédente archivée dans Revision ; sources, relations, autres réponses et dates conservées. Aucune publication, suppression ni modification de brouillon.

## Vérifications locales

- 120 tests isolés passent, dont la préservation des 199 schémas non modifiés et de tous les ateliers, ainsi que les invariants géométriques sur l’incidence et l’écluse.
- Corpus complet valide en mode sec : 299 catégories et 12 486 articles ; aucune écriture par ce contrôle.
- Suite complète : 165 tests passent sur PostgreSQL local ; 13 tests supplémentaires de réservation et validation passent sur la base locale dédiée, soit 178 tests au total.
- ESLint, TypeScript et Prettier passent. Build Next.js de production réussi : 1 296 pages générées, sans route temporaire de recette.
- Vérification de la base de production en lecture seule : les 948 textes, dates, quiz et sources correspondent aux fichiers ; 241 associations de dessin correspondent au manifeste et le digest du moteur concorde.

## Publication

Les corrections suivent le déploiement Git de la branche `codex/review-existing-drawings-2026-11-12` vers `main`, projet Vercel `anakalypto` dans `ivans-projects-66d9a97b`. Les checks de la PR permettent de relier la CI et le déploiement à leur commit exact.

La vérification publique utilise `scripts/check-public-illustrations.mjs https://anakalypto.vercel.app`, puis contrôle les quatre dessins corrigés et la fresque dans le HTML effectivement servi. Les captures de recette sont celles de la version locale testée ; elles ne sont pas présentées comme des captures de production.
