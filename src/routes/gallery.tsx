import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, X } from "lucide-react";
import receptionImg from "@/assets/reception.jpg";
import loungeImg from "@/assets/lounge.jpg";
import corridorImg from "@/assets/corridor.jpg";
import examImg from "@/assets/exam-room.jpg";
import exteriorImg from "@/assets/exterior.jpg";
import heroImg from "@/assets/hero-clinic.jpg";
import stillLifeImg from "@/assets/stilllife.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { clinic } from "@/lib/clinic";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Dr. Qassim Ahli Clinic, Jumeirah Dubai" },
      {
        name: "description",
        content:
          "A look inside Dr. Qassim Ahli Clinic in Jumeirah, Dubai — reception, waiting lounge, consultation rooms and the clinic exterior.",
      },
      { property: "og:title", content: "Gallery | Dr. Qassim Ahli Clinic" },
      {
        property: "og:description",
        content: "Photographs of the clinic spaces in Jumeirah, Dubai.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

/** Replace these with authentic clinic photography as it becomes available. */
const images = [
  { src: exteriorImg, alt: "White villa clinic exterior with palm trees in Jumeirah, Dubai", span: "md:col-span-2" },
  { src: receptionImg, alt: "Reception desk in pale stone and light oak with fresh flowers", span: "" },
  { src: loungeImg, alt: "Waiting lounge with neutral linen armchairs and greenery", span: "" },
  { src: corridorImg, alt: "Sunlit clinic corridor with marble floor and arched doorways", span: "" },
  { src: examImg, alt: "Bright examination room with light wood cabinetry", span: "md:col-span-2" },
  { src: heroImg, alt: "Consultation room with a minimal white desk and marble wall", span: "" },
  { src: stillLifeImg, alt: "Stethoscope and notebook on a pale marble surface", span: "" },
];

function GalleryPage() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  const [touchX, setTouchX] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside the clinic"
        description="Bright, quiet spaces designed to make each visit feel calm and unhurried."
      />

      <section className="container-page py-20 lg:py-28">
        {images.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-border p-12 text-center text-muted-foreground">
            Photographs will be published here soon.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {images.map((img, i) => (
              <Reveal key={img.alt} delay={(i % 3) * 70} className={img.span}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Open image: ${img.alt}`}
                  className="group block w-full overflow-hidden rounded-3xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] lg:h-72"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mt-14 rounded-3xl border border-border bg-secondary p-8 text-center sm:p-12">
          <span className="eyebrow">Instagram</span>
          <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
            More from the clinic
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Updates and clinic photography are shared on Instagram at {clinic.instagramHandle}.
          </p>
          <a
            href={clinic.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Instagram className="size-4" aria-hidden="true" />
            Follow Us on Instagram
          </a>
        </Reveal>
      </section>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm"
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0]?.clientX ?? null)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = (e.changedTouches[0]?.clientX ?? touchX) - touchX;
            if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
            setTouchX(null);
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            autoFocus
            className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full bg-background text-foreground"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-4 inline-flex size-11 items-center justify-center rounded-full bg-background text-foreground sm:left-8"
          >
            <ChevronLeft className="size-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-5xl">
            <img
              src={images[index]!.src}
              alt={images[index]!.alt}
              className="max-h-[78vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-background/90">
              {images[index]!.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-4 inline-flex size-11 items-center justify-center rounded-full bg-background text-foreground sm:right-8"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}

      <CTASection />
    </>
  );
}
