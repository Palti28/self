/* Localized views of the content in data/site.ts, shared by pages and browser scripts. */
import { SITE } from "../data/site";
import { L, type Lang } from "./i18n";
import { kindOf } from "./media";

export const projects = SITE.projects as any[];
export const shots = SITE.shots as any[];

export const tagLabel = (tag: string, lang: Lang) => L((SITE.tagNames as any)[tag], lang) || tag;

export const shotView = (i: number, lang: Lang) => {
  const sh = shots[i];
  return {
    ...sh,
    i,
    title: L(sh.title, lang),
    alt: L(sh.alt, lang),
    tagLabel: tagLabel(sh.tag, lang),
    kind: kindOf(sh),
  };
};

export const shotsOf = (list: any[], lang: Lang) => list.map((sh) => shotView(shots.indexOf(sh), lang));

/** Projects newest first, for the full work index. */
export const projectsByYear = () =>
  [...projects].sort((a, b) => (parseInt(b.year, 10) || 0) - (parseInt(a.year, 10) || 0));

/** Filter chips: "All" plus each distinct value with its count. */
export const chips = (values: string[], allLabel: string, label = (v: string) => v) => [
  { value: "all", label: allLabel, count: values.length },
  ...[...new Set(values)].map((v) => ({ value: v, label: label(v), count: values.filter((x) => x === v).length })),
];
