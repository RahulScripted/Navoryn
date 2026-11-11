import { useEffect, useRef, useState } from "react"
import { onVisible } from "../trigger/scroll"

export function useRevealReady<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let stopVisible = () => {}
    const startWhenVisible = () => {
      stopVisible = onVisible(el, () => setReady(true), 0)
    }

    const host = el.closest<HTMLElement>("[data-reveal]")
    if (!host || host.dataset.reveal === "done") {
      startWhenVisible()
      return () => stopVisible()
    }

    const observer = new MutationObserver(() => {
      if (host.dataset.reveal !== "done") return
      observer.disconnect()
      startWhenVisible()
    })
    observer.observe(host, { attributes: true, attributeFilter: ["data-reveal"] })

    return () => {
      observer.disconnect()
      stopVisible()
    }
  }, [])

  return [ref, ready] as const
}
