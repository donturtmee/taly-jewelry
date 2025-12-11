import Image from "next/image";
import { getTranslations } from "next-intl/server";

const PLAN_IDS = ["first", "celestial", "infinite"] as const;
type PlanId = (typeof PLAN_IDS)[number];

const planFeatureKeys: Record<PlanId, string[]> = {
  first: ["item1", "item2", "item3"],
  celestial: ["item1", "item2", "item3"],
  infinite: ["item1", "item2", "item3"],
};

export default async function PricingPage() {
  const t = await getTranslations("Pricing");

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/images/pricing/pricing_bg.jpg"
          alt={t("backgroundAlt")}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <header className="max-w-6xl text-center">
          <h1 className="text-2xl sm:text-xl md:text-3xl font-semibold uppercase tracking-[0.16em]">
            {t("title")}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/80 text-balance">
            {t("subtitle")}
          </p>
        </header>

        <section className="mt-10 sm:mt-12 lg:mt-16 grid w-full gap-6 md:gap-8 lg:grid-cols-3">
          {PLAN_IDS.map((id) => (
            <article
              key={id}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/20 bg-white/5 px-6 py-8 sm:px-8 sm:py-10 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.85)] transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_55%)] before:opacity-0 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_32px_120px_rgba(0,0,0,0.95)] group-hover:before:opacity-100"
            >
              <div className="text-center">
                <h2 className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em]">
                  {t(`plans.${id}.name`)}
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-white/80 text-balance">
                  {t(`plans.${id}.tagline`)}
                </p>
              </div>

              <ul className="mt-6 space-y-2 text-xs sm:text-sm text-white/85">
                {planFeatureKeys[id].map((key) => (
                  <li key={key} className="flex gap-2">
                    <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-white/80" />
                    <span>{t(`plans.${id}.features.${key}`)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-center">
                <div className="flex items-end gap-1">
                  <span className="text-3xl sm:text-4xl font-semibold">
                    {t(`plans.${id}.price`)}
                  </span>
                  <span className="mb-1 text-xs sm:text-sm tracking-[0.2em] uppercase">
                    {t(`plans.${id}.priceSuffix`)}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-white/70 bg-white/5 px-8 py-3 text-xs sm:text-sm tracking-[0.28em] uppercase text-white transition-colors duration-300 hover:bg-white hover:text-slate-900 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  {t(`plans.${id}.cta`)}
                </button>

                <p className="mt-5 text-[11px] sm:text-xs text-white/75 text-center leading-relaxed text-balance">
                  {t(`plans.${id}.note`)}
                </p>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-10 sm:mt-12 lg:mt-14 max-w-3xl text-center text-xs sm:text-sm text-white/80 leading-relaxed text-balance">
          <p>{t("footer.line1")}</p>
          <p className="mt-2">{t("footer.line2")}</p>
        </footer>
      </div>
    </main>
  );
}
