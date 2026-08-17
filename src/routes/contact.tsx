import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { clinic } from "@/lib/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Dr. Qassim Ahli Clinic, Jumeirah Dubai" },
      {
        name: "description",
        content:
          "Visit Dr. Qassim Ahli Clinic at Villa No 399A, Jumeira St, Jumeirah, Dubai. Find directions, Instagram and appointment options.",
      },
      { property: "og:title", content: "Contact | Dr. Qassim Ahli Clinic" },
      {
        property: "og:description",
        content: "Location, directions and contact options for the clinic in Jumeirah, Dubai.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with the clinic"
        description="We're located on Jumeira Street in Jumeirah, Dubai. Appointment requests can be made online and our team will follow up to confirm."
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-6">
            <Reveal className="rounded-3xl border border-border p-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary-soft">
                <MapPin className="size-5 text-primary" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-lg font-semibold">{clinic.name}</h2>
              <address className="mt-3 text-base not-italic leading-relaxed text-muted-foreground">
                {clinic.address.line1}
                <br />
                {clinic.address.line2}
                <br />
                {clinic.address.city}, {clinic.address.country}
              </address>
              <a
                href={clinic.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get Directions
              </a>
            </Reveal>

            <Reveal delay={80} className="rounded-3xl border border-border p-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary-soft">
                <Phone className="size-5 text-primary" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-lg font-semibold">Phone &amp; email</h2>
              {clinic.phone || clinic.email ? (
                <div className="mt-3 space-y-1 text-base text-muted-foreground">
                  {clinic.phone ? <p>{clinic.phone}</p> : null}
                  {clinic.email ? <p>{clinic.email}</p> : null}
                </div>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A published phone number and email address are not available yet. Please use the
                  appointment request form and our team will contact you.
                </p>
              )}
              <Link
                to="/appointment"
                className="mt-6 inline-flex items-center rounded-full border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Request an appointment
              </Link>
            </Reveal>

            <Reveal delay={140} className="rounded-3xl border border-border p-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary-soft">
                <Clock className="size-5 text-primary" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-lg font-semibold">Opening hours</h2>
              {clinic.openingHours ? (
                <ul className="mt-3 space-y-1 text-base text-muted-foreground">
                  {clinic.openingHours.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Opening hours have not been published. Please contact the clinic to confirm
                  availability.
                </p>
              )}
            </Reveal>

            <Reveal delay={200} className="rounded-3xl border border-border p-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary-soft">
                <Instagram className="size-5 text-primary" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-lg font-semibold">Follow us</h2>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-base text-primary hover:underline"
              >
                {clinic.instagramHandle}
              </a>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <iframe
                title={`Google Map showing the location of ${clinic.name}`}
                src={clinic.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[32rem] w-full lg:h-[42rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
