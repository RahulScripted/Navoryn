import { useEffect, useState } from "react"

export const PRELOADER_DONE_EVENT = "navoryn:preloader-done"

export function markPreloaderDone() {
  document.documentElement.dataset.preloader = "done"
  window.dispatchEvent(new Event(PRELOADER_DONE_EVENT))
}

const isDone = () => typeof document !== "undefined" && document.documentElement.dataset.preloader === "done"

export function usePreloaderDone() {
  const [done, setDone] = useState(isDone)
  useEffect(() => {
    if (done) return
    const onDone = () => setDone(true)
    window.addEventListener(PRELOADER_DONE_EVENT, onDone)
    if (isDone()) window.setTimeout(onDone, 0)
    return () => window.removeEventListener(PRELOADER_DONE_EVENT, onDone)
  }, [done])
  return done
}
