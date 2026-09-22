import Link from "next/link";

import { SearchBox } from "@/components/SearchBox";

export default function NotFound() {
  return (
    <>
      <p className="label">Erreur 404</p>
      <h1 className="mt-3 text-3xl leading-tight font-semibold">Cette page n&apos;existe pas</h1>
      <p className="mt-4 max-w-reading leading-relaxed text-ink-muted">
        L&apos;adresse demandée ne correspond à aucun article ni à aucune catégorie. Elle a pu être
        modifiée, ou l&apos;article n&apos;est pas encore publié.
      </p>

      <div className="mt-8 max-w-reading">
        <SearchBox size="large" />
      </div>

      <p className="mt-6">
        <Link href="/categories" className="text-prussian">
          Parcourir l&apos;arborescence des catégories
        </Link>
      </p>
    </>
  );
}
