// 7×6 pixel-art heart. "#" = filled pixel.
const PIXELS = [
  ".##.##.",
  "#######",
  "#######",
  ".#####.",
  "..###..",
  "...#...",
]

interface PixelHeartProps {
  className?: string
}

/** Retro, terminal-style heart drawn with square pixels in currentColor. */
export function PixelHeart({ className }: PixelHeartProps) {
  return (
    <svg
      viewBox="0 0 7 6"
      shapeRendering="crispEdges"
      fill="currentColor"
      role="img"
      aria-label="heart"
      className={className}
    >
      {PIXELS.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "#" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null,
        ),
      )}
    </svg>
  )
}
