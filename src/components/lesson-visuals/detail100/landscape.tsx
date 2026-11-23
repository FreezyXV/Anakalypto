import {
  active,
  arrow,
  block,
  call,
  filled,
  flow,
  focus,
  harm,
  ink,
  label,
  layers,
  lineGrey,
  living,
  moved,
  oval,
  prism,
  round,
  shadow,
  stroke,
} from "./plate";

function tree(id: string, x: number, y: number, scale = 1, conifer = false) {
  return moved(
    x,
    y,
    [
      shadow(id, 0, 2, 18, 5),
      stroke("M0 0v-24m0 14-8-10m8 10 8-11", ink, 1.9),
      filled(
        id,
        conifer
          ? "M-15-10L-7-25h-4L0-46l12 22H8l8 14Z"
          : "M-15-17q-7-12 5-18 2-11 13-9 10 0 12 11 11 7 3 18-13 11-27-1Z",
        "plant",
        "dots",
      ),
      stroke(conifer ? "M0-40v24m0-14-6 10m6-10 6 10" : "M0-39v25m0-5-8-10m8 8 8-7", living, 0.9),
    ],
    scale,
  );
}
function roofHouse(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      prism(id, -22, -31, 39, 26, 13, "ivory"),
      filled(id, "M-28-30l25-23 23 23Zm25-23 15-8 25 24-17 7Z", "clay", "engraving"),
      block(-13, -25, 9, 10, "#98acac", ink, 0),
      block(3, -23, 10, 18, "#9d876a", ink, 0),
      stroke("M-12-20h7m-3-4v8M-20-10h19", lineGrey, 1),
    ],
    scale,
  );
}
function turf(
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
  n: number,
  tone: "plant" | "earth" | "brass" = "earth",
) {
  return moved(x, y, [
    filled(id, `M0 0h${w}l-${n} ${h}H-${n}Z`, tone, "dots"),
    filled(id, `M-${n} ${h}h${w}v13H-${n}Z`, "earth", "engraving"),
    ...Array.from({ length: 6 }, (_, i) =>
      stroke(
        `M${(w * (i + 1)) / 7} 5l-${n - 6} ${h - 11}`,
        tone === "plant" ? living : active,
        1.2,
      ),
    ),
  ]);
}
function shoot(id: string, x: number, y: number, scale = 1, root = false) {
  return moved(
    x,
    y,
    [
      root && stroke("M0 0q1 14 8 32M0 5l-8 15m11-10 13 12m-13-4-7 11", active, 1.3),
      stroke("M0 0v-28", living, 2.4),
      filled(id, "M0-13q-19-2-22-15 17-6 22 15ZM0-23q4-22 20-20 1 11-20 20Z", "plant"),
      stroke("M-17-27l14 11m6-11 10-10", living, 1),
    ],
    scale,
  );
}
function bovine(id: string, x: number, y: number, scale = 1) {
  return moved(
    x,
    y,
    [
      shadow(id, 64, 78, 78, 11),
      filled(
        id,
        "M4 35q-8-25 16-29l64 1 16 16 15-14 17 10-5 25-16 7-14-13-6 31h-9l-5-28-42 5-7 31H18l3-40Z",
        "ivory",
        "engraving",
      ),
      filled(id, "M26 7q9 22-12 34l22 4 22-13-10-25ZM77 10q-19 18-3 32l18 13 7-30Z", "graphite"),
      stroke("M5 22q-9-5-11 24m122-29 12-10m-9 17 9 2m-5 11 3 4", ink, 2.2),
      round(id, 119, 23, 1.7, "brass"),
    ],
    scale,
  );
}
const slope = "M25 168l104-17 69 14 73-36 64 21v70H25Z";

export const landscapePlates = {
  detailOrganicParcel: (s: number, id: string) =>
    layers([
      turf(id, 53, 92, 266, 114, 28, s === 1 ? "plant" : "earth"),
      [...Array(10)].map((_, i) =>
        shoot(id, 59 + (i % 5) * 52, 122 + Math.floor(i / 5) * 65, 0.57),
      ),
      ...[63, 220, 266, 307].map((x, i) => tree(id, x, 95, 0.65 + i * 0.04)),
      s === 0 && call(174, 77, "Cultures en bandes", "M180 83l-12 35"),
      s === 1 && [
        stroke("M114 130q62 20 103-8", living, 2, "4 3"),
        label(173, 249, "Rotation des cultures"),
      ],
      s === 2 && [focus(269, 89, 29), call(152, 74, "Habitat en bordure", "M212 80l32 7")],
    ]),
  detailLivingCover: (s: number, id: string) =>
    layers([
      filled(id, "M30 147q59-14 123-4 86 9 177-4v84H30Z", "earth", "dots"),
      filled(id, "M30 193q96-12 176-3l124-9v42H30Z", "clay", "engraving"),
      ...[62, 118, 180, 239, 296].map((x, i) =>
        shoot(id, x, 145 + (i % 2) * 2, s === 0 ? 0.55 : 0.82, s > 0),
      ),
      s === 0 && call(161, 82, "Couvert végétal", "M167 89l-8 33"),
      s === 1 && call(250, 220, "Racines", "M244 206l-62-35"),
      s === 2 && [
        arrow(81, 88, 83, 133, flow),
        arrow(199, 181, 203, 202, flow, true),
        label(180, 249, "Infiltration possible"),
      ],
    ]),
  detailAnimalHousing: (s: number, id: string) =>
    layers([
      filled(id, "M35 192l64-65h217l-44 76H35Z", "earth", "engraving"),
      filled(id, "M132 131V93l61-39 99 40v60l-49 14V95l-51-25-49 33v35Z", "ivory"),
      stroke("M133 100l62-40 100 40m-41 4 30 10m-30 6 30 10", ink, 2.5),
      bovine(id, 65, 112, 0.95),
      s === 2 && bovine(id, 187, 124, 0.78),
      s === 0 && [
        prism(id, 248, 169, 32, 12, 8, "glass"),
        call(272, 224, "Abreuvement", "M273 208l-4-27", flow),
      ],
      s === 1 && [
        filled(id, "M183 157h102l-18 33H166Z", "brass", "dots"),
        label(243, 223, "Aire de repos"),
      ],
      s === 2 && [focus(192, 139, 23), label(179, 246, "Comportement social")],
    ]),
  detailForestMosaic: (s: number, id: string) =>
    layers([
      filled(id, slope, "earth", "engraving"),
      ...[58, 83, 111, 135, 162, 183, 208, 233, 260, 285, 311]
        .slice(0, s === 2 ? 6 : 11)
        .map((x, i) =>
          tree(
            id,
            x,
            177 - (i >= 7 ? 18 : 0) + (i % 2) * 13,
            s === 1 && i < 6 ? 0.55 : 1 + (i % 3) * 0.1,
            i % 3 === 0,
          ),
        ),
      s === 0 && [
        filled(id, "M33 176q129 33 303-16v60H33Z", "plant", "dots"),
        label(188, 244, "Bois et sols"),
      ],
      s === 1 && [
        arrow(135, 66, 136, 127, living),
        call(231, 79, "Absorption", "M211 83l-68 38", living),
      ],
      s === 2 && [
        filled(id, "M185 193l66-18 74 9v35H169Z", "brass", "dots"),
        stroke("M176 188l19-38", harm, 2, "4 4"),
        label(243, 246, "Perte du couvert"),
      ],
    ]),
  detailClimateHabitats: (s: number, id: string) =>
    layers([
      filled(id, "M24 205l52-58 30 11 65-78 49 55 42-38 70 100v23H24Z", "plant", "dots"),
      filled(id, "M136 125l35-45 33 39-21-9-14 14-13-10Z", "ivory"),
      ...[65, 94, 121, 212, 267, 293].map((x, i) =>
        tree(id, x, 190 - (i % 3) * 12, 0.69, i % 2 === 0),
      ),
      s > 0 && [stroke("M48 173q115-65 246-42", harm, 2, "5 4"), arrow(103, 173, 149, 123, harm)],
      s === 2 && [
        filled(id, "M173 177l20-10 99 47H163Z", "clay", "engraving"),
        arrow(241, 183, 272, 153, flow, true),
      ],
      label(178, 247, ["Habitats étagés", "Déplacement possible", "Corridors et obstacles"][s]!),
    ]),
  detailVillageServices: (s: number, id: string) =>
    layers([
      turf(id, 69, 106, 237, 101, 41, "plant"),
      roofHouse(id, 123, 161),
      roofHouse(id, 203, 131, 0.91),
      roofHouse(id, 252, 159, 0.8),
      tree(id, 270, 115, 0.8, true),
      tree(id, 73, 137, 0.7),
      s === 0 && [
        filled(id, "M123 177q39-28 68-3 10 17-22 23-25 5-46-20Z", "glass", "dots"),
        stroke("M155 175l-21-25m42 21 41-24", flow, 2.4),
        label(167, 247, "Ressource et stockage"),
      ],
      s === 1 && [turf(id, 215, 173, 85, 25, 11, "earth"), label(177, 247, "Terres cultivées")],
      s === 2 && [
        prism(id, 56, 177, 44, 12, 18, "glass"),
        stroke("M80 177l35-22m-14-17 76-16", active, 2.4),
        label(178, 247, "Énergie et réseau"),
      ],
      s === 3 && [cableLoop(), label(180, 247, "Flux à traiter")],
    ]),
  detailSeasonalBeds: (s: number, id: string) =>
    layers([
      turf(id, 58, 150, 257, 62, 20, s === 2 ? "plant" : "earth"),
      round(id, 178, [112, 87, 72, 105][s]!, 13, "brass"),
      stroke("M46 135Q173 35 314 135", lineGrey, 1.2, "5 5"),
      ...[69, 122, 175, 226, 276].map((x, i) =>
        s === 0
          ? stroke(`M${x} 176l15 3m-7-10-1 16`, flow, 1)
          : shoot(id, x, 181 + (i % 2) * 15, [0.25, 0.55, 1, 0.75][s]!),
      ),
      label(
        179,
        250,
        ["Risque de gel", "Sol en réchauffement", "Croissance", "Conditions locales"][s]!,
      ),
    ]),
  detailFutureClouds: (s: number, id: string) =>
    layers([
      filled(id, "M22 215l71-58 45 4 53-37 51 24 96 66v13H22Z", "plant", "engraving"),
      s === 0 && [
        stroke("M44 114q24-9 61-19t55-20m-54 21q73 2 120-22m-74 26q47 7 111-8", flow, 2.4),
        label(179, 249, "Nuages hauts"),
      ],
      s === 1 && [
        filled(
          id,
          "M43 136q-10-17 16-25 0-22 30-22 10-20 38-15 15-26 49-20 32 6 29 28 40-3 49 18 42 1 48 36Z",
          "steel",
          "dots",
        ),
        label(180, 248, "Développement vertical"),
      ],
      s === 2 && [
        stroke("M42 171q113-3 201 3m-194 14h254m-268 13h247", flow, 2),
        label(180, 249, "Brouillard local"),
      ],
    ]),
  detailFarmBalances: (s: number, id: string) =>
    layers([
      turf(id, 72, 88, 249, 117, 43, s === 2 ? "plant" : "earth"),
      ...[67, 112, 161, 211, 256].map((x, i) =>
        shoot(id, x, 167 + (i % 2) * 19, s === 2 ? 0.75 : 0.54, s === 0),
      ),
      tree(id, 77, 105, 1.0),
      tree(id, 111, 97, 0.75),
      s === 0 && call(184, 75, "Sol couvert", "M184 81l-45 60"),
      s === 1 && [
        stroke("M83 125q88 25 184 3", flow, 2, "6 4"),
        arrow(210, 133, 254, 128, flow),
        label(180, 249, "Gérer l’eau"),
      ],
      s === 2 && [
        stroke("M50 161h262", living, 3, "4 3"),
        label(180, 249, "Habitat et production"),
      ],
    ]),
  detailAnimalTraction: (s: number, id: string) =>
    layers([
      turf(id, 52, 157, 273, 61, 23, s === 2 ? "plant" : "earth"),
      bovine(id, 160, 103, 1),
      s === 0 && [
        stroke("M152 134l-59 32-35-9", ink, 3),
        filled(id, "M55 151l43 5-17 17H56Z", "graphite", "engraving"),
        call(99, 84, "Traction", "M106 92l17 53"),
      ],
      s === 1 && [
        filled(id, "M58 185l32-26 28 22 16 21H49Z", "earth", "dots"),
        arrow(162, 185, 126, 185, living),
        label(101, 245, "Matière organique"),
      ],
      s === 2 && [cylinderMilk(id), label(117, 245, "Produits de l’élevage")],
    ]),
};

const cableLoop = () => [
  arrow(101, 184, 147, 189, living),
  arrow(234, 182, 193, 192, living),
  oval(168, 192, 12, 6, "#afb58d", living),
];
const cylinderMilk = (id: string) => [
  filled(id, "M57 161l12-11h29l8 12-4 47H60Z", "ivory", "engraving"),
  oval(82, 149, 14, 5, "#dbd3bc", ink),
  stroke("M65 167h36m-32 31h28", lineGrey, 1.1),
];
