import { label, layers, moved, oval, stroke } from "../../detail100/plate";
import {
  cold,
  dark,
  fastener,
  forest,
  gold,
  heat,
  link,
  paint,
  stream,
  surface,
  technicalPlate,
  type TransportTone,
} from "./plate";

function toothedOutline(count: number, radius: number) {
  const pitch = (Math.PI * 2) / count;
  const tooth = [
    [-0.5, 0],
    [-0.32, 0],
    [-0.23, 3.2],
    [0.23, 3.2],
    [0.32, 0],
    [0.5, 0],
  ];
  return Array.from({ length: count }, (_, i) =>
    tooth.map(([fraction, tip]) => {
      const angle = (i + fraction!) * pitch;
      return `${((radius + tip!) * Math.cos(angle)).toFixed(2)} ${((radius + tip!) * Math.sin(angle)).toFixed(2)}`;
    }),
  )
    .flat()
    .join("L");
}

function cog(
  id: string,
  x: number,
  y: number,
  count: number,
  radius: number,
  tone: TransportTone,
  angle = 0,
) {
  const outline = `M${toothedOutline(count, radius)}Z`;
  return moved(x, y, [
    <g key="geared-wheel" data-teeth={count} transform={`rotate(${angle})`}>
      {surface(id, outline, tone, 1.05)}
      {oval(0, 0, radius - 4.4, radius - 4.4, "none", "#ccb994")}
      {oval(0, 0, Math.max(1, radius - 7), Math.max(1, radius - 7), paint(id, "soot"), dark)}
      {oval(0, 0, Math.max(1, radius - 8.5), Math.max(1, radius - 8.5), paint(id, tone), dark)}
      {oval(0, 0, radius * 0.31, radius * 0.31, paint(id, "iron"), dark)}
      {oval(0, 0, radius * 0.17, radius * 0.17, paint(id, "steel"), dark)}
      {layers(
        Array.from({ length: 5 }, (_, i) => {
          const theta = (i * 2 * Math.PI) / 5;
          return fastener(
            Math.cos(theta) * radius * 0.62,
            Math.sin(theta) * radius * 0.62,
            Math.max(1.3, radius * 0.037),
          );
        }),
      )}
    </g>,
  ]);
}

const gearboxpair = technicalPlate(
  ["Réduire la rotation", "Augmenter la rotation", "Sélectionner un rapport"],
  [
    "Deux tours d’entrée, un tour de sortie",
    "La petite roue tourne deux fois plus vite",
    "Le rapport adapté dépend de la situation",
  ],
  (s, id) =>
    s < 2
      ? [
          surface(id, "M44 69h273v112H44Z", "glass", 1),
          surface(id, "M48 75h266v101H48Z", "cream", 0.7),
          stroke("M49 139h263m-264 22h267", "#a0a381", 0.75, "5 4"),
          ...[55, 305].flatMap((x) => [...fastener(x, 80), ...fastener(x, 171)]),
          cog(id, 130, 130, 12, 25, s === 0 ? "copper" : "steel"),
          cog(id, 209, 130, 24, 51, s === 1 ? "copper" : "steel", 7.5),
          label(88, 98, "12 dents", heat),
          label(279, 98, "24 dents", cold),
          stroke("M124 124q8-11 13-1m-6-4 6 3-2-6", "#faf1d5", 1.15),
          stroke("M219 119q-11-9-20 1m5-7-5 7 8-2", "#faf1d5", 1.25),
          s === 0 ? stream(56, 130, 100, 130, heat) : stream(307, 130, 267, 130, heat),
          label(67, 197, s === 0 ? "Entrée" : "Sortie", s === 0 ? heat : cold),
          label(292, 197, s === 0 ? "Sortie" : "Entrée", s === 0 ? cold : heat),
        ]
      : [
          surface(id, "M37 67l22-13h235l30 17v98l-24 15H61l-24-18Z", "iron", 1.3),
          surface(id, "M48 74h266v92H48Z", "cream", 0.8),
          stroke("M53 94h256m-256 51h256", "#7e927f", 6),
          cog(id, 101, 93, 12, 16, "copper"),
          cog(id, 101, 145, 24, 30, "steel", 7.5),
          cog(id, 240, 94, 24, 29, "steel"),
          cog(id, 240, 145, 12, 16, "steel", 15),
          surface(id, "M63 84h17v18H63Zm91 49h32v24h-32Z", "copper"),
          stroke("M65 90l12 6m-12-2 12 6m79 37h27m-26 5h25m-24 6h24", "#e4d2a7", 1.25),
          link(161, 199, "Sélecteur", "M162 187l11-28", gold),
        ],
  230,
);

function clutchFace(id: string, x: number, y: number, kind: "steel" | "friction", width = 16) {
  return moved(x, y, [
    surface(
      id,
      `M0-57h${width}v114H0q-35-9-35-57t35-57Z`,
      kind === "steel" ? "steel" : "iron",
      1.14,
    ),
    oval(width, 0, 31, 57, paint(id, kind === "steel" ? "steel" : "copper"), dark),
    oval(width, 0, 24, 46, paint(id, kind === "steel" ? "iron" : "soot"), dark),
    oval(width, 0, 13, 26, paint(id, "steel"), dark),
    oval(width, 0, 6, 13, paint(id, "iron"), dark),
    ...[-35, -21, 23, 37].flatMap((y) => fastener(width + 19, y, 1.6)),
    stroke(`M${width - 5} -49q-30 20-21 62`, "#e3cf9f", 0.98),
  ]);
}

const clutchplates = technicalPlate(
  ["Le disque est serré", "Le disque est libéré", "Le volant bimasse"],
  [
    "Le moteur peut entraîner la boîte",
    "Le contact entre les surfaces est rompu",
    "Les ressorts filtrent les à-coups",
  ],
  (s, id) =>
    s < 2
      ? [
          surface(id, "M28 117h299v18H28Z", "steel", 1.16),
          stroke("M32 126h293", "#eeebcb", 0.9, "5 4"),
          clutchFace(id, 105, 127, "steel", 18),
          clutchFace(id, s === 0 ? 141 : 154, 127, "friction", 9),
          clutchFace(id, s === 0 ? 178 : 217, 127, "steel", 13),
          surface(
            id,
            s === 0
              ? "M165 84l92 25 12 11-95-17Zm0 86 92-25 12-11-95 17Z"
              : "M200 84l72 23 10 11-77-17Zm0 86 72-23 10-11-77 17Z",
            "iron",
            1.1,
          ),
          ...[70, 169].map((y) => stroke(`M99 ${y + 4}h59`, "#b5aaa0", 0.7)),
          link(74, 54, "Volant", "M83 64l14 19", cold),
          link(166, 61, "Disque", s === 0 ? "M162 69l-12 16" : "M165 69l-3 16", heat),
          link(269, 61, "Plateau", s === 0 ? "M254 69l-63 25" : "M255 69l-24 24", cold),
          s === 0
            ? stream(252, 140, 323, 140, forest)
            : [stroke("M190 101v51", heat, 1.5, "4 3"), label(290, 169, "Arbre de boîte", cold)],
        ]
      : [
          oval(178, 124, 102, 71, paint(id, "iron"), dark),
          oval(177, 123, 88, 64, paint(id, "steel"), dark),
          oval(177, 123, 77, 52, paint(id, "soot"), dark),
          oval(177, 123, 47, 37, paint(id, "steel"), dark),
          oval(177, 123, 20, 19, paint(id, "iron"), dark),
          ...[0, 1, 2, 3, 4, 5].flatMap((i) =>
            fastener(
              177 + 32 * Math.cos((i * Math.PI) / 3),
              123 + 26 * Math.sin((i * Math.PI) / 3),
              2.3,
            ),
          ),
          stroke(
            "M105 118q8-30 35-37m75 0q28 11 35 38m-9 19q-13 25-42 30m-50 1q-27-6-40-29",
            paint(id, "copper"),
            10.5,
          ),
          ...[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
          ].map((i) => {
            const a = (i / 24) * Math.PI * 2;
            if (i % 6 === 0) return null;
            return stroke(
              `M${(177 + 69 * Math.cos(a)).toFixed(2)} ${(123 + 50 * Math.sin(a)).toFixed(2)}l${(11 * Math.cos(a)).toFixed(2)} ${(9 * Math.sin(a)).toFixed(2)}`,
              "#e5bf81",
              1.4,
            );
          }),
          link(72, 53, "Masse primaire", "M87 63l29 13", cold),
          link(268, 71, "Ressorts", "M254 78l-23 13", heat),
          link(265, 201, "Masse secondaire", "M258 188l-45-41", cold),
        ],
  230,
);

function pulley(id: string, x: number, y: number, r: number) {
  return [
    oval(x, y, r + 4, r + 4, paint(id, "iron"), dark),
    oval(x + 5, y, r, r, paint(id, "steel"), dark),
    oval(x + 5, y, r * 0.76, r * 0.76, "none", "#e9dec0"),
    oval(x + 5, y, r * 0.33, r * 0.33, paint(id, "iron"), dark),
    ...fastener(x + 6, y, 3),
  ];
}

const automaticGearbox = technicalPlate(
  ["Le convertisseur", "Deux embrayages", "Les poulies variables"],
  [
    "Le fluide transmet le couple",
    "Les deux jeux de rapports alternent",
    "La courroie relie les deux poulies",
  ],
  (s, id) =>
    s === 0
      ? [
          surface(id, "M31 120h301v17H31Z", "iron"),
          surface(id, "M84 79l25-18h163l18 15v83l-16 16H109l-25-13Z", "steel", 1.4),
          surface(id, "M104 79h159l10 23v50l-15 10H107l-11-18V99Z", "glass"),
          stroke("M128 92q-25 32 0 59m98-56q28 32 1 57", paint(id, "iron"), 14.5),
          ...[0, 1, 2, 3, 4].map((i) =>
            stroke(`M${107 + i * 4} ${96 + i * 10}l17 5m${105 - i * 3} -5 16-5`, "#ddd9ba", 1.7),
          ),
          stream(148, 99, 213, 99, cold),
          stream(210, 148, 149, 148, cold),
          label(176, 133, "Fluide", cold),
          label(69, 179, "Pompe", heat),
          label(279, 179, "Turbine", cold),
        ]
      : s === 1
        ? [
            surface(id, "M31 72l24-12h243l26 16v89l-19 14H51l-20-13Z", "iron"),
            surface(id, "M42 77h270v87H42Z", "cream", 0.8),
            stroke("M52 121h68l46-25h130m-176 25 46 27h130", "#a3af98", 5.5),
            stroke("M52 121h68l46-25h130", heat, 3.8),
            ...[58, 73, 87, 102].map((x, i) =>
              surface(
                id,
                `M${x} ${i % 2 === 0 ? 94 : 102}h7v${i % 2 === 0 ? 47 : 37}h-7Z`,
                i % 2 === 0 ? "steel" : "copper",
              ),
            ),
            cog(id, 201, 96, 12, 16, "copper"),
            cog(id, 262, 97, 16, 20, "steel"),
            cog(id, 210, 149, 16, 18, "steel"),
            cog(id, 270, 147, 12, 13, "steel"),
            label(96, 183, "Embrayages", heat),
            link(226, 57, "Rapport engagé", "M237 61l7 23", heat),
          ]
        : [
            surface(id, "M37 114h270v18H37Z", "iron"),
            pulley(id, 106, 119, 38),
            pulley(id, 250, 119, 25),
            stroke(
              "M107 79l148 14q35 4 25 31-4 18-21 21l-150 19q-30 0-40-31-8-35 22-49 10-6 16-5Z",
              paint(id, "copper"),
              7,
            ),
            stroke(
              "M106 78l149 14q35 4 25 31-4 18-21 21l-150 19q-30 0-40-31-8-35 22-49 10-6 16-5Z",
              "#e6cc98",
              1.8,
              "3 3",
            ),
            link(173, 57, "Courroie", "M173 64l0 20", heat),
            label(112, 183, "Poulie serrée", cold),
            label(251, 183, "Poulie ouverte", cold),
          ],
  230,
);

function axleWheel(id: string, x: number, y: number) {
  return moved(x, y, [
    surface(id, "M-13-19q13-5 26 0v38q-13 5-26 0Z", "soot", 1.3),
    stroke("M-8-15v30m8-31v32m8-31v30", "#a7afa0", 1.12, "5 2"),
  ]);
}

const transferCase = technicalPlate(
  ["Un seul essieu entraîné", "Les deux essieux entraînés", "Passer en gamme courte"],
  [
    "Le couple atteint l’essieu arrière",
    "La liaison vers l’avant est engagée",
    "La réduction augmente le couple",
  ],
  (s, id) =>
    s < 2
      ? [
          surface(id, "M121 64q56-23 113-2l34 25v70l-19 16H114l-22-17V89Z", "glass", 1.15),
          surface(id, "M124 68q57-12 104-1l19 11h-143Z", "steel"),
          stroke("M113 84h134m-134 69h134m-66-75v82", " #71847b", 7),
          stroke(
            s === 0 ? "M178 108v47m-69 0h143" : "M178 81v75m-69-1h143m-143-70h143",
            heat,
            3.15,
          ),
          ...[
            [99, 84],
            [261, 84],
            [99, 155],
            [261, 155],
          ].map(([x, y]) => axleWheel(id, x!, y!)),
          surface(id, "M153 104l12-9h38l12 13v25l-13 8h-49Z", "iron", 1.2),
          cog(id, 175, 119, 12, 12, "copper"),
          cog(id, 196, 119, 8, 8, "steel", 13),
          link(290, 119, "Transfert", "M265 125h-45", heat),
          label(57, 85, "Avant", cold),
          label(56, 160, "Arrière", cold),
        ]
      : [
          surface(id, "M48 81l25-14h227l20 16v78l-23 17H65l-17-19Z", "steel"),
          surface(id, "M72 83h219v73H72Z", "cream"),
          stroke("M57 123h254", dark, 7),
          cog(id, 138, 121, 12, 20, "copper"),
          cog(id, 196, 121, 24, 37, "steel", 7.5),
          stream(63, 122, 108, 122, heat),
          stream(235, 123, 285, 123, cold),
          link(173, 59, "Réducteur", "M174 63l7 27", heat),
          label(277, 174, "Vers essieux", cold),
        ],
  230,
);

export const transmissionPlates = { gearboxpair, clutchplates, automaticGearbox, transferCase };
