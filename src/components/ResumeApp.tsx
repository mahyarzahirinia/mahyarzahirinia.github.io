"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { Locale, resumes } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

export function ResumeApp() {
  const [locale, setLocale] = useState<Locale>("en");
  const [activeSection, setActiveSection] = useState("profile");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hasLoadedPreferences, setHasLoadedPreferences] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLocale = window.localStorage.getItem("locale");
      const saved = window.localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (savedLocale === "en" || savedLocale === "fa") {
        setLocale(savedLocale);
      }
      setIsDark(saved ? saved === "dark" : prefersDark);
      setHasLoadedPreferences(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const currentResume = resumes[locale];
  const navItems = currentResume.sectionNav;
  const isRtl = currentResume.dir === "rtl";
  const nextLocale: Locale = locale === "en" ? "fa" : "en";
  const languageCode = locale === "en" ? "EN" : "فا";
  const themeLabel = isDark
    ? currentResume.ui.themeDarkLabel
    : currentResume.ui.themeLightLabel;
  const brandMark = currentResume.personal.name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, [isDark]);

  useEffect(() => {
    if (!hasLoadedPreferences) {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    function syncSystemTheme(event: MediaQueryListEvent) {
      if (!window.localStorage.getItem("theme")) {
        setIsDark(event.matches);
      }
    }

    media.addEventListener("change", syncSystemTheme);
    return () => media.removeEventListener("change", syncSystemTheme);
  }, [hasLoadedPreferences]);

  useEffect(() => {
    document.documentElement.lang = currentResume.locale;
    document.documentElement.dir = currentResume.dir;
    if (hasLoadedPreferences) {
      window.localStorage.setItem("locale", locale);
    }
  }, [
    currentResume.dir,
    currentResume.locale,
    hasLoadedPreferences,
    locale,
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    navItems.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [navItems]);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <div
      className={cn(
        "min-h-screen overflow-x-hidden bg-[#f7f8fb] text-slate-950 dark:bg-[#05070c] dark:text-white",
        isRtl && "font-persian",
      )}
      dir={currentResume.dir}
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-[#f7f8fb]/88 backdrop-blur-xl dark:border-white/10 dark:bg-[#05070c]/88">
        <nav
          className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8"
          aria-label={currentResume.ui.navAria}
        >
          <a
            href="#profile"
            className="group min-w-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
          >
            <span className="block text-xs font-bold uppercase tracking-[0.28em] text-slate-950 sm:hidden dark:text-white">
              {brandMark}
            </span>
            <span className="hidden truncate text-sm font-semibold text-slate-950 sm:block dark:text-white">
              {currentResume.personal.name}
            </span>
            <span className="hidden truncate text-xs text-slate-500 sm:block dark:text-slate-400">
              {currentResume.personal.title}
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "location" : undefined}
                className={cn(
                  "rounded-md px-2.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 xl:px-3",
                  activeSection === item.id
                    ? "text-cyan-700 dark:text-cyan-200"
                    : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDark ? currentResume.ui.themeLight : currentResume.ui.themeDark
              }
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/70 px-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-white/12 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-100"
            >
              {isDark ? (
                <Moon className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Sun className="h-4 w-4" aria-hidden="true" />
              )}
              <span
                className={cn(
                  "hidden leading-none sm:inline",
                  isRtl && "font-persian",
                )}
              >
                {themeLabel}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setLocale(nextLocale)}
              aria-label={`Switch language to ${currentResume.languageToggleLabel}`}
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/70 px-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-white/12 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-100"
            >
              <Languages className="h-4 w-4" aria-hidden="true" />
              <span
                className={cn(
                  "inline-flex h-6 min-w-7 items-center justify-center rounded bg-slate-100 px-1.5 text-[11px] leading-none text-slate-600 transition group-hover:bg-cyan-500/12 group-hover:text-cyan-700 dark:bg-white/10 dark:text-slate-300 dark:group-hover:text-cyan-100",
                  locale === "fa" && "font-persian",
                )}
              >
                {languageCode}
              </span>
              <span
                className={cn(
                  "hidden leading-none sm:inline",
                  nextLocale === "fa" && "font-persian",
                )}
              >
                {currentResume.languageToggleLabel}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label={currentResume.ui.menuToggle}
              aria-expanded={isMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 lg:hidden dark:border-white/12 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-100"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-slate-200/80 bg-[#f7f8fb]/96 px-5 py-3 backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-[#05070c]/96"
            >
              <div className="mx-auto grid max-w-7xl gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={
                      activeSection === item.id ? "location" : undefined
                    }
                    className={cn(
                      "rounded-md px-3 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
                      activeSection === item.id
                        ? "bg-cyan-500/12 text-cyan-700 dark:text-cyan-200"
                        : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main>
        <HeroSection resumeData={currentResume} />
        <ExperienceSection resumeData={currentResume} />
        <ProjectsSection resumeData={currentResume} />
        <EducationSection resumeData={currentResume} />
        <SkillsSection resumeData={currentResume} />
        <ContactSection resumeData={currentResume} />
      </main>
    </div>
  );
}
