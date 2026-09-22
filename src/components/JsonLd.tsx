/**
 * Insere un bloc de donnees structurees. Le contenu provient exclusivement de nos propres
 * constructeurs (src/lib/seo.ts), jamais d'une saisie exterieure.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
