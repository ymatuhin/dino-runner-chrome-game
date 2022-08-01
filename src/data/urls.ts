export const baseLocale = import.meta.env.PUBLIC_DOMAIN === "ru" ? "ru" : "en";
export const baseUrl = import.meta.env.SITE;

export const domainLocales =
  baseLocale === "ru"
    ? ["ru", "uk", "be", "kk"]
    : ["en", "zh", "es", "pt", "fr", "ja", "de", "pl", "ro"];

export const urls = {
  ru: "https://dino-runner-chrome-game.ru",
  uk: "https://dino-runner-chrome-game.ru/uk",
  be: "https://dino-runner-chrome-game.ru/be",
  kk: "https://dino-runner-chrome-game.ru/kk",
  en: "https://dino-runner-chrome-game.com",
  zh: "https://dino-runner-chrome-game.com/zh",
  es: "https://dino-runner-chrome-game.com/es",
  pt: "https://dino-runner-chrome-game.com/pt",
  fr: "https://dino-runner-chrome-game.com/fr",
  ja: "https://dino-runner-chrome-game.com/ja",
  de: "https://dino-runner-chrome-game.com/de",
  pl: "https://dino-runner-chrome-game.com/pl",
  ro: "https://dino-runner-chrome-game.com/ro",
};

export const getAlternate = (locale: string) => {
  return Object.entries(urls).filter(([urlLocale]) => urlLocale !== locale) as [
    string,
    string,
  ][];
};
