import React from 'react';

const Slash = props => (
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
    <line x1={4.93} y1={4.93} x2={19.07} y2={19.07} />
  </svg>
);

export default Slash;
