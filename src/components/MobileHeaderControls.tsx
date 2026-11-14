"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { SearchBox } from "./SearchBox";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./SiteHeader.module.css";

type NavItem = { href: string; label: string; prefetch: boolean };
type Panel = "search" | "menu" | null;

/** A new route starts with both disclosures closed, including client-side navigation. */
export function MobileHeaderControls({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();
  return <HeaderDisclosures key={pathname} pathname={pathname} items={items} />;
}

function HeaderDisclosures({ pathname, items }: { pathname: string; items: readonly NavItem[] }) {
  const [panel, setPanel] = useState<Panel>(null);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const searchButton = useRef<HTMLButtonElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!panel) return;
    function onPointerDown(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setPanel(null);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      // Let the combobox close its suggestions first; the next Escape closes the panel.
      if (
        event.target instanceof HTMLElement &&
        event.target.getAttribute("role") === "combobox" &&
        event.target.getAttribute("aria-expanded") === "true"
      )
        return;
      event.preventDefault();
      setPanel(null);
      (panel === "search" ? searchButton : menuButton).current?.focus();
    }
    const desktop = window.matchMedia("(min-width: 1024px)");
    function onBreakpoint(event: MediaQueryListEvent) {
      if (event.matches) setPanel(null);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown, true);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown, true);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [panel]);

  function toggle(next: Exclude<Panel, null>) {
    setPanel((current) => (current === next ? null : next));
  }

  return (
    <div
      ref={root}
      className={styles.controls}
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget))
          setPanel(null);
      }}
    >
      <button
        ref={searchButton}
        type="button"
        className={styles.iconButton}
        aria-label={panel === "search" ? "Fermer la recherche" : "Ouvrir la recherche"}
        aria-expanded={panel === "search"}
        aria-controls={panel === "search" ? `${id}-search` : undefined}
        onClick={() => toggle("search")}
      >
        <HeaderIcon kind={panel === "search" ? "close" : "search"} />
      </button>
      <button
        ref={menuButton}
        type="button"
        className={styles.iconButton}
        aria-label={panel === "menu" ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={panel === "menu"}
        aria-controls={panel === "menu" ? `${id}-menu` : undefined}
        onClick={() => toggle("menu")}
      >
        <HeaderIcon kind={panel === "menu" ? "close" : "menu"} />
      </button>

      {panel === "search" && (
        <section
          id={`${id}-search`}
          aria-label="Recherche mobile"
          className={`${styles.panel} ${styles.searchPanel}`}
        >
          <h2 className={styles.panelTitle}>Rechercher une leçon</h2>
          <SearchBox autoFocus />
        </section>
      )}
      {panel === "menu" && (
        <section id={`${id}-menu`} aria-label="Menu du site" className={styles.panel}>
          <nav aria-label="Navigation principale" className={styles.mobileNav}>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={item.prefetch}
                aria-current={
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "page"
                    : undefined
                }
                className={styles.mobileLink}
                onClick={() => {
                  setPanel(null);
                  menuButton.current?.focus();
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.themeRow}>
            <span>Thème d’affichage</span>
            <ThemeToggle />
          </div>
        </section>
      )}
    </div>
  );
}

function HeaderIcon({ kind }: { kind: "search" | "menu" | "close" }) {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {kind === "search" ? (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </>
      ) : (
        <path d={kind === "menu" ? "M4 6h16M4 12h16M4 18h16" : "m6 6 12 12M18 6 6 18"} />
      )}
    </svg>
  );
}
