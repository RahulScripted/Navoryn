import type { CSSProperties } from "react"
import { ART_INSET, ART_SPAN } from "../physics/sim"

interface TicketStyleOptions {
  width: number
  height: number
  stubSize: number
  background: string
  stubBackground: string
  color: string
  borderColor: string
  borderWidth: number
  parallax: number
  imageRadius: number
  vertical: boolean
  fit: number
}

export function ticketStyle({
  width,
  height,
  stubSize,
  background,
  stubBackground,
  color,
  borderColor,
  borderWidth,
  parallax,
  imageRadius,
  vertical,
  fit,
}: TicketStyleOptions): CSSProperties & Record<`--${string}`, string | number> {
  return {
    "--tt-w": `${width}px`,
    "--tt-h": `${height}px`,
    "--tt-stub": `${stubSize}px`,
    "--tt-bg": background,
    "--tt-stub-bg": stubBackground || background,
    "--tt-ink": color,
    "--tt-edge": borderColor || `color-mix(in srgb, ${color} 16%, transparent)`,
    "--tt-edge-w": borderWidth,
    "--tt-parallax": `${parallax}px`,
    "--tt-body-w": `${vertical ? width : width - stubSize}px`,
    "--tt-body-h": `${vertical ? height - stubSize : height}px`,
    "--tt-inset": `${ART_INSET}px`,
    "--tt-span": ART_SPAN,
    "--tt-art-radius": `${imageRadius}px`,
    "--tt-fit": fit,
    height: `${height * fit}px`,
  }
}
