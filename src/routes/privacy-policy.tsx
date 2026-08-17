import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { clinic } from "@/lib/clinic";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Dr. Qassim Ahli Clinic" },
      {
        name: "description",
        content:
          "How Dr. Qassim Ahli Clinic in Jumeirah, Dubai handles information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy | Dr. Qassim Ahli Clinic" },
      {
        property: "og:description",
        content: "Information handling practices for this website.",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How information submitted through this website is handled."
      />
      <section className="container-page py-20 lg:py-28">
        <div className="max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Information we collect
            </h2>
            <p className="mt-3">
              When you submit an appointment request, we collect the details you provide, such as
              your name, phone number, email address and preferred appointment time, together with
              any message you choose to include.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">How it is used</h2>
            <p className="mt-3">
              The information is used solely to respond to your enquiry and to arrange or confirm
              an appointment. It is not sold or used for unrelated marketing.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Sharing</h2>
            <p className="mt-3">
              Information is shared only where necessary to provide care or where required by
              applicable law and regulation in the United Arab Emirates.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Your choices</h2>
            <p className="mt-3">
              You may ask us to correct or delete the information you have submitted through this
              website by contacting the clinic.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-border p-6 text-sm">
            <p className="font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Editable content
            </p>
            <p className="mt-3">
              This policy is a general template. It should be reviewed and completed by the clinic,
              including a data-protection contact point, before publication.
            </p>
          </div>
          <p className="text-sm">Clinic address: {clinic.addressOneLine}</p>
        </div>
      </section>
    </>
  );
}
