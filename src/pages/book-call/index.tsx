import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { cn } from "@/lib/utils"
import { usePageMeta } from "@/lib/pageMeta"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { IllosBookingCard, type BookingContact } from "@/components/ui/illos-booking-card"
import { ThankYouTicket } from "@/components/contact/components/ticket"
import { useConfetti } from "@/components/contact/hooks/useConfetti"
import type { EnquiryTicket } from "@/components/contact/types/contact"
import { PLAN_DETAILS } from "@/components/book-call/data/plans"
import { PlanFeatures } from "@/components/book-call/components/PlanFeatures"
import { useBookCall } from "@/components/book-call/useBookCall"

// The configure and add-ons steps are hidden for now. Their code lives in
// components/pricing (Configurator, AddOnPicker, EstimatePanel, data/*) and in git history.
const PLAN_LABELS: Record<string, string> = {
  starter: "Starter plan",
  pro: "Pro plan",
  promax: "Pro Max — Custom quote",
  custom: "Custom build",
}
const DURATION = 30

const dateFmt = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short" })
const clockFmt = new Intl.DateTimeFormat("en-GB", { hour: "numeric", minute: "2-digit", hour12: true })
const stampFmt = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" })

function makeReference() {
  const now = new Date()
  const stamp = `${String(now.getFullYear()).slice(2)}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`
  return `NVR-${stamp}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
}

export default function BookCall() {
  usePageMeta({
    title: "Book a Call",
    description: "Book a free call with Navoryn to discuss your website, web app or mobile app project and get a tailored estimate.",
  })
  const [params] = useSearchParams()
  const plan = params.get("plan") ?? "custom"
  const planLabel = PLAN_LABELS[plan] ?? "Custom build"
  const send = useBookCall(planLabel, DURATION)
  const fireConfetti = useConfetti()
  const hasPlan = Object.hasOwn(PLAN_DETAILS, plan)
  const cardRef = useReveal<HTMLDivElement>({ y: 40, blur: 8, delay: 0.1 })
  const [ticket, setTicket] = useState<{ ticket: EnquiryTicket; slot: string; end: string } | null>(null)

  const onConfirm = async (start: Date, contact: BookingContact) => {
    await send(start, contact)
    const end = new Date(start.getTime() + DURATION * 60_000)
    setTicket({
      ticket: {
        reference: makeReference(),
        date: stampFmt.format(new Date()),
        name: contact.name,
        email: contact.email,
        serviceLabel: planLabel,
        budget: "",
      },
      slot: `${dateFmt.format(start)}, ${clockFmt.format(start)}`,
      end: clockFmt.format(end),
    })
    void fireConfetti()
  }

  return (
    <main className="page-px min-h-screen bg-background pb-14 text-foreground">
      <div className="w-full">
        <h1 className="sr-only">Book a call</h1>
        <PlanFeatures plan={plan} />
        <section
          aria-label="Book a call"
          className={cn("w-full overflow-x-hidden", hasPlan ? "pt-24 pb-14 sm:pt-28 lg:pt-32" : "py-14 sm:py-20")}
        >
          <SectionHeading
            className="mb-16 sm:mb-20"
            title="Let's Talk About What We Can Build Together."
            description="Every great digital experience starts with a conversation. Book an introductory call with our team to share your ideas, discuss your goals, and explore how we can bring your vision to life. We'll align on the scope, timeline, and next steps to get things moving."
            tabletDescription="Every great digital experience starts with a conversation. Share your ideas, discuss your goals, and explore how we can bring your vision to life."
            mobileDescription="Have an idea in mind? Let's talk about your goals and explore what we can build together."
          />
          <div ref={cardRef}>
            <IllosBookingCard
              title="Intro call with Navoryn"
              description={
                <>
                  <span className="md:hidden">
                    Let&apos;s discuss your needs, finalize the details, and schedule your next steps. Your calendar invite is on
                    its way!
                  </span>
                  <span className="hidden md:inline lg:hidden">
                    Let&apos;s align on your requirements, finalize the scope, timeline, and pricing, and get everything
                    planned. A calendar invite with the meeting link will follow.
                  </span>
                  <span className="hidden lg:inline">
                    Let&apos;s understand your requirements crystal clear. We&apos;ll finalize the scope, timeline, and pricing
                    together. You&apos;ll receive a calendar invite with the meeting link.
                  </span>
                </>
              }
              duration={DURATION}
              onConfirm={onConfirm}
              className="max-w-none"
            />
          </div>
        </section>
      </div>
      {ticket && (
        <ThankYouTicket
          ticket={ticket.ticket}
          onClose={() => setTicket(null)}
          subtitle="Your call is booked."
          headline={{ label: "Call", value: ticket.slot }}
          rows={[
            { label: "Name", value: ticket.ticket.name },
            { label: "Duration", value: `${DURATION} min, ends ${ticket.end}` },
            { label: "Email", value: ticket.ticket.email },
            { label: "Plan", value: ticket.ticket.serviceLabel },
            { label: "Reference", value: ticket.ticket.reference },
            { label: "Booked on", value: ticket.ticket.date },
          ]}
          note={`The invite is on its way to ${ticket.ticket.email}. Keep the reference handy.`}
          secondary={{ label: "Back to home", to: "/" }}
        />
      )}
    </main>
  )
}
