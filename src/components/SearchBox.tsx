"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import type { Suggestion } from "@/app/api/suggestions/route";

type SearchBoxProps = {
  defaultValue?: string;
  /** Variante d'accueil: champ plus grand, libelle visible. */
  size?: "compact" | "large";
  autoFocus?: boolean;
  /** Ecoute la barre oblique et Ctrl/Cmd+K pour donner le focus au champ. */
  shortcut?: boolean;
};

/** Delai d'inactivite avant d'interroger le serveur, en millisecondes. */
const DEBOUNCE_MS = 180;

const MIN_QUERY_LENGTH = 2;

/**
 * Formulaire de recherche, avec suggestions au fil de la frappe.
 *
 * Le formulaire reste un GET vers /recherche et fonctionne donc sans JavaScript, ce qui
 * compte pour une encyclopedie consultee dans des conditions reseau variables. Les
 * suggestions sont un enrichissement: si la requete echoue, le champ se comporte comme
 * un champ ordinaire.
 *
 * Le balisage suit le motif ARIA `combobox`: le champ porte `aria-expanded` et
 * `aria-activedescendant`, la liste porte `role="listbox"`, chaque entree `role="option"`.
 */
export function SearchBox({
  defaultValue = "",
  size = "compact",
  autoFocus = false,
  shortcut = false,
}: SearchBoxProps) {
  const id = useId();
  const listId = `${id}-suggestions`;
  const large = size === "large";
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  /*
   * La reponse est conservee avec la saisie qui l'a produite. Les suggestions affichees
   * s'en deduisent: tant que la reponse ne correspond pas a la saisie courante, la liste
   * est vide. Sans ce couplage, effacer un caractere laisserait brievement a l'ecran des
   * suggestions qui ne repondent plus a ce qui est tape.
   */
  const [answer, setAnswer] = useState<{ query: string; items: Suggestion[] }>({
    query: "",
    items: [],
  });

  const trimmed = value.trim();
  const suggestions = answer.query === trimmed ? answer.items : [];

  const close = useCallback(() => {
    setOpen(false);
    setActive(-1);
  }, []);

  // Interrogation differee du serveur. Chaque frappe annule la requete precedente, ce qui
  // evite qu'une reponse lente n'ecrase une reponse plus recente.
  useEffect(() => {
    if (trimmed.length < MIN_QUERY_LENGTH) return;

    const controller = new AbortController();
    const timer = setTimeout(() => {
      fetch(`/api/suggestions?q=${encodeURIComponent(trimmed)}`, { signal: controller.signal })
        .then((response) => (response.ok ? response.json() : { suggestions: [] }))
        .then((data: { suggestions: Suggestion[] }) => {
          setAnswer({ query: trimmed, items: data.suggestions });
          setActive(-1);
          if (data.suggestions.length > 0) setOpen(true);
        })
        .catch(() => {
          // Requete annulee ou reseau indisponible: le formulaire GET reste utilisable.
        });
    }, DEBOUNCE_MS);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [trimmed]);

  // Fermeture au clic hors du composant.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) close();
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, close]);

  // Raccourcis clavier: la barre oblique, convention des sites de documentation, et
  // Ctrl/Cmd+K. Ils sont ignores si la frappe vise deja un champ de saisie.
  useEffect(() => {
    if (!shortcut) return;
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const typing =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable === true;

      const isSlash = event.key === "/" && !typing && !event.metaKey && !event.ctrlKey;
      const isCommandK = event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey);
      if (!isSlash && !isCommandK) return;

      event.preventDefault();
      inputRef.current?.focus();
      inputRef.current?.select();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [shortcut]);

  const activeIndex = active < suggestions.length ? active : -1;
  const activeId = activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined;
  const expanded = open && suggestions.length > 0;

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      close();
      return;
    }

    if (!open || suggestions.length === 0) return;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActive((current) => {
        const next = current + step;
        if (next < 0) return suggestions.length - 1;
        if (next >= suggestions.length) return 0;
        return next;
      });
      return;
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      const target = suggestions[activeIndex];
      if (target) {
        event.preventDefault();
        close();
        router.push(target.href);
      }
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <form action="/recherche" method="get" role="search" className="w-full">
        <label htmlFor={id} className={large ? "label block" : "sr-only"}>
          Rechercher dans l&apos;encyclopédie
        </label>
        <div className={`flex ${large ? "mt-2" : ""}`}>
          <input
            ref={inputRef}
            id={id}
            type="search"
            name="q"
            value={value}
            autoFocus={autoFocus}
            onChange={(event) => setValue(event.target.value)}
            onFocus={() => {
              if (suggestions.length > 0) setOpen(true);
            }}
            onKeyDown={onKeyDown}
            placeholder="Un sujet, un terme, une notion"
            autoComplete="off"
            spellCheck={false}
            role="combobox"
            aria-expanded={expanded}
            aria-controls={expanded ? listId : undefined}
            aria-activedescendant={activeId}
            aria-autocomplete="list"
            className={`w-full min-w-0 border border-rule bg-surface px-3 text-ink transition-colors duration-150 placeholder:text-ink-muted hover:border-rule-strong ${
              large ? "py-3 text-lg" : "py-2 text-sm"
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

      {expanded && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Suggestions"
          className="absolute top-full right-0 left-0 z-40 mt-1 max-h-[60vh] overflow-y-auto border border-rule-strong bg-paper shadow-[0_6px_24px_-12px_rgba(0,0,0,0.35)]"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.href}
              id={`${listId}-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              className={index === activeIndex ? "bg-highlight" : undefined}
            >
              <a
                href={suggestion.href}
                onPointerEnter={() => setActive(index)}
                onClick={close}
                className="block border-b border-rule px-3 py-2 no-underline last:border-b-0"
              >
                <span className="block text-[0.95rem] leading-snug">{suggestion.title}</span>
                <span className="label mt-0.5 block">
                  {suggestion.categoryName}
                  {suggestion.approximate && " - rapprochement approximatif"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
