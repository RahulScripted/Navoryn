import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { MasonryGrid } from "@/components/about/components/MasonryGrid"
import { ABOUT_CARDS } from "@/components/about/data/about"

export default function About() {
  return (
    <section id="about" className="w-full overflow-x-hidden bg-background py-24 text-foreground sm:py-28 lg:py-32">
      <SectionHeading
        className="mb-16 sm:mb-20"
        title="What Sets Us Apart"
        description="An independent digital studio bringing together creative thinking, technical expertise, and thoughtful design to turn ambitious ideas into meaningful digital experiences. We create with purpose, build with precision, and deliver with impact."
        tabletDescription="An independent digital studio combining creative thinking, technical expertise, and thoughtful design to turn ambitious ideas into meaningful digital experiences."
        mobileDescription="An independent digital studio turning ambitious ideas into meaningful digital experiences."
      />

      <MasonryGrid cards={ABOUT_CARDS} />
    </section>
  )
}
