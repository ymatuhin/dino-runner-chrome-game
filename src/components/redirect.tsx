import { baseLocale, urls } from "../data/urls";
import "./redirect.css";

export function Redirect({ locale }: { locale: string }) {
  const navigatorLanguages = [
    ...new Set(navigator.languages.map((lang) => lang.slice(0, 2))),
  ];
  const currentLocaleIndex = navigatorLanguages.indexOf(locale);
  const locales = Object.keys(urls);
  const newLocale = navigatorLanguages.find((language) =>
    locales.includes(language),
  );
  const newLocaleIndex = navigatorLanguages.indexOf(newLocale);
  if (newLocaleIndex === -1) return null;
  if (currentLocaleIndex !== -1 && newLocaleIndex >= currentLocaleIndex)
    return null;

  const languages = {
    ru: {
      ru: "русском",
      uk: "украинском",
      be: "белорусском",
      kk: "казахском",
      en: "английском",
      zh: "китайском", // китайский
      es: "испанском", // испанский
      pt: "португальском", // Portuguese
      fr: "французском", // French
      ja: "японском", // Japanese
      de: "немецком", // German
      pl: "польском",
      ro: "румынском",
    },
    en: {
      en: "English",
      ru: "Russian",
      uk: "Ukrainian",
      be: "Belarusian",
      kk: "Kazakh",
      zh: "Chinese",
      es: "Spanish",
      pt: "Portuguese",
      fr: "French",
      ja: "Japanese",
      de: "German",
      pl: "Polish",
      ro: "Romanian",
    },
  };

  return (
    <div className="redirect-panel fixed text-sm flex items-center right-2 top-2 max-w-xs rounded bg-white shadow px-5 py-3 ">
      <p class="">
        {baseLocale === "en" && "This site is also available in"}
        {baseLocale === "ru" && "Этот сайт так-же доступен на"}{" "}
        {languages[baseLocale][newLocale]}
      </p>
      <a
        class="inline-block flex-shrink-0 ml-4 px-4 py-2 bg-orange-400 rounded text-white"
        href={urls[newLocale]}
      >
        <span class="drop-shadow">
          {baseLocale === "ru" ? "Перейти" : "Go to"}
        </span>
      </a>
    </div>
  );
}
