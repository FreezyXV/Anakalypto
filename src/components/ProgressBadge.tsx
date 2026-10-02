"use client";

import { useSyncExternalStore } from "react";

/**
 * Suivi des lecons terminees, garde dans le navigateur: aucune donnee personnelle ne quitte
 * l'appareil. Une lecon est marquee lue quand on termine son quiz ou qu'on atteint sa fin.
 */
const STORAGE_KEY = "anakalypto-lus";

const EMPTY: ReadonlySet<string> = new Set();
const listeners = new Set<() => void>();

let cache: { raw: string | null; set: ReadonlySet<string> } = { raw: null, set: EMPTY };

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Ensemble des chemins lus. La meme reference est rendue tant que le stockage ne change pas. */
function readSet(): ReadonlySet<string> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === cache.raw) return cache.set;
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    const paths = Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string")
      : [];
    cache = { raw, set: new Set(paths) };
    return cache.set;
  } catch {
    return EMPTY;
  }
}

function serverSet(): ReadonlySet<string> {
  return EMPTY;
}

/** Marque une lecon comme terminee. Sans effet si elle l'est deja. */
export function markRead(path: string): void {
  const current = readSet();
  if (current.has(path)) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, path]));
  } catch {
    // Stockage indisponible: la lecon reste lisible, seule la coche n'est pas gardee.
    return;
  }
  for (const listener of listeners) listener();
}

/** Nombre de lecons terminees parmi un ensemble de chemins. */
export function useReadCount(paths: readonly string[]): number {
  const read = useSyncExternalStore(subscribe, readSet, serverSet);
  return paths.reduce((total, path) => (read.has(path) ? total + 1 : total), 0);
}

/** Coche posee sur la tuile d'une lecon deja terminee. */
export function ProgressBadge({ path }: { path: string }) {
  const read = useSyncExternalStore(subscribe, readSet, serverSet);
  if (!read.has(path.replace(/^\//, ""))) return null;

  return (
    <span
      className="disc absolute top-3 right-3 h-9 w-9 bg-[var(--pop-green)]"
      title="Leçon terminée"
      role="img"
      aria-label="Leçon terminée"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M5 12.5l4.5 4.5L19 7"
          fill="none"
          stroke="#fff"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
