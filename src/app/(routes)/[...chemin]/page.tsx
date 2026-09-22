import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { Toc } from "@/components/Toc";
import { renderMarkdown } from "@/lib/markdown";
import {
  getAllArticlePaths,
  getAllCategoryPaths,
  getArticleByPath,
  getCategoryByPath,
  type ArticlePage,
  type CategoryPage,
} from "@/lib/queries";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  formatDate,
  isoDate,
  pageMetadata,
  SITE_NAME,
} from "@/lib/seo";

export const revalidate = 3600;
export const dynamicParams = true;

type RouteParams = { chemin: string[] };
type PageProps = { params: Promise<RouteParams> };

/**
 * Une seule route resout les pages de categorie et les pages d'article.
 *
 * L'arborescence editoriale compte trois niveaux de categories et les articles se rattachent
 * au dernier: une suite de segments nommes ne pourrait pas exprimer les deux formes d'URL
 * sans ambiguite. Le chemin complet est donc resolu ici, d'abord comme categorie, puis comme
 * article rattache a la categorie formee par les segments precedents.
 */
async function resolve(
  segments: string[],
): Promise<
  { kind: "category"; data: CategoryPage } | { kind: "article"; data: ArticlePage } | null
> {
  const path = segments.join("/");

  const category = await getCategoryByPath(path);
  if (category) return { kind: "category", data: category };

  const slug = segments.at(-1);
  const parentPath = segments.slice(0, -1).join("/");
  if (!slug || parentPath.length === 0) return null;

  const article = await getArticleByPath(parentPath, slug);
  return article ? { kind: "article", data: article } : null;
}

export async function generateStaticParams(): Promise<RouteParams[]> {
  const [categories, articles] = await Promise.all([getAllCategoryPaths(), getAllArticlePaths()]);
  return [
    ...categories.map((path) => ({ chemin: path.split("/") })),
    ...articles.map((article) => ({ chemin: article.path.split("/") })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { chemin } = await params;
  const resolved = await resolve(chemin);
  if (!resolved) return { title: "Page introuvable" };

  if (resolved.kind === "category") {
    const { name, description, path } = resolved.data;
    return pageMetadata({
      title: name,
      description: description ?? `Articles d'Anakalypto classés dans la catégorie ${name}.`,
      path: `/${path}`,
    });
  }

  const article = resolved.data;
  return pageMetadata({
    title: article.title,
    description: article.summary,
    path: `/${article.path}`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

function crumbsFor(
  ancestors: ReadonlyArray<{ name: string; path: string }>,
  current: { name: string; path: string },
): Crumb[] {
  return [
    { name: "Accueil", path: "/" },
    ...ancestors.map((ancestor) => ({ name: ancestor.name, path: `/${ancestor.path}` })),
    { name: current.name, path: `/${current.path}` },
  ];
}

function CategoryView({ category }: { category: CategoryPage }) {
  const crumbs = crumbsFor(category.ancestors, { name: category.name, path: category.path });

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumb items={crumbs} />

      <h1 className="mt-4 text-3xl leading-tight font-semibold">{category.name}</h1>

      {category.description && <p className="prose mt-5 leading-relaxed">{category.description}</p>}

      {category.children.length > 0 && (
        <section aria-labelledby="titre-sous-categories" className="mt-12">
          <h2
            id="titre-sous-categories"
            className="rule-bottom pb-2 font-sans text-sm font-semibold"
          >
            Sous-catégories
          </h2>
          <ul className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {category.children.map((child) => (
              <li key={child.path}>
                <Link
                  href={`/${child.path}`}
                  className="text-[1.05rem] leading-snug font-semibold no-underline transition-colors duration-150 hover:text-prussian"
                >
                  {child.name}
                </Link>
                <span className="label mt-0.5 block">
                  {child.articleCount} article{child.articleCount > 1 ? "s" : ""}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {category.articles.length > 0 && (
        <section aria-labelledby="titre-articles" className="mt-12">
          <h2 id="titre-articles" className="rule-bottom pb-2 font-sans text-sm font-semibold">
            Articles de cette catégorie
          </h2>
          <div className="mt-2">
            {category.articles.map((article) => (
              <ArticleCard key={article.path} article={{ ...article, path: `/${article.path}` }} />
            ))}
          </div>
        </section>
      )}

      {category.descendantArticles.length > 0 && (
        <section aria-labelledby="titre-branche" className="mt-12">
          <h2 id="titre-branche" className="rule-bottom pb-2 font-sans text-sm font-semibold">
            Dans les sous-catégories
          </h2>
          <div className="mt-2">
            {category.descendantArticles.map((article) => (
              <ArticleCard
                key={article.path}
                article={{
                  ...article,
                  path: `/${article.path}`,
                  categoryPath: `/${article.categoryPath}`,
                }}
              />
            ))}
          </div>
        </section>
      )}

      {category.children.length === 0 && category.articles.length === 0 && (
        <p className="mt-10 text-ink-muted">
          Cette catégorie n&apos;a pas encore d&apos;article publié.
        </p>
      )}
    </>
  );
}

async function ArticleView({ article }: { article: ArticlePage }) {
  const { html, toc } = await renderMarkdown(article.content);
  const crumbs = crumbsFor(
    [...article.ancestors, { name: article.category.name, path: article.category.path }],
    { name: article.title, path: article.path },
  );
  const verified = formatDate(article.lastVerified);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.summary,
          path: `/${article.path}`,
          section: article.category.name,
          publishedAt: article.publishedAt,
          modifiedAt: article.updatedAt,
          keywords: article.tags.map((tag) => tag.name),
          citations: article.sources,
        })}
      />

      <Breadcrumb items={crumbs} />

      <article className="mt-4">
        <header>
          <h1 className="max-w-reading text-3xl leading-tight font-semibold sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-reading text-lg leading-relaxed text-ink-muted">
            {article.summary}
          </p>
          {verified && (
            <p className="label mt-4">
              Dernière vérification des sources le{" "}
              <time dateTime={isoDate(article.lastVerified)}>{verified}</time>
            </p>
          )}
        </header>

        <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-x-12">
          <div className="prose order-1">
            {/*
              Le corpus est redige par l'equipe editoriale et converti par notre propre
              chaine Markdown: aucun HTML exterieur n'entre ici.
            */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          <aside className="order-2 mt-12 lg:sticky lg:top-8 lg:mt-0 lg:self-start">
            <Toc entries={toc} />
          </aside>
        </div>

        {article.tags.length > 0 && (
          <section aria-labelledby="titre-etiquettes" className="rule-top mt-14 pt-4">
            <h2 id="titre-etiquettes" className="label">
              Étiquettes
            </h2>
            <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              {article.tags.map((tag) => (
                <li key={tag.slug} className="text-sm text-ink-muted">
                  {tag.name}
                </li>
              ))}
            </ul>
          </section>
        )}

        {article.related.length > 0 && (
          <section aria-labelledby="titre-lies" className="mt-12">
            <h2 id="titre-lies" className="rule-bottom pb-2 font-sans text-sm font-semibold">
              Articles liés
            </h2>
            <ul className="mt-5 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {article.related.map((related) => (
                <li key={related.path}>
                  <Link
                    href={`/${related.path}`}
                    className="leading-snug font-semibold no-underline transition-colors duration-150 hover:text-prussian"
                  >
                    {related.title}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{related.summary}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="titre-sources" className="mt-12">
          <h2 id="titre-sources" className="rule-bottom pb-2 font-sans text-sm font-semibold">
            Sources
          </h2>
          <ol className="mt-5 space-y-3">
            {article.sources.map((source) => (
              <li key={source.url} className="max-w-reading text-[0.95rem] leading-relaxed">
                <a
                  href={source.url}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  className="text-prussian"
                >
                  {source.title}
                </a>
                {(source.publisher ?? source.publishedDate) && (
                  <span className="label ml-2">
                    {[source.publisher, source.publishedDate].filter(Boolean).join(", ")}
                  </span>
                )}
              </li>
            ))}
          </ol>
          <p className="label mt-5 max-w-reading leading-relaxed">
            {SITE_NAME} rédige ses articles de manière originale à partir des sources citées.
            Signaler une erreur ou une source obsolète aide à maintenir cette page à jour.
          </p>
        </section>
      </article>
    </>
  );
}

export default async function Page({ params }: PageProps) {
  const { chemin } = await params;
  const resolved = await resolve(chemin);

  if (!resolved) notFound();
  if (resolved.kind === "category") return <CategoryView category={resolved.data} />;
  return <ArticleView article={resolved.data} />;
}
