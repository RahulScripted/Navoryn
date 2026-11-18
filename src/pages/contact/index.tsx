import { useEffect } from "react"
import ContactSection from "@/components/contact"
import PreLoader from "@/ui/preloader"
import Header from "@/ui/header"
import RevealFooter from "@/ui/footer/RevealFooter"
import TargetCursor from "@/utilities/TargetCursor/TargetCursor"

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

  return (
    <>
      <PreLoader />
      <Header />
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor parallaxOn />
      <RevealFooter>
        <main className="page-px flex min-h-svh flex-col justify-center">
          <ContactSection />
        </main>
      </RevealFooter>
    </>
  )
}
