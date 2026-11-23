import { useEffect } from "react"
import Cta from "@/components/cta"
import Portfolio from "@/components/portfolio"
import Header from "@/ui/header"
import RevealFooter from "@/ui/footer/RevealFooter"
import TargetCursor from "@/utilities/TargetCursor/TargetCursor"
import { usePageMeta } from "@/lib/pageMeta"
export default function PortfolioPage() {
  usePageMeta({
    title: "Portfolio",
    description:
      "Explore Navoryn's work: digital experiences shaped by thoughtful design, purposeful engineering, and creative thinking.",
  })
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])
  return (
    <>
      <Header />
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor parallaxOn />
      <RevealFooter>
        <main className="page-px">
          <Portfolio className="pt-32 sm:pt-36" />
          <Cta />
        </main>
      </RevealFooter>
    </>
  )
}
