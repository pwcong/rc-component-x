import React from 'react';

const AlignJustify = props => (
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
    <line x1={21} y1={10} x2={3} y2={10} />
    <line x1={21} y1={6} x2={3} y2={6} />
    <line x1={21} y1={14} x2={3} y2={14} />
    <line x1={21} y1={18} x2={3} y2={18} />
  </svg>
);

export default AlignJustify;
