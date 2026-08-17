import { Link } from "@tanstack/react-router";
import { Instagram, MapPin } from "lucide-react";
import { clinic, MEDICAL_DISCLAIMER } from "@/lib/clinic";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/doctor", label: "Doctor" },
  { to: "/services", label: "Services" },
  { to: "/patient-experience", label: "Patient Experience" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full border border-border bg-background font-display text-sm font-semibold text-primary">
              QA
            </span>
            <span className="font-display text-base font-semibold">{clinic.name}</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            A personalized approach to healthcare in Jumeirah, Dubai — combining professional
            medical care with a calm, comfortable patient experience.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold">Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold">Contact</h2>
          <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-muted-foreground">
            <p>
              {clinic.address.line1}
              <br />
              {clinic.address.line2}
              <br />
              {clinic.address.city}, {clinic.address.country}
            </p>
            {clinic.phone ? <p>{clinic.phone}</p> : null}
            {clinic.email ? <p>{clinic.email}</p> : null}
          </address>
          <a
            href={clinic.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <MapPin className="size-4" aria-hidden="true" />
            Get Directions
          </a>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold">Follow Us</h2>
          <a
            href={clinic.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:border-border-strong"
          >
            <Instagram className="size-4 text-primary" aria-hidden="true" />
            {clinic.instagramHandle}
          </a>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            {MEDICAL_DISCLAIMER}
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {clinic.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-primary">
              Terms &amp; Conditions
            </Link>
            <Link to="/medical-disclaimer" className="transition-colors hover:text-primary">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
