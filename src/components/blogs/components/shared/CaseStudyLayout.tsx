import Cta from "@/components/cta"
import { ArrowBullet } from "@/components/legal/ArrowBullet"
import { usePageMeta } from "@/lib/pageMeta"
import { Description, SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { CaseStudyScroller } from "./CaseStudyScroller"
import type { CaseStudy } from "./types"
export function CaseStudyLayout({ study }: { study: CaseStudy }) {
  usePageMeta(study.seo)
  const imageRef = useReveal<HTMLDivElement>({ y: 40, scale: 0.97, blur: 10, duration: 1.1 })
  return (
    <>
      <section className="w-full overflow-x-clip bg-background pt-32 text-foreground sm:pt-36">
        <SectionHeading
          align="left"
          title={study.title}
          description={study.description}
          mobileDescription={study.mobileDescription}
        />
        <div ref={imageRef} className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-3xl border bg-muted/50 sm:mt-16 sm:aspect-[21/9]">
          <img
            src={study.image}
            alt=""
            decoding="async"
            draggable={false}
            className="absolute inset-0 h-full w-full select-none object-cover"
          />
        </div>
      </section>
      <section className="w-full overflow-x-clip bg-background py-24 text-foreground sm:py-28 lg:py-32">
        <SectionHeading align="left" title={study.intro.title} />
        <div className="mb-16 mt-4 flex w-full flex-col gap-4 sm:mb-20">
          {study.intro.paragraphs.map((paragraph, index) =>
            index === 0 ? (
              <Description key={paragraph}>{paragraph}</Description>
            ) : (
              <div key={paragraph} className="flex gap-3 md:pl-5">
                <ArrowBullet className="mt-[0.3em] size-5 shrink-0" />
                <Description>{paragraph}</Description>
              </div>
            ),
          )}
        </div>
        <CaseStudyScroller points={study.points} />
      </section>
      <Cta />
    </>
  )
}
