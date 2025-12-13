import Image from "next/image";
import { getTranslations } from "next-intl/server";
import CenteredStatement from "@/components/common/CenteredStatement";
import LegalPageContent from "@/components/legal/LegalPageContent";

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("PrivacyPolicy");

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <Image
          src="/images/about/hero.jpg"
          alt={t("Hero.imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-black/60" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-white/80">
            {t("Hero.title")}
          </p>

          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-balance tracking-[0.10em] uppercase">
            {t("Intro.title")}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-white/85 text-balance">
            {t("Intro.lead")}
          </p>
        </header>

        <section className="mt-10 sm:mt-12">
          <div className="mx-auto w-full max-w-4xl rounded-[32px] border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.60)] px-6 py-8 sm:px-10 sm:py-12">
            <div className="mb-10 sm:mb-12">
              <CenteredStatement
                variant="transparentDark"
                title={t("Intro.statementTitle")}
                lines={(t.raw("Intro.lines") as string[]) ?? []}
              />
            </div>

            <LegalPageContent namespace="PrivacyPolicy" variant="dark" />
          </div>
        </section>
      </div>
    </main>
  );
}
