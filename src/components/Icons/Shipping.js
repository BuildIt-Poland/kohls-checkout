import React from 'react';

function Shipping({ fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="27">
      <path
        fill={fill}
        d="M35.631 22.095a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm-21.08 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"
      />
      <path
        fill={fill}
        d="M4.554 22.039H.18V.491h28.384v3.377h7.978l7.255 18.171h-7.169c-.03-3.007-2.484-5.444-5.497-5.444s-5.467 2.437-5.497 5.444H15.548c-.03-3.007-2.484-5.444-5.497-5.444s-5.467 2.437-5.497 5.444zm26.577-4.444a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm-21.08 0a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"
      />
    </svg>
  );
}

export default Shipping;
