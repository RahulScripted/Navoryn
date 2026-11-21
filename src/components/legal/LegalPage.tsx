import { useEffect } from "react"
import { NotchedCard } from "@/utilities/Card/NotchedCard"
import { usePageMeta } from "@/lib/pageMeta"
import Header from "@/ui/header"
import RevealFooter from "@/ui/footer/RevealFooter"
import TargetCursor from "@/utilities/TargetCursor/TargetCursor"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { Badge } from "@/utilities/Badge"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { ArrowBullet } from "./ArrowBullet"
import { EFFECTIVE_DATE } from "./contact"
import type { LegalBlock, LegalDocument } from "./types"
function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") {
    return <p className="text-base leading-relaxed text-muted-foreground">{block}</p>
  }
  if ("label" in block) {
    return <h3 className="pt-2 text-base font-bold tracking-tight">{block.label}</h3>
  }
  return (
    <ul className="flex flex-col gap-3 md:pl-5">
      {block.list.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
          <ArrowBullet className="mt-[0.3em] size-5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
export function LegalPage({ doc }: { doc: LegalDocument }) {
  usePageMeta({ title: doc.title, description: doc.metaDescription })
  const listRef = useReveal<HTMLDivElement>({ children: true, y: 28, blur: 6, stagger: 0.05 })
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [doc.slug])
  return (
    <>
      <Header />
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor parallaxOn />
      <RevealFooter>
        <main className="page-px">
          <section className="w-full bg-background pt-32 pb-24 text-foreground sm:pt-36 lg:pb-32">
            <div className="w-full">
              <SectionHeading
                align="left"
                className="mb-10"
                title={doc.title}
                titleAside={<Badge variant="outline">Effective Date: {EFFECTIVE_DATE}</Badge>}
              />
              {doc.intro.length > 0 && (
                <div className="mb-10 flex flex-col gap-3">
                  {doc.intro.map((text) => (
                    <p key={text} className="text-base leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  ))}
                </div>
              )}
              <div ref={listRef} className="flex flex-col gap-4">
                {doc.sections.map((section, index) => {
                  return (
                    <NotchedCard
                      key={section.title}
                      background={
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -top-4 right-10 z-0 select-none text-[9rem] leading-none font-black tracking-tighter text-foreground/[0.06] sm:text-[12rem] lg:text-[14rem]"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      }
                    >
                      <div className="p-6 pb-14 sm:p-8 sm:pb-14 lg:p-10 lg:pb-14">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">{section.title}</h2>
                        <div className="flex flex-col gap-4">
                          {section.blocks.map((block, i) => (
                            <Block key={i} block={block} />
                          ))}
                        </div>
                      </div>
                    </NotchedCard>
                  )
                })}
              </div>
            </div>
            {doc.closing && (
              <p className="mx-auto mt-12 text-center text-lg font-bold tracking-tight">{doc.closing}</p>
            )}
          </section>
        </main>
      </RevealFooter>
    </>
  )
}
