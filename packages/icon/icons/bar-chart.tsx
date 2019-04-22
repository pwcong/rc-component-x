import React from 'react';

const BarChart = props => (
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
    <line x1={12} y1={20} x2={12} y2={10} />
    <line x1={18} y1={20} x2={18} y2={4} />
    <line x1={6} y1={20} x2={6} y2={16} />
  </svg>
);

export default BarChart;
