import React from 'react';

const Shuffle = props => (
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
    <polyline points="16 3 21 3 21 8" />
    <line x1={4} y1={20} x2={21} y2={3} />
    <polyline points="21 16 21 21 16 21" />
    <line x1={15} y1={15} x2={21} y2={21} />
    <line x1={4} y1={4} x2={9} y2={9} />
  </svg>
);

export default Shuffle;
