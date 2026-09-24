import type { APIRoute } from "astro";
import { GUIDES } from "../content/guides";
import { PRODUCTS } from "../content/products";
import { LOCALES, canonical } from "../site";

type Entry = { en: string; es: string; priority: string };

const ENTRIES: Entry[] = [
  { en: "", es: "", priority: "1.0" },
  ...PRODUCTS.map((p) => ({ en: p.slug, es: p.slug, priority: "0.9" })),
  { en: "guides", es: "guias", priority: "0.7" },
  ...GUIDES.map((g) => ({ en: g.en.slug, es: g.es.slug, priority: "0.8" })),
];

const BREAK = "\n";

/// Every page is declared once per language, each one naming its twin, so the two versions are
/// read as the same page in two languages instead of as two pages saying the same thing. A guide
/// keeps a different slug in each language, which is why the pair travels together.
export const GET: APIRoute = () => {
  const urls = ENTRIES.flatMap((entry) =>
    LOCALES.map((locale) => {
      const alternates = LOCALES.map(
        (other) =>
          `    <xhtml:link rel="alternate" hreflang="${other}" href="${canonical(other, entry[other])}"/>`,
      ).join(BREAK);
      return [
        "  <url>",
        `    <loc>${canonical(locale, entry[locale])}</loc>`,
        alternates,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${canonical("en", entry.en)}"/>`,
        "    <changefreq>monthly</changefreq>",
        `    <priority>${entry.priority}</priority>`,
        "  </url>",
      ].join(BREAK);
    }),
  ).join(BREAK);

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    "</urlset>",
    "",
  ].join(BREAK);

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

export const prerender = true;
