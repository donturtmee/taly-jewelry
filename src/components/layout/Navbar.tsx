"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import NavigationLink from "@/components/next-intl/NavigationLink";
import LocaleSwitcher from "../next-intl/LocaleSwitcher";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export type TalyLink = {
  labelKey: string;
  href: string;
  target?: string;
};

type NavbarProps = {
  logoSrc?: string;
  logoAlt?: string;
  menuLinks?: TalyLink[];
};

export default function Navbar({
  logoSrc = "/images/layout/logo.png",
  logoAlt = "Taly Jewelry Logo",
  menuLinks = [
    { labelKey: "home", href: "/" },
    { labelKey: "login", href: "/login" },
    { labelKey: "studio", href: "/studio" },
    { labelKey: "gallery", href: "/gallery" },
    { labelKey: "about", href: "/about" },
    { labelKey: "contact", href: "/contact" },
  ],
}: NavbarProps) {
  const t = useTranslations("Navigation");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={[
          "fixed left-0 right-0 top-0 z-50 border-transparent transition-all",
          scrolled
            ? "backdrop-blur-md bg-black/25 border-b border-white/10"
            : "bg-transparent",
        ].join(" ")}
        aria-label="Primary"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-5 sm:py-6 md:py-7 pt-[max(env(safe-area-inset-top),theme(spacing.5))]">
            <button
              aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex items-center gap-3 text-white tracking-[0.25em] uppercase text-[12px]"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="hidden xs:inline">{t("menu")}</span>
            </button>

            <div
              className={`ml-auto sm:ml-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 ${
                menuOpen ? "hidden sm:block" : ""
              }`}
            >
              <Link href="/" aria-label={t("goHome")} className="block">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={220}
                  height={72}
                  className="h-10 w-auto sm:h-12 md:h-20"
                  priority
                />
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <LocaleSwitcher />
              <NavigationLink
                href="/studio"
                onClick={() => setMenuOpen(false)}
                className="hidden sm:inline-block rounded-full border border-white/70 px-5 py-2.5 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition"
              >
                {t("cta")}
              </NavigationLink>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 selection:bg-white/10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black"
              onClick={() => setMenuOpen(false)}
            />
            <nav
              className="relative z-10 flex h-full w-full items-center justify-center px-6"
              aria-label="Overlay"
            >
              <motion.ul
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {
                    opacity: 1,
                    transition: { staggerChildren: 0.04, staggerDirection: -1 },
                  },
                  show: {
                    opacity: 1,
                    transition: { delayChildren: 0.08, staggerChildren: 0.07 },
                  },
                }}
                className="mx-auto max-w-3xl w-full space-y-5 text-center"
              >
                {menuLinks.map((l) => (
                  <motion.li
                    key={l.href}
                    variants={{
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { duration: 0.25 } },
                    }}
                  >
                    <NavigationLink
                      href={l.href}
                      target={l.target}
                      onClick={() => setMenuOpen(false)}
                      className="inline-block w-full text-white/95 hover:text-white text-xl sm:text-2xl tracking-[0.3em] uppercase"
                    >
                      {t(l.labelKey)}
                    </NavigationLink>
                  </motion.li>
                ))}

                <motion.li
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="pt-8"
                >
                  <div className="flex items-center justify-center gap-8 text-xs uppercase tracking-[0.35em] text-white/70">
                    <NavigationLink
                      href="/privacy-policy"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-white"
                    >
                      {t("privacy")}
                    </NavigationLink>
                    <NavigationLink
                      href="/terms-and-conditions"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-white"
                    >
                      {t("terms")}
                    </NavigationLink>
                    <NavigationLink
                      href="/cookies"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-white"
                    >
                      {t("cookies")}
                    </NavigationLink>
                  </div>
                </motion.li>
              </motion.ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
