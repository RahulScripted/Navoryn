import { useEffect, useState } from "react"

export function useIsDark(): boolean {
  const [isDark, setIsDark] = useState(getIsDark)

  useEffect(() => {
    const update = () => setIsDark(getIsDark())

    const obs = new MutationObserver(update)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] })

    return () => obs.disconnect()
  }, [])

  return isDark
}

function getIsDark(): boolean {
  if (typeof document === "undefined") return false
  return (
    document.documentElement.classList.contains("dark") ||
    document.body.classList.contains("dark")
  )
}
