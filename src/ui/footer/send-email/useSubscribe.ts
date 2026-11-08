import { useRef, useState } from "react"
import { buildSubscriptionMailto, isValidEmail } from "./buildSubscriptionMailto"

export function useSubscribe() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const submittingRef = useRef(false)

  const onChange = (value: string) => {
    setEmail(value)
    if (error) setError(null)
    if (feedback) setFeedback(null)
  }

  const clear = () => {
    setEmail("")
    setError(null)
    setFeedback(null)
  }

  const submit = () => {
    if (submittingRef.current) return

    const value = email.trim()
    if (!isValidEmail(value)) {
      setFeedback(null)
      setError("Please enter a valid email address.")
      return
    }

    submittingRef.current = true
    setError(null)

    window.location.href = buildSubscriptionMailto(value)
    setFeedback("Your email app is opening with your subscription request.")

    window.setTimeout(() => {
      submittingRef.current = false
    }, 1200)
  }

  return { email, error, feedback, onChange, clear, submit }
}
