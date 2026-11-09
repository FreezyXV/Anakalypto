# Intégration de la contre-recette Claude, phase 4

10 octobre 2026, après la recette Claude de 22 h 30 à 22 h 45. Le rapport historique de Claude et ses CSV sont conservés. Les six corrections suivantes sont dans le dépôt et dans la copie active sur `http://127.0.0.1:3002`.

| Demande               | Correction Codex                                                                                                                                 | Vérification effectuée                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| P4-01 — pilote        | Boîtes dimensionnées selon leur texte ; consigne élargie ; flèches repositionnées entre les boîtes.                                              | Les quatre légendes tiennent dans leurs rectangles dans le navigateur. Comparaison désengagé/engagé regardée à 1280 px.  |
| P4-02 — cyclone       | « Rotation » placé au-dessus du symbole, à distance du nuage.                                                                                    | Comparaison mer/terre regardée à 1280 px.                                                                                |
| P4-03 — pain          | « Pas encore / ajouté » sur deux lignes ; « Bactéries » recentré dans la loupe ; symbole et flèche déplacés pour garder un espace avec les mots. | Comparaison sans/avec levain regardée à 1280 px.                                                                         |
| P4-04 — feuille       | Contour raccourci avant la légende inférieure ; O₂ et pointe de flèche espacés au-dessus du contour.                                             | Comparaison sans/avec lumière regardée à 1280 px.                                                                        |
| P4-05 — piston        | Départ du trait de rappel décalé après « Piston ».                                                                                               | Admission/combustion-détente regardées à 1280 px.                                                                        |
| P4-06 — environnement | `devIndicators: false` dans la configuration Next.                                                                                               | Bouton N absent du rendu ; aucune commande de portail Next dans le DOM inspecté. Le serveur reste en mode développement. |

Les cinq dessins ont aussi été repassés dans leurs ateliers à 320 px : commande dans deux états, mémorisation, variantes, aucune régression de largeur et lettres SVG au minimum à environ 12,27 px. Leurs composants sont communs aux ateliers, aux couvertures et à Découvrir. Les versions JSON n’ont pas changé : ces corrections portent sur la présentation.

Les 35 tests isolés, TypeScript, ESLint et la compilation Webpack de 1 234 pages avec la base locale passent après ces corrections. Les captures regardées et les mesures sont dans `docs/qa/codex-workshops/`. Une contre-recette indépendante des corrections et des nouveaux ateliers reste utile : utiliser `CLAUDE_CODE_PHASE5_PROMPT.md`.

La piste facultative A4-01, détection générale des collisions entre texte et forme, reste au backlog. Elle demanderait une méthode de géométrie et de tolérance adaptée aux polices réellement chargées. La mesure des rectangles de page seule ne prouve pas l’absence de collisions.

La recette historique de Claude ne couvre pas les nouveaux ateliers ; son rapport le précise. Aucun essai humain ni vrai lecteur d’écran n’a été réalisé dans cette tranche. Aucun déploiement de production n’a été effectué par Codex.
