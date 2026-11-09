import { lessonPosterFrame, type LessonDiagramSpec } from "@/lib/lesson-visuals/registry";
import { LessonDiagramCanvas } from "./LessonDiagramCanvas";
import { LessonDiagramExplorer } from "./LessonDiagramExplorer";
import styles from "./LessonDiagram.module.css";

export function LessonDiagramPoster({ spec }: { spec: LessonDiagramSpec }) {
  return (
    <div className={`sticker p-4 ${styles.poster}`}>
      <p className="label">Une idée en image</p>
      <p className={styles.posterTitle}>{spec.title}</p>
      <LessonDiagramCanvas spec={spec} step={lessonPosterFrame(spec)} />
      <a href="#schema-lecon" className="btn btn--ghost mt-3">
        Explorer le schéma →
      </a>
    </div>
  );
}

export function LessonVisual({ spec }: { spec: LessonDiagramSpec }) {
  return (
    <section
      id="schema-lecon"
      aria-labelledby="titre-schema-lecon"
      className={`${styles.section} sticker mt-12 scroll-mt-28`}
    >
      <header>
        <p className="label">Comprendre en images</p>
        <h2 id="titre-schema-lecon" className="display">
          {spec.title}
        </h2>
        <p>Choisis une vue et suis ce qui change.</p>
      </header>
      <LessonDiagramExplorer
        steps={spec.steps}
        frames={spec.steps.map((_, step) => (
          <LessonDiagramCanvas key={step} spec={spec} step={step} />
        ))}
      />
      <details className={styles.notes}>
        <summary>Ce que montre le schéma</summary>
        <p>{spec.limit}</p>
        <p>
          Principe expliqué :{" "}
          <a href={spec.source.url} target="_blank" rel="noopener noreferrer">
            {spec.source.title}
          </a>
          .
        </p>
      </details>
    </section>
  );
}
