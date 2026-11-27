import type { PointerEvent } from "react"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { motion, useTransform, type MotionValue } from "motion/react"
import { cn } from "@/lib/utils"
import type { Project } from "../data/projects"
const ENTER = 0.72
const easeOut = (t: number) => 1 - (1 - t) ** 3
const clamp01 = (v: number) => Math.min(1, Math.max(0, v))
function arrived(j: number, v: number, count: number) {
  if (j <= 0) return 1
  const span = Math.max(1, count - 1)
  return easeOut(clamp01((v * span - (j - 1)) / ENTER))
}
interface ProjectCardProps {
  project: Project
  index: number
  count: number
  progress: MotionValue<number>
  onHover: (hovered: boolean) => void
}
export function ProjectCard({ project, index, count, progress, onHover }: ProjectCardProps) {
  const above = (v: number) => {
    let n = 0
    for (let j = index + 1; j < count; j++) n += arrived(j, v, count)
    return Math.min(3, n)
  }
  const y = useTransform(progress, (v) => `${(1 - arrived(index, v, count)) * 108 - above(v) * 5}svh`)
  const rotateX = useTransform(progress, (v) => -(1 - arrived(index, v, count)) * 30 + above(v) * 5)
  const scale = useTransform(progress, (v) => 0.9 + 0.1 * arrived(index, v, count) - above(v) * 0.05)
  const filter = useTransform(progress, (v) => `blur(${((1 - arrived(index, v, count)) ** 2 * 12 + above(v) * 1.1).toFixed(2)}px)`)
  const dim = useTransform(progress, (v) => above(v) * 0.15)
  return (
    <motion.article
      className="col-start-1 row-start-1 h-full w-full origin-[50%_25%] will-change-[transform,filter]"
      style={{ zIndex: index + 1, y, rotateX, scale, filter }}
    >
      <CardSurface project={project} onHover={onHover} dim={dim} className="h-full max-sm:h-full" />
    </motion.article>
  )
}
export function CardSurface({ project, onHover, dim, className }: {
  project: Project
  onHover: (hovered: boolean) => void
  dim?: MotionValue<number>
  className?: string
}) {
  // Opened from a click instead of an <a>, so the browser does not print the address in its status bar.
  const open = () => window.open(project.url, "_blank", "noopener,noreferrer")
  const hover = (hovered: boolean) => (event: PointerEvent) => {
    if (event.pointerType === "mouse") onHover(hovered)
  }
  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={`${project.name} (opens in a new tab)`}
      onClick={open}
      onKeyDown={(event) => {
        if (event.key === "Enter") open()
      }}
      data-cursor-hide
      onPointerEnter={hover(true)}
      onPointerLeave={hover(false)}
      className={cn(
        "relative block h-[78svh] cursor-none outline-none focus-visible:ring-2 focus-visible:ring-ring overflow-hidden rounded-[24px] border border-border bg-muted shadow-[0_18px_40px_-28px_rgba(10,12,20,0.25)] max-sm:h-[70svh]",
        className,
      )}
    >
      <img
        src={project.image}
        alt=""
        draggable={false}
        decoding="async"
        className="absolute inset-0 size-full object-cover object-top"
      />
      <CardCorner project={project} />
      {dim && <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: dim }} />}
    </div>
  )
}
const R = 18
function Fillet() {
  return (
    <svg aria-hidden="true" width={R} height={R} viewBox={`0 0 ${R} ${R}`} className="block">
      <path d={`M${R} 0 V${R} H0 A${R} ${R} 0 0 0 ${R} 0 Z`} fill="var(--background)" />
    </svg>
  )
}
function CardCorner({ project }: { project: Project }) {
  return (
    <div className="absolute right-0 bottom-0 z-10">
      <div className="absolute right-0 bottom-full"><Fillet /></div>
      <div className="absolute right-full bottom-0"><Fillet /></div>
      <div className="flex items-center gap-4 rounded-tl-[20px] bg-background py-3 pr-1 pl-5 text-foreground sm:gap-5 sm:py-4 sm:pl-7">
        <span className="text-base font-semibold tracking-tight sm:text-lg">{project.name}</span>
        <span className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground sm:size-[52px]">
          <ArrowTopRightIcon className="size-5" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}
