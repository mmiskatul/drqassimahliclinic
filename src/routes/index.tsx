import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Check,
} from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import loungeImg from "@/assets/lounge.jpg";
import portraitImg from "@/assets/portrait-placeholder.jpg";
import { clinic, journey, services } from "@/lib/clinic";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Qassim Ahli Clinic | Personalized Healthcare in Jumeirah, Dubai" },
      {
        name: "description",
        content:
          "Dr. Qassim Ahli Clinic provides a personalized healthcare experience in Jumeirah, Dubai, with a focus on professional medical care and patient comfort.",
      },
      {
        property: "og:title",
        content: "Dr. Qassim Ahli Clinic | Personalized Healthcare in Jumeirah, Dubai",
      },
      {
        property: "og:description",
        content:
          "A modern approach to healthcare combining professional expertise, personalized attention and a comfortable patient experience in Jumeirah, Dubai.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const trust = [
  { icon: UserRound, label: "Personalized Care" },
  { icon: Stethoscope, label: "Professional Medical Expertise" },
  { icon: HeartHandshake, label: "Patient-Centered Experience" },
  { icon: MapPin, label: "Convenient Jumeirah Location" },
];

const aboutPoints = [
  "Personalized consultation",
  "Comfortable environment",
  "Patient-focused care",
  "Convenient Dubai location",
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36">
        <div className="container-page grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:py-16">
          <Reveal>
            <span className="eyebrow">Dr. Qassim Ahli Clinic</span>
            <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] sm:text-5xl lg:text-[4rem]">
              Personalized Healthcare, Designed Around You.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A modern approach to healthcare that combines professional expertise, personalized
              attention, and a comfortable patient experience in the heart of Jumeirah, Dubai.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:opacity-90 hover:shadow-lift"
              >
                Book an Appointment
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-border-strong bg-background px-7 py-4 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Explore Our Services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-secondary">
              <img
                src={heroImg}
                alt="Bright, calm consultation room at Dr. Qassim Ahli Clinic in Jumeirah, Dubai"
                width={1280}
                height={1600}
                fetchPriority="high"
                className="h-[26rem] w-full object-cover sm:h-[34rem] lg:h-[38rem]"
              />
            </div>
            <div className="absolute -bottom-6 left-4 hidden rounded-2xl border border-border bg-background/95 p-5 shadow-lift backdrop-blur sm:block lg:-left-10">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary-soft">
                  <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold">Trusted Medical Care</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Jumeirah, Dubai</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="mt-14 border-y border-border bg-secondary lg:mt-20" aria-label="Why patients choose us">
        <div className="container-page grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-12">
          {trust.map((item, i) => (
            <Reveal key={item.label} delay={i * 70} className="flex items-center gap-3">
              <item.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">{item.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="container-page py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <img
                src={loungeImg}
                alt="Calm waiting lounge with neutral furnishings and natural daylight"
                width={1200}
                height={1504}
                loading="lazy"
                className="h-[24rem] w-full object-cover lg:h-[32rem]"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="About the clinic"
              title="Healthcare With a Personal Touch"
              description="Our clinic is built around unhurried consultations and clear communication. Care is shaped by your circumstances and preferences, in a setting designed to feel calm rather than clinical."
            />
            <Reveal delay={100} className="mt-10">
              <ul className="grid gap-3 sm:grid-cols-2">
                {aboutPoints.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                      <Check className="size-3.5 text-primary" aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Discover Our Clinic
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-y border-border bg-secondary py-24 lg:py-32">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our services"
            title="Comprehensive Care, Focused on You"
            description="Consultation-led care with time to listen, explain and agree on next steps together."
            action={
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                View all services
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            }
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured doctor */}
      <section className="container-page py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-secondary">
              <img
                src={portraitImg}
                alt="Portrait placeholder — to be replaced with an authentic photograph of Dr. Qassim Ahli"
                width={1000}
                height={1250}
                loading="lazy"
                className="h-[24rem] w-full object-cover lg:h-[30rem]"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeader
              eyebrow="Our doctor"
              title="Meet Dr. Qassim Ahli"
              description="Dr. Qassim Ahli leads the clinic in Jumeirah, Dubai, with a practice built on listening carefully and explaining clearly."
            />
            <Reveal delay={100} className="mt-8 space-y-5">
              <div className="rounded-2xl border border-dashed border-border bg-secondary/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Editable content
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Qualifications, specializations and years of professional experience have not
                  been published here because they have not been verified. Add the clinic's
                  official details to complete this section.
                </p>
              </div>
              <Link
                to="/doctor"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                View Doctor Profile
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Patient journey */}
      <section className="border-y border-border bg-secondary py-24 lg:py-32">
        <div className="container-page">
          <SectionHeader
            eyebrow="Patient experience"
            title="A Better Healthcare Experience From Start to Finish"
            description="A simple, considered path from your first enquiry through to follow-up."
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, i) => (
              <Reveal key={step.step} delay={i * 70}>
                <li className="h-full rounded-3xl border border-border bg-background p-8">
                  <span className="font-display text-3xl font-semibold text-primary/25">
                    {step.step}
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={120} className="mt-12">
            <Link
              to="/patient-experience"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Learn what to expect
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="container-page py-24 lg:py-32">
        <div className="grid items-center gap-10 rounded-3xl border border-border p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">Visit us</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              In the heart of Jumeirah
            </h2>
            <address className="mt-6 text-base not-italic leading-relaxed text-muted-foreground">
              {clinic.address.line1}
              <br />
              {clinic.address.line2}
              <br />
              {clinic.address.city}, {clinic.address.country}
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={clinic.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Get Directions
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Contact details
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100} className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title={`Map showing the location of ${clinic.name}`}
              src={clinic.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full lg:h-80"
            />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
