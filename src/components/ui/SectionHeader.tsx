import { LucideIcon } from "lucide-react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="mb-10 grid gap-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end md:gap-10">
      <div>
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-200">
          <Icon className="h-4 w-4" aria-hidden="true" />
          {eyebrow}
        </div>
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl dark:text-white">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}
