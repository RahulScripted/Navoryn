import { cn } from "@/lib/utils"
import { InfiniteSlider } from "@/components/testimonial/components/InfiniteSlider"
import { TestimonialCard } from "@/components/testimonial/components/TestimonialCard"
import { testimonials } from "@/components/testimonial/data/testimonials"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import type { Testimonial } from "@/types/testimonial"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"

const COLUMN_SPEEDS = [30, 50, 35, 42]

function buildColumns(items: Testimonial[], count: number): Testimonial[][] {
  const cols: Testimonial[][] = Array.from({ length: count }, () => [])
  items.forEach((item, i) => cols[i % count].push(item))
  return cols
}

export default function Testimonial() {
  const columns = buildColumns(testimonials, 4)
  const wallRef = useReveal<HTMLDivElement>({ y: 48, blur: 10, duration: 1.1 })

  return (
    <section id="testimonials" className="relative w-full overflow-x-hidden py-24 sm:py-28 lg:py-32 bg-background text-foreground">
      <div className="w-full">
        <SectionHeading
          className="mb-16 sm:mb-20"
          title="Words That Build Trust"
          description="The best measure of our work is the impact it creates. Discover what clients say about their experience working with us, from the first conversation to the final delivery."
          mobileDescription="See what our clients say about working with us and the impact we create together."
          tabletDescription="Discover what our clients say about their experience with NAVORYN and the value we bring to every project."
        />

        <div
          ref={wallRef}
          className={cn(
            "flex max-h-[40rem] w-full justify-center gap-4 overflow-hidden md:gap-6 lg:gap-8",
            "mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
          )}
        >
          {columns.map((col, i) => (
            <InfiniteSlider
              key={i}
              direction="vertical"
              speed={COLUMN_SPEEDS[i]}
              pauseOnHover
              className={cn(
                "w-full min-w-0 md:flex-1 md:basis-0",
                i >= 2 ? "hidden lg:block" : i >= 1 ? "hidden md:block" : "",
              )}
            >
              {col.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </InfiniteSlider>
          ))}
        </div>
      </div>
    </section>
  )
}
