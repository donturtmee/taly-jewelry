"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type HeroSectionProps = {
  videoMp4?: string;
  videoWebm?: string;
  poster?: string;
};

function splitHeadlineLines(text: string): string[] {
  return text
    .split(/(?<=\.)\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export default function HeroSection({
  videoMp4 = "/videos/homepage/HeroSection.mp4",
  videoWebm = "",
  poster = "/placeholder.jpg",
}: HeroSectionProps) {
  const t = useTranslations("HomePage.Hero");
  const headlines = (t.raw("headlines") as string[]) || [];
  const totalHeadlines = headlines.length;

  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    if (totalHeadlines <= 1) return;

    const id = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % totalHeadlines);
    }, 7000);

    return () => clearInterval(id);
  }, [totalHeadlines]);

  if (!totalHeadlines) return null;

  const safeIndex = headlineIndex % totalHeadlines;
  const activeHeadline = headlines[safeIndex];
  const lines = splitHeadlineLines(activeHeadline);
  const subhead = t("subhead");

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        playsInline
        muted
        loop
        poster={poster || undefined}
      >
        {videoWebm ? <source src={videoWebm} type="video/webm" /> : null}
        {videoMp4 ? <source src={videoMp4} type="video/mp4" /> : null}
      </video>

      <div className="pointer-events-none absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-semibold tracking-[0.2em] text-white [word-spacing:0.2em] sm:text-4xl md:text-5xl">
            <span
              key={safeIndex}
              className="inline-block uppercase taly-hero-fade"
            >
              {lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </span>
          </h1>
          <p className="mt-6 text-sm text-white/85 sm:text-base">{subhead}</p>
        </div>
      </div>
    </section>
  );
}
