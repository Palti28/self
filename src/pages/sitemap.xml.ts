import type { APIRoute } from "astro";
import { projects } from "../lib/content";

/* Every page exists in English (/…) and Indonesian (/id/…), each pointing at the other. */
const pages = ["/", "/work/", "/archive/", ...projects.map((p) => `/work/${p.slug}/`)];

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const urls = pages
    .map((p) => {
      const en = abs(p), id = abs(`/id${p}`);
      const alt = `<xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="id" href="${id}"/>`;
      return `<url><loc>${en}</loc>${alt}</url><url><loc>${id}</loc>${alt}</url>`;
    })
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
