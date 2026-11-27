import "./post-launch-maintenance.css"

export function PostLaunchMaintenance() {
  return (
    <div className="post-launch-maintenance" aria-hidden="true">
      <svg viewBox="0 0 480 360" role="img">
        <title>Post-launch maintenance</title>
        <desc>
          A live website is monitored, an issue is repaired, and updates complete to keep everything current.
        </desc>

        <rect x="40" y="30" width="400" height="300" rx="14" className="post-launch-maintenance__card" />
        <path d="M40 44a14 14 0 0 1 14-14h372a14 14 0 0 1 14 14v20H40z" className="post-launch-maintenance__toolbar" />
        <circle cx="60" cy="47" r="4" className="post-launch-maintenance__dot" />
        <circle cx="74" cy="47" r="4" className="post-launch-maintenance__dot" />
        <circle cx="88" cy="47" r="4" className="post-launch-maintenance__dot" />
        <rect x="112" y="39" width="190" height="16" rx="8" className="post-launch-maintenance__address" />
        <rect x="122" y="47" width="8" height="6" rx="1.5" className="post-launch-maintenance__mint" />
        <path d="M123.6 47v-2a2.4 2.4 0 0 1 4.8 0v2" className="post-launch-maintenance__lock" />
        <text x="138" y="50.5" className="post-launch-maintenance__domain">yourbusiness.com</text>

        <rect x="56" y="88" width="156" height="176" rx="10" className="post-launch-maintenance__panel" />
        <rect x="68" y="100" width="132" height="10" rx="5" className="post-launch-maintenance__ink" />
        <rect x="68" y="118" width="132" height="62" rx="6" className="post-launch-maintenance__blue" />
        <circle cx="92" cy="149" r="14" fill="#fff" opacity=".22" />
        <rect x="114" y="140" width="62" height="8" rx="4" fill="#fff" />
        <rect x="114" y="154" width="42" height="6" rx="3" fill="#fff" opacity=".6" />
        <rect x="68" y="190" width="100" height="6" rx="3" fill="#7f8bb5" />
        <rect x="68" y="202" width="70" height="6" rx="3" fill="#7f8bb5" />
        <rect className="post-launch-maintenance__button" x="68" y="218" width="54" height="16" rx="8" />

        <g transform="translate(112 226)">
          <g className="post-launch-maintenance__wrench">
            <circle cx="0" cy="0" r="4.5" className="post-launch-maintenance__wrench-ring" />
            <path d="M3 3L15 15" className="post-launch-maintenance__wrench-handle" />
          </g>
        </g>

        <g transform="translate(198 122)">
          <circle className="post-launch-maintenance__alert-ring" r="10" />
          <g className="post-launch-maintenance__alert">
            <circle r="10" className="post-launch-maintenance__red" />
            <rect x="-1.3" y="-6" width="2.6" height="7" rx="1.3" fill="#fff" />
            <circle cy="4.5" r="1.5" fill="#fff" />
          </g>
          <g className="post-launch-maintenance__fixed">
            <circle r="10" className="post-launch-maintenance__mint" />
            <path d="M-4.5 .5l3.2 3.2 5.8-6.4" className="post-launch-maintenance__check" />
          </g>
        </g>

        <circle cx="244" cy="118" r="10" className="post-launch-maintenance__ring" />
        <g className="post-launch-maintenance__support-icon">
          <circle cx="244" cy="118" r="10" className="post-launch-maintenance__mint" />
          <path d="M239 118.5l3.6 3.6 6.4-7" className="post-launch-maintenance__check" />
        </g>
        <text x="262" y="116" className="post-launch-maintenance__label">Support</text>
        <text x="262" y="130" className="post-launch-maintenance__sub">Help when you need it</text>
        <g className="post-launch-maintenance__ready">
          <rect x="352" y="100" width="64" height="18" rx="9" className="post-launch-maintenance__soft" />
          <text x="384" y="112.5" className="post-launch-maintenance__chip">Ready</text>
        </g>

        <circle cx="244" cy="172" r="10" className="post-launch-maintenance__ring" />
        <g className="post-launch-maintenance__fix-ok">
          <circle cx="244" cy="172" r="10" className="post-launch-maintenance__mint" />
          <path d="M239 172.5l3.6 3.6 6.4-7" className="post-launch-maintenance__check" />
        </g>
        <g className="post-launch-maintenance__fix-bad">
          <circle cx="244" cy="172" r="10" className="post-launch-maintenance__red" />
          <rect x="242.7" y="166" width="2.6" height="7" rx="1.3" fill="#fff" />
          <circle cx="244" cy="176.5" r="1.5" fill="#fff" />
        </g>
        <text x="262" y="170" className="post-launch-maintenance__label">Fixes</text>
        <text x="262" y="184" className="post-launch-maintenance__sub">Bugs patched fast</text>
        <g className="post-launch-maintenance__status-clear">
          <rect x="352" y="154" width="64" height="18" rx="9" className="post-launch-maintenance__soft" />
          <text x="384" y="166.5" className="post-launch-maintenance__chip">All clear</text>
        </g>
        <g className="post-launch-maintenance__status-issue">
          <rect x="352" y="154" width="64" height="18" rx="9" className="post-launch-maintenance__red" />
          <text x="384" y="166.5" className="post-launch-maintenance__chip post-launch-maintenance__chip-white">1 issue</text>
        </g>
        <g className="post-launch-maintenance__status-fixed">
          <rect x="352" y="154" width="64" height="18" rx="9" className="post-launch-maintenance__mint" />
          <text x="384" y="166.5" className="post-launch-maintenance__chip post-launch-maintenance__chip-white">Fixed</text>
        </g>

        <circle cx="244" cy="226" r="10" className="post-launch-maintenance__ring" />
        <g className="post-launch-maintenance__updates-icon">
          <circle cx="244" cy="226" r="10" className="post-launch-maintenance__mint" />
          <path d="M239 226.5l3.6 3.6 6.4-7" className="post-launch-maintenance__check" />
        </g>
        <text x="262" y="224" className="post-launch-maintenance__label">Updates</text>
        <text x="262" y="238" className="post-launch-maintenance__sub">Kept current and secure</text>
        <rect x="262" y="246" width="154" height="5" rx="2.5" className="post-launch-maintenance__soft" />
        <rect x="262" y="246" width="154" height="5" rx="2.5" className="post-launch-maintenance__update-bar post-launch-maintenance__blue" />
        <g className="post-launch-maintenance__up-to-date">
          <rect x="342" y="208" width="74" height="18" rx="9" className="post-launch-maintenance__mint" />
          <text x="379" y="220.5" className="post-launch-maintenance__chip post-launch-maintenance__chip-white">Up to date</text>
        </g>

        <rect x="56" y="276" width="368" height="36" rx="10" className="post-launch-maintenance__soft" />
        <text x="70" y="298" className="post-launch-maintenance__uptime-label">Uptime</text>
        <path
          className="post-launch-maintenance__beat"
          pathLength="100"
          d="M116 294H150l5-10 5 16 5-6H200l5-10 5 16 5-6H250l5-10 5 16 5-6H300l5-10 5 16 5-6H350l5-10 5 16 5-6H412"
        />
      </svg>
    </div>
  )
}
