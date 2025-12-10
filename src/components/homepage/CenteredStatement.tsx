type CenteredStatementProps = {
  title: string;
  lines: string[];
  className?: string;
};

export default function CenteredStatement({
  title,
  lines,
  className = "",
}: CenteredStatementProps) {
  return (
    <section className={`w-full bg-[#f7f7f7] py-10 sm:py-20 ${className}`}>
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center text-[#111827]">
        <h2 className="text-base font-extrabold sm:text-lg">{title}</h2>

        <div className="mt-2 h-px w-48 bg-[#111827]" />

        <div className="mt-4 space-y-1 text-base leading-relaxed text-balance sm:text-lg">
          {lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
