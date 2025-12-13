import Image from "next/image";
import { useTranslations } from "next-intl";
import NavigationLink from "@/components/next-intl/NavigationLink";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="text-white bg-[url('/images/layout/footer-bg.jpg')] bg-cover bg-center font-['Lato',_sans-serif]">
      <div className="bg-black/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid gap-10 lg:gap-16 md:grid-cols-5 text-center md:text-left">
            {/* 1. Logo + tagline */}
            <div className="space-y-4">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/images/layout/logo.png"
                  alt="Taly Jewelry"
                  width={180}
                  height={60}
                  className="h-auto w-auto"
                />
              </div>
              <p className="mx-auto md:mx-0 max-w-xs text-sm leading-relaxed text-slate-100">
                {t("taglineLine1")}
                <br />
                {t("taglineLine2")}
              </p>
              <a
                href="https://www.instagram.com/advg.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs text-slate-300 hover:text-slate-50 transition"
              >
                {t("copyright")}
              </a>
            </div>

            {/* 2. Company */}
            <div className="space-y-3">
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#86DBFF]">
                {t("companyTitle")}
              </h3>
              <ul className="space-y-2 text-sm text-slate-100">
                <li>
                  <NavigationLink
                    href="/about"
                    className="text-slate-100 hover:text-slate-50"
                  >
                    {t("companyItem1")}
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href="/about/our-story"
                    className="text-slate-100 hover:text-slate-50"
                  >
                    {t("companyItem2")}
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href="/contact"
                    className="text-slate-100 hover:text-slate-50"
                  >
                    {t("companyItem3")}
                  </NavigationLink>
                </li>
              </ul>
            </div>

            {/* 3. Services */}
            <div className="space-y-3">
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#86DBFF]">
                {t("servicesTitle")}
              </h3>
              <ul className="space-y-2 text-sm text-slate-100">
                <li>
                  <NavigationLink
                    href="/services/custom-jewelry"
                    className="text-slate-100 hover:text-slate-50"
                  >
                    {t("servicesItem1")}
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href="/pricing"
                    className="text-slate-100 hover:text-slate-50"
                  >
                    {t("servicesItem2")}
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href="/studio"
                    className="text-slate-100 hover:text-slate-50"
                  >
                    {t("servicesItem3")}
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href="/pricing"
                    className="text-slate-100 hover:text-slate-50"
                  >
                    {t("servicesItem4")}
                  </NavigationLink>
                </li>
              </ul>
            </div>

            {/* 4. Resources */}
            <div className="space-y-3">
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#86DBFF]">
                {t("resourcesTitle")}
              </h3>
              <ul className="space-y-2 text-sm text-slate-100">
                <li>
                  <NavigationLink
                    href="/faq"
                    className="text-slate-100 hover:text-slate-50"
                  >
                    {t("resourcesItem1")}
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href="/support"
                    className="text-slate-100 hover:text-slate-50"
                  >
                    {t("resourcesItem2")}
                  </NavigationLink>
                </li>
              </ul>
            </div>

            {/* 5. Social icons */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex gap-5">
                <a
                  href="https://facebook.com/taly.jewelry"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Taly Jewelry on Facebook"
                  className="hover:opacity-80 transition"
                >
                  <Facebook className="h-5 w-5 text-[#BDECFF]" />
                </a>
                <a
                  href="https://www.linkedin.com/company/taly.jewelry"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Taly Jewelry on LinkedIn"
                  className="hover:opacity-80 transition"
                >
                  <Linkedin className="h-5 w-5 text-[#BDECFF]" />
                </a>
                <a
                  href="https://twitter.com/taly.jewelry"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Taly Jewelry on Twitter"
                  className="hover:opacity-80 transition"
                >
                  <Twitter className="h-5 w-5 text-[#BDECFF]" />
                </a>
                <a
                  href="https://instagram.com/taly.jewelry"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Taly Jewelry on Instagram"
                  className="hover:opacity-80 transition"
                >
                  <Instagram className="h-5 w-5 text-[#BDECFF]" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-slate-200">
              <NavigationLink
                href="/legal"
                className="text-slate-200 hover:text-slate-50"
              >
                {t("privacyLink")}
              </NavigationLink>
              <span className="opacity-60">•</span>
              <NavigationLink
                href="/terms-and-conditions"
                className="text-slate-200 hover:text-slate-50"
              >
                {t("termsLink")}
              </NavigationLink>
              <span className="opacity-60">•</span>
              <NavigationLink
                href="/cookies"
                className="text-slate-200 hover:text-slate-50"
              >
                {t("cookiesLink")}
              </NavigationLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
