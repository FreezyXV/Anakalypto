import {
  active,
  arrow,
  call,
  cylinder,
  filled,
  flow,
  focus,
  harm,
  ink,
  label,
  moved,
  oval,
  prism,
  round,
  stroke,
} from "../detail100/plate";
import { bench, plate } from "./craft";

function plant(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      prism(id, 0, 32, 118, 58, 18, "steel"),
      filled(id, "M0 39l37-31v20l35-22v23l24-14 40 14-18 17H0Z", "graphite", "engraving"),
      filled(id, "M94 17l3-58h12l4 60Z", "steel", "engraving"),
      stroke("M12 59h97m-97 11h98m-67-19v27m21-26v26m23-26v26", "#d9ddd4", 1.33),
    ],
    scale,
  );
}

function ore(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      filled(id, "M-36 17l8-40 23-19 35 15 13 40-30 20-37-4Z", "earth", "engraving"),
      filled(id, "M-19 7-5-20l24 7 11 22-26 13Z", "brass", "dots"),
      stroke("M-12 21l8-16 20-8", active, 1.35),
    ],
    scale,
  );
}

const land =
  "M33 95l30-19 44 5 27 16-23 15-26 28-45-14Zm48 54 34-8 26 23-24 47-20-6-15-28Zm65-49 32-19 39 5 29-8 63 13 24 26-38 4-23 21-40-3-31 13-27-23-23 1Zm24 41 45-7 12 20-26 38-25-3-14-35Zm94 42 21-17 37 10 5 18-21 15-39-5Z";

export const infrastructurePlates = {
  editionWildfireLandscape: plate(
    ["Relief et végétation", "Vent et propagation possible", "Priorités d’intervention"],
    (s, id) => [
      filled(id, "M29 189l71-51 49 9 57-63 63 49 64 54v31H29Z", "plant", "engraving"),
      ...[62, 92, 147, 250, 284].map((x, i) =>
        filled(id, `M${x} ${190 - (i % 2) * 17}l12-38 15 34Z`, "plant", "dots"),
      ),
      stroke("M39 201q40-23 75-20m-54 25q69-20 142-39m-20 43q59-25 135-3", "#6a8067", 1.25),
      ...[46, 77, 120, 205, 235, 271, 309].map((x, i) =>
        stroke(`M${x} ${182 + (i % 3) * 8}v18m-8-4 8-6 8 6m-7-8 7-7 7 7`, "#556e5b", 1.3),
      ),
      filled(id, "M150 177q-18-27-5-35 4 14 12 14-4-21 11-27 4 22 17 45Z", "clay", "engraving"),
      s === 0 && call(103, 95, "Combustible", "M107 101l29 56"),
      s === 1 && [arrow(170, 113, 225, 101, harm, true), label(266, 93, "Vent")],
      s === 2 && [
        stroke("M211 176l49 6 57 19", flow, 2.1, "6 4"),
        ...[242, 265, 284].map((x, i) => prism(id, x, 185 + i * 4, 11, 12, 4, "ivory")),
        call(260, 100, "Habitations", "M258 106l20 68", flow),
      ],
    ],
  ),
  editionPlumeExposure: plate(
    ["Une source d’émission", "Transport et transformation", "Exposition de la population"],
    (s, id) => [
      plant(id, 49, 133, 0.77),
      ...[216, 259, 283].map((x, i) => prism(id, x, 183 - (i % 2) * 16, 24, 30, 9, "ivory")),
      filled(id, "M129 109q36-29 181 30l-11 38q-101-51-176-54Z", "glass", "dots"),
      s === 0 && call(106, 79, "Émission", "M108 86l16 22"),
      s === 1 && [arrow(153, 101, 252, 117, flow), call(284, 82, "Transport", "M275 88l-34 34")],
      s === 2 && [focus(260, 177, 49, harm), label(167, 82, "Air respiré")],
    ],
  ),
  editionStrategicMinerals: plate(
    ["Ressource dans le sous-sol", "Transformer", "Dépendances à plusieurs étapes"],
    (s, id) => [
      ore(id, 79, 148, 1.08),
      plant(id, 197, 135, 0.76),
      s === 0 && call(87, 86, "Ressource", "M90 93l-11 21"),
      s === 1 && [arrow(122, 146, 193, 146, flow), label(248, 72, "Transformation")],
      s === 2 && [
        prism(id, 156, 160, 40, 28, 12, "brass"),
        arrow(121, 155, 152, 163, active),
        stroke("M181 152l62-41", active, 1.5, "5 4"),
        label(168, 80, "Chaîne de valeur"),
      ],
    ],
  ),
  editionAlkaliCompare: plate(
    ["Même ion carbonate", "Ions associés différents", "Usages distincts"],
    (s, id) => [
      cylinder(id, 68, 85, 79, 105, "glass"),
      cylinder(id, 214, 85, 79, 105, "glass"),
      ...[107, 253].map((x, i) => [
        ...[x - 17, x + 17].map((cx) => [
          round(id, cx, 123, 15, s === 1 ? "steel" : "brass"),
          label(cx, 128, i === 0 ? "Na⁺" : "K⁺"),
        ]),
        round(id, x, 167, 18, s === 1 ? "brass" : "steel"),
        label(x, 173, "CO₃²⁻"),
      ]),
      s === 0 && [label(106, 221, "Na₂CO₃"), label(254, 221, "K₂CO₃")],
      s === 1 && stroke("M129 123h103", active, 2, "5 4"),
      s === 2 && [
        call(179, 71, "Deux carbonates", "M174 80l-36 13M183 80l36 13"),
        label(105, 219, "Sodium"),
        label(254, 219, "Potassium"),
      ],
    ],
  ),
  editionProductionRobot: plate(
    ["Une tâche à répétition", "Positionner les pièces", "Une organisation à adapter"],
    (s, id) => [
      bench(id, 47, 194, 249),
      prism(id, 61, 169, 63, 22, 10, "graphite"),
      stroke(s === 1 ? "M102 171l34-63 60 14 35 11" : "M102 171l31-64 61-19 31 30", ink, 15),
      stroke(s === 1 ? "M102 171l34-63 60 14 35 11" : "M102 171l31-64 61-19 31 30", "#ba925a", 10),
      round(id, 102, 171, 10, "steel"),
      round(id, s === 1 ? 136 : 133, s === 1 ? 108 : 107, 8, "steel"),
      round(id, s === 1 ? 196 : 194, s === 1 ? 122 : 88, 9, "steel"),
      ...[174, 218, 263].map((x, i) => prism(id, x, 173, 26, 16, 8, s === i ? "brass" : "steel")),
      s === 0 && call(251, 77, "Outil", "M246 83l-21 35"),
      s === 1 && arrow(233, 139, 233, 165, active),
      s === 2 && label(269, 81, "Inspection"),
    ],
  ),
  editionCellFactory: plate(
    ["Préparer les électrodes", "Former les cellules", "Mesurer le rendement"],
    (s, id) => [
      bench(id, 45, 193, 259),
      s === 0 && [
        filled(id, "M113 126h139l-48 61H85Z", "brass", "engraving"),
        filled(id, "M85 180h112l-6 10H80Z", "steel", "engraving"),
        cylinder(id, 89, 107, 39, 49, "steel"),
        cylinder(id, 235, 109, 39, 49, "steel"),
        stroke("M124 138l96 1m-107 15 96-1m-106 15h97", active, 1.4),
        call(183, 74, "Bande d’électrode", "M185 81l-25 43"),
      ],
      s === 1 && [
        ...[139, 150, 161, 172, 183].map((y, i) =>
          prism(id, 62, y, 101, 6, 12, i % 2 ? "ivory" : "brass"),
        ),
        arrow(180, 161, 231, 161, flow),
        cylinder(id, 242, 111, 32, 75, "steel"),
        oval(258, 111, 9.5, 3.8, "#d2ac70", ink),
        label(115, 93, "Couches"),
        call(261, 78, "Cellule", "M262 84l-4 18"),
      ],
      s === 2 && [
        ...[64, 106, 148].map((x, i) => cylinder(id, x, 121, 26, 63, i === 1 ? "brass" : "steel")),
        prism(id, 219, 108, 65, 77, 12, "graphite"),
        filled(id, "M228 122h47v28h-47Z", "glass", "dots"),
        stroke("M233 139l8-5 5 5 6-7 13 3", flow, 1.8),
        stroke("M120 124q8-56 100-1", harm, 2.3),
        stroke("M120 143q29 1 98 27", flow, 2.1),
        call(238, 76, "Banc de test", "M244 83l6 19"),
      ],
    ],
  ),
  editionChipSupplyMap: plate(["Conception", "Fabrication", "Assemblage et tests"], (s, id) => [
    filled(id, land, "plant", "dots"),
    ...[
      [73, 105],
      [281, 120],
      [246, 142],
    ].map(([x, y], i) => [
      round(id, x!, y!, i === s ? 11 : 6, i === s ? "brass" : "steel"),
      i === s && focus(x!, y!, 17),
    ]),
    s === 0 && stroke("M95 111q57-53 169 4", flow, 1.7, "5 4"),
    s === 1 && [
      call(262, 68, "Fonderie", "M264 75l15 33"),
      stroke("M258 117q-51-31-97-23", flow, 1.7),
    ],
    s === 2 && [arrow(281, 133, 259, 142, active), label(181, 232, "Réseau international")],
  ]),
  editionFailureBarriers: plate(
    ["Plusieurs barrières en série", "Des lacunes se combinent", "Séparer les protections"],
    (s, id) => [
      ...[57, 144, 230].map((x, i) => [
        prism(id, x, 91, 55, 117, 15, i === s ? "brass" : "ivory"),
        oval(x + 26, s === 1 ? 149 : [127, 178, 132][i]!, 10, 14, "#7e877d", ink),
      ]),
      s === 0 && [arrow(32, 126, 56, 126, flow), stroke("M92 127h54", harm, 1.6, "4 4")],
      s === 1 && arrow(35, 149, 315, 149, harm, true),
      s === 2 && [stroke("M178 168h84", flow, 2.1, "6 4"), label(176, 82, "Lacunes séparées")],
    ],
  ),
  editionWellAquifer: plate(
    ["Zone perméable", "Capter l’eau en profondeur", "Protection et surveillance"],
    (s, id) => [
      filled(id, "M35 102q71-20 142-4t147-1v128H35Z", "earth", "dots"),
      filled(id, "M35 156q85-14 164 0t125-1v41H35Z", "glass", "engraving"),
      filled(id, "M35 198q92-9 187 3l102-5v29H35Z", "clay", "dots"),
      ...Array.from({ length: 36 }, (_, i) => {
        const x = 45 + (i % 12) * 24,
          y = 167 + Math.floor(i / 12) * 10 + ((i * 3) % 5);
        return oval(x, y, 4.7 + (i % 3), 2.4 + (i % 2) * 0.7, "#a4a99a", "#496360");
      }),
      stroke("M41 118q83-19 142-1t136-4m-278 17q83-16 151 0t127-1", "#997e5e", 1.3),
      ...[46, 69, 92, 115, 138, 161, 184, 207, 230, 253, 276, 299].map((x, i) =>
        stroke(`M${x} 215l14 ${i % 2 ? -8 : -4}`, "#8f6554", 1.3),
      ),
      s === 1 && [arrow(106, 180, 161, 180, flow), arrow(246, 180, 190, 180, flow)],
      s > 0 && [
        filled(id, "M168 86h17v107h-17Z", "steel", "engraving"),
        stroke("M170 178h14m-14 6h14m-14 6h14", flow, 1.05),
        arrow(176, 164, 176, 112, flow),
      ],
      s === 0 && call(237, 81, "Pores saturés", "M233 88l-11 77"),
      s === 1 && call(88, 77, "Captage", "M89 83l68 34"),
      s === 2 && [
        filled(id, "M150 96q28-16 54 0v15h-54Z", "ivory"),
        call(245, 78, "Protection", "M236 84l-35 17"),
      ],
    ],
  ),
  editionNanoScale: plate(
    ["Comparer des échelles", "Voir une couche mince", "Les propriétés dépendent du matériau"],
    (s, id) => [
      prism(id, 53, 154, 237, 42, 19, "steel"),
      filled(id, "M53 154l19-12h237l-19 12Z", s === 0 ? "ivory" : "brass", "engraving"),
      s === 0 && [
        stroke("M65 124h209m-209-8v16m209-16v16", flow, 1.4),
        label(160, 105, "Échelle agrandie"),
      ],
      s === 1 && [
        call(196, 89, "Couche", "M194 96l-5 45"),
        stroke("M305 142v13m-5-13h12m-12 13h12", flow, 1.3),
      ],
      s === 2 && [
        round(id, 184, 88, 16, "glass"),
        round(id, 220, 88, 10, "brass"),
        round(id, 251, 90, 8, "steel"),
        label(110, 91, "Surface"),
      ],
    ],
  ),
};
