import React from 'react';

const CornerLeftDown = props => (
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
    <polyline points="14 15 9 20 4 15" />
    <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
  </svg>
);

export default CornerLeftDown;
