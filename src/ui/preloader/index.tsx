import { useEffect, useState } from "react"
import PreloaderShell from "./components/layout/PreloaderShell"

const WORD_COUNT  = 3
const INTERVAL_MS = 4000          // ms each word holds
const EXIT_MS     = 600           // fade-out duration
const TOTAL_MS    = WORD_COUNT * INTERVAL_MS  // 12 000 ms

export default function PreLoader() {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const fadeTimer    = setTimeout(() => setVisible(false), TOTAL_MS)
    const unmountTimer = setTimeout(() => setMounted(false), TOTAL_MS + EXIT_MS)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(unmountTimer)
    }
  }, [])

  if (!mounted) return null
  return <PreloaderShell visible={visible} durationMs={TOTAL_MS} />
}
