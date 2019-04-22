import React from 'react';

const Tv = props => (
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
    <rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
    <polyline points="17 2 12 7 7 2" />
  </svg>
);

export default Tv;
