"use client";
import { useTranslations } from "next-intl";

import HeroSection from "@/components/homepage/HeroSection";
import CenteredStatement from "@/components/homepage/CenteredStatement";
import SectionBanner from "@/components/homepage/SectionBanner";
import SideBanner from "@/components/homepage/SideBanner";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <HeroSection />

      <CenteredStatement
        title={t("Statement.title")}
        lines={[t("Statement.line1"), t("Statement.line2")]}
      />

      <SectionBanner
        image="/images/homepage/banner_1.jpg"
        title={t("Banners.banner_1.title")}
        description={t("Banners.banner_1.content")}
        ctaLabel={t("Banners.banner_1.cta")}
        ctaHref="/studio"
        align="left"
      />

      <SectionBanner
        image="/images/homepage/banner_2.jpg"
        title={t("Banners.banner_2.title")}
        description={t("Banners.banner_2.content")}
        ctaLabel={t("Banners.banner_2.cta")}
        ctaHref="/studio"
        align="right"
      />

      <SectionBanner
        image="/images/homepage/banner_3.jpg"
        title={t("Banners.banner_2.title")}
        description={t("Banners.banner_2.content")}
        ctaLabel={t("Banners.banner_2.cta")}
        ctaHref="/studio"
        align="left"
      />

      <SideBanner
        image="/images/homepage/banner_4.jpg"
        leftTitle={t("SideBanner.left")}
        rightTitle={t("SideBanner.right")}
        ctaLabel={t("SideBanner.cta")}
        ctaHref="/studio"
      />
    </>
  );
}
