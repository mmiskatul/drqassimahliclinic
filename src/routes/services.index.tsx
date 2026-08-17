import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTASection } from "@/components/site/CTASection";
import { MEDICAL_DISCLAIMER, services } from "@/lib/clinic";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Dr. Qassim Ahli Clinic, Jumeirah Dubai" },
      {
        name: "description",
        content:
          "Consultation-led medical services at Dr. Qassim Ahli Clinic in Jumeirah, Dubai, including primary care, medical consultation and preventive healthcare.",
      },
      { property: "og:title", content: "Services | Dr. Qassim Ahli Clinic" },
      {
        property: "og:description",
        content:
          "Explore the consultation-led services offered at Dr. Qassim Ahli Clinic in Jumeirah, Dubai.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Comprehensive Care, Focused on You"
        description="Each appointment is consultation-led: time to describe your concern, a careful review, and a clear plan agreed together."
      />

      <section className="container-page py-20 lg:py-28">
        {services.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-border p-12 text-center text-muted-foreground">
            Services will be published here shortly.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mt-12 rounded-2xl border border-dashed border-border bg-secondary/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Editable content
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            The services listed above are structured placeholders. Replace them with the clinic's
            actual service list in <code>src/lib/clinic.ts</code>; each entry generates its own
            detail page automatically.
          </p>
        </Reveal>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">{MEDICAL_DISCLAIMER}</p>
      </section>

      <CTASection />
    </>
  );
}
