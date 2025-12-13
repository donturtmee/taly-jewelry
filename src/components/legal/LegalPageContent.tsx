"use client";

import { useTranslations } from "next-intl";

type LegalPageContentProps = {
  namespace: string;
};

type LegalSection = {
  title: string;
  paragraphs?: string[];
};

export default function LegalPageContent({ namespace }: LegalPageContentProps) {
  const t = useTranslations(namespace);

  const sections = t.raw("Sections") as
    | Record<string, LegalSection>
    | undefined;
  const sectionEntries = sections ? Object.entries(sections) : [];

  const hasMeta = Boolean(t.raw("Meta"));

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-3xl">
        <div className="space-y-10 sm:space-y-12">
          {sectionEntries.map(([key, section]) => (
            <article key={key} className="border-t border-neutral-200/80 pt-8">
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900">
                {section.title}
              </h3>
              <div className="mt-4 space-y-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                {(section.paragraphs ?? []).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {hasMeta && (
          <footer className="mt-12 border-t border-neutral-200/80 pt-8 text-center">
            <p className="text-xs text-neutral-500">
              {t("Meta.lastUpdatedLabel")}{" "}
              <span className="text-neutral-700">{t("Meta.lastUpdated")}</span>
            </p>
          </footer>
        )}
      </div>
    </section>
  );
}
