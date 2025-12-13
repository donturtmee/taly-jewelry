import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/common/BasicHeroSection";
import FaqAccordion, { FaqItem } from "@/components/faq/FaqAccordion";

export default async function FaqPage() {
  const t = await getTranslations("FAQ");

  const items: FaqItem[] = [
    {
      id: "item-1",
      question: t("Items.item1.q"),
      answer: t("Items.item1.a"),
    },
    {
      id: "item-2",
      question: t("Items.item2.q"),
      answer: t("Items.item2.a"),
    },
    {
      id: "item-3",
      question: t("Items.item3.q"),
      answer: t("Items.item3.a"),
    },
    {
      id: "item-4",
      question: t("Items.item4.q"),
      answer: t("Items.item4.a"),
    },
    {
      id: "item-5",
      question: t("Items.item5.q"),
      answer: t("Items.item5.a"),
    },
  ];

  return (
    <>
      <HeroSection
        imageSrc="/images/about/hero.jpg"
        title={t("Hero.title")}
        imageAlt={t("Hero.imageAlt")}
      />

      <main className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-3xl">
          <header className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 text-balance">
              {t("Intro.title")}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-700 text-balance">
              {t("Intro.lead")}
            </p>
          </header>

          <div className="mt-10 sm:mt-12">
            <FaqAccordion items={items} />
          </div>

          <footer className="mt-12 sm:mt-14 text-center text-xs sm:text-sm text-neutral-600">
            {t("Footer.note")}
          </footer>
        </div>
      </main>
    </>
  );
}
