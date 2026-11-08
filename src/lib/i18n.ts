import { UI } from "../data/ui";

export const LANGS = ["en", "id"] as const;
export type Lang = (typeof LANGS)[number];
export type Loc = string | { en: string; id?: string } | null | undefined;

/** Pick the right language from a bilingual value; plain strings pass through. */
export const L = (v: any, lang: Lang): any =>
  v && typeof v === "object" && !Array.isArray(v) && "en" in v ? (v[lang] ?? v.en) : v;

/** Interface label lookup with optional {placeholders}. */
export const useT = (lang: Lang) => (key: string, vars: Record<string, string | number> = {}) =>
  Object.entries(vars).reduce(
    (s, [k, v]) => s.replace(`{${k}}`, String(v)),
    UI[lang][key] ?? UI.en[key] ?? key,
  );

/** Path in a given language: "/work" -> "/id/work" for Indonesian. */
export const url = (lang: Lang, path = "/") => (lang === "en" ? path : `/id${path}`);

/** getStaticPaths for pages under [...lang]: "/" is English, "/id" is Indonesian. */
export const langPaths = () =>
  LANGS.map((lang) => ({ params: { lang: lang === "en" ? undefined : lang }, props: { lang } }));
