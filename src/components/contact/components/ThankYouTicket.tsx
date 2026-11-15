import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties } from "react"
import { createPortal } from "react-dom"
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
import { Button } from "@/components/pricing/components/Button"
import { NavorynMark } from "@/ui/header/components/NavorynMark"
import type { EnquiryTicket } from "../types/contact"

const NOTCH = 12 // radius of the side cut-outs, in px

/** Cuts a half-circle out of each side edge at --cut so the ticket looks torn along the dashed line. */
const TICKET_MASK: CSSProperties = {
  maskImage: `radial-gradient(circle ${NOTCH}px at 0 var(--cut), transparent ${NOTCH - 0.5}px, #000 ${NOTCH}px), radial-gradient(circle ${NOTCH}px at 100% var(--cut), transparent ${NOTCH - 0.5}px, #000 ${NOTCH}px)`,
  maskComposite: "intersect",
  WebkitMaskImage: `radial-gradient(circle ${NOTCH}px at 0 var(--cut), transparent ${NOTCH - 0.5}px, #000 ${NOTCH}px), radial-gradient(circle ${NOTCH}px at 100% var(--cut), transparent ${NOTCH - 0.5}px, #000 ${NOTCH}px)`,
  WebkitMaskComposite: "source-in",
}

function Info({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 break-words text-sm font-semibold">{value}</dd>
    </div>
  )
}

interface ThankYouTicketProps {
  ticket: EnquiryTicket
  onClose: () => void
}

/** Thank-you modal styled as a torn ticket: brand header, dashed tear line, enquiry details. */
export function ThankYouTicket({ ticket, onClose }: ThankYouTicketProps) {
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const headRef = useRef<HTMLDivElement | null>(null)
  const [cut, setCut] = useState(110)

  // Keep the tear line (and the cut-outs) at the bottom edge of the header.
  useLayoutEffect(() => {
    const head = headRef.current
    if (!head) return undefined
    const measure = () => setCut(head.offsetHeight)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(head)
    return () => observer.disconnect()
  }, [])

  // Modal behavior: lock page scroll, focus the dialog, close on Esc, keep Tab inside, restore focus.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    dialogRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
        return
      }
      if (e.key !== "Tab" || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [onClose])

  const firstName = ticket.name.split(" ")[0]

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
          {/* Header */}
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
              <p className="mt-0.5 text-sm text-muted-foreground">Your project enquiry is on its way to us.</p>
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

          {/* Tear line */}
          <div aria-hidden="true" className="border-t-2 border-dashed border-border" />

          {/* Details */}
          <div className="flex flex-col gap-6 px-6 py-6 sm:px-8">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
              <div className="col-span-2">
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">Service</dt>
                <dd className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{ticket.serviceLabel}</dd>
              </div>
              <Info label="Name" value={ticket.name} />
              <Info label="Budget range" value={ticket.budget} />
              <Info label="Email" value={ticket.email} />
              <Info label="Reference" value={ticket.reference} />
              <Info label="Date" value={ticket.date} className="col-span-2 sm:col-span-1" />
            </dl>

            <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-muted/60 p-4 sm:flex-row sm:items-center">
              <p className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                  <CheckIcon className="size-3.5" aria-hidden="true" />
                </span>
                We&apos;ll reply to {ticket.email} soon. Keep the reference handy.
              </p>
              <div className="flex w-full shrink-0 gap-2 sm:w-auto">
                <Button variant="outline" asChild className="cursor-target flex-1 sm:flex-none">
                  <Link to="/book-call" onClick={onClose}>Book a call</Link>
                </Button>
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
