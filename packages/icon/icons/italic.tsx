import React from 'react';

const Italic = props => (
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
    <line x1={19} y1={4} x2={10} y2={4} />
    <line x1={14} y1={20} x2={5} y2={20} />
    <line x1={15} y1={4} x2={9} y2={20} />
  </svg>
);

export default Italic;
