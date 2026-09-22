import Link from "next/link";

import { SearchBox } from "./SearchBox";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "/categories", label: "Catégories" },
  { href: "/recherche", label: "Recherche" },
  { href: "/a-propos", label: "À propos" },
];

export function SiteHeader() {
  return (
    <header className="rule-bottom">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 sm:px-6">
        <Link href="/" className="wordmark text-xl no-underline">
          Anakalypto
        </Link>

        <nav aria-label="Navigation principale" className="label flex items-center gap-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden w-56 md:block">
            <SearchBox />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
