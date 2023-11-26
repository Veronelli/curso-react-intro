import React from "react";

function TodoHeader({ children, loading }) {
  const childElements = React.Children.toArray(children);
  return <header>{childElements.map(elem=>React.cloneElement(elem,{loading}))}</header>;
}

export { TodoHeader };
