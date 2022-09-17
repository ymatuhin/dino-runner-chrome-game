import { myProjects } from "../data/translations";

export function MyProjects({ locale }: { locale: string }) {
  const { title, subtitle } = myProjects[locale];

  return (
    <>
      <h2 class="mt-12 mb-4 text-2xl font-bold text-gray-800">{title}</h2>
      <p class="mb-4">{subtitle}</p>
    </>
  );
}
