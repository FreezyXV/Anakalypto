# Grille de relecture des schémas Découvrir

**Version relue** : celle servie le **10 octobre 2026, entre 19 h 15 et 19 h 21** (captures), planches regardées ensuite, par le serveur
de Codex (port 3001), en lecture seule. Navigateur Chromium sans interface, dans un contexte de
test vierge à chaque parcours ; aucun navigateur personnel n'a été utilisé ni effacé.

**Méthode.** Pour chacune des 15 découvertes, un script a joué le parcours complet et capturé le
dessin à chaque état :

- toutes les étapes ;
- les deux positions des interrupteurs ;
- chaque bouton d'étape des curseurs, et la fin de cycle pour le piston ;
- les vues fixes des défis et les scènes complémentaires ;
- les deux questions de la révision express.

Les captures sont assemblées en planches et **ont été regardées une par une** :

- à 390 px, pour les 15 découvertes ;
- à 320 et à 430 px, pour les cinq vues les plus denses : photosynthèse, réseau, pilote
  automatique, papier, fresque.

Le parcours a aussi été joué à 1280 px, avec des mesures mais sans relecture des captures.

**Planches** : `docs/qa/claude-phase3/<slug>__390.png`, et `__320.png` / `__430.png` pour les vues
denses. Le bouton rond « N » visible sur certaines captures est l'indicateur de développement de
Next.js, pas un élément du site.

La version précédente de cette grille, du 10 octobre à 18 h 33, portait sur des dessins depuis
remplacés. Ses défauts sont repris et jugés dans `docs/CLAUDE_INTEGRATION_RECHECK_PHASE3.csv`.
Ces observations ne remplacent pas un essai avec des enfants ou des adultes.

## Mesures automatiques communes

Les 15 découvertes ont été mesurées à 390 et à 1280 px, et les cinq vues denses à 320 et à
430 px.

| Contrôle                                      | Résultat                                                                                                                                                                                                    |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Superposition entre deux textes d'un dessin   | Aucune détectée. La détection ne voit pas les textes posés sur un trait : ils sont relevés à l'œil plus bas                                                                                                 |
| Texte sortant du cadre du dessin              | Aucun                                                                                                                                                                                                       |
| Débordement horizontal de la page             | Aucun à 390, 430 et 1280 px. À 320 px, 9 px sur **toutes** les pages du site, à cause du bouton de thème de l'en-tête et non des dessins (demande P3-06)                                                    |
| Taille de texte rendue (taille SVG × échelle) | 14 unités donnent 12,2 px à 390 px, 9,5 px à 320 px, 13,8 px à 430 px et 25,7 px à 1280 px. Turbo (13 unités) : 11,3 px à 390 px. Piston (12 unités) : 10,5 px à 390 px (demande P3-05)                     |
| Erreurs console                               | Aucune                                                                                                                                                                                                      |
| Clavier                                       | Interrupteur activable par Espace, curseur par flèche droite, réponses validées par Entrée : 15 sur 15 aux deux largeurs principales                                                                        |
| Noms accessibles                              | Interrupteurs nommés par `aria-label` (par exemple « Éclairer la feuille ») ; curseurs nommés par leur `label` avec l'étape en cours (« Étape du réseau : Étape 1 : Centrale ») ; boutons d'étape numérotés |
| Révision express                              | Pour les 30 questions, à 390 et à 1280 px : dessin masqué avant la réponse, erreur bloquante, dessin affiché après la bonne réponse, écran « Révision terminée »                                            |

Non vérifié :

- la lecture réelle par un lecteur d'écran ;
- la visibilité du focus clavier, non relue sur les captures ;
- les animations en mouvement (turbo, Wi-Fi), observées seulement en captures fixes.

## Sujets

Verdicts : **conforme**, **conforme avec réserve** (défaut mineur qui ne change pas le sens) ou
**à corriger** (risque de contresens).

### Allumer une lampe — `allumer-une-lampe` (v1, `circuit`)

- **Vu** : interrupteur ouvert, sans flèches et lampe éteinte ; interrupteur fermé, avec des
  flèches qui vont de la borne + vers la borne − par l'extérieur, et lampe allumée ; vues des
  défis et de la révision.
- **Observation** : une seule boucle, la lampe en série, la pile dessinée correctement. La
  légende de l'état ouvert parle déjà des flèches « dans le circuit fermé », mais le dessin reste
  juste.
- **Verdict** : conforme.

### Turbo — `le-turbo` (v1, `turbo`)

- **Vu** : curseur à 0, 50 et 100 % ; défis ; révision.
- **Observation** : deux roues sur un axe et deux flux nommés. Les flèches passent au-dessus des
  roues au lieu de les traverser, et la vitesse ne change visiblement qu'en mouvement.
- **Verdict** : conforme avec réserve (P3-07, texte à 11,3 px).

### Savon — `savon-et-graisse` (v1, `soap`)

- **Vu** : goutte seule ; goutte entourée de molécules ; défis ; révision.
- **Observation** : les têtes bleues sont vers l'eau, les queues orange vers la graisse ; la
  graisse est toujours présente.
- **Verdict** : conforme.

### Feuille et lumière — `feuille-et-lumiere` (v3, `photosynthesis`)

- **Vu** : éteint et allumé, défis, scène du placard (éteinte), révision ; à 320, 390 et 430 px.
- **Observation** : allumé, la lumière arrive sur l'eau, l'O₂ sort de l'eau, ATP et NADPH vont
  vers Calvin, le CO₂ entre dans Calvin, le sucre sort. Éteint, le soleil est gris et barré,
  le lien ATP/NADPH en pointillés, avec la mention « Énergie requise ». L'idée des deux trajets
  distincts se lit sans légende.
- **Limites de lisibilité** : à 320 px, le texte rendu fait 9,5 px ; « Vue symbolique à
  l'intérieur d'une feuille » est posé sur le contour de la feuille.
- **Verdict** : conforme avec réserve (P3-05).

### Pain au levain — `le-pain-qui-gonfle` (v3, `bread`)

- **Vu** : pâte plate (éteint), pâte gonflée avec bulles (allumé), scène des microbes (levures
  vers CO₂, bactéries vers acides), révision.
- **Observation** : le changement est immédiatement visible. « Acides » touche la pointe de sa
  flèche.
- **Verdict** : conforme avec réserve (P3-09).

### Bouteille recyclée — `la-bouteille-qui-revient` (v3, `glass`)

- **Vu** : lot avec intrus bloqué avant le calcin (éteint) ; intrus écarté, calcin, four, moule
  et retour au conteneur (allumé) ; défis ; révision.
- **Observation** : la chaîne et le blocage sont lisibles sans texte.
- **Verdict** : conforme.

### Wi-Fi — `les-donnees-dans-l-air` (v3, `wifi`)

- **Vu** : émetteur éteint (croix, barres vides) ; arcs d'émission et de réponse ; scène du mur
  avec des arcs atténués et un signal reçu plus faible ; révision.
- **Observation** : l'affaiblissement est montré, sans coupure nette au mur. Pulsations non
  observées en mouvement.
- **Verdict** : conforme.

### Téléphone — `la-voix-dans-le-fil` (v3, `telephone`)

- **Vu** : silence, avec trois lignes plates et la mention « pas de variation liée à la voix » ;
  parole, avec voix, courant et son en courbes de même forme et une flèche du micro vers
  l'écouteur ; défis ; révision.
- **Observation** : l'état silencieux ne laisse pas croire à une absence de courant.
- **Verdict** : conforme.

### Cyclone — `naissance-d-un-cyclone` (v3, `cyclone`)

- **Vu** : mer froide (nuage seul, évaporation faible) ; mer chaude (deux masses nuageuses, œil
  en colonne avec flèche descendante, flèches « Condensation → chaleur » montantes, convergence
  en surface, symbole de rotation vu du dessus) ; scène de la terre (nuages gris, « apport marin
  coupé », « circulation résiduelle ») ; révision.
- **Observation** : l'ancien défaut de l'œil est corrigé. En revanche, le libellé « Air humide
  qui monte » est centré sous la flèche descendante de l'œil.
- **Verdict** : à corriger (P3-03).

### Machine à papier — `de-la-pate-a-la-feuille` (v2, `paper`)

- **Vu** : les cinq étapes (pâte diluée, égouttage, pressage, séchage, bobine), les vues fixes,
  la révision ; à 320, 390 et 430 px.
- **Observation** : l'étape en cours est mise en évidence, l'eau qui s'écoule est visible sous la
  toile et sous les presses.
- **Verdict** : conforme ; à 320 px, texte à 9,5 px (P3-05).

### Formation d'un sol — `naissance-d-un-sol` (v2, `soil`)

- **Vu** : roche-mère, roche fissurée, minéraux altérés, humus, sol en couches avec une plante,
  scène d'érosion (pluie, couche de surface emportée).
- **Observation** : les couches apparaissent dans l'ordre ; l'érosion se comprend sans légende.
- **Verdict** : conforme.

### Fresque — `la-couleur-dans-le-mur` (v2, `fresco`)

- **Vu** : les cinq étapes (enduit frais, pigments, CO₂ absorbé, cristaux, pigments fixés), la
  scène de retouche (pigments à l'extérieur de l'enduit, « Ajout fragile »), la révision ; à 320,
  390 et 430 px.
- **Observation** : la réaction avec le CO₂ est bien distinguée du séchage. Le libellé
  « Pigments dans la chaux fraîche » apparaît dès l'étape 1, avant les pigments.
- **Verdict** : conforme avec réserve (P3-08). Le résumé et l'objectif de la découverte gardent
  le mot « séchant » (P3-01).

### Réseau électrique — `le-voyage-de-l-electricite` (v2, `grid`)

- **Vu** : les cinq étapes (centrale, élévation, transport, abaissement, maison à 230 V), la
  scène d'équilibre (production, signe =, consommation, « Les câbles ne sont pas une réserve »),
  la révision ; à 320, 390 et 430 px.
- **Observation** : les étapes s'allument une à une, avec une flèche vers le haut ou vers le bas
  pour la tension.
- **Limite de capture** : à 320 px, trois captures sont en partie masquées par l'en-tête collant
  (capture d'élément après défilement). Ces états ont été vus normalement à 390 et 430 px.
- **Verdict** : conforme (P3-02 porte sur le résumé, pas sur le dessin).

### Pilote automatique — `le-pilote-qui-corrige` (v3, `autopilot`)

- **Vu** : désengagé et engagé, scène de la rafale (avion incliné, flèche de rafale, boucle
  active), révision ; à 320, 390 et 430 px.
- **Observation** : la boucle engagée est juste : consigne vers calculateur, capteurs,
  servomoteurs, gouvernes, puis retour vers les capteurs. Désengagé, la croix est placée entre
  capteurs et calculateur, alors que le texte dit que ce sont les commandes des gouvernes qui
  sont coupées.
- **Verdict** : à corriger (P3-04).

### Moteur à quatre temps — `les-quatre-temps` (v3, `piston` puis `flow` en boucle)

- **Vu** : les quatre boutons de temps et la fin de cycle à 720° ; la vue fixe « combustion-
  détente » ; le cycle en boucle des défis ; la révision.
- **Observation** :
  - admission : flèche d'entrée, piston qui descend ;
  - compression : soupapes fermées, piston qui monte ;
  - combustion-détente : gaz orange, piston qui descend ;
  - échappement : flèche de sortie, piston qui monte.

  La cinématique fine n'a pas été vérifiée à l'œil ; Codex la teste automatiquement. « 2 tours /
  cycle » et « Vilebrequin » sont les textes les plus petits (10,5 px), et « Vilebrequin » passe
  sur le cercle.

- **Verdict** : conforme avec réserve (P3-05, P3-09).
