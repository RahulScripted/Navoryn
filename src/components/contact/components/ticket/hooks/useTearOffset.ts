import { useLayoutEffect, useRef, useState } from "react"

export function useTearOffset(initial = 110) {
  const headRef = useRef<HTMLDivElement | null>(null)
  const [cut, setCut] = useState(initial)

  useLayoutEffect(() => {
    const head = headRef.current
    if (!head) return undefined
    const measure = () => setCut(head.offsetHeight)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(head)
    return () => observer.disconnect()
  }, [])

  return { headRef, cut }
}
