import { useId, useState } from "react"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import type { ServiceId } from "@/components/what-we-do/types/service"
import { ContactForm } from "./components/ContactForm"
import { ContactIntro } from "./components/ContactIntro"
import { ThankYouTicket } from "./components/ThankYouTicket"
import { useConfetti } from "./hooks/useConfetti"
import { useEnquiryForm } from "./hooks/useEnquiryForm"
import type { EnquiryTicket } from "./types/contact"

interface ContactSectionProps {
  /** Lock the form to one service (used on the service pages). Omit on the home page. */
  service?: ServiceId
}

export default function ContactSection({ service }: ContactSectionProps) {
  const idPrefix = `contact-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`
  const form = useEnquiryForm(idPrefix, service)
  const fireConfetti = useConfetti()
  const [ticket, setTicket] = useState<EnquiryTicket | null>(null)
  const formRef = useReveal<HTMLDivElement>({ y: 40, blur: 8, delay: 0.1 })

  const onSubmit = async (honeypot: boolean) => {
    const sent = await form.submit(honeypot)
    if (!sent) return
    setTicket(sent)
    void fireConfetti()
  }

  return (
    <section id="contact" className="w-full overflow-x-hidden bg-background py-24 text-foreground sm:py-28 lg:py-32">
      <div className="grid items-stretch gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <ContactIntro serviceLabel={service ? form.serviceLabel : undefined} />
        <div ref={formRef} className="h-full">
          <ContactForm form={form} idPrefix={idPrefix} onSubmit={onSubmit} />
        </div>
      </div>
      {ticket && <ThankYouTicket ticket={ticket} onClose={() => setTicket(null)} />}
    </section>
  )
}
