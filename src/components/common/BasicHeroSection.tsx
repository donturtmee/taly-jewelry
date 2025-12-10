"use client";

import Image from "next/image";

type PageHeroBottomProps = {
  imageSrc: string;
  title: string;
  imageAlt?: string;
  minHeightClassName?: string;
};

export default function HeroSection({
  imageSrc,
  title,
  imageAlt = "",
  minHeightClassName = "min-h-[40vh]",
}: PageHeroBottomProps) {
  return (
    <section className={`relative w-full ${minHeightClassName}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black/50" />

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-7xl justify-center px-4 pb-6 sm:px-6 sm:pb-8 lg:pb-10">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.15em] uppercase text-center text-balance">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
