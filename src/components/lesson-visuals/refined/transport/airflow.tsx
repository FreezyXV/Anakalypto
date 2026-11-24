import { arrow, fillPath, label, layers, moved, oval, stroke } from "../../detail100/plate";
import { clip } from "../material";
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
  rotor,
  stream,
  surface,
  technicalPlate,
} from "./plate";

const sectionOutline =
  "M97 130C123 104 151 99 180 106Q219 114 276 135Q224 136 193 142Q132 146 97 130Z";
function airfoil(id: string, angle: number, marker = false) {
  return [
    <path
      key="profile-shell"
      data-airfoil={marker ? "lift" : undefined}
      d={sectionOutline}
      transform={`rotate(${angle} 180 125)`}
      fill={paint(id, "steel")}
      stroke={dark}
      strokeWidth="1.45"
    />,
    <g key="profile-cut" transform={`rotate(${angle} 180 125)`}>
      {surface(id, "M102 129q24-18 50-17h39q30 6 76 21-55 1-87 5-49 3-78-9Z", "cream", 0.82)}
      {stroke("M110 128q32-4 64-5t82 10m-91-25v31m16-31v31m-24-31-8 29", "#7e8d7f", 1.01)}
      {layers(
        [122, 137, 154, 168, 181, 203, 222, 239].map((x, i) =>
          oval(x, 129 + (i % 3) * 1.25, 2.1, 1.08, "#b3aa8e", "#7c8475"),
        ),
      )}
      {stroke("M101 127q35-25 76-19l59 17", "#fcf1d2", 1.15)}
    </g>,
  ];
}

const lift = technicalPlate(
  ["Écoulement attaché", "Incidence accrue", "Décrochage"],
  ["Air dévié vers le bas", "L’effort aérodynamique change", "L’air se sépare du profil"],
  (s, id) => [
    ...[
      `M23 63h71q96 ${-38 - s * 2} 236 30`,
      s === 2
        ? "M22 100h54q46-1 81-43t97 27l75 16"
        : `M22 101h55q39 -1 64 ${-16 - s * 10}t78 ${21 + s * 10}q43 31 109 40`,
      `M23 157h61q106 37 248 ${9 + s * 1.6}`,
    ].map((d, i) => stroke(d, cold, i === 1 ? 2.45 : 1.55)),
    ...airfoil(id, s * 7, true),
    s === 2 && [
      stroke(
        "M207 74c11-10 39 7 28 17-11 11-27-4-16-9m24 13c18-12 36 7 24 16-11 7-21-5-13-9m17 18c13-8 33 0 25 6",
        cold,
        1.55,
      ),
      link(280, 54, "Décollement", "M283 61l-51 26", cold),
    ],
    arrow(24, 101, 64, 101, cold),
    arrow(181, 101, 181, [62, 52, 84][s]!, forest),
    s !== 2 && label(183, 54, "Portance", forest),
    arrow(303, 166, 337, 174, cold),
  ],
);

const windtunnel = technicalPlate(
  ["Faire circuler l’air", "Mesurer des efforts", "Observer l’écoulement"],
  ["Le montage reste fixe", "Le support transmet les efforts", "Les traceurs suivent l’air"],
  (s, id) => [
    grounding(id, 179, 174, 151),
    surface(id, "M21 68h60l36 21h130l37-21h40v74h-42l-37-15H118l-35 15H21Z", "steel"),
    surface(id, "M21 68l17-14h57l34 19h123l36-19h49l-13 14h-40l-37 21H117L81 68Z", "cream", 0.95),
    surface(id, "M324 68l13-14v74l-13 14Z", "iron"),
    surface(id, "M31 80h47l36 19h137l37-19h26v51h-25l-39-15H113l-36 15H31Z", "glass", 1),
    ...[42, 50, 59, 68].map((x) => stroke(`M${x} 82v48`, "#608378", 1.12)),
    ...[42, 50, 59, 68].map((x) => stroke(`M${x + 1} 82v48`, "#ccdace", 0.71)),
    rotor(id, 291, 106, 22, "steel", s * 12),
    surface(id, "M146 105q24-17 63-4l-17 7q-25 8-46-3Z", "steel"),
    surface(id, "M172 110h6v43h-6Z", "iron"),
    surface(id, "M156 150h38v20h-38Z", "steel"),
    stroke("M161 159h25l-7 4h-13", "#748276", 1.05),
    ...[38, 66, 100, 132, 215, 253, 313].flatMap((x) => fastener(x, 73, 1.85)),
    s === 0 && [stream(41, 106, 83, 106), link(277, 57, "Ventilateur", "M278 60l9 23", gold)],
    s === 1 && [
      stream(175, 144, 175, 116, heat),
      link(233, 169, "Balance", "M205 167l-17-7", heat),
    ],
    s === 2 && [
      ...[91, 99, 110, 117].map((y, i) =>
        stroke(
          `M36 ${y}Q86 ${97 + i * 6} 121 ${99 + i * 5}Q171 ${79 + i * 13} 211 ${95 + i * 7}L252 ${103 + i * 4}`,
          cold,
          1.36,
          i === 1 ? "5 2" : undefined,
        ),
      ),
      link(90, 57, "Traceurs", "M92 62l-16 29", cold),
    ],
  ],
);

function skinSection(id: string, d: string) {
  return [
    surface(id, d, "steel", 1.2),
    clip(
      id + "-panel-" + d.length,
      d,
      layers([
        ...[106, 127, 148, 169, 190, 211, 232].map((x) =>
          stroke(`M${x} 83q-17 29-8 78`, "#748b7d", 1.05),
        ),
        stroke("M65 120q104-48 200 1m-190 24 156 7", "#e8e5c7", 1.15),
      ]),
    ),
  ];
}

const flaps = technicalPlate(
  ["Profil rentré", "Volet arrière sorti", "Bec et volet déployés"],
  [
    "Les deux pièces suivent le profil",
    "Le volet recule et s’abaisse",
    "Une fente guide l’écoulement",
  ],
  (s, id) => [
    grounding(id, 192, 166, 148),
    ...skinSection(id, "M89 119q24-38 83-24 47 10 70 27-66 18-153-3Z"),
    surface(id, "M112 117q29-21 77-6l31 9q-52 10-108-3Z", "cream", 0.95),
    stroke("M119 118q39-8 84 2m-65-19v24m22-27v27m21-23v24", "#7e8d7f", 0.9),
    surface(
      id,
      s === 2 ? "M47 135q11-24 36-25l-7 11-25 19Z" : "M84 118q7-13 26-21l-7 17-14 10Z",
      "copper",
    ),
    surface(
      id,
      s === 0 ? "M209 122q32-4 62 8l33 12q-48-2-82-9Z" : "M234 130q22 0 49 18l31 17q-50-8-74-22Z",
      "copper",
    ),
    stroke(s === 0 ? "M217 130l33 6m-157-17 11-6" : "M209 128l38 14m-25-10 44 14", "#63756e", 2.3),
    s === 0 && [
      link(91, 74, "Bec", "M94 81l5 22", gold),
      link(263, 81, "Volet", "M260 87l-7 39", gold),
    ],
    s === 1 && [
      stream(244, 111, 284, 141, heat),
      link(255, 73, "Glissière", "M248 80l-22 52", heat),
    ],
    s === 2 && [
      stroke("M29 152q35 1 54-22t47-33q37-15 94 12t92 43", cold, 2.3),
      stream(56, 145, 78, 130),
      link(66, 78, "Fente", "M67 86l19 43", cold),
      link(266, 76, "Volet", "M263 82l14 65", gold),
    ],
  ],
);

const wingLower = "M46 151q74-17 126-44l103-59 31 31-114 62q-60 31-139 34Z";
function finiteWing(id: string, flared: boolean) {
  return [
    surface(id, "M47 149q41-20 100-42l133-66 34 31-126 77q-58 20-137 24Z", "iron"),
    surface(id, wingLower, "steel", 1.35),
    ...[0, 1, 2, 3, 4, 5].map((i) =>
      stroke(`M${67 + i * 31} ${150 - i * 12}l9 16`, "#798e80", 0.82),
    ),
    stroke("M58 157q69-16 127-47l107-50m-83 58q49-28 79-49", "#e8e5cc", 1.16),
    flared && [
      surface(id, "M275 52l12-17 11 2 17 20-9 24Z", "steel"),
      stroke("M287 37l12 16 6 18", "#d7dabf", 1.05),
    ],
  ];
}
const winglet = technicalPlate(
  ["Une aile finie", "L’extrémité se relève", "Comparer les sillages"],
  ["L’air s’enroule au saumon", "Le winglet déplace le sillage", "Le tourbillon reste présent"],
  (s, id) => [
    grounding(id, 176, 168, 135),
    ...finiteWing(id, s > 0),
    stroke(
      s === 0
        ? "M299 81q-32 19 2 34 27 3 28-17 0-17-14-14-14 4-6 14 8 7 13-1"
        : "M304 78q-17 12-1 29c16 9 37-6 29-16-7-8-21-5-20 3",
      cold,
      2.55,
    ),
    s === 0 && link(270, 150, "Tourbillon", "M270 139l31-26", cold),
    s === 1 && link(222, 60, "Winglet", "M242 58l45-17", gold),
    s === 2 && [
      stroke(
        "M67 82q42-23 84-3 15 13 0 23-19 4-23-4m-63 7q40-23 83-4 15 11 2 20-19 4-24-5",
        cold,
        1.55,
        "5 3",
      ),
      label(112, 60, "Sillage", cold),
    ],
  ],
);

const icing = technicalPlate(
  ["Gouttes surfondues", "Glace accumulée", "Écoulement perturbé"],
  [
    "Les gouttes touchent le métal",
    "Le bord d’attaque se déforme",
    "La séparation arrive plus tôt",
  ],
  (s, id) => [
    grounding(id, 185, 173, 140),
    ...airfoil(id, 0),
    s > 0 && [
      surface(id, "M99 130q-15 5-25-6l6-6-3-7 9-2 2-9 16 4 9-4 9 8-14 9-5 12Z", "glass"),
      stroke("M80 119l11 6m-6-15 10-5m3 17 9-9m-17 4 10-1", "#dce9d2", 1.46),
      ...[83, 92, 98, 102, 109].map((x, i) =>
        oval(x, 111 + (i % 3) * 5, 1.76, 1.44, "#c0d1b9", "#7e9d8e"),
      ),
    ],
    s === 0 && [
      ...[
        [32, 107],
        [55, 119],
        [69, 103],
        [74, 127],
        [82, 111],
      ].map(([x, y]) => [
        fillPath(`M${x} ${y! - 6}q-8 8-2 11 7 2 5-4Z`, paint(id, "glass"), cold, 0.85),
      ]),
      stream(29, 88, 68, 88),
      link(222, 73, "Aile froide", "M214 80l-53 24", cold),
    ],
    s === 1 && link(116, 66, "Glace", "M111 74l-16 37", cold),
    s === 2 && [
      stroke("M22 92h46q24-42 67-31t91 21l103 16M28 148q63 24 104 12l199-9", cold, 2),
      stroke("M180 87q13-20 24-5t-5 15m30-10q18-17 26-4t-4 14", cold, 1.55),
      label(269, 63, "Air séparé", cold),
    ],
  ],
);

const drag = technicalPlate(
  ["Frottement sur la paroi", "Forme et sillage", "Portance et traînée"],
  [
    "L’air agit le long du revêtement",
    "Le sillage s’élargit derrière le corps",
    "L’aile laisse aussi un sillage",
  ],
  (s, id) => [
    grounding(id, 179, 171, 127),
    ...(s === 0
      ? [
          surface(id, "M46 144q86-16 235-17l32 17-255 20Z", "steel"),
          ...[0, 1, 2, 3].map((i) =>
            stroke(`M36 ${80 + i * 11}q113 0 273 ${30 - i * 2}`, cold, 1.24 + i * 0.22),
          ),
          ...[93, 142, 194, 249].map((x) => fastener(x, 149, 1.9)),
          stream(103, 117, 166, 117, heat),
          link(192, 75, "Paroi", "M191 82l-2 58", heat),
        ]
      : s === 1
        ? [
            surface(id, "M63 139q9-62 55-62 28 0 38 29v34q-51 33-93-1Z", "iron"),
            stroke("M73 135q10-47 48-49m-38 58q40 2 67-14", "#a5aa95", 1.55),
            stroke("M20 92q85-39 141-17t167 14M20 154q87 33 145 15t155-17", cold, 2.05),
            ...[172, 212, 254].map((x, i) =>
              stroke(`M${x} 107c21-15 32 9 18 20s-22-9-10-12`, cold, i === 1 ? 1.8 : 1.22),
            ),
            label(252, 63, "Sillage", cold),
          ]
        : [
            ...finiteWing(id, false),
            stroke(
              "M294 88q-21 8-10 26 15 14 30-3 7-12-3-14m-238 46q-31-12-33 10t29 13q10-8-3-11",
              cold,
              1.8,
            ),
            arrow(182, 108, 182, 56, forest),
            label(173, 54, "Portance", forest),
          ]),
  ],
);

function blade(id: string, x: number, y: number, scale: number, rotate: number) {
  return moved(
    x,
    y,
    [
      <g key="blade-projection" transform={`rotate(${rotate})`}>
        {surface(id, "M-116-8q42-8 86-4L110 0l11 7-179-1-60 4Z", "steel", 1.33)}
        {stroke("M-107-3l81-4 132 10m-174 1h82", "#f1e4c4", 1.1)}
        {layers([-95, -63, -29, 41, 73, 105].map((x) => stroke(`M${x} -4v8`, "#697d75", 0.83)))}
        {oval(0, 0, 9, 6.6, paint(id, "copper"), dark)}
      </g>,
    ],
    scale,
  );
}
const helicopter = technicalPlate(
  ["Pales en mouvement", "Le pas collectif", "Un disque incliné"],
  [
    "Les profils tournent autour du mât",
    "Les pales changent de pas ensemble",
    "Une part de l’effort devient horizontale",
  ],
  (s, id) => [
    grounding(id, 181, 169, 107),
    surface(
      id,
      "M68 126q8-30 47-42 25-4 47 6l51 24 53 5 12-17 8-1-2 23 14 9-81-4-44 20H90q-24 0-22-23Z",
      "steel",
    ),
    surface(id, "M81 122q15-24 43-29l30 7-15 25Z", "glass"),
    stroke("M111 100l-4 24m33-22-15 23m22 13h36l27-14m-7 11 58-8", "#788b7e", 1.15),
    surface(id, "M152 95l12-16h16v16Z", "iron"),
    surface(id, "M163 62h11v24h-11Z", "steel"),
    ...bladeCount(),
    blade(id, 168, 63, 1.05, s === 2 ? 9 : 0),
    rotor(id, 282, 119, 14, "steel", s * 7),
    stroke("M111 150l-10 14h76m-30-13 10 13m-67 3h101", "#5a6b60", 2),
    s === 0 && [stream(40, 78, 97, 64), link(249, 56, "Pale", "M243 61l-3 1", cold)],
    s === 1 && [
      surface(id, "M229 73q16-10 42-1l38 18q-38-4-80-17Z", "copper"),
      stroke("M232 84l77-1m-60-15q9-8 18 0", gold, 1.25),
      link(279, 59, "Pas", "M277 62l-12 8", gold),
    ],
    s === 2 && [
      stream(171, 96, 189, 49, forest),
      stream(189, 49, 212, 49, heat),
      link(264, 74, "Effort incliné", "M238 71l-54 1", forest),
    ],
  ],
);
function bladeCount() {
  return [stroke("M156 74h24m-26 4h29", dark, 1.05), ...fastener(168, 76, 2.5)];
}

export const airflowPlates = { lift, windtunnel, flaps, winglet, icing, drag, helicopter };
