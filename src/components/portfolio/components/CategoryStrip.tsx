import { Link } from "react-router-dom"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { CATEGORIES_INTRO, CATEGORY_GROUPS } from "../data/categories"
import { ScrollStrip } from "./ScrollStrip"

const TARGET = "/book-call?plan=custom"

/**
 * Categories in groups of columns, in a row that scrolls sideways. Each group has a muted heading,
 * and each item an icon, a name and, when it has one, a count. Items open the book-a-call page.
 */
export function CategoryStrip() {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32">
      <SectionHeading
        className="mb-12 sm:mb-16"
        title={CATEGORIES_INTRO.title}
        description={CATEGORIES_INTRO.description}
        tabletDescription={CATEGORIES_INTRO.tabletDescription}
        mobileDescription={CATEGORIES_INTRO.mobileDescription}
      />
      <ScrollStrip gap="gap-14 sm:gap-24">
        {CATEGORY_GROUPS.map((group) => (
          <div key={group.heading} className="shrink-0">
            <p className="mb-4 text-sm font-medium text-muted-foreground">{group.heading}</p>
            <div className="flex gap-x-8 sm:gap-x-12">
              {group.columns.map((column, index) => (
                <ul key={index} className="flex min-w-44 flex-col gap-1">
                  {column.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={TARGET}
                        draggable={false}
                        className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium whitespace-nowrap transition-colors hover:bg-muted"
                      >
                        <item.icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                        {item.label}
                        {item.count !== undefined && (
                          <span className="text-xs font-normal text-muted-foreground">{item.count}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </ScrollStrip>
    </div>
  )
}
