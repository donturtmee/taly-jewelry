"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Step = 1 | 2 | 3 | 4;

type FormState = {
  email: string;
  code: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  birthTime: string;
  gender: string;
  birthPlace: string;
};

export default function RegisterPage() {
  const t = useTranslations("Register");
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>({
    email: "",
    code: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    birthTime: "",
    gender: "",
    birthPlace: "",
  });

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleNext = () => {
    if (step < 4) setStep((s) => (s + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => (s - 1) as Step);
  };

  const handleFinish = () => {
    console.log("Register payload", form);
  };

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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="w-full max-w-xl rounded-[32px] border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.60)] px-6 py-8 sm:px-10 sm:py-12">
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-balance uppercase">
              {t("title")}
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-white text-balance uppercase tracking-[0.22em]">
              {t("subtitle")}
            </p>
            <p className="mt-4 text-sm sm:text-base text-white text-balance">
              {t(`steps.${step}.intro`)}
            </p>
            <p className="mt-2 text-xs sm:text-sm text-white/80">
              {t("stepIndicator", { current: step, total: 4 })}
            </p>
          </div>

          <form className="space-y-4 sm:space-y-5" action="#" method="post">
            {step === 1 && (
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder={t("form.emailPlaceholder")}
                  className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white placeholder:text-white outline-none transition focus:border-white/70 focus:bg-white/10"
                />
              </div>
            )}

            {step === 2 && (
              <div>
                <input
                  type="text"
                  name="code"
                  value={form.code}
                  onChange={handleChange("code")}
                  placeholder={t("form.codePlaceholder")}
                  className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white placeholder:text-white outline-none tracking-[0.4em] text-center transition focus:border-white/70 focus:bg-white/10"
                />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange("firstName")}
                    placeholder={t("form.firstNamePlaceholder")}
                    className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white placeholder:text-white outline-none transition focus:border-white/70 focus:bg-white/10"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange("lastName")}
                    placeholder={t("form.lastNamePlaceholder")}
                    className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white placeholder:text-white outline-none transition focus:border-white/70 focus:bg-white/10"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="birthDate"
                    value={form.birthDate}
                    onChange={handleChange("birthDate")}
                    className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white outline-none transition focus:border-white/70 focus:bg-white/10 [color-scheme:dark]"
                  />
                  <input
                    type="time"
                    name="birthTime"
                    value={form.birthTime}
                    onChange={handleChange("birthTime")}
                    className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white outline-none transition focus:border-white/70 focus:bg-white/10 [color-scheme:dark]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange("gender")}
                    className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white outline-none transition focus:border-white/70 focus:bg-white/10 bg-transparent"
                  >
                    <option value="" className="bg-slate-900">
                      {t("form.genderPlaceholder")}
                    </option>
                    <option value="female" className="bg-slate-900">
                      {t("form.genderFemale")}
                    </option>
                    <option value="male" className="bg-slate-900">
                      {t("form.genderMale")}
                    </option>
                    <option value="other" className="bg-slate-900">
                      {t("form.genderOther")}
                    </option>
                  </select>

                  <input
                    type="text"
                    name="birthPlace"
                    value={form.birthPlace}
                    onChange={handleChange("birthPlace")}
                    placeholder={t("form.birthPlacePlaceholder")}
                    className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base text-white placeholder:text-white outline-none transition focus:border-white/70 focus:bg-white/10"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4 text-sm sm:text-base text-white/90 text-center">
                <p>{t("steps.4.summaryTitle")}</p>
                <p className="text-xs sm:text-sm text-white/70">
                  {t("steps.4.summaryNote")}
                </p>
              </div>
            )}

            <div className="pt-4 flex justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="flex-1 rounded-full border border-white/30 bg-white/5 px-4 py-3 text-xs sm:text-sm uppercase tracking-[0.18em] text-white/80 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-white/10 transition"
              >
                {t("form.back")}
              </button>

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 rounded-full border border-white/70 bg-white/10 px-4 py-3 text-xs sm:text-sm uppercase tracking-[0.22em] text-white hover:bg-white hover:text-slate-900 transition"
                >
                  {t("form.next")}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinish}
                  className="flex-1 rounded-full border border-white/70 bg-white/10 px-4 py-3 text-xs sm:text-sm uppercase tracking-[0.22em] text-white hover:bg-white hover:text-slate-900 transition"
                >
                  {t("form.finish")}
                </button>
              )}
            </div>
          </form>

          {step === 1 && (
            <div className="mt-8 flex flex-col items-center justify-center gap-2 text-xs sm:text-sm text-white/90">
              <p>{t("form.alreadyAccount")}</p>
              <Link
                href="/login"
                className="font-medium underline underline-offset-4 hover:text-white"
              >
                {t("form.loginCta")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
