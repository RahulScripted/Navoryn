import "./launch-assistance.css"

export function LaunchAssistance() {
  return (
    <div className="launch-assistance" aria-hidden="true">
      <svg viewBox="0 0 480 360" role="img">
        <title>Launch assistance</title>
        <desc>
          A launch checklist completes final deployment, domain connection and launch checks before the website goes live.
        </desc>

        <rect x="40" y="30" width="400" height="300" rx="14" className="launch-assistance__card" />
        <path d="M40 44a14 14 0 0 1 14-14h372a14 14 0 0 1 14 14v20H40z" className="launch-assistance__toolbar" />
        <circle cx="60" cy="47" r="4" className="launch-assistance__dot" />
        <circle cx="74" cy="47" r="4" className="launch-assistance__dot" />
        <circle cx="88" cy="47" r="4" className="launch-assistance__dot" />
        <rect x="112" y="39" width="190" height="16" rx="8" className="launch-assistance__address" />
        <g className="launch-assistance__lock">
          <rect x="122" y="47" width="8" height="6" rx="1.5" />
          <path d="M123.6 47v-2a2.4 2.4 0 0 1 4.8 0v2" />
        </g>
        <text x="138" y="50.5" className="launch-assistance__domain">yourbusiness.com</text>
        <rect className="launch-assistance__reveal" x="136" y="40" width="108" height="14" fill="#fff" />

        <g className="launch-assistance__row-one">
          <circle cx="76" cy="118" r="10" className="launch-assistance__ring" />
          <circle cx="76" cy="118" r="10" className="launch-assistance__spinner launch-assistance__spinner-one" />
          <g className="launch-assistance__done launch-assistance__done-one">
            <circle cx="76" cy="118" r="10" className="launch-assistance__mint" />
            <path d="M71 118.5l3.6 3.6 6.4-7" className="launch-assistance__check" />
          </g>
          <text x="98" y="116" className="launch-assistance__label">Final deployment</text>
          <text x="98" y="130" className="launch-assistance__sub">Push the finished build live</text>
          <rect x="98" y="138" width="140" height="5" rx="2.5" className="launch-assistance__soft" />
          <rect x="98" y="138" width="140" height="5" rx="2.5" className="launch-assistance__progress launch-assistance__progress-one launch-assistance__blue" />
        </g>

        <g className="launch-assistance__row-two">
          <circle cx="76" cy="174" r="10" className="launch-assistance__ring" />
          <circle cx="76" cy="174" r="10" className="launch-assistance__spinner launch-assistance__spinner-two" />
          <g className="launch-assistance__done launch-assistance__done-two">
            <circle cx="76" cy="174" r="10" className="launch-assistance__mint" />
            <path d="M71 174.5l3.6 3.6 6.4-7" className="launch-assistance__check" />
          </g>
          <text x="98" y="172" className="launch-assistance__label">Domain connection</text>
          <text x="98" y="186" className="launch-assistance__sub">Point DNS and switch on SSL</text>
          <rect x="98" y="194" width="140" height="5" rx="2.5" className="launch-assistance__soft" />
          <rect x="98" y="194" width="140" height="5" rx="2.5" className="launch-assistance__progress launch-assistance__progress-two launch-assistance__blue" />
        </g>

        <g className="launch-assistance__row-three">
          <circle cx="76" cy="230" r="10" className="launch-assistance__ring" />
          <circle cx="76" cy="230" r="10" className="launch-assistance__spinner launch-assistance__spinner-three" />
          <g className="launch-assistance__done launch-assistance__done-three">
            <circle cx="76" cy="230" r="10" className="launch-assistance__mint" />
            <path d="M71 230.5l3.6 3.6 6.4-7" className="launch-assistance__check" />
          </g>
          <text x="98" y="228" className="launch-assistance__label">Launch checks</text>
          <text x="98" y="242" className="launch-assistance__sub">Mobile, speed, forms and SEO</text>
          <rect x="98" y="250" width="140" height="5" rx="2.5" className="launch-assistance__soft" />
          <rect x="98" y="250" width="140" height="5" rx="2.5" className="launch-assistance__progress launch-assistance__progress-three launch-assistance__blue" />
        </g>

        <rect x="262" y="88" width="152" height="176" rx="10" className="launch-assistance__panel" />
        <g className="launch-assistance__preview-off">
          <rect x="274" y="100" width="128" height="10" rx="5" className="launch-assistance__dot" />
          <rect x="274" y="118" width="128" height="62" rx="6" className="launch-assistance__dot" />
          <rect x="274" y="190" width="100" height="6" rx="3" className="launch-assistance__dot" />
          <rect x="274" y="202" width="70" height="6" rx="3" className="launch-assistance__dot" />
          <rect x="274" y="218" width="54" height="16" rx="8" className="launch-assistance__dot" />
        </g>
        <g className="launch-assistance__preview-live">
          <rect x="274" y="100" width="128" height="10" rx="5" className="launch-assistance__ink" />
          <rect x="274" y="118" width="128" height="62" rx="6" className="launch-assistance__blue" />
          <circle cx="300" cy="149" r="14" fill="#fff" opacity=".22" />
          <rect x="322" y="140" width="62" height="8" rx="4" fill="#fff" />
          <rect x="322" y="154" width="42" height="6" rx="3" fill="#fff" opacity=".6" />
          <rect x="274" y="190" width="100" height="6" rx="3" fill="#7f8bb5" />
          <rect x="274" y="202" width="70" height="6" rx="3" fill="#7f8bb5" />
          <rect x="274" y="218" width="54" height="16" rx="8" className="launch-assistance__mint" />
        </g>

        <g className="launch-assistance__offline">
          <rect x="298" y="276" width="80" height="26" rx="13" className="launch-assistance__offline-pill" />
          <circle cx="314" cy="289" r="4" className="launch-assistance__offline-dot" />
          <text x="326" y="293" className="launch-assistance__offline-text">Offline</text>
        </g>
        <g className="launch-assistance__live">
          <circle cx="314" cy="289" r="4" className="launch-assistance__pulse" />
          <rect x="298" y="276" width="80" height="26" rx="13" className="launch-assistance__mint" />
          <circle cx="314" cy="289" r="4" fill="#fff" />
          <text x="326" y="293" className="launch-assistance__live-text">Live</text>
        </g>
      </svg>
    </div>
  )
}
