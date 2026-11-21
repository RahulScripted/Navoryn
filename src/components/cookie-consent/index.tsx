import { useState } from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Alert, AlertContent, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/ui/header/components/button"
import { getCookieConsent, setCookieConsent, type CookieConsent } from "@/lib/cookie-consent"
import { usePreloaderDone } from "@/ui/preloader/hooks/usePreloaderDone"
export default function CookieConsentNotice() {
  const [closed, setClosed] = useState(false)
  const [decided, setDecided] = useState(() => getCookieConsent() !== null)
  const preloaderDone = usePreloaderDone()
  if (decided || closed || !preloaderDone) return null
  const choose = (value: CookieConsent) => {
    setCookieConsent(value)
    setDecided(true)
  }
  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-4 z-[110] sm:right-auto sm:left-6 sm:bottom-6">
      <Alert
        layout="complex"
        isNotification
        size="lg"
        action={
          <Button
            variant="ghost"
            className="cursor-target group -my-1.5 -me-2 size-8 p-0 hover:bg-transparent"
            aria-label="Close notification"
            onClick={() => setClosed(true)}
          >
            <Cross2Icon className="size-4 opacity-60 transition-opacity group-hover:opacity-100" />
          </Button>
        }
        aria-live="polite"
        className="pointer-events-auto w-full rounded-2xl border-border bg-card text-card-foreground duration-500 animate-in fade-in slide-in-from-bottom-4 sm:w-[400px]"
      >
        <AlertContent>
          <AlertTitle className="text-base font-bold tracking-tight">We Value Your Privacy 🍪</AlertTitle>
          <AlertDescription>
            We use cookies to improve your experience, and show personalized content.
          </AlertDescription>
          <div className="flex flex-wrap gap-2 pt-3">
            <Button size="sm" className="cursor-target" onClick={() => choose("all")}>
              Accept
            </Button>
            <Button size="sm" variant="outline" className="cursor-target" onClick={() => choose("declined")}>
              Decline
            </Button>
          </div>
        </AlertContent>
      </Alert>
    </div>
  )
}
