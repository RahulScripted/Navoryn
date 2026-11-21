import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { useRef } from "react"
import { useReducedMotion } from "motion/react"
import { useImpactExpand } from "@/components/impact/useImpactExpand"
import { useVideoInView } from "@/components/impact/useVideoInView"
import { scrollToSection } from "@/lib/sections"
import { RollText } from "@/utilities/RollText"
import VariableProximity from "@/utilities/VariableProximity/VariableProximity"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import impactVideo from "@/asset/videos/hero.mp4"
import impactPoster from "@/asset/webps/home/impact-poster.webp"
const DESCRIPTION =
  "One vision, endless possibilities: we turn ambitious ideas into digital experiences that move brands forward."
export default function Impact() {
  const reduced = Boolean(useReducedMotion())
  const { stage, slot, layer, video, caption, lineTop, lineBottom } = useImpactExpand(!reduced)
  useVideoInView(video)
  const headingBox = useRef<HTMLDivElement>(null)
  const titleRef = useReveal<HTMLHeadingElement>({ y: 0, blur: 10, duration: 1 })
  const proximity = (label: string) => (
    <VariableProximity
      label={label}
      containerRef={headingBox}
      fromFontVariationSettings="'wght' 500, 'opsz' 9"
      toFontVariationSettings="'wght' 1000, 'opsz' 40"
      radius={140}
      falloff="gaussian"
      smoothing={0.25}
    />
  )
  const heading = (
    <div ref={headingBox} className="relative z-30">
      <h2
        ref={titleRef}
        className="pointer-events-none px-5 text-center text-[2.5rem] leading-[1.08] font-bold tracking-tight sm:text-7xl lg:text-8xl"
      >
        <span ref={lineTop} className="block">
          {proximity("We Turn Bold")}{" "}
          <span
            ref={slot}
            aria-hidden="true"
            className="inline-block h-[0.74em] w-[1.7em] rounded-full align-[-0.05em]"
          />
        </span>
        <span ref={lineBottom} className="block">
          {proximity("Ideas Into")} <span className="text-muted-foreground">{proximity("Impact.")}</span>
        </span>
      </h2>
    </div>
  )
  const media = (
    <>
      <video
        ref={video}
        src={impactVideo}
        poster={impactPoster}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div
        ref={caption}
        className="absolute inset-x-6 bottom-6 z-10 flex flex-col items-start gap-5 sm:inset-x-10 sm:bottom-10 sm:flex-row sm:items-end sm:justify-between"
      >
        <p className="max-w-xl text-xl leading-snug font-medium text-white sm:text-2xl lg:text-3xl">{DESCRIPTION}</p>
        <a
          href="#blogs"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("blogs")
          }}
          className="group/roll cursor-target flex shrink-0 items-center gap-3 rounded-full bg-white p-1.5 pl-5 text-black transition-transform duration-300 ease-out hover:-translate-y-0.5"
        >
          <RollText>
            <span className="text-sm font-semibold">See our work</span>
          </RollText>
          <span className="flex size-8 items-center justify-center rounded-full bg-black text-white">
            <RollText>
              <ArrowTopRightIcon className="size-4" aria-hidden="true" />
            </RollText>
          </span>
        </a>
      </div>
    </>
  )
  if (reduced) {
    return (
      <section id="impact" aria-label="We turn bold ideas into impact" className="w-full bg-background py-24 text-foreground sm:py-28 lg:py-32">
        {heading}
        <div className="relative mx-auto mt-12 aspect-video w-full max-w-6xl overflow-hidden rounded-3xl">{media}</div>
      </section>
    )
  }
  return (
    <section id="impact" aria-label="We turn bold ideas into impact" className="-mx-(--page-x) w-auto bg-background text-foreground">
      <div ref={stage} className="relative flex h-svh min-h-[560px] items-center justify-center overflow-hidden">
        {heading}
        <div ref={layer} className="absolute top-0 left-0 z-20 h-full w-full overflow-hidden">
          {media}
        </div>
      </div>
    </section>
  )
}
