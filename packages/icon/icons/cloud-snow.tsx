import React from 'react';

const CloudSnow = props => (
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
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
    <line x1={8} y1={16} x2={8} y2={16} />
    <line x1={8} y1={20} x2={8} y2={20} />
    <line x1={12} y1={18} x2={12} y2={18} />
    <line x1={12} y1={22} x2={12} y2={22} />
    <line x1={16} y1={16} x2={16} y2={16} />
    <line x1={16} y1={20} x2={16} y2={20} />
  </svg>
);

export default CloudSnow;
