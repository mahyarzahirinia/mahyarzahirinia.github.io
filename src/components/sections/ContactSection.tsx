import {
  ArrowUpRight,
  Code2,
  Download,
  Mail,
  Phone,
  SquareUserRound,
  Send,
} from "lucide-react";
import { ResumeData } from "@/data/resume";
import { assetPath } from "@/lib/site";

const contactIcons = {
  email: Mail,
  phone: Phone,
  linkedin: SquareUserRound,
  github: Code2,
  telegram: Send,
};

export function ContactSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.contact;
  const isRtl = resumeData.dir === "rtl";

  return (
    <footer
      id="contact"
      className="section-shell pb-6 sm:pb-8"
      aria-labelledby="contact-heading"
    >
      <div className="relative overflow-hidden bg-[#171714] px-5 py-8 text-white shadow-[0_32px_100px_rgba(26,22,14,0.2)] sm:px-8 sm:py-10 lg:px-12 lg:py-14 dark:border dark:border-white/10 dark:bg-[#171714] dark:shadow-none">
        <div className="absolute inset-y-0 start-0 w-1 bg-[#a97f3f]" />

        <div className="relative">
          <div className="flex flex-col gap-4 border-b border-white/12 pb-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4b071]">
              {header.eyebrow}
            </p>
            <p className="inline-flex w-fit max-w-full items-start gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold leading-5 text-emerald-200">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(110,231,183,0.12)]"
                aria-hidden="true"
              />
              <span className="min-w-0 [overflow-wrap:anywhere]">
                {resumeData.availability}
              </span>
            </p>
          </div>

          <div className="grid gap-8 py-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)] lg:items-end lg:gap-12">
            <div className="min-w-0">
              <h2
                id="contact-heading"
                className="font-editorial max-w-5xl text-5xl font-normal leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
              >
                {header.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 [overflow-wrap:anywhere] sm:text-lg">
                {header.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d4b071] px-5 py-3 text-sm font-bold text-[#171714] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4b071]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {resumeData.ui.emailMohammad}
              </a>
              <a
                href={assetPath(resumeData.personal.resumeUrl)}
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:border-[#d4b071] hover:text-[#d4b071] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4b071]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {resumeData.ui.downloadResume}
              </a>
            </div>
          </div>

          <address className="border-t border-white/12 pt-6 not-italic">
            <ul
              className="flex flex-wrap gap-2.5"
              aria-label={isRtl ? "راه‌های ارتباطی" : "Contact links"}
            >
              {resumeData.contact.map((link) => {
                const Icon = contactIcons[link.kind];
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/45 hover:bg-cyan-300/10 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                    >
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{link.label}</span>
                      {isExternal ? (
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200"
                          aria-hidden="true"
                        />
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </address>

          <div className="mt-8 flex flex-col gap-5 border-t border-white/12 pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-semibold text-white">
                {resumeData.personal.name}
              </p>
              <p className="mt-1 text-sm text-slate-400">
                {resumeData.personal.title} · {resumeData.personal.location}
              </p>
            </div>
            <ul
              className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.1em] text-slate-400 sm:justify-end"
              aria-label={isRtl ? "حوزه‌های تخصصی" : "Areas of focus"}
            >
              {resumeData.badges.map((badge) => (
                <li key={badge}>{badge}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
