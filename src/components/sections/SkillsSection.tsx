import { Code2 } from "lucide-react";
import { ResumeData } from "@/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SkillsSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.skills;
  const knowledgeHeader = resumeData.ui.sectionHeaders.knowledge;

  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
        icon={Code2}
      />

      <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {resumeData.skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article
              key={group.title}
              className="border-t border-slate-200/90 py-6 dark:border-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-md border border-cyan-600/15 bg-cyan-500/8 p-2 text-cyan-700 dark:border-cyan-300/15 dark:bg-cyan-300/8 dark:text-cyan-200">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                  {group.title}
                </h3>
              </div>

              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600/70 dark:bg-cyan-300/70"
                      aria-hidden="true"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div
        id="knowledge"
        className="mt-8 grid scroll-mt-24 gap-5 border-y border-slate-200/90 py-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2.2fr)] lg:gap-10 dark:border-white/10"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-200">
            {knowledgeHeader.eyebrow}
          </p>
          <h3 className="mt-2 max-w-md text-base font-semibold leading-7 text-slate-950 dark:text-white">
            {knowledgeHeader.title}
          </h3>
        </div>

        <ul className="flex flex-wrap gap-2">
          {resumeData.expertise.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.title}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs font-medium leading-5 text-slate-700 dark:border-white/10 dark:bg-white/4 dark:text-slate-200"
              >
                <Icon
                  className="h-3.5 w-3.5 shrink-0 text-cyan-700 dark:text-cyan-200"
                  aria-hidden="true"
                />
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
