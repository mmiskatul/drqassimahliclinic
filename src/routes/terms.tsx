import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Dr. Qassim Ahli Clinic" },
      {
        name: "description",
        content: "Terms governing the use of the Dr. Qassim Ahli Clinic website.",
      },
      { property: "og:title", content: "Terms & Conditions | Dr. Qassim Ahli Clinic" },
      { property: "og:description", content: "Terms of use for this website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms that apply when you use this website."
      />
      <section className="container-page py-20 lg:py-28">
        <div className="max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Use of this site</h2>
            <p className="mt-3">
              This website provides general information about the clinic and its services. By using
              it you agree to use the content for lawful, personal purposes only.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Appointment requests
            </h2>
            <p className="mt-3">
              Submitting the appointment form creates a request only. An appointment is confirmed
              solely once the clinic team has contacted you directly.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Accuracy</h2>
            <p className="mt-3">
              We aim to keep information on this website accurate and current, but it may change
              without notice.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">External links</h2>
            <p className="mt-3">
              Links to third-party sites, such as social media or mapping services, are provided
              for convenience. We are not responsible for their content.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-border p-6 text-sm">
            <p className="font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Editable content
            </p>
            <p className="mt-3">
              These terms are a general template and should be reviewed by the clinic before
              publication.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
