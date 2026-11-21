const SPARKLES = [
  { x: 8, y: 30, size: 7, delay: 0, duration: 2.2 },
  { x: 26, y: 12, size: 9, delay: 0.7, duration: 2.6 },
  { x: 44, y: 62, size: 6, delay: 1.3, duration: 2.4 },
  { x: 60, y: 14, size: 10, delay: 0.3, duration: 2.8 },
  { x: 76, y: 58, size: 7, delay: 1.6, duration: 2.3 },
  { x: 90, y: 24, size: 9, delay: 1, duration: 2.7 },
  { x: 50, y: 36, size: 5, delay: 1.9, duration: 2.5 },
]
export function Glitter() {
  return (
    <div aria-hidden="true" className="glitter pointer-events-none absolute -inset-3 z-10 overflow-hidden rounded-full">
      <span className="glitter__sheen" />
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="glitter__star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
