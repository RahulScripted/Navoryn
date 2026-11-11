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
