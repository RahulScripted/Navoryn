import { cn } from "@/lib/utils"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { PLAN_DETAILS, type PlanFeature } from "../data/plans"

// Six tiles on a 12-column grid (large screens):
//   row 1: one wide rectangle (9) beside one square (3)
//   row 2: square (2), rectangle (4), rectangle (4), square (2)
const SPAN = [
  "md:col-span-2 lg:col-span-9",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-4",
  "md:col-span-2 lg:col-span-2",
]

// Pro and Pro Max have seven tiles: a square, a double-width tile, a square, then the 2 / 4 / 4 / 2 row.
const SPAN_SEVEN = [
  "md:col-span-2 lg:col-span-3",
  "md:col-span-2 lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-4",
  "md:col-span-2 lg:col-span-2",
]

function FeatureTile({ feature, index, span }: { feature: PlanFeature; index: number; span: string[] }) {
  const filled = index % 3 === 1
  return (
    <div
      className={cn(
        "cursor-target group relative isolate flex min-h-[320px] flex-col overflow-hidden rounded-[28px] border border-border text-card-foreground",
        "transition-transform duration-300 ease-out hover:-translate-y-1",
        filled ? "bg-muted/60" : "bg-card",
        span[index % span.length],
      )}
    >
      <SpotlightLayer />
      <div className="relative z-10 flex flex-1 items-center justify-center p-4 sm:p-5">
        {feature.media ? (
          <div className="h-56 w-full">{feature.media}</div>
        ) : feature.image ? (
          <img
            src={feature.image}
            alt={feature.imageAlt ?? ""}
            loading="lazy"
            decoding="async"
            className="h-full max-h-56 w-full rounded-[18px] object-contain"
          />
        ) : (
          <div
            aria-hidden="true"
            className="h-full min-h-40 w-full rounded-[18px] border border-dashed border-border bg-background/60"
          />
        )}
      </div>
      <div className="relative z-10 flex flex-col gap-1 border-t border-border p-4 sm:p-5">
        <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-base font-extrabold leading-tight tracking-tight sm:text-lg">{feature.title}</h3>
        <p className="text-xs font-medium leading-snug text-muted-foreground sm:text-[0.8rem]">{feature.description}</p>
      </div>
    </div>
  )
}

export function PlanFeatures({ plan }: { plan: string }) {
  const details = Object.hasOwn(PLAN_DETAILS, plan) ? PLAN_DETAILS[plan] : undefined
  const gridRef = useReveal<HTMLDivElement>({ children: true, y: 40, scale: 0.97, stagger: 0.1 })
  if (!details) return null
  return (
    <section aria-label={details.title} className="w-full overflow-x-clip bg-background pt-14 pb-0 text-foreground sm:pt-20">
      <SectionHeading
        className="mb-12 sm:mb-16"
        title={details.title}
        description={details.description}
        tabletDescription={details.tabletDescription}
        mobileDescription={details.mobileDescription}
      />
      <div ref={gridRef} className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
        {details.features.map((feature, index) => (
          <FeatureTile key={feature.id} feature={feature} index={index} span={details.features.length === 7 ? SPAN_SEVEN : SPAN} />
        ))}
      </div>
    </section>
  )
}
