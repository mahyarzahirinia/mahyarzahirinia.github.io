import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-slate-950 text-white hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200",
  secondary:
    "border border-slate-300/80 bg-white/45 text-slate-900 hover:border-cyan-500 hover:text-cyan-700 dark:border-white/15 dark:bg-white/4 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-100",
  ghost:
    "text-slate-700 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
