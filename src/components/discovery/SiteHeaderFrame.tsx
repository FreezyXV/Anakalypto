"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/** Keep the SVG brand and navigation server-rendered; only the route switch is interactive. */
export function SiteHeaderFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const discovering = pathname === "/decouvrir" || pathname.startsWith("/decouvrir/");
  return (
    <header
      data-discovery={discovering}
      className="sticky top-0 z-40 border-b-[2.5px] border-line bg-paper/95 backdrop-blur-sm"
    >
      {children}
    </header>
  );
}
