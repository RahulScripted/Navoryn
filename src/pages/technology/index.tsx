import { IconFolder, TECH_CATEGORIES, toolIcons } from "../../components/technology"

export default function Technology() {
  return (
    <section
      className="w-full overflow-x-hidden px-6 py-24 sm:py-28 lg:py-32 bg-background text-foreground"
      style={{
        backgroundImage:
          "radial-gradient(circle, color-mix(in oklab, var(--foreground) 4%, transparent) 0 1px, transparent 1.4px)",
        backgroundSize: "20px 13px",
        backgroundPosition: "-6px -1px",
      }}
    >
      <div className="mb-16 flex w-full flex-col items-center text-center sm:mb-20">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Our Technology Ecosystem
        </h2>
        <p className="mt-6 w-full text-base leading-relaxed text-muted-foreground sm:hidden">
          A carefully selected ecosystem of modern technologies, frameworks, and tools
          that powers the digital experiences we design, develop, and deliver.
        </p>
        <p className="mt-6 hidden w-full text-base leading-relaxed text-muted-foreground sm:block sm:text-lg lg:max-w-5xl">
          A carefully selected ecosystem of modern technologies, frameworks, and tools
          that powers the digital experiences we design, develop, and deliver — from
          high-performance websites and scalable web applications to intuitive mobile
          solutions.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 place-items-center gap-x-8 gap-y-14 sm:grid-cols-2 md:mx-0 md:max-w-none lg:grid-cols-3">
        {TECH_CATEGORIES.map((cat) => {
          const icons = toolIcons(cat.tools)
          return (
            <IconFolder
              key={cat.no}
              title={`${cat.no}. ${cat.title}`}
              tags={cat.tools}
              icons={icons}
              spread={70}
            />
          )
        })}
      </div>
    </section>
  )
}
