import type { Metadata } from "next";

export const SITE_NAME = "Anakalypto";
export const SITE_TAGLINE = "Encyclopédie des sciences et des savoirs";

/**
 * URL canonique du site, sans barre oblique finale. Vercel expose VERCEL_PROJECT_PRODUCTION_URL
 * sur les deploiements de production, ce qui evite d'avoir a redeployer pour corriger l'URL.
 */
export function siteUrl(): string {
  const configured = process.env["NEXT_PUBLIC_SITE_URL"];
  if (configured) return configured.replace(/\/+$/, "");
  const vercel = process.env["VERCEL_PROJECT_PRODUCTION_URL"];
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl()}${normalized === "/" ? "" : normalized}`;
}

/** Tronque un resume pour la balise description, sur une limite de mot. */
export function metaDescription(text: string, maxLength = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  const cut = clean.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength).replace(/[,;:]$/, "")}...`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: Date | null;
  modifiedTime?: Date | null;
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const summary = metaDescription(description);

  return {
    title,
    description: summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description: summary,
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type,
      ...(type === "article"
        ? {
            publishedTime: publishedTime?.toISOString(),
            modifiedTime: modifiedTime?.toISOString(),
          }
        : {}),
    },
    twitter: {
      card: "summary",
      title: `${title} | ${SITE_NAME}`,
      description: summary,
    },
  };
}

type BreadcrumbItem = { name: string; path: string };

/** Donnees structurees BreadcrumbList, pour le fil d'Ariane. */
export function breadcrumbJsonLd(items: readonly BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

type ArticleJsonLdInput = {
  title: string;
  description: string;
  path: string;
  section: string;
  publishedAt: Date | null;
  modifiedAt: Date | null;
  keywords: readonly string[];
  citations: ReadonlyArray<{ title: string; url: string }>;
};

/** Donnees structurees Article, incluant les sources citees. */
export function articleJsonLd({
  title,
  description,
  path,
  section,
  publishedAt,
  modifiedAt,
  keywords,
  citations,
}: ArticleJsonLdInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDescription(description),
    inLanguage: "fr-FR",
    articleSection: section,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
    url: absoluteUrl(path),
    datePublished: publishedAt?.toISOString(),
    dateModified: (modifiedAt ?? publishedAt)?.toISOString(),
    keywords: keywords.join(", "),
    publisher: { "@type": "Organization", name: SITE_NAME, url: siteUrl() },
    author: { "@type": "Organization", name: SITE_NAME, url: siteUrl() },
    citation: citations.map((source) => ({
      "@type": "CreativeWork",
      name: source.title,
      url: source.url,
    })),
  };
}

/** Donnees structurees du site, avec la cible de recherche interne. */
export function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: SITE_TAGLINE,
    url: siteUrl(),
    inLanguage: "fr-FR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl()}/recherche?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Date lisible en francais, pour l'affichage. */
export function formatDate(value: Date | null): string | null {
  if (!value) return null;
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(value);
}

/** Attribut datetime d'un element <time>. */
export function isoDate(value: Date | null): string | undefined {
  return value ? value.toISOString().slice(0, 10) : undefined;
}
