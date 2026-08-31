import { BriefcaseBusiness } from "lucide-react";
import type { Experience, ResumeData } from "@/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

function itemLabel(item: Experience) {
  return item.company ?? item.project;
}

function ExperienceItem({
  item,
  index,
  isFirst,
  isLast,
}: {
  item: Experience;
  index: number;
  isFirst: boolean;
  isLast: boolean;
}) {
  const label = itemLabel(item);
  const markerPosition = isFirst ? "top-0" : "top-8 sm:top-10";
  const lineAfterMarker = isFirst
    ? "top-3.5"
    : "top-[2.875rem] sm:top-[3.375rem]";

  return (
    <li
      className={cn(
        "relative ps-12 sm:ps-14",
        !isFirst && "pt-8 sm:pt-10",
      )}
    >
      {!isFirst ? (
        <span
          aria-hidden="true"
          className="absolute start-3.5 top-0 h-[2.875rem] w-px bg-slate-300 sm:h-[3.375rem] dark:bg-white/15"
        />
      ) : null}
      {!isLast ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute bottom-0 start-3.5 w-px bg-slate-300 dark:bg-white/15",
            lineAfterMarker,
          )}
        />
      ) : null}

      <span
        aria-hidden="true"
        className={cn(
          "absolute start-0 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-500/40 bg-white text-[0.625rem] font-bold tabular-nums text-cyan-700 shadow-[0_0_0_5px_rgba(255,255,255,0.72)] dark:bg-slate-950 dark:text-cyan-200 dark:shadow-[0_0_0_5px_rgba(2,6,23,0.72)]",
          markerPosition,
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <article
        className={cn(
          "min-w-0",
          !isLast &&
            "border-b border-slate-200 pb-8 sm:pb-10 dark:border-white/10",
        )}
      >
        <header className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-10">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold leading-tight text-slate-950 [overflow-wrap:anywhere] sm:text-2xl dark:text-white">
              {item.role}
            </h3>
            {label ? (
              <p className="mt-2 text-sm font-semibold text-cyan-700 [overflow-wrap:anywhere] sm:text-base dark:text-cyan-200">
                <bdi dir="auto">{label}</bdi>
              </p>
            ) : null}
            {item.domain ? (
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 [overflow-wrap:anywhere] dark:text-slate-400">
                {item.domain}
              </p>
            ) : null}
          </div>

          {item.dates || item.type ? (
            <div className="flex flex-wrap items-start gap-x-4 gap-y-2 border-t border-slate-200 pt-4 lg:block lg:border-s lg:border-t-0 lg:ps-6 lg:pt-0 dark:border-white/10">
              {item.dates ? (
                <p className="shrink-0 text-sm font-semibold tabular-nums text-slate-700 dark:text-slate-200">
                  <bdi dir="ltr">{item.dates}</bdi>
                </p>
              ) : null}
              {item.type ? (
                <p className="max-w-full text-sm leading-6 text-slate-500 [overflow-wrap:anywhere] lg:mt-2 dark:text-slate-400">
                  <bdi dir="auto">{item.type}</bdi>
                </p>
              ) : null}
            </div>
          ) : null}
        </header>

        <ul className="mt-6 max-w-3xl space-y-3">
          {item.highlights.map((highlight) => (
            <li
              key={highlight}
              className="grid min-w-0 grid-cols-[0.375rem_minmax(0,1fr)] items-start gap-3 text-sm leading-7 text-slate-600 sm:text-[0.9375rem] dark:text-slate-300"
            >
              <span
                aria-hidden="true"
                className="mt-[0.6875rem] h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300"
              />
              <span className="min-w-0 [overflow-wrap:anywhere]">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export function ExperienceSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.experience;

  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
        icon={BriefcaseBusiness}
      />

      <ol className="mx-auto max-w-5xl list-none">
        {resumeData.experience.map((item, index) => (
          <ExperienceItem
            key={`${item.role}-${itemLabel(item)}`}
            item={item}
            index={index}
            isFirst={index === 0}
            isLast={index === resumeData.experience.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}
