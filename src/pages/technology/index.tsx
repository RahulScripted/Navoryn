import { IconFolder } from "@/components/technology/components/IconFolder"
import { TECH_CATEGORIES, toolIcons } from "@/components/technology/data/techData"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"

export default function Technology() {
  return (
    <section
      id="technology"
      className="w-full overflow-x-hidden py-24 sm:py-28 lg:py-32 bg-background text-foreground"
      style={{
        backgroundImage:
          "radial-gradient(circle, color-mix(in oklab, var(--foreground) 4%, transparent) 0 1px, transparent 1.4px)",
        backgroundSize: "20px 13px",
        backgroundPosition: "-6px -1px",
      }}
    >
      <SectionHeading
        className="mb-16 sm:mb-20"
        title="Our Technology Ecosystem"
        description="A carefully selected ecosystem of modern technologies, frameworks, and tools that powers the digital experiences we design, develop, and deliver — from high-performance websites and scalable web applications to intuitive mobile solutions."
        mobileDescription="Modern technologies and tools that power fast websites, scalable applications, and seamless mobile experiences."
        tabletDescription="Explore the modern technologies, frameworks, and tools we use to build high-performance websites, scalable applications, and seamless digital experiences."
      />

      <div className="grid w-full grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_CATEGORIES.map((cat) => {
          const icons = toolIcons(cat.tools)
          return (
            <IconFolder
              key={cat.no}
              title={`${cat.no}. ${cat.title}`}
              tags={cat.tools}
              icons={icons}
              spread={70}
              className="max-w-none"
            />
          )
        })}
      </div>
    </section>
  )
}
