// The "Launch plan" card from React Bits MagicBento (https://reactbits.dev), see launch-plan.css.
import { useEffect, useRef, useState, type CSSProperties } from "react"

const ARROW = (
  <svg width="16" height="18" viewBox="0 0 16 18" aria-hidden="true">
    <path
      d="M2.2 1.6 13.4 9.9c.5.4.3 1.2-.4 1.3l-4.6.6-2.2 4.2c-.3.6-1.2.5-1.4-.1L1.2 2.4c-.2-.6.5-1.1 1-.8Z"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
)

const css = (values: Record<string, string | number>) => values as CSSProperties

const LINES = [
  { w: "92%" },
  { w: "78%" },
  { w: "86%" },
  { w: "44%" },
  { w: "88%", gap: true },
  { w: "70%", selected: true },
  { w: "82%" },
]

/** A document with a highlighted line and two named cursors. The cursors wander on their own once the tile is in view. */
export function LaunchPlan() {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setSeen(true)
        observer.disconnect()
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} aria-hidden="true" data-in={seen ? "" : undefined} className="launch-plan">
      <span className="launch-plan__title">Launch plan</span>
      <div className="launch-plan__lines">
        {LINES.map((line, index) => (
          <span
            key={index}
            className={`launch-plan__line${line.gap ? " launch-plan__line--gap" : ""}`}
            style={css({ "--w": line.w })}
          >
            {line.selected && (
              <span className="launch-plan__selection" style={css({ "--from": "18%", "--span": "58%" })}>
                <span className="launch-plan__caret" />
              </span>
            )}
          </span>
        ))}
      </div>
      <span
        className="launch-plan__cursor launch-plan__cursor--primary"
        style={css({ "--x": "58%", "--y": "52%", "--i": 0, "--path": "launch-plan-path-a" })}
      >
        {ARROW}
        <span className="launch-plan__cursor-name">Maya</span>
      </span>
      <span
        className="launch-plan__cursor launch-plan__cursor--secondary"
        style={css({ "--x": "30%", "--y": "24%", "--i": 1, "--path": "launch-plan-path-b" })}
      >
        {ARROW}
        <span className="launch-plan__cursor-name">Leo</span>
      </span>
    </div>
  )
}
