import { useCallback, useState } from "react"

export function useSignal() {
  const [pulse, setPulse] = useState(0)
  const send = useCallback(() => setPulse((value) => value + 1), [])
  return { pulse, send }
}
