import Link from "next/link";
import type { Metadata } from "next";

import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { getCategoryTree, type CategoryNode } from "@/lib/queries";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: "Toutes les catégories",
  description:
    "Arborescence complète d'Anakalypto : domaines, sous-domaines et spécialités couverts par " +
    "l'encyclopédie, des sciences fondamentales aux sciences humaines.",
  path: "/categories",
});

/** Rend une branche de l'arborescence, recursivement. */
function Branch({ node }: { node: CategoryNode }) {
  return (
    <li>
      <Link
        href={`/${node.path}`}
        className="text-[0.95rem] no-underline transition-colors duration-150 hover:text-prussian"
      >
        {node.name}
      </Link>
      {node.articleCount > 0 && <span className="label ml-2">{node.articleCount}</span>}
      {node.children.length > 0 && (
        <ul className="mt-1 ml-3 space-y-1 border-l border-rule pl-3">
          {node.children.map((child) => (
            <Branch key={child.path} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default async function CategoriesPage() {
  const tree = await getCategoryTree();
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Catégories", path: "/categories" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />

      <h1 className="mt-4 text-3xl leading-tight font-semibold">Toutes les catégories</h1>
      <p className="mt-3 max-w-reading leading-relaxed text-ink-muted">
        L&apos;arborescence compte trois niveaux : un domaine, ses sous-domaines et les spécialités
        auxquelles les articles sont rattachés. Le nombre indique les articles publiés dans la
        branche.
      </p>

      <div className="mt-10 columns-1 gap-x-12 sm:columns-2 lg:columns-3">
        {tree.map((root) => (
          <section key={root.path} className="mb-8 break-inside-avoid">
            <h2 className="rule-bottom pb-1.5">
              <Link
                href={`/${root.path}`}
                className="font-sans text-sm font-semibold no-underline transition-colors duration-150 hover:text-prussian"
              >
                {root.name}
              </Link>
            </h2>
            {root.children.length > 0 && (
              <ul className="mt-2.5 space-y-1.5">
                {root.children.map((child) => (
                  <Branch key={child.path} node={child} />
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
