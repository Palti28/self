/* Work lists: list/grid switch, filter chips, floating preview on hover. */
import { $, $$, store, reduceMotion } from "./dom";
import { plateHTML } from "../lib/media";
import { projects } from "../lib/content";
import { L, type Lang } from "../lib/i18n";

const lang = document.documentElement.lang as Lang;

// List / grid switch, remembered across pages
const setView = (v: string) => {
  $$("[data-layout]").forEach((el) => (el.hidden = el.dataset.layout !== v));
  $$(".switch button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.view === v)));
  store.set("work-view", v);
};
$$(".switch button").forEach((b) => b.addEventListener("click", () => setView(b.dataset.view!)));
const saved = store.get("work-view");
if (saved === "grid" || saved === "list") setView(saved);

// Filter chips: hide items in the same scope whose data-key does not match
$$("[data-filters]").forEach((group) => group.addEventListener("click", (e) => {
  const b = (e.target as Element).closest<HTMLButtonElement>("button"); if (!b) return;
  const value = b.dataset.value;
  $$("button", group).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
  const scope = group.closest("[data-filter-scope]")!;
  $$("[data-key]", scope).forEach((el) => (el.hidden = value !== "all" && el.dataset.key !== value));
}));

// Floating preview that follows the cursor over list rows
const peek = $("#peek")!;
let tx = 0, ty = 0, x = 0, y = 0, running = false, on = false, current: Element | null = null;
const place = () => {
  const w = peek.offsetWidth, h = peek.offsetHeight, off = 28;
  let left = x + off;
  if (left + w > innerWidth - 16) left = x - w - off;
  const top = Math.max(76, Math.min(y - h / 2, innerHeight - h - 16));
  peek.style.transform = `translate3d(${left}px, ${top}px, 0)`;
};
const loop = () => {
  const k = reduceMotion ? 1 : 0.16;
  x += (tx - x) * k; y += (ty - y) * k;
  place();
  if (on || Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) requestAnimationFrame(loop); else running = false;
};
const hide = () => { on = false; current = null; peek.classList.remove("on"); };

$$(".index").forEach((ul) => {
  ul.addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; });
  ul.addEventListener("pointerover", (e) => {
    if (e.pointerType !== "mouse") return;
    const row = (e.target as Element).closest<HTMLElement>(".row");
    if (!row || row === current) return;
    current = row;
    const p = projects.find((pr) => pr.slug === row.dataset.slug);
    peek.innerHTML = plateHTML({ ...p, title: L(p.title, lang) }, { w: 800, sizes: "380px" });
    if (!on) { x = tx = e.clientX; y = ty = e.clientY; }
    on = true; peek.classList.add("on");
    if (!running) { running = true; requestAnimationFrame(loop); }
  });
  ul.addEventListener("pointerleave", hide);
  ul.addEventListener("click", hide);
});
addEventListener("scroll", () => { if (on) hide(); }, { passive: true });
