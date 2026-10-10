import type { Metadata, Viewport } from "next";
import { Spectral } from "next/font/google";
import localFont from "next/font/local";

import { BackToTop } from "@/components/BackToTop";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_NAME, SITE_TAGLINE, siteUrl } from "@/lib/seo";

import "./globals.css";

// Spectral porte le texte lu et les titres: serif dessine pour l'ecran, adapte aux longues lectures.
const spectral = Spectral({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

// Archivo porte l'appareil de navigation, nettement distinct du texte courant.
// Archivo's upstream CSS contains query-based font URLs that the current loader rejects.
const archivo = localFont({
  src: "./fonts/Archivo.ttf",
  weight: "100 900",
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${SITE_NAME} - ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Encyclopédie francophone des sciences et des savoirs : articles sourcés, vérifiés et " +
    "rédigés de manière originale, du corps humain à l'intelligence artificielle.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    url: siteUrl(),
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf9f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b16" },
  ],
};

/**
 * Pose le theme choisi avant le premier rendu. Sans ce script, une page chargee en theme
 * sombre apparaitrait brievement en clair.
 */
const THEME_SCRIPT = `try{var t=localStorage.getItem("anakalypto-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Les variables de police sont posees sur <html>: la pile typographique est composee
    // sur :root, et une substitution var() echoue si la variable referencee n'est pas
    // declaree sur le meme element.
    <html lang="fr" className={`${spectral.variable} ${archivo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-screen">
        <a
          href="#contenu"
          className="btn sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          {children}
        </main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
