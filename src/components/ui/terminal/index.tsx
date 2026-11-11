import { AnimatedSpan, Terminal, TypingAnimation } from "./components/terminal"
import { PixelHeart } from "./components/PixelHeart"

const STEPS = [
  "Discover goals",
  "Understand your vision",
  "Design experiences",
  "Build with precision",
  "Optimize performance & speed",
  "Test every detail",
  "Launch & ongoing support",
]

const LINE = "text-[0.7rem] sm:text-xs"

export default function TerminalWindow() {
  return (
    <Terminal className="h-auto max-h-none max-w-none text-foreground">
      <TypingAnimation className={LINE}>&gt; navoryn start</TypingAnimation>

      {STEPS.map((step, i) => (
        <AnimatedSpan
          key={step}
          className={`${LINE} flex items-baseline justify-between gap-3 ${i === 0 ? "mt-2" : ""}`}
        >
          <span className="min-w-0 truncate">{step}</span>
          <span className="shrink-0 text-muted-foreground">✔ Completed</span>
        </AnimatedSpan>
      ))}

      <AnimatedSpan className="my-1">
        <span aria-hidden="true" className="block border-t border-dashed border-border" />
      </AnimatedSpan>

      <TypingAnimation className={`${LINE} font-semibold`}>All systems go!</TypingAnimation>

      <AnimatedSpan className={`${LINE} whitespace-normal`}>
        Your project is ready to make an impact.
      </AnimatedSpan>

      <AnimatedSpan className={`${LINE} block whitespace-normal text-muted-foreground`}>
        Thoughtfully conceived. Meticulously designed. Engineered with precision. Delivered with excellence.{" "}
        <PixelHeart className="inline-block size-3 align-[-1px] text-destructive" />
      </AnimatedSpan>

      <AnimatedSpan className={`${LINE} mt-1.5 justify-items-end text-muted-foreground`}>
        — Team NAVORYN
      </AnimatedSpan>
    </Terminal>
  )
}
