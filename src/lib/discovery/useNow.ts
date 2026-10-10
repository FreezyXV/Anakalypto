"use client";

import { useEffect, useState } from "react";

/** Start from the server snapshot for hydration, then use the current device clock. */
export function useDiscoveryNow(initial: string) {
  const [now, setNow] = useState(initial);
  useEffect(() => {
    const refresh = () => setNow(new Date().toISOString());
    const onVisible = () => {
      if (document.visibilityState === "visible") refresh();
    };
    // Defer the first update; subsequent updates handle tabs left open overnight.
    const start = window.setTimeout(refresh, 0);
    const timer = window.setInterval(onVisible, 60_000);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);
  return now;
}
