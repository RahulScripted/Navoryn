import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { GanttChart } from "./components/GanttChart"
import { StepCard } from "./components/StepCard"
import { STEPS } from "./data/steps"
import { useTimeline } from "./hooks/useTimeline"

export default function HowWeWork() {
  // `--t` is 1 (the finished timeline) until the hook takes over, so nothing is ever left half-drawn.
  const timelineRef = useTimeline<HTMLDivElement>({ duration: 7000 })
  const listRef = useReveal<HTMLOListElement>({ children: true, y: 40, stagger: 0.12 })

  return (
    <section id="how-we-work" className="w-full overflow-x-hidden bg-background py-24 text-foreground sm:py-28 lg:py-32">
      <SectionHeading
        className="mb-16 sm:mb-20"
        title="From First Thought to Final Launch."
        description="We turn your vision into a purposeful digital experience through thoughtful strategy, considered design, and expert development. From the first conversation to launch, every phase is built to move your business forward."
        tabletDescription="We bring clarity through thoughtful strategy, purposeful design, and expert development. Our process takes your vision from concept to launch."
        mobileDescription="Four focused phases. One clear direction. From the first conversation to a digital experience."
      />
      <div ref={timelineRef} className="flex flex-col gap-12 [--t:1] lg:gap-14">
        <GanttChart />
        <ol ref={listRef} aria-label="Our process" className="grid gap-5 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <StepCard key={step.id} step={step} last={index === STEPS.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  )
}
