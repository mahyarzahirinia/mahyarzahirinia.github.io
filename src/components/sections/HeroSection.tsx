"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  Code2,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  SquareUserRound,
} from "lucide-react";
import { ResumeData } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/site";

const contactIcons = {
  email: Mail,
  phone: Phone,
  linkedin: SquareUserRound,
  github: Code2,
  telegram: Send,
};

export function HeroSection({ resumeData }: { resumeData: ResumeData }) {
  const AccentIcon = resumeData.accentIcon;
  const reduceMotion = useReducedMotion();
  const profileLabel =
    resumeData.sectionNav.find((item) => item.id === "profile")?.label ??
    resumeData.ui.operatingProfile;
  const initials = resumeData.personal.name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");
  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section id="profile" className="relative overflow-hidden pt-18">
      <div className="pointer-events-none absolute inset-x-0 top-18 -z-0 h-[32rem] bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.10),transparent_62%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.10),transparent_58%)]" />

      <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <motion.div
            {...motionProps}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="min-w-0"
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-200">
              {profileLabel}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-slate-950 sm:text-6xl dark:text-white">
              {resumeData.personal.name}
            </h1>
            <p className="mt-5 text-xl font-medium text-slate-700 sm:text-2xl dark:text-slate-200">
              {resumeData.personal.title}
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {resumeData.personal.location}
            </p>
          </motion.div>

          <motion.aside
            {...motionProps}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08 }}
            className="relative min-h-64 overflow-hidden rounded-2xl border border-slate-900/10 bg-slate-950 p-5 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-[#0b1019] dark:shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:min-h-72 sm:p-7"
            aria-label={resumeData.ui.careerHighlights}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(34,211,238,0.24),transparent_30%),linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.04))]" />
            <div className="relative flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {resumeData.ui.operatingProfile}
                </p>
                <p className="mt-3 max-w-xs text-lg font-semibold leading-7">
                  {resumeData.ui.operatingTitle}
                </p>
              </div>
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-cyan-300">
                <AccentIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>

            <div className="relative my-5 flex items-end justify-between gap-5 border-y border-white/10 py-4 sm:my-7 sm:gap-6 sm:py-5">
              <span
                className="text-5xl font-semibold tracking-[-0.06em] text-white/95"
                aria-hidden="true"
              >
                {initials}
              </span>
              <p className="max-w-52 text-end text-sm leading-6 text-slate-300">
                {resumeData.availability}
              </p>
            </div>

            <div className="relative grid grid-cols-2 gap-x-6 gap-y-4">
              {resumeData.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={index > 1 ? "hidden min-w-0 sm:block" : "min-w-0"}
                >
                  <p className="text-xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <motion.div
          {...motionProps}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.14 }}
          className="mt-8 flex flex-wrap gap-2.5"
        >
          {resumeData.contact.map((link) => {
            const Icon = contactIcons[link.kind];

            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-300/80 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-white/12 dark:bg-white/4 dark:text-slate-300 dark:hover:border-cyan-300 dark:hover:text-cyan-100"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </motion.div>

        <div className="mt-10 max-w-4xl">
          <p className="text-lg leading-9 text-slate-700 [overflow-wrap:anywhere] sm:text-xl dark:text-slate-300">
            {resumeData.personal.summary}
          </p>
          <p className="mt-4 hidden text-base leading-8 text-slate-500 [overflow-wrap:anywhere] sm:block dark:text-slate-400">
            {resumeData.personal.profile}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="#projects">
            {resumeData.ui.viewProjects}
            <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            href={assetPath(resumeData.personal.resumeUrl)}
            variant="secondary"
          >
            {resumeData.ui.downloadResume}
            <Download className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="#contact" variant="ghost" className="hidden sm:inline-flex">
            {resumeData.ui.contactMe}
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-8 hidden flex-wrap gap-2 sm:flex">
          {resumeData.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
