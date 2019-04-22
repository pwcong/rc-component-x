import React from 'react';

const Scissors = props => (
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
    <circle cx={6} cy={6} r={3} />
    <circle cx={6} cy={18} r={3} />
    <line x1={20} y1={4} x2={8.12} y2={15.88} />
    <line x1={14.47} y1={14.48} x2={20} y2={20} />
    <line x1={8.12} y1={8.12} x2={12} y2={12} />
  </svg>
);

export default Scissors;
