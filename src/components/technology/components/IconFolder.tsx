import * as React from "react"
import type { FolderIcon, IconFolderProps } from "../../../types/technology"
import { useIsDark } from "../hooks/useIsDark"
import { SpotlightLayer } from "@/utilities/SpotlightCard"

const DEFAULTS = {
  title: "Design",
  tags: ["One", "Two", "Three", "Four"],
  icons: [] as FolderIcon[],
}

const mix = (pct: number) =>
  `color-mix(in oklab, var(--foreground) ${pct}%, transparent)`

const THEME = {
  ink: "var(--foreground)",
  chipBg: "var(--secondary)",
  chipBorder: "var(--border)",
  chipInk: "var(--muted-foreground)",
  back: `linear-gradient(180deg, ${mix(4)}, ${mix(1)} 60%)`,
  backEdge: mix(8),
  front: `linear-gradient(160deg, ${mix(6)}, ${mix(2)} 55%), var(--card)`,
  frontEdge: [mix(30), mix(10), mix(0)],
  glow: mix(10),
  pillBg: "var(--card)",
  pillBorder: "var(--border)",
  tileRing: mix(12),
  tileShadow: mix(45),
  focus: "var(--ring)",
} as const

const pathL = (w: number, h: number, r: number, d: number, tw: number, s: number) =>
  `M0 ${r}A${r} ${r} 0 0 1 ${r} 0L${tw} 0C${tw + s * 0.55} 0 ${tw + s * 0.45} ${d} ${tw + s} ${d}L${w - r} ${d}A${r} ${r} 0 0 1 ${w} ${d + r}L${w} ${h - r}A${r} ${r} 0 0 1 ${w - r} ${h}L${r} ${h}A${r} ${r} 0 0 1 0 ${h - r}Z`

const pathR = (w: number, h: number, r: number, d: number, tw: number, s: number) => {
  const x = w - tw
  return `M0 ${d + r}A${r} ${r} 0 0 1 ${r} ${d}L${x - s} ${d}C${x - s * 0.45} ${d} ${x - s * 0.55} 0 ${x} 0L${w - r} 0A${r} ${r} 0 0 1 ${w} ${r}L${w} ${h - r}A${r} ${r} 0 0 1 ${w - r} ${h}L${r} ${h}A${r} ${r} 0 0 1 0 ${h - r}Z`
}

function useShape(ref: React.RefObject<HTMLDivElement | null>, make: (w: number, h: number) => string) {
  const [d, setD] = React.useState("")
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(() => setD(make(el.offsetWidth, el.offsetHeight)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return d
}

function Tile({
  icon,
  ring,
  shadow,
  isDark,
}: {
  icon: FolderIcon
  ring: string
  shadow: string
  isDark: boolean
}) {
  const resolvedSrc = isDark ? icon.srcDark ?? icon.src : icon.src
  const flip = isDark && icon.invertOnDark && !icon.srcDark ? DARK_FLIP : undefined
  return (
    <div
      className="grid h-full w-full place-items-center overflow-hidden rounded-[inherit] p-6"
      style={{
        background: icon.background ?? "#2a2a2a",
        boxShadow: `0 18px 40px ${shadow}, 0 0 0 1px ${ring}`,
      }}
    >
      {resolvedSrc ? (
        <img
          src={resolvedSrc}
          alt={icon.label ?? ""}
          draggable={false}
          style={flip}
          className="h-full w-full object-contain"
        />
      ) : (
        icon.node
      )}
    </div>
  )
}

/** Flips a dark single-colour logo for dark tiles while keeping its hue. */
const DARK_FLIP = { filter: "invert(1) hue-rotate(180deg)" }

export function IconFolder(props: IconFolderProps) {
  const { title, tags, icons } = { ...DEFAULTS, ...props }
  const { defaultOpen = false, spread = 99, showPill = true, className = "" } = props
  const t = THEME
  const isDark = useIsDark()
  const gid = React.useId().replace(/:/g, "")

  const rootRef = React.useRef<HTMLDivElement>(null)
  const frontRef = React.useRef<HTMLDivElement>(null)
  const backRef = React.useRef<HTMLDivElement>(null)

  const [shown, setShown] = React.useState(false)
  const [open, setOpen] = React.useState(defaultOpen)
  const [hover, setHover] = React.useState(false)
  const [hi, setHi] = React.useState<number | null>(null)
  const [reduced, setReduced] = React.useState(false)

  React.useEffect(() => setOpen(defaultOpen), [defaultOpen])
  React.useEffect(() => setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches), [])
  React.useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const frontD = useShape(frontRef, (w, h) => pathL(w, h, 24, 24, Math.round(w * 0.42), 46))
  const backD = useShape(backRef, (w, h) => pathR(w, h, 24, 24, Math.round(w * 0.4), 46))

  const n = icons.length
  const rs = n > 1 ? 25 / (n - 1) : 0
  const wide = open || hover
  const lift = wide
  const ease = "cubic-bezier(.2,.8,.2,1)"
  const toggle = () => setOpen((o) => !o)

  return (
    <div
      ref={rootRef}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label={`${title}: ${tags.join(", ")}`}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          toggle()
        }
      }}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
      onPointerLeave={() => {
        setHover(false)
        setHi(null)
      }}
      className={`cursor-target relative isolate h-[320px] w-full max-w-[420px] cursor-pointer select-none outline-none [-webkit-tap-highlight-color:transparent] focus-visible:rounded-3xl focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 ${className}`}
      style={{
        color: t.ink,
        fontFamily: "'Geist', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        letterSpacing: "-0.05em",
        outlineColor: t.focus,
        zIndex: lift ? 2 : undefined,
        opacity: shown || reduced ? 1 : 0,
        transform: shown || reduced ? (lift ? "translateY(-6px) scale(1.02)" : "none") : "translateY(34px) scale(.92)",
        transition: reduced ? "none" : `transform .9s ${ease}, opacity .6s ease`,
      }}
    >
      <div
        className="pointer-events-none absolute left-[8%] right-[8%] top-10 -z-10 h-[200px] rounded-full opacity-80 blur-[18px]"
        style={{ background: `radial-gradient(closest-side, ${t.glow}, transparent)` }}
      />

      <div
        ref={backRef}
        className="absolute inset-x-0 bottom-0 top-[14px]"
        style={{ background: t.back, clipPath: backD ? `path('${backD}')` : undefined }}
      >
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          <path d={backD} fill="none" stroke={t.backEdge} strokeWidth="2" />
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {icons.map((icon, i) => {
          const k = i - (n - 1) / 2
          const gap = wide ? spread * 1.15 : spread
          const y = k * k * 9 - (wide ? 4 : 0)
          const rot = k * rs * (wide ? 1.2 : 1)
          return (
            <div
              key={i}
              className="absolute left-1/2 top-[54px] -ml-[50.5px] h-[101px] w-[101px] rounded-[26px] [backface-visibility:hidden]"
              style={{
                zIndex: hi === i ? 5 : undefined,
                opacity: shown || reduced ? 1 : 0,
                transform:
                  shown || reduced
                    ? `translate3d(${k * gap}px, ${y}px, 0) rotate(${rot}deg)`
                    : `translate3d(${k * spread * 0.6}px, 80px, 0)`,
                transition: reduced ? "none" : `transform ${wide ? 0.6 : 0.9}s ${ease}, opacity .5s`,
                transitionDelay: reduced ? "0s" : wide ? `${i * 0.04}s` : `${0.35 + i * 0.08}s`,
              }}
            >
              <div
                className="pointer-events-auto relative h-full w-full rounded-[inherit]"
                onPointerEnter={(e) => e.pointerType === "mouse" && setHi(i)}
                onPointerLeave={() => setHi((h) => (h === i ? null : h))}
                style={{
                  transform:
                    hi === i
                      ? `translateY(-26px) rotate(${-rot}deg) scale(1.1)`
                      : hi !== null
                      ? "scale(.96)"
                      : "none",
                  filter: hi !== null && hi !== i ? "saturate(.75) brightness(.85)" : "none",
                  transition: reduced ? "none" : `transform .45s ${ease}, filter .3s ease`,
                }}
              >
                <Tile icon={icon} ring={t.tileRing} shadow={t.tileShadow} isDark={isDark} />
                {icon.label && (
                  <span
                    className="pointer-events-none absolute bottom-full left-1/2 mb-2.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium leading-4 backdrop-blur-[8px]"
                    style={{
                      background: t.pillBg,
                      borderColor: t.pillBorder,
                      color: t.ink,
                      opacity: hi === i ? 1 : 0,
                      transform: `translateX(-50%) translateY(${hi === i ? 0 : 6}px)`,
                      transition: reduced ? "none" : `opacity .25s ease, transform .35s ${ease}`,
                    }}
                  >
                    {icon.label}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div
        ref={frontRef}
        className="absolute isolate inset-x-0 bottom-0 h-[180px] overflow-hidden backdrop-blur-[18px] backdrop-saturate-150"
        style={{
          background: t.front,
          clipPath: frontD ? `path('${frontD}')` : undefined,
          transform: lift ? "translateY(6px)" : "none",
          transition: reduced ? "none" : `transform .6s ${ease}`,
        }}
      >
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id={`edge-${gid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={t.frontEdge[0]} />
              <stop offset=".35" stopColor={t.frontEdge[1]} />
              <stop offset="1" stopColor={t.frontEdge[2]} />
            </linearGradient>
          </defs>
          <path d={frontD} fill="none" stroke={`url(#edge-${gid})`} strokeWidth="2" />
        </svg>

        <SpotlightLayer borderGlow={0} intensity={0.22} proximity={60} />

        <h3 className="m-0 px-[18px] pt-[34px] text-xl font-medium leading-[26px]">{title}</h3>

        <div className="mx-[18px] mt-3.5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="h-6 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs leading-5 backdrop-blur-[7px]"
              style={{
                background: t.chipBg,
                borderColor: hi !== null && icons[hi]?.label === tag ? t.focus : t.chipBorder,
                color: hi !== null && icons[hi]?.label === tag ? t.ink : t.chipInk,
                transition: "border-color .25s ease, color .25s ease",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {showPill && (
          <span
            className="absolute bottom-3.5 right-3.5 flex h-[34px] items-center gap-1.5 rounded-full border px-1.5"
            style={{ background: t.pillBg, borderColor: t.pillBorder }}
            aria-hidden="true"
          >
            {icons.map((icon, i) => {
              const pillSrc = isDark ? icon.srcDark ?? icon.src : icon.src
              return (
                <span key={i} className="block h-[22px] w-[22px] overflow-hidden rounded-[7px]">
                  <span
                    className="grid h-full w-full place-items-center p-0.5 [&_svg]:h-[60%] [&_svg]:w-[60%]"
                    style={{ background: icon.background }}
                  >
                    {pillSrc ? (
                      <img
                        src={pillSrc}
                        alt=""
                        style={isDark && icon.invertOnDark && !icon.srcDark ? DARK_FLIP : undefined}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      icon.node
                    )}
                  </span>
                </span>
              )
            })}
          </span>
        )}
      </div>
    </div>
  )
}

export default IconFolder
