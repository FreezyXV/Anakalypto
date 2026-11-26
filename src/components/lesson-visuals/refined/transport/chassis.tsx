import { fillPath, label, layers, moved, oval, stroke } from "../../detail100/plate";
import {
  cold,
  dark,
  fastener,
  forest,
  gold,
  grounding,
  heat,
  link,
  paint,
  stream,
  surface,
  technicalPlate,
} from "./plate";

function rubber(id: string, x: number, y: number, scale: number, turn = 0) {
  return moved(
    x,
    y,
    [
      <g key="steered-wheel" transform={`rotate(${turn})`}>
        {surface(id, "M-15-23q15-9 30 0v46q-15 9-30 0Z", "soot", 1.3)}
        {stroke("M-9-19v38m9-39v40m8-39v38", "#a7afa0", 1.12, "5 2")}
      </g>,
    ],
    scale,
  );
}

function axleHousing(id: string, x: number, y: number, phase = 0) {
  return moved(x, y, [
    surface(id, "M-91-6H90V6H-91Z", "steel", 1.2),
    surface(id, "M-38-16l17-18h40l18 13v43L21 34h-42l-17-13Z", "iron", 1.2),
    oval(0, 0, 31, 26, paint(id, "steel"), dark),
    oval(0, 0, 23, 19, paint(id, "soot"), dark),
    oval(0, 0, 16, 12, paint(id, "copper"), dark),
    ...[0, 1, 2, 3, 4, 5, 6, 7].flatMap((i) => {
      const a = (i / 8) * 2 * Math.PI + phase;
      return fastener(26 * Math.cos(a), 22 * Math.sin(a), 1.5);
    }),
    ...fastener(0, 0, 3),
  ]);
}

const differentialturn = technicalPlate(
  ["En ligne droite", "En virage", "Dans le différentiel"],
  [
    "Même distance pour les deux roues",
    "Un arc plus long à l’extérieur",
    "Les sorties peuvent tourner différemment",
  ],
  (s, id) =>
    s < 2
      ? [
          fillPath(
            s === 0 ? "M76 45h208v148H76Z" : "M45 191Q17 104 89 57q77-49 140-3 72 49 69 137Z",
            "#d2d7bd",
            "#8d9c82",
            1.1,
          ),
          stroke(
            s === 0 ? "M116 45v148m124-148v148" : "M117 185q-18-56 13-84m110 85q-7-90-68-126",
            cold,
            2.1,
            s === 0 ? "6 4" : undefined,
          ),
          stroke(s === 0 ? "M179 46v150" : "M180 190q-3-69-30-109", "#f2eed2", 2.15, "6 5"),
          ...[0, 1, 2, 3].map((i) =>
            stroke(
              `M${s === 0 ? 80 : 47 + i * 3} ${151 + i * 10}h${s === 0 ? 20 : 27}`,
              "#b0b99a",
              1.12,
            ),
          ),
          axleHousing(id, 180, 158, 0.43),
          rubber(id, 117, 158, 0.8),
          rubber(id, 242, 158, 0.8),
          s === 0
            ? [stream(116, 122, 116, 82, cold), stream(241, 122, 241, 82, cold)]
            : [
                stream(132, 106, 144, 97, forest),
                stream(222, 107, 202, 79, cold),
                link(93, 57, "Intérieur", "M81 63l25 42", forest),
                link(280, 62, "Extérieur", "M280 69l-59 32", cold),
              ],
        ]
      : [
          stroke("M179 58v58", paint(id, "iron"), 12),
          stream(179, 59, 179, 93, heat),
          axleHousing(id, 179, 139, 0.75),
          rubber(id, 74, 140, 1.08),
          rubber(id, 284, 140, 1.08),
          stream(133, 138, 101, 138, forest),
          stream(224, 138, 257, 138, cold),
          label(241, 68, "Entrée · 2", heat),
          label(77, 191, "Sortie · 1", forest),
          label(284, 191, "Sortie · 3", cold),
        ],
  230,
);

const steeringAssist = technicalPlate(
  ["Du volant à la direction", "L’assistance réduit l’effort", "La crémaillère déplace les roues"],
  [
    "La rotation agit sur la crémaillère",
    "Le moteur électrique ajoute un effort",
    "Les biellettes orientent les roues",
  ],
  (s, id) => [
    surface(id, "M58 120l20-13h211l16 16-9 23H67Z", "steel", 1.12),
    stroke("M85 132h202", "#334843", 5.5),
    surface(id, `M${s === 2 ? 128 : 111} 123h132v19h-132Z`, s === 1 ? "copper" : "steel", 1),
    ...Array.from({ length: 12 }, (_, i) =>
      stroke(`M${(s === 2 ? 137 : 120) + i * 10} 125v14`, "#6d7f6d", 1.62),
    ),
    surface(id, "M170 66h11l24 43-7 12Z", "iron"),
    oval(172, 65, 41, 20, paint(id, "soot"), dark),
    oval(172, 65, 31, 13, "#eee9d5", "#6d7e71"),
    stroke("M141 63l22 4 9 10 5-10 23-5", paint(id, "iron"), 5.9),
    oval(171, 66, 8.5, 6, paint(id, "steel"), dark),
    ...fastener(171, 66, 2),
    rubber(id, 57, 134, 0.94, s === 2 ? -24 : 0),
    rubber(id, 303, 134, 0.94, s === 2 ? -24 : 0),
    s === 1
      ? [
          surface(id, "M226 81l9-10h48l12 12v18l-10 10h-56Z", "iron", 1.15),
          ...[240, 247, 254, 261, 268, 275].map((x) => stroke(`M${x} 77v28`, "#c0c5aa", 1.4)),
          stream(259, 108, 253, 123, heat),
          link(274, 59, "Moteur", "M270 65l-2 14", heat),
        ]
      : s === 2
        ? [stream(154, 158, 219, 158, heat), link(266, 177, "Biellette", "M276 168l14-23", heat)]
        : [
            link(89, 86, "Colonne", "M108 87l69 8", cold),
            link(171, 178, "Crémaillère", "M172 167l-9-21", cold),
          ],
  ],
  230,
);

const suspensionLinks = technicalPlate(
  ["Le bras guide la roue", "La roue peut monter", "La roue peut aussi pivoter"],
  [
    "Le bras relie la roue à la structure",
    "Les articulations laissent la roue monter",
    "La biellette tire le porte-roue",
  ],
  (s, id) => {
    const y = s === 1 ? 101 : 130;
    return [
      grounding(id, 216, 169, 112),
      surface(id, "M38 81l16-15h82v91H49l-11-15Z", "iron"),
      surface(id, "M52 80h72v67H52Z", "steel", 1.12),
      ...[89, 111, 131].map((y) => fastener(65, y, 2.9)),
      surface(id, `M115 113l22-10 130 ${y - 105} 10 8-7 11-126 31-27-12Z`, "steel", 1.55),
      surface(id, `M134 119l85 ${y - 116}-66 28-23-8Z`, "glass", 0.9),
      oval(113, 119, 15, 12, paint(id, "soot"), dark),
      oval(113, 119, 9, 7, paint(id, "steel"), dark),
      ...fastener(114, 119, 2.25),
      oval(253, y, 11, 10, paint(id, "copper"), dark),
      surface(id, `M259 ${y - 13}l18 2 6 13-11 13-14-2Z`, "iron", 1.33),
      moved(274, y, [
        <g key="hub" transform={s === 2 ? "rotate(-29)" : undefined}>
          {oval(0, 0, 30, 39, paint(id, "soot"), dark)}
          {oval(0, 0, 23, 31, paint(id, "iron"), dark)}
          {oval(0, 0, 19, 27, paint(id, "steel"), dark)}
          {oval(0, 0, 8, 11, paint(id, "soot"), dark)}
          {layers(fastener(0, 0, 2.9))}
        </g>,
      ]),
      s === 0
        ? [
            link(123, 179, "Silentbloc", "M126 168l-10-35", cold),
            link(217, 70, "Rotule", "M223 74l24 46", heat),
            link(188, 152, "Bras", "M191 145l-12-10", cold),
          ]
        : s === 1
          ? [stream(319, 144, 319, 87, heat), link(206, 176, "Débattement", "M223 167l21-55", cold)]
          : [
              surface(id, "M156 78l109 30v10L154 88Z", "copper", 1.35),
              stream(166, 70, 202, 80, heat),
              link(108, 60, "Biellette", "M132 64l37 23", heat),
            ],
    ];
  },
  230,
);

function sideWheel(id: string, x: number, y: number, r: number) {
  return [
    oval(x, y, r, r, paint(id, "soot"), "#384c46"),
    oval(x, y, r * 0.79, r * 0.78, "none", "#a4aa90"),
    oval(x, y, r * 0.63, r * 0.63, paint(id, "steel"), "#62766a"),
    oval(x, y, r * 0.22, r * 0.22, paint(id, "iron"), dark),
    ...[0, 72, 144, 216, 288].map((deg) => (
      <path
        key={deg}
        transform={`translate(${x} ${y}) rotate(${deg})`}
        d={`M-2 ${-r * 0.25}l-1.6 ${-r * 0.36}h7.2L2 ${-r * 0.25}Z`}
        fill="#657f72"
      />
    )),
    ...fastener(x, y, 1.9),
  ];
}

function sideCar(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      grounding(id, 125, 83, 117),
      surface(id, "M8 62l11-20 36-8 43-27h62l38 23 34 9 11 13v16l-20 10H22Z", "steel", 1.4),
      surface(id, "M28 66l8-4h191l12 2-17 13H27Z", "iron", 0.8),
      surface(id, "M64 34l39-23h55l32 23Z", "glass", 1.14),
      stroke("M122 11v22m38-20 2 22m-83-2-3 27m99-26 5 29", "#667d74", 1.13),
      stroke("M29 49q68-13 150-10l54 12m-112-7h14m-47 4h13", "#e9e9cf", 1.34),
      fillPath("M227 46l10 4 4 7-15-4Z", "#e6dcab", gold, 0.77),
      fillPath("M14 51l14-6-4 8-10 3Z", "#9d5e43", heat, 0.77),
      ...sideWheel(id, 53, 73, 17.4),
      ...sideWheel(id, 196, 73, 17.4),
    ],
    scale,
  );
}

const dragwake = technicalPlate(
  ["L’air contourne la carrosserie", "Le sillage derrière la voiture", "Doubler la vitesse"],
  [
    "La géométrie change l’écoulement",
    "L’écoulement peut se séparer à l’arrière",
    "À paramètres égaux, la traînée est × 4",
  ],
  (s, id) =>
    s < 2
      ? [
          <g key="vehicle-left" transform="translate(300 84) scale(-.91 .91)">
            {sideCar(id, 0, 0)}
          </g>,
          stroke("M28 118q49-6 101-26 62-29 108-22l84 10", cold, 1.9),
          stroke("M31 108q50-3 101-31 45-23 103-21l86 10", cold, 1.6),
          stroke("M30 147q26-5 51 18 28 24 68 23h171", cold, 1.3),
          stream(29, 88, 78, 88, cold),
          s === 1
            ? [
                stroke(
                  "M249 89q58-18 77 17t-35 22q-24-11-6-26 18-13 23 4m-60 26q57 25 76 9 16-13-3-20m-72 35q33 18 67 5",
                  heat,
                  1.44,
                  "4 3",
                ),
                link(289, 186, "Sillage", "M287 176l15-36", heat),
              ]
            : [
                stroke("M251 89q35 4 70 14m-65 62q35 4 66 8", cold, 1.4),
                link(112, 181, "Filets d’air", "M115 186l8 3", cold),
              ],
        ]
      : [
          sideCar(id, 26, 97, 0.58),
          sideCar(id, 186, 97, 0.58),
          label(97, 77, "Vitesse · × 1", cold),
          label(262, 77, "Vitesse · × 2", cold),
          stream(38, 171, 67, 171, heat),
          stream(201, 171, 315, 171, heat),
          label(107, 195, "Traînée · × 1", heat),
          label(268, 195, "Traînée · × 4", heat),
        ],
  230,
);

const crumplefront = technicalPlate(
  ["Avant le choc frontal", "La structure avant se déforme", "La cellule protège l’espace"],
  [
    "Le longeron et l’habitacle ont deux rôles",
    "Le pliage absorbe une part de l’énergie",
    "L’habitacle est conçu pour résister",
  ],
  (s, id) => [
    surface(id, "M37 140l15-27 53-12 44-39h68l43 37 26 7 11 19 1 36-12 14H52Z", "steel", 1.4),
    surface(id, "M105 103l48-35h61l35 33Z", "glass", 1.4),
    stroke("M169 70v33m41-28 11 26m-102 5-5 35m50-33v27m49-28 14 29", "#5a7063", 1.85),
    surface(id, "M112 112h117v48H112Z", s === 2 ? "glass" : "cream", 1.05),
    stroke("M130 131l9-11 12 7 2 18h16m19-8 8-17 8 6 5 23", paint(id, "iron"), 4),
    surface(
      id,
      s === 0 ? "M226 141h81v17h-81Z" : "M228 141h17l8-7 8 13 9-11 6 14 13-8v13h-61Z",
      "copper",
      1.45,
    ),
    s !== 0 && surface(id, "M289 119l-22 8 12 9 10 11h11v-28Z", "iron"),
    stroke("M231 147h68m-234-2h49", "#e2d2b0", 1.2, "5 3"),
    ...sideWheel(id, 87, 163, 19),
    ...sideWheel(id, 252, 163, 19),
    s === 0
      ? [
          link(286, 75, "Longeron", "M287 81l-10 60", heat),
          link(84, 74, "Habitacle", "M94 79l25 28", cold),
        ]
      : s === 1
        ? [
            surface(id, "M306 75h25v108h-25Z", "iron", 1.4),
            ...[92, 108, 124, 140, 156, 172].map((y) => stroke(`M307 ${y}l22-10`, "#bcc3a6", 1.12)),
            stream(323, 66, 287, 66, heat),
            link(273, 198, "Pliage", "M268 187l-10-31", heat),
          ]
        : [
            stroke("M116 108l41-42h56l32 37v54H117Z", forest, 3, "5 4"),
            link(162, 192, "Cellule rigide", "M162 181l-20-26", forest),
          ],
  ],
  230,
);

export const chassisPlates = {
  differentialturn,
  steeringAssist,
  suspensionLinks,
  dragwake,
  crumplefront,
};
