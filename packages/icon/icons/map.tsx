import React from 'react';

const Map = props => (
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
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1={8} y1={2} x2={8} y2={18} />
    <line x1={16} y1={6} x2={16} y2={22} />
  </svg>
);

export default Map;
