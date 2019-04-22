import React from 'react';

const Archive = props => (
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
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x={1} y={3} width={22} height={5} />
    <line x1={10} y1={12} x2={14} y2={12} />
  </svg>
);

export default Archive;
