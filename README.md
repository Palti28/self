# paltigorat.com

Personal portfolio, built with [Astro](https://astro.build). English at `/`, Indonesian at `/id/`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

```
src/
  data/site.ts        All content: profile, projects (case studies), archive items, socials
  data/ui.ts          Interface labels in EN and ID
  pages/[...lang]/    Routes, built once per language
    index.astro         Home
    work/index.astro    All work        /work
    work/[slug].astro   Case study      /work/<slug>
    archive.astro       Full archive    /archive
  layouts/Base.astro  <head>, header, footer, lightbox
  components/         Header, Footer, WorkIndex, ArchiveWall, Plate, Filters, ...
  lib/                Shared by pages and browser scripts (i18n, media rendering, content helpers)
  scripts/            Browser behaviour: theme, menu, filters, hover preview, lightbox
  styles/global.css
```

Most edits happen in `src/data/site.ts`. Text there can be a plain string or `{ en: "...", id: "..." }`.
<!-- preview test -->
