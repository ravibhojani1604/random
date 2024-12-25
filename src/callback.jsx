import React, { useCallback, useState } from 'react';
import Todos from './todos';
import { Button } from 'antd';

const Callback = () => {
  const [count, setCount] = useState(0);

  // handleClick function is re-created on every render
  const handleClick = useCallback(() => {
    console.log('Button Clicked');
  },[]);

  return (
    <div>
      <Todos handleClick={handleClick} />
      <Button type="primary">Button</Button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Callback;
