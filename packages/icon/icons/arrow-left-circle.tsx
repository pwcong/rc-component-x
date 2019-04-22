import React from 'react';

const ArrowLeftCircle = props => (
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
    <polyline points="12 8 8 12 12 16" />
    <line x1={16} y1={12} x2={8} y2={12} />
  </svg>
);

export default ArrowLeftCircle;
