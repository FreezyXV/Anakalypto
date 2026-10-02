import type { GlyphName } from "@/lib/visual";

/**
 * Pictogrammes en SVG, dessines dans un carre de 96 x 96.
 *
 * Chaque entree est du balisage brut place dans un `<g>`: les couleurs viennent de classes
 * definies dans globals.css (`ga` couleur du domaine, `gl` version claire, `gy` jaune, `gw`
 * blanc, `gk` encre...), jamais d'attributs en dur, pour que le dessin prenne la couleur du
 * domaine qui l'affiche. Le trait `o` pose le contour d'encre commun a tous les dessins.
 */

/** Contour d'engrenage: des dents trapezoidales regulieres autour d'un cercle. */
function gearPath(cx: number, cy: number, outer: number, inner: number, teeth: number): string {
  const step = (Math.PI * 2) / teeth;
  const points: string[] = [];
  for (let index = 0; index < teeth; index += 1) {
    const angle = index * step;
    const marks: Array<[number, number]> = [
      [angle - step * 0.3, inner],
      [angle - step * 0.17, outer],
      [angle + step * 0.17, outer],
      [angle + step * 0.3, inner],
    ];
    for (const [theta, radius] of marks) {
      const x = cx + Math.cos(theta) * radius;
      const y = cy + Math.sin(theta) * radius;
      points.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
    }
  }
  return `M${points.join(" L")}Z`;
}

/** Double helice: deux brins sinusoidaux et des barreaux entre eux. */
function dnaMarkup(): string {
  const strandA: string[] = [];
  const strandB: string[] = [];
  const rungs: string[] = [];
  for (let y = 8; y <= 88; y += 2) {
    const offset = Math.sin((y - 8) / 9.5) * 22;
    strandA.push(`${(48 + offset).toFixed(1)} ${y}`);
    strandB.push(`${(48 - offset).toFixed(1)} ${y}`);
  }
  for (let y = 14; y <= 84; y += 10) {
    const offset = Math.sin((y - 8) / 9.5) * 22;
    rungs.push(`M${(48 - offset).toFixed(1)} ${y} L${(48 + offset).toFixed(1)} ${y}`);
  }
  const a = `M${strandA.join(" L")}`;
  const b = `M${strandB.join(" L")}`;
  return (
    `<path class="sk" d="${rungs.join(" ")}"/>` +
    `<path class="sw" d="${rungs.join(" ")}"/>` +
    `<path class="sk" d="${b}"/><path class="sy" d="${b}"/>` +
    `<path class="sk" d="${a}"/><path class="sa" d="${a}"/>`
  );
}

/** Flocon: six bras ornes de deux paires de branches. */
function snowflakeMarkup(): string {
  const arms: string[] = [];
  for (let index = 0; index < 6; index += 1) {
    const angle = (index * Math.PI) / 3 - Math.PI / 2;
    const point = (radius: number, theta = angle): string =>
      `${(48 + Math.cos(theta) * radius).toFixed(1)} ${(48 + Math.sin(theta) * radius).toFixed(1)}`;
    arms.push(`M48 48 L${point(38)}`);
    for (const radius of [22, 30]) {
      const branch = radius === 22 ? 12 : 8;
      arms.push(`M${point(radius)} L${point(radius + branch * 0.7, angle - 0.75)}`);
      arms.push(`M${point(radius)} L${point(radius + branch * 0.7, angle + 0.75)}`);
    }
  }
  const d = arms.join(" ");
  return `<path class="sk" d="${d}"/><path class="sw" d="${d}"/><circle class="o gl" cx="48" cy="48" r="7"/>`;
}

/** Rayons du soleil, a intervalles reguliers autour du disque. */
function sunRays(): string {
  const rays: string[] = [];
  for (let index = 0; index < 8; index += 1) {
    const angle = (index * Math.PI) / 4;
    const from = 26;
    const to = 40;
    rays.push(
      `M${(48 + Math.cos(angle) * from).toFixed(1)} ${(48 + Math.sin(angle) * from).toFixed(1)} ` +
        `L${(48 + Math.cos(angle) * to).toFixed(1)} ${(48 + Math.sin(angle) * to).toFixed(1)}`,
    );
  }
  return rays.join(" ");
}

export const GLYPHS: Record<GlyphName, string> = {
  atom:
    `<g class="o gn"><ellipse cx="48" cy="48" rx="38" ry="14"/>` +
    `<ellipse cx="48" cy="48" rx="38" ry="14" transform="rotate(60 48 48)"/>` +
    `<ellipse cx="48" cy="48" rx="38" ry="14" transform="rotate(120 48 48)"/></g>` +
    `<circle class="o gy" cx="48" cy="48" r="9"/>` +
    `<circle class="o ga" cx="82" cy="48" r="5"/><circle class="o ga" cx="31" cy="77" r="5"/>` +
    `<circle class="o ga" cx="31" cy="19" r="5"/>`,

  planet:
    `<g transform="rotate(-20 48 50)"><path class="o gn" d="M5 50 A43 12 0 0 1 91 50"/></g>` +
    `<circle class="o ga" cx="48" cy="50" r="25"/>` +
    `<path class="gl" opacity=".55" d="M30 42 C36 32 50 30 58 34 C52 38 46 44 44 52 C38 52 32 48 30 42Z"/>` +
    `<path class="o gn" d="M30 66 C42 72 58 72 68 64" opacity=".5"/>` +
    `<g transform="rotate(-20 48 50)"><path class="o gn" d="M5 50 A43 12 0 0 0 91 50"/></g>` +
    `<circle class="gy" cx="80" cy="16" r="4"/><circle class="gw" cx="14" cy="26" r="3"/>`,

  rocket:
    `<g transform="rotate(38 48 48)">` +
    `<path class="o gy" d="M41 66 H55 L48 90Z"/>` +
    `<path class="o ga" d="M37 52 L22 68 V78 L39 70Z"/><path class="o ga" d="M59 52 L74 68 V78 L57 70Z"/>` +
    `<path class="o gw" d="M48 6 C63 20 65 46 61 66 H35 C31 46 33 20 48 6Z"/>` +
    `<circle class="o gl" cx="48" cy="38" r="9"/>` +
    `<path class="o ga" d="M36 62 H60"/></g>`,

  satellite:
    `<g transform="rotate(-35 48 48)">` +
    `<rect class="o ga" x="3" y="38" width="29" height="20" rx="2"/>` +
    `<rect class="o ga" x="64" y="38" width="29" height="20" rx="2"/>` +
    `<path class="o gn" d="M17 38 V58 M78 38 V58 M32 48 H38 M58 48 H64"/>` +
    `<rect class="o gw" x="38" y="32" width="20" height="32" rx="4"/>` +
    `<path class="o gy" d="M42 66 C42 78 54 78 54 66Z"/>` +
    `<circle class="o ga" cx="48" cy="44" r="5"/></g>`,

  telescope:
    `<path class="o gn" d="M46 56 L28 90 M46 56 L66 90 M46 56 V90"/>` +
    `<g transform="rotate(-28 48 40)">` +
    `<rect class="o ga" x="6" y="30" width="54" height="20" rx="4"/>` +
    `<rect class="o gw" x="58" y="26" width="20" height="28" rx="4"/>` +
    `<rect class="o gl" x="2" y="34" width="8" height="12" rx="2"/>` +
    `</g>` +
    `<circle class="gy" cx="80" cy="14" r="4"/><circle class="gw" cx="12" cy="14" r="3"/>`,

  star:
    `<path class="o gy" d="M48 8 L58 34 L86 36 L64 54 L72 82 L48 66 L24 82 L32 54 L10 36 L38 34Z"/>` +
    `<path class="gw" opacity=".7" d="M48 18 L54 34 L48 36Z"/>`,

  heart:
    `<path class="o ga" d="M48 84 C16 62 8 40 15 27 C22 14 40 15 48 29 C56 15 74 14 81 27 C88 40 80 62 48 84Z"/>` +
    `<path class="ow" d="M22 48 H36 L42 38 L52 60 L58 48 H74"/>`,

  leaf:
    `<path class="o ga" d="M18 78 C12 40 38 14 82 14 C86 58 60 84 18 78Z"/>` +
    `<path class="ow" d="M18 78 C34 56 50 40 68 28"/>` +
    `<path class="ow" d="M40 52 L36 38 M52 42 L52 28 M42 62 L58 62"/>`,

  globe:
    `<circle class="o ga" cx="48" cy="48" r="35"/>` +
    `<path class="gl" d="M26 34 C34 24 48 28 46 38 C44 46 32 46 26 40Z"/>` +
    `<path class="gl" d="M52 50 C64 44 76 54 68 66 C62 74 50 68 52 50Z"/>` +
    `<ellipse class="o gn" cx="48" cy="48" rx="15" ry="35"/><path class="o gn" d="M13 48 H83"/>`,

  flask:
    `<path class="ga" d="M28 62 H68 L80 72 C84 80 80 86 72 86 H24 C16 86 12 80 16 72Z"/>` +
    `<path class="o gn" d="M38 12 H58 V36 L80 72 C84 80 80 86 72 86 H24 C16 86 12 80 16 72 L38 36Z"/>` +
    `<path class="o gn" d="M33 12 H63"/>` +
    `<circle class="o gw" cx="42" cy="68" r="4"/><circle class="o gw" cx="56" cy="76" r="3"/>` +
    `<circle class="o gy" cx="52" cy="22" r="3"/>`,

  bolt: `<path class="o gy" d="M56 6 L20 54 H44 L36 90 L76 38 H52Z"/><path class="gw" opacity=".6" d="M54 16 L40 36 L48 36Z"/>`,

  gear:
    `<path class="o ga" d="${gearPath(48, 48, 40, 31, 9)}"/>` +
    `<circle class="o gw" cx="48" cy="48" r="13"/>` +
    `<circle class="o gy" cx="48" cy="48" r="5"/>`,

  car:
    `<path class="o ga" d="M8 62 V52 C8 48 11 46 15 45 L28 42 L38 27 C40 24 43 23 47 23 H62 C66 23 70 25 72 28 L81 42 L87 44 C91 45 94 48 94 52 V62Z"/>` +
    `<path class="o gl" d="M35 42 L43 30 H51 V42Z"/><path class="o gl" d="M56 42 V30 H62 C64 30 66 31 67 33 L73 42Z"/>` +
    `<circle class="o gk" cx="27" cy="63" r="12"/><circle class="gw" cx="27" cy="63" r="4"/>` +
    `<circle class="o gk" cx="75" cy="63" r="12"/><circle class="gw" cx="75" cy="63" r="4"/>`,

  plane:
    `<g transform="rotate(-40 48 48)">` +
    `<path class="o gw" d="M48 6 C55 6 57 14 57 22 V36 L88 56 V66 L57 57 V74 L67 82 V90 L48 85 L29 90 V82 L39 74 V57 L8 66 V56 L39 36 V22 C39 14 41 6 48 6Z"/>` +
    `<path class="ga" d="M48 11 C51 11 52 15 52 20 H44 C44 15 45 11 48 11Z"/>` +
    `<path class="o ga" d="M39 40 L18 54 M57 40 L78 54" opacity=".0"/></g>`,

  book:
    `<path class="o ga" d="M48 24 C38 15 22 15 10 20 V76 C22 72 38 72 48 80 C58 72 74 72 86 76 V20 C74 15 58 15 48 24Z"/>` +
    `<path class="o gw" d="M48 24 C40 18 26 18 16 22 V70 C26 67 40 68 48 75Z"/>` +
    `<path class="o gw" d="M48 24 C56 18 70 18 80 22 V70 C70 67 56 68 48 75Z"/>` +
    `<path class="ot gn" d="M24 34 C30 32 36 33 41 36 M24 46 C30 44 36 45 41 48 M24 58 C30 56 36 57 41 60 M55 36 C60 33 66 32 72 34 M55 48 C60 45 66 44 72 46 M55 60 C60 57 66 56 72 58"/>`,

  brain:
    `<path class="o ga" d="M48 18 C42 9 26 9 23 23 C11 25 7 42 15 50 C9 60 16 75 29 73 C33 83 48 83 48 75Z"/>` +
    `<path class="o ga" d="M48 18 C54 9 70 9 73 23 C85 25 89 42 81 50 C87 60 80 75 67 73 C63 83 48 83 48 75Z"/>` +
    `<path class="ow" d="M48 22 V74 M28 40 C34 36 38 40 38 46 M24 58 C31 56 37 58 38 64 M68 40 C62 36 58 40 58 46 M72 58 C65 56 59 58 58 64"/>`,

  chip:
    `<path class="o gn" d="M31 12 V26 M43 12 V26 M55 12 V26 M67 12 V26 M31 70 V84 M43 70 V84 M55 70 V84 M67 70 V84 M12 31 H26 M12 43 H26 M12 55 H26 M12 67 H26 M70 31 H84 M70 43 H84 M70 55 H84 M70 67 H84"/>` +
    `<rect class="o ga" x="24" y="24" width="48" height="48" rx="9"/>` +
    `<rect class="o gw" x="36" y="36" width="24" height="24" rx="5"/>` +
    `<circle class="gy" cx="48" cy="48" r="5"/>`,

  monitor:
    `<rect class="o gw" x="8" y="14" width="80" height="54" rx="7"/>` +
    `<rect class="o ga" x="15" y="21" width="66" height="40" rx="3"/>` +
    `<path class="o gn" d="M34 82 H62 M48 68 V82"/>` +
    `<path class="ow" d="M38 33 L28 41 L38 49 M58 33 L68 41 L58 49 M52 30 L44 52"/>`,

  bubbles:
    `<path class="o ga" d="M14 14 H58 A9 9 0 0 1 67 23 V42 A9 9 0 0 1 58 51 H34 L20 63 V51 H14 A9 9 0 0 1 5 42 V23 A9 9 0 0 1 14 14Z"/>` +
    `<path class="o gw" d="M42 40 H82 A9 9 0 0 1 91 49 V66 A9 9 0 0 1 82 75 H78 V88 L63 75 H42 A9 9 0 0 1 33 66 V49 A9 9 0 0 1 42 40Z"/>` +
    `<circle class="ga" cx="46" cy="58" r="4"/><circle class="ga" cx="62" cy="58" r="4"/><circle class="ga" cx="78" cy="58" r="4"/>`,

  scales:
    `<path class="o gn" d="M48 16 V82 M28 86 H68 M16 28 H80"/>` +
    `<path class="o gn" d="M16 28 L7 56 M16 28 L25 56 M80 28 L71 56 M80 28 L89 56"/>` +
    `<path class="o ga" d="M5 56 H27 C27 68 5 68 5 56Z"/><path class="o ga" d="M69 56 H91 C91 68 69 68 69 56Z"/>` +
    `<circle class="o gy" cx="48" cy="14" r="7"/>`,

  palette:
    `<path class="o gw" d="M48 10 C26 10 9 27 9 48 C9 67 24 82 43 82 C52 82 54 76 52 72 C49 66 54 62 60 62 H70 C82 62 90 55 90 45 C90 25 72 10 48 10Z"/>` +
    `<circle class="o ga" cx="28" cy="40" r="7"/><circle class="o gy" cx="44" cy="26" r="7"/>` +
    `<circle class="o gb" cx="64" cy="30" r="7"/><circle class="o gr" cx="24" cy="60" r="7"/>` +
    `<circle class="o gg" cx="76" cy="48" r="6" opacity="0"/>`,

  apple:
    `<path class="o ga" d="M48 30 C40 22 21 24 15 41 C9 60 24 85 38 85 C44 85 46 81 48 81 C50 81 52 85 58 85 C72 85 87 60 81 41 C75 24 56 22 48 30Z"/>` +
    `<path class="o gn" d="M48 30 C48 22 50 15 57 9"/>` +
    `<path class="o gg" d="M55 22 C61 9 74 9 81 13 C77 26 64 29 55 22Z"/>` +
    `<path class="ow" d="M25 46 C27 39 31 35 38 32"/>`,

  dumbbell:
    `<rect class="o gk" x="28" y="43" width="40" height="10" rx="3"/>` +
    `<rect class="o ga" x="15" y="25" width="14" height="46" rx="5"/><rect class="o ga" x="67" y="25" width="14" height="46" rx="5"/>` +
    `<rect class="o gl" x="5" y="34" width="11" height="28" rx="4"/><rect class="o gl" x="80" y="34" width="11" height="28" rx="4"/>`,

  dna: dnaMarkup(),

  microscope:
    `<g transform="rotate(-18 48 48)">` +
    `<rect class="o ga" x="37" y="4" width="22" height="14" rx="4"/>` +
    `<rect class="o gw" x="40" y="16" width="16" height="36" rx="4"/>` +
    `<rect class="o gl" x="44" y="50" width="8" height="10" rx="2"/>` +
    `<path class="sk" d="M62 26 C86 34 86 70 62 76" fill="none"/><path class="sa" d="M62 26 C86 34 86 70 62 76" fill="none"/>` +
    `<rect class="o gw" x="28" y="62" width="40" height="7" rx="3"/>` +
    `<path class="o ga" d="M20 88 H76 C76 80 70 74 62 74 H34 C26 74 20 80 20 88Z"/></g>`,

  sun:
    `<path class="sk" d="${sunRays()}"/><path class="sy" d="${sunRays()}"/>` +
    `<circle class="o gy" cx="48" cy="48" r="20"/>` +
    `<path class="ow" d="M40 44 C42 40 46 38 50 38" opacity=".8"/>`,

  turbine:
    `<path class="o gw" d="M44 52 L41 90 H55 L52 52Z"/>` +
    `<g transform="rotate(0 48 46)"><path class="o gw" d="M48 46 C42 34 42 18 48 4 C54 18 54 34 48 46Z"/></g>` +
    `<g transform="rotate(120 48 46)"><path class="o gw" d="M48 46 C42 34 42 18 48 4 C54 18 54 34 48 46Z"/></g>` +
    `<g transform="rotate(240 48 46)"><path class="o gw" d="M48 46 C42 34 42 18 48 4 C54 18 54 34 48 46Z"/></g>` +
    `<circle class="o ga" cx="48" cy="46" r="7"/>`,

  droplet:
    `<path class="o ga" d="M48 8 C48 8 18 42 18 62 A30 30 0 0 0 78 62 C78 42 48 8 48 8Z"/>` +
    `<path class="ow" d="M32 64 C32 74 38 80 48 82"/>`,

  snowflake: snowflakeMarkup(),

  mountain:
    `<circle class="gy" cx="76" cy="22" r="9"/>` +
    `<path class="o ga" d="M4 82 L34 26 L50 54 L62 38 L92 82Z"/>` +
    `<path class="o gw" d="M34 26 L25 42 L32 40 L37 47 L43 40 L47 46 L41 35Z"/>`,

  tree:
    `<rect class="o gbr" x="42" y="56" width="12" height="30" rx="3"/>` +
    `<circle class="o ga" cx="28" cy="52" r="17"/><circle class="o ga" cx="68" cy="52" r="17"/>` +
    `<circle class="o ga" cx="48" cy="32" r="23"/>` +
    `<path class="ow" d="M38 28 C40 22 44 19 50 18" opacity=".8"/>`,

  magnet:
    `<path class="sk" d="M22 16 V54 A26 26 0 0 0 74 54 V16" fill="none" style="stroke-width:24"/>` +
    `<path class="sr" d="M22 16 V54 A26 26 0 0 0 74 54 V16" fill="none" style="stroke-width:16"/>` +
    `<rect class="o gw" x="12" y="10" width="20" height="18" rx="2"/><rect class="o gw" x="64" y="10" width="20" height="18" rx="2"/>`,

  battery:
    `<rect class="o gw" x="8" y="28" width="68" height="40" rx="9"/>` +
    `<rect class="o gk" x="76" y="40" width="10" height="16" rx="3"/>` +
    `<rect class="gg" x="15" y="35" width="15" height="26" rx="4"/><rect class="gg" x="34" y="35" width="15" height="26" rx="4"/>` +
    `<rect class="gy" x="53" y="35" width="15" height="26" rx="4"/>` +
    `<path class="ow" d="M44 10 L38 22 H48 L42 34" style="stroke:#FFC93C"/>`,

  wave:
    `<path class="sk" d="M6 50 C16 18 28 18 38 50 S60 82 70 50 S82 26 90 42" fill="none"/>` +
    `<path class="sa" d="M6 50 C16 18 28 18 38 50 S60 82 70 50 S82 26 90 42" fill="none"/>` +
    `<circle class="o gy" cx="38" cy="50" r="6"/>`,

  robot:
    `<path class="o gn" d="M48 26 V14"/><circle class="o gy" cx="48" cy="11" r="5"/>` +
    `<rect class="o gl" x="10" y="42" width="12" height="20" rx="4"/><rect class="o gl" x="74" y="42" width="12" height="20" rx="4"/>` +
    `<rect class="o ga" x="20" y="26" width="56" height="48" rx="14"/>` +
    `<rect class="o gw" x="29" y="38" width="38" height="24" rx="9"/>` +
    `<circle class="gk" cx="40" cy="50" r="4.5"/><circle class="gk" cx="56" cy="50" r="4.5"/>` +
    `<path class="o gn" d="M40 84 V74 M56 84 V74"/>`,

  crane:
    `<path class="o gw" d="M30 90 V26 H44 V90Z"/>` +
    `<path class="ot gn" d="M30 40 L44 52 M30 52 L44 64 M30 64 L44 76 M44 40 L30 52 M44 52 L30 64 M44 64 L30 76"/>` +
    `<rect class="o gy" x="8" y="14" width="82" height="12" rx="3"/>` +
    `<rect class="o ga" x="6" y="26" width="18" height="12" rx="2"/>` +
    `<path class="o gn" d="M76 26 V54"/><rect class="o ga" x="66" y="54" width="22" height="14" rx="3"/>`,

  factory:
    `<rect class="o gw" x="60" y="18" width="16" height="40" rx="2"/>` +
    `<circle class="gl" cx="62" cy="10" r="6"/><circle class="gl" cx="72" cy="6" r="4"/>` +
    `<path class="o ga" d="M8 84 V52 L28 64 V52 L48 64 V52 L68 64 V50 H88 V84Z"/>` +
    `<rect class="o gl" x="14" y="70" width="12" height="9" rx="1"/><rect class="o gl" x="34" y="70" width="12" height="9" rx="1"/>` +
    `<rect class="o gl" x="54" y="70" width="12" height="9" rx="1"/>`,

  coin:
    `<circle class="o gy" cx="48" cy="48" r="36"/><circle class="o gn" cx="48" cy="48" r="27"/>` +
    `<path class="o gn" d="M63 36 A17 17 0 1 0 63 60 M31 44 H55 M31 52 H55"/>`,

  hourglass:
    `<path class="o gw" d="M24 12 H72 C72 38 56 44 52 48 C56 52 72 58 72 84 H24 C24 58 40 52 44 48 C40 44 24 38 24 12Z"/>` +
    `<path class="gy" d="M32 18 H64 C62 30 54 38 48 43 C42 38 34 30 32 18Z"/>` +
    `<path class="gy" d="M30 80 C34 66 42 60 48 60 C54 60 62 66 66 80Z"/>` +
    `<rect class="o ga" x="17" y="7" width="62" height="9" rx="4"/><rect class="o ga" x="17" y="80" width="62" height="9" rx="4"/>`,

  eye:
    `<path class="o gw" d="M5 48 C22 22 74 22 91 48 C74 74 22 74 5 48Z"/>` +
    `<circle class="o ga" cx="48" cy="48" r="17"/><circle class="gk" cx="48" cy="48" r="8"/>` +
    `<circle class="gw" cx="43" cy="43" r="3.5"/>`,

  camera:
    `<path class="o ga" d="M10 30 H28 L34 20 H62 L68 30 H86 V76 H10Z"/>` +
    `<circle class="o gw" cx="48" cy="52" r="19"/><circle class="o gl" cx="48" cy="52" r="11"/>` +
    `<circle class="gk" cx="48" cy="52" r="5"/><circle class="gy" cx="76" cy="40" r="4"/>`,

  note:
    `<path class="o ga" d="M34 66 V20 L78 10 V56"/><path class="o gn" d="M34 36 L78 26"/>` +
    `<ellipse class="o gk" cx="24" cy="68" rx="13" ry="10"/><ellipse class="o gk" cx="68" cy="58" rx="13" ry="10"/>`,

  shield:
    `<path class="o ga" d="M48 7 L84 20 V46 C84 67 67 81 48 90 C29 81 12 67 12 46 V20Z"/>` +
    `<path class="ow" d="M30 48 L43 61 L67 34"/>`,

  lock:
    `<path class="o gn" d="M30 42 V30 A18 18 0 0 1 66 30 V42" style="stroke-width:7"/>` +
    `<rect class="o ga" x="16" y="40" width="64" height="46" rx="10"/>` +
    `<circle class="gk" cx="48" cy="60" r="7"/><rect class="gk" x="45" y="62" width="6" height="14" rx="2"/>`,

  network:
    `<path class="o gn" d="M48 20 L18 70 M48 20 L78 70 M18 70 H78 M48 20 V52 M48 52 L18 70 M48 52 L78 70"/>` +
    `<circle class="o ga" cx="48" cy="20" r="11"/><circle class="o gy" cx="18" cy="70" r="11"/>` +
    `<circle class="o gl" cx="78" cy="70" r="11"/><circle class="o gw" cx="48" cy="52" r="8"/>`,

  fire:
    `<path class="o gor" d="M48 6 C54 24 76 34 76 58 C76 77 63 90 48 90 C33 90 20 77 20 58 C20 46 28 40 32 28 C37 37 40 40 44 42 C43 30 44 18 48 6Z"/>` +
    `<path class="o gy" d="M48 48 C52 58 62 62 62 72 C62 80 56 86 48 86 C40 86 34 80 34 72 C34 64 42 60 48 48Z"/>`,

  thermometer:
    `<path class="o gn" d="M64 22 H74 M64 34 H74 M64 46 H74"/>` +
    `<rect class="o gw" x="36" y="8" width="22" height="58" rx="11"/>` +
    `<circle class="o gr" cx="47" cy="72" r="15"/>` +
    `<rect class="gr" x="43" y="28" width="8" height="46" rx="4"/>`,

  syringe:
    `<g transform="rotate(-45 48 48)">` +
    `<path class="o gn" d="M48 4 V16"/><path class="o gn" d="M38 4 H58"/>` +
    `<rect class="o gw" x="36" y="16" width="24" height="44" rx="5"/>` +
    `<rect class="ga" x="39" y="36" width="18" height="21" rx="3"/>` +
    `<path class="ot gn" d="M36 28 H44 M36 36 H44 M36 44 H44"/>` +
    `<rect class="o gl" x="30" y="60" width="36" height="7" rx="3"/>` +
    `<path class="o gn" d="M48 67 V90"/></g>`,

  house:
    `<path class="o gw" d="M14 48 L48 20 L82 48 V84 H14Z"/>` +
    `<path class="o ga" d="M6 50 L48 12 L90 50Z"/>` +
    `<rect class="o gy" x="40" y="58" width="16" height="26" rx="3"/>` +
    `<rect class="o gl" x="20" y="56" width="14" height="14" rx="2"/><rect class="o gl" x="62" y="56" width="14" height="14" rx="2"/>`,

  bridge:
    `<path class="o gn" d="M6 54 H90"/>` +
    `<rect class="o ga" x="4" y="50" width="88" height="9" rx="3"/>` +
    `<path class="o gn" d="M12 54 C24 24 72 24 84 54"/>` +
    `<path class="ot gn" d="M28 36 V52 M40 30 V52 M48 28 V52 M56 30 V52 M68 36 V52"/>` +
    `<rect class="o gl" x="14" y="59" width="10" height="26" rx="2"/><rect class="o gl" x="72" y="59" width="10" height="26" rx="2"/>`,

  cube:
    `<path class="o gl" d="M48 8 L86 28 L48 48 L10 28Z"/>` +
    `<path class="o ga" d="M10 28 L48 48 V90 L10 68Z"/>` +
    `<path class="o gd" d="M86 28 L48 48 V90 L86 68Z"/>`,

  cloud:
    `<path class="o gw" d="M26 74 C10 74 6 52 24 48 C24 28 50 20 62 36 C80 32 92 52 80 66 C78 72 74 74 70 74Z"/>` +
    `<path class="o gn" d="M30 84 L26 92 M48 84 L44 92 M66 84 L62 92" style="stroke:#3E8BFF"/>` +
    `<circle class="gl" cx="40" cy="52" r="6" opacity=".5"/>`,

  virus:
    `<g class="o gn"><path d="M48 6 V22 M48 74 V90 M6 48 H22 M74 48 H90 M18 18 L30 30 M66 66 L78 78 M78 18 L66 30 M30 66 L18 78"/></g>` +
    `<circle class="o gy" cx="48" cy="6" r="4"/><circle class="o gy" cx="48" cy="90" r="4"/>` +
    `<circle class="o gy" cx="6" cy="48" r="4"/><circle class="o gy" cx="90" cy="48" r="4"/>` +
    `<circle class="o gy" cx="18" cy="18" r="4"/><circle class="o gy" cx="78" cy="78" r="4"/>` +
    `<circle class="o gy" cx="78" cy="18" r="4"/><circle class="o gy" cx="18" cy="78" r="4"/>` +
    `<circle class="o ga" cx="48" cy="48" r="26"/>` +
    `<circle class="gl" cx="40" cy="42" r="5"/><circle class="gl" cx="56" cy="54" r="4"/><circle class="gl" cx="52" cy="38" r="3"/>`,

  columns:
    `<path class="o ga" d="M8 34 L48 10 L88 34Z"/>` +
    `<rect class="o gw" x="16" y="38" width="12" height="36" rx="2"/><rect class="o gw" x="42" y="38" width="12" height="36" rx="2"/>` +
    `<rect class="o gw" x="68" y="38" width="12" height="36" rx="2"/>` +
    `<rect class="o gl" x="8" y="76" width="80" height="10" rx="3"/>`,

  pencil:
    `<g transform="rotate(-45 48 48)">` +
    `<rect class="o gr" x="36" y="2" width="24" height="12" rx="4"/>` +
    `<rect class="o gy" x="36" y="14" width="24" height="52"/>` +
    `<path class="ot gn" d="M48 14 V66"/>` +
    `<path class="o gw" d="M36 66 H60 L48 90Z"/><path class="gk" d="M44 80 H52 L48 90Z"/></g>`,

  chart:
    `<path class="o gn" d="M12 12 V84 H88"/>` +
    `<rect class="o ga" x="22" y="48" width="14" height="36" rx="3"/>` +
    `<rect class="o gy" x="42" y="28" width="14" height="56" rx="3"/>` +
    `<rect class="o gl" x="62" y="40" width="14" height="44" rx="3"/>`,

  bulb:
    `<path class="o gy" d="M48 6 C28 6 18 22 20 38 C21 48 30 54 32 64 H64 C66 54 75 48 76 38 C78 22 68 6 48 6Z"/>` +
    `<rect class="o gw" x="33" y="64" width="30" height="8" rx="3"/><rect class="o ga" x="37" y="72" width="22" height="9" rx="4"/>` +
    `<path class="ow" d="M38 30 C40 24 44 21 50 20 M42 56 L42 42 L54 42 L54 56"/>`,

  newspaper:
    `<rect class="o gw" x="10" y="14" width="64" height="68" rx="6"/>` +
    `<path class="o gw" d="M74 30 H86 V76 A8 8 0 0 1 78 82 H74Z"/>` +
    `<rect class="o ga" x="18" y="22" width="48" height="16" rx="3"/>` +
    `<path class="ot gn" d="M18 48 H66 M18 58 H66 M18 68 H48"/>`,

  wheat:
    `<path class="o gn" d="M48 90 V30"/>` +
    `<path class="o gy" d="M48 30 C40 24 40 14 48 6 C56 14 56 24 48 30Z"/>` +
    `<path class="o gy" d="M48 44 C38 44 32 36 34 28 C44 28 50 36 48 44Z"/><path class="o gy" d="M48 44 C58 44 64 36 62 28 C52 28 46 36 48 44Z"/>` +
    `<path class="o gy" d="M48 60 C38 60 32 52 34 44 C44 44 50 52 48 60Z"/><path class="o gy" d="M48 60 C58 60 64 52 62 44 C52 44 46 52 48 60Z"/>` +
    `<path class="o ga" d="M20 84 C26 74 36 70 48 72 M76 84 C70 74 60 70 48 72"/>`,

  recycle:
    `<path class="sk" d="M48 14 A34 34 0 0 1 80 36" fill="none"/><path class="sa" d="M48 14 A34 34 0 0 1 80 36" fill="none"/>` +
    `<path class="sk" d="M78 62 A34 34 0 0 1 28 74" fill="none"/><path class="sa" d="M78 62 A34 34 0 0 1 28 74" fill="none"/>` +
    `<path class="sk" d="M20 52 A34 34 0 0 1 36 18" fill="none"/><path class="sa" d="M20 52 A34 34 0 0 1 36 18" fill="none"/>` +
    `<path class="o gy" d="M72 22 L88 30 L74 44Z"/><path class="o gy" d="M24 82 L10 66 L34 66Z"/><path class="o gy" d="M28 6 L44 12 L32 28Z"/>`,

  wifi:
    `<path class="sk" d="M10 38 C32 18 64 18 86 38" fill="none"/><path class="sa" d="M10 38 C32 18 64 18 86 38" fill="none"/>` +
    `<path class="sk" d="M22 52 C38 38 58 38 74 52" fill="none"/><path class="sa" d="M22 52 C38 38 58 38 74 52" fill="none"/>` +
    `<path class="sk" d="M34 66 C42 58 54 58 62 66" fill="none"/><path class="sa" d="M34 66 C42 58 54 58 62 66" fill="none"/>` +
    `<circle class="o gy" cx="48" cy="78" r="7"/>`,

  mic:
    `<rect class="o ga" x="32" y="6" width="32" height="50" rx="16"/>` +
    `<path class="ot gn" d="M32 24 H44 M32 34 H44 M52 24 H64 M52 34 H64"/>` +
    `<path class="o gn" d="M20 42 C20 62 30 72 48 72 C66 72 76 62 76 42 M48 72 V88 M34 88 H62"/>`,

  medal:
    `<path class="o gr" d="M26 6 H44 L56 36 H38Z"/><path class="o gb" d="M70 6 H52 L40 36 H58Z"/>` +
    `<circle class="o gy" cx="48" cy="62" r="26"/><circle class="o gn" cx="48" cy="62" r="18"/>` +
    `<path class="o ga" d="M48 50 L52 58 L61 59 L55 65 L56 74 L48 70 L40 74 L41 65 L35 59 L44 58Z"/>`,

  map:
    `<path class="o gw" d="M8 20 L34 12 L62 22 L88 14 V76 L62 84 L34 74 L8 82Z"/>` +
    `<path class="o gn" d="M34 12 V74 M62 22 V84"/>` +
    `<path class="o gr" d="M74 30 C74 40 66 44 66 50 A8 8 0 0 0 82 50 C82 44 74 40 74 30Z" transform="translate(-4 -8)"/>` +
    `<circle class="o gw" cx="70" cy="40" r="3" transform="translate(0 0)"/>`,

  scissors:
    `<path class="o gn" d="M20 18 L74 66 M76 18 L22 66"/>` +
    `<circle class="o ga" cx="22" cy="74" r="12"/><circle class="o ga" cx="74" cy="74" r="12"/>`,
};
