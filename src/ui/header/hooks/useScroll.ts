import { useEffect, useState } from "react"

export function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(() => typeof window !== "undefined" && window.scrollY > threshold)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])
  return scrolled
}
