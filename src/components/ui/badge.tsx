import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-300/75 bg-white/45 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/12 dark:bg-white/4 dark:text-slate-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
