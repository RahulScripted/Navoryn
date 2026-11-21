import { useEffect, type RefObject } from "react"
export function useVideoInView(video: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const el = video.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {})
        else el.pause()
      },
      { rootMargin: "200px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [video])
}
