import { useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"
import { BrandingCaseStudy } from "@/components/blogs/components/branding"
import { EngineeringCaseStudy } from "@/components/blogs/components/engineering"
import { StrategyCaseStudy } from "@/components/blogs/components/strategy"
import { TechnologyCaseStudy } from "@/components/blogs/components/technology"
import Header from "@/ui/header"
import RevealFooter from "@/ui/footer/RevealFooter"
import TargetCursor from "@/utilities/TargetCursor/TargetCursor"
const STUDIES = {
  strategy: StrategyCaseStudy,
  engineering: EngineeringCaseStudy,
  branding: BrandingCaseStudy,
  technology: TechnologyCaseStudy,
} as const
export default function CaseStudyPage() {
  const { slug } = useParams()
  const Study = slug && slug in STUDIES ? STUDIES[slug as keyof typeof STUDIES] : null
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [slug])
  if (!Study) return <Navigate to="/" replace />
  return (
    <>
      <Header />
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor parallaxOn />
      <RevealFooter>
        <main className="page-px">
          <Study />
        </main>
      </RevealFooter>
    </>
  )
}
