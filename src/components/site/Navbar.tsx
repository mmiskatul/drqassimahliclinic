import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { clinic } from "@/lib/clinic";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/doctor", label: "Doctor" },
  { to: "/services", label: "Services" },
  { to: "/patient-experience", label: "Patient Experience" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/90 shadow-nav backdrop-blur-md"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-20 lg:h-24",
        )}
      >
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label={`${clinic.name} — home`}
        >
          <span className="flex size-9 items-center justify-center rounded-full border border-border bg-primary-soft font-display text-sm font-semibold text-primary">
            QA
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[0.95rem] font-semibold tracking-tight">
              Dr. Qassim Ahli
            </span>
            <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Clinic · Jumeirah
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/appointment"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:opacity-90 hover:shadow-lift sm:inline-flex"
          >
            Book an Appointment
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background xl:hidden"
      >
        <nav aria-label="Mobile" className="container-page flex flex-col py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="border-b border-border/70 py-4 font-display text-lg font-medium text-foreground last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
          >
            Book an Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
