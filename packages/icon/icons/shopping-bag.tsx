import React from 'react';

const ShoppingBag = props => (
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
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1={3} y1={6} x2={21} y2={6} />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default ShoppingBag;
