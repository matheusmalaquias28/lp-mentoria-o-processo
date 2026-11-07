import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} strokeWidth={2.2} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} strokeWidth={2} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Check = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} strokeWidth={2.4} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const Cross = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} strokeWidth={2.4} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Plus = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} strokeWidth={2} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Play = (p: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.6-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" fill="currentColor" />
  </svg>
);

export const Camera = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} strokeWidth={1.5} {...p}>
    <path d="M4 8h3l1.5-2.5h7L17 8h3v11H4z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export const Shield = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M12 3 5 6v5.5c0 4.3 3 8 7 9.5 4-1.5 7-5.2 7-9.5V6z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </svg>
);

export const InfinityIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M7.5 15.5c-2 0-3.5-1.6-3.5-3.5S5.5 8.5 7.5 8.5c3.5 0 5.5 7 9 7 2 0 3.5-1.6 3.5-3.5S18.5 8.5 16.5 8.5c-3.5 0-5.5 7-9 7Z" />
  </svg>
);

export const Lock = (p: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...p}>
    <rect x="5" y="10.5" width="14" height="10" rx="2" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
  </svg>
);

/* ícones das personas (Pra quem é) */
export const personaIcons = {
  start: (p: P) => (
    <svg viewBox="0 0 24 24" width="26" height="26" {...base} strokeWidth={1.5} {...p}>
      <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
    </svg>
  ),
  badge: (p: P) => (
    <svg viewBox="0 0 24 24" width="26" height="26" {...base} strokeWidth={1.5} {...p}>
      <rect x="4" y="6" width="16" height="13" rx="2" />
      <path d="M9 6V4h6v2M4 12h16" />
    </svg>
  ),
  home: (p: P) => (
    <svg viewBox="0 0 24 24" width="26" height="26" {...base} strokeWidth={1.5} {...p}>
      <path d="M4 11 12 4l8 7M6 9.5V20h12V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  ),
  eye: (p: P) => (
    <svg viewBox="0 0 24 24" width="26" height="26" {...base} strokeWidth={1.5} {...p}>
      <path d="M3 12s3.5-6 9-6c2 0 3.7.8 5 1.8M21 12s-3.5 6-9 6c-2 0-3.7-.8-5-1.8" />
      <path d="M4 20 20 4" />
    </svg>
  ),
  retry: (p: P) => (
    <svg viewBox="0 0 24 24" width="26" height="26" {...base} strokeWidth={1.5} {...p}>
      <path d="M20 11a8 8 0 1 0-2.3 5.7" />
      <path d="M20 4v7h-7" />
    </svg>
  ),
  people: (p: P) => (
    <svg viewBox="0 0 24 24" width="26" height="26" {...base} strokeWidth={1.5} {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.2c2.4.2 4 1.9 4.5 4.8" />
    </svg>
  ),
};
