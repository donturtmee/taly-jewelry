"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import NavigationLink from "@/components/next-intl/NavigationLink";

type SectionBannerProps = {
  image: string;
  imageAlt?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "right";
  priority?: boolean;
  animateOnScroll?: boolean;
  viewportAmount?: number;
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 220, damping: 26, mass: 0.9 },
  },
};

export default function SectionBanner({
  image,
  imageAlt = "",
  title,
  description,
  ctaLabel = "CREATE YOUR TALISMAN",
  ctaHref = "#",
  align = "right",
  priority = false,
  animateOnScroll = true,
  viewportAmount = 0.15,
}: SectionBannerProps) {
  const isLeft = align === "left";

  const gradientSideDesktop = isLeft
    ? "bg-gradient-to-r from-black/60 via-black/40 to-transparent"
    : "bg-gradient-to-l from-black/60 via-black/40 to-transparent";

  const textAlignDesktop = isLeft ? "md:text-left" : "md:text-right";
  const textColPosition = isLeft
    ? "md:mr-auto md:pr-16"
    : "md:ml-auto md:pl-16";

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
      <div className="relative w-full min-h-[70vh] md:hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
          <div className="max-w-sm">
            {/* mobile */}
            <h2 className="text-sm font-bold uppercase text-balance tracking-[0.3em]">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-base font-normal text-balance leading-relaxed text-white/90">
                {description}
              </p>
            )}
            {ctaHref && ctaLabel && (
              <div className="mt-6">
                <NavigationLink
                  href={ctaHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-black"
                >
                  {ctaLabel}
                </NavigationLink>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative hidden md:block">
        <div className="relative flex min-h-[80vh] w-full items-center">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            priority={priority}
            className="object-cover"
          />

          <div className={`absolute inset-0 ${gradientSideDesktop}`} />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8">
            <div
              className={`w-full md:w-1/2 ${textColPosition} ${textAlignDesktop}`}
            >
              {/* desktop */}
              <h2 className="text-base font-bold uppercase text-balance tracking-[0.3em] text-white lg:text-lg">
                {title}
              </h2>
              <div className="mt-3 h-px w-24 bg-white/70 md:inline-block" />
              {description && (
                <p className="mt-6 max-w-7xl text-base font-normal text-balance leading-relaxed text-white/90 md:text-lg lg:text-xl">
                  {description}
                </p>
              )}
              {ctaHref && ctaLabel && (
                <div className="mt-9">
                  <NavigationLink
                    href={ctaHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/70 px-10 py-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-black"
                  >
                    {ctaLabel}
                  </NavigationLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
