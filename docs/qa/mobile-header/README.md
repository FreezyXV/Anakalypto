# Header mobile compact

Recette du 14 novembre 2026. Demande : conserver le logo et le nom Anakalypto, puis une loupe et un menu burger sur une ligne.

Le header mesure **62,5 px de haut** sur téléphone, au lieu de **202,33 px** sur les pages ordinaires testées avant modification. Les panneaux se superposent sous la barre sans pousser la leçon. Sur ordinateur, la hauteur reste de 70,5 px. Le menu compact est utilisé en dessous de 1 024 px, ce qui évite aussi les deux lignes de la version tablette précédente.

## Fonctionnement vérifié dans le navigateur

- Sept largeurs CSS : 266, 320, 390, 768, 1 023, 1 024 et 1 280 px, sur À propos, Découvrir et la leçon du turbo. Les 21 mesures sont dans [after.json](after.json), avec [before.json](before.json) pour la comparaison antérieure sur À propos. Aucun débordement horizontal ; logo et boutons mobiles ont des cibles d’au moins 44 px ; aucun `aria-controls` sans cible.
- La loupe ouvre une recherche avec focus dans le champ (texte de 16 px). Le menu ouvre les quatre destinations et le réglage du thème. Un seul panneau reste ouvert à la fois. Le lien courant est indiqué.
- Suggestions « turbo » : flèche bas puis Entrée ouvre la leçon correspondante et ferme le panneau à la navigation. Depuis Découvrir, le formulaire « papier » ouvre `/recherche?q=papier`. Les quatre liens du menu ont été suivis, chaque navigation refermant le menu.
- Premier Échap : ferme les suggestions en gardant le champ actif. Second Échap : ferme la recherche et rend le focus à la loupe. Échap dans le menu rend le focus au burger. Un clic extérieur ou une tabulation hors du panneau le ferme sans bloquer le reste de la page.
- Au clavier, la barre fermée parcourt le logo, la loupe, le menu puis le contenu ; aucun lien masqué n’est atteint. Contour de focus de 3 px observé. Après le dernier contrôle du menu, Tab rejoint le contenu et ferme le panneau.
- Thèmes Système → Clair → Sombre → Système vérifiés et préférence initiale restaurée. En paysage 390 × 320, le menu défile et son bouton de thème reste atteignable au clavier, avec le bas de la cible à 280 px.
- À 1 280 px, navigation complète et recherche visibles ; le raccourci `/` vise le champ du header. Aucun message d’erreur console observé.

Captures : [mobile fermé](390-closed.png), [menu](390-menu.png), [recherche](390-search.png), [ordinateur](1280-desktop.png). Les images sont les captures du vrai site de prévisualisation, sans maquette de substitution.

## Périmètre technique

Trois fichiers applicatifs seulement : `SiteHeader.tsx`, `MobileHeaderControls.tsx` et une feuille CSS à portée locale. Les boutons sont des disclosures, pas un menu ARIA d’application ou une fenêtre modale ; la tabulation reste libre. Les écouteurs sont retirés à la fermeture ; les références des boutons servent à restituer le focus. Les interactions sont isolées dans le petit composant client ; la marque et les liens de la version ordinateur restent rendus par le serveur.

Aucun article, dessin, schéma, fichier de thème partagé, style global, suivi d’illustration ou contenu de base n’est modifié. Les données de prévisualisation sont lues sur la base d’essai explicite ; pas de seed ni d’import. Cette base reste active selon le choix de l’utilisateur.

La recette est faite en navigateur redimensionné ; pas de test sur téléphone physique ou lecteur d’écran réel. 137 tests isolés réussis ; TypeScript, lint et formatage réussis. Compilation de production réussie sur la base d’essai, avec 1 296 pages générées. La publication est contrôlée séparément ; la suite globale locale, qui réinitialise une base, n’est pas utilisée.
