import { useEffect } from "react"
import Beliefs from "@/components/beliefs"
import Cta from "@/components/cta"
import HowWeWork from "@/components/how-we-work"
import PreLoader from "@/ui/preloader"
import Header from "@/ui/header"
import RevealFooter from "@/ui/footer/RevealFooter"
import TargetCursor from "@/utilities/TargetCursor/TargetCursor"

/** How We Work is its own page (like the service pages): header, the section, footer. */
export default function HowWeWorkPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

  return (
    <>
      <PreLoader />
      <Header />
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor parallaxOn />
      <RevealFooter>
        <main className="page-px">
          <HowWeWork />
          <Beliefs />
          <Cta />
        </main>
      </RevealFooter>
    </>
  )
}
