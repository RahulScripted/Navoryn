import * as React from "react"
import gsap from "gsap"

export type StickerWord = {
  word: string
  sticker: string
  alt?: string
  spin?: boolean
  tilt?: number
}

export type StickerCta = { label: string; href?: string; onClick?: () => void }

export type StickerSwapHeadlineProps = {
  lead?: string
  words: StickerWord[]
  description?: React.ReactNode
  primaryCta?: StickerCta
  secondaryCta?: StickerCta
  interval?: number
  paper?: string
  ink?: string
  accent?: string
  fontFamily?: string
  height?: string
  className?: string
  onChange?: (index: number) => void
}

export function stickerSlot(word: string): number {
  return word.toUpperCase().indexOf("O")
}

export function wrap(i: number, n: number): number {
  return n > 0 ? ((i % n) + n) % n : 0
}

export function tiltFor(i: number, tilt?: number): number {
  return typeof tilt === "number" ? tilt : [-8, 6, -4, 9, -6][i % 5]
}

export function splitAt(word: string): [string, string] {
  const s = stickerSlot(word)
  return s < 0 ? [word, ""] : [word.slice(0, s), word.slice(s + 1)]
}

function Cta({ cta, kind }: { cta: StickerCta; kind: "primary" | "ghost" }) {
  const cls = "ssh-btn ssh-" + kind
  return cta.href ? (
    <a className={cls} href={cta.href} onClick={cta.onClick}>
      {cta.label}
    </a>
  ) : (
    <button type="button" className={cls} onClick={cta.onClick}>
      {cta.label}
    </button>
  )
}

function Word({ w, i }: { w: StickerWord; i: number }) {
  const [before, after] = splitAt(w.word)
  const tilt = tiltFor(i, w.tilt)
  return (
    <>
      <span className="ssh-part ssh-before">{before}</span>
      <span className="ssh-slot">
        <span
          className={"ssh-stk" + (w.spin ? " ssh-spin" : "")}
          style={{ transform: "rotate(" + tilt + "deg)" }}
          data-tilt={tilt}
        >
          <img src={w.sticker} alt={w.alt ?? ""} draggable={false} width={320} height={320} />
        </span>
      </span>
      {after ? <span className="ssh-part ssh-after">{after}</span> : null}
    </>
  )
}

export default function StickerSwapHeadline({
  lead = "Stay",
  words,
  description,
  primaryCta,
  secondaryCta,
  interval = 6000,
  paper,
  ink,
  accent,
  fontFamily,
  height = "100svh",
  className,
  onChange,
}: StickerSwapHeadlineProps) {
  const root = React.useRef(null as HTMLElement | null)
  const reel = React.useRef(null as HTMLSpanElement | null)
  const busy = React.useRef(false)
  const first = React.useRef(true)
  const visible = React.useRef(true)
  const reduced = React.useRef(false)
  const [state, setState] = React.useState({ index: 0, prev: -1 })

  const n = words.length
  const index = wrap(state.index, n)
  const current = words[index]

  const advance = React.useCallback(() => {
    const r = reel.current
    if (n < 2 || !r) return
    if (busy.current) return
    busy.current = true
    const go = () =>
      setState((s) => ({ index: wrap(s.index + 1, n), prev: wrap(s.index, n) }))
    const stk = r.querySelector(".ssh-word:not(.is-out) .ssh-stk")
    if (reduced.current || !stk) { go(); return }
    gsap.to(stk, { scale: 0, duration: 0.14, ease: "power2.in", onComplete: go })
  }, [n])

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const on = () => (reduced.current = mq.matches)
    on()
    mq.addEventListener("change", on)
    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting))
    if (root.current) io.observe(root.current)
    return () => {
      mq.removeEventListener("change", on)
      io.disconnect()
    }
  }, [])

  React.useLayoutEffect(() => {
    const r = reel.current
    if (!r) return
    const ctx = gsap.context(() => {
      const word = r.querySelector(".ssh-word:not(.is-out)")
      const out = r.querySelector(".ssh-word.is-out")
      if (!word) return
      const stk = word.querySelector(".ssh-stk") as HTMLElement | null
      const tilt = stk ? Number(stk.dataset.tilt) || 0 : 0
      const before = word.querySelector(".ssh-before")
      const after = word.querySelector(".ssh-after")
      const finish = () => {
        busy.current = false
        if (out) setState((s) => ({ index: s.index, prev: -1 }))
      }

      if (reduced.current) {
        if (out) gsap.set(out, { opacity: 0 })
        gsap.fromTo(word, { opacity: 0 }, { opacity: 1, duration: 0.3, onComplete: finish })
        return
      }

      const tl = gsap.timeline({ onComplete: finish })
      if (first.current) {
        tl.fromTo(
          root.current!.querySelectorAll(".ssh-lead, .ssh-word"),
          { yPercent: 18, opacity: 0.18 },
          { yPercent: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.06 },
          0,
        )
        tl.from(
          root.current!.querySelectorAll(".ssh-fade"),
          { y: 12, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.06 },
          0.3,
        )
      } else {
        if (out) tl.to(out, { yPercent: -100, opacity: 0, duration: 0.42, ease: "power3.out" }, 0)
        tl.fromTo(word, { yPercent: 100 }, { yPercent: 0, duration: 0.42, ease: "power3.out" }, 0)
        tl.fromTo(word, { opacity: 0.2 }, { opacity: 1, duration: 0.55, ease: "power1.out" }, 0.05)
      }

      const at = first.current ? 0.55 : 0.48
      if (before) tl.fromTo(before, { x: "0.39em" }, { x: 0, duration: 0.22, ease: "power2.out" }, at)
      if (after) tl.fromTo(after, { x: "-0.39em" }, { x: 0, duration: 0.22, ease: "power2.out" }, at)
      if (stk)
        tl.fromTo(
          stk,
          { scale: 0, rotate: tilt - 24 },
          { scale: 1, rotate: tilt, duration: 0.42, ease: "back.out(2.2)" },
          at + 0.1,
        )
      first.current = false
    }, r)
    onChange?.(index)
    return () => ctx.revert()
  }, [state.index])

  React.useEffect(() => {
    if (interval <= 0 || n < 2) return
    const id = window.setInterval(() => {
      if (!busy.current) advance()
    }, interval)
    return () => window.clearInterval(id)
  }, [advance, interval, n])

  if (!current) return null
  const prev = state.prev >= 0 ? words[wrap(state.prev, n)] : null

  const resolvedPaper = paper ?? "var(--background)"
  const resolvedInk = ink ?? "var(--foreground)"
  const resolvedAccent = accent ?? "var(--primary)"

  return (
    <section
      ref={root}
      className={"ssh-root" + (className ? " " + className : "")}
      style={
        {
          height,
          "--ssh-paper": resolvedPaper,
          "--ssh-ink": resolvedInk,
          "--ssh-accent": resolvedAccent,
          "--ssh-font": fontFamily || "'SSH Anton',Impact,'Arial Narrow',sans-serif",
        } as React.CSSProperties
      }
    >
      <div className="ssh-inner">
        <h1 className="ssh-h">
          <span className="ssh-sr" aria-live="polite">
            {lead} {current.word}
          </span>
          <span className="ssh-line ssh-lead" aria-hidden="true">
            {lead}
          </span>
          <span ref={reel} className="ssh-reel" aria-hidden="true">
            {prev ? (
              <span className="ssh-word is-out" key={"out-" + state.prev}>
                <Word w={prev} i={wrap(state.prev, n)} />
              </span>
            ) : null}
            <span
              className="ssh-word"
              key={"in-" + index}
              tabIndex={n > 1 ? 0 : -1}
              title={current.alt}
              onClick={advance}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  advance()
                }
              }}
            >
              <Word w={current} i={index} />
            </span>
          </span>
        </h1>
        {description ? <p className="ssh-desc ssh-fade">{description}</p> : null}
        {primaryCta || secondaryCta ? (
          <div className="ssh-ctas ssh-fade">
            {primaryCta ? <Cta cta={primaryCta} kind="primary" /> : null}
            {secondaryCta ? <Cta cta={secondaryCta} kind="ghost" /> : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
