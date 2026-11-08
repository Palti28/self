/* Site chrome: theme, mobile menu, clock, copy email, reading progress, back link. */
import { $, $$, store, isMobile } from "./dom";

const root = document.documentElement;

// Theme: light / dark / device. On mobile only the active button shows; tapping it cycles.
const themes = ["light", "dark", "system"];
const themeBtns = $$<HTMLButtonElement>("#theme button");
const applyTheme = (th: string) => {
  if (th === "system") delete root.dataset.theme; else root.dataset.theme = th;
  themeBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.theme === th)));
};
applyTheme(themes.includes(store.get("theme") || "") ? store.get("theme")! : "system");
themeBtns.forEach((b) => b.addEventListener("click", () => {
  let th = b.dataset.theme!;
  if (isMobile() && b.getAttribute("aria-pressed") === "true") th = themes[(themes.indexOf(th) + 1) % themes.length];
  applyTheme(th);
  store.set("theme", th);
}));

// Mobile menu
const nav = $("#nav")!, menuBtn = $("#menu-btn")!;
const setMenu = (open: boolean) => {
  nav.dataset.open = String(open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = (open ? menuBtn.dataset.closeLabel : menuBtn.dataset.openLabel) || "";
};
menuBtn.addEventListener("click", () => setMenu(nav.dataset.open !== "true"));
$$("#nav-links a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// Local clock
const clocks = $$("[data-clock]");
const tick = () => clocks.forEach((el) => {
  el.textContent = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: el.dataset.clock }).format(new Date());
});
tick(); setInterval(tick, 20000);

// Copy email
const copy = $("#copy");
if (copy) {
  const state = $(".copy__state", copy)!;
  let timer: number;
  const done = (key: "done" | "select") => {
    state.textContent = copy.dataset[key]!; copy.dataset.state = key;
    clearTimeout(timer);
    timer = window.setTimeout(() => { state.textContent = copy.dataset.idle!; copy.dataset.state = "idle"; }, 2200);
  };
  const selectFallback = () => {
    const r = document.createRange(); r.selectNodeContents($(".copy__email", copy)!);
    const s = getSelection()!; s.removeAllRanges(); s.addRange(r);
    done("select");
  };
  copy.addEventListener("click", () => {
    navigator.clipboard?.writeText(copy.dataset.email!).then(() => done("done"), selectFallback) ?? selectFallback();
  });
}

// Reading progress on case studies
if (nav.dataset.route === "detail") {
  const prog = $("#progress")!;
  const update = () => {
    const max = root.scrollHeight - innerHeight;
    prog.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
  };
  addEventListener("scroll", update, { passive: true });
  update();
}

// "Back" returns to the previous page (keeping its scroll) when it was on this site.
$$("[data-back]").forEach((a) => a.addEventListener("click", (e) => {
  if (document.referrer.startsWith(location.origin) && history.length > 1) { e.preventDefault(); history.back(); }
}));
