export function EvidenceArt() {
  return (
    <svg viewBox="0 0 400 440" aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="trace-paper" x2="1" y2="1">
          <stop stopColor="#263b5e" />
          <stop offset="1" stopColor="#0e1728" />
        </linearGradient>
      </defs>
      <path
        d="M82 80h184l55 55v224H82z"
        fill="url(#trace-paper)"
        stroke="#5B7BA6"
      />
      <path d="M266 80v55h55" stroke="#7C95BB" />
      <path
        d="M114 166h146m-146 23h106m-106 25h148m-148 25h75"
        stroke="#7C95BB"
        strokeOpacity=".55"
      />
      <circle
        cx="244"
        cy="289"
        r="60"
        fill="#0a1020"
        fillOpacity=".6"
        stroke="#EAF2FF"
        strokeWidth="5"
      />
      <circle cx="244" cy="289" r="48" stroke="#5B7BA6" strokeWidth="1" />
      <path d="m286 331 45 45" stroke="#EAF2FF" strokeWidth="14" />
      <path d="m219 287 16 16 33-37" stroke="#FFB224" strokeWidth="5" />
      <path d="M35 115h28M337 196h32M145 33v27M133 395v23" stroke="#FFB224" />
      <circle cx="35" cy="115" r="3" fill="#FFB224" />
      <circle cx="369" cy="196" r="3" fill="#FFB224" />
    </svg>
  );
}
