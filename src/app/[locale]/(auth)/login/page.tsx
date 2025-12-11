// src/app/[locale]/login/page.tsx
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function LoginPage() {
  const t = await getTranslations("Login");

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/images/login/black_diamonds_bg.jpg"
          alt={t("backgroundAlt")}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="flex w-full justify-center lg:justify-start">
          <div className="w-full max-w-xl rounded-[32px] border border-white/15 bg-white/5 backdrop-blur-xs shadow-[0_24px_80px_rgba(0,0,0,0.60)] px-6 py-12 sm:px-10 sm:py-20">
            <div className="mb-8 sm:mb-10 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold uppercase">
                {t("title")}
              </h1>
              <p className="mt-3 text-xs sm:text-sm text-white text-balance uppercase tracking-[0.22em]">
                {t("subtitle")}
              </p>
              <p className="mt-4 text-sm sm:text-base text-white text-balance">
                {t("intro")}
              </p>
            </div>

            <form className="space-y-4 sm:space-y-5" action="#" method="post">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t("form.emailPlaceholder")}
                  className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white placeholder:text-white outline-none transition focus:border-white/70 focus:bg-white/10"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder={t("form.passwordPlaceholder")}
                  className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white placeholder:text-white outline-none transition focus:border-white/70 focus:bg-white/10"
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

            <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-xs sm:text-sm text-white/90">
              <p>{t("footer.newLabel")}</p>
              <button
                type="button"
                className="text-xs sm:text-sm font-medium hover:text-white/100"
              >
                {t("footer.createAccount")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
