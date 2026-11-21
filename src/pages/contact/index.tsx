import { useEffect } from "react"
import ContactSection from "@/components/contact"
import Header from "@/ui/header"
import RevealFooter from "@/ui/footer/RevealFooter"
import TargetCursor from "@/utilities/TargetCursor/TargetCursor"
import { usePageMeta } from "@/lib/pageMeta"

export default function ContactPage() {
  usePageMeta({ title: "Contact", description: "Tell us about your project. Navoryn designs and builds websites, web apps and mobile apps. Share your idea and we will get back to you." })
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

  return (
    <>
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
