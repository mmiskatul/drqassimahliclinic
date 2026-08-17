import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "max-w-2xl",
        action && "md:flex-row md:items-end md:justify-between md:max-w-none md:gap-10",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-4", action && "max-w-2xl")}>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
