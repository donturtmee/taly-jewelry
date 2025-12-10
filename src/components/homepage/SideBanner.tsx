"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import NavigationLink from "@/components/next-intl/NavigationLink";

type SideTextsBannerProps = {
  image: string;
  imageAlt?: string;
  leftTitle: string;
  rightTitle: string;
  ctaLabel: string;
  ctaHref: string;
  priority?: boolean;
  animateOnScroll?: boolean;
  viewportAmount?: number;
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 220, damping: 26, mass: 0.9 },
  },
};

export default function SideTextsBanner({
  image,
  imageAlt = "",
  leftTitle,
  rightTitle,
  ctaLabel,
  ctaHref,
  priority = false,
  animateOnScroll = true,
  viewportAmount = 0.15,
}: SideTextsBannerProps) {
  return (
    <motion.section
      variants={sectionVariants}
      initial={animateOnScroll ? "hidden" : undefined}
      whileInView={animateOnScroll ? "show" : undefined}
      viewport={
        animateOnScroll ? { once: true, amount: viewportAmount } : undefined
      }
      className="relative w-full mb-5"
    >
      <div className="relative w-full min-h-[70vh]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* DESKTOP: texte centrate pe toată înălțimea */}
        <div className="absolute inset-0 hidden md:block">
          <div className="flex h-full items-center">
            <div className="mx-auto flex w-full max-w-7xl justify-between px-6 lg:px-8">
              <div className="max-w-xs text-left text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] lg:text-base">
                  {leftTitle}
                </p>
              </div>
              <div className="max-w-xs text-right text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] lg:text-base">
                  {rightTitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP: buton ancorat jos */}
        <div className="absolute inset-x-0 bottom-16 hidden justify-center md:flex lg:bottom-20">
          <NavigationLink
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-10 py-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-colors duration-200 hover:border-white hover:bg-white hover:text-black"
          >
            {ctaLabel}
          </NavigationLink>
        </div>

        {/* MOBILE */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center text-white md:hidden">
          <p className="max-w-sm text-sm font-semibold uppercase tracking-[0.25em]">
            {leftTitle}
          </p>
          <p className="max-w-sm text-sm font-semibold uppercase tracking-[0.25em]">
            {rightTitle}
          </p>
          <NavigationLink
            href={ctaHref}
            className="mt-2 inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-colors duration-200 hover:border-white hover:bg-white hover:text-black"
          >
            {ctaLabel}
          </NavigationLink>
        </div>
      </div>
    </motion.section>
  );
}
