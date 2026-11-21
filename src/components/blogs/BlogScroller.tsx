import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Badge } from "@/utilities/Badge"
import { CardShell } from "@/utilities/Card"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { BLOGS, type Blog } from "./blogs"
gsap.registerPlugin(ScrollTrigger)
export function BlogScroller() {
  const pinRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const revealRef = useReveal<HTMLDivElement>({ y: 48, scale: 0.97, blur: 10, duration: 1.1 })
  useLayoutEffect(() => {
    const pin = pinRef.current
    const track = trackRef.current
    if (!pin || !track) return
    const mm = gsap.matchMedia()
    mm.add("(max-width: 1279px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = () => Math.max(0, track.scrollWidth - pin.clientWidth)
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "center center",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    })
    return () => mm.revert()
  }, [])
  return (
    <div ref={revealRef}>
      <div ref={pinRef} className="@container w-full overflow-x-auto motion-safe:overflow-x-clip">
        <ul ref={trackRef} className="flex w-max gap-6 py-4 xl:grid xl:w-full xl:grid-cols-4">
          {BLOGS.map((blog) => (
            <BlogItem key={blog.number} blog={blog} />
          ))}
        </ul>
      </div>
    </div>
  )
}
function BlogItem({ blog }: { blog: Blog }) {
  return (
    <li
      className="w-[100cqw] shrink-0 md:w-[calc((100cqw-1.5rem)/2)] xl:w-auto xl:shrink"
    >
      <CardShell
        title={blog.title}
        description={blog.description}
        linkLabel={`Read case study: ${blog.title}`}
        image={blog.image}
        to={blog.to}
        stretched
        background={
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 left-3 z-0 select-none text-[11rem] font-black leading-none tracking-tighter text-foreground/[0.06]"
          >
            {blog.number}
          </span>
        }
        badges={<Badge variant="outline">{blog.category}</Badge>}
      />
    </li>
  )
}
