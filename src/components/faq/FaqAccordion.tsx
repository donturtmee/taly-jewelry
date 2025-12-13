"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="rounded-[28px] border border-neutral-200 bg-white/70 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.08)]">
      <Accordion
        type="single"
        collapsible
        className="px-4 py-2 sm:px-6 sm:py-4"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border-neutral-200/80"
          >
            <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-neutral-900 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
