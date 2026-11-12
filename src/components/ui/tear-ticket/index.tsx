
import { useEffect, useRef, useState } from "react"
import { NavorynMark } from "./components/brand/NavorynMark"
import { TearTicket } from "./components/ticket/TearTicket"

const REPRINT_MS = 2400

export default function NavorynTicket() {
  const [torn, setTorn] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const handleTear = () => {
    setTorn(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setTorn(false), REPRINT_MS)
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <TearTicket
        torn={torn}
        onTear={handleTear}
        rotate={0}
        tiltMax={7}
        background="var(--foreground)"
        color="var(--background)"
        ariaLabel="Tear off your Navoryn invitation"
        art={
          <div className="grid h-full w-full place-items-center bg-[color-mix(in_oklch,var(--background)_9%,transparent)]">
            <NavorynMark className="size-20 text-[var(--background)]" />
          </div>
        }
        stub={
          <div className="flex h-full flex-col justify-between p-5">
            <div>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] opacity-60">
                Exclusive Invitation
              </p>

              <h4 className="mt-2 text-lg font-extrabold leading-tight tracking-tight">
                Let's Build Together
              </h4>

              <p className="mt-1 text-xs opacity-70">
                Your next big idea starts here.
              </p>
            </div>

            <span className="font-mono text-[0.65rem] tracking-widest opacity-50">
              PASS NO. 0001
            </span>
          </div>
        }
      >
        <div className="flex h-full flex-col justify-end p-5">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.24em] opacity-60">
            Welcome to Navoryn
          </p>

          <h4 className="mt-1 text-xl font-extrabold leading-tight tracking-tight">
            Ideas Into Impact.
          </h4>

          <p className="mt-1 text-xs opacity-70">
            Strategy | Design | Technology
          </p>

        </div>
      </TearTicket>
    </div>
  )
}
