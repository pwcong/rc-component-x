import React from 'react';

const Film = props => (
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
    <rect x={2} y={2} width={20} height={20} rx={2.18} ry={2.18} />
    <line x1={7} y1={2} x2={7} y2={22} />
    <line x1={17} y1={2} x2={17} y2={22} />
    <line x1={2} y1={12} x2={22} y2={12} />
    <line x1={2} y1={7} x2={7} y2={7} />
    <line x1={2} y1={17} x2={7} y2={17} />
    <line x1={17} y1={17} x2={22} y2={17} />
    <line x1={17} y1={7} x2={22} y2={7} />
  </svg>
);

export default Film;
