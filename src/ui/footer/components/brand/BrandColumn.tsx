import { ChevronRightIcon, Cross2Icon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"
import { goToSection } from "@/lib/sections"
import { RollText } from "@/utilities/RollText"
import { useIsDark } from "@/utilities/useIsDark"
import { useSubscribe } from "@/ui/footer/send-email/useSubscribe"

export function BrandColumn() {
  const navigate = useNavigate()
  const isDark = useIsDark()
  const logo = isDark ? "/favicon-light.svg" : "/favicon-dark.svg"
  const { email, error, feedback, onChange, clear, submit } = useSubscribe()

  return (
    <div className="flex w-full flex-col gap-6">
      <a
        href="/"
        onClick={(e) => goToSection(e, "/", navigate)}
        className="cursor-target flex items-center gap-2 text-lg font-bold tracking-tight"
      >
        <img src={logo} alt="" width={28} height={28} className="h-7 w-auto" />
        NAVORYN
      </a>
      <p className="text-sm leading-6 text-muted-foreground">
        We design and build fast websites, scalable web apps, and seamless mobile
        experiences. Get project updates, once a month. No spam.
      </p>
      <form
        className="flex items-end gap-3"
        noValidate
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
      >
        <div className="subscribe-field">
          <input
            id="footer-email"
            type="text"
            inputMode="email"
            value={email}
            onChange={(e) => onChange(e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
            aria-invalid={error ? true : undefined}
            aria-describedby="footer-email-status"
            className="subscribe-field__input subscribe-field__input--has-clear"
          />
          <label htmlFor="footer-email" className="subscribe-field__label">
            Email address
          </label>
          {email && (
            <button
              type="button"
              aria-label="Clear email"
              onClick={clear}
              className="subscribe-field__clear"
            >
              <Cross2Icon className="size-3.5" />
            </button>
          )}
          <p
            id="footer-email-status"
            aria-live="polite"
            className={
              error
                ? "subscribe-field__status subscribe-field__status--error"
                : "subscribe-field__status subscribe-field__status--ok"
            }
          >
            {error ?? feedback ?? ""}
          </p>
        </div>
        <button
          type="submit"
          aria-label="Subscribe to the newsletter"
          className="group/roll cursor-target inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95"
        >
          <RollText>
            <ChevronRightIcon className="size-4" />
          </RollText>
        </button>
      </form>
    </div>
  )
}
