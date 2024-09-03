import { PageType } from "./types";

export const PAGE_NAMES:Record<PageType, string> = {
  home: "Accueil",
  about: "À propos",
  menu: "Menu",
  contact: "Contact",
  legal: "Mentions légales",
};

export const PAGE_PATHS:Record<PageType, string> = {
  home: "/",
  about: "/a-propos",
  menu: "/menu",
  contact: "/contact",
  legal: "/mentions-legales",
};

export const TYPOGRAPHY_NAMES:Record<string, string> = {
  raleway: "Raleway",
  poppins: "Poppins",
  dmSans: "DM Sans",
};