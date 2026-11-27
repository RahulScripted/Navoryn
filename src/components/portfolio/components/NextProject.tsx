import { Link } from "react-router-dom"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"

/** Closing line shown once the project stack has played through. It links to the portfolio page. */
export function NextProject() {
  const ref = useReveal<HTMLDivElement>({ y: 32, blur: 8 })
  return (
    <div ref={ref} className="pt-24 pb-8 text-left sm:pt-32">
      <Link
        to="/portfolio"
        className="cursor-target block text-6xl font-bold tracking-tight transition-opacity duration-300 hover:opacity-60 sm:text-7xl lg:text-8xl xl:text-9xl"
      >
        Yours could be next.
      </Link>
    </div>
  )
}
