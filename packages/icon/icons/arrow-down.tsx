import React from 'react';

const ArrowDown = props => (
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
    <line x1={12} y1={5} x2={12} y2={19} />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

export default ArrowDown;
