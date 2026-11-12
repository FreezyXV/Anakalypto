# Schémas pédagogiques

Chaque article peut contenir un ou plusieurs schémas qui résument visuellement une partie du
texte : étapes d'un procédé, cycle, priorités, chronologie, système et ses parties,
comparaison, données chiffrées, chiffres clés ou échelle de valeurs.

Un schéma s'écrit directement dans le corps de l'article, en YAML, dans un bloc de code
`schema`. Il est rendu en HTML par `src/lib/schemas.ts` et mis en forme par `globals.css` :
le texte reste du vrai texte (accessible, net à toutes les tailles, compatible avec le thème
sombre) et aucune image n'est à produire.

## Exemple

````markdown
```schema
type: etapes
titre: Le cycle répété pour chaque couche
legende: Une puce avancée enchaîne ce cycle des dizaines de fois.
elements:
  - titre: Dépôt
    texte: Une fine couche d'isolant, de métal ou de silicium.
  - titre: Lithographie
    texte: La lumière dessine le motif sur une résine.
    icone: bulb
```
````

## Champs communs

| Champ     | Obligatoire | Rôle                                           |
| --------- | ----------- | ---------------------------------------------- |
| `type`    | oui         | L'un des neuf types ci-dessous                 |
| `titre`   | oui         | Titre du schéma, 110 caractères au plus        |
| `legende` | non         | Une ou deux phrases d'explication, 320 au plus |

`icone`, quand il est accepté, est le nom d'un pictogramme de `src/components/visual/glyphs.ts`
(`car`, `bolt`, `heart`, `droplet`, `fire`, `gear`, `leaf`, `chip`…).

## Les neuf types

| Type          | Pour montrer                | Contenu                                                                                                       |
| ------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `etapes`      | un procédé, une méthode     | `elements` : 2 à 8 `{titre, texte?, icone?}`                                                                  |
| `cycle`       | une boucle qui recommence   | `elements` : 3 à 7 `{titre, texte?, icone?}` ; anneau de 3 à 6 sur grand écran                                |
| `pyramide`    | des priorités, des niveaux  | `niveaux` : 2 à 7 `{titre, texte?}`, du sommet vers la base                                                   |
| `frise`       | une chronologie             | `evenements` : 2 à 12 `{date, titre, texte?}`                                                                 |
| `systeme`     | un ensemble et ses parties  | `centre`, `icone?`, `parties` : 2 à 12 `{nom, role?, icone?}`                                                 |
| `comparaison` | deux ou trois options       | `colonnes` : 2 à 3 `{titre, icone?, points: [..]}`                                                            |
| `barres`      | des valeurs à comparer      | `unite`, `valeurs` : 2 à 10 `{label, valeur, note?}`                                                          |
| `chiffres`    | des repères chiffrés        | `chiffres` : 1 à 4 `{valeur, texte}`                                                                          |
| `echelle`     | des seuils sur une grandeur | `unite`, `min`, `max`, `zones` : `{de, a, label, ton}` ; `ton` vaut `normal`, `attention`, `danger` ou `info` |

## Règles de rédaction

- Un schéma résume ce que dit le texte : aucun fait nouveau, aucun chiffre absent de l'article.
- Des libellés courts : un titre de nœud en quelques mots, une explication en une phrase.
- Placer le schéma là où il aide, en général à la place de l'ancien emplacement
  `[Emplacement image : …]`, qu'il remplace.
- Écrire les textes en français accentué, avec des espaces ordinaires : la typographie
  française est appliquée au rendu.
- Mettre entre guillemets une valeur YAML qui commence par un caractère spécial ou contient
  `: ` (deux-points suivi d'une espace).

## Validation

`npm run seed:check` valide chaque schéma. Une erreur est rapportée avec l'article, le numéro
du schéma, le champ fautif et la ligne du corps, et bloque l'import, comme toute autre erreur
du corpus. Un schéma invalide n'est jamais affiché à moitié.

## Insérer des schémas en lot

`node scripts/inserer-schemas.mjs <fichier>` lit un fichier où chaque schéma est précédé d'une
ligne `=== <slug>` ou `=== <slug> | apres=<titre de section>`. Le premier schéma d'un article
remplace son emplacement d'illustration, sinon il est placé avant `## À retenir` ; `apres=` le
place à la fin d'une section donnée. Un schéma de même titre remplace l'ancien : le script est
rejouable.
