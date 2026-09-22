"use client";

import { useEffect, useState } from "react";

/** Hauteur de defilement, en pixels, au-dela de laquelle le bouton apparait. */
const REVEAL_AFTER = 900;

/**
 * Retour en haut de page.
 *
 * Pose en bas a droite, hors du flux, a portee du pouce sur telephone. Il n'apparait
 * qu'une fois le defilement engage: sur une page courte, il n'a pas lieu d'etre.
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
      className="label fixed right-4 bottom-4 z-30 cursor-pointer border border-rule-strong bg-paper px-3 py-2 text-ink shadow-[0_4px_16px_-8px_rgba(0,0,0,0.4)] transition-colors duration-150 hover:bg-surface sm:right-6 sm:bottom-6"
    >
      <span aria-hidden="true" className="mr-1.5">
        &uarr;
      </span>
      Haut de page
    </button>
  );
}
