/** Paint servers are scoped to one SVG so comparisons never share mutable definitions. */
export function DiagramSurface({ id, tint }: { id: string; tint: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-surface`} x2="0.8" y2="1">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor={tint} />
        </linearGradient>
        <linearGradient id={`${id}-metal`} x2="0.25" y2="1">
          <stop stopColor="#ffffff" />
          <stop offset="0.48" stopColor="#e6edf4" />
          <stop offset="1" stopColor="#afbdcf" />
        </linearGradient>
        <radialGradient id={`${id}-gold`} cx="0.35" cy="0.28" r="0.8">
          <stop stopColor="#fff4ba" />
          <stop offset="1" stopColor="#edb43d" />
        </radialGradient>
        <linearGradient id={`${id}-water`} x2="0" y2="1">
          <stop stopColor="#dcf4ff" />
          <stop offset="1" stopColor="#9acbe8" />
        </linearGradient>
        <linearGradient id={`${id}-leaf`} x2="0.5" y2="1">
          <stop stopColor="#eff9d8" />
          <stop offset="1" stopColor="#b9dfb1" />
        </linearGradient>
        <linearGradient id={`${id}-cloud`} x2="0" y2="1">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#dce8f3" />
        </linearGradient>
        <linearGradient id={`${id}-dough`} x2="0.2" y2="1">
          <stop stopColor="#fff4d7" />
          <stop offset="1" stopColor="#e3c49a" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="358" height="208" rx="20" fill={`url(#${id}-surface)`} />
      <rect x="1" y="1" width="358" height="208" rx="20" fill="none" stroke="#dce4ee" />
    </>
  );
}
