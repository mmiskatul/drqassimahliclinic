import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import stillLifeImg from "@/assets/stilllife.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { getService, MEDICAL_DISCLAIMER, services } from "@/lib/clinic";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | Dr. Qassim Ahli Clinic" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.title} | Dr. Qassim Ahli Clinic, Dubai` },
        { name: "description", content: service.summary },
        { property: "og:title", content: `${service.title} | Dr. Qassim Ahli Clinic` },
        { property: "og:description", content: service.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <div className="container-page py-40 text-center">
      <h1 className="font-display text-3xl font-semibold">Service not found</h1>
      <p className="mt-3 text-muted-foreground">
        This service isn't available. Browse everything the clinic offers instead.
      </p>
      <Link
        to="/services"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
      >
        View all services
      </Link>
    </div>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.summary}>
        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All services
        </Link>
      </PageHero>

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-14">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.overview}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-semibold">What to expect</h2>
              <ul className="mt-6 space-y-4">
                {service.expectations.map((e) => (
                  <li key={e} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                      <Check className="size-3 text-primary" aria-hidden="true" />
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-semibold">Who may benefit</h2>
              <ul className="mt-6 space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                      <Check className="size-3 text-primary" aria-hidden="true" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-semibold">Consultation information</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.consultation}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>
              <div className="mt-4">
                <FAQ items={service.faqs} />
              </div>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Reveal className="overflow-hidden rounded-[2rem] border border-border">
              <img
                src={stillLifeImg}
                alt="Stethoscope and notebook on a pale marble surface"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
            </Reveal>

            {service.placeholder ? (
              <Reveal className="rounded-2xl border border-dashed border-border bg-secondary/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Editable content
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  This service is a structured placeholder. Replace its wording with the clinic's
                  verified description.
                </p>
              </Reveal>
            ) : null}

            <Reveal className="rounded-3xl border border-border bg-secondary p-7">
              <h2 className="font-display text-base font-semibold">Other services</h2>
              <ul className="mt-5 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: o.slug }}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <p className="rounded-2xl border border-border p-6 text-xs leading-relaxed text-muted-foreground">
              {MEDICAL_DISCLAIMER}
            </p>
          </aside>
        </div>
      </section>

      <CTASection title={`Request a ${service.title.toLowerCase()} appointment`} />
    </>
  );
}
