import { useEffect, useState } from "react"
import PreloaderShell from "./components/layout/PreloaderShell"

const WORD_COUNT  = 3
const INTERVAL_MS = 4000
const EXIT_MS     = 600
const TOTAL_MS    = WORD_COUNT * INTERVAL_MS

const SEEN_KEY = "navoryn-preloader-seen"

export default function PreLoader() {
  const alreadySeen =
    typeof sessionStorage !== "undefined" && sessionStorage.getItem(SEEN_KEY) === "1"

  const [visible, setVisible] = useState(!alreadySeen)
  const [mounted, setMounted] = useState(!alreadySeen)

  useEffect(() => {
    if (alreadySeen) return
    sessionStorage.setItem(SEEN_KEY, "1")

    const fadeTimer = setTimeout(() => setVisible(false), TOTAL_MS)
    const unmountTimer = setTimeout(() => setMounted(false), TOTAL_MS + EXIT_MS)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(unmountTimer)
    }
  }, [alreadySeen])

  if (!mounted) return null
  return <PreloaderShell visible={visible} durationMs={TOTAL_MS} />
}
