import { block, fillPath, label, moved, oval, stroke } from "../../detail100/plate";
import { pin } from "../material";
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
} from "./plate";

function fieldAircraft(id: string, x: number, y: number, angle: number, scale = 1) {
  return moved(
    x,
    y,
    [
      <g key="airframe" transform={`rotate(${angle})`}>
        {surface(
          id,
          "M-39-3h26L-28-25h10L4-4l22 1q14 1 17 4-5 5-18 5H4l-22 20h-10L-12 6h-26l-9-5Z",
          "cream",
          1.3,
        )}
        {surface(id, "M-36 0l32 0m14 2 24-1-12 4H12Z", "glass", 0.82)}
        {oval(12, -5, 9, 3, paint(id, "iron"), dark)}
        {oval(12, 9, 9, 3, paint(id, "iron"), dark)}
        {stroke("M-31 4h35", "#9f946d", 0.75)}
      </g>,
    ],
    scale,
  );
}

const terrain = "M18 127 96 81l245 43v45L272 185 19 165Z";
function airfield(id: string) {
  return [
    surface(id, terrain, "glass", 1.15),
    fillPath("M22 131 149 88l188 34-32 19-111-21-99 36Z", "#a7af8d", "#7c907e", 0.85),
    stroke(
      "M44 145q50-28 116-20t147 32m-188-49q76-15 158 20M29 163q36-20 61-19m124 14q40-18 89-11",
      "#d4d7b6",
      1.65,
    ),
    surface(id, "M54 144 202 103l60 13-145 43Z", "soot", 0.85),
    stroke("M73 144l145-38m-27 4 41 9m-139 31 135-39", "#d7ddba", 1.2, "5 5"),
    ...[0, 1, 2, 3].map((i) => stroke(`M${70 + i * 5} ${142 + i}l17-4`, "#efe6cb", 0.87)),
  ];
}

const aircontrol = technicalPlate(
  ["Autour de l’aérodrome", "Trafic en approche", "Suivi en croisière"],
  [
    "La tour suit les mouvements sur la piste",
    "L’approche organise les trajectoires",
    "Les secteurs se transmettent le suivi",
  ],
  (s, id) => [
    airfield(id),
    ...(s === 0
      ? [
          surface(id, "M103 144l5-46h17l6 46-8 9h-11Z", "steel", 1.1),
          surface(id, "M100 88l12-9h13l9 9-5 14h-24Z", "iron", 1),
          stroke("M103 89h27m-21 1 2 9m8-9 1 9m7-8-1 8", "#c7daca", 1),
          link(93, 65, "Tour", "M96 70l15 13", cold),
          fieldAircraft(id, 180, 123, -15, 0.69),
          link(277, 85, "Piste", "M279 91l-65 25", gold),
        ]
      : s === 1
        ? [
            fillPath(
              "M68 113l26-56 83-10 110 20 52 41-43-3-54-21-77-9-33 33Z",
              "#bccdba",
              "#6d9184",
              1.1,
            ),
            stroke("M317 67q-20 19-56 18t-44 24Q199 123 143 139", cold, 2.25, "5 4"),
            stroke("M101 66q35 9 52 16t43 11", cold, 1.8, "5 4"),
            fieldAircraft(id, 273, 83, 168, 0.62),
            fieldAircraft(id, 119, 67, 13, 0.44),
            link(208, 68, "Approche", "M211 72l-15 11", cold),
          ]
        : [
            surface(id, "M50 75l64-19 64 15-63 24Z", "glass", 1.1),
            fillPath("M50 75l65 20 63-24v38l-63 26-65-20Z", "#a1baae", "#718983", 1),
            surface(id, "M115 95l63-24 65 15-61 24Z", "glass", 1.05),
            fillPath("M115 95l67 15 61-24v42l-61 26-67-19Z", "#c0c6a9", "#778877", 1),
            surface(id, "M182 110l61-24 66 16-61 23Z", "cream", 1.05),
            fillPath("M182 110l66 15 61-23v42l-61 26-66-16Z", "#d8c49d", "#898a68", 1),
            stroke("M61 102q75-14 122 22t110 12", cold, 2.15, "4 4"),
            pin(181, 124, cold),
            fieldAircraft(id, 236, 136, 9, 0.57),
            link(233, 66, "Transfert", "M228 71l-44 48", cold),
          ]),
  ],
);

function paper(id: string, x: number, y: number, scale: number) {
  return moved(
    x,
    y,
    [
      surface(id, "M-46-50h76l16 16v83h-92Z", "cream", 1.15),
      fillPath("M30-50v16h16Z", "#f6e8c2", gold, 0.85),
      ...[-20, -9, 2, 13, 24, 35].map((y, i) =>
        stroke(`M-36 ${y}h${64 - (i % 3) * 13}`, i === 0 ? dark : "#979376", i === 0 ? 2.1 : 1.35),
      ),
    ],
    scale,
  );
}

const certification = technicalPlate(
  ["Définir les exigences", "Démontrer la conformité", "Examiner la démonstration"],
  [
    "Le programme prévoit les essais",
    "L’aile en flexion illustre un essai au sol",
    "L’autorité examine les preuves",
  ],
  (s, id) =>
    s === 0
      ? [
          paper(id, 94, 105, 1.16),
          paper(id, 138, 117, 0.85),
          surface(id, "M188 68h134v80H188Z", "glass", 1.15),
          stroke("M197 128l45-17 69-22m-112-5h112m-95 54v-23m82-7v30", "#ebebd1", 1, "5 3"),
          fieldAircraft(id, 252, 116, -16, 1.06),
          link(115, 170, "Exigences", "M114 156l-23-33", gold),
          label(252, 169, "Plan d’essais", cold),
        ]
      : s === 1
        ? [
            surface(id, "M88 163h184v14H88Z", "iron", 1.2),
            surface(id, "M139 119h81v45h-81Z", "steel"),
            stroke("M145 145h71m-71 10h71", "#c4c9ad", 1.45),
            surface(
              id,
              "M29 103q44 20 125 15h53q75 3 126-17l-15 24q-54 15-121 13h-48q-64 4-107-15Z",
              "cream",
              1.55,
            ),
            stroke("M52 117q51 13 112 8h33q75 5 113-11", "#9b8763", 1.3),
            ...[59, 104, 255, 300].flatMap((x, i) =>
              stream(x, 165 - (i % 2) * 4, x, 134 - (i % 2) * 2, cold),
            ),
            link(176, 65, "Aile d’essai", "M178 72l40 45", gold),
            label(180, 100, "Flexion", cold),
          ]
        : [
            paper(id, 86, 111, 1),
            paper(id, 128, 104, 1),
            surface(id, "M171 62h145v95H171Z", "glass", 1.2),
            block(184, 75, 118, 63, paint(id, "cream"), dark, 2),
            ...[86, 101, 116].map((y) => [
              stroke(`M195 ${y}l5 4 8-8`, forest, 2.5),
              stroke(`M216 ${y}h73`, "#827f61", 1.5),
            ]),
            oval(245, 148, 5, 4, paint(id, "iron"), dark),
            label(97, 174, "Dossier", gold),
            label(247, 175, "Conformité", forest),
          ],
);

const investigation = technicalPlate(
  ["Recueillir les indices", "Reconstituer la séquence", "Proposer des mesures"],
  [
    "Plusieurs sources éclairent l’événement",
    "La chronologie rapproche les indices",
    "Des mesures pour prévenir un risque",
  ],
  (s, id) =>
    s === 0
      ? [
          surface(id, "M28 103l13-16h76l10 14v41l-15 8H40l-12-10Z", "ember", 1.35),
          surface(id, "M38 104h77v28H38Z", "copper", 0.9),
          stroke("M44 116h10l4-6 7 11 8-7 6 3h26", "#f7dfb0", 1.55),
          ...fastener(37, 95),
          ...fastener(116, 142),
          surface(id, "M149 143l16-51 26-18 20 20-9 50Z", "steel", 1.4),
          stroke("M153 132l48-15m-38 19 16-54m18 44 8-29", "#e0d4b8", 1.6),
          ...[157, 166, 175, 184, 193].flatMap((x, i) => fastener(x, 138 - i * 1.1, 1.9)),
          paper(id, 277, 111, 0.76),
          stroke("M257 108q9 12 15 0t12-3 13-3", "#a58752", 1.6),
          label(74, 169, "Données", heat),
          label(178, 169, "Pièce", cold),
          label(275, 169, "Témoignage", gold),
        ]
      : s === 1
        ? [
            surface(id, "M28 69h305v98H28Z", "glass", 1.05),
            block(34, 75, 293, 85, "#e8e5cb", "#89977e", 2),
            stroke("M44 123h265m-265 14h265", "#9cad94", 0.95, "4 4"),
            stroke("M42 126h34l14-10 18 2 16-19 12 12 46-4 23 14 29-20 16 6h60", cold, 2.2),
            ...[
              [92, 116],
              [173, 108],
              [247, 105],
            ].map(([x, y]) => [pin(x!, y!, heat), stroke(`M${x} ${y! + 3}v37`, heat, 0.8, "4 3")]),
            label(181, 156, "Temps", dark),
          ]
        : [
            paper(id, 156, 111, 1.27),
            stroke("M115 83h59m-55 15h62m-67 13h84m-80 21h72", cold, 1.5),
            surface(id, "M233 91l47-18 36 18v38q-8 24-37 34-39-9-46-34Z", "glass", 1.45),
            surface(id, "M242 97l38-14 28 14v27q-9 21-29 30-29-12-37-29Z", "cream", 1.05),
            stroke("M253 117l18 13 27-27", forest, 3.8),
            link(68, 79, "Mesure", "M77 85l36 26", gold),
          ],
);

export const operationsPlates = { aircontrol, certification, investigation };
