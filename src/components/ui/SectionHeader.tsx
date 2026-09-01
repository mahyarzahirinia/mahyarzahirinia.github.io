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
    <div className="mb-14 grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-end md:gap-16">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#8b6a35] dark:text-[#d4b071]">
          <Icon className="h-4 w-4" aria-hidden="true" />
          {eyebrow}
        </div>
        <h2 className="font-editorial text-4xl font-normal leading-[1.04] tracking-[-0.035em] text-[#151512] sm:text-5xl lg:text-6xl dark:text-[#f1eee7]">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl border-s border-black/15 ps-5 text-sm leading-7 text-[#68645d] sm:text-base sm:leading-8 dark:border-white/15 dark:text-[#aaa59c]">
        {description}
      </p>
    </div>
  );
}
