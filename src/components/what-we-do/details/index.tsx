import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { DetailArrows } from "./components/DetailArrows"
import { DetailCards } from "./components/DetailCards"
import { DetailPager } from "./components/DetailPager"
import { DetailTech } from "./components/DetailTech"
import { SERVICE_DETAIL_CARDS } from "./data/cards"
import { SERVICE_TECH_CATEGORIES } from "./data/tech"
import type { ServiceDetail } from "./types/detail"

export default function ServiceDetails({ detail }: { detail: ServiceDetail }) {
  return (
    <>
      <section className="w-full overflow-x-hidden bg-background pt-24 pb-24 text-foreground sm:pt-28 lg:pb-32">
        <DetailArrows detail={detail} />
        <SectionHeading
          key={detail.id}
          className="mb-16 mt-4 sm:mb-20"
          eyebrow={`${detail.number} / Our expertise`}
          title={detail.title}
          description={detail.description}
          tabletDescription={detail.tabletDescription}
          mobileDescription={detail.mobileDescription}
        />
        <DetailCards cards={SERVICE_DETAIL_CARDS[detail.id]} serviceTitle={detail.title} />
      </section>
      <DetailTech categories={SERVICE_TECH_CATEGORIES[detail.id]} />
      <DetailPager detail={detail} />
    </>
  )
}
