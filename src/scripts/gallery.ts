/* Media: load/error states, video autoplay in view, and the lightbox. */
import { $, $$, reduceMotion } from "./dom";
import { plateHTML, embedOf, ratioOf, esc, pad } from "../lib/media";
import { shotView } from "../lib/content";
import { url, useT, type Lang } from "../lib/i18n";

const lang = document.documentElement.lang as Lang;
const t = useT(lang);
const root = document.documentElement;
type MediaEl = HTMLImageElement | HTMLVideoElement;

// Load and error states (works for any ratio; natural size is kept for the lightbox)
const onLoad = (el: MediaEl) => {
  const pl = el.closest<HTMLElement>(".plate");
  if (!pl || el.classList.contains("is-loaded")) return;
  el.classList.add("is-loaded"); pl.classList.add("is-loaded");
  const nw = (el as HTMLImageElement).naturalWidth || (el as HTMLVideoElement).videoWidth;
  const nh = (el as HTMLImageElement).naturalHeight || (el as HTMLVideoElement).videoHeight;
  if (!nw || !nh) return;
  pl.dataset.nat = `${nw}/${nh}`;
  if (pl.classList.contains("plate--auto")) {
    pl.classList.add("is-sized");
    if (nh / nw > 2.1) pl.classList.add("plate--tall");
  }
};
const onError = (el: MediaEl) => {
  const pl = el.closest(".plate");
  if (!pl || pl.classList.contains("is-error")) return;
  pl.classList.add("is-error");
  pl.insertAdjacentHTML("beforeend", `<span class="plate__err">${esc(t("img.error"))}</span>`);
};
const isMedia = (n: EventTarget | null): n is MediaEl => n instanceof HTMLImageElement || n instanceof HTMLVideoElement;
document.addEventListener("load", (e) => { if (e.target instanceof HTMLImageElement) onLoad(e.target); }, true);
document.addEventListener("loadedmetadata", (e) => { if (e.target instanceof HTMLVideoElement) onLoad(e.target); }, true);
document.addEventListener("error", (e) => { if (isMedia(e.target)) onError(e.target); }, true);

// Wall videos play muted while on screen; with reduced motion only on hover.
const play = (v?: HTMLVideoElement | null) => v?.play().catch(() => {});
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  const v = en.target as HTMLVideoElement;
  if (en.isIntersecting && !reduceMotion) play(v); else v.pause();
}), { threshold: 0.25 });
if (reduceMotion) {
  document.addEventListener("pointerover", (e) => play((e.target as Element).closest(".shot")?.querySelector("video")));
  document.addEventListener("pointerout", (e) => {
    const s = (e.target as Element).closest(".shot");
    if (s && !s.contains(e.relatedTarget as Node)) s.querySelector("video")?.pause();
  });
}

const settle = (scope: ParentNode) => {
  $$<HTMLImageElement>(".plate img", scope).forEach((img) => { if (img.complete) (img.naturalWidth ? onLoad : onError)(img); });
  $$<HTMLVideoElement>(".plate video", scope).forEach((v) => {
    if (v.error) onError(v); else if (v.readyState >= 1) onLoad(v);
    if (!v.controls) io.observe(v);
  });
};
settle(document);

// Lightbox for image and video tiles (link tiles open their page instead)
const lb = $("#lb")!, stage = $("#lb-stage")!;
const lbLink = $<HTMLAnchorElement>("#lb-link")!, lbExt = $<HTMLAnchorElement>("#lb-ext")!;
let list: number[] = [], cur = 0, lastFocus: HTMLElement | null = null;

const render = () => {
  const sh = shotView(cur, lang);
  const emb = embedOf(sh.video);
  const thumb = $$(`.shot[data-i="${cur}"] .plate`).find((p) => p.dataset.nat);
  const nat = emb?.ratio || sh.ratio || (emb ? "16/9" : thumb?.dataset.nat) || null;
  const r = ratioOf(nat);
  const tall = !!r && r.h / r.w > 1.8;
  const width = !r ? "min(100%, 1200px)" : tall ? "min(100%, 760px)" : `min(100%, calc((100vh - 190px) * ${r.w} / ${r.h}))`;
  const media = emb && r
    ? `<div class="lb__embed" style="aspect-ratio:${r.w} / ${r.h}"><iframe src="${esc(emb.src)}" title="${esc(sh.title)}" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen></iframe></div>`
    : plateHTML({ ...sh, ratio: nat }, { w: 1600, eager: true, controls: true, fullLabel: t("img.full") });
  stage.classList.toggle("is-scroll", tall);
  stage.scrollTop = 0;
  stage.innerHTML = `<div class="lb__img" style="width:${width}">${media}</div>`;
  settle(stage);
  $("#lb-count")!.textContent = `${pad(list.indexOf(cur) + 1)} / ${pad(list.length)}`;
  $("#lb-cap")!.innerHTML = `${esc(sh.title)}<span>${esc(sh.tagLabel)}</span>`;
  lbLink.hidden = !sh.project;
  if (sh.project) lbLink.href = url(lang, `/work/${sh.project}`);
  const ext = sh.href || (emb ? sh.video : null);
  lbExt.hidden = !ext;
  if (ext) lbExt.href = ext;
};
const step = (d: number) => { cur = list[(list.indexOf(cur) + d + list.length) % list.length]; render(); };
// While the viewer is open, the page behind it is inert so Tab stays inside the dialog.
const setInert = (on: boolean) => $$("body > :not(#lb)").forEach((el) => el.toggleAttribute("inert", on));
const close = () => {
  lb.hidden = true; root.style.overflow = ""; stage.innerHTML = ""; setInert(false);
  lastFocus?.focus({ preventScroll: true });
};

document.addEventListener("click", (e) => {
  const tile = (e.target as Element).closest<HTMLElement>("button.shot"); if (!tile) return;
  list = $$("button.shot", tile.closest(".wall")!).filter((el) => !el.hidden).map((el) => +el.dataset.i!);
  cur = +tile.dataset.i!; lastFocus = tile;
  render();
  lb.hidden = false; root.style.overflow = "hidden"; setInert(true); $("#lb-close")!.focus();
});
$("#lb-close")!.addEventListener("click", close);
$("#lb-prev")!.addEventListener("click", () => step(-1));
$("#lb-next")!.addEventListener("click", () => step(1));
lbLink.addEventListener("click", () => { lb.hidden = true; root.style.overflow = ""; setInert(false); });
stage.addEventListener("click", (e) => { if (e.target === stage) close(); });
addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
});
