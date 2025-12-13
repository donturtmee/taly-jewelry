import Image from "next/image";
import { getTranslations } from "next-intl/server";
import NavigationLink from "@/components/next-intl/NavigationLink";

const CTA_CLASS =
  "inline-flex items-center justify-center rounded-full border border-white/70 bg-white/5 px-6 py-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-slate-900 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const CTA_GHOST_CLASS =
  "inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-slate-900 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export default async function SupportPage() {
  const t = await getTranslations("Support");

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/images/about/hero.jpg"
          alt={t("Hero.imageAlt")}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
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

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <NavigationLink
              href="/pricing"
              className={`w-full sm:w-auto ${CTA_CLASS}`}
            >
              {t("Ctas.viewPlans")}
            </NavigationLink>

            <NavigationLink
              href="/contact"
              className={`w-full sm:w-auto ${CTA_GHOST_CLASS}`}
            >
              {t("Ctas.contactTeam")}
            </NavigationLink>
          </div>
        </header>

        <section className="mt-10 sm:mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.60)] px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em]">
              {t("Sections.how.title")}
            </h2>
            <div className="mt-4 space-y-3 text-sm sm:text-base text-white/85 leading-relaxed">
              <p className="text-balance">{t("Sections.how.p1")}</p>
              <p className="text-balance">{t("Sections.how.p2")}</p>
              <p className="text-balance">
                {t("Sections.how.freeLine")}{" "}
                <NavigationLink
                  href="/pricing"
                  className="font-medium text-white underline underline-offset-4 hover:text-white/90"
                >
                  {t("Links.pricing")}
                </NavigationLink>
                .
              </p>
            </div>
          </article>

          <article className="rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.60)] px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em]">
              {t("Sections.credits.title")}
            </h2>
            <div className="mt-4 space-y-3 text-sm sm:text-base text-white/85 leading-relaxed">
              <p className="text-balance">{t("Sections.credits.p1")}</p>
              <ul className="mt-4 space-y-2">
                <li className="flex gap-3">
                  <span className="mt-[10px] h-[3px] w-[3px] rounded-full bg-white/80" />
                  <span className="text-balance">
                    {t("Sections.credits.bullets.b1")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[10px] h-[3px] w-[3px] rounded-full bg-white/80" />
                  <span className="text-balance">
                    {t("Sections.credits.bullets.b2")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[10px] h-[3px] w-[3px] rounded-full bg-white/80" />
                  <span className="text-balance">
                    {t("Sections.credits.bullets.b3")}
                  </span>
                </li>
              </ul>
            </div>
          </article>

          <article className="rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.60)] px-6 py-8 sm:px-8 sm:py-10 lg:col-span-2">
            <h2 className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em]">
              {t("Sections.madeReal.title")}
            </h2>
            <div className="mt-4 space-y-3 text-sm sm:text-base text-white/85 leading-relaxed">
              <p className="text-balance">{t("Sections.madeReal.p1")}</p>
              <p className="text-balance">
                {t("Sections.madeReal.p2")}{" "}
                <NavigationLink
                  href="/contact"
                  className="font-medium text-white underline underline-offset-4 hover:text-white/90"
                >
                  {t("Links.contact")}
                </NavigationLink>
                .
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <NavigationLink
                href="/contact"
                className={`w-full sm:w-auto ${CTA_CLASS}`}
              >
                {t("Ctas.contactTeam")}
              </NavigationLink>
              <NavigationLink
                href="/pricing"
                className={`w-full sm:w-auto ${CTA_GHOST_CLASS}`}
              >
                {t("Ctas.viewPlans")}
              </NavigationLink>
            </div>
          </article>

          <article className="rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.60)] px-6 py-8 sm:px-8 sm:py-10 lg:col-span-2">
            <h2 className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em]">
              {t("Sections.gallery.title")}
            </h2>
            <div className="mt-4 space-y-3 text-sm sm:text-base text-white/85 leading-relaxed">
              <p className="text-balance">{t("Sections.gallery.p1")}</p>
              <ul className="mt-4 space-y-2">
                <li className="flex gap-3">
                  <span className="mt-[10px] h-[3px] w-[3px] rounded-full bg-white/80" />
                  <span className="text-balance">
                    {t("Sections.gallery.bullets.b1")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[10px] h-[3px] w-[3px] rounded-full bg-white/80" />
                  <span className="text-balance">
                    {t("Sections.gallery.bullets.b2")}
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </section>

        <footer className="mt-12 sm:mt-14 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/80">
            <NavigationLink
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              {t("Legal.privacy")}
            </NavigationLink>
            <span className="text-white/35">•</span>
            <NavigationLink
              href="/terms"
              className="hover:text-white transition-colors"
            >
              {t("Legal.terms")}
            </NavigationLink>
            <span className="text-white/35">•</span>
            <NavigationLink
              href="/cookies"
              className="hover:text-white transition-colors"
            >
              {t("Legal.cookies")}
            </NavigationLink>
          </div>

          <p className="mt-4 text-xs text-white/65 text-balance">
            {t("Legal.note")}
          </p>
        </footer>
      </div>
    </main>
  );
}
