import { useEffect, useState } from "react"
import PreloaderShell from "./components/layout/PreloaderShell"

const WORD_COUNT  = 3
const INTERVAL_MS = 4000          // ms each word holds
const EXIT_MS     = 600           // fade-out duration
const TOTAL_MS    = WORD_COUNT * INTERVAL_MS  // 12 000 ms

const SEEN_KEY = "navoryn-preloader-seen"

export default function PreLoader() {
  // Only run once per browser session (not on back-navigation or remounts)
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
