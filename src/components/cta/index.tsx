import { Fragment } from "react"
import ctaImage from "@/asset/webps/cta.webp"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import { CtaLink } from "./components/CtaLink"
import { CTA } from "./data/cta"

export default function Cta() {
  const frameRef = useReveal<HTMLDivElement>({ y: 40, blur: 8 })
  const imageRef = useReveal<HTMLDivElement>({ y: 0, scale: 0.88, blur: 12, delay: 0.15 })

  return (
    <section aria-labelledby="cta-title" className="w-full overflow-x-clip bg-background pb-24 text-foreground sm:pb-28 lg:pb-32">
      {/* Outer ring, then the panel inside it */}
      <div ref={frameRef} className="rounded-[2rem] border bg-card p-2 sm:p-3">
        <div className="cursor-target relative isolate overflow-hidden rounded-3xl bg-muted/60">
          <SpotlightLayer />
          <div className="relative z-10 grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:p-14">
            <div className="min-w-0">
              <p className="flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-current" />
                {CTA.eyebrow}
              </p>
              <h2 id="cta-title" aria-label={CTA.title.join(" ")} className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {CTA.title.map((sentence, index) => (
                  <Fragment key={sentence}>
                    {/* The space sits outside the nowrap span: it is the only place the line may break. */}
                    {index > 0 && " "}
                    <span className="whitespace-nowrap">{sentence}</span>
                  </Fragment>
                ))}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                {CTA.description}
              </p>
              <div className="mt-8">
                <CtaLink />
              </div>
            </div>
            <div ref={imageRef} className="mx-auto w-full min-w-0 max-w-xl lg:max-w-none">
              {/* The file has uneven transparent margins: nudged so the artwork sits in the middle. */}
              <img
                src={ctaImage}
                alt=""
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                draggable={false}
                style={{ translate: "-1.07% 1.12%" }}
                className="h-auto w-full select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
