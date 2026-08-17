import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) {
    return (
      <p className="rounded-2xl border border-dashed border-border p-8 text-sm text-muted-foreground">
        No questions have been published yet.
      </p>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
          <AccordionTrigger className="py-6 text-left font-display text-base font-medium hover:no-underline sm:text-lg">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
