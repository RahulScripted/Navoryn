import { IconFolder } from "@/components/technology/components/IconFolder"
import { toolIcons } from "@/components/technology/data/techData"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import type { TechCategory } from "@/types/technology"

export function DetailTech({ categories }: { categories: TechCategory[] }) {
  return (
    <section
      className="w-full overflow-x-hidden bg-background py-24 text-foreground sm:py-28 lg:py-32"
      style={{
        backgroundImage:
          "radial-gradient(circle, color-mix(in oklab, var(--foreground) 4%, transparent) 0 1px, transparent 1.4px)",
        backgroundSize: "20px 13px",
        backgroundPosition: "-6px -1px",
      }}
    >
      <SectionHeading
        className="mb-16 sm:mb-20"
        title="Powered by modern technology."
        description="We choose tools based on your product's requirements, performance expectations, and long-term goals — not trends alone."
      />
      <div className="grid w-full grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <IconFolder
            key={cat.no}
            title={`${cat.no}. ${cat.title}`}
            tags={cat.tools}
            icons={toolIcons(cat.tools)}
            spread={70}
            className="max-w-none"
          />
        ))}
      </div>
    </section>
  )
}
