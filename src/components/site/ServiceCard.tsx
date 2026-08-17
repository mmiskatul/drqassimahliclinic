import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/clinic";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group flex flex-col justify-between rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-lift"
    >
      <div>
        <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
        Learn more
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
