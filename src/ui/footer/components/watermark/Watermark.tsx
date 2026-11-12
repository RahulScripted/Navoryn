import { useId, useRef } from "react"
import { useGlyphBox } from "./useGlyphBox"

const WORD = "NAVORYN"
const SIZE = 100
const VISIBLE = 0.88

export function Watermark() {
  const textRef = useRef<SVGTextElement | null>(null)
  const gradient = `watermark-${useId().replace(/:/g, "")}`
  const { left, width, ascent } = useGlyphBox(textRef, WORD, SIZE)
  const height = ascent * VISIBLE

  return (
    <div aria-hidden className="pointer-events-none w-full select-none px-2.5">
      <svg
        className="block h-auto w-full text-foreground"
        viewBox={`${left} ${-ascent} ${width} ${height}`}
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <text
          ref={textRef}
          x="0"
          y="0"
          fontSize={SIZE}
          fill={`url(#${gradient})`}
          className="font-semibold tracking-tighter"
        >
          {WORD}
        </text>
      </svg>
    </div>
  )
}
