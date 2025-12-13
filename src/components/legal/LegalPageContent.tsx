"use client";

import { useTranslations } from "next-intl";

type LegalPageContentProps = {
  namespace: string;
  variant?: "light" | "dark";
};

export default function LegalPageContent({
  namespace,
  variant = "light",
}: LegalPageContentProps) {
  const t = useTranslations(namespace);

  const sections = t.raw("Sections") as
    | Record<string, { title: string; paragraphs?: string[] }>
    | undefined;

  const lastUpdated = t.raw("LastUpdated") as
    | { label?: string; date?: string }
    | undefined;

  const sectionEntries = sections ? Object.entries(sections) : [];

  const titleClass = variant === "dark" ? "text-white/95" : "text-neutral-900";
  const bodyClass = variant === "dark" ? "text-white/80" : "text-neutral-700";
  const ruleClass =
    variant === "dark" ? "border-white/10" : "border-neutral-200";

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className={`space-y-10 sm:space-y-12`}>
        {sectionEntries.map(([key, section]) => (
          <article
            key={key}
            className={`space-y-3 sm:space-y-4 pb-10 sm:pb-12 border-b ${ruleClass}`}
          >
            <h3 className={`text-sm sm:text-base font-semibold ${titleClass}`}>
              {section.title}
            </h3>

            <div
              className={`space-y-3 text-sm sm:text-base leading-relaxed ${bodyClass}`}
            >
              {(section.paragraphs ?? []).map((paragraph, index) => (
                <p key={index} className="text-balance">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      {lastUpdated?.label && lastUpdated?.date ? (
        <p className={`mt-10 text-center text-xs sm:text-sm ${bodyClass}`}>
          <span className="uppercase tracking-[0.18em]">
            {lastUpdated.label}
          </span>
          <span className="mx-2 text-white/30">•</span>
          <span>{lastUpdated.date}</span>
        </p>
      ) : null}
    </div>
  );
}
