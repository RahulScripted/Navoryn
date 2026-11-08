import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { MasonryGrid } from "@/components/about/components/MasonryGrid"
import { ABOUT_CARDS } from "@/components/about/data/about"

export default function About() {
  return (
    <section className="w-full overflow-x-hidden bg-background py-24 text-foreground sm:py-28 lg:py-32">
      <SectionHeading
        className="mb-16 sm:mb-20"
        title="A Studio Built Around Ideas & Innovation"
        description="We bring ideas to life through modern web technologies, purposeful design, and a commitment to quality. Our vision is to help businesses establish a stronger digital presence with solutions built for today and ready for tomorrow."
        tabletDescription="NAVORYN is an independent digital studio combining creativity, modern technology, and purposeful design to transform ideas into meaningful digital experiences that help businesses build and grow their online presence."
        mobileDescription="An independent digital studio turning ambitious ideas into meaningful digital experiences through creativity, technology, and thoughtful design."
      />

      <MasonryGrid cards={ABOUT_CARDS} />
    </section>
  )
}
