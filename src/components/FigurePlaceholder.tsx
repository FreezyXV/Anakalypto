/**
 * Cadre neutre marquant l'emplacement d'une illustration a produire.
 *
 * Le balisage est volontairement identique a celui genere par le rendu Markdown pour les
 * marqueurs du corpus: les deux partagent la classe `figure-placeholder` et donc la meme
 * mise en forme. L'attribut alt sera renseigne en meme temps que l'image.
 */
export function FigurePlaceholder({ caption }: { caption: string }) {
  return (
    <figure className="figure-placeholder" role="group">
      <div className="figure-placeholder__frame" aria-hidden="true" />
      <figcaption className="figure-placeholder__caption">
        Illustration à venir : {caption}
      </figcaption>
    </figure>
  );
}
