import React from 'react';

const ToggleRight = props => (
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
    <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
    <circle cx={16} cy={12} r={3} />
  </svg>
);

export default ToggleRight;
