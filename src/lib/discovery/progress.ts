"use client";

import { useSyncExternalStore } from "react";
import { z } from "zod";

const reviewSchema = z.object({
  step: z.number().int().nonnegative(),
  choices: z.record(z.string(), z.string()),
  firstCorrect: z.record(z.string(), z.boolean()),
  completed: z.boolean(),
  passed: z.boolean().optional(),
});
const sessionSchema = z.object({
  version: z.number().int().positive(),
  step: z.number().int().nonnegative(),
  choices: z.record(z.string(), z.string()),
  firstCorrect: z.record(z.string(), z.boolean()),
  values: z.record(z.string(), z.number().min(0).max(100)),
  status: z.enum(["discovered", "understood", "review"]),
  completed: z.boolean(),
  updatedAt: z.iso.datetime(),
  reviewAt: z.iso.datetime().optional(),
  review: reviewSchema.optional(),
  reviewedAt: z.iso.datetime().optional(),
  reviewStreak: z.number().int().min(0).max(4).optional(),
});
export type DiscoverySession = z.infer<typeof sessionSchema>;
export type DiscoveryReviewSession = z.infer<typeof reviewSchema>;
export type Progress = Record<string, DiscoverySession>;
const KEY = "anakalypto-discovery-v1";
const EMPTY: Progress = {};
let memory: Progress = EMPTY;
let rawCache: string | null | undefined;
let snapshot: Progress = EMPTY;
const listeners = new Set<() => void>();

/** Recover valid entries independently: one damaged lesson must not erase the others. */
export function parseDiscoveryProgress(raw: string | null): Progress {
  let entries: unknown;
  try {
    entries = raw ? JSON.parse(raw) : {};
  } catch {
    return EMPTY;
  }
  if (!entries || typeof entries !== "object" || Array.isArray(entries)) return EMPTY;
  return Object.fromEntries(
    Object.entries(entries).flatMap(([slug, entry]) => {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return [];
      const parsed = sessionSchema.safeParse(entry);
      return parsed.success ? [[slug, parsed.data]] : [];
    }),
  );
}

function read(): Progress {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw === rawCache) return snapshot;
    rawCache = raw;
    snapshot = parseDiscoveryProgress(raw);
    memory = snapshot;
    return snapshot;
  } catch {
    return memory;
  }
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}
export function useDiscoveryProgress() {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}
export function saveSession(slug: string, session: DiscoverySession) {
  const next = { ...read(), [slug]: session };
  const raw = JSON.stringify(next);
  let persisted = true;
  try {
    window.localStorage.setItem(KEY, raw);
    rawCache = raw;
  } catch {
    persisted = false;
  }
  memory = snapshot = next;
  for (const listener of listeners) listener();
  return persisted;
}
export function freshSession(version: number): DiscoverySession {
  return {
    version,
    step: 0,
    choices: {},
    firstCorrect: {},
    values: {},
    status: "discovered",
    completed: false,
    updatedAt: new Date().toISOString(),
  };
}

/** Completion records success at the first try; an error schedules another attempt. */
export function completeSession(
  session: DiscoverySession,
  checkpointIds: string[],
  now = new Date(),
): DiscoverySession {
  const understood =
    checkpointIds.length > 0 && checkpointIds.every((id) => session.firstCorrect[id] === true);
  return {
    ...session,
    completed: true,
    status: understood ? "understood" : "review",
    updatedAt: now.toISOString(),
    reviewAt: new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString(),
  };
}
