import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, ClipboardList, MessageCircle, Repeat } from "lucide-react";
import loungeImg from "@/assets/lounge.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { journey, MEDICAL_DISCLAIMER } from "@/lib/clinic";

export const Route = createFileRoute("/patient-experience")({
  head: () => ({
    meta: [
      { title: "Patient Experience | Dr. Qassim Ahli Clinic, Dubai" },
      {
        name: "description",
        content:
          "What to expect before, during and after your visit to Dr. Qassim Ahli Clinic in Jumeirah, Dubai — a calm, considered patient journey.",
      },
      { property: "og:title", content: "Patient Experience | Dr. Qassim Ahli Clinic" },
      {
        property: "og:description",
        content:
          "A clear guide to your visit: before your appointment, during your consultation and afterwards.",
      },
      { property: "og:url", content: "/patient-experience" },
    ],
    links: [{ rel: "canonical", href: "/patient-experience" }],
  }),
  component: PatientExperiencePage,
});

const stages = [
  {
    icon: CalendarCheck,
    title: "Before your appointment",
    points: [
      "Request an appointment online or contact the clinic directly.",
      "Our team will be in touch to confirm a suitable time.",
      "Gather any recent reports, results or a list of current medications.",
      "Note down the questions you would most like answered.",
    ],
  },
  {
    icon: MessageCircle,
    title: "During your visit",
    points: [
      "You'll be welcomed into a calm, private setting.",
      "The consultation begins with your account of the concern.",
      "An examination is carried out where appropriate.",
      "Findings and options are explained in plain language.",
    ],
  },
  {
    icon: ClipboardList,
    title: "After your consultation",
    points: [
      "You'll leave with a clear understanding of what was agreed.",
      "Any further investigation or referral is arranged with you.",
      "Questions that arise afterwards can be raised with the clinic.",
    ],
  },
  {
    icon: Repeat,
    title: "Follow-up",
    points: [
      "Follow-up is arranged where it is clinically appropriate.",
      "Ongoing concerns are reviewed with continuity of care.",
    ],
  },
];

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Use the appointment request form on this website. Our team will contact you to confirm a time; a request on its own is not a confirmed booking.",
  },
  {
    q: "What should I bring with me?",
    a: "Any recent medical reports, test results and a list of medications you are currently taking are helpful, along with valid identification.",
  },
  {
    q: "Can I bring someone with me?",
    a: "Yes. Many patients prefer to have a family member or friend present during their consultation.",
  },
  {
    q: "How long will my appointment take?",
    a: "This depends on the reason for your visit. Our team will let you know the expected duration when your appointment is confirmed.",
  },
  {
    q: "Do you share information with other clinicians?",
    a: "Information is only shared where it is necessary for your care and with your agreement, in line with applicable regulations.",
  },
];

function PatientExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Patient experience"
        title="A Better Healthcare Experience From Start to Finish"
        description="Knowing what happens at each stage makes a visit easier. Here is how care works at the clinic, from your first enquiry to follow-up."
      />

      <section className="container-page py-20 lg:py-28">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((s, i) => (
            <Reveal key={s.step} delay={i * 70}>
              <li className="h-full rounded-3xl border border-border bg-background p-8">
                <span className="font-display text-3xl font-semibold text-primary/25">{s.step}</span>
                <h2 className="mt-6 font-display text-lg font-semibold">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-secondary py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <SectionHeader eyebrow="What to expect" title="Every stage of your visit" />
            <div className="mt-12 space-y-10">
              {stages.map((stage, i) => (
                <Reveal key={stage.title} delay={i * 60}>
                  <article className="rounded-3xl border border-border bg-background p-8">
                    <div className="flex items-center gap-3">
                      <span className="flex size-11 items-center justify-center rounded-full bg-primary-soft">
                        <stage.icon className="size-5 text-primary" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-lg font-semibold">{stage.title}</h3>
                    </div>
                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {stage.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={100} className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <img
                src={loungeImg}
                alt="Calm clinic waiting lounge with neutral armchairs and daylight"
                width={1200}
                height={1504}
                loading="lazy"
                className="h-[28rem] w-full object-cover lg:h-[36rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-10 max-w-3xl">
          <FAQ items={faqs} />
        </div>
        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">{MEDICAL_DISCLAIMER}</p>
      </section>

      <CTASection />
    </>
  );
}
