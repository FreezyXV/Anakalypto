/** Ignore only sub-nanopixel decimal serialization differences between JS math libraries. */
export function canonicalSvg(markup: string) {
  return markup.replace(/[-+]?(?:\d+\.\d+|\.\d+)(?:e[-+]?\d+)?/gi, (value) =>
    Number(Number(value).toFixed(10)).toString(),
  );
}
