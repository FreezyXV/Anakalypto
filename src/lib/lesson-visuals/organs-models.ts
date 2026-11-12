/** Authored teaching example, never a patient's measured sleep data. */
export type SleepStage = "Wake" | "REM" | "N1" | "N2" | "N3";
export const SLEEP_EXAMPLE: { stage: SleepStage; start: number; end: number }[] = [
  { stage: "Wake", start: 0, end: 0.025 },
  { stage: "N1", start: 0.025, end: 0.06 },
  { stage: "N2", start: 0.06, end: 0.11 },
  { stage: "N3", start: 0.11, end: 0.19 },
  { stage: "N2", start: 0.19, end: 0.23 },
  { stage: "REM", start: 0.23, end: 0.27 },
  { stage: "N2", start: 0.27, end: 0.33 },
  { stage: "N3", start: 0.33, end: 0.39 },
  { stage: "N2", start: 0.39, end: 0.45 },
  { stage: "REM", start: 0.45, end: 0.52 },
  { stage: "Wake", start: 0.52, end: 0.535 },
  { stage: "N2", start: 0.535, end: 0.6 },
  { stage: "N3", start: 0.6, end: 0.625 },
  { stage: "N2", start: 0.625, end: 0.67 },
  { stage: "REM", start: 0.67, end: 0.78 },
  { stage: "N2", start: 0.78, end: 0.84 },
  { stage: "REM", start: 0.84, end: 0.98 },
  { stage: "Wake", start: 0.98, end: 1 },
];
export const SLEEP_LEVEL: Record<SleepStage, number> = {
  Wake: 61,
  REM: 89,
  N1: 116,
  N2: 146,
  N3: 176,
};
