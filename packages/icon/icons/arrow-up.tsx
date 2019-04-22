import React from 'react';

const ArrowUp = props => (
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
    <line x1={12} y1={19} x2={12} y2={5} />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export default ArrowUp;
