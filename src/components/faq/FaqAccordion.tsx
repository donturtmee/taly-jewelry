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
  className?: string;
};

export default function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className={className}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border-white/10"
        >
          <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-white/90 hover:text-white hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-white/75 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
