import React from 'react';

const ZapOff = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="12.41 6.75 13 2 10.57 4.92" />
    <polyline points="18.57 12.91 21 10 15.66 10" />
    <polyline points="8 8 3 14 12 14 11 22 16 16" />
    <line x1={1} y1={1} x2={23} y2={23} />
  </svg>
);

export default ZapOff;
