"use client";

import { useRef, useState } from "react";

import type { Illustration } from "@/lib/illustrations";

/**
 * Illustration principale d'un article, avec ses eventuelles images suivantes.
 *
 * L'image s'affiche en entier, quelle que soit sa forme: une infographie verticale n'est pas
 * recadree. Un clic l'ouvre en grand dans une boite de dialogue native, qui gere seule le
 * focus, la touche Echap et le fond.
 */
export function ArticlePoster({
  images,
  title,
}: {
  images: readonly Illustration[];
  title: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);

  const main = images[current] ?? images[0];
  if (!main) return null;

  const alt = `Illustration de la leçon : ${title}`;

  return (
    <figure className="m-0">
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="sticker block w-full cursor-zoom-in overflow-hidden p-0"
        aria-label="Agrandir l'illustration"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- images deja optimisees par le script */}
        <img
          src={main.src}
          alt={alt}
          width={main.width ?? undefined}
          height={main.height ?? undefined}
          className="mx-auto block h-auto max-h-[44rem] w-full object-contain"
        />
      </button>

      {images.length > 1 && (
        <ul className="mt-4 flex flex-wrap gap-3">
          {images.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Voir l'illustration ${index + 1} sur ${images.length}`}
                aria-current={index === current}
                className={`sticker block h-16 w-16 overflow-hidden p-0 ${
                  index === current ? "outline-[3px] outline-offset-2 outline-accent" : ""
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- miniature locale */}
                <img src={image.src} alt="" className="h-full w-full object-cover object-top" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialog}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current?.close();
        }}
        className="m-auto max-h-[94vh] w-[min(96vw,60rem)] rounded-2xl border-[3px] border-line bg-surface p-0 backdrop:bg-black/70"
        aria-label={alt}
      >
        <form method="dialog" className="flex justify-end p-2">
          <button className="btn btn--ghost" aria-label="Fermer l'illustration">
            Fermer
          </button>
        </form>
        {/* eslint-disable-next-line @next/next/no-img-element -- image en grand */}
        <img
          src={main.src}
          alt={alt}
          className="mx-auto block max-h-[80vh] w-auto max-w-full object-contain p-2 pt-0"
        />
      </dialog>
    </figure>
  );
}
