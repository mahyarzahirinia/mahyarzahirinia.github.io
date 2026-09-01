import { ArrowUpRight, Goal } from "lucide-react";
import { Project } from "@/data/resume";

export function ProjectCard({
  project,
  index,
  outcomeLabel = "Outcome",
  artifactLabel = "View project",
  techLabel = "Tech stack",
}: {
  project: Project;
  index: number;
  outcomeLabel?: string;
  artifactLabel?: string;
  techLabel?: string;
}) {
  return (
    <article className="group relative py-12 sm:py-16">
      <div className="grid min-w-0 gap-6 md:grid-cols-[4rem_minmax(0,0.78fr)_minmax(0,1.22fr)] md:gap-8 lg:grid-cols-[5rem_minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-10">
        <div className="flex items-center justify-between md:block">
          <span
            dir="ltr"
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-black/15 bg-white/25 px-2 font-mono text-xs font-bold tracking-[0.14em] text-[#716d65] transition duration-300 group-hover:border-[#8b6a35] group-hover:text-[#8b6a35] dark:border-white/15 dark:bg-white/5 dark:text-[#aaa59c] dark:group-hover:border-[#d4b071] dark:group-hover:text-[#d4b071]"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-slate-200 md:mt-5 md:block md:w-8 md:flex-none dark:bg-white/10" />
        </div>

        <header className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6a35] dark:text-[#d4b071]">
            {project.type}
          </p>
          <h3 className="font-editorial mt-3 text-3xl font-normal leading-tight text-[#151512] [overflow-wrap:anywhere] sm:text-4xl dark:text-[#f1eee7]">
            {project.title}
          </h3>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-slate-600 transition hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 dark:text-slate-300 dark:hover:text-cyan-200"
            >
              <span>{artifactLabel}</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          ) : null}
        </header>

        <div className="min-w-0">
          <p className="text-base leading-8 text-slate-600 [overflow-wrap:anywhere] dark:text-slate-300">
            {project.description}
          </p>

          <div className="mt-6 grid gap-2 border-s border-[#8b6a35]/50 ps-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-5">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#8b6a35] dark:text-[#d4b071]">
              <Goal className="h-4 w-4 shrink-0" aria-hidden="true" />
              {outcomeLabel}
            </p>
            <p className="text-sm leading-7 text-slate-700 [overflow-wrap:anywhere] dark:text-slate-200">
              {project.impact}
            </p>
          </div>

          <div className="mt-6">
            <p className="sr-only">{techLabel}</p>
            <ul className="flex flex-wrap gap-2" aria-label={techLabel}>
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-slate-300/75 bg-white/55 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur dark:border-white/12 dark:bg-white/6 dark:text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
