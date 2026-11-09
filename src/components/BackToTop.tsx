"use client";

import { useEffect, useState } from "react";

/** Hauteur de defilement, en pixels, au-dela de laquelle le bouton apparait. */
const REVEAL_AFTER = 900;

/**
 * Retour en haut de page.
 *
 * Sur mobile, reste dans le flux après le pied de page pour dégager les dessins.
 * Sur ordinateur, se pose en bas à droite. Il n'apparaît qu'après un long défilement.
 * Le defilement respecte `prefers-reduced-motion` via la regle globale qui neutralise
 * `scroll-behavior`.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > REVEAL_AFTER);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="btn btn--ghost mx-auto mb-6 flex w-fit px-3 py-2 text-sm md:fixed md:right-6 md:bottom-6 md:z-30 md:m-0"
    >
      <span aria-hidden="true" className="mr-1.5">
        &uarr;
      </span>
      Haut de page
    </button>
  );
}
