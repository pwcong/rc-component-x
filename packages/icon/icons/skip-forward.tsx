import React from 'react';

const SkipForward = props => (
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
    <polygon points="5 4 15 12 5 20 5 4" />
    <line x1={19} y1={5} x2={19} y2={19} />
  </svg>
);

export default SkipForward;
