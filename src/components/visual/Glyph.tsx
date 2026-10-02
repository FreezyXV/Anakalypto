import type { CSSProperties } from "react";

import type { GlyphName } from "@/lib/visual";

import { GLYPHS } from "./glyphs";

/**
 * Pictogramme du sujet. Les couleurs viennent des variables `--g-a`, `--g-l` et `--g-d`
 * posees par le parent, qui donne ainsi au dessin la couleur de son domaine.
 */
export function Glyph({
  name,
  className,
  style,
}: {
  name: GlyphName;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={`glyph ${className ?? ""}`}
      viewBox="0 0 96 96"
      aria-hidden="true"
      focusable="false"
      style={style}
    >
      <g dangerouslySetInnerHTML={{ __html: GLYPHS[name] }} />
    </svg>
  );
}
