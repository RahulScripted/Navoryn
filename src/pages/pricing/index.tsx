import { useEffect } from "react"
import Pricing from "@/components/pricing"
import Header from "@/ui/header"
import RevealFooter from "@/ui/footer/RevealFooter"
import TargetCursor from "@/utilities/TargetCursor/TargetCursor"
import { usePageMeta } from "@/lib/pageMeta"
export default function PricingPage() {
  usePageMeta({ title: "Pricing", description: "Transparent website and web app pricing from Navoryn. Pick a package, choose your pages and add-ons, and get an instant estimate." })
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])
  return (
    <>
      <Header />
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor parallaxOn />
      <RevealFooter>
        <main className="page-px">
          <Pricing />
        </main>
      </RevealFooter>
    </>
  )
}
