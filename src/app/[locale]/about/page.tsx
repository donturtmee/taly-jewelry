"use client";
import { useTranslations } from "next-intl";

import HeroSection from "@/components/common/BasicHeroSection";
import CenteredStatement from "@/components/common/CenteredStatement";
import ImageBlock from "@/components/common/ImageBlock";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <>
      <HeroSection
        imageSrc="/images/about/hero.jpg"
        title={t("Hero.title")}
        imageAlt={t("Hero.imageAlt")}
      />

      <CenteredStatement
        title={t("Statement.title")}
        lines={[t("Statement.line1"), t("Statement.line2")]}
      />

      <ImageBlock
        imageSrc="/images/about/about_starmap.jpg"
        imageAlt={t("ImageBlocks.block1.imageAlt")}
        title={t("ImageBlocks.block1.title")}
        lines={t.raw("ImageBlocks.block1.lines") as string[]}
      />

      <ImageBlock
        reverse
        imageSrc="/images/about/about_pendant.jpg"
        imageAlt={t("ImageBlocks.block2.imageAlt")}
        title={t("ImageBlocks.block2.title")}
        lines={t.raw("ImageBlocks.block2.lines") as string[]}
      />

      <CenteredStatement
        title={t("StatementEnd.title")}
        lines={[t("StatementEnd.line1"), t("StatementEnd.line2")]}
      />
    </>
  );
}
