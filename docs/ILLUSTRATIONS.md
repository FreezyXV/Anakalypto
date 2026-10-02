# Illustrer les articles

Chaque article peut recevoir une ou plusieurs illustrations, par exemple une infographie
générée avec ChatGPT. Sans image, le site affiche une couverture dessinée à partir du domaine
et du titre de l'article. Dès qu'une image est ajoutée, elle la remplace.

## Le chemin le plus court

1. Ouvrez `illustrations/CONSIGNES.md`. Chaque article y a sa consigne, prête à copier dans
   ChatGPT, en deux variantes : avec étiquettes ou sans texte.
2. Enregistrez l'image dans `illustrations/a-traiter/` sous le nom du slug de l'article :
   `<slug>.png` (ou `.jpg`, `.webp`). Une deuxième image : `<slug>--2.png`.
3. Lancez `npm run illustrations`. Les images sont réduites à 1 400 px de large et converties
   en WebP dans `public/illustrations/`, puis le manifeste `src/lib/illustrations.manifest.json`
   est mis à jour.
4. Commitez `public/illustrations/` et le manifeste, puis poussez : Vercel redéploie et les
   images apparaissent. Aucune commande `seed` n'est nécessaire, les images ne passent pas par
   la base.

Le slug est le dernier segment de l'adresse de l'article. Par exemple
`/sport-et-sciences-du-mouvement/physiologie-de-l-effort/entrainement/les-champions-d-endurance-s-entrainent-en-montagne-pourquoi-leur-sang-produit-il-plus-de-globules-rouges`
a pour slug `les-champions-d-endurance-s-entrainent-en-montagne-pourquoi-leur-sang-produit-il-plus-de-globules-rouges`.

## Où apparaissent les images

- en haut de l'article, en grand, avec un clic pour agrandir ;
- sur les tuiles des listes et de l'accueil, recadrées sur le haut de l'image.

Une image verticale (3:4 ou 9:16) convient très bien : elle s'affiche en entier dans l'article
et le titre, en haut de l'image, reste visible sur les tuiles.

## Conseils

- Relisez le texte des images générées : les générateurs font souvent des fautes en français.
  La variante « sans texte » évite ce risque.
- Évitez les logos, les marques et les personnes réelles.
- Pour régénérer les consignes après de nouveaux articles : `npm run illustrations:consignes`.
- Un fichier dont le slug n'existe pas est converti quand même, avec un avertissement : il
  n'apparaîtra sur aucun article.
