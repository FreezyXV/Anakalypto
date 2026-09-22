"use client";

import { useId } from "react";

type SearchBoxProps = {
  defaultValue?: string;
  /** Variante d'accueil: champ plus grand, libelle visible. */
  size?: "compact" | "large";
  autoFocus?: boolean;
};

/**
 * Formulaire de recherche. Il envoie une requete GET vers /recherche et fonctionne donc
 * sans JavaScript, ce qui compte pour une encyclopedie consultee dans des conditions
 * reseau variables.
 */
export function SearchBox({
  defaultValue = "",
  size = "compact",
  autoFocus = false,
}: SearchBoxProps) {
  const id = useId();
  const large = size === "large";

  return (
    <form action="/recherche" method="get" role="search" className="w-full">
      <label htmlFor={id} className={large ? "label block" : "sr-only"}>
        Rechercher dans l&apos;encyclopédie
      </label>
      <div className={`flex ${large ? "mt-2" : ""}`}>
        <input
          id={id}
          type="search"
          name="q"
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          placeholder="Un sujet, un terme, une notion"
          autoComplete="off"
          spellCheck={false}
          className={`w-full border border-rule bg-surface px-3 text-ink transition-colors duration-150 placeholder:text-ink-muted hover:border-rule-strong ${
            large ? "py-3 text-lg" : "py-1.5 text-sm"
          }`}
        />
        <button
          type="submit"
          className={`shrink-0 cursor-pointer border border-l-0 border-rule bg-surface px-4 font-sans font-medium text-ink transition-colors duration-150 hover:border-rule-strong hover:bg-highlight ${
            large ? "text-base" : "text-sm"
          }`}
        >
          Chercher
        </button>
      </div>
    </form>
  );
}
