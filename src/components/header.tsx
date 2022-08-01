import { home } from "../data/translations";

export function Header({ locale }: { locale: string }) {
  const { title, subtitle } = home[locale];

  return (
    <header class="flex mb-8">
      <img src="/favicon-original.svg" width="64" height="64" alt={title} />
      <div class="ml-6">
        <h1 class="text-3xl font-bold text-gray-800">{title}</h1>
        <h2 class="text-lg text-gray-500">{subtitle}</h2>
      </div>
    </header>
  );
}
