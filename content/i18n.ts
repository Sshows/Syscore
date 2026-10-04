import { redesign } from "./site-content";
export type Locale = "ru" | "en" | "kk";
// TODO: provide owner-approved English and Kazakh translations before enabling a language switch.
export const getDictionary = (locale: Locale = "ru") => {
  if (locale !== "ru") throw new Error("Translation not published");
  return redesign;
};
