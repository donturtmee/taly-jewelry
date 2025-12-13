type CenteredStatementProps = {
  title: string;
  lines: string[];
  className?: string;
  variant?: "light" | "transparentDark";
};

export default function CenteredStatement({
  title,
  lines,
  className = "",
  variant = "light",
}: CenteredStatementProps) {
  const isDark = variant === "transparentDark";

  const sectionClass = isDark
    ? `w-full bg-transparent py-0 ${className}`
    : `w-full bg-[#f7f7f7] py-10 sm:py-20 ${className}`;

  const textClass = isDark ? "text-white" : "text-[#111827]";
  const subTextClass = isDark ? "text-white/80" : "text-[#111827]";
  const dividerClass = isDark ? "bg-white/30" : "bg-[#111827]";

  return (
    <section className={sectionClass}>
      <div
        className={`mx-auto flex max-w-3xl flex-col items-center px-4 text-center ${textClass}`}
      >
        <h2 className="text-base font-extrabold sm:text-lg">{title}</h2>

        <div className={`mt-3 h-px w-48 ${dividerClass}`} />

        <div
          className={`mt-5 space-y-2 text-sm sm:text-base leading-relaxed text-balance ${subTextClass}`}
        >
          {lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
