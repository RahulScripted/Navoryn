import { useLayoutEffect, useState, type RefObject } from "react"

export interface GlyphBox {
  left: number
  width: number
  ascent: number
}

const FALLBACK: GlyphBox = { left: 0, width: 560, ascent: 72 }

export function useGlyphBox(ref: RefObject<SVGTextElement | null>, text: string, size: number) {
  const [box, setBox] = useState<GlyphBox>(FALLBACK)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    let alive = true

    const measure = () => {
      if (!alive) return
      const style = getComputedStyle(el)
      const ctx = document.createElement("canvas").getContext("2d")
      if (!ctx) return
      ctx.font = `${style.fontWeight} ${size}px ${style.fontFamily}`
      ctx.letterSpacing = style.letterSpacing === "normal" ? "0px" : style.letterSpacing
      const m = ctx.measureText(text)
      setBox({
        left: -m.actualBoundingBoxLeft,
        width: m.actualBoundingBoxLeft + m.actualBoundingBoxRight,
        ascent: m.actualBoundingBoxAscent,
      })
    }

    measure()
    document.fonts?.ready.then(measure)
    return () => {
      alive = false
    }
  }, [ref, text, size])

  return box
}
