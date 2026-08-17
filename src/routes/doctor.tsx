import { createFileRoute } from "@tanstack/react-router";
import portraitImg from "@/assets/portrait-placeholder.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { MEDICAL_DISCLAIMER } from "@/lib/clinic";

export const Route = createFileRoute("/doctor")({
  head: () => ({
    meta: [
      { title: "Meet Dr. Qassim Ahli | Dr. Qassim Ahli Clinic, Dubai" },
      {
        name: "description",
        content:
          "Profile of Dr. Qassim Ahli, who leads Dr. Qassim Ahli Clinic in Jumeirah, Dubai, with an approach centred on listening, clarity and personalized care.",
      },
      { property: "og:title", content: "Meet Dr. Qassim Ahli" },
      {
        property: "og:description",
        content:
          "Doctor profile at Dr. Qassim Ahli Clinic, Jumeirah, Dubai — approach to patient care and consultation.",
      },
      { property: "og:url", content: "/doctor" },
    ],
    links: [{ rel: "canonical", href: "/doctor" }],
  }),
  component: DoctorPage,
});

const editableSections = [
  {
    title: "Qualifications",
    note: "Add the doctor's verified medical degrees, licences and registrations here.",
  },
  {
    title: "Specializations",
    note: "Add the clinical areas the doctor formally practises in.",
  },
  {
    title: "Professional experience",
    note: "Add verified roles, institutions and years of practice.",
  },
];

function DoctorPage() {
  return (
    <>
      <PageHero
        eyebrow="Our doctor"
        title="Meet Dr. Qassim Ahli"
        description="Leading the clinic in Jumeirah, Dubai, with a practice built around unhurried consultations and clear, honest explanation."
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-secondary">
              <img
                src={portraitImg}
                alt="Portrait placeholder — to be replaced with an authentic photograph of Dr. Qassim Ahli"
                width={1000}
                height={1250}
                loading="lazy"
                className="h-[26rem] w-full object-cover lg:h-[34rem]"
              />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Placeholder image. Replace with an authentic professional portrait.
            </p>
          </Reveal>

          <div>
            <h2 className="font-display text-3xl font-semibold">Dr. Qassim Ahli</h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Physician · Dr. Qassim Ahli Clinic
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Dr. Qassim Ahli practises at the clinic on Jumeira Street in Dubai. Consultations
                are structured to allow time for a full discussion of your concerns before any
                conclusions are drawn.
              </p>
              <p>
                The emphasis is on explaining findings in plain language, setting out the available
                options honestly, and agreeing on next steps with the patient rather than for them.
              </p>
            </div>

            <h3 className="mt-12 font-display text-lg font-semibold">Approach to patient care</h3>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground">
              <li>Listening carefully before advising.</li>
              <li>Explaining findings and options without jargon.</li>
              <li>Respecting patient preferences in every decision.</li>
              <li>Arranging appropriate follow-up and onward care where needed.</li>
            </ul>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {editableSections.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-dashed border-border bg-secondary/60 p-5"
                >
                  <h3 className="font-display text-sm font-semibold">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.note}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
              {MEDICAL_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Arrange a consultation" />
    </>
  );
}
