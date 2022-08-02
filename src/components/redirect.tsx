import { baseLocale, urls } from "../data/urls";
import "./redirect.css";

export function Redirect({ locale }: { locale: string }) {
  const currentLocaleIndex = navigator.languages.indexOf(locale);
  const locales = Object.keys(urls);
  const newLocale = navigator.languages.find((language) =>
    locales.includes(language),
  );
  const newLocaleIndex = navigator.languages.indexOf(newLocale);
  if (newLocaleIndex === -1) return null;
  if (newLocaleIndex >= currentLocaleIndex) return null;

  const languages = {
    ru: {
      uk: "на украинском",
      be: "на белорусском",
      kk: "на казахском",
      en: "на английском",
      zh: "на китайском", // китайский
      es: "на испанском", // испанский
      pt: "на португальском", // Portuguese
      fr: "на французском", // French
      ja: "на японском", // Japanese
      de: "на немецком", // German
      pl: "на польском",
      ro: "на румынском",
    },
    en: {
      ru: "in Russian",
      uk: "in Ukrainian",
      be: "in Belarusian",
      kk: "in Kazakh",
      zh: "in Chinese", // китайский
      es: "in Spanish", // испанский
      pt: "in Portuguese", // Portuguese
      fr: "in French", // French
      ja: "in Japanese", // Japanese
      de: "in German", // German
      pl: "in Polish",
      ro: "in Romanian",
    },
  };

  return (
    <div className="redirect-panel fixed text-sm flex items-center right-2 top-2 max-w-xs rounded bg-white shadow px-5 py-3 ">
      <p class="">
        {baseLocale === "en" && "This site is also available"}
        {baseLocale === "ru" && "Этот сайт так-же доступен на"}{" "}
        {languages[baseLocale][newLocale]}
      </p>
      <a
        class="inline-block  ml-4 px-4 py-2 bg-orange-400 rounded text-white"
        href={urls[newLocale]}
      >
        <span class="drop-shadow">
          {baseLocale === "ru" ? "Перейти" : "Go to"}
        </span>
      </a>
    </div>
  );
}
