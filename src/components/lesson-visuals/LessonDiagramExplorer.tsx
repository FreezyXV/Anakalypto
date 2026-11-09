"use client";

import { useId, useState, type ReactNode } from "react";
import type { LessonDiagramStep } from "@/lib/lesson-visuals/registry";
import styles from "./LessonDiagram.module.css";

/** No persistence, timer or animation. Keyboard and touch use the same native buttons. */
export function LessonDiagramExplorer({
  frames,
  steps,
}: {
  frames: ReactNode[];
  steps: readonly [LessonDiagramStep, LessonDiagramStep, LessonDiagramStep];
}) {
  const [current, setCurrent] = useState(0);
  const pane = useId();
  const selected = steps[current] ?? steps[0];
  return (
    <>
      <div className={styles.steps} role="group" aria-label="États du schéma">
        {steps.map((step, index) => (
          <button
            type="button"
            key={step.label}
            aria-pressed={current === index}
            aria-controls={pane}
            onClick={() => setCurrent(index)}
          >
            <span aria-hidden="true">{index + 1}</span>
            {step.label}
          </button>
        ))}
      </div>
      <div className={styles.explorer}>
        <div id={pane}>
          {frames.map((frame, index) => (
            <div key={index} hidden={current !== index}>
              {frame}
            </div>
          ))}
        </div>
        <div className={styles.explanation} aria-live="polite" aria-atomic="true">
          <p className="label">
            À observer · {current + 1} / {steps.length}
          </p>
          <h3>{selected.label}</h3>
          <p>{selected.detail}</p>
        </div>
      </div>
    </>
  );
}
