"use client";

import { useId, useState } from "react";
import Link from "next/link";
import type { VisualWorkshopScene } from "@/lib/discovery/workshop";
import { workshopInitialValue, workshopStateTitle } from "@/lib/discovery/workshop";
import { DiscoveryVisual } from "./DiscoveryVisual";
import { DiscoveryInteraction } from "./DiscoveryInteraction";
import styles from "./VisualWorkshop.module.css";

type Snapshot = { title: string; visual: VisualWorkshopScene["visual"]; value: number };

/** Local exploration: no quiz answers, completion, storage or progress writes. */
export function VisualWorkshop({
  scenes,
  slug,
  objective,
  title,
}: {
  scenes: VisualWorkshopScene[];
  slug: string;
  objective: string;
  title: string;
}) {
  const headingId = useId();
  const controlsId = useId();
  const [selected, setSelected] = useState(0);
  const scene = scenes[selected]!;
  const [value, setValue] = useState(() => workshopInitialValue(scenes[0]!));
  const [comparing, setComparing] = useState(false);
  const [reference, setReference] = useState<Snapshot>(() => ({
    title: workshopStateTitle(scenes[0]!, 0),
    visual: scenes[0]!.visual,
    value: 0,
  }));
  const [announcement, setAnnouncement] = useState("");

  return (
    <section id="atelier-visuel" aria-labelledby={headingId} className={styles.workshop}>
      <header className={styles.heading}>
        <div>
          <p className="label">L’atelier visuel</p>
          <h2 id={headingId} className="display">
            {title}
          </h2>
          <p>{objective}</p>
        </div>
        <Link href={`/decouvrir/${slug}`} className="btn btn--ghost">
          Essayer les défis →
        </Link>
      </header>

      {scenes.length > 1 && (
        <fieldset className={styles.scenes}>
          <legend>Choisis une situation</legend>
          <div>
            {scenes.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected === index}
                onClick={() => {
                  setSelected(index);
                  setValue(workshopInitialValue(item));
                  setAnnouncement(
                    `Situation affichée : ${item.title}.${comparing ? " L’état mémorisé reste inchangé." : ""}`,
                  );
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <div className={styles.toolbar}>
        <button
          type="button"
          aria-pressed={comparing}
          aria-controls={controlsId}
          onClick={() => setComparing((current) => !current)}
        >
          {comparing ? "Afficher un seul état" : "Comparer deux états"}
        </button>
        {comparing && (
          <button
            type="button"
            onClick={() => {
              setReference({
                title: workshopStateTitle(scene, value),
                visual: scene.visual,
                value,
              });
              setAnnouncement(
                "L’état exploré est mémorisé à gauche. Change la commande ou la situation pour le comparer.",
              );
            }}
          >
            Mémoriser cet état
          </button>
        )}
      </div>
      <p className="sr-only" role="status" aria-atomic="true">
        {announcement}
      </p>

      <div id={controlsId} className={styles.drawings} data-comparing={comparing}>
        {comparing && (
          <div className={styles.reference}>
            <p className={styles.stateLabel}>État mémorisé</p>
            <h3>{reference.title}</h3>
            <DiscoveryVisual visual={reference.visual} value={reference.value} stateCaption />
          </div>
        )}
        <div className={styles.current}>
          <p className={styles.stateLabel}>{comparing ? "État exploré" : "À toi d’explorer"}</p>
          <h3>{workshopStateTitle(scene, value)}</h3>
          <DiscoveryVisual visual={scene.visual} value={value} stateCaption />
        </div>
      </div>

      <div className={styles.controls} key={scene.id}>
        {scene.interaction && (
          <DiscoveryInteraction
            step={{ ...scene, id: `${slug}-atelier-${scene.id}` }}
            value={value}
            onValue={setValue}
            onChoice={() => {}}
          />
        )}
        {!scene.interaction && <p>{scene.text}</p>}
        <p className={styles.note}>
          Schéma simplifié : les tailles et les durées ne sont pas à l’échelle.
          {comparing &&
            " Mémorise un état, puis modifie la commande ou choisis une autre situation."}
        </p>
      </div>
    </section>
  );
}
