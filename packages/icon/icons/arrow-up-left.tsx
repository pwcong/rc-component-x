import React from 'react';

const ArrowUpLeft = props => (
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
    <line x1={17} y1={17} x2={7} y2={7} />
    <polyline points="7 17 7 7 17 7" />
  </svg>
);

export default ArrowUpLeft;
