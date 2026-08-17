import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/clinic";

const paths = [
  "/",
  "/about",
  "/doctor",
  "/services",
  "/patient-experience",
  "/gallery",
  "/contact",
  "/appointment",
  "/privacy-policy",
  "/terms",
  "/medical-disclaimer",
  ...services.map((s) => `/services/${s.slug}`),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${origin}${p}</loc></url>`).join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
