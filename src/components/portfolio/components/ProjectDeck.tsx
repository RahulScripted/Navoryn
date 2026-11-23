import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMotionValue, useReducedMotion, useSpring } from "motion/react"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import type { Project } from "../data/projects"
import { CardSurface, ProjectCard } from "./ProjectCard"
import { ViewCursor } from "./ViewCursor"
gsap.registerPlugin(ScrollTrigger)
export function ProjectDeck({ projects }: { projects: Project[] }) {
  const pinRef = useRef<HTMLDivElement>(null)
  const revealRef = useReveal<HTMLDivElement>({ y: 48, scale: 0.97, blur: 10, duration: 1.1 })
  const reduce = useReducedMotion() ?? false
  const [hovered, setHovered] = useState(false)
  const raw = useMotionValue(0)
  const progress = useSpring(raw, { stiffness: 380, damping: 48, mass: 0.35 })
  const count = projects.length
  useLayoutEffect(() => {
    const pin = pinRef.current
    if (!pin || reduce || count < 2) return
    const trigger = ScrollTrigger.create({
      trigger: pin,
      start: "top top",
      end: () => `+=${(count - 1) * window.innerHeight}`,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => raw.set(self.progress),
    })
    return () => trigger.kill()
  }, [count, raw, reduce])
  return (
    <div ref={revealRef}>
      {reduce ? (
        <ul className="flex flex-col gap-6">
          {projects.map((project) => (
            <li key={project.id} aria-label={`${project.name}: ${project.summary}`}>
              <CardSurface project={project} onHover={setHovered} />
            </li>
          ))}
        </ul>
      ) : (
        <div ref={pinRef} className="grid h-[100svh] overflow-hidden pt-24 pb-6 [perspective:1800px] sm:pt-28">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              count={count}
              progress={progress}
              onHover={setHovered}
            />
          ))}
        </div>
      )}
      <ViewCursor active={hovered} />
    </div>
  )
}
