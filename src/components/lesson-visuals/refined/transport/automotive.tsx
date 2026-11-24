import { label, layers, moved, oval, stroke } from "../../detail100/plate";
import { clip, pin } from "../material";
import {
  cold,
  dark,
  fastener,
  gold,
  grounding,
  heat,
  link,
  paint,
  stream,
  surface,
  technicalPlate,
} from "./plate";

function toothedRing(
  id: string,
  x: number,
  y: number,
  r: number,
  step: number,
  tone: "steel" | "copper",
) {
  return moved(x, y, [
    <g key="rotating-wheel" transform={`rotate(${step * 8})`}>
      {oval(0, 0, r, r, paint(id, tone), dark)}
      {layers(
        Array.from({ length: 14 }, (_, i) => (
          <path
            key={i}
            transform={`rotate(${(i * 360) / 14})`}
            d={`M-5 ${-r + 1}l2-7h9v6Z`}
            fill={paint(id, tone)}
            stroke={dark}
            strokeWidth=".95"
          />
        )),
      )}
    </g>,
    oval(0, 0, r - 7, r - 7, "none", "#c9c1a6"),
    oval(0, 0, r * 0.5, r * 0.5, paint(id, "iron"), dark),
    oval(0, 0, r * 0.26, r * 0.26, paint(id, "copper"), dark),
    ...fastener(0, 0, 2.4),
  ]);
}

const beltreel = technicalPlate(
  ["Sangle en mouvement", "La masse se déplace", "Le cliquet s’engage"],
  ["La roue peut encore tourner", "Le capteur pousse le verrou", "Le verrou retient la roue"],
  (s, id) => [
    grounding(id, 180, 185, 139),
    surface(id, "M41 62l19-14h237l18 13v106l-18 17H60l-19-13Z", "iron"),
    surface(id, "M49 66l18-12h224l18 12v98l-15 13H64l-15-13Z", "cream"),
    ...[72, 282].flatMap((x) => [69, 161].flatMap((y) => fastener(x, y, 2.9))),
    surface(id, "M123 80h145v18H123Z", "copper"),
    ...Array.from({ length: 44 }, (_, i) =>
      stroke(`M${129 + i * 3.1} 81v16`, i % 3 ? "#8b6949" : "#dbc197", 0.7),
    ),
    toothedRing(id, 131, 116, 41, s, "steel"),
    surface(
      id,
      s === 2 ? "M162 132l56-20 8 13-51 22-20 2Z" : "M177 149l46-22 8 15-47 20-19-3Z",
      "iron",
    ),
    ...fastener(220, s === 2 ? 120 : 136, 3.8),
    surface(id, s === 0 ? "M267 110v33h-7v-33Z" : "M270 111l-20 34-7-4 19-34Z", "steel"),
    oval(s === 0 ? 264 : 246, 146, 11, 11, paint(id, "copper"), dark),
    s === 0 && [stream(217, 85, 267, 85, gold), link(115, 66, "Enrouleur", "M116 71l9 23", cold)],
    s === 1 && [stream(262, 141, 238, 141, heat), link(272, 192, "Masse", "M264 182l-18-25", heat)],
    s === 2 && [link(187, 187, "Cliquet", "M183 178l-11-34", heat), pin(172, 144, heat)],
  ],
  230,
);

const tread =
  "M90 172c-26-19-39-55-23-94 15-40 51-49 90-39l49 11c49 15 69 36 59 81-3 26-26 46-60 50l-42 5q-45 3-73-14Z";
const tyregrip = technicalPlate(
  ["Empreinte sur la chaussée", "Rainures et évacuation", "Film d’eau"],
  [
    "Les sculptures touchent la route",
    "L’eau suit des passages latéraux",
    "Un film sépare pneu et chaussée",
  ],
  (s, id) => [
    surface(id, "M28 178l56-22h220l30 22v13H28Z", "iron"),
    stroke("M35 187h293", "#8d9c8b", 1.02, "7 3"),
    s > 0 &&
      surface(
        id,
        s === 1 ? "M37 179l34-14h230l25 12-278 6Z" : "M38 182l39-17h228l26 13-292 7Z",
        "glass",
        1,
      ),
    <g key="tire-profile" transform={s === 2 ? "translate(0 -10)" : undefined}>
      {surface(id, tread, "soot", 1.4)}
      {clip(
        id + "-aft-tread",
        tread,
        layers(
          Array.from({ length: 13 }, (_, i) => {
            const y = 43 + i * 11;
            return [
              stroke(`M${111 + i * 0.2} ${y}q19 14 54 11t116-11`, "#8f9788", 1.22),
              stroke(`M${125 + i * 0.2} ${y + 4}l21 8m28-8 20 8m23-12 14 7`, "#354840", 2.4),
            ];
          }),
        ),
      )}
      {oval(121, 113, 42, 61, paint(id, "iron"), dark)}
      {oval(122, 112, 30, 44, paint(id, "steel"), dark)}
      {oval(124, 112, 16, 27, paint(id, "soot"), dark)}
      {layers(
        [
          [-4, -13],
          [5, 11],
          [4, -4],
          [-3, 5],
        ].flatMap(([x, y]) => fastener(124 + x!, 112 + y!, 2.2)),
      )}
      {stroke("M77 81q-20 36-4 71m106-103q37 1 61 24", "#a1ac99", 1.1)}
    </g>,
    s === 0 && [link(263, 198, "Contact", "M249 188l-28-10", heat), pin(221, 179, heat)],
    s === 1 && [
      stream(186, 169, 228, 154),
      stream(234, 167, 284, 158),
      link(283, 102, "Rainures", "M279 109l-42 17", cold),
    ],
    s === 2 && [link(268, 199, "Film d’eau", "M263 188l-50-13", cold), pin(213, 175, cold)],
  ],
  230,
);

function coil(x: number, from: number, to: number) {
  const height = (to - from) / 12;
  return (
    `M${x - 13} ${from}q26 ${height} 26 ${height * 1.35}` +
    Array.from(
      { length: 7 },
      (_, i) => `q${i % 2 ? -26 : 26} ${height} ${i % 2 ? -26 : 26} ${height * 1.35}`,
    ).join("")
  );
}

const shocks = technicalPlate(
  ["Ressort et amortisseur au repos", "La roue monte sur une bosse", "Après le passage"],
  ["Le ressort soutient la caisse", "Le ressort se comprime", "Les oscillations s’amortissent"],
  (s, id) => {
    const y = s === 1 ? 135 : 152;
    const lower = y - 36;
    const strut = `M156 71h12v${lower - 63}h-12Z`;
    const wire = coil(157, 87, lower + 28);
    return [
      surface(id, s === 1 ? "M27 187h67q41-17 74-17t47 17h118v8H27Z" : "M27 187h306v8H27Z", "iron"),
      surface(id, "M65 71l23-12h137l24 12v14H65Z", "steel"),
      ...[93, 119, 167, 197, 222].flatMap((x) => fastener(x, 73, 1.85)),
      surface(id, strut, "steel"),
      surface(id, `M147 ${lower}h29v38h-29Z`, "iron"),
      stroke(wire, dark, 5.4),
      stroke(wire, paint(id, "steel"), 3.65),
      surface(id, `M137 ${y - 21}l25 5 35 20-7 10-42-10Z`, "iron"),
      oval(195, y, 37, 35, paint(id, "soot"), dark),
      oval(195, y, 24, 24, paint(id, "steel"), dark),
      oval(195, y, 12, 12, paint(id, "iron"), dark),
      ...fastener(195, y, 4.2),
      stroke(`M164 ${y - 13}q-11 18 2 32m2-18q-5 9 2 15`, "#929b89", 1.25),
      s === 0 && [
        link(77, 139, "Ressort", "M91 142l55-34", cold),
        link(271, 104, "Amortisseur", "M251 110l-74 17", cold),
      ],
      s === 1 && [
        stream(240, 165, 240, 121, heat),
        link(78, 119, "Compression", "M94 126l61-26", heat),
      ],
      s === 2 && [
        stroke("M238 95h89m-89 29h89", "#a4a895", 0.7),
        stroke("M243 112c5-12 11-12 16 0s10 9 15 0 9-7 14 0 9 5 13 0 8-3 12 0l6 1", cold, 1.75),
        label(275, 83, "Oscillations", cold),
      ],
    ];
  },
  230,
);

const discbrake = technicalPlate(
  ["Le disque tourne librement", "Les plaquettes se serrent", "Le disque dissipe de la chaleur"],
  [
    "Un jeu sépare les surfaces",
    "La pression rapproche les plaquettes",
    "Le frein chauffe par frottement",
  ],
  (s, id) => [
    grounding(id, 170, 189, 136),
    oval(164, 117, 64, 69, paint(id, "iron"), dark),
    oval(174, 117, 56, 69, paint(id, "steel"), dark),
    oval(174, 117, 47, 59, "none", "#c7cbb2"),
    oval(174, 117, 38, 47, "none", s === 2 ? heat : "#8ca093"),
    oval(174, 117, 26, 32, paint(id, "iron"), dark),
    oval(174, 117, 10, 12, paint(id, "copper"), dark),
    ...[0, 1, 2, 3, 4, 5, 6, 7].flatMap((i) =>
      fastener(174 + Math.cos(i * 0.79) * 33, 117 + Math.sin(i * 0.79) * 43, 1.6),
    ),
    surface(
      id,
      "M194 83q15-24 41-20l44 10 17 19-1 62-27 21-45 1-30-14 3-24 27 3-3-50-27 14Z",
      "ember",
      1.25,
    ),
    surface(id, "M243 76l33 12 9 24v27l-16 17-28-1Z", "iron"),
    oval(256, 112, 13, 14, paint(id, "steel"), dark),
    oval(256, 112, 6, 7, paint(id, "iron"), dark),
    surface(id, s === 0 ? "M204 95h13v48h-13Z" : "M198 95h13v48h-13Z", "soot"),
    ...fastener(283, 99, 2.6),
    ...fastener(276, 151, 2.6),
    s === 0 && [
      link(73, 78, "Disque", "M81 86l43 5", cold),
      link(284, 63, "Étrier", "M283 69l-11 11", heat),
    ],
    s === 1 && [
      stream(269, 115, 210, 115, heat),
      link(80, 151, "Plaquette", "M98 150l108-21", heat),
    ],
    s === 2 && [
      ...[138, 160, 182].map((x) => stroke(`M${x} 60q9-6 0-12m0 116q9 7 0 15`, heat, 1.65)),
      link(275, 193, "Chaleur", "M259 185l-58-24", heat),
    ],
  ],
  230,
);
export const automotivePlates = { beltreel, tyregrip, shocks, discbrake };
