import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { ResumeData } from "@/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EducationSection({ resumeData }: { resumeData: ResumeData }) {
  const EducationIcon = resumeData.education.icon;
  const header = resumeData.ui.sectionHeaders.education;
  const isRtl = resumeData.dir === "rtl";

  return (
    <section id="education" className="section-shell">
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
        icon={GraduationCap}
      />

      <div className="grid border-y border-slate-200/90 lg:grid-cols-2 dark:border-white/10">
        <article className="py-7 lg:pe-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-md border border-cyan-600/15 bg-cyan-500/8 p-2 text-cyan-700 dark:border-cyan-300/15 dark:bg-cyan-300/8 dark:text-cyan-200">
              <EducationIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
              {header.eyebrow}
            </h3>
          </div>

          <div className="mt-6">
            <h4 className="max-w-xl text-xl font-semibold leading-8 text-slate-950 dark:text-white">
              {resumeData.education.degree}
            </h4>
            <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">
              {resumeData.education.institution}
            </p>
            <p className="mt-5 border-s-2 border-cyan-600/50 ps-3 text-sm font-semibold text-slate-500 dark:border-cyan-300/50 dark:text-slate-400">
              {resumeData.education.dates}
            </p>
          </div>
        </article>

        <div className="border-t border-slate-200/90 py-7 lg:border-s lg:border-t-0 lg:ps-10 dark:border-white/10">
          <div className="flex items-center gap-3">
            <span className="inline-flex rounded-md border border-cyan-600/15 bg-cyan-500/8 p-2 text-cyan-700 dark:border-cyan-300/15 dark:bg-cyan-300/8 dark:text-cyan-200">
              <LanguagesIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3
              id="languages-heading"
              className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400"
            >
              {isRtl ? "زبان‌ها" : "Languages"}
            </h3>
          </div>

          <ul
            className="mt-5 divide-y divide-slate-200/90 border-t border-slate-200/90 dark:divide-white/10 dark:border-white/10"
            aria-labelledby="languages-heading"
          >
            {resumeData.languages.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.language}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <span className="flex items-center gap-2.5 text-base font-semibold text-slate-950 dark:text-white">
                    <Icon
                      className="h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-200"
                      aria-hidden="true"
                    />
                    {item.language}
                  </span>
                  <span className="ps-6 text-sm leading-6 text-slate-600 sm:ps-0 sm:text-end dark:text-slate-300">
                    {item.level}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
