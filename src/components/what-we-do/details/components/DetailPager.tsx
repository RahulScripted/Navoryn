import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { SERVICE_DETAILS } from "../data/details"
import type { ServiceDetail } from "../types/detail"

const BUTTON =
  "cursor-target group/pager flex min-w-0 flex-1 items-center gap-4 rounded-2xl border bg-card px-5 py-4 text-card-foreground transition-colors duration-300 hover:bg-accent sm:max-w-md"

/** Previous / next service. Shows only the sides that exist (the first has no previous, the last no next). */
export function DetailPager({ detail }: { detail: ServiceDetail }) {
  const index = SERVICE_DETAILS.findIndex((item) => item.id === detail.id)
  const previous = SERVICE_DETAILS[index - 1]
  const next = SERVICE_DETAILS[index + 1]
  if (!previous && !next) return null

  return (
    <section
      aria-label="More services"
      className="w-full overflow-x-hidden bg-background pb-24 text-foreground sm:pb-28 lg:pb-32"
    >
      <nav
        className={cn(
          "flex flex-col gap-4 sm:flex-row",
          previous && next ? "sm:justify-between" : next ? "sm:justify-end" : "sm:justify-start",
        )}
      >
        {previous && (
          <Link to={`/${previous.id}`} className={BUTTON}>
            <ArrowLeftIcon
              className="size-5 shrink-0 transition-transform duration-300 group-hover/pager:-translate-x-1"
              aria-hidden="true"
            />
            <span className="flex min-w-0 flex-col">
              <span className="text-xs text-muted-foreground">Previous service</span>
              <span className="truncate font-semibold tracking-tight">{previous.title}</span>
            </span>
          </Link>
        )}
        {next && (
          <Link to={`/${next.id}`} className={cn(BUTTON, "justify-end text-right sm:ml-auto")}>
            <span className="flex min-w-0 flex-col">
              <span className="text-xs text-muted-foreground">Next service</span>
              <span className="truncate font-semibold tracking-tight">{next.title}</span>
            </span>
            <ArrowRightIcon
              className="size-5 shrink-0 transition-transform duration-300 group-hover/pager:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        )}
      </nav>
    </section>
  )
}
