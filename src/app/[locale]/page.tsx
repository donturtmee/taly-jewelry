import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <h1 className="text-3xl font-semibold">{t("title")}</h1>
    </main>
  );
}
