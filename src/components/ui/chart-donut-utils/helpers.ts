/** A number with thousands separators. */
export const formatFull = (value: number) => new Intl.NumberFormat("en-US").format(value)

/** The slice's own colour, or the next `--chart-N` slot (1 to 5, then around again). */
export const seriesColor = (item: { color?: string }, index: number) =>
  item.color ?? `var(--chart-${(index % 5) + 1})`

/**
 * Where an arrow key moves the active item. Returns the new index, `null` to clear it,
 * or `undefined` when the key is not one the chart handles.
 */
export function stepIndex(key: string, active: number | null, length: number, wrap = false): number | null | undefined {
  if (length === 0) return undefined
  const last = length - 1
  switch (key) {
    case "ArrowRight":
    case "ArrowDown": {
      if (active === null) return 0
      return active >= last ? (wrap ? 0 : last) : active + 1
    }
    case "ArrowLeft":
    case "ArrowUp": {
      if (active === null) return last
      return active <= 0 ? (wrap ? last : 0) : active - 1
    }
    case "Home":
      return 0
    case "End":
      return last
    case "Escape":
      return null
    default:
      return undefined
  }
}
