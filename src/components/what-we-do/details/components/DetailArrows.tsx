import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { SERVICE_DETAILS } from "../data/details"
import type { ServiceDetail } from "../types/detail"

const LINK =
  "cursor-target group/arrow flex size-11 min-w-0 items-center justify-center gap-3 rounded-full border bg-card text-card-foreground transition-colors duration-300 hover:bg-accent sm:size-auto sm:max-w-[48%] sm:justify-start sm:rounded-2xl sm:px-5 sm:py-3"

const ICON = "size-5 shrink-0 transition-transform duration-300"

export function DetailArrows({ detail }: { detail: ServiceDetail }) {
  const index = SERVICE_DETAILS.findIndex((item) => item.id === detail.id)
  const previous = SERVICE_DETAILS[index - 1]
  const next = SERVICE_DETAILS[index + 1]
  if (!previous && !next) return null

  return (
    <section aria-label="More services" className="w-full overflow-x-hidden bg-background pb-24 text-foreground sm:pb-28 lg:pb-32">
      <nav
        aria-label="Service navigation"
        className={cn("flex items-center", previous && next ? "justify-between" : next ? "justify-end" : "justify-start")}
      >
        {previous && (
          <Link to={`/${previous.id}`} aria-label={`Previous: ${previous.title}`} title={previous.title} className={LINK}>
            <ChevronLeftIcon className={cn(ICON, "group-hover/arrow:-translate-x-0.5")} aria-hidden="true" />
            <span className="hidden min-w-0 text-right flex-col sm:flex">
              <span className="text-xs text-muted-foreground">Previous service</span>
              <span className="truncate font-semibold tracking-tight">{previous.title}</span>
            </span>
          </Link>
        )}
        {next && (
          <Link to={`/${next.id}`} aria-label={`Next: ${next.title}`} title={next.title} className={cn(LINK, "sm:ml-auto sm:justify-end")}>
            <span className="hidden min-w-0 flex-col text-right sm:flex">
              <span className="text-xs text-left text-muted-foreground">Next service</span>
              <span className="truncate font-semibold tracking-tight">{next.title}</span>
            </span>
            <ChevronRightIcon className={cn(ICON, "group-hover/arrow:translate-x-0.5")} aria-hidden="true" />
          </Link>
        )}
      </nav>
    </section>
  )
}
