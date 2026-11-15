import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { SERVICE_DETAILS } from "../data/details"
import type { ServiceDetail } from "../types/detail"

const ARROW =
  "cursor-target group/arrow flex size-11 items-center justify-center rounded-full border bg-card text-card-foreground transition-colors duration-300 hover:bg-accent"

/** `<` and `>` buttons that jump to the previous / next service. Only the sides that exist are shown. */
export function DetailArrows({ detail }: { detail: ServiceDetail }) {
  const index = SERVICE_DETAILS.findIndex((item) => item.id === detail.id)
  const previous = SERVICE_DETAILS[index - 1]
  const next = SERVICE_DETAILS[index + 1]
  if (!previous && !next) return null

  return (
    <nav
      aria-label="Service navigation"
      className={cn("flex items-center", previous && next ? "justify-between" : next ? "justify-end" : "justify-start")}
    >
      {previous && (
        <Link to={`/${previous.id}`} aria-label={`Previous: ${previous.title}`} title={previous.title} className={ARROW}>
          <ChevronLeftIcon
            className="size-5 transition-transform duration-300 group-hover/arrow:-translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      )}
      {next && (
        <Link to={`/${next.id}`} aria-label={`Next: ${next.title}`} title={next.title} className={ARROW}>
          <ChevronRightIcon
            className="size-5 transition-transform duration-300 group-hover/arrow:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      )}
    </nav>
  )
}
