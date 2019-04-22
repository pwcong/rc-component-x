import React from 'react';

const AlertOctagon = props => (
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
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    <line x1={12} y1={8} x2={12} y2={12} />
    <line x1={12} y1={16} x2={12} y2={16} />
  </svg>
);

export default AlertOctagon;
