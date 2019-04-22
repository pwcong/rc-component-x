import React from 'react';

const Hash = props => (
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
    <line x1={4} y1={9} x2={20} y2={9} />
    <line x1={4} y1={15} x2={20} y2={15} />
    <line x1={10} y1={3} x2={8} y2={21} />
    <line x1={16} y1={3} x2={14} y2={21} />
  </svg>
);

export default Hash;
