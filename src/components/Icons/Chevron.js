import React from 'react';

function Chevron({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="19" height="12">
      <path fill="#666666" d="M19 2.6L16.5.1l-7 7-7-7L.1 2.6l9.4 9.5z" />
    </svg>
  );
}

export default Chevron;
