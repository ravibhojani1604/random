import React from "react";

const Todos = React.memo(({ handleClick }) => {
  console.log('Rendering Child');
  return <button onClick={handleClick}>Click Me</button>;
});

export default (Todos);