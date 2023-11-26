import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrapperComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false)
    return <WrappedComponent show={storageChange} toggleShow={setStorageChange} {...props} />;
  };
}

export { withStorageListener };
