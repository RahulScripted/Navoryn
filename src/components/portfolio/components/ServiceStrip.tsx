import { Link } from "react-router-dom"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { SERVICE_GROUPS, SERVICES_INTRO } from "../data/serviceGroups"
import { ScrollStrip } from "./ScrollStrip"

/** The services we provide, grouped, in a row that scrolls sideways. Each item opens its service page. */
export function ServiceStrip() {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32">
      <SectionHeading
        className="mb-12 sm:mb-16"
        title={SERVICES_INTRO.title}
        description={SERVICES_INTRO.description}
        tabletDescription={SERVICES_INTRO.tabletDescription}
        mobileDescription={SERVICES_INTRO.mobileDescription}
      />
      <ScrollStrip>
        {SERVICE_GROUPS.map((group) => (
          <div key={group.heading} className="w-72 shrink-0 sm:w-80">
            <p className="mb-3 border-b border-border pb-3 text-[0.65rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
              {group.heading}
            </p>
            <ul className="flex flex-col gap-1">
              {group.items.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/${item.id}`}
                    draggable={false}
                    className="group/item flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-foreground transition-transform duration-300 group-hover/item:-translate-y-0.5">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                    <ChevronRightIcon
                      className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ScrollStrip>
    </div>
  )
}
