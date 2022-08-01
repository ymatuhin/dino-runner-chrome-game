import { languages } from "../data/translations";
import { urls } from "../data/urls";

export function LocaleSelect({ locale }: { locale: string }) {
  return (
    <select
      class="h-7 w-28 bg-transparent focus:outline-none"
      name="locale"
      onChange={({ target }) => (location.href = urls[target.value])}
      value={locale}
    >
      {Object.keys(languages).map((locale) => (
        <option value={locale}>{languages[locale]}</option>
      ))}
    </select>
  );
}
