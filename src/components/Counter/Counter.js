import React from 'react';
import Button from './Button';

function Counter({ count, increaseCount }) {
  return (
    <>
      <p>Count: {count}</p>
      <Button onClick={increaseCount}>Increase count</Button>
    </>
  );
}

export default Counter;
