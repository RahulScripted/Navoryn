import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
import whatsappIcon from "@/asset/svgs/whatsapp.svg?url"
import { Button } from "@/components/pricing/components/Button"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { BENEFITS, whatsappUrl } from "../data/contact"

export function ContactIntro({ serviceLabel }: { serviceLabel?: string }) {
  const headRef = useReveal<HTMLDivElement>({ y: 32, blur: 8 })
  const gridRef = useReveal<HTMLUListElement>({ children: true, y: 24, blur: 6, stagger: 0.08 })
  const actionsRef = useReveal<HTMLDivElement>({ y: 24, blur: 6 })

  return (
    <div className="flex h-full flex-col justify-between gap-10">
      <div ref={headRef} className="flex flex-col items-start gap-4">
        <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Every Great Idea Starts Somewhere.</h2>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Tell us what you&apos;re imagining. Whether it&apos;s a new digital product, a smarter business solution, or an idea waiting to take shape, we&apos;re here to help you make it happen.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-base font-semibold tracking-tight">Why start a conversation?</h3>
        <ul ref={gridRef} className="grid gap-3 sm:grid-cols-2">
          {BENEFITS.map(({ title, description, icon: Icon }) => (
            <li key={title} className="cursor-target flex items-start gap-3 rounded-xl border bg-card p-4 text-card-foreground">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted/50">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{title}</span>
                <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">{description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div ref={actionsRef} className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="cursor-target w-full sm:w-auto">
          <Link to="/book-call" className="gap-2">
            Get a Free Consultation
            <ArrowRightIcon className="size-4" aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="cursor-target w-full sm:w-auto">
          <a href={whatsappUrl(serviceLabel)} target="_blank" rel="noopener noreferrer" className="gap-2">
            <img src={whatsappIcon} alt="" className="size-5" />
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}
