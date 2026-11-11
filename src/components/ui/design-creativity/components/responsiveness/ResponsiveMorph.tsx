import {
  CONTENT,
  DEVICE,
  STATE_GROUPS,
  type MorphRect,
  type StaticShape,
  type Triple,
} from "../../data/responsiveMorph"

// 9s loop: hold desktop → move → hold tablet → move → hold mobile → move back.
const DUR = "9s"
const KEY_TIMES = "0;0.25;0.33;0.58;0.66;0.92;1"
const KEY_SPLINES = "0 0 1 1;0.65 0 0.35 1;0 0 1 1;0.65 0 0.35 1;0 0 1 1;0.65 0 0.35 1"

/** [a, b, c] → "a;a;b;b;c;c;a" to match KEY_TIMES. */
const timeline = ([a, b, c]: Triple) => [a, a, b, b, c, c, a].join(";")

function Anim({ attr, values, eased = true }: { attr: string; values: Triple; eased?: boolean }) {
  return (
    <animate
      attributeName={attr}
      values={timeline(values)}
      keyTimes={KEY_TIMES}
      dur={DUR}
      repeatCount="indefinite"
      {...(eased ? { calcMode: "spline", keySplines: KEY_SPLINES } : {})}
    />
  )
}

function Morph({ rect }: { rect: MorphRect }) {
  const animatedRx = Array.isArray(rect.rx)
  return (
    <rect
      x={rect.x[0]}
      y={rect.y[0]}
      width={rect.w[0]}
      height={rect.h[0]}
      rx={animatedRx ? (rect.rx as Triple)[0] : (rect.rx as number)}
      className={rect.className}
    >
      <Anim attr="x" values={rect.x} />
      <Anim attr="y" values={rect.y} />
      <Anim attr="width" values={rect.w} />
      <Anim attr="height" values={rect.h} />
      {animatedRx && <Anim attr="rx" values={rect.rx as Triple} eased={false} />}
    </rect>
  )
}

function Shape({ shape }: { shape: StaticShape }) {
  return shape.kind === "circle" ? (
    <circle cx={shape.x} cy={shape.y} r={shape.r} className={shape.className} />
  ) : (
    <rect
      x={shape.x}
      y={shape.y}
      width={shape.w}
      height={shape.h}
      rx={shape.rx}
      className={shape.className}
    />
  )
}

/** A page layout reflowing from desktop to tablet to mobile, in theme colors. */
export function ResponsiveMorph() {
  return (
    <div className="flex h-full items-center justify-center">
      <svg
        viewBox="110 10 580 400"
        role="img"
        aria-label="A layout adapting from desktop to tablet to mobile"
        className="size-full"
      >
        {DEVICE.map((rect, i) => (
          <Morph key={`d${i}`} rect={rect} />
        ))}

        {STATE_GROUPS.slice(0, 2).map((group, i) => (
          <g key={`s${i}`}>
            <Anim attr="opacity" values={group.opacity} eased={false} />
            {group.shapes.map((shape, j) => (
              <Shape key={j} shape={shape} />
            ))}
          </g>
        ))}

        {CONTENT.slice(0, 2).map((rect, i) => (
          <Morph key={`n${i}`} rect={rect} />
        ))}

        {STATE_GROUPS.slice(2).map((group, i) => (
          <g key={`m${i}`}>
            <Anim attr="opacity" values={group.opacity} eased={false} />
            {group.shapes.map((shape, j) => (
              <Shape key={j} shape={shape} />
            ))}
          </g>
        ))}

        {CONTENT.slice(2).map((rect, i) => (
          <Morph key={`c${i}`} rect={rect} />
        ))}
      </svg>
    </div>
  )
}
