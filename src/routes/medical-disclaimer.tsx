import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { MEDICAL_DISCLAIMER } from "@/lib/clinic";

export const Route = createFileRoute("/medical-disclaimer")({
  head: () => ({
    meta: [
      { title: "Medical Disclaimer | Dr. Qassim Ahli Clinic" },
      {
        name: "description",
        content:
          "Medical information on this website is general in nature and does not replace professional medical advice.",
      },
      { property: "og:title", content: "Medical Disclaimer | Dr. Qassim Ahli Clinic" },
      {
        property: "og:description",
        content: "General information notice for content published on this website.",
      },
      { property: "og:url", content: "/medical-disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/medical-disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Medical Disclaimer" description={MEDICAL_DISCLAIMER} />
      <section className="container-page py-20 lg:py-28">
        <div className="max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              General information only
            </h2>
            <p className="mt-3">
              Content published on this website is intended to give a general overview of the
              clinic and the types of consultation available. It is not a diagnosis, a treatment
              recommendation, or a substitute for an individual medical assessment.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">No guarantees</h2>
            <p className="mt-3">
              Outcomes of any consultation or care depend on individual circumstances. Nothing on
              this website should be read as a promise of a particular result.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Urgent medical concerns
            </h2>
            <p className="mt-3">
              If you believe you are experiencing a medical emergency, seek immediate medical
              attention from emergency services rather than using this website.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Always ask</h2>
            <p className="mt-3">
              Always seek the advice of a qualified healthcare professional with any questions you
              have about a medical condition, and never disregard professional advice because of
              something you have read here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
