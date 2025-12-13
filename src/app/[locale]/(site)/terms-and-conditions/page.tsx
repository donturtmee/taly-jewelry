"use client";

import { useTranslations } from "next-intl";
import HeroSection from "@/components/common/BasicHeroSection";
import CenteredStatement from "@/components/common/CenteredStatement";
import LegalPageContent from "@/components/legal/LegalPageContent";

export default function PrivacyPolicyPage() {
  const t = useTranslations("Terms");

  return (
    <>
      <HeroSection
        imageSrc="/images/about/hero.jpg"
        title={t("Hero.title")}
        imageAlt={t("Hero.imageAlt")}
      />

      <CenteredStatement
        title={t("Intro.title")}
        lines={(t.raw("Intro.lines") as string[]) ?? []}
      />

      <LegalPageContent namespace="Terms" />
    </>
  );
}
