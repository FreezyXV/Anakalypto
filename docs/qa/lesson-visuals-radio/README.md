# Radio et télévision — recette du 11 novembre 2026

Cinq schémas originaux, trois états chacun, associés explicitement à cinq leçons existantes : radiodiffusion (`broadcast`), ondes courtes (`shortwave`), poste à galène (`crystalradio`), TSF/Morse (`wirelessmorse`), télévision couleur (`colourtv`). Aucun nouveau sujet ni texte éditorial créé.

## Vérifications réalisées

- Lecture visuelle des cinq planches à 1280 px et des cinq articles à 320 px ; les quinze états mobiles changent ensemble de dessin et de légende, sans débordement horizontal. Texte courant du dessin mesuré à 12,55 px à 320 px.
- Compilation Next.js réussie sur une copie isolée, sans secrets de production. Sous `next start` local : quinze états vérifiés au clavier (Espace/Entrée), une seule figure visible, légende exacte et aucun texte hors du cadre ; aucune alerte ou erreur de console.
- Les captures `*-compiled-*.jpg` montrent la version finale dans les articles. Les planches `*-desktop.jpg` précèdent le dernier ajustement de position de « Un émetteur » ; `broadcast-compiled-1.jpg` montre sa position finale.
- Fichiers de mesures : `mobile-checks.json`, `desktop-bounds.json`, `compiled-checks.json`.
- 93 tests isolés réussis lors de cette recette, dont les durées Morse (1/3/7), l’AM/redressement et les coefficients de luma. Aucun test global ni import en production.

## Représentativité et sources

Les références ci-dessous ont été consultées directement pendant la préparation de ce lot. Elles ne valent pas relecture intégrale des articles, dont les dates de vérification n’ont pas été modifiées.

- Radiodiffusion : [Ofcom, 100 years of radio](https://www.ofcom.org.uk/tv-radio-and-on-demand/analogue-radio/100-years-of-radio). Un émetteur vers plusieurs récepteurs, objets génériques ; pas de reconstitution d’un appareil historique identifié.
- Ondes courtes : [NOAA, HF Radio Communications](https://www.spaceweather.gov/impacts/hf-radio-communications) et [ionosphère](https://www.spaceweather.gov/phenomena/ionosphere). Trajets progressivement courbés, sans miroir métallique, portée universelle ou règle jour/nuit fixe ; possibilité de traverser la couche ionisée.
- Galène : [National Bureau of Standards, Circular 121 (1922)](https://www.govinfo.gov/app/details/GOVPUB-C13-07b596dc1b751f724f455973facc4138). Énergie reçue par l’antenne, accord, détecteur non linéaire et écouteur ; courbe de redresseur idéal, sans pile ni amplification alimentée.
- Morse : [UIT-R M.1677-1](https://www.itu.int/rec/R-REC-M.1677-1-200910-I/). Durées des points/traits et silences calculées, même axe de temps ; le récepteur final montre bien un point puis un trait dans le rapport 1:3.
- Télévision : [UIT-R BT.470-5, tableau 2](https://www.itu.int/dms_pubrec/itu-r/rec/bt/R-REC-BT.470-5-199802-S%21%21PDF-E.pdf). Luma Y′ calculée sur des composantes précorrigées en gamma ; même motif monochrome et couleur, compatibilité limitée aux systèmes concernés.

## Limites

Schémas pédagogiques simplifiés, non plans de fabrication. Pas de test auprès de participants, de lecteur d’écran réel ou du déploiement de production. Les preuves concernent les versions locales de ce lot.
