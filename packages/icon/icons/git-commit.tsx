import React from 'react';

const GitCommit = props => (
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
    <circle cx={12} cy={12} r={4} />
    <line x1={1.05} y1={12} x2={7} y2={12} />
    <line x1={17.01} y1={12} x2={22.96} y2={12} />
  </svg>
);

export default GitCommit;
