import type { CSSProperties } from "react";

import { hashSeed, pickGlyph, themeFor } from "@/lib/visual";

import { GLYPHS } from "./glyphs";

/** Variables de couleur d'un domaine, a poser sur l'element qui contient les dessins. */
export function themeVars(path: string | null | undefined): CSSProperties {
  const theme = themeFor(path);
  return {
    "--t": theme.color,
    "--t-on": theme.on,
    "--g-a": theme.color,
    "--g-l": `color-mix(in srgb, ${theme.color} 38%, #ffffff)`,
    "--g-d": `color-mix(in srgb, ${theme.color} 68%, #17144a)`,
  } as CSSProperties;
}

/**
 * Couverture generee d'un sujet: a-plat de la couleur du domaine, formes douces, trame de
 * points et pictogramme pose sur une pastille. Aucune image n'est stockee: le dessin se
 * deduit du domaine (couleur) et du titre (pictogramme), et reste stable d'un chargement a
 * l'autre. Une vraie illustration deposee dans public/illustrations la remplace.
 */
export function Cover({
  title,
  path,
  className,
}: {
  title: string;
  path: string | null | undefined;
  className?: string;
}) {
  const seed = hashSeed(title);
  const glyph = pickGlyph(title, path);

  // Deux valeurs tirees de l'empreinte: elles deplacent les formes sans jamais les cacher.
  const a = (seed % 60) - 30;
  const b = ((seed >> 5) % 50) - 25;
  const tilt = ((seed >> 9) % 13) - 6;
  const discX = 215 + (((seed >> 3) % 40) - 20);

  return (
    <div className={className} style={themeVars(path)}>
      <svg className="cover" viewBox="0 0 400 250" aria-hidden="true" focusable="false">
        <rect width="400" height="250" fill="var(--t)" />
        <circle cx={70 + a} cy={210 + b / 2} r="120" fill="#fff" opacity="0.14" />
        <circle cx={360 - a} cy={30 + b} r="84" fill="#000" opacity="0.1" />
        <path
          d={`M0 ${190 + b} C 90 ${150 + a} 170 ${230 + b} 260 ${196 + a} S 380 ${150 + b} 400 ${176 + a} V250 H0Z`}
          fill="#fff"
          opacity="0.18"
        />
        {Array.from({ length: 20 }, (_, index) => (
          <circle
            key={index}
            className="cv-dot"
            cx={24 + (index % 5) * 16}
            cy={22 + Math.floor(index / 5) * 16}
            r="2.4"
          />
        ))}
        <g transform={`translate(${discX} 128) rotate(${tilt})`}>
          <circle r="86" fill="#15142b" transform="translate(0 6)" />
          <circle r="86" fill="#ffffff" stroke="#15142b" strokeWidth="5" />
          <circle r="70" fill="var(--t)" opacity="0.14" />
          <g
            className="glyph"
            transform="translate(-60 -60) scale(1.25)"
            dangerouslySetInnerHTML={{ __html: GLYPHS[glyph] }}
          />
        </g>
      </svg>
    </div>
  );
}
