import { useEffect } from "react"
import ServiceDetails from "@/components/what-we-do/details"
import { getServiceDetail } from "@/components/what-we-do/details/data/details"
import PreLoader from "@/ui/preloader"
import TargetCursor from "@/utilities/TargetCursor/TargetCursor"
import NotFound from "@/ui/not-found"
import Header from "@/ui/header"
import RevealFooter from "@/ui/footer/RevealFooter"

export default function ServiceDetailPage({ id }: { id: string }) {
  const detail = getServiceDetail(id)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [id])

  if (!detail) return <NotFound />
  return (
    <>
      <PreLoader />
      <Header />
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor parallaxOn />
      <RevealFooter>
        <main className="page-px">
          <ServiceDetails detail={detail} />
        </main>
      </RevealFooter>
    </>
  )
}
