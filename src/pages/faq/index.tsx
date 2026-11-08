import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { FaqAccordionItem } from "@/components/faq/components/FaqAccordionItem"
import { Button } from "@/components/pricing/components/Button"
import { FAQS } from "@/components/faq/data/faq"
import contactImage from "@/asset/webps/contact.webp"

export default function Faq() {
  const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full overflow-x-hidden bg-background py-24 text-foreground sm:py-28 lg:py-32">
      <SectionHeading
        className="mb-16 sm:mb-20"
        title="Your Questions, Answered"
        description="Everything you need to know about working with NAVORYN — services, pricing, timelines, ownership, and support. Can't find your answer? Reach out and we'll help."
        tabletDescription="Answers to common questions about our services, pricing, timelines, and support."
        mobileDescription="Answers to common questions about our services and process."
      />

      <div className="grid w-full grid-cols-1 items-start gap-3 md:grid-cols-2">
        {FAQS.map((item, index) => (
          <FaqAccordionItem
            key={item.question}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className="cursor-target mt-10 flex w-full flex-col gap-6 overflow-hidden rounded-xl border bg-background p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
          <img
            src={contactImage}
            alt="Contact NAVORYN"
            width={1264}
            height={1244}
            loading="lazy"
            decoding="async"
            className="size-28 shrink-0 rounded-xl object-cover [image-rendering:auto] sm:size-24 lg:size-32"
          />
          <div className="min-w-0">
            <h3 className="text-lg font-bold tracking-tight">Still have questions?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              <span className="sm:hidden">
                Can&apos;t find what you&apos;re looking for? Let&apos;s discuss your ideas
                and find the right digital solution for your business.
              </span>
              <span className="hidden sm:inline">
                Whether you&apos;re exploring a new website, need help choosing the right
                technologies, or have a specific idea in mind, we&apos;re here to help. Share
                your questions, discuss your requirements, and let&apos;s work together to
                find the right digital solution that aligns with your business goals, vision,
                and budget.
              </span>
            </p>
          </div>
        </div>
        <Button
          className="cursor-target w-full shrink-0 lg:w-auto"
          onClick={() => navigate("/book-call?plan=custom")}
        >
          Let&apos;s Talk About Your Project
        </Button>
      </div>
    </section>
  )
}
