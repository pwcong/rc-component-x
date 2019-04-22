import React from 'react';

const Chrome = props => (
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
    <circle cx={12} cy={12} r={4} />
    <line x1={21.17} y1={8} x2={12} y2={8} />
    <line x1={3.95} y1={6.06} x2={8.54} y2={14} />
    <line x1={10.88} y1={21.94} x2={15.46} y2={14} />
  </svg>
);

export default Chrome;
