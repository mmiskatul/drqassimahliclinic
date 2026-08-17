import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { clinic, MEDICAL_DISCLAIMER, services } from "@/lib/clinic";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Dr. Qassim Ahli Clinic, Dubai" },
      {
        name: "description",
        content:
          "Request an appointment at Dr. Qassim Ahli Clinic in Jumeirah, Dubai. Our team will contact you to confirm your preferred date and time.",
      },
      { property: "og:title", content: "Book an Appointment | Dr. Qassim Ahli Clinic" },
      {
        property: "og:description",
        content: "Request an appointment at the clinic in Jumeirah, Dubai.",
      },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
  component: AppointmentPage,
});

type Errors = Partial<Record<"name" | "phone" | "email" | "date", string>>;

const fieldClass =
  "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

function AppointmentPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const date = String(data.get("date") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[+\d][\d\s()-]{6,}$/.test(phone)) next.phone = "Please enter a valid phone number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!date) next.date = "Please choose a preferred date.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // No booking system is connected yet — the request is simply acknowledged.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    form.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Request an appointment"
        description="Share a few details and our team will contact you to confirm a time. Submitting this form is a request, not a confirmed booking."
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            {status === "success" ? (
              <div
                role="status"
                className="rounded-3xl border border-border bg-primary-soft p-10 text-center"
              >
                <CheckCircle2 className="mx-auto size-10 text-primary" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-semibold">Request received</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Thank you. Our team will contact you to confirm your appointment. Your
                  appointment is not confirmed until you hear from us.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 inline-flex items-center rounded-full border border-border-strong bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={onSubmit}
                className="rounded-3xl border border-border p-8 sm:p-10"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="Your full name"
                      className={fieldClass}
                    />
                    {errors.name ? (
                      <p id="name-error" className="mt-2 text-xs text-destructive">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      placeholder="+971 __ ___ ____"
                      className={fieldClass}
                    />
                    {errors.phone ? (
                      <p id="phone-error" className="mt-2 text-xs text-destructive">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                    {errors.email ? (
                      <p id="email-error" className="mt-2 text-xs text-destructive">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="date" className="text-sm font-medium">
                      Preferred date <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      aria-invalid={!!errors.date}
                      aria-describedby={errors.date ? "date-error" : undefined}
                      className={fieldClass}
                    />
                    {errors.date ? (
                      <p id="date-error" className="mt-2 text-xs text-destructive">
                        {errors.date}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="time" className="text-sm font-medium">
                      Preferred time
                    </label>
                    <input id="time" name="time" type="time" className={fieldClass} />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service
                    </label>
                    <select id="service" name="service" className={fieldClass} defaultValue="">
                      <option value="">Not sure yet</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Anything you'd like us to know before your visit."
                      className={`${fieldClass} resize-y`}
                    />
                  </div>
                </div>

                {status === "error" ? (
                  <p role="alert" className="mt-6 text-sm text-destructive">
                    Please correct the highlighted fields and try again.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-70 sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    "Request Appointment"
                  )}
                </button>

                <p className="mt-5 text-sm text-muted-foreground">
                  Our team will contact you to confirm your appointment.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal delay={100} className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-border bg-secondary p-8">
              <h2 className="font-display text-lg font-semibold">Visiting the clinic</h2>
              <address className="mt-4 text-sm not-italic leading-relaxed text-muted-foreground">
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
                className="mt-5 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Get Directions
              </a>
            </div>

            <div className="rounded-3xl border border-dashed border-border p-8">
              <h2 className="font-display text-sm font-semibold">Good to know</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>Requests are reviewed by the clinic team during working hours.</li>
                <li>Your appointment is confirmed only once our team has contacted you.</li>
                <li>For urgent medical concerns, please seek immediate medical attention.</li>
              </ul>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">{MEDICAL_DISCLAIMER}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
