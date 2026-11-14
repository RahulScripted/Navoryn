function parseHex(value: string | undefined): number[] | null {
  const match = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec(String(value ?? "").trim())
  if (!match) return null
  const hex = match[1].length === 3 ? match[1].replace(/./g, (ch) => ch + ch) : match[1]
  return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16))
}

/** Mixes a hex color toward white by `amount` (0-1). Non-hex values are returned unchanged. */
export function tint(color: string, amount: number) {
  const rgb = parseHex(color)
  if (!rgb) return color
  return `#${rgb
    .map((v) => Math.round(v + (255 - v) * amount).toString(16).padStart(2, "0"))
    .join("")}`
}

/** Picks black or white ink for readable text on the given hex background. */
export function inkOn(color: string) {
  const rgb = parseHex(color)
  if (!rgb) return "#ffffff"
  const [r, g, b] = rgb.map((v) => {
    const c = v / 255
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.2 ? "#120f17" : "#ffffff"
}
