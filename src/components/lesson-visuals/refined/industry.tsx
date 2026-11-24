import {
  active,
  arrow,
  block,
  call,
  fillPath,
  filled,
  flow,
  ink,
  layers,
  living,
  moved,
  oval,
  shadow,
  stroke,
} from "../detail100/plate";
import { plate } from "../edition100/craft";
import { clip, gradient, pin, position } from "./material";

const wall = "M53 119Q179 145 305 116L305 208Q179 243 53 211Z";
const opening = "M100 121Q171 136 251 122L251 221Q172 234 100 219Z";
const grain = "M102 164Q138 160 153 149Q171 138 187 150Q208 160 250 161L250 197Q173 214 102 197Z";
const sand =
  "M24 128C81 132 108 122 163 127S214 139 288 125V177Q227 167 186 172T103 168Q70 165 24 177Z";
const wetGravel =
  "M24 177Q70 165 103 168T186 172Q227 167 288 177V213Q231 223 181 217T97 221L24 213Z";
const clay = "M24 213Q77 220 107 220T181 217Q234 224 288 213V235H24Z";

const grainSilo = plate(
  ["Le stock vu en coupe", "L’air monte depuis le plancher", "Une sonde dans le stock"],
  (s, id) => [
    <defs key="silo-materials">
      {gradient(id + "-zinc", [
        [0, "#635e52"],
        [0.16, "#bdbea9"],
        [0.32, "#e5e3d1"],
        [0.53, "#878a7f"],
        [0.8, "#bdbbaa"],
        [1, "#606669"],
      ])}
      {gradient(
        id + "-silo-interior",
        [
          [0, "#464044"],
          [0.47, "#947f63"],
          [1, "#343a38"],
        ],
        true,
      )}
      {gradient(
        id + "-wheat",
        [
          [0, "#edc66d"],
          [0.42, "#c09144"],
          [1, "#735430"],
        ],
        true,
      )}
    </defs>,
    shadow(id, 179, 231, 153, 10),
    fillPath("M52 203Q179 227 304 200L309 216Q181 247 48 219Z", "#a99c81", ink, 1),
    fillPath(wall, `url(#${id}-zinc)`, ink, 1.15),
    clip(
      id + "-wavy-zinc",
      wall,
      layers(
        Array.from({ length: 22 }, (_, i) => [
          stroke(
            `M50 ${119 + i * 4.65}Q179 ${145 + i * 4.65} 309 ${116 + i * 4.65}`,
            i % 3 === 0 ? "#f5eed6" : "#59605a",
            i % 3 === 0 ? 0.8 : 0.53,
          ),
        ]),
      ),
    ),
    ...[64, 82, 271, 287].flatMap((x) =>
      [137, 160, 185, 206].map((y) => oval(x, y, 1.35, 1.06, "#e2cb94", "#514f45")),
    ),
    fillPath(opening, `url(#${id}-silo-interior)`, "#514638", 1.7),
    clip(
      id + "-roof-trusses",
      opening,
      layers([
        ...[88, 104, 121, 145, 164, 185, 209, 232, 249, 272].map((x) =>
          stroke(`M177 83L${x} 187`, "#b9a182", 1),
        ),
        ...[134, 141, 148, 155, 162].map((y) =>
          stroke(`M91 ${y}Q179 ${y + 13} 255 ${y - 3}`, "#5f5545", 0.7),
        ),
      ]),
    ),
    fillPath(grain, `url(#${id}-wheat)`, "#5e4328", 1.25),
    clip(
      id + "-individual-kernels",
      grain,
      layers(
        Array.from({ length: 360 }, (_, i) => {
          const row = Math.floor(i / 36),
            col = i % 36;
          const x = 101 + col * 4.4 + (row % 2) * 2 + position(i, 2);
          const y = 145 + row * 6.2 + position(i, 1) * 3;
          return stroke(
            `M${x.toFixed(1)} ${y.toFixed(1)}q1.7 -1.6 3.8 -.2l-1.6 1.25`,
            ["#f3d288", "#73472b", "#b18548", "#e8ba6e"][i % 4]!,
            0.71,
          );
        }),
      ),
    ),
    fillPath("M100 195Q171 211 251 195V203Q174 219 100 204Z", "#e0d1a9", ink, 1.02),
    ...[0, 1, 2].map((n) => stroke(`M103 ${198 + n * 2.15}q68 15 145 0`, "#4d4a3f", 0.8, "1 3")),
    ...[108, 146, 197, 234].map((x, i) =>
      filled(id, `M${x} ${205 + (i % 3) * 3}h5v15h-5Z`, "steel"),
    ),
    stroke("M246 211h-31q-7 0-7 6v3h-28", "#353e3e", 7.5),
    stroke("M246 211h-31q-7 0-7 6v3h-28", "#a2a59a", 4.4),
    fillPath("M47 120L165 72Q179 67 193 73L311 117Q178 145 47 120Z", `url(#${id}-zinc)`, ink, 1.15),
    ...[58, 84, 106, 130, 154, 179, 204, 229, 254, 280, 302].map((x, i) =>
      stroke(
        `M${169 + i * 2.4} 75L${x} ${123 + Math.sin(i * 0.27) * 11}`,
        i % 2 ? "#f3ecd4" : "#545951",
        0.86,
      ),
    ),
    fillPath("M163 73v-7q13-9 29 0v9q-13 6-29-2Z", "#989987", ink, 0.95),
    oval(177, 64, 15, 4.2, "#d8ceb0", "#54544b"),
    stroke("M173 134v24m7-24v34", "#f0e2b9", 1.3),
    fillPath("M176 164q4-3 7 0v15q-4 3-7 0Z", "#a4b9b7", ink, 0.95),
    stroke("M178 169v7m2-7v7", ink, 0.85, "1 2"),
    stroke("M294 124v92m13-97v93", ink, 3.8),
    stroke("M294 124v92m13-97v93", "#bcb59c", 2),
    ...[134, 145, 156, 167, 178, 189, 200, 211].map((y) =>
      stroke(`M294 ${y}l13-3`, "#736d5b", 1.6),
    ),
    s === 0 && [
      call(92, 73, "Entrée du grain", "M104 77l22 4 34-11", active),
      pin(160, 70, active),
    ],
    s === 1 && [
      call(283, 74, "Air de ventilation", "M269 80l-14 40-6 89", flow),
      ...[128, 169, 219].map((x) => [
        stroke(`M${x} 204v-19`, "#f6f1dc", 4),
        arrow(x, 204, x, 178, flow),
      ]),
    ],
    s === 2 && [
      call(61, 74, "Sonde", "M63 81l77 36 37 52", flow),
      pin(177, 169, flow),
      oval(179, 171, 11.4, 15.2, "none", "#f2f1e2"),
    ],
  ],
);

const wellAquifer = plate(
  [
    "L’eau occupe les vides de la roche",
    "Le captage puise dans la couche",
    "La tête limite les entrées directes",
  ],
  (s, id) => [
    <defs key="water-materials">
      {gradient(
        id + "-shale",
        [
          [0, "#cf997b"],
          [0.56, "#8d5748"],
          [1, "#a36b56"],
        ],
        true,
      )}
      {gradient(
        id + "-sand-bank",
        [
          [0, "#eee0b0"],
          [0.47, "#ba9662"],
          [1, "#876a49"],
        ],
        true,
      )}
      {gradient(
        id + "-saturated",
        [
          [0, "#659598"],
          [0.54, "#a7c7b9"],
          [1, "#487074"],
        ],
        true,
      )}
      {gradient(id + "-well-steel", [
        [0, "#333e3e"],
        [0.24, "#a8b5ae"],
        [0.44, "#e6e5d7"],
        [0.75, "#727b75"],
        [1, "#475356"],
      ])}
    </defs>,
    shadow(id, 180, 234, 157, 8),
    fillPath("M24 128l48-32q91 6 157-9l104 5-45 33Q227 147 165 127T24 128Z", `url(#${id}-plant)`),
    fillPath("M288 125l45-33v124l-45 19Z", "#716c51"),
    fillPath("M288 125l45-33v46l-45 39Z", "#af875a"),
    fillPath("M288 177l45-39v48l-45 27Z", "#537b81"),
    fillPath("M288 213l45-27v30l-45 19Z", "#905947"),
    fillPath(sand, `url(#${id}-sand-bank)`),
    fillPath(wetGravel, `url(#${id}-saturated)`),
    fillPath(clay, `url(#${id}-shale)`),
    clip(
      id + "-sand-grains",
      sand,
      layers([
        ...Array.from({ length: 185 }, (_, i) => {
          const x = 23 + position(i, 3) * 267,
            y = 126 + position(i, 2) * 53;
          return stroke(
            `M${x.toFixed(1)} ${y.toFixed(1)}l${(0.5 + position(i, 5) * 2).toFixed(1)} .25`,
            i % 3 === 0 ? "#845e3e" : "#efcf99",
            0.6,
          );
        }),
        ...[41, 57, 79, 111, 148, 181, 228, 252, 282].map((x, i) =>
          stroke(`M${x} 129q-7 9 2 17l-3 11m3-12 5 5`, "#795838", 0.76 + (i % 3) * 0.18),
        ),
      ]),
    ),
    clip(
      id + "-saturated-gravel",
      wetGravel,
      layers(
        Array.from({ length: 92 }, (_, i) => {
          const x = 25 + (i % 23) * 12 + (Math.floor(i / 23) % 2) * 6,
            y = 174 + Math.floor(i / 23) * 12 + position(i, 7) * 4;
          const rx = 3.1 + position(i, 8) * 4.7,
            ry = rx * (0.47 + position(i, 1) * 0.39);
          return [
            oval(
              x,
              y,
              rx,
              ry,
              ["#a59570", "#caba88", "#d6c5a5", "#7d8071", "#a49c81"][i % 5]!,
              "#4f5f55",
            ),
            stroke(
              `M${(x - rx * 0.63).toFixed(1)} ${(y + 0.3).toFixed(1)}q2.1-3.1 5-.9`,
              "#e4d7b4",
              0.7,
            ),
          ];
        }),
      ),
    ),
    ...[220, 224, 229, 233].map((y, i) =>
      stroke(`M28 ${y}q60 3 114 0t142 -1`, i % 2 ? "#b47a61" : "#d29d7c", 0.7, "12 2"),
    ),
    ...[31, 51, 70, 87, 104, 121, 147, 168, 204, 217, 238, 261, 288, 310, 320].map((x, i) => {
      const y = x > 289 ? 113 - (x - 289) * 0.46 : 124 + Math.sin(x * 0.024) * 4;
      return stroke(`M${x} ${y}l-4-7m4 7 2-10m-1 7 4-4`, i % 3 ? "#69825c" : "#314f39", 1.17);
    }),
    s !== 0 && [
      fillPath("M181 115v95q8 6 17 0v-95Z", `url(#${id}-well-steel)`, ink, 1.05),
      ...[181, 185, 189, 193, 197, 201, 205, 209].map((y) =>
        stroke(`M184 ${y}h10`, ink, 1.2, "1.7 2"),
      ),
      fillPath("M176 111v7q14 6 27 0v-7Z", "#74857e", ink, 1.05),
      oval(189.5, 110.8, 13.2, 3.8, "#d9d9c5", ink),
    ],
    s === 0 && [
      call(79, 78, "Sol", "M79 83l-13 61", active),
      call(234, 76, "Pores saturés", "M231 83l-8 39-2 64", flow),
      pin(221, 186, flow),
    ],
    s === 1 && [
      call(88, 78, "Tube filtrant", "M87 85l36 61 62 47", flow),
      pin(185, 193, flow),
      ...[
        [100, 193, 174, 195],
        [258, 193, 203, 195],
        [191, 187, 191, 133],
      ].map(([x, y, a, b]) => [
        stroke(`M${x} ${y}L${a} ${b}`, "#fff8df", 4.45),
        arrow(x!, y!, a!, b!, flow),
      ]),
    ],
    s === 2 && [
      call(253, 77, "Tête du forage", "M246 83l-44 25", living),
      pin(202, 108, living),
      oval(189, 113, 24, 14, "none", "#547047"),
    ],
  ],
);

function roller(id: string, x: number, y: number) {
  return moved(x, y, [
    fillPath("M0-15h58q19 0 19 15T58 15H0Z", `url(#${id}-lathed)`),
    oval(0, 0, 9, 15, "#5a6764"),
    oval(0, 0, 3.5, 7, "#d2ba85"),
    stroke("M7-10h54m-53 4h57m-58 14h56", "#d9d7c3", 0.7),
  ]);
}

const cellFactory = plate(
  ["Feuilles d’électrode", "Électrodes et séparateur enroulés", "Contacts reliés au banc de test"],
  (s, id) => [
    <defs key="battery-materials">
      {gradient(
        id + "-lathed",
        [
          [0, "#4b5651"],
          [0.25, "#b2b9b1"],
          [0.42, "#e5e6d9"],
          [0.65, "#84948c"],
          [1, "#525e5b"],
        ],
        true,
      )}
      {gradient(id + "-copper-sheet", [
        [0, "#70493b"],
        [0.18, "#bf8c60"],
        [0.48, "#edd0a0"],
        [0.76, "#aa7253"],
        [1, "#5b3f36"],
      ])}
      {gradient(id + "-cell-can", [
        [0, "#40514d"],
        [0.28, "#95aba4"],
        [0.43, "#fff8e0"],
        [0.7, "#798f86"],
        [1, "#3d4c47"],
      ])}
    </defs>,
    s === 0 && [
      shadow(id, 181, 216, 143, 12),
      filled(id, "M54 181l33-20 247 2-34 31v21l-246-4Z", "steel", "engraving"),
      fillPath("M101 134l193-2-41 60-188-4Z", `url(#${id}-copper-sheet)`),
      fillPath("M123 130l180-9-33 42-166 15Z", "#947249"),
      stroke("M120 144l153-8m-159 17 146-9m-155 16 151-10m-169 30 167 1", "#eacc9c", 1.17),
      filled(id, "M63 113l21-12 9 82-25 16Z", "graphite", "engraving"),
      filled(id, "M250 104l22-12 16 85-24 13Z", "graphite", "engraving"),
      moved(93, 143, [
        <g key="forming-roll" transform="rotate(-13) scale(2.15 1.05)">
          {roller(id, 0, 0)}
        </g>,
      ]),
      moved(123, 115, [
        <g key="pressure-roll" transform="rotate(-13) scale(1.95 1)">
          {roller(id, 0, 0)}
        </g>,
      ]),
      call(292, 81, "Feuille", "M286 87l-13 28-23 42", active),
      pin(250, 157, active),
    ],
    s === 1 && [
      shadow(id, 183, 218, 122, 13),
      moved(173, 153, [
        <g key="cutaway-can" transform="rotate(-18)">
          {fillPath("M-61-64q60-32 119 0V55q-60 32-119 0Z", `url(#${id}-cell-can)`, ink, 1.5)}
          {oval(-1, -64, 58, 18, "#bdc9bc", ink)}
          {oval(-1, -65, 46, 13, "#5f6b5b", ink)}
          {fillPath("M-42-67v116q46 29 82-2v-114q-37 18-82 0Z", `url(#${id}-copper-sheet)`)}
          {oval(0, -66, 41, 12, "#c7a466", ink)}
          {layers(
            Array.from({ length: 11 }, (_, i) => [
              oval(0, -66, 36 - i * 3.1, 10 - i * 0.85, "none", i % 2 ? "#e9dfb9" : "#53564e"),
              stroke(`M${-37 + i * 7} -58q-4 51 1 101`, i % 2 ? "#ebd7aa" : "#635749", 1),
            ]),
          )}
          {fillPath("M40-67l18 2V55q-19 9-30 8V57l12-11Z", `url(#${id}-cell-can)`, ink, 0.9)}
          {stroke("M48-64v110", "#f1edcf", 1.1)}
        </g>,
      ]),
      call(76, 99, "Enroulement", "M90 105l36-20", active),
      pin(126, 85, active),
    ],
    s === 2 && [
      shadow(id, 178, 216, 138, 12),
      filled(id, "M60 187l31-21h198l-25 25v23H60Z", "graphite", "engraving"),
      filled(id, "M198 110l28-23h79l-12 23v67h-95Z", "steel", "engraving"),
      block(209, 120, 75, 32, "#b8cdbb", ink, 3),
      stroke("M216 136h10l4-8 6 11 8-6h32", flow, 1.75),
      ...[213, 222, 230, 257].map((x) => oval(x, 163, 2.1, 2.1, "#d6b571", ink)),
      fillPath("M118 106q16-10 33 0v74q-17 11-33 0Z", `url(#${id}-cell-can)`),
      oval(134.5, 106, 16.3, 5.3, "#bdc6b7", ink),
      oval(134, 102, 5.3, 2.8, "#d9c7a0", ink),
      stroke("M135 100q-22-31-43-13-12 11 10 32m35 65q19 28 62-18", "#4b5148", 4.6),
      stroke("M135 100q-22-31-43-13-12 11 10 32m35 65q19 28 62-18", "#ac6f54", 2.5),
      call(248, 76, "Mesure", "M245 83l-2 40", flow),
    ],
  ],
);

export const industryRefinements = {
  editionGrainSilo: grainSilo,
  editionWellAquifer: wellAquifer,
  editionCellFactory: cellFactory,
};
