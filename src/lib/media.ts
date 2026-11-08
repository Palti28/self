/* Media rendering shared by the server (Astro pages) and the browser (lightbox, hover preview).
   Items passed in are already localized: title/alt are plain strings. */
import { SITE } from "../data/site";

export type Media = {
  title?: string; alt?: string; ratio?: string | null; mockup?: string;
  src?: string | null; image?: string | null; video?: string | null; href?: string | null;
};
type PlateOpts = { w?: number; sizes?: string; eager?: boolean; controls?: boolean; fullLabel?: string };

export const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
export const pad = (n: number) => String(n).padStart(2, "0");

export const ratioOf = (r?: string | null) => {
  const [w, h] = String(r || "").split("/").map(Number);
  return w > 0 && h > 0 ? { w, h } : null;
};

/* ImageKit: URLs on these hosts get ?tr=w-<n> and a srcset. */
const IK = SITE.imagekit;
const isIK = (u: string) => IK.hosts.some((h) => u.includes(h));
const ik = (u: string, w: number) =>
  !isIK(u) || /[?&]tr=/.test(u) || /\/tr:/.test(u) ? u : `${u}${u.includes("?") ? "&" : "?"}tr=w-${w}`;

/* YouTube / Vimeo / Instagram links play as embeds; anything else in `video` is a file. */
export const embedOf = (u?: string | null) => {
  if (!u) return null;
  let m = u.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
  if (m) return { src: `https://www.youtube-nocookie.com/embed/${m[1]}?autoplay=1&rel=0&playsinline=1`, thumb: `https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg`, ratio: null };
  m = u.match(/instagram\.com\/(reels?|p|tv)\/([\w-]+)/);
  if (m) return { src: `https://www.instagram.com/${m[1] === "p" ? "p" : "reel"}/${m[2]}/embed/`, thumb: null, ratio: "1/2" };
  m = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (m) return { src: `https://player.vimeo.com/video/${m[1]}?autoplay=1&dnt=1`, thumb: null, ratio: null };
  return null;
};

export const kindOf = (m: Media) => (m.video ? "video" : m.href ? "link" : "image");

/* Placeholder drawings shown when an item has no image yet. */
const ln = (w: number) => `<span class="ln" style="width:${w}%"></span>`;
const MOCKUPS: Record<string, () => string> = {
  system: () => {
    const ramp: string[] = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) ramp.push(`<i style="opacity:${(0.08 + c * 0.2 + r * 0.03).toFixed(2)}"></i>`);
    return `<div class="mk mk--system"><div class="aa">Aa<small>type.display / 64 / &minus;4%</small></div><div class="ramp">${ramp.join("")}</div><div></div><div class="pills"><b></b><b></b><b></b></div></div>`;
  },
  mobile: () => {
    const screen = (back: boolean) => `<div class="phone${back ? " is-back" : ""}">${ln(40)}<div class="big"></div>${[72, 58, 80, 50, 66].map((w) => `<div class="item">${ln(w)}</div>`).join("")}</div>`;
    return `<div class="mk mk--mobile">${screen(true)}${screen(false)}</div>`;
  },
  console: () => {
    const bars = [34, 52, 41, 66, 48, 88, 57, 44, 62, 39, 71, 50].map((h, i) => `<i class="${i === 5 ? "hi" : ""}" style="height:${h}%"></i>`).join("");
    const rows = [[70, 50], [56, 64], [80, 40], [62, 58]].map(([a, b]) => `<div class="trow">${ln(a)}${ln(b)}<span class="flag"></span></div>`).join("");
    return `<div class="mk mk--console"><div class="win"><div class="side">${ln(70)}${ln(50)}${ln(62)}${ln(44)}</div><div class="main">${ln(30)}<div class="bars">${bars}</div>${rows}</div></div></div>`;
  },
  type: () => `<div class="mk mk--type"><span>roha</span><small>baseline 6cqi</small></div>`,
  motion: () => `<div class="mk mk--motion"><div class="orbs"><i></i><i></i><i></i></div><div class="tl"><b></b></div></div>`,
  article: () => `<div class="mk mk--article"><div class="sheet"><span class="kick"></span><span class="hl"></span><span class="hl" style="width:64%"></span>${[100, 94, 98, 72].map(ln).join("")}<span class="gap"></span>${[96, 100, 88].map(ln).join("")}</div></div>`,
  form: () => `<div class="mk mk--form"><div class="formcard">${ln(46)}${ln(30)}<div class="field"></div>${ln(24)}<div class="field"></div><div class="cta"></div></div></div>`,
  chart: () => {
    const pts = [62, 58, 64, 49, 52, 40, 44, 31, 36, 24, 28, 14];
    const d = pts.map((v, i) => `${(i / (pts.length - 1)) * 100},${v}`).join(" ");
    return `<div class="mk mk--chart"><div class="num">Rp 4,82 M<small>+12.4%</small></div><svg viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,70 ${d} 100,70" fill="currentColor" fill-opacity=".07"/><polyline points="${d}" fill="none" stroke="currentColor" stroke-width="1.4" vector-effect="non-scaling-stroke"/></svg></div>`;
  },
  ramp: () => {
    const steps = [[100, 4], [200, 10], [300, 20], [500, 42], [700, 70], [900, 100]];
    return `<div class="mk mk--ramp">${steps.map(([n, a]) => `<i style="background:color-mix(in srgb, var(--ink) ${a}%, var(--plate));color:${a > 40 ? "var(--paper)" : "var(--ink-2)"}"><span>ink.${n}</span><span>${a}%</span></i>`).join("")}</div>`;
  },
};

/** A framed image / video / placeholder at a fixed or natural ratio. */
export const plateHTML = (item: Media, opts: PlateOpts = {}) => {
  const r = ratioOf(item.ratio);
  const tall = r && r.h / r.w > 2.1;
  const emb = embedOf(item.video);
  const vid = item.video && !emb ? item.video : null;
  const poster = item.image || item.src || emb?.thumb || null;
  const media = vid || poster;
  const cls = ["plate", !r && media ? "plate--auto" : "", tall ? "plate--tall" : ""].filter(Boolean).join(" ");
  const style = r ? `aspect-ratio:${r.w} / ${r.h}` : media ? "" : "aspect-ratio:4 / 3";
  const alt = esc(item.alt || item.title || "");
  const w = opts.w || 1200;

  let inner: string;
  if (vid) {
    inner = `<video src="${esc(vid)}"${poster ? ` poster="${esc(ik(poster, w))}"` : ""} muted loop playsinline preload="metadata"${opts.controls ? " controls autoplay" : ""} aria-label="${alt}"></video>`;
  } else if (poster) {
    const srcset = isIK(poster) ? IK.widths.map((n) => `${ik(poster, n)} ${n}w`).join(", ") : "";
    inner = `<img src="${esc(ik(poster, w))}"${srcset ? ` srcset="${esc(srcset)}" sizes="${esc(opts.sizes || "100vw")}"` : ""} alt="${alt}" loading="${opts.eager ? "eager" : "lazy"}" decoding="async">`;
  } else {
    inner = (MOCKUPS[item.mockup || ""] || MOCKUPS.type)();
  }
  return `<figure class="${cls}"${style ? ` style="${style}"` : ""}><span class="plate__ratio">${r ? `${r.w}:${r.h}` : "auto"}</span>${inner}<span class="plate__tall">${esc(opts.fullLabel || "Full page")}</span></figure>`;
};
