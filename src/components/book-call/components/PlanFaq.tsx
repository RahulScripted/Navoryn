import { useState } from "react"
import { FaqAccordionItem } from "@/components/faq/components/FaqAccordionItem"
import { cn } from "@/lib/utils"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { planFaqs } from "../data/faqs"

/** The FAQ section of the book-a-call page: the same accordion cards and reveal as the service pages. */
export function PlanFaq({ plan, className }: { plan: string; className?: string }) {
  const faqs = planFaqs(plan)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const gridRef = useReveal<HTMLDivElement>({ children: true, y: 28, blur: 6, stagger: 0.06 })
  return (
    <section
      aria-label="Frequently asked questions"
      className={cn("w-full overflow-x-clip bg-background text-foreground", className)}
    >
      <SectionHeading
        className="mb-16 sm:mb-20"
        title="Your Questions, Answered"
        description="Quick answers about payments, ownership, timelines and support before you book. Can't find yours? Ask us on the call."
        tabletDescription="Quick answers about payments, ownership, timelines and support before you book."
        mobileDescription="Quick answers before you book your call."
      />
      <div ref={gridRef} className="grid w-full grid-cols-1 items-start gap-3 md:grid-cols-2">
        {faqs.map((item, index) => (
          <FaqAccordionItem
            key={item.question}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  )
}
