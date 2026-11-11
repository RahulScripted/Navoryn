import { Link } from "react-router-dom"

const WORDS = [
  { text: "Back", kind: "" },
  { text: "to", kind: "lighter" },
  { text: "Home", kind: "bold" },
]

const LETTERS = WORDS.flatMap((word, w) => {
  const letters = [...word.text].map((ch) => ({ ch, kind: word.kind }))
  return w < WORDS.length - 1 ? [...letters, { ch: " ", kind: "" }] : letters
}).map((l, i) => ({ ...l, i: l.ch === " " ? 0 : i }))

const CORNER_PATH =
  "M11.4381 1L0 1V0L11.4381 1.78814e-07C12.6316 -2.98023e-07 13.7762 0.474106 14.6201 1.31802L27.1577 13.8555C28.0016 14.6995 28.4757 15.8441 28.4757 17.0375V28.4757H27.4757V17.0375C27.4757 16.1093 27.1069 15.219 26.4505 14.5627L13.913 2.02513C13.2566 1.36875 12.3664 1 11.4381 1Z"

const CORNERS = ["top left rot-270", "top right", "bottom left rot-180", "bottom right rot-90"]

export function HomeButton() {
  return (
    <Link to="/" className="nf-button" aria-label="Back to Home">
      <span className="txt" aria-hidden="true">
        {LETTERS.map((l, idx) => (
          <span
            key={idx}
            className={`letter ${l.kind}`}
            style={{ "--i": l.i } as React.CSSProperties}
          >
            {l.ch === " " ? "\u00a0" : l.ch}
          </span>
        ))}
      </span>

      {CORNERS.map((pos) => (
        <svg key={pos} className={`corner ${pos}`} viewBox="0 0 29 29" aria-hidden="true">
          <path fillRule="evenodd" d={CORNER_PATH} />
        </svg>
      ))}
    </Link>
  )
}
