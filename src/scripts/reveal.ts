/* Scroll reveal: blocks fade up as they enter the viewport, staggered when several arrive together.
   The hidden state lives in global.css under html.motion, so nothing flashes before this runs.
   Keep REVEAL in sync with the selector list in global.css. */
import { $$, reduceMotion } from "./dom";

export const REVEAL = [
  ".sec-head", ".index__head", ".index > li", ".cards > .card", ".wall > .shot", ".more",
  ".about__left", ".bio", ".block-title", ".caps li", ".highs li",
  ".contact > *", ".page-head > *", ".toolbar", ".prose > *", ".foot",
].join(",");

const root = document.documentElement;

if (root.classList.contains("motion") && !reduceMotion && "IntersectionObserver" in window) {
  root.dataset.rv = "ready";
  const io = new IntersectionObserver((entries) => {
    entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
      .forEach((e, i) => {
        const el = e.target as HTMLElement;
        el.style.setProperty("--rv-d", `${Math.min(i, 8) * 70}ms`);
        el.classList.add("is-in");
        io.unobserve(el);
      });
  }, { rootMargin: "0px 0px -6% 0px", threshold: 0.01 });
  $$(REVEAL).forEach((el) => io.observe(el));
} else {
  root.classList.remove("motion");
}
