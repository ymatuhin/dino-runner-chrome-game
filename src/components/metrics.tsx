import { baseLocale } from "../data/urls";

export function Metrics() {
  const id = baseLocale === "ru" ? "89807745" : "89807743";

  return (
    <img
      src={`https://mc.yandex.ru/watch/${id}`}
      style="position: absolute; left: -9999px"
      alt=""
    />
  );
}
