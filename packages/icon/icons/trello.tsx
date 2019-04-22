import React from 'react';

const Trello = props => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <rect x={7} y={7} width={3} height={9} />
    <rect x={14} y={7} width={3} height={5} />
  </svg>
);

export default Trello;
