import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/images/contact/contact_reflected_bg.jpg"
          alt={t("backgroundAlt")}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="flex w-full justify-center lg:justify-end">
          <div className="w-full max-w-xl rounded-[32px] border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.60)] px-6 py-8 sm:px-10 sm:py-12">
            <div className="mb-8 sm:mb-10 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold uppercase">
                {t("title")}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-white text-balance">
                {t("intro.line1")}
              </p>
              <p className="mt-2 text-sm sm:text-base text-white text-balance">
                {t("intro.line2")}
              </p>
            </div>

            <form className="space-y-4 sm:space-y-5" action="#" method="post">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t("form.namePlaceholder")}
                  className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white placeholder:text-white outline-none transition focus:border-white/70 focus:bg-white/10"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t("form.emailPlaceholder")}
                  className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white placeholder:text-white outline-none transition focus:border-white/70 focus:bg-white/10"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t("form.messagePlaceholder")}
                  className="w-full resize-none rounded-3xl border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white placeholder:text-white outline-none transition focus:border-white/70 focus:bg-white/10"
                />
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-10 py-3 text-sm tracking-[0.25em] uppercase text-white hover:bg-white hover:text-slate-900 transition"
                >
                  {t("form.submit")}
                </button>
              </div>
            </form>

            <p className="mt-6 sm:mt-8 text-center text-[11px] sm:text-xs text-white leading-relaxed text-balance">
              {t("footer.note")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
