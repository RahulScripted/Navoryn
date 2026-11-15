import { useState } from "react"
import { FaqAccordionItem } from "@/components/faq/components/FaqAccordionItem"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import type { FaqItem } from "@/types/faq"

/** Same accordion and layout as the home page FAQ, filled with this service's questions. */
export function DetailFaq({ faqs, serviceTitle }: { faqs: FaqItem[]; serviceTitle: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const gridRef = useReveal<HTMLDivElement>({ children: true, y: 28, blur: 6, stagger: 0.06 })
  return (
    <section
      aria-label={`${serviceTitle} FAQs`}
      className="w-full overflow-x-hidden bg-background py-24 text-foreground sm:py-28 lg:py-32"
    >
      <SectionHeading
        className="mb-16 sm:mb-20"
        title="Your Questions, Answered"
        description={`Common questions about our ${serviceTitle} service. Can't find your answer? Reach out and we'll help.`}
        mobileDescription={`Answers to common ${serviceTitle} questions.`}
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
