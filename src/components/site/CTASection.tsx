import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Ready to arrange your visit?",
  body = "Request an appointment and our team will contact you to confirm a time that suits you.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-page pb-24 lg:pb-32">
      <Reveal className="overflow-hidden rounded-3xl border border-border bg-primary-soft px-6 py-14 text-center sm:px-12 lg:py-20">
        <span className="eyebrow">Appointments</span>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-[1.15] sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {body}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/appointment"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:opacity-90 hover:shadow-lift sm:w-auto"
          >
            Book an Appointment
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-border-strong bg-background px-7 py-3.5 text-sm font-medium transition-colors hover:bg-secondary sm:w-auto"
          >
            Contact the Clinic
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
