/**
 * Espaces insecables avant la ponctuation double, comme l'exige la typographie francaise.
 *
 * Sans elles, un "?" ou un ":" peut se retrouver seul en debut de ligne, ce qui arrive
 * souvent sur un ecran etroit. La regle usuelle distingue deux espaces: une espace fine
 * avant "? ! ;" et a l'interieur des guillemets, une espace mot avant ":".
 */

const THIN = " ";
const NBSP = " ";

export function frenchSpacing(value: string): string {
  return value
    .replace(/ +([?!;])/g, `${THIN}$1`)
    .replace(/ +:/g, `${NBSP}:`)
    .replace(/« +/g, `«${THIN}`)
    .replace(/ +»/g, `${THIN}»`);
}
