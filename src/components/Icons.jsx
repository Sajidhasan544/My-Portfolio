import React from 'react';

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
};

const wrap = (path) =>
  function Icon({ className = 'h-5 w-5' }) {
    return (
      <svg {...baseProps} className={className} aria-hidden="true">
        {path}
      </svg>
    );
  };

export const SparkIcon = wrap(
  <>
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
    <path d="M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16z" />
  </>
);

export const ArrowUpRightIcon = wrap(<path d="M7 17L17 7M9 7h8v8" />);
export const MailIcon = wrap(<><path d="M4 6h16v12H4z" /><path d="M4 8l8 6 8-6" /></>);
export const PhoneIcon = wrap(<path d="M8.5 4.5h3l1 4-2 2c1.3 2.4 3.1 4.2 5.5 5.5l2-2 4 1v3c0 1.1-.9 2-2 2C10.3 20.5 3.5 13.7 3.5 5.5c0-1.1.9-2 2-2h3z" />);
export const MapPinIcon = wrap(<><path d="M12 21s6-5.2 6-11a6 6 0 10-12 0c0 5.8 6 11 6 11z" /><path d="M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" /></>);
export const BriefcaseIcon = wrap(<><path d="M3 8h18v11H3z" /><path d="M8 8V6.5A1.5 1.5 0 019.5 5h5A1.5 1.5 0 0116 6.5V8" /><path d="M3 12h18" /></>);
export const CodeIcon = wrap(<><path d="M8 8l-4 4 4 4" /><path d="M16 8l4 4-4 4" /><path d="M14 5l-4 14" /></>);
export const LayersIcon = wrap(<><path d="M12 4l8 4-8 4-8-4 8-4z" /><path d="M4 12l8 4 8-4" /><path d="M4 16l8 4 8-4" /></>);
export const ServerIcon = wrap(<><rect x="4" y="4" width="16" height="6" rx="2" /><rect x="4" y="14" width="16" height="6" rx="2" /><path d="M8 7h.01M8 17h.01" /></>);
export const PaletteIcon = wrap(<path d="M12 4a8 8 0 100 16h1a2 2 0 002-2 2 2 0 012-2h1a4 4 0 000-8 8 8 0 00-6-4zM7.5 12h.01M9 8.5h.01M15 9h.01" />);
export const RocketIcon = wrap(<><path d="M14 4c3 1 5 3 6 6-3.5.3-6.7 2.8-9 7-1.1-2.1-2.3-3.3-4.4-4.4 4.2-2.3 6.7-5.5 7.4-8.6z" /><path d="M6 14l-2 6 6-2" /></>);
export const CheckIcon = wrap(<path d="M5 12.5l4.2 4.2L19 7" />);
export const GithubIcon = wrap(<path d="M9 18c-4 1.3-4-2-6-2m12 4v-3.3a2.9 2.9 0 00-.8-2.1c2.6-.3 5.3-1.3 5.3-5.8A4.5 4.5 0 0018.2 6 4.2 4.2 0 0018 3s-1-.3-3.3 1.3a11.6 11.6 0 00-6 0C6.4 2.7 5.4 3 5.4 3A4.2 4.2 0 005.2 6 4.5 4.5 0 004 8.8c0 4.4 2.7 5.4 5.3 5.8a2.6 2.6 0 00-.8 2V20" />);
export const LinkedinIcon = wrap(<><path d="M8 10v10" /><path d="M8 6h.01" /><path d="M12 20V10" /><path d="M12 14a4 4 0 018 0v6" /></>);
export const FacebookIcon = wrap(<path d="M14 8h3V4h-3a5 5 0 00-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 011-1z" />);
export const FilterIcon = wrap(<path d="M4 6h16M7 12h10M10 18h4" />);
