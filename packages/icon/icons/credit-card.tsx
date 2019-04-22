import React from 'react';

const CreditCard = props => (
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
    <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
    <line x1={1} y1={10} x2={23} y2={10} />
  </svg>
);

export default CreditCard;
