import React from 'react';

const PauseCircle = props => (
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
    <line x1={10} y1={15} x2={10} y2={9} />
    <line x1={14} y1={15} x2={14} y2={9} />
  </svg>
);

export default PauseCircle;
