import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import VariableProximity from "@/components/common/VariableProximity/VariableProximity"

interface SectionHeadingProps {
  title: string
  description?: ReactNode
  mobileDescription?: ReactNode
  tabletDescription?: ReactNode
  eyebrow?: string
  className?: string
}

export function SectionHeading({
  title,
  description,
  mobileDescription,
  tabletDescription,
  eyebrow,
  className,
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative md:mx-auto flex w-full md:max-w-6xl flex-col items-center gap-4 text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="rounded-lg border px-4 py-1 text-sm text-muted-foreground">
          {eyebrow}
        </span>
      )}

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        <VariableProximity
          label={title}
          containerRef={containerRef}
          fromFontVariationSettings="'wght' 500, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          radius={120}
          falloff="gaussian"
          smoothing={0.25}
        />
      </h2>

      {description && (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {mobileDescription || tabletDescription ? (
            <>
              <span className="sm:hidden">{mobileDescription ?? description}</span>
              <span className="hidden sm:inline lg:hidden">
                {tabletDescription ?? description}
              </span>
              <span className="hidden lg:inline">{description}</span>
            </>
          ) : (
            description
          )}
        </p>
      )}
    </div>
  )
}
