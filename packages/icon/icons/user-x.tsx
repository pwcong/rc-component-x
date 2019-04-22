import React from 'react';

const UserX = props => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx={8.5} cy={7} r={4} />
    <line x1={18} y1={8} x2={23} y2={13} />
    <line x1={23} y1={8} x2={18} y2={13} />
  </svg>
);

export default UserX;
