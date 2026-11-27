import { createRef, useMemo, useRef } from "react"
import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"
import { findToolIcon } from "@/components/technology/data/icons"
import { AnimatedBeam } from "@/components/about/ui/animated-beam/components/AnimatedBeam"
import { BeamHub } from "@/components/about/ui/animated-beam/components/BeamHub"
import { useIsDark } from "@/utilities/useIsDark"

// Adapted from the Tailark "integrations" variants (cloud grid and marquee).
// The Next.js Link, shadcn Button and Card parts are left out: only the logo layouts are used here,
// the text and call to action come from the page. Logos are the tech-stack SVGs the site already has.

const DARK_FLIP = { filter: "invert(1) hue-rotate(180deg)" }

function Logo({ name }: { name: string }) {
  const dark = useIsDark()
  const icon = findToolIcon(name)
  if (!icon) return null
  const src = dark ? (icon.srcDark ?? icon.src) : icon.src
  const flip = dark && icon.invertOnDark && !icon.srcDark ? DARK_FLIP : undefined
  return <img src={src} alt="" aria-hidden="true" draggable={false} loading="lazy" className="size-full object-contain" style={flip} />
}

function IntegrationCard({
  name,
  className,
  children,
}: {
  name?: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      title={name}
      className={cn("relative flex shrink-0 items-center justify-center rounded-xl border border-border bg-background p-3", className)}
    >
      {children ?? (name ? <Logo name={name} /> : null)}
    </div>
  )
}

/**
 * Logos on both sides of the Navoryn mark, each joined to it by an animated beam, like the
 * "Designed for What's Next" card. Built for four logos: two on the left, two on the right.
 */
export function IntegrationsCluster({ names, className }: { names: string[]; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useMemo(() => names.map(() => createRef<HTMLDivElement>()), [names])
  // Left column first, then right column; the two in each column curve away from each other.
  const curve = [-14, 14, -14, 14]
  const offset = [-6, 6, -6, 6]
  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={`Navoryn integrates with ${names.join(", ")}`}
      className={cn("relative mx-auto grid h-full w-full max-w-md grid-cols-[auto_1fr_auto_1fr_auto] items-center px-2", className)}
    >
      <div className="col-start-1 flex flex-col gap-6">
        {names.slice(0, 2).map((name, i) => (
          <div key={name} ref={nodeRefs[i]} className="z-10 size-12 shrink-0 rounded-xl border border-border bg-card p-2.5 shadow-sm">
            <Logo name={name} />
          </div>
        ))}
      </div>
      <BeamHub ref={hubRef} className="col-start-3" />
      <div className="col-start-5 flex flex-col gap-6">
        {names.slice(2, 4).map((name, i) => (
          <div key={name} ref={nodeRefs[i + 2]} className="z-10 size-12 shrink-0 rounded-xl border border-border bg-card p-2.5 shadow-sm">
            <Logo name={name} />
          </div>
        ))}
      </div>
      {names.slice(0, 4).map((name, i) => (
        <AnimatedBeam
          key={name}
          containerRef={containerRef}
          fromRef={nodeRefs[i]}
          toRef={hubRef}
          curvature={curve[i]}
          endYOffset={offset[i]}
          delay={(i % 2) * 0.6}
          duration={3}
        />
      ))}
    </div>
  )
}

function MarqueeRow({ names, reverse }: { names: string[]; reverse?: boolean }) {
  const reduced = useReducedMotion()
  // Three copies, shifted by one copy, so the loop never shows a gap.
  const items = [...names, ...names, ...names]
  return (
    <motion.div
      aria-hidden="true"
      className="flex w-max gap-6"
      animate={reduced ? undefined : { x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
      transition={{ duration: 28, ease: "linear", repeat: Infinity }}
    >
      {items.map((name, index) => (
        <IntegrationCard key={`${name}-${index}`} name={name} className="size-12 p-2.5" />
      ))}
    </motion.div>
  )
}

/** Three drifting rows of logos. Built for twelve logos. */
export function IntegrationsMarquee({ names, className }: { names: string[]; className?: string }) {
  const size = Math.ceil(names.length / 3)
  const rows = [0, 1, 2].map((i) => names.slice(i * size, i * size + size))
  return (
    <div
      role="img"
      aria-label={`Navoryn integrates with ${names.join(", ")}`}
      className={cn(
        "relative mx-auto flex h-full w-full flex-col justify-center gap-4 overflow-hidden [mask-image:radial-gradient(ellipse_70%_90%_at_50%_50%,#000_60%,transparent_100%)]",
        className,
      )}
    >
      {rows.map((row, index) => (
        <MarqueeRow key={index} names={row} reverse={index === 1} />
      ))}
    </div>
  )
}
