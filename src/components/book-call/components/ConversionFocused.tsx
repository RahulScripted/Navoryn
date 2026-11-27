
export function ConversionFocused() {
  return (
    <div className="conversion-focused" aria-hidden="true">
      <svg viewBox="24 14 432 332" role="img">
        <title>Conversion-focused page</title>
        <desc>
          A landing page uses a clear headline, supporting text, call to action, and rising results chart.
        </desc>

        <rect x="40" y="30" width="400" height="300" rx="14" className="conversion-focused__card" />
        <path d="M40 44a14 14 0 0 1 14-14h372a14 14 0 0 1 14 14v20H40z" className="conversion-focused__toolbar" />
        <circle cx="60" cy="47" r="4" className="conversion-focused__dot" />
        <circle cx="74" cy="47" r="4" className="conversion-focused__dot" />
        <circle cx="88" cy="47" r="4" className="conversion-focused__dot" />
        <rect x="112" y="40" width="190" height="14" rx="7" className="conversion-focused__address" />

        <rect className="conversion-focused__headline conversion-focused__grow" x="62" y="96" width="180" height="15" rx="7.5" />
        <rect
          className="conversion-focused__headline conversion-focused__grow conversion-focused__delay-one"
          x="62"
          y="119"
          width="128"
          height="15"
          rx="7.5"
        />
        <rect
          className="conversion-focused__muted conversion-focused__grow conversion-focused__delay-two"
          x="62"
          y="150"
          width="168"
          height="7"
          rx="3.5"
        />
        <rect
          className="conversion-focused__muted conversion-focused__grow conversion-focused__delay-three"
          x="62"
          y="164"
          width="124"
          height="7"
          rx="3.5"
        />

        <rect x="262" y="92" width="152" height="136" rx="10" className="conversion-focused__panel" />
        <line x1="276" y1="206" x2="400" y2="206" className="conversion-focused__axis" />
        <rect className="conversion-focused__muted conversion-focused__rise" x="278" y="186" width="16" height="20" rx="3" />
        <rect
          className="conversion-focused__muted conversion-focused__rise conversion-focused__bar-delay-one"
          x="302"
          y="176"
          width="16"
          height="30"
          rx="3"
        />
        <rect
          className="conversion-focused__muted conversion-focused__rise conversion-focused__bar-delay-two"
          x="326"
          y="180"
          width="16"
          height="26"
          rx="3"
        />
        <rect
          className="conversion-focused__blue conversion-focused__rise conversion-focused__bar-delay-three"
          x="350"
          y="164"
          width="16"
          height="42"
          rx="3"
        />
        <rect className="conversion-focused__mint conversion-focused__rise-high" x="374" y="112" width="16" height="94" rx="3" />
        <g className="conversion-focused__badge">
          <circle cx="382" cy="104" r="12" className="conversion-focused__mint" />
          <path d="M382 110v-12m0 0l-5 5m5-5l5 5" className="conversion-focused__badge-arrow" />
        </g>

        <g className="conversion-focused__cta">
          <rect x="62" y="220" width="140" height="42" rx="21" className="conversion-focused__ring" />
          <g className="conversion-focused__press">
            <rect x="62" y="220" width="140" height="42" rx="21" className="conversion-focused__blue" />
            <g className="conversion-focused__done">
              <rect x="62" y="220" width="140" height="42" rx="21" className="conversion-focused__mint" />
              <path d="M110 241l7 7 14-15" className="conversion-focused__check" />
              <text x="138" y="246" className="conversion-focused__button-text">Done</text>
            </g>
            <text x="132" y="246" textAnchor="middle" className="conversion-focused__button-text conversion-focused__label">
              Get started
            </text>
          </g>
        </g>
        <circle cx="132" cy="241" r="26" className="conversion-focused__ripple" />

        <g className="conversion-focused__trust">
          {[70, 156, 242].map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy="294" r="6" className="conversion-focused__mint" />
              <path
                d={`M${cx - 3} 294l2.2 2.2 4-4.4`}
                className="conversion-focused__trust-check"
              />
              <rect x={cx + 12} y="291" width="52" height="6" rx="3" className="conversion-focused__muted" />
            </g>
          ))}
        </g>

        <g className="conversion-focused__cursor">
          <path d="M0 0L0 17l4.6-4.2L8 20l3-1.3-3.3-7.2H14z" className="conversion-focused__cursor-shape" />
        </g>
      </svg>
    </div>
  )
}
