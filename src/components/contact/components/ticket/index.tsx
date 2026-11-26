import { useId, useRef, type CSSProperties } from "react"
import { createPortal } from "react-dom"
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
import { Button } from "@/utilities/Button"
import { NavorynMark } from "@/ui/header/components/NavorynMark"
import type { EnquiryTicket } from "@/components/contact/types/contact"
import { TicketInfo } from "./components/TicketInfo"
import { useModalBehavior } from "./hooks/useModalBehavior"
import { useTearOffset } from "./hooks/useTearOffset"
import { TICKET_MASK } from "./lib/ticketMask"

export interface TicketRow {
  label: string
  value: string
  className?: string
}

interface ThankYouTicketProps {
  ticket: EnquiryTicket
  onClose: () => void
  subtitle?: string
  headline?: TicketRow
  rows?: TicketRow[]
  note?: string
  showBookCall?: boolean
}

export function ThankYouTicket({ ticket, onClose, subtitle, headline, rows, note, showBookCall = true }: ThankYouTicketProps) {
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const { headRef, cut } = useTearOffset()
  useModalBehavior(dialogRef, onClose)

  const firstName = ticket.name.split(" ")[0]
  const lead = headline ?? { label: "Service", value: ticket.serviceLabel }
  const details = rows ?? [
    { label: "Name", value: ticket.name },
    { label: "Budget range", value: ticket.budget },
    { label: "Email", value: ticket.email },
    { label: "Reference", value: ticket.reference },
    { label: "Date", value: ticket.date, className: "col-span-2 sm:col-span-1" },
  ]

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto p-4 sm:p-6">
      <div aria-hidden="true" onClick={onClose} className="absolute inset-0 animate-in bg-background/70 backdrop-blur-sm duration-300 fade-in" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative my-auto w-full max-w-xl animate-in outline-none duration-300 fade-in zoom-in-95"
        style={{ filter: "drop-shadow(0 24px 40px color-mix(in oklab, var(--foreground) 24%, transparent))" }}
      >
        <div
          className="overflow-hidden rounded-2xl border bg-card text-card-foreground"
          style={{ ...TICKET_MASK, "--cut": `${cut}px` } as CSSProperties}
        >
          <div ref={headRef} className="relative flex flex-col gap-4 bg-muted/60 px-6 pt-6 pb-6 sm:flex-row sm:items-center sm:gap-6 sm:px-8">
            <div className="flex shrink-0 items-center gap-2.5">
              <NavorynMark className="size-9" />
              <span className="text-lg font-bold tracking-tight">NAVORYN</span>
            </div>
            <span aria-hidden="true" className="hidden h-10 w-px bg-border sm:block" />
            <div className="min-w-0 pr-8 sm:pr-10">
              <h2 id={titleId} className="text-xl font-bold tracking-tight">
                Thank you, {firstName}.
              </h2>
              <p className="mt-0.5 text-sm text-muted-foreground">{subtitle ?? "Your project enquiry is on its way to us."}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="cursor-target absolute top-4 right-4 flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Cross2Icon className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div aria-hidden="true" className="border-t-2 border-dashed border-border" />

          <div className="flex flex-col gap-6 px-6 py-6 sm:px-8">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
              <div className="col-span-2">
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">{lead.label}</dt>
                <dd className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{lead.value}</dd>
              </div>
              {details.map((row) => (
                <TicketInfo key={row.label} label={row.label} value={row.value} className={row.className} />
              ))}
            </dl>

            <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-muted/60 p-4 sm:flex-row sm:items-center">
              <p className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                  <CheckIcon className="size-3.5" aria-hidden="true" />
                </span>
                {note ?? `We'll reply to ${ticket.email} soon. Keep the reference handy.`}
              </p>
              <div className="flex w-full shrink-0 gap-2 sm:w-auto">
                {showBookCall && (
<Button variant="outline" asChild className="cursor-target flex-1 sm:flex-none">
                  <Link to="/book-call" onClick={onClose}>Book a call</Link>
                </Button>
)}
                <Button onClick={onClose} className="cursor-target flex-1 sm:flex-none">
                  Done
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
