import { useEffect } from "react"
import Beliefs from "@/components/beliefs"
import Cta from "@/components/cta"
import AboutNavoryn from "@/components/about-navoryn"
import HowWeWork from "@/components/how-we-work"
import Header from "@/ui/header"
import RevealFooter from "@/ui/footer/RevealFooter"
import TargetCursor from "@/utilities/TargetCursor/TargetCursor"
import { usePageMeta } from "@/lib/pageMeta"

export default function HowWeWorkPage() {
  usePageMeta({ title: "About Navoryn", description: "Meet Navoryn, an independent digital studio. Learn what we believe in, how we work, and how we turn ambitious ideas into meaningful digital experiences." })
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

  return (
    <>
      <Header />
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor parallaxOn />
      <RevealFooter>
        <main className="page-px">
          <AboutNavoryn />
          <HowWeWork />
          <Beliefs />
          <Cta />
        </main>
      </RevealFooter>
    </>
  )
}
