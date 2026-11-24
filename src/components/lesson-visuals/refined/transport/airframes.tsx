import { block, fillPath, label, moved, oval, stroke } from "../../detail100/plate";
import { pin } from "../material";
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

function airliner(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      grounding(id, 92, 32, 89),
      surface(id, "M12 12L5-16h15l19 17 130 2q34 2 38 14-1 6-22 8L41 24 11 19Z", "steel"),
      surface(id, "M97 16l42-3-31 31-21 6 13-27Z", "iron"),
      surface(id, "M113 28l37 1v15l-6 7h-29l-7-8Z", "steel"),
      oval(148, 39, 5.7, 10, paint(id, "soot"), dark),
      surface(id, "M28 17l-15 17 12-1 39-16Z", "iron"),
      stroke("M37 18q72 4 133 1", "#eee8cf", 1.3),
      ...[51, 62, 73, 84, 95, 107, 119, 131, 143, 155, 166].map((a) =>
        oval(a, 11, 2.4, 1.8, "#466662", "#7e9285"),
      ),
      fillPath("M177 9h11l7 5-18-1Z", "#56736b", "#556a60", 0.76),
    ],
    scale,
  );
}

function antenna(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      grounding(id, 0, 33, 23),
      surface(id, "M-13 30L-4-18h8l10 48Z", "iron"),
      stroke("M-12 24l21-18-19 6 17-17-13 4", "#b5baa0", 0.9),
      surface(id, "M-24-14q22 10 41-15l8-5q-5 24-19 29-19 6-30-9Z", "steel"),
      stroke("M-10-12l16-15m-4 5 7-5", dark, 1.2),
    ],
    scale,
  );
}

const adsb = technicalPlate(
  ["Calculer à bord", "Diffuser un message", "Afficher une trace"],
  [
    "Des signaux de navigation arrivent",
    "L’avion émet sa position par radio",
    "Les points proviennent de messages",
  ],
  (s, id) => [
    airliner(id, 73, 109, 1.19),
    ...(s === 0
      ? [
          ...[
            [62, 63],
            [191, 55],
            [286, 70],
          ].map(([x, y]) =>
            moved(x!, y!, [
              surface(id, "M-6-5h12v10H-6Z", "steel"),
              surface(id, "M-20-4h13v8h-13Zm28 0h13v8H8Z", "glass"),
              stroke("M-17-3v6m4-6v6m24-6v6m4-6v6", "#658076", 0.8),
              oval(1, -1, 2.35, 2.35, "#d1b480", "#8b7654"),
            ]),
          ),
          stroke("M62 69l110 38m19-44-13 44m107-33-101 33", cold, 1.2, "4 4"),
          pin(178, 106, cold),
          link(260, 169, "Récepteur", "M252 157l-70-46", cold),
        ]
      : s === 1
        ? [
            antenna(id, 283, 144, 0.89),
            stroke(
              "M184 126q8 20 24 21m-5-27q12 20 29 24m-10-31q12 21 27 25m-7-31q11 15 23 23",
              cold,
              2.25,
            ),
            stream(186, 106, 237, 106),
            link(146, 77, "Message radio", "M149 82l35 25", cold),
          ]
        : [
            antenna(id, 66, 138, 0.92),
            surface(id, "M230 68l15-11h79l13 11v78l-8 9h-99Z", "iron"),
            block(239, 77, 85, 58, paint(id, "glass"), dark, 2),
            stroke("M245 125l11-12 14-5 20-16 26-8", cold, 1.65, "4 3"),
            ...[
              [253, 116],
              [276, 105],
              [294, 92],
            ].map(([x, y]) => pin(x!, y!, cold)),
            stroke("M245 140h69m-46 6h21", "#b1b8a0", 1.11),
            stream(95, 154, 158, 154),
            link(193, 62, "Trace", "M203 68l51 47", cold),
          ]),
  ],
);

function recorder(id: string, x: number, y: number, code: string, opened: boolean) {
  return moved(x, y, [
    grounding(id, 0, 35, 78),
    surface(id, "M-61-32l14-14h102l16 16v50L54 33H-55l-16-13v-43Z", "ember", 1.25),
    surface(id, "M-61-32h120v62H-61Z", "ember", 1.15),
    surface(id, "M59-32l12 2v50l-12 10Z", "iron"),
    stroke("M-57-29h111m-112 52h113", "#f0cf9c", 1.3),
    ...[
      [-52, -23],
      [-52, 21],
      [49, -23],
      [49, 21],
    ].flatMap(([a, b]) => fastener(a!, b!, 2.1)),
    ...(opened
      ? [
          surface(id, "M-43-13h79v29h-79Z", "soot", 1.05),
          ...[-36, -23, -10, 3, 16].map((u) => [
            surface(id, `M${u} -7h9v16h-9Z`, "copper", 0.7),
            stroke(`M${u + 4} -5v12`, "#dbc393", 0.75),
          ]),
        ]
      : [block(-36, -12, 70, 26, "#edcb90", "#896e54", 2), label(-1, 7, code, heat)]),
  ]);
}
const recorders = technicalPlate(
  ["Sons du poste de pilotage", "Paramètres de vol", "Relire les mémoires"],
  ["Le CVR conserve des sons", "Le FDR conserve des mesures", "Rapprocher des sources distinctes"],
  (s, id) => [
    recorder(id, s === 2 ? 98 : 246, 112, s === 0 ? "CVR" : "FDR", s === 2),
    ...(s === 0
      ? [
          block(34, 83, 115, 56, paint(id, "iron"), dark, 5),
          stroke(
            "M42 112h14l4-9 5 17 5-24 6 31 5-16 7 11 6-19 4 16 6-4 6 7 8-11 5 7h17",
            "#ead1a2",
            1.45,
          ),
          stream(153, 108, 178, 108, heat),
          label(95, 71, "Sons", heat),
        ]
      : s === 1
        ? [
            block(34, 82, 117, 57, paint(id, "glass"), dark, 5),
            stroke("M45 127V93m0 34h94m-90-11q29 7 44-13l18-1 23-8", cold, 1.4),
            stroke("M52 119l17-4 14 2 15-3 17 3 19-4", heat, 1.35),
            stream(151, 113, 179, 113, cold),
            label(93, 68, "Paramètres", cold),
          ]
        : [
            block(206, 66, 118, 90, paint(id, "iron"), dark, 6),
            block(215, 75, 100, 67, paint(id, "glass"), dark, 2),
            stroke("M224 97h16l4-7 5 14 7-11 6 3h45", heat, 1.5),
            stroke("M223 128q19-15 41-12t43-6", cold, 1.5),
            stroke("M235 80v55m24-55v55m24-55v55m24-55v55", "#8ea599", 0.7),
            stream(173, 112, 203, 112, heat),
            link(112, 60, "Mémoires", "M114 66l-15 35", gold),
          ]),
  ],
);

function amphibian(id: string, y: number) {
  return moved(20, y, [
    surface(id, "M26 2l26-11h147l56 8 22-4 14-36h17l-5 37 25 8-39 9-51 9-187 5-28-13Z", "cream"),
    surface(id, "M29 12h259l-45 19H60Z", "iron"),
    surface(id, "M108 0l44-37 52 5-57 32-32 10Z", "steel"),
    surface(id, "M65-11q9-8 24-9h27l-10 10Z", "glass"),
    surface(id, "M128-8h104v21H128Z", "glass", 0.9),
    stroke("M124 12h109m-86-18v19m24-18v18m32-18v19", "#5e7b6f", 0.96),
    stroke("M40 11q98 8 203 4", "#f6e1bf", 1.35),
    ...[122, 140, 159, 178, 197, 216, 231].map((x) => oval(x, -2, 2.75, 1.8, "#517266", "#638578")),
  ]);
}
const scooper = technicalPlate(
  ["L’amphibie touche l’eau", "Une écope s’ouvre sous la coque", "La charge reste en soute"],
  [
    "La coque glisse sur l’eau",
    "L’eau entre sous le mouvement",
    "La soute emmène l’eau recueillie",
  ],
  (s, id) => [
    surface(id, "M20 124q96-10 155 0t165 0v42H20Z", "glass", 1),
    stroke("M27 140q45-7 82 0t72 0 77 0 76-3m-285 17q44-4 76 0t68 0 84-3", "#d4e5cf", 1.42),
    amphibian(id, s === 2 ? 92 : 118),
    s === 0 && [stream(101, 164, 50, 164, cold), link(100, 65, "Coque", "M97 73l-29 63", gold)],
    s === 1 && [
      surface(id, "M179 145h36l-9 14h-25l-13-6Z", "copper"),
      stream(156, 159, 188, 153, cold),
      stream(204, 147, 204, 108, cold),
      link(269, 157, "Écope", "M242 154l-30-3", cold),
    ],
    s === 2 && [
      surface(id, "M151 92h98v16h-98Z", "glass", 1),
      stroke("M154 96q17 4 35 0t28 0 30 0", "#e5efe0", 1.08),
      link(223, 58, "Soute", "M223 63l-15 30", cold),
    ],
  ],
);

export const airframePlates = { adsb, recorders, scooper };
