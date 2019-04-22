import React from 'react';

const XSquare = props => (
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
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <line x1={9} y1={9} x2={15} y2={15} />
    <line x1={15} y1={9} x2={9} y2={15} />
  </svg>
);

export default XSquare;
