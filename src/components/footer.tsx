import { home } from "../data/translations";
import { baseLocale } from "../data/urls";

export function Footer({
  locale,
  children,
}: {
  locale: string;
  children: any;
}) {
  const { title, subtitle, footer } = home[locale];
  return (
    <>
      <footer class="rounded-lg mt-12 px-5 py-4 bg-white text-sm">
        <div class="flex justify-between">
          <div>
            <p>2017 © {title}</p>
            <p class="text-xs">{subtitle}</p>
          </div>
          <label class="ml-2 rounded bg-gray-100 px-2 h-7 inline-block focus-within:ring focus-within:ring-orange-500 border border-gray-200">
            {children}
          </label>
        </div>
      </footer>
      <div class="text-center text-xs mt-4 text-gray-400">
        {baseLocale === "ru"
          ? "Если вы нашли ошибку, пожалуйста, напишите мне об этом."
          : "If you find a typo, please email me about it."}
        <br />
        {footer}{" "}
        <a href="mailto:ym@ymatuhin.ru" class="text-gray-500 mt-2 underline">
          ym@ymatuhin.ru
        </a>
      </div>
    </>
  );
}
