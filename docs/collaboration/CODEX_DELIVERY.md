# Première tranche Codex — 10 octobre 2026

## Disponible localement

- `/decouvrir` : catalogue, filtre par domaine, découverte du jour et reprise des expériences.
- Trois pilotes : circuit électrique, turbocompresseur et savon. Cinq étapes chacun, une manipulation et deux défis avec retour sur les erreurs.
- Schémas SVG originaux, animables et réutilisables : `circuit`, `turbo`, `soap`, plus un composant `flow` pour les futurs contenus compatibles.
- Passages entre Découvrir et les trois articles Approfondir / Expanded existants ; liens dans l’accueil, la navigation et le sitemap.
- Progression dans ce navigateur, reprise après rechargement, premier essai conservé, état « À revoir » en cas d’erreur et échéance à 24 heures. Une nouvelle version de contenu ouvre une nouvelle session.
- Textes accessibles dès 10 ans, commandes utilisables au clavier, retours accessibles et réduction des animations selon la préférence du système.

Le schéma et le moteur sont distincts des contenus. Un auteur peut ajouter un JSON sans créer une nouvelle page React. Les brouillons sont validés mais restent exclus du catalogue.

## Coordination

`CLAUDE_CODE_PROMPT.md` contient la mission éditoriale : audit ciblé de quinze articles, douze nouvelles découvertes, briefs visuels et rapport. Le propriétaire a lancé Claude Code de son côté. Ses fichiers et ceux de Codex sont explicitement départagés ; Codex ne modifie pas ses articles ou nouveaux scénarios pendant cette mission.

`DISCOVERY_CONTRACT.md` décrit les données et les règles de progression. `VISUAL_CONTENT_GUIDE.md` décrit les storyboards, les assets facultatifs et les prompts d’illustration. Les trois pilotes fonctionnent déjà sans image générée.

## Vérifications

- Compilation Next de production et vérification TypeScript.
- Lint du dépôt.
- Sept tests unitaires de découverte : validité et liens des contenus, erreurs de schéma, scénarios incomplets, progression et révision. Configuration isolée sans accès à la base de test.
- Validation du corpus avec `node --import tsx prisma/seed.ts --dry-run`, sans import en base.
- Parcours navigateur des trois pilotes à 390 × 844 : manipulation, correction d’une erreur, défis, reprise après rechargement et lien vers Expanded. Catalogue et filtre contrôlés à 1024 × 768, sans débordement horizontal.

La compilation révélait un problème préexistant avec les URL Google Fonts d’Archivo. La même police est désormais fournie localement, avec sa licence ; voir `src/app/fonts/README.md`.

## Limites et suite

Il s’agit de trois pilotes, pas de la conversion complète du corpus. La relecture éditoriale approfondie des articles et les nouveaux scénarios sont la mission proposée à Claude. Les résultats pédagogiques et les durées doivent encore être testés avec les deux publics.

La progression ne se synchronise pas entre appareils. Aucun compte, notification ou outil de mesure n’a été ajouté. L’animation du turbo indique une relation qualitative, sans calculer sa performance réelle.

## Deuxième tranche — révision et catalogue

- Aperçus des schémas dans le catalogue, sans charger les textes complets ou animer toutes les tuiles.
- Révision express des défis, explication après la réponse, reprise après rechargement et conservation de la découverte terminée.
- Échéances simples : 24 heures après une erreur ; réussites lors des révisions prévues espacées de 3, 7, 14 puis 30 jours. L’entraînement anticipé ne repousse pas la prochaine échéance.
- Sélection priorisant la dernière session commencée, les révisions dues et les sujets non terminés. Horloge actualisée dans les onglets laissés ouverts et jour de référence Europe/Paris.
- Lecture des anciennes progressions compatible ; un enregistrement abîmé n’invalide plus les autres découvertes.
- Seize tests unitaires au total couvrent également les règles de révision, les versions, les recommandations, le changement de jour et les données abîmées.
- Parcours de révision vérifiés au navigateur à 390 × 844 : erreur corrigée sur le circuit, reprise au deuxième défi après rechargement, fin de révision, puis réussite au premier essai sur le turbo. Les trois découvertes restent terminées. Catalogue visuel et absence de débordement horizontal contrôlés.

Le format des contenus confiés à Claude n’a pas changé. Cette répétition utilise les mêmes questions ; elle ne prouve pas un transfert à une situation nouvelle. La validation pédagogique reste nécessaire.

Aucune migration, écriture de contenu en base, publication, modification de service externe ou commit n’a été effectué.

## Troisième tranche — intégration de la livraison Claude

La mission éditoriale de Claude est terminée. Le catalogue rassemble maintenant quinze découvertes publiées en local dans douze domaines. Codex a ajouté les boucles, leur destination de retour, les points d’arrêt et un moteur à quatre temps animé par curseur. Huit scénarios passent en version 2. Les nouveaux comportements sont couverts par vingt-quatre tests au total et par des essais sur mobile et ordinateur, dont le parcours complet du moteur et sa révision.

Voir [INTEGRATION_CLAUDE.md](./INTEGRATION_CLAUDE.md) pour les choix de représentation, les précisions éditoriales, les vérifications et les limites restantes. Les corrections Markdown des articles Expanded nécessitent encore un import dans la base choisie. Aucun import ni déploiement n’a été réalisé.

## Quatrième tranche — onze dessins propres aux sujets

Les quinze découvertes ont désormais chacune un schéma adapté. Onze nouveaux SVG remplacent les chaînes de texte : photosynthèse, levain, verre, Wi-Fi, téléphone, cyclone, papier, sol, fresque, réseau électrique et pilote automatique. Les sujets séquentiels disposent de boutons d’étapes ; les défis de transfert utilisent des scènes distinctes quand nécessaire. Le total passe à 32 tests réussis.

Voir [VISUAL_DELIVERY.md](./VISUAL_DELIVERY.md) pour l’inventaire, les limites et les essais. La mission éditoriale suivante, le protocole utilisateur et la préparation de la préproduction sont confiés à Claude via [CLAUDE_CODE_PHASE2_PROMPT.md](./CLAUDE_CODE_PHASE2_PROMPT.md).
