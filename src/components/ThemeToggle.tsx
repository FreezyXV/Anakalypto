"use client";

import { useSyncExternalStore } from "react";

type Theme = "system" | "light" | "dark";

const ORDER: readonly Theme[] = ["system", "light", "dark"];
const LABELS: Record<Theme, string> = { system: "Système", light: "Clair", dark: "Sombre" };
const STORAGE_KEY = "anakalypto-theme";

/**
 * Le theme vit dans localStorage, hors de React. On s'y abonne plutot que de le recopier
 * dans un etat local: l'evenement `storage` propage le changement aux autres onglets, et
 * l'emetteur local le propage dans l'onglet courant.
 */
const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function readTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : "system";
  } catch {
    // Navigation privee ou stockage refuse: la preference systeme reste applicable.
    return "system";
  }
}

/** Rendu serveur et premiere hydratation: aucune preference explicite connue. */
function serverTheme(): Theme {
  return "system";
}

function writeTheme(theme: Theme): void {
  const root = document.documentElement;
  if (theme === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);

  try {
    if (theme === "system") window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Le theme reste applique pour la session meme si le stockage est indisponible.
  }

  for (const listener of listeners) listener();
}

/** Bascule entre preference systeme, theme clair et theme sombre. */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, serverTheme);

  const cycle = () => {
    writeTheme(ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length] ?? "system");
  };

  return (
    <button
      type="button"
      onClick={cycle}
      className="label cursor-pointer border border-rule px-2 py-1 transition-colors duration-150 hover:border-rule-strong hover:text-ink"
      aria-label={`Thème : ${LABELS[theme].toLowerCase()}. Changer de thème.`}
    >
      {LABELS[theme]}
    </button>
  );
}
