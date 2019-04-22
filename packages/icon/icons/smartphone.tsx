import React from 'react';

const Smartphone = props => (
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
    <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
    <line x1={12} y1={18} x2={12} y2={18} />
  </svg>
);

export default Smartphone;
