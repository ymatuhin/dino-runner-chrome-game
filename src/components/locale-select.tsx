import { languages } from "../data/translations";
import { urls } from "../data/urls";
import styles from "./locale-select.module.css";

export function LocaleSelect({ locale }: { locale: string }) {
  return (
    <select
      class={`h-7 w-28 bg-transparent focus:outline-none appearance-none ${styles.cheveron}`}
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
