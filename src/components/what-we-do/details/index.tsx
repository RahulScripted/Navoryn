import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { DetailArrows } from "./components/DetailArrows"
import { DetailCards } from "./components/DetailCards"
import ContactSection from "@/components/contact"
import { DetailFaq } from "./components/DetailFaq"
import { DetailTech } from "./components/DetailTech"
import { SERVICE_DETAIL_CARDS } from "./data/cards"
import { DETAIL_ICONS } from "./data/icons"
import { DETAIL_IMAGES } from "./data/images"
import { SERVICE_FAQS } from "./data/faqs"
import { SERVICE_TECH_CATEGORIES } from "./data/tech"
import type { ServiceDetail } from "./types/detail"

export default function ServiceDetails({ detail }: { detail: ServiceDetail }) {
  return (
    <>
      <section className="w-full overflow-x-hidden bg-background pt-24 pb-24 text-foreground sm:pt-28 lg:pb-32">
        <SectionHeading
          key={detail.id}
          className="mb-16 sm:mb-20"
          eyebrow={`${detail.number} / Our expertise`}
          title={detail.title}
          description={detail.description}
          tabletDescription={detail.tabletDescription}
          mobileDescription={detail.mobileDescription}
        />
        <DetailCards cards={SERVICE_DETAIL_CARDS[detail.id]} images={DETAIL_IMAGES[detail.id]} icons={DETAIL_ICONS[detail.id]} serviceTitle={detail.title} />
      </section>
      <DetailTech categories={SERVICE_TECH_CATEGORIES[detail.id]} />
      <DetailFaq key={`faq-${detail.id}`} faqs={SERVICE_FAQS[detail.id]} serviceTitle={detail.title} />
      <ContactSection key={`contact-${detail.id}`} service={detail.id} />
      <DetailArrows detail={detail} />
    </>
  )
}
