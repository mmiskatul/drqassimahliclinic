import { createFileRoute } from "@tanstack/react-router";
import { Clock, HeartHandshake, Leaf, MessagesSquare } from "lucide-react";
import exteriorImg from "@/assets/exterior.jpg";
import receptionImg from "@/assets/reception.jpg";
import corridorImg from "@/assets/corridor.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { clinic } from "@/lib/clinic";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Dr. Qassim Ahli Clinic, Jumeirah Dubai" },
      {
        name: "description",
        content:
          "Learn about Dr. Qassim Ahli Clinic in Jumeirah, Dubai — our philosophy of unhurried consultations, personalized care and a calm clinical environment.",
      },
      { property: "og:title", content: "About Us | Dr. Qassim Ahli Clinic" },
      {
        property: "og:description",
        content:
          "A personalized approach to healthcare in Jumeirah, Dubai, built around listening, clarity and patient comfort.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: MessagesSquare,
    title: "Listening first",
    body: "Consultations begin with your account of what you are experiencing, in your own words.",
  },
  {
    icon: Clock,
    title: "Unhurried time",
    body: "Appointments are structured so there is room for questions and considered discussion.",
  },
  {
    icon: HeartHandshake,
    title: "Care that fits you",
    body: "Guidance is shaped around your circumstances, preferences and priorities.",
  },
  {
    icon: Leaf,
    title: "A calm setting",
    body: "A bright, quiet environment designed to feel welcoming rather than clinical.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Healthcare With a Personal Touch"
        description="Dr. Qassim Ahli Clinic is a private practice in Jumeirah, Dubai, where care is delivered with attention, clarity and respect for your time."
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="overflow-hidden rounded-[2rem] border border-border">
            <img
              src={exteriorImg}
              alt="Bright white villa clinic exterior with palm trees in Jumeirah, Dubai"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full min-h-[22rem] w-full object-cover"
            />
          </Reveal>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <span className="eyebrow">Our philosophy</span>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              A quieter, more considered way to receive medical care
            </h2>
            <p>
              Good healthcare depends on understanding the person, not only the symptom. Our
              practice is organised around that idea: fewer, longer appointments, careful
              explanation, and decisions made together rather than handed down.
            </p>
            <p>
              The clinic sits on Jumeira Street, a short drive from much of central Dubai, with a
              bright and calm interior designed to make visits feel unrushed from the moment you
              arrive.
            </p>
            <div className="rounded-2xl border border-dashed border-border bg-secondary/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Editable content
              </p>
              <p className="mt-3 text-sm">
                Details such as the clinic's founding year, team size and accreditations have been
                left out because they have not been verified. Add them here once confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 lg:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="What guides us"
            title="Principles behind every consultation"
            description="Four commitments that shape how care is delivered at the clinic."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <article className="h-full rounded-3xl border border-border bg-background p-8">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary-soft">
                    <v.icon className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <SectionHeader
          eyebrow="Inside the clinic"
          title="Bright spaces, designed for comfort"
          description="Neutral materials, natural light and quiet rooms — an environment intended to put patients at ease."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[2rem] border border-border">
            <img
              src={receptionImg}
              alt="Clinic reception desk in pale stone and light oak with fresh flowers"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-72 w-full object-cover lg:h-96"
            />
          </Reveal>
          <Reveal delay={100} className="overflow-hidden rounded-[2rem] border border-border">
            <img
              src={corridorImg}
              alt="Sunlit clinic corridor with marble floor and arched doorways"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-72 w-full object-cover lg:h-96"
            />
          </Reveal>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Address: {clinic.addressOneLine}
        </p>
      </section>

      <CTASection />
    </>
  );
}
