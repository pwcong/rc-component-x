import React from 'react';

const ArrowUpCircle = props => (
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
    <circle cx={12} cy={12} r={10} />
    <polyline points="16 12 12 8 8 12" />
    <line x1={12} y1={16} x2={12} y2={8} />
  </svg>
);

export default ArrowUpCircle;
