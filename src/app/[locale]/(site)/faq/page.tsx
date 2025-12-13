import Image from "next/image";
import { getTranslations } from "next-intl/server";
import FaqAccordion, { FaqItem } from "@/components/faq/FaqAccordion";
import NavigationLink from "@/components/next-intl/NavigationLink";

const CTA_CLASS =
  "inline-flex items-center justify-center rounded-full border border-white/70 bg-white/5 px-8 py-3 text-xs sm:text-sm tracking-[0.28em] uppercase text-white transition-colors duration-300 hover:bg-white hover:text-slate-900 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const CTA_GHOST_CLASS =
  "inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3 text-xs sm:text-sm tracking-[0.28em] uppercase text-white transition-colors duration-300 hover:bg-white hover:text-slate-900 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export default async function FaqPage() {
  const t = await getTranslations("FAQ");

  const items: FaqItem[] = [
    { id: "item-1", question: t("Items.item1.q"), answer: t("Items.item1.a") },
    { id: "item-2", question: t("Items.item2.q"), answer: t("Items.item2.a") },
    { id: "item-3", question: t("Items.item3.q"), answer: t("Items.item3.a") },
    { id: "item-4", question: t("Items.item4.q"), answer: t("Items.item4.a") },
    { id: "item-5", question: t("Items.item5.q"), answer: t("Items.item5.a") },
  ];

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
        </header>

        <section className="mt-10 sm:mt-12">
          <div className="mx-auto w-full max-w-3xl rounded-[32px] border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.60)]">
            <div className="px-4 py-2 sm:px-6 sm:py-4">
              <FaqAccordion items={items} />
            </div>
          </div>
        </section>

        <footer className="mt-10 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-white/75 text-balance">
            {t("Footer.note")}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <NavigationLink href="/support" className={CTA_CLASS}>
              {t("Footer.supportCta")}
            </NavigationLink>

            <NavigationLink href="/contact" className={CTA_GHOST_CLASS}>
              {t("Footer.contactCta")}
            </NavigationLink>
          </div>
        </footer>
      </div>
    </main>
  );
}
