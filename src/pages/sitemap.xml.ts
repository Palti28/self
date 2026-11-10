import type { APIRoute } from "astro";
import { projects } from "../lib/content";

/* The site is English only. */
const pages = ["/", "/work/", "/archive/", ...projects.map((p) => `/work/${p.slug}/`)];

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const urls = pages
    .map((p) => {
      return `<url><loc>${abs(p)}</loc></url>`;
    })
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
