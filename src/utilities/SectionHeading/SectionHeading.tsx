import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import VariableProximity from "@/utilities/VariableProximity/VariableProximity"
import { ScrollReveal } from "@/utilities/ScrollReveal"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"

interface SectionHeadingProps {
  title: string
  description?: ReactNode
  mobileDescription?: ReactNode
  tabletDescription?: ReactNode
  eyebrow?: string
  align?: "center" | "left"
  titleAside?: ReactNode
  className?: string
}

const DESCRIPTION = "text-base leading-relaxed text-muted-foreground sm:text-lg"

export function Description({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <ScrollReveal
      as="p"
      containerClassName={cn(DESCRIPTION, className)}
      baseOpacity={0.15}
      baseRotation={0}
      blurStrength={4}
      stagger={0.04}
    >
      {children}
    </ScrollReveal>
  )
}

export function SectionHeading({
  title,
  description,
  mobileDescription,
  tabletDescription,
  eyebrow,
  align = "center",
  titleAside,
  className,
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useReveal<HTMLSpanElement>({ y: 16, blur: 6 })
  const titleRef = useReveal<HTMLHeadingElement>({ y: 36, blur: 10, duration: 1 })

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full flex-col gap-4",
        align === "left" ? "items-start text-left" : "items-center text-center md:mx-auto md:max-w-6xl",
        className,
      )}
    >
      {eyebrow && (
        <span
          ref={eyebrowRef}
          className="rounded-lg border px-4 py-1 text-sm text-muted-foreground"
        >
          {eyebrow}
        </span>
      )}

      <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-3", align === "left" ? "w-full justify-between" : "justify-center")}>
      <h2 ref={titleRef} className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
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
        {titleAside}
      </div>

      {description &&
        (mobileDescription || tabletDescription ? (
          <>
            <Description className="sm:hidden">{mobileDescription ?? description}</Description>
            <Description className="hidden sm:block lg:hidden">
              {tabletDescription ?? description}
            </Description>
            <Description className="hidden lg:block">{description}</Description>
          </>
        ) : (
          <Description>{description}</Description>
        ))}
    </div>
  )
}
