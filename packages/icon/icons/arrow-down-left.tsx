import React from 'react';

const ArrowDownLeft = props => (
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
    <line x1={17} y1={7} x2={7} y2={17} />
    <polyline points="17 17 7 17 7 7" />
  </svg>
);

export default ArrowDownLeft;
