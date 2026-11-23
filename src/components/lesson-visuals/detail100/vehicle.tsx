import {
  active,
  block,
  filled,
  flow,
  ink,
  lineGrey,
  moved,
  oval,
  round,
  shadow,
  stroke,
} from "./plate";

export function wheel(id: string, x: number, y: number, r = 22) {
  return moved(x, y, [
    round(id, 0, 0, r, "graphite"),
    oval(0, 0, r * 0.88, r * 0.88, "none", "#9aa4a1"),
    round(id, 0, 0, r * 0.59, "steel"),
    oval(0, 0, r * 0.46, r * 0.46, "none", ink),
    ...Array.from({ length: 5 }, (_, i) => (
      <path
        key={i}
        d={`M0 ${-r * 0.4}v${r * 0.21}`}
        stroke="#3c494b"
        strokeWidth={r * 0.15}
        strokeLinecap="round"
        transform={`rotate(${i * 72})`}
      />
    )),
    round(id, 0, 0, r * 0.14, "brass"),
  ]);
}

const carShell =
  "M6 97 9 73q4-11 20-14l26-8 29-34Q96 4 120 4h35q15 0 25 10l35 36 20 7q16 4 19 18l4 24h-27a23 23 0 0 0-46 0H82a22 22 0 0 0-45 0Z";

export function bodywork(id: string, x: number, y: number, scale = 1, high = false, cut = false) {
  return moved(
    x,
    y,
    [
      shadow(id, 134, 112, 137, 19),
      filled(
        id,
        high
          ? "M6 102 9 59q4-10 21-12l29-5 25-32q12-8 35-8h58q16 0 24 11l22 24 21 9 11 54h-24a23 23 0 0 0-46 0H83a22 22 0 0 0-45 0Z"
          : carShell,
        "steel",
      ),
      filled(
        id,
        high
          ? "M71 45 93 17q8-5 25-5h56q14 0 21 8l17 22Z"
          : "M70 53 94 26q9-12 28-12h29q15 0 25 12l24 27Z",
        "glass",
      ),
      stroke(
        "M129 16l-3 40m43-35 13 32M66 58l-9 12m14-13 146-7m-77 9v32m-54-32-3 34m-8 3h98",
        ink,
        1.3,
      ),
      stroke("M26 61q45 11 158-2l34-5m-66 16h13M10 89h22m201 2h20", "#e4e6df", 1.55),
      filled(id, "M220 59l24 8 4 10h-23Z", "ivory"),
      block(10, 64, 16, 10, "#a7584a", ink, 2),
      cut && [
        filled(id, "M74 82h111v15H78Z", "brass", "engraving"),
        filled(id, "M195 64h38l5 8-15 17h-28Z", "graphite", "engraving"),
        stroke("M99 77V59h19q8 6 8 18m23 0V58h16q8 8 7 19", "#f5e4bd", 2.2),
      ],
      wheel(id, 60, 99, 21),
      wheel(id, 208, 99, 21),
    ],
    scale,
  );
}

export function cabin(id: string, x: number, y: number, protection: number) {
  return moved(x, y, [
    shadow(id, 130, 135, 138, 20),
    filled(
      id,
      "M0 128l22-41 31-4 32-49Q96 19 116 18h73q27 3 35 33l20 42 17 6v28h-28l-8-26H24l-4 24Z",
      "graphite",
      "engraving",
    ),
    filled(id, "M65 85l30-43q8-11 22-12h68q20 2 28 24l13 31Z", "glass"),
    stroke("M148 29v70m51-62-4 62", ink, 3),
    filled(id, "M164 109h-42l-12-52 10-3q9 0 12 12l11 30h25Z", "steel", "engraving"),
    filled(id, "M202 81h25l12 10v17h-26l-7-17Z", "steel"),
    stroke("M203 80l-14-12m0-10 9 25", ink, 3),
    oval(143, 56, 11, 13, `url(#${id}-brass)`),
    filled(id, "M134 73q8-8 17-3l11 21 21 2 12 19h-10l-13-10h-24Z", "brass"),
    stroke("M148 74l14 9 27-9", active, 2.1),
    protection > 0 && stroke("M130 53l26 44-15 4", "#9f512c", 4),
    protection > 1 && [
      filled(id, "M195 83q-24 9-33-4-10-15 2-23 13-9 24 2Z", "ivory", "engraving"),
      stroke("M164 67q12-9 24-5m-24 15q12-1 22-8", "#a89980", 1.1),
    ],
    wheel(id, 50, 123, 18),
    wheel(id, 222, 123, 18),
  ]);
}

export function roadway(x = 28, y = 206, w = 304) {
  return moved(x, y, [
    block(0, 0, w, 18, "#7d8380", ink, 0),
    stroke(`M0 4h${w}`, "#dde0d5", 1.4, "14 9"),
    stroke(`M0 14h${w}`, lineGrey, 0.9, "2 7"),
  ]);
}

export function cabinRestraint(id: string) {
  return moved(0, 0, [
    shadow(id, 180, 218, 154, 19),
    filled(id, "M31 211V128l52-58h171l69 52v31l-24-9-67-61H91l-47 61v67Z", "graphite", "engraving"),
    filled(id, "M37 121h24l21 71 67 5 8 20H39Z", "steel", "engraving"),
    filled(id, "M43 124h13l19 66h-16Z", "graphite"),
    stroke("M53 133l16 60 65 7", "#eeead9", 1.15, "3 3"),
    filled(id, "M269 121h38l22 24v72h-42l-19-40-18-11Z", "graphite", "engraving"),
    stroke("M269 130l33 4 20 18m-40-5h22m-19 6h25", "#b2b7ad", 1.55),
    filled(
      id,
      "M107 123q12-19 31-22 16 1 25 21l17 48 34 8 24 30h-25l-21-19-48 5-18-27Z",
      "brass",
      "engraving",
    ),
    filled(
      id,
      "M132 100q-16-9-16-30 2-17 22-18 25-2 34 17l-2 14 8 9-10 5-2 11-27-1Z",
      "ivory",
      "engraving",
    ),
    round(id, 144, 77, 9.5, "graphite"),
    filled(id, "M144 68a9 9 0 0 1 9 9h-9Zm0 9v9a9 9 0 0 1-9-9Z", "brass"),
    stroke("M135 107l24-1m-28 6 29-1m-26 7 28-2", ink, 1.6),
    round(id, 143, 133, 16, "brass"),
    round(id, 143, 133, 6, "steel"),
    filled(id, "M151 135l24 17 45-12 6 10-49 20-30-14Z", "brass", "engraving"),
    stroke("M101 110l43 75 58-3", "#5a472d", 9.4),
    stroke("M101 110l43 75 58-3", "#b18441", 6.5),
    stroke("M101 110l43 75 58-3", "#e7c585", 1, "3 2"),
    oval(245, 137, 8, 24, "none", ink),
    filled(
      id,
      "M244 137q-22 13-38 8-20-4-25-24-2-29 17-44 18-12 37 10 16 19 9 50Z",
      "ivory",
      "dots",
    ),
    stroke(
      "M185 103q12-24 28-20 17 3 28 24m-59 9q20-6 28 5t33 1m-57 12q14-5 25 4",
      "#9d927c",
      1.12,
    ),
    stroke("M47 217h274", ink, 1.8),
  ]);
}

export function personSide(id: string, x: number, y: number, pose = 0, scale = 1) {
  return moved(
    x,
    y,
    [
      filled(
        id,
        pose === 0
          ? "M-14 3q0-12 13-14 11 1 14 17l-3 23h-20Z"
          : "M-15 1q-2-11 15-12l22 9-4 17-28 7Z",
        "plant",
        "engraving",
      ),
      round(id, pose === 0 ? 1 : 15, -23, 8, "brass"),
      stroke(
        pose === 0
          ? "M-9 3l-13 16m28-16 13 15M-7 28l-6 28m19-28 8 28m-28 0h8m20 0h8"
          : "M10 3l23 8 9-3M-5 23l-11 18 2 14m28-39 16 17 16 5",
        ink,
        3.8,
      ),
    ],
    scale,
  );
}

export const gasArrow = flow;
